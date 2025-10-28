import React from 'react'
import style from './Home.module.css'
import Mails from '../../Components/Mails'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";


function Home() {

  const location = useLocation();

  console.log(location.state)

  return (
    <main className={style.main}>
        <div className={style.titleContainer}>
            <h1 className={style.title}>Mail Remainder System</h1>
            <p className={style.description}>Stay organized — schedule emails that send themselves.</p>
        </div>

        <div className={style.btnContainer}>
          <Link  className={style.btn} href='/createremainder'>Create Remainder</Link >

        </div>
        <Mails />
    </main>
  )
}

export default Home