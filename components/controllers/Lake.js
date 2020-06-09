import { auth, db } from "../../firebase";
import axios from "axios";

export default (st, lake) => {
    db.collection("Lakes")
    // .where("id", "==", lake.id)
    .doc(lake.id)
    .get()
    .then(res => {
        BuildLakePage(res.data());
        InitMap(res.data());
        GetWeather(res.data());
    });

}

function BuildLakePage(lake) {
    document.querySelector("#lakeTitle").textContent = lake.name;
    
    if (lake.species === "N/A") {
        document.querySelector("#residentSpecies").textContent = "Tenant list coming soon.";
    } else {
        document.querySelector("#residentSpecies").textContent = lake.species;
    }
    
    document.querySelector("#amenitiesContent").textContent = lake.amenities;
    
    document.querySelector("#commentsContent").textContent = lake.comments;
    
    document.querySelector("#county").textContent = `County: ${lake.county}`;
    
    document.querySelector("#acres").textContent = `Acres: ${lake.acres}`;

    document.querySelector("#route").textContent = lake.directions;
    
    document.querySelector("#boatLaunch").textContent = `Boat Launch: ${lake.boatLaunch}`;
    
    document.querySelector("#iceFishing").textContent = `Ice Fishing: ${lake.iceFishing}`;
    
    document.querySelector("#bowFishing").textContent = `Bow Fishing: ${lake.bowFishing}`;
    
    document.querySelector("#access").textContent = `Access: ${lake.access}`;

    if (lake.contourMap === "N/A") {
        document.querySelector("#contourMap").textContent = "";
    } else {
        document.querySelector("#contourMap").setAttribute("href", lake.contourMap.url);
    }

    if (lake.regulations === "N/A") {
        document.querySelector("#regulations").textContent = "";
    } else {
        document.querySelector("#regulations").setAttribute("href", lake.regulations.url);
    }
    
    document.querySelector("#county").textContent = `County: ${lake.county}`;
}

function InitMap(lake) {
    let options = {
        zoom: 13,
        center: {lat: lake.lat, lng: lake.lng},      
    }
    let lakeMap = new google.maps.Map(document.getElementById("lakeMap"), options);
}

function GetWeather(lake) {
    axios.get(`pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lake.lat}&lon=${lake.lng}&appid=06c7cb455d2c2ecf48244fb8596609f8`)
    .then(result => {
        console.log(result);
    }) 
}