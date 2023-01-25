"use strict";(self.webpackChunkrmp=self.webpackChunkrmp||[]).push([[6033],{8673:function(e,t,n){n.d(t,{Z:function(){return d}});var r,i=n(4942),a=n(558),l=n(2791),o=n(184),s={component:function(e){var t=e.id,n=e.x1,r=e.y1,i=e.x2,a=e.y2,s=e.newLine,c=e.handleClick,d=l.useCallback((function(e){return c(t,e)}),[t,c]);return l.useMemo((function(){return(0,o.jsxs)("g",{id:t,children:[(0,o.jsx)("line",{x1:n,y1:r,x2:i,y2:a,stroke:"black",strokeWidth:"7",strokeLinecap:"round",pointerEvents:s?"none":void 0}),(0,o.jsx)("line",{x1:n,y1:r,x2:i,y2:a,stroke:"white",strokeWidth:"5",strokeLinecap:"round",pointerEvents:s?"none":void 0}),(0,o.jsx)("line",{x1:n,y1:r,x2:i,y2:a,stroke:"white",strokeOpacity:"0",strokeWidth:"7",strokeLinecap:"round",onClick:s?void 0:d,pointerEvents:s?"none":void 0})]})}),[n,r,i,a,s,d])},icon:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[(0,o.jsx)("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round"}),(0,o.jsx)("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"white",strokeWidth:"3",strokeLinecap:"round"})]}),defaultAttrs:{},fields:[],metadata:{displayName:"panel.details.edge.shmetroVirtualInt.displayName",tags:[]}},c={component:function(e){var t=e.id,n=e.x1,r=e.y1,i=e.x2,a=e.y2,s=e.newLine,c=e.handleClick,d=l.useCallback((function(e){return c(t,e)}),[t,c]);return l.useMemo((function(){return(0,o.jsx)("line",{id:t,x1:n,y1:r,x2:i,y2:a,stroke:"black",strokeWidth:"3",strokeDasharray:"3",onClick:s?void 0:d,pointerEvents:s?"none":void 0})}),[n,r,i,a,s,d])},icon:(0,o.jsx)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:(0,o.jsx)("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"currentColor",strokeWidth:"3",strokeDasharray:"3"})}),defaultAttrs:{},fields:[],metadata:{displayName:"panel.details.edge.gzmtrVirtualInt.displayName",tags:[]}},d=(r={},(0,i.Z)(r,a.x.ShmetroVirtualInt,s),(0,i.Z)(r,a.x.GzmtrVirtualInt,c),r)},443:function(e,t,n){n.d(t,{Z:function(){return _}});var r,i=n(4942),a=n(9704),l=n(2791),o=n(184),s={component:function(e){var t=e.id,n=e.x,r=e.y,i=e.handlePointerDown,a=e.handlePointerMove,s=e.handlePointerUp,c=l.useCallback((function(e){return i(t,e)}),[t,i]),d=l.useCallback((function(e){return a(t,e)}),[t,a]),u=l.useCallback((function(e){return s(t,e)}),[t,s]);return l.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(r,")rotate(45)"),children:[(0,o.jsx)("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),(0,o.jsx)("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),(0,o.jsx)("circle",{id:"virtual_circle_".concat(t),r:5,stroke:"black",fill:"white",fillOpacity:"0",onPointerDown:c,onPointerMove:d,onPointerUp:u,style:{cursor:"move"}})]})}),[t,n,r,c,d,u])},icon:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),(0,o.jsx)("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),(0,o.jsx)("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),defaultAttrs:{},fields:[],metadata:{displayName:"panel.details.node.virtual.displayName",tags:[]}},c=n(3433),d=n(1125),u=n(5477),h={num:1,color:[d.jk.Shanghai,"sh1","#E4002B",d.AJ.white]},x=[{type:"input",label:"panel.details.node.shmetroNumLineBadge.num",value:function(e){return(null!==e&&void 0!==e?e:h).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,t){var n=null!==t&&void 0!==t?t:h;return Number.isNaN(e)||(n.num=Number(e)),n}},{type:"custom",component:(0,o.jsx)(u.S,{type:a.Z.ShmetroNumLineBadge,defaultAttrs:h})}],m={component:function(e){var t=e.id,n=e.x,r=e.y,i=e.attrs,a=e.handlePointerDown,s=e.handlePointerMove,d=e.handlePointerUp,u=null!==i&&void 0!==i?i:h,x=u.num,m=void 0===x?h.num:x,f=u.color,p=void 0===f?h.color:f,y=m>=10?17.5:14.5,v=l.useCallback((function(e){return a(t,e)}),[t,a]),g=l.useCallback((function(e){return s(t,e)}),[t,s]),j=l.useCallback((function(e){return d(t,e)}),[t,d]);return l.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(r,")scale(2)"),children:[(0,o.jsx)("rect",{fill:p[2],x:0,width:y,height:"16"}),(0,o.jsx)("text",{className:"rmp-name__zh",textAnchor:"middle",x:y/2,y:"14",fill:p[3],children:m}),(0,o.jsx)("text",{className:"rmp-name__zh",x:y+2,y:"9",fontSize:"10",children:"\u53f7\u7ebf"}),(0,o.jsxs)("text",{className:"rmp-name__en",x:y+2,y:"16",fontSize:"6",children:["Line ",m]}),(0,o.jsx)("rect",{fill:"white",fillOpacity:"0",x:0,width:y,height:10,onPointerDown:v,onPointerMove:g,onPointerUp:j,style:{cursor:"move"}})]})}),[t,n,r,m].concat((0,c.Z)(p),[v,g,j]))},icon:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[(0,o.jsx)("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),(0,o.jsx)("text",{x:"4",y:"18",fill:"white",children:"1"}),(0,o.jsx)("text",{x:"14",y:"10",fontSize:"5",children:"\u53f7\u7ebf"}),(0,o.jsx)("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),defaultAttrs:h,fields:x,metadata:{displayName:"panel.details.node.shmetroNumLineBadge.displayName",tags:[]}},f=n(9439),p={names:["\u6d66\u6c5f\u7ebf","Pujiang Line"],color:[d.jk.Shanghai,"pjl","#999999",d.AJ.white]},y=[{type:"input",label:"panel.details.node.shmetroTextLineBadge.nameZh",value:function(e){return(null!==e&&void 0!==e?e:p).names[0]},onChange:function(e,t){var n=null!==t&&void 0!==t?t:p;return n.names[0]=e.toString(),n}},{type:"input",label:"panel.details.node.shmetroTextLineBadge.nameEn",value:function(e){return(null!==e&&void 0!==e?e:p).names[1]},onChange:function(e,t){var n=null!==t&&void 0!==t?t:p;return n.names[1]=e.toString(),n}},{type:"custom",component:(0,o.jsx)(u.S,{type:a.Z.ShmetroTextLineBadge,defaultAttrs:p})}],v={component:function(e){var t=e.id,n=e.x,r=e.y,i=e.attrs,a=e.handlePointerDown,s=e.handlePointerMove,d=e.handlePointerUp,u=null!==i&&void 0!==i?i:p,h=u.names,x=void 0===h?p.names:h,m=u.color,y=void 0===m?p.color:m,v=l.useRef(null),g=l.useState({width:12}),j=(0,f.Z)(g,2),w=j[0],k=j[1];l.useEffect((function(){return k(v.current.getBBox())}),[].concat((0,c.Z)(x),[k,v]));var P=l.useCallback((function(e){return a(t,e)}),[t,a]),C=l.useCallback((function(e){return s(t,e)}),[t,s]),b=l.useCallback((function(e){return d(t,e)}),[t,d]);return l.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(r,")scale(2)"),children:[(0,o.jsx)("rect",{fill:y[2],x:0,width:w.width+3,height:"16"}),(0,o.jsxs)("g",{ref:v,children:[(0,o.jsx)("text",{className:"rmp-name__zh",textAnchor:"middle",x:(w.width+3)/2,y:"8",fontSize:"8",fill:y[3],children:x[0]}),(0,o.jsx)("text",{className:"rmp-name__en",textAnchor:"middle",x:(w.width+3)/2,y:"14",fontSize:"6",fill:y[3],children:x[1]})]}),(0,o.jsx)("rect",{fill:"white",fillOpacity:"0",x:"0",width:w.width+3,height:"16",onPointerDown:P,onPointerMove:C,onPointerUp:b,style:{cursor:"move"}})]})}),[t,n,r].concat((0,c.Z)(x),[w],(0,c.Z)(y),[P,C,b]))},icon:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[(0,o.jsx)("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),(0,o.jsx)("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"\u6d66\u6c5f\u7ebf"}),(0,o.jsx)("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),defaultAttrs:p,fields:y,metadata:{displayName:"panel.details.node.shmetroTextLineBadge.displayName",tags:[]}},g={type:"airport"},j=[{type:"select",label:"panel.details.node.FacilitiesAttributes.type",value:function(e){return(null!==e&&void 0!==e?e:g).type},options:{airport:"airport",maglev:"maglev",disney:"disney",railway:"railway",hsr:"hsr"},onChange:function(e,t){var n=null!==t&&void 0!==t?t:g;return n.type=e,n}}],w={component:function(e){var t=e.id,n=e.x,r=e.y,i=e.attrs,a=e.handlePointerDown,s=e.handlePointerMove,c=e.handlePointerUp,d=(null!==i&&void 0!==i?i:g).type,u=void 0===d?g.type:d,h=l.useCallback((function(e){return a(t,e)}),[t,a]),x=l.useCallback((function(e){return s(t,e)}),[t,s]),m=l.useCallback((function(e){return c(t,e)}),[t,c]);return l.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(r,")"),children:["airport"===u&&(0,o.jsxs)("g",{id:"airport",transform:"scale(0.5)",children:[(0,o.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey"}),(0,o.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"}),(0,o.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey",fillOpacity:"0",onPointerDown:h,onPointerMove:x,onPointerUp:m,style:{cursor:"move"}})]}),"maglev"===u&&(0,o.jsxs)("g",{id:"intbox_maglev",transform:"translate(-20,0)scale(0.2)",children:[(0,o.jsx)("rect",{id:"maglev_5",height:"144",width:"130",y:"40",x:"30",fill:"grey"}),(0,o.jsx)("path",{id:"maglev_3",fill:"white",d:"m90,55a40,5 0 0 0 -40,3a5,5 0 0 0 -5,5a5,60 0 0 0 -3,60a5,5 0 0 0 5,5l96,0a5,5 0 0 0 5,-5a5,60 0 0 0 -3,-60a5,5 0 0 0 -5,-5a40,5 0 0 0 -40,-3l-5,-10l-5,10"}),(0,o.jsx)("path",{id:"maglev_4",fill:"white",d:"m90,140l-40,0a10,5 0 0 1 -10,-5l0,25a10,15 0 0 0 10,15l15,0l0,-10l-15,0l0,-15l90,0l0,15l-15,0l0,10l15,0a10,15 0 0 0 10,-15l0,-25a10,5 0 0 1 -10,5l-50,0"}),(0,o.jsx)("rect",{id:"maglev_1",fill:"grey",height:"25",width:"40",y:"80",x:"50"}),(0,o.jsx)("rect",{id:"maglev_2",fill:"grey",height:"25",width:"40",y:"80",x:"100"}),(0,o.jsx)("rect",{id:"maglev_overlay",height:"144",width:"130",y:"40",x:"30",fillOpacity:"0",onPointerDown:h,onPointerMove:x,onPointerUp:m,style:{cursor:"move"}})]}),"disney"===u&&(0,o.jsxs)("g",{id:"disney",transform:"scale(0.5)",children:[(0,o.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey"}),(0,o.jsx)("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"}),(0,o.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey",fillOpacity:"0",onPointerDown:h,onPointerMove:x,onPointerUp:m,style:{cursor:"move"}})]}),"railway"===u&&(0,o.jsxs)("g",{id:"railway",children:[(0,o.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey",transform:"translate(0,-2)scale(0.5)"}),(0,o.jsx)("path",{fill:"white",d:"M169,273.5c0-19,14.7-34.8,33.7-36.3c18.9-1.5,38.1-2.2,57.4-2.2c19.3,0,38.4,0.8,57.3,2.2  c19,1.5,33.7,17.3,33.7,36.3v47.3l-51.3,14.7c-11.2,3.2-18.9,13.4-18.9,25v147.8c0,17.4,12.2,32.3,29.3,35.7l110.6,22.1  c4.9,1,8.4,5.2,8.4,10.2V599H91v-22.7c0-5,3.5-9.2,8.4-10.2L209.9,544c17-3.4,29.3-18.3,29.3-35.7V360.5c0-11.6-7.7-21.8-18.9-25  L169,320.8V273.5z M309.4,31.7c0.2-1.2,0.3-2.4,0.3-3.6c0-14-11.1-25.4-24.9-26C276.6,1.4,268.3,1,260,1c-8.3,0-16.6,0.4-24.7,1.1  c-13.9,0.6-24.9,12-24.9,26c0,1.2,0.1,2.5,0.3,3.6C90.6,54.8,0,160.3,0,287c0,97.2,53.4,182,132.4,226.6l36.8-48.1  C104.3,432.4,59.8,364.9,59.8,287c0-110.6,89.6-200.2,200.2-200.2S460.2,176.4,460.2,287c0,77.9-44.5,145.4-109.4,178.5  c15,19.6,25.6,33.5,36.8,48.1C466.6,469,520,384.2,520,287C520,160.3,429.4,54.8,309.4,31.7z",transform:"translate(-10,0)scale(0.04)"}),(0,o.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey",transform:"translate(0,-2)scale(0.5)",fillOpacity:"0",onPointerDown:h,onPointerMove:x,onPointerUp:m,style:{cursor:"move"}})]}),"hsr"===u&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:(0,o.jsx)("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),(0,o.jsxs)("g",{id:"hsr",transform:"scale(0.5970084519)",children:[(0,o.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798}),(0,o.jsxs)("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[(0,o.jsx)("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),(0,o.jsx)("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,o.jsx)("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),(0,o.jsx)("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),(0,o.jsx)("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,o.jsx)("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),(0,o.jsx)("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,o.jsx)("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,o.jsx)("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),(0,o.jsx)("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,o.jsx)("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),(0,o.jsx)("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]}),(0,o.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798,fillOpacity:"0",onPointerDown:h,onPointerMove:x,onPointerUp:m,style:{cursor:"move"}})]})]})]})}),[t,n,r,u,h,x,m])},icon:(0,o.jsx)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:(0,o.jsxs)("g",{transform:"translate(12, 0)scale(0.4)",children:[(0,o.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"currentColor"}),(0,o.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]})}),defaultAttrs:g,fields:j,metadata:{displayName:"panel.details.node.facilities.displayName",tags:[]}},k=function(e){var t=e.lineName,n=e.commonPart,r=l.useRef(null),i=l.useState({x:0,height:0,width:0}),a=(0,f.Z)(i,2),s=a[0],c=a[1];l.useEffect((function(){r.current&&c(r.current.getBBox())}),[t.toString()]);var d=b/Math.max(b,s.width),u=(-s.x-s.width/2)*d,h=s.height*(1-d)*1.2/2;return(0,o.jsx)("g",{ref:r,transform:"translate(".concat(u,",").concat(h,")scale(").concat(d,")"),children:(0,o.jsxs)("text",{className:"rmp-name__zh",fontSize:14,y:12,textAnchor:"end",children:[n,(0,o.jsx)("tspan",{className:"rmp-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:t[0].slice(n.length).trim()}),(0,o.jsx)("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:t[1].slice(n.length).trim()})]})})},P=n(1413),C=function(e){return(0,o.jsx)("rect",(0,P.Z)({x:-22.5,height:24,width:45,rx:4.5},e))},b=42,N=function(e){var t=e.lineName,n=e.foregroundColour,r=e.backgroundColour,i=z(t),a=(0,f.Z)(i,2),s=a[0],c=a[1],d=l.useRef(null),u=l.useRef(null),h=l.useState({width:0}),x=(0,f.Z)(h,2),m=x[0],p=x[1],y=l.useState({width:0}),v=(0,f.Z)(y,2),g=v[0],j=v[1];l.useEffect((function(){d.current&&p(d.current.getBBox()),u.current&&j(u.current.getBBox())}),[t.toString()]);var w=b/Math.max(b,m.width),P=b/Math.max(b,g.width);return(0,o.jsxs)("g",{textAnchor:"middle",fill:n,children:[(0,o.jsx)(C,{fill:r}),2===s?(0,o.jsx)(k,{lineName:t,commonPart:c}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("text",{ref:d,y:M(s,"zh",w),className:"rmp-name__zh",dominantBaseline:"middle",fontSize:12,transform:"scale(".concat(w,")"),children:1===s?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("tspan",{fontSize:16,dy:.7,dominantBaseline:"middle",className:"rmp-name__zh",children:c}),(0,o.jsx)("tspan",{dy:-.7,dominantBaseline:"middle",className:"rmp-name__zh",children:t[0].slice(c.length)})]}):t[0]}),(0,o.jsx)("text",{ref:u,y:M(s,"en",P),className:"rmg-name__en",dominantBaseline:"middle",fontSize:8,transform:"scale(".concat(P,")"),children:t[1]})]})]})},z=function(e){var t=e[0].match(/^(\d+)\D+$/);if(t)return[1,t[1]];var n=e.map((function(e){return e.match(/^([\w\d]+).+$/)}));return n[0]&&n[1]&&n[0][1]===n[1][1]?[2,n[0][1]]:[3,""]},M=function(e,t,n){switch(e){case 1:return("zh"===t?7.3:19.5)*(2-n);case 2:return 0;case 3:return"zh"===t?8*(2-n):19.5+47.53125*(1-n)-(1===n?0:5.5)}},S={names:["1\u53f7\u7ebf","Line 1"],color:[d.jk.Guangzhou,"gz1","#F3D03E",d.AJ.black]},Z=[{type:"input",label:"panel.details.node.gzmtrLineBadge.nameZh",value:function(e){return(null!==e&&void 0!==e?e:S).names[0]},onChange:function(e,t){var n=null!==t&&void 0!==t?t:S;return n.names[0]=e.toString(),n}},{type:"input",label:"panel.details.node.gzmtrLineBadge.nameEn",value:function(e){return(null!==e&&void 0!==e?e:S).names[1]},onChange:function(e,t){var n=null!==t&&void 0!==t?t:S;return n.names[1]=e.toString(),n}},{type:"custom",component:(0,o.jsx)(u.S,{type:a.Z.GzmtrLineBadge,defaultAttrs:S})}],B={component:function(e){var t=e.id,n=e.x,r=e.y,i=e.attrs,a=e.handlePointerDown,s=e.handlePointerMove,d=e.handlePointerUp,u=null!==i&&void 0!==i?i:S,h=u.names,x=void 0===h?S.names:h,m=u.color,f=void 0===m?S.color:m,p=l.useCallback((function(e){return a(t,e)}),[t,a]),y=l.useCallback((function(e){return s(t,e)}),[t,s]),v=l.useCallback((function(e){return d(t,e)}),[t,d]);return l.useMemo((function(){return(0,o.jsxs)("g",{id:t,transform:"translate(".concat(n,", ").concat(r,")"),children:[(0,o.jsx)(N,{lineName:x,foregroundColour:f[3],backgroundColour:f[2]}),(0,o.jsx)("rect",{fill:"white",fillOpacity:"0",x:"-22.5",width:"45",height:"24",rx:"4.5",onPointerDown:p,onPointerMove:y,onPointerUp:v,style:{cursor:"move"}})]})}),[t,n,r].concat((0,c.Z)(x),(0,c.Z)(f),[p,y,v]))},icon:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[(0,o.jsx)("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),(0,o.jsx)("text",{x:"12",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"1\u53f7\u7ebf"}),(0,o.jsx)("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"5",fill:"white",children:"Line 1"})]}),defaultAttrs:S,fields:Z,metadata:{displayName:"panel.details.node.gzmtrLineBadge.displayName",tags:[]}},_=(r={},(0,i.Z)(r,a.Z.Virtual,s),(0,i.Z)(r,a.Z.ShmetroNumLineBadge,m),(0,i.Z)(r,a.Z.ShmetroTextLineBadge,v),(0,i.Z)(r,a.Z.Facilities,w),(0,i.Z)(r,a.Z.GzmtrLineBadge,B),r)},558:function(e,t,n){var r;n.d(t,{x:function(){return r}}),function(e){e.ShmetroVirtualInt="shmetro-virtual-int",e.GzmtrVirtualInt="gzmtr-virtual-int"}(r||(r={}))}}]);
//# sourceMappingURL=6033.36fb8fa8.chunk.js.map