(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,n,e){"use strict";(function(r){e.d(n,"a",function(){return t});var t={limits:[30,40,50,60,70,80,90,100],data:{},state:{url:"",route:"",scrollPos:1,limit:30,profile:""},reqs:{urls:["/posts","/comments","/albums","/photos","/todos","/users"].reduce(function(t,n){var e;return t[n]=(e=n,function(t,n){return"https://jsonplaceholder.typicode.com".concat(e,"?_start=").concat(t,"&_limit=").concat(n)}),t},{}),http:function(e){return function(n){return function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return r.request({url:e,method:n,data:t})}}}},showModes:!1,showLimits:!1,showTabs:function(t){t.tabsShowing=!t.tabsShowing},tabsShowing:!1}}).call(this,e(0))},,,function(t,n,e){"use strict";(function(e){n.a=function(){return{view:function(t){var n=t.attrs.children;return e("section.content",{id:"content"},n)}}}}).call(this,e(0))},function(t,n,e){"use strict";(function(r){n.a=function(){return{oncreate:function(t){var n=t.dom,e=t.children;n.style.opacity=1,e.map(function(t){t.dom.children.style.opacity=1}),r.render(n,e)},view:function(t){return t.children}}}}).call(this,e(0))},,,,function(t,n){},function(t,n){},function(t,n){},function(t,n,e){"use strict";e.r(n);var r=e(0),s=e.n(r),o=e(1);e(3);function i(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=function(t){var n=i(t.dom.children),e={0:"-90%",1:"-90%",2:"90%",3:"90%"};return n.map(function(t,n){setTimeout(function(){t.animate([{transform:"translate3d(".concat(e[n],",0,0)"),opacity:0},{transform:"none",opacity:1}],{fill:"forwards",duration:850})},200*(n+1))})},u=function(t){return i(t.dom.children).map(function(t,n){if(t)return setTimeout(function(){t.animate([{transform:"translate3d(0,-180%,0)",opacity:0},{transform:"none",opacity:1}],{fill:"forwards",duration:250})},200*(n+1))})},c=function(t){var n=t.attrs.model,e="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",r="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",o=function(t){return s.a.render(t,s()("path",{xmlns:"http://www.w3.org/2000/svg",d:n.tabsShowing?e:r}))};return{oncreate:function(t){var n=t.dom;return o(n)},onupdate:function(t){var n=t.dom;return o(n)},view:function(t){var n=t.attrs.model;return s()("svg.hamburger",{onclick:function(){n.showTabs(n)}})}}},l={view:function(t){var e=t.attrs.model;return s()(".limits",{oncreate:u},e.limits.map(function(t,n){return s()("button.btn.limit",{onclick:function(){e.state.limit=t,e.showLimits=!1},key:n},t)}))}},d=function(){return{view:function(t){var n=t.attrs.model;return s()(".changeLimits",[s()("button.changeLimitBtn",{onclick:function(){n.showLimits=!n.showLimits}},"Change Limit"),n.showLimits&&s()(l,{model:n})])}}},m=function(){return{view:function(t){var n=t.attrs.model;return s()("header.header",{id:"header"},[["desktop","tablet"].includes(n.state.profile)||n.tabsShowing?["phone"==n.state.profile?s()(c,{model:n}):null]:[s()(c,{model:n})],s()(d,{model:n})])}}},f=function(){return{view:function(){return s()("footer.footer",{id:"footer"},"Footer")}}},h=e(4),p=function(t){var e=t.attrs.key,n={onhover:!1},r=function(){n.onhover=!n.onhover};return{view:function(t){var n=t.attrs.tab;return s()("a.tab",{key:e,id:"".concat(n),href:"".concat(n),oncreate:s.a.route.link,onmouseover:r,onmouseout:r},n.split("/")[1])}}},v=function(t){var n=t.attrs.model,r=Object.keys(n.reqs.urls);return{view:function(t){var e=t.attrs.model;return s()("aside.sidebar slide-left",{id:"sidebar"},r.map(function(t,n){return s()(p,{key:n,active:e.state.route==t,tab:t})}))}}},w=e(5),b=function(t){var e=t.attrs.model;return{oncreate:a,view:function(t){var n=t.children;return s()("section.layout",{id:"layout"},n?[s()(m,{model:e}),"phone"==e.state.profile?e.tabsShowing?s()(w.a,s()(v,{model:e})):"":s()(v,{model:e}),s()(h.a,{model:e,children:n}),s()(f,{model:e})]:[])}}},y=function(i){return function(t){i.state.route=t,i.data[t]?i.data[t]:i.data[t]={data:[],limit:1};var n,e,r,o=i.data[t].data.length;e=(r=i).reqs.urls[t](o,i.state.limit),n=t,s.a.request({url:e,method:"GET",extract:function(t){return r.data[n].limit=parseInt(t.getResponseHeader("x-total-count")),JSON.parse(t.responseText)}}).then(function(t){return r.data[n].data=r.data[n].data.concat(t),r})}},g=function(n){return function(t){return n.state.scrollPos=1,n.tabsShowing=!1,y(n)(t)}},k=s()(".holder",{style:{width:"100%",height:"100%"}},[s()(".preloader",[s()("div"),s()("div"),s()("div"),s()("div"),s()("div"),s()("div"),s()("div")])]),L=function(){return{view:function(t){var n=t.attrs,e=n.key,r=n.item,o=r.title,i=r.body;return s()(".grid-item.post",{id:"post-".concat(e)},[s()("h1",o),s()("p",i)])}}},x=function(){return{view:function(t){var n=t.attrs,e=n.key,r=n.item,o=r.email,i=r.name,a=r.body;return s()(".grid-item.comment",{id:"comment-".concat(e)},[s()("h1",i),s()("p",o),s()("p",a)])}}},S=function(){return{view:function(t){var n=t.attrs,e=n.key,r=n.item.title;return s()(".grid-item.album",{id:"album-".concat(e)},[s()("h1",r)])}}},T=function(){return{view:function(t){var n=t.attrs,e=n.key,r=n.item,o=r.title,i=r.thumbnailUrl;return s()(".grid-item.photo",{id:"photo-".concat(e)},[s()("h1",{style:{padding:"4px",right:"auto",flex:3}},o),s()("img",{style:{left:"auto",flex:"1 150px"},src:i})])}}},q=function(t){var o=t.attrs.item.completed;return{view:function(t){var n=t.attrs,e=n.key,r=n.item.title;return s()(".grid-item.todo",{id:"todo-".concat(e),key:e},[s()("input[type=checkbox].fancyCheckBox",{onclick:function(){o=!o},checked:o},"Done"),s()("h1",r)])}}},A=function(){return{view:function(t){var n=t.attrs,e=n.key,r=n.item,o=r.email,i=r.name,a=r.phone,u=r.username,c=r.website;return s()(".grid-item.user",{id:"user-".concat(e),key:e},[s()(".",[s()("label.left",{for:"name"},"name"),s()("p.right",{name:"name"},i)]),s()(".",[s()("label.left",{for:"email"},"email"),s()("p.right",{name:"email"},o)]),s()(".",[s()("label.left",{for:"phone"},"phone"),s()("p.right",{name:"phone"},a)]),s()(".",[s()("label.left",{for:"username"},"username"),s()("p.right",{name:"username"},u)]),s()(".",[s()("label.left",{for:"website"},"website"),s()("p.right",{name:"website"},c)])])}}},j=function(){return{view:function(t){var o,r=t.attrs.model,n=r.state.route,i=function(t){switch(t){case"/posts":return L;case"/comments":return x;case"/albums":return S;case"/photos":return T;case"/todos":return q;case"/users":return A}}(n),e=r.data[n].data;return s()("section.component",{id:"component",route:r.state.route,onscroll:(o=r,function(t){var n=o.state.route,e=o.data[n].data.length,r=10*e*o.state.scrollPos;t.target.scrollTop-o.state.scrollPos>=r&&(o.state.scrollPos++,t.target.scrollTop,e<o.data[n].limit&&y(o)(n))})},0==e.length?s()(".loader",k):e.map(function(t,n){return s()(i,{oncreate:(e=n,function(t){return t.dom.animate([{transform:"translateY(-10px)",opacity:0},{transform:"translateY(0)",opacity:1}],{duration:100*(e+1)})}),key:n,item:t,model:r});var e}))}}},P=(e(9),e(10),e(11),document.body);function z(t){return t<668?"phone":t<920?"tablet":"desktop"}var H,O=window.innerWidth;o.a.state.profile=z(O),function t(){var n=window.innerWidth;if(O!==n){O=n;var e=o.a.state.profile;o.a.state.profile=z(n),e!=o.a.state.profile&&s.a.redraw()}requestAnimationFrame(t)}(),s.a.route(P,"/posts",(H=o.a,{"/posts":{onmatch:function(t,n){return g(H)(n)},render:function(){return s()(b,{model:H},s()(j,{model:H}))}},"/comments":{onmatch:function(t,n){return g(H)(n)},render:function(){return s()(b,{model:H},s()(j,{model:H}))}},"/albums":{onmatch:function(t,n){return g(H)(n)},render:function(){return s()(b,{model:H},s()(j,{model:H}))}},"/photos":{onmatch:function(t,n){return g(H)(n)},render:function(){return s()(b,{model:H},s()(j,{model:H}))}},"/todos":{onmatch:function(t,n){return g(H)(n)},render:function(){return s()(b,{model:H},s()(j,{model:H}))}},"/users":{onmatch:function(t,n){return g(H)(n)},render:function(){return s()(b,{model:H},s()(j,{model:H}))}}}))}],[[12,1,2]]]);
//# sourceMappingURL=main-chunk.js.map