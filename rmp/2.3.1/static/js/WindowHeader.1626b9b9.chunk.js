(self.webpackChunkrmp=self.webpackChunkrmp||[]).push([[4030],{4433:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Be}});var r=t(4165),s=t(5861),i=t(9439),o=t(2791),a=t(1252),c=t(5946),l=t(2893),u=t(9120),d=t(7067),h=t(6096),x=t(2790),f=t(447),p=t(7322),j=t(9230),m=t(1165),g=t(1638),v=t(924),b=t(713),y=t(7339),w=t(5987),C=t(4942),S=t(3433),k=t(1413),Z=t(5515),O=t(5984),z=t(8284),A=t(3671),E=t(8817),N=t(3486),M=t(6425),R=t(1580),_=t(138),J=t(3321),T=t(9671),I=t(3399),P=t(7705),B=t(4090),G=t(7496),L=t(6146),V=t(3306),D=t(184),U=function(e){var n=e.isOpen,i=e.handleOpenTemplates,o=e.onClose,a=(0,j.$G)().t,c=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(9681)("./".concat(n,".json"));case 2:s=e.sent,i(s.default),o();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,D.jsxs)(J.u_,{isOpen:n,onClose:o,children:[(0,D.jsx)(T.Z,{}),(0,D.jsxs)(I.h,{children:[(0,D.jsx)(P.x,{children:a("header.open.gallery")}),(0,D.jsx)(B.o,{}),(0,D.jsx)(G.f,{children:(0,D.jsx)(L.g,{children:["shanghai","guangzhou","beijing","santiago"].map((function(e){return(0,D.jsx)(V.z,{minWidth:200,onClick:function(){return c(e)},children:a("header.open.".concat(e))},e)}))})})]})]})},H=["version"],W=["version"];function $(){var e=(0,j.$G)().t,n=(0,y.u5)(),t=o.useRef(window.graph),a=o.useRef(null),c=o.useRef(null),l=o.useState(!1),m=(0,i.Z)(l,2),g=m[0],v=m[1],b=o.useCallback((function(){n((0,A.ML)()),n((0,A.lH)()),n((0,z.DR)(t.current.export()))}),[n,A.ML,A.lH,z.DR,t]),J=function(){var o=(0,s.Z)((0,r.Z)().mark((function s(o){var a,c,l,u,d,h,x;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c=null===(a=o.target.files)||void 0===a?void 0:a[0],console.log("OpenActions.handleUploadRMG():: received file",c),"application/json"===(null===c||void 0===c?void 0:c.type)){r.next=7;break}n((0,A.bI)({status:"error",message:e("OpenActions.invalidType")})),console.error("OpenActions.handleUploadRMG():: Invalid file type! Only file in JSON format is accepted."),r.next=25;break;case 7:return r.prev=7,r.next=10,q(c);case 10:l=r.sent,u=JSON.parse(l),d=u.stn_list,h=u.theme,x=Object.fromEntries(Object.keys(d).filter((function(e){return!["linestart","lineend"].includes(e)})).map((function(e){return[e,"stn_".concat((0,O.x0)(10))]}))),Object.entries(d).filter((function(e){var n=(0,i.Z)(e,2),t=n[0];n[1];return!["linestart","lineend"].includes(t)})).forEach((function(e){var n=(0,i.Z)(e,2),r=n[0],s=n[1],o=t.current.filterNodes((function(e,n){return Object.values(N.T).includes(n.type)&&n[n.type].names[0]===s.name[0]}));0!==o.length&&(x[r]=o[0])})),Object.entries(d).filter((function(e){var n=(0,i.Z)(e,2),t=n[0];n[1];return!["linestart","lineend"].includes(t)})).filter((function(e){var n=(0,i.Z)(e,2),r=(n[0],n[1]);return 0===t.current.filterNodes((function(e,n){return Object.values(N.T).includes(n.type)&&n[n.type].names[0]===r.name[0]})).length})).forEach((function(e,n){var r=(0,i.Z)(e,2),s=r[0],o=r[1],a=N.T.ShmetroBasic;"shmetro"===u.style?a=o.transfer.info.flat().length>0?N.T.ShmetroInt:"sh2020"===u.info_panel_type?N.T.ShmetroBasic2020:N.T.ShmetroBasic:"gzmtr"!==u.style&&"mtr"!==u.style||(a=o.transfer.info.flat().length>0?N.T.GzmtrInt:N.T.GzmtrBasic);var c=(0,k.Z)((0,k.Z)({},JSON.parse(JSON.stringify(R.Z[a].defaultAttrs))),{},{names:o.name});if(a===N.T.ShmetroBasic2020)c.color=h;else if(a===N.T.GzmtrBasic)c.color=u.theme,c.lineCode=u.line_num,c.stationCode=o.num;else if(a===N.T.GzmtrInt){var l=JSON.parse(JSON.stringify(o.transfer.info));l.forEach((function(e){return e.forEach((function(e){e[4]="1",e[5]="01"}))})),l[0].unshift([].concat((0,S.Z)(u.theme),[u.line_num,o.num])),c.transfer=l}t.current.addNode(x[s],(0,C.Z)({visible:!0,zIndex:0,x:100+50*n,y:1e3,type:a},a,c))})),Object.entries(d).filter((function(e){var n=(0,i.Z)(e,2),t=n[0];n[1];return!["linestart","lineend"].includes(t)})).forEach((function(e){var n=(0,i.Z)(e,2),r=n[0];n[1].children.filter((function(e){return!["linestart","lineend"].includes(e)})).forEach((function(e){var n;t.current.addDirectedEdgeWithKey("line_".concat((0,O.x0)(10)),x[r],x[e],(n={visible:!0,zIndex:0,type:E.y.Diagonal},(0,C.Z)(n,E.y.Diagonal,JSON.parse(JSON.stringify(M.V[E.y.Diagonal].defaultAttrs))),(0,C.Z)(n,"style",E.R.SingleColor),(0,C.Z)(n,E.R.SingleColor,{color:h}),(0,C.Z)(n,"reconcileId",""),n))}))})),b(),r.next=25;break;case 21:r.prev=21,r.t0=r.catch(7),n((0,A.bI)({status:"error",message:e("OpenActions.unknownError")})),console.error("OpenActions.handleUploadRMG():: Unknown error occurred while parsing the uploaded file",r.t0);case 25:o.target.value="";case 26:case"end":return r.stop()}}),s,null,[[7,21]])})));return function(e){return o.apply(this,arguments)}}(),T=function(){var i=(0,s.Z)((0,r.Z)().mark((function s(i){var o,a,c,l,u,d;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=null===(o=i.target.files)||void 0===o?void 0:o[0],console.log("OpenActions.handleUpload():: received file",a),"application/json"===(null===a||void 0===a?void 0:a.type)){r.next=7;break}n((0,A.bI)({status:"error",message:e("OpenActions.invalidType")})),console.error("OpenActions.handleUpload():: Invalid file type! Only file in JSON format is accepted."),r.next=30;break;case 7:return r.prev=7,r.next=10,q(a);case 10:return c=r.sent,r.t0=JSON,r.next=14,(0,_._s)(c);case 14:r.t1=r.sent,l=r.t0.parse.call(r.t0,r.t1),l.version,u=(0,w.Z)(l,H),n((0,A.x_)()),t.current.clear(),t.current.import(u.graph),d=(0,k.Z)((0,k.Z)({},u),{},{graph:JSON.stringify(u.graph)}),n((0,z.hf)(d)),b(),r.next=30;break;case 26:r.prev=26,r.t2=r.catch(7),n((0,A.bI)({status:"error",message:e("OpenActions.unknownError")})),console.error("OpenActions.handleUpload():: Unknown error occurred while parsing the uploaded file",r.t2);case 30:i.target.value="";case 31:case"end":return r.stop()}}),s,null,[[7,26]])})));return function(e){return i.apply(this,arguments)}}(),I=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(s){var i,o,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,(0,_._s)(JSON.stringify(s));case 3:e.t1=e.sent,i=e.t0.parse.call(e.t0,e.t1),i.version,o=(0,w.Z)(i,W),n((0,A.x_)()),t.current.clear(),t.current.import(o.graph),a=(0,k.Z)((0,k.Z)({},o),{},{graph:JSON.stringify(o.graph)}),n((0,z.hf)(a)),b();case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,D.jsxs)(u.v,{children:[(0,D.jsx)(d.j,{as:h.h,size:"sm",variant:"ghost",icon:(0,D.jsx)(p.Ap8,{})}),(0,D.jsxs)(x.q,{children:[(0,D.jsx)(f.s,{icon:(0,D.jsx)(p.KVB,{}),onClick:function(){n((0,A.x_)()),t.current.clear();n((0,z.hf)({graph:"{}",svgViewBoxZoom:100,svgViewBoxMin:{x:0,y:0}})),b()},children:e("header.open.new")}),(0,D.jsx)("input",{ref:c,type:"file",accept:".json",hidden:!0,onChange:T,"data-testid":"file-upload"}),(0,D.jsx)(f.s,{icon:(0,D.jsx)(p.Ap8,{}),onClick:function(){var e;return null===c||void 0===c||null===(e=c.current)||void 0===e?void 0:e.click()},children:e("header.open.config")}),(0,D.jsx)("input",{ref:a,type:"file",accept:".json",hidden:!0,onChange:J,"data-testid":"file-upload"}),(0,D.jsx)(f.s,{icon:(0,D.jsx)(p.Ap8,{}),onClick:function(){var e;return null===a||void 0===a||null===(e=a.current)||void 0===e?void 0:e.click()},children:e("header.open.configRMG")}),(0,D.jsxs)(f.s,{icon:(0,D.jsx)(p.uEt,{}),onClick:function(){return v(!0)},children:[e("header.open.gallery"),(0,D.jsx)(Z.C,{ml:"1",colorScheme:"green",children:"New"})]}),(0,D.jsx)(U,{isOpen:g,handleOpenTemplates:I,onClose:function(){return v(!1)}})]})]})}var q=function(e){return new Promise((function(n){var t=new FileReader;t.onloadend=function(){return n(t.result)},t.readAsText(e)}))},Q=t(6300),X=t(2406),K=t(3466),Y=t(4363),F=t(3578),ee=t(9704),ne=t(3300),te=t(3541),re=function(e){var n=e.isOpen,t=e.onClose,r=(0,j.$G)().t;return(0,D.jsxs)(J.u_,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[(0,D.jsx)(T.Z,{}),(0,D.jsxs)(I.h,{children:[(0,D.jsx)(P.x,{children:r("header.download.termsAndConditions")}),(0,D.jsx)(B.o,{}),(0,D.jsx)(G.f,{children:(0,D.jsxs)(te.GS,{children:[(0,D.jsxs)(te.HC,{children:["The layout of the elements on the signage or rail map, is designed by"," ",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://www.shmetro.com/",isExternal:!0,children:["Shanghai Shentong Metro Group ",(0,D.jsx)(Y.J,{as:p.jhj})]}),", ",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://www.gzmtr.com/",isExternal:!0,children:["Guangzhou Metro Group ",(0,D.jsx)(Y.J,{as:p.jhj})]})," or ",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://www.mtr.com.hk/",isExternal:!0,children:["MTR Corporation ",(0,D.jsx)(Y.J,{as:p.jhj})]}),", depending on your selection. You shall grant appropriate permit or license from the relevant company above before using the generated images for commercial purposes, if it is required to do so.",(0,D.jsx)("br",{}),"\u6807\u5fd7\u7248\u6216\u8def\u7ebf\u56fe\u7684\u5143\u7d20\u6216\u5e03\u5c40\uff0c\u57fa\u4e8e\u4f60\u6240\u9009\u62e9\u7684\u98ce\u683c\uff0c\u4e3a",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://www.shmetro.com/",isExternal:!0,children:["\u4e0a\u6d77\u7533\u901a\u5730\u94c1\u96c6\u56e2 ",(0,D.jsx)(Y.J,{as:p.jhj})]}),"\uff0c",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://www.gzmtr.com/",isExternal:!0,children:["\u5e7f\u5dde\u5730\u94c1\u96c6\u56e2\u516c\u53f8 ",(0,D.jsx)(Y.J,{as:p.jhj})]}),"\u6216",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://www.mtr.com.hk/",isExternal:!0,children:["\u6e2f\u94c1\u516c\u53f8 ",(0,D.jsx)(Y.J,{as:p.jhj})]}),"\u6240\u8bbe\u8ba1\u3002\u5728\u4ea7\u751f\u7684\u56fe\u50cf\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u524d\uff0c\u4f60\u5e94\u5411\u76f8\u5173\u516c\u53f8\u53d6\u5f97\u9002\u5f53\u4e4b\u8bb8\u53ef\u8bc1\u6216\u6388\u6743\u3002"]}),(0,D.jsxs)(te.HC,{children:["The elements including shapes and lines on the image are drawn by"," ",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://www.github.com/thekingofcity",isExternal:!0,children:["thekingofcity ",(0,D.jsx)(Y.J,{as:p.jhj})]})," and ",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://www.github.com/wongchito",isExternal:!0,children:["Chito Wong ",(0,D.jsx)(Y.J,{as:p.jhj})]}),", based on the design standards or rules of the companies listed above. You may use them for any purposes, but it is recommended to state the name and the link of software alongside.",(0,D.jsx)("br",{}),"\u56fe\u50cf\u7684\u5143\u7d20\uff0c\u5305\u62ec\u56fe\u5f62\u53ca\u7ebf\u6761\uff0c\u5747\u7531",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://www.github.com/thekingofcity",isExternal:!0,children:["thekingofcity ",(0,D.jsx)(Y.J,{as:p.jhj})]}),"\u53ca",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://www.github.com/wongchito",isExternal:!0,children:["Chito Wong ",(0,D.jsx)(Y.J,{as:p.jhj})]}),"\u57fa\u4e8e\u4e0a\u8ff0\u516c\u53f8\u8bbe\u8ba1\u6807\u51c6\u6216\u51c6\u5219\u7ed8\u5236\u3002\u4f60\u53ef\u5c06\u5176\u7528\u4e8e\u4efb\u4f55\u76ee\u7684\uff0c\u4f46\u6211\u4eec\u5efa\u8bae\u4f60\u4e8e\u4f7f\u7528\u540c\u65f6\u9644\u4ee5\u6211\u4eec\u7684\u540d\u5b57\u4ee5\u53ca\u672c\u7f51\u7ad9\u5730\u5740\u3002"]}),(0,D.jsxs)(te.HC,{children:["Due to copyright, licensing and other legal restrictions, Rail Map Painter uses"," ",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://github.com/ButTaiwan/genyo-font",isExternal:!0,children:["GenYoMin provided by ButTaiwan ",(0,D.jsx)(Y.J,{as:p.jhj})]}),", and Vegur instead of MTRSung and Myriad Pro respectively to display and generate MTR-style signage. You shall grant appropriate permit or license from the manufacturers before using those generated images for commercial purposes.",(0,D.jsx)("br",{}),"\u7531\u4e8e\u8457\u4f5c\u6743\u53ca\u5176\u4ed6\u6cd5\u5f8b\u9650\u5236\uff0c\u94c1\u8def\u8def\u7ebf\u56fe\u7ed8\u5236\u5668\u4f7f\u7528\u7531",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://github.com/ButTaiwan/genyo-font",isExternal:!0,children:["ButTaiwan\u63d0\u4f9b\u7684\u6e90\u6a23\u660e\u9ad4 ",(0,D.jsx)(Y.J,{as:p.jhj})]}),"\uff0c\u4ee5\u53caVegur\uff0c\u4ee5\u4ee3\u66ff\u6e2f\u94c1\u6837\u5f0f\u6807\u5fd7\u724c\u6240\u4f7f\u7528\u7684\u5730\u94c1\u5b8b\u53caMyriad Pro\u3002\u5728\u4ea7\u751f\u4e4b\u56fe\u50cf\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u524d\uff0c\u4f60\u5e94\u5411\u5b57\u578b\u751f\u4ea7\u5382\u5546\u53d6\u5f97\u9002\u5f53\u4e4b\u8bb8\u53ef\u8bc1\u6216\u6388\u6743\u3002"]}),(0,D.jsxs)(te.HC,{children:["The exported images in PNG or SVG format may be modified, published, or used for other purposes except commercial use, under the conditions above.",(0,D.jsx)("br",{}),"\u8f93\u51fa\u7684PNG\u6216SVG\u56fe\u50cf\u53ef\u57fa\u4e8e\u4e0a\u8ff0\u6761\u6b3e\uff0c\u5728\u975e\u5546\u4e1a\u4f7f\u7528\u65f6\uff0c\u7528\u4e8e\u4fee\u6539\u3001\u53d1\u884c\u6216\u5176\u4ed6\u7528\u9014\u3002"]}),(0,D.jsxs)(te.HC,{children:["All flag emojis shown on Windows platforms are designed by"," ",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://openmoji.org/",isExternal:!0,children:["OpenMoji ",(0,D.jsx)(Y.J,{as:p.jhj})]})," ","\u2013 the open-source emoji and icon project. License:",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://creativecommons.org/licenses/by-sa/4.0/",isExternal:!0,children:["CC BY-SA 4.0 ",(0,D.jsx)(Y.J,{as:p.jhj})]}),(0,D.jsx)("br",{}),"\u4e8eWindows\u4f5c\u4e1a\u7cfb\u7edf\u4e0a\u663e\u793a\u7684\u56fd\u65d7Emoji\u4e3a",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://openmoji.org/",isExternal:!0,children:["OpenMoji ",(0,D.jsx)(Y.J,{as:p.jhj})]}),"\u6240\u8bbe\u8ba1\u3002\u8bb8\u53ef\u8bc1\uff1a",(0,D.jsxs)(K.r,{color:"teal.500",href:"https://creativecommons.org/licenses/by-sa/4.0/",isExternal:!0,children:["CC BY-SA 4.0 ",(0,D.jsx)(Y.J,{as:p.jhj})]})]}),(0,D.jsxs)(te.HC,{children:["We reserve the rights, without prior notice, to modify, add, or remove these terms. The Chinese translation is for reference only. In case of any discrepancy between the English version and the Chinese version, the English version shall prevail.",(0,D.jsx)("br",{}),"\u6211\u4eec\u4fdd\u7559\u4fee\u6539\u3001\u65b0\u589e\u6216\u79fb\u9664\u4e0a\u8ff0\u6761\u6b3e\u4e4b\u6743\u5229\uff0c\u800c\u65e0\u9700\u53e6\u884c\u901a\u77e5\u3002\u4e2d\u6587\u8bd1\u672c\u4ec5\u4f9b\u53c2\u8003\uff0c\u6587\u4e49\u5982\u4e0e\u82f1\u6587\u6709\u6b67\u5f02\uff0c\u6982\u4ee5\u82f1\u6587\u672c\u4e3a\u51c6\u3002"]})]})})]})]})};function se(){var e=(0,j.$G)().t,n=o.useRef(window.graph),t=(0,a.ff)("white","gray.800"),r=o.useState("png"),s=(0,i.Z)(r,2),c=s[0],g=s[1],v={png:e("header.download.png"),svg:e("header.download.svg")},b=o.useState(100),w=(0,i.Z)(b,2),C=w[0],k=w[1],Z=Object.fromEntries([25,33,50,67,75,80,90,100,110,125,150,175,200,250,300,400,500].map((function(e){return[e,"".concat(e,"%")]}))),O=o.useState(!1),z=(0,i.Z)(O,2),A=z[0],E=z[1],N=[{type:"select",label:e("header.download.format"),value:c,options:v,onChange:function(e){return g("png"===e?"png":"svg")}}],M=[{type:"select",label:e("header.download.scale"),value:C,options:Z,onChange:function(e){return k(e)}},{type:"switch",label:e("header.download.transparent"),isChecked:A,onChange:E}],R=o.useState(!1),L=(0,i.Z)(R,2),U=L[0],H=L[1],W=o.useState(!1),$=(0,i.Z)(W,2),q=$[0],te=$[1],se=o.useState(!1),ce=(0,i.Z)(se,2),le=ce[0],ue=ce[1],de=o.useState(!1),he=(0,i.Z)(de,2),xe=he[0],fe=he[1];return(0,D.jsxs)(u.v,{children:[(0,D.jsx)(d.j,{as:h.h,size:"sm",variant:"ghost",icon:(0,D.jsx)(p.uKn,{})}),(0,D.jsxs)(x.q,{children:[(0,D.jsx)(f.s,{icon:(0,D.jsx)(p.tfk,{}),onClick:function(){var e=(0,_.Ru)(y.ZP.getState().param);ie("RMP_".concat((new Date).valueOf(),".json"),"application/json",e)},children:e("header.download.config")}),(0,D.jsx)(f.s,{icon:(0,D.jsx)(p.e0s,{}),onClick:function(){return H(!0)},children:e("header.download.image")})]}),(0,D.jsxs)(J.u_,{size:"xl",isOpen:U,onClose:function(){return H(!1)},children:[(0,D.jsx)(T.Z,{}),(0,D.jsxs)(I.h,{children:[(0,D.jsx)(P.x,{children:e("header.download.image")}),(0,D.jsx)(B.o,{}),(0,D.jsxs)(G.f,{children:[(0,D.jsx)(m.M5,{fields:N}),"png"===c&&(0,D.jsx)(m.M5,{fields:M}),(0,D.jsx)("br",{}),(0,D.jsx)(Q.X,{isChecked:le,onChange:function(e){return ue(e.target.checked)},children:(0,D.jsxs)(X.x,{children:[e("header.download.shareInfo1"),(0,D.jsxs)(K.r,{color:"teal.500",onClick:function(){return window.open("https://railmapgen.github.io/rmp","_blank")},children:[e("header.about.rmp")," ",(0,D.jsx)(Y.J,{as:p.jhj})]}),e("header.download.shareInfo2")]})}),(0,D.jsx)(Q.X,{isChecked:xe,onChange:function(e){return fe(e.target.checked)},children:(0,D.jsxs)(X.x,{children:[e("header.download.termsAndConditionsInfo"),(0,D.jsxs)(K.r,{color:"teal.500",onClick:function(){return te(!0)},children:[e("header.download.termsAndConditions")," ",(0,D.jsx)(Y.J,{as:p.jhj})]}),e("header.download.period")]})})]}),(0,D.jsx)(F.m,{children:(0,D.jsx)(l.U,{children:(0,D.jsx)(V.z,{colorScheme:"teal",variant:"outline",size:"sm",disabled:!xe,onClick:function(){H(!1);var e=(0,ne.fx)(n.current),r=e.xMin,s=e.yMin,o=e.xMax,a=e.yMax,l=o-r,u=a-s,d=document.getElementById("canvas").cloneNode(!0);if((0,S.Z)(d.children).filter((function(e){return n.current.hasNode(e.id)&&n.current.getNodeAttribute(e.id,"type")===ee.Z.Virtual})).forEach((function(e){return d.removeChild(e)})),le||d.appendChild(ae(o-400,a-60)),d.setAttribute("viewBox","".concat(r," ").concat(s," ").concat(l," ").concat(u)),d.setAttribute("width",l.toString()),d.setAttribute("height",u.toString()),Object.entries({".rmp-name__zh":["font-family"],".rmp-name__en":["font-family"],".rmp-name-station":["paint-order","stroke","stroke-width"]}).forEach((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1],s=document.querySelector(t),o=window.getComputedStyle(s);d.querySelectorAll(t).forEach((function(e){r.forEach((function(n){e.setAttribute(n,o.getPropertyValue(n))})),e.classList.remove(t)}))})),"svg"!==c){document.body.appendChild(d);var h="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(d.outerHTML)));document.body.removeChild(d);var x=document.createElement("canvas"),f=l*C/100,p=u*C/100;x.width=f,x.height=p;var j=x.getContext("2d");A||(j.fillStyle=t,j.fillRect(0,0,f,p));var m=new Image;m.onload=function(){j.drawImage(m,0,0,f,p),x.toBlob((function(e){return oe("RMP_".concat((new Date).valueOf(),".png"),e)}),"image/png")},m.src=h}else ie("RMP_".concat((new Date).valueOf(),".svg"),"image/svg+xml",d.outerHTML)},children:e("header.download.confirm")})})}),(0,D.jsx)(re,{isOpen:q,onClose:function(){return te(!1)}})]})]})]})}var ie=function(e,n,t){var r=new Blob([t],{type:n});oe(e,r)},oe=function(e,n){var t=window.URL.createObjectURL(n),r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(t)},ae=function(e,n){var t=document.createElementNS("http://www.w3.org/2000/svg","g");t.setAttribute("transform","translate(".concat(e,", ").concat(n,")scale(2)"));var r=document.createElementNS("http://www.w3.org/2000/svg","image");r.setAttribute("width","40"),r.setAttribute("height","40"),r.setAttribute("x","-50"),r.setAttribute("y","-20");var s=document.createElementNS("http://www.w3.org/2000/svg","text");s.setAttribute("font-family","Arial, sans-serif"),s.setAttribute("font-size","16"),s.appendChild(document.createTextNode("Rail Map Painter"));var i=document.createElementNS("http://www.w3.org/2000/svg","text");return i.setAttribute("font-family","Arial, sans-serif"),i.setAttribute("font-size","10"),i.setAttribute("y","10"),i.appendChild(document.createTextNode("https://railmapgen.github.io/rmp/")),t.appendChild(r),t.appendChild(s),t.appendChild(i),t},ce=t(176),le=t(76),ue=t(4087),de=t(6718),he=t(7732);var xe=t.p+"static/media/github-mark.6fa18895f6e6c7772cab7049f7e05f59.svg";var fe=t.p+"static/media/slack-mark.3474c14d58fbbab9cfa2208b01a4ac3a.svg",pe=function(e){var n=e.isOpen,t=e.onClose,r=(0,j.$G)().t,s=v.ZP.getAppVersion();return(0,D.jsxs)(J.u_,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[(0,D.jsx)(T.Z,{}),(0,D.jsxs)(I.h,{children:[(0,D.jsx)(P.x,{children:r("header.about.title")}),(0,D.jsx)(B.o,{}),(0,D.jsxs)(G.f,{paddingBottom:10,children:[(0,D.jsxs)(ce.k,{direction:"row",children:[(0,D.jsx)(le.E,{boxSize:"128px",src:"/rmp/logo192.png"}),(0,D.jsxs)(ce.k,{direction:"column",width:"100%",alignItems:"center",justifyContent:"center",children:[(0,D.jsx)(X.x,{fontSize:"xl",as:"b",children:r("header.about.rmp")}),(0,D.jsx)(X.x,{children:s}),(0,D.jsx)(X.x,{}),(0,D.jsx)(X.x,{fontSize:"sm",children:r("header.about.railmapgen")})]})]}),(0,D.jsx)(ue.xu,{margin:5,children:(0,D.jsx)(X.x,{fontSize:"xl",children:r("header.about.desc")})}),(0,D.jsx)(c.X,{as:"h5",size:"sm",mt:3,mb:2,children:r("header.about.contributors")}),(0,D.jsx)(c.X,{as:"h6",size:"xs",my:2,children:r("header.about.coreContributors")}),(0,D.jsx)(L.g,{children:(0,D.jsxs)(de.Vp,{size:"lg",w:"85%",onClick:function(){return window.open("https://github.com/thekingofcity","_blank")},cursor:"pointer",children:[(0,D.jsx)(he.q,{src:"https://github.com/thekingofcity.png",size:"lg",my:2,ml:-1,mr:2}),(0,D.jsxs)(de.Sn,{display:"block",width:"100%",children:[(0,D.jsx)(X.x,{fontSize:"lg",fontWeight:"bold",mb:1,children:"thekingofcity"}),(0,D.jsx)(X.x,{fontSize:"sm",children:r("header.about.content1")}),(0,D.jsx)(X.x,{fontSize:"sm",align:"right",children:r("header.about.content2")})]})]})}),(0,D.jsx)(c.X,{as:"h5",size:"sm",mt:3,mb:2,children:r("header.about.contactUs")}),(0,D.jsxs)(L.g,{children:[(0,D.jsxs)(de.Vp,{size:"lg",w:"85%",onClick:function(){return window.open("https://github.com/railmapgen/rmp/issues","_blank")},cursor:"pointer",children:[(0,D.jsx)(he.q,{src:xe,size:"lg",my:2,ml:-1,mr:2}),(0,D.jsxs)(de.Sn,{display:"block",width:"100%",children:[(0,D.jsx)(X.x,{fontSize:"lg",fontWeight:"bold",mb:1,children:r("header.about.github")}),(0,D.jsx)(X.x,{fontSize:"sm",children:r("header.about.githubContent")})]})]}),(0,D.jsxs)(de.Vp,{size:"lg",w:"85%",onClick:function(){return window.open("https://join.slack.com/t/railmapgenerator/shared_invite/zt-1odhhta3n-DdZF~fnVwo_q0S0RJmgV8A","_blank")},cursor:"pointer",children:[(0,D.jsx)(he.q,{src:fe,size:"lg",my:2,ml:-1,mr:2}),(0,D.jsxs)(de.Sn,{display:"block",width:"100%",children:[(0,D.jsx)(X.x,{fontSize:"lg",fontWeight:"bold",mb:1,children:r("header.about.slack")}),(0,D.jsx)(X.x,{fontSize:"sm",children:r("header.about.slackContent")}),(0,D.jsx)(X.x,{fontSize:"sm",as:"i",children:"#rmg, #rmp, #palette-and-templates, #random"})]})]})]})]})]})]})},je=t(6690),me=t(3627),ge=t(954),ve=t(8574),be=function(){var e=o.useState(!1),n=(0,i.Z)(e,2),t=n[0],r=n[1],s=(0,y.Qy)((function(e){return e.param})).svgViewBoxZoom,a=(0,y.u5)(),c=[{type:"slider",label:"",value:400-s,min:10,max:390,step:1,onChange:function(e){return a((0,z.u4)(400-e))},leftIcon:(0,D.jsx)(p._a6,{}),rightIcon:(0,D.jsx)(p.Ers,{}),minW:160}];return(0,D.jsxs)(je.J,{isOpen:t,onOpen:function(){return r(!0)},onClose:function(){return r(!1)},children:[(0,D.jsx)(me.x,{children:(0,D.jsx)(h.h,{"aria-label":"zoom",variant:"ghost",size:"sm",icon:(0,D.jsx)(p._a6,{}),onClick:function(){return r(!t)}})}),(0,D.jsx)(ge.y,{children:(0,D.jsx)(ve.b,{children:(0,D.jsx)(m.M5,{fields:c,noLabel:!0})})})]})},ye=t(1279),we=t(9549),Ce=t(4081),Se=t(5105),ke=t(1122),Ze=t(4566),Oe=t(8168),ze=function(e){var n=e.isOpen,t=e.onClose,r=(0,y.u5)(),s=(0,j.$G)().t,a=o.useRef(window.graph),c=o.useState(0),l=(0,i.Z)(c,2),u=l[0],d=l[1],h=o.useState(0),x=(0,i.Z)(h,2),f=x[0],p=x[1],g=[{type:"input",label:s("header.settings.procedures.translate.x"),value:u.toString(),variant:"number",onChange:function(e){return d(Number(e))},minW:"full"},{type:"input",label:s("header.settings.procedures.translate.y"),value:f.toString(),variant:"number",onChange:function(e){return p(Number(e))},minW:"full"}];return(0,D.jsxs)(J.u_,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[(0,D.jsx)(T.Z,{}),(0,D.jsxs)(I.h,{children:[(0,D.jsx)(P.x,{children:s("header.settings.procedures.translate.title")}),(0,D.jsx)(B.o,{}),(0,D.jsxs)(G.f,{children:[s("header.settings.procedures.translate.content"),(0,D.jsx)(m.M5,{fields:g})]}),(0,D.jsxs)(F.m,{children:[(0,D.jsx)(V.z,{colorScheme:"blue",variant:"outline",mr:"1",children:s("cancel")}),(0,D.jsx)(V.z,{colorScheme:"red",onClick:function(){a.current.forEachNode((function(e,n){a.current.updateNodeAttribute(e,"x",(function(e){return(null!==e&&void 0!==e?e:0)+u})),a.current.updateNodeAttribute(e,"y",(function(e){return(null!==e&&void 0!==e?e:0)+f}))})),r((0,A.ML)()),r((0,A.lH)()),r((0,z.DR)(a.current.export())),t()},children:s("apply")})]})]})]})},Ae=function(e){var n=e.isOpen,t=e.onClose,r=(0,y.u5)(),s=(0,j.$G)().t,a=o.useRef(window.graph),c=o.useState(1),l=(0,i.Z)(c,2),u=l[0],d=l[1],h=[{type:"input",label:s("header.settings.procedures.scale.factor"),value:u.toString(),variant:"number",onChange:function(e){return d(Number(e))},minW:"full"}];return(0,D.jsxs)(J.u_,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[(0,D.jsx)(T.Z,{}),(0,D.jsxs)(I.h,{children:[(0,D.jsx)(P.x,{children:s("header.settings.procedures.scale.title")}),(0,D.jsx)(B.o,{}),(0,D.jsxs)(G.f,{children:[s("header.settings.procedures.scale.content"),(0,D.jsx)(m.M5,{fields:h})]}),(0,D.jsxs)(F.m,{children:[(0,D.jsx)(V.z,{colorScheme:"blue",variant:"outline",mr:"1",children:s("cancel")}),(0,D.jsx)(V.z,{colorScheme:"red",onClick:function(){a.current.forEachNode((function(e,n){a.current.updateNodeAttribute(e,"x",(function(e){return(null!==e&&void 0!==e?e:0)*u})),a.current.updateNodeAttribute(e,"y",(function(e){return(null!==e&&void 0!==e?e:0)*u}))})),r((0,A.ML)()),r((0,A.lH)()),r((0,z.DR)(a.current.export())),t()},children:s("apply")})]})]})]})},Ee=function(e){var n=e.isOpen,t=e.onClose,r=(0,y.u5)(),s=(0,j.$G)().t,a=o.useRef(window.graph),c=Object.fromEntries(Object.entries(R.Z).map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return[t,s(r.metadata.displayName).toString()]}))),l=o.useState(Object.keys(R.Z).at(0)),u=(0,i.Z)(l,2),d=u[0],h=u[1],x=o.useState(Object.keys(R.Z).at(1)),f=(0,i.Z)(x,2),p=f[0],g=f[1],v=[{type:"select",label:s("header.settings.procedures.changeType.changeFrom"),value:d,options:c,disabledOptions:[p],onChange:function(e){return h(e)},minW:"full"},{type:"select",label:s("header.settings.procedures.changeType.changeTo"),value:p,options:c,disabledOptions:[d],onChange:function(e){return g(e)},minW:"full"}];return(0,D.jsxs)(J.u_,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[(0,D.jsx)(T.Z,{}),(0,D.jsxs)(I.h,{children:[(0,D.jsxs)(P.x,{children:[(0,D.jsx)(X.x,{as:"b",fontSize:"xl",children:s("header.settings.procedures.changeType.title")}),(0,D.jsx)(Ce.u,{label:s("header.settings.pro"),children:(0,D.jsx)(Z.C,{ml:"1",color:"gray.50",background:"radial-gradient(circle, #3f5efb, #fc466b)",children:"PRO"})})]}),(0,D.jsx)(B.o,{}),(0,D.jsxs)(G.f,{children:[(0,D.jsx)(m.M5,{fields:v}),(0,D.jsx)(X.x,{fontSize:"sm",mt:"3",lineHeight:"100%",color:"red.500",children:s("header.settings.procedures.changeType.info")})]}),(0,D.jsxs)(F.m,{children:[(0,D.jsx)(V.z,{colorScheme:"blue",variant:"outline",mr:"1",children:s("cancel")}),(0,D.jsx)(V.z,{colorScheme:"red",onClick:function(){(0,ke.x8)(a.current,d,p),r((0,A.ML)()),r((0,z.DR)(a.current.export()))},children:s("apply")})]})]})]})},Ne=function(e){var n=e.isOpen,t=e.onClose,r=(0,y.u5)(),s=(0,y.Qy)((function(e){return e.runtime})).theme,a=(0,j.$G)().t,c=o.useRef(window.graph),l=o.useState(s),u=(0,i.Z)(l,2),d=u[0],h=u[1],x=o.useState(!1),f=(0,i.Z)(x,2),p=f[0],m=f[1];return(0,D.jsxs)(J.u_,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[(0,D.jsx)(T.Z,{}),(0,D.jsxs)(I.h,{children:[(0,D.jsx)(P.x,{children:a("header.settings.procedures.removeLines.title")}),(0,D.jsx)(B.o,{}),(0,D.jsxs)(G.f,{children:[a("header.settings.procedures.removeLines.content"),(0,D.jsx)(Oe.Z,{theme:d,onClick:function(){return m(!0)}}),(0,D.jsx)(Ze.Z,{isOpen:p,defaultTheme:d,onClose:function(){return m(!1)},onUpdate:function(e){return h(e)}})]}),(0,D.jsxs)(F.m,{children:[(0,D.jsx)(V.z,{colorScheme:"blue",variant:"outline",mr:"1",children:a("cancel")}),(0,D.jsx)(V.z,{colorScheme:"red",onClick:function(){c.current.filterEdges((function(e,n,t,r,s,i,o){return n.style===E.R.SingleColor&&JSON.stringify(n[E.R.SingleColor].color)===JSON.stringify(d)})).forEach((function(e){return c.current.dropEdge(e)})),r((0,A.lH)()),r((0,z.DR)(c.current.export())),t()},children:a("remove")})]})]})]})},Me={width:"100%",justifyContent:"space-between"},Re=function(e){var n=e.isOpen,t=e.onClose,r=(0,y.Qy)((function(e){return e.runtime})).keepLastPath,s=(0,y.u5)(),c=(0,j.$G)().t,l=(0,a.ff)("primary.500","primary.300"),u=o.useState(!1),d=(0,i.Z)(u,2),h=d[0],x=d[1],f=o.useState(!1),m=(0,i.Z)(f,2),g=m[0],b=m[1],w=o.useState(!1),C=(0,i.Z)(w,2),S=C[0],k=C[1],O=o.useState(!1),z=(0,i.Z)(O,2),E=z[0],N=z[1],M=v.ZP.isAllowAnalytics(),R=(0,y.Qy)((function(e){return e.app})).telemetry.app;return(0,D.jsxs)(J.u_,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[(0,D.jsx)(T.Z,{}),(0,D.jsxs)(I.h,{children:[(0,D.jsx)(P.x,{children:c("header.settings.title")}),(0,D.jsx)(B.o,{}),(0,D.jsx)(G.f,{children:(0,D.jsxs)(L.g,{divider:(0,D.jsx)(ye.c,{borderColor:"gray.200"}),children:[(0,D.jsxs)(ue.xu,{width:"100%",mb:"3",children:[(0,D.jsx)(X.x,{as:"b",fontSize:"xl",children:c("header.settings.preference.title")}),(0,D.jsx)(ue.xu,{mt:"3",children:(0,D.jsxs)(ue.xu,{display:"flex",mb:"1",children:[(0,D.jsx)(X.x,{flex:"1",children:c("header.settings.preference.keepLastPath")}),(0,D.jsx)(we.r,{isChecked:r,onChange:function(e){var n=e.target.checked;return s((0,A.Mm)(n))}})]})})]}),(0,D.jsxs)(ue.xu,{width:"100%",mb:"3",children:[(0,D.jsx)(X.x,{as:"b",fontSize:"xl",children:c("header.settings.procedures.title")}),(0,D.jsxs)(ue.xu,{mt:"3",children:[(0,D.jsx)(V.z,{sx:Me,rightIcon:(0,D.jsx)(p.Q7r,{}),onClick:function(){return x(!0)},children:c("header.settings.procedures.translate.title")}),(0,D.jsx)(ze,{isOpen:h,onClose:function(){return x(!1)}}),(0,D.jsx)(V.z,{sx:Me,rightIcon:(0,D.jsx)(p.Q7r,{}),onClick:function(){return b(!0)},children:c("header.settings.procedures.scale.title")}),(0,D.jsx)(Ae,{isOpen:g,onClose:function(){return b(!1)}}),(0,D.jsx)(V.z,{sx:Me,rightIcon:(0,D.jsx)(p.Q7r,{}),onClick:function(){return k(!0)},children:(0,D.jsxs)(ue.xu,{children:[c("header.settings.procedures.changeType.title"),(0,D.jsx)(Ce.u,{label:c("header.settings.pro"),children:(0,D.jsx)(Z.C,{ml:"1",color:"gray.50",background:"radial-gradient(circle, #3f5efb, #fc466b)",children:"PRO"})})]})}),(0,D.jsx)(Ee,{isOpen:S,onClose:function(){return k(!1)}}),(0,D.jsx)(V.z,{sx:Me,rightIcon:(0,D.jsx)(p.Q7r,{}),onClick:function(){return N(!0)},children:c("header.settings.procedures.removeLines.title")}),(0,D.jsx)(Ne,{isOpen:E,onClose:function(){return N(!1)}})]})]}),(0,D.jsxs)(ue.xu,{width:"100%",mb:"3",children:[(0,D.jsx)(X.x,{as:"b",fontSize:"xl",children:c("header.settings.telemetry.title")}),(0,D.jsxs)(ue.xu,{mt:"3",children:[(0,D.jsxs)(ue.xu,{display:"flex",mb:"1",children:[(0,D.jsx)(X.x,{flex:"1",children:c("header.settings.telemetry.essential")}),(0,D.jsx)(we.r,{isChecked:M,isDisabled:!0})]}),(0,D.jsx)(X.x,{fontSize:"sm",lineHeight:"100%",color:"gray.600",children:c("header.settings.telemetry.essentialInfo")}),(0,D.jsxs)(K.r,{color:l,fontSize:"sm",lineHeight:"100%",href:"https://support.google.com/analytics/answer/11593727",isExternal:!0,children:[c("header.settings.telemetry.essentialLink")," ",(0,D.jsx)(Y.J,{as:p.jhj})]}),(0,D.jsxs)(ue.xu,{display:"flex",mb:"1",children:[(0,D.jsx)(X.x,{flex:"1",children:c("header.settings.telemetry.additional")}),(0,D.jsx)(we.r,{isChecked:R,onChange:function(e){var n,t=e.target.checked;return n=t,s((0,Se.uJ)(n))}})]}),(0,D.jsx)(X.x,{fontSize:"sm",lineHeight:"100%",color:"gray.600",children:c("header.settings.telemetry.additionalInfo")})]})]})]})})]})]})};function _e(){var e=(0,j.$G)().t,n=(0,y.Qy)((function(e){return e.app})).telemetry.app,t=(0,a.If)().toggleColorMode,w=o.useState(!1),C=(0,i.Z)(w,2),S=C[0],k=C[1],Z=o.useState(!1),O=(0,i.Z)(Z,2),z=O[0],A=O[1],E=(0,m.$H)(v.ZP.getEnv),N=(0,m.$H)(v.ZP.getAppVersion);o.useEffect((function(){n&&E!==v.Sy.DEV&&v.ZP.event(b.zW.APP_LOAD,{isStandaloneWindow:v.ZP.isStandaloneWindow()})}),[E]);var M=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.ZP.setLanguage(n),v.ZP.getI18nInstance().changeLanguage(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,D.jsxs)(m.Td,{children:[(0,D.jsx)(c.X,{as:"h4",size:"md",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:e("header.about.rmp")}),(0,D.jsx)(m.xt,{environment:E,version:N,popoverHeader:E===v.Sy.PRD?void 0:(0,D.jsxs)(j.cC,{i18nKey:"header.popoverHeader",environment:E,children:["You're on ",{environment:E}," environment!"]}),popoverBody:E===v.Sy.PRD?void 0:(0,D.jsx)(j.cC,{i18nKey:"header.popoverBody",children:"This is a testing environment where we test the latest beta RMP."})}),(0,D.jsxs)(l.U,{ml:"auto",children:[(0,D.jsx)(be,{}),(0,D.jsx)($,{}),(0,D.jsx)(se,{}),(0,D.jsxs)(u.v,{children:[(0,D.jsx)(d.j,{as:h.h,icon:(0,D.jsx)(p.mp2,{}),variant:"ghost",size:"sm"}),(0,D.jsx)(x.q,{children:g.E7.map((function(e){return(0,D.jsx)(f.s,{onClick:function(){return M(e)},children:g.tK[e][e]},e)}))})]}),(0,D.jsx)(h.h,{size:"sm",variant:"ghost","aria-label":"Dark Mode",icon:(0,D.jsx)(p.Dq,{}),onClick:t}),(0,D.jsx)(h.h,{size:"sm",variant:"ghost","aria-label":"Settings",icon:(0,D.jsx)(p.b9P,{}),onClick:function(){return k(!0)}}),(0,D.jsx)(h.h,{size:"sm",variant:"ghost","aria-label":"Help",icon:(0,D.jsx)(p.r$n,{}),onClick:function(){return A(!0)}})]}),(0,D.jsx)(Re,{isOpen:S,onClose:function(){return k(!1)}}),(0,D.jsx)(pe,{isOpen:z,onClose:function(){return A(!1)}})]})}var Je=t(7498),Te=t(8618),Ie=t(8843);function Pe(){var e=(0,y.u5)(),n=(0,y.Qy)((function(e){return e.runtime.globalAlerts}));return(0,D.jsx)(D.Fragment,{children:Object.entries(n).map((function(n){var t=(0,i.Z)(n,2),r=t[0],s=t[1],o=s.message,a=s.url,c=s.linkedApp;return(0,D.jsxs)(Je.b,{status:r,variant:"solid",size:"xs",pl:3,pr:1,py:0,children:[(0,D.jsx)(Te.z,{}),c?(0,D.jsx)(K.r,{onClick:function(){return function(e){v.ZP.isStandaloneWindow()?window.open("/".concat(e),"_blank"):v.ZP.openApp(e)}(c)},children:o}):a?(0,D.jsx)(K.r,{href:a,target:"_blank",children:o}):o,(0,D.jsx)(Ie.P,{ml:"auto",onClick:function(){return e((0,A.sy)(r))}})]},r)}))})}function Be(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(_e,{}),(0,D.jsx)(Pe,{})]})}},1122:function(e,n,t){"use strict";t.d(n,{Bd:function(){return d},Kz:function(){return c},Vz:function(){return u},x8:function(){return l}});var r=t(4942),s=t(1413),i=t(8817),o=t(1580),a=t(6425),c=function(e,n,t){var i=e.getNodeAttribute(n,"type"),a=e.getNodeAttribute(n,i).names;e.removeNodeAttribute(n,i);var c=(0,s.Z)((0,s.Z)({},o.Z[t].defaultAttrs),{},{names:a});e.mergeNodeAttributes(n,(0,r.Z)({type:t},t,c))},l=function(e,n,t){return e.filterNodes((function(e,t){return e.startsWith("stn")&&t.type===n})).forEach((function(n){c(e,n,t)}))},u=function(e,n,t){var s=e.getEdgeAttribute(n,"type");e.removeEdgeAttribute(n,s);var i=JSON.parse(JSON.stringify(a.V[t].defaultAttrs));e.mergeEdgeAttributes(n,(0,r.Z)({type:t},t,i))},d=function(e,n,t,s){var o=e.getEdgeAttribute(n,"style");e.removeEdgeAttribute(n,o);var c=JSON.parse(JSON.stringify(a.b[t].defaultAttrs));t===i.R.SingleColor&&s&&(c.color=s),e.mergeEdgeAttributes(n,(0,r.Z)({style:t},t,c))}},3300:function(e,n,t){"use strict";t.d(n,{Z9:function(){return s},fx:function(){return i},yK:function(){return r}});var r=function(e){var n=e.currentTarget.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}},s=function(e,n){return Math.round(e/n)*n},i=function(e){var n=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE],t=n[0],r=n[1],s=n[2],i=n[3];return e.forEachNode((function(e,n){t=Math.min(n.x,t),r=Math.min(n.y,r),s=Math.max(n.x,s),i=Math.max(n.y,i)})),{xMin:t-=150,yMin:r-=150,xMax:s+=150,yMax:i+=150}}},9681:function(e,n,t){var r={"./beijing.json":[4781,2639],"./guangzhou.json":[7845,5202],"./santiago.json":[8470,6398],"./shanghai.json":[7414,8233]};function s(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],s=n[0];return t.e(n[1]).then((function(){return t.t(s,19)}))}s.keys=function(){return Object.keys(r)},s.id=9681,e.exports=s}}]);
//# sourceMappingURL=WindowHeader.1626b9b9.chunk.js.map