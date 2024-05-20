"use client"

import styles from './styles.module.scss'

import { useRouter, usePathname } from 'next/navigation'

import { Map, WalletCards, Clock3} from 'lucide-react';

export default function Nav() {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <div className={styles.primary}>
            <div 
                onClick={() => {router.push("/map")}}
                className={styles.item}
                id={`${pathname === '/map' ? styles.current : ""}`}
            >
                <Map id="large" />
                <h4>Map</h4>
            </div>

            <div 
                onClick={() => {router.push("/cards")}}
                className={styles.item}
                id={`${pathname === '/cards' ? styles.current : ""}`}
            >
                <WalletCards id="large" />
                <h4>Cards</h4>
            </div>

            <div 
                onClick={() => {router.push("/history")}}
                className={styles.item}
                id={`${pathname === '/history' ? styles.current : ""}`}
            >
                <Clock3 id="large" />
                <h4>History</h4>
            </div>
        </div>
    )
}