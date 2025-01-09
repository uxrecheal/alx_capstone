import axios from "axios";
import dotenv from "dotenv";

const apiKey = import.meta.env.ENV_VARIABLE.APIKEY;

async function getLatLonLocation(location) {
  let response;
  try {
    let limit = `1`;
    let latLonUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${limit}&appid=${apiKey}`;

    response = await axios({
      method: "get",
      url: latLonUrl,
    });
  } catch (error) {
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
      throw `An error occured`;
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      throw `Error: ${error.message}`;
    }
  }

  if (response == undefined || response.data.length == 0) {
    throw "Error: Invalid city or country name";
  }
  return response.data[0];
}
export default getLatLonLocation;
