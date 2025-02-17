import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            🏠
            </Link>
          </li>
          <li className="cnav-item">
            <Link to="/time" className="cnav-link">
            🕒
            </Link>
          </li>
          <li className="cnav-item">
            <Link to="/team" className="cnav-link">
            👥
            </Link>
          </li>
          <li className="cnav-item">
            <Link to="/contact" className="cnav-link">
            📞
            </Link>
          </li>
          <li className="cnav-item">
            <Link to="/register" className="cnav-link">
            📝
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CircularNavbar;
