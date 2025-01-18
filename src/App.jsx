import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./common/navbar/navbar";
import Hero from "./common/hero/hero";
import Timeline from "./common/timeline";
import FAQ from "./common/faq";
import Live from "./common/live/Live";
import Team from "./common/team/Team";
import Registration from "./common/Registration/index";
import Regtimer from "./common/reg_timer/reg_timer";
import ParticleBackground from "./common/bg/ParticleBackground";
import "./App.css";
import Contact from "./common/contact/Contact";
import Test from "./common/team/test";

function App() {
  return (
    <Router>
      <ParticleBackground id="particle-canvas" />
      <Navbar />
      <div className="mt-5 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/time" element={<Timeline />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/live" element={<Live />} />
          <Route path="/team" element={<Team />} />
          <Route path="/deadline" element={<Regtimer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registration/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
