import * as config from '../../config.json';

import getWeather from './weather.service';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const weatherUI = () => {
  const formSection = document.createElement('section');
  formSection.setAttribute('class', 'section-form');

  const formArticle = document.createElement('article');
  formArticle.setAttribute('class', 'article-form');

  const result = document.createElement('article');
  result.setAttribute('class', 'result');

  const paragraph = document.createElement('p');
  result.appendChild(paragraph);

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
    paragraph.textContent = JSON.stringify(weather);
  });

  form.appendChild(inputName);
  form.appendChild(submitButton);
  formArticle.appendChild(form);
  sleep(5000);
  formArticle.appendChild(result);
  formSection.appendChild(formArticle);

  return formSection;
};

export default weatherUI;