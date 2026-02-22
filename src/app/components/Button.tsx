"use client"
import React, { useState, useEffect, use } from 'react';

const Button = () => {

    const [buttonValue, setButtonValue] = useState(0);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [result, setResult] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {

        console.log("The Count Is:", buttonValue);

        if (isRunning) {
            const timer = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000);

            return () => clearInterval(timer);
        }

    }, [isRunning]);

    if (time == 10) {
        console.log("Time is 10, resetting button value and stopping timer.");

        const score = buttonValue;
        setResult(score);
        console.log("Final Score:", score);
        setGameOver(false);
        setIsRunning(false);
        setTime(0);
        setButtonValue(0);
    }

    return (
        <div className='main-container'>
            <div className="data-label">
                <div className="score-panel"><span>Score</span><span className='score-value m-5 text-white-500'>{buttonValue}</span></div>
                <div className="time-panel"><span>Time</span><span className='score-value m-5 text-red-500'>{time}</span></div>
                <div className="result-panel"><span>Result</span><span className='score-value m-5 text-red-500'>{result}</span></div>
                <button
                    onClick={() => setGameOver(true)}
                    className="m-4 p-5 retry-button border-none"
                >RETRY</button>
            </div>
            {
                gameOver && <div className="button-section">
                    <button
                        onClick={() => {
                            setButtonValue(buttonValue + 1);
                            setIsRunning(true)
                        }}
                        className="m-4 p-5 score-button border-none"
                    >CLICK</button>
                </div>
            }
        </div >
    );
};

export default Button;