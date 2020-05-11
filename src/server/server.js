// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const path = require('path');

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Initalize weather icon folder
app.use(express.static('icons'));

// To allow CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

// Spin up the server
const port = 8000;
app.listen(port, listening);

// Callback to debug
function listening() {
    console.log(`server running on port ${port}`);
}

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

// Get route for sending data endpoint
app.get('/all', (req, res) => {
    res.send(projectData);
});

// Post Routes
app.post('/addCity', (req, res) => {
    projectData =  {
        apiUrl: req.body.url,
        daysLeft: req.body.daysLeft,
        city: req.body.city,
    }

    res.send(projectData);
});

app.post('/addWeather', (req, res) => {
    const weatherData = {
        minTemp: req.body.minTemp,
        maxTemp: req.body.maxTemp,
        weatherDesc: req.body.weatherDesc,
        weatherIcon: req.body.weatherIcon,
    }
    projectData["weather"] = weatherData;
    res.send(projectData);
})

// Get route for fetching image data using node-fetch
app.get('/getImage', (req, res) => {
    getImage(projectData.apiUrl)
    .then((data) => {
        try {
            const imageUrl = data.hits[0].webformatURL;
            projectData["image"] = imageUrl;
            res.send(projectData);
        } catch (error) {
            console.log(error);
        }
    });
})

const getImage = async(url = '') => {
    const resp = await fetch(url);
    try {
        imageData = await resp.json();
        return imageData;
    } catch (error) {
        console.log('error', error);
    }
}