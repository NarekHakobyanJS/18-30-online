import React, { useContext } from 'react'
import BasketProduct from '../../components/BasketProduct/BasketProduct'
import {Navigate} from 'react-router-dom'
import style from './CartPage.module.css'
import { MyContext } from '../../context'

const CartPage = () => {
  const {cartss} = useContext(MyContext)
  return (
    <div>
      {
        cartss.length === 0
        ? 
        <Navigate to='/'/>
        :
        <BasketProduct />
      }

    </div>
  )
}

export default CartPage