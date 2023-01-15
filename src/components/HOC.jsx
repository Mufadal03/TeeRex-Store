import React from 'react'
import Navbar from './Navbar'

const HOC = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
  )
}

export default HOC