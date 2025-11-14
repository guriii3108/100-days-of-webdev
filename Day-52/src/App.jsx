import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './pages/Product'

const App = () => {
  return (
    <div className='min-h-screen w-full text-white bg-linear-to-br from-gray-900 via-black to-gray-900'> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/product' element={<Product />}/>
      </Routes>
    </div>
  )
}

export default App