import House3DMap, { MapSize } from "../../common/maps/3d";

const MapView = (size: MapSize) => {
  return <House3DMap {...size} />;
};

export default MapView;
