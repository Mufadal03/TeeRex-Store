import React from 'react'
import Category from './Category'

const Filters = () => {
  return (
      <div className='filter-main'>
          <div className="filter-container">
              <Category heading={"Color"} data={["Red", "Blue", "Green","Yellow","Grey"]} />
              <Category heading={"Gender"} data={["Men", "Women"]} />
              <Category heading={"Price"} data={["0-250","251-300","350-450"] } />
              <Category heading={"Type"} data={["Polo","Hoodie","Basic"] } />
        </div>
   </div>
  )
}

export default Filters