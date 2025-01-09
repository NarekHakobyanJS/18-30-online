import React, { useContext} from 'react'
import style from './BasketProduct.module.css'
import Basket from './Basket'
import OrederForm from '../OrderForm/OrederForm'
import { MyContext } from '../../context'

function BasketProduct() {

  const { cartss, changeCart, totalPrice, removeItemToCart } = useContext(MyContext)



  return (
    <div>
      {
        cartss.map((product) => {
          return <Basket
            removeItemToCart={removeItemToCart}
            product={product}
            changeCart={changeCart}
            key={product.id} />
        })
      }
      {
        totalPrice ? <h2>TotalPrice ... {totalPrice}$ </h2> : ''
      }
      <OrederForm />
    </div>
  )
}

export default BasketProduct