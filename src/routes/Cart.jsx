import React, { useContext } from 'react'
import { ProductContext } from '../context/Product.context'
import "../App.css"
import CartProducts from '../components/CartProducts'
const Cart = () => {
  const { state: { cart } } = useContext(ProductContext)
  return (
    <div className='cart-container'>
      <div className="cart-header">
        <h3>Shopping Cart</h3>
        <h3>total:{cart.length>0?cart.reduce((acc,el)=>acc+el.price*el.cartQuantity,0):0 }</h3>
      </div>
      <div className="cart-product-container">
        {
        cart?.length > 0 ? cart.map((prods,i) => <CartProducts key={ i}{...prods} />):"CART IS EMPTY"
      }
      </div>
    </div>
  )
}

export default Cart