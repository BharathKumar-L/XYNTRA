import React from "react";
import "./Contact.css";
import webmaster from "../../assets/webmaster.png";
import VC from "../../assets/vice.jpg";
import chairman from "../../assets/chairman.jpg";

const Contact = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Bhuvaanesh R",
      image: chairman,
      mob_no: "tel:+917339624803",
    },
    {
      id: 2,
      name: "Gokulasarathy P S",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
      mob_no: "tel:+919940013827",
    },
    {
      id: 3,
      name: "Joderick Sherwin",
      image: VC,
      mob_no: "tel:+917094944667",
    },
    {
      id: 4,
      name: "Deepiga Dharshini C",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
      mob_no: "tel:+918220439219",
    },
    {
      id: 5,
      name: "Bharath Kumar L",
      image: webmaster,
      mob_no: "tel:+916369106579",
    }
  ];
  return (
    <div className="contact-page">
      <div className="contact-team">
        {teamMembers.map((member) => (
          <div key={member.id} className="contact-card">
            <img src={member.image} alt={member.name} className="profile-pic" />
            <div className="contact-content">
              <h2>{member.name}</h2>
              <a href={member.mob_no} rel="noreferrer">
                <i>📞</i>CALL
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
