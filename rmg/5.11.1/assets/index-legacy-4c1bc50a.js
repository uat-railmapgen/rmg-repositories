!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=["num","inStrip"],n=["lineNum","stnNum","passed","large"],r=["stnName","onUpdate","passed"],a=["passed"],s=["intInfos","stnState","tickRotation"],i=["intInfos","tickRotation","stnState"],c=["destIds"],o=["destIds"],l=["secName"],u=["num"];function m(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,s,i,c=[],o=!0,l=!1;try{if(s=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=s.call(n)).done)&&(c.push(r.value),c.length!==e);o=!0);}catch(u){l=!0,a=u}finally{try{if(!o&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return c}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,n||"default");if("object"!==t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function j(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}System.register(["./chakra-legacy-b8b156e3.js","./react-legacy-e9fbe36a.js","./index-legacy-e92bc0ae.js","./share-legacy-88022fe3.js"],(function(t,f){"use strict";var h,x,y,v,S,_,z,N,w,b,k,O,R,A;return{setters:[function(t){h=t.j},function(t){x=t.r},function(t){y=t.M,v=t.bg,S=t.u,_=t.D,z=t.S,N=t.be,w=t.a8},function(t){b=t.a,k=t.c,O=t.b,R=t.d,A=t.S}],execute:function(){function f(t){var n=t.num,r=t.inStrip,a=j(t,e);return h.jsxs("g",g(g({textAnchor:"middle",fill:r?y.black:"var(--rmg-theme-fg)"},a),{},{children:[h.jsx("rect",{height:40,width:40,rx:4,x:-20,fill:r?"#fff":"var(--rmg-theme-colour)"}),h.jsx("text",{className:"rmg-name__en",fontSize:20,dy:12,children:n}),h.jsx("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"屏蔽门"}),h.jsx("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]}))}var B=function(t){var e=function(t){switch(t){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(t.variant),n=x.useMemo((function(){switch(t.variant){case"gz1":return h.jsx("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return h.jsx("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return h.jsx("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return h.jsx("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return h.jsx("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return h.jsx("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return h.jsx("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return h.jsx("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return h.jsx(h.Fragment,{})}}),[t.variant]);return h.jsxs("g",{transform:"translate(0,".concat("gz4"===t.variant?-20:0,")"),children:[h.jsx("rect",{id:"strip_gz",style:p({},"--height","".concat(e,"px"))}),h.jsx("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:t.isShowLight&&n}),!1!==t.isShowPSD&&h.jsx(I,g({},t))]})},I=x.memo((function(t){var e,n=["gz28","gz2otis","gz6","gzgf"].includes(t.variant),r=function(t){switch(t){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(t.variant);return h.jsx(f,{num:t.isShowPSD,inStrip:n,style:(e={},p(e,"--psd-dy",r),p(e,"transform","translate(var(--translate-x), var(--translate-y))"),p(e,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),p(e,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),e)})}),(function(t,e){return t.variant===e.variant&&t.isShowPSD===e.isShowPSD})),M=x.memo((function(t){var e=t.passed,n=t.large?"M0,12.95 V-12.95 H-12.95 a12.95,12.95 0 0,0 0,25.9 h25.9 a12.95,12.95 0 0,0 0,-25.9 H0":"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0";return h.jsx("path",{d:n,fill:"#fff",strokeWidth:2,stroke:e?"#aaa":"var(--rmg-theme-colour)"})}),(function(t,e){return t.passed===e.passed&&t.large===e.large})),E=15;function P(t){var e=t.lineNum,r=t.stnNum,a=t.passed,s=t.large,i=j(t,n),c=x.useRef(null),o=x.useRef(null),l=d(x.useState({width:0}),2),u=l[0],m=l[1],f=d(x.useState({width:0}),2),p=f[0],y=f[1];x.useEffect((function(){c.current&&m(c.current.getBBox()),o.current&&y(o.current.getBBox())}),[e,r]);var v=E/Math.max(E,u.width),S=2===e.length&&2===r.length?v:E/Math.max(E,p.width);return h.jsxs("g",g(g({},i),{},{children:[h.jsx(M,{passed:a,large:s}),h.jsxs("g",{textAnchor:"middle",fontSize:13.5,transform:s?"scale(1.4)":"",fill:a?"#aaa":"#000",children:[h.jsx("g",{transform:"translate(-9.25,0)scale(".concat(v,")"),children:h.jsx("text",{ref:c,className:"rmg-name__zh",children:e})}),h.jsx("g",{transform:"translate(9.25,0)scale(".concat(S,")"),children:h.jsx("text",{ref:o,className:"rmg-name__zh",children:r})})]})]}))}var D=x.memo((function(t){var e=t.lineName,n=t.commonPart,r=x.useRef(null),a=d(x.useState({x:0,height:0,width:0}),2),s=a[0],i=a[1];x.useEffect((function(){r.current&&i(r.current.getBBox())}),[e.toString()]);var c=T/Math.max(T,s.width),o=(-s.x-s.width/2)*c,l=s.height*(1-c)*1.2/2;return h.jsx("g",{ref:r,transform:"translate(".concat(o,",").concat(l,")scale(").concat(c,")"),children:h.jsxs("text",{className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end",children:[n,h.jsx("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:e[0].slice(n.length).trim()}),h.jsx("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:e[1].slice(n.length).trim()})]})})}),(function(t,e){return t.lineName.toString()===e.lineName.toString()}));function H(t){return h.jsx("rect",g({x:-22.5,height:24,width:45,rx:4.5},t))}var T=42,W=x.memo((function(t){var e=t.lineName,n=t.foregroundColour,r=t.backgroundColour,a=t.passed,s=d(F(e),2),i=s[0],c=s[1],o=x.useRef(null),l=x.useRef(null),u=d(x.useState({width:0}),2),m=u[0],f=u[1],g=d(x.useState({width:0}),2),p=g[0],j=g[1];x.useEffect((function(){o.current&&f(o.current.getBBox()),l.current&&j(l.current.getBBox())}),[e.toString()]);var v=T/Math.max(T,m.width),S=T/Math.max(T,p.width),_={nameZh:{y:7.3+13.5*(1-v)*v/2},nameEn:{y:19.5-9*(1-S)*S/2}};return h.jsxs("g",{textAnchor:"middle",fill:a?y.white:n,children:[h.jsx(H,{fill:a?"#aaa":r}),2===i?h.jsx(D,{lineName:e,commonPart:c}):h.jsxs(h.Fragment,{children:[h.jsx("text",{ref:o,className:"rmg-name__zh",fontSize:12,transform:"translate(0,".concat(_.nameZh.y,")scale(").concat(v,")"),children:1===i?h.jsxs(h.Fragment,{children:[h.jsx("tspan",{fontSize:16,dy:.7,className:"rmg-name__zh",children:c}),h.jsx("tspan",{dy:-.7,className:"rmg-name__zh",children:e[0].slice(c.length)})]}):e[0]}),h.jsx("text",{ref:l,className:"rmg-name__en",fontSize:8,transform:"translate(0,".concat(_.nameEn.y,")scale(").concat(S,")"),children:e[1]})]})]})}),(function(t,e){return t.lineName.toString()===e.lineName.toString()&&t.foregroundColour===e.foregroundColour&&t.backgroundColour===e.backgroundColour&&t.passed===e.passed})),F=function(t){var e=t[0].match(/^(\d+)\D+$/);if(e)return[1,e[1]];var n=t.map((function(t){return t.match(/^(\w+).+$/)}));return n[0]&&n[1]&&n[0][1]===n[1][1]?[2,n[0][1]]:[3,""]},C=x.memo((function(t){var e=t.stnName,n=t.onUpdate,r=x.useRef(null);return x.useEffect((function(){r.current&&n&&n(r.current.getBBox())}),[e.toString()]),h.jsxs("g",{ref:r,children:[h.jsx("text",{className:"rmg-name__zh",fontSize:18,children:e[0]}),h.jsx("g",{fontSize:10.5,children:e[1].split("\\").map((function(t,e){return h.jsx("text",{className:"rmg-name__en",dy:16+11*e,children:t},e)}))})]})}),(function(t,e){return t.stnName.toString()===e.stnName.toString()}));function U(t){var e=t.stnName,n=t.onUpdate,a=t.passed,s=j(t,r),i=x.useRef(null),c=d(x.useState({x:0,width:0}),2),o=c[0],l=c[1];return x.useEffect((function(){if(i.current){var t=i.current.getBBox();l(t),n&&n(t)}}),[e.toString()]),h.jsxs("g",g(g({fill:a?"#aaa":"#000"},s),{},{children:[h.jsxs("g",{transform:"translate(0,3)",fontSize:18,children:[h.jsx("text",{textAnchor:"end",x:o.x-3,className:"rmg-name__zh",children:"("}),h.jsx("text",{textAnchor:"start",x:o.width+o.x+3,className:"rmg-name__zh",children:")"})]}),h.jsxs("g",{ref:i,textAnchor:"middle",children:[h.jsx("text",{className:"rmg-name__zh",fontSize:13,children:e[0]}),h.jsx("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:e[1]})]})]}))}function L(t){var e=t.passed,n=j(t,a);return h.jsxs("g",g(g({textAnchor:"middle",fill:e?"#aaa":"var(--rmg-theme-colour)"},n),{},{children:[h.jsx("text",{className:"rmg-name__zh",fontSize:13,children:"快车停靠站"}),h.jsx("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]}))}function V(t){var e=t.primaryName,n=t.secondaryName,r=t.stationState,a=t.flipped,s=t.express,i=d(x.useState({width:0}),2),c=i[0],o=i[1],l=d(x.useState({x:0,width:-20}),2),u=l[0],m=l[1],f=e[1].split("\\").length,g={g:{x:0,y:a?17.5:-20-14*f*Math.cos(-45)},StationSecondaryName:{x:(c.width+u.width/2+10)*(a?-1:1),y:2+5*(f-1)},ExpressTag:{x:(c.width+u.width+20+35)*(a?-1:1),y:2+5*(f-1)}};return h.jsxs("g",{textAnchor:a?"end":"start",fill:function(t){switch(t){case v.PASSED:return"#aaa";case v.CURRENT:return"#f00";case v.FUTURE:return"#000"}}(r),transform:"translate(".concat(g.g.x,",").concat(g.g.y,")rotate(-45)"),children:[h.jsx(C,{stnName:e,onUpdate:o}),n&&h.jsx(U,{stnName:n,onUpdate:m,passed:r===v.PASSED,transform:"translate(".concat(g.StationSecondaryName.x,",").concat(g.StationSecondaryName.y,")")}),s&&h.jsx(L,{passed:r===v.PASSED,transform:"translate(".concat(g.ExpressTag.x,",").concat(g.ExpressTag.y,")")})]})}function G(t){var e=t.stnId,n=t.stnState,r=t.stnY,a=S((function(t){return t.param.theme})),s=S((function(t){return t.param.line_name})),i=S((function(t){return t.param.line_num})),c=S((function(t){return t.param.stn_list[e]})),o=2===c.parents.length||2===c.children.length,l=r>0||1===c.parents.indexOf(c.branch.left[1]||"")||1===c.children.indexOf(c.branch.right[1]||"")?180:0,u=c.name[1].split("\\").length,d=o?180===l?16+12*(u-1)*Math.cos(-45):-9:180===l?-6:(25+15*(u-1))*Math.cos(-45);return h.jsxs(h.Fragment,{children:[h.jsx($,{intInfos:o?[{theme:[a[0],a[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)"],name:s}].concat(m(c.transfer.groups[0].lines)):c.transfer.groups[0].lines,stnState:n,tickRotation:l}),h.jsx(P,{lineNum:i,stnNum:c.num,passed:-1===n}),h.jsx("g",{transform:"translate(".concat(-d,",0)"),children:h.jsx(V,{primaryName:c.name,secondaryName:c.secondaryName||void 0,stationState:n,flipped:180===l,express:c.services.includes(_.express)})})]})}var $=function(t){return h.jsxs(h.Fragment,{children:[h.jsx(J,g({strokeWidth:4},t)),h.jsx(Y,g({transform:"translate(0,".concat(180===t.tickRotation?-47:23,")")},t))]})},J=function(t){var e=t.intInfos,n=t.stnState,r=t.tickRotation,a=j(t,s);return h.jsx("g",g(g({},a),{},{children:e.map((function(t,a){var s;return h.jsx("use",{xlinkHref:"#inttick",stroke:-1===n?"#aaa":null===(s=t.theme)||void 0===s?void 0:s[2],transform:"translate(".concat(-2*(e.length-1)+4*a,",0)rotate(").concat(180===r?180:0,")")},a)}))}))},Y=function(t){var e=t.intInfos,n=t.tickRotation,r=t.stnState,a=j(t,i);return h.jsx("g",g(g({},a),{},{children:e.map((function(t,e){var a,s,i,c;return h.jsx("g",{transform:"translate(0,".concat(28*e*(180===n?-1:1),")"),children:h.jsx(W,{lineName:t.name,foregroundColour:null!==(a=null===(s=t.theme)||void 0===s?void 0:s[3])&&void 0!==a?a:y.white,backgroundColour:null!==(i=null===(c=t.theme)||void 0===c?void 0:c[2])&&void 0!==i?i:"#aaaaaa",passed:-1===r})},e)}))}))},Z=function(t,e){return 2===t[e].parents.length||2===t[e].children.length?.25:0},q=function(){var t,e=S((function(t){return t.helper})),n=e.branches,r=e.routes,a=e.depsStr,s=S((function(t){return t.param})),i=s.svgWidth,c=s.svg_height,o=s.y_pc,l=s.padding,u=s.branchSpacingPct,m=s.direction,d=s.line_name,f=s.current_stn_idx,j=s.stn_list,y=b(j,Z,Z),v=x.useMemo((function(){return console.log("computing x shares"),Object.keys(j).reduce((function(t,e){return g(g({},t),{},p({},e,function(t,e,n){var r=k("linestart","lineend",e);if(r.nodes.includes(t))return k(r.nodes[1],t,e).len;for(var a=n.filter((function(e){return e.includes(t)}))[0],s=t;!r.nodes.includes(s);)s=a[a.indexOf(s)-1];for(var i=t;!r.nodes.includes(i);)i=a[a.indexOf(i)+1];var c="linestart"===s,o="lineend"===i;if(a.toString()===n[0].toString()){var l=[];return c||o?c?(l[0]=0,l[1]=k(r.nodes[1],i,e).len,l[2]=k(a[1],t,e).len,l[3]=k(t,i,e).len):(l[0]=k(r.nodes[1],s,e).len,l[1]=k(s,r.nodes.slice(-2)[0],e).len,l[2]=k(s,t,e).len,l[3]=k(t,a.slice(-2)[0],e).len):(l[0]=k(r.nodes[1],s,e).len,l[1]=k(s,i,e).len,l[2]=k(s,t,e).len,l[3]=k(t,i,e).len),l[0]+l[2]*l[1]/(l[2]+l[3])}if(c||o)return c?k(r.nodes[1],i,e).len-k(t,i,e).len:k(r.nodes[1],s,e).len+k(s,t,e).len;var u=[];return u[0]=k(r.nodes[1],s,e).len,u[1]=k(s,i,e).len,u[2]=k(s,t,e).len,u[3]=k(t,i,e).len,u[0]+u[2]*u[1]/(u[2]+u[3])}(e,y,n)))}),{})}),[n.toString(),JSON.stringify(y)]),_=k("linestart","lineend",y),w=k(_.nodes[1],_.nodes.slice(-2)[0],y),A=m===z.right?[i[N.RailMap]*l/100+65,i[N.RailMap]*(1-l/100)-20]:[i[N.RailMap]*l/100,i[N.RailMap]*(1-l/100)-65],B=Object.keys(v).reduce((function(t,e){return g(g({},t),{},p({},e,A[0]+v[e]/w.len*(A[1]-A[0])))}),{}),I=x.useMemo((function(){return console.log("computing y shares"),Object.keys(j).reduce((function(t,e){if(n[0].includes(e))return g(g({},t),{},p({},e,0));var r=n.slice(1).filter((function(t){return t.includes(e)}))[0];return g(g({},t),{},p({},e,j[r[0]].children.indexOf(r[1])?-2:2))}),{})}),[a]),M=Object.keys(I).reduce((function(t,e){return g(g({},t),{},p({},e,-I[e]*u*c/200))}),{}),E=x.useMemo((function(){return O(f,r,m)}),[f,m,r.toString()]),P=n.map((function(t){return R(t,E)})).reduce((function(t,e){return t.main.push(e.main),t.pass.push(e.pass),t}),{main:[],pass:[]}),D=Object.keys(P).reduce((function(t,e){return g(g({},t),{},p({},e,P[e].map((function(t){return Q(t,B,M)}))))}),{});return h.jsxs("g",{id:"main",style:(t={},p(t,"--y-percentage",o),p(t,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),t),children:[h.jsx(K,{paths:D}),h.jsx(X,{xs:B,ys:M,stnStates:E}),h.jsx("g",{id:"line_name",style:p({},"--translate-x",m===z.right?"".concat(A[0]-65,"px"):"".concat(A[1]+65,"px")),children:h.jsx(W,{lineName:d,foregroundColour:"var(--rmg-theme-fg)",backgroundColour:"var(--rmg-theme-colour)"})})]})},K=x.memo((function(t){return h.jsxs("g",{fill:"none",strokeWidth:4,children:[h.jsx("g",{stroke:"#aaa",strokeDasharray:4,children:t.paths.pass.map((function(t,e){return h.jsx("path",{d:t},e)}))}),h.jsx("g",{stroke:"var(--rmg-theme-colour)",children:t.paths.main.map((function(t,e){return h.jsx("path",{d:t},e)}))})]})}),(function(t,e){return JSON.stringify(t.paths)===JSON.stringify(e.paths)})),Q=function(t,e,n){var r,a=[];return t.forEach((function(t){var s=e[t],i=n[t];if(!r&&0!==r)return r=i,void a.push("M ".concat(s,",").concat(i));0===i?(i<r&&a.push("H ".concat(s-40),"a 40,40 0 0,0 40,-40","V ".concat(i)),i>r&&a.push("H ".concat(s-40),"a 40,40 0 0,1 40,40","V ".concat(i))):(i<r&&a.push("V ".concat(i+40),"a 40,40 0 0,1 40,-40","H ".concat(s)),i>r&&a.push("V ".concat(i-40),"a 40,40 0 0,0 40,40","H ".concat(s))),a.push("H ".concat(s)),r=i})),a.join(" ").replace(/( H ([\d.]+))+/g," H $2")},X=function(t){var e=t.xs,n=t.ys,r=t.stnStates,a=S((function(t){return t.param.stn_list}));return h.jsx("g",{id:"stn_icons",children:Object.keys(a).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(t){return h.jsx("g",{style:{transform:"translate(".concat(e[t],"px,").concat(n[t],"px)")},children:h.jsx(G,{stnId:t,stnState:r[t],stnY:n[t]})},t)}))})};function tt(t){return h.jsx("path",g({d:"M60,60 L0,0 L60,-60 H90 L40,-10 H150 V10 H40 L90,60z",fill:"black"},t))}var et=N.RailMap,nt=function(){var t=S((function(t){return t.app})).canvasScale,e=S((function(t){return t.param})),n=e.svgWidth,r=e.svg_height,a=e.direction,s=e.psd_num,i=e.info_panel_type,c=e.notesGZMTR,o=e.current_stn_idx,l=e.stn_list,u=e.theme,m=n[et],d=l[o];return h.jsxs(A,{type:et,svgWidth:m,svgHeight:r,canvasScale:t,theme:u,children:[h.jsx(rt,{}),h.jsx(B,{variant:i,isShowLight:i===w.gz2otis,isShowPSD:i===w.gz2otis&&s}),a===z.left&&d.parents.includes("linestart")||a===z.right&&d.children.includes("lineend")?h.jsx(ct,{}):h.jsxs(h.Fragment,{children:[h.jsx(q,{}),h.jsx(at,{}),c.map((function(t,e){return h.jsx(ot,{note:t},e)}))]}),i===w.gz2otis&&h.jsx("line",{x2:m,transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},rt=x.memo((function(){return h.jsx("defs",{children:h.jsx("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"})})})),at=function(){var t,e=S((function(t){return t.helper})).routes,n=S((function(t){return t.param})),r=n.direction,a=n.direction_gz_x,s=n.direction_gz_y,i=n.current_stn_idx,c=x.useMemo((function(){return m(new Set(e.reduce((function(t,e){return e.includes(i)?t.concat(e.filter((function(t){return!["linestart","lineend"].includes(t)})).slice(r===z.left?0:-1)[0]):t}),[]).filter((function(t){return t!==i}))))}),[i,r,e.toString()]),o={textAnchor:r===z.left?"start":"end",transform:"translate(".concat(r===z.left?65:-65,",-5)"),destIds:c};return h.jsxs("g",{id:"direction_gz",style:(t={},p(t,"--x-percentage",a),p(t,"--y-percentage",s),t),children:[h.jsx(tt,{transform:"scale(0.35)rotate(".concat(r===z.left?0:180,")")}),2!==c.length?h.jsx(st,g({},o)):h.jsx(it,g({},o))]})},st=function(t){var e=t.destIds,n=j(t,c),r=S((function(t){return t.param.stn_list}));return h.jsxs("g",g(g({},n),{},{children:[h.jsx("text",{className:"rmg-name__zh",fontSize:28,children:e.map((function(t){return r[t].name[0]})).join("/")+"方向"}),h.jsx("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+e.map((function(t){return r[t].name[1].replace("\\"," ")})).join("/")})]}))},it=function(t){var e=t.destIds,n=j(t,o),r=S((function(t){return t.param.direction})),a=S((function(t){return t.param.stn_list})),s=e.map((function(t){return a[t].name[0].length})),i=Math.min.apply(Math,m(s)),c=i>1&&s[0]!==s[1]?Math.abs(s[0]-s[1])/(i-1):0;return h.jsxs("g",g(g({},n),{},{children:[e.map((function(t,e){return h.jsxs(x.Fragment,{children:[h.jsx("text",{className:"rmg-name__zh",fontSize:25,x:r===z.left?0:-75,y:42*e-21,letterSpacing:s[e]>s[1-e]?"0em":"".concat(c,"em"),children:a[t].name[0]}),h.jsx("text",{className:"rmg-name__en",fontSize:11.5,x:r===z.left?0:-75,y:42*e-1,children:"Towards "+a[t].name[1].replace("\\"," ")})]},t)})),h.jsx("text",{className:"rmg-name__zh",fontSize:28,x:r===z.left?25*(Math.max.apply(Math,m(s))+1):0,y:5,children:"方向"})]}))},ct=x.memo((function(){return h.jsxs("g",{id:"terminus_gz",textAnchor:"middle",children:[h.jsx("text",{className:"rmg-name__zh",fontSize:90,children:"终 点 站"}),h.jsx("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),h.jsxs("g",{strokeWidth:8,stroke:"#000",children:[h.jsx("path",{d:"M -160,68 h -160"}),h.jsx("path",{d:"M 160,68 h 160"})]})]})})),ot=x.memo((function(t){var e,n=x.useRef(null),r=d(x.useState({width:0,height:0,y:0}),2),a=r[0],s=r[1];return x.useEffect((function(){n.current&&s(n.current.getBBox())}),[t.note[0],t.note[1]]),h.jsxs("g",{className:"note-box",style:(e={},p(e,"--x-percentage",t.note[2]),p(e,"--y-percentage",t.note[3]),e),children:[t.note[4]&&h.jsx("rect",{height:a.height+4,width:a.width+4,x:-2,y:a.y-2,fill:"none",stroke:"black",strokeWidth:.5}),h.jsxs("g",{ref:n,children:[h.jsx("g",{fontSize:16,letterSpacing:1.2,children:t.note[0].split("\n").map((function(t,e){return h.jsx("text",{className:"rmg-name__zh",y:18*e,children:t},e)}))}),h.jsx("g",{fontSize:10,letterSpacing:.33,transform:"translate(0,".concat(18*t.note[0].split("\n").length,")"),children:t.note[1].split("\n").map((function(e,n){var r;return h.jsx("text",{className:"rmg-name__en",y:11*n,textLength:n<((null===(r=t.note[1].match(/\n/g))||void 0===r?void 0:r.length)||0)?a.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:e},n)}))})]})]})}),(function(t,e){return t.note.toString()===e.note.toString()})),lt=x.memo((function(t){var e=t.stnName,n=t.onUpdate,r=x.useRef(null);return x.useEffect((function(){r.current&&n&&n(r.current.getBBox())}),[e.toString()]),h.jsxs("g",{ref:r,children:[h.jsx("text",{className:"rmg-name__zh",fontSize:90,children:e[0]}),h.jsx("g",{fontSize:36,children:e[1].split("\\").map((function(t,e){return h.jsx("text",{className:"rmg-name__en",dy:70+36*e,children:t},e)}))})]})}),(function(t,e){return t.stnName.toString()===e.stnName.toString()})),ut=function(t){var e=t.secondaryName,n=t.transform,r=x.useRef(null),a=d(x.useState({x:0,width:0}),2),s=a[0],i=a[1];return x.useEffect((function(){r.current&&i(r.current.getBBox())}),[e.toString()]),h.jsxs("g",{transform:n,children:[h.jsxs("g",{transform:"translate(0,4.5)",fontSize:36,children:[h.jsx("text",{textAnchor:"end",x:s.x-3,className:"rmg-name__zh",children:"("}),h.jsx("text",{textAnchor:"start",x:s.width+s.x+3,className:"rmg-name__zh",children:")"})]}),h.jsxs("g",{ref:r,textAnchor:"middle",children:[h.jsx("text",{className:"rmg-name__zh",fontSize:26,children:e[0]}),h.jsx("text",{dy:22,className:"rmg-name__en",fontSize:14,children:e[1]})]})]})},mt=function(){var t,e=S((function(t){return t.param.svg_height})),n=S((function(t){return t.param.svgWidth})),r=S((function(t){return t.param.direction})),a=S((function(t){return t.param.info_panel_type})),s=S((function(t){return t.param.line_num})),i=S((function(t){return t.param.current_stn_idx})),c=S((function(t){return t.param.stn_list[i]})),o=d(x.useState({width:0}),2),l=o[0],u=o[1],m=c[r===z.left?"parents":"children"],f={name:"translate(".concat((r===z.left?1:-1)*n[N.RunIn]/4,",45)"),next:"translate(".concat((r===z.left?1:-1)*n[N.RunIn]/10,",45)")},g={nameGroup:{x:n.runin/2,y:.5*e-50-18*(c.name[1].split("\\").length-1)-(c.secondaryName?29:0)},secondaryName:{x:0,y:70+36*c.name[1].split("\\").length}};return h.jsxs("g",{children:[h.jsxs("g",{transform:a===w.gz2otis?f.name:"",children:[h.jsxs("g",{textAnchor:"middle",transform:"translate(".concat(g.nameGroup.x,",").concat(g.nameGroup.y,")"),children:[h.jsx(lt,{stnName:c.name,onUpdate:u}),c.secondaryName&&h.jsx(ut,{secondaryName:c.secondaryName,transform:"translate(".concat(g.secondaryName.x,",").concat(g.secondaryName.y,")")})]}),h.jsx(P,{lineNum:s,stnNum:c.num,style:(t={},p(t,"--translate-x","".concat((n[N.RunIn]+l.width)/2+55,"px")),p(t,"--translate-y","".concat(.5*e-30-18*(c.name[1].split("\\").length-1)-(c.secondaryName?29:0),"px")),p(t,"transform","translate(var(--translate-x, 800px), var(--translate-y, 145px))"),t),large:!0})]}),h.jsx("g",{transform:a===w.gz2otis?f.next:"",children:!m||m.includes("linestart")||m.includes("lineend")?h.jsx(h.Fragment,{}):1===m.length?h.jsx(dt,{nextId:m[0],nameBBox:l}):h.jsx(ht,{nextIds:m,nameBBox:l})})]})},dt=function(t){var e,n=t.nextId,r=t.nameBBox,a=S((function(t){return t.param.svgWidth})),s=S((function(t){return t.param.direction})),i=S((function(t){return t.param.stn_list[n]})),c=i.name,o=i.secondaryName,l=d(x.useState({width:0}),2),u=l[0],m=l[1],f=x.useRef(null);x.useEffect((function(){f.current&&m(f.current.getBBox())}),[c.toString()]);var g=c[0].length,j=(a[N.RunIn]-r.width)/2;return h.jsxs(h.Fragment,{children:[h.jsxs("g",{id:"big_next",children:[h.jsxs("g",{textAnchor:"middle",style:p({},"--translate-x",s===z.left?"80px":"".concat(g<=2?a[N.RunIn]-45-u.width-70:a[N.RunIn]-45-u.width-52.5,"px")),children:[h.jsx("text",{className:"rmg-name__zh",fontSize:35,children:"下站"}),h.jsx("text",{className:"rmg-name__en",fontSize:17,dy:30,children:"Next"})]}),h.jsxs("g",{textAnchor:"start",ref:f,style:p({},"--translate-x",s===z.left?"".concat(g<=2?150:132.5,"px"):"".concat(a[N.RunIn]-45-u.width,"px")),children:[h.jsx("text",{className:"rmg-name__zh",fontSize:35,children:c[0]}),h.jsx("g",{fontSize:17,children:c[1].split("\\").map((function(t,e){return h.jsx("text",{className:"rmg-name__en",dy:30+17*e,children:t},e)}))})]}),o&&h.jsx("g",{textAnchor:"middle",style:p({},"--translate-x",s===z.left?"".concat(g<=2?150:132.5,"px"):"".concat(a[N.RunIn]-45-u.width,"px")),children:h.jsx(ft,{secName:o,transform:"translate(".concat(u.width/2,",").concat(30+17*c[1].split("\\").length+5,")")})})]}),h.jsx(tt,{id:"arrow",style:(e={},p(e,"--translate-x",s===z.left?"".concat((115+35*((g<=2?1:.5)+g)+j)/2-20,"px"):"".concat((a[N.RunIn]-45-u.width-(g<=2?105:87.5)+j+t.nameBBox.width+55+25.9)/2+20,"px")),p(e,"--rotate",s===z.left?"0deg":"180deg"),e)})]})},ft=function(t){var e=t.secName,n=j(t,l),r=x.useRef(null),a=d(x.useState({x:0,width:0}),2),s=a[0],i=a[1];return x.useEffect((function(){r.current&&i(r.current.getBBox())}),[t.secName.toString()]),h.jsxs("g",g(g({},n),{},{children:[h.jsxs("g",{transform:"translate(0,2.5)",fontSize:25,children:[h.jsx("text",{textAnchor:"end",x:s.x-3,className:"rmg-name__zh",children:"("}),h.jsx("text",{textAnchor:"start",x:s.width+s.x+3,className:"rmg-name__zh",children:")"})]}),h.jsxs("g",{ref:r,children:[h.jsx("text",{className:"rmg-name__zh",fontSize:18,children:e[0]}),h.jsx("text",{className:"rmg-name__en",fontSize:10,dy:15,children:e[1]})]})]}))},ht=function(t){var e,n=t.nextIds,r=t.nameBBox,a=S((function(t){return t.helper})).routes,s=S((function(t){return t.param.svgWidth})),i=S((function(t){return t.param.direction})),c=S((function(t){return t.param.stn_list})),o=n.map((function(t){return c[t].name})),l=d(x.useState({width:0}),2),u=l[0],f=l[1],j=x.useRef([]);x.useEffect((function(){f((function(t){return g(g({},t),{},{width:0})})),j.current.forEach((function(t){var e=null==t?void 0:t.getBBox();f((function(t){return e?t.width>e.width?t:e:t}))}))}),[o.toString()]);var y=t.nextIds.map((function(t){return a.reduce((function(e,n){return n.includes(t)?e.concat(n.filter((function(t){return!["linestart","lineend"].includes(t)})).slice(i===z.left?0:-1)[0]):e}),[])})),v=Math.max.apply(Math,m(o.map((function(t){return t[0].length})))),_=(s[N.RunIn]-r.width)/2;return h.jsxs(h.Fragment,{children:[h.jsx("g",{id:"big_next_2",children:o.map((function(t,e){return h.jsxs(x.Fragment,{children:[h.jsxs("g",{textAnchor:"middle",style:p({},"--translate-x",i===z.left?"72px":"".concat(s[N.RunIn]-45-u.width-41,"px")),children:[h.jsx("text",{className:"rmg-name__zh",children:"下站"}),h.jsx("text",{className:"rmg-name__en",y:22,children:"Next"})]}),h.jsxs("g",{ref:function(t){return j.current[e]=t},textAnchor:"start",style:p({},"--translate-x",i===z.left?"113px":"".concat(s[N.RunIn]-45-u.width,"px")),children:[h.jsx("text",{className:"rmg-name__zh",children:t[0]}),t[1].split("\\").map((function(t,e){return h.jsx("text",{className:"rmg-name__en",y:22+13*e,children:t},e)})),h.jsx("text",{className:"rmg-name__zh",y:-35,children:y[e].map((function(t){return c[t].name[0]})).join("/")+"方向"}),h.jsx("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20,children:"Towards "+y[e].map((function(t){return c[t].name[1]})).join("/").replace("\\"," ")})]})]},e)}))}),h.jsx(tt,{id:"arrow",style:(e={},p(e,"--translate-x",i===z.left?"".concat((99+27*(1+v)+_)/2-20,"px"):"".concat((s[N.RunIn]-45-u.width-41-27+_+t.nameBBox.width+55+25.9)/2+20,"px")),p(e,"--rotate",i===z.left?"0deg":"180deg"),e)})]})};function xt(t){var e=t.num,n=j(t,u);return h.jsxs("g",g(g({textAnchor:"middle",fill:"var(--rmg-theme-fg)"},n),{},{children:[h.jsx("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),h.jsx("text",{className:"rmg-name__en",fontSize:38,dy:-9.5,children:e}),h.jsx("text",{className:"rmg-name__zh",fontSize:13,dy:10,children:"站台"}),h.jsx("text",{className:"rmg-name__en",fontSize:9,dy:21,children:"Platform"})]}))}function gt(t){var e=t.canvasType,n=S((function(t){return t.param})),r=n.svgWidth,a=n.svg_height;return h.jsxs("g",{id:"otis_frame",strokeWidth:3,stroke:"black",children:[h.jsx("line",{y2:a,transform:"translate(".concat(r[e]/2,",0)")}),h.jsx("line",{x2:r[e],transform:"translate(0,90)"})]})}var pt=N.RunIn;function jt(){var t,e=S((function(t){return t.app})).canvasScale,n=S((function(t){return t.param})),r=n.svgWidth,a=n.svg_height,s=n.direction,i=n.info_panel_type,c=n.platform_num,o=n.psd_num,l=n.theme,u=r[pt],m={platform:"translate(".concat(s===z.left?50:-50,",45)")};return h.jsxs(A,{type:pt,svgWidth:u,svgHeight:a,canvasScale:e,theme:l,children:[h.jsx(B,{variant:i,isShowLight:i!==w.gz2otis,isShowPSD:i!==w.gz2otis&&o}),h.jsx("g",{transform:i===w.gz2otis?m.platform:"",children:h.jsx(xt,{num:c,style:(t={},p(t,"--translate-x","".concat(s===z.left?u-100:100,"px")),p(t,"--translate-y","calc(var(--rmg-svg-height) / 2 - 30px)"),p(t,"transform","translate(var(--translate-x, 100px), var(--translate-y))"),t)})}),h.jsx(mt,{}),i===w.gz2otis&&h.jsx(gt,{canvasType:pt})]})}t("default",{runin:h.jsx(jt,{}),railmap:h.jsx(nt,{})})}}}))}();
