import { IconButton, OverlayLayout, PlaceDirectionsButton, PlaceOverview, PlacePicker } from "@googlemaps/extended-component-library/react";
import OverLay from "./OverLay";

function SideBar({ overLayoutRef, pickerRef, cameraProp, setCameraProp, handlePlace }) {

  

    function handleOverlayShow() {
        overLayoutRef.current?.showOverlay();
    }

    return (
        <div className="SlotDiv" slot="fixed">
            <OverlayLayout ref={overLayoutRef}>
                <div className="SlotDiv" slot="main">
                    <PlacePicker className="PlacePicker" ref={pickerRef} placeholder="Search..." onPlaceChange={handlePlace} />
                    <PlaceOverview size="large" place={cameraProp} >
                        <div slot="action" className="SlotDiv">
                            <IconButton slot="action" variant="filled" onClick={handleOverlayShow}  >
                                See Reviews
                            </IconButton>
                        </div>
                        <div slot="action" className="SlotDiv">
                            <PlaceDirectionsButton slot="action" variant="filled">
                                Directions
                            </PlaceDirectionsButton>
                        </div>
                    </PlaceOverview>
                </div>
                <OverLay overLayoutRef={overLayoutRef} cameraProp={cameraProp}/>

            </OverlayLayout>
            
        </div>
    )
}

export default SideBar
