// import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg
import { APIProvider, Map } from '@vis.gl/react-google-maps'
// import { LoadScript, GoogleMap } from '@react-google-maps/api'
import './App.css'

const GOOGLE_MAPS_API_KEY = "AIzaSyDAFTIzTFVb5A0L2cfIuIC7RprXbtYaFiE";
function App() {
  // const [count, setCount] = useState(0)

  return (
    // <LoadScript googleMapsApiKey= {GOOGLE_MAPS_API_KEY} onLoad={()=>console.log("map has loaded")}>
    //   <div style={{height: "100vh"}}>

    //   <GoogleMap
    //     center={{ lat: 53.5, lng: 10 }}
    //     zoom={9}
    //     />
    //   </div>


    // </LoadScript>
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh" }}>
        <Map center={{ lat: 53.5, lng: 10 }}
          zoom={9}
        />
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
