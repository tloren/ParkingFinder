(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{55:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a(109),o=a(100),i=a(101),u=function(){return l.a.createElement(c.a,{position:"static"},l.a.createElement(o.a,null,l.a.createElement(i.a,{variant:"h3",color:"inherit"},"Parking Finder")))},m=function(){return l.a.createElement(i.a,{variant:"h6",color:"inherit"},"Developed by Group 2 for SIT737")},s=a(19),p=a(47),E=a(106),d=a(103),h=a(105),g=a(111),b=a(112),v=a(108),f=a(113),y=a(102),j=a(25),k=a.n(j),O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([-37.814,144.965]),o=Object(s.a)(c,2),i=o[0],u=o[1];return l.a.createElement("div",{style:{width:"100%",height:"100vh"}},l.a.createElement("h1",null," Click on a location to get started! "),a&&l.a.createElement(g.a,{style:{height:"600px",width:"100%"},zoom:16,center:i,onClick:function(e){u([e.latlng.lat,e.latlng.lng]),console.log(i),k.a.post("/api/find_parking",{lat:e.latlng.lat,lon:e.latlng.lng}).then((function(e){console.log(e.data.locations),r(e.data.locations)}))}},l.a.createElement(b.a,{url:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(v.a,{radius:100,center:i,opacity:.5},l.a.createElement(f.a,null,l.a.createElement("span",null,"Current Search Area"))),a.map((function(e,t){return l.a.createElement(y.a,{position:[e.lat,e.lon]},l.a.createElement(f.a,null,"Bay: ",e.bay_id))}))))},x=function(){var e=Object(n.useState)([{bay_id:6589,lat:-37.81317468,lon:144.940706},{bay_id:5271,lat:-37.81181255,lon:144.9534953}]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([-37.81317468,144.940706]),o=Object(s.a)(c,2),i=o[0],u=o[1];return l.a.createElement("div",{style:{width:"100%",height:"100vh"}},l.a.createElement("h1",null," Click on a location to get started! "),a&&l.a.createElement(g.a,{style:{height:"600px",width:"100%"},zoom:16,center:i,onClick:function(e){u([e.latlng.lat,e.latlng.lng]),console.log(i),k.a.get("/api/find_parking").then((function(e){console.log(e.data.locations),r(e.data.locations)}))}},l.a.createElement(b.a,{url:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(v.a,{radius:100,center:i,opacity:.5},l.a.createElement(f.a,null,l.a.createElement("span",null,"Current Search Area"))),a.map((function(e,t){return l.a.createElement(y.a,{position:[e.lat,e.lon]},l.a.createElement(f.a,null,"Bay: ",e.bay_id))}))))};function w(e){var t=e.children,a=e.value,n=e.index,r=Object(p.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"tabpanel-".concat(n)},r),a===n&&l.a.createElement(h.a,{p:3},l.a.createElement(i.a,null,t)))}function S(){var e=l.a.useState(0),t=Object(s.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",null,l.a.createElement(c.a,{position:"static"},l.a.createElement(E.a,{value:a,onChange:function(e,t){n(t)}},l.a.createElement(d.a,{label:"Find"}),l.a.createElement(d.a,{label:"Forecast"}))),l.a.createElement(w,{value:a,index:0},"Map to mark nearby spots",l.a.createElement(O,null)),l.a.createElement(w,{value:a,index:1},"Map to mark parking density",l.a.createElement(x,null)))}function C(e){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(S,null),l.a.createElement(m,null))}var _=function(){return l.a.createElement("div",null,l.a.createElement(C,null))},z=document.getElementById("root");Object(r.render)(l.a.createElement(_,null),z)}},[[55,1,2]]]);
//# sourceMappingURL=main.96e26678.chunk.js.map