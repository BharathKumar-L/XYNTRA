import logo from "../../assets/logo.png";
import React, { useState, useEffect } from "react";
import "./reg_timer.css";

const Regtimer = () => {
  const targetDate = new Date("Jan 31, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" countdown-container">
      <div className="countdown-content">
        <img src={logo} alt="logo" />
      </div>
      {!timeLeft.expired ? (
        <div className="circle-container">
          <Circle value={timeLeft.days} max={365} label="Days" />
          <Circle value={timeLeft.hours} max={24} label="Hours" />
          <Circle value={timeLeft.minutes} max={60} label="Minutes" />
          <Circle value={timeLeft.seconds} max={60} label="Seconds" />
        </div>
      ) : (
        <p style={styles.expired}>REGISTRATIONS CLOSED</p>
      )}
    </div>
  );
};

const Circle = ({ value, max, label }) => {
  const fill = (value / max) * 100;

  return (
    <div
      className="circle"
      style={{
        "--fill": `${fill}%`,
      }}
    >
      <span>{value}</span>
      <p>{label}</p>
    </div>
  );
};

const styles = {
  expired: { fontSize: "5rem", color: "white" },
};

export default Regtimer;
