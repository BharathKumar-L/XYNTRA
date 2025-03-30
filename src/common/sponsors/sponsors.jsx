import React from 'react';
import './spon.css';
import Poorvika from '../../assets/Poorvika.png';
import Unstop from '../../assets/unstop.png';
import Altruisty from '../../assets/Altruisty.png';

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <h2 className="sponsore">OUR SPONSOR</h2>
      <div className="sponsor-section">
        <h2 className="sponsor-title">Title Partner</h2>
        <div className="sponsor-card">
          <img src={Unstop} alt="Title Sponsor" className="sponsor-image unstop-image" />
        </div>
      </div>
      <div className="sponsor-row">
        <div className="sponsor-section">
          <h2 className="sponsor-title">Internship Sponsor</h2>
          <div className="sponsor-card">
            <img src={Altruisty} alt="Internship Sponsor" className="sponsor-image" />
          </div>
        </div>
        <div className="sponsor-section">
          <h2 className="sponsor-title">Certificate Sponsor</h2>
          <div className="sponsor-card">
            <img src={Poorvika} alt="Certificate Sponsor" className="sponsor-image" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sponsors;