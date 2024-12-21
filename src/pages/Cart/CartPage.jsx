import React from 'react'
import BasketProduct from '../../components/BasketProduct/BasketProduct'
import style from './CartPage.module.css'

const CartPage = ({carts, changeCart}) => {
  return (
    <div>
      <BasketProduct carts={carts} changeCart={changeCart}/>
    </div>
  )
}

export default CartPage