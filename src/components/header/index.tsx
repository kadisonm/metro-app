"use client"

import styles from './styles.module.scss'

import { CircleCheck } from 'lucide-react';
import { Settings } from 'lucide-react';

import { useState } from 'react';

export default function Header() {
    // const [minutes, setMinutes] = useState(52);
    // const [seconds, setSeconds] = useState(0);

    // if (seconds === 0) {
    //     setMinutes(minutes - 1);
    // }

    // if (minutes === 0) {
    //     setMinutes(59);
    // }

    // setInterval(() => {
    //     if (seconds - 1 === 0) {
    //         setSeconds(seconds - 1);
    //     }
    // }, 1)
    
    return (
        <div className={styles.primary}>
            <div className="empty" />
            <div className={styles.validated}>
                <CircleCheck id="small" />
                <h3>`59:00`</h3>
            </div>

            <div className={styles.settings}>
                <Settings id="small" />
            </div>
        </div>
    )
}