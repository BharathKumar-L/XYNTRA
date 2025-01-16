import React, { useState } from 'react';
import TimelineObserver from "react-timeline-animation";
import Timeline from '../../common/timeline';
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
            
        </div>
    );
}

export default Home;
