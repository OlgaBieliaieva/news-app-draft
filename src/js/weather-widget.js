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
      <span class="divider"></span>
      <span class="weather-description">${response.weather[0].main}</span>
      <span class="geolocation">${response.name}</span>
      </span>
    </div>
    <div class="date">${formattedDate.getFormattedDay(
      date
    )} ${date.getDate()} ${formattedDate.getFormattedMonth(date)}</div>
  </div>`;
  showWeather(markup);
}

function showWeather(markup) {
  refs.weatherWidget.insertAdjacentHTML('beforeend', markup);
}
