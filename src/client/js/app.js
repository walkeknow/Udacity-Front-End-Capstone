function isInputValid(inputCity = '', inputDate = '') {
    if (inputCity === "") {
        alert("Please enter city name!")
        return null;
    }
    // regex to verify date syntax
    const dateExp = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})[\s]*$/
    if (dateExp.test(inputDate)) {
        // check if entered date is valid (checking for Leap Years)
        const matches = dateExp.exec(inputDate);
        const month = matches[1];
        const date = matches[2];
        const year = matches[3]
        const inputDateObj = new Date(year, month - 1, date);

        /* In case Feb 29 2021 is entered, the Date object automatically
        changes the month, therefore the below statement will return 
        false*/
        if (inputDateObj && (inputDateObj.getMonth() + 1) == month) {
            // check if min date is today

            /* creating the today object from current year, month and 
            date instead of Date.now() so that the time becomes zero 
            and today's date can be compared using equality operator*/
            const temp = new Date()
            const todayObj = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate())
            if (inputDateObj.getTime() >= todayObj.getTime()) {
                const dayMilliseconds = 24 * 60 * 60 * 1000;
                const daysLeft = (inputDateObj - todayObj) / dayMilliseconds;
                const days = {
                    daysLeft,
                    todaysDate: todayObj.getDate().toString(),
                };
                return days;
            }
        };
        return null;
    } else {
        alert("Please enter valid date in MM/DD/YYYY format!")
        return null;
    }
}


/* Function called by event listener */
function handleSubmit(event) {
    event.preventDefault();

    // Personal API Keys
    const geonamesKey = "&username=walkeknow";
    const geoNamesApi = "http://api.geonames.org/searchJSON?name_equals=";
    // const inputCity = "New York"
    const inputDate = document.getElementById("date").value;
    const inputCity = document.getElementById("city").value;
    const days = isInputValid(inputCity, inputDate);

    const city = encodeURI(`&q=${inputCity}`)
    // const city  = encodeURI(inputCity);
    const geoNamesUrl = geoNamesApi + city + geonamesKey;

    const pixabayKey = "&key=16476881-b83f87e435d7a25d2a703cca9";
    const pixabayApi = "https://pixabay.com/api/?image_type=photo";
    const pixabayUrl = pixabayApi + pixabayKey + city;

    const weatherbitKey = "&key=73623f7a09bd422e9a003e9bc34b8eb2";
    const weatherbitApi = "https://api.weatherbit.io/v2.0/forecast/daily"

    // const inputDate = "05/14/2020"


    if (days !== null) {
        // Calling functions
        const button = document.querySelector('button');
        button.setAttribute("disabled", "true");
        const sendData = {
            url: pixabayUrl,
            city: inputCity,
            daysLeft: days.daysLeft,
        }
        postData('http://localhost:8000/addCity', sendData)
            .then((data) => {
                const urls = [
                    geoNamesUrl,
                    data.url,
                ]
                getCityData(urls)
                    .then((data) => {
                        const lat = data.geoData.geonames[0].lat;
                        const lon = data.geoData.geonames[0].lng;
                        const weatherbitQuery = `?lat=${lat}&lon=${lon}`
                        const weatherbitUrl = weatherbitApi + weatherbitQuery + weatherbitKey;
                        getWeatherData(weatherbitUrl)
                            .then((weatherData) => {
                                let maxTemp = "N/A";
                                let minTemp = "N/A";
                                let weatherDesc = "No Idea!";
                                let weatherIcon = null;
                                let isDataStored = true;
                                if (days.daysLeft < 16) {
                                    let apiListItem = 0;
                                    const apiDate = weatherData.data[0].valid_date;

                                    /* If today's date does not match with first list
                                    entry of API data, it means API data is behind by one
                                    day */
                                    if (days.todaysDate !== apiDate.slice(-2)) {
                                        apiListItem += 1;
                                        if (days.daysLeft === 15) {
                                            isDataStored = false;
                                        }
                                    }
                                    if (isDataStored) {
                                        const item = weatherData.data[apiListItem + days.daysLeft];
                                        maxTemp = item.max_temp;
                                        minTemp = item.min_temp;
                                        weatherDesc = item.weather.description;
                                        weatherIcon = item.weather.icon;
                                    }
                                }
                                const weather = {
                                    maxTemp,
                                    minTemp,
                                    weatherDesc,
                                    weatherIcon,
                                }
                                postData('/addWeather', weather)
                                    .then((allData) => updateUI(allData));
                            })
                    }, (error) => {
                        // Alert user if promise is rejected due to invalid Zipcode
                        alert("Sorry! Failed to find city details");
                    });
            })
    }
}

/* Function to POST data to Express server*/
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log('error', error);
    }
}

/* Function to weather*/
const getWeatherData = async (url = '') => {
    const weatherResponse = await fetch(url);
    try {
        const weatherData = await weatherResponse.json();
        return weatherData;
    } catch (error) {
        console.log("error: ", error);
        throw error;
    }
}

/* Function to GET Coordinates and Image Data*/
const getCityData = async (urls = []) => {
    const geoResponse = await fetch(urls[0]);

    // using Express as proxy to solve cors error
    const pixabayResponse = await fetch('http://localhost:8000/getImage');
    try {
        const geoData = await geoResponse.json();
        const pixData = await pixabayResponse.json();
        const allData = {
            geoData,
            pixData
        }
        return allData;
    } catch (error) {
        console.log("error: ", error);
        throw error;
    }
}

/* Function to GET Project Data */
function updateUI(allData = {}) {
    console.log(allData);
    const button = document.querySelector('button');
    const countdown = document.getElementById('countdown');
    const cityImage = document.getElementById('city-image');
    const city = document.querySelector('.image-holder').querySelector('h1');
    const icon = document.getElementById('icon');
    cityImage.setAttribute("style", `background-image: url(${allData.image})`);
    button.removeAttribute('disabled');
    countdown.textContent = allData.daysLeft;
    city.textContent = allData.city;

    if (allData.weather.weatherDesc === "No Idea!") {
        alert("Weather beyond 16 days cannot be predicted!")
    }

    const weather = document.querySelector('#weather').querySelector('.info');
    const maxTemp = document.querySelector('#max-temp').querySelector('.info');
    const minTemp = document.querySelector('#min-temp').querySelector('.info');
    icon.setAttribute("style", `background-image: url('http://localhost:8000/${allData.weather.weatherIcon}.png')`);
    weather.textContent = allData.weather.weatherDesc;
    maxTemp.textContent = allData.weather.maxTemp;
    minTemp.textContent = allData.weather.minTemp;

    const allInfo = document.querySelector('.info-holder');
    allInfo.setAttribute("style", "visibility: visible");
}

export { handleSubmit }
export { isInputValid }