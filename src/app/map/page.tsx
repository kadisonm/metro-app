'use client';

export default function History() {
  return (
    <>
      <div className="">
        <h1>Map</h1>

        <div className="map">
          <iframe
            width="350"
            height="600"
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAWifE8HCuECIIVcvpArqw-4qfdz3rZDrw&q=Space+Needle,Seattle+WA">
          </iframe>
        </div>
      </div>  
    </>
  );
}
