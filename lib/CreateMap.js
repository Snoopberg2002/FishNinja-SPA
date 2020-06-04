import { default as Map } from "./Map";
import { default as InfoWindow } from "./InfoWindow";
import axios from "axios";

export default function CreateMap() {
    const mainMap = new Map();
    const InfoWindows = new InfoWindow();
    const initialMarkers = [
        {
            "lat": 41.634915,
            "lng": -99.885121,
            "name": "Nebraska"
        },
        {
            "lat": 42.418086, 
            "lng": -93.589918,  
            "name": "Iowa"
        },
        {
            "lat": 43.201730,
            "lng": -75.532868, 
            "name": "NewYork"
        },
        {
            "lat": 43.994966, 
            "lng": -72.666294,
            "name": "Vermont"
        }
    ];

    // axios.get("./JSONFiles/Iowa.json")
    //     .then(response => {
    //         console.log(response.data);
    //     })

    // //Pull Marker info from JSON
    // fetch("./JSONFiles/states.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         data.forEach(state => {
    //             initialMarkers.push(state);
    //         })
    //         setMarkers();
    //     });
    

    //Set Markers Function
    const setMarkers = () => {
        initialMarkers.forEach(marker =>{
        mainMap.addMarker(marker,state => InfoWindows.attachButton(marker, marker.name, zoomToState));
        });
    }
    setMarkers();

    // Marker info for individual lakes
    const stateMarkers = {
        Iowa: [],
        Nebraska: [],
        NewYork: [],
        Tennessee: [],
        Vermont: []
        }

    // //Get Lake Markers
    // axios.get("./JSONFiles/Iowa")
    // .then(response => {
    //     console.log(response.data);
    // })


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
}