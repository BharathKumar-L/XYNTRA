import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const RotatingStructure = () => {
  const meshRef = useRef();

  useEffect(() => {
    gsap.to(meshRef.current.rotation, {
      y: Math.PI * 2,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
  }, []);

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial color="white" wireframe />
    </mesh>
  );
};

const AboutUs = () => {
  return (
    <div className="relative h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Rotating Structure */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [1, 1, 1], fov: 40    }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[1, 2, 3]} />
          <RotatingStructure />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* About Us Text */}
      <section className="relative text-center z-10 px-4">
        <h2 className="text-5xl font-bold">ABOUT US</h2>
        <p className="text-lg mt-4 w-3/4 mx-auto">
          Vellore Institute of Technology, founded in 1984, is one of the leading engineering
          colleges in India. It aims to provide a world-class education that not only polishes
          technical mastery and analytical skills but also imbibes strong ethical values in
          their students.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
