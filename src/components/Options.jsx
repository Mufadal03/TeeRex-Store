import React from 'react'

const Options = ({name}) => {
  return (
      <div className='category-option'>
          <input type={"checkbox"} id={ name} />
          <label htmlFor={name} >{name }</label>
    </div>
  )
}

export default Options