import React from 'react'
import { useContext } from 'react'
import "../App.css"
import { ProductContext } from '../context/Product.context'
const Card = (props) => {
    const { imageURL, color, gender, id, name, price, quantity, type } = props
    const { state: { cart }, dispatch } = useContext(ProductContext)
  return (
      <div className='card'>
          <img className='prod-img' src={imageURL} alt={name} />
          <div className='prod-desc'>
              <h3>{name}</h3>
              <p>Gender: {gender}</p>
              <p>type: {type}</p>
              <p>Price: {price}Rs</p>
          </div>
          <div className="add-to-cart">
              {
                  cart.some((p) => p.id == props.id) ?
                      <button className='remove-from-cart-btn' onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:props.id})}>Remove from Cart</button> :
                      <button className='add-to-cart-btn' onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}>Add to Cart</button>
              }
              
          </div>
    </div>
  )
}

export default Card