import React, { useEffect, useState , useMemo} from 'react'
import style from './Mails.module.css'
import MailCard from './MailCard'

import Icon from './Icon'
import api from '../api/axios'
function Mails() {


    const [isSent , setIsSent ] = useState(false)

    const [sentMails , setSentMails] = useState([])
    const [upcomingMails , setUpcomingMails] = useState([]);

    const [searchText , setSearchText ] = useState("")

    const handelOnChange = (e)=>{
        setSearchText(e.target.value)
        
    }

    const handelUpcomingClick = () => {
        setIsSent(false)
    }

    const handleSentButton = () =>{
        setIsSent(true)
    }

    useEffect(()=>{

        const getSentMails = async ()=>{
            await api
                .post('/mails' , {
                    from : 'fftgosr@gmail.com',
                    isSent : true
                })
                .then(res => {setSentMails(res.data)})
                .catch(e =>{console.log(e)})
        }

        getSentMails()

        const getUpcomingMails = async ()=>{
            await api
                .post('/mails' , {
                    from : 'fftgosr@gmail.com',
                    isSent:false
                })
                .then(res => { setUpcomingMails(res.data) })
                .catch(e => {console.log(e)})
        }
        getUpcomingMails()
    },[])

    


    const filteredMails = useMemo(() => {
        const mails = isSent ? sentMails : upcomingMails;
        return mails.filter(item => 
            item.title.toLowerCase().includes(searchText.toLowerCase())
        )
    }, [isSent, searchText, sentMails, upcomingMails])

  return (
    <div className={style.container}>
        <div className={style.header}>
            <div className={style.headerLeft}>
                <div className={style.buttonGroup}>
                    <button className={style.upcomingButton}
                     style={{backgroundColor : (!isSent) ? "#007bff" : "rgb(232, 232, 232)",
                        "color": (!isSent) ? "#ffffff" : "rgba(0,0,0,0.8)"
                      }}
                     onClick={handelUpcomingClick}>Upcoming</button>
                    <button className={style.sentButton}
                     style={{backgroundColor : (isSent) ? "#007bff" : "rgb(232, 232, 232)" ,
                        "color": (isSent) ? "#ffffff" : "rgba(0,0,0,0.8)"
                     }}
                     onClick={handleSentButton} >Sent</button>
                </div>
                <div className={style.searchContainer}> 
                    <input className={style.searchInput} type="text"
                     onChange={handelOnChange} placeholder="Search mails..." 
                     value ={searchText} />
                    <svg className={style.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <image href='/src/assets/search.svg' width="24" height="24"/>
                    </svg>
                </div>
                </div>
                
                    {isSent ? (
                        <div className={style.titleCointainer}>
                            <Icon name="check_circle" color="limegreen" />
                            <h2 className={style.headerTitle}> {filteredMails.length} Sent</h2>
                        </div>
                        ) : (
                    <div className={style.titleCointainer}>
                        <Icon name="notifications" color="blue" />
                        <h2 className={style.headerTitle}> {filteredMails.length} Upcoming</h2>
                    </div>
                    )}
                

        </div>

        <div className={style.mailContainer}>
            <ul className={style.listContainer}>
                {


                    filteredMails.map((item , index) =>{
                        return <li key={index}><MailCard 
                            data = {item}
                        /></li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Mails