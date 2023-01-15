import React from 'react'
import Options from './Options'

const Category = ({heading,data}) => {
  return (
      <div className='category-box'>
          <h3>{heading}</h3>
          {data.map((el,i) => <Options key={i} section={heading} name={el}/>)}
    </div>
  )
}

export default Category