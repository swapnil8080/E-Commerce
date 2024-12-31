import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter text-center'>
      <h1>Get Exclusive Offers On Your E-Mail</h1>
      <p>Subscribe to our newsletter and stay updated</p>
     <div className='newsbtn'>
     <input className='input' type="email-id" id="email-id" aria-label="email-id" placeholder="your mail id"/>
     <span><button type="button" class="btn btn-primary btn-sm mb-1 ms-2">Subscribe</button></span>
     </div>
    </div>
  )
}

export default Newsletter
