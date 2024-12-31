import React, { useContext } from 'react'
import './Cartitem.css'
import { Shopcontext } from './Shopcontext'
import remove_icon from '../Assets/cart_cross_icon.png';

const Cartitem = () => {
  const { gettotalcartamount, all_product, cartItems, removeFromCart } = useContext(Shopcontext);
  return (
    <div className='cartitems'>
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return <div className='main'>
            <div className="main-body">
              <div className="cartitems-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
              </div>
              <div className="items-format">
                <img src={e.image} alt="" className="cartproduct-icon" />
                <p className='cartitem-productname'>{e.name}</p>
                <p className='new-price'>${e.new_price}</p>
                <button className="cartitem-quantity">{cartItems[e.id]}</button>
                <p className='item-newprice'>${e.new_price * cartItems[e.id]}</p>
              </div>
            </div>
            <div className="item-remove">
              <button className='removebtn' onClick={() => { removeFromCart(e.id) }}>Remove</button>
              {/* <img src={remove_icon} alt="" className="remove-icon" /> */}
              <button className='para'>Save for later</button>
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>cart Total</h1>
          <div>
            <div className="total-item-cartitem">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="total-item-cartitem">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="total-item-cartitem">
              <h3>Total</h3>
              <h3>${gettotalcartamount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder='promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
