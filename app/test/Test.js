import React, { useState, useCallback } from "react";
import { GoogleMap, useLoadScript, Polygon } from "@react-google-maps/api";

const libraries = ["drawing"];

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD7e4cuSEMpIyLgiLM5skxZ7S6F9DXtggE",
    libraries,
  });

  const [polygonPaths, setPolygonPaths] = useState([]);

  const handlePolygonComplete = useCallback((polygon) => {
    const newPolygonPaths = polygon
      .getPath()
      .getArray()
      .map((latLng) => ({
        lat: latLng.lat(),
        lng: latLng.lng(),
      }));
    setPolygonPaths(newPolygonPaths);
    console.log(newPolygonPaths);
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 25.276987, lng: 55.296249 }}
      mapContainerStyle={{ width: "100%", height: "400px" }}
    >
      <Polygon
        path={polygonPaths}
        options={{ editable: true, draggable: true }}
        onMouseUp={() => {
          // Update the path when the polygon is modified
          const newPaths = polygonPaths.map((latLng) => ({
            lat: latLng.lat(),
            lng: latLng.lng(),
          }));
          setPolygonPaths(newPaths);
        }}
      />
    </GoogleMap>
  );
};

export default MapComponent;
