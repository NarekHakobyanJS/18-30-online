import React, { useState } from 'react'
import style from './BasketProduct.module.css'
import Basket from './Basket'
import OrederForm from '../OrderForm/OrederForm'

function BasketProduct({carts, changeCart, totalPrice, removeItemToCart}) {
  return (
    <div>
      {
       carts.map((product) => {
          return <Basket removeItemToCart={removeItemToCart} product={product} changeCart={changeCart} key={product.id}/>
        })
      }
      {
        totalPrice ?  <h2>TotalPrice ... {totalPrice}$ </h2>: ''
      }
     <OrederForm />
    </div>
  )
}

export default BasketProduct