import React , {useState} from 'react'
import style from './EditRemainder.module.css'
import Icon from '../../Components/Icon'
import { useNavigate ,useLocation } from 'react-router-dom';
import axios from 'axios';

function formatDateForInput(date) {
  const d = new Date(date);
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}




function EditRemainder() {

    const navigate = useNavigate()

    const location = useLocation();

    const data = location.state.data;

    const [formData , setFormData] = useState({
        ...data,
        time : formatDateForInput(data.time)
    })

    function handelOnChange (e  ){
        setFormData({
            ...formData , 
            [e.target.name] : e.target.value
        })

    }

    function handleOnSubmit(e){
        e.preventDefault();
        console.log(formData)

        const editData = async () =>{
            await axios
            .post('https://email-remainder.onrender.com/editremainder' ,{
                ...formData,
                time : new Date(formData.time)
            }).then(res => {console.log(res)})
            .catch(e => {console.log(`Error .....${e}`)})
        }
        navigate('/' , {state : {isSend : true , message : 'Edited'}})

        editData()
    }



  return (
    <main className={style.mainContainer}>
        <h2 className={style.title}>Edit Remainder</h2>

        <form onSubmit={handleOnSubmit} className={style.formContainer} method='get'>
            <label htmlFor='title'>Title</label>
            <div >
                <Icon name='title' color="grey" className ={style.icons} />
                <input onChange={handelOnChange} className={style.emailInput}
                value={formData.title} type="text" id='title' name='title'
            placeholder='Your Title'/>
            </div>

            <label htmlFor='mail'>Email Address</label>
            <div >
                <Icon name='mail' color="grey" className ={style.icons} />
                <input onChange={handelOnChange} className={style.emailInput}
                value={formData.to} type="email" id='mail' name='mail'
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

export default EditRemainder