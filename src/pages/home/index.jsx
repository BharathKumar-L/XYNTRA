import React, { useState } from 'react';
import FAQ from '../../common/faq';
// import Timeline from '../../common/timeline';
import Navbar from '../../common/navbar/navbar';
import Hero from '../../common/hero/hero';
import Footer from '../../common/footer/footer';

function Home() {
    // Reset Password Component

    return (
        <div className="flex justify-start">
            <Navbar />
            <Hero />
            <FAQ />
            <Footer />
        </div>
    );
}

export default Home;
