import React from 'react'
import './Offers.css'
import exclusive_image from '../Asserts/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>OFFERS FOR YOU</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check new</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
        
    </div>
  )
}

export default Offer