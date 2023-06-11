import React, {useState, useEffect} from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const deadline = new Date('July 24, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const difference = deadline - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        let seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');


        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="timer">
            <div className="timer-item">
                <h1 className="days">{timeLeft.days}</h1>
                <div className="timer-item-name full">Days</div>
                <div className="timer-item-name short hide">DD</div>
            </div>
            <div className="timer-separator">
                <h1>:</h1>
            </div>
            <div className="timer-item">
                <h1 className="days">{timeLeft.hours}</h1>
                <div className="timer-item-name full">Hours</div>
                <div className="timer-item-name short hide">HH</div>
            </div>
            <div className="timer-separator">
                <h1>:</h1>
            </div>
            <div className="timer-item">
                <h1 className="days">{timeLeft.minutes}</h1>
                <div className="timer-item-name full">Minutes</div>
                <div className="timer-item-name short hide">MM</div>
            </div>
            <div className="timer-separator">
                <h1>:</h1>
            </div>
            <div className="timer-item">
                <h1 className="days">{timeLeft.seconds}</h1>
                <div className="timer-item-name full">Seconds</div>
                <div className="timer-item-name short hide">SS</div>
            </div>
        </div>
    );
};

export default Timer;