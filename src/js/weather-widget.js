const refs = {
  weatherWidget: document.querySelector('.weather__widget'),
  list: document.querySelectorAll('.item'),
};

const mediaList = {
  mobile: '(min-width: 480px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1200px)',
};
console.log(window.innerWidth);
window.matchMedia(`${mediaList.tablet}`).addEventListener('change', show);
show(window.matchMedia(`${mediaList.tablet}`));
function show(e) {
  console.log(e);
  if (document.innerWidth > 768) {
    console.log('remove is working');
    refs.list[0].parentNode.replaceChild(refs.weatherWidget, refs.list[0]);
  }
}
// const mediaQueryList = window.matchMedia('(min-width: 768px)');
// window
//   .matchMedia(mediaList.mobile)
//   .addEventListener('change', handleTabletChange);
// window
//   .matchMedia(mediaList.tablet)
//   .addEventListener('change', handleTabletChange);
// window
//   .matchMedia(mediaList.desktop)
//   .addEventListener('change', handleTabletChange);
// function handleTabletChange(e) {
//   console.log(e);
//   if (e.matches) {
//     console.log('!!!');
//   }
// }

// handleTabletChange(window.matchMedia(mediaList.mobile));
// handleTabletChange(window.matchMedia(mediaList.tablet));
// handleTabletChange(window.matchMedia(mediaList.desktop));

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
  const markup = `<div class="weather__widget">
  <div class="weather__content">
    <div class="weather__wrapper">
      <span class="temperature">${response.main.temp.toFixed(0)}&#176;</span>
      <div class="weather__wrapper weather__wrapper--column">
        <span class="description">${response.weather[0].main}</span>
        <div class="weather__wrapper weather__wrapper--accent">
          <svg class="location-icon">
            <use href="./images/icons.svg#icon-location"></use>
          </svg>
          <span class="location">${response.name}</span>
        </div>
      </div>
    </div>
    <img src="https://openweathermap.org/img/wn/${
      response.weather[0].icon
    }@2x.png" alt="${response.weather[0].main}" class="weather-icon">
    <div class="date">${formattedDate.getFormattedDay(date)}
      <br />
      ${date.getDate()} ${formattedDate.getFormattedMonth(
    date
  )} ${date.getFullYear()}
    </div>
  </div>
</div>`;
  showWeather(markup);
}

function showWeather(markup) {
  if (window.innerWidth < 768) {
    refs.list[0].insertAdjacentHTML('beforeend', markup);
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    refs.list[1].insertAdjacentHTML('beforebegin', markup);
  } else {
    refs.list[4].insertAdjacentHTML('beforebegin', markup);
  }
}
// refs.weatherWidget.insertAdjacentHTML('beforeend', markup);
// if (mediaQueryList.matches) {
//   refs.list[1].insertAdjacentHTML('beforebegin', markup);
// } else {
//   refs.list[3].insertAdjacentHTML('afterend', markup);
// }
