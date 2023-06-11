import React from 'react';
import Cross from "./svg/Cross.jsx";

const Popup = ({active, setActive}) => {
    return (
        <div className={active ? "popup" : "popup hide"} onClick={() => setActive(false)}>
            <div className="popup__content" onClick={e => e.stopPropagation()}>
                <div className="cross">
                    <button onClick={() => setActive(false)}>
                        <Cross id="cross"/>
                    </button>
                </div>
                <h1>SUCCESS!</h1>
                <p>You have successfully subscribed to the email newsletter</p>
                <div className="close-btn">
                    <button onClick={() => setActive(false)}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;