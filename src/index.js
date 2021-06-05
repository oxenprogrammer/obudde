import * as config from '../config.json';

import getWeather from './js/weather.service';
import search from './js/search.component';

const url = `https://api.openweathermap.org/data/2.5/weather?q=kampala&appid=${config.APP_ID}`;

search();

console.log(getWeather(url));