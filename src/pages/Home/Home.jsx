import React from 'react'
import style from './Home.module.css'
import Products from '../../components/Products/Products'

const Home = ({products}) => {
  return (
    <div>
        <div>
            <Products products={products}/>
        </div>
    </div>
  )
}

export default Home