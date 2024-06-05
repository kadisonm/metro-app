'use client';

import styles from './styles.module.scss'

import HistoryItem from '@/components/history-item';

export default function History() {
  return (
    <>
      <h1>History</h1>

      <div className={styles.primary}>
        <div className={styles.group}>
          <h3>Today</h3>
          <div className={styles.items}>
            <HistoryItem type='validated' transport='train' time="12:09 pm" route="GAW - Gawler to City" price="$1.50" />
            <HistoryItem type='validated' transport='tram' time="9:23 am" route="GLNELG - Glenelg to Royal Adelaide Hospital" price="$1.50" />
            <HistoryItem type='failed' transport='bus' time="8:01 am" route="110 - West Lakes Centre Interchange To City" price="$1.50" />
          </div>
        </div>

        <div className={styles.group}>
          <h3>03/06/2024</h3>
          <div className={styles.items}>
            <HistoryItem type='validated' transport='train' time="12:09 pm" route="GAW - Gawler to City" price="$1.50" />
          </div>
        </div>

        <div className={styles.group}>
          <h3>01/06/2024</h3>
          <div className={styles.items}>
            <HistoryItem type='validated' transport='train' time="12:09 pm" route="GAW - Gawler to City" price="$1.50" />
            <HistoryItem type='validated' transport='tram' time="9:23 am" route="GLNELG - Glenelg to Royal Adelaide Hospital" price="$1.50" />
          </div>
        </div>
      </div>  
    </>
  );
}
