import cloudy from '../img/css-cloud.gif';
import rainy from '../img/rain-storm-ss.gif';
import sunny from '../img/sunshine-gif-tumblr.gif';

const weatherBackground = (weatherType) => {
  const { body } = document;
  const backgroundImg = document.createElement('div');
  backgroundImg.setAttribute('class', 'backgroundImage');
  if (weatherType === 'rain') {
    body.style.backgroundImage = `url("${rainy}")`;
    console.log('rainy');
  } if (weatherType === 'clouds') {
    body.style.backgroundImage = `url("${cloudy}")`;
    console.log('cloudy');
  } if (weatherType === 'clear') {
    body.style.backgroundImage = `url("${sunny}")`;
    console.log('sunny');
  }
};

export default weatherBackground;