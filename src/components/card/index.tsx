"use client"

import styles from './styles.module.scss'

export default function Card({ type }: { type: 'regular' | 'student' | 'concession' }) {
    return (
        <div className={styles[type]}>
            <div className={styles.balance}>
                <h2>Balance</h2>
                <h1>$5.00</h1>
            </div>

            <div className={styles.type}>
                <h2>{type[0].toUpperCase() + type.slice(1)}</h2>    
            </div>
        </div>
    )
}