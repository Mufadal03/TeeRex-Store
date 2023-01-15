import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../App.css"
import { ProductContext } from '../context/Product.context'
const SearchBar = () => {
  const [text, setText] = useState("")
  const {dispatchFilter} = useContext(ProductContext)
  useEffect(() => {
    let timer = setTimeout(() => {
        dispatchFilter({type:"GET_SEARCH",payload:text})
    }, [500])
    return ()=>clearTimeout(timer)
  },[text])
  return (
      <div className="searchbar">
          <input type="search" placeholder='Search products'value={text} onChange={(e)=>setText(e.target.value)} />
     </div>
  )
}

export default SearchBar