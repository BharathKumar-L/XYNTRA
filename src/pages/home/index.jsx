import React, { useState } from 'react';
import TimelineObserver from "react-timeline-animation";
// import Timeline from '../../common/timeline';
import Navbar from '../../common/navbar/navbar';
import Hero from '../../common/hero/hero';
import Footer from '../../common/footer/footer';

function Home() {
    const [message, setMessage] = useState("");

    const onCallback = () => {
      console.log("awesome");
    };

    return (
        <div className="flex justify-start">
            <p>hello</p>
            <TimelineObserver
                initialColor="#e5e5e5"
                fillColor="black"
                handleObserve={(setObserver) => (
                    <Timeline
                        callback={onCallback}
                        className="timeline"
                        setObserver={setObserver}
                    />
                )}
            />
        </div>
    );
}

export default Home;
