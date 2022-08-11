"use strict";(self.webpackChunkrmg=self.webpackChunkrmg||[]).push([[2977],{25481:function(n,t,e){e.d(t,{K:function(){return u}});var r=e(1413),i=e(45987),o=e(93433),a=e(72791),c=e(37732),s=e(80184),l=["stnName","nameDirection"],u=function(n){var t=n.stnId,e=n.nameDirection,r=n.services,i=n.color,a=(0,c.Qy)((function(n){return n.param.stn_list[t]})),l=[].concat((0,o.Z)(a.transfer.info[0]),(0,o.Z)(a.transfer.info[1]||[])),u="";u=3===a.services.length?"direct_indoor_sh":2===a.services.length?"express_indoor_sh":l.length>0?"int2_indoor_sh":"stn_indoor_sh";var d="left"===e||"right"===e?90:0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{name:a.name,infos:a.transfer.info,nameDirection:e,services:r}),(0,s.jsx)("use",{xlinkHref:"#".concat(u),stroke:l.length>0?"var(--rmg-black)":null!==i&&void 0!==i?i:"var(--rmg-theme-colour)",transform:"rotate(".concat(d,")")}),a.services.length>1&&(0,s.jsx)("text",{className:"rmg-name__zh",writingMode:"tb",fontSize:"60%",dy:"-12",children:"\u5927\u7ad9\u8f66".concat(a.services.length>2?" \u76f4\u8fbe\u8f66":"","\u505c\u9760")})]})};t.Z=u;var f=function(n){var t,e,r,i,a,c,l,u,f=n.name,x=n.infos,p=n.nameDirection,v=n.services,j={upward:60,downward:-30,left:0,right:0}[p],_={upward:0,downward:0,left:85,right:-85}[p],y={upward:-185,downward:150+(3===v.length?40:0),left:-30,right:-30}[p],w=(null===(t=x[2])||void 0===t?void 0:t.length)>0?{upward:0,downward:0,left:x[0].length+x[1].length!==0?85:25,right:x[0].length+x[1].length!==0?-85:-25}[p]:0,Z=(null===(e=x[2])||void 0===e?void 0:e.length)>0?{upward:null!==(r=x[1])&&void 0!==r&&r.length?-210:x[0].length?-180:-100,downward:(null!==(i=x[1])&&void 0!==i&&i.length?190:x[0].length?160:100)+(3===v.length?40:0),left:null!==(a=x[1])&&void 0!==a&&a.length?-60:x[0].length?-30:0,right:null!==(c=x[1])&&void 0!==c&&c.length?-60:x[0].length?-30:0}[p]:0;return(0,s.jsxs)("g",{transform:"translate(0,".concat(j,")"),children:["upward"===p||"downward"===p?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("line",{x1:-30,x2:30,y1:"upward"===p?-23:-10,y2:"upward"===p?-23:-10,stroke:"black"}),(0,s.jsx)("line",{y1:"upward"===p?-23:-10,y2:"upward"===p?-48:20,stroke:"black"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("line",{x1:"left"===p?-50:15,x2:"left"===p?-15:50,y1:0,y2:0,stroke:"black"}),(0,s.jsx)("line",{x1:"left"===p?-50:50,x2:"left"===p?-50:50,y1:-30,y2:30,stroke:"black"})]}),[].concat((0,o.Z)(x[0]),(0,o.Z)(x[1]||[])).length>0&&(0,s.jsx)(h,{intInfos:[].concat((0,o.Z)(x[0]),(0,o.Z)(x[1]||[])),arrowDirection:p,services:v}),(0,s.jsx)(d,{stnName:f,nameDirection:p,fill:"black"}),(null===(l=x[1])||void 0===l?void 0:l.length)>0&&(0,s.jsx)("g",{transform:"translate(".concat(_,",").concat(y,")"),children:(0,s.jsx)(m,{osiInfos:x[1],nameDirection:p})}),(null===(u=x[2])||void 0===u?void 0:u.length)>0&&(0,s.jsx)("g",{transform:"translate(".concat(w,",").concat(Z,")"),children:(0,s.jsx)(g,{osysiInfos:x[2],nameDirection:p})})]})},d=a.forwardRef((function(n,t){var e=n.stnName,c=n.nameDirection,u=(0,i.Z)(n,l),f=e[0].split("\\"),d=e[1].split("\\").length,h={upward:0,downward:0,left:-60,right:60}[c],m={upward:-2,downward:-30-12*(d-1),left:-10*(d-1),right:-10*(d-1)}[c],g={upward:"middle",downward:"middle",left:"end",right:"start"}[c];return(0,s.jsx)("g",(0,r.Z)((0,r.Z)({ref:t},u),{},{textAnchor:g,transform:"translate(".concat(h,",").concat(m,")"),children:a.useMemo((function(){return(0,s.jsxs)(s.Fragment,{children:[f.map((function(n,t,e){return(0,s.jsx)("text",{className:"rmg-name__zh",dy:"upward"===c?16*t:-16*(e.length-1-t),children:n},t)})),(0,s.jsx)("g",{fontSize:9.6,children:e[1].split("\\").map((function(n,t){return(0,s.jsx)("text",{className:"rmg-name__en",dy:12*(t+1)+("upward"===c&&f.length>1?7.5*f.length:0),children:n},t)}))})]})}),(0,o.Z)(e))}))})),h=function(n){var t=n.intInfos,e=n.arrowDirection,r=n.services,i=t.map((function(n){return n[2]})).reduce((function(n,t){return n+t}),""),o=[t.filter((function(n){return n[4].match(/^\d+.*$/)})).map((function(n){return n[4].replace(/^(\d+)(.*)$/,"$1")})).join("\uff0c").concat("\u53f7\u7ebf"),t.filter((function(n){return!n[4].match(/^\d+.*$/)})).map((function(n){return n[4]})).join("\uff0c")].filter((function(n){return n&&"\u53f7\u7ebf"!==n})).join("\uff0c"),c=["Line ".concat(t.filter((function(n){return n[5].match(/^L|line$/)})).map((function(n){return n[5].replace("Line","").replace("line","").trim()})).join(",")),t.filter((function(n){return!n[5].match(/^L|line$/)})).map((function(n){return n[5]})).join("\uff0c")].filter((function(n){return n&&"Line "!==n})).join(","),l=3===r.length?80:45,u={upward:-145,downward:125+(3===r.length?40:0),left:7,right:7}[e],f={upward:0,downward:0,left:20,right:-20}[e],d={upward:-74,downward:44,left:0,right:0}[e],h={upward:0,downward:180,left:90,right:-90}[e],m={upward:0,downward:0,left:85,right:-85}[e],g={upward:"middle",downward:"middle",left:"start",right:"end"}[e];return(0,s.jsxs)("g",{children:[(0,s.jsx)("path",{id:"int_indoor_arrow_sh",stroke:"var(--rmg-black)",strokeWidth:1,transform:"translate(".concat(f,",").concat(d,")rotate(").concat(h,")"),fill:1===t.length?t[0][2]:"url(#grad".concat(i,")"),d:"M -7.5,0 v -".concat(l," h -7.5 l 15,-15 l 15,15 h -7.5 v ").concat(l," Z")}),t.length>1&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("linearGradient",{id:"grad".concat(i),y1:"0",y2:"0",x1:"upward"===e?"25%":"75%",x2:"upward"===e?"75%":"25%",children:t.map((function(n,e){return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)("stop",{offset:"".concat(100/t.length*(e+0),"%"),stopColor:n[2]}),(0,s.jsx)("stop",{offset:"".concat(100/t.length*(e+1),"%"),stopColor:n[2]})]},e)}))})}),(0,s.jsxs)("g",{transform:"translate(".concat(m,",").concat(u,")"),textAnchor:"".concat(g),children:[(0,s.jsx)("text",{className:"rmg-name__zh",dy:-7,children:"\u6362\u4e58".concat(o)}),(0,s.jsx)("text",{className:"rmg-name__en",dy:5,fontSize:9.6,children:"Interchange ".concat(c)})]})]})},m=function(n){var t={upward:"middle",downward:"middle",left:"start",right:"end"}[n.nameDirection];return a.useMemo((function(){return(0,s.jsxs)("g",{textAnchor:"".concat(t),fontSize:"50%",children:[(0,s.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u6362\u4e58".concat(n.osiInfos.map((function(n){return n[4]})).join("\uff0c"))}),(0,s.jsx)("text",{className:"rmg-name__zh",dy:5,children:"\u4ec5\u9650\u516c\u5171\u4ea4\u901a\u5361"}),(0,s.jsx)("text",{className:"rmg-name__en",dy:12.5,fontSize:"75%",children:"Only for Public Transportation Card"})]})}),[n.osiInfos.toString(),n.nameDirection])},g=function(n){var t={upward:"middle",downward:"middle",left:"start",right:"end"}[n.nameDirection];return a.useMemo((function(){return(0,s.jsxs)("g",{textAnchor:"".concat(t),children:[(0,s.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u8f6c\u4e58".concat(n.osysiInfos.map((function(n){return n[4]})).join("\uff0c"))}),(0,s.jsx)("text",{className:"rmg-name__en",dy:7.5,fontSize:9.6,children:"To ".concat(n.osysiInfos.map((function(n){return n[5]})).join(", "))})]})}),[n.osysiInfos.toString(),n.nameDirection])}},54940:function(n,t,e){e.d(t,{Z:function(){return p}});var r=e(29439),i=e(93433),o=e(4942),a=e(1413),c=e(72791),s=e(17250),l=e(25481),u=e(20713),f=e(37732),d=e(36705),h=e(68306),m=e(80184),g=function(n){var t,e,i,o,a=n.loop_branches,d=n.edges,h=n.xs,g=n.ys,x=n.canvas,p=(0,r.Z)(d,4),v=p[0],j=p[1],_=p[2],y=(p[3],(0,f.Qy)((function(n){return n.helper})).branches),w=(0,f.Qy)((function(n){return n.param})),Z=w.current_stn_idx,b=w.direction,k=w.coline,S=x===u.Ht.RailMap?30:0,M=["M ".concat(v,",").concat(_," H ").concat(Number(h[null!==(t=null===(e=a.at(0))||void 0===e?void 0:e.at(0))&&void 0!==t?t:""])-S),"M ".concat(j,",").concat(_," H ").concat(Number(h[null!==(i=null===(o=a.at(1))||void 0===o?void 0:o.at(-1))&&void 0!==i?i:""])+S)],I=y[0].filter((function(n){return!["linestart","lineend"].includes(n)})),O=Object.values(k).filter((function(n){return![n.from,n.to].every((function(n){return I.includes(n)}))})).map((function(n){return n.colors}));return(0,m.jsx)(m.Fragment,{children:a.map((function(n,t){var e,r,i;return(0,m.jsxs)(c.Fragment,{children:[O.filter((function(n,t,e){return t===e.findIndex((function(t){var e,r;return(null===(e=t.at(0))||void 0===e?void 0:e.at(2))===(null===(r=n.at(0))||void 0===r?void 0:r.at(2))}))})).map((function(n){return(0,m.jsx)("marker",{id:"arrow_theme_".concat(n[0][2]),refX:1,refY:.5,children:(0,m.jsx)("path",{d:"M0,1H2L1,0z",fill:n[0][2]})},n[0][2])})),(0,m.jsx)("path",{stroke:null!==(e=null===(r=O.at(t))||void 0===r||null===(i=r.at(0))||void 0===i?void 0:i.at(2))&&void 0!==e?e:"var(--rmg-theme-colour)",strokeWidth:12,fill:"none",d:M[t],markerEnd:x===u.Ht.RailMap&&("l"===b&&0===t||"r"===b&&1===t)?O.at(t)?"url(#arrow_theme_".concat(O[t][0][2],")"):"url(#arrow_theme)":void 0}),n.filter((function(n){return!["linestart","lineend"].includes(n)})).map((function(n){var e,r,i,o;return(0,m.jsxs)(c.Fragment,{children:[x===u.Ht.RailMap&&(0,m.jsx)("g",{transform:"translate(".concat(h[n],",").concat(g[n],")"),children:(0,m.jsx)(s.Z,{stnId:n,stnState:Z===n?0:1,bank:0,direction:b,color:null===(e=O.at(t))||void 0===e||null===(r=e.at(0))||void 0===r?void 0:r.at(2)})},n),x===u.Ht.Indoor&&(0,m.jsx)("g",{transform:"translate(".concat(h[n],",").concat(g[n],")"),children:(0,m.jsx)(l.K,{stnId:n,nameDirection:a.filter((function(t){return t.includes(n)})).map((function(t){return t.indexOf(n)%2===0?"downward":"upward"}))[0],services:[u.K9.local],color:null===(i=O.at(t))||void 0===i||null===(o=i.at(0))||void 0===o?void 0:o.at(2)})},n)]},n)}))]},n.at(0))}))})},x=function(n){var t,e=n.edges,i=n.loop_stns,o=n.xs,a=n.ys,c=n.canvas,s=(0,r.Z)(e,4),l=s[0],h=s[1],g=s[2],x=(s[3],(0,f.Qy)((function(n){return n.param}))),p=x.info_panel_type,v=x.stn_list,j=x.coline,_=(0,f.Qy)((function(n){return n.helper})).branches,y=Object.values(j).filter((function(n){return[n.from,n.to].every((function(n){return _.slice(1,3).filter((function(n){return(0,d.Qo)(n,v)})).flat().includes(n)}))})).map((function(n){return n.colors})).at(0),w=c===u.Ht.RailMap&&"sh2020"===p?3:0;return(0,m.jsxs)("g",{id:"coline_main",children:[(0,m.jsx)("path",{d:"M ".concat(l,",").concat(g," H").concat(h),strokeWidth:12,stroke:null===y||void 0===y||null===(t=y.at(0))||void 0===t?void 0:t.at(2)}),c===u.Ht.RailMap&&Object.keys(j).length>0&&i.top.map((function(n){var t;return(0,m.jsx)("g",{transform:"translate(".concat(o[n],",").concat(a[n],")"),children:"sh2020"===p?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("rect",{stroke:"none",height:24,width:12,x:-6,y:-w-1,fill:null===y||void 0===y||null===(t=y.at(0))||void 0===t?void 0:t.at(2)}),(0,m.jsx)("rect",{stroke:"none",height:w+12,width:12,x:-6,y:10,fill:"var(--rmg-theme-colour)"})]}):(0,m.jsx)("use",{xlinkHref:"#int2_sh",stroke:"var(--rmg-theme-colour)",transform:"translate(0,".concat(13,")")})},n)}))]})},p=function(n){var t,e,r=n.bank_angle,c=n.canvas,s=(0,f.Qy)((function(n){return n.helper})).branches,l=(0,f.Qy)((function(n){return n.param})),p=l.current_stn_idx,_=l.svgWidth,y=l.svg_height,w=l.padding,Z=l.branchSpacingPct,b=l.direction,k=l.info_panel_type,S=l.stn_list,M=l.loop_info,I=M.left_and_right_factor,O=M.bottom_factor,N=l.coline,z=s[0].filter((function(n){return!["linestart","lineend"].includes(n)})),E=s.slice(0,3).flat().filter((e={},function(n){return 2===(e[n]=(e[n]||0)+1)})).filter((function(n){return!["linestart","lineend"].includes(n)})),H=null!==(t=Object.values(N).filter((function(n){return[n.from,n.to].every((function(n){return s.slice(1,3).filter((function(n){return(0,d.Qo)(n,S)})).flat().includes(n)}))})).map((function(n){var t=z.findIndex((function(t){return t===n.from})),e=z.findIndex((function(t){return t===n.to}));return Math.abs(e-t)>z.length-2-Math.abs(e-t)?"major":"minor"})).at(0))&&void 0!==t?t:"minor",F=E.at(1)?(0,h.zS)(z,E,I,H):E.at(0)?(0,h.Xt)(z,E[0],O,I):(0,h.cX)(z,p,O,I),L=(0,h.Ft)(z,F),D=L.x_shares,P=L.y_shares,R=function(n,t,e,r,o,c){var s,l,u,f,d=n[0].filter((function(n){return!["linestart","lineend"].includes(n)})),h=n.slice(1,3).map((function(n){return n.slice(1,n.length-1)})),m=h.reduce((function(n,e){return n+e.filter((function(n){return!["linestart","lineend"].concat((0,i.Z)(t)).includes(n)})).length}),0)+d.length-c-2*o,g=(e-e*r/100*2)/(1+m),x=[e*r/100+(null!==(s=h.at(0))&&void 0!==s?s:[]).length*g,e*(1-r/100)-(null!==(l=h.at(1))&&void 0!==l?l:[]).length*g],p=(0,a.Z)((0,a.Z)({},Object.fromEntries((null!==(u=h.at(0))&&void 0!==u?u:[]).map((function(n,t){return[n,e*r/100+t*g]})))),Object.fromEntries((null!==(f=h.at(1))&&void 0!==f?f:[]).map((function(n,t){return[n,x[1]+(1+t)*g]}))));return{loop_branches:h,line_xs_branches:x,xs_branches:p}}(s,E,_[c],w,I,F.bottom.length),Q=R.loop_branches,A=R.line_xs_branches,T=R.xs_branches,W=(0,a.Z)((0,a.Z)({},P),Object.fromEntries(Q.flat().map((function(n){return[n,0]})))),B=Z*y/300,$=[225+B,y-75-(c===u.Ht.RailMap?0:125)-B],C=Object.keys(W).reduce((function(n,t){return(0,a.Z)((0,a.Z)({},n),{},(0,o.Z)({},t,$[0]+W[t]*($[1]-$[0])))}),{}),K=[Math.max(_[c]*w/100+(r&&c===u.Ht.RailMap?100:0),A[0]),Math.min(_[c]*(1-w/100)-(r&&c===u.Ht.RailMap?100:0),A[1])],X=Object.keys(D).reduce((function(n,t){return(0,a.Z)((0,a.Z)({},n),{},(0,o.Z)({},t,K[0]+D[t]*(K[1]-K[0])))}),{}),Y=r?{l:1,r:-1}[b]:0;[].concat((0,i.Z)(F.right),(0,i.Z)(F.left)).forEach((function(n){X[n]-=(C[n]-$[0])*Y})),F.bottom.forEach((function(n){X[n]-=($[1]-$[0])*Y}));var V=(0,a.Z)((0,a.Z)({},T),X),q=v(F,V,C,Y,[].concat(K,$),b),G=c===u.Ht.RailMap&&"sh2020"===k?3:0;Object.keys(N).length>0&&F.top.forEach((function(n){C[n]-=G+12}));var J=Q.length?0:($[1]-$[0])*Y/2;return(0,m.jsxs)("g",{id:"loop",transform:"translate(".concat(J,",0)"),children:[(0,m.jsx)("path",{stroke:"var(--rmg-theme-colour)",strokeWidth:12,fill:"none",d:q,strokeLinejoin:"round"}),c===u.Ht.RailMap&&(0,m.jsx)(j,{canvas:c,loop_stns:F,xs:V,ys:C}),(0,m.jsxs)("g",{transform:"translate(0,".concat(Object.keys(N).length>0?-12-G:0,")"),children:[(0,m.jsx)(g,{loop_branches:Q,edges:[].concat(K,$),xs:V,ys:C,canvas:c}),Object.keys(N).length>0&&(0,m.jsx)(x,{edges:[].concat(K,$),loop_stns:F,xs:V,ys:C,canvas:c})]}),c===u.Ht.Indoor&&(0,m.jsx)(j,{canvas:c,loop_stns:F,xs:V,ys:C})]})},v=function(n,t,e,i,o,a){var c=(0,r.Z)(o,4),s=c[0],l=c[1],u=c[2],f=c[3],d=function(n,t,e,r,o){return{right:[e+(r-u)*i,t],bottom:[n-(f-t)*i,r],left:[e-(f-r)*i,t],top:[n+(t-u)*i,r]}[o]},h=[];n.top.forEach((function(n){h.push([t[n],e[n]])})),["right","bottom","left"].forEach((function(r){if(n[r].length>0)h.push(d(h.at(-1)[0],h.at(-1)[1],t[n[r][0]],e[n[r][0]],r)),n[r].forEach((function(n){h.push([t[n],e[n]])}));else{var o={right:[l,h.at(-1)[1]],bottom:[h.at(-1)[0]+(f-h.at(-1)[1])*-i,h.at(-1)[1]+(f-h.at(-1)[1])],left:[s+(0===i?0:(f-u)*("l"===a?-1:1)),h.at(-1)[1]]};h.push(o[r])}})),h.push(d(h.at(-1)[0],h.at(-1)[1],t[n.top[0]],e[n.top[0]],"top"));var m=h.slice(1).map((function(n){var t=(0,r.Z)(n,2),e=t[0],i=t[1];return"L".concat(e,",").concat(i," ")})).join(" ");return"M".concat(h[0][0],",").concat(h[0][1]," ").concat(m," Z")},j=function(n){var t=n.canvas,e=n.loop_stns,i=n.xs,o=n.ys,a=(0,f.Qy)((function(n){return n.param})).current_stn_idx,c={top:0,bottom:0,left:-1,right:1},d={left:"r",right:"l",top:void 0,bottom:void 0},h=function(n,t){return{top:t%2===0?"upward":"downward",bottom:t%2===0?"upward":"downward",left:"left",right:"right"}[n]};return(0,m.jsxs)("g",{id:"loop_stations",children:[t===u.Ht.RailMap&&Object.entries(e).map((function(n){var t=(0,r.Z)(n,2),e=t[0];return t[1].map((function(n){return(0,m.jsx)("g",{transform:"translate(".concat(i[n],",").concat(o[n],")"),children:(0,m.jsx)(s.Z,{stnId:n,stnState:a===n?0:1,bank:c[e],direction:d[e]})},n)}))})),t===u.Ht.Indoor&&Object.entries(e).map((function(n){var t=(0,r.Z)(n,2),e=t[0];return t[1].map((function(n,t){return(0,m.jsx)("g",{transform:"translate(".concat(i[n],",").concat(o[n],")"),children:(0,m.jsx)(l.K,{stnId:n,nameDirection:h(e,t),services:[u.K9.local]})},n)}))}))]})}},17250:function(n,t,e){var r=e(45987),i=e(29439),o=e(1413),a=e(93433),c=e(72791),s=e(20713),l=e(37732),u=e(80184),f=["stnName","oneLine","directionPolarity"],d=["intInfos","direction"];t.Z=function(n){var t=n.stnId,e=n.stnState,r=n.color,i=n.bank,c=n.direction,s=(0,l.Qy)((function(n){return n.param})),f=s.direction,d=s.info_panel_type,m=s.stn_list,x=s.loop,p=m[t],v=null!==c&&void 0!==c?c:f,j=x?0:([].concat((0,a.Z)(p.branch.left),(0,a.Z)(p.branch.right)).length?8+12*p.name[1].split("\\").length:0)*("r"===v?-1:1),_="",y={};"sh2020"===d?(_=3===p.services.length?"stn_sh_2020_direct":2===p.services.length?"stn_sh_2020_express":"stn_sh_2020",y.fill=-1===e?"gray":r||"var(--rmg-theme-colour)"):(_=3===p.services.length?"direct_sh":2===p.services.length?"express_sh":[].concat((0,a.Z)(p.transfer.info[0]),(0,a.Z)(p.transfer.info[1]||[])).length>0?"int2_sh":"stn_sh",y.stroke=-1===e?"gray":r||"var(--rmg-theme-colour)");var w=null!==i&&void 0!==i?i:0,Z=("l"===v?6:-6)+j+30*w,b=("sh2020"===d?-20:-6)+Math.abs(w)*("sh2020"===d?25:11),k=w?0:"l"===v?-45:45;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("use",(0,o.Z)((0,o.Z)({xlinkHref:"#".concat(_)},y),{},{transform:"translate(".concat(w*("sh2020"===d?5:0),",0)")+"rotate(".concat(90*w*("sh2020"===d?1:-1),")")})),(0,u.jsx)("g",{transform:"translate(".concat(Z,",").concat(b,")rotate(").concat(k,")"),children:(0,u.jsx)(h,{name:p.name,infos:p.transfer.info,stnState:e,direction:v,facility:p.facility,bank:w,oneLine:p.one_line,intPadding:p.int_padding})}),0===e?(0,u.jsx)(g,{}):void 0]})};var h=function(n){var t,e=n.name,r=n.infos,o=n.stnState,f=n.direction,d=n.facility,h=n.bank,g=n.oneLine,p=n.intPadding,v=((0,l.Qy)((function(n){return n.param})).svg_height,c.useRef(null)),j="l"===f?1:-1,w=d!==s.mV.none?30:0,Z=h?-12:0,b=c.useRef(null),k=c.useState(0),S=(0,i.Z)(k,2),M=S[0],I=S[1];c.useEffect((function(){var n,t;return I(null!==(n=null===(t=b.current)||void 0===t?void 0:t.getBBox().width)&&void 0!==n?n:0)}),(0,a.Z)(JSON.stringify(r)));var O=p-M;return(0,u.jsxs)(u.Fragment,{children:[r.flat().length>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("line",{x1:(Z+w)*j,x2:O*j,stroke:-1===o?"gray":"black",strokeWidth:.5}),(0,u.jsx)(x,{ref:b,intInfos:r,direction:f,transform:"translate(".concat(O*j,",-10.75)")})]}),d!==s.mV.none&&(0,u.jsx)("use",{xlinkHref:"#"+d,x:10*j,y:-30}),(0,u.jsxs)("g",{textAnchor:"l"===f?"start":"end",transform:"translate(".concat(w*j,",-14)"),children:[(0,u.jsx)(m,{ref:v,stnName:e,oneLine:g,directionPolarity:j,fill:-1===o?"gray":0===o?"red":"black"}),(null===(t=r[1])||void 0===t?void 0:t.length)>0&&(0,u.jsx)("g",{transform:"translate(".concat((O+M/2)*j,",-30)"),children:(0,u.jsx)(_,{osiInfos:r[1]})}),(0,a.Z)(r[2]||[]).length>0&&(0,u.jsx)("g",{transform:"translate(".concat((p+5)*j,",0)"),children:(0,u.jsx)(y,{osysiInfos:r[2],direction:n.direction})})]})]})},m=c.forwardRef((function(n,t){var e=n.stnName,s=n.oneLine,l=n.directionPolarity,d=(0,r.Z)(n,f),h=c.useRef(null),m=c.useState(0),g=(0,i.Z)(m,2),x=g[0],p=g[1];c.useEffect((function(){p(s?h.current.getBBox().width+5:0)}),[].concat((0,a.Z)(e),[s]));return(0,u.jsx)("g",(0,o.Z)((0,o.Z)({ref:t},d),{},{children:c.useMemo((function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("g",{ref:h,children:e[0].split("\\").map((function(n,t,r){return(0,u.jsx)("text",{className:"rmg-name__zh",dy:-20*(r.length-1-t)+(s?8:-8*(e[1].split("\\").length-1)),children:n},t)}))}),(0,u.jsx)("g",{fontSize:8,transform:"translate(".concat(x*l,",0)"),children:e[1].split("\\").map((function(n,t,e){return(0,u.jsx)("text",{className:"rmg-name__en",dy:-8*(e.length-2-t)+2,children:n},t)}))})]})}),[].concat((0,a.Z)(e),[s,x,l]))}))})),g=function(){var n=(0,l.Qy)((function(n){return n.param})).stn_list,t=[-1,35,50,75][new Set(Object.values(n).map((function(n){return n.services})).flat()).size];return(0,u.jsx)("g",{transform:"translate(0, ".concat(t,")"),children:(0,u.jsx)("text",{className:"rmg-name__zh",fill:"red",textAnchor:"middle",children:"\u672c\u7ad9"})})},x=c.forwardRef((function(n,t){var e,i=n.intInfos,c=(n.direction,(0,r.Z)(n,d)),s=[].concat((0,a.Z)(i[0]),(0,a.Z)(i[1]||[]),(0,a.Z)((null===(e=i[2])||void 0===e?void 0:e.filter((function(n){return Boolean(n[4].match(/^\u78c1(\u60ac)*\u6d6e/))})))||[])),l=0;return(0,u.jsx)("g",(0,o.Z)((0,o.Z)({ref:t,fontSize:14,textAnchor:"middle"},c),{},{children:s.map((function(t,e){var r=Boolean(t[4].match(/^\d.*$/)),i=Boolean(t[4].match(/^\u78c1(\u60ac)*\u6d6e/));"r"===n.direction&&(l-=(r||i?20:14*t[4].length+12)+(0===e?0:5));var o=(0,u.jsx)("g",{});return o=i?(0,u.jsx)("g",{transform:"translate(".concat(l,",-16)scale(0.1428571429)"),children:(0,u.jsx)(p,{info:t})},e):r?(0,u.jsx)("g",{transform:"translate(".concat(l,",0)"),children:(0,u.jsx)(v,{info:t})},e):(0,u.jsx)("g",{transform:"translate(".concat(l,",0)"),children:(0,u.jsx)(j,{info:t})},e),"l"===n.direction&&(l+=r||i?25:14*t[4].length+12+5),o}))}))})),p=c.memo((function(n){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("use",{xlinkHref:"#intbox_maglev",fill:n.info[2],stroke:n.info[2]})})}),(function(n,t){return n.info.toString()===t.info.toString()})),v=c.memo((function(n){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("use",{xlinkHref:"#intbox_number",fill:n.info[2]}),(0,u.jsx)("text",{x:10,className:"rmg-name__zh",fill:n.info[3],dominantBaseline:"central",children:n.info[4].match(/(\d*)\w+/)[0]})]})}),(function(n,t){return n.info.toString()===t.info.toString()})),j=c.memo((function(n){var t=n.info[4].split("\\")[0].length;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("rect",{height:22,width:14*t+12,y:-11,fill:n.info[2]}),(0,u.jsx)("text",{x:7*t+6,className:"rmg-name__zh",fill:n.info[3],dominantBaseline:"central",children:n.info[4].split("\\")[0]})]})}),(function(n,t){return n.info.toString()===t.info.toString()})),_=function(n){var t=n.osiInfos.map((function(n){return n[4]})).join("\uff0c");return c.useMemo((function(){return(0,u.jsxs)("g",{textAnchor:"middle",fontSize:"50%",children:[(0,u.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u6362\u4e58".concat(t)}),(0,u.jsx)("text",{className:"rmg-name__zh",dy:5,children:"\u4ec5\u9650\u516c\u5171\u4ea4\u901a\u5361"}),(0,u.jsx)("text",{className:"rmg-name__en",dy:12.5,fontSize:"75%",children:"Only for Public Transportation Card"})]})}),[t.toString()])},y=function(n){var t=n.osysiInfos.map((function(n){return n[4]})).join("\uff0c"),e=n.osysiInfos.map((function(n){return n[5]})).join(", ");return c.useMemo((function(){return(0,u.jsxs)("g",{textAnchor:"l"===n.direction?"start":"end",fontSize:"50%",children:[(0,u.jsxs)("text",{className:"rmg-name__zh",dy:3,children:["\u8f6c\u4e58",t]}),(0,u.jsxs)("text",{className:"rmg-name__en",dy:10,fontSize:"75%",children:["To ",e]})]})}),[n.osysiInfos.toString(),n.direction])}},23824:function(n,t,e){e.d(t,{Az:function(){return f},QE:function(){return d},ML:function(){return h},h6:function(){return m},LD:function(){return g},pS:function(){return x}});var r=e(29439),i=e(15671),o=e(43144),a=e(93433),c=e(37762),s=e(4942),l=e(1413),u=e(20713),f=function(n,t,e){return Object.keys(n).reduce((function(r,i){return(0,l.Z)((0,l.Z)({},r),{},(0,s.Z)({},i,n[i].children.reduce((function(r,o){return(0,l.Z)((0,l.Z)({},r),{},(0,s.Z)({},o,1+t(n,o)+e(n,i)))}),{})))}),{})},d=function n(t,e,r){if(t===e)return{len:0,nodes:[t]};var i=[],o=[];Object.keys(r[t]).forEach((function(a){var c=n(a,e,r);c.len<0||(i.push(r[t][a]+c.len),c.nodes.unshift(t),o.push(c.nodes))}));var a=Math.max.apply(Math,i);return{len:a,nodes:o[i.indexOf(a)]}},h=function(n,t,e){var r=d("linestart","lineend",t);if(r.nodes.includes(n))return d(r.nodes[1],n,t).len;for(var i=e.filter((function(t){return t.includes(n)}))[0],o=n;!r.nodes.includes(o);)o=i[i.indexOf(o)-1];for(var a=n;!r.nodes.includes(a);)a=i[i.indexOf(a)+1];var c="linestart"===o,s=[];return c||"lineend"===a?c?(s[0]=0,s[1]=d(r.nodes[1],a,t).len,s[2]=d(i[1],n,t).len,s[3]=d(n,a,t).len):(s[0]=d(r.nodes[1],o,t).len,s[1]=d(o,r.nodes.slice(-2)[0],t).len,s[2]=d(o,n,t).len,s[3]=d(n,i.slice(-2)[0],t).len):(s[0]=d(r.nodes[1],o,t).len,s[1]=d(o,a,t).len,s[2]=d(o,n,t).len,s[3]=d(n,a,t).len),s[0]+s[2]*s[1]/(s[2]+s[3])},m=function(n,t,e){var r;return console.log("computing stations' states"),(0,a.Z)(new Set((r=[]).concat.apply(r,(0,a.Z)(t)))).reduce((function(r,i){return(0,l.Z)((0,l.Z)({},r),{},(0,s.Z)({},i,i===n?0:(e===u.wA.right?function(n,t,e){var r,i=(0,c.Z)(e);try{for(i.s();!(r=i.n()).done;){var o=r.value,a=o.indexOf(n),s=o.indexOf(t);if(-1!==a&&a<s)return!0}}catch(l){i.e(l)}finally{i.f()}return!1}(n,i,t):function(n,t,e){var r,i=(0,c.Z)(e);try{for(i.s();!(r=i.n()).done;){var o=r.value,a=o.indexOf(n),s=o.indexOf(t);if(-1!==s&&s<a)return!0}}catch(l){i.e(l)}finally{i.f()}return!1}(n,i,t))?1:-1))}),{})},g=function(){function n(t){var e=this;(0,i.Z)(this,n),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(n){return 0},this.rightWideFactor=function(n){return 0},this.pathTurnParams=function(n){var t=35-17.5*Math.sqrt(3),e=n-2*t;return{tr:35,dx_a:17.5,dy_a:t,dx_l:e*Math.sqrt(3),dy_l:e}},this.pathTurnSE=function(n){var t=e.pathTurnParams(n),r=t.tr,i=t.dx_a,o=t.dy_a,a=t.dx_l,c=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(i,",").concat(o," l ").concat(a,",").concat(c," a ").concat(r,",").concat(r," 0 0,0 ").concat(i,",").concat(o)},this.pathTurnNE=function(n){var t=e.pathTurnParams(n),r=t.tr,i=t.dx_a,o=t.dy_a,a=t.dx_l,c=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(i,",").concat(-o," l ").concat(a,",").concat(-c," a ").concat(r,",").concat(r," 0 0,1 ").concat(i,",").concat(-o)},this.stnList=t.stnList,this.criticalPath=t.criticalPath}return(0,o.Z)(n,[{key:"getYShare",value:function(n,t){if(n in this.yShares)return this.yShares[n];if(["linestart","lineend"].includes(n)||this.stnList[n].parents.length>1||this.stnList[n].children.length>1)return this.yShares[n]=0,0;var e=this.stnList[n].parents[0];if(e){if(1===this.stnList[e].children.length){var r=this.getYShare(e);return this.yShares[n]=r,r}var i=0===this.stnList[e].children.indexOf(n)?1:-1;return this.yShares[n]=i,i}return this.yShares[n]=0,0}},{key:"_linePath",value:function(n,t,e,i,o,a,c,s){var l=this,u=(0,r.Z)([],3),f=u[0],d=u[1],h=u[2],m=[],g=this.pathTurnParams(a),x=g.dx_a+g.dx_l/2,p=(t[1]-t[0])/c.len*2,v=((t[1]-t[0])/c.len-2*x)/2;return v+p<0&&console.warn("SVG width too small! ".concat(v+p)),n.forEach((function(t){var r=i[t],c=o[t];if(!d&&0!==d)return f=t,h=r,d=c,void(1===n.length?m.push("M ".concat(r,",").concat(c)):e[0].includes(t)?e[0].includes(n[1])?m.push("M ".concat(r,",").concat(c)):(i[n[1]]>0&&m.push("M ".concat(r,",").concat(c+s)),o[n[1]]<0&&m.push("M ".concat(r,",").concat(c-s))):m.push("M ".concat(r,",").concat(c)));c>d?(m.push("h ".concat(0===c?r-h-p*l.leftWideFactor(t)-v-2*x:p*l.rightWideFactor(f)+v)),m.push(l.pathTurnSE(a))):c<d&&(m.push("h ".concat(0===c?r-h-p*l.leftWideFactor(t)-v-2*x:p*l.rightWideFactor(f)+v)),m.push(l.pathTurnNE(a))),m.push("H ".concat(r)),f=t,h=r,d=c})),m.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(n,t){console.log("computing y shares");var e=new this({stnList:n});return Object.keys(n).forEach((function(n){["linestart","lineend"].includes(n)||n in e.yShares||e.getYShare(n,t)})),e.yShares}}]),n}(),x=function(n,t){var e=(n=n.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),r=n.filter((function(n){return t[n]<=0}));return 1===e.length&&(r=n),0===e.filter((function(n){return-1!==r.indexOf(n)})).length&&e.length&&(r[0]===n[0]?r.push(e[0]):e[0]===n[0]&&e[e.length-1]===n[n.length-1]&&r.length?(r=n,e=[]):r.unshift(e[e.length-1])),{main:e,pass:r}}},68306:function(n,t,e){e.d(t,{cX:function(){return o},Xt:function(){return a},zS:function(){return c},Ft:function(){return s},f2:function(){return l}});var r=e(29439),i=e(93433),o=function(n,t,e,r){var o=n.length-2*r-e,a=n.findIndex((function(n){return n===t})),c=[].concat((0,i.Z)(n),(0,i.Z)(n),(0,i.Z)(n)),s=n.length+a-Math.floor(o/2)+(o%2===0?1:0),l=n.length+a+Math.floor(o/2);return{top:c.slice(s,l+1),left:c.slice(s-r,s),right:c.slice(l+1,l+1+r),bottom:c.slice(l+1+r,l+1+r+e)}},a=function(n,t,e,r){var o=n.length-2*r-e,a=[].concat((0,i.Z)(n),(0,i.Z)(n),(0,i.Z)(n)),c=n.length+n.findIndex((function(n){return n===t})),s=a[c+o-1],l=n.length+n.findIndex((function(n){return n===s}))+(c+o>2*n.length?n.length:0);return{top:a.slice(c,l+1),left:a.slice(c-r,c),right:a.slice(l+1,l+1+r),bottom:a.slice(l+1+r,l+1+r+e)}},c=function(n,t,e,i){var o=n.findIndex((function(n){return n===t[0]})),c=n.findIndex((function(n){return n===t[1]})),s=o>c?[c,o,t[1],t[0]]:[o,c,t[0],t[1]],l=(0,r.Z)(s,4);o=l[0],c=l[1],t[0]=l[2],t[1]=l[3];var u=n.slice(o,c+1),f=n.filter((function(n){return!u.filter((function(n){return!t.includes(n)})).includes(n)})),d=n.length-("major"===i?Math.max:Math.min)(u.length,f.length)-2*e,h="major"===i?u.length>f.length?t[0]:t[1]:u.length>f.length?t[1]:t[0];return a(n,h,d,e)},s=function(n,t){var e=Object.fromEntries(n.map((function(n){return[n,-1]}))),r=Object.fromEntries(n.map((function(n){return[n,-1]})));return t.top.forEach((function(n,i){e[n]=0+1/(t.top.length+1)*(i+1),r[n]=0})),t.right.forEach((function(n,i){e[n]=1,r[n]=0+1/(t.right.length+1)*(i+1)})),t.bottom.forEach((function(n,i){e[n]=1-1/(t.bottom.length+1)*(i+1),r[n]=1})),t.left.forEach((function(n,i){e[n]=0,r[n]=1-1/(t.left.length+1)*(i+1)})),{x_shares:e,y_shares:r}},l=function(n,t,e,r){var o=n[0].filter((function(n){return!["linestart","lineend"].includes(n)})),a=[].concat((0,i.Z)(o),(0,i.Z)(o),(0,i.Z)(o)),c="r"===t?a:a.reverse(),s=c.findIndex((function(n){return r===n}))+o.length;return c.slice(s+1).filter((function(n){return e[n].loop_pivot})).slice(void 0,2)}},37762:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(40181);function i(n,t){var e="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=(0,r.Z)(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var i=0,o=function(){};return{s:o,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return c=n.done,n},e:function(n){s=!0,a=n},f:function(){try{c||null==e.return||e.return()}finally{if(s)throw a}}}}}}]);
//# sourceMappingURL=2977.1f6ab2b9.chunk.js.map