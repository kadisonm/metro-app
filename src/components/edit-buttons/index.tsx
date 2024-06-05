"use client"

import styles from './styles.module.scss'

import { useRouter } from 'next/navigation'

export default function EditButtons() {
    const router = useRouter()
    
    return (
        <div className={styles.primary}>
            <div className={styles.inactive}>
                <h3>Charge</h3>
            </div>

            <div className={styles.inactive}>
                <h3>Edit</h3>
            </div>

            <div className={styles.inactive}>
                <h3>Remove</h3>
            </div>

            <div className={styles.active} onClick={() => {
                router.push('/cards');
            }}>
                <h3>Cancel</h3>
            </div>
        </div>
    )
}