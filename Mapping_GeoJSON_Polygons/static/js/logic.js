// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

<<<<<<< Updated upstream
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
=======
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
>>>>>>> Stashed changes
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
<<<<<<< Updated upstream
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
=======
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
>>>>>>> Stashed changes
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
<<<<<<< Updated upstream
  Light: light,
  Dark: dark
=======
  "Streets": streets,
  "Satellite Streets": satelliteStreets
>>>>>>> Stashed changes
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
<<<<<<< Updated upstream
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
=======
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
>>>>>>> Stashed changes
});
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

<<<<<<< Updated upstream
// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/opeoje91/Mapping_Earthquake/main/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
};

d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data,  {
  style: myStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2><hr><h3>Destination: "+ feature.properties.dst+ "</h3>");
  }
  }).addTo(map)
=======
// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/opeoje91/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // Create a style for the lines.
// let myStyle = {
//   color: "#ffffa1",
//   weight: 2
// };

d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map)
>>>>>>> Stashed changes
});