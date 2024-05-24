'use client';

import { useState } from 'react';
import styles from './styles.module.scss'
import { Circle, MapPin } from 'lucide-react';

export default function Map() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function addMap() {
    if (to === "" || from === "") {
      return;
    }

    let apiKey = "AIzaSyAWifE8HCuECIIVcvpArqw-4qfdz3rZDrw"

    let url = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&mode=transit&origin=${from}+adelaide+sa&destination=${to}+adelaide+sa`

    return (
      <iframe
          loading="lazy"
          src={url}>
      </iframe>
    )
  }

  return (
    <div className={styles.primary}>
      <h1>Map</h1>

      <div className={styles.box}>
        <Circle />
        <input type="text" placeholder='From' value={from} onChange={(e) => { setFrom(e.target.value) }}/>
      </div>

      <div className={styles.box}>
        <MapPin />
        <input type="text" placeholder='To' value={to} onChange={(e) => { setTo(e.target.value) }}/>
      </div>

      {addMap()}
    </div>
  );
}
