import './App.css'
import { AdvancedMarker, APIProvider, ControlPosition, Map, MapControl, useAdvancedMarkerRef  } from '@vis.gl/react-google-maps'
import {useState } from 'react';
import PlaceAutoComplete from './placeAutoComplete';
import MapHandler from './MapHandler';

const GOOGLE_MAPS_API_KEY = "AIzaSyDAFTIzTFVb5A0L2cfIuIC7RprXbtYaFiE";
function App() {
  
  const Initial_Position = {
    defaultCenter: { lat: -33.860664, lng: 151.208138 },
    defaultZoom: 12,
    mapId: "8a0f5b037eeac55a"
  }

  const [cameraProps, setCameraProps] = useState(Initial_Position);
  const [markerRef, setMarkerRef] = useAdvancedMarkerRef();

  function handleCameraChange() {
    setCameraProps();
  }

  return (
    <APIProvider  apiKey={GOOGLE_MAPS_API_KEY} onLoad={()=>console.log("Map loaded")}>
      <div style={{ width : "100vw",height: "100vh" }}>
        <Map {...Initial_Position} onCameraChanged={handleCameraChange}>
          <AdvancedMarker ref={markerRef} position={null}/>
        </Map>
        <MapControl position={ControlPosition.LEFT_TOP}>
          <div className="autocomplete_control">
            <PlaceAutoComplete onPlaceSelect={setCameraProps}/>

          </div>

        </MapControl>
        <MapHandler place={cameraProps } marker={setMarkerRef} /> 
      </div>
    </APIProvider>


    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
