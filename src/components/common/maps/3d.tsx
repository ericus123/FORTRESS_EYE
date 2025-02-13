"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import Map, { Layer, NavigationControl, Source } from "react-map-gl/mapbox";

export type MapSize = {
  width: string;
  height: string;
};
// Replace with your token

const House3DMap = ({ width, height }: MapSize) => {
  const mapRef = useRef<any>(null);

  // Your house coordinates
  const houseCoords = {
    latitude: -1.996534,
    longitude: 30.19949,
    zoom: 20,
    pitch: 30,
    bearing: 20
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.getMap().on("style.load", () => {
        mapRef.current
          .getMap()
          .setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
      });
    }
  }, []);

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYW1hbmllcmljdXMiLCJhIjoiY202em11MDJiMDBjazJscXptOG4wMDQ0OSJ9.Ky3GMrX9FtwFrwpi2UA7PQ";

  return (
    <div className="w-full h-screen">
      <Map
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={houseCoords}
        style={{ width, height }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12">
        {/* Add Digital Elevation Model (DEM) Source */}
        <Source
          id="mapbox-dem"
          type="raster-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
          tileSize={512}
          maxzoom={14}
        />
        <Layer
          id="terrain"
          type="hillshade"
          source="mapbox-dem"
          layout={{ visibility: "visible" }}
          paint={{
            "hillshade-shadow-color": "#222"
          }}
        />

        <NavigationControl position="top-right" />
      </Map>
    </div>
  );
};

export default House3DMap;
