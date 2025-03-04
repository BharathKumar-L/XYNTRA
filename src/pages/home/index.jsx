import React, { useState } from 'react';
import TimelineObserver from "react-timeline-animation";
import Timeline from '../../common/timeline';
import Navbar from '../../common/navbar/navbar';
import Hero from '../../common/hero/hero';
import Footer from '../../common/footer/footer';
import Regtimer from '../../common/reg_timer/reg_timer';
import FAQ from '../../common/faq';
import Regbutton from '../../common/button/reg-button';
import Prize from '../../common/prize/prize';
import Domains from '../../common/domain';
import AboutUs from '../aboutus';

function Home() {
    return (
        <div className="flex home justify-start">
            {/* <Hero/> */}
            <Regtimer />
            <Regbutton />
            <AboutUs />
            <Prize />
            <Domains/>
            <FAQ />
        </div>
    );
};

export default Home;
