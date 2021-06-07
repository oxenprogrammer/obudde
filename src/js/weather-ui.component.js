import * as config from '../../config.json';

import getWeather from './weather.service';
import weatherBackground from './weather-background.component';

const weatherUI = () => {
  const formSection = document.createElement('section');
  formSection.setAttribute('class', 'section-form');

  const formArticle = document.createElement('article');
  formArticle.setAttribute('class', 'article-form');

  const result = document.createElement('article');
  result.setAttribute('class', 'result');

  const weatherContent = document.createElement('div');
  weatherContent.setAttribute('class', 'weather-content');
  result.appendChild(weatherContent);

  const mainWeather = document.createElement('p');
  mainWeather.setAttribute('class', 'paragraph');

  const desc = document.createElement('p');
  desc.setAttribute('class', 'paragraph');

  const city = document.createElement('p');
  city.setAttribute('class', 'paragraph');

  const temp = document.createElement('p');
  temp.setAttribute('class', 'paragraph');

  const image = document.createElement('p');
  image.setAttribute('class', 'paragraph');

  const imgWeather = document.createElement('img');
  imgWeather.setAttribute('class', 'weather-image');

  const form = document.createElement('form');
  form.setAttribute('class', 'form');

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('placeholder', 'Enter City Name . . .');
  inputName.setAttribute('maxlength', '30');
  inputName.setAttribute('required', true);

  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  inputName.setAttribute('name', 'search');
  submitButton.setAttribute('class', 'submit');

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('value: ', inputName.value);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputName.value}&appid=${config.APP_ID}`;
    const weather = await getWeather(url);
    console.log(weather);
    weatherBackground(weather.weather[0].main.toLowerCase());
    mainWeather.textContent = `Main: ${weather.weather[0].main}`;
    desc.textContent = `Description: ${weather.weather[0].description}`;
    temp.textContent = `Temp: ${weather.main.temp}`;
    city.textContent = `City: ${weather.name} Country: ${weather.sys.country}`;
    imgWeather.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    image.appendChild(imgWeather);

    weatherContent.appendChild(image);
    weatherContent.appendChild(mainWeather);
    weatherContent.appendChild(desc);
    weatherContent.appendChild(temp);
    weatherContent.appendChild(city);
  });

  form.appendChild(inputName);
  form.appendChild(submitButton);
  formArticle.appendChild(form);

  formArticle.appendChild(result);
  formSection.appendChild(formArticle);

  return formSection;
};

export default weatherUI;