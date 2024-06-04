'use client';

import styles from './styles.module.scss'

import HistoryItem from '@/components/history-item';

export default function History() {
  return (
    <>
      <h1>History</h1>

      <div className={styles.primary}>
        <HistoryItem type='validated' time="12:55pm" place="Adelaide" />
        <HistoryItem type='validated' time="12:35pm" place="Adelaide" />
        <HistoryItem type='failed' time="12:35pm" place="Adelaide" />
      </div>  
    </>
  );
}
