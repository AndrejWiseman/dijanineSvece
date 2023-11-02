import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import '../assets/css/navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <StaticImage
          src='../assets/images/L1.png'
          alt='logo'
          className='logo1'
          placeholder='blurred'
        />
        <h1 className='ime'>Luna</h1>
      </div>
      <div className="linkovi">
        <ul>
          <li><Link to='/'>Početna</Link></li>
          <li><Link to='/ponuda'>Ponuda</Link></li>
          <li><Link to='/o-meni'>O meni</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
