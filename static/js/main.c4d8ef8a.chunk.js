(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{42:function(e,t,a){e.exports=a(92)},71:function(e,t,a){e.exports=a.p+"static/media/profile.36e27b4d.jpg"},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),o=a(4),l=a(13),s=a(17),u=a(12),m=a(21),f=a(3),d=a.n(f);var v={loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null},saveToStorage:function(e,t){localStorage[e]=JSON.stringify(t)}},E=function(e){return{type:"SET_CITY",cityName:e}},p=function(e){return{type:"SET_FAVORITE_CITIES",favoriteCities:e}};function y(){return function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"TOGGLE_ERROR"});case 1:case"end":return t.stop()}}))}}function h(){return function(e,t){return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t().systemReducer.wasInitialLoad?v.saveToStorage("weatherAppInitialLoad",!1):v.saveToStorage("weatherAppInitialLoad",!0),e({type:"TOGGLE_INITIAL_LOAD"});case 3:case"end":return a.stop()}}))}}var b=a(9),O=a(24),g=a.n(O),w="nn5MCYcXt574QxNw4vYL5QBysXJt8GAj",N=w.slice(0,w.length-1).slice(1,w.length-2),j={callCityWeather:function(e){var t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.a.awrap(g.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(N)));case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.log("Err");case 11:case"end":return n.stop()}}),null,null,[[0,8]])},callCities:function(e){var t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.a.awrap(g.a.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(N,"&q=").concat(e.cityName)));case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.log("Err",n.t0);case 11:case"end":return n.stop()}}),null,null,[[0,8]])}};var L=a(15),T=a(5);function I(){var e=Object(o.b)(),t=Object(n.useState)(null),a=Object(b.a)(t,2),c=a[0],i=a[1],l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=Object(n.useState)(e),r=Object(b.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){t(c)}),[c]),[c,function(e){var t="number"===e.target.type?+e.target.value:e.target.value;i(Object(T.a)({},c,Object(L.a)({},e.target.name,t)))}]}({cityName:""},(function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,d.a.awrap(j.callCities(e));case 4:t=a.sent,i(t);case 6:case"end":return a.stop()}}))})),s=Object(b.a)(l,2),u=s[0],m=s[1],f=Object(o.c)((function(e){return e.weatherReducer})).isError;function v(t){f&&e(y());try{t.preventDefault(),e(function(e){return function(t){return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t(E(e));case 1:case"end":return a.stop()}}))}}(c[0]))}catch(a){e(y())}}var p=u.cityName,h=p?"":"background-glass";return r.a.createElement("section",{className:"search"},r.a.createElement("form",{onSubmit:function(e){return v(e)}},r.a.createElement("input",{className:h,autoComplete:"off",list:"city-ul",name:"cityName",id:"city",value:p,onChange:m})),u&&r.a.createElement("datalist",{id:"city-ul"},c&&c.map((function(e,t){var a=e.LocalizedName;return r.a.createElement("option",{key:t,value:a}," ",a," ")}))))}function x(e){var t=e.day,a=Object(o.c)((function(e){return e.weatherReducer})).degreeType,n=t.EpochDate,c=t.Temperature,i=t.Day,l=new Date(0);function s(e){return e<10?"0"+e:""+e}function u(){var e=c.Maximum.Value;return a?{degree:e,unitSymbol:"F"}:{degree:(e-32)/1.8.toFixed(),unitSymbol:"C"}}return r.a.createElement("article",{className:"forcast-card flex column align-center "},r.a.createElement("div",{className:"icon-container"},r.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(function(){var e=i.Icon;return i.Icon<10&&(e="0"+i.Icon),e}(),"-s.png"),alt:""})),r.a.createElement("section",{className:"forcast-details"},r.a.createElement("div",{className:"card-top"},r.a.createElement("h2",null,function(){switch(new Date(t.Date).getDay()){case 0:return"Sun";case 1:return"Mon";case 2:return"Tus";case 3:return"Wen";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat"}}(t.date)),r.a.createElement("h2",null,function(e){l.setUTCSeconds(e);var t=l.getFullYear(),a=s(l.getMonth()+1),n=s(l.getDate());return"".concat(n,"/").concat(a,"/").concat(t)}(n))),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("p",null,i.IconPhrase),r.a.createElement("h3",null,u().degree,r.a.createElement("span",null,u().unitSymbol)))))}function C(e){var t=e.forcast;return r.a.createElement("ul",{className:"forcast-list"},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(x,{day:e}))})))}function S(e){var t=e.LocalizedName,a=e.Text,n=e.isFavorite,c=void 0!==n&&n,i=e.setCurrentForcast,o=void 0===i?null:i,l=e.city,s=void 0===l?null:l;return r.a.createElement("div",{className:"headlines"},r.a.createElement("h1",null,"  ",t)," ",r.a.createElement("br",null),r.a.createElement("h1",null,a),c&&r.a.createElement("button",{onClick:function(){return o(s)}},"Show weather"))}function R(e){var t=e.forcast,a=e.city,n=e.headLine,c=Object(o.b)(),i=Object(o.c)((function(e){return e.weatherReducer})).favoriteCities,l=a.LocalizedName,s=a.Key,u=n.Text;function f(){return i?-1!==i.findIndex((function(e){return e.Key===s})):null}return r.a.createElement("section",{className:"forcast-container"},r.a.createElement(S,{LocalizedName:l,Text:u}),r.a.createElement("p",{className:"like-btn"},r.a.createElement("span",{onClick:function(){var e,t;f()?c((e=a,function(t,a){var n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:n=(n=a().weatherReducer.favoriteCities).filter((function(t){return t.Key!==e.Key})),v.saveToStorage("favoriteCities",n),t({type:"REMOVE_FAVORITE",cityToRemove:e});case 4:case"end":return r.stop()}}))})):c((t=a,function(e,a){var n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:n=a().weatherReducer.favoriteCities,v.saveToStorage("favoriteCities",[].concat(Object(m.a)(n),[t])),e({type:"ADD_FAVORITE",favoriteCity:t});case 3:case"end":return r.stop()}}))}))}},r.a.createElement("svg",{className:f()?"favorite-city":"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},r.a.createElement("path",{d:"M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"})))),r.a.createElement(C,{forcast:t}))}function _(){var e=Object(o.c)((function(e){return e.weatherReducer})),t=e.city,a=e.isError,c=Object(o.c)((function(e){return e.systemReducer})).wasInitialLoad,i=Object(n.useState)(null),l=Object(b.a)(i,2),s=l[0],m=l[1],f=Object(o.b)();Object(n.useEffect)((function(){t&&function(e){var t;d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return f({type:"LOADING_START"}),a.prev=1,a.next=4,d.a.awrap(j.callCityWeather(e.Key));case 4:t=a.sent,m(t);case 6:return a.prev=6,f({type:"LOADING_DONE"}),a.finish(6);case 9:case"end":return a.stop()}}),null,null,[[1,,6,9]])}(t)}),[t]);return r.a.createElement(u.b.main,{className:"main-app-container",variants:{in:{opacity:1,x:0},out:{opacity:0,x:"-100%"}},transition:{duration:.5},exit:"out",animate:"in",initial:c?"out":null},r.a.createElement("div",{className:"top flex column align-center "},r.a.createElement(I,null)),s&&!a?r.a.createElement(R,{city:t,forcast:s.DailyForecasts,headLine:s.Headline}):null,a&&r.a.createElement("div",null,r.a.createElement("h1",{className:"error-msg"},"OOPS! an error occoured, cold'nt load weather. ")))}var k=a(38);function D(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.weatherReducer})).favoriteCities,a=Object(o.c)((function(e){return e.systemReducer})).wasInitialLoad,c=Object(n.useState)(null),i=Object(b.a)(c,2),l=i[0],s=i[1];Object(n.useEffect)((function(){window.scrollTo(0,0),function(){var a;d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e({type:"LOADING_START"}),t&&t.length){n.next=4;break}return e({type:"LOADING_DONE"}),n.abrupt("return");case 4:return n.next=6,d.a.awrap(Promise.all(t.map((function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(j.callCityWeather(e.Key));case 2:return t=a.sent,a.abrupt("return",t);case 4:case"end":return a.stop()}}))}))));case 6:a=n.sent,s(a),e({type:"LOADING_DONE"});case 9:case"end":return n.stop()}}))}()}),[t]);return r.a.createElement(u.b.section,{className:"favorites-page",variants:{in:{opacity:1,x:0,overflowX:"hidden"},out:{opacity:0,x:"-100%",overflowX:"hidden"}},transition:{duration:.5},exit:"out",animate:"in",initial:a?"out":null},t&&!t.length&&r.a.createElement("div",{className:"error-msg"},r.a.createElement("h1",null,"No favorite places ")),l&&t&&t.length?r.a.createElement("div",{className:"favorites-nav ".concat(function(){if(t)return t.length<=2}()?"short":"long")},t.map((function(e){return r.a.createElement(k.HashLink,{smooth:!0,key:e.LocalizedName,to:"#".concat(e.LocalizedName)},e.LocalizedName)}))):null,l&&t.length?t.map((function(e,t){return l[t]?r.a.createElement("div",{id:e.LocalizedName,key:e.Key},r.a.createElement(R,{toggleType:!1,headLine:l[t].Headline,city:e,key:e.Key,forcast:l[t].DailyForecasts})):r.a.createElement("div",{key:e.Key},r.a.createElement("h1",{className:"error-msg"},"OOPS! an error occoured, cold'nt load weather for ",e.LocalizedName,". "))})):null)}function A(){var e,t,a=Object(o.b)(),c=Object(n.useState)(!1),i=Object(b.a)(c,2),s=i[0],u=i[1],m=Object(n.useState)(!1),f=Object(b.a)(m,2),v=f[0],E=f[1],p=Object(n.useRef)();e=p,t=function(){return E(!1)},Object(n.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t]);var y=function(){return v?"":"hide"};return r.a.createElement("nav",null,r.a.createElement("div",{className:"links-container"},r.a.createElement("div",{className:"routing-links"},r.a.createElement(l.Link,{className:"btn",to:"/"},"Home"),r.a.createElement(l.Link,{className:"btn",to:"/favorites"},"Favorites  "),r.a.createElement(l.Link,{className:"btn",to:"/about"},"About  ")),r.a.createElement("span",{onClick:function(){return E(!0)},className:"cursor-pointer"},"Preference"),r.a.createElement("div",{ref:p,className:"preference-modal ".concat(y())},r.a.createElement("span",null,"Cel"),r.a.createElement("label",{className:"switch ".concat(y())},r.a.createElement("input",{className:y(),type:"checkbox",checked:s,onChange:function(){u(!s),a((function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"TOGGLE_DEGREE_TYPE"});case 1:case"end":return t.stop()}}))}))}}),r.a.createElement("div",null)),r.a.createElement("span",null,"Far"))))}function G(){var e=Object(o.c)((function(e){return e.systemReducer})).wasInitialLoad;Object(n.useEffect)((function(){window.scrollTo(0,0)}));return r.a.createElement(u.b.section,{className:"about-container flex column align-center",variants:{in:{opacity:1,y:0},out:{opacity:0,y:"100%"}},transition:{duration:.5},exit:"out",animate:"in",initial:e?"out":null},r.a.createElement("div",{className:"profile-img-container flex justify-center"},r.a.createElement("img",{src:a(71),alt:""})),r.a.createElement("div",{className:"personal-txt-container"},r.a.createElement("h1",null,"Hi! my name is Nadav Samuel and i'm a ",r.a.createElement("span",null,"Full-Stack")," developer!"),r.a.createElement("p",null," I'm 22 years old, born in Givaataim, Israel. Motivational fullstack web developer. People person and a team player.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",href:"https://nadav-samuel-portfolio.herokuapp.com/#/"}," Check out my portfolio!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/nadav-samuel-0b51291b9/"}," Check out my linkedin page!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"samuelna9@gmail.com "))))}var F=a(40),z=a.n(F);function K(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement(z.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80}))}var M=function(){var e=Object(s.l)(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.systemReducer})).isLoading;return Object(n.useEffect)((function(){return t(h()),t((function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(v.loadFromStorage("favoriteCities"));case 2:(t=a.sent)&&e(p(t));case 4:case"end":return a.stop()}}))})),function(){t(h())}}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(l.HashRouter,null,r.a.createElement(A,null),r.a.createElement(u.a,null,r.a.createElement(s.g,{location:e,key:e.pathname},r.a.createElement(s.d,{path:"/favorites",component:D}),r.a.createElement(s.d,{path:"/about",component:G}),r.a.createElement(s.d,{path:"/",component:_})))),a&&r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(91);var V,P=a(16),B=a(41),H={isLoading:!1,wasInitialLoad:!1},Y={favoriteCities:[],filterBy:null,city:(V={AdministrativeArea:{ID:"LND",LocalizedName:"London"},Country:{ID:"GB",LocalizedName:"United Kingdom"},ID:"GB",LocalizedName:"United Kingdom",Key:"328328"},Object(L.a)(V,"LocalizedName","London"),Object(L.a)(V,"Rank",10),Object(L.a)(V,"Type","City"),Object(L.a)(V,"Version",1),V),isError:!1};var W=Object(P.c)({systemReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOADING_START":return Object(T.a)({},e,{isLoading:!0});case"LOADING_DONE":return Object(T.a)({},e,{isLoading:!1});case"TOGGLE_INITIAL_LOAD":return Object(T.a)({},e,{wasInitialLoad:!e.wasInitialLoad});default:return e}},weatherReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CITY":return Object(T.a)({},e,{city:t.cityName});case"TOGGLE_ERROR":return Object(T.a)({},e,{isError:!e.isError});case"ADD_FAVORITE":return Object(T.a)({},e,{favoriteCities:[].concat(Object(m.a)(e.favoriteCities),[t.favoriteCity])});case"REMOVE_FAVORITE":return Object(T.a)({},e,{favoriteCities:e.favoriteCities.filter((function(e){return e.Key!==t.cityToRemove.Key}))});case"SET_FAVORITE_CITIES":return Object(T.a)({},e,{favoriteCities:t.favoriteCities});case"TOGGLE_DEGREE_TYPE":return Object(T.a)({},e,{degreeType:!e.degreeType});case"SET_FILTER":return Object(T.a)({},e,{filterBy:t.items});case"UPDATE_ITEM":return Object(T.a)({},e,{items:e.items.map((function(e){return e._id===t.item._id?t.item:e}))});case"REMOVE_ITEM":return Object(T.a)({},e,{items:e.items.filter((function(e){return e._id!==t.itemId}))});default:return e}}}),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.d,J=Object(P.e)(W,X(Object(P.a)(B.a)));i.a.render(r.a.createElement(o.a,{store:J},r.a.createElement(l.HashRouter,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.c4d8ef8a.chunk.js.map