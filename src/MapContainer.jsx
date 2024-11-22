import { AdvancedMarker, Map,  Pin } from "@vis.gl/react-google-maps"


 const Initial_Position = {
    defaultCenter: { lat: -33.860664, lng: 151.208138 },
     defaultZoom: 12,
   DEFAULT_ZOOM_WITH_LOCATION : 16,
    mapId: "8a0f5b037eeac55a"
 }
  
function MapContainer({ cameraProps }) {

  
    return (
        <div className="SplitLayoutContainer" slot="main" style={{ width : "100vw",height: "100vh" }}>
            <Map mapId={Initial_Position.mapId}
                center={cameraProps?.location ?? Initial_Position.defaultCenter}
                zoom={cameraProps?.location ? Initial_Position.DEFAULT_ZOOM_WITH_LOCATION : Initial_Position.defaultZoom }
            >
                { cameraProps?.location && 
                   ( <AdvancedMarker position={cameraProps?.location} >
                          <Pin
              background={"#ec1616"}
              glyphColor={"#000"}
              borderColor={"#000"}
            />
                    </AdvancedMarker>)

                }

            </Map>
            
        </div>
    )
}

export default MapContainer
