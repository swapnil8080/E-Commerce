import React from 'react'
import hero from '../Assets/hero_image.png'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import './Main.css'

const Main = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col">
          <div className="col-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
              <div className="hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="" />
              </div>
              <p>collections</p>
              <p>for everyone</p>
            </div>
            <div className="latest-btn">
              <button className="btn text-bg-primary rounded-pill">latest connection <img src={arrow_icon} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="col col-right">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main
