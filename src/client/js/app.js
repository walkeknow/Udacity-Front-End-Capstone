function isInputValid(city='') {
    if (!city) {
        alert("Please enter city name!")
        return null;
    }
    // regex to verify date syntax
    const dateExp = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})[\s]*$/
    const inpDate = document.getElementById("date").value;
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
                console.log("yay")
                return {
                    todayObj,
                    inputDateObj,
                }
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

    // Personal API Key for OpenWeatherMap API
    const geonamesKey = "&username=walkeknow";
    const geoNamesApi = "http://api.geonames.org/searchJSON?name_equals=";
    const city = "New York"
    // const city  = document.getElementById("city").value;
    const geoNamesUrl = encodeURI(geoNamesApi + city + geonamesKey);
    console.log(geoNamesUrl);


    if (isInputValid(city)) {
        // Calling functions
        getData(geoNamesUrl)
            .then(function (data) {
                const placeObj = {
                    long: data.geonames[0].lng,
                    lat: data.geonames[0].lat,
                }
                console.log(placeObj)
                postData('/addEntry', placeObj);
            }

                // Alert user if promise is rejected due to invalid Zipcode
                , (error) => {
                    alert("Sorry! Failed to find city details");
                })
            .then(function () {
                updateUI('/all')
            })
    }
}

/* Function to GET Web API Data*/
const getData = async (url = '') => {
    const response = await fetch(url);
    try {
        const allData = await response.json();
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
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error: ", error)
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