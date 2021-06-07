import weatherUI from './weather-ui.component';

const main = () => {
  const { body } = document;

  const mainBody = document.createElement('main');
  mainBody.setAttribute('class', 'container');

  const title = document.createElement('h1');
  title.setAttribute('class', 'title');
  title.textContent = 'Obudde';

  const subTitle = document.createElement('h1');
  subTitle.setAttribute('class', 'sub-title');
  subTitle.textContent = 'your best weather forecast';

  mainBody.appendChild(weatherUI());
  body.appendChild(title);
  body.appendChild(subTitle);
  body.appendChild(mainBody);
  return body;
};

export default main;