// Initialize Leaflet map
var map = L.map('map').setView([0, 0], 2);

// Add base tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,}).addTo(map);

// Define the marker layers
var markers = L.layerGroup();

// Function to add markers
function addMarkers(regionData) {
    for (let i = 0; i < regionData.length; i++) {
        let city = regionData[i];
        let marker = L.marker(city.coordinates)
            .bindPopup(`<h2><center> ${city.Artist}</h2> 
                <p ${city.img_code} ></p><hr> 
                <h3>From:            ${city.from}</h2>
                <h3>Total Videos:    ${city.str_videos.toLocaleString()}</h3>
                <h3>Subscribers:     ${city.str_suscribers.toLocaleString()}</h3>
                <h3>Total Views:     ${city.str_views.toLocaleString()}</h3>
                <h3>Avg views/video: ${city.str_Average_views_per_video.toLocaleString()}</h3>`);
        marker.zoomedIn = false; // Track zoom state
        marker.on('click', function(event) {
            if (marker.zoomedIn) {
                map.setView([0, 0], 3); // Zoom out if already zoomed in
                marker.closePopup(); // Close popup when zooming out
            } else {
                map.setView(event.latlng, 10); // Zoom in if not already zoomed in
            }
            marker.zoomedIn = !marker.zoomedIn; // Toggle zoom state
        });
        markers.addLayer(marker);}}

// Add markers for Latin America
addMarkers(La_region);

// Add markers for Africa
addMarkers(Africa_region);

// Add marker layer to map
map.addLayer(markers);

// GeoJSON data for Latin America and Africa
var regions = {"Latin America": {color: "yellow", bounds: [
            [31.692913350395756, -118.18285996848475],
            [15.124858520295703, -108.68292279035943],
            [5.0944885249884635, -87.3064042686082],
            [-9.430809240028111, -83.41976453738067],
            [-30.72028538463187, -76.13231504132918],
            [-53.1115782754068, -79.04729483974958],
            [-59.06050195965241, -66.41571571326033],
            [-45.871430092718626, -60.09992615001569],
            [-29.035353627585316, -39.2092375946678],
            [-5.5782113918636895, -32.40761806501962],
            [8.545954568624452, -53.75454574552417],
            [26.460157044471913, -76.36097178866831],
            [24.212855004768585, -79.9779999555714],
            [25.239525579791362, -97.83707652965515],
            [31.692913350395756, -118.18285996848475]]},

            // Africa bounds coordinates
    "Africa": {color: "orange", bounds: [
            [33.59876459122037, -12.488589442478826],
            [16.06074578861447, -22.20518877054741],
            [-1.7001553282036213, -11.031099543268425],
            [-1.214483960792009, 5.972949280851964],
            [-34.8041624789279, 12.774568810500142],
            [-38.31513839422066, 28.3211277354101],
            [-20.670076932575938, 54.07011595479213],
            [-12.293244083870647, 53.09845602198527],
            [-9.430809240028111, 43.867686660320004],
            [8.470993931601953, 55.52760585400259],
            [18.380810427342638, 42.410196761109745],
            [33.193153203444254, 33.66525736584779],
            [40.1959087199169, 7.9162691464657655],
            [33.59876459122037, -12.488589442478826]]}};

// Function to handle region clicks
function onRegionClick(event) {
    var region = event.target.getPopup().getContent();
    alert("Metrics for " + region);}

// Add GeoJSON layers for highlighting regions
for (var region in regions) {
    var bounds = regions[region].bounds;
    var polygon = L.polygon(bounds, {color: regions[region].color}).addTo(map);
    polygon.on('click', onRegionClick);
    polygon.bindPopup(region);}

// Zoom to the clicked region when clicked on a region
function zoomToRegion(event) {
    map.fitBounds(event.target.getBounds());}

// Zoom out when clicked anywhere else on the map
map.on('click', function(event) {
    map.setView([0, 0], 2);});