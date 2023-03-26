import { getCurrentWeather } from './weather-api-service';
import { getDefaultWeather } from './weather-api-service';
import { checkResult } from './weather-widget';
import { showError } from './weather-widget';

addEventListener('DOMContentLoaded', getUserLocation);

export function getUserLocation() {
  return navigator.geolocation.getCurrentPosition(
    positionHandler,
    positionError
  );
}

function positionHandler(position) {
  getCurrentWeather(position.coords).then(checkResult).catch(showError);
}

function positionError(error) {
  console.log(error);
  getDefaultWeather().then(checkResult).catch(showError);
}
