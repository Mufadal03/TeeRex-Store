import React from 'react'
import "../App.css"
const Card = (props) => {
    const {imageURL,color,gender,id,name,price,quantity,type} = props
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
              <button>Add to Cart</button>
          </div>
    </div>
  )
}

export default Card