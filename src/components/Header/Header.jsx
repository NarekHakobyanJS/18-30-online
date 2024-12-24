import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaUserSecret } from "react-icons/fa";


const Header = ({ carts }) => {
  return (
    <header className={style.header}>
      <div className={style.logoBlock}>
        <NavLink to='/'>
          <img src={logo} />
        </NavLink>

      </div>
      <nav>

      </nav>
      <div className={style.basketBlock}>
        <NavLink to='/cart'>
          <FaShoppingCart />
          <sup>{carts.length}</sup>
        </NavLink>
        <NavLink to='/login'>
        <FaUserSecret />
        </NavLink>
       
      </div>
    </header>
  )
}

export default Header