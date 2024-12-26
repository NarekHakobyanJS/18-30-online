import style from './BasketProduct.module.css'
import React, { useState } from 'react'

const Basket = ({product,  changeCart, removeItemToCart}) => {
    let [count, setCount] = useState(product.count)

    const plusCount = () => {
        setCount(++count)
        changeCart(count, product.id)
    }

    const minusCount = () => {
        if(count > 1){
            setCount(--count)
            changeCart(count, product.id)
        }
    }
    
    return (
        <div className={style.productWrapper}>
            <img width={120} src={product.image} />
            <div className={style.productInfo}>
                <h1>{product.title}</h1>
                <div>
                    <button onClick={minusCount}>-</button>
                    <span>{count}</span>
                    <button onClick={plusCount}>+</button>
                </div>
                <span>{`Total: ${product.cartPrice}$`}</span>
            </div>
            <button onClick={() => removeItemToCart(product.id)} className={style.remove}>X</button>
        </div>
    )
}

export default Basket