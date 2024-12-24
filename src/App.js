import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CartPage from './pages/Cart/CartPage';
import ProductPage from './pages/Product/ProductPage';
import Login from './pages/Login/Login';

export const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [users, setUsers] = useState([
    {id : "1", name : "Avetiq", email : "avo@gmail.com", password : "1234"},
    {id : "2", name : "Kar", email : "kar@gmail.com", password : "1234"},
  ])
  const totalPrice = carts.reduce((accum, el) => accum += el.cartPrice, 0)


  const loading = (is) => {
    setIsFetching(is)
  }
  
  useEffect(() => {
    setIsFetching(true)
    instance.get('/products')
      .then((res) => {
        setProducts(res.data.map((el) => {
          return {
            ...el,
            count: 1,
            cartPrice: el.price
          }
        }))
        setIsFetching(false)
      } )
  }, [])

  const addToCart = (item) => {
    let isBool = true

    carts.forEach((el) => {

      if (el.id === item.id) {
        isBool = false
       setCarts(carts.map((cart) => {
          if(cart.id === item.id) {
              return {
                ...cart,
                count : ++cart.count,
                cartPrice : cart.price + cart.cartPrice
              }
          }else {
            return cart
          }
        }))
      }

    })

    if (isBool) {
      setCarts((prev) => {
        return [...prev, item]
      })
    }

  }


  const changeCart = (count, id) => {
    setCarts(carts.map((cart) => {
      if(cart.id === id){
        return {
          ...cart,
          count : count,
          cartPrice : cart.price * count
        }
      }else {
        return cart
      }
    }))
  }



  return (
    <div className="App">
      <Header carts={carts}/>
      <Routes>
        <Route path='/' element={<Home isFetching={isFetching} products={products} addToCart={addToCart} />} />
        <Route path='/cart' element={<CartPage carts={carts} changeCart={changeCart} totalPrice={totalPrice}/>} />
        <Route path='/:id' element={<ProductPage loading={loading} isFetching={isFetching} addToCart={addToCart}/>}/>
        <Route path='/login' element={<Login users={users}/> }/>
      </Routes>
    </div>
  );
}

export default App;
