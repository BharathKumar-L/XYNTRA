import React from "react";

const RecMap = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px",  padding: "20px" }}>
      <div style={{ 
          filter: "invert(90%) hue-rotate(180deg)", // Inverts colors for a dark theme look
          borderRadius: "10px", 
          overflow: "hidden", 
          display: "inline-block" 
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31100.730404719645!2d79.989525!3d12.997972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528c9ebac84723%3A0x18e2bf88dfefa3ed!2sRajalakshmi%20Engineering%20College!5e0!3m2!1sen!2sus!4v1740133251115!5m2!1sen!2sus"
          width="400"
          height="250"
          style={{ border: "0", display: "block" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default RecMap;
