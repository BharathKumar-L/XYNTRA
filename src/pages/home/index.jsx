import React, { useState } from 'react';
import TimelineObserver from "react-timeline-animation";
import Timeline from '../../common/timeline';
import Navbar from '../../common/navbar/navbar';
import Hero from '../../common/hero/hero';
import Footer from '../../common/footer/footer';
import Regtimer from '../../common/reg_timer/reg_timer';
import FAQ from '../../common/faq';
import Registration from '../../common/Registration';

function Home() {

    return (
        <div className="flex home justify-start">
            {/* <Hero/> */}
            <Regtimer />
            <button >
                <a href="/register">Register</a>
            </button>
            <FAQ />
        </div>
    );
};

export default Home;
