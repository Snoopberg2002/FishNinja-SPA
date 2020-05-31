export default function goToLake(lake) {
    render(state["Lake"]);
    console.log(lake);
    document.querySelector("#lakeTitle").textContent = lake.name;
    document.querySelector("#residentSpecies").textContent = lake.species;
    document.querySelector("#amenities").textContent = lake.amenities;
    document.querySelector("#commentsList").textContent = lake.comments;
    document.querySelector("#contourMap").setAttribute("src", lake.contourMap.url);
    document.querySelector("#regulations").setAttribute("src", lake.regulations.url);
}