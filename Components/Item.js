import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/Product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <p className='fs-5'>{props.name}</p>
            <div className="item-prices">
            <div className="item-old-price">
                    ${props.old_price}
                </div>
                <div className="item-new-price">
                    ${props.new_price}
                </div>
            </div>
        </div>
    )
}

export default Item
