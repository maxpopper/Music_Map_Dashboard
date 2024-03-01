// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
let uk = [{'Artist': 'Ed Sheeran',
'suscribers': '54,200,000',
'total_videos': '458',
'total_views': '31,788,646,600',
'channel_creation_date': '2006-08-08',
'views_per_video': '69,407,525.3',
'videos_per_year': 24.1,
'from': 'Halifax, United Kingdom',
'coords': [53.727, 1.8575]},
'img_code': "align='center'> <img src='images/Ed Sheeran.jpeg' width='200' height='200'"},
{'Artist': 'Harry Styles',
'suscribers': '14,700,000',
'total_videos': '17',
'total_views': '6,278,224,388',
'channel_creation_date': '2017-03-08',
'views_per_video': '369,307,316.9',
'videos_per_year': 2.1,
'from': 'Redditch, United Kingdom',
'coords': [52.309, 1.9409]},
'img_code': "align='center'> <img src='images/Harry Styles.jpeg' width='200' height='200'"},
{'Artist': 'Adele',
'suscribers': '31,000,000',
'total_videos': '15',
'total_views': '15,281,568,777',
'channel_creation_date': '2008-04-04',
'views_per_video': '1,018,771,251.8',
'videos_per_year': 0.9,
'from': 'Tottenham, London, United Kingdom',
'coords': [51.6056, 0.0682]},
'img_code': "align='center'> <img src='images/Adele.jpeg' width='200' height='200'"},
{'Artist': 'Dua Lipa',
'suscribers': '23,200,000',
'total_videos': '209',
'total_views': '12,531,505,602',
'channel_creation_date': '2011-02-05',
'views_per_video': '59,959,356.9',
'videos_per_year': 14.9,
'from': 'London, United Kingdom',
'coords': [51.5072, 0.1276]}]
'img_code': "align='center'> <img src='images/Dua Lipa.jpeg' width='200' height='200'"},
  
  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  