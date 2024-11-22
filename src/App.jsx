import './App.css'
import {  APIProvider } from '@vis.gl/react-google-maps'
import {useRef, useState } from 'react';
import { SplitLayout } from '@googlemaps/extended-component-library/react';
import SideBar from './SideBar';
import MapContainer from './MapContainer';


const GOOGLE_MAPS_API_KEY = "AIzaSyDAFTIzTFVb5A0L2cfIuIC7RprXbtYaFiE";
function App() {

  const [cameraProps, setCameraProps] = useState(undefined);
  const pickerRef = useRef(null);
  const overlayLayoutRef = useRef(null);
 
 
    function handlePlace() {
        if (!pickerRef.current?.value) {
            setCameraProps(undefined);
        }
        else {
            
            setCameraProps(pickerRef.current?.value);
        }
    }
  return (
    <div className='App'>
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY} version='beta' onLoad={() => console.log("Map loaded")}>
        <SplitLayout rowReverse rowLayoutMinWidth={700}>
          <SideBar overLayoutRef={overlayLayoutRef} pickerRef={pickerRef} cameraProp={cameraProps} setCameraProp={setCameraProps} handlePlace={handlePlace} />
          <MapContainer cameraProps={cameraProps} />

        </SplitLayout>

      </APIProvider>
    </div>


  )
}

export default App
