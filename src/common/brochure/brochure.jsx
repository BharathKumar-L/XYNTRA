import React from "react";
import './brochure.css'
import brochure from '../../assets/Brochure.pdf'

const Brochure = () => {
  return (
    <a
      href={brochure}
      download
      className="brochure-button"
    >
        Brochure
    </a>
  );
};

export default Brochure;
