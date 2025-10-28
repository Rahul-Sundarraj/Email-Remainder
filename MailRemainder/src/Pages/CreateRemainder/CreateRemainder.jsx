import React , {useState} from 'react'
import style from './CreateRemainder.module.css'
import Icon from '../../Components/Icon'
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios'


function CreateRemainder() {

    const navigate = useNavigate()

    const [formData , setFormData] = useState({
        from:"fftgosr@gmail.com",
        title:"",
        to:"",
        subject:"",
        message:"",
        time:""
    })

    function handelOnChange (e){
        setFormData({
            ...formData , 
            [e.target.name] : e.target.value
        })

    }

    function handleOnSubmit(e){
        e.preventDefault();
        console.log(formData)

        const addData = async () =>{
            await api
            .post('/createremainder' ,{
                ...formData,
                time : new Date(formData.time)
            }).then(res => {console.log(res)})
            .catch(e => {console.log(`Error .....${e}`)})
        }
        navigate('/' , {state : {isSend : true}})

        addData()
        
    }
  return (
    <main className={style.mainContainer}>
        <h2 className={style.title}>Schedule a Remainder</h2>

        <form onSubmit={handleOnSubmit} className={style.formContainer} method='get'>
            <label htmlFor='title'>Title</label>
            <div >
                <Icon name='title' color="grey" className ={style.icons} />
                <input onChange={handelOnChange} className={style.emailInput}
                value={formData.title} type="text" id='title' name='title'
            placeholder='Your Title'/>
            </div>

            <label htmlFor='to'>Email Address</label>
            <div >
                <Icon name='mail' color="grey" className ={style.icons} />
                <input onChange={handelOnChange} className={style.emailInput}
                value={formData.mail} type="email" id='to' name='to'
            placeholder='recipient@example.com'/>
            </div>
            
            <label htmlFor='subject'>Subject</label>
            <div>
                <Icon name='subject' color="grey" className ={style.icons} />
                <input onChange={handelOnChange} className={style.subjectInput} 
                value={formData.subject} type='text' id='subject' name='subject' placeholder='Your email subject' />
            </div>
            <label htmlFor='message'>Message</label>
            <textarea onChange={handelOnChange} value={formData.message} 
            className={style.messageInput} id='message' name='message' 
            placeholder='Write your reminder message here...'></textarea>

            <label htmlFor='time'>Date & Time</label>
            <div>
                <Icon name='calendar_today' color="grey" className ={style.icons} />
                <input name ='time' id='time' onChange={handelOnChange} type='datetime-local'
                value={formData.time} className={style.dateTimeInput} />

            </div>

            <button type='submit' className={style.submitButton}>Schedule Remainder</button>
        </form>
    </main>
  )
}

export default CreateRemainder