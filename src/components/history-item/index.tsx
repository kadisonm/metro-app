"use client"

import styles from './styles.module.scss'

import { CircleCheck, CircleX } from 'lucide-react';
import { Settings } from 'lucide-react';


export default function HistoryItem(
    { type, time, place }: { type: 'validated' | 'failed', time: string, place: string }
) {
    function createValidated() {
        if (type === 'validated') {
            return (
                <div className={styles[type]}>
                    <CircleCheck id='large' />
                </div>
            );
        } else {
            return (
                <div className={styles[type]}>
                    <CircleX id='large' />
                </div>
            );
        }
    }

    return (
        <div className={styles.primary}>
            {createValidated()}
            {time}
            {place}
        </div>
    )
}