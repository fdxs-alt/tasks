import useGeo from '../Hooks/useGeo';
import React, { useRef } from "react";

const GeoExample = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { geoData, toggleListening } = useGeo(ref);
  return (
    <div ref={ref}>
      {geoData && (
        <h5>
          {geoData.latitude} {geoData.longitude}
        </h5>
      )}
      <button type="button" onClick={() => toggleListening()}>
        Toggle
      </button>
    </div>
  );
};

export default GeoExample;
