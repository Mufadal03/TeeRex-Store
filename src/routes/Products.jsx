import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../context/Product.context'
import { Fetch } from '../logic/Fetch'
import "../App.css"
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import Card from '../components/Card'
const Products = () => {
    const { state: { products ,cart },dispatch } = useContext(ProductContext)
    console.log(products,cart)
    useEffect(() => {
            Fetch()
            .then((r) =>dispatch({ type: "GET_PRODUCTS", payload: r }))
            .catch((e) => console.log(e))
    },[])
  return (
      <main className='product-container-main'>
          <SearchBar />
          <div className="product-container">
              <Filters />
              <div className="products">
                  {products?.length > 0 && products?.map((el, i) => <Card key={i}{...el} />)}
              </div>
          </div>
    </main>
  )
}

export default Products