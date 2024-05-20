"use client"

import styles from './styles.module.scss'

import { CircleCheck } from 'lucide-react';
import { Settings } from 'lucide-react';

export default function Header() {
    return (
        <div className={styles.primary}>
            <div className="empty" />
            <div className={styles.validated}>
                <CircleCheck id="small" />
                <h3>52:00</h3>
            </div>

            <Settings id="small" />
        </div>
    )
}