(this["webpackJsonpcommit-feed"]=this["webpackJsonpcommit-feed"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),i=a.n(r),s=a(157),o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,161)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},j=a(13),u=a(43),m=a(61),l=a.n(m),d=a(78),b=a(79),h=a(158),O=a(155),x=a(156),p=a(159),f=a(2);function v(e){var t=e.commitNode,a=t.commit,n=a.message,c=a.committer.date,r=t.sha,i=t.committer,s=i.login,o=i.avatar_url;return Object(f.jsxs)(h.a,{variant:"outlined",sx:{width:"100%",p:2},children:[Object(f.jsxs)(O.a,{container:!0,columns:{xs:12,md:6},children:[Object(f.jsx)(O.a,{item:!0,xs:4,sm:2,children:Object(f.jsx)(x.a,{src:o})}),Object(f.jsx)(O.a,{item:!0,xs:8,sm:10,children:Object(f.jsx)(p.a,{variant:"h5",overflow:"hidden",sx:{m:2},children:s})})]}),Object(f.jsx)(p.a,{variant:"body1",children:n}),Object(f.jsx)(p.a,{variant:"subtitle1",children:r}),Object(f.jsx)(p.a,{variant:"subtitle1",children:Object(b.a)(c,"fullDate")})]})}var g=a(160);function y(e){var t=e.children;return Object(f.jsx)(g.a,{maxWidth:"sm",sx:{m:2},children:Object(f.jsx)(O.a,{container:!0,columns:{xs:4,md:12},children:t})})}function S(e){var t,a,c=e.repoAddress,r=e.parameters,i=Object(u.useQuery)("commits",(t=c,a=r,Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL(t),Object.keys(a).forEach((function(e){return n.searchParams.append(e,a[e])})),e.abrupt("return",fetch(n.toString(),{headers:{Accept:"application/vnd.github.v3+json"}}).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)}))))),s=i.data,o=i.error,j=i.isLoading,m=i.refetch;return Object(n.useEffect)((function(){m()}),[c,r]),Object(f.jsxs)(y,{children:[o&&Object(f.jsxs)("p",{children:["Error:"," ",o.message]}),j&&Object(f.jsx)("p",{children:"Loading..."}),s&&s.length?s.map((function(e){return Object(f.jsx)(v,{commitNode:e},e.sha)})):Object(f.jsx)("p",{children:"No commits found"})]})}var C=a(151),w=a(152),F=a(153);function k(e){var t=e.onSubmit,a=Object(n.useState)("m3db/m3"),c=Object(j.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)("1"),o=Object(j.a)(s,2),u=o[0],m=o[1],l=Object(n.useState)("master"),d=Object(j.a)(l,2),b=d[0],h=d[1];return Object(f.jsxs)(O.a,{container:!0,spacing:2,children:[Object(f.jsx)(O.a,{item:!0,xs:12,sm:5,children:Object(f.jsx)(w.a,{size:"small",name:"stepValue",variant:"outlined",required:!0,fullWidth:!0,label:"github repository",autoFocus:!0,value:r,onChange:function(e){return i(e.target.value)}})}),Object(f.jsx)(O.a,{item:!0,xs:12,sm:3,children:Object(f.jsx)(w.a,{size:"small",name:"branch",variant:"outlined",required:!0,fullWidth:!0,label:"branch",autoFocus:!0,value:b,onChange:function(e){return h(e.target.value)}})}),Object(f.jsx)(O.a,{item:!0,xs:12,sm:2,children:Object(f.jsx)(w.a,{size:"small",name:"page",variant:"outlined",required:!0,fullWidth:!0,label:"page",autoFocus:!0,value:u,onChange:function(e){return m(e.target.value)}})}),Object(f.jsx)(O.a,{item:!0,xs:12,sm:2,children:Object(f.jsx)(F.a,{variant:"contained",onClick:function(){var e="https://api.github.com/repos/".concat(r,"/commits");t(e,{page:u,per_page:"20",sha:b})},children:"fetch"})})]})}var L=new u.QueryClient;var W=function(){var e=Object(n.useState)("https://api.github.com/repos/m3db/m3/commits"),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({page:"1",per_page:"20",sha:"master"}),i=Object(j.a)(r,2),s=i[0],o=i[1];return Object(f.jsx)(u.QueryClientProvider,{client:L,children:Object(f.jsxs)(g.a,{component:"main",maxWidth:"md",children:[Object(f.jsx)("h1",{children:"commit feed"}),Object(f.jsx)(C.a,{}),Object(f.jsx)(k,{onSubmit:function(e,t){c(e),o(t)}}),Object(f.jsx)(S,{repoAddress:a,parameters:s})]})})},E=a(82),P=Object(E.a)({palette:{primary:{main:"#0052cc"},secondary:{main:"#edf2ff"}}}),q=Object(E.a)(P,{palette:{info:{main:P.palette.secondary.main}}});i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(s.a,{theme:q,children:Object(f.jsx)(W,{})})}),document.getElementById("root")),o()}},[[112,1,2]]]);
//# sourceMappingURL=main.56f7e703.chunk.js.map