import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/Product.context'

const Options = ({ name, section }) => {
  const { dispatchFilter } = useContext(ProductContext)
  const handleChange = (e) => {
    dispatchFilter({type:"CHANGE_CATEGORY",payload:[section,name]})
  }
  return (
      <div className='category-option'>
          <input type={"checkbox"} name={name} data_belongs={section} onChange={handleChange} id={ name} />
          <label htmlFor={name} >{name }</label>
    </div>
  )
}
 
export default Options