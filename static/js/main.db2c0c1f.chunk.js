(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{48:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(16),c=n.n(s),i=(n(22),n(17)),l=n(3),o=n(0);function u(e){return Object(o.jsx)("div",{className:"form-group row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("input",{className:"form-control",type:"text",onChange:e.onChange,value:e.filterText,placeholder:"Filter by first name",id:"filter-by"})})})}function d(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:e.rowNumber}),Object(o.jsx)("td",{children:e.first}),Object(o.jsx)("td",{children:e.last}),Object(o.jsx)("td",{children:e.email})]})}var j=[{displayName:"First Name",getValue:function(e){return e.name.first}},{displayName:"Last Name",getValue:function(e){return e.name.last}},{displayName:"Email",getValue:function(e){return e.email}}];function b(e){var t=a.a.useState(null),n=Object(l.a)(t,2),s=n[0],c=n[1],i=a.a.useState(null),b=Object(l.a)(i,2),p=b[0],h=b[1],m=Object(r.useState)(""),f=Object(l.a)(m,2),x=f[0],O=f[1],g=[];if(!e.people)return null;var v,y=e.people.filter((function(e){return e.name.first.toUpperCase().includes(x.toUpperCase())}));v=s?y.sort((function(e,t){var n=s.getValue(e).toUpperCase(),r=s.getValue(t).toUpperCase();return"descending"===p&&(r=s.getValue(e).toUpperCase(),n=s.getValue(t).toUpperCase()),n<r?-1:n>r?1:0})):y;for(var N=0;N<v.length;N++){var C=v[N];g.push(Object(o.jsx)(d,{rowNumber:N+1,first:C.name.first,last:C.name.last,email:C.email}))}for(var w=[],V=function(e){w.push(Object(o.jsx)("th",{className:"text-left px-0",children:Object(o.jsx)("button",{className:"btn btn-link text-white",onClick:function(){c(j[e]),h("ascending"===p?"descending":"ascending")},children:j[e].displayName})}))},F=0;F<j.length;F++)V(F);return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{value:x,onChange:function(e){O(e.target.value)}}),Object(o.jsxs)("table",{className:"table table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"bg-secondary",children:[Object(o.jsx)("th",{children:"#"}),w]})}),Object(o.jsx)("tbody",{children:g})]})]})}function p(){return Object(o.jsx)(i.Get,{url:"https://randomuser.me/api/?results=50",children:function(e,t,n,r,a){return e?Object(o.jsxs)("div",{children:["Something bad happened: ",e.message," ",Object(o.jsx)("button",{onClick:function(){return r({params:{reload:!0}})},children:"Retry"})]}):n?Object(o.jsx)("div",{children:"Loading..."}):null!==t?Object(o.jsx)(b,{people:t.data.results}):Object(o.jsx)("div",{children:"Default message before request is made."})}})}var h=function(){return Object(o.jsx)(p,{})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),m()}},[[48,1,2]]]);
//# sourceMappingURL=main.db2c0c1f.chunk.js.map