import React from 'react'
import style from './CartPage.module.css'

const CartPage = ({carts}) => {
  return (
    <div>
      {
        carts.map((cart) => {
          return <>
          <h1>{cart.title}</h1>
          <b>{cart.count}</b>
          <h1>{cart.cartPrice}</h1>
          </>
        })
      }
    </div>
  )
}

export default CartPage