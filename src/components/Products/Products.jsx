import React from 'react'
import style from './Products.module.css'
import Product from '../Product/Product'
import Loading from '../Loading/Loading'

const Products = ({ products, addToCart, isFetching }) => {
  return (
    <div className={style.products}>
      {
        isFetching ? <Loading /> :
          products.map((product) => {
            return <Product key={product.id} product={product} addToCart={addToCart} />
          })
      }
    </div>
  )
}

export default Products