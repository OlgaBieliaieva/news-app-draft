const t={appid:"dbe190140250d3087dbd292674c0b7da",lat:51.5085,lon:-.1257,units:"metric"};async function e(e){console.log(e),t.lat=e.latitude,t.lon=e.longitude;const n=new URLSearchParams(t);return await fetch(`https://api.openweathermap.org/data/2.5/weather?${n}`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))}async function n(){const e=new URLSearchParams(t);return await fetch(`https://api.openweathermap.org/data/2.5/weather?${e}`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))}const a={weatherWidget:document.querySelector(".weather__widget"),list:document.querySelectorAll(".item")};function o(t){console.log(t),function(t){const e={days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],getFormattedDay(t){return this.days[t.getDay()]},getFormattedMonth(t){return this.months[t.getMonth()]}},n=new Date;!function(t){window.matchMedia("(min-width: 768px)").matches&&a.list[1].insertAdjacentElement("afterend",t)}(`<div class="weather__content">\n      <div class="weather__wrapper">\n      <span class="temperature">${t.main.temp.toFixed(0)}&#176;</span>\n      <div class="weather__wrapper weather__wrapper--column">\n      <span class="description">${t.weather[0].main}</span>\n      <div class="weather__wrapper weather__wrapper--accent">\n      <svg class="location-icon">\n  <use href="./images/icons.svg#icon-location"></use>\n</svg>\n      <span class="location">${t.name}</span></div></div></div>\n      <img src="https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png" alt="${t.weather[0].main}" class="weather-icon" width=128 height=121>\n      \n    \n    <div class="date">${e.getFormattedDay(n)} <br /> ${n.getDate()} ${e.getFormattedMonth(n)} ${n.getFullYear()}</div>\n  </div>`)}(t)}function r(t){console.log(t)}function s(t){console.log(t),e(t.coords).then(o).catch(r)}function i(t){console.log(t),n().then(o).catch(r)}addEventListener("DOMContentLoaded",(function(){return navigator.geolocation.getCurrentPosition(s,i)}));
//# sourceMappingURL=index.d4783087.js.map
