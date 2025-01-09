import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../../App'
import Loading from '../../components/Loading/Loading'
import ByeToCart from '../../components/ByeToCart/ByeToCart'
import { MyContext } from '../../context'

const ProductPage = () => {

  const [product, setProduct] = useState(null)
  const {id} = useParams()
  const {isFetching, loading, addToCart} = useContext(MyContext)
  
  useEffect(() => {
    loading(true)
    instance.get(`/products/${id}`)
      .then((res) => {
        setProduct({...res.data, count : 1, cartPrice : res.data.price})
        loading(false)
      })
  }, [id])
  return (
    <div>
      {
        isFetching ? <Loading /> :  <>
          <h4>{product?.title}</h4>
          <img width={200} src={product?.image} />
          <ByeToCart product={product} addToCart={addToCart}/>
        </>
      }
  
    </div>
  )
}

export default ProductPage