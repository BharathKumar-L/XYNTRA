import React from "react";
import "./test.css";
import webmaster from "../../assets/webmaster.png";

const Test = () => {
  return (
    <div>
      <div id="card-container">
        <div id="speech-cloud">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path d="M32 2C15.43 2 2 13.74 2 27.25c0 8.52 5.01 16.17 13.13 20.41-1.27 5.24-5.02 7.91-5.11 7.97a1.09 1.09 0 00.64 1.98c.27 0 6.25-.05 11.87-4.46C26.73 56.66 29.3 57 32 57c16.57 0 30-11.74 30-25.25S48.57 2 32 2z" />
          </svg>
          <div id="speech-cloud-text">Description of the Image</div>
        </div>
        <div id="image-circle">
          <img src={webmaster} alt="Circular Image" />
        </div>
      </div>
    </div>
  );
};

export default Test;
