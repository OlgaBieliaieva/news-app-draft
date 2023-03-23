const refs = {
  weatherWidget: document.querySelector('.weather-widget'),
};

export function checkResult(response) {
  console.log(response);
  createMarkup(response);
}

export function showError(error) {
  console.log(error);
}

function createMarkup(response) {
  const formattedDate = {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    getFormattedDay(date) {
      return this.days[date.getDay()];
    },
    getFormattedMonth(date) {
      return this.months[date.getMonth()];
    },
  };
  const date = new Date();
  const markup = `<div class="weather-info">
      <span class="temperature">${response.main.temp.toFixed(0)}&#176;</span>
      <span class="divider"></span></div>
      <div><span class="weather-description">${response.weather[0].main}</span>
      <svg class="location-icon" width="18" height="18">
      <use href="../images/icons.svg#icon-location"></use></svg>
      <span class="location">${response.name}</span></div>
      <img src="https://openweathermap.org/img/wn/${
        response.weather[0].icon
      }@2x.png" alt="${
    response.weather[0].main
  }" class="weather-icon" width=128 height=121>
      
    
    <div class="date">${formattedDate.getFormattedDay(
      date
    )} ${date.getDate()} ${formattedDate.getFormattedMonth(
    date
  )} ${date.getFullYear()}</div>
  </div>`;
  showWeather(markup);
}

function showWeather(markup) {
  refs.weatherWidget.insertAdjacentHTML('beforeend', markup);
}
