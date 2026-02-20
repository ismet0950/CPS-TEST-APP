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
        
        if (time == 10) {
            
        }

    }, [isRunning]);

    return (
        <div className='deneme'>
            <button
                onClick={() => {
                    setButtonValue(buttonValue + 1);
                    setIsRunning(true)
                }}
                className="bg-red-600 m-4 p-5 value-button border-none"
            >CLICK</button>
            <h1>{buttonValue}</h1>
            <h1 className='m-5 text-red-500'>{time}</h1>
        </div >
    );
};

export default Button;