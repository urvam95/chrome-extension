import { IconButton, PlaceDataProvider, PlaceReviews } from "@googlemaps/extended-component-library/react";

function OverLay({ overLayoutRef, cameraProp }) {
    
    function handleOverlayHide() {
         overLayoutRef.current?.hideOverlay();
    }
    return (
    <div slot="overlay" className="SlotDiv">

            <IconButton className="CloseButton" onClick={handleOverlayHide}>
                Close
            </IconButton>
            <PlaceDataProvider place={cameraProp} >
            <PlaceReviews/>
            </PlaceDataProvider>    
     </div>
           
    )
}

export default OverLay
