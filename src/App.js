import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const instance = axios.create({
  baseURL : 'https://fakestoreapi.com',
})

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {

    instance.get('/products')
      .then((res) => setProducts(res.data))
  }, [])

  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element={<Home products={products}/> }/>
     </Routes>
    </div>
  );
}

export default App;
