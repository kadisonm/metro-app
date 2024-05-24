'use client';

import { useRef, useState, MutableRefObject} from 'react';
import styles from './styles.module.scss'

// AIzaSyAWifE8HCuECIIVcvpArqw-4qfdz3rZDrw

export default function Map() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  let toInput: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  let fromInput: MutableRefObject<HTMLElement | undefined> = useRef(undefined);

  function buttonPressed() {
    if (toInput !== undefined && fromInput !== undefined) {
      let fromText = fromInput.current?.textContent?.toLowerCase();
      fromText?.replaceAll(" ", "+");

      let toText = toInput.current?.textContent?.toLowerCase();
      toText?.replaceAll(" ", "+");

      setFrom(fromText || "")
      setTo(toText || "")
    } 
  }

  function addMap() {
    if (to === "" || from === "") {
      return;
    }

    let apiKey = "AIzaSyAWifE8HCuECIIVcvpArqw-4qfdz3rZDrw"

    let url = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&mode=transit&origin=${from}&destination=${to}`

    return (
      <iframe
          loading="lazy"
          src={url}>
      </iframe>
    )
  }

  return (
    <div className="">
      <h1>Map</h1>

      <div className={styles.primary}>
        <input type="text" placeholder='From' ref={fromInput}/>
        <input type="text" placeholder='To' ref={toInput}/>
        <button onClick={buttonPressed}>Go!</button>

        {addMap()}
      </div>
    </div>  
  );
}
