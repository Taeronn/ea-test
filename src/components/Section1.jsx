import React from 'react';
import Header from "./Header.jsx";
import Section1Main from "./Section1Main.jsx";
import Footer from "./Footer.jsx";

const Section1 = ({active, setActive}) => {
    return (
        <div className="section-1">
            <div className="wrapper">
                <Header/>
                <Section1Main/>
                <Footer active={active} setActive={setActive}/>
            </div>
        </div>
    );
};

export default Section1;