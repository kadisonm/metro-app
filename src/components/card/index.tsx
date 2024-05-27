"use client"

import styles from './styles.module.scss'

export default function Card({ type }: { type: 'regular' | 'student' | 'concession' }) {
    return (
        <div className={styles[type]}>
            <h2>Balance</h2>
            <h1>$5.00</h1>
            <h2>{type}</h2>    
        </div>
    )
}