"use client"
import React, { useState, useEffect, use } from 'react';

const Button = () => {

    const [buttonValue, setButtonValue] = useState(0);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

        console.log("The Count Is:", buttonValue);

        if (isRunning) {
            const timer = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000);
        }
    }, [isRunning]);

    if (time == 10) {
        console.log("Time is 10, resetting button value and stopping timer.");

        setIsRunning(false);
        setTime(0);
        setButtonValue(0);
    }

    return (
        <div className='deneme'>
            <div className="data-label">
                <div className="score-panel"><span className='m-5 text-white-500'>{buttonValue}</span></div>
                <div className="time-panel"><span className='m-5 text-red-500'>{time}</span></div>
            </div>
            <div className="button-section">
                <button
                    onClick={() => {
                        setButtonValue(buttonValue + 1);
                        setIsRunning(true)
                    }}
                    className="bg-red-600 m-4 p-5 value-button border-none"
                >CLICK</button>
            </div>
        </div >
    );
};

export default Button;