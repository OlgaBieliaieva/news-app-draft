!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=h(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",m={};function v(){}function g(){}function y(){}var w={};s(w,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(O([])));L&&L!==r&&n.call(L,i)&&(w=L);var x=y.prototype=v.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=y,s(x,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),s(x,c,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var i="https://api.openweathermap.org/data/2.5/weather?",a={appid:"dbe190140250d3087dbd292674c0b7da",lat:51.5085,lon:-.1257,units:"metric"};function c(t){return s.apply(this,arguments)}function s(){return(s=t(e)(t(n).mark((function e(r){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.lat=r.latitude,a.lon=r.longitude,o=new URLSearchParams(a),t.next=5,fetch("".concat(i).concat(o)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function u(){return h.apply(this,arguments)}function h(){return(h=t(e)(t(n).mark((function e(){var r;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams(a),t.next=3,fetch("".concat(i).concat(r)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var l={list:document.querySelector(".list"),listItems:document.querySelectorAll(".item")},f={mobile:window.matchMedia("(min-width: 320px) and (max-width: 767px)"),tablet:window.matchMedia("(min-width: 768px) and (max-width: 1199px)"),desktop:window.matchMedia("(min-width: 1200px)")};function p(t){!function(t){var e={days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],getFormattedDay:function(t){return this.days[t.getDay()]},getFormattedMonth:function(t){return this.months[t.getMonth()]}},r=new Date;!function(t){if(f.mobile.matches)return m(t),l.listItems[0].insertAdjacentHTML("beforebegin",t);if(f.tablet.matches)return m(t),l.listItems[1].insertAdjacentHTML("beforebegin",t);if(f.desktop.matches)return m(t),l.listItems[4].insertAdjacentHTML("beforebegin",t);console.log("!!!")}('<li class="item item--weather"><div class="weather__widget">\n  <div class="weather__content">\n    <div class="weather__wrapper">\n      <span class="temperature">'.concat(t.main.temp.toFixed(0),'&#176;</span>\n      <div class="weather__wrapper weather__wrapper--column">\n        <span class="description">').concat(t.weather[0].main,'</span>\n        <div class="weather__wrapper weather__wrapper--accent">\n          <svg class="location-icon">\n            <use href="./images/icons.svg#icon-location"></use>\n          </svg>\n          <span class="location">').concat(t.name,'</span>\n        </div>\n      </div>\n    </div>\n    <img src="https://openweathermap.org/img/wn/').concat(t.weather[0].icon,'@2x.png" alt="').concat(t.weather[0].main,'" class="weather-icon">\n    <div class="date">').concat(e.getFormattedDay(r),"\n      <br />\n      ").concat(r.getDate()," ").concat(e.getFormattedMonth(r)," ").concat(r.getFullYear(),"\n    </div>\n  </div>\n</div>\n</li>"))}(t)}function d(t){console.log(t)}function m(t){function e(){return f.mobile.matches?(console.log("its mobile"),document.querySelector(".item--weather").remove(),l.listItems[0].insertAdjacentHTML("beforebegin",t)):f.tablet.matches?(console.log("its tablet"),document.querySelector(".item--weather").remove(),l.listItems[1].insertAdjacentHTML("beforebegin",t)):f.desktop.matches?(console.log("its desktop"),document.querySelector(".item--weather").remove(),l.listItems[4].insertAdjacentHTML("beforebegin",t)):void 0}f.mobile.addEventListener("change",e),f.tablet.addEventListener("change",e),f.desktop.addEventListener("change",e)}function v(t){c(t.coords).then(p).catch(d)}function g(t){console.log(t),u().then(p).catch(d)}addEventListener("DOMContentLoaded",(function(){return navigator.geolocation.getCurrentPosition(v,g)}))}();
//# sourceMappingURL=index.8b86dd39.js.map
