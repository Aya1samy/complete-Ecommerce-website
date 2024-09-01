import React from 'react'
import './Hero.css'
import hand_icon from "../Asserts/hand_icon.png"
import arrow_icon from '../Asserts/arrow.png'
import hero_image from '../Asserts/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everything</p>
        </div>
        <div className="hero-latest-button">
          <div>Latest collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        {/* <img src={hero_image} alt="" /> */}
      </div>
    </div>
  )
}

export default Hero