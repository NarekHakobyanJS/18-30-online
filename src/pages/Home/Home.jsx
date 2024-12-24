import React from 'react'
import style from './Home.module.css'
import Products from '../../components/Products/Products'

const Home = ({products, addToCart, isFetching}) => {

  
  return (
    <div>
        <div>
            <Products isFetching={isFetching} products={products} addToCart={addToCart}/>
        </div>
    </div>
  )
}

export default Home