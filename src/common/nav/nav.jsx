import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home.png"
import timeline from "../../assets/timeline.png"
import team from "../../assets/team.png"
import registration from "../../assets/registration.png"
import "./nav.css";

const CircularNavbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div id="cnav-mob-nav" className="cnav-container">
      <div className={`cnav-navbar ${active ? "cnav-active" : ""}`}>
        <div className="cnav-toggle" onClick={() => setActive(!active)}>
          <span className="cnav-toggle-icon">
            {active ? "✖" : "☰"}
          </span>
        </div>
        <ul className="cnav-items">
          <li className="cnav-item">
            <Link to="/" className="cnav-link">
              <img src={home} alt="home" srcset="" />
            </Link>
          </li>
          <li className="cnav-item">
            <Link to="/time" className="cnav-link">
            <img src={timeline} alt="timeline" srcset="" />
            </Link>
          </li>
          <li className="cnav-item">
            <Link to="/team" className="cnav-link">
            <img src={team} alt="team" srcset="" />
            </Link>
          </li>
          <li className="cnav-item">
            <Link to="/register" className="cnav-link">
            <img src={registration} alt="registration" srcset="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CircularNavbar;
