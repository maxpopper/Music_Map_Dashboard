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



// Load the client library
gapi.load('client', init);

// Initialize the client library
function init() {
  gapi.client.init({
    apiKey: 'AIzaSyBDJs5jiIFx9IQrqIphkIqK7a7iazNi7Fg',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  }).then(() => {
    // Use the API here, for example:
    getChannelStatistics('UCqECaJ8Gagnn7YCbPEzWH6g');
  }).catch(err => {
    console.error('Error initializing API client', err);
  });
}

// Function to get channel statistics
function getChannelStatistics(channelId) {
  gapi.client.youtube.channels.list({
    part: 'statistics',
    id: channelId
  }).then(response => {
    const channel = response.result.items[0];
    const subscriberCount = channel.statistics.subscriberCount;
    const viewCount = channel.statistics.viewCount;
    console.log(`Subscriber Count: ${subscriberCount}`);
    console.log(`Total Views: ${viewCount}`);
  }).catch(err => {
    console.error('Error fetching channel statistics', err);
  });
}
