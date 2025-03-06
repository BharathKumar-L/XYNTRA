import React from 'react';
import Regtimer from '../../common/reg_timer/reg_timer';
import FAQ from '../../common/faq';
import Regbutton from '../../common/button/reg-button';
import Prize from '../../common/prize/prize';
import Domains from '../../common/domain';
import Aboutus from '../../common/aboutus/aboutus';

function Home() {
    return (
        <div className="flex home justify-start">
            <Regtimer />
            <Regbutton />
            <Aboutus/>
            <Domains/>
            <Prize />
            <FAQ />
        </div>
    );
};

export default Home;
