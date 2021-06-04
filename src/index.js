import getWeather from './js/weather.service';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=kampala&appid=528829a802f5064dfc1965299ab9fd0f';

console.log(getWeather(url));