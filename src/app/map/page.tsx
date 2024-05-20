'use client';

export default function History() {
  return (
    <>
      <div className="">
        <h1>Map</h1>

        <iframe
          width="600"
          height="450"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=API_KEY
            &q=Space+Needle,Seattle+WA">
        </iframe>
      </div>  
    </>
  );
}
