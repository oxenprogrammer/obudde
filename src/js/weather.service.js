// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';

const getWeather = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result;
};

export default getWeather;
