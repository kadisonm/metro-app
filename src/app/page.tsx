'use client';

import Map from "./pages/map"
import Header from "./components/header"

export default function Home() {
  function clicked() {
    console.log("clicked")
  }

  return (
    <>
      <Header/>
      <Map/>

      <div className="">
        <h1>
          test
        </h1>

        <button onClick={() => {clicked()}}>
          test
        </button>
      </div>  
    </>
  );
}
