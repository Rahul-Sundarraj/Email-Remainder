import React from 'react'
import style from './MailCard.module.css'
import Icon from './Icon'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

function formatDateForInput(date) {
  const d = new Date(date);
  
  // Format date to YYYY-MM-DD
  const formattedDate = d.toISOString().slice(0, 10);

  // Get local time components
  let hours = d.getHours();
  let minutes = d.getMinutes();
  
  // Convert to 12-hour format
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Format hh:mm AM/PM
  const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

  return [formattedDate, formattedTime];
}


function MailCard({data}) {

    const navigate = useNavigate()
    
    const handleEdit = ()=>{
        navigate('/editremainder' , {state : {data : data}})
    }

    const handelDelete = async()=>{

      console.log(data)
      await api
        .delete(`/deleteremainder/${data._id}`)
        .then(res => {console.log(res)})
        .catch(e => {console.log(e)})
    }

    const name = data.isSent ? "check_circle" : "schedule";
    const color = data.isSent ? "limegreen" : "blue";

    return (
      <div className={style.mailCard}>
          <Icon name={name} color={color} />
          <div className={style.bodyContianer}>
            <h3 className={style.title}>{data.title}</h3>
            <div className={style.body}>
                <span className={style.mailBody}>{`To : ${data.to} - ${formatDateForInput(data.time)[0]} -  ${formatDateForInput(data.time)[1]}`}</span> 
            </div>
          </div>
          { !data.isSent ? <div className={style.buttons}>
            <button onClick={handleEdit} ><Icon name='edit' color='grey'/></button>
            <button onClick={handelDelete}><Icon name='delete' color='red' /></button>
          </div> : null }
      </div>
    )
}

export default MailCard