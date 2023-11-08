import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/harm3.png'
import '../assets/css/navbar.scss'

import { PiInstagramLogoThin, PiFacebookLogoThin } from "react-icons/pi";

const Navbar = () => {

  return (
    <nav>
      <div className="nav-logo">
        <a href="#"><img src={logo} alt="logo" /></a>
      </div>

      <div className="links">
        <ul>
          <li><Link to='/'>Shop</Link></li>
          <li><Link to='/'>O meni</Link></li>
          <li><Link to='/'>Katalog</Link></li>
        </ul>
      </div>

      <div className="socijalne-mreze">
        <a href="#"><PiInstagramLogoThin /></a>
        <a href="#"><PiFacebookLogoThin /></a>
      </div>
      
    </nav>
  )
}

export default Navbar
