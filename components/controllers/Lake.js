import { auth, db } from "../../firebase";
import axios from "axios";
import { capitalize, round } from "lodash";

export default (st, lake) => {
    db.collection("NinjaLakes")
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
    // console.log(lake);

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

    if (lake.contourMap === "N/A" || lake.contourMap === "" || lake.contourMap === "undefined") {
        document.querySelector("#contourMap").textContent = "";
    } else {
        document.querySelector("#contourMap").setAttribute("href", lake.contourMap.url);
        document.querySelector("#contourMap").setAttribute("target", "_blank");
    }

    if (lake.regulations === "N/A") {
        document.querySelector("#regulations").textContent = "";
    } else {
        document.querySelector("#regulations").setAttribute("href", lake.regulations.url);
        document.querySelector("#regulations").setAttribute("target", "_blank");
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
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lake.lat}&lon=${lake.lng}&appid=06c7cb455d2c2ecf48244fb8596609f8`)
    .then(res => {
        // console.log(res.data);
        let w = res.data;
        let k = w.current.temp;
        let temp = (k - 273.15) * 9/5 + 32;
        // console.log(k);
        
        document.querySelector("#weatherHead").textContent = `Weather: ${capitalize(w.current.weather[0].description)}`;
        document.querySelector("#rightNow").textContent = `Right Now: ${round(temp)}`;
        document.querySelector("#wind").textContent = `Wind: ${w.current.wind_speed}mph`;
        document.querySelector("#humidity").textContent = `Humidity: ${w.current.humidity}%`;

        k = w.daily[0].temp.max;
        temp = (k - 273.15) * 9/5 + 32;
        // console.log(temp);
        document.querySelector("#high").textContent = `High: ${round(temp)}`;

        k = w.daily[0].temp.min;
        temp = (k - 273.15) * 9/5 + 32;
        document.querySelector("#low").textContent = `Low: ${round(temp)}`;

        document.querySelector("#forecast2").textContent = capitalize(w.daily[1].weather[0].description);

        k = w.daily[1].temp.max;
        temp = (k - 273.15) * 9/5 + 32;
        document.querySelector("#tomHigh").textContent = `High: ${round(temp)}`;

        k = w.daily[1].temp.min;
        temp = (k - 273.15) * 9/5 + 32;
        document.querySelector("#tomLow").textContent = `Low: ${round(temp)}`;

        document.querySelector("#forecast3").textContent = capitalize(w.daily[2].weather[0].description);

        k = w.daily[2].temp.max;
        temp = (k - 273.15) * 9/5 + 32;
        document.querySelector("#day3High").textContent = `High: ${round(temp)}`;

        k = w.daily[2].temp.min;
        temp = (k - 273.15) * 9/5 + 32;
        document.querySelector("#day3Low").textContent = `Low: ${round(temp)}`;

        document.querySelector("#forecast4").textContent = capitalize(w.daily[3].weather[0].description);

        k = w.daily[3].temp.max;
        temp = (k - 273.15) * 9/5 + 32;
        document.querySelector("#day4High").textContent = `High: ${round(temp)}`;

        k = w.daily[3].temp.min;
        temp = (k - 273.15) * 9/5 + 32;
        document.querySelector("#day4Low").textContent = `Low: ${round(temp)}`;

    }) 
}