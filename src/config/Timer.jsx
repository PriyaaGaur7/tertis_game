import React, { useState, useEffect } from 'react';

function Timer({ initialTime, onTimeUp }) {
    const [remainingTime, setRemainingTime] = useState(initialTime);

    useEffect(() => {
        let timer;

        if (remainingTime > 0) {
            timer = setInterval(() => {
                if (remainingTime > 0) {
                    setRemainingTime(remainingTime - 1);
                } else {
                    clearInterval(timer);
                    onTimeUp();
                }
            }, 1000);
        } else {
            onTimeUp();
        }

        return () => {
            // Clear the interval when the component unmounts
            clearInterval(timer);
        };
    }, [remainingTime, onTimeUp]);

    return (
        <div>
            <p>Remaining Time: {remainingTime} seconds</p>
        </div>
    );
}

export default Timer;
