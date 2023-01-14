import{z as v,l as t,j as p,ab as B}from"./vendor.3573db1f.js";import{aq as D,u as y,S as k,ar as S,D as g,F as W,as as P}from"./index.b17050cb.js";import{S as G,a as Y,c as H,g as X,b as Z}from"./share.d4df8b77.js";import{g as C,S as J,r as V,l as q}from"./mtr.5d0a9d64.js";import{w as K}from"./app-router.e32ca0ad.js";const j=v.exports.memo(function(e){return t("rect",{fill:"var(--rmg-theme-colour)",height:20,style:{width:"var(--rmg-svg-width)",["--strip-percentage"]:e.stripPc,transform:"translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"}})}),I=D.Destination;function Q(){const{canvasScale:r}=y(o=>o.app),{svgWidth:e,svg_height:a,theme:n}=y(o=>o.param),s=e[I];return p(G,{type:I,svgWidth:s,svgHeight:a,canvasScale:r,theme:n,children:[t(tt,{}),t(j,{stripPc:90}),t(et,{})]})}const tt=v.exports.memo(function(){return t("defs",{children:t("path",{id:"arrow",d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-black,#000)"})})}),et=()=>{const r=y(c=>c.helper.routes),e=y(c=>c.param.svgWidth),a=y(c=>c.param.direction),n=y(c=>c.param.customiseMTRDest),s=y(c=>c.param.platform_num),o=y(c=>c.param.line_name),i=y(c=>c.param.current_stn_idx),l=y(c=>c.param.stn_list);let m;if(n.terminal!==!1)m=n.terminal;else{const c=[...new Set(r.filter(x=>x.includes(i)).map(x=>x.filter(L=>!["linestart","lineend"].includes(L)).slice(a===k.left?0:-1)[0]).filter(x=>x!==i))];m=[c.map(x=>l[x].name[0]).join("/"),c.map(x=>l[x].name[1]).join("/").replace("\\"," ")]}const f=v.exports.useRef(null),[u,h]=v.exports.useState({width:0});v.exports.useEffect(()=>{f.current&&h(f.current.getBBox())},[m.toString(),n.isLegacy]);const d=160+150+u.width+45+50,M=(e[D.Destination]-(a===k.left?1:-1)*d)/2,N=M+(a===k.left?1:-1)*(160+50+75),w=N+(a===k.left?1:-1)*(75+45);return p("g",{id:"dest_name",style:{transform:"translateY(calc(var(--rmg-svg-height) / 2 - 20px))"},children:[t("use",{xlinkHref:"#arrow",transform:`translate(${M},0)rotate(${a===k.left?0:180})`}),t(nt,{num:s,transform:`translate(${N},0)`}),p("g",{ref:f,textAnchor:a===k.left?"start":"end",transform:`translate(${w},-25)`,fill:"var(--rmg-black)",children:[t("text",{className:"rmg-name__zh",fontSize:90,children:(n.isLegacy?o[0]:"")+"\u5F80"+m[0]}),t("text",{className:"rmg-name__en",fontSize:45,dy:80,children:(n.isLegacy?o[1]+" ":"")+"to "+m[1]})]})]})},nt=r=>{const{num:e,...a}=r;return t("g",{id:"platform",...a,children:v.exports.useMemo(()=>p(B,{children:[t("circle",{cx:0,cy:0,r:75,fill:"var(--rmg-theme-colour)"}),t("text",{className:"rmg-name__zh",dy:0,textAnchor:"middle",fontSize:135,fill:"#fff",children:e})]}),[e])})},at=r=>{switch(r){case S.UP:return 180;case S.DOWN:return 0;case S.LEFT:return 90;case S.RIGHT:return-90}};function rt(r){const{interchangeInfo:e,isPassed:a,position:n,repel:s,repelOffset:o}=r,i=e[4].split("\\").length,l=e[5].split("\\").length,m=n===S.LEFT||s===g.left?"end":n===S.RIGHT||s===g.right?"start":"middle",f={path:{rotate:at(n)},g:{x:(n===S.LEFT?-24:n===S.RIGHT?24:0)+(s===g.left?-1:s===g.right?1:0)*(o!=null?o:3),y:n===S.UP?-37-10*(i-1)-7*(l-1):n===S.DOWN?31:6-(20+10*(i-1)+7*(l-1)-1)/2}};return p(B,{children:[t("path",{d:"M0,0v17",strokeLinecap:"round",stroke:a?"var(--rmg-grey)":e[2],strokeWidth:8,transform:`rotate(${f.path.rotate})`}),p("g",{textAnchor:m,transform:`translate(${f.g.x},${f.g.y})`,fill:a?"var(--rmg-grey)":"var(--rmg-black)",children:[e[4].split("\\").map((u,h)=>t("text",{dy:10*h,className:"rmg-name__zh",fontSize:10,children:u},h)),e[5].split("\\").map((u,h)=>t("text",{dy:i*10-1+7*h,className:"rmg-name__en",fontSize:7,children:u},i+h))]})]})}const b=v.exports.memo(rt,(r,e)=>r.interchangeInfo.toString()===e.interchangeInfo.toString()&&r.isPassed===e.isPassed&&r.position===e.position&&r.repel===e.repel);function U(r){const{length:e,isPassed:a,isReversed:n}=r;return t("path",{d:`M-8,0 v${e} a8,8 0 0,0 16,0 v-${e} a8,8 0 0,0 -16,0Z`,className:"rmg-stn__mtr",stroke:a?"var(--rmg-grey)":"var(--rmg-black)",transform:`scale(1,${n?-1:1})`})}function st(r){const{interchangeInfoList:e,direction:a,isPassed:n,isReversed:s,repel:o}=r,i=e.length<=1?0:18*e.length;return p("g",{children:[e.length===1&&t(b,{interchangeInfo:e[0],isPassed:n,position:s?S.UP:S.DOWN,repel:o}),e.length>1&&e.map((l,m)=>t("g",{transform:`translate(0,${s?-18*(m+1):18*(m+1)})`,children:t(b,{interchangeInfo:l,isPassed:n,position:a===g.right?S.RIGHT:S.LEFT})},m)),t(U,{length:i,isPassed:n,isReversed:s})]})}function it(r){var u,h,d,M,N;const{interchangeInfoList:e,direction:a,isPassed:n,isReversed:s,isTerminal:o,stationName:i}=r,l=(d=(h=(u=i==null?void 0:i[1])==null?void 0:u.split("\\"))==null?void 0:h.length)!=null?d:1,m=18*(e.length-1),f={name:{x:o?0:e.length===1?a===g.left?-13:13:a===g.left?13:-13,y:o?s?19:-28:-4+(s?-9:9)*(e.length-1)-5*(l-1)}};return p("g",{children:[e.map((w,c,x)=>t("g",{transform:`translate(0,${s?-18*c:18*c})`,children:t(b,{interchangeInfo:w,isPassed:n,position:x.length===1?s?S.UP:S.DOWN:a===g.right?S.RIGHT:S.LEFT,repel:o?a:void 0,repelOffset:o&&x.length===1?-4:0})},c)),t(U,{length:m,isPassed:n,isReversed:s}),p("g",{textAnchor:f.name.x===0?"middle":f.name.x>0?"start":"end",fill:n?"var(--rmg-grey)":"var(--rmg-black)",transform:`translate(${f.name.x},${f.name.y})`,children:[t("text",{className:"rmg-name__zh",fontSize:14,children:i==null?void 0:i[0]}),(N=(M=i==null?void 0:i[1])==null?void 0:M.split("\\"))==null?void 0:N.map((w,c)=>t("text",{className:"rmg-name__en",fontSize:9,dy:12+10*c,children:w},c))]})]})}const ot=async()=>{let r=3;for(;r--;){const a=(await document.fonts.ready).values();for(;;){const n=a.next();if(n.done)break;if(n.value.family==="GenYoMin TW")return}console.log("GenYoMin is NOT ready. Retry attempts remaining: "+r+" ..."),await K(500)}throw new Error("Failed to load GenYoMin after 3 attempts")},ct=v.exports.memo(function(e){const{stnName:a,onUpdate:n,align:s}=e,o=v.exports.useRef(null),i=()=>{o.current&&n&&n(o.current.getBBox())};v.exports.useEffect(()=>{i(),ot().then().catch(console.log).finally(i)},[a.toString(),s]);const l=f=>{switch(f){case g.left:return"start";case g.right:return"end";default:return"middle"}},m=f=>17+11*f;return p("g",{ref:o,textAnchor:l(s),children:[t("text",{className:"rmg-name__zh rmg-name__mtr--station",children:a[0]}),a[1].split("\\").map((f,u)=>t("text",{className:"rmg-name__en rmg-name__mtr--station",dy:m(u),children:f},u))]})},(r,e)=>r.stnName.toString()===e.stnName.toString()&&r.align===e.align),$=-10.8125,lt=-8,ht=13.21875,gt=17,T=-$+gt+ht+lt,F=14;function mt(r){const{stationName:e,stationState:a,lower:n,align:s,facility:o,...i}=r,[l,m]=v.exports.useState({x:0,width:0}),f=d=>{switch(d){case P.PASSED:return"var(--rmg-grey)";case P.CURRENT:return"#fff";case P.FUTURE:return"var(--rmg-black)"}},u=e[1].split("\\").length,h={g:{x:s?s===g.right?-3:3:0,y:(n?F-$:-F-$-T-11*(u-1))+(s?n?10:-10:0)},rect:{x:l.x-3+(o===W.none?0:s?s===g.right?-3-T:0:(T+5)/2-3-T),y:$-1,width:l.width+6+(o===W.none?0:T+3),height:T+2+11*(u-1)},use:{x:s?s===g.right?-(T+2)/2-l.width-3:(T+2)/2-2:-(l.width+3)/2,y:$-1+5.5*(u-1)},StationName:{x:o===W.none?0:s?s===g.right?0:T+3:(T+5)/2,y:0}};return t("g",{...i,children:p("g",{fill:f(a),transform:`translate(${h.g.x},${h.g.y})`,children:[a===P.CURRENT&&t("rect",{x:h.rect.x,y:h.rect.y,width:h.rect.width,height:h.rect.height,fill:"var(--rmg-black)"}),o!==W.none&&t("use",{xlinkHref:`#${o}`,fill:a===P.PASSED?"var(--rmg-grey)":"var(--rmg-black)",x:h.use.x,y:h.use.y}),t("g",{transform:`translate(${h.StationName.x},${h.StationName.y})`,children:t(ct,{stnName:e,onUpdate:m,align:s})})]})})}function dt(r){var w,c,x,L,E,A,O;const{stationId:e,stationState:a,isReversed:n}=r,{name:s,parents:o,children:i,transfer:{info:l,tick_direc:m,osi_names:f,paid_area:u},facility:h}=y(_=>_.param.stn_list[e]),d=(w=l[0])!=null&&w.length?o.includes("linestart")?g.left:i.includes("lineend")?g.right:void 0:void 0,M=Boolean(((c=l[1])==null?void 0:c.length)&&!d),N={link:{scaleX:d===g.left?-1:1,scaleY:n?-1:1},osi:{x:d?d===g.left?-41:41:0,y:d?0:n?-26:26}};return p("g",{"data-testid":"station-icon-wrapper",children:[((x=l[1])==null?void 0:x.length)&&t("path",{d:d&&((L=l[0])==null?void 0:L.length)?"M0,0H41":"M0,0V26",strokeWidth:2.69,strokeDasharray:u?0:2.5,stroke:a===P.PASSED?"var(--rmg-grey)":"var(--rmg-black)",transform:`scale(${N.link.scaleX},${N.link.scaleY})`}),t(st,{interchangeInfoList:l[0],direction:m===k.right?g.right:g.left,isPassed:a===P.PASSED,isReversed:!d&&((E=l[1])==null?void 0:E.length)?!n:n,repel:M?m===k.right?g.right:g.left:void 0}),((A=l[1])==null?void 0:A.length)&&t("g",{transform:`translate(${N.osi.x},${N.osi.y})`,children:t(it,{interchangeInfoList:l[1],direction:d||(m===k.right?g.right:g.left),stationName:f[0],isPassed:a===P.PASSED,isReversed:d?!n:n,isTerminal:Boolean(d)})}),t(mt,{stationName:s,stationState:a,facility:h,lower:n,align:((O=l[0])==null?void 0:O.length)&&M?m===k.left?g.left:g.right:void 0})]})}const ft=(r,e,{isStagger:a,isFlip:n})=>{if(!a)return n;let s;if(e[0].includes(r))s=e[0].indexOf(r)%2;else{const o=e.filter(i=>i.includes(r))[0];s=(e[0].indexOf(o[0])+o.indexOf(r)+1)%2}return s===0?n:!n},pt=()=>{const{branches:r,routes:e,depsStr:a}=y(_=>_.helper),{svgWidth:n,svg_height:s,y_pc:o,padding:i,branchSpacingPct:l,direction:m,namePosMTR:f,current_stn_idx:u,stn_list:h}=y(_=>_.param),d=Y(h,q,V),M=v.exports.useMemo(()=>H("linestart","lineend",d),[JSON.stringify(d)]),N=v.exports.useMemo(()=>H(M.nodes[1],M.nodes.slice(-2)[0],d),[JSON.stringify(d)]),w=v.exports.useMemo(()=>(console.log("computing x shares"),Object.keys(h).reduce((_,R)=>({..._,[R]:X(R,d,r)}),{})),[r.toString(),JSON.stringify(d)]),c=[n[D.RailMap]*i/100,n[D.RailMap]*(1-i/100)],x=Object.keys(w).reduce((_,R)=>({..._,[R]:c[0]+w[R]/N.len*(c[1]-c[0])}),{}),L=v.exports.useMemo(()=>Object.keys(h).reduce((_,R)=>({..._,[R]:C(R,r,h)*l*s/200}),{}),[a,l,s]),E=v.exports.useMemo(()=>Z(u,e,m),[u,m,e.toString()]),A=Object.keys(h).reduce((_,R)=>({..._,[R]:ft(R,r,f)}),{}),O=J.drawLine(r,E,h,c,x,L,l*s/200,M);return p("g",{id:"main",style:{["--y-percentage"]:o,transform:"translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"},children:[t(ut,{paths:O}),t(xt,{xs:x,ys:L,stnStates:E,namePoss:A})]})},ut=v.exports.memo(function(e){return p("g",{fill:"none",strokeWidth:9.68,children:[p("g",{stroke:"var(--rmg-grey)",children:[e.paths.pass.map((a,n)=>t("path",{d:a},n)),e.paths.sidingPass.map((a,n)=>{var s;return t("path",{d:a,strokeDasharray:((s=a.match(/a/g))==null?void 0:s.length)===4?"10 4":void 0},n)})]}),p("g",{stroke:"var(--rmg-theme-colour)",children:[e.paths.main.map((a,n)=>t("path",{d:a},n)),e.paths.sidingMain.map((a,n)=>{var s;return t("path",{d:a,strokeDasharray:((s=a.match(/a/g))==null?void 0:s.length)===4?"10 4":void 0},n)})]})]})},(r,e)=>JSON.stringify(r.paths)===JSON.stringify(e.paths)),xt=r=>{const{xs:e,ys:a,stnStates:n,namePoss:s}=r,o=y(i=>i.param.stn_list);return t("g",{id:"stn_icons",children:Object.keys(o).filter(i=>!["linestart","lineend"].includes(i)).map(i=>t("g",{style:{transform:`translate(${e[i]}px,${a[i]}px)`},children:t(dt,{stationId:i,stationState:n[i],isReversed:s[i]})},i))})},z=D.RailMap;function St(){const{canvasScale:r}=y(o=>o.app),{svgWidth:e,svg_height:a,theme:n}=y(o=>o.param),s=e[z];return p(G,{type:z,svgWidth:s,svgHeight:a,canvasScale:r,theme:n,children:[t(vt,{}),t(j,{stripPc:90}),t(pt,{})]})}const vt=v.exports.memo(function(){return p("defs",{children:[p("g",{id:"airport",transform:"scale(0.5970084519)",children:[t("rect",{x:-29.33899,height:58.67798,width:58.67798}),t("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]}),p("g",{id:"disney",transform:"scale(0.5970084519)",children:[t("rect",{x:-29.33899,width:58.67798,height:58.67798}),t("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})]}),t("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:t("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),p("g",{id:"hsr",transform:"scale(0.5970084519)",children:[t("rect",{x:-29.33899,width:58.67798,height:58.67798}),p("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[t("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),t("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),t("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),t("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),t("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),t("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),t("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),t("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),t("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),t("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),t("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),t("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]})]}),t("path",{id:"inttick",d:"M0,0v17",strokeLinecap:"round"})]})}),Rt={destination:t(Q,{}),railmap:t(St,{})};export{Rt as default};
