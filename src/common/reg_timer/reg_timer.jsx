import logo from "../../assets/logo.png";
import React, { useState, useEffect } from "react";
import "./reg_timer.css";

const Regtimer = () => {
  const targetDate = new Date("Apr 12, 2025 08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00", expired: true };
    }

    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

    return { days, hours, minutes, seconds, expired: false };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
        <img src={logo} alt="logo" className="logo" id="logo-img" />
      {!timeLeft.expired ? (
        <div className="timer">
          <div className="time-section">
            <span className="time">{timeLeft.days}</span>
            <span className="label">Days</span>
          </div>
          <span className="colon">:</span>
          <div className="time-section">
            <span className="time">{timeLeft.hours}</span>
            <span className="label">Hours </span>
          </div>
          <span className="colon">:</span>
          <div className="time-section">
            <span className="time">{timeLeft.minutes}</span>
            <span className="label">Minutes </span>
          </div>
          <span className="colon">:</span>
          <div className="time-section">
            <span className="time">{timeLeft.seconds}</span>
            <span className="label">Seconds </span>
          </div>
        </div>
      ) : (
        <p className="expired-text">REGISTRATIONS CLOSED</p>
      )}
    </div>
  );
};

export default Regtimer;
