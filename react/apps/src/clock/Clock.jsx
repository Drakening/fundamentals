import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        
        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // If hours is 0, make it 12
        const meridiem = time.getHours() >= 12 ? "PM" : "AM";

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.time}>
                    {formatTime()}
                </div>
                <div className={styles.title}>
                    Digital Clock
                </div>
            </div>
        </div>
    );
}

export default Clock;
