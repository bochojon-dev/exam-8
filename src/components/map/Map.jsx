import React from "react";

const Map = () => {
  return (
    <div>
      <div
        style={{
          overflow: "hidden",
          width: "90%",
          margin: "60px auto",
          borderRadius: "15px",
        }}
      >
        <iframe
          width="100%"
          height="670"
          className="map"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Najot%20talim+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
    </div>
  );
};

export default Map;
