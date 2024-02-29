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

function chooseColor(region) {
  if (region == "us_can") return "yellow";
  else if (region == "korea") return "pink";
  // else if (region == "Manhattan") return "orange";
  // else if (region == "Queens") return "green";
  // else if (region == "Staten Island") return "purple";
  else return "black";
}

// link = 'https://geojson.io/#map=4.57/37.1/126.96'

// d3.json(link).then(function(data) {
//   // Creating a GeoJSON layer with the retrieved data
//   L.geoJson(data, {
//     // Styling each feature (in this case, a neighborhood)
//     style: function(feature) {
//       return {
//         color: "white",
//         // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
//         fillColor: chooseColor(feature.properties.borough),
//         fillOpacity: 0.5,
//         weight: 1.5
//       };
//     },
//     // This is called on each feature.
//     onEachFeature: function(feature, layer) {
//       // Set the mouse events to change the map styling.
//       layer.on({
//         // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
//         mouseover: function(event) {
//           layer = event.target;
//           layer.setStyle({
//             fillOpacity: 0.9
//           });
//         },
//         // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
//         mouseout: function(event) {
//           layer = event.target;
//           layer.setStyle({
//             fillOpacity: 0.5
//           });
//         },
//         // When a feature (neighborhood) is clicked, it enlarges to fit the screen.
//         click: function(event) {
//           myMap.fitBounds(event.target.getBounds());
//         }
//       });
//       // Giving each feature a popup with information that's relevant to it
//       layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1> <hr> <h2>" + feature.properties.borough + "</h2>");

//     }
//   }).addTo(myMap);
// });

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
    <h3>Subscribers: ${city.str_suscribers.toLocaleString()}</h3>
    <h3>Total Views: ${city.str_views.toLocaleString()}</h3>
    <h3>Number of Videos: ${city.str_videos.toLocaleString()}</h3>
    <h3>Avg. Views per Video: ${city.str_Average_views_per_video.toLocaleString()}</h3>
    <h3>Channel Creation Date: ${city.channel_creation_date.toLocaleString()}</h3>
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
    <h3>Subscribers: ${city.str_suscribers.toLocaleString()}</h3>
    <h3>Total Views: ${city.str_views.toLocaleString()}</h3>
    <h3>Number of Videos: ${city.str_videos.toLocaleString()}</h3>
    <h3>Avg. Views per Video: ${city.str_Average_views_per_video.toLocaleString()}</h3>
    <h3>Channel Creation Date: ${city.channel_creation_date.toLocaleString()}</h3>
    `)
    .addTo(myMap);
};

{/* <p align='center'> <img src='images/beyonce.jpeg' width='200' height='200' ></p>  */}