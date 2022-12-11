import{j as d,M as O,l as t,z as h,ab as R}from"./vendor.9890a542.js";import{as as k,u as f,j as Y,S,aq as w,P as $}from"./index.2953ed51.js";import{a as J,c as _,b as q,e as K,S as G}from"./share.3364ce7e.js";function Q(n){const{num:e,inStrip:s,...r}=n;return d("g",{textAnchor:"middle",fill:s?O.black:"var(--rmg-theme-fg)",...r,children:[t("rect",{height:40,width:40,rx:4,x:-20,fill:s?"#fff":"var(--rmg-theme-colour)"}),t("text",{className:"rmg-name__en",fontSize:20,dy:12,children:e}),t("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"\u5C4F\u853D\u95E8"}),t("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]})}const F=n=>{const e=(a=>{switch(a){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}})(n.variant),s=h.exports.useMemo(()=>{switch(n.variant){case"gz1":return t("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return t("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return t("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return t("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return t("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return t("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return t("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return t("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return t(R,{})}},[n.variant]),r=-20;return d("g",{transform:`translate(0,${n.variant==="gz4"?r:0})`,children:[t("rect",{id:"strip_gz",style:{["--height"]:`${e}px`}}),t("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:n.isShowLight&&s}),n.isShowPSD!==!1&&t(j,{...n})]})},j=h.exports.memo(function(e){const s=["gz28","gz2otis","gz6","gzgf"].includes(e.variant),r=(a=>{switch(a){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}})(e.variant);return t(Q,{num:e.isShowPSD,inStrip:s,style:{["--psd-dy"]:r,transform:"translate(var(--translate-x), var(--translate-y))",["--translate-x"]:"calc(var(--rmg-svg-width) / 2 + 80px)",["--translate-y"]:"calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"}})},(n,e)=>n.variant===e.variant&&n.isShowPSD===e.isShowPSD),ee=h.exports.memo(function(e){const{passed:s,large:r}=e;return t("path",{d:r?"M0,12.95 V-12.95 H-12.95 a12.95,12.95 0 0,0 0,25.9 h25.9 a12.95,12.95 0 0,0 0,-25.9 H0":"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0",fill:"#fff",strokeWidth:2,stroke:s?"#aaa":"var(--rmg-theme-colour)"})},(n,e)=>n.passed===e.passed&&n.large===e.large),A=15;function Z(n){const{lineNum:e,stnNum:s,passed:r,large:a,...o}=n,i=h.exports.useRef(null),c=h.exports.useRef(null),[m,l]=h.exports.useState({width:0}),[p,u]=h.exports.useState({width:0});h.exports.useEffect(()=>{i.current&&l(i.current.getBBox()),c.current&&u(c.current.getBBox())},[e,s]);const g=A/Math.max(A,m.width),y=e.length===2&&s.length===2?g:A/Math.max(A,p.width);return d("g",{...o,children:[t(ee,{passed:r,large:a}),d("g",{textAnchor:"middle",fontSize:13.5,transform:a?"scale(1.4)":"",fill:r?"#aaa":"#000",children:[t("g",{transform:`translate(-9.25,0)scale(${g})`,children:t("text",{ref:i,className:"rmg-name__zh",children:e})}),t("g",{transform:`translate(9.25,0)scale(${y})`,children:t("text",{ref:c,className:"rmg-name__zh",children:s})})]})]})}const te=h.exports.memo(function(e){const{lineName:s,commonPart:r}=e,a=h.exports.useRef(null),[o,i]=h.exports.useState({x:0,height:0,width:0});h.exports.useEffect(()=>{a.current&&i(a.current.getBBox())},[s.toString()]);const c=T/Math.max(T,o.width),m=(-o.x-o.width/2)*c,l=o.height*(1-c)*1.2/2;return t("g",{ref:a,transform:`translate(${m},${l})scale(${c})`,children:d("text",{className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end",children:[r,t("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:s[0].slice(r.length).trim()}),t("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:s[1].slice(r.length).trim()})]})})},(n,e)=>n.lineName.toString()===e.lineName.toString());function ne(n){return t("rect",{x:-22.5,height:24,width:45,rx:4.5,...n})}const T=42,V=h.exports.memo(function(e){const{lineName:s,foregroundColour:r,backgroundColour:a,passed:o}=e,[i,c]=re(s),m=h.exports.useRef(null),l=h.exports.useRef(null),[p,u]=h.exports.useState({width:0}),[g,y]=h.exports.useState({width:0});h.exports.useEffect(()=>{m.current&&u(m.current.getBBox()),l.current&&y(l.current.getBBox())},[s.toString()]);const x=T/Math.max(T,p.width),v=T/Math.max(T,g.width);return d("g",{textAnchor:"middle",fill:o?O.white:r,children:[t(ne,{fill:o?"#aaa":a}),i===2?t(te,{lineName:s,commonPart:c}):d(R,{children:[t("text",{ref:m,y:C(i,"zh",x),className:"rmg-name__zh",fontSize:12,transform:`scale(${x})`,children:i===1?d(R,{children:[t("tspan",{fontSize:16,dy:.7,className:"rmg-name__zh",children:c}),t("tspan",{dy:-.7,className:"rmg-name__zh",children:s[0].slice(c.length)})]}):s[0]}),t("text",{ref:l,y:C(i,"en",v),className:"rmg-name__en",fontSize:8,transform:`scale(${v})`,children:s[1]})]})]})},(n,e)=>n.lineName.toString()===e.lineName.toString()&&n.foregroundColour===e.foregroundColour&&n.backgroundColour===e.backgroundColour&&n.passed===e.passed),re=n=>{const e=n[0].match(/^(\d+)\D+$/);if(e)return[1,e[1]];const s=n.map(r=>r.match(/^([\w\d]+).+$/));return s[0]&&s[1]&&s[0][1]===s[1][1]?[2,s[0][1]]:[3,""]},C=(n,e,s)=>{switch(n){case 1:return(e==="zh"?7.3:19.5)*(1+1-s);case 2:return 0;case 3:return e==="zh"?8*(2-s):19.5+19.5*(19.5/8)*(1-s)-(s===1?0:5.5)}},se=h.exports.memo(function(e){const{stnName:s,onUpdate:r}=e,a=h.exports.useRef(null);return h.exports.useEffect(()=>{a.current&&r&&r(a.current.getBBox())},[s.toString()]),d("g",{ref:a,children:[t("text",{className:"rmg-name__zh",fontSize:18,children:s[0]}),t("g",{fontSize:10.5,children:s[1].split("\\").map((o,i)=>t("text",{className:"rmg-name__en",dy:16+i*11,children:o},i))})]})},(n,e)=>n.stnName.toString()===e.stnName.toString());function ae(n){const{stnName:e,onUpdate:s,passed:r,...a}=n,o=h.exports.useRef(null),[i,c]=h.exports.useState({x:0,width:0});return h.exports.useEffect(()=>{if(o.current){const m=o.current.getBBox();c(m),s&&s(m)}},[e.toString()]),d("g",{fill:r?"#aaa":"#000",...a,children:[d("g",{transform:"translate(0,3)",fontSize:18,children:[t("text",{textAnchor:"end",x:i.x-3,className:"rmg-name__zh",children:"("}),t("text",{textAnchor:"start",x:i.width+i.x+3,className:"rmg-name__zh",children:")"})]}),d("g",{ref:o,textAnchor:"middle",children:[t("text",{className:"rmg-name__zh",fontSize:13,children:e[0]}),t("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:e[1]})]})]})}function oe(n){const{passed:e,...s}=n;return d("g",{textAnchor:"middle",fill:e?"#aaa":"var(--rmg-theme-colour)",...s,children:[t("text",{className:"rmg-name__zh",fontSize:13,children:"\u5FEB\u8F66\u505C\u9760\u7AD9"}),t("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]})}function ie(n){const{primaryName:e,secondaryName:s,stationState:r,flipped:a,express:o}=n,[i,c]=h.exports.useState({width:0}),[m,l]=h.exports.useState({x:0,width:-20}),p=y=>{switch(y){case k.PASSED:return"#aaa";case k.CURRENT:return"#f00";case k.FUTURE:return"#000"}},u=e[1].split("\\").length,g={g:{x:0,y:a?17.5:-20-u*14*Math.cos(-45)},StationSecondaryName:{x:(i.width+m.width/2+10)*(a?-1:1),y:2+5*(u-1)},ExpressTag:{x:(i.width+m.width+20+35)*(a?-1:1),y:2+5*(u-1)}};return d("g",{textAnchor:a?"end":"start",fill:p(r),transform:`translate(${g.g.x},${g.g.y})rotate(-45)`,children:[t(se,{stnName:e,onUpdate:c}),s&&t(ae,{stnName:s,onUpdate:l,passed:r===k.PASSED,transform:`translate(${g.StationSecondaryName.x},${g.StationSecondaryName.y})`}),o&&t(oe,{passed:r===k.PASSED,transform:`translate(${g.ExpressTag.x},${g.ExpressTag.y})`})]})}const ce=n=>{const{stnId:e,stnState:s,stnY:r}=n,a=f(g=>g.param.theme),o=f(g=>g.param.line_name),i=f(g=>g.param.line_num),c=f(g=>g.param.stn_list[e]),m=c.parents.length===2||c.children.length===2,l=r>0||c.parents.indexOf(c.branch.left[1]||"")===1||c.children.indexOf(c.branch.right[1]||"")===1?180:0,p=c.name[1].split("\\").length,u=m?l===180?16+(p-1)*12*Math.cos(-45):-9:l===180?-6:(25+(p-1)*15)*Math.cos(-45);return d(R,{children:[t(le,{intInfos:m?[[a[0],a[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)",...o]].concat(c.transfer.info[0]):c.transfer.info[0],stnState:s,tickRotation:l}),t(Z,{lineNum:i,stnNum:c.num,passed:s===-1}),t("g",{transform:`translate(${-u},0)`,children:t(ie,{primaryName:c.name,secondaryName:c.secondaryName||void 0,stationState:s,flipped:l===180,express:c.services.includes(Y.express)})})]})},le=n=>d(R,{children:[t(me,{strokeWidth:4,...n}),t(he,{transform:`translate(0,${n.tickRotation===180?-47:23})`,...n})]}),me=n=>{const{intInfos:e,stnState:s,tickRotation:r,...a}=n;return t("g",{...a,children:e.map((o,i)=>t("use",{xlinkHref:"#inttick",stroke:s===-1?"#aaa":o[2],transform:`translate(${-2*(e.length-1)+4*i},0)rotate(${r===180?180:0})`},i))})},he=n=>{const{intInfos:e,tickRotation:s,stnState:r,...a}=n;return t("g",{...a,children:e.map((o,i)=>t("g",{transform:`translate(0,${i*28*(s===180?-1:1)})`,children:t(V,{lineName:[o[4],o[5]],foregroundColour:o[3],backgroundColour:o[2],passed:r===-1})},i))})},W=(n,e)=>n[e].parents.length===2||n[e].children.length===2?.25:0,de=(n,e,s)=>{const r=_("linestart","lineend",e);if(r.nodes.includes(n))return _(r.nodes[1],n,e).len;{const a=s.filter(l=>l.includes(n))[0];let o=n;for(;!r.nodes.includes(o);)o=a[a.indexOf(o)-1];let i=n;for(;!r.nodes.includes(i);)i=a[a.indexOf(i)+1];const c=o==="linestart",m=i==="lineend";if(a.toString()===s[0].toString()){const l=[];return!c&&!m?(l[0]=_(r.nodes[1],o,e).len,l[1]=_(o,i,e).len,l[2]=_(o,n,e).len,l[3]=_(n,i,e).len):c?(l[0]=0,l[1]=_(r.nodes[1],i,e).len,l[2]=_(a[1],n,e).len,l[3]=_(n,i,e).len):(l[0]=_(r.nodes[1],o,e).len,l[1]=_(o,r.nodes.slice(-2)[0],e).len,l[2]=_(o,n,e).len,l[3]=_(n,a.slice(-2)[0],e).len),l[0]+l[2]*l[1]/(l[2]+l[3])}else if(!c&&!m){const l=[];return l[0]=_(r.nodes[1],o,e).len,l[1]=_(o,i,e).len,l[2]=_(o,n,e).len,l[3]=_(n,i,e).len,l[0]+l[2]*l[1]/(l[2]+l[3])}else return c?_(r.nodes[1],i,e).len-_(n,i,e).len:_(r.nodes[1],o,e).len+_(o,n,e).len}},ge=()=>{const{branches:n,routes:e,depsStr:s}=f(z=>z.helper),{svgWidth:r,svg_height:a,y_pc:o,padding:i,branchSpacingPct:c,direction:m,line_name:l,current_stn_idx:p,stn_list:u}=f(z=>z.param),g=J(u,W,W),y=h.exports.useMemo(()=>(console.log("computing x shares"),Object.keys(u).reduce((z,B)=>({...z,[B]:de(B,g,n)}),{})),[n.toString(),JSON.stringify(g)]),x=_("linestart","lineend",g),v=_(x.nodes[1],x.nodes.slice(-2)[0],g),N=m===S.right?[r[w.RailMap]*i/100+65,r[w.RailMap]*(1-i/100)-20]:[r[w.RailMap]*i/100,r[w.RailMap]*(1-i/100)-65],E=Object.keys(y).reduce((z,B)=>({...z,[B]:N[0]+y[B]/v.len*(N[1]-N[0])}),{}),I=h.exports.useMemo(()=>(console.log("computing y shares"),Object.keys(u).reduce((z,B)=>{if(n[0].includes(B))return{...z,[B]:0};{const b=n.slice(1).filter(X=>X.includes(B))[0];return{...z,[B]:u[b[0]].children.indexOf(b[1])?-2:2}}},{})),[s]),L=Object.keys(I).reduce((z,B)=>({...z,[B]:-I[B]*c*a/200}),{}),H=h.exports.useMemo(()=>q(p,e,m),[p,m,e.toString()]),M=n.map(z=>K(z,H)).reduce((z,B)=>(z.main.push(B.main),z.pass.push(B.pass),z),{main:[],pass:[]}),U=Object.keys(M).reduce((z,B)=>({...z,[B]:M[B].map(b=>xe(b,E,L))}),{});return d("g",{id:"main",style:{["--y-percentage"]:o,transform:"translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"},children:[t(ue,{paths:U}),t(fe,{xs:E,ys:L,stnStates:H}),t("g",{id:"line_name",style:{["--translate-x"]:m===S.right?`${N[0]-65}px`:`${N[1]+65}px`},children:t(V,{lineName:l,foregroundColour:"var(--rmg-theme-fg)",backgroundColour:"var(--rmg-theme-colour)"})})]})},ue=h.exports.memo(function(e){return d("g",{fill:"none",strokeWidth:4,children:[t("g",{stroke:"#aaa",strokeDasharray:4,children:e.paths.pass.map((s,r)=>t("path",{d:s},r))}),t("g",{stroke:"var(--rmg-theme-colour)",children:e.paths.main.map((s,r)=>t("path",{d:s},r))})]})},(n,e)=>JSON.stringify(n.paths)===JSON.stringify(e.paths)),xe=(n,e,s)=>{let r;const a=[];return n.forEach(o=>{const i=e[o],c=s[o];if(!r&&r!==0){r=c,a.push(`M ${i},${c}`);return}c===0?(c<r&&a.push(`H ${i-40}`,"a 40,40 0 0,0 40,-40",`V ${c}`),c>r&&a.push(`H ${i-40}`,"a 40,40 0 0,1 40,40",`V ${c}`)):(c<r&&a.push(`V ${c+40}`,"a 40,40 0 0,1 40,-40",`H ${i}`),c>r&&a.push(`V ${c-40}`,"a 40,40 0 0,0 40,40",`H ${i}`)),a.push(`H ${i}`),r=c}),a.join(" ").replace(/( H ([\d.]+))+/g," H $2")},fe=n=>{const{xs:e,ys:s,stnStates:r}=n,a=f(o=>o.param.stn_list);return t("g",{id:"stn_icons",children:Object.keys(a).filter(o=>!["linestart","lineend"].includes(o)).map(o=>t("g",{style:{transform:`translate(${e[o]}px,${s[o]}px)`},children:t(ce,{stnId:o,stnState:r[o],stnY:s[o]})},o))})},P=w.RailMap,pe=()=>{const{canvasScale:n}=f(g=>g.app),{svgWidth:e,svg_height:s,direction:r,psd_num:a,info_panel_type:o,notesGZMTR:i,current_stn_idx:c,stn_list:m,theme:l}=f(g=>g.param),p=e[P],u=m[c];return d(G,{type:P,svgWidth:p,svgHeight:s,canvasScale:n,theme:l,children:[t(Se,{}),t(F,{variant:o,isShowLight:o===$.gz2otis,isShowPSD:o===$.gz2otis&&a}),r===S.left&&u.parents.includes("linestart")||r===S.right&&u.children.includes("lineend")?t(ze,{}):d(R,{children:[t(ge,{}),t(_e,{}),i.map((g,y)=>t(Be,{note:g},y))]}),o===$.gz2otis&&t("line",{x2:p,transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},Se=h.exports.memo(function(){return d("defs",{children:[t("path",{id:"arrow_direction",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black"}),t("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"})]})}),_e=()=>{const{routes:n}=f(c=>c.helper),{direction:e,direction_gz_x:s,direction_gz_y:r,current_stn_idx:a}=f(c=>c.param),o=h.exports.useMemo(()=>[...new Set(n.reduce((c,m)=>m.includes(a)?c.concat(m.filter(l=>!["linestart","lineend"].includes(l)).slice(e===S.left?0:-1)[0]):c,[]).filter(c=>c!==a))],[a,e,n.toString()]),i={textAnchor:e===S.left?"start":"end",transform:`translate(${e===S.left?65:-65},-5)`,destIds:o};return d("g",{id:"direction_gz",style:{["--x-percentage"]:s,["--y-percentage"]:r},children:[t("use",{xlinkHref:"#arrow_direction",style:{["--rotate"]:e===S.left?"0deg":"180deg"}}),o.length!==2?t(ye,{...i}):t(Ne,{...i})]})},ye=n=>{const{destIds:e,...s}=n,r=f(a=>a.param.stn_list);return d("g",{...s,children:[t("text",{className:"rmg-name__zh",fontSize:28,children:e.map(a=>r[a].name[0]).join("/")+"\u65B9\u5411"}),t("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+e.map(a=>r[a].name[1].replace("\\"," ")).join("/")})]})},Ne=n=>{const{destIds:e,...s}=n,r=f(m=>m.param.direction),a=f(m=>m.param.stn_list),o=e.map(m=>a[m].name[0].length),i=Math.min(...o),c=i>1&&o[0]!==o[1]?Math.abs(o[0]-o[1])/(i-1):0;return d("g",{...s,children:[e.map((m,l)=>d(h.exports.Fragment,{children:[t("text",{className:"rmg-name__zh",fontSize:25,x:r===S.left?0:-75,y:-21+42*l,letterSpacing:o[l]>o[1-l]?"0em":`${c}em`,children:a[m].name[0]}),t("text",{className:"rmg-name__en",fontSize:11.5,x:r===S.left?0:-75,y:-1+42*l,children:"Towards "+a[m].name[1].replace("\\"," ")})]},m)),t("text",{className:"rmg-name__zh",fontSize:28,x:r===S.left?25*(Math.max(...o)+1):0,y:5,children:"\u65B9\u5411"})]})},ze=h.exports.memo(function(){return d("g",{id:"terminus_gz",textAnchor:"middle",children:[t("text",{className:"rmg-name__zh",fontSize:90,children:"\u7EC8 \u70B9 \u7AD9"}),t("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),d("g",{strokeWidth:8,stroke:"#000",children:[t("path",{d:"M -160,68 h -160"}),t("path",{d:"M 160,68 h 160"})]})]})}),Be=h.exports.memo(function(e){const s=h.exports.useRef(null),[r,a]=h.exports.useState({width:0,height:0,y:0});return h.exports.useEffect(()=>{s.current&&a(s.current.getBBox())},[e.note[0],e.note[1]]),d("g",{className:"note-box",style:{["--x-percentage"]:e.note[2],["--y-percentage"]:e.note[3]},children:[e.note[4]&&t("rect",{height:r.height+4,width:r.width+4,x:-2,y:r.y-2,fill:"none",stroke:"black",strokeWidth:.5}),d("g",{ref:s,children:[t("g",{fontSize:16,letterSpacing:1.2,children:e.note[0].split(`
`).map((o,i)=>t("text",{className:"rmg-name__zh",y:i*18,children:o},i))}),t("g",{fontSize:10,letterSpacing:.33,transform:`translate(0,${18*e.note[0].split(`
`).length})`,children:e.note[1].split(`
`).map((o,i)=>{var c;return t("text",{className:"rmg-name__en",y:i*11,textLength:i<(((c=e.note[1].match(/\n/g))==null?void 0:c.length)||0)?r.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:o},i)})})]})]})},(n,e)=>n.note.toString()===e.note.toString()),we=h.exports.memo(function(e){const{stnName:s,onUpdate:r}=e,a=h.exports.useRef(null);return h.exports.useEffect(()=>{a.current&&r&&r(a.current.getBBox())},[s.toString()]),d("g",{ref:a,children:[t("text",{className:"rmg-name__zh",fontSize:90,children:s[0]}),t("g",{fontSize:36,children:s[1].split("\\").map((o,i)=>t("text",{className:"rmg-name__en",dy:70+i*36,children:o},i))})]})},(n,e)=>n.stnName.toString()===e.stnName.toString()),ve=n=>{const{secondaryName:e,transform:s}=n,r=h.exports.useRef(null),[a,o]=h.exports.useState({x:0,width:0});return h.exports.useEffect(()=>{r.current&&o(r.current.getBBox())},[e.toString()]),d("g",{transform:s,children:[d("g",{transform:"translate(0,4.5)",fontSize:36,children:[t("text",{textAnchor:"end",x:a.x-3,className:"rmg-name__zh",children:"("}),t("text",{textAnchor:"start",x:a.width+a.x+3,className:"rmg-name__zh",children:")"})]}),d("g",{ref:r,textAnchor:"middle",children:[t("text",{className:"rmg-name__zh",fontSize:26,children:e[0]}),t("text",{dy:22,className:"rmg-name__en",fontSize:14,children:e[1]})]})]})},$e=()=>{const n=f(g=>g.param.svg_height),e=f(g=>g.param.svgWidth),s=f(g=>g.param.direction),r=f(g=>g.param.info_panel_type),a=f(g=>g.param.line_num),o=f(g=>g.param.current_stn_idx),i=f(g=>g.param.stn_list[o]),[c,m]=h.exports.useState({width:0}),l=i[s===S.left?"parents":"children"],p={name:`translate(${(s===S.left?1:-1)*e[w.RunIn]/4},45)`,next:`translate(${(s===S.left?1:-1)*e[w.RunIn]/10},45)`},u={nameGroup:{x:e.runin/2,y:.5*n-50-(i.name[1].split("\\").length-1)*18-(i.secondaryName?29:0)},secondaryName:{x:0,y:70+i.name[1].split("\\").length*36}};return d("g",{children:[d("g",{transform:r===$.gz2otis?p.name:"",children:[d("g",{textAnchor:"middle",transform:`translate(${u.nameGroup.x},${u.nameGroup.y})`,children:[t(we,{stnName:i.name,onUpdate:m}),i.secondaryName&&t(ve,{secondaryName:i.secondaryName,transform:`translate(${u.secondaryName.x},${u.secondaryName.y})`})]}),t(Z,{lineNum:a,stnNum:i.num,style:{["--translate-x"]:`${(e[w.RunIn]+c.width)/2+55}px`,["--translate-y"]:`${.5*n-30-(i.name[1].split("\\").length-1)*18-(i.secondaryName?58/2:0)}px`,transform:"translate(var(--translate-x, 800px), var(--translate-y, 145px))"},large:!0})]}),t("g",{transform:r===$.gz2otis?p.next:"",children:!l||l.includes("linestart")||l.includes("lineend")?t(R,{}):l.length===1?t(Re,{nextId:l[0],nameBBox:c}):t(Te,{nextIds:l,nameBBox:c})})]})},Re=n=>{const{nextId:e,nameBBox:s}=n,r=f(y=>y.param.svgWidth),a=f(y=>y.param.direction),o=f(y=>y.param.stn_list[e]),{name:i,secondaryName:c}=o,[m,l]=h.exports.useState({width:0}),p=h.exports.useRef(null);h.exports.useEffect(()=>{p.current&&l(p.current.getBBox())},[i.toString()]);const u=i[0].length,g=(r[w.RunIn]-s.width)/2;return d(R,{children:[d("g",{id:"big_next",children:[d("g",{textAnchor:"middle",style:{["--translate-x"]:a===S.left?"80px":u<=2?`${r[w.RunIn]-45-m.width-70}px`:`${r[w.RunIn]-45-m.width-35*1.5}px`},children:[t("text",{className:"rmg-name__zh",fontSize:35,children:"\u4E0B\u7AD9"}),t("text",{className:"rmg-name__en",fontSize:17,dy:30,children:"Next"})]}),d("g",{textAnchor:"start",ref:p,style:{["--translate-x"]:a===S.left?u<=2?`${115+35}px`:`${115+35/2}px`:`${r[w.RunIn]-45-m.width}px`},children:[t("text",{className:"rmg-name__zh",fontSize:35,children:i[0]}),t("g",{fontSize:17,children:i[1].split("\\").map((y,x)=>t("text",{className:"rmg-name__en",dy:30+x*17,children:y},x))})]}),c&&t("g",{textAnchor:"middle",style:{["--translate-x"]:a===S.left?u<=2?`${115+35}px`:`${115+35/2}px`:`${r[w.RunIn]-45-m.width}px`},children:t(Ee,{secName:c,transform:`translate(${m.width/2},${30+i[1].split("\\").length*17+5})`})})]}),t("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:{["--translate-x"]:a===S.left?`${(115+35*((u<=2?1:.5)+u)+g)/2-20}px`:`${(r[w.RunIn]-45-m.width-(u<=2?70+35:35*2.5)+g+n.nameBBox.width+55+18.5*1.4)/2+20}px`,["--rotate"]:a===S.left?"0deg":"180deg"}})]})},Ee=n=>{const{secName:e,...s}=n,r=h.exports.useRef(null),[a,o]=h.exports.useState({x:0,width:0});return h.exports.useEffect(()=>{r.current&&o(r.current.getBBox())},[n.secName.toString()]),d("g",{...s,children:[d("g",{transform:"translate(0,2.5)",fontSize:25,children:[t("text",{textAnchor:"end",x:a.x-3,className:"rmg-name__zh",children:"("}),t("text",{textAnchor:"start",x:a.width+a.x+3,className:"rmg-name__zh",children:")"})]}),d("g",{ref:r,children:[t("text",{className:"rmg-name__zh",fontSize:18,children:e[0]}),t("text",{className:"rmg-name__en",fontSize:10,dy:15,children:e[1]})]})]})},Te=n=>{const{nextIds:e,nameBBox:s}=n,{routes:r}=f(x=>x.helper),a=f(x=>x.param.svgWidth),o=f(x=>x.param.direction),i=f(x=>x.param.stn_list),c=e.map(x=>i[x].name),[m,l]=h.exports.useState({width:0}),p=h.exports.useRef([]);h.exports.useEffect(()=>{l(x=>({...x,width:0})),p.current.forEach(x=>{const v=x==null?void 0:x.getBBox();l(N=>v?N.width>v.width?N:v:N)})},[c.toString()]);const u=n.nextIds.map(x=>r.reduce((v,N)=>N.includes(x)?v.concat(N.filter(E=>!["linestart","lineend"].includes(E)).slice(o===S.left?0:-1)[0]):v,[])),g=Math.max(...c.map(x=>x[0].length)),y=(a[w.RunIn]-s.width)/2;return d(R,{children:[t("g",{id:"big_next_2",children:c.map((x,v)=>d(h.exports.Fragment,{children:[d("g",{textAnchor:"middle",style:{["--translate-x"]:o===S.left?"72px":`${a[w.RunIn]-45-m.width-41}px`},children:[t("text",{className:"rmg-name__zh",children:"\u4E0B\u7AD9"}),t("text",{className:"rmg-name__en",y:22,children:"Next"})]}),d("g",{ref:N=>p.current[v]=N,textAnchor:"start",style:{["--translate-x"]:o===S.left?"113px":`${a[w.RunIn]-45-m.width}px`},children:[t("text",{className:"rmg-name__zh",children:x[0]}),x[1].split("\\").map((N,E)=>t("text",{className:"rmg-name__en",y:22+E*13,children:N},E)),t("text",{className:"rmg-name__zh",y:-35,children:u[v].map(N=>i[N].name[0]).join("/")+"\u65B9\u5411"}),t("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20,children:"Towards "+u[v].map(N=>i[N].name[1]).join("/").replace("\\"," ")})]})]},v))}),t("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:{["--translate-x"]:o===S.left?`${(99+27*(1+g)+y)/2-20}px`:`${(a[w.RunIn]-45-m.width-41-27+y+n.nameBBox.width+55+18.5*1.4)/2+20}px`,["--rotate"]:o===S.left?"0deg":"180deg"}})]})};function ke(n){const{num:e,...s}=n;return d("g",{textAnchor:"middle",fill:"var(--rmg-theme-fg)",...s,children:[t("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),t("text",{className:"rmg-name__en",fontSize:38,dy:-9.5,children:e}),t("text",{className:"rmg-name__zh",fontSize:13,dy:10,children:"\u7AD9\u53F0"}),t("text",{className:"rmg-name__en",fontSize:9,dy:21,children:"Platform"})]})}function be(n){const{canvasType:e}=n,{svgWidth:s,svg_height:r}=f(a=>a.param);return d("g",{id:"otis_frame",strokeWidth:3,stroke:"black",children:[t("line",{y2:r,transform:`translate(${s[e]/2},0)`}),t("line",{x2:s[e],transform:"translate(0,90)"})]})}const D=w.RunIn;function Ae(){const{canvasScale:n}=f(p=>p.app),{svgWidth:e,svg_height:s,direction:r,info_panel_type:a,platform_num:o,psd_num:i,theme:c}=f(p=>p.param),m=e[D],l={platform:`translate(${r===S.left?50:-50},45)`};return d(G,{type:D,svgWidth:m,svgHeight:s,canvasScale:n,theme:c,children:[t(F,{variant:a,isShowLight:a!==$.gz2otis,isShowPSD:a!==$.gz2otis&&i}),t("g",{transform:a===$.gz2otis?l.platform:"",children:t(ke,{num:o,style:{["--translate-x"]:`${r===S.left?m-100:100}px`,["--translate-y"]:"calc(var(--rmg-svg-height) / 2 - 30px)",transform:"translate(var(--translate-x, 100px), var(--translate-y))"}})}),t($e,{}),a===$.gz2otis&&t(be,{canvasType:D})]})}const He={runin:t(Ae,{}),railmap:t(pe,{})};export{He as default};
