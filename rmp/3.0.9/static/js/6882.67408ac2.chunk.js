"use strict";(self.webpackChunkrmp=self.webpackChunkrmp||[]).push([[6882],{6882:function(e,t,n){n.d(t,{Z:function(){return H}});var i,l=n(4942),r=n(9704),a=n(2791),o=n(184),s={component:function(e){var t=e.id,n=e.x,i=e.y,l=e.handlePointerDown,r=e.handlePointerMove,s=e.handlePointerUp,c=a.useCallback((function(e){return l(t,e)}),[t,l]),d=a.useCallback((function(e){return r(t,e)}),[t,r]),h=a.useCallback((function(e){return s(t,e)}),[t,s]);return a.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(i,")rotate(45)"),children:[(0,o.jsx)("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),(0,o.jsx)("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),(0,o.jsx)("circle",{id:"virtual_circle_".concat(t),r:5,stroke:"black",fill:"white",fillOpacity:"0",onPointerDown:c,onPointerMove:d,onPointerUp:h,style:{cursor:"move"}})]})}),[t,n,i,c,d,h])},icon:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),(0,o.jsx)("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),(0,o.jsx)("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),defaultAttrs:{},fields:[],metadata:{displayName:"panel.details.node.virtual.displayName",tags:[]}},c=n(3433),d=n(9439),h=n(1125),u=n(5477),x={num:1,color:[h.jk.Shanghai,"sh1","#E4002B",h.AJ.white]},f=[{type:"input",label:"panel.details.node.shmetroNumLineBadge.num",value:function(e){return(null!==e&&void 0!==e?e:x).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,t){var n=null!==t&&void 0!==t?t:x;return Number.isNaN(e)||(n.num=Number(e)),n}},{type:"custom",component:(0,o.jsx)(u.S,{type:r.Z.ShmetroNumLineBadge,defaultAttrs:x})}],m={component:function(e){var t=e.id,n=e.x,i=e.y,l=e.attrs,r=e.handlePointerDown,s=e.handlePointerMove,h=e.handlePointerUp,u=null!==l&&void 0!==l?l:x,f=u.num,m=void 0===f?x.num:f,p=u.color,g=void 0===p?x.color:p,v=m>=10?[22.67,10.75]:[21,10],y=(0,d.Z)(v,2),j=y[0],w=y[1],F=a.useCallback((function(e){return r(t,e)}),[t,r]),b=a.useCallback((function(e){return s(t,e)}),[t,s]),P=a.useCallback((function(e){return h(t,e)}),[t,h]);return a.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(i,")"),children:[(0,o.jsx)("rect",{fill:g[2],width:j,height:"22.67"}),(0,o.jsx)("text",{className:"rmp-name__zh",textAnchor:"middle",x:w,y:"19",fill:g[3],fontSize:"21.33",letterSpacing:"-1.75",children:m}),(0,o.jsx)("text",{className:"rmp-name__zh",x:j+2,y:"12",fontSize:"14.67",children:"\u53f7\u7ebf"}),(0,o.jsxs)("text",{className:"rmp-name__en",x:j+4,y:"21.5",fontSize:"8",children:["Line ",m]}),(0,o.jsx)("rect",{fill:"white",fillOpacity:"0",width:j,height:"22.67",onPointerDown:F,onPointerMove:b,onPointerUp:P,style:{cursor:"move"}})]})}),[t,n,i,m].concat((0,c.Z)(g),[F,b,P]))},icon:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[(0,o.jsx)("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),(0,o.jsx)("text",{x:"4",y:"18",fill:"white",children:"1"}),(0,o.jsx)("text",{x:"14",y:"10",fontSize:"5",children:"\u53f7\u7ebf"}),(0,o.jsx)("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),defaultAttrs:x,fields:f,metadata:{displayName:"panel.details.node.shmetroNumLineBadge.displayName",tags:[]}},p={names:["\u6d66\u6c5f\u7ebf","Pujiang Line"],color:[h.jk.Shanghai,"pjl","#999999",h.AJ.white]},g=[{type:"input",label:"panel.details.node.shmetroTextLineBadge.nameZh",value:function(e){return(null!==e&&void 0!==e?e:p).names[0]},onChange:function(e,t){var n=null!==t&&void 0!==t?t:p;return n.names[0]=e.toString(),n}},{type:"input",label:"panel.details.node.shmetroTextLineBadge.nameEn",value:function(e){return(null!==e&&void 0!==e?e:p).names[1]},onChange:function(e,t){var n=null!==t&&void 0!==t?t:p;return n.names[1]=e.toString(),n}},{type:"custom",component:(0,o.jsx)(u.S,{type:r.Z.ShmetroTextLineBadge,defaultAttrs:p})}],v={component:function(e){var t=e.id,n=e.x,i=e.y,l=e.attrs,r=e.handlePointerDown,s=e.handlePointerMove,h=e.handlePointerUp,u=null!==l&&void 0!==l?l:p,x=u.names,f=void 0===x?p.names:x,m=u.color,g=void 0===m?p.color:m,v=a.useRef(null),y=a.useState({width:12}),j=(0,d.Z)(y,2),w=j[0],F=j[1];a.useEffect((function(){return F(v.current.getBBox())}),[].concat((0,c.Z)(f),[F,v]));var b=a.useCallback((function(e){return r(t,e)}),[t,r]),P=a.useCallback((function(e){return s(t,e)}),[t,s]),B=a.useCallback((function(e){return h(t,e)}),[t,h]);return a.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(i,")"),children:[(0,o.jsx)("rect",{fill:g[2],x:"0",width:w.width+7,height:"21"}),(0,o.jsxs)("g",{ref:v,children:[(0,o.jsx)("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(w.width+7)/2,y:"4",fontSize:"10",fill:g[3],letterSpacing:"-0.25",children:f[0]}),(0,o.jsx)("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(w.width+7)/2,y:"13",fontSize:"5",fill:g[3],letterSpacing:"-0.25",children:f[1]})]}),(0,o.jsx)("rect",{fill:"white",fillOpacity:"0",x:"0",width:w.width+7,height:"21",onPointerDown:b,onPointerMove:P,onPointerUp:B,style:{cursor:"move"}})]})}),[t,n,i].concat((0,c.Z)(f),[w],(0,c.Z)(g),[b,P,B]))},icon:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[(0,o.jsx)("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),(0,o.jsx)("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"\u6d66\u6c5f\u7ebf"}),(0,o.jsx)("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),defaultAttrs:p,fields:g,metadata:{displayName:"panel.details.node.shmetroTextLineBadge.displayName",tags:[]}},y=function(e){var t=e.lineName,n=e.commonPart,i=a.useRef(null),l=a.useState({x:0,height:0,width:0}),r=(0,d.Z)(l,2),s=r[0],c=r[1];a.useEffect((function(){i.current&&c(i.current.getBBox())}),[t.toString()]);var h=F/Math.max(F,s.width),u=(-s.x-s.width/2)*h,x=s.height*(1-h)*1.2/2;return(0,o.jsx)("g",{ref:i,transform:"translate(".concat(u,",").concat(x,")scale(").concat(h,")"),children:(0,o.jsxs)("text",{className:"rmp-name__zh",fontSize:14,y:12,textAnchor:"end",children:[n,(0,o.jsx)("tspan",{className:"rmp-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:t[0].slice(n.length).trim()}),(0,o.jsx)("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:t[1].slice(n.length).trim()})]})})},j=n(1413),w=function(e){return(0,o.jsx)("rect",(0,j.Z)({x:-22.5,height:24,width:45,rx:4.5},e))},F=42,b=function(e){var t=e.lineName,n=e.foregroundColour,i=e.backgroundColour,l=e.passed,r=P(t),s=(0,d.Z)(r,2),c=s[0],u=s[1],x=a.useRef(null),f=a.useRef(null),m=a.useState({width:0}),p=(0,d.Z)(m,2),g=p[0],v=p[1],j=a.useState({width:0}),b=(0,d.Z)(j,2),B=b[0],N=b[1];a.useEffect((function(){x.current&&v(x.current.getBBox()),f.current&&N(f.current.getBBox())}),[t.toString()]);var S=F/Math.max(F,g.width),k=F/Math.max(F,B.width),M={nameZh:{y:7.3+13.5*(1-S)*S/2},nameEn:{y:19.5-9*(1-k)*k/2}};return(0,o.jsxs)("g",{textAnchor:"middle",fill:l?h.AJ.white:n,children:[(0,o.jsx)(w,{fill:l?"#aaa":i}),2===c?(0,o.jsx)(y,{lineName:t,commonPart:u}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("text",{ref:x,className:"rmp-name__zh",fontSize:12,transform:"translate(0,".concat(M.nameZh.y,")scale(").concat(S,")"),dominantBaseline:"central",children:1===c?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("tspan",{fontSize:16,dy:.7,className:"rmp-name__zh",dominantBaseline:"central",children:u}),(0,o.jsx)("tspan",{dy:-.7,className:"rmp-name__zh",dominantBaseline:"central",children:t[0].slice(u.length)})]}):t[0]}),(0,o.jsx)("text",{ref:f,className:"rmp-name__en",fontSize:8,transform:"translate(0,".concat(M.nameEn.y,")scale(").concat(k,")"),dominantBaseline:"middle",children:t[1]})]})]})},P=function(e){var t=e[0].match(/^(\d+)\D+$/);if(t)return[1,t[1]];var n=e.map((function(e){return e.match(/^(\w+).+$/)}));return n[0]&&n[1]&&n[0][1]===n[1][1]?[2,n[0][1]]:[3,""]},B={names:["1\u53f7\u7ebf","Line 1"],color:[h.jk.Guangzhou,"gz1","#F3D03E",h.AJ.black]},N=[{type:"input",label:"panel.details.node.gzmtrLineBadge.nameZh",value:function(e){return(null!==e&&void 0!==e?e:B).names[0]},onChange:function(e,t){var n=null!==t&&void 0!==t?t:B;return n.names[0]=e.toString(),n}},{type:"input",label:"panel.details.node.gzmtrLineBadge.nameEn",value:function(e){return(null!==e&&void 0!==e?e:B).names[1]},onChange:function(e,t){var n=null!==t&&void 0!==t?t:B;return n.names[1]=e.toString(),n}},{type:"custom",component:(0,o.jsx)(u.S,{type:r.Z.GzmtrLineBadge,defaultAttrs:B})}],S={component:function(e){var t=e.id,n=e.x,i=e.y,l=e.attrs,r=e.handlePointerDown,s=e.handlePointerMove,d=e.handlePointerUp,h=null!==l&&void 0!==l?l:B,u=h.names,x=void 0===u?B.names:u,f=h.color,m=void 0===f?B.color:f,p=a.useCallback((function(e){return r(t,e)}),[t,r]),g=a.useCallback((function(e){return s(t,e)}),[t,s]),v=a.useCallback((function(e){return d(t,e)}),[t,d]);return a.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(i,")"),children:[(0,o.jsx)(b,{lineName:x,foregroundColour:m[3],backgroundColour:m[2]}),(0,o.jsx)("rect",{fill:"white",fillOpacity:"0",x:"-22.5",width:"45",height:"24",rx:"4.5",onPointerDown:p,onPointerMove:g,onPointerUp:v,style:{cursor:"move"}})]})}),[t,n,i].concat((0,c.Z)(x),(0,c.Z)(m),[p,g,v]))},icon:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[(0,o.jsx)("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),(0,o.jsx)("text",{x:"12",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"1\u53f7\u7ebf"}),(0,o.jsx)("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"5",fill:"white",children:"Line 1"})]}),defaultAttrs:B,fields:N,metadata:{displayName:"panel.details.node.gzmtrLineBadge.displayName",tags:[]}},k={num:1,color:[h.jk.Beijing,"bj1","#c23a30",h.AJ.white]},M=[{type:"input",label:"panel.details.node.bjsubwayNumLineBadge.num",value:function(e){return(null!==e&&void 0!==e?e:k).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,t){var n=null!==t&&void 0!==t?t:k;return Number.isNaN(e)||(n.num=Number(e)),n}},{type:"custom",component:(0,o.jsx)(u.S,{type:r.Z.BjsubwayNumLineBadge,defaultAttrs:k})}],z={component:function(e){var t=e.id,n=e.x,i=e.y,l=e.attrs,r=e.handlePointerDown,s=e.handlePointerMove,u=e.handlePointerUp,x=null!==l&&void 0!==l?l:k,f=x.num,m=void 0===f?k.num:f,p=x.color,g=void 0===p?k.color:p,v=a.useRef(null),y=a.useState({width:12}),j=(0,d.Z)(y,2),w=j[0],F=j[1];a.useEffect((function(){return F(v.current.getBBox())}),[m,F,v]);var b=a.useCallback((function(e){return r(t,e)}),[t,r]),P=a.useCallback((function(e){return s(t,e)}),[t,s]),B=a.useCallback((function(e){return u(t,e)}),[t,u]),N=g[3]===h.AJ.black?"#003670":h.AJ.white;return a.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(i,")scale(1.5)"),children:[(0,o.jsx)("rect",{fill:g[2],x:"0",width:w.width+23,height:"16",rx:"2"}),(0,o.jsx)("text",{ref:v,className:"rmp-name__zh",textAnchor:"middle",x:w.width/2+3,y:"13.5",fill:N,children:m}),(0,o.jsx)("text",{className:"rmp-name__zh",x:w.width+4,y:"8.5",fontSize:"8",fill:N,children:"\u53f7\u7ebf"}),(0,o.jsxs)("text",{className:"rmp-name__en",x:w.width+6,y:"13.5",fontSize:"4",fill:N,children:["Line ",m]}),(0,o.jsx)("rect",{fill:"white",fillOpacity:"0",x:"0",width:w.width+24,height:"16",rx:"2",onPointerDown:b,onPointerMove:P,onPointerUp:B,style:{cursor:"move"}})]})}),[t,n,i,m].concat((0,c.Z)(g),[w,b,P,B]))},icon:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[(0,o.jsx)("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),(0,o.jsx)("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),(0,o.jsx)("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"\u53f7\u7ebf"}),(0,o.jsx)("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),defaultAttrs:k,fields:M,metadata:{displayName:"panel.details.node.bjsubwayNumLineBadge.displayName",tags:[]}},C={names:["\u516b\u901a\u7ebf","Batong Line"],color:[h.jk.Beijing,"bj1","#c23a30",h.AJ.white]},_=[{type:"input",label:"panel.details.node.bjsubwayTextLineBadge.nameZh",value:function(e){return(null!==e&&void 0!==e?e:C).names[0]},onChange:function(e,t){var n=null!==t&&void 0!==t?t:C;return n.names[0]=e.toString(),n}},{type:"input",label:"panel.details.node.bjsubwayTextLineBadge.nameEn",value:function(e){return(null!==e&&void 0!==e?e:C).names[1]},onChange:function(e,t){var n=null!==t&&void 0!==t?t:C;return n.names[1]=e.toString(),n}},{type:"custom",component:(0,o.jsx)(u.S,{type:r.Z.BjsubwayTextLineBadge,defaultAttrs:C})}],Z={component:function(e){var t=e.id,n=e.x,i=e.y,l=e.attrs,r=e.handlePointerDown,s=e.handlePointerMove,u=e.handlePointerUp,x=null!==l&&void 0!==l?l:C,f=x.names,m=void 0===f?C.names:f,p=x.color,g=void 0===p?C.color:p,v=a.useRef(null),y=a.useState({width:12}),j=(0,d.Z)(y,2),w=j[0],F=j[1];a.useEffect((function(){return F(v.current.getBBox())}),[].concat((0,c.Z)(m),[F,v]));var b=a.useCallback((function(e){return r(t,e)}),[t,r]),P=a.useCallback((function(e){return s(t,e)}),[t,s]),B=a.useCallback((function(e){return u(t,e)}),[t,u]),N=g[3]===h.AJ.black?"#003670":h.AJ.white;return a.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(i,")scale(1.5)"),children:[(0,o.jsx)("rect",{fill:g[2],x:"0",width:w.width+6,height:"16",rx:"2"}),(0,o.jsxs)("g",{ref:v,children:[(0,o.jsx)("text",{className:"rmp-name__zh",textAnchor:"middle",x:(w.width+6)/2,y:"8",fontSize:"7",fill:N,children:m[0]}),(0,o.jsx)("text",{className:"rmp-name__en",textAnchor:"middle",x:(w.width+6)/2,y:"13.5",fontSize:"4",fill:N,children:m[1]})]}),(0,o.jsx)("rect",{fill:"white",fillOpacity:"0",x:"0",width:w.width+3,height:"16",rx:"2",onPointerDown:b,onPointerMove:P,onPointerUp:B,style:{cursor:"move"}})]})}),[t,n,i].concat((0,c.Z)(m),[w],(0,c.Z)(g),[b,P,B]))},icon:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[(0,o.jsx)("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),(0,o.jsx)("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"\u516b\u901a\u7ebf"}),(0,o.jsx)("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),defaultAttrs:C,fields:_,metadata:{displayName:"panel.details.node.bjsubwayTextLineBadge.displayName",tags:[]}},A={type:"airport"},L=[{type:"select",label:"panel.details.node.facilities.type",value:function(e){return(null!==e&&void 0!==e?e:A).type},options:{airport:"airport",maglev:"maglev",disney:"disney",railway:"railway",hsr:"hsr",airport_hk:"airport Hongkong",disney_hk:"disney Hongkong",ngong_ping_360:"Ngong Ping 360"},onChange:function(e,t){var n=null!==t&&void 0!==t?t:A;return n.type=e,n}}],D={component:function(e){var t=e.id,n=e.x,i=e.y,l=e.attrs,r=e.handlePointerDown,s=e.handlePointerMove,c=e.handlePointerUp,d=(null!==l&&void 0!==l?l:A).type,h=void 0===d?A.type:d,u=a.useCallback((function(e){return r(t,e)}),[t,r]),x=a.useCallback((function(e){return s(t,e)}),[t,s]),f=a.useCallback((function(e){return c(t,e)}),[t,c]);return a.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(i,")"),children:["airport"===h&&(0,o.jsxs)("g",{id:"airport",transform:"translate(-12.5,0)",children:[(0,o.jsx)("circle",{fill:"#828282",cx:"12.5",cy:"12.5",r:"11.5"}),(0,o.jsx)("line",{fill:"none",stroke:"#FFFFFF",strokeWidth:"2.167",strokeLinecap:"round",strokeMiterlimit:"10",x1:"12.5",y1:"18.7",x2:"12.5",y2:"3.7"}),(0,o.jsx)("polyline",{fill:"#FFFFFF",points:"11.7,9.3 3.3,14.3 3.3,16.7 11.7,13.7 "}),(0,o.jsx)("polyline",{fill:"#FFFFFF",points:"13.3,9.3 21.7,14.3 21.7,16.7 13.3,13.7 "}),(0,o.jsx)("polyline",{fill:"#FFFFFF",points:"11.7,18.3 9.7,19.7 9.7,21.7 12.3,20.7 12.7,20.7 15.3,21.7 15.3,19.7 13.3,18.3 "}),(0,o.jsx)("circle",{fill:"#828282",fillOpacity:"0",cx:"12.5",cy:"12.5",r:"11.5",onPointerDown:u,onPointerMove:x,onPointerUp:f,style:{cursor:"move"}})]}),"disney"===h&&(0,o.jsxs)("g",{id:"disney",transform:"scale(0.426)",children:[(0,o.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey"}),(0,o.jsx)("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"}),(0,o.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey",fillOpacity:"0",onPointerDown:u,onPointerMove:x,onPointerUp:f,style:{cursor:"move"}})]}),"maglev"===h&&(0,o.jsxs)("g",{id:"maglev",transform:"translate(-12.5,0)",children:[(0,o.jsx)("path",{fill:"#10716F",d:"M23.8,22.4c0,0.8-0.6,1.4-1.4,1.4H2.6c-0.8,0-1.4-0.6-1.4-1.4V2.6c0-0.8,0.6-1.4,1.4-1.4h19.8 c0.8,0,1.4,0.6,1.4,1.4V22.4L23.8,22.4z"}),(0,o.jsx)("path",{fill:"#FFFFFF",d:"M12.5,2.8l-1,1.7L7.2,5C5.9,5.1,4.8,6.2,4.8,7.6v6.2c0,0.9,0.7,1.7,1.7,1.7h12c0.9,0,1.7-0.7,1.7-1.7V7.6 c0-1.4-1-2.5-2.4-2.7l-4.3-0.4"}),(0,o.jsx)("polyline",{fill:"#10716F",points:"13.2,8.8 13.2,11.8 18,11.8 18,8.5 13.2,8.5 "}),(0,o.jsx)("polyline",{fill:"#10716F",points:"7,8.8 7,11.8 11.8,11.8 11.8,8.5 7,8.5 "}),(0,o.jsx)("path",{fill:"#FFFFFF",d:"M4.8,15.3v4c0,1.1,0.7,2,1.8,2h2v-1.7H6.5v-2.3h12v2.3h-2.2v1.7h2c1.1,0,1.8-0.7,1.8-1.8v-4.3v0.2 c-0.3,0.4-0.8,0.7-1.3,0.7H6.2C5.7,16,5.2,15.8,4.8,15.3L4.8,15.3z"}),(0,o.jsx)("path",{d:"M23.8,22.4c0,0.8-0.6,1.4-1.4,1.4H2.6c-0.8,0-1.4-0.6-1.4-1.4V2.6c0-0.8,0.6-1.4,1.4-1.4h19.8 c0.8,0,1.4,0.6,1.4,1.4V22.4L23.8,22.4z",fill:"#10716F",fillOpacity:"0",onPointerDown:u,onPointerMove:x,onPointerUp:f,style:{cursor:"move"}})]}),"railway"===h&&(0,o.jsxs)("g",{id:"railway",transform:"translate(-12.5,0)",children:[(0,o.jsx)("circle",{fill:"#807F80",cx:"12.5",cy:"12.5",r:"11.5"}),(0,o.jsx)("line",{fill:"none",x1:"10.8",y1:"3.8",x2:"10.8",y2:"4.8"}),(0,o.jsx)("polyline",{fill:"#FFFFFF",points:"10.8,5 10.8,3.8 14.2,3.8 14.2,5 "}),(0,o.jsx)("path",{fill:"#FFFFFF",d:"M13.8,14.1h-2.7c-0.8,0-1.5-0.7-1.5-1.5v-0.2c0-0.8,0.7-1.5,1.5-1.5h2.7c0.8,0,1.5,0.7,1.5,1.5v0.2 C15.3,13.4,14.7,14.1,13.8,14.1z"}),(0,o.jsx)("circle",{fill:"none",stroke:"#FFFFFF",strokeWidth:"2",strokeMiterlimit:"10",cx:"12.5",cy:"12.5",r:"6.7"}),(0,o.jsx)("polyline",{fill:"#807F80",points:"10.2,17.3 8.8,20 12.5,21 16.2,19.7 14.8,17.3 "}),(0,o.jsx)("path",{fill:"#FFFFFF",d:"M13.1,13.8h-1.5v5.6c0,0.2-0.1,0.3-0.3,0.3l-4.1,0.9v1.2h10.3v-1.2l-4.1-0.9c-0.2,0-0.3-0.2-0.3-0.3L13.1,13.8"}),(0,o.jsx)("circle",{cx:"12.5",cy:"12.5",r:"11.5",fill:"#807F80",fillOpacity:"0",onPointerDown:u,onPointerMove:x,onPointerUp:f,style:{cursor:"move"}})]}),"hsr"===h&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:(0,o.jsx)("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),(0,o.jsxs)("g",{id:"hsr",transform:"scale(0.33)",children:[(0,o.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798}),(0,o.jsxs)("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[(0,o.jsx)("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),(0,o.jsx)("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,o.jsx)("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),(0,o.jsx)("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),(0,o.jsx)("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,o.jsx)("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),(0,o.jsx)("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,o.jsx)("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,o.jsx)("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),(0,o.jsx)("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,o.jsx)("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),(0,o.jsx)("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]}),(0,o.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798,fillOpacity:"0",onPointerDown:u,onPointerMove:x,onPointerUp:f,style:{cursor:"move"}})]})]}),"airport_hk"===h&&(0,o.jsxs)("g",{id:"airport_hk",transform:"scale(0.33)",children:[(0,o.jsx)("rect",{x:"-29.35",fill:"#012639",width:"58.7",height:"58.7"}),(0,o.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"}),(0,o.jsx)("rect",{fill:"#012639",x:"-29.35",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:u,onPointerMove:x,onPointerUp:f,style:{cursor:"move"}})]}),"disney_hk"===h&&(0,o.jsxs)("g",{id:"disney_hk",transform:"scale(0.33)",children:[(0,o.jsx)("rect",{x:"-29.35",fill:"#012639",width:"58.7",height:"58.7"}),(0,o.jsx)("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"}),(0,o.jsx)("rect",{fill:"#012639",x:"-29.35",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:u,onPointerMove:x,onPointerUp:f,style:{cursor:"move"}})]}),"ngong_ping_360"===h&&(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("g",{id:"ngong_ping_360",transform:"translate(-179,-161)scale(0.33)",children:[(0,o.jsx)("rect",{x:"270.1",y:"270.4",fill:"#012639",width:"58.7",height:"58.7"}),(0,o.jsx)("polygon",{fill:"#FFFFFF",points:"277.2,274.7 297.4,280.1 297.4,278.6 277.2,273.2 "}),(0,o.jsx)("polygon",{fill:"#FFFFFF",points:"301.4,281.2 321.7,286.6 321.7,285.1 301.4,279.7 "}),(0,o.jsx)("path",{fill:"#FFFFFF",d:"M312.4,326c0,0.1-0.2,0.2-0.3,0.2h-1.1c-0.2,0-0.3-0.1-0.3-0.3c0,0,0-0.1,0-0.1l0.8-2.4h-23.9l0.8,2.4 c0,0,0,0.1,0,0.1c0,0.2-0.1,0.3-0.3,0.3h-1.1c-0.1,0-0.3-0.1-0.3-0.2l-3.8-13.9c-1-3.6-0.3-8.2,0.4-10.5l4.7-14.9 c0.2-0.8,0.5-0.9,0.8-0.9h1.2l-0.4,1.2h8.7v-10.2c0-0.2,0.2-0.4,0.4-0.4h1.8c0.2,0,0.4,0.2,0.4,0.4v10.2h8.7l-0.4-1.2h1.2 c0.3,0,0.6,0.1,0.8,0.9l4.7,14.9c0.7,2.3,1.4,6.8,0.4,10.5L312.4,326z"}),(0,o.jsx)("path",{fill:"#012639",d:"M288.4,289.9v19c0,0.3-0.2,0.5-0.5,0.5h-4c-0.3-3.2,0.4-6,1-8.3L288.4,289.9z"}),(0,o.jsx)("path",{fill:"#012639",d:"M310.5,289.9v19c0,0.3,0.2,0.5,0.5,0.5h4c0.3-3.2-0.4-6-1-8.3L310.5,289.9z"}),(0,o.jsx)("path",{fill:"#012639",d:"M290.4,289.9h7.7c0.3,0,0.5,0.2,0.5,0.5v18.5c0,0.3-0.2,0.5-0.5,0.5h-7.7c-0.3,0-0.5-0.2-0.5-0.5v-18.5 C289.9,290.2,290.2,289.9,290.4,289.9"}),(0,o.jsx)("path",{fill:"#012639",d:"M300.7,289.9h7.8c0.3,0,0.5,0.2,0.5,0.5v18.5c0,0.3-0.2,0.5-0.5,0.5h-7.8c-0.3,0-0.5-0.2-0.5-0.5v-18.5 C300.2,290.2,300.4,289.9,300.7,289.9"}),(0,o.jsx)("rect",{x:"270.1",y:"270.4",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:u,onPointerMove:x,onPointerUp:f,style:{cursor:"move"}})]})})]})}),[t,n,i,h,u,x,f])},icon:(0,o.jsx)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:(0,o.jsxs)("g",{transform:"translate(12, 0)scale(0.4)",children:[(0,o.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"currentColor"}),(0,o.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]})}),defaultAttrs:A,fields:L,metadata:{displayName:"panel.details.node.facilities.displayName",tags:[]}},U=n(8686),E={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[h.jk.Shanghai,"jsr","#000000",h.AJ.white]},O=[{type:"textarea",label:"panel.details.node.text.content",value:function(e){return(null!==e&&void 0!==e?e:E).content},onChange:function(e,t){var n=null!==t&&void 0!==t?t:E;return n.content=e.toString(),n}},{type:"input",label:"panel.details.node.text.fontSize",value:function(e){return(null!==e&&void 0!==e?e:E).fontSize},validator:function(e){return Number.isInteger(e)&&Number(e)>0},onChange:function(e,t){var n=null!==t&&void 0!==t?t:E;return n.fontSize=Number(e),n}},{type:"input",label:"panel.details.node.text.lineHeight",value:function(e){return(null!==e&&void 0!==e?e:E).lineHeight},validator:function(e){return Number.isInteger(e)&&Number(e)>0},onChange:function(e,t){var n=null!==t&&void 0!==t?t:E;return n.lineHeight=Number(e),n}},{type:"select",label:"panel.details.node.text.textAnchor",value:function(e){return(null!==e&&void 0!==e?e:E).textAnchor},options:{start:"start",middle:"middle",end:"end"},onChange:function(e,t){var n=null!==t&&void 0!==t?t:E;return n.textAnchor=e,n}},{type:"select",label:"panel.details.node.text.dominantBaseline",value:function(e){return(null!==e&&void 0!==e?e:E).dominantBaseline},options:{auto:"auto",middle:"middle",hanging:"hanging"},onChange:function(e,t){var n=null!==t&&void 0!==t?t:E;return n.dominantBaseline=e,n}},{type:"select",label:"panel.details.node.text.language",value:function(e){return(null!==e&&void 0!==e?e:E).language},options:{zh:"Chinese",en:"English",mtr__zh:"MTR Chinese",mtr__en:"MTR English"},onChange:function(e,t){var n=null!==t&&void 0!==t?t:E;return n.language=e.toString(),n}},{type:"custom",component:(0,o.jsx)(u.S,{type:r.Z.Text,defaultAttrs:E})}],T={component:function(e){var t=e.id,n=e.x,i=e.y,l=e.attrs,r=e.handlePointerDown,s=e.handlePointerMove,c=e.handlePointerUp,h=null!==l&&void 0!==l?l:E,u=h.content,x=void 0===u?E.content:u,f=h.fontSize,m=void 0===f?E.fontSize:f,p=h.lineHeight,g=void 0===p?E.lineHeight:p,v=h.textAnchor,y=void 0===v?E.textAnchor:v,j=h.dominantBaseline,w=void 0===j?E.dominantBaseline:j,F=h.language,b=void 0===F?E.language:F,P=h.color,B=void 0===P?E.color:P,N=a.useRef(null),S=a.useState({width:12}),k=(0,d.Z)(S,2),M=k[0],z=k[1];a.useEffect((function(){return z(N.current.getBBox())}),[x,z,N]);var C=a.useCallback((function(e){return r(t,e)}),[t,r]),_=a.useCallback((function(e){return s(t,e)}),[t,s]),Z=a.useCallback((function(e){return c(t,e)}),[t,c]);return a.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(i,")"),children:[(0,o.jsx)(U.i7,{ref:N,text:x.split("\n"),className:"rmp-name-station rmp-name__".concat(b),fontSize:m,lineHeight:g,textAnchor:y,dominantBaseline:w,fill:B[2],grow:"down"}),(0,o.jsx)("rect",{fill:"white",fillOpacity:"0",x:M.x-1.5,y:M.y-1.5,width:M.width+3,height:M.height+3,onPointerDown:C,onPointerMove:_,onPointerUp:Z,style:{cursor:"move"}})]})}),[t,n,i,x,m,g,y,w,b,B,M,C,_,Z])},icon:(0,o.jsx)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:(0,o.jsx)("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),defaultAttrs:E,fields:O,metadata:{displayName:"panel.details.node.text.displayName",tags:[]}},H=(i={},(0,l.Z)(i,r.Z.Virtual,s),(0,l.Z)(i,r.Z.ShmetroNumLineBadge,m),(0,l.Z)(i,r.Z.ShmetroTextLineBadge,v),(0,l.Z)(i,r.Z.GzmtrLineBadge,S),(0,l.Z)(i,r.Z.BjsubwayNumLineBadge,z),(0,l.Z)(i,r.Z.BjsubwayTextLineBadge,Z),(0,l.Z)(i,r.Z.Facilities,D),(0,l.Z)(i,r.Z.Text,T),i)}}]);
//# sourceMappingURL=6882.67408ac2.chunk.js.map