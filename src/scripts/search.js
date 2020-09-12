let allResults = [];
let resultsCards = null;
let searcher = 0;
let input = 0;
let countResults = 0;

let map;

function initMap() {

    let liuv = { lat: -23.5819995, lng: -46.6743897 } 
    map = new google.maps.Map(document.getElementById("map"), {
        center: liuv,
        zoom: 12,
        mapTypeId: "roadmap",
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#E6E4E4"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                    "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                    "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                    "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                    "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]

    });
    let marker = new google.maps.Marker({position: liuv, map: map});
    // contact page marker 
}

window.addEventListener('load', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
    });

    cardResults = document.querySelector('#foundLocationsCard');
    input = document.getElementById('search');
    //sercher = document.querySelector('#searcher');

    fetchResults();
});

async function fetchResults(){

    const response = await fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/output?name&textquery&AIzaSyAr9VFQ_t80Cm7GDYXH6GhIJQego96RW2Q');
    const data = await response.json();
    console.log(data);

}