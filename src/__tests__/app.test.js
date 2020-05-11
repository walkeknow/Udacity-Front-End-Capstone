import { isInputValid } from "../client/js/app";

test('checks if app handles various inputs', () => {
    // providing an empty alert implementation to detect alerts
    window.alert = () => { };
    const inp = [
        ['New York', '05/16/2020'],
        ['Paris', '04/06/2019'],
        ['Paris', '02/29/2021'],
        ['', '05/16/2020'],
    ]
    expect(isInputValid(inp[0][0], inp[0][1])).toBeTruthy()

    // should not accept a past date
    expect(isInputValid(inp[1][0], inp[1][1])).toBeFalsy()

    // should only accept valid dates (2021 is not a leap year)
    expect(isInputValid(inp[2][0], inp[2][1])).toBeFalsy()

    // should not accept blank city name
    expect(isInputValid(inp[3][0], inp[3][1])).toBeFalsy()
})