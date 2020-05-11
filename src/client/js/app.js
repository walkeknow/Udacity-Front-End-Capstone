function isInputValid(city = '') {
    if (!city) {
        alert("Please enter city name!")
        return null;
    }
    // regex to verify date syntax
    const dateExp = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})[\s]*$/
    const inpDate = "06/10/2020";
    // const inpDate = document.getElementById("date").value;
    if (dateExp.test(inpDate)) {
        // check if entered date is valid (checking for Leap Years)
        const matches = dateExp.exec(inpDate);
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
                return daysLeft;
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

    const daysLeft = isInputValid(city);
    if (daysLeft !== null) {
        // Calling functions
        const postUrl = {
            url: pixabayUrl
        }
        postData('http://localhost:8000/addEntry', postUrl)
            .then(function (data) {
                const urls = [
                    geoNamesUrl,
                    data.url,
                ]
                getCityData(urls)
                    .then(function (data) {
                        console.log(data);
                        const placeObj = {
                            long: data.geoData.geonames[0].lng,
                            lat: data.geoData.geonames[0].lat,
                        }
                        console.log(placeObj)
                        postData('/addEntry', placeObj)
                            .then(function () {
                                updateUI('/all')
                            });
                    }, (error) => {
                        // Alert user if promise is rejected due to invalid Zipcode
                        alert("Sorry! Failed to find city details");
                    });
            })
    }
}

/* Function to GET Web API Data*/
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

/* Function to POST data */
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

/* Function to GET Project Data */
const updateUI = async (url = '') => {
    const response = await fetch(url);
    try {
        const serverData = await response.json();

        // Updating UI 
        const entry = serverData.entryData;
        const temp = document.getElementById('inputDateObj');
        temp.innerHTML = `<strong>inputDateObjerature:</strong> ${entry.inputDateObjerature}`;
    } catch (error) {
        console.log("error", error);
    }
}


export { handleSubmit }