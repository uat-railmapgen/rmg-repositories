"use strict";(self.webpackChunkrmg=self.webpackChunkrmg||[]).push([[3472],{6584:function(n,t,e){e.d(t,{C:function(){return i},T:function(){return a}});var r=e(7762),i=function(n,t,e){var r=t[0];if(r.includes(n)){if(t.slice(1).find((function(t){return t.includes(n)})))return 0;var i=t.slice(1).find((function(t){var e="linestart"===t[0],i=r.indexOf(n)<r.indexOf(t.slice(-1)[0]),a="lineend"===t.slice(-1)[0],s=r.indexOf(n)>r.indexOf(t[0]);return e&&i||a&&s}));return i?1===e[i[0]].children.indexOf(i[1])?-1:1:0}var a=t.slice(1).find((function(t){return t.includes(n)}));return a?"linestart"!==a[0]&&"lineend"!==a.slice(-1)[0]?1===e[a[0]].children.indexOf(a[1])?1.2:-1.2:1===e[a[0]].children.indexOf(a[1])?1:-1:0},a=function(n){var t,e,i="a".concat(6,",").concat(6,",0,0,1,").concat(6,",").concat(6),a="a".concat(6,",").concat(6,",0,0,0,").concat(6,",").concat(6),s="a".concat(6,",").concat(6,",0,0,0,").concat(6,",-").concat(6),c="a".concat(6,",").concat(6,",0,0,1,").concat(6,",-").concat(6),o=[],l=(0,r.Z)(n);try{for(l.s();!(e=l.n()).done;){var u=e.value;if(t)if(u[1]===t[1])o.push("H"+u[0]);else{var h=(u[0]+t[0])/2-(0===t[1]?0:12);o.push("H"+h),u[1]>t[1]?(o.push(i),o.push("V"+(u[1]-6)),o.push(a)):(o.push(s),o.push("V"+(u[1]+6)),o.push(c)),o.push("H"+u[0])}else o.push("M"+u.join(","));t=u}}catch(f){l.e(f)}finally{l.f()}return o.join(" ").replace(/( H([\d.]+))+/g," H$2")}},8359:function(n,t,e){e.d(t,{kL:function(){return l},AQ:function(){return u},ZM:function(){return h},A_:function(){return f}});var r=e(5671),i=e(3144),a=e(136),s=e(4062),c=e(3824),o=e(6584),l=function(n,t){var e=0,r=n[t].transfer,i=r.info.map((function(n){return n.length}));return"l"===r.tick_direc&&(!i[1]&&i[0]>1&&(e+=.8),!i[1]||1===i[0]&&2===i[1]||(e+=.8)),1===i[0]&&2===i[1]&&"linestart"!==n[t].parents[0]&&"lineend"!==n[t].children[0]&&(e+=.8),2===n[t].parents.length&&(e+=.2),2===n[n[t].parents[0]].children.length&&(e+=.4),e},u=function(n,t){var e=0,r=n[t].transfer,i=r.info.map((function(n){return n.length}));return"r"===r.tick_direc&&(!i[1]&&i[0]>1&&(e+=.8),!i[1]||1===i[0]&&2===i[1]||(e+=.8)),1===i[0]&&2===i[1]&&"linestart"!==n[t].parents[0]&&"lineend"!==n[t].children[0]&&(e+=.8),2===n[t].children.length&&(e+=.2),2===n[n[t].children[0]].parents.length&&(e+=.4),e},h=function(n){(0,a.Z)(e,n);var t=(0,s.Z)(e);function e(){var n;(0,r.Z)(this,e);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(n=t.call.apply(t,[this].concat(a))).leftWideFactor=function(t){return l(n.stnList,t)},n.rightWideFactor=function(t){return u(n.stnList,t)},n}return(0,i.Z)(e,null,[{key:"drawLine",value:function(n,t,e,r,i,a,s,c){var l=this,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,h={main:[],pass:[],sidingMain:[],sidingPass:[]};return n.forEach((function(f,d){var g="linestart"!==f[0]&&"lineend"!==f.slice(-1)[0],m=(f=f.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),p=f.filter((function(n){return t[n]<=0}));1===m.length&&(p=f),0===m.filter((function(n){return-1!==p.indexOf(n)})).length&&m.length&&(p[0]===f[0]?p.push(m[0]):m[0]===f[0]&&m[m.length-1]===f[f.length-1]&&p.length?(p=f,m=[]):p.unshift(m[m.length-1])),g?(h.sidingMain.push((0,o.T)(m.map((function(n){return[i[n],a[n]]})))),h.sidingPass.push((0,o.T)(p.map((function(n){return[i[n],a[n]]}))))):(h.main.push(new l({stnList:e,criticalPath:c})._linePath(m,r,n,i,a,s,c,u)),h.pass.push(new l({stnList:e,criticalPath:c})._linePath(p,r,n,i,a,s,c,u)))})),h}}]),e}(c.LD),f=function(n){(0,a.Z)(e,n);var t=(0,s.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,null,[{key:"drawLine",value:function(n,t,e,r,i,a,s,c){var o=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,u={main:[],pass:[],sidingMain:[],sidingPass:[]};return n.forEach((function(h,f){var d=(h=h.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),g=h.filter((function(n){return t[n]<=0}));1===d.length&&(g=h),0===d.filter((function(n){return-1!==g.indexOf(n)})).length&&d.length&&(g[0]===h[0]?g.push(d[0]):d[0]===h[0]&&d[d.length-1]===h[h.length-1]&&g.length?(g=h,d=[]):g.unshift(d[d.length-1])),u.main.push(new o({stnList:e,criticalPath:c})._linePath(d,r,n,i,a,s,c,l)),u.pass.push(new o({stnList:e,criticalPath:c})._linePath(g,r,n,i,a,s,c,l))})),u}}]),e}(h)},3824:function(n,t,e){e.d(t,{Az:function(){return h},QE:function(){return f},ML:function(){return d},h6:function(){return g},LD:function(){return m},pS:function(){return p}});var r=e(9439),i=e(5671),a=e(3144),s=e(3433),c=e(7762),o=e(4942),l=e(1413),u=e(713),h=function(n,t,e){return Object.keys(n).reduce((function(r,i){return(0,l.Z)((0,l.Z)({},r),{},(0,o.Z)({},i,n[i].children.reduce((function(r,a){return(0,l.Z)((0,l.Z)({},r),{},(0,o.Z)({},a,1+t(n,a)+e(n,i)))}),{})))}),{})},f=function n(t,e,r){if(t===e)return{len:0,nodes:[t]};var i=[],a=[];Object.keys(r[t]).forEach((function(s){var c=n(s,e,r);c.len<0||(i.push(r[t][s]+c.len),c.nodes.unshift(t),a.push(c.nodes))}));var s=Math.max.apply(Math,i);return{len:s,nodes:a[i.indexOf(s)]}},d=function(n,t,e){var r=f("linestart","lineend",t);if(r.nodes.includes(n))return f(r.nodes[1],n,t).len;for(var i=e.filter((function(t){return t.includes(n)}))[0],a=n;!r.nodes.includes(a);)a=i[i.indexOf(a)-1];for(var s=n;!r.nodes.includes(s);)s=i[i.indexOf(s)+1];var c="linestart"===a,o=[];return c||"lineend"===s?c?(o[0]=0,o[1]=f(r.nodes[1],s,t).len,o[2]=f(i[1],n,t).len,o[3]=f(n,s,t).len):(o[0]=f(r.nodes[1],a,t).len,o[1]=f(a,r.nodes.slice(-2)[0],t).len,o[2]=f(a,n,t).len,o[3]=f(n,i.slice(-2)[0],t).len):(o[0]=f(r.nodes[1],a,t).len,o[1]=f(a,s,t).len,o[2]=f(a,n,t).len,o[3]=f(n,s,t).len),o[0]+o[2]*o[1]/(o[2]+o[3])},g=function(n,t,e){var r;return console.log("computing stations' states"),(0,s.Z)(new Set((r=[]).concat.apply(r,(0,s.Z)(t)))).reduce((function(r,i){return(0,l.Z)((0,l.Z)({},r),{},(0,o.Z)({},i,i===n?0:(e===u.wA.right?function(n,t,e){var r,i=(0,c.Z)(e);try{for(i.s();!(r=i.n()).done;){var a=r.value,s=a.indexOf(n),o=a.indexOf(t);if(-1!==s&&s<o)return!0}}catch(l){i.e(l)}finally{i.f()}return!1}(n,i,t):function(n,t,e){var r,i=(0,c.Z)(e);try{for(i.s();!(r=i.n()).done;){var a=r.value,s=a.indexOf(n),o=a.indexOf(t);if(-1!==o&&o<s)return!0}}catch(l){i.e(l)}finally{i.f()}return!1}(n,i,t))?1:-1))}),{})},m=function(){function n(t){var e=this;(0,i.Z)(this,n),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(n){return 0},this.rightWideFactor=function(n){return 0},this.pathWeight=function(n,t){return e.stnList[n].children.includes(t)?1+e.rightWideFactor(n)+e.leftWideFactor(t):-1/0},this.pathTurnParams=function(n){var t=35-17.5*Math.sqrt(3),e=n-2*t;return{tr:35,dx_a:17.5,dy_a:t,dx_l:e*Math.sqrt(3),dy_l:e}},this.pathTurnSE=function(n){var t=e.pathTurnParams(n),r=t.tr,i=t.dx_a,a=t.dy_a,s=t.dx_l,c=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(i,",").concat(a," l ").concat(s,",").concat(c," a ").concat(r,",").concat(r," 0 0,0 ").concat(i,",").concat(a)},this.pathTurnNE=function(n){var t=e.pathTurnParams(n),r=t.tr,i=t.dx_a,a=t.dy_a,s=t.dx_l,c=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(i,",").concat(-a," l ").concat(s,",").concat(-c," a ").concat(r,",").concat(r," 0 0,1 ").concat(i,",").concat(-a)},this.stnList=t.stnList,this.criticalPath=t.criticalPath}return(0,a.Z)(n,[{key:"getYShare",value:function(n,t){if(n in this.yShares)return this.yShares[n];if(["linestart","lineend"].includes(n)||this.stnList[n].parents.length>1||this.stnList[n].children.length>1)return this.yShares[n]=0,0;var e=this.stnList[n].parents[0];if(e){if(1===this.stnList[e].children.length){var r=this.getYShare(e);return this.yShares[n]=r,r}var i=0===this.stnList[e].children.indexOf(n)?1:-1;return this.yShares[n]=i,i}return this.yShares[n]=0,0}},{key:"_linePath",value:function(n,t,e,i,a,s,c,o){var l=this,u=(0,r.Z)([],3),h=u[0],f=u[1],d=u[2],g=[],m=this.pathTurnParams(s),p=m.dx_a+m.dx_l/2,v=(t[1]-t[0])/c.len*2,x=((t[1]-t[0])/c.len-2*p)/2;return x+v<0&&console.warn("SVG width too small! ".concat(x+v)),n.forEach((function(t){var r=i[t],c=a[t];if(!f&&0!==f)return h=t,d=r,f=c,void(1===n.length?g.push("M ".concat(r,",").concat(c)):e[0].includes(t)?e[0].includes(n[1])?g.push("M ".concat(r,",").concat(c)):(i[n[1]]>0&&g.push("M ".concat(r,",").concat(c+o)),a[n[1]]<0&&g.push("M ".concat(r,",").concat(c-o))):g.push("M ".concat(r,",").concat(c)));c>f?(g.push("h ".concat(0===c?r-d-v*l.leftWideFactor(t)-x-2*p:v*l.rightWideFactor(h)+x)),g.push(l.pathTurnSE(s))):c<f&&(g.push("h ".concat(0===c?r-d-v*l.leftWideFactor(t)-x-2*p:v*l.rightWideFactor(h)+x)),g.push(l.pathTurnNE(s))),g.push("H ".concat(r)),h=t,d=r,f=c})),g.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(n,t){console.log("computing y shares");var e=new this({stnList:n});return Object.keys(n).forEach((function(n){["linestart","lineend"].includes(n)||n in e.yShares||e.getYShare(n,t)})),e.yShares}}]),n}(),p=function(n,t){var e=(n=n.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),r=n.filter((function(n){return t[n]<=0}));return 1===e.length&&(r=n),0===e.filter((function(n){return-1!==r.indexOf(n)})).length&&e.length&&(r[0]===n[0]?r.push(e[0]):e[0]===n[0]&&e[e.length-1]===n[n.length-1]&&r.length?(r=n,e=[]):r.unshift(e[e.length-1])),{main:e,pass:r}}},5629:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r=e(2791),i=e(5459),a=e(4942),s=e(1413),c=e(3824),o=e(8359),l=e(713),u=e(5114),h=e(184),f=function(n){switch(n){case l.Ly.UP:return 180;case l.Ly.DOWN:return 0;case l.Ly.LEFT:return 90;case l.Ly.RIGHT:return-90}};function d(n){var t=n.interchangeInfo,e=n.isPassed,r=n.position,i=n.repel,a=t[4].split("\\").length,s=t[5].split("\\").length,c=r===l.Ly.LEFT||i===l.Nm.left?"end":r===l.Ly.RIGHT||i===l.Nm.right?"start":"middle",o={path:{rotate:f(r)},g:{x:(r===l.Ly.LEFT?-24:r===l.Ly.RIGHT?24:0)+(i===l.Nm.left?-3:i===l.Nm.right?3:0),y:r===l.Ly.UP?-37-10*(a-1)-7*(s-1):r===l.Ly.DOWN?31:6-(20+10*(a-1)+7*(s-1)-1)/2}};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("path",{d:"M0,0v17",strokeLinecap:"round",stroke:e?"var(--rmg-grey)":t[2],strokeWidth:8,transform:"rotate(".concat(o.path.rotate,")")}),(0,h.jsxs)("g",{textAnchor:c,transform:"translate(".concat(o.g.x,",").concat(o.g.y,")"),fill:e?"var(--rmg-grey)":"var(--rmg-black)",children:[t[4].split("\\").map((function(n,t){return(0,h.jsx)("text",{dy:10*t,className:"rmg-name__zh",fontSize:10,children:n},t)})),t[5].split("\\").map((function(n,t){return(0,h.jsx)("text",{dy:10*a-1+7*t,className:"rmg-name__en",fontSize:7,children:n},a+t)}))]})]})}var g=(0,r.memo)(d,(function(n,t){return n.interchangeInfo.toString()===t.interchangeInfo.toString()&&n.isPassed===t.isPassed&&n.position===t.position&&n.repel===t.repel}));function m(n){var t=n.length,e=n.isPassed,r=n.isReversed;return(0,h.jsx)("path",{d:"M-8,0 v".concat(t," a8,8 0 0,0 16,0 v-").concat(t," a8,8 0 0,0 -16,0Z"),className:"rmg-stn__mtr",stroke:e?"var(--rmg-grey)":"var(--rmg-black)",transform:"scale(1,".concat(r?-1:1,")")})}function p(n){var t=n.interchangeInfoList,e=n.direction,r=n.isPassed,i=n.isReversed,a=n.repel,s=t.length<=1?0:18*t.length;return(0,h.jsxs)("g",{children:[1===t.length&&(0,h.jsx)(g,{interchangeInfo:t[0],isPassed:r,position:i?l.Ly.UP:l.Ly.DOWN,repel:a}),t.length>1&&t.map((function(n,t){return(0,h.jsx)("g",{transform:"translate(0,".concat(i?-18*(t+1):18*(t+1),")"),children:(0,h.jsx)(g,{interchangeInfo:n,isPassed:r,position:e===l.Nm.right?l.Ly.RIGHT:l.Ly.LEFT})},t)})),(0,h.jsx)(m,{length:s,isPassed:r,isReversed:i})]})}function v(n){var t,e,r,i,a,s=n.interchangeInfoList,c=n.direction,o=n.isPassed,u=n.isReversed,f=n.isTerminal,d=n.stationName,p=null!==(t=null===d||void 0===d||null===(e=d[1])||void 0===e||null===(r=e.split("\\"))||void 0===r?void 0:r.length)&&void 0!==t?t:1,v=18*(s.length-1),x={name:{x:f?0:1===s.length?c===l.Nm.left?-13:13:c===l.Nm.left?13:-13,y:f?u?19:-28:(u?-9:9)*(s.length-1)-4-5*(p-1)}};return(0,h.jsxs)("g",{children:[s.map((function(n,t,e){return(0,h.jsx)("g",{transform:"translate(0,".concat(u?-18*t:18*t,")"),children:(0,h.jsx)(g,{interchangeInfo:n,isPassed:o,position:1===e.length?u?l.Ly.UP:l.Ly.DOWN:c===l.Nm.right?l.Ly.RIGHT:l.Ly.LEFT})},t)})),(0,h.jsx)(m,{length:v,isPassed:o,isReversed:u}),(0,h.jsxs)("g",{textAnchor:0===x.name.x?"middle":x.name.x>0?"start":"end",fill:o?"var(--rmg-grey)":"var(--rmg-black)",transform:"translate(".concat(x.name.x,",").concat(x.name.y,")"),children:[(0,h.jsx)("text",{className:"rmg-name__zh",fontSize:14,children:null===d||void 0===d?void 0:d[0]}),null===d||void 0===d||null===(i=d[1])||void 0===i||null===(a=i.split("\\"))||void 0===a?void 0:a.map((function(n,t){return(0,h.jsx)("text",{className:"rmg-name__en",fontSize:9,dy:12+10*t,children:n},t)}))]})]})}var x=e(9439),y=e(5987),j=e(5861),N=e(7757),S=e.n(N),Z=e(7253),k=function(){var n=(0,j.Z)(S().mark((function n(){var t,e,r,i;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=3;case 1:if(!t--){n.next=19;break}return n.next=4,document.fonts.ready;case 4:e=n.sent,r=e.values();case 6:if(!(i=r.next()).done){n.next=10;break}return n.abrupt("break",14);case 10:if("GenYoMin TW"!==i.value.family){n.next=12;break}return n.abrupt("return");case 12:n.next=6;break;case 14:return console.log("GenYoMin is NOT ready. Retry attempts remaining: "+t+" ..."),n.next=17,(0,Z.aA)(500);case 17:n.next=1;break;case 19:throw new Error("Failed to load GenYoMin after 3 attempts");case 20:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),L=(0,r.memo)((function(n){var t=n.stnName,e=n.onUpdate,i=n.align,a=(0,r.useRef)(null),s=function(){null===e||void 0===e||e(a.current.getBBox())};(0,r.useEffect)((function(){s(),k().then().catch(console.log).finally(s)}),[t.toString(),i]);return(0,h.jsxs)("g",{ref:a,textAnchor:function(n){switch(n){case l.Nm.left:return"start";case l.Nm.right:return"end";default:return"middle"}}(i),children:[(0,h.jsx)("text",{className:"rmg-name__zh rmg-name__mtr--station",children:t[0]}),t[1].split("\\").map((function(n,t){return(0,h.jsx)("text",{className:"rmg-name__en rmg-name__mtr--station",dy:(e=t,17+11*e),children:n},t);var e}))]})}),(function(n,t){return n.stnName.toString()===t.stnName.toString()&&n.align===t.align})),w=["stationName","stationState","lower","align","facility"];function _(n){var t=n.stationName,e=n.stationState,i=n.lower,a=n.align,c=n.facility,o=(0,y.Z)(n,w),u=(0,r.useState)({x:0,width:0}),f=(0,x.Z)(u,2),d=f[0],g=f[1],m=t[1].split("\\").length,p={g:{x:a?a===l.Nm.right?-3:3:0,y:(i?24.8125:-36.21875-11*(m-1))+(a?i?10:-10:0)},rect:{x:d.x-3+(c===l.mV.none?0:a?a===l.Nm.right?-36.03125:0:-17.015625),y:-11.8125,width:d.width+6+(c===l.mV.none?0:36.03125),height:35.03125+11*(m-1)},use:{x:a?a===l.Nm.right?-17.515625-d.width-3:15.515625:-(d.width+3)/2,y:5.5*(m-1)-11.8125},StationName:{x:c===l.mV.none?0:a?a===l.Nm.right?0:36.03125:19.015625,y:0}};return(0,h.jsx)("g",(0,s.Z)((0,s.Z)({},o),{},{children:(0,h.jsxs)("g",{fill:function(n){switch(n){case l.KR.PASSED:return"var(--rmg-grey)";case l.KR.CURRENT:return"#fff";case l.KR.FUTURE:return"var(--rmg-black)"}}(e),transform:"translate(".concat(p.g.x,",").concat(p.g.y,")"),children:[e===l.KR.CURRENT&&(0,h.jsx)("rect",{x:p.rect.x,y:p.rect.y,width:p.rect.width,height:p.rect.height,fill:"var(--rmg-black)"}),c!==l.mV.none&&(0,h.jsx)("use",{xlinkHref:"#".concat(c),fill:e===l.KR.PASSED?"var(--rmg-grey)":"var(--rmg-black)",x:p.use.x,y:p.use.y}),(0,h.jsx)("g",{transform:"translate(".concat(p.StationName.x,",").concat(p.StationName.y,")"),children:(0,h.jsx)(L,{stnName:t,onUpdate:g,align:a})})]})}))}function P(n){var t,e,r,i,a,s,c,o=n.stationId,f=n.stationState,d=n.isReversed,g=(0,u.Qy)((function(n){return n.param.stn_list[o]})),m=g.name,x=g.parents,y=g.children,j=g.transfer,N=j.info,S=j.tick_direc,Z=j.osi_names,k=j.paid_area,L=g.facility,w=null!==(t=N[0])&&void 0!==t&&t.length?x.includes("linestart")?l.Nm.left:y.includes("lineend")?l.Nm.right:void 0:void 0,P=Boolean((null===(e=N[1])||void 0===e?void 0:e.length)&&!w),M={link:{scaleX:w===l.Nm.left?-1:1,scaleY:d?-1:1},osi:{x:w?w===l.Nm.left?-41:41:0,y:w?0:d?-26:26}};return(0,h.jsxs)("g",{"data-testid":"station-icon-wrapper",children:[(null===(r=N[1])||void 0===r?void 0:r.length)&&(0,h.jsx)("path",{d:w&&null!==(i=N[0])&&void 0!==i&&i.length?"M0,0H41":"M0,0V26",strokeWidth:2.69,strokeDasharray:k?0:2.5,stroke:f===l.KR.PASSED?"var(--rmg-grey)":"var(--rmg-black)",transform:"scale(".concat(M.link.scaleX,",").concat(M.link.scaleY,")")}),(0,h.jsx)(p,{interchangeInfoList:N[0],direction:S===l.wA.right?l.Nm.right:l.Nm.left,isPassed:f===l.KR.PASSED,isReversed:!w&&null!==(a=N[1])&&void 0!==a&&a.length?!d:d,repel:P?S===l.wA.right?l.Nm.right:l.Nm.left:void 0}),(null===(s=N[1])||void 0===s?void 0:s.length)&&(0,h.jsx)("g",{transform:"translate(".concat(M.osi.x,",").concat(M.osi.y,")"),children:(0,h.jsx)(v,{interchangeInfoList:N[1],direction:w||(S===l.wA.right?l.Nm.right:l.Nm.left),stationName:Z[0],isPassed:f===l.KR.PASSED,isReversed:w?!d:d,isTerminal:Boolean(w)})}),(0,h.jsx)(_,{stationName:m,stationState:f,facility:L,lower:d,align:null!==(c=N[0])&&void 0!==c&&c.length&&P?S===l.wA.left?l.Nm.left:l.Nm.right:void 0})]})}var M=e(6584),O=function(){var n,t=(0,u.Qy)((function(n){return n.helper})),e=t.branches,i=t.routes,f=t.depsStr,d=(0,u.Qy)((function(n){return n.param.svgWidth})),g=(0,u.Qy)((function(n){return n.param.y_pc})),m=(0,u.Qy)((function(n){return n.param.padding})),p=(0,u.Qy)((function(n){return n.param.branch_spacing})),v=(0,u.Qy)((function(n){return n.param.direction})),x=(0,u.Qy)((function(n){return n.param.namePosMTR})),y=(0,u.Qy)((function(n){return n.param.current_stn_idx})),j=(0,u.Qy)((function(n){return n.param.stn_list})),N=(0,c.Az)(j,o.kL,o.AQ),S=(0,r.useMemo)((function(){return(0,c.QE)("linestart","lineend",N)}),[JSON.stringify(N)]),Z=(0,r.useMemo)((function(){return(0,c.QE)(S.nodes[1],S.nodes.slice(-2)[0],N)}),[JSON.stringify(N)]),k=(0,r.useMemo)((function(){return console.log("computing x shares"),Object.keys(j).reduce((function(n,t){return(0,s.Z)((0,s.Z)({},n),{},(0,a.Z)({},t,(0,c.ML)(t,N,e)))}),{})}),[e.toString(),JSON.stringify(N)]),L=[d[l.Ht.RailMap]*m/100,d[l.Ht.RailMap]*(1-m/100)],w=Object.keys(k).reduce((function(n,t){return(0,s.Z)((0,s.Z)({},n),{},(0,a.Z)({},t,L[0]+k[t]/Z.len*(L[1]-L[0])))}),{}),_=(0,r.useMemo)((function(){return Object.keys(j).reduce((function(n,t){return(0,s.Z)((0,s.Z)({},n),{},(0,a.Z)({},t,(0,M.C)(t,e,j)*p))}),{})}),[f,p]),P=(0,r.useMemo)((function(){return(0,c.h6)(y,i,v)}),[y,v,i.toString()]),O=Object.keys(j).reduce((function(n,t){return(0,s.Z)((0,s.Z)({},n),{},(0,a.Z)({},t,function(n,t,e){var r,i=e.isStagger,a=e.isFlip;if(!i)return a;if(t[0].includes(n))r=t[0].indexOf(n)%2;else{var s=t.filter((function(t){return t.includes(n)}))[0];r=(t[0].indexOf(s[0])+s.indexOf(n)+1)%2}return 0===r?a:!a}(t,e,x)))}),{}),b=o.ZM.drawLine(e,P,j,L,w,_,p,S);return(0,h.jsxs)("g",{id:"main",style:(n={},(0,a.Z)(n,"--y-percentage",g),(0,a.Z)(n,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),n),children:[(0,h.jsx)(R,{paths:b}),(0,h.jsx)(T,{xs:w,ys:_,stnStates:P,namePoss:O})]})},R=r.memo((function(n){return(0,h.jsxs)("g",{fill:"none",strokeWidth:9.68,children:[(0,h.jsxs)("g",{stroke:"var(--rmg-grey)",children:[n.paths.pass.map((function(n,t){return(0,h.jsx)("path",{d:n},t)})),n.paths.sidingPass.map((function(n,t){var e;return(0,h.jsx)("path",{d:n,strokeDasharray:4===(null===(e=n.match(/a/g))||void 0===e?void 0:e.length)?"10 4":void 0},t)}))]}),(0,h.jsxs)("g",{stroke:"var(--rmg-theme-colour)",children:[n.paths.main.map((function(n,t){return(0,h.jsx)("path",{d:n},t)})),n.paths.sidingMain.map((function(n,t){var e;return(0,h.jsx)("path",{d:n,strokeDasharray:4===(null===(e=n.match(/a/g))||void 0===e?void 0:e.length)?"10 4":void 0},t)}))]})]})}),(function(n,t){return JSON.stringify(n.paths)===JSON.stringify(t.paths)})),T=function(n){var t=n.xs,e=n.ys,r=n.stnStates,i=n.namePoss,a=(0,u.Qy)((function(n){return n.param.stn_list}));return(0,h.jsx)("g",{id:"stn_icons",children:Object.keys(a).filter((function(n){return!["linestart","lineend"].includes(n)})).map((function(n){return(0,h.jsx)("g",{style:{transform:"translate(".concat(t[n],"px,").concat(e[n],"px)")},children:(0,h.jsx)(P,{stationId:n,stationState:r[n],isReversed:i[n]})},n)}))})},b=(0,r.memo)((function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(E,{}),(0,h.jsx)(i.Z,{stripPc:90}),(0,h.jsx)(O,{})]})})),E=r.memo((function(){return(0,h.jsxs)("defs",{children:[(0,h.jsxs)("g",{id:"airport",transform:"scale(0.5970084519)",children:[(0,h.jsx)("rect",{x:-29.33899,height:58.67798,width:58.67798}),(0,h.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]}),(0,h.jsxs)("g",{id:"disney",transform:"scale(0.5970084519)",children:[(0,h.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798}),(0,h.jsx)("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})]}),(0,h.jsx)("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:(0,h.jsx)("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),(0,h.jsxs)("g",{id:"hsr",transform:"scale(0.5970084519)",children:[(0,h.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798}),(0,h.jsxs)("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[(0,h.jsx)("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),(0,h.jsx)("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,h.jsx)("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),(0,h.jsx)("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),(0,h.jsx)("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,h.jsx)("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),(0,h.jsx)("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,h.jsx)("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,h.jsx)("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),(0,h.jsx)("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,h.jsx)("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),(0,h.jsx)("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]})]}),(0,h.jsx)("path",{id:"inttick",d:"M0,0v17",strokeLinecap:"round"})]})}))},5459:function(n,t,e){var r=e(4942),i=e(2791),a=e(184);t.Z=(0,i.memo)((function(n){var t;return(0,a.jsx)("rect",{fill:"var(--rmg-theme-colour)",height:20,style:(t={width:"var(--rmg-svg-width)"},(0,r.Z)(t,"--strip-percentage",n.stripPc),(0,r.Z)(t,"transform","translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"),t)})}))}}]);
//# sourceMappingURL=railmapMTR.3562e52d.chunk.js.map