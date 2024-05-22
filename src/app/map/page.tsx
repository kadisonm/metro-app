'use client';

import styles from './styles.module.scss'

export default function History() {
  return (
    <div className="">
      <h1>Map</h1>

      <div className={styles.primary}>
        <iframe
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAWifE8HCuECIIVcvpArqw-4qfdz3rZDrw&q=ADELAIDE+SA">
        </iframe>
      </div>
    </div>  
  );
}
