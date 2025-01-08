import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import CartPage from './pages/Cart/CartPage';
import ProductPage from './pages/Product/ProductPage';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

import './App.css';
export const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])
  const localStroageRef = useRef(false)




  useEffect(() => {
    if(localStroageRef.current) {
      localStorage.setItem('carts', JSON.stringify(carts))
    }
    localStroageRef.current = true
  }, [carts])

  const [isFetching, setIsFetching] = useState(false)

  const [users, setUsers] = useState([
    { id: "1", name: "Avetiq", email: "avo@gmail.com", password: "1234" },
    { id: "2", name: "Kar", email: "kar@gmail.com", password: "1234" },
  ])


  const cartss = JSON.parse(localStorage.getItem('carts'))

  // Users Logic
  const addUsers = (user) => {

    setUsers((prev) => {
      return [...prev, user]
    })
  }


  const totalPrice = carts.reduce((accum, el) => accum += el.cartPrice, 0)


  const loading = (is) => {
    setIsFetching(is)
  }


  /// Cart Logic
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
      })
  }, [])



  const addToCart = (item) => {
  
    
    let isBool = true

    carts.forEach((el) => {

      if (el.id === item.id) {
        isBool = false
        setCarts(carts.map((cart) => {
          if (cart.id === item.id) {
            return {
              ...cart,
              count: ++cart.count,
              cartPrice: cart.price + cart.cartPrice
            }
          } else {
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
      if (cart.id === id) {
        return {
          ...cart,
          count: count,
          cartPrice: cart.price * count
        }
      } else {
        return cart
      }
    }))
  }

  const removeItemToCart = (id) => {
    setCarts(carts.filter((cart) => cart.id !== id))
  }


  return (
    <div className="App">
      <Header carts={cartss} />
      <Routes>
        <Route path='/' element={<Home isFetching={isFetching} products={products} addToCart={addToCart} />} />
        <Route path='/cart' element={<CartPage removeItemToCart={removeItemToCart} carts={cartss} changeCart={changeCart} totalPrice={totalPrice} />} />
        <Route path='/:id' element={<ProductPage loading={loading} isFetching={isFetching} addToCart={addToCart} />} />
        <Route path='/login' element={<Login users={users} />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/register' element={<Register addUsers={addUsers} />} />
      </Routes>
    </div>
  );
}

export default App;
