import cloudy from '../img/css-cloud.gif';
import rainy from '../img/rain-storm-ss.gif';
import sunny from '../img/sunshine-gif-tumblr.gif';

const weatherBackground = (weatherType) => {
  const { body } = document;
  const backgroundImg = document.createElement('div');
  backgroundImg.setAttribute('class', 'backgroundImage');
  if (weatherType === 'rain') {
    backgroundImg.setAttribute('src', rainy);
    body.appendChild(backgroundImg);
    console.log('rainy');
  } if (weatherType === 'clouds') {
    backgroundImg.setAttribute('src', cloudy);
    body.appendChild(backgroundImg);
    console.log('cloudy');
  } if (weatherType === 'clear') {
    backgroundImg.setAttribute('src', sunny);
    body.appendChild(backgroundImg);
    console.log('sunny');
  }
};

export default weatherBackground;