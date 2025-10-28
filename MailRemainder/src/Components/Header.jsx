import React from 'react'
import style from './Header.module.css'

function Header() {
  return (
    <header className={style.header}>
        <div className={style.logoContainer}>
            <svg className={style.logo} width={"30px"} height={"30px"} fill="Blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"></path>
            </svg>
            <h1 className={style.title}>Mail Remainder</h1>
        </div>
    </header>
  )
}

export default Header
