(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),c=a(17),i=a.n(c),r=a(3),s=a.n(r),d=a(7),l=a(8),u=a(18),p=a.n(u),j=a.p+"static/media/icon-arrow.2eaaa5ee.svg",h=a(0),m=function(e){var t=e.value,a=e.setValue,n=e.submitHandler;return Object(h.jsxs)("section",{className:"inputs",children:[Object(h.jsx)("input",{className:"inputs--input",type:"text",value:t,onChange:function(e){a(e.target.value)},onKeyDown:function(e){13===e.keyCode&&n()},placeholder:"Enter domain or ip address",autoFocus:!0}),Object(h.jsx)("button",{className:"inputs--btn btn",onClick:n,children:Object(h.jsx)("img",{src:j,alt:"arrow"})})]})},b=function(e){var t=e.head,a=e.text,n=e.text2,o=e.zone;return a=a||"",Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("span",{className:"info--head",children:t}),Object(h.jsxs)("p",{className:"info--text",children:[o&&a?"UTC"+a:a||"-",n?", "+n:""]})]})},v=(a(44),a(4)),x=a.n(v),f=a.p+"static/media/icon-location.7e6459d2.svg",O=function(e){var t,a,o,c=e.data,i=8.741222,r=77.694626;c&&"Error"!==c&&(i=Number(null===c||void 0===c||null===(a=c.location)||void 0===a?void 0:a.lat),r=Number(null===c||void 0===c||null===(o=c.location)||void 0===o?void 0:o.lng));!i&&(i=(t=[8.741222,77.694626])[0],r=t[1]);var s=x.a.icon({iconUrl:f,shadowUrl:f,iconSize:[20,25],shadowSize:[20,25],iconAnchor:[23.5,55],shadowAnchor:[23.5,55],popupAnchor:[0,0]});return Object(n.useEffect)((function(){var e=x.a.map("mapid",{zoomControl:!1}).setView([i,r],13),t="pk.eyJ1IjoiYXNoaXFmdXJ5IiwiYSI6ImNrdGxvamZocTBiYncyeG8zYnd1ZDhyNHIifQ.nehqAr17Js0sV9lLZG4Y1g";return x.a.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=".concat(t),{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:t}).addTo(e),x.a.marker([i,r],{icon:s}).addTo(e),function(){e.remove()}}),[i,r]),Object(h.jsx)("div",{id:"mapid",style:{height:"480px"},className:"mapclass",children:"map placeholder"})},w=(a(45),function(){var e,t,a,o=Object(n.useState)(""),c=Object(l.a)(o,2),i=c[0],r=c[1],u=Object(n.useState)({}),j=Object(l.a)(u,2),v=j[0],x=j[1],f=function(){var e=Object(d.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://geo.ipify.org/api/v1?apiKey=".concat("at_F2VG0D4xKRSMKxED936VjBvStXDbx","&").concat(t,"=").concat(i)).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:a=e.sent,x(a),r("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==i.trim()){e.next=3;break}return x({}),e.abrupt("return",r(""));case 3:/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(i)?f("ipAddress"):/[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/.test(i)?f("domain"):r("");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("h1",{className:"header--text",children:"IP Address Tracker"})}),Object(h.jsx)(m,{value:i,setValue:r,submitHandler:w}),Object(h.jsxs)("section",{className:"infos",children:[Object(h.jsx)(b,{head:"Ip Address",text:null===v||void 0===v?void 0:v.ip}),Object(h.jsx)(b,{head:"Location",text:null===v||void 0===v||null===(e=v.location)||void 0===e?void 0:e.region,text2:null===v||void 0===v||null===(t=v.location)||void 0===t?void 0:t.city}),Object(h.jsx)(b,{head:"Timezone",text:null===v||void 0===v||null===(a=v.location)||void 0===a?void 0:a.timezone,zone:!0}),Object(h.jsx)(b,{head:"Isp",text:null===v||void 0===v?void 0:v.isp})]}),v?Object(h.jsx)(O,{data:v}):Object(h.jsx)(h.Fragment,{})]})});i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.613a8b5b.chunk.js.map