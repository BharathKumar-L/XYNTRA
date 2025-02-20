import './footer.css'
import React from 'react'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footercontent">
        <img src={logo} alt="XYNTRA" className='logofooter' />
        <p className="footer-text">XYNTRA</p>
      </div>
    </footer>
  );
}

export default Footer;