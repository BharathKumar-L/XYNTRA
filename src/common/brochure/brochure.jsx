import React from "react";
import './brochure.css'
import brochure from '../../assets/broch.pdf'
import abstract from '../../assets/Abstract-Template.docx'

const Brochure = () => {
  return (
    <div className="file">
      <a
        href={brochure}
        download
        className="brochure-button"
      >
        Abstract <br /> Template
      </a>
      <a
        href={brochure}
        download
        className="brochure-button"
      >
        Brochure
      </a>
    </div>
  );
};

export default Brochure;
