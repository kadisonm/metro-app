"use client"

import styles from './styles.module.scss'

import { EllipsisVertical } from 'lucide-react'

import { useRouter } from 'next/navigation'

export default function Card({ type, edit }: { type: 'regular' | 'student' | 'concession', edit: boolean }) {
    const router = useRouter()

    function addButton() {
        return (
            <div className={styles.button} onClick={() => {
                router.push(`/edit/${type}`);
            }}>
                <EllipsisVertical id="medium"/>
                <div />
            </div>
        )
    }

    return (
        <div className={styles[type]}>
            <div className={styles.left}>
                <div/>
            
                <div>
                    <h3>Balance</h3>
                    <h2>$5.00</h2>
                </div>

                <div>
                    <h3>{type[0].toUpperCase() + type.slice(1)}</h3>    
                </div>
            </div>   
            <div className={styles.right}>
                <img 
                    src={"/metro-app/metro_logo.png"}
                    width={85}
                    height={50}
                ></img>

                {edit === true && addButton()}
            </div>
        </div>
    )
}