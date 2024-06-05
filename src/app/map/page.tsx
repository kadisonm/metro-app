'use client';

import { useState } from 'react';
import styles from './styles.module.scss'
import { Circle, MapPin } from 'lucide-react';

export default function Map() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function addMap() {
    let apiKey = "AIzaSyAWifE8HCuECIIVcvpArqw-4qfdz3rZDrw"

    let url = `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=interchanges+adelaide+australia`;

    let origin = from.replace(" ", "+");
    let destination = to.replace(" ", "+");

    if (origin !== "") {
      url = `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${origin}+adelaide+australia`;
    }
    
    if (destination !== "")  {
      url = `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${destination}+adelaide+australia`;
    }
    
    if (origin !== "" && destination !== "") {
      url = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&mode=transit&origin=${origin}+australia&destination=${destination}+adelaide+australia`;
    }

    return (
      <iframe
        loading="lazy"
        src={url}>
      </iframe>
    );
  }

  return (
    <div className={styles.primary}>
      <h1>Map</h1>

      <h3>Where to next?</h3>

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
