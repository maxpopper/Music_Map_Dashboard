// // Initialize Leaflet map
var myMap = L.map('map').setView([10, 10], 2);
  
// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define the marker layers
var markers = L.layerGroup();

// Function to add markers
function addMarkers(regionData) {
  for (let i = 0; i < regionData.length; i++) {
      let city = regionData[i];
      let marker = L.marker(city.coords)
          .bindPopup(`<h2><center>${city.Artist}</h2> 
              <p ${city.img_code} ></p>
              <hr> 
              <h3>From:         ${city.from}</h2>
              <h3>Total Videos: ${city.str_videos.toLocaleString()}</h3>
              <h3>Subscribers:  ${city.str_suscribers.toLocaleString()}</h3>
              <h3>Total Views:  ${city.str_views.toLocaleString()}</h3>
              <h3>Avg views/video: ${city.str_Average_views_per_video.toLocaleString()}</h3>
              <h3>Channel Creation Date: ${city.channel_creation_date.toLocaleString()}</h3>
              `);
      marker.zoomedIn = false; // Track zoom state
      marker.on('click', function(event) {
          if (marker.zoomedIn) {
              myMap.setView([0, 0], 2); // Zoom out if already zoomed in
              marker.closePopUp();
          } else {
              myMap.setView(event.latlng, 10); // Zoom in if not already zoomed in
              marker.openPopup;
          }
          marker.zoomedIn = !marker.zoomedIn; // Toggle zoom state
          marker.openPopup();
      });
      markers.addLayer(marker);
  }
}

// Add markers for US/Canada
addMarkers(us_can);

// Add markers for South Korea
addMarkers(korea);

// Add marker layer to map
myMap.addLayer(markers);

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

// Function to handle region clicks
function onRegionClick(event) {
  var region = event.target.getPopup().getContent();
  alert("Metrics for " + region);
}

// Add GeoJSON layers for highlighting regions
for (var region in regions) {
  var bounds = regions[region].bounds;
  var polygon = L.polygon(bounds, {color: regions[region].color}).addTo(myMap);
  polygon.on('click', onRegionClick);
  polygon.bindPopup(region);
}

// Zoom to the clicked region when clicked on a region
function zoomToRegion(event) {
  myMap.fitBounds(event.target.getBounds());
}

// Zoom out when clicked anywhere else on the map
myMap.on('click', function(event) {
  myMap.setView([0, 0], 2);
});


// for (var region in regions) {
//   let polygon = L.polygon(regions[region].bounds, {color: regions[region].color}).addTo(myMap).bindPopup(region);
//   polygon.on('click', function (event) {
//     myMap.fitBounds(polygon.getBounds())
//   });

// };

// function displayMetrics(event) {
//   var region = event.target.getPopup().getContent();
//   alert("Metrics for " + region);
// };
