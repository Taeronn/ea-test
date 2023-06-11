import React from 'react';
import Timer from "./Timer.jsx";
import Button from "./Button.jsx";

const Section1Main = () => {
    return (
        <div className="section-1-main">
            <div className="header-text">
                <h1>Under Construction</h1>
                <p>We're making lots of improvements and will be back soon</p>
            </div>
            <Timer/>
            <div className="section-1-main-content">
                <p>Check our event page when you wait:</p>
                <Button/>
            </div>
        </div>
    );
};

export default Section1Main;