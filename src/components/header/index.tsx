"use client"

import styles from './styles.module.scss'

import { CircleCheck } from 'lucide-react';
import { Settings } from 'lucide-react';

import { useState, useEffect } from 'react';

export default function Header() {
    const [time, setTime] = useState({ minutes: 59, seconds: 0});

    useEffect(() => {
        const interval = setInterval(() => {
            let { minutes, seconds } = time;
            seconds - 1;

            if (seconds === 0) {
                if (minutes === 0) {
                    minutes = 59;
                    seconds = 59;
                } else {
                    minutes -= 1;
                    seconds = 59;
                }
            } else {
                seconds -= 1;
            }

            setTime({minutes, seconds});
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    console.log("rerender", time)

    return (
        <div className={styles.primary}>
            <div className="empty" />
            <div className={styles.validated}>
                <CircleCheck id="small" />
                <h3>{`${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`}</h3>
                <div/>
            </div>

            <div className={styles.settings}>
                <Settings id="small" />
            </div>
        </div>
    )
}