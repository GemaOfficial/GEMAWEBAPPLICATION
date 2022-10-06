import React, { useState } from "react";
import { MapContainer, MapBody } from "./ContactElement";
import { GoogleMap } from "@react-google-maps/api";

function Map() {
  // eslint-disable-next-line
  const [styles, _setStyles] = useState({
    width: "100%",
    height: "100%",
  });
  // eslint-disable-next-line
  const [center, _setCenter] = useState({
    lat: -1.30325275,
    lng: 36.826367685559,
  });
  // eslint-disable-next-line
  const [zoom, _setZoom] = useState(12);

  return (
    <MapContainer>
      <MapBody>
        <GoogleMap mapContainerStyle={styles} center={center} zoom={zoom} />
      </MapBody>
    </MapContainer>
  );
}

export default Map;
