import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./common/navbar/navbar";
import Timeline from "./common/timeline";
import Live from "./common/live/Live";
import Team from "./common/team/Team";
import Registration from "./common/Registration/index";
import ParticleBackground from "./common/bg/ParticleBackground";
import "./App.css";
import Contact from "./common/contact/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };
    const disableKeys = (e) => {
      if (
        (e.ctrlKey && (e.key === "u" || e.key === "U")) ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableKeys);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);

  return (
    <Router>
      <ParticleBackground id="particle-canvas" />
      <Navbar />
      <div className="pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/time" element={<Timeline />} />
          <Route path="/live" element={<Live />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
