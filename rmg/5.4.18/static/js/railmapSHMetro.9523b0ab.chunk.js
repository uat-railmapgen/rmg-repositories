"use strict";(self.webpackChunkrmg=self.webpackChunkrmg||[]).push([[3957],{51401:function(t,n,r){r.d(n,{b:function(){return a},I:function(){return i}});var e=r(93433),c=r(23824),a=function(t,n){return t.map((function(t){var r=n.filter((function(n){return n.includes(t.from)&&n.includes(t.to)}));if(1!==r.length)return{linePath:[],colors:t.colors};var e=r.flat(),c=e.indexOf(t.from),a=e.indexOf(t.to);return{linePath:c<a?e.slice(c,a+1):e.slice(a,c+1),colors:t.colors}})).filter((function(t){return 0!==t.linePath.length}))},i=function(t,n){return t.map((function(t){var r=(0,c.pS)(t.linePath,n);return{main:[{linePath:r.main,colors:t.colors}],pass:[{linePath:r.pass,colors:t.colors}]}})).reduce((function(t,n){return t.main=[].concat((0,e.Z)(t.main),(0,e.Z)(n.main)),t.pass=[].concat((0,e.Z)(t.pass),(0,e.Z)(n.pass)),t}),{main:[],pass:[]})}},18076:function(t,n,r){r.r(n),r.d(n,{default:function(){return w}});var e=r(72791),c=r(20713),a=r(29439),i=r(4942),o=r(1413),s=r(23824),l=r(17250),u=r(93433),d=r(51401),f=r(37732),h=r(80184),m=["shanghai","sh4","#5F259F","#fff","4\u53f7\u7ebf","Line 4"],p=function(t){var n=t.xs,r=t.servicesPresent,c=t.stnStates,s=(0,f.Qy)((function(t){return t.param})),l=s.direction,m=s.stn_list,p=s.current_stn_idx,v=s.branch_spacing,y=s.info_panel_type,Z=s.coline,k=(0,f.Qy)((function(t){return t.helper})),b=k.branches,M=k.depsStr,w=e.useMemo((function(){return console.log("computing y shares"),Object.keys(m).reduce((function(t,n){if(b[0].includes(n))return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},n,0));var r=b.slice(1).filter((function(t){return t.includes(n)}))[0];return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},n,m[r[0]].children.indexOf(r[1])?-3:3))}),{})}),[M]),O=Object.entries(w).filter((function(t){var n=(0,a.Z)(t,2);n[0];return n[1]<=0})).reduce((function(t,n){var r=(0,a.Z)(n,2),e=r[0],c=r[1];return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},e,c))}),{}),S=Object.keys(O).reduce((function(t,n){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},n,-O[n]*v))}),{}),H=e.useMemo((function(){return(0,d.I)((0,d.b)(Object.values(Z).filter((function(t){return t.display})),b),c)}),[JSON.stringify(Z),p,l,M]),L=r.reduce((function(t,e){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},e,Object.keys(H).reduce((function(t,c){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},c,H[c].map((function(t){return{path:_(t.linePath,c,n,S,l,e,r.length,m,"diagonal"),colors:t.colors}})).filter((function(t){return""!==t.path}))))}),{})))}),{}),C=(0,d.b)(Object.values(Z).filter((function(t){return t.display})),b).map((function(t){return t.linePath})).flat(),F="sh2020"===y?3:0;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("g",{id:"coline",transform:"translate(0,".concat(12+F,")"),children:[(0,h.jsx)(x,{paths:L,direction:l}),(0,h.jsx)(g,{colineStns:H,branches:b,xs:n,ys:S,stnStates:c,lineWidth:12,colineGap:F}),(0,h.jsx)(j,{stnIds:Object.entries(w).filter((function(t){var n=(0,a.Z)(t,2);n[0];return n[1]<0})).reduce((function(t,n){var r=(0,a.Z)(n,2),e=r[0];r[1];return[].concat((0,u.Z)(t),[e])}),[]).filter((function(t){return!["linestart","lineend"].includes(t)})).filter((function(t){return 0!==m[t].services.length})).filter((function(t){return C.includes(t)})),xs:n,ys:S,stnStates:c})]})})},x=function(t){var n=t.paths,r=t.direction;return(0,h.jsx)(h.Fragment,{children:Object.keys(n).map((function(t,a){var i,o;return(0,h.jsx)("g",{transform:"translate(0,".concat(25*a,")"),children:(0,h.jsxs)("g",{children:[null===(i=n[t])||void 0===i?void 0:i.pass.map((function(n,r){return(0,h.jsx)(e.Fragment,{children:(0,h.jsx)("path",{stroke:"var(--rmg-grey)",strokeWidth:12,fill:"none",d:n.path,strokeLinejoin:"round",filter:t===c.K9.local?void 0:"url(#contrast-".concat(t,")")},r)},r)})),null===(o=n[t])||void 0===o?void 0:o.main.map((function(n,a){var i;return(0,h.jsxs)(e.Fragment,{children:[n.colors.length>1&&(0,h.jsx)("linearGradient",{id:"grad".concat(a),y1:"-100%",y2:"100%",x1:"0",x2:"0",gradientUnits:"userSpaceOnUse",children:n.colors.map((function(t,r){return(0,h.jsxs)(e.Fragment,{children:[(0,h.jsx)("stop",{offset:"".concat(100/n.colors.length*(r+0),"%"),stopColor:t[2]}),(0,h.jsx)("stop",{offset:"".concat(100/n.colors.length*(r+1),"%"),stopColor:t[2]})]},r)}))}),"l"===r&&(0,h.jsx)("marker",{id:"arrow_left_".concat(a,"_").concat(n.colors.map((function(t){return t[2]})).join("_")),refY:.5,refX:1,children:(0,h.jsx)("path",{d:"M1,0L0,1H1z",fill:n.colors.length>1?"url(#grad".concat(a,")"):n.colors[0][2]})}),"r"===r&&(0,h.jsx)("marker",{id:"arrow_right_".concat(a,"_").concat(n.colors.map((function(t){return t[2]})).join("_")),refY:.5,children:(0,h.jsx)("path",{d:"M0,0L1,1H-1z",fill:n.colors.length>1?"url(#grad".concat(a,")"):n.colors[0][2]})}),(0,h.jsx)("path",{stroke:(null!==(i=n.colors.at(-1))&&void 0!==i?i:m)[2],strokeWidth:12,fill:"none",d:n.path,markerStart:"l"===r?"url(#arrow_left_".concat(a,"_").concat(n.colors.map((function(t){return t[2]})).join("_"),")"):void 0,markerEnd:"r"===r?"url(#arrow_right_".concat(a,"_").concat(n.colors.map((function(t){return t[2]})).join("_"),")"):void 0,strokeLinejoin:"round",filter:t===c.K9.local?void 0:"url(#contrast-".concat(t,")")},a)]},a)}))]})},"servicePath".concat(a))}))})},g=function(t){var n=t.colineStns,r=t.branches,e=t.xs,c=t.ys,a=t.stnStates,i=t.lineWidth,o=t.colineGap,s=(0,f.Qy)((function(t){return t.param})),l=s.line_name,d=s.theme,m=s.info_panel_type,p=[].concat((0,u.Z)(n.main),(0,u.Z)(n.pass)).map((function(t){return t.linePath.map((function(n){var r;return{curStn:n,x:e[n],y:c[n],color:null!==(r=t.colors.at(-1))&&void 0!==r?r:[].concat((0,u.Z)(d),(0,u.Z)(l))}}))})).flat().reduce((function(t,n){return t.find((function(t){return t.curStn===n.curStn}))?t:t.concat(n)}),[]).filter((function(t){return r[0].includes(t.curStn)}));return console.log(p),(0,h.jsx)("g",{id:"stations_in_mainline",children:p.map((function(t){var n=t.curStn,r=t.x,e=t.y,c=t.color,s=(-1===a[n]?0:i)+o+i,l=(-1===a[n]?0:-i)-o-i/2;return(0,h.jsx)("g",{transform:"translate(".concat(r,",").concat(e,")"),children:"sh2020"===m?(0,h.jsx)("rect",{stroke:"none",height:s,width:12,x:-6,y:l,fill:-1===a[n]?"var(--rmg-grey)":c[2]}):(0,h.jsx)("use",{xlinkHref:"#int2_sh",stroke:"var(--rmg-theme-colour)",transform:"translate(0,".concat(-i,")")})},n)}))})},j=function(t){var n=t.xs,r=t.ys,c=t.stnStates,a=t.stnIds,s=(0,f.Qy)((function(t){return t.helper})),m=s.branches,p=s.depsStr,x=(0,f.Qy)((function(t){return t.param})),g=x.line_name,j=x.theme,v=x.coline,y=e.useMemo((function(){return(0,d.b)(Object.values(v),m)}),[JSON.stringify(v),p]),_=a.reduce((function(t,n){var r;return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},n,null!==(r=y.filter((function(t){return t.linePath.includes(n)})).map((function(t){return t.colors})).flat().at(0))&&void 0!==r?r:[].concat((0,u.Z)(j),(0,u.Z)(g))))}),{});return(0,h.jsx)("g",{id:"stations_in_coline",children:a.map((function(t){return(0,h.jsx)("g",{transform:"translate(".concat(n[t],",").concat(r[t],")"),children:(0,h.jsx)(l.Z,{stnId:t,stnState:c[t],color:_[t][2]})},t)}))})},v=function(){var t=(0,f.Qy)((function(t){return t.helper})),n=t.routes,r=t.branches,l=t.depsStr,u=(0,f.Qy)((function(t){return t.param})),d=(0,f.Qy)((function(t){return t.param})),m=d.stn_list,x=d.branch_spacing,g=d.coline,j=d.direction,v=(0,s.Az)(u.stn_list,(function(){return 0}),(function(){return 0})),b=(0,s.QE)("linestart","lineend",v),M=(0,s.QE)(b.nodes[1],b.nodes.slice(-2)[0],v),w=e.useMemo((function(){return console.log("computing x shares"),Object.keys(u.stn_list).reduce((function(t,n){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},n,(0,s.ML)(n,v,r)))}),{})}),[r.toString(),JSON.stringify(v)]),O=[u.svgWidth.railmap*u.padding/100,u.svgWidth.railmap*(1-u.padding/100)],S=Object.keys(w).reduce((function(t,n){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},n,O[0]+w[n]/M.len*(O[1]-O[0])))}),{}),H=e.useMemo((function(){return console.log("computing y shares"),Object.keys(m).reduce((function(t,n){if(r[0].includes(n))return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},n,0));var e=r.slice(1).filter((function(t){return t.includes(n)}))[0];return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},n,m[e[0]].children.indexOf(e[1])?-3:3))}),{})}),[l]),L=Object.entries(H).filter((function(t){var n=(0,a.Z)(t,2);n[0];return n[1]>=0})).reduce((function(t,n){var r=(0,a.Z)(n,2),e=r[0],c=r[1];return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},e,c))}),{}),C=Object.keys(L).reduce((function(t,n){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},n,-L[n]*x))}),{}),F=e.useMemo((function(){return(0,s.h6)(u.current_stn_idx,n,u.direction)}),[u.current_stn_idx,u.direction,n.toString()]),P=Object.values(c.K9),W=Object.values(u.stn_list).map((function(t){return t.services})).flat().reduce((function(t,n){return t[P.indexOf(n)]=!0,t}),[!1,!1,!1]).map((function(t,n){return[P[n],t]})).filter((function(t){return t[1]})).map((function(t){return t[0]})),V=r.map((function(t){return(0,s.pS)(t,F)})).reduce((function(t,n){return t.main.push(n.main),t.pass.push(n.pass),t}),{main:[],pass:[]}),z=W.reduce((function(t,n){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},n,Object.keys(V).reduce((function(t,r){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},r,V[r].map((function(t){return _(t,r,S,C,j,n,W.length,m)})).filter((function(t){return""!==t}))))}),{})))}),{});return(0,h.jsxs)("g",{id:"main",transform:"translate(0,".concat(u.svg_height*(Object.keys(g).length>0?.5:.7+.1),")"),children:[(0,h.jsx)(y,{paths:z,direction:u.direction}),(0,h.jsx)(Z,{stnIds:Object.keys(L).filter((function(t){return!["linestart","lineend"].includes(t)})).filter((function(t){return 0!==m[t].services.length})),xs:S,ys:C,stnStates:F}),Object.keys(g).length>0&&(0,h.jsx)(p,{xs:S,servicesPresent:W,stnStates:F}),W.length>1&&(0,h.jsx)(k,{servicesLevel:W,lineXs:O})]})},y=function(t){var n=(0,f.Qy)((function(t){return t.param})).theme,r=t.paths,e=t.direction;return(0,h.jsx)(h.Fragment,{children:Object.keys(r).map((function(a,i){var o,s;return(0,h.jsxs)("g",{transform:"translate(0,".concat(25*i,")"),filter:"#999999"===n[2]?"url(#pujiang_outline_railmap)":void 0,children:[(0,h.jsx)("g",{children:null===(o=r[a])||void 0===o?void 0:o.pass.map((function(n,r){return(0,h.jsx)("path",{stroke:"var(--rmg-grey)",strokeWidth:12,fill:"none",d:n,markerStart:"l"===t.direction?"url(#arrow_gray)":void 0,markerEnd:"r"===t.direction?"url(#arrow_gray)":void 0,strokeLinejoin:"round"},r)}))}),(0,h.jsx)("g",{children:null===(s=r[a])||void 0===s?void 0:s.main.map((function(t,n){return(0,h.jsx)("path",{stroke:"var(--rmg-theme-colour)",strokeWidth:12,fill:"none",d:t,markerStart:"l"===e?"url(#arrow_theme_left)":void 0,markerEnd:"r"===e?"url(#arrow_theme_right)":void 0,strokeLinejoin:"round",filter:a===c.K9.local?void 0:"url(#contrast-".concat(a,")")},n)}))})]},"servicePath".concat(i))}))})},_=function(t,n,r,e,c,i,o,s){var l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"rightangle",u=[],d=(0,a.Z)(u,2),f=d[0],h=d[1],m={},p={local:0,express:20,direct:40}[i],x=o>1?50:0,g=30;if(t.length>0){var j=!1,v=!1;s[t.at(-1)||0].children.some((function(t){return["linestart","lineend"].includes(t)}))?v=!0:s[t.at(0)||0].parents.some((function(t){return["linestart","lineend"].includes(t)}))&&(j=!0),g=j||v?g:0}var y=30;if(t.forEach((function(t){var n=r[t],c=e[t];if(!f&&0!==f)return h=n,f=c,void(m.start=[n,c]);0===c?c!==f&&(m.bifurcate=[h,f]):c!==f&&(m.bifurcate=[n,c]),m.end=[n,c],h=n,f=c})),m.hasOwnProperty("start")){if(m.hasOwnProperty("end")){if(m.hasOwnProperty("bifurcate")){var _=(0,a.Z)(m.start,2),Z=_[0],k=_[1],b=m.bifurcate[0],M=(0,a.Z)(m.end,2),w=M[0],O=M[1];return"main"===n?"l"===c?O>k?(console.log(m),"rightangle"===l?"M ".concat(Z-g,",").concat(k," H ").concat(w," V ").concat(O):"M ".concat(Z,",").concat(k," H ").concat(Z+y," L ").concat(b-y,",").concat(O," H ").concat(w)):"rightangle"===l?"M ".concat(Z,",").concat(k," V ").concat(O," H ").concat(w):"M ".concat(Z-g,",").concat(k," H ").concat(b+y," L ").concat(w-y,",").concat(O," H ").concat(w):O>k?"rightangle"===l?"M ".concat(Z,",").concat(k," H ").concat(w," V ").concat(O):"M ".concat(Z,",").concat(k," H ").concat(Z+y," L ").concat(b-y,",").concat(O," H ").concat(w+g):"rightangle"===l?"M ".concat(Z,",").concat(k," V ").concat(O," H ").concat(w+g):"M ".concat(Z,",").concat(k," H ").concat(b+y," L ").concat(w-y,",").concat(O," H ").concat(w):O>k?"rightangle"===l?"M ".concat(Z-g,",").concat(k," H ").concat(w," V ").concat(O):"M ".concat(Z,",").concat(k," H ").concat(Z+y," L ").concat(b-y,",").concat(O," H ").concat(w+g):"rightangle"===l?"M ".concat(Z,",").concat(k," V ").concat(O," H ").concat(w+g):"M ".concat(Z-g,",").concat(k," H ").concat(b+y," L ").concat(w-y,",").concat(O," H ").concat(w)}var S=(0,a.Z)(m.start,2),H=S[0],L=S[1],C=m.end[0];return"main"===n?"l"===c?"M ".concat(H-g-p,",").concat(L," H ").concat(C):"M ".concat(H,",").concat(L," H ").concat(C+g+p):"l"===c?"M ".concat(H-g,",").concat(L," H ").concat(C+g+x):"M ".concat(H-g-x,",").concat(L," H ").concat(C+g)}var F=(0,a.Z)(m.start,2),P=F[0],W=F[1];return"main"===n?"l"===c?"M ".concat(P-g-p,",").concat(W," H ").concat(P):"M ".concat(P,",").concat(W," H ").concat(P+g+p):"l"===c?"M ".concat(P,",").concat(W," L ").concat(P+g+x,",").concat(W):"M ".concat(P-g-x,",").concat(W," L ").concat(P,",").concat(W)}return""},Z=function(t){var n=t.xs,r=t.ys,e=t.stnStates,c=t.stnIds;return(0,h.jsx)("g",{children:c.map((function(t){return(0,h.jsx)("g",{transform:"translate(".concat(n[t],",").concat(r[t],")"),children:(0,h.jsx)(l.Z,{stnId:t,stnState:e[t]})},t)}))})},k=function(t){var n=(0,f.Qy)((function(t){return t.param})),r=n.svg_height,c=n.direction,a=n.svgWidth,i=130-r,o=t.servicesLevel.map((function(t){return{local:"\u666e\u901a\u8f66",express:"\u5927\u7ad9\u8f66",direct:"\u76f4\u8fbe\u8f66"}[t]})),s="r"===c?t.lineXs[0]-42:t.lineXs[1]+42,l=2===t.servicesLevel.length?350:500;return e.useMemo((function(){return(0,h.jsxs)("g",{children:[o.map((function(t,n){return(0,h.jsxs)("g",{transform:"translate(".concat(s,",").concat(25*n,")"),children:[(0,h.jsx)("rect",{x:-27.5,height:10,width:55,fill:"white",stroke:"black",y:-5}),(0,h.jsx)("text",{className:"rmg-name__zh",fontSize:9,y:3,textAnchor:"middle",children:"".concat(t,"\u8fd0\u884c\u7ebf")})]},t)})),(0,h.jsxs)("g",{transform:"translate(".concat("r"===c?30:a.railmap-l,",").concat(i,")"),children:[(0,h.jsx)("text",{className:"rmg-name__zh",children:"\u56fe\u4f8b\uff1a"}),o.map((function(t,n){return(0,h.jsxs)("g",{transform:"translate(".concat(150*n+50,",0)"),children:[(0,h.jsx)("line",{x1:"0",x2:"35",y1:"-5",y2:"-5",stroke:"var(--rmg-theme-colour)",strokeWidth:"12",filter:2===n?"url(#contrast-direct)":1===n?"url(#contrast-express)":""}),(0,h.jsx)("use",{x:"17.5",y:"-5",xlinkHref:"#stn_sh",fill:"var(--rmg-theme-colour)"}),(0,h.jsx)("text",{x:"40",className:"rmg-name__zh",children:"".concat(t,"\u505c\u9760\u7ad9")})]},"serviceLevel".concat(n))}))]})]})}),[r,c,a,t.servicesLevel,t.lineXs])},b=function(){var t=(0,f.Qy)((function(t){return t.param})),n=t.direction,r=t.svgWidth,c=t.coline,a=!!Object.keys(c).length;return e.useMemo((function(){return(0,h.jsxs)("g",{transform:"translate(".concat("l"===n?50:r.railmap-150,",50)"),children:[(0,h.jsx)("text",{className:"rmg-name__zh",children:"\u5217\u8f66\u524d\u8fdb\u65b9\u5411"}),(0,h.jsx)("path",{d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",stroke:a?"var(--rmg-black)":void 0,strokeWidth:a?5:void 0,fill:a?"var(--rmg-white)":"var(--rmg-theme-colour)",transform:"translate(".concat("l"===n?-30:125,",-5)rotate(").concat("l"===n?0:180,")scale(0.15)")})]})}),[n,c,r.railmap])},M=r(54940),w=e.memo((function(){var t=(0,f.Qy)((function(t){return t.param})),n=t.loop,r=t.loop_info.bank;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(O,{}),n?(0,h.jsx)(M.Z,{bank_angle:r,canvas:c.Ht.RailMap}):(0,h.jsx)(v,{}),(0,h.jsx)(b,{})]})})),O=e.memo((function(){return(0,h.jsxs)("defs",{children:[(0,h.jsx)("circle",{id:"stn_sh",fill:"var(--rmg-white)",strokeWidth:2,r:5}),(0,h.jsx)("path",{id:"int2_sh",fill:"var(--rmg-white)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V10 a 5,5 0 1 1 -10,0Z"}),(0,h.jsx)("path",{id:"express_sh",fill:"var(--rmg-white)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V25 a 5,5 0 1 1 -10,0Z"}),(0,h.jsx)("path",{id:"direct_sh",fill:"var(--rmg-white)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V50 a 5,5 0 1 1 -10,0Z"}),(0,h.jsx)("rect",{id:"stn_sh_2020",stroke:"none",height:24,width:12,x:-6,y:-18}),(0,h.jsx)("rect",{id:"stn_sh_2020_express",stroke:"none",height:49,width:12,x:-6,y:-18}),(0,h.jsx)("rect",{id:"stn_sh_2020_direct",stroke:"none",height:74,width:12,x:-6,y:-18}),(0,h.jsx)("rect",{id:"intbox_number",height:22,width:20,y:-11}),(0,h.jsxs)("g",{id:"intbox_maglev",transform:"translate(-25,0)",children:[(0,h.jsx)("rect",{id:"maglev_5",height:144,width:130,y:"40",x:"30",strokeWidth:10}),(0,h.jsx)("path",{id:"maglev_3",fill:"var(--rmg-white)",d:"m90,55a40,5 0 0 0 -40,3a5,5 0 0 0 -5,5a5,60 0 0 0 -3,60a5,5 0 0 0 5,5l96,0a5,5 0 0 0 5,-5a5,60 0 0 0 -3,-60a5,5 0 0 0 -5,-5a40,5 0 0 0 -40,-3l-5,-10l-5,10"}),(0,h.jsx)("path",{id:"maglev_4",fill:"var(--rmg-white)",d:"m90,140l-40,0a10,5 0 0 1 -10,-5l0,25a10,15 0 0 0 10,15l15,0l0,-10l-15,0l0,-15l90,0l0,15l-15,0l0,10l15,0a10,15 0 0 0 10,-15l0,-25a10,5 0 0 1 -10,5l-50,0"}),(0,h.jsx)("rect",{id:"maglev_1",height:"25",width:"40",y:"80",x:"50"}),(0,h.jsx)("rect",{id:"maglev_2",height:"25",width:"40",y:"80",x:"100"})]}),(0,h.jsxs)("g",{id:"airport",transform:"scale(0.5)",children:[(0,h.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)"}),(0,h.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"var(--rmg-white)"})]}),(0,h.jsxs)("g",{id:"disney",transform:"scale(0.5)",children:[(0,h.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)"}),(0,h.jsx)("path",{fill:"var(--rmg-white)",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})]}),(0,h.jsxs)("g",{id:"railway",children:[(0,h.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)",transform:"translate(0,-2)scale(0.5)"}),(0,h.jsx)("path",{fill:"var(--rmg-white)",d:"M169,273.5c0-19,14.7-34.8,33.7-36.3c18.9-1.5,38.1-2.2,57.4-2.2c19.3,0,38.4,0.8,57.3,2.2  c19,1.5,33.7,17.3,33.7,36.3v47.3l-51.3,14.7c-11.2,3.2-18.9,13.4-18.9,25v147.8c0,17.4,12.2,32.3,29.3,35.7l110.6,22.1  c4.9,1,8.4,5.2,8.4,10.2V599H91v-22.7c0-5,3.5-9.2,8.4-10.2L209.9,544c17-3.4,29.3-18.3,29.3-35.7V360.5c0-11.6-7.7-21.8-18.9-25  L169,320.8V273.5z M309.4,31.7c0.2-1.2,0.3-2.4,0.3-3.6c0-14-11.1-25.4-24.9-26C276.6,1.4,268.3,1,260,1c-8.3,0-16.6,0.4-24.7,1.1  c-13.9,0.6-24.9,12-24.9,26c0,1.2,0.1,2.5,0.3,3.6C90.6,54.8,0,160.3,0,287c0,97.2,53.4,182,132.4,226.6l36.8-48.1  C104.3,432.4,59.8,364.9,59.8,287c0-110.6,89.6-200.2,200.2-200.2S460.2,176.4,460.2,287c0,77.9-44.5,145.4-109.4,178.5  c15,19.6,25.6,33.5,36.8,48.1C466.6,469,520,384.2,520,287C520,160.3,429.4,54.8,309.4,31.7z",transform:"translate(-10,0)scale(0.04)"})]}),(0,h.jsx)("marker",{id:"arrow_gray",viewBox:"-1.5 0 3 1.5",refY:.5,children:(0,h.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-grey)"})}),(0,h.jsx)("marker",{id:"arrow_theme_left",refX:1,refY:.5,children:(0,h.jsx)("path",{d:"M1,0L0,1H1z",fill:"var(--rmg-theme-colour)"})}),(0,h.jsx)("marker",{id:"arrow_theme_right",refY:.5,children:(0,h.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})}),(0,h.jsx)("marker",{id:"arrow_theme",refX:1,refY:.5,children:(0,h.jsx)("path",{d:"M0,1H2L1,0z",fill:"var(--rmg-theme-colour)"})}),(0,h.jsx)("filter",{id:"contrast-direct",filterUnits:"userSpaceOnUse",children:(0,h.jsxs)("feComponentTransfer",{children:[(0,h.jsx)("feFuncR",{type:"linear",slope:.5,intercept:.25}),(0,h.jsx)("feFuncG",{type:"linear",slope:.5,intercept:.25}),(0,h.jsx)("feFuncB",{type:"linear",slope:.5,intercept:.25})]})}),(0,h.jsx)("filter",{id:"contrast-express",filterUnits:"userSpaceOnUse",children:(0,h.jsxs)("feComponentTransfer",{children:[(0,h.jsx)("feFuncR",{type:"linear",slope:.75,intercept:.125}),(0,h.jsx)("feFuncG",{type:"linear",slope:.75,intercept:.125}),(0,h.jsx)("feFuncB",{type:"linear",slope:.75,intercept:.125})]})}),(0,h.jsxs)("filter",{id:"pujiang_outline_railmap",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",x:"0",y:"-1000",width:"5000",height:"2000",children:[(0,h.jsxs)("feComponentTransfer",{in:"SourceGraphic",children:[(0,h.jsx)("feFuncR",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"}),(0,h.jsx)("feFuncG",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"}),(0,h.jsx)("feFuncB",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"})]}),(0,h.jsx)("feColorMatrix",{type:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 1 1 1 1 -3",result:"selectedColor1"}),(0,h.jsx)("feMorphology",{operator:"erode",in:"selectedColor1",radius:"0",result:"e1"}),(0,h.jsx)("feMorphology",{operator:"erode",in:"selectedColor1",radius:"1",result:"e2"}),(0,h.jsx)("feComposite",{in:"e1",in2:"e2",operator:"xor",result:"uncoloredOutline"}),(0,h.jsx)("feFlood",{floodColor:"rgb(0,0,0)"}),(0,h.jsx)("feComposite",{operator:"in",in2:"uncoloredOutline",result:"outline"}),(0,h.jsx)("feComposite",{in:"outline",in2:"selectedColor1",operator:"over",result:"result"}),(0,h.jsx)("feComposite",{in:"result",in2:"SourceGraphic",operator:"over"})]})]})}))}}]);
//# sourceMappingURL=railmapSHMetro.9523b0ab.chunk.js.map