import { addWeather } from "../__mocks__/server";

test('checks whether project endpoint is constructed properly', () => {
    const expectedProjectData = {
        apiUrl: "https://pixabay.com/api/?image_type=photo&key=16&q=New%20York",
        city: "New York",
        daysLeft: 1,
        image: "https://pixabay.com/get/554_640.jpg",
        weather: {
            maxTemp: 13.2,
            minTemp: 4.1,
            weatherDesc: "Few clouds",
            weatherIcon: "c02d",
        }
    }
    const req = {
        body: {
            maxTemp: 13.2,
            minTemp: 4.1,
            weatherDesc: "Few clouds",
            weatherIcon: "c02d",
        }
    }
    const res = null;

    expect(addWeather(req, res)).toEqual(
        expect.objectContaining(expectedProjectData),
    );
})