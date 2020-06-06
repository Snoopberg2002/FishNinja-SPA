import { thisLake } from "./CreateMap";

export default function BuildLakePage() {
    console.log(thisLake);
    document.querySelector("#lakeTitle").textContent = lake.name;
    if (lake.species === "N/A") {
        document.querySelector("#residentSpecies").textContent = "Tennant list coming soon.";
    } else {
        document.querySelector("#residentSpecies").textContent = lake.species;
    }
    document.querySelector("#amenities").textContent = lake.amenities;
    document.querySelector("#commentsList").textContent = lake.comments;
    document.querySelector("#contourMap").setAttribute("src", lake.contourMap.url);
    document.querySelector("#regulations").setAttribute("src", lake.regulations.url);
}