import React, { useContext } from 'react'
import style from './Products.module.css'
import Product from '../Product/Product'
import Loading from '../Loading/Loading'
import { MyContext } from '../../context'

const Products = () => {
  const { products, addToCart, isFetching } = useContext(MyContext)
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