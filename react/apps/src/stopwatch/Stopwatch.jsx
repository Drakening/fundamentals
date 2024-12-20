import React, { useState, useEffect, useRef } from 'react';
import styles from './stopwatch.module.css';

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning) {
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return ()=> {
            clearInterval(intervalIdRef.current);
        }
        
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    }
    function stop() {
        setIsRunning(false)
    }
    function reset() {
        setElapsedTime(0)
        setIsRunning(false)
    }
    function formatTime() {
        
        let hours = math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = math.floor(elapsedTime / (1000) % 60);
        let milliseconds = math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");


        return `${minutes}:${seconds}:${milliseconds}`
    }


    return (
        <div className={styles.container}>
            <div>{formatTime}</div>
            <div>
                <button onClick={start}>start</button>
                <button onClick={stop}>stop</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;
