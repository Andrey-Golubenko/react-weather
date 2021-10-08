(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{19:function(e,t,n){e.exports={alertMessage:"Alert_alertMessage__2-gkS",warningMessage:"Alert_warningMessage__dXzq9",closeWarningMessage:"Alert_closeWarningMessage__3unOL"}},20:function(e,t,n){e.exports={warningMessage:"Warning_warningMessage__2-7LD",closeWarningMessage:"Warning_closeWarningMessage__AEQWO"}},21:function(e,t,n){e.exports={successMessage:"Success_successMessage__YcB08",closeSuccessMessage:"Success_closeSuccessMessage__weM5j"}},26:function(e){e.exports=JSON.parse('{"200":{"label":"thunderstorm with light rain","icon":"storm-showers"},"201":{"label":"thunderstorm with rain","icon":"storm-showers"},"202":{"label":"thunderstorm with heavy rain","icon":"storm-showers"},"210":{"label":"light thunderstorm","icon":"storm-showers"},"211":{"label":"thunderstorm","icon":"thunderstorm"},"212":{"label":"heavy thunderstorm","icon":"thunderstorm"},"221":{"label":"ragged thunderstorm","icon":"thunderstorm"},"230":{"label":"thunderstorm with light drizzle","icon":"storm-showers"},"231":{"label":"thunderstorm with drizzle","icon":"storm-showers"},"232":{"label":"thunderstorm with heavy drizzle","icon":"storm-showers"},"300":{"label":"light intensity drizzle","icon":"sprinkle"},"301":{"label":"drizzle","icon":"sprinkle"},"302":{"label":"heavy intensity drizzle","icon":"sprinkle"},"310":{"label":"light intensity drizzle rain","icon":"sprinkle"},"311":{"label":"drizzle rain","icon":"sprinkle"},"312":{"label":"heavy intensity drizzle rain","icon":"sprinkle"},"313":{"label":"shower rain and drizzle","icon":"sprinkle"},"314":{"label":"heavy shower rain and drizzle","icon":"sprinkle"},"321":{"label":"shower drizzle","icon":"sprinkle"},"500":{"label":"light rain","icon":"rain"},"501":{"label":"moderate rain","icon":"rain"},"502":{"label":"heavy intensity rain","icon":"rain"},"503":{"label":"very heavy rain","icon":"rain"},"504":{"label":"extreme rain","icon":"rain"},"511":{"label":"freezing rain","icon":"rain-mix"},"520":{"label":"light intensity shower rain","icon":"showers"},"521":{"label":"shower rain","icon":"showers"},"522":{"label":"heavy intensity shower rain","icon":"showers"},"531":{"label":"ragged shower rain","icon":"showers"},"600":{"label":"light snow","icon":"snow"},"601":{"label":"snow","icon":"snow"},"602":{"label":"heavy snow","icon":"snow"},"611":{"label":"sleet","icon":"sleet"},"612":{"label":"shower sleet","icon":"sleet"},"615":{"label":"light rain and snow","icon":"rain-mix"},"616":{"label":"rain and snow","icon":"rain-mix"},"620":{"label":"light shower snow","icon":"rain-mix"},"621":{"label":"shower snow","icon":"rain-mix"},"622":{"label":"heavy shower snow","icon":"rain-mix"},"701":{"label":"mist","icon":"sprinkle"},"711":{"label":"smoke","icon":"smoke"},"721":{"label":"haze","icon":"day-haze"},"731":{"label":"sand, dust whirls","icon":"cloudy-gusts"},"741":{"label":"fog","icon":"fog"},"751":{"label":"sand","icon":"cloudy-gusts"},"761":{"label":"dust","icon":"dust"},"762":{"label":"volcanic ash","icon":"smog"},"771":{"label":"squalls","icon":"day-windy"},"781":{"label":"tornado","icon":"tornado"},"800":{"label":"clear sky","icon":"sunny"},"801":{"label":"few clouds","icon":"cloudy"},"802":{"label":"scattered clouds","icon":"cloudy"},"803":{"label":"broken clouds","icon":"cloudy"},"804":{"label":"overcast clouds","icon":"cloudy"},"900":{"label":"tornado","icon":"tornado"},"901":{"label":"tropical storm","icon":"hurricane"},"902":{"label":"hurricane","icon":"hurricane"},"903":{"label":"cold","icon":"snowflake-cold"},"904":{"label":"hot","icon":"hot"},"905":{"label":"windy","icon":"windy"},"906":{"label":"hail","icon":"hail"},"951":{"label":"calm","icon":"sunny"},"952":{"label":"light breeze","icon":"cloudy-gusts"},"953":{"label":"gentle breeze","icon":"cloudy-gusts"},"954":{"label":"moderate breeze","icon":"cloudy-gusts"},"955":{"label":"fresh breeze","icon":"cloudy-gusts"},"956":{"label":"strong breeze","icon":"cloudy-gusts"},"957":{"label":"high wind, near gale","icon":"cloudy-gusts"},"958":{"label":"gale","icon":"cloudy-gusts"},"959":{"label":"severe gale","icon":"cloudy-gusts"},"960":{"label":"storm","icon":"thunderstorm"},"961":{"label":"violent storm","icon":"thunderstorm"},"962":{"label":"hurricane","icon":"cloudy-gusts"}}')},32:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(15),s=n.n(c),i=(n(32),n(9)),o=n(3),l=n(2),d=n.n(l),u=n(24),h=n(4),j=n(14),b=function(){return Object(j.b)()},m=j.c,p=n(11),f="1d27642ff939733cec26fd6be1369a69",x="https://api.openweathermap.org/data/2.5/",v=Object(p.b)("cities/fetchCurrentCities",function(){var e=Object(h.a)(d.a.mark((function e(t,n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(x,"weather?q=").concat(t,"&units=metric&appid=").concat(f));case 4:if((a=e.sent).ok||404===a.status){e.next=9;break}throw new Error("Server responded with an error");case 9:if(404!==a.status){e.next=11;break}throw new Error("such city not found");case 11:return e.next=13,a.json();case 13:return e.abrupt("return",e.sent);case 16:return e.prev=16,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t,n){return e.apply(this,arguments)}}()),O=Object(p.b)("cities/fetchCityUpdate",function(){var e=Object(h.a)(d.a.mark((function e(t,n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(x,"weather?q=").concat(t,"&units=metric&appid=").concat(f));case 4:if((a=e.sent).ok||404===a.status){e.next=7;break}throw new Error("Server responded with an error");case 7:return e.next=9,a.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}()),g=Object(p.b)("hourlyForecast/fetchSingleCity",function(){var e=Object(h.a)(d.a.mark((function e(t,n){var r,a,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(x,"onecall?lat=").concat(t.lat,"&lon=").concat(t.lon,"&exclude=current,minutely,daily,alerts&units=metric&appid=").concat(f));case 4:if((a=e.sent).ok){e.next=7;break}throw new Error("Server responded with an error");case 7:return e.next=9,a.json();case 9:return c=e.sent,e.next=12,c.hourly.slice(0,24).filter((function(e,t){return t%3===0?e:null}));case 12:return s=e.sent,e.abrupt("return",s);case 16:return e.prev=16,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t,n){return e.apply(this,arguments)}}()),w=Object(p.c)({name:"weather",initialState:{cities:[],currentLocation:"",status:null,error:null,locationError:null,hourlyForecast:[]},reducers:{setError:function(e,t){e.error=t.payload},resetError:function(e){e.error=null},getCurrentLocation:function(e,t){e.currentLocation=t.payload},setLocationError:function(e,t){e.locationError=t.payload},toFahrenheit:function(e,t){e.cities=e.cities.map((function(e){return e.id===t.payload?(e.main.temp=9*e.main.temp/5+32,e.main.temp_max=9*e.main.temp_max/5+32,e.main.temp_min=9*e.main.temp_min/5+32,e):e}))},toCelsius:function(e,t){e.cities=e.cities.map((function(e){return e.id===t.payload?(e.main.temp=5*(e.main.temp-32)/9,e.main.temp_max=5*(e.main.temp_max-32)/9,e.main.temp_min=5*(e.main.temp_min-32)/9,e):e}))},deleteCity:function(e,t){e.cities=e.cities.filter((function(e){return e.id!==t.payload}))}},extraReducers:function(e){e.addCase(v.pending,(function(e){e.status="loading",e.error=null})).addCase(v.fulfilled,(function(e,t){e.status="resolved",e.cities.push(t.payload)})).addCase(v.rejected,(function(e,t){e.status="rejected",e.error=t.payload})).addCase(O.pending,(function(e){e.error=null})).addCase(O.fulfilled,(function(e,t){e.cities=e.cities.map((function(e){return e.id===t.payload.id?e=t.payload:e}))})).addCase(O.rejected,(function(e,t){e.status="rejected",e.error=t.payload})).addCase(g.pending,(function(e){e.status="loading",e.error=null})).addCase(g.fulfilled,(function(e,t){e.status="resolved",e.hourlyForecast=t.payload})).addCase(g.rejected,(function(e,t){e.status="rejected",e.error=t.payload}))}}),y=w.actions,N=y.setError,k=y.resetError,C=y.getCurrentLocation,S=y.setLocationError,M=y.toFahrenheit,_=y.toCelsius,z=y.deleteCity,E=w.reducer,F=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.prev=1,e.next=4,fetch("https://ipinfo.io/json?token=".concat("60d632197c8d58"));case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,t=r.city,n.ok){e.next=11;break}throw new Error("Location is not defined");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),L=n(0),W=function(){return Object(L.jsx)("div",{className:"progress green accent-1",children:Object(L.jsx)("div",{className:"indeterminate green darken-3"})})},D=n(19),A=n.n(D),I=function(){var e=m((function(e){return e.weather.error})),t=b();return Object(L.jsxs)("div",{className:A.a.alertMessage,role:"alert",children:[Object(L.jsx)("span",{className:A.a.closeWarningMessage,onClick:function(){t(k())},children:"\u2716"}),"An error occurred : ",e," ! We work on this. Try again latter, please."]})},T=n(20),V=n.n(T),B=function(){var e=m((function(e){return e.weather.error})),t=b();return Object(L.jsxs)("div",{className:V.a.warningMessage,role:"alert",children:[Object(L.jsx)("span",{className:V.a.closeWarningMessage,onClick:function(){t(k())},children:"\u2716"}),Object(L.jsxs)("p",{children:["Unfortunately, ",e,". Check entering data and try again, please !"]})]})},J=n(21),U=n.n(J),q=function(){var e=m((function(e){return e.weather.error})),t=b();return Object(L.jsxs)("div",{className:U.a.successMessage,role:"alert",children:[Object(L.jsx)("span",{className:U.a.closeSuccessMessage,onClick:function(){t(k())},children:"\u2716"}),Object(L.jsxs)("p",{children:[e," Check entering data and try again, please !"]})]})},H=n(10),R=n(8);function K(e){var t=new Date(1e3*e);return"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],", ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDate())}var Y,P=n(26);var Q=["title","titleId"];function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Z(e,t){var n=e.title,a=e.titleId,c=G(e,Q);return r.createElement("svg",X({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 473 473",fill:"#ff0000",style:{enableBackground:"new 0 0 473 473"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,Y||(Y=r.createElement("g",null,r.createElement("path",{d:"M317.667,214.42l5.667-86.42h20.951V38h-98.384V0H132.669v38H34.285v90h20.951l20,305h140.571 c23.578,24.635,56.766,40,93.478,40c71.368,0,129.43-58.062,129.43-129.43C438.715,275.019,385.143,218.755,317.667,214.42z  M162.669,30h53.232v8h-53.232V30z M64.285,68h250v30h-250V68z M103.334,403L85.301,128H293.27l-5.77,87.985 c-61.031,10.388-107.645,63.642-107.645,127.586c0,21.411,5.231,41.622,14.475,59.43H103.334z M309.285,443 c-54.826,0-99.43-44.604-99.43-99.43s44.604-99.429,99.43-99.429s99.43,44.604,99.43,99.429S364.111,443,309.285,443z"}),r.createElement("polygon",{points:"342.248,289.395 309.285,322.358 276.322,289.395 255.109,310.608 288.072,343.571 255.109,376.533  276.322,397.746 309.285,364.783 342.248,397.746 363.461,376.533 330.498,343.571 363.461,310.608  "}))))}var $=r.forwardRef(Z),ee=(n.p,function(e){var t=e.id,n=void 0===t?0:t,a=e.name,c=void 0===a?"":a,s=e.dt,i=void 0===s?0:s,o=e.main,l=void 0===o?{temp:0,temp_max:0,temp_min:0,humidity:0,pressure:0}:o,d=e.weather,u=void 0===d?[{icon:"",description:""}]:d,h=e.wind,j=void 0===h?{speed:0}:h,m=Object(r.useState)(!0),p=Object(R.a)(m,2),f=p[0],x=p[1],v=K(i),g=function(e){var t=String(e),n=P[t].icon;return e>699&&e<800||e>899&&e<1e3||(n="day-"+n),"wi wi-"+n}(+u[0].id),w=b(),y="",N="";return f?y="active-degree":N="active-degree",Object(L.jsxs)("div",{className:"card",children:[Object(L.jsxs)("div",{className:"card-content",children:[Object(L.jsxs)("div",{className:"card-geo-data",children:[Object(L.jsx)("span",{className:"card-title",children:c}),Object(L.jsx)("span",{className:"card-title",children:v})]}),Object(L.jsxs)("div",{className:"card-temperature",children:[Object(L.jsx)("div",{className:"card-temperature-degrees",children:Object(L.jsx)("span",{children:Math.round(l.temp)})}),Object(L.jsxs)("div",{className:"card-temperature-measure",children:[Object(L.jsxs)("div",{className:"temperature-measure-kind",children:[Object(L.jsx)("span",{className:"temperature-measure-cel  ".concat(y),onClick:function(e){f||(w(_(n)),x((function(e){return!e}))),e.preventDefault()},children:"\xb0C"}),Object(L.jsx)("div",{className:"temperature-measure-delimiter"}),Object(L.jsx)("span",{className:"temperature-measure-far  ".concat(N),onClick:function(e){f&&(w(M(n)),x((function(e){return!e}))),e.preventDefault()},children:"\xb0F"})]}),Object(L.jsxs)("div",{className:"temperature-measure-minmax",children:[Object(L.jsxs)("div",{className:"temperature-measure-max",children:[Object(L.jsx)("span",{className:"temperature-mark",children:"\u2191"}),Object(L.jsx)("p",{className:"temperature-text",children:Object(L.jsx)("span",{children:Math.round(l.temp_max)})}),Object(L.jsx)("span",{className:"temperature-unit",children:f?"\xb0C":"\xb0F"})]}),Object(L.jsxs)("div",{className:"temperature-measure-min",children:[Object(L.jsx)("span",{className:"temperature-mark",children:"\u2193"}),Object(L.jsx)("p",{className:"temperature-text",children:Object(L.jsx)("span",{children:Math.round(l.temp_min)})}),Object(L.jsx)("span",{className:"temperature-unit",children:f?"\xb0C":"\xb0F"})]})]})]})]}),Object(L.jsxs)("div",{className:"card-details",children:[Object(L.jsxs)("div",{className:"card-details-wrap",children:[Object(L.jsx)("span",{className:"details-icon",children:Object(L.jsx)("i",{className:g})}),Object(L.jsx)("div",{className:"detail-description",children:u[0].description})]}),Object(L.jsxs)("div",{className:"detail-box",children:[Object(L.jsxs)("div",{className:"detail-indicator",children:[Object(L.jsxs)("div",{className:"detail-info",children:[Object(L.jsx)("span",{children:j.speed}),Object(L.jsx)("span",{className:"detail-measure",children:"m/s"})]}),Object(L.jsx)("div",{className:"detail-name",children:"wind speed"})]}),Object(L.jsxs)("div",{className:"detail-indicator",children:[Object(L.jsxs)("div",{className:"detail-info",children:[Object(L.jsx)("span",{children:l.humidity}),Object(L.jsx)("span",{className:"detail-measure",children:"%"})]}),Object(L.jsx)("div",{className:"detail-name",children:"humidity"})]}),Object(L.jsxs)("div",{className:"detail-indicator",children:[Object(L.jsxs)("div",{className:"detail-info",children:[Object(L.jsx)("span",{children:l.pressure}),Object(L.jsx)("span",{className:"detail-measure",children:"hpa"})]}),Object(L.jsx)("div",{className:"detail-name",children:"pressure"})]})]})]})]}),Object(L.jsxs)("div",{className:"card-action",children:[Object(L.jsx)("button",{className:"btn",onClick:function(e){w(O(c)),e.preventDefault()},children:"update"}),Object(L.jsx)("div",{className:"removal-tool",onClick:function(e){w(z(n)),e.preventDefault()},children:Object(L.jsx)($,{className:"city-delete"})})]})]})}),te=function(){var e=m((function(e){return e.weather.cities})),t=["list"];return e.length<=3&&t.push("single-item-list"),Object(L.jsx)("div",{className:t.join(" "),children:e.map((function(e){return Object(L.jsx)(i.b,{to:"/cities/".concat(e.name.toLowerCase()),children:Object(L.jsx)(ee,Object(H.a)({},e))},e.id)}))})},ne=function(){var e=m((function(e){return e.weather.currentLocation}));return Object(L.jsxs)("div",{className:"location-spoiler",children:[Object(L.jsxs)("h5",{className:"location-spoiler-heading",children:["Your current city is ",Object(L.jsx)("b",{children:e||"undefined"})," and you ",e?"can":"can't"," view current weather in it, below."]}),Object(L.jsx)("p",{className:"location-spoiler-text",children:"Also, to view the current weather in another city, enter its name in the field below."})]})},re=function(){return Object(L.jsxs)("div",{className:"error-location-spoiler",children:[Object(L.jsx)("h5",{className:"location-spoiler-heading",children:"Unfortunately, we could not determine your current city. "}),Object(L.jsx)("p",{className:"location-spoiler-text",children:"To view the current weather in your or another city, enter its name in the field below."})]})},ae=function(){var e=b(),t=m((function(e){return e.weather.locationError})),n=function(){var t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F();case 2:n=t.sent,e(C(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){n()}),[]),Object(L.jsx)(L.Fragment,{children:t?Object(L.jsx)(re,{}):Object(L.jsx)(ne,{})})},ce=function(e){var t=e.children,n=e.onChangeValue,r=void 0===n?function(){}:n,a=e.onClearField,c=void 0===a?function(){}:a,s=e.onKeyCatcher,i=void 0===s?function(){}:s,o=e.onSubmitButton,l=void 0===o?function(){}:o,d=e.textValue,u=m((function(e){return e.weather.error}));return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{className:"row",children:Object(L.jsxs)("div",{className:"input-field search-field",children:[Object(L.jsx)("input",{required:!0,type:"search",placeholder:"Search City",onKeyDown:i,onKeyUp:l,onChange:function(e){r(e.target.value)},onBlur:c,value:d}),Object(L.jsx)("button",{className:"btn search-btn",onClick:l,children:"Search"}),t]})}),"you enter unacceptable data"===u&&Object(L.jsx)(B,{})]})},se=function(){var e=Object(r.useRef)(!1),t=Object(r.useState)(""),n=Object(R.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),i=Object(R.a)(s,2),o=i[0],l=i[1],u=Object(r.useState)([]),j=Object(R.a)(u,2),p=j[0],f=j[1],x=Object(r.useState)(-1),O=Object(R.a)(x,2),g=O[0],w=O[1],y=b(),k=m((function(e){return e.weather.cities}));Object(r.useEffect)((function(){var t=function(){var t=Object(h.a)(d.a.mark((function t(){var n,r,c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=".concat(encodeURIComponent(a),"&maxresults=20&apikey=").concat("Xb-_1wTki2whKABwRE8Q-v6es71WeEaehkfcDAHFpbQ"));case 3:return n=t.sent,t.next=6,n.json();case 6:if(r=t.sent,c=r.suggestions,(s=C(c))&&l(s),n.ok){t.next=12;break}throw new Error("Sorry, something wrong with input autocomplete");case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),y(N("Sorry, something wrong with input autocomplete")),e.current=!0;case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();return e.current||(S(),M(a),t()),function(){l([])}}),[a]);var C=function(e){return e?e.filter((function(e){return["district","city"].includes(e.matchLevel)})):e},S=function(){-1!==g&&w(-1)},M=function(e){!e.length&&p.length&&f([])},_=function(e){var t=e.address.county,n=e.address.city;return"".concat(n,", ").concat(t)},z=function(){setTimeout((function(){f([])}),200)};return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(ce,{onChangeValue:function(e){f(o),c(e)},onClearField:z,onKeyCatcher:function(e){"ArrowUp"===e.key&&g>-1&&w(g-1);var t=p.length-1;"ArrowDown"===e.key&&g!==t&&w(g+1),"Enter"===e.key&&-1!==g&&(c(_(p[g])),z())},onSubmitButton:function(e){"Enter"!==e.key&&"btn search-btn"!==e.currentTarget.className||(a&&!(parseInt(a)>=0||parseInt(a)<=0)?k.filter((function(e){return e.name===encodeURIComponent(a.split(",")[0])})).length?(c(""),y(N("You already have such a city"))):(y(v(a)),S(),c(""),z()):y(N("you enter unacceptable data")))},textValue:a,children:p.length?Object(L.jsx)("ul",{className:"search-autocomplete",onClick:function(e){var t=e.target.innerText;c(t),f([])},children:p.map((function(e,t){return Object(L.jsx)("li",{className:"search-autocomplete-item "+(g===t?"search-autocomplete-item-color":""),children:_(e)},e.locationId)}))}):null})})},ie=function(){var e=b(),t=m((function(e){return e.weather.status})),n=m((function(e){return e.weather.error})),a=m((function(e){return e.weather.locationError})),c=m((function(e){return e.weather.cities})),s=m((function(e){return e.weather.currentLocation}));return Object(r.useEffect)((function(){if(c.length<1&&!s){var t=JSON.parse(localStorage.getItem("citiesList"));if(t&&0!==t.length){var n=function(){var n=Object(h.a)(d.a.mark((function n(){var r,a,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=Object(u.a)(t),n.prev=1,r.s();case 3:if((a=r.n()).done){n.next=9;break}return c=a.value,n.next=7,e(v(c));case 7:n.next=3;break;case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),r.e(n.t0);case 14:return n.prev=14,r.f(),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}else F().then((function(t){return e(t?v(t):S("Location is not defined"))}))}}),[c.length,s,e]),Object(r.useEffect)((function(){var e=c.map((function(e){return e.name}));e.length?localStorage.setItem("citiesList",JSON.stringify(e)):localStorage.clear()}),[c]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(ae,{}),Object(L.jsx)(se,{}),"loading"===t&&Object(L.jsx)(W,{}),"Server responded with an error"===n&&!a&&Object(L.jsx)(I,{}),"such city not found"===n&&Object(L.jsx)(B,{}),"You already have such a city"===n&&Object(L.jsx)(q,{}),Object(L.jsx)(te,{})]})};var oe=function(e){var t=e.dt,n=void 0===t?0:t,r=e.temp,a=void 0===r?0:r,c=e.pressure,s=void 0===c?0:c,i=e.humidity,o=void 0===i?0:i,l=e.wind_speed,d=void 0===l?0:l,u=Object(R.a)(e.weather,1)[0],h=u.description,j=void 0===h?"":h,b=u.icon,m=void 0===b?"":b,p=e.elemWithMinTemp,f=function(e){var t=new Date(1e3*e);return"".concat(t.getHours()," : ").concat(t.getMinutes(),"0")}(n),x=K(n),v="http://openweathermap.org/img/wn/".concat(m,"@2x.png"),O=Math.ceil(a);return Object(L.jsxs)("div",{className:"card day-card",children:[Object(L.jsxs)("div",{className:"card-content card-content-day",children:[Object(L.jsxs)("div",{className:"card-geo-data card-geo-data-day",children:[Object(L.jsx)("h5",{children:f}),Object(L.jsx)("p",{children:x})]}),Object(L.jsx)("div",{className:"card-temperature-day",children:Object(L.jsx)("div",{className:"temperature-day",style:function(){var e="0 0 40px rgba(".concat(250-(100-10*O),",  ").concat(220-(100-12*O),", 0, ").concat(1-(O/100+.4),") inset"),t="0 0 40px rgba(".concat(250-(100-12*O),",  ").concat(255-(100-8*O),", 250, ").concat(1-(O/100+.3),") inset"),n=12*(O-p)+"px";return O>0?{boxShadow:e,bottom:n}:{boxShadow:t,bottom:n}}(),children:Object(L.jsx)("span",{children:a>0?"+".concat(O,"\xb0C"):"".concat(O,"\xb0C")})})})]}),Object(L.jsxs)("div",{className:"card-details card-details-day",children:[Object(L.jsxs)("div",{className:"card-details-wrap",children:[Object(L.jsx)("span",{className:"details-icon",children:Object(L.jsx)("img",{src:v,alt:""})}),Object(L.jsx)("div",{className:"detail-description-day",children:j})]}),Object(L.jsxs)("div",{className:"detail-box detail-box-day",children:[Object(L.jsxs)("div",{className:"detail-indicator",children:[Object(L.jsxs)("div",{className:"detail-info",children:[Object(L.jsx)("span",{children:d}),Object(L.jsx)("span",{className:"detail-measure",children:"m/s"})]}),Object(L.jsx)("div",{className:"detail-name",children:"wind speed"})]}),Object(L.jsxs)("div",{className:"detail-indicator",children:[Object(L.jsxs)("div",{className:"detail-info",children:[Object(L.jsx)("span",{children:o}),Object(L.jsx)("span",{className:"detail-measure",children:"%"})]}),Object(L.jsx)("div",{className:"detail-name",children:"humidity"})]}),Object(L.jsxs)("div",{className:"detail-indicator",children:[Object(L.jsxs)("div",{className:"detail-info",children:[Object(L.jsx)("span",{children:s}),Object(L.jsx)("span",{className:"detail-measure",children:"hpa"})]}),Object(L.jsx)("div",{className:"detail-name",children:"pressure"})]})]})]})]})};function le(){return(le=Object(h.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"weather?q=").concat(t,"&appid=").concat(f));case 2:if((n=e.sent).ok||404===n.status){e.next=5;break}throw new Error("Server responded with an error");case 5:return e.next=7,n.json();case 7:return r=e.sent,e.next=10,r.coord;case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=function(){var e=b(),t=m((function(e){return e.weather.hourlyForecast})),n=Object(o.f)().name;Object(r.useEffect)((function(){(function(e){return le.apply(this,arguments)})(n).then((function(t){return e(g({lat:t.lat,lon:t.lon}))}))}),[n,e]);var a=Math.ceil(Math.min.apply(null,t.map((function(e){return e.temp}))));return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{className:"location-spoiler",children:Object(L.jsxs)("h5",{className:"location-spoiler-heading",children:["Daily weather forecast for ",Object(L.jsx)("b",{children:Object(L.jsx)("pre",{children:n.toUpperCase()})})]})}),Object(L.jsx)("div",{className:"list day-list",children:t.map((function(e){return Object(L.jsx)(oe,Object(H.a)({elemWithMinTemp:a},e),e.dt)}))})]})},ue=function(){return Object(L.jsx)("h1",{children:"Page 404"})},he=function(){return Object(L.jsx)("nav",{className:"green darken-2",children:Object(L.jsxs)("div",{className:"nav-wrapper",children:[Object(L.jsx)(i.b,{to:"/",className:"brand-logo",children:"Weather"}),Object(L.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(L.jsx)("li",{children:Object(L.jsx)(i.b,{to:"/",children:"Home"})})})]})})},je=function(){return Object(L.jsx)("footer",{className:"page-footer green darken-2",children:Object(L.jsx)("div",{className:"footer-copyright green darken-2",children:Object(L.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(L.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://andrey-golubenko.github.io/react-weather/",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})};var be=function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(i.a,{basename:"/react-weather",children:[Object(L.jsx)(he,{}),Object(L.jsx)("main",{className:"container content",children:Object(L.jsxs)(o.c,{children:[Object(L.jsx)(o.a,{exact:!0,path:"/",component:ie}),Object(L.jsx)(o.a,{path:"/cities/:name",component:de}),Object(L.jsx)(o.a,{component:ue})]})}),Object(L.jsx)(je,{})]})})},me=Object(p.a)({reducer:{weather:E}});s.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(j.a,{store:me,children:Object(L.jsx)(be,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a26b2997.chunk.js.map