import React from 'react';
import VectorLeft from "./svg/VectorLeft.jsx";
import VectorRight from "./svg/VectorRight.jsx";
import Logo from "./svg/Logo.jsx";

const Header = () => {
    return (
        <div className="header">
            <div className="vector-left">
                <VectorLeft/>
            </div>

            <div className="vector-right">
                <VectorRight/>
            </div>

            <div className="logo">
                <Logo/>
            </div>


        </div>
    );
};

export default Header;