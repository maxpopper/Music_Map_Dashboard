// // Initialize Leaflet map
var myMap = L.map('map').setView([10, 10], 2);
// Add base tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 18,
// }).addTo(map);
// // Define region boundaries and colors
// var regions = {
//     "Africa": {color: "green", bounds: [[-35, -20], [35, 60]]},
//     "South Korea": {color: "red", bounds: [[-10, 60], [60, 150]]},
//     "Uk": {color: "blue", bounds: [[35, -25], [70, 45]]},
//     "Us/canada": {color: "orange", bounds: [[25, -170], [70, -50]]},
//     "Latin America": {color: "purple", bounds: [[-57, -110], [25, -30]]}
// };
// // Draw region boundaries
// for (var region in regions) {
//     L.rectangle(regions[region].bounds, {color: regions[region].color}).addTo(map).bindPopup(continent);}
// // Function to display metrics when a continent is clicked
// function displayMetrics(e) {
//     var continent = e.target.getPopup().getContent();
//     // Here you can fetch and display metrics specific to the clicked continent
//     alert("Metrics for " + continent);
// }
// // Add click event to each continent
// for (var continent in continents) {
//     var bounds = continents[continent].bounds;
//     var rectangle = L.rectangle(bounds, {color: "transparent"}).addTo(map);
//     rectangle.bindPopup(continent);
//     rectangle.on('click', displayMetrics);
// }


// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
// var myMap = L.map("map").setView([10, 10], 3); 
// {
//     center: [10, 10],
//     zoom: 3
//   });
  
// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

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

var regions = {
  "US/Canada": {color: "green", bounds: [
    [
      [53.5941917014363, -167.05329603354335],
      [46.21349020917137, -127.21893013964367],
      [32.28017236679089, -117.99958000747284],
      [25.9330304220328, -97.61064078781533],
      [24.94366555998198, -80.7137081039496],
      [45.94590329840787, -61.89912359329227],
      [67.28031774782002, -95.954076814546],
      [71.15705181619074, -168.96587025282778],
      [53.5941917014363, -167.05329603354335]
    ]
  ]},
  "South Korea": {color: "red", bounds: [
    [
      [38.6596096777142, 128.62995572454184],
      [37.66091880256238, 125.7775527115993],
      [35.91110305176166, 125.74610037811436],
      [33.937453390895016, 125.48916799359318],
      [34.29356289247508, 128.22930336419773],
      [35.41439708199586, 129.73841157184995],
      [37.241933075916776, 129.56631187497862],
      [38.6596096777142, 128.62995572454184 ]
    ]
  ]}
};

for (var region in regions) {
  let polygon = L.polygon(regions[region].bounds, {color: regions[region].color}).addTo(myMap).bindPopup(region);
  polygon.on('click', function (event) {
    myMap.fitBounds(polygon.getBounds())
  });

};

function displayMetrics(event) {
  var region = event.target.getPopup().getContent();
  alert("Metrics for " + region);
};

// for (var region in regions) {
//   var bounds = regions[region].bounds;
//   var polygon = L.polygon(bounds, {color: "transparent"}).addTo(myMap);
//   polygon.on('click', function (event) {
//     myMap.fitBounds(polygon.getBounds())
//   });
//   polygon.bindPopup(region);
//   // polygon.on('click', displayMetrics);
// };

      //   click: function(event) {
      //     myMap.fitBounds(event.target.getBounds());
      //   }
      // });

// ------------------------------
// var regions = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {
//         "region": "us_can"
//       },
//       "geometry": {
//         "coordinates": [
//           [
//             [-167.05329603354335, 53.5941917014363],
//             [-127.21893013964367, 46.21349020917137],
//             [-117.99958000747284, 32.28017236679089],
//             [-97.61064078781533, 25.9330304220328],
//             [-80.7137081039496, 24.94366555998198],
//             [-61.89912359329227, 45.94590329840787],
//             [-95.954076814546, 67.28031774782002],
//             [-168.96587025282778, 71.15705181619074],
//             [-167.05329603354335, 53.5941917014363]
//           ]
//         ],
//         "type": "Polygon"
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {"region": "korea"},
//       "geometry": {
//         "coordinates": [
//           [
//             [128.62995572454184, 38.6596096777142],
//             [125.7775527115993, 37.66091880256238],
//             [125.74610037811436, 35.91110305176166],
//             [125.48916799359318, 33.937453390895016],
//             [128.22930336419773, 34.29356289247508],
//             [129.73841157184995, 35.41439708199586],
//             [129.56631187497862, 37.241933075916776],
//             [128.62995572454184, 38.6596096777142]
//           ]
//         ],
//         "type": "Polygon"
//       }
//     }
//   ]
// }

// function chooseColor(region) {
//   if (region == "us_can") return "yellow";
//   else if (region == "korea") return "pink";
//   // else if (region == "Manhattan") return "orange";
//   // else if (region == "Queens") return "green";
//   // else if (region == "Staten Island") return "purple";
//   else return "black";
// }


//   // Creating a GeoJSON layer with the retrieved data
//   var geoJsonLayer = L.geoJson(regions, {
//     // Styling each feature (in this case, a neighborhood)
//     style: function(feature) {
//       return {
//         color: "white",
//         // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
//         fillColor: chooseColor(feature.properties.region),
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
//       layer.bindPopup("<h1>" + feature.properties.region + "</h1> <hr> <h2>" + feature.properties.region + "</h2>");

//     }
//   }).addTo(myMap);

// let us_can_center = [38.6270, -90.1994];
// let korea_center = [35.9078, 127.7669];

// let us_can_bounds = regions.features[0];
// let korea = regions.features[1];

// file = 'file:///data/region_coords.geojson'
// // file:///Users/maxpopper/Desktop/CU-VIRT-DATA-PT-10-2023-U-LOLC/Challenges/Project-3/Music_Map_Dashboard/data/region_coords.geojson

// d3.json(file).then(function(data) {
//   // Creating a GeoJSON layer with the retrieved data
//   L.geoJson(data, {
//     // Styling each feature (in this case, a neighborhood)
//     style: function(feature) {
//       return {
//         color: "white",
//         // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
//         fillColor: chooseColor(feature.properties.region),
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
//       layer.bindPopup("<h1>" + feature.properties.region + "</h1> <hr> <h2>" + feature.properties.region + "</h2>");

//     }
//   }).addTo(myMap);
// });

// console.log(us_can);