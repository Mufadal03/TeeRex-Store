import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HOC from '../components/HOC'
import Cart from './Cart'
import Home from './Home'
import Products from './Products'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HOC><Home /></HOC>} />
            <Route path='/products' element={<HOC><Products /></HOC>} />
            <Route path='/cart' element={<HOC><Cart /></HOC>} />
      </Routes>
  )
}

export default AllRoutes