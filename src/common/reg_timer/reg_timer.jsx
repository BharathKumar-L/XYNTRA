import React, { useState, useEffect } from "react";
import "./reg_timer.css"

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
    <div className="countdown-container" style={styles.container}>
      <h2 style={styles.heading}>Welcome to the FASTLANE</h2>
      {!timeLeft.expired ? (
        <div className="countdown" style={styles.countdown}>
          <div className="time" style={styles.time}>
            <span style={styles.value}>{timeLeft.days}</span>
            <p style={styles.label}>Days</p>
          </div>
          <div className="time" style={styles.time}>
            <span style={styles.value}>{timeLeft.hours}</span>
            <p style={styles.label}>Hours</p>
          </div>
          <div className="time" style={styles.time}>
            <span style={styles.value}>{timeLeft.minutes}</span>
            <p style={styles.label}>Minutes</p>
          </div>
          <div className="time" style={styles.time}>
            <span style={styles.value}>{timeLeft.seconds}</span>
            <p style={styles.label}>Seconds</p>
          </div>
        </div>
      ) : (
        <p style={styles.expired}>REGISTRATIONS CLOSED</p>
      )}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", fontFamily: "Arial, sans-serif", marginTop: "20px" },
  heading: { fontSize: "2rem", marginBottom: "20px" },
  countdown: { display: "flex", justifyContent: "center", gap: "20px" },
  time: { textAlign: "center" },
  value: { fontSize: "3rem", fontWeight: "bold" },
  label: { marginTop: "5px", fontSize: "1rem" },
  expired: { fontSize: "1.5rem", color: "red" },
};

export default Regtimer;
