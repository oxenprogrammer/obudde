import weatherUI from './weather-ui.component';

const main = () => {
  const { body } = document;

  const mainBody = document.createElement('main');
  mainBody.setAttribute('class', 'container');

  mainBody.appendChild(weatherUI());
  body.appendChild(mainBody);
  return body;
};

export default main;