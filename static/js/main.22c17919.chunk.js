(this["webpackJsonpnasa-potd"]=this["webpackJsonpnasa-potd"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(41),a(33)),i=a(8),u=(a(42),a(16)),s=a.n(u),m=a(29),p=a(10),d=a(30),b=a.n(d),g=a(31),f=a.n(g);a(75),a(76);var v=function(e){var t=e.title,a=e.hdurl,n=e.url,c=e.newTab,l=void 0===c||c;return r.a.createElement("div",{className:"image-preview"},r.a.createElement("a",{href:a,target:l?"_blank":""},r.a.createElement(b.a,{className:"image",src:n,alt:t,loader:r.a.createElement(f.a,{type:"RevolvingDot",color:"#00BFFF",height:100,width:100})})))};a(77);var h=function(e){var t=e.title,a=e.subTitle,n=e.text;return r.a.createElement("div",{className:"article-text"},r.a.createElement("h2",null,a),r.a.createElement("h1",null,t),r.a.createElement("p",null,n))};var E=function(e){e.copyright;var t=e.articleText,a=e.hdImageUrl,n=e.title,c=e.imageUrl,l=e.subTitle;return r.a.createElement("article",null,r.a.createElement(v,{title:n,hdurl:a,url:c}),r.a.createElement(h,{title:n,subTitle:l,text:t}))},w=a(32),k=a.n(w);a(95);var y=function(e){var t=e.forwardCallback,a=e.backCallback,c=e.latestCallback,l=e.selectDateCallback,o=e.forwardVisible,i=void 0!==o&&o,u=e.date,s={display:"block"},m={display:"none"},d={defaultValue:u,value:u,minDate:new Date(1995,5,16),maxDate:new Date,onChange:l},b=Object(n.useState)(!1),g=Object(p.a)(b,2),f=g[0],v=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"button-back",onClick:a},"Previous"),r.a.createElement("div",{style:i?s:m},r.a.createElement("button",{type:"button",className:"button-forward",onClick:t},"Next")),r.a.createElement("button",{type:"button",className:"button-latest",onClick:c},"Latest"),r.a.createElement("button",{type:"button",className:"button-calendar",onClick:function(){v(!f)}},"[]"),r.a.createElement("div",{style:f?s:m},r.a.createElement(k.a,d)))},D=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var x=function(e){var t=D[e.getMonth()],a=e.getDate().toString(),n=e.getFullYear().toString();return"".concat(t," ").concat(a,", ").concat(n)};a(96);var C=function(e){var t=e.apiUrl,a=e.apiKey,c=e.date,l=Object(n.useState)({}),o=Object(p.a)(l,2),i=o[0],u=o[1],d=Object(n.useState)(c),b=Object(p.a)(d,2),g=b[0],f=b[1];return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var n,r,c,l,o,i,m,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(n=g).getFullYear().toString().padStart(4,"0"),c=(n.getMonth()+1).toString().padStart(2,"0"),l=n.getDate().toString().padStart(2,"0"),o="".concat(r,"-").concat(c,"-").concat(l),i="".concat(t,"?api_key=").concat(a,"&date=").concat(o),e.next=8,fetch(i);case 8:return m=e.sent,e.next=11,m.json();case 11:p=e.sent,u(p);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,a,c,g]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{copyright:i.copyright,articleText:i.explanation,hdImageUrl:i.hdurl,imageUrl:i.url,title:i.title,subTitle:x(g)}),r.a.createElement(y,{forwardCallback:function(){var e=new Date(g.getFullYear(),g.getMonth(),g.getDate()+1);f(e)},backCallback:function(){var e=new Date(g.getFullYear(),g.getMonth(),g.getDate()-1);f(e)},latestCallback:function(){var e=new Date;f(e)},selectDateCallback:function(e){f(e)},forwardVisible:!(g.getDate()===(new Date).getDate()),date:g}))},S="https://api.nasa.gov/planetary/apod",N="DEMO_KEY",F=new Date;var O=function(){return r.a.createElement(o.a,{basename:"/nasa-potd"},r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(C,{apiUrl:S,apiKey:N,date:F})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},36:function(e,t,a){e.exports=a(100)},41:function(e,t,a){},42:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[36,1,2]]]);
//# sourceMappingURL=main.22c17919.chunk.js.map