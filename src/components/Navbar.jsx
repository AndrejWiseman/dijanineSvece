import React, { useState } from 'react'
import { Link } from 'gatsby'
import "../assets/css/navbar.scss"

import logo from '../assets/images/harm3.png'

import { PiInstagramLogoThin, PiFacebookLogoThin } from "react-icons/pi";



function Navbar() {

    const [show, setShow] = useState(false)

    return (

        <nav>
            <div className='logo'>
                {/* <Link to='/'><h2>Harmonija</h2></Link> */}
                <a href="#"><img src={logo} alt="logo" /></a>
            </div>

            <ul className={show ? `menu-items active` : `menu-items`}>
                <div className='links'>
                  <li><Link to='/' onClick={() => setShow(false)}>Shop</Link></li>
                  <li><Link to='/' onClick={() => setShow(false)}>O meni</Link></li>
                  <li><Link to='/' onClick={() => setShow(false)}>Katalog</Link></li>
                </div>

                <div className='social'  >
                  <a href="#"><PiInstagramLogoThin /></a>
                  <a href="#"><PiFacebookLogoThin /></a>
                </div>
            </ul>

          

            <div className="hamburger hidden" onClick={() => setShow(!show)}>
                <span className={show ? `bar active` : 'bar'}></span>
                <span className={show ? `bar active` : 'bar'}></span>
                <span className={show ? `bar active` : 'bar'}></span>
            </div>
        </nav>
    );
}

export default Navbar;

















// import React, { useState } from 'react'
// import { Link } from 'gatsby'
// import logo from '../assets/images/harm3.png'
// import '../assets/css/navbar.scss'

// import { PiInstagramLogoThin, PiFacebookLogoThin } from "react-icons/pi";

// const Navbar = () => {

//   const [ open, setOpen] = useState(false);


//   const handleClick = () => {
//     setOpen(!open)
//   }

//   console.log(open)

  

//   return (
//     <nav>
//       <div className="nav-logo">
//         <a href="#"><img src={logo} alt="logo" /></a>
//       </div>

//       <div className="menu-bars" onClick={handleClick}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>

//       {/* <div className="links" > */}
//       <div className={open ? 'links' : ''} >
//         <ul>
//           <li><Link to='/'>Shop</Link></li>
//           <li><Link to='/'>O meni</Link></li>
//           <li><Link to='/'>Katalog</Link></li>
//         </ul>
//       </div>

//       {/* <div className="socijalne-mreze"> */}
//       <div className={open ? 'socijalne-mreze' : 'sakrij'} >
//         <a href="#"><PiInstagramLogoThin /></a>
//         <a href="#"><PiFacebookLogoThin /></a>
//       </div>
      
//     </nav>
//   )
// }

// export default Navbar









// import React from 'react'
// import { Link } from 'gatsby'
// import logo from '../assets/images/harm3.png'
// import '../assets/css/navbar.scss'

// import { PiInstagramLogoThin, PiFacebookLogoThin } from "react-icons/pi";

// const Navbar = () => {

//   return (
//     <nav>
//       <div className="nav-logo">
//         <a href="#"><img src={logo} alt="logo" /></a>
//       </div>

//       <div className="links">
//         <ul>
//           <li><Link to='/'>Shop</Link></li>
//           <li><Link to='/'>O meni</Link></li>
//           <li><Link to='/'>Katalog</Link></li>
//         </ul>
//       </div>

//       <div className="socijalne-mreze">
//         <a href="#"><PiInstagramLogoThin /></a>
//         <a href="#"><PiFacebookLogoThin /></a>
//       </div>
      
//     </nav>
//   )
// }

// export default Navbar













// import { useEffect, useState } from 'react'
// import { BiArrowFromBottom } from 'react-icons/bi'

// import { classNames } from '/utils'

// export const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false)

//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true)
//     } else {
//       setIsVisible(false)
//     }
//   }

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     })
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility)

//     return () => {
//       window.removeEventListener('scroll', toggleVisibility)
//     }
//   }, [])

//   return (
//     <div className="fixed bottom-2 right-2">
//       <button
//         type="button"
//         onClick={scrollToTop}
//         className={classNames(
//           isVisible ? 'opacity-100' : 'opacity-0',
//           'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2',
//         )}
//       >
//         <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
//       </button>
//     </div>
//   )
// }