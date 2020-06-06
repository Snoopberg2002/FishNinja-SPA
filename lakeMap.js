// //Create States Maps
// let options;

// function State(coords, zoom, id, json) {
//     this.coords = coords;
//     this.zoom = zoom;
//     this.id = id;
//     this.json = json;
// }

// const Neb = new State({lat: 41.730594, lng: -99.785886}, 7, "nebMap", "Nebraska.json")
// const NY = new State({lat: 43.201730, lng: -75.532868}, 7, "nyMap", "ny1.json")
// const Vt = new State({lat: 43.994966, lng: -72.666294}, 8, "vtMap", "vermont.json")

// console.log(Neb.coords);

// function initMap(state) {
//     options = {
//         center: state.coords,
//         zoom: state.zoom
//     }
//     let map = new google.maps.Map(document.getElementById(state.id), options);
// }

// initMap(Neb);





// //Nebraska
function initMap() {
    let options = {
        zoom: 7,
        center: {lat: 41.730594, lng: -99.785886},      
    }
    let map = new google.maps.Map(document.getElementById("nebMap"), options);

    //Add Data Layer
    map.data.loadGeoJson("Nebraska.json");
    map.data.setStyle({clickable: true});

    map.data.addListener('click', function(event) {
        console.log(map.data.i.i);
     });

    //Add info windows
    // let info = new google.maps.InfoWindow({
    //     content: `<h3>${features.properties.Label}</h3>`
    // });

    // map.data.info;
}



// //New York
// function initMap() {
//     let options = {
//         zoom: 7,
//         center: {lat: 43.201730, lng: -75.532868},      
//     }
//     let map = new google.maps.Map(document.getElementById("nyMap"), options);

//     //Add Markers
//     map.data.loadGeoJson("ny1.json");

//     // //Add info windows
//     // let info = new google.maps.InfoWindow({
//     //     content: `<h3>${features.properties.Label}</h3>`
//     // });

//     // map.data.info;

// }

//Vermont
//function initMap() {
//     let options = {
//         zoom: 8,
//         center: {lat: 43.994966, lng: -72.666294},      
//     }
//     let map = new google.maps.Map(document.getElementById("vtMap"), options);

//     //Add Markers
//     map.data.loadGeoJson('vermont.json');

//     //Add info windows
//     let info = new google.maps.InfoWindow({
//         content: `<h3>${features.properties.Label}</h3>`
//     });

//     map.data.info;

// }