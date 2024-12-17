import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className={style.header}>
        <div className={style.logoBlock}>
            <img src={logo} />
        </div>
        <nav>

        </nav>
        <div className={style.basketBlock}>

        </div>
    </header>
  )
}

export default Header