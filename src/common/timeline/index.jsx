// TimelineComponent.jsx
import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const TimelineComponent = () => {
  const pathRef = useRef(null);
  const events = [
    { id: 1, title: "First Milestone", description: "Beginning of the journey" },
    { id: 2, title: "Second Milestone", description: "Major achievement reached" },
    { id: 3, title: "Third Milestone", description: "Pivotal turning point" },
    { id: 4, title: "Fourth Milestone", description: "Nearing completion" },
    { id: 5, title: "Final Milestone", description: "Goal accomplished" }
  ];

  useEffect(() => {
    if (pathRef.current) {
      // Get the total length of the path for animation
      const pathLength = pathRef.current.getTotalLength();

      // Set initial state - path is invisible
      pathRef.current.style.strokeDasharray = pathLength;
      pathRef.current.style.strokeDashoffset = pathLength;

      // Animate the path drawing
      setTimeout(() => {
        pathRef.current.style.transition = 'stroke-dashoffset 3s ease-in-out';
        pathRef.current.style.strokeDashoffset = '0';
      }, 300);

      // Animate the dots to appear sequentially
      const dots = document.querySelectorAll('.timeline-svg__dot');
      dots.forEach((dot, index) => {
        dot.classList.add('visible');
        setTimeout(() => {
          dot.classList.add('visible');
        }, 300 + (index * 600));
      });
    }
  }, []);

  return (
    <div className="timeline-container">
      <h1 className="timeline-container__title">TIMELINE</h1>

      <div className="timeline-container__wrapper">
        <svg className="timeline-svg" viewBox="0 0 100 500" preserveAspectRatio="none">
          <defs>
            <linearGradient id="timeline-gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#800080" />   
              <stop offset="25%" stopColor="#a020f0" />  
              <stop offset="50%" stopColor="#9370db" />  
              <stop offset="75%" stopColor="#a020f0" />  
              <stop offset="100%" stopColor="#800080" /> 
            </linearGradient>


            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* The main path */}
          <path
            ref={pathRef}
            className="timeline-svg__path"
            d="M 10,10 H 70 C 95,10 95,120 70,120 H 30 C 5,120 5,230 30,230 H 70 C 95,230 95,340 70,340 H 30 C 5,340 5,450 30,450 H 90"
            stroke="url(#timeline-gradient)"
            filter="url(#glow)"
          />

          {/* Dots positioned along the path */}
          <circle className="timeline-svg__dot" cx="10" cy="10" />
          <circle className="timeline-svg__dot" cx="89" cy="70" />
          <circle className="timeline-svg__dot" cx="12" cy="180" />
          <circle className="timeline-svg__dot" cx="89" cy="290" />
          <circle className="timeline-svg__dot" cx="12" cy="390" />
        </svg>

        {/* Event content positioned outside of SVG */}
        <div className="timeline-events-container">
          {events.map((event, index) => {
            const eventNumber = index + 1;
            const isLeft = index % 2 === 0;
            const contentClass = isLeft ?
              'timeline-event__content timeline-event__content--left' :
              'timeline-event__content timeline-event__content--right';

            // Calculate positions based on dot positions
            let topPosition;
            switch (index) {
              case 0: topPosition = '10px'; break;
              case 1: topPosition = '120px'; break;
              case 2: topPosition = '230px'; break;
              case 3: topPosition = '340px'; break;
              case 4: topPosition = '450px'; break;
              default: topPosition = '0';
            }

            return (
              <div
                key={event.id}
                className="timeline-event"
                style={{ top: topPosition }}
              >
                <div className={contentClass}>
                  <h3 className="timeline-event__title">{event.title}</h3>
                  <p className="timeline-event__description">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;