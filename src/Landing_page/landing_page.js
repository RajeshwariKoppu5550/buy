import React from 'react';
import Navbar from './navibar';
import Lanading_page_hero from './landing_page_hero';
import First_three_components from '../Components/first_three_components';

function LandingPage() {
    return (
        <div>
            <Navbar />
            <Lanading_page_hero />
            <First_three_components />
        </div>
    );
}

export default LandingPage;
