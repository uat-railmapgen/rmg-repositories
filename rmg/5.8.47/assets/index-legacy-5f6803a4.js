!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=["num","inStrip"],n=["lineNum","stnNum","passed","large"],r=["stnName","onUpdate","passed"],a=["passed"],i=["intInfos","stnState","tickRotation"],c=["intInfos","tickRotation","stnState"],o=["destIds"],s=["destIds"],l=["secName"],u=["num"];function m(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,i,c,o=[],s=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(o.push(r.value),o.length!==e);s=!0);}catch(u){l=!0,a=u}finally{try{if(!s&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw a}}return o}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,n||"default");if("object"!==t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function y(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}System.register(["./vendor-legacy-6b925fe2.js","./index-legacy-e028ec5b.js","./share-legacy-ca6bf197.js"],(function(t,f){"use strict";var h,g,S,v,_,z,N,w,b,k,O,R,j,A,B,I;return{setters:[function(t){h=t.j,g=t.M,S=t.l,v=t.z,_=t.ab},function(t){z=t.at,N=t.u,w=t.j,b=t.S,k=t.ar,O=t.P},function(t){R=t.a,j=t.c,A=t.b,B=t.e,I=t.S}],execute:function(){function f(t){var n=t.num,r=t.inStrip,a=y(t,e);return h("g",p(p({textAnchor:"middle",fill:r?g.black:"var(--rmg-theme-fg)"},a),{},{children:[S("rect",{height:40,width:40,rx:4,x:-20,fill:r?"#fff":"var(--rmg-theme-colour)"}),S("text",{className:"rmg-name__en",fontSize:20,dy:12,children:n}),S("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"屏蔽门"}),S("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]}))}var M=function(t){var e=function(t){switch(t){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(t.variant),n=v.useMemo((function(){switch(t.variant){case"gz1":return S("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return S("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return S("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return S("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return S("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return S("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return S("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return S("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return S(_,{})}}),[t.variant]);return h("g",{transform:"translate(0,".concat("gz4"===t.variant?-20:0,")"),children:[S("rect",{id:"strip_gz",style:x({},"--height","".concat(e,"px"))}),S("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:t.isShowLight&&n}),!1!==t.isShowPSD&&S(E,p({},t))]})},E=v.memo((function(t){var e,n=["gz28","gz2otis","gz6","gzgf"].includes(t.variant),r=function(t){switch(t){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(t.variant);return S(f,{num:t.isShowPSD,inStrip:n,style:(e={},x(e,"--psd-dy",r),x(e,"transform","translate(var(--translate-x), var(--translate-y))"),x(e,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),x(e,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),e)})}),(function(t,e){return t.variant===e.variant&&t.isShowPSD===e.isShowPSD})),P=v.memo((function(t){var e=t.passed,n=t.large;return S("path",{d:n?"M0,12.95 V-12.95 H-12.95 a12.95,12.95 0 0,0 0,25.9 h25.9 a12.95,12.95 0 0,0 0,-25.9 H0":"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0",fill:"#fff",strokeWidth:2,stroke:e?"#aaa":"var(--rmg-theme-colour)"})}),(function(t,e){return t.passed===e.passed&&t.large===e.large}));function H(t){var e=t.lineNum,r=t.stnNum,a=t.passed,i=t.large,c=y(t,n),o=v.useRef(null),s=v.useRef(null),l=d(v.useState({width:0}),2),u=l[0],m=l[1],f=d(v.useState({width:0}),2),g=f[0],x=f[1];v.useEffect((function(){o.current&&m(o.current.getBBox()),s.current&&x(s.current.getBBox())}),[e,r]);var _=15/Math.max(15,u.width),z=2===e.length&&2===r.length?_:15/Math.max(15,g.width);return h("g",p(p({},c),{},{children:[S(P,{passed:a,large:i}),h("g",{textAnchor:"middle",fontSize:13.5,transform:i?"scale(1.4)":"",fill:a?"#aaa":"#000",children:[S("g",{transform:"translate(-9.25,0)scale(".concat(_,")"),children:S("text",{ref:o,className:"rmg-name__zh",children:e})}),S("g",{transform:"translate(9.25,0)scale(".concat(z,")"),children:S("text",{ref:s,className:"rmg-name__zh",children:r})})]})]}))}var D=v.memo((function(t){var e=t.lineName,n=t.commonPart,r=v.useRef(null),a=d(v.useState({x:0,height:0,width:0}),2),i=a[0],c=a[1];v.useEffect((function(){r.current&&c(r.current.getBBox())}),[e.toString()]);var o=T/Math.max(T,i.width),s=(-i.x-i.width/2)*o,l=i.height*(1-o)*1.2/2;return S("g",{ref:r,transform:"translate(".concat(s,",").concat(l,")scale(").concat(o,")"),children:h("text",{className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end",children:[n,S("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:e[0].slice(n.length).trim()}),S("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:e[1].slice(n.length).trim()})]})})}),(function(t,e){return t.lineName.toString()===e.lineName.toString()}));function W(t){return S("rect",p({x:-22.5,height:24,width:45,rx:4.5},t))}var T=42,C=v.memo((function(t){var e=t.lineName,n=t.foregroundColour,r=t.backgroundColour,a=t.passed,i=d(U(e),2),c=i[0],o=i[1],s=v.useRef(null),l=v.useRef(null),u=d(v.useState({width:0}),2),m=u[0],f=u[1],p=d(v.useState({width:0}),2),x=p[0],y=p[1];v.useEffect((function(){s.current&&f(s.current.getBBox()),l.current&&y(l.current.getBBox())}),[e.toString()]);var z=T/Math.max(T,m.width),N=T/Math.max(T,x.width),w={nameZh:{y:7.3+13.5*(1-z)*z/2},nameEn:{y:19.5-9*(1-N)*N/2}};return h("g",{textAnchor:"middle",fill:a?g.white:n,children:[S(W,{fill:a?"#aaa":r}),2===c?S(D,{lineName:e,commonPart:o}):h(_,{children:[S("text",{ref:s,className:"rmg-name__zh",fontSize:12,transform:"translate(0,".concat(w.nameZh.y,")scale(").concat(z,")"),children:1===c?h(_,{children:[S("tspan",{fontSize:16,dy:.7,className:"rmg-name__zh",children:o}),S("tspan",{dy:-.7,className:"rmg-name__zh",children:e[0].slice(o.length)})]}):e[0]}),S("text",{ref:l,className:"rmg-name__en",fontSize:8,transform:"translate(0,".concat(w.nameEn.y,")scale(").concat(N,")"),children:e[1]})]})]})}),(function(t,e){return t.lineName.toString()===e.lineName.toString()&&t.foregroundColour===e.foregroundColour&&t.backgroundColour===e.backgroundColour&&t.passed===e.passed})),U=function(t){var e=t[0].match(/^(\d+)\D+$/);if(e)return[1,e[1]];var n=t.map((function(t){return t.match(/^(\w+).+$/)}));return n[0]&&n[1]&&n[0][1]===n[1][1]?[2,n[0][1]]:[3,""]},L=v.memo((function(t){var e=t.stnName,n=t.onUpdate,r=v.useRef(null);return v.useEffect((function(){r.current&&n&&n(r.current.getBBox())}),[e.toString()]),h("g",{ref:r,children:[S("text",{className:"rmg-name__zh",fontSize:18,children:e[0]}),S("g",{fontSize:10.5,children:e[1].split("\\").map((function(t,e){return S("text",{className:"rmg-name__en",dy:16+11*e,children:t},e)}))})]})}),(function(t,e){return t.stnName.toString()===e.stnName.toString()}));function V(t){var e=t.stnName,n=t.onUpdate,a=t.passed,i=y(t,r),c=v.useRef(null),o=d(v.useState({x:0,width:0}),2),s=o[0],l=o[1];return v.useEffect((function(){if(c.current){var t=c.current.getBBox();l(t),n&&n(t)}}),[e.toString()]),h("g",p(p({fill:a?"#aaa":"#000"},i),{},{children:[h("g",{transform:"translate(0,3)",fontSize:18,children:[S("text",{textAnchor:"end",x:s.x-3,className:"rmg-name__zh",children:"("}),S("text",{textAnchor:"start",x:s.width+s.x+3,className:"rmg-name__zh",children:")"})]}),h("g",{ref:c,textAnchor:"middle",children:[S("text",{className:"rmg-name__zh",fontSize:13,children:e[0]}),S("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:e[1]})]})]}))}function F(t){var e=t.passed,n=y(t,a);return h("g",p(p({textAnchor:"middle",fill:e?"#aaa":"var(--rmg-theme-colour)"},n),{},{children:[S("text",{className:"rmg-name__zh",fontSize:13,children:"快车停靠站"}),S("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]}))}function G(t){var e=t.primaryName,n=t.secondaryName,r=t.stationState,a=t.flipped,i=t.express,c=d(v.useState({width:0}),2),o=c[0],s=c[1],l=d(v.useState({x:0,width:-20}),2),u=l[0],m=l[1],f=e[1].split("\\").length,g={g:{x:0,y:a?17.5:-20-14*f*Math.cos(-45)},StationSecondaryName:{x:(o.width+u.width/2+10)*(a?-1:1),y:2+5*(f-1)},ExpressTag:{x:(o.width+u.width+20+35)*(a?-1:1),y:2+5*(f-1)}};return h("g",{textAnchor:a?"end":"start",fill:function(t){switch(t){case z.PASSED:return"#aaa";case z.CURRENT:return"#f00";case z.FUTURE:return"#000"}}(r),transform:"translate(".concat(g.g.x,",").concat(g.g.y,")rotate(-45)"),children:[S(L,{stnName:e,onUpdate:s}),n&&S(V,{stnName:n,onUpdate:m,passed:r===z.PASSED,transform:"translate(".concat(g.StationSecondaryName.x,",").concat(g.StationSecondaryName.y,")")}),i&&S(F,{passed:r===z.PASSED,transform:"translate(".concat(g.ExpressTag.x,",").concat(g.ExpressTag.y,")")})]})}var $=function(t){var e=t.stnId,n=t.stnState,r=t.stnY,a=N((function(t){return t.param.theme})),i=N((function(t){return t.param.line_name})),c=N((function(t){return t.param.line_num})),o=N((function(t){return t.param.stn_list[e]})),s=2===o.parents.length||2===o.children.length,l=r>0||1===o.parents.indexOf(o.branch.left[1]||"")||1===o.children.indexOf(o.branch.right[1]||"")?180:0,u=o.name[1].split("\\").length,d=s?180===l?16+12*(u-1)*Math.cos(-45):-9:180===l?-6:(25+15*(u-1))*Math.cos(-45);return h(_,{children:[S(J,{intInfos:s?[[a[0],a[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)"].concat(m(i))].concat(o.transfer.info[0]):o.transfer.info[0],stnState:n,tickRotation:l}),S(H,{lineNum:c,stnNum:o.num,passed:-1===n}),S("g",{transform:"translate(".concat(-d,",0)"),children:S(G,{primaryName:o.name,secondaryName:o.secondaryName||void 0,stationState:n,flipped:180===l,express:o.services.includes(w.express)})})]})},J=function(t){return h(_,{children:[S(Y,p({strokeWidth:4},t)),S(Z,p({transform:"translate(0,".concat(180===t.tickRotation?-47:23,")")},t))]})},Y=function(t){var e=t.intInfos,n=t.stnState,r=t.tickRotation,a=y(t,i);return S("g",p(p({},a),{},{children:e.map((function(t,a){return S("use",{xlinkHref:"#inttick",stroke:-1===n?"#aaa":t[2],transform:"translate(".concat(-2*(e.length-1)+4*a,",0)rotate(").concat(180===r?180:0,")")},a)}))}))},Z=function(t){var e=t.intInfos,n=t.tickRotation,r=t.stnState,a=y(t,c);return S("g",p(p({},a),{},{children:e.map((function(t,e){return S("g",{transform:"translate(0,".concat(28*e*(180===n?-1:1),")"),children:S(C,{lineName:[t[4],t[5]],foregroundColour:t[3],backgroundColour:t[2],passed:-1===r})},e)}))}))},q=function(t,e){return 2===t[e].parents.length||2===t[e].children.length?.25:0},K=function(){var t,e=N((function(t){return t.helper})),n=e.branches,r=e.routes,a=e.depsStr,i=N((function(t){return t.param})),c=i.svgWidth,o=i.svg_height,s=i.y_pc,l=i.padding,u=i.branchSpacingPct,m=i.direction,d=i.line_name,f=i.current_stn_idx,g=i.stn_list,y=R(g,q,q),_=v.useMemo((function(){return console.log("computing x shares"),Object.keys(g).reduce((function(t,e){return p(p({},t),{},x({},e,function(t,e,n){var r=j("linestart","lineend",e);if(r.nodes.includes(t))return j(r.nodes[1],t,e).len;for(var a=n.filter((function(e){return e.includes(t)}))[0],i=t;!r.nodes.includes(i);)i=a[a.indexOf(i)-1];for(var c=t;!r.nodes.includes(c);)c=a[a.indexOf(c)+1];var o="linestart"===i,s="lineend"===c;if(a.toString()===n[0].toString()){var l=[];return o||s?o?(l[0]=0,l[1]=j(r.nodes[1],c,e).len,l[2]=j(a[1],t,e).len,l[3]=j(t,c,e).len):(l[0]=j(r.nodes[1],i,e).len,l[1]=j(i,r.nodes.slice(-2)[0],e).len,l[2]=j(i,t,e).len,l[3]=j(t,a.slice(-2)[0],e).len):(l[0]=j(r.nodes[1],i,e).len,l[1]=j(i,c,e).len,l[2]=j(i,t,e).len,l[3]=j(t,c,e).len),l[0]+l[2]*l[1]/(l[2]+l[3])}if(o||s)return o?j(r.nodes[1],c,e).len-j(t,c,e).len:j(r.nodes[1],i,e).len+j(i,t,e).len;var u=[];return u[0]=j(r.nodes[1],i,e).len,u[1]=j(i,c,e).len,u[2]=j(i,t,e).len,u[3]=j(t,c,e).len,u[0]+u[2]*u[1]/(u[2]+u[3])}(e,y,n)))}),{})}),[n.toString(),JSON.stringify(y)]),z=j("linestart","lineend",y),w=j(z.nodes[1],z.nodes.slice(-2)[0],y),O=m===b.right?[c[k.RailMap]*l/100+65,c[k.RailMap]*(1-l/100)-20]:[c[k.RailMap]*l/100,c[k.RailMap]*(1-l/100)-65],I=Object.keys(_).reduce((function(t,e){return p(p({},t),{},x({},e,O[0]+_[e]/w.len*(O[1]-O[0])))}),{}),M=v.useMemo((function(){return console.log("computing y shares"),Object.keys(g).reduce((function(t,e){if(n[0].includes(e))return p(p({},t),{},x({},e,0));var r=n.slice(1).filter((function(t){return t.includes(e)}))[0];return p(p({},t),{},x({},e,g[r[0]].children.indexOf(r[1])?-2:2))}),{})}),[a]),E=Object.keys(M).reduce((function(t,e){return p(p({},t),{},x({},e,-M[e]*u*o/200))}),{}),P=v.useMemo((function(){return A(f,r,m)}),[f,m,r.toString()]),H=n.map((function(t){return B(t,P)})).reduce((function(t,e){return t.main.push(e.main),t.pass.push(e.pass),t}),{main:[],pass:[]}),D=Object.keys(H).reduce((function(t,e){return p(p({},t),{},x({},e,H[e].map((function(t){return X(t,I,E)}))))}),{});return h("g",{id:"main",style:(t={},x(t,"--y-percentage",s),x(t,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),t),children:[S(Q,{paths:D}),S(tt,{xs:I,ys:E,stnStates:P}),S("g",{id:"line_name",style:x({},"--translate-x",m===b.right?"".concat(O[0]-65,"px"):"".concat(O[1]+65,"px")),children:S(C,{lineName:d,foregroundColour:"var(--rmg-theme-fg)",backgroundColour:"var(--rmg-theme-colour)"})})]})},Q=v.memo((function(t){return h("g",{fill:"none",strokeWidth:4,children:[S("g",{stroke:"#aaa",strokeDasharray:4,children:t.paths.pass.map((function(t,e){return S("path",{d:t},e)}))}),S("g",{stroke:"var(--rmg-theme-colour)",children:t.paths.main.map((function(t,e){return S("path",{d:t},e)}))})]})}),(function(t,e){return JSON.stringify(t.paths)===JSON.stringify(e.paths)})),X=function(t,e,n){var r,a=[];return t.forEach((function(t){var i=e[t],c=n[t];if(!r&&0!==r)return r=c,void a.push("M ".concat(i,",").concat(c));0===c?(c<r&&a.push("H ".concat(i-40),"a 40,40 0 0,0 40,-40","V ".concat(c)),c>r&&a.push("H ".concat(i-40),"a 40,40 0 0,1 40,40","V ".concat(c))):(c<r&&a.push("V ".concat(c+40),"a 40,40 0 0,1 40,-40","H ".concat(i)),c>r&&a.push("V ".concat(c-40),"a 40,40 0 0,0 40,40","H ".concat(i))),a.push("H ".concat(i)),r=c})),a.join(" ").replace(/( H ([\d.]+))+/g," H $2")},tt=function(t){var e=t.xs,n=t.ys,r=t.stnStates,a=N((function(t){return t.param.stn_list}));return S("g",{id:"stn_icons",children:Object.keys(a).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(t){return S("g",{style:{transform:"translate(".concat(e[t],"px,").concat(n[t],"px)")},children:S($,{stnId:t,stnState:r[t],stnY:n[t]})},t)}))})};function et(t){return S("path",p({d:"M60,60 L0,0 L60,-60 H90 L40,-10 H150 V10 H40 L90,60z",fill:"black"},t))}var nt=k.RailMap,rt=function(){var t=N((function(t){return t.app})).canvasScale,e=N((function(t){return t.param})),n=e.svgWidth,r=e.svg_height,a=e.direction,i=e.psd_num,c=e.info_panel_type,o=e.notesGZMTR,s=e.current_stn_idx,l=e.stn_list,u=e.theme,m=n[nt],d=l[s];return h(I,{type:nt,svgWidth:m,svgHeight:r,canvasScale:t,theme:u,children:[S(at,{}),S(M,{variant:c,isShowLight:c===O.gz2otis,isShowPSD:c===O.gz2otis&&i}),a===b.left&&d.parents.includes("linestart")||a===b.right&&d.children.includes("lineend")?S(st,{}):h(_,{children:[S(K,{}),S(it,{}),o.map((function(t,e){return S(lt,{note:t},e)}))]}),c===O.gz2otis&&S("line",{x2:m,transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},at=v.memo((function(){return S("defs",{children:S("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"})})})),it=function(){var t,e=N((function(t){return t.helper})).routes,n=N((function(t){return t.param})),r=n.direction,a=n.direction_gz_x,i=n.direction_gz_y,c=n.current_stn_idx,o=v.useMemo((function(){return m(new Set(e.reduce((function(t,e){return e.includes(c)?t.concat(e.filter((function(t){return!["linestart","lineend"].includes(t)})).slice(r===b.left?0:-1)[0]):t}),[]).filter((function(t){return t!==c}))))}),[c,r,e.toString()]),s={textAnchor:r===b.left?"start":"end",transform:"translate(".concat(r===b.left?65:-65,",-5)"),destIds:o};return h("g",{id:"direction_gz",style:(t={},x(t,"--x-percentage",a),x(t,"--y-percentage",i),t),children:[S(et,{transform:"scale(0.35)rotate(".concat(r===b.left?0:180,")")}),2!==o.length?S(ct,p({},s)):S(ot,p({},s))]})},ct=function(t){var e=t.destIds,n=y(t,o),r=N((function(t){return t.param.stn_list}));return h("g",p(p({},n),{},{children:[S("text",{className:"rmg-name__zh",fontSize:28,children:e.map((function(t){return r[t].name[0]})).join("/")+"方向"}),S("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+e.map((function(t){return r[t].name[1].replace("\\"," ")})).join("/")})]}))},ot=function(t){var e=t.destIds,n=y(t,s),r=N((function(t){return t.param.direction})),a=N((function(t){return t.param.stn_list})),i=e.map((function(t){return a[t].name[0].length})),c=Math.min.apply(Math,m(i)),o=c>1&&i[0]!==i[1]?Math.abs(i[0]-i[1])/(c-1):0;return h("g",p(p({},n),{},{children:[e.map((function(t,e){return h(v.Fragment,{children:[S("text",{className:"rmg-name__zh",fontSize:25,x:r===b.left?0:-75,y:42*e-21,letterSpacing:i[e]>i[1-e]?"0em":"".concat(o,"em"),children:a[t].name[0]}),S("text",{className:"rmg-name__en",fontSize:11.5,x:r===b.left?0:-75,y:42*e-1,children:"Towards "+a[t].name[1].replace("\\"," ")})]},t)})),S("text",{className:"rmg-name__zh",fontSize:28,x:r===b.left?25*(Math.max.apply(Math,m(i))+1):0,y:5,children:"方向"})]}))},st=v.memo((function(){return h("g",{id:"terminus_gz",textAnchor:"middle",children:[S("text",{className:"rmg-name__zh",fontSize:90,children:"终 点 站"}),S("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),h("g",{strokeWidth:8,stroke:"#000",children:[S("path",{d:"M -160,68 h -160"}),S("path",{d:"M 160,68 h 160"})]})]})})),lt=v.memo((function(t){var e,n=v.useRef(null),r=d(v.useState({width:0,height:0,y:0}),2),a=r[0],i=r[1];return v.useEffect((function(){n.current&&i(n.current.getBBox())}),[t.note[0],t.note[1]]),h("g",{className:"note-box",style:(e={},x(e,"--x-percentage",t.note[2]),x(e,"--y-percentage",t.note[3]),e),children:[t.note[4]&&S("rect",{height:a.height+4,width:a.width+4,x:-2,y:a.y-2,fill:"none",stroke:"black",strokeWidth:.5}),h("g",{ref:n,children:[S("g",{fontSize:16,letterSpacing:1.2,children:t.note[0].split("\n").map((function(t,e){return S("text",{className:"rmg-name__zh",y:18*e,children:t},e)}))}),S("g",{fontSize:10,letterSpacing:.33,transform:"translate(0,".concat(18*t.note[0].split("\n").length,")"),children:t.note[1].split("\n").map((function(e,n){var r;return S("text",{className:"rmg-name__en",y:11*n,textLength:n<((null===(r=t.note[1].match(/\n/g))||void 0===r?void 0:r.length)||0)?a.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:e},n)}))})]})]})}),(function(t,e){return t.note.toString()===e.note.toString()})),ut=v.memo((function(t){var e=t.stnName,n=t.onUpdate,r=v.useRef(null);return v.useEffect((function(){r.current&&n&&n(r.current.getBBox())}),[e.toString()]),h("g",{ref:r,children:[S("text",{className:"rmg-name__zh",fontSize:90,children:e[0]}),S("g",{fontSize:36,children:e[1].split("\\").map((function(t,e){return S("text",{className:"rmg-name__en",dy:70+36*e,children:t},e)}))})]})}),(function(t,e){return t.stnName.toString()===e.stnName.toString()})),mt=function(t){var e=t.secondaryName,n=t.transform,r=v.useRef(null),a=d(v.useState({x:0,width:0}),2),i=a[0],c=a[1];return v.useEffect((function(){r.current&&c(r.current.getBBox())}),[e.toString()]),h("g",{transform:n,children:[h("g",{transform:"translate(0,4.5)",fontSize:36,children:[S("text",{textAnchor:"end",x:i.x-3,className:"rmg-name__zh",children:"("}),S("text",{textAnchor:"start",x:i.width+i.x+3,className:"rmg-name__zh",children:")"})]}),h("g",{ref:r,textAnchor:"middle",children:[S("text",{className:"rmg-name__zh",fontSize:26,children:e[0]}),S("text",{dy:22,className:"rmg-name__en",fontSize:14,children:e[1]})]})]})},dt=function(){var t,e=N((function(t){return t.param.svg_height})),n=N((function(t){return t.param.svgWidth})),r=N((function(t){return t.param.direction})),a=N((function(t){return t.param.info_panel_type})),i=N((function(t){return t.param.line_num})),c=N((function(t){return t.param.current_stn_idx})),o=N((function(t){return t.param.stn_list[c]})),s=d(v.useState({width:0}),2),l=s[0],u=s[1],m=o[r===b.left?"parents":"children"],f={name:"translate(".concat((r===b.left?1:-1)*n[k.RunIn]/4,",45)"),next:"translate(".concat((r===b.left?1:-1)*n[k.RunIn]/10,",45)")},g={nameGroup:{x:n.runin/2,y:.5*e-50-18*(o.name[1].split("\\").length-1)-(o.secondaryName?29:0)},secondaryName:{x:0,y:70+36*o.name[1].split("\\").length}};return h("g",{children:[h("g",{transform:a===O.gz2otis?f.name:"",children:[h("g",{textAnchor:"middle",transform:"translate(".concat(g.nameGroup.x,",").concat(g.nameGroup.y,")"),children:[S(ut,{stnName:o.name,onUpdate:u}),o.secondaryName&&S(mt,{secondaryName:o.secondaryName,transform:"translate(".concat(g.secondaryName.x,",").concat(g.secondaryName.y,")")})]}),S(H,{lineNum:i,stnNum:o.num,style:(t={},x(t,"--translate-x","".concat((n[k.RunIn]+l.width)/2+55,"px")),x(t,"--translate-y","".concat(.5*e-30-18*(o.name[1].split("\\").length-1)-(o.secondaryName?29:0),"px")),x(t,"transform","translate(var(--translate-x, 800px), var(--translate-y, 145px))"),t),large:!0})]}),S("g",{transform:a===O.gz2otis?f.next:"",children:!m||m.includes("linestart")||m.includes("lineend")?S(_,{}):1===m.length?S(ft,{nextId:m[0],nameBBox:l}):S(gt,{nextIds:m,nameBBox:l})})]})},ft=function(t){var e,n=t.nextId,r=t.nameBBox,a=N((function(t){return t.param.svgWidth})),i=N((function(t){return t.param.direction})),c=N((function(t){return t.param.stn_list[n]})),o=c.name,s=c.secondaryName,l=d(v.useState({width:0}),2),u=l[0],m=l[1],f=v.useRef(null);v.useEffect((function(){f.current&&m(f.current.getBBox())}),[o.toString()]);var g=o[0].length,p=(a[k.RunIn]-r.width)/2;return h(_,{children:[h("g",{id:"big_next",children:[h("g",{textAnchor:"middle",style:x({},"--translate-x",i===b.left?"80px":"".concat(g<=2?a[k.RunIn]-45-u.width-70:a[k.RunIn]-45-u.width-52.5,"px")),children:[S("text",{className:"rmg-name__zh",fontSize:35,children:"下站"}),S("text",{className:"rmg-name__en",fontSize:17,dy:30,children:"Next"})]}),h("g",{textAnchor:"start",ref:f,style:x({},"--translate-x",i===b.left?"".concat(g<=2?150:132.5,"px"):"".concat(a[k.RunIn]-45-u.width,"px")),children:[S("text",{className:"rmg-name__zh",fontSize:35,children:o[0]}),S("g",{fontSize:17,children:o[1].split("\\").map((function(t,e){return S("text",{className:"rmg-name__en",dy:30+17*e,children:t},e)}))})]}),s&&S("g",{textAnchor:"middle",style:x({},"--translate-x",i===b.left?"".concat(g<=2?150:132.5,"px"):"".concat(a[k.RunIn]-45-u.width,"px")),children:S(ht,{secName:s,transform:"translate(".concat(u.width/2,",").concat(30+17*o[1].split("\\").length+5,")")})})]}),S(et,{id:"arrow",style:(e={},x(e,"--translate-x",i===b.left?"".concat((115+35*((g<=2?1:.5)+g)+p)/2-20,"px"):"".concat((a[k.RunIn]-45-u.width-(g<=2?105:87.5)+p+t.nameBBox.width+55+25.9)/2+20,"px")),x(e,"--rotate",i===b.left?"0deg":"180deg"),e)})]})},ht=function(t){var e=t.secName,n=y(t,l),r=v.useRef(null),a=d(v.useState({x:0,width:0}),2),i=a[0],c=a[1];return v.useEffect((function(){r.current&&c(r.current.getBBox())}),[t.secName.toString()]),h("g",p(p({},n),{},{children:[h("g",{transform:"translate(0,2.5)",fontSize:25,children:[S("text",{textAnchor:"end",x:i.x-3,className:"rmg-name__zh",children:"("}),S("text",{textAnchor:"start",x:i.width+i.x+3,className:"rmg-name__zh",children:")"})]}),h("g",{ref:r,children:[S("text",{className:"rmg-name__zh",fontSize:18,children:e[0]}),S("text",{className:"rmg-name__en",fontSize:10,dy:15,children:e[1]})]})]}))},gt=function(t){var e,n=t.nextIds,r=t.nameBBox,a=N((function(t){return t.helper})).routes,i=N((function(t){return t.param.svgWidth})),c=N((function(t){return t.param.direction})),o=N((function(t){return t.param.stn_list})),s=n.map((function(t){return o[t].name})),l=d(v.useState({width:0}),2),u=l[0],f=l[1],g=v.useRef([]);v.useEffect((function(){f((function(t){return p(p({},t),{},{width:0})})),g.current.forEach((function(t){var e=null==t?void 0:t.getBBox();f((function(t){return e?t.width>e.width?t:e:t}))}))}),[s.toString()]);var y=t.nextIds.map((function(t){return a.reduce((function(e,n){return n.includes(t)?e.concat(n.filter((function(t){return!["linestart","lineend"].includes(t)})).slice(c===b.left?0:-1)[0]):e}),[])})),z=Math.max.apply(Math,m(s.map((function(t){return t[0].length})))),w=(i[k.RunIn]-r.width)/2;return h(_,{children:[S("g",{id:"big_next_2",children:s.map((function(t,e){return h(v.Fragment,{children:[h("g",{textAnchor:"middle",style:x({},"--translate-x",c===b.left?"72px":"".concat(i[k.RunIn]-45-u.width-41,"px")),children:[S("text",{className:"rmg-name__zh",children:"下站"}),S("text",{className:"rmg-name__en",y:22,children:"Next"})]}),h("g",{ref:function(t){return g.current[e]=t},textAnchor:"start",style:x({},"--translate-x",c===b.left?"113px":"".concat(i[k.RunIn]-45-u.width,"px")),children:[S("text",{className:"rmg-name__zh",children:t[0]}),t[1].split("\\").map((function(t,e){return S("text",{className:"rmg-name__en",y:22+13*e,children:t},e)})),S("text",{className:"rmg-name__zh",y:-35,children:y[e].map((function(t){return o[t].name[0]})).join("/")+"方向"}),S("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20,children:"Towards "+y[e].map((function(t){return o[t].name[1]})).join("/").replace("\\"," ")})]})]},e)}))}),S(et,{id:"arrow",style:(e={},x(e,"--translate-x",c===b.left?"".concat((99+27*(1+z)+w)/2-20,"px"):"".concat((i[k.RunIn]-45-u.width-41-27+w+t.nameBBox.width+55+25.9)/2+20,"px")),x(e,"--rotate",c===b.left?"0deg":"180deg"),e)})]})};function pt(t){var e=t.num,n=y(t,u);return h("g",p(p({textAnchor:"middle",fill:"var(--rmg-theme-fg)"},n),{},{children:[S("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),S("text",{className:"rmg-name__en",fontSize:38,dy:-9.5,children:e}),S("text",{className:"rmg-name__zh",fontSize:13,dy:10,children:"站台"}),S("text",{className:"rmg-name__en",fontSize:9,dy:21,children:"Platform"})]}))}function xt(t){var e=t.canvasType,n=N((function(t){return t.param})),r=n.svgWidth,a=n.svg_height;return h("g",{id:"otis_frame",strokeWidth:3,stroke:"black",children:[S("line",{y2:a,transform:"translate(".concat(r[e]/2,",0)")}),S("line",{x2:r[e],transform:"translate(0,90)"})]})}var yt=k.RunIn;function St(){var t,e=N((function(t){return t.app})).canvasScale,n=N((function(t){return t.param})),r=n.svgWidth,a=n.svg_height,i=n.direction,c=n.info_panel_type,o=n.platform_num,s=n.psd_num,l=n.theme,u=r[yt],m={platform:"translate(".concat(i===b.left?50:-50,",45)")};return h(I,{type:yt,svgWidth:u,svgHeight:a,canvasScale:e,theme:l,children:[S(M,{variant:c,isShowLight:c!==O.gz2otis,isShowPSD:c!==O.gz2otis&&s}),S("g",{transform:c===O.gz2otis?m.platform:"",children:S(pt,{num:o,style:(t={},x(t,"--translate-x","".concat(i===b.left?u-100:100,"px")),x(t,"--translate-y","calc(var(--rmg-svg-height) / 2 - 30px)"),x(t,"transform","translate(var(--translate-x, 100px), var(--translate-y))"),t)})}),S(dt,{}),c===O.gz2otis&&S(xt,{canvasType:yt})]})}t("default",{runin:S(St,{}),railmap:S(rt,{})})}}}))}();
