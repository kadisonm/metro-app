'use client';

import Card from "@/components/card";
import EditButtons from "@/components/edit-buttons"

import styles from './styles.module.scss'

export default function Page() {
    return (
        <div className={styles.primary}>
            <Card type='student' edit={false} />
            <EditButtons />
        </div>
    )
}