import React from 'react';
import HeroBanner from '../heroBanner/heroBanner';
import SuccessStories from '../successStories/successStories';
import './home.css';
const home = (props) => (
    <React.Fragment>
        <div className="home-content">
            <HeroBanner displayText="We help students find a career that maximizes their potential"/>
            <SuccessStories/>
        </div>
    </React.Fragment>
);

export default home;