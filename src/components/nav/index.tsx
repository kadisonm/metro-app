import styles from './styles.module.scss'

import { Map, WalletCards, Clock3} from 'lucide-react';

export default function Nav() {
    return (
        <div className={styles.primary}>
            <div className={styles.item}>
                <Map id="large" />
                <h4>Map</h4>
            </div>

            <div className={styles.item}>
                <WalletCards id="large" />
                <h4>Cards</h4>
            </div>

            <div className={styles.item}>
                <Clock3 id="large" />
                <h4>History</h4>
            </div>
        </div>
    )
}