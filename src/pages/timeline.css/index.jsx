import React, { useState } from 'react';
import Regtimer from '../../common/reg_timer/reg_timer';
import FAQ from '../../common/faq';
import Regbutton from '../../common/button/reg-button';
import Timeline from '../../common/timeline';
import Brochure from '../../common/brochure/brochure';

function Timeline_Page() {
    return (
        <div className="flex home justify-start">
            {/* <Hero/> */}
            <Timeline/>
            <Brochure />
        </div>
    );
};

export default Timeline_Page;
