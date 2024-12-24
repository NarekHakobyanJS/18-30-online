import React from 'react'
import style from './Product.module.css'
import { NavLink } from 'react-router-dom'
import ByeToCart from '../ByeToCart/ByeToCart'


const Product = ({product, addToCart}) => {
  
  const titleLength = 16
  return (
    <div className={style.productContainer}>
      <div className={style.productInfo}>
        <h1>{product.title.length >= titleLength ? `${product.title.slice(0, titleLength)}...` : product.title}</h1>
        <NavLink to={`${product.id}`}>
          <img src={product.image} alt={product.title} />
        </NavLink>
        <span className={style.price}>{product.price}$</span>
        <p>{product.description}</p>
      </div>
      <ByeToCart product={product} addToCart={addToCart}/>
      {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
    </div>
  )
}

export default Product