import React from 'react'
import style from './Product.module.css'

const Product = ({product}) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <img width={200} src={product.image} />
      <button>buy</button>
    </div>
  )
}

export default Product