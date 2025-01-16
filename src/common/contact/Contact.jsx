import React from "react";
import "./Contact.css";
import webmaster from "../../assets/webmaster.png";
import VC from "../../assets/vice.jpg";


const Contact = () => {
  return (
    <div>
      <div className="contact-team">
        <div className="contact-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt="BHUVAANESH R"
          />
          <div>
            <h2>Bhuvaanesh R</h2>
            <a href="tel:+917339624803"><i>📞</i> 73396 24803</a>
          </div>
        </div>
        <div className="contact-card">
          <img
            src={VC}
            alt="JODERICK SHERWIN"
          />
          <div>
            <h2>Joderick Sherwin</h2>
            <a href="tel:+917094944667"><i>📞</i> 70949 44667</a>
          </div>
        </div>
        <div className="contact-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt="DEEPIGA DHARSHINI C"
          />
          <div>
            <h2>Deepiga Dharshini C</h2>
            <a href="tel:+918220439219"><i>📞</i> 82204 39219</a>
          </div>
        </div>
        <div className="contact-card">
          <img src={webmaster} alt="BHARATH KUMAR L" />
          <div>
            <h2>Bharath Kumar L</h2>
            <a href="tel:+916369106579"><i>📞</i> 63691 06579</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
