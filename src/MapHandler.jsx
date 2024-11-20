/* eslint-disable react/prop-types */
import { useMap } from "@vis.gl/react-google-maps"
import { useEffect } from "react";

function MapHandler({place, marker}) {
    const map = useMap();

    useEffect(() => {
        if (!place || !map || !marker) return;

        if (place.geometry?.viewport) {
            map.fitBounds(place.geometry.viewport);
        }

        marker.position = place.geometry?.location;
    }, [place, marker, map]);

    return null;

  
}

export default MapHandler;
