(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c,a=n(1),s=n.n(a),r=n(17),i=n.n(r),l=n(9),o=n(2),j=(n(24),n(0)),d=function(){return Object(j.jsx)("div",{className:"app-header",children:Object(j.jsx)("h1",{children:"Task List"})})},u=n(10),h=n(13),b=n(7),O=n.n(b),p=function(e){return new Date(e.updated).toLocaleDateString()},v=function(e){var t=e.title.split("\n")[0];return t.length>45?t.slice(0,45):t},f=function(e){var t=e.body.split("\n")[0];return t.length>45?t.slice(0,45):t},x=function(e){return"1"===e.priority?"Urgent":"2"===e.priority?"Semi-urgent":"3"===e.priority?"Non-urgent":"4"===e.priority?"Stretch Goals":void 0},m=function(e){var t=v(e),n=e.body.replaceAll("\n"," ");return(n=n.replaceAll(t,"")).length>45?n.slice(0,45)+"...":n},g=function(e){var t=e.task;return Object(j.jsx)(l.b,{to:"/task/".concat(t.id),children:Object(j.jsxs)("div",{className:"tasks-list-item",children:[Object(j.jsx)("h3",{children:v(t)}),Object(j.jsx)("h3",{children:f(t)}),Object(j.jsx)("h3",{children:x(t)}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:p(t)}),m(t)]})]})})},k=["title","titleId"];function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},y.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function w(e,t){var n=e.title,s=e.titleId,r=N(e,k);return a.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":s},r),void 0===n?a.createElement("title",{id:s},"add"):n?a.createElement("title",{id:s},n):null,c||(c=a.createElement("path",{d:"M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"})))}var C,E=a.forwardRef(w),S=(n.p,function(){return Object(j.jsx)(l.b,{to:"/task/new",className:"floating-button",children:Object(j.jsx)(E,{})})}),T=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){var e=Object(u.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tasks/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"tasks-list-all",children:[Object(j.jsxs)("div",{className:"tasks-column",children:[Object(j.jsxs)("div",{className:"tasks-header",children:[Object(j.jsx)("h2",{className:"tasks-title",children:"\u2636To do"}),Object(j.jsx)("p",{className:"tasks-count",children:n.length})]}),Object(j.jsx)("div",{className:"tasks-list",children:n.map((function(e,t){if("To-do"===e.category)return Object(j.jsx)("div",{className:"task-todo",children:Object(j.jsx)(g,{task:e},t)})}))})]}),Object(j.jsxs)("div",{className:"tasks-column",children:[Object(j.jsxs)("div",{className:"tasks-header",children:[Object(j.jsx)("h2",{className:"tasks-title",children:"\u2636 Ongoing"}),Object(j.jsx)("p",{className:"tasks-count",children:n.length})]}),Object(j.jsx)("div",{className:"tasks-list",children:n.map((function(e,t){if("Ongoing"===e.category)return Object(j.jsx)("div",{className:"task-ongoing",children:Object(j.jsx)(g,{task:e},t)})}))})]}),Object(j.jsxs)("div",{className:"tasks-column",children:[Object(j.jsxs)("div",{className:"tasks-header",children:[Object(j.jsx)("h2",{className:"tasks-title",children:"\u2636 Completed"}),Object(j.jsx)("p",{className:"tasks-count",children:n.length})]}),Object(j.jsx)("div",{className:"tasks-list",children:n.map((function(e,t){if("Completed"===e.category)return Object(j.jsx)("div",{className:"task-completed",children:Object(j.jsx)(g,{task:e},t)})}))})]}),Object(j.jsxs)("div",{className:"tasks-column",children:[Object(j.jsxs)("div",{className:"tasks-header",children:[Object(j.jsx)("h2",{className:"tasks-title",children:"\u2636 Reviewed"}),Object(j.jsx)("p",{className:"tasks-count",children:n.length})]}),Object(j.jsx)("div",{className:"tasks-list",children:n.map((function(e,t){if("Reviewed"===e.category)return Object(j.jsx)("div",{className:"task-reviewed",children:Object(j.jsx)(g,{task:e},t)})}))}),Object(j.jsx)(S,{})]})]})},P=n(8),I=["title","titleId"];function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},D.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function J(e,t){var n=e.title,c=e.titleId,s=R(e,I);return a.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":c},s),void 0===n?a.createElement("title",{id:c},"chevron-left"):n?a.createElement("title",{id:c},n):null,C||(C=a.createElement("path",{d:"M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"})))}var B=a.forwardRef(J),L=(n.p,function(e){var t=e.match,n=e.history,c=t.params.id,s=Object(a.useState)({category:"To-do",priority:"1"}),r=Object(h.a)(s,2),i=r[0],l=r[1];Object(a.useEffect)((function(){o()}),[c]);var o=function(){var e=Object(u.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/tasks/".concat(c,"/"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,l(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/tasks/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/tasks/".concat(c,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/tasks/".concat(c,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"}}),n.push("/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){console.log("NOTE:",i),"new"===c||""!==i.body&&""!==i.title?"new"!==c?b():"new"===c&&""!==i.body&&""!==i.title&&d():p(),n.push("/")},f=function(e,t){"body"===t?l((function(t){return Object(P.a)(Object(P.a)({},t),{},{body:e})})):"title"===t?l((function(t){return Object(P.a)(Object(P.a)({},t),{},{title:e})})):"category"===t?l((function(t){return Object(P.a)(Object(P.a)({},t),{},{category:e})})):"priority"===t&&l((function(t){return Object(P.a)(Object(P.a)({},t),{},{priority:e})})),console.log("Handle Change:",i)};return Object(j.jsxs)("div",{className:"task",children:[Object(j.jsxs)("div",{className:"task-header",children:[Object(j.jsx)("h3",{children:Object(j.jsx)(B,{onClick:v})}),"new"!==c?Object(j.jsx)("button",{onClick:p,children:"Delete"}):Object(j.jsx)("button",{onClick:v,children:"Done"})]}),Object(j.jsxs)("div",{className:"task-detail",children:[Object(j.jsx)("h1",{children:"Title"}),Object(j.jsx)("textarea",{className:"task-textarea-title",onChange:function(e){f(e.target.value,"title")},value:null===i||void 0===i?void 0:i.title})]}),Object(j.jsxs)("div",{className:"task-detail",children:[Object(j.jsx)("h1",{children:"Content"}),Object(j.jsx)("textarea",{onChange:function(e){f(e.target.value,"body")},value:null===i||void 0===i?void 0:i.body})]}),Object(j.jsxs)("div",{className:"task-detail",children:[Object(j.jsx)("h1",{children:"Category"}),Object(j.jsxs)("select",{className:"task-droplist",onChange:function(e){f(e.target.value,"category")},value:null===i||void 0===i?void 0:i.category,children:[Object(j.jsx)("option",{value:"To-do",children:"To do"}),Object(j.jsx)("option",{value:"Ongoing",children:"Ongoing"}),Object(j.jsx)("option",{value:"Completed",children:"Completed"}),Object(j.jsx)("option",{value:"Reviewed",children:"Reviewed"})]})]}),Object(j.jsxs)("div",{className:"task-detail",children:[Object(j.jsx)("h1",{children:"Priority"}),Object(j.jsxs)("select",{className:"task-droplist",onChange:function(e){f(e.target.value,"priority")},value:null===i||void 0===i?void 0:i.priority,children:[Object(j.jsx)("option",{value:"1",children:"Urgent"}),Object(j.jsx)("option",{value:"2",children:"Semi-urgent"}),Object(j.jsx)("option",{value:"3",children:"Non-urgent"}),Object(j.jsx)("option",{value:"4",children:"Stretch Goal"})]})]}),Object(j.jsx)("div",{className:"task-detail",children:Object(j.jsx)("h1",{children:"Ownership"})}),Object(j.jsx)("div",{className:"task-detail",children:Object(j.jsx)("h1",{children:"Deadline"})})]})});var M=function(){return Object(j.jsx)(l.a,{children:Object(j.jsx)("div",{className:"container dark",children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:T}),Object(j.jsx)(o.a,{path:"/task/:id",component:L})]})})})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ef513097.chunk.js.map