import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logoBlock}>
        <img src={logo} />
      </div>
      <nav>

      </nav>
      <div className={style.basketBlock}>
        <NavLink to='/cart'>
          <FaShoppingCart />
        </NavLink>

      </div>
    </header>
  )
}

export default Header