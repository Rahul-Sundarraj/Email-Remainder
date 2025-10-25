import React from 'react'
import style from './Icon.module.css'

function Icon({name , color , size , className}) {
  return (
    <span className={`${style.icon} ${className}`} style={{
        color : color || "#000",
        fontSize : size || "22px"
    }}>
      {name}
    </span>
  )
}

export default Icon