!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,l,a,o=[],s=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=l.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(u){c=!0,i=u}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-e1cbfd40.js","./chakra-legacy-6a2b2acd.js","./react-legacy-d8ea2a5a.js","./stations-legacy-03300470.js"],(function(e,l){"use strict";var a,o,s,c,u,h,d;return{setters:[function(e){a=e.C,o=e.v,s=e.am,c=e.J},function(e){u=e.j},function(e){h=e.b},function(e){d=e.M}],execute:function(){var l,f={component:function(e){var t=e.id,n=e.x,r=e.y,i=e.handlePointerDown,l=e.handlePointerMove,a=e.handlePointerUp,o=h.useCallback((function(e){return i(t,e)}),[t,i]),s=h.useCallback((function(e){return l(t,e)}),[t,l]),c=h.useCallback((function(e){return a(t,e)}),[t,a]);return h.useMemo((function(){return u.jsxs("g",{id:t,transform:"translate(".concat(n,", ").concat(r,")rotate(45)"),children:[u.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),u.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),u.jsx("circle",{id:"virtual_circle_".concat(t),r:5,stroke:"black",fill:"white",fillOpacity:"0",onPointerDown:o,onPointerMove:s,onPointerUp:c,style:{cursor:"move"}})]})}),[t,n,r,o,s,c])},icon:u.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[u.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),u.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),u.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),defaultAttrs:{},fields:[],metadata:{displayName:"panel.details.node.virtual.displayName",tags:[]}},m={num:1,color:[a.Shanghai,"sh1","#E4002B",o.white]},x=[{type:"input",label:"panel.details.node.shmetroNumLineBadge.num",value:function(e){return(null!=e?e:m).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,t){var n=null!=t?t:m;return Number.isNaN(e)||(n.num=Number(e)),n}},{type:"custom",component:u.jsx(s,{type:c.ShmetroNumLineBadge,defaultAttrs:m})}],p={component:function(e){var t=e.id,n=e.x,l=e.y,a=e.attrs,o=e.handlePointerDown,s=e.handlePointerMove,c=e.handlePointerUp,d=null!=a?a:m,f=d.num,x=void 0===f?m.num:f,p=d.color,y=void 0===p?m.color:p,g=i(x>=10?[22.67,10.75]:[21,10],2),j=g[0],v=g[1],w=h.useCallback((function(e){return o(t,e)}),[t,o]),b=h.useCallback((function(e){return s(t,e)}),[t,s]),F=h.useCallback((function(e){return c(t,e)}),[t,c]);return h.useMemo((function(){return u.jsxs("g",{id:t,transform:"translate(".concat(n,", ").concat(l,")"),children:[u.jsx("rect",{fill:y[2],width:j,height:"22.67"}),u.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:v,y:"19",fill:y[3],fontSize:"21.33",letterSpacing:"-1.75",children:x}),u.jsx("text",{className:"rmp-name__zh",x:j+2,y:"12",fontSize:"14.67",children:"号线"}),u.jsxs("text",{className:"rmp-name__en",x:j+4,y:"21.5",fontSize:"8",children:["Line ",x]}),u.jsx("rect",{fill:"white",fillOpacity:"0",width:j,height:"22.67",onPointerDown:w,onPointerMove:b,onPointerUp:F,style:{cursor:"move"}})]})}),[t,n,l,x].concat(r(y),[w,b,F]))},icon:u.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[u.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),u.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),u.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),u.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),defaultAttrs:m,fields:x,metadata:{displayName:"panel.details.node.shmetroNumLineBadge.displayName",tags:[]}},y={names:["浦江线","Pujiang Line"],color:[a.Shanghai,"pjl","#B5B5B6",o.white]},g=[{type:"input",label:"panel.details.node.shmetroTextLineBadge.nameZh",value:function(e){return(null!=e?e:y).names[0]},onChange:function(e,t){var n=null!=t?t:y;return n.names[0]=e.toString(),n}},{type:"input",label:"panel.details.node.shmetroTextLineBadge.nameEn",value:function(e){return(null!=e?e:y).names[1]},onChange:function(e,t){var n=null!=t?t:y;return n.names[1]=e.toString(),n}},{type:"custom",component:u.jsx(s,{type:c.ShmetroTextLineBadge,defaultAttrs:y})}],j={component:function(e){var t=e.id,n=e.x,l=e.y,a=e.attrs,o=e.handlePointerDown,s=e.handlePointerMove,c=e.handlePointerUp,d=null!=a?a:y,f=d.names,m=void 0===f?y.names:f,x=d.color,p=void 0===x?y.color:x,g=h.useRef(null),j=i(h.useState({width:12}),2),v=j[0],w=j[1];h.useEffect((function(){return w(g.current.getBBox())}),[].concat(r(m),[w,g]));var b=h.useCallback((function(e){return o(t,e)}),[t,o]),F=h.useCallback((function(e){return s(t,e)}),[t,s]),P=h.useCallback((function(e){return c(t,e)}),[t,c]);return h.useMemo((function(){return u.jsxs("g",{id:t,transform:"translate(".concat(n,", ").concat(l,")"),children:[u.jsx("rect",{fill:p[2],x:"0",width:v.width+7,height:"21"}),u.jsxs("g",{ref:g,children:[u.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(v.width+7)/2,y:"4",fontSize:"10",fill:p[3],letterSpacing:"-0.25",children:m[0]}),u.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(v.width+7)/2,y:"13",fontSize:"5",fill:p[3],letterSpacing:"-0.25",children:m[1]})]}),u.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:v.width+7,height:"21",onPointerDown:b,onPointerMove:F,onPointerUp:P,style:{cursor:"move"}})]})}),[t,n,l].concat(r(m),[v],r(p),[b,F,P]))},icon:u.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[u.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),u.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),u.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),defaultAttrs:y,fields:g,metadata:{displayName:"panel.details.node.shmetroTextLineBadge.displayName",tags:[]}},v=function(e){var t=e.lineName,n=e.commonPart,r=h.useRef(null),l=i(h.useState({x:0,height:0,width:0}),2),a=l[0],o=l[1];h.useEffect((function(){r.current&&o(r.current.getBBox())}),[t.toString()]);var s=b/Math.max(b,a.width),c=(-a.x-a.width/2)*s,d=a.height*(1-s)*1.2/2;return u.jsx("g",{ref:r,transform:"translate(".concat(c,",").concat(d,")scale(").concat(s,")"),children:u.jsxs("text",{className:"rmp-name__zh",fontSize:14,y:12,textAnchor:"end",children:[n,u.jsx("tspan",{className:"rmp-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:t[0].slice(n.length).trim()}),u.jsx("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:t[1].slice(n.length).trim()})]})})},w=function(e){return u.jsx("rect",function(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({x:-22.5,height:24,width:45,rx:4.5},e))},b=42,F=function(e){var t=e.lineName,n=e.foregroundColour,r=e.backgroundColour,l=e.passed,a=i(P(t),2),s=a[0],c=a[1],d=h.useRef(null),f=h.useRef(null),m=i(h.useState({width:0}),2),x=m[0],p=m[1],y=i(h.useState({width:0}),2),g=y[0],j=y[1];h.useEffect((function(){d.current&&p(d.current.getBBox()),f.current&&j(f.current.getBBox())}),[t.toString()]);var F=b/Math.max(b,x.width),S=b/Math.max(b,g.width),B={nameZh:{y:7.3+13.5*(1-F)*F/2},nameEn:{y:19.5-9*(1-S)*S/2}};return u.jsxs("g",{textAnchor:"middle",fill:l?o.white:n,children:[u.jsx(w,{fill:l?"#aaa":r}),2===s?u.jsx(v,{lineName:t,commonPart:c}):u.jsxs(u.Fragment,{children:[u.jsx("text",{ref:d,className:"rmp-name__zh",fontSize:12,transform:"translate(0,".concat(B.nameZh.y,")scale(").concat(F,")"),dominantBaseline:"central",children:1===s?u.jsxs(u.Fragment,{children:[u.jsx("tspan",{fontSize:16,dy:.7,className:"rmp-name__zh",dominantBaseline:"central",children:c}),u.jsx("tspan",{dy:-.7,className:"rmp-name__zh",dominantBaseline:"central",children:t[0].slice(c.length)})]}):t[0]}),u.jsx("text",{ref:f,className:"rmp-name__en",fontSize:8,transform:"translate(0,".concat(B.nameEn.y,")scale(").concat(S,")"),dominantBaseline:"middle",children:t[1]})]})]})},P=function(e){var t=e[0].match(/^(\d+)\D+$/);if(t)return[1,t[1]];var n=e.map((function(e){return e.match(/^(\w+).+$/)}));return n[0]&&n[1]&&n[0][1]===n[1][1]?[2,n[0][1]]:[3,""]},S={names:["1号线","Line 1"],color:[a.Guangzhou,"gz1","#F3D03E",o.black]},B=[{type:"input",label:"panel.details.node.gzmtrLineBadge.nameZh",value:function(e){return(null!=e?e:S).names[0]},onChange:function(e,t){var n=null!=t?t:S;return n.names[0]=e.toString(),n}},{type:"input",label:"panel.details.node.gzmtrLineBadge.nameEn",value:function(e){return(null!=e?e:S).names[1]},onChange:function(e,t){var n=null!=t?t:S;return n.names[1]=e.toString(),n}},{type:"custom",component:u.jsx(s,{type:c.GzmtrLineBadge,defaultAttrs:S})}],N={component:function(e){var t=e.id,n=e.x,i=e.y,l=e.attrs,a=e.handlePointerDown,o=e.handlePointerMove,s=e.handlePointerUp,c=null!=l?l:S,d=c.names,f=void 0===d?S.names:d,m=c.color,x=void 0===m?S.color:m,p=h.useCallback((function(e){return a(t,e)}),[t,a]),y=h.useCallback((function(e){return o(t,e)}),[t,o]),g=h.useCallback((function(e){return s(t,e)}),[t,s]);return h.useMemo((function(){return u.jsxs("g",{id:t,transform:"translate(".concat(n,", ").concat(i,")"),children:[u.jsx(F,{lineName:f,foregroundColour:x[3],backgroundColour:x[2]}),u.jsx("rect",{fill:"white",fillOpacity:"0",x:"-22.5",width:"45",height:"24",rx:"4.5",onPointerDown:p,onPointerMove:y,onPointerUp:g,style:{cursor:"move"}})]})}),[t,n,i].concat(r(f),r(x),[p,y,g]))},icon:u.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[u.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),u.jsx("text",{x:"12",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"1号线"}),u.jsx("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"5",fill:"white",children:"Line 1"})]}),defaultAttrs:S,fields:B,metadata:{displayName:"panel.details.node.gzmtrLineBadge.displayName",tags:[]}},M={num:1,color:[a.Beijing,"bj1","#c23a30",o.white]},z=[{type:"input",label:"panel.details.node.bjsubwayNumLineBadge.num",value:function(e){return(null!=e?e:M).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,t){var n=null!=t?t:M;return Number.isNaN(e)||(n.num=Number(e)),n}},{type:"custom",component:u.jsx(s,{type:c.BjsubwayNumLineBadge,defaultAttrs:M})}],C={component:function(e){var t=e.id,n=e.x,l=e.y,a=e.attrs,s=e.handlePointerDown,c=e.handlePointerMove,d=e.handlePointerUp,f=null!=a?a:M,m=f.num,x=void 0===m?M.num:m,p=f.color,y=void 0===p?M.color:p,g=h.useRef(null),j=i(h.useState({width:12}),2),v=j[0],w=j[1];h.useEffect((function(){return w(g.current.getBBox())}),[x,w,g]);var b=h.useCallback((function(e){return s(t,e)}),[t,s]),F=h.useCallback((function(e){return c(t,e)}),[t,c]),P=h.useCallback((function(e){return d(t,e)}),[t,d]),S=y[3]===o.black?"#003670":o.white;return h.useMemo((function(){return u.jsxs("g",{id:t,transform:"translate(".concat(n,", ").concat(l,")scale(1.5)"),children:[u.jsx("rect",{fill:y[2],x:"0",width:v.width+23,height:"16",rx:"2"}),u.jsx("text",{ref:g,className:"rmp-name__zh",textAnchor:"middle",x:v.width/2+3,y:"13.5",fill:S,children:x}),u.jsx("text",{className:"rmp-name__zh",x:v.width+4,y:"8.5",fontSize:"8",fill:S,children:"号线"}),u.jsxs("text",{className:"rmp-name__en",x:v.width+6,y:"13.5",fontSize:"4",fill:S,children:["Line ",x]}),u.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:v.width+24,height:"16",rx:"2",onPointerDown:b,onPointerMove:F,onPointerUp:P,style:{cursor:"move"}})]})}),[t,n,l,x].concat(r(y),[v,b,F,P]))},icon:u.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[u.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),u.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),u.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),u.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),defaultAttrs:M,fields:z,metadata:{displayName:"panel.details.node.bjsubwayNumLineBadge.displayName",tags:[]}},k={names:["八通线","Batong Line"],color:[a.Beijing,"bj1","#c23a30",o.white]},_=[{type:"input",label:"panel.details.node.bjsubwayTextLineBadge.nameZh",value:function(e){return(null!=e?e:k).names[0]},onChange:function(e,t){var n=null!=t?t:k;return n.names[0]=e.toString(),n}},{type:"input",label:"panel.details.node.bjsubwayTextLineBadge.nameEn",value:function(e){return(null!=e?e:k).names[1]},onChange:function(e,t){var n=null!=t?t:k;return n.names[1]=e.toString(),n}},{type:"custom",component:u.jsx(s,{type:c.BjsubwayTextLineBadge,defaultAttrs:k})}],A={component:function(e){var t=e.id,n=e.x,l=e.y,a=e.attrs,s=e.handlePointerDown,c=e.handlePointerMove,d=e.handlePointerUp,f=null!=a?a:k,m=f.names,x=void 0===m?k.names:m,p=f.color,y=void 0===p?k.color:p,g=h.useRef(null),j=i(h.useState({width:12}),2),v=j[0],w=j[1];h.useEffect((function(){return w(g.current.getBBox())}),[].concat(r(x),[w,g]));var b=h.useCallback((function(e){return s(t,e)}),[t,s]),F=h.useCallback((function(e){return c(t,e)}),[t,c]),P=h.useCallback((function(e){return d(t,e)}),[t,d]),S=y[3]===o.black?"#003670":o.white;return h.useMemo((function(){return u.jsxs("g",{id:t,transform:"translate(".concat(n,", ").concat(l,")scale(1.5)"),children:[u.jsx("rect",{fill:y[2],x:"0",width:v.width+6,height:"16",rx:"2"}),u.jsxs("g",{ref:g,children:[u.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(v.width+6)/2,y:"8",fontSize:"7",fill:S,children:x[0]}),u.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(v.width+6)/2,y:"13.5",fontSize:"4",fill:S,children:x[1]})]}),u.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:v.width+3,height:"16",rx:"2",onPointerDown:b,onPointerMove:F,onPointerUp:P,style:{cursor:"move"}})]})}),[t,n,l].concat(r(x),[v],r(y),[b,F,P]))},icon:u.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[u.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),u.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),u.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),defaultAttrs:k,fields:_,metadata:{displayName:"panel.details.node.bjsubwayTextLineBadge.displayName",tags:[]}},L={type:"airport"},O=[{type:"select",label:"panel.details.node.facilities.type",value:function(e){return(null!=e?e:L).type},options:{airport:"airport",maglev:"maglev",disney:"disney",railway:"railway",hsr:"hsr",airport_hk:"airport Hongkong",disney_hk:"disney Hongkong",ngong_ping_360:"Ngong Ping 360"},onChange:function(e,t){var n=null!=t?t:L;return n.type=e,n}}],D={component:function(e){var t=e.id,n=e.x,r=e.y,i=e.attrs,l=e.handlePointerDown,a=e.handlePointerMove,o=e.handlePointerUp,s=(null!=i?i:L).type,c=void 0===s?L.type:s,d=h.useCallback((function(e){return l(t,e)}),[t,l]),f=h.useCallback((function(e){return a(t,e)}),[t,a]),m=h.useCallback((function(e){return o(t,e)}),[t,o]);return h.useMemo((function(){return u.jsxs("g",{id:t,transform:"translate(".concat(n,", ").concat(r,")"),children:["airport"===c&&u.jsxs("g",{id:"airport",transform:"translate(-12.5,0)",children:[u.jsx("circle",{fill:"#828282",cx:"12.5",cy:"12.5",r:"11.5"}),u.jsx("line",{fill:"none",stroke:"#FFFFFF",strokeWidth:"2.167",strokeLinecap:"round",strokeMiterlimit:"10",x1:"12.5",y1:"18.7",x2:"12.5",y2:"3.7"}),u.jsx("polyline",{fill:"#FFFFFF",points:"11.7,9.3 3.3,14.3 3.3,16.7 11.7,13.7 "}),u.jsx("polyline",{fill:"#FFFFFF",points:"13.3,9.3 21.7,14.3 21.7,16.7 13.3,13.7 "}),u.jsx("polyline",{fill:"#FFFFFF",points:"11.7,18.3 9.7,19.7 9.7,21.7 12.3,20.7 12.7,20.7 15.3,21.7 15.3,19.7 13.3,18.3 "}),u.jsx("circle",{fill:"#828282",fillOpacity:"0",cx:"12.5",cy:"12.5",r:"11.5",onPointerDown:d,onPointerMove:f,onPointerUp:m,style:{cursor:"move"}})]}),"disney"===c&&u.jsxs("g",{id:"disney",transform:"scale(0.426)",children:[u.jsx("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey"}),u.jsx("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"}),u.jsx("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey",fillOpacity:"0",onPointerDown:d,onPointerMove:f,onPointerUp:m,style:{cursor:"move"}})]}),"maglev"===c&&u.jsxs("g",{id:"maglev",transform:"translate(-12.5,0)",children:[u.jsx("path",{fill:"#10716F",d:"M23.8,22.4c0,0.8-0.6,1.4-1.4,1.4H2.6c-0.8,0-1.4-0.6-1.4-1.4V2.6c0-0.8,0.6-1.4,1.4-1.4h19.8\n\t\tc0.8,0,1.4,0.6,1.4,1.4V22.4L23.8,22.4z"}),u.jsx("path",{fill:"#FFFFFF",d:"M12.5,2.8l-1,1.7L7.2,5C5.9,5.1,4.8,6.2,4.8,7.6v6.2c0,0.9,0.7,1.7,1.7,1.7h12c0.9,0,1.7-0.7,1.7-1.7V7.6\n\tc0-1.4-1-2.5-2.4-2.7l-4.3-0.4"}),u.jsx("polyline",{fill:"#10716F",points:"13.2,8.8 13.2,11.8 18,11.8 18,8.5 13.2,8.5 "}),u.jsx("polyline",{fill:"#10716F",points:"7,8.8 7,11.8 11.8,11.8 11.8,8.5 7,8.5 "}),u.jsx("path",{fill:"#FFFFFF",d:"M4.8,15.3v4c0,1.1,0.7,2,1.8,2h2v-1.7H6.5v-2.3h12v2.3h-2.2v1.7h2c1.1,0,1.8-0.7,1.8-1.8v-4.3v0.2\n\tc-0.3,0.4-0.8,0.7-1.3,0.7H6.2C5.7,16,5.2,15.8,4.8,15.3L4.8,15.3z"}),u.jsx("path",{d:"M23.8,22.4c0,0.8-0.6,1.4-1.4,1.4H2.6c-0.8,0-1.4-0.6-1.4-1.4V2.6c0-0.8,0.6-1.4,1.4-1.4h19.8\n\t\tc0.8,0,1.4,0.6,1.4,1.4V22.4L23.8,22.4z",fill:"#10716F",fillOpacity:"0",onPointerDown:d,onPointerMove:f,onPointerUp:m,style:{cursor:"move"}})]}),"railway"===c&&u.jsxs("g",{id:"railway",transform:"translate(-12.5,0)",children:[u.jsx("circle",{fill:"#807F80",cx:"12.5",cy:"12.5",r:"11.5"}),u.jsx("line",{fill:"none",x1:"10.8",y1:"3.8",x2:"10.8",y2:"4.8"}),u.jsx("polyline",{fill:"#FFFFFF",points:"10.8,5 10.8,3.8 14.2,3.8 14.2,5 "}),u.jsx("path",{fill:"#FFFFFF",d:"M13.8,14.1h-2.7c-0.8,0-1.5-0.7-1.5-1.5v-0.2c0-0.8,0.7-1.5,1.5-1.5h2.7c0.8,0,1.5,0.7,1.5,1.5v0.2\n\tC15.3,13.4,14.7,14.1,13.8,14.1z"}),u.jsx("circle",{fill:"none",stroke:"#FFFFFF",strokeWidth:"2",strokeMiterlimit:"10",cx:"12.5",cy:"12.5",r:"6.7"}),u.jsx("polyline",{fill:"#807F80",points:"10.2,17.3 8.8,20 12.5,21 16.2,19.7 14.8,17.3 "}),u.jsx("path",{fill:"#FFFFFF",d:"M13.1,13.8h-1.5v5.6c0,0.2-0.1,0.3-0.3,0.3l-4.1,0.9v1.2h10.3v-1.2l-4.1-0.9c-0.2,0-0.3-0.2-0.3-0.3L13.1,13.8"}),u.jsx("circle",{cx:"12.5",cy:"12.5",r:"11.5",fill:"#807F80",fillOpacity:"0",onPointerDown:d,onPointerMove:f,onPointerUp:m,style:{cursor:"move"}})]}),"hsr"===c&&u.jsxs(u.Fragment,{children:[u.jsx("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:u.jsx("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),u.jsxs("g",{id:"hsr",transform:"scale(0.33)",children:[u.jsx("rect",{x:-29.33899,width:58.67798,height:58.67798}),u.jsxs("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[u.jsx("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),u.jsx("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),u.jsx("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),u.jsx("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),u.jsx("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),u.jsx("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),u.jsx("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),u.jsx("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),u.jsx("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),u.jsx("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),u.jsx("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),u.jsx("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]}),u.jsx("rect",{x:-29.33899,width:58.67798,height:58.67798,fillOpacity:"0",onPointerDown:d,onPointerMove:f,onPointerUp:m,style:{cursor:"move"}})]})]}),"airport_hk"===c&&u.jsxs("g",{id:"airport_hk",transform:"scale(0.33)",children:[u.jsx("rect",{x:"-29.35",fill:"#012639",width:"58.7",height:"58.7"}),u.jsx("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"}),u.jsx("rect",{fill:"#012639",x:"-29.35",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:d,onPointerMove:f,onPointerUp:m,style:{cursor:"move"}})]}),"disney_hk"===c&&u.jsxs("g",{id:"disney_hk",transform:"scale(0.33)",children:[u.jsx("rect",{x:"-29.35",fill:"#012639",width:"58.7",height:"58.7"}),u.jsx("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"}),u.jsx("rect",{fill:"#012639",x:"-29.35",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:d,onPointerMove:f,onPointerUp:m,style:{cursor:"move"}})]}),"ngong_ping_360"===c&&u.jsx(u.Fragment,{children:u.jsxs("g",{id:"ngong_ping_360",transform:"translate(-179,-161)scale(0.33)",children:[u.jsx("rect",{x:"270.1",y:"270.4",fill:"#012639",width:"58.7",height:"58.7"}),u.jsx("polygon",{fill:"#FFFFFF",points:"277.2,274.7 297.4,280.1 297.4,278.6 277.2,273.2 "}),u.jsx("polygon",{fill:"#FFFFFF",points:"301.4,281.2 321.7,286.6 321.7,285.1 301.4,279.7 "}),u.jsx("path",{fill:"#FFFFFF",d:"M312.4,326c0,0.1-0.2,0.2-0.3,0.2h-1.1c-0.2,0-0.3-0.1-0.3-0.3c0,0,0-0.1,0-0.1l0.8-2.4h-23.9l0.8,2.4\n\tc0,0,0,0.1,0,0.1c0,0.2-0.1,0.3-0.3,0.3h-1.1c-0.1,0-0.3-0.1-0.3-0.2l-3.8-13.9c-1-3.6-0.3-8.2,0.4-10.5l4.7-14.9\n\tc0.2-0.8,0.5-0.9,0.8-0.9h1.2l-0.4,1.2h8.7v-10.2c0-0.2,0.2-0.4,0.4-0.4h1.8c0.2,0,0.4,0.2,0.4,0.4v10.2h8.7l-0.4-1.2h1.2\n\tc0.3,0,0.6,0.1,0.8,0.9l4.7,14.9c0.7,2.3,1.4,6.8,0.4,10.5L312.4,326z"}),u.jsx("path",{fill:"#012639",d:"M288.4,289.9v19c0,0.3-0.2,0.5-0.5,0.5h-4c-0.3-3.2,0.4-6,1-8.3L288.4,289.9z"}),u.jsx("path",{fill:"#012639",d:"M310.5,289.9v19c0,0.3,0.2,0.5,0.5,0.5h4c0.3-3.2-0.4-6-1-8.3L310.5,289.9z"}),u.jsx("path",{fill:"#012639",d:"M290.4,289.9h7.7c0.3,0,0.5,0.2,0.5,0.5v18.5c0,0.3-0.2,0.5-0.5,0.5h-7.7c-0.3,0-0.5-0.2-0.5-0.5v-18.5\n\tC289.9,290.2,290.2,289.9,290.4,289.9"}),u.jsx("path",{fill:"#012639",d:"M300.7,289.9h7.8c0.3,0,0.5,0.2,0.5,0.5v18.5c0,0.3-0.2,0.5-0.5,0.5h-7.8c-0.3,0-0.5-0.2-0.5-0.5v-18.5\n\tC300.2,290.2,300.4,289.9,300.7,289.9"}),u.jsx("rect",{x:"270.1",y:"270.4",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:d,onPointerMove:f,onPointerUp:m,style:{cursor:"move"}})]})})]})}),[t,n,r,c,d,f,m])},icon:u.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:u.jsxs("g",{transform:"translate(12, 0)scale(0.4)",children:[u.jsx("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"currentColor"}),u.jsx("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]})}),defaultAttrs:L,fields:O,metadata:{displayName:"panel.details.node.facilities.displayName",tags:[]}},U={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[a.Shanghai,"jsr","#000000",o.white]},E=[{type:"textarea",label:"panel.details.node.text.content",value:function(e){return(null!=e?e:U).content},onChange:function(e,t){var n=null!=t?t:U;return n.content=e.toString(),n}},{type:"input",label:"panel.details.node.text.fontSize",value:function(e){return(null!=e?e:U).fontSize},validator:function(e){return Number.isInteger(e)&&Number(e)>0},onChange:function(e,t){var n=null!=t?t:U;return n.fontSize=Number(e),n}},{type:"input",label:"panel.details.node.text.lineHeight",value:function(e){return(null!=e?e:U).lineHeight},validator:function(e){return Number.isInteger(e)&&Number(e)>0},onChange:function(e,t){var n=null!=t?t:U;return n.lineHeight=Number(e),n}},{type:"select",label:"panel.details.node.text.textAnchor",value:function(e){return(null!=e?e:U).textAnchor},options:{start:"start",middle:"middle",end:"end"},onChange:function(e,t){var n=null!=t?t:U;return n.textAnchor=e,n}},{type:"select",label:"panel.details.node.text.dominantBaseline",value:function(e){return(null!=e?e:U).dominantBaseline},options:{auto:"auto",middle:"middle",hanging:"hanging"},onChange:function(e,t){var n=null!=t?t:U;return n.dominantBaseline=e,n}},{type:"select",label:"panel.details.node.text.language",value:function(e){return(null!=e?e:U).language},options:{zh:"Chinese",en:"English",mtr__zh:"MTR Chinese",mtr__en:"MTR English"},onChange:function(e,t){var n=null!=t?t:U;return n.language=e.toString(),n}},{type:"custom",component:u.jsx(s,{type:c.Text,defaultAttrs:U})}],T={component:function(e){var t=e.id,n=e.x,r=e.y,l=e.attrs,a=e.handlePointerDown,o=e.handlePointerMove,s=e.handlePointerUp,c=null!=l?l:U,f=c.content,m=void 0===f?U.content:f,x=c.fontSize,p=void 0===x?U.fontSize:x,y=c.lineHeight,g=void 0===y?U.lineHeight:y,j=c.textAnchor,v=void 0===j?U.textAnchor:j,w=c.dominantBaseline,b=void 0===w?U.dominantBaseline:w,F=c.language,P=void 0===F?U.language:F,S=c.color,B=void 0===S?U.color:S,N=h.useRef(null),M=i(h.useState({width:12}),2),z=M[0],C=M[1];h.useEffect((function(){return C(N.current.getBBox())}),[m,C,N]);var k=h.useCallback((function(e){return a(t,e)}),[t,a]),_=h.useCallback((function(e){return o(t,e)}),[t,o]),A=h.useCallback((function(e){return s(t,e)}),[t,s]);return h.useMemo((function(){return u.jsxs("g",{id:t,transform:"translate(".concat(n,", ").concat(r,")"),children:[u.jsx(d,{ref:N,text:m.split("\n"),className:"rmp-name-station rmp-name__".concat(P),fontSize:p,lineHeight:g,textAnchor:v,dominantBaseline:b,fill:B[2],grow:"down"}),u.jsx("rect",{fill:"white",fillOpacity:"0",x:z.x-1.5,y:z.y-1.5,width:z.width+3,height:z.height+3,onPointerDown:k,onPointerMove:_,onPointerUp:A,style:{cursor:"move"}})]})}),[t,n,r,m,p,g,v,b,P,B,z,k,_,A])},icon:u.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:u.jsx("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),defaultAttrs:U,fields:E,metadata:{displayName:"panel.details.node.text.displayName",tags:[]}};e("m",(n(l={},c.Virtual,f),n(l,c.ShmetroNumLineBadge,p),n(l,c.ShmetroTextLineBadge,j),n(l,c.GzmtrLineBadge,N),n(l,c.BjsubwayNumLineBadge,C),n(l,c.BjsubwayTextLineBadge,A),n(l,c.Facilities,D),n(l,c.Text,T),l))}}}))}();
