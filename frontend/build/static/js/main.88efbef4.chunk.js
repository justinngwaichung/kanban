(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n.n(r),s=n(18),i=n.n(s),o=n(12),l=n(5),j=n(3),u=(n(25),n(0)),d=function(){return Object(u.jsx)("div",{className:"app-header",children:Object(u.jsx)("h1",{children:"MCIT Task Manager"})})},p=n(6),h=n(11),b=n(2),f=n.n(b),O=["title","titleId"];function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},v.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){var n=e.title,a=e.titleId,s=x(e,O);return r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",transform:"rotate(180 0 0)",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,c||(c=r.createElement("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"})))}var k,y=r.forwardRef(m),g=(n.p,["title","titleId"]);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},w.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function C(e,t){var n=e.title,c=e.titleId,a=N(e,g);return r.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,k||(k=r.createElement("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"})))}var E,S=r.forwardRef(C),T=(n.p,function(e){return new Date(e.updated).toLocaleDateString()}),I=function(e){var t=e.title.split("\n")[0];return t.length>45?t.slice(0,45):t},P=function(e){var t=e.body.split("\n")[0];return t.length>100?t.slice(0,100)+"...":t},D=function(e){return"1"===e.priority?"Urgent":"2"===e.priority?"Semi-urgent":"3"===e.priority?"Non-urgent":"4"===e.priority?"Stretch Goals":void 0},J=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/tasks/".concat(t.id,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=e.task,n=e.match,c=Object(j.e)(),r=parseInt(n.url.match(/\d+/)[0]);return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"tasks-list-item",children:Object(u.jsxs)(l.b,{to:"tasks/".concat(t.id),children:[Object(u.jsx)("h1",{children:I(t)}),Object(u.jsx)("h3",{children:P(t)}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:D(t)}),T(t)]})]})}),Object(u.jsxs)("div",{className:"tasks-arrows",children:[Object(u.jsx)(y,{cursor:"pointer",onClick:function(){return function(e,t,n){var c=parseInt(e.category,10);c>1&&(e.category=c-1+"",J(e),t.push("/".concat(n,"/tasks")))}(t,c,r)}}),Object(u.jsx)(S,{cursor:"pointer",onClick:function(){return function(e,t,n){var c=parseInt(e.category,10);c<4&&(e.category=c+1+"",J(e),t.push("/".concat(n,"/tasks")))}(t,c,r)}})]})]})})},B=["title","titleId"];function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},R.apply(this,arguments)}function U(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function L(e,t){var n=e.title,c=e.titleId,a=U(e,B);return r.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":c},a),void 0===n?r.createElement("title",{id:c},"add"):n?r.createElement("title",{id:c},n):null,E||(E=r.createElement("path",{d:"M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"})))}var z=r.forwardRef(L),G=(n.p,function(){return Object(u.jsx)(l.b,{to:"tasks/new",className:"floating-button",children:Object(u.jsx)(z,{})})}),V=function(e){var t=e.match,n=Object(j.e)(),c=parseInt(t.url.match(/\d+/)[0]),a=Object(r.useState)([]),s=Object(h.a)(a,2),i=s[0],o=s[1],l=Object(r.useState)([]),d=Object(h.a)(l,2),b=d[0],O=d[1];Object(r.useEffect)((function(){x()}),[]),Object(r.useEffect)((function(){m()}),[]);var v=function(e,t,n){var c=0;return e.map((function(e,r){e.category===t&&n===e.project&&c++})),c},x=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tasks/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/projects/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k="";return b.map((function(e){e.id===c&&(k=e.project,console.log(e.project))})),Object(u.jsxs)("div",{children:[Object(u.jsx)("select",{defaultValue:k,onChange:function(e){var t;t=e.target.value,n.push("/".concat(t,"/tasks"))},children:b.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.project})}))}),Object(u.jsx)("div",{className:"task-header",children:Object(u.jsx)(y,{onClick:function(){return n.push("/")}})}),Object(u.jsxs)("div",{className:"tasks-list-all",children:[Object(u.jsxs)("div",{className:"tasks-column",children:[Object(u.jsxs)("div",{className:"tasks-header",children:[Object(u.jsx)("h2",{className:"tasks-title",children:"\u2636To do"}),Object(u.jsx)("p",{className:"tasks-count",children:v(i,"1",c)})]}),Object(u.jsx)("div",{className:"tasks-list",children:i.map((function(e,n){if("1"===e.category&&c===e.project)return Object(u.jsx)("div",{className:"task-todo",children:Object(u.jsx)(M,{task:e,match:t},n)})}))})]}),Object(u.jsxs)("div",{className:"tasks-column",children:[Object(u.jsxs)("div",{className:"tasks-header",children:[Object(u.jsx)("h2",{className:"tasks-title",children:"\u2636 Ongoing"}),Object(u.jsx)("p",{className:"tasks-count",children:v(i,"2",c)})]}),Object(u.jsx)("div",{className:"tasks-list",children:i.map((function(e,n){if("2"===e.category&&c===e.project)return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"task-ongoing",children:Object(u.jsx)(M,{task:e,match:t},n)})})}))})]}),Object(u.jsxs)("div",{className:"tasks-column",children:[Object(u.jsxs)("div",{className:"tasks-header",children:[Object(u.jsx)("h2",{className:"tasks-title",children:"\u2636 Completed"}),Object(u.jsx)("p",{className:"tasks-count",children:v(i,"3",c)})]}),Object(u.jsx)("div",{className:"tasks-list",children:i.map((function(e,n){if("3"===e.category&&c===e.project)return Object(u.jsx)("div",{className:"task-completed",children:Object(u.jsx)(M,{task:e,match:t},n)})}))})]}),Object(u.jsxs)("div",{className:"tasks-column",children:[Object(u.jsxs)("div",{className:"tasks-header",children:[Object(u.jsx)("h2",{className:"tasks-title",children:"\u2636 Reviewed"}),Object(u.jsx)("p",{className:"tasks-count",children:v(i,"4",c)})]}),Object(u.jsx)("div",{className:"tasks-list",children:i.map((function(e,n){if("4"===e.category&&c===e.project)return Object(u.jsx)("div",{className:"task-reviewed",children:Object(u.jsx)(M,{task:e,match:t},n)})}))}),Object(u.jsx)(G,{})]})]})]})},A=function(e){return new Date(e.updated).toLocaleDateString()},_=function(e){var t=e.project.split("\n")[0];return t.length>45?t.slice(0,45):t},q=function(e){var t=e.description.split("\n")[0];return t.length>170?t.slice(0,170)+"...":t},F=function(e){var t=e.project;return Object(u.jsxs)("div",{className:"project-list-item",children:[Object(u.jsxs)(l.b,{to:"/".concat(t.id,"/tasks"),children:[Object(u.jsx)("h1",{children:_(t)}),Object(u.jsx)("h3",{children:q(t)}),Object(u.jsx)("p",{children:A(t)})]}),Object(u.jsx)(l.b,{to:"".concat(t.id,"/"),children:"Make edit"})]})},H=function(){return Object(u.jsx)(l.b,{to:"/new",className:"floating-button",children:Object(u.jsx)(z,{})})},K=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/projects/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"tasks-header",children:Object(u.jsx)("h2",{className:"tasks-title",children:"\u2636All projects"})}),Object(u.jsx)("div",{className:"projects-column"}),Object(u.jsx)("div",{className:"tasks-list",children:n.map((function(e,t){return Object(u.jsx)(F,{project:e},t)}))}),Object(u.jsx)(H,{})]})},Q=n(7),W=function(e){var t=e.match,n=(e.history,Object(j.e)()),c=parseInt(t.url.match(/\d+/)[0]),a=t.params.id,s=Object(r.useState)({project_id:c,category:"1",priority:"1"}),i=Object(h.a)(s,2),o=i[0],l=i[1];Object(r.useEffect)((function(){d()}),[a]);var d=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/tasks/".concat(a,"/"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,l(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/tasks/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/tasks/".concat(a,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/tasks/".concat(a,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"}}),n.goBack();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){console.log("NOTE:",o),"new"===a||""!==o.body&&""!==o.title?"new"!==a?O():"new"===a&&""!==o.body&&""!==o.title&&b():v(),n.goBack()},m=function(e,t){"body"===t?l((function(t){return Object(Q.a)(Object(Q.a)({},t),{},{body:e})})):"title"===t?l((function(t){return Object(Q.a)(Object(Q.a)({},t),{},{title:e})})):"category"===t?l((function(t){return Object(Q.a)(Object(Q.a)({},t),{},{category:e})})):"priority"===t&&l((function(t){return Object(Q.a)(Object(Q.a)({},t),{},{priority:e})}))};return Object(u.jsxs)("div",{className:"task",children:[Object(u.jsxs)("div",{className:"task-header",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(y,{onClick:x})}),"new"!==a?Object(u.jsx)("button",{onClick:v,children:"Delete"}):Object(u.jsx)("button",{onClick:x,children:"Done"})]}),Object(u.jsxs)("div",{className:"task-detail",children:[Object(u.jsx)("h5",{children:"Title"}),Object(u.jsx)("textarea",{className:"task-textarea-title",onChange:function(e){m(e.target.value,"title")},value:null===o||void 0===o?void 0:o.title})]}),Object(u.jsxs)("div",{className:"task-detail",children:[Object(u.jsx)("h5",{children:"Content"}),Object(u.jsx)("textarea",{onChange:function(e){m(e.target.value,"body")},value:null===o||void 0===o?void 0:o.body})]}),Object(u.jsxs)("div",{className:"task-detail",children:[Object(u.jsx)("h5",{children:"Category"}),Object(u.jsxs)("select",{className:"task-droplist",onChange:function(e){m(e.target.value,"category")},value:null===o||void 0===o?void 0:o.category,children:[Object(u.jsx)("option",{value:"1",children:"To do"}),Object(u.jsx)("option",{value:"2",children:"Ongoing"}),Object(u.jsx)("option",{value:"3",children:"Completed"}),Object(u.jsx)("option",{value:"4",children:"Reviewed"})]})]}),Object(u.jsxs)("div",{className:"task-detail",children:[Object(u.jsx)("h5",{children:"Priority"}),Object(u.jsxs)("select",{className:"task-droplist",onChange:function(e){m(e.target.value,"priority")},value:null===o||void 0===o?void 0:o.priority,children:[Object(u.jsx)("option",{value:"1",children:"Urgent"}),Object(u.jsx)("option",{value:"2",children:"Semi-urgent"}),Object(u.jsx)("option",{value:"3",children:"Non-urgent"}),Object(u.jsx)("option",{value:"4",children:"Stretch Goal"})]})]})]})},X=function(e){var t=e.match,n=e.history,c=t.params.id;console.log(c);var a=Object(r.useState)({project:"",description:""}),s=Object(h.a)(a,2),i=s[0],o=s[1];Object(r.useEffect)((function(){l()}),[c]);var l=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/projects/".concat(c,"/"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,o(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/projects/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/projects/".concat(c,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/projects/".concat(c,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"}}),n.push("/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){console.log("NOTE:",i),"new"===c||""!==i.description&&""!==i.project?"new"!==c?d():"new"===c&&""!==i.description&&""!==i.project&&j():b(),n.push("/")},v=function(e,t){"project"===t?o((function(t){return Object(Q.a)(Object(Q.a)({},t),{},{project:e})})):"description"===t&&o((function(t){return Object(Q.a)(Object(Q.a)({},t),{},{description:e})}))};return Object(u.jsxs)("div",{className:"task",children:[Object(u.jsxs)("div",{className:"task-header",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(y,{onClick:O})}),"new"!==c?Object(u.jsx)("button",{onClick:b,children:"Delete"}):Object(u.jsx)("button",{onClick:O,children:"Done"})]}),Object(u.jsxs)("div",{className:"task-detail",children:[Object(u.jsx)("h5",{children:"Project Name"}),Object(u.jsx)("textarea",{defaultValue:"",className:"task-textarea-title",onChange:function(e){v(e.target.value,"project")},value:null===i||void 0===i?void 0:i.project})]}),Object(u.jsxs)("div",{className:"task-detail",children:[Object(u.jsx)("h5",{children:"Description"}),Object(u.jsx)("textarea",{onChange:function(e){v(e.target.value,"description")},value:null===i||void 0===i?void 0:i.description})]})]})};var Y=function(){var e,t,n;return Object(u.jsx)(l.a,{children:Object(u.jsx)("div",{className:"container dark",children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(d,{}),Object(u.jsx)(j.a,(e={exact:!0,path:"/"},Object(o.a)(e,"exact",!0),Object(o.a)(e,"component",K),e)),Object(u.jsx)(j.a,(t={exact:!0,path:"/:id/tasks"},Object(o.a)(t,"exact",!0),Object(o.a)(t,"component",V),t)),Object(u.jsx)(j.a,(n={exact:!0,path:"/:id/tasks/:id"},Object(o.a)(n,"exact",!0),Object(o.a)(n,"component",W),n)),Object(u.jsx)(j.a,{exact:!0,path:"/:id/",component:X})]})})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(Y,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.88efbef4.chunk.js.map