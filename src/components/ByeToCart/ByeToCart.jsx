import React from 'react'
import './ByeToCart.css'


const ByeToCart = ({product, addToCart, bg}) => {
  return (
    <button className='button' onClick={() => addToCart(product)}>Add to Cart</button>
  )
}

export default ByeToCart