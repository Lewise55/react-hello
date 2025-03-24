import { useState, useEffect } from "react";
import Counter from "./Counter";
import Buttons from "./Buttons";

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Start
    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    // Stop
    const stopTimer = () => {
        setIsRunning(false);
    };

    // Reset
    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isRunning]);

    return (
        <div className="text-center">
            <Counter seconds={seconds} />
            <br />
            <Buttons startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} />
        </div>
    );
};

export default Home;
