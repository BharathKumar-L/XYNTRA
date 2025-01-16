import React, { useState } from 'react';
import TimelineObserver from "react-timeline-animation";
import Timeline from '../../common/timeline';
import Navbar from '../../common/navbar/navbar';
import Hero from '../../common/hero/hero';
import Footer from '../../common/footer/footer';
import Regtimer from '../../common/reg_timer/reg_timer';

function Home() {

    return (
        <div className="flex justify-start">
            <p>hello</p>
            <Hero/>
            <Regtimer />
        </div>
    );
}

export default Home;
