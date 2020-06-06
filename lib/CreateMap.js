import router from "./Router";
import { default as Map } from "./Map";
import { default as InfoWindow } from "./InfoWindow";
// import { default as LakeInfoWindow } from "./lakeInfoWindow";
import states from "../JSONFiles/states.json";
import Iowa from "../JSONFiles/Iowa.json";
import Nebraska from "../JSONFiles/Nebraska.json";
import NewYork from "../JSONFiles/NewYork.json";
import Tennessee from "../JSONFiles/Tennessee.json";
import Vermont from "../JSONFiles/Vermont.json";

const thisLake = [];

export default function CreateMap() {
    const mainMap = new Map();
    const InfoWindows = new InfoWindow();
    const initialMarkers = states;    

    //Set Markers Function
    const setMarkers = () => {
        initialMarkers.forEach(marker =>{
        mainMap.addMarker(marker,state => InfoWindows.attachButton(marker, marker.name, zoomToState));
        });
    }
    setMarkers();

    // Marker info for individual lakes
    const stateMarkers = {
        Iowa: Iowa,
        Nebraska: Nebraska,
        NewYork: NewYork,
        Tennessee: Tennessee,
        Vermont: Vermont
        }


    let lakes = []
    function zoomToState(marker) {
        // remove old marker,

        // place new markers
        stateMarkers[marker.name].forEach(newMarker => {
            mainMap.addMarker(newMarker, state => InfoWindows.attachButton(newMarker, newMarker.name, goToLake));
        });

        // zoom & center
        mainMap.map.setZoom(7);
        mainMap.map.setCenter(marker);
    }

    function addLakeInfo(marker) {
        thisLake.unshift(marker);
        console.log(thisLake);
    }

    function goToLake(marker) {
        window.location.href=window.location.origin+"/Lake";
    }
}

export { thisLake }