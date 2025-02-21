import React from 'react'
import "./prize.css"
import first from "../../assets/1stprize.png";
import second from "../../assets/2ndprize.png";
import third from "../../assets/3rdprize.png";

const Prize = () => {
  return (
    <div className="prize">
      <h1 class="neon-text" >PRIZE POOL</h1>
      <div className='matrix-container'>
        <div className="prize-card" id='sprize'>
            <h3 className='amt ' >Cash Prize of ₹8,000</h3>
        </div>
        <div className="prize-card" id='fprize'> 
          <div className="prizecard-amt">
            <h3 className='amt ' >Cash Prize of ₹15,000</h3>
          </div>
        </div>
        <div className="prize-card" id ='tprize'>
          <div className="prizecard-amt">
            <h3 className='amt'>Cash Prize of ₹5,000</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prize;