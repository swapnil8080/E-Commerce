import React from 'react'
import exclusive_img from '../Assets/exclusive_image.png'
import './offers.css'

const Offers = () => {
  return (
    <div className='offers d-flex'>
       <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON THE BEST SELLERS PRODUCT</p>
        <button className='btn-1'>Check Now</button>
       </div>
       <div className="offers-right">
        <img src={exclusive_img} alt="" />
       </div>
    </div>
  )
}

export default Offers
