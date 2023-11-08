import React from 'react'
import '../assets/css/hero.scss'

import videoBg from '../assets/video/videoBg.mp4'
import logo from '../assets/images/harm3.png'



const Hero = () => {
  return (
    <header>

        <div className="overlay"></div>

        <video
            src={videoBg}
            className="video"
            autoPlay
            loop
            muted
        />

        <div className="hero-text">
            <img src={logo} alt="logo" />
            <h1>Harmonija</h1>
            <p>Dikili-Pikili Svijeće</p>
        </div>
      
    </header>
  )
}

export default Hero
