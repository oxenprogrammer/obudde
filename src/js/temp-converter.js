const celsiusToFahrenheit = (celsius) => Math.round(celsius * (9 / 5) + 32);
const fahrenheitToCelsius = (fahrenheit) => Math.round((fahrenheit - 32) * (5 / 9));

export { celsiusToFahrenheit, fahrenheitToCelsius };