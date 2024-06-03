"use client"

import styles from './styles.module.scss'

import { EllipsisVertical } from 'lucide-react'

import Image from 'next/image'

export default function Card({ type }: { type: 'regular' | 'student' | 'concession' }) {
    return (
        <div className={styles[type]}>
            <div className={styles.left}>
                <div className=""></div>
            
                <div className={styles.balance}>
                    <h3>Balance</h3>
                    <h2>$5.00</h2>
                </div>

                <div className={styles.type}>
                    <h3>{type[0].toUpperCase() + type.slice(1)}</h3>    
                </div>
            </div>   
            <div className={styles.right}>
                <img 
                    src="/metro_logo.png"
                    width={85}
                    height={50}
                ></img>

                <div className={styles.button}>
                    <EllipsisVertical id="medium"/>

                    <div/>
                </div>
            </div>
        </div>
    )
}