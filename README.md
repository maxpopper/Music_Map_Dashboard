# <center> Music Map Dashboard

## Website
[Website](...)

## Description
This project aims to showcase the global popularity of international music, transcending borders and continents like never before. We aim to spotlight some of the biggest artists from five different regions and provide context for their popularity.

### <strong> 5 Regions Worldwide Map Example: </center> </strong>
> Regions: 
- US/Canada
- Latin America
- Africa
- UK
- South Korea

<img src="https://github.com/maxpopper/Music_Map_Dashboard/blob/main/Project%203/images/Overall_map.png"  style="width:800px">

### <strong> Artist Metric Example:  </center> </strong>

<img src="https://github.com/maxpopper/Music_Map_Dashboard/blob/main/Project%203/images/Badbunny_Map.png" style="width:800px">

## Table of Contents
- [Installations](#installations)
- [Presentation](#presentation)
- [DataSources](#datasources)
- [Interaction](#interaction)
- [Region/Artists](#region)
- [Collection](#collection)
- [Credits](#credits)
- [Ethical](#ethical)
- [Contact](#contact)

## Installations
In order to get the make this project work, it is crucial to follow the next steps:

> <center> Youtube API:
YouTube API is utilized to gather the data. Follow these steps to obtain your API Key and access YouTube data:

- Register at the following link to generate your API key and other functionalities: [Google Cloud Console](https://console.cloud.google.com/)
- After registration, navigate to **`Dashboard`**, then **`Create Project`**, then go to **`Library`** and activate **`Youtube Data API v3`**.
- Proceed to **`Credentials`**, and generate your Youtube API Key by selecting **`Create Credential`** and choosing **`API Key`**.
- Safely store your API key for future reference.


> <center> Youtube Documentation (Adding Prerequisites to your computer):

This section covers the installation of Python packages required to access and retrieve data for each artist through the channel ID. Follow this link for detailed instructions: [Youtube Documentation](https://developers.google.com/youtube/v3/quickstart/python)

Prerequisites:

Open your Command-Line or Git Bash and navigate to the folder where your file is located, then run the following commands:

    pip install --upgrade google-api-python-client

> <center> Jupyter Notebook

Once the packages are installed, import them into your Jupyter Notebook file using the following line:  ``` from googleapiclient.discovery import build ``` Then in the next cell make reference to your API key <strong> `api_key='xxxxx'` </strong> and the desired Channel ID that you would like to scrape (to access the channel ID you need to go to the artist main page channel and click in ` > ` normally is located it 3 lines below the artist name or at the right of the artist picture) then find and click<strong> `Share Channel` </strong> - <strong> `Copy channel ID` </strong>.

here is our example of the (Import, Api_key, Channel ID)
<img src="images\API, Channel ID.png"  style="width:800px"> <hr>

> Note: after we access the data, manipulate it, and get the desired results we copy the data from Jupyter Notebook and import it in javascript to visualize the artist metrics and regions.

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

## Presentation
In this section, you can find the presentation of our project that you can download it and explore by yourself.
[Download PDF](https://github.com/maxpopper/Music_Map_Dashboard/blob/main/Project%203/Presentation%20PDF/Presentation.pdf)


## DataSources
The Datasource that we used to get the information to visualize our artist metrics, markers and outlined 5 different regions was Youtube API.

## Interaction
To interact with our project we invite you to click on the following link (xxxxx) and you will experience our map display with the 5 different regions and 4 markers per region where you can click on any marker and immediately see the artist metric information with their respective headshot, if you click back in the same marker it will zoom out and you can repeat the process with any region and marker you would like to get inform from.

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
Here is a brief review of our Data Collection Process from the collection of the data to the overall visualization map.

<img src="https://github.com/maxpopper/Music_Map_Dashboard/blob/main/Project%203/images/Data%20Collection%20Process.png"  style="width:700px"> <hr>


## Credits
The research support to make this challenge successful comes from edX Tutors, Chat Gpt, AskBCS, Teachers, TA, Google, [Youtube link](https://www.youtube.com/watch?v=SwSbnmqk3zY) Max Popper, David Castano, Kimani Phillips

## Ethical
This project is created based on public artist information that any person could get access to from youtube.com. we as creators are ethically managing the data not exposing any extra information that a normal person could get access to.

## Contact
If there are any questions or concerns, we can be reached at:

> David Castano 
- [Github: Davidcastanoe](https://github.com/Davidcastanoe)

> Max Popper
- [Github: maxpopper](https://github.com/maxpopper)

> Kimani Phillips 
- [Github: KimaniPhillips12](https://github.com/KimaniPhillips12)

