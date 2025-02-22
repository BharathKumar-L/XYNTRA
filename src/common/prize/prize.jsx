import React from 'react'
import "./prize.css"
import first from "../../assets/1stprize.png";
import second from "../../assets/2ndprize.png";
import third from "../../assets/3rdprize.png";
import PixelCard from '../prize_card/prize_card';

const Prize = () => {
  return (
    <div className="prize">
      <h1 class="neon-text" >PRIZE POOL</h1>
      <PixelCard >
        <div className="prizee">
          <img
            style={{ width: '225px',borderRadius:'50%' }}
            src={first} className='prize-img' alt="1st prize" />
          <h1 className='prize-title'>
            1st Prize
          </h1>
        </div>
      </PixelCard>
    </div>
  )
}

export default Prize;