import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import AnimatedCursor from "react-animated-cursor"
import Footer from "./common/footer/footer";
import CircularNavbar from "./common/nav/nav";
import Brochure from "./common/brochure/brochure";

function App() {
  // useEffect(() => {
  //   const disableRightClick = (e) => {
  //     e.preventDefault();
  //   };
  //   const disableKeys = (e) => {
  //     if (
  //       (e.ctrlKey && (e.key === "u" || e.key === "U")) ||
  //       (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) ||
  //       e.key === "F12"
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener("contextmenu", disableRightClick);
  //   document.addEventListener("keydown", disableKeys);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //     document.removeEventListener("keydown", disableKeys);
  //   };
  // }, []);

  return (
    <Router>
      <Layout>
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
          style={{
            position: 'absolute',
            zIndex: 10000,
          }}
        />
        <Navbar />
        <CircularNavbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/time" element={<Timeline />} />
            <Route path="/live" element={<Live />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </div>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {children}
      {location.pathname !== "/" && <Brochure />}
    </>
  );
};