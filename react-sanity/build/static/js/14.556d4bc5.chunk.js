(this["webpackJsonpreact-sanity"]=this["webpackJsonpreact-sanity"]||[]).push([[14],{243:function(i,t,e){"use strict";e.d(t,"y",(function(){return n})),e.d(t,"z",(function(){return r})),e.d(t,"r",(function(){return a})),e.d(t,"j",(function(){return s})),e.d(t,"h",(function(){return c})),e.d(t,"g",(function(){return o})),e.d(t,"b",(function(){return d})),e.d(t,"a",(function(){return l})),e.d(t,"v",(function(){return u})),e.d(t,"u",(function(){return b})),e.d(t,"d",(function(){return f})),e.d(t,"t",(function(){return y})),e.d(t,"w",(function(){return j})),e.d(t,"s",(function(){return h})),e.d(t,"x",(function(){return p})),e.d(t,"p",(function(){return v})),e.d(t,"q",(function(){return x})),e.d(t,"n",(function(){return m})),e.d(t,"o",(function(){return O})),e.d(t,"c",(function(){return g})),e.d(t,"e",(function(){return w})),e.d(t,"k",(function(){return C})),e.d(t,"m",(function(){return k})),e.d(t,"l",(function(){return N})),e.d(t,"f",(function(){return A})),e.d(t,"i",(function(){return z}));var n={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3,when:"beforeChildren"}}},r={hidden:{y:80},visible:{y:0}},a={exit:{x:"-100vw",transition:{duration:.4}},hidden:{x:"100vw"},visible:{x:0,transition:{duration:.4,delay:.4}}},s={hidden:{y:-200},visible:{y:0,transition:{duration:.5,type:"tween"}}},c={hidden:{scale:.8,opacity:0},visible:{scale:1,opacity:1,transition:{while:"beforeChildren"}}},o={hidden:{rotate:360,opacity:0},visible:{rotate:0,opacity:1,transition:{delay:1.2}}},d={hidden:{x:"100vw"},visible:{x:0,transition:{duration:.8,delay:.3}}},l={hidden:{y:70},visible:{y:0,transition:{duration:.4,delay:.5}}},u={hidden:{x:"-100vw"},visible:{x:0,transition:{delay:.2,duration:.4,when:"beforeChildren"}}},b={hidden:{opacity:0,scale:1.2},visible:{opacity:1,scale:1,transition:{scale:{delay:.9,duration:.4,type:"spring",bounce:.25,stiffness:60,yoyo:2},opacity:{delay:.9,duration:.4}}}},f={hidden:{rotate:20},visible:{rotate:0,transition:{delay:.4,type:"spring",stiffness:50,damping:5}}},y={hidden:{opacity:0,x:"-100vw"},visible:{opacity:1,x:0,transition:{duration:1,delay:.2,when:"beforeChildren"}}},j={hidden:{y:40},visible:{y:0,transition:{type:"spring",stiffness:60,delay:.3,damping:5}}},h={hidden:{y:-40},visible:{y:0,transition:{type:"spring",stiffness:60,damping:5,delay:.3}}},p={hidden:{x:"100vw"},visible:{x:0,transition:{type:"spring",stiffness:30,damping:7,delay:.7}}},v={hidden:{x:30},visible:{x:0,transition:{type:"spring",stiffness:30,damping:7,delay:1}}},x={hidden:{x:-30},visible:{x:0,transition:{type:"spring",stiffness:30,damping:7,delay:1}}},m={hidden:{scale:1.1},visible:{scale:1,transition:{duration:.3,delay:1,yoyo:2}}},O={hidden:{rotate:20},visible:{rotate:0,transition:{duration:.3,delay:1,yoyo:2}}},g={hidden:{y:70},visible:{y:0,transition:{delay:.9,type:"spring",stiffness:60,damping:5}}},w={hidden:{scale:1.5},visible:{scale:1,transition:{type:"spring",stiffness:70,yoyo:1/0}}},C={hidden:{y:40},visible:{y:0,transition:{duration:.5}}},k={hidden:{x:"-100vw"},visible:{x:0,transition:{duration:.8}}},N={hidden:{x:"100vw"},visible:{x:0,transition:{duration:.8}}},A={hidden:{y:30},visible:{y:0,transition:{delay:.5,type:"spring",stiffness:50,damping:5}}},z={hidden:{x:"100vw"},visible:{x:0,transition:{duration:.4,ease:"easeInOut"}}}},263:function(i,t,e){"use strict";e.d(t,"a",(function(){return p}));var n=e(0),r=e(74),a=e(264),s=e(265),c=e(266),o=e(267),d=e(133),l=e(132),u=e(72),b=e(245),f=e(280),y=e(217),j=e(243),h=e(3);function p(i){var t=i.project,e=Object(u.a)(),p=Object(b.a)(),v=p.ref,x=p.inView,m=Object(f.a)();return Object(n.useEffect)((function(){x&&m.start("visible"),x||m.start("hidden")}),[x]),Object(h.jsx)("div",{children:Object(h.jsx)(a.a,{className:e.workCard,children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(c.a,{className:e.workMedia,image:t.mainImage.asset.url}),Object(h.jsx)(o.a,{className:e.bgCard,ref:v,children:Object(h.jsx)(d.a,{component:y.a.div,variants:j.k,animate:m,children:Object(h.jsxs)(r.b,{to:"/portfolio/".concat(t._id),className:e.linkWork,children:[Object(h.jsx)(l.a,{gutterBottom:!0,variant:"h5",component:"h2",color:"primary",children:t.title.length>22?"".concat(t.title.substring(0,22),"....."):t.title}),Object(h.jsx)(l.a,{variant:"body2",color:"primary",component:"p",children:t.categories.title})]})})})]})})})}},328:function(i,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return x}));var n=e(0),r=e(133),a=e(132),s=e(72),c=e(64),o=e(274),d=e(256),l=e(262),u=e(263),b=e(217),f=e(243),y=e(3);function j(i){var t=i.projects,e=i.categories,j=Object(s.a)(),h=Object(n.useState)([]),p=Object(c.a)(h,2),v=p[0],x=p[1],m=Object(n.useState)("All"),O=Object(c.a)(m,2),g=O[0],w=O[1];return Object(n.useEffect)((function(){x("All"===g?t:t.filter((function(i){return i.categories.title===g})))}),[g,t]),Object(y.jsxs)(r.a,{mb:5,component:b.a.div,variants:f.v,initial:"hidden",animate:"visible",children:[Object(y.jsxs)(r.a,{mt:9,py:1,display:"flex",justifyContent:"center",mx:"auto",border:1,borderColor:"secondary.main",borderRadius:"borderRadius",width:"65%",className:j.responsiveFilter,children:[Object(y.jsx)(r.a,{mx:3,children:Object(y.jsx)(o.a,{size:"large",onClick:function(){return w("All")},children:Object(y.jsx)(a.a,{variant:"body1",color:"All"===g?"secondary":"primary",children:"ALL"})})}),e.map((function(i){return Object(y.jsx)(r.a,{mx:3,children:Object(y.jsx)(o.a,{size:"large",onClick:function(){return w(i.title)},children:Object(y.jsx)(a.a,{variant:"body1",color:g===i.title?"secondary":"primary",children:i.title})})},i._id)}))]}),Object(y.jsx)(d.a,{children:Object(y.jsx)(r.a,{mt:9,mx:3,children:Object(y.jsx)(l.a,{container:!0,spacing:3,children:v.map((function(i){return Object(y.jsx)(l.a,{item:!0,md:4,sm:6,xs:12,children:Object(y.jsx)(u.a,{project:i})},i._id)}))})})})]})}var h=e(102),p=e(105),v=e(123);function x(){var i=Object(s.a)(),t=Object(h.b)(),e=Object(h.c)((function(i){return i.project.projects})),c=Object(h.c)((function(i){return i.category.categories}));return Object(n.useEffect)((function(){t(Object(p.b)("")),t(Object(v.b)())}),[]),Object(y.jsx)(b.a.div,{className:"".concat(i.overflow," ").concat(i.header),variants:f.r,exit:"exit",children:Object(y.jsxs)(r.a,{component:b.a.div,variants:f.r,initial:"hidden",animate:"visible",children:[Object(y.jsx)(r.a,{py:12,display:"flex",justifyContent:"center",alignItems:"center",className:i.portfolio,children:Object(y.jsx)(r.a,{component:b.a.div,variants:f.u,initial:"hidden",animate:"visible",children:Object(y.jsx)(a.a,{variant:"h4",className:i.textWhite,children:"Portfolio"})})}),Object(y.jsx)(j,{projects:e,categories:c})]})})}}}]);
//# sourceMappingURL=14.556d4bc5.chunk.js.map