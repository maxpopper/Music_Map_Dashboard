# <center> Music Map Dashboard
![MIT](https://img.shields.io/badge/License-MIT-blue)

## Website
[Website](...)

## Description
The aim of this project is to showcase the global popularity of international music, transcending borders and continents like never before. Our objective is to spotlight some of the biggest artists from five different regions and provide context for their popularity.

### <strong> 5 Regions World wide Map Example: </center> </strong>
> Regions: 
- US/Canada
- Latin America
- Africa
- UK
- South Korea

<img src="images\Overall_map.png"  style="width:800px">

### <strong> Artist Metric Example:  </center> </strong>

<img src="images\Badbunny_Map.png" style="width:800px">

## Table of Contents
- [Installations](#installations)
- [DataSources](#datasources)
- [Interaction](#interaction)
- [Region/Artists](#region)
- [Collection](#collection)
- [Credits](#credits)
- [Contact](#contact)

## Installations
In order to get the make this project work is crucial to follow the next steps:

> <center> Youtube API:
Youtube API is utilized to gather the data. Follow these steps to obtain your API Key and access Youtube data:

- Register at the following link to generate your API key and other functionalities: [Google Cloud Console](https://console.cloud.google.com/)
- After registration, navigate to **`Dashboard`**, then **`Create Project`**, then go to **`Library`** and activate **`Youtube Data API v3`**.
- Proceed to **`Credentials`**, and generate your Youtube API Key by selecting **`Create Credential`** and choosing **`API Key`**.
- Safely store your API key for future reference.


> <center> Youtube Documentation (Adding Prerequisites to your computer):

This section covers the installation of Python packages required to access and retrieve data for each artist through the channel ID. Follow this link for detailed instructions: [Youtube Documentation](https://developers.google.com/youtube/v3/quickstart/python)

Prerequisites:

Open your Command Line or Git Bash and navigate to the folder where your file is located, then run the following commands:

    pip install --upgrade google-api-python-client

> <center> Jupyter Notebook

Once the packages are installed, import them into your Jupyter notebook file using the following line:  ``` from googleapiclient.discovery import build ``` then in the next cell make reference to your API key <strong> `api_key='xxxxx'` </strong> and the desired Channel ID that you would like to scrape (to access the channel ID you need to go to the artist main page channel and click in ` > ` normally is located it 3 lines below the artist name or at the right of the artist picture) then find and click<strong> `Share Channel` </strong> - <strong> `Copy channel ID` </strong>.

here is our example of the (Import, Api_key, Channel ID)
<img src="images\API, Channel ID.png"  style="width:800px"> <hr>

> Note: after we access the data, manipulate it, and get the disired results we copy the data from Jupyter notebook and import it in javascript to visualize the artist metrics and regions.

> <center> HTML Scripts References:
- Youtube API: 
    - `<script src="https://apis.google.com/js/api.js"></script>`

- Leaflet CSS: 
    - `   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" /> `

- Leaflet JavaScript code: 
    - `  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script> `

- CSS: 
    - ` <link rel="stylesheet" type="text/css" href="style.css"> `
 
- DIV (Our map): 
    - ` <div id="map"></div> `

## DataSources
Youtube API: 

## Interaction
To interact with our project we invite you to click in the following link (xxxxx) and you will experience our map display with the 5 different regions and 4 markers per region where you can click in any marker and inmediately see the artist metric information with their respective headshot, if you click back in the same marker it will zoom out and you can repeat the process with any region and marker you would like to get inform from.

## Region
>Region/Artists:
1. US/Canada:
- Taylor Swift
- Drake
- The Weeknd
- Beyonce

2. Latin America:
- Bad Bunny
- Peso Pluma
- Karol G
- Feid

3. Africa:
- Burna Boy
- Tyla
- WizKid
- Rema

4. UK:
- Adele
- Harry Styles
- Ed Sheeran

5. South Korea:
- BTS
- Blackpink
- Twice
- EXO

## Collection
Here is a brief review of our Data Collection Process from collection the data to overall visualization map.

<img src="images\Data Collection Process.png"  style="width:800px"> <hr>


## Credits
The research support to make this challenge succesful comes from edX Tutors, Chat Gpt, AskBCS, Teachers, TA, Google, [Youtube link](https://www.youtube.com/watch?v=SwSbnmqk3zY) Max Popper, David Castano, Kimani Phillips


## Contact
If there are any questions of concerns, we can be reached at:

> David Castano 
- [Github: Davidcastanoe](https://github.com/Davidcastanoe)

> Max Popper
- [Github: maxpopper](https://github.com/maxpopper)

> Kimani Phillips 
- [Github: KimaniPhillips12](https://github.com/KimaniPhillips12)

