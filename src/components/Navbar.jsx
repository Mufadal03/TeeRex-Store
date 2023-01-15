import React from 'react'
import {NavLink} from 'react-router-dom'
import "../App.css"
const Navbar = () => {
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
              <h3><NavLink style={({ isActive }) => (isActive ? Active : base)} to='/cart'>Cart</NavLink></h3>
          </div>
     </nav>
  )
}

export default Navbar