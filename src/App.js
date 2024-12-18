import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CartPage from './pages/Cart/CartPage';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])



  useEffect(() => {
    instance.get('/products')
      .then((res) => setProducts(res.data.map((el) => {
        return {
          ...el,
          count: 1,
          cartPrice: el.price
        }
      })))
  }, [])

  const addToCart = (item) => {
    /// 1 20 
    // 3 
    // 3 === 3
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

  console.log(carts);



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home products={products} addToCart={addToCart} />} />
        <Route path='/cart' element={<CartPage carts={carts} />} />
      </Routes>
    </div>
  );
}

export default App;
