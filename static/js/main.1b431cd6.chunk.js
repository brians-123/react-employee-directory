(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{48:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(16),s=n.n(c),i=(n(22),n(17)),l=n(3),u=n(0);function o(e){return Object(u.jsx)("div",{className:"form-group row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("input",{className:"form-control",type:"text",onChange:e.onChange,value:e.filterText,placeholder:"Filter by first name",id:"filter-by"})})})}function d(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:e.rowNumber}),Object(u.jsx)("td",{children:e.first}),Object(u.jsx)("td",{children:e.last}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:e.picture,alt:"person"})})]})}var j=[{displayName:"First Name",getValue:function(e){return e.name.first}},{displayName:"Last Name",getValue:function(e){return e.name.last}},{displayName:"Email",getValue:function(e){return e.email}},{displayName:"Picture",getValue:function(e){return e.picture.thumbnail}}];function b(e){var t=a.a.useState(null),n=Object(l.a)(t,2),c=n[0],s=n[1],i=a.a.useState(null),b=Object(l.a)(i,2),p=b[0],h=b[1],m=Object(r.useState)(""),f=Object(l.a)(m,2),x=f[0],O=f[1],g=[];if(!e.people)return null;var v,y=e.people.filter((function(e){return e.name.first.toUpperCase().includes(x.toUpperCase())}));v=c?y.sort((function(e,t){var n=c.getValue(e).toUpperCase(),r=c.getValue(t).toUpperCase();return"descending"===p&&(r=c.getValue(e).toUpperCase(),n=c.getValue(t).toUpperCase()),n<r?-1:n>r?1:0})):y;for(var N=0;N<v.length;N++){var C=v[N];g.push(Object(u.jsx)(d,{rowNumber:N+1,first:C.name.first,last:C.name.last,email:C.email,picture:C.picture.thumbnail},C.login.uuid))}for(var V=[],w=function(e){V.push(Object(u.jsx)("th",{className:"text-left px-0",children:Object(u.jsx)("button",{className:"btn btn-link text-white",onClick:function(){s(j[e]),h("ascending"===p?"descending":"ascending")},children:j[e].displayName})},e))},F=0;F<j.length;F++)w(F);return Object(u.jsxs)("div",{children:[Object(u.jsx)(o,{value:x,onChange:function(e){O(e.target.value)}}),Object(u.jsxs)("table",{className:"table table-striped",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"bg-secondary",children:[Object(u.jsx)("th",{children:"#"}),V]})}),Object(u.jsx)("tbody",{children:g})]})]})}function p(){return Object(u.jsx)(i.Get,{url:"https://randomuser.me/api/?results=50",children:function(e,t,n,r,a){return e?Object(u.jsxs)("div",{children:["Something bad happened: ",e.message," ",Object(u.jsx)("button",{onClick:function(){return r({params:{reload:!0}})},children:"Retry"})]}):n?Object(u.jsx)("div",{children:"Loading..."}):null!==t?Object(u.jsx)(b,{people:t.data.results}):Object(u.jsx)("div",{children:"Default message before request is made."})}})}var h=function(){return Object(u.jsx)(p,{})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),m()}},[[48,1,2]]]);
//# sourceMappingURL=main.1b431cd6.chunk.js.map