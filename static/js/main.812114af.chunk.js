(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{42:function(e,t,a){e.exports=a(92)},71:function(e,t,a){e.exports=a.p+"static/media/profile.36e27b4d.jpg"},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),o=a(4),l=a(13),s=a(17),u=a(12),m=a(21),f=a(3),d=a.n(f);var v={loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null},saveToStorage:function(e,t){localStorage[e]=JSON.stringify(t)}},p=function(e){return{type:"SET_CITY",cityName:e}},E=function(e){return{type:"SET_FAVORITE_CITIES",favoriteCities:e}};function y(){return function(e,t){return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t().systemReducer.wasInitialLoad?v.saveToStorage("weatherAppInitialLoad",!1):v.saveToStorage("weatherAppInitialLoad",!0),e({type:"TOGGLE_INITIAL_LOAD"});case 3:case"end":return a.stop()}}))}}var b=a(9),h=a(24),O=a.n(h),g="nn5MCYcXt574QxNw4vYL5QBysXJt8GAj",w={callCityWeather:function(e){var t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.a.awrap(O.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(g)));case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.log("Err");case 11:case"end":return n.stop()}}),null,null,[[0,8]])},callCities:function(e){var t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.a.awrap(O.a.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(g,"&q=").concat(e.cityName)));case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.log("Err",n.t0);case 11:case"end":return n.stop()}}),null,null,[[0,8]])}};var N=a(15),j=a(5);function L(){var e=Object(o.b)(),t=Object(n.useState)(null),a=Object(b.a)(t,2),c=a[0],i=a[1],l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=Object(n.useState)(e),r=Object(b.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){t(c)}),[c]),[c,function(e){var t="number"===e.target.type?+e.target.value:e.target.value;i(Object(j.a)({},c,Object(N.a)({},e.target.name,t)))}]}({cityName:""},(function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,d.a.awrap(w.callCities(e));case 4:t=a.sent,i(t);case 6:case"end":return a.stop()}}))})),s=Object(b.a)(l,2),u=s[0],m=s[1];function f(t){t.preventDefault(),e(function(e){return function(t){return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t(p(e));case 1:case"end":return a.stop()}}))}}(c[0])||c)}var v=u.cityName,E=v?"":"background-glass";return r.a.createElement("section",{className:"search"},r.a.createElement("form",{onSubmit:function(e){return f(e)}},r.a.createElement("input",{className:E,autoComplete:"off",list:"city-ul",name:"cityName",id:"city",value:v,onChange:m})),u&&r.a.createElement("datalist",{id:"city-ul"},c&&c.map((function(e,t){var a=e.LocalizedName;return r.a.createElement("option",{key:t,value:a}," ",a," ")}))))}function T(e){var t=e.day,a=Object(o.c)((function(e){return e.weatherReducer})).degreeType,n=t.EpochDate,c=t.Temperature,i=t.Day,l=new Date(0);function s(e){return e<10?"0"+e:""+e}function u(){var e=c.Maximum.Value;return a?{degree:e,unitSymbol:"F"}:{degree:(e-32)/1.8.toFixed(),unitSymbol:"C"}}return r.a.createElement("article",{className:"forcast-card flex column align-center "},r.a.createElement("div",{className:"icon-container"},r.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(function(){var e=i.Icon;return i.Icon<10&&(e="0"+i.Icon),e}(),"-s.png"),alt:""})),r.a.createElement("section",{className:"forcast-details"},r.a.createElement("div",{className:"card-top"},r.a.createElement("h2",null,function(){switch(new Date(t.Date).getDay()){case 0:return"Sun";case 1:return"Mon";case 2:return"Tus";case 3:return"Wen";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat"}}(t.date)),r.a.createElement("h2",null,function(e){l.setUTCSeconds(e);var t=l.getFullYear(),a=s(l.getMonth()+1),n=s(l.getDate());return"".concat(n,"/").concat(a,"/").concat(t)}(n))),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("p",null,i.IconPhrase),r.a.createElement("h3",null,u().degree,r.a.createElement("span",null,u().unitSymbol)))))}function I(e){var t=e.forcast;return r.a.createElement("ul",{className:"forcast-list"},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(T,{day:e}))})))}function x(e){var t=e.LocalizedName,a=e.Text,n=e.isFavorite,c=void 0!==n&&n,i=e.setCurrentForcast,o=void 0===i?null:i,l=e.city,s=void 0===l?null:l;return r.a.createElement("div",{className:"headlines"},r.a.createElement("h1",null,"  ",t)," ",r.a.createElement("br",null),r.a.createElement("h1",null,a),c&&r.a.createElement("button",{onClick:function(){return o(s)}},"Show weather"))}function C(e){var t=e.forcast,a=e.city,n=e.headLine,c=Object(o.b)(),i=Object(o.c)((function(e){return e.weatherReducer})).favoriteCities,l=a.LocalizedName,s=a.Key,u=n.Text;function f(){return i?-1!==i.findIndex((function(e){return e.Key===s})):null}return r.a.createElement("section",{className:"forcast-container"},r.a.createElement(x,{LocalizedName:l,Text:u}),r.a.createElement("p",{className:"like-btn"},r.a.createElement("span",{onClick:function(){var e,t;f()?c((e=a,function(t,a){var n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:n=(n=a().weatherReducer.favoriteCities).filter((function(t){return t.Key!==e.Key})),v.saveToStorage("favoriteCities",n),t({type:"REMOVE_FAVORITE",cityToRemove:e});case 4:case"end":return r.stop()}}))})):c((t=a,function(e,a){var n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:n=a().weatherReducer.favoriteCities,v.saveToStorage("favoriteCities",[].concat(Object(m.a)(n),[t])),e({type:"ADD_FAVORITE",favoriteCity:t});case 3:case"end":return r.stop()}}))}))}},r.a.createElement("svg",{className:f()?"favorite-city":"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},r.a.createElement("path",{d:"M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"})))),r.a.createElement(I,{forcast:t}))}function S(){var e=Object(o.c)((function(e){return e.weatherReducer})).city,t=Object(o.c)((function(e){return e.systemReducer})).wasInitialLoad,a=Object(n.useState)(null),c=Object(b.a)(a,2),i=c[0],l=c[1],s=Object(o.b)();Object(n.useEffect)((function(){e&&function(e){var t;d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return s({type:"LOADING_START"}),a.next=3,d.a.awrap(w.callCityWeather(e.Key));case 3:t=a.sent,l(t),s({type:"LOADING_DONE"});case 6:case"end":return a.stop()}}))}(e)}),[e]);return r.a.createElement(u.b.main,{className:"main-app-container",variants:{in:{opacity:1,x:0},out:{opacity:0,x:"-100%"}},transition:{duration:.5},exit:"out",animate:"in",initial:t?"out":null},r.a.createElement("div",{className:"top flex column align-center "},r.a.createElement(L,null)),i?r.a.createElement(C,{city:e,forcast:i.DailyForecasts,headLine:i.Headline}):r.a.createElement("div",null,r.a.createElement("h1",{className:"error-msg"},"OOPS! an error occoured, cold'nt load weather. ")))}var _=a(38);function k(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.weatherReducer})).favoriteCities,a=Object(o.c)((function(e){return e.systemReducer})).wasInitialLoad,c=Object(n.useState)(null),i=Object(b.a)(c,2),l=i[0],s=i[1];Object(n.useEffect)((function(){!function(){var a;d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e({type:"LOADING_START"}),t&&t.length){n.next=4;break}return e({type:"LOADING_DONE"}),n.abrupt("return");case 4:return n.next=6,d.a.awrap(Promise.all(t.map((function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(w.callCityWeather(e.Key));case 2:return t=a.sent,a.abrupt("return",t);case 4:case"end":return a.stop()}}))}))));case 6:a=n.sent,s(a),e({type:"LOADING_DONE"});case 9:case"end":return n.stop()}}))}()}),[t]);return r.a.createElement(u.b.section,{className:"favorites-page",variants:{in:{opacity:1,x:0},out:{opacity:0,x:"100%",overflowX:"hidden"}},transition:{duration:.5},exit:"out",animate:"in",initial:a?"out":null},t&&!t.length&&r.a.createElement("div",{className:"error-msg"},r.a.createElement("h1",null,"No favorite places ")),l&&t&&t.length?r.a.createElement("div",{className:"favorites-nav ".concat(function(){if(t)return t.length<=2}()?"short":"long")},t.map((function(e){return r.a.createElement(_.HashLink,{smooth:!0,key:e.LocalizedName,to:"#".concat(e.LocalizedName)},e.LocalizedName)}))):null,l&&t.length?t.map((function(e,t){return l[t]?r.a.createElement("div",{id:e.LocalizedName,key:e.Key},r.a.createElement(C,{toggleType:!1,headLine:l[t].Headline,city:e,key:e.Key,forcast:l[t].DailyForecasts})):r.a.createElement("div",{key:e.Key},r.a.createElement("h1",{className:"error-msg"},"OOPS! an error occoured, cold'nt load weather for ",e.LocalizedName,". "))})):null)}function D(){var e,t,a=Object(o.b)(),c=Object(n.useState)(!1),i=Object(b.a)(c,2),s=i[0],u=i[1],m=Object(n.useState)(!1),f=Object(b.a)(m,2),v=f[0],p=f[1],E=Object(n.useRef)();e=E,t=function(){return p(!1)},Object(n.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t]);var y=function(){return v?"":"hide"};return r.a.createElement("nav",null,r.a.createElement("div",{className:"links-container"},r.a.createElement("div",{className:"routing-links"},r.a.createElement(l.Link,{className:"btn",to:"/"},"Home"),r.a.createElement(l.Link,{className:"btn",to:"/favorites"},"Favorites  "),r.a.createElement(l.Link,{className:"btn",to:"/about"},"About  ")),r.a.createElement("span",{onClick:function(){return p(!0)},className:"cursor-pointer"},"Preference"),r.a.createElement("div",{ref:E,className:"preference-modal ".concat(y())},r.a.createElement("span",null,"Cel"),r.a.createElement("label",{className:"switch ".concat(y())},r.a.createElement("input",{className:y(),type:"checkbox",checked:s,onChange:function(){u(!s),a((function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"TOGGLE_DEGREE_TYPE"});case 1:case"end":return t.stop()}}))}))}}),r.a.createElement("div",null)),r.a.createElement("span",null,"Far"))))}function R(){var e=Object(o.c)((function(e){return e.systemReducer})).wasInitialLoad;Object(n.useEffect)((function(){window.scrollTo(0,0)}));return r.a.createElement(u.b.section,{className:"about-container flex column align-center",variants:{in:{opacity:1,y:0},out:{opacity:0,y:"100%"}},transition:{duration:.5},exit:"out",animate:"in",initial:e?"out":null},r.a.createElement("div",{className:"profile-img-container flex justify-center"},r.a.createElement("img",{src:a(71),alt:""})),r.a.createElement("div",{className:"personal-txt-container"},r.a.createElement("h1",null,"Hi! my name is Nadav Samuel and i'm a ",r.a.createElement("span",null,"Full-Stack")," developer!"),r.a.createElement("p",null," I'm 22 years old, born in Givaataim, Israel. Motivational fullstack web developer. People person and a team player.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",href:"https://nadav-samuel-portfolio.herokuapp.com/#/"}," Check out my portfolio!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/nadav-samuel-0b51291b9/"}," Check out my linkedin page!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"samuelna9@gmail.com "))))}var A=a(40),F=a.n(A);function G(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement(F.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80}))}var z=function(){var e=Object(s.l)(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.systemReducer})).isLoading;return Object(n.useEffect)((function(){return t(y()),t((function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(v.loadFromStorage("favoriteCities"));case 2:(t=a.sent)&&e(E(t));case 4:case"end":return a.stop()}}))})),function(){t(y())}}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(l.HashRouter,null,r.a.createElement(D,null),r.a.createElement(u.a,null,r.a.createElement(s.g,{location:e,key:e.pathname},r.a.createElement(s.d,{path:"/favorites",component:k}),r.a.createElement(s.d,{path:"/about",component:R}),r.a.createElement(s.d,{path:"/",component:S})))),a&&r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(91);var K,M=a(16),V=a(41),P={isLoading:!1,wasInitialLoad:!1},B={favoriteCities:null,filterBy:null,city:(K={AdministrativeArea:{ID:"LND",LocalizedName:"London"},Country:{ID:"GB",LocalizedName:"United Kingdom"},ID:"GB",LocalizedName:"United Kingdom",Key:"328328"},Object(N.a)(K,"LocalizedName","London"),Object(N.a)(K,"Rank",10),Object(N.a)(K,"Type","City"),Object(N.a)(K,"Version",1),K)};var H=Object(M.c)({systemReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOADING_START":return Object(j.a)({},e,{isLoading:!0});case"LOADING_DONE":return Object(j.a)({},e,{isLoading:!1});case"TOGGLE_INITIAL_LOAD":return Object(j.a)({},e,{wasInitialLoad:!e.wasInitialLoad});default:return e}},weatherReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CITY":return Object(j.a)({},e,{city:t.cityName});case"ADD_FAVORITE":return Object(j.a)({},e,{favoriteCities:[].concat(Object(m.a)(e.favoriteCities),[t.favoriteCity])});case"REMOVE_FAVORITE":return Object(j.a)({},e,{favoriteCities:e.favoriteCities.filter((function(e){return e.Key!==t.cityToRemove.Key}))});case"SET_FAVORITE_CITIES":return Object(j.a)({},e,{favoriteCities:t.favoriteCities});case"TOGGLE_DEGREE_TYPE":return Object(j.a)({},e,{degreeType:!e.degreeType});case"SET_FILTER":return Object(j.a)({},e,{filterBy:t.items});case"UPDATE_ITEM":return Object(j.a)({},e,{items:e.items.map((function(e){return e._id===t.item._id?t.item:e}))});case"REMOVE_ITEM":return Object(j.a)({},e,{items:e.items.filter((function(e){return e._id!==t.itemId}))});default:return e}}}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.d,W=Object(M.e)(H,Y(Object(M.a)(V.a)));i.a.render(r.a.createElement(o.a,{store:W},r.a.createElement(l.HashRouter,null,r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.812114af.chunk.js.map