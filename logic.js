// // Initialize Leaflet map
var myMap = L.map('map').setView([10, 10], 2);
// Add base tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 18,
// }).addTo(map);
// // Define region boundaries and colors
// var regions = {
    "Africa": {color: "green", bounds: [[-35, -20], [35, 60]]},
    "South Korea": {color: "red", bounds: [[-10, 60], [60, 150]]},
    "Uk": {color: "blue", bounds: [[35, -25], [70, 45]]},
    "Us/canada": {color: "orange", bounds: [[25, -170], [70, -50]]},
    "Latin America": {color: "purple", bounds: [[-57, -110], [25, -30]]}
// };
// // Draw region boundaries
for (var region in regions) {
    L.rectangle(regions[region].bounds, {color: regions[region].color}).addTo(map).bindPopup(continent);}
// // Function to display metrics when a continent is clicked
function displayMetrics(e) {
    var continent = e.target.getPopup().getContent();
    // Here you can fetch and display metrics specific to the clicked continent
    alert("Metrics for " + continent);
// }
// // Add click event to each continent
for (var continent in continents) {
    var bounds = continents[continent].bounds;
    var rectangle = L.rectangle(bounds, {color: "transparent"}).addTo(map);
    rectangle.bindPopup(continent);
    rectangle.on('click', displayMetrics);
// }