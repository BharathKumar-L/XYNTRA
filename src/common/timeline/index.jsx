import React, { useState, useEffect, useRef } from 'react';
import { List, ListCheck, Ship, Banknote, Lock, Timer, TimerOff, UserCheck } from 'lucide-react';
import { ImPacman } from "react-icons/im";

const Timeline = () => {
  const [activePoint, setActivePoint] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pacmanPosition, setPacmanPosition] = useState({ x: 0, y: 0 });
  const [pathLength, setPathLength] = useState(0);
  const [pacmanProgress, setPacmanProgress] = useState(0);
  const [pacmanRotation, setPacmanRotation] = useState(0);
  const [stopAtPoint, setStopAtPoint] = useState(3);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isJumping, setIsJumping] = useState(false);
  const [jumpOffset, setJumpOffset] = useState(0);
  const pathRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 920);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      const startPoint = pathRef.current.getPointAtLength(0);
      setPacmanPosition({ x: startPoint.x, y: startPoint.y });
    }
  }, [isVisible, isMobile]);

  const calculatePathPosition = (point) => {
    if (!pathRef.current) return 0;

    const totalLength = pathRef.current.getTotalLength();
    let bestPosition = 0;
    let closestDistance = Infinity;

    // Increase the number of sample points for better accuracy
    const samples = 2000;

    for (let i = 0; i <= samples; i++) {
      const distance = i / samples;
      const pathPoint = pathRef.current.getPointAtLength(distance * totalLength);
      const currentDistance = Math.hypot(pathPoint.x - point.x, pathPoint.y - point.y);

      if (currentDistance < closestDistance) {
        closestDistance = currentDistance;
        bestPosition = distance;
      }
    }

    return bestPosition;
  };

  useEffect(() => {
    if (pathLength > 0 && isAnimating) {
      const selectedPoint = timelinePoints[stopAtPoint - 1];
      const targetPosition = calculatePathPosition(selectedPoint);

      const animate = () => {
        setPacmanProgress(prev => {
          // Slower speed for more precise movement
          const newProgress = prev + 0.001;

          // Check if we've reached the target with some tolerance
          if (Math.abs(newProgress - targetPosition) < 0.01) {
            setIsAnimating(false);
            setIsJumping(true);
            return targetPosition;
          }

          // Ensure we don't exceed the target position
          return Math.min(newProgress, targetPosition);
        });
      };

      const animationId = requestAnimationFrame(function loop() {
        animate();
        if (isAnimating) {
          requestAnimationFrame(loop);
        }
      });

      return () => cancelAnimationFrame(animationId);
    }
  }, [pathLength, isAnimating, stopAtPoint]);

  useEffect(() => {
    if (isJumping) {
      let jumpTime = 0;
      const jumpDuration = 500;
      const maxJumpHeight = -30;

      const jumpAnimation = () => {
        jumpTime += 16;
        const progress = jumpTime / jumpDuration;

        const height = Math.sin(progress * Math.PI) * maxJumpHeight;
        setJumpOffset(height);

        if (jumpTime < jumpDuration) {
          requestAnimationFrame(jumpAnimation);
        } else {
          setIsJumping(true);
          setJumpOffset(0);
        }
      };

      requestAnimationFrame(jumpAnimation);
    }
  }, [isJumping]);

  useEffect(() => {
    if (pathRef.current && pathLength > 0) {
      const distance = pacmanProgress * pathLength;
      const point = pathRef.current.getPointAtLength(distance);
      const lookAheadDist = Math.min(distance + 5, pathLength);
      const nextPoint = pathRef.current.getPointAtLength(lookAheadDist);
      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x);

      setPacmanPosition({ x: point.x, y: point.y });
      setPacmanRotation(angle * (180 / Math.PI));
    }
  }, [pacmanProgress, pathLength]);

  const timelinePoints = [
    { id: 1, year: 2025, title: "March 8", description: "Registration Open", x: isMobile ? 150 : 80, y: isMobile ? 100 : 250, icon: List },
    { id: 2, year: 2025, title: "March 30", description: "Registration Closed", x: isMobile ? 150 : 250, y: isMobile ? 200 : 150, icon: ListCheck },
    { id: 3, year: 2025, title: "April 4", description: "Shortlist Announced", x: isMobile ? 150 : 400, y: isMobile ? 300 : 350, icon: UserCheck },
    { id: 4, year: 2025, title: "April 4", description: "Round 2 Payment", x: isMobile ? 150 : 550, y: isMobile ? 400 : 180, icon: Banknote },
    { id: 5, year: 2025, title: "April 6", description: "Round 2 Reg Ends", x: isMobile ? 150 : 700, y: isMobile ? 500 : 400, icon: Lock },
    { id: 6, year: 2025, title: "April 12", description: "Hackathon Starts", x: isMobile ? 150 : 850, y: isMobile ? 600 : 200, icon: Timer },
    { id: 7, year: 2025, title: "April 13", description: "Hackathon Ends", x: isMobile ? 150 : 1000, y: isMobile ? 700 : 300, icon: TimerOff }
  ];

  const getPath = () => {
    const points = timelinePoints;
    if (isMobile) {
      return `M ${points[0].x} ${points[0].y} 
              ${points.slice(1).map((point) => `L ${point.x} ${point.y}`).join(' ')}`;
    }
    return `M ${points[0].x} ${points[0].y} 
            ${points.slice(1).map((point, i) => {
      const prev = points[i];
      const cpx1 = prev.x + (point.x - prev.x) * 0.4;
      const cpx2 = prev.x + (point.x - prev.x) * 0.6;
      const cpy1 = prev.y - 80;
      const cpy2 = point.y + 80;
      return `C ${cpx1},${cpy1} ${cpx2},${cpy2} ${point.x},${point.y}`;
    }).join(' ')}`;
  };

  const handleStopPointChange = (e) => {
    const pointId = parseInt(e.target.value);
    setStopAtPoint(pointId);
    setPacmanProgress(0);
    setIsAnimating(true);
    setIsJumping(false);
    setJumpOffset(0);
  };

  const handleRestartAnimation = () => {
    setPacmanProgress(0);
    setIsAnimating(true);
    setIsJumping(false);
    setJumpOffset(0);
  };

  return (
    <div className='Timeline'>
      <div className="w-full mb-[10vh] h-[100vh] overflow-x-hidden overflow-y-auto bg-gradient-to-br from-yellow-100 to-yellow-200 relative">
        <svg
          viewBox={isMobile ? "0 0 500 800" : "0 0 1300 500"}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <pattern id="parchment" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            </pattern>

            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3">
                <animate attributeName="offset" values="-1;1" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#6D28D9" stopOpacity="0.6">
                <animate attributeName="offset" values="-0.5;1.5" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3">
                <animate attributeName="offset" values="0;2" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#parchment)" />

          <path
            ref={pathRef}
            d={getPath()}
            fill="none"
            stroke="url(#flowGradient)"
            strokeWidth="6"
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          />

          <path
            d={getPath()}
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeDasharray="5 5"
            opacity="0.5"
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          />

          {timelinePoints.map((point, index) => (
            <g
              key={point.id}
              onMouseEnter={() => setActivePoint(point.id)}
              onMouseLeave={() => setActivePoint(null)}
              className={`cursor-pointer transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <circle
                cx={point.x}
                cy={point.y}
                r={activePoint === point.id ? 25 : 20}
                className="transition-all duration-300"
                fill={activePoint === point.id ? '#6D28D9' : '#8B5CF6'}
                opacity="0.8"
              />
              <g transform={`translate(${point.x - 12}, ${point.y - 12})`}>
                {React.createElement(point.icon, {
                  size: 24,
                  className: "text-white",
                  strokeWidth: 2
                })}
              </g>
              <g
                transform={
                  isMobile
                    ? `translate(${point.x + 40}, ${point.y - 20})`
                    : `translate(${point.x + 40}, ${point.y - 40})`
                }
              >
                <rect
                  width={isMobile ? "250" : "170"}
                  height="80"
                  rx="8"
                  fill="#6D28D9"
                  opacity="0.4"
                />
                <text
                  x="10"
                  y="25"
                  style={{ fill: "white", fontWeight: "bold" }}
                  className="text-[6px] md:text-[12px]"
                >
                  {point.title}
                </text>
                <text
                  x="10"
                  y="45"
                  style={{ fill: "white", fontWeight: "bold" }}
                  className="text-[6px] md:text-[12px]"
                >
                  {point.year}
                </text>
                <text
                  x="10"
                  y="65"
                  style={{ fill: "white", fontWeight: "bold", fontFamily: "Agdasima, sans-serif", fontSize: "16px" }}
                  className="text-[4px] md:text-[4px]"
                >
                  {point.description}
                </text>
              </g>

            </g>
          ))}
          <g
            transform={`translate(${pacmanPosition.x}, ${pacmanPosition.y + jumpOffset}) rotate(${pacmanRotation})`}
            style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.3))' }}
          >
            <foreignObject width="40" height="40" x="-20" y="-20">
              <div className='Pacman'
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ImPacman
                  size={35}
                  color="#FFCC00"
                  className={`${isAnimating ? "animate-pulse" : ""} drop-shadow-lg`}
                />
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>
    <div className='mb-[70vh]'></div>

    </div>
  );
};

export default Timeline;