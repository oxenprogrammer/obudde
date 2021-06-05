import * as config from '../config.json';

import getWeather from './js/weather.service';

const url = `https://api.openweathermap.org/data/2.5/weather?q=kampala&appid=${config.APP_ID}`;

console.log(getWeather(url));