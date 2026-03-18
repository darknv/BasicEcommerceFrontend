import React from 'react'
import { Toaster } from 'react-hot-toast';
import ProductList from './components/ProductList.jsx'
import Navbar from './components/Navbar.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import CartPage from './pages/CartPage.jsx'




const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/product' element={ <ProductList />} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/cart' element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App