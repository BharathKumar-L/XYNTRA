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
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <Router>
      <ParticleBackground id="particle-canvas" />
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color='255,255,255'
        outerAlpha={0.2}
        innerScale={4.7}
        outerScale={10}
        
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
      <Navbar />
      <div className="pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/time" element={<Timeline />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/live" element={<Live />} />
          <Route path="/team" element={<Team />} />
          <Route path="/deadline" element={<Regtimer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
