(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n.n(c),s=n(17),i=n.n(s),l=n(10),o=n(2),j=(n(24),n(0)),d=function(){return Object(j.jsx)("div",{className:"app-header",children:Object(j.jsx)("h1",{children:"Task List"})})},u=n(8),h=n(13),b=n(4),p=n.n(b),O=["title","titleId"];function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function x(e,t){var n=e.title,a=e.titleId,s=v(e,O);return c.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",transform:"rotate(180 0 0)",ref:t,"aria-labelledby":a},s),n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"})))}var m,y=c.forwardRef(x),g=(n.p,["title","titleId"]);function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function N(e,t){var n=e.title,r=e.titleId,a=w(e,g);return c.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,m||(m=c.createElement("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"})))}var E,C=c.forwardRef(N),S=(n.p,function(e){return new Date(e.updated).toLocaleDateString()}),P=function(e){var t=e.title.split("\n")[0];return t.length>45?t.slice(0,45):t},T=function(e){return"1"===e.priority?"Urgent":"2"===e.priority?"Semi-urgent":"3"===e.priority?"Non-urgent":"4"===e.priority?"Stretch Goals":void 0},I=function(e){var t=P(e),n=e.body.replaceAll("\n"," ");return(n=n.replaceAll(t,"")).length>45?n.slice(0,45)+"...":n},D=function(){var e=Object(u.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/tasks/".concat(t.id,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){var t=e.task;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"tasks-list-item",children:Object(j.jsxs)(l.b,{to:"/task/".concat(t.id),children:[Object(j.jsx)("h1",{children:P(t)}),Object(j.jsx)("h3",{children:I(t)}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:T(t)}),S(t)]})]})}),Object(j.jsxs)("div",{className:"tasks-arrows",children:[Object(j.jsx)(y,{cursor:"pointer",onClick:function(){return function(e){var t=parseInt(e.category,10);t>1&&(e.category=t-1+"",D(e),window.location.reload(!1))}(t)}}),Object(j.jsx)(C,{cursor:"pointer",onClick:function(){return function(e){var t=parseInt(e.category,10);t<4&&(e.category=t+1+"",D(e),window.location.reload(!1))}(t)}})]})]})})},R=["title","titleId"];function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function U(e,t){var n=e.title,r=e.titleId,a=M(e,R);return c.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"add"):n?c.createElement("title",{id:r},n):null,E||(E=c.createElement("path",{d:"M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"})))}var z=c.forwardRef(U),L=(n.p,function(){return Object(j.jsx)(l.b,{to:"/task/new",className:"floating-button",children:Object(j.jsx)(z,{})})}),A=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){s()}),[]);var a=function(e,t){var n=0;return e.map((function(e,r){e.category===t&&n++})),n},s=function(){var e=Object(u.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tasks/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"tasks-list-all",children:[Object(j.jsxs)("div",{className:"tasks-column",children:[Object(j.jsxs)("div",{className:"tasks-header",children:[Object(j.jsx)("h2",{className:"tasks-title",children:"\u2636To do"}),Object(j.jsx)("p",{className:"tasks-count",children:a(n,"1")})]}),Object(j.jsx)("div",{className:"tasks-list",children:n.map((function(e,t){if("1"===e.category)return Object(j.jsx)("div",{className:"task-todo",children:Object(j.jsx)(J,{task:e},t)})}))})]}),Object(j.jsxs)("div",{className:"tasks-column",children:[Object(j.jsxs)("div",{className:"tasks-header",children:[Object(j.jsx)("h2",{className:"tasks-title",children:"\u2636 Ongoing"}),Object(j.jsx)("p",{className:"tasks-count",children:a(n,"2")})]}),Object(j.jsx)("div",{className:"tasks-list",children:n.map((function(e,t){if("2"===e.category)return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"task-ongoing",children:Object(j.jsx)(J,{task:e},t)})})}))})]}),Object(j.jsxs)("div",{className:"tasks-column",children:[Object(j.jsxs)("div",{className:"tasks-header",children:[Object(j.jsx)("h2",{className:"tasks-title",children:"\u2636 Completed"}),Object(j.jsx)("p",{className:"tasks-count",children:a(n,"3")})]}),Object(j.jsx)("div",{className:"tasks-list",children:n.map((function(e,t){if("3"===e.category)return Object(j.jsx)("div",{className:"task-completed",children:Object(j.jsx)(J,{task:e},t)})}))})]}),Object(j.jsxs)("div",{className:"tasks-column",children:[Object(j.jsxs)("div",{className:"tasks-header",children:[Object(j.jsx)("h2",{className:"tasks-title",children:"\u2636 Reviewed"}),Object(j.jsx)("p",{className:"tasks-count",children:a(n,"4")})]}),Object(j.jsx)("div",{className:"tasks-list",children:n.map((function(e,t){if("4"===e.category)return Object(j.jsx)("div",{className:"task-reviewed",children:Object(j.jsx)(J,{task:e},t)})}))}),Object(j.jsx)(L,{})]})]})},G=n(9),H=function(e){var t=e.match,n=e.history,r=t.params.id,a=Object(c.useState)({category:"1",priority:"1"}),s=Object(h.a)(a,2),i=s[0],l=s[1];Object(c.useEffect)((function(){o()}),[r]);var o=function(){var e=Object(u.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/tasks/".concat(r,"/"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,l(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/tasks/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/tasks/".concat(r,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/tasks/".concat(r,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"}}),n.push("/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){console.log("NOTE:",i),"new"===r||""!==i.body&&""!==i.title?"new"!==r?b():"new"===r&&""!==i.body&&""!==i.title&&d():O(),n.push("/")},v=function(e,t){"body"===t?l((function(t){return Object(G.a)(Object(G.a)({},t),{},{body:e})})):"title"===t?l((function(t){return Object(G.a)(Object(G.a)({},t),{},{title:e})})):"category"===t?l((function(t){return Object(G.a)(Object(G.a)({},t),{},{category:e})})):"priority"===t&&l((function(t){return Object(G.a)(Object(G.a)({},t),{},{priority:e})})),console.log("Handle Change:",i)};return Object(j.jsxs)("div",{className:"task",children:[Object(j.jsxs)("div",{className:"task-header",children:[Object(j.jsx)("h3",{children:Object(j.jsx)(y,{onClick:f})}),"new"!==r?Object(j.jsx)("button",{onClick:O,children:"Delete"}):Object(j.jsx)("button",{onClick:f,children:"Done"})]}),Object(j.jsxs)("div",{className:"task-detail",children:[Object(j.jsx)("h5",{children:"Title"}),Object(j.jsx)("textarea",{className:"task-textarea-title",onChange:function(e){v(e.target.value,"title")},value:null===i||void 0===i?void 0:i.title})]}),Object(j.jsxs)("div",{className:"task-detail",children:[Object(j.jsx)("h5",{children:"Content"}),Object(j.jsx)("textarea",{onChange:function(e){v(e.target.value,"body")},value:null===i||void 0===i?void 0:i.body})]}),Object(j.jsxs)("div",{className:"task-detail",children:[Object(j.jsx)("h5",{children:"Category"}),Object(j.jsxs)("select",{className:"task-droplist",onChange:function(e){v(e.target.value,"category")},value:null===i||void 0===i?void 0:i.category,children:[Object(j.jsx)("option",{value:"1",children:"To do"}),Object(j.jsx)("option",{value:"2",children:"Ongoing"}),Object(j.jsx)("option",{value:"3",children:"Completed"}),Object(j.jsx)("option",{value:"4",children:"Reviewed"})]})]}),Object(j.jsxs)("div",{className:"task-detail",children:[Object(j.jsx)("h5",{children:"Priority"}),Object(j.jsxs)("select",{className:"task-droplist",onChange:function(e){v(e.target.value,"priority")},value:null===i||void 0===i?void 0:i.priority,children:[Object(j.jsx)("option",{value:"1",children:"Urgent"}),Object(j.jsx)("option",{value:"2",children:"Semi-urgent"}),Object(j.jsx)("option",{value:"3",children:"Non-urgent"}),Object(j.jsx)("option",{value:"4",children:"Stretch Goal"})]})]}),Object(j.jsx)("div",{className:"task-detail",children:Object(j.jsx)("h1",{children:"Ownership"})}),Object(j.jsx)("div",{className:"task-detail",children:Object(j.jsx)("h5",{children:"Deadline"})})]})};var q=function(){return Object(j.jsx)(l.a,{children:Object(j.jsx)("div",{className:"container dark",children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:A}),Object(j.jsx)(o.a,{path:"/task/:id",component:H})]})})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.3bc111a0.chunk.js.map