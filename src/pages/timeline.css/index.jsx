import React, { useState } from 'react';
import Regtimer from '../../common/reg_timer/reg_timer';
import FAQ from '../../common/faq';
import Regbutton from '../../common/button/reg-button';
import Timeline from '../../common/timeline';

function Timeline_Page() {
    return (
        <div className="flex home justify-start">
            {/* <Hero/> */}
            <Timeline/>
        </div>
    );
};

export default Timeline_Page;
