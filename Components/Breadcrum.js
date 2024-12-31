import React from 'react'
import './Breadcrum.css'
import bread_arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={bread_arrow_icon} alt="" /> SHOP <img src={bread_arrow_icon} alt="" /> {product.category} <img src={bread_arrow_icon}  alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
