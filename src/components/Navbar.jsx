import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsCart4} from "react-icons/bs"
import "../App.css"
import { useContext } from 'react'
import { ProductContext } from '../context/Product.context'
const Navbar = () => {
    const {state:{cart}} = useContext(ProductContext)
     const Active = {
         textDecoration: "underline"
    }
    const base = {
        textDecoration:"none"
    }
  return (
      <nav className='navbar'>
          <h1><NavLink to="/" >TeeRex Store</NavLink></h1>
          <div className='navLeft'>
              <h3><NavLink to='/products'style={({ isActive }) => (isActive ? Active : base)}>Products</NavLink></h3>
              <NavLink style={({ isActive }) => (isActive ? Active : base)} to='/cart'><BsCart4 size={"25px"} /><span>{cart.length }</span></NavLink>
          </div>
     </nav>
  )
}

export default Navbar