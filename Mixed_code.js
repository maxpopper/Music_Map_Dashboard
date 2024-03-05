// Initialize Leaflet map
var map = L.map('map').setView([10, 10], 2);

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define the marker layers
var markers = L.layerGroup();

// Function to add markers
function addMarkers(regionData) {
    for (let i = 0; i < regionData.length; i++) {
        let city = regionData[i];
        let marker = L.marker(city.coordinates)
            .bindPopup(`<h1>${city.Artist}</h1> 
                <p                         ${city.img_code}></p>
                <hr> 
                <h3>From:                  ${city.from}</h3>
                <h3>Subscribers:           ${city.str_suscribers}</h3>
                <h3>Total Views:           ${city.str_views}</h3>
                <h3>Number of Videos:      ${city.str_videos}</h3>
                <h3>Avg. Views per Video:  ${city.str_Average_views_per_video}</h3>
                <h3>Channel Creation Date: ${city.channel_creation_date}</h3>`);
        marker.zoomedIn = false; // Track zoom state

        marker.on('click', function(event) {
            if (marker.zoomedIn) {
                map.setView([10, 10], 2); // Zoom out if already zoomed in
                marker.closePopup(); // Close popup
            } else {
                map.setView(event.latlng, 10); // Zoom in if not already zoomed in
                marker.openPopup(); // Open popup
            }
            marker.zoomedIn = !marker.zoomedIn; // Toggle zoom state
        });
        markers.addLayer(marker);}}

addMarkers(La_region);
addMarkers(Africa_region);
addMarkers(us_can);
addMarkers(korea);
addMarkers(uk);

// Add marker layer to map
map.addLayer(markers);

// GeoJSON data for regions
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

    "Africa": {color: "orange",bounds: [
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
            [33.59876459122037, -12.488589442478826]]},

    "US/Canada": {color: "green",bounds: [
            [53.5941917014363, -167.05329603354335],
            [46.21349020917137, -127.21893013964367],
            [32.28017236679089, -117.99958000747284],
            [25.9330304220328, -97.61064078781533],
            [24.94366555998198, -80.7137081039496],
            [45.94590329840787, -61.89912359329227],
            [67.28031774782002, -95.954076814546],
            [71.15705181619074, -168.96587025282778],
            [53.5941917014363, -167.05329603354335]]},

    "South Korea": {color: "red",bounds: [
            [38.6596096777142, 128.62995572454184],
            [37.66091880256238, 125.7775527115993],
            [35.91110305176166, 125.74610037811436],
            [33.937453390895016, 125.48916799359318],
            [34.29356289247508, 128.22930336419773],
            [35.41439708199586, 129.73841157184995],
            [37.241933075916776, 129.56631187497862],
            [38.6596096777142, 128.62995572454184]]},
        
    "uk": {color: "blue", bounds: [
            [[59.57537768700945, -3.9150539894991994],
            [58.4446609912232, -9.176697786357835],
            [55.763440386838596, -7.862422466526624],
            [53.623058561808534, -12.113434672557162],
            [50.91112314730475, -9.987928569542362],
            [49.43324514374777, -5.433272634510331],
            [50.37195808509114, 1.489804386738541],
            [52.30640587234737, 2.704379302747668],
            [55.10885394843754, -0.5142442246752239],
            [57.2872594396064, -1.2429891742798702],
            [59.57537768700945, -3.9150539894991994]]]}};

// Add GeoJSON layers for highlighting regions
for (var region in regions) {
    var bounds = regions[region].bounds;
    var polygon = L.polygon(bounds, {color: regions[region].color}).addTo(map);
    polygon.on('click', function (event) {
        map.fitBounds(polygon.getBounds());});
    polygon.bindPopup(region);}

// Zoom out when clicked anywhere else on the map
map.on('click', function(event) {
    map.setView([0, 0], 2);});