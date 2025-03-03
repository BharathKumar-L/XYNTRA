import React from 'react'
import "./prize.css"
import first from "../../assets/1stprize.svg";
import second from "../../assets/2ndprize.svg";
import third from "../../assets/3rdprize.svg";
import PixelCard from '../prize_card/prize_card';

const Prize = () => {
  return (
    <div className="prize-card">
      <h1 class="neon-text" >PRIZE POOL</h1>
    <div className="prize">
      <PixelCard className='sprize'>
        <div className="prizee" >
          <img
            style={{ width: '225px' }}
            src={second} className='prize-img' id='prize-s' alt="2nd prize" />
          <h1 className='prize-title'>
            2nd Prize <p className='amt'>₹8,000</p>
          </h1>
        </div>
      </PixelCard>
      <PixelCard variant='gold' className='fprize'>
        <div className="prizee">
          <img
            style={{ width: '225px' }}
            src={first} className='prize-img' id='prize-f' alt="1st prize" />
          <h1 className='prize-title'>
            1st Prize <p className='amt'>₹15,000</p>
          </h1>
        </div>
      </PixelCard>
      <PixelCard variant='orange' className='tprize'>
        <div className="prizee" >
          <img
            style={{ width: '225px' }}
            src={third} className='prize-img' id='prize-t' alt="3rd prize" />
          <h1 className='prize-title'>
            3rd Prize <p className='amt'>₹5,000</p>
          </h1>
        </div>
      </PixelCard>
    </div>
    </div>
  )
}

export default Prize;