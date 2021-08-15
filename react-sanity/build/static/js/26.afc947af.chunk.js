(this["webpackJsonpreact-sanity"]=this["webpackJsonpreact-sanity"]||[]).push([[26],{327:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return k}));var t=r(0),n=r(133),i=r(262),o=r(132),c=r(2),s=r(4),l=(r(8),r(6)),d=r(20),m=r(10),b=r(28),u=r(214),f=r(53);var p=t.forwardRef((function(e,a){var r=e.classes,n=e.className,i=e.color,o=void 0===i?"primary":i,m=e.value,b=e.valueBuffer,p=e.variant,j=void 0===p?"indeterminate":p,h=Object(s.a)(e,["classes","className","color","value","valueBuffer","variant"]),g=Object(u.a)()||f.a,v={},y={bar1:{},bar2:{}};if("determinate"===j||"buffer"===j)if(void 0!==m){v["aria-valuenow"]=Math.round(m),v["aria-valuemin"]=0,v["aria-valuemax"]=100;var O=m-100;"rtl"===g.direction&&(O=-O),y.bar1.transform="translateX(".concat(O,"%)")}else 0;if("buffer"===j)if(void 0!==b){var x=(b||0)-100;"rtl"===g.direction&&(x=-x),y.bar2.transform="translateX(".concat(x,"%)")}else 0;return t.createElement("div",Object(c.a)({className:Object(l.a)(r.root,r["color".concat(Object(d.a)(o))],n,{determinate:r.determinate,indeterminate:r.indeterminate,buffer:r.buffer,query:r.query}[j]),role:"progressbar"},v,{ref:a},h),"buffer"===j?t.createElement("div",{className:Object(l.a)(r.dashed,r["dashedColor".concat(Object(d.a)(o))])}):null,t.createElement("div",{className:Object(l.a)(r.bar,r["barColor".concat(Object(d.a)(o))],("indeterminate"===j||"query"===j)&&r.bar1Indeterminate,{determinate:r.bar1Determinate,buffer:r.bar1Buffer}[j]),style:y.bar1}),"determinate"===j?null:t.createElement("div",{className:Object(l.a)(r.bar,("indeterminate"===j||"query"===j)&&r.bar2Indeterminate,"buffer"===j?[r["color".concat(Object(d.a)(o))],r.bar2Buffer]:r["barColor".concat(Object(d.a)(o))]),style:y.bar2}))})),j=Object(m.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(b.d)(a,.62):Object(b.b)(a,.5)},r=a(e.palette.primary.main),t=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:r},colorSecondary:{backgroundColor:t},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(p),h=r(72),g=r(245),v=r(280),y=r(217),O=r(243),x=r(3);function k(e){var a=e.skills,r=Object(h.a)(),c=Object(g.a)(),s=c.ref,l=c.inView,d=Object(v.a)();return Object(t.useEffect)((function(){l&&d.start("visible"),l||d.start("hidden")}),[l]),Object(x.jsx)(n.a,{mt:8,className:r.overflow,id:"skills",children:Object(x.jsxs)(i.a,{container:!0,spacing:3,ref:s,children:[Object(x.jsxs)(i.a,{item:!0,lg:6,md:6,xs:12,component:y.a.div,variants:O.w,animate:d,children:[Object(x.jsx)(n.a,{children:Object(x.jsx)(o.a,{variant:"h5",className:r.bgText,children:"Our Skills"})}),Object(x.jsx)(n.a,{my:2,children:Object(x.jsxs)(o.a,{variant:"h6",color:"primary",children:["Lorem ipsum dolor ",Object(x.jsx)(o.a,{variant:"h6",component:"span",className:r.bgText,children:"sit amet"})," , consectetur adipiscing elit. Non"]})}),Object(x.jsx)(o.a,{color:"primary",variant:"body2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non amet porttitor est sapien senectus sit mi magna senectus. Donec diam lacus pulvinar rhoncus scelerisque morbi nisiDonec diam lacus pulvinar rhoncus scelerisque morbi nisi elementum tellus"})]}),Object(x.jsx)(i.a,{item:!0,lg:6,md:6,xs:12,component:y.a.div,variants:O.s,animate:d,children:Object(x.jsx)(n.a,{mt:5,children:a.map((function(e){return Object(x.jsxs)(n.a,{my:3,children:[Object(x.jsx)(o.a,{variant:"body2",color:"primary",children:e.name}),Object(x.jsx)(j,{variant:"determinate",value:e.pourcentage,color:"secondary",className:r.bar})]},e._id)}))})})]})})}}}]);
//# sourceMappingURL=26.afc947af.chunk.js.map