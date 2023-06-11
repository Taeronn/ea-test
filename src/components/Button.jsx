import React from 'react';
import ArrowRight from "./svg/ArrowRight.jsx";

const Button = () => {
    return (
        <div className="button">
            <a href="https://www.odditycentral.com/events/suction-cup-tug-of-war-a-bald-mans-sport.html">
                <button>
                    <p>Go to the event</p>
                    <ArrowRight/>
                </button>
            </a>
        </div>
    );
};

export default Button;