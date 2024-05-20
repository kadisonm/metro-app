"use client"

import styles from './styles.module.scss'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Map, WalletCards, Clock3} from 'lucide-react';

export default function Nav() {
    const pathname = usePathname()

    return (
        <div className={styles.primary}>
            <Link 
                href="/map" 
                className={`${pathname === '/map' ? styles.active : styles.item}`}
            >
                <Map id="large" />
                <h4>Map</h4>
            </Link>

            <Link 
                href="/cards" 
                className={styles.item}
                id={`${pathname === '/cards' ? "active" : ""}`}
            >
                <WalletCards id="large" />
                <h4>Cards</h4>
            </Link>

            <Link 
                href="/history" 
                className={`${pathname === '/history' ? styles.active : styles.item}`}
            >
                <Clock3 id="large" />
                <h4>History</h4>
            </Link>
        </div>
    )
}