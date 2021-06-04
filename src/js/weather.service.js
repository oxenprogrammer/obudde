// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';

const getWeather = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return console.log(error.message);
  }
};

export default getWeather;
