import React from "react";
import './brochure.css'
import brochure from '../../assets/Brochure.pdf'

const Brochure = () => {
  return (
    <div className="file">
      <a
        href={brochure}
        download
        className="brochure-button"
      >
        Brochure
      </a>
      <a
      href="#"
      download
      className="brochure-button"
    >
        Guidelines
    </a>
    </div>
  );
};

export default Brochure;
