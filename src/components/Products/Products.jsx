import React from 'react'
import style from './Products.module.css'
import Product from '../Product/Product'

const Products = ({products, addToCart}) => {
  return (
    <div className={style.products}>
        {
            products.map((product) => {
                return <Product key={product.id} product={product} addToCart={addToCart} />
            })
        }
    </div>
  )
}

export default Products