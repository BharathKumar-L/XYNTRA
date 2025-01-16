import React from "react";
import "./Contact.css";
import webmaster from "../../assets/webmaster.png";

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
            <a href="tel:+917339624803">📞 73396 24803</a>
          </div>
        </div>
        <div className="contact-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt="JODERICK SHERWIN"
          />
          <div>
            <h2>Joderick Sherwin</h2>
            <a href="tel:+917094944667">📞 70949 44667</a>
          </div>
        </div>
        <div className="contact-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt="DEEPIGA DHARSHINI C"
          />
          <div>
            <h2>Deepiga Dharshini C</h2>
            <a href="tel:+918220439219">📞 82204 39219</a>
          </div>
        </div>
        <div className="contact-card">
          <img src={webmaster} alt="BHARATH KUMAR L" />
          <div>
            <h2>Bharath Kumar L</h2>
            <a href="tel:+916369106579">📞 63691 06579</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
