import apiKey from '../apiKey.js';
//eslint-disable-next-line max-len
const root = `http://api.wunderground.com/api/${apiKey.key}/geolookup/conditions/hourly/forecast10day/q`;

function apiGet(url) {
  return fetch(url).then( response => response.json() );
}

export default {
  getWeather(display) {
    return apiGet(`${root}/${display}.json`);
  }
};
