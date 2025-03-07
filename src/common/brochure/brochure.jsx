import React from "react";
import './brochure.css'

const Brochure = () => {
  return (
    <div className="file">
      <a
        href="../../assets/Abstract-Template.docx"
        download="ABSTRACT-TEMPLATE.docx"
        className="brochure-button"
      >
        Abstract <br /> Template
      </a>
      <a
        href="../../assets/broch.pdf"
        download="XYNTRA-BROCHURE.pdf"
        className="brochure-button"
      >
        Brochure
      </a>
    </div>
  );
};

export default Brochure;
