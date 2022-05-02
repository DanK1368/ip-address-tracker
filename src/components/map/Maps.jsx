import "./Map.scss";
import { Map, Marker } from "pigeon-maps";

function Maps() {
  return (
    <div id="map">
      <Map
        className="maps"
        height={510}
        width={500}
        defaultCenter={[60.879, 4.6997]}
        defaultZoom={11}
      >
        <Marker width={40} anchor={[50.879, 4.6997]} />
      </Map>
    </div>
  );
}
export default Maps;
