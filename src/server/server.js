// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const fetch = require('node-fetch')

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

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

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Initialize all route with a callback function
app.get('/all', getAll);

// Callback function to complete GET '/all'
function getAll(req, res) {
    res.send(projectData);
}

// Post Route
app.post('/addEntry', function (req, res) {
    projectData["url"] = req.body.url;
    res.send(projectData);
});

// Proxy Get route to for fetching image
app.get('/getImage', function (req, res) {
    getImage(projectData.url)
    .then(function(data) {
        const imageUrl = data.hits[0].webformatURL;
        projectData["image"] = imageUrl;
        res.send(projectData);
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