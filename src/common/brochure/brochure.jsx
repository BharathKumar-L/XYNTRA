import React from "react";
import './brochure.css'
import brochure from '../../assets/broch.pdf'
import abstract from '../../assets/Abstract-Template.docx'

const Brochure = () => {
  return (
    <div className="file">
      <a
        href={abstract}
        download="ABSTRACT-TEMPLATE.docx"
        className="brochure-button"
      >
        Abstract <br /> Template
      </a>
      <a
        href={brochure}
        download="XYNTRA-BROCHURE.pdf"
        className="brochure-button"
      >
        Brochure
      </a>
    </div>
  );
};

export default Brochure;
