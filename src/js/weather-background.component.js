import cloudy from '../img/css-cloud.gif';
import rainy from '../img/rain.gif';
import sunny from '../img/sunny.gif';

const weatherBackground = (weatherType) => {
  const { body } = document;
  const backgroundImg = document.createElement('div');
  backgroundImg.setAttribute('class', 'backgroundImage');
  if (weatherType === 'rain') {
    body.style.backgroundImage = `url("${rainy}")`;
  } if (weatherType === 'clouds') {
    body.style.backgroundImage = `url("${cloudy}")`;
  } if (weatherType === 'clear') {
    body.style.backgroundImage = `url("${sunny}")`;
  }
};

export default weatherBackground;