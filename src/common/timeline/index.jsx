import React, { useState, useEffect } from 'react';
import { Compass, Anchor, Ship, Map, Palmtree, Skull, Crown, Wind } from 'lucide-react';

const Timeline = () => {
  const [activePoint, setActivePoint] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const timelinePoints = [
    { id: 1, year: 2020, title: "Journey Begins", description: "Setting sail from the harbor of new beginnings", x: isMobile ? 150 : 100, y: isMobile ? 100 : 250, icon: Ship },
    { id: 2, year: 2021, title: "Mysterious Island", description: "Dense jungles hiding ancient secrets", x: isMobile ? 150 : 250, y: isMobile ? 200 : 150, icon: Palmtree },
    { id: 3, year: 2022, title: "Ancient Temple", description: "Sacred grounds of forgotten civilizations", x: isMobile ? 150 : 400, y: isMobile ? 300 : 350, icon: Skull },
    { id: 4, year: 2023, title: "Hidden Cove", description: "Safe harbor amidst treacherous waters", x: isMobile ? 150 : 550, y: isMobile ? 400 : 180, icon: Anchor },
    { id: 5, year: 2024, title: "Lost City", description: "Magnificent ruins of golden age", x: isMobile ? 150 : 700, y: isMobile ? 500 : 400, icon: Crown },
    { id: 6, year: 2025, title: "Dragon's Lair", description: "Where legends guard ancient treasures", x: isMobile ? 150 : 850, y: isMobile ? 600 : 200, icon: Wind },
    { id: 7, year: 2026, title: "Treasure Chamber", description: "Final destination of untold riches", x: isMobile ? 150 : 1000, y: isMobile ? 700 : 300, icon: Map }
  ];

  const getPath = () => {
    if (isMobile) {
      return `M ${timelinePoints[0].x} ${timelinePoints[0].y} 
              ${timelinePoints.slice(1).map((point) => `L ${point.x} ${point.y}`).join(' ')}`;
    }
    return `M ${timelinePoints[0].x} ${timelinePoints[0].y} 
            ${timelinePoints.slice(1).map((point, i) => {
              const prev = timelinePoints[i];
              const cpx1 = prev.x + (point.x - prev.x) * 0.4;
              const cpx2 = prev.x + (point.x - prev.x) * 0.6;
              const cpy1 = prev.y - 80;
              const cpy2 = point.y + 80;
              return `C ${cpx1},${cpy1} ${cpx2},${cpy2} ${point.x},${point.y}`;
            }).join(' ')}`;
  };

  return (
    <div className="w-full h-[80vh] overflow-x-hidden overflow-y-auto bg-gradient-to-br from-yellow-100 to-yellow-200 relative">
      <svg 
        viewBox={isMobile ? "0 0 500 800" : "0 0 1300 500"} 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern id="parchment" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect width="200" height="200" fill="#f3e8d6" />
            <circle cx="100" cy="100" r="60" fill="#e8d5b5" opacity="0.4" />
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

        {/* Flowing path */}
        <path
          d={getPath()}
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="6"
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Base path */}
        <path
          d={getPath()}
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeDasharray="5 5"
          opacity="0.5"
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Timeline points and info boxes */}
        {timelinePoints.map((point, index) => (
          <g 
            key={point.id}
            onMouseEnter={() => setActivePoint(point.id)}
            onMouseLeave={() => setActivePoint(null)}
            className={`cursor-pointer transition-opacity duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Point marker */}
            <circle
              cx={point.x}
              cy={point.y}
              r={activePoint === point.id ? 25 : 20}
              className="transition-all duration-300"
              fill={activePoint === point.id ? '#6D28D9' : '#8B5CF6'}
              opacity="0.8"
            />

            {/* Icon */}
            <g transform={`translate(${point.x - 12}, ${point.y - 12})`}>
              {React.createElement(point.icon, {
                size: 24,
                className: "text-white",
                strokeWidth: 2
              })}
            </g>

            {/* Info box - positioned differently for mobile/desktop */}
            <g transform={isMobile ? 
              `translate(${point.x + 40}, ${point.y - 20})` : 
              `translate(${point.x + 40}, ${point.y - 40})`
            }>
              <rect
                width={isMobile ? "250" : "200"}
                height="80"
                rx="8"
                className={`transition-all duration-300 ${
                  activePoint === point.id ? 'fill-purple-100' : 'fill-white'
                }`}
                opacity="0.9"
              />
              <text
                x="10"
                y="25"
                className="text-sm font-bold fill-purple-900"
              >
                {point.title}
              </text>
              <text
                x="10"
                y="45"
                className="text-xs fill-purple-700"
              >
                {point.year}
              </text>
              <text
                x="10"
                y="65"
                className="text-xs fill-purple-600"
              >
                {point.description}
              </text>
            </g>

            {/* Final point marker */}
            {index === timelinePoints.length - 1 && (
              <g transform={`translate(${point.x}, ${point.y})`}>
                <path
                  d="M-15,-15 L15,15 M-15,15 L15,-15"
                  stroke="#FF0000"
                  strokeWidth="4"
                  className="animate-pulse"
                />
              </g>
            )}
          </g>
        ))}

        {/* Decorative elements */}
        {!isMobile && (
          <>
            <g transform="translate(80, 80)" className="animate-spin" style={{ transformOrigin: '50% 50%', animationDuration: '20s' }}>
              <use href="#compassRose" />
            </g>
            <g transform="translate(1220, 420)" className="animate-spin" style={{ transformOrigin: '50% 50%', animationDuration: '20s' }}>
              <use href="#compassRose" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
};

export default Timeline;