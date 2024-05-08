'use client';

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  function clicked() {
    console.log("clicked")
  }

  return (
    <div className="">
      <h1>
        test
      </h1>

      <button onClick={() => {clicked()}}>
        test
      </button>
    </div>  
  );
}
