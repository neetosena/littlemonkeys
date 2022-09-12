import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const { REACT_APP_API_KEY } = process.env;

const Map = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: REACT_APP_API_KEY });
  const location = useMemo(
    () => ({
      lat: 53.390279537612265,
      lng: -6.286188434779092,
    }),
    []
  );

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <GoogleMap
      zoom={17}
      center={location}
      mapContainerClassName="mapComp-container"
    >
      <MarkerF position={location} />
    </GoogleMap>
  );
};

export default Map;
