"use client"

import styles from './styles.module.scss'

import { CircleCheck, CircleX, TramFront, TrainFront, BusFront } from 'lucide-react';
import { Settings } from 'lucide-react';


export default function HistoryItem(
    { type, transport, time, route, price }: { type: 'validated' | 'failed', transport: 'train' | 'tram' | 'bus', time: string, route: string, price: string }
) {
    function createIcon() {
        if (transport === 'train') {
            return (
                <TrainFront id='large' />
            );
        } else if (transport === 'tram') {
            return (
                <TramFront id='large' />
            );
        } else if (transport === 'bus') {
            return (
                <BusFront id='large' />
            );
        }
    }

    function createValidated() {
        if (type === 'validated') {
            return (
                <p className={styles[type]}>Validated</p>
            );
        } else if (type === 'failed') {
            return (
                <p className={styles[type]}>Failed</p>
            );
        }
    }

    return (
        <div className={styles.primary}>
            <div className={styles.left}>
                <div className={styles.icon} id='large'>
                    {createIcon()}
                </div>
                
                <div>
                    <h4>{route}</h4>
                    <p>{time}</p>
                </div>
            </div>

            <div className={styles.right}>
                <h3>{price}</h3>

                {createValidated()}
            </div>        
        </div>
    )
}