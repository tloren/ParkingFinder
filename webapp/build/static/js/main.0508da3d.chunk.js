(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{52:function(e,t,n){e.exports=n(78)},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),c=n(108),o=n(99),i=n(100),u=function(){return r.a.createElement(c.a,{position:"static"},r.a.createElement(o.a,null,r.a.createElement(i.a,{variant:"h3",color:"inherit"},"Parking Finder")))},s=function(){return r.a.createElement(i.a,{variant:"h6",color:"inherit"},"Developed by Group 2 for SIT737")},m=n(21),p=n(45),E=n(104),f=n(101),h=n(103),d=n(23),v=n.n(d),g=n(29),b=n(107),O=n(105),j=function(e){return console.log(e),r.a.createElement("div",{style:{width:"100%",height:"100vh"}},r.a.createElement(b.a,{center:[e.location.lat,e.location.lng],zoom:e.location.zoom,style:{width:"100%",height:"100%"}},r.a.createElement(O.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})))},y=n(25),w=n.n(y),x=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){console.log("fetching"),function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({url:"/api/test",method:"get"});case 2:t=e.sent,console.log(t),l(t.data.message);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,n),r.a.createElement(j,{location:{lat:-37.8136,lng:144.9631,zoom:14}}))},k=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){console.log("fetching"),function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({url:"/api/test",method:"get"});case 2:t=e.sent,console.log(t),l(t.data.message);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,n),r.a.createElement(j,{location:{lat:-37.8136,lng:144.9631,zoom:20}}))};function z(e){var t=e.children,n=e.value,a=e.index,l=Object(p.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==a,id:"tabpanel-".concat(a)},l),n===a&&r.a.createElement(h.a,{p:3},r.a.createElement(i.a,null,t)))}function S(){var e=r.a.useState(0),t=Object(m.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",null,r.a.createElement(c.a,{position:"static"},r.a.createElement(E.a,{value:n,onChange:function(e,t){a(t)}},r.a.createElement(f.a,{label:"Find"}),r.a.createElement(f.a,{label:"Forecast"}))),r.a.createElement(z,{value:n,index:0},"Map to mark nearby spots",r.a.createElement(x,null)),r.a.createElement(z,{value:n,index:1},"Map to mark parking density",r.a.createElement(k,null)))}function F(e){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(S,null),r.a.createElement(s,null))}var M=function(){return r.a.createElement("div",null,r.a.createElement(F,null))},I=document.getElementById("root");Object(l.render)(r.a.createElement(M,null),I)}},[[52,1,2]]]);
//# sourceMappingURL=main.0508da3d.chunk.js.map