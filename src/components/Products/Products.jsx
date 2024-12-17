import React from 'react'
import style from './Products.module.css'
import Product from '../Product/Product'

const Products = ({products}) => {
  return (
    <div>
        {
            products.map((product) => {
                return <Product key={product.id} product={product} />
            })
        }
    </div>
  )
}

export default Products