import React, { useState } from 'react'
import style from './BasketProduct.module.css'
import Basket from './Basket'

function BasketProduct({carts, changeCart}) {
  return (
    <div>
      {
       carts.map((product) => {
          return <Basket product={product} changeCart={changeCart} key={product.id}/>
        })
      }
    </div>
  )
}

export default BasketProduct