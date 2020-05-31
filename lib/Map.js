export default class initMapTest {
    constructor() {
    this.markers = [];
    this.options = {
        zoom: 4,
        center: {lat: 38.248175, lng: -94.147841},
        }
    this.map = new google.maps.Map(document.getElementById("map"), this.options);
    }
    addMarker(props, cb) {
        let marker = new google.maps.Marker({
            position: props,
            state: props.name,
            map: this.map
        });



        //    Create Info Window
        let info = new google.maps.InfoWindow({
            content: cb(marker.state)
        });

        marker.addListener("click", function() {
            info.open(this.map, marker);
        });
        this.markers.push(marker);
    }
}
