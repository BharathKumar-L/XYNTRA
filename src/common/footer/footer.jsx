import './footer.css'
import React from 'react'
import logo from '../../assets/logo.png'
import reclogo from '../../assets/REC_LOGO.png'
import cslogo from '../../assets/CS_LOGO_WHITE.png'
import RecMap from '../../recmap'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logos">
        <img src={reclogo} alt="XYNTRA" className='logofooter' />
        <img src={logo} alt="XYNTRA" className='logofooter' />
        <img src={cslogo} alt="XYNTRA" className='logofooter' />
      </div>
      <div className="footercontent">
        <div className="map_social">
          <RecMap />
        </div>
        <div className="contact">
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          <div className="partt">
            <div className="part">
              <div className="contact-content">
                <h2>Bhuvaanesh R</h2>
                <a href="tel:+917339624803" rel="noreferrer">
                  <i>📞</i>CALL
                </a>
              </div>
              <div className="contact-content">
                <h2>Himeshwar N</h2>
                <a href="tel:+919361575441" rel="noreferrer">
                  <i>📞</i>CALL
                </a>
              </div>
            </div>
            <div className="part">
              <div className="contact-content">
                <h2>Bhuvaneshwari M</h2>
                <a href="tel:+918148184746" rel="noreferrer">
                  <i>📞</i>CALL
                </a>
              </div>
              <div className="contact-content">
                <h2>Jayadharshini M</h2>
                <a href="tel:+917339624803" rel="noreferrer">
                  <i>📞</i>CALL
                </a>
              </div>
            </div>
          </div>
          <div className="icons">
            <a href="mailto:ieee.cs@rajalakshmi.edu.in" target="_blank" rel="noopener noreferrer">
              <div className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="white">
                  <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z" />
                </svg>
              </div>
            </a>

            <a href="https://www.instagram.com/ieee_cs_rec" target="_blank" rel="noopener noreferrer">
              <div className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="white">
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                  <circle cx="16.806" cy="7.207" r="1.078"></circle>
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                </svg>
              </div>
            </a>

            <a href="https://www.linkedin.com/company/ieee-computer-society-rec/" target="_blank" rel="noopener noreferrer">
              <div className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="white">
                  <circle cx="4.983" cy="5.009" r="2.188"></circle>
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="creators">
          <h1>Website Developed by</h1>
          <h3><a href="https://www.linkedin.com/in/bharathkumar-l/" target="_blank" className='linked' rel="noopener noreferrer">Bharath Kumar L</a></h3>
          <h3><a href="https://www.linkedin.com/in/roshini-d/" target="_blank" className='linked' rel="noopener noreferrer">Roshini D</a></h3>
          <h3><a href="https://www.linkedin.com/in/nithish-rao-p/" target="_blank" className='linked' rel="noopener noreferrer">Nithish Rao P</a></h3>
          <h3><a href="https://www.linkedin.com/in/varun-g/" target="_blank" className='linked' rel="noopener noreferrer">Varun G</a></h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;  