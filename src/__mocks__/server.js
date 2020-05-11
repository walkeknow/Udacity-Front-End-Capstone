let projectData = {
    apiUrl: "https://pixabay.com/api/?image_type=photo&key=16&q=New%20York",
    city: "New York",
    daysLeft: 1,
    image: "https://pixabay.com/get/554_640.jpg",
}

function addWeather(req, res) {
    const weatherData = {
        minTemp: req.body.minTemp,
        maxTemp: req.body.maxTemp,
        weatherDesc: req.body.weatherDesc,
        weatherIcon: req.body.weatherIcon,
    }
    projectData["weather"] = weatherData;
    return projectData;
}

export { addWeather }