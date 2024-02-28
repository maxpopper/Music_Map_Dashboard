// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
let myMap = L.map("map", {
    center: [10, 10],
    zoom: 3
  });
  
  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);


console.log(us_can);

let us_can_center = [38.6270, -90.1994];
let korea_center = [35.9078, 127.7669];

for (let i=0; i < us_can.length; i++) {
  let city = us_can[i];
  L.marker(city.coords)
    .bindPopup(`<h1>${city.Artist}</h1> 
    <p ${city.img_code} ></p>
    <hr> 
    <h3>From: ${city.from.toLocaleString()}</h3>
    <h3>Subscribers: ${city.suscribers.toLocaleString()}</h3>
    <h3>Total Views: ${city.total_views.toLocaleString()}</h3>
    `)
    .addTo(myMap);
};

for (let i=0; i < korea.length; i++) {
  let city = korea[i];
  L.marker(city.coords)
    .bindPopup(`<h1>${city.Artist}</h1> 
    <p ${city.img_code} ></p>
    <hr> 
    <h3>From: ${city.from.toLocaleString()}</h3>
    <h3>Subscribers: ${city.suscribers.toLocaleString()}</h3>
    <h3>Total Views: ${city.total_views.toLocaleString()}</h3>
    `)
    .addTo(myMap);
};

{/* <p align='center'> <img src='images/beyonce.jpeg' width='200' height='200' ></p>  */}