import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { Shopcontext } from './Shopcontext';

const Productdisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(Shopcontext);
  return (
    <div className='productdisplay'>
      <div className="pd-left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="pd-img">
          <img className='pd-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="pd-right">
        <h1>{product.name}</h1>
        <div className="pd-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="pd-right-prices">
          <div className="pd-right_old-price">${product.old_price}</div>
          <div className="pd-right_new-price">${product.new_price}</div>
        </div>
        <div className="pd-right-description">
        Elevate your style with our {product.name}, a perfect blend of comfort and elegance. Crafted from 
        high-quality material.The featues adds a unique touch, making it a versatile addition to your wardrobe.
        Whether you're dressing up for a special occasion or keeping it casual, the {product.name} is your go-to choice for effortless style. 
        Available in various sizes. Upgrade your wardrobe with the {product.name} today!
        </div>
        <div className="pd-select-size">
          <h1>Select Size</h1>
          <div className="pd-right-size">
            <div className='pd-size'>S</div>
            <div className='pd-size'>M</div>
            <div className='pd-size'>L</div>
            <div className='pd-size'>XL</div>
            <div className='pd-size'>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="pd-right-category"><span>Category: </span>women, T-shirt, Crop Top</p>
        <p className="pd-right-category"><span>Tags: </span>modern, latest</p>
      </div>
    </div>
  )
}

export default Productdisplay
