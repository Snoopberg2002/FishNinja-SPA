import Map from "../../lib/Map";
import InfowWindow from "../../lib/InfoWindow";
import NewsFeed from "../../lib/News";
import HomeListeners from "../../lib/HomeListeners";
import InfoWindow from "../../lib/InfoWindow";
// import CreateMap from "../../lib/CreateMap";

export default (st) => {
    // NewsFeed();
    HomeListeners();
    Map;
    InfoWindow;
    setTimeout(() => {
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
    
        
        // //Pull Marker info from JSON
        // fetch("../JSONFiles/states.json")
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

    }, 500);
}