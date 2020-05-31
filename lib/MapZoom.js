import {mainMap, InfoWindows } from "./CreateMap";
import { default as goToLake } from "./GoToLake";

// Marker info for individual lakes
const stateMarkers = {
    Iowa: [],
    Nebraska: [],
    NewYork: [],
    Tennessee: [],
    Vermont: []
}

let lakes = []
function zoomToState(marker) {
    console.log(mainMap.map);
    // remove old marker,

    // place new markers
    stateMarkers[marker.name].forEach(newMarker => {
        mainMap.addMarker(newMarker, state => InfoWindows.attachButton(newMarker, newMarker.name, goToLake));
    })

    // zoom & center
    mainMap.map.setZoom(7);
    mainMap.map.setCenter(marker);
}

export { stateMarkers, lakes, zoomToState }