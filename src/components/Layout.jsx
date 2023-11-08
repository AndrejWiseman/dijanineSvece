import React from 'react'
import Navbar from './Navbar'
import '../assets/css/layout.scss'

const Layout = ({ children }) => {
  return (
    <div className='container'>
      
      <Navbar />

      {children}
      
    </div>
  )
}

export default Layout
