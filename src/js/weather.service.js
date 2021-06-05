const getWeather = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return console.log(error.message);
  }
};

export default getWeather;
