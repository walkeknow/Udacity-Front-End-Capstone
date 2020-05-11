function isInputValid(city = '', inputDate = '') {
    if (!city) {
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
                console.log(daysLeft)
                const days = {
                    daysLeft,
                    todaysDate: todayObj.getDate().toString(),
                };
                return days;
            }
        };
        console.log("noo")
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
    const city = encodeURI("&q=New York")
    // const city  = encodeURI(document.getElementById("city").value);
    const geoNamesUrl = geoNamesApi + city + geonamesKey;

    const pixabayKey = "&key=16476881-b83f87e435d7a25d2a703cca9";
    const pixabayApi = "https://pixabay.com/api/?image_type=photo";
    const pixabayUrl = pixabayApi + pixabayKey + city;

    const weatherbitKey = "&key=73623f7a09bd422e9a003e9bc34b8eb2";
    const weatherbitApi = "https://api.weatherbit.io/v2.0/forecast/daily"

    // const inputDate = document.getElementById("date").value;
    const inputDate = "05/14/2020"

    const days = isInputValid(city, inputDate);
    if (days !== null) {
        // Calling functions
        const postUrl = {
            url: pixabayUrl
        }

        postData('http://localhost:8000/addCity', postUrl)
            .then((data) => {
                const urls = [
                    geoNamesUrl,
                    data.url,
                ]
                getCityData(urls)
                    .then((data) => {
                        console.log(data);
                        const lat = data.geoData.geonames[0].lat;
                        const lon = data.geoData.geonames[0].lng;
                        const weatherbitQuery = `?lat=${lat}&lon=${lon}`
                        const weatherbitUrl = weatherbitApi + weatherbitQuery + weatherbitKey;
                        getWeatherData(weatherbitUrl)
                            .then((weatherData) => {
                                console.log(weatherData);
                                let maxTemp = null;
                                let minTemp = null;
                                let weatherDesc = null;
                                let weatherIcon = null;
                                let isDataStored = true;
                                if (days.daysLeft < 16) {
                                    let apiListItem = 0;
                                    const apiDate = weatherData.data[0].valid_date;

                                    /* If today's date does not match with first list
                                    entry of API data, it means API data is behind by one
                                    day */
                                    console.log(days.todaysDate);
                                    console.log(apiDate.slice(-2));
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
                                    .then(function (allData) {
                                        console.log(allData);
                                        updateUI()
                                    });
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
function updateUI() {
    console.log("Done!")
}

export { handleSubmit }