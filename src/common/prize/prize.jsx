import React from 'react'
import "./prize.css"
import first from "../../assets/1stprize.png";
import second from "../../assets/2ndprize.png";
import third from "../../assets/3rdprize.png";
import PixelCard from '../prize_card/prize_card';

const Prize = () => {
  return (
    <div className="prize-card">
      <h1 class="neon-text" >PRIZE POOL</h1>
    <div className="prize">
      <PixelCard variant='gold' className='sprize'>
        <div className="prizee" >
          <img
            style={{ width: '225px',borderRadius:'50%' }}
            src={second} className='prize-img' alt="2nd prize" />
          <h1 className='prize-title'>
            2nd Prize
          </h1>
        </div>
      </PixelCard>
      <PixelCard variant='pink'>
        <div className="prizee">
          <img
            style={{ width: '225px',borderRadius:'50%' }}
            src={first} className='prize-img' alt="1st prize" />
          <h1 className='prize-title'>
            1st Prize
          </h1>
        </div>
      </PixelCard>
      <PixelCard variant='blue' className='tprize'>
        <div className="prizee" >
          <img
            style={{ width: '225px',borderRadius:'50%' }}
            src={third} className='prize-img' alt="3rd prize" />
          <h1 className='prize-title'>
            3rd Prize
          </h1>
        </div>
      </PixelCard>
    </div>
    </div>
  )
}

export default Prize;