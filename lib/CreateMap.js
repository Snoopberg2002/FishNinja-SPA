import router from "./Router";
import { default as Map } from "./Map";
import { default as InfoWindow } from "./InfoWindow";
// import { default as LakeInfoWindow } from "./lakeInfoWindow";
import states from "../JSONFiles/states.json";
// import Iowa from "../JSONFiles/Iowa.json";
// import Nebraska from "../JSONFiles/Nebraska.json";
// import NewYork from "../JSONFiles/NewYork.json";
// import Tennessee from "../JSONFiles/Tennessee.json";
// import Vermont from "../JSONFiles/Vermont.json";
// import Missouri from "../JSONFiles/Missouri.json";
import { auth, db } from "../firebase";

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

    // console.log(Missouri);

    // Vermont.forEach(lake => {
    //     db.collection("NinjaLakes")
    //     .add(lake)
    //     .then(console.log("state added"))  
    // });

        // db.collection("FishingLakes")
        // .where("name", "==", "100K Extent-Remaining Lakes")
        // .get()
        // .then(res => {
        //     res.forEach(doc => {
        //         doc.delete;
        //         console.log(doc);
        //     })
        // })
        // .then(console.log("Nebraska removed"))
        


    let lakes = []
    function zoomToState(marker) {
        // remove old marker,

        // place new markers
        db.collection("NinjaLakes")
        .where("state", "==", marker.name)
        .get()
        .then(res => {            
            res.forEach(doc => {
                let newMarker = doc.data();
                newMarker.id = doc.id;
                mainMap.addMarker(newMarker, state => InfoWindows.attachButton(newMarker, newMarker.name, goToLake));
            })
        });
        // stateMarkers[marker.name].forEach(newMarker => {
        //     mainMap.addMarker(newMarker, state => InfoWindows.attachButton(newMarker, newMarker.name, addLakeInfo));
        // });

        // zoom & center
        mainMap.map.setZoom(7);
        mainMap.map.setCenter(marker);
    }

    function addLakeInfo(marker) {
        thisLake.unshift(marker);
        console.log(thisLake);
    }

    function goToLake(marker) {
        window.location.href=window.location.origin+"/Lake/"+marker.id;
    }
}

export { thisLake }