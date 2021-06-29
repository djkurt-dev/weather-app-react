(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(15),i=c.n(a),r=(c(21),c(3)),l=c.n(r),h=c(4),j=c(6),d=(c(23),c(16)),m=c.n(d),p=function(){var e=Object(h.a)(l.a.mark((function e(t){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",APPID:"7bc8c4154d7f7782899f1aaa96ad9fa8"}});case 2:return c=e.sent,s=c.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=c(0),u=function(){var e=Object(s.useState)("Manila"),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)({}),i=Object(j.a)(a,2),r=i[0],d=i[1],m=function(){var e=Object(h.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=6;break}return e.next=3,p(c);case 3:s=e.sent,d(s),n("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){(function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(c);case 2:t=e.sent,d(t),n("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.jsxs)("div",{className:"main-container mt-3",children:[Object(o.jsxs)("div",{className:"mb-3 text-center",children:[Object(o.jsxs)("h4",{className:"app-name",children:["Weather",Object(o.jsx)("sup",{children:"2"})," Lang"]}),Object(o.jsxs)("p",{className:"app-develop text-light",children:["Developed by ",Object(o.jsx)("strong",{children:"Kurt"})]})]}),Object(o.jsx)("input",{type:"text",className:"search text-center",placeholder:"Search...",value:c,onChange:function(e){return n(e.target.value)},onKeyPress:m}),r.main&&Object(o.jsx)("div",{className:"city container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-lg-6 col-md-12 pt-4 text-center",children:[Object(o.jsxs)("h2",{className:"city-name text-center",children:[Object(o.jsx)("span",{children:r.name}),Object(o.jsx)("sup",{children:r.sys.country})]}),Object(o.jsxs)("div",{className:"city-temp",children:[Math.round(r.main.temp),Object(o.jsx)("sup",{children:"\xb0C"})]}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(r.weather[0].icon,"@2x.png"),alt:r.weather[0].description}),Object(o.jsx)("p",{className:"weather-description text-center",children:r.weather[0].description})]})]}),Object(o.jsxs)("div",{className:"col-lg-6 col-md-12 pt-3",children:[Object(o.jsx)("p",{className:"highlight-title text-center",children:"Today's Highlights"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"highlights row pt-3",children:[Object(o.jsxs)("div",{className:"col",children:[Object(o.jsxs)("div",{className:"mb-5 text-center",children:[Object(o.jsx)("p",{className:"highlight-info",children:"Min Temp."}),Object(o.jsxs)("h3",{className:"highlight-value",children:[r.main.temp_min,Object(o.jsx)("sup",{children:"\xb0C"})]})]}),Object(o.jsxs)("div",{className:"mb-3 text-center",children:[Object(o.jsx)("p",{className:"highlight-info",children:"Humidity"}),Object(o.jsxs)("h3",{className:"highlight-value",children:[r.main.humidity,Object(o.jsx)("small",{children:"%"})]})]})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsxs)("div",{className:"mb-5 text-center",children:[Object(o.jsx)("p",{className:"highlight-info",children:"Max Temp."}),Object(o.jsxs)("h3",{className:"highlight-value",children:[r.main.temp_max,Object(o.jsx)("sup",{children:"\xb0C"})]})]}),Object(o.jsxs)("div",{className:"mb-3 text-center",children:[Object(o.jsx)("p",{className:"highlight-info",children:"Wind"}),Object(o.jsxs)("h3",{className:"highlight-value",children:[r.wind.speed,Object(o.jsx)("small",{children:"m/s"})]})]})]})]})]})]})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.918872e8.chunk.js.map