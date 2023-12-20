import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { GeoJSON, MapContainer, TileLayer, useMap } from "react-leaflet";
import "./App.css";
import jsonfile from './south-korea_02.json';

function MyComponent({ position }) {
  const map = useMap();
  const onEachFeature = (feature, layer) => {
    layer.on('click', (e) => {
      console.log(e);
      console.log(map);
      
      map.flyTo(e.latlng, 10);
      
    });
  };
  return <GeoJSON data={jsonfile} onEachFeature={onEachFeature} />
}

function App() {
  const [position, setPosition] = useState([36.72067, 127.9615])

  return (
    <div className="App">
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={false}
      >
        <MyComponent />
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
      </MapContainer>
    </div>
  );
}

export default App;
