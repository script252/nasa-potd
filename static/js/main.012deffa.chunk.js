(this["webpackJsonpnasa-potd"]=this["webpackJsonpnasa-potd"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(41),a(8)),i=a(35),u=(a(42),a(16)),s=a.n(u),m=a(29),d=a(10),p=a(30),b=a.n(p),f=a(31),v=a.n(f);a(75),a(76);var g=function(e){var t=e.title,a=e.hdurl,n=e.url,c=e.newTab,l=void 0===c||c;return r.a.createElement("div",{className:"image-preview"},r.a.createElement("a",{href:a,target:l?"_blank":""},r.a.createElement(b.a,{className:"image",src:n,alt:t,loader:r.a.createElement(v.a,{type:"RevolvingDot",color:"#00BFFF",height:100,width:100})})))};a(77);var h=function(e){var t=e.title,a=e.subTitle,n=e.text;return r.a.createElement("div",{className:"article-text"},r.a.createElement("h2",null,a),r.a.createElement("h1",null,t),r.a.createElement("p",null,n))},y=a(32),E=a.n(y);a(95);var D=function(e){var t=e.forwardCallback,a=e.backCallback,c=e.latestCallback,l=e.selectDateCallback,o=e.forwardVisible,i=void 0!==o&&o,u=e.date,s={display:"block"},m={display:"none"},p={defaultValue:u,value:u,minDate:new Date(1995,5,16),maxDate:new Date,onChange:l},b=Object(n.useState)(!1),f=Object(d.a)(b,2),v=f[0],g=f[1];return r.a.createElement("div",{className:"nav-controls"},r.a.createElement("button",{type:"button",className:"button-back",onClick:a},"Previous"),r.a.createElement("div",{style:i?s:m},r.a.createElement("button",{type:"button",className:"button-forward",onClick:t},"Next")),r.a.createElement("button",{type:"button",className:"button-latest",onClick:c},"Latest"),r.a.createElement("button",{type:"button",className:"button-calendar",onClick:function(){g(!v)}},"[]"),r.a.createElement("div",{style:v?s:m},r.a.createElement(E.a,p)))};var w=function(e){e.copyright;var t=e.articleText,a=e.hdImageUrl,n=e.title,c=e.imageUrl,l=e.subTitle,o=e.date,i=e.callbacks;return r.a.createElement("article",null,r.a.createElement(g,{title:n,hdurl:a,url:c}),r.a.createElement(h,{title:n,subTitle:l,text:t}),r.a.createElement(D,{forwardCallback:i.nextDay,backCallback:i.previousDay,latestCallback:i.latestDay,selectDateCallback:i.selectDate,forwardVisible:!i.isLatestDay(),date:o}))},k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var x=function(e){var t=k[e.getMonth()],a=e.getDate().toString(),n=e.getFullYear().toString();return"".concat(t," ").concat(a,", ").concat(n)};a(96);var C=function(e){var t=e.apiUrl,a=e.apiKey,c=e.date,l={isLatestDay:function(){return v.getDate()===(new Date).getDate()},previousDay:function(){var e=new Date(v.getFullYear(),v.getMonth(),v.getDate()-1);g(e)},nextDay:function(){var e=new Date(v.getFullYear(),v.getMonth(),v.getDate()+1);g(e)},latestDay:function(){var e=new Date;g(e)},selectDate:function(e){g(e)}},o=Object(n.useState)({}),i=Object(d.a)(o,2),u=i[0],p=i[1],b=Object(n.useState)(c),f=Object(d.a)(b,2),v=f[0],g=f[1];return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var n,r,c,l,o,i,u,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(n=v).getFullYear().toString().padStart(4,"0"),c=(n.getMonth()+1).toString().padStart(2,"0"),l=n.getDate().toString().padStart(2,"0"),o="".concat(r,"-").concat(c,"-").concat(l),i="".concat(t,"?api_key=").concat(a,"&date=").concat(o),e.next=8,fetch(i);case 8:return u=e.sent,e.next=11,u.json();case 11:m=e.sent,p(m);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[t,a,c,v]),r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{copyright:u.copyright,articleText:u.explanation,hdImageUrl:u.hdurl,imageUrl:u.url,title:u.title,subTitle:x(v),callbacks:l,date:v}))};function N(){var e=Object(o.f)(),t=e.year,a=e.month,n=e.day;return r.a.createElement(C,{apiUrl:"https://api.nasa.gov/planetary/apod",apiKey:"DEMO_KEY",date:function(){try{return t&&a&&n?new Date(t,parseInt(a)-1,n):new Date}catch(e){return new Date}}()})}var S=function(){return r.a.createElement(i.a,{basename:"/nasa-potd"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/:year?/:month?/:day?",render:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(N,null)))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},36:function(e,t,a){e.exports=a(100)},41:function(e,t,a){},42:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[36,1,2]]]);
//# sourceMappingURL=main.012deffa.chunk.js.map