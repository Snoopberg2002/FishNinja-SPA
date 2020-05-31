import { default as Map } from "./Map";
import { default as InfoWindow } from "./InfoWindow";

const mainMap = new Map();
const InfoWindows = new InfoWindow();
const initialMarkers = [];

function initialMap() {
//Pull Marker info from JSON
fetch("../JSONFiles/states.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(state => {
            initialMarkers.push(state);
        })
        setMarkers();
    });
}

//Set Markers Function
const setMarkers = () => {
    initialMarkers.forEach(marker =>{
    mainMap.addMarker(marker,state => InfoWindows.attachButton(marker, marker.name, zoomToState));
    });
}

export { mainMap, initialMarkers, InfoWindows, initialMap }