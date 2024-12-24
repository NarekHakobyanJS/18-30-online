import React from 'react'
import BasketProduct from '../../components/BasketProduct/BasketProduct'
import style from './CartPage.module.css'

const CartPage = ({carts, changeCart, totalPrice}) => {
  return (
    <div>
      <BasketProduct carts={carts} changeCart={changeCart} totalPrice={totalPrice}/>
    </div>
  )
}

export default CartPage