import React from 'react'
import BasketProduct from '../../components/BasketProduct/BasketProduct'
import {Navigate} from 'react-router-dom'
import style from './CartPage.module.css'

const CartPage = ({carts, changeCart, totalPrice, removeItemToCart }) => {
  return (
    <div>
      {
        carts.length === 0
        ? 
        <Navigate to='/'/>
        :
        <BasketProduct removeItemToCart={removeItemToCart} carts={carts} changeCart={changeCart} totalPrice={totalPrice}/>
      }

    </div>
  )
}

export default CartPage