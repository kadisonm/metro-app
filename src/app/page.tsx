'use client';

export default function Home() {
  function clicked() {
    console.log("clicked")
  }

  return (
    <>
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
