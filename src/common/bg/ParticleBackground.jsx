import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles"; // Import the full version of tsParticles
import particlesConfig from "./particlesConfig.json"; // Ensure the JSON file path is correct

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine); // Load the full version of tsParticles
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return <Particles id={props.id} init={particlesLoaded} options={particlesConfig} />;
};

export default ParticlesComponent;
