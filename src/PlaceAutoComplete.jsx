import { useMapsLibrary } from "@vis.gl/react-google-maps"
import { useEffect, useRef, useState } from "react"


function PlaceAutoComplete({ onPlaceSelect }) {
    
    const [placeAutoComplete, setPlaceAutoComplete] = useState(null);
    const inputRef = useRef(null);
    const places = useMapsLibrary("places");

    useEffect(() => {
        if (!places || !inputRef.current) return;

        const options = {
            fields: ["geometry", "name", "formatted_address"]
        };
        setPlaceAutoComplete(new places.Autocomplete(inputRef.current, options));

    }, [places]);

    useEffect(() => {
        if (!placeAutoComplete) return;

        placeAutoComplete.addListener("place_changed", () => {
            onPlaceSelect(placeAutoComplete.getPlace());
        });
    }, [onPlaceSelect, placeAutoComplete])

    return (
      
        <div className="autocomplete_container">
            <input ref={inputRef} />
        </div>
            
      
    )

}
export default PlaceAutoComplete;
