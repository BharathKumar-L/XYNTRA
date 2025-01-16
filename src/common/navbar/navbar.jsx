import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid nav-container">
        <Link to="/" id="logo" className="nav-link" aria-current="page">
          <img className="img-fluid" src={logo} alt="logo" width={250} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-right" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="fs-3 nav-link nav-container-color" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-3 nav-container-color" to="/time">
                Timeline
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-3 nav-container-color" to="/team">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-3 nav-container-color" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fs-4 nav-container-color"
                to="/register"
              >
                REGISTER
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
