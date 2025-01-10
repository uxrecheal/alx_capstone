import axios from "axios";
import getLatLonLocation from "./geoService";
import dotenv from "dotenv";

const apiKey = import.meta.env.ENV_VARIABLE.APIKEY;

async function getLocationWeather(location = "accra") {
  let locationData = await getLatLonLocation(location);

  let lat = locationData.lat;
  let lon = locationData.lon;
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  try {
    let response = await axios({
      method: "get",
      url: weatherUrl,
    });
    let results = {
      wind: response.data.wind,
      weather: response.data.weather[0],
      main: response.data.main,
    };
    return results;
  } catch (e) { 
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw `Error: ${error.response.data};\n Status: ${error.response.status}`;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
      throw `An error occured`
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      throw `Error: ${error.message}`
    }
  }
}



async function getLocationWeatherForecast(location = "accra") {
  let locationData = await getLatLonLocation(location);

  let lat = locationData.lat;
  let lon = locationData.lon;
  let weatherUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${cnt}&units=metric&appid=${apiKey}
`;

  try {
    let response = await axios({
      method: "get",
      url: weatherUrl,
    });
    let results = {
      main: response.data.list,
      country: response.data.country,
    };

    return results;
  } catch (e) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw `Error: ${error.response.data};\n Status: ${error.response.status}`;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
      throw `An error occured`
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      throw `Error: ${error.message}`
    }
  }
}
export { getLocationWeather, getLocationWeatherForecast };
