import{j as g,M as G,l as t,z as h,ab as R}from"./vendor-40a796df.js";import{at as k,u as f,j as Y,S,ar as w,P as $}from"./index-83cf48ed.js";import{a as J,c as y,b as q,e as K,S as O}from"./share-f129c978.js";function Q(n){const{num:e,inStrip:s,...r}=n;return g("g",{textAnchor:"middle",fill:s?G.black:"var(--rmg-theme-fg)",...r,children:[t("rect",{height:40,width:40,rx:4,x:-20,fill:s?"#fff":"var(--rmg-theme-colour)"}),t("text",{className:"rmg-name__en",fontSize:20,dy:12,children:e}),t("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"屏蔽门"}),t("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]})}const Z=n=>{const e=(a=>{switch(a){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}})(n.variant),s=h.useMemo(()=>{switch(n.variant){case"gz1":return t("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return t("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return t("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return t("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return t("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return t("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return t("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return t("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return t(R,{})}},[n.variant]),r=-20;return g("g",{transform:`translate(0,${n.variant==="gz4"?r:0})`,children:[t("rect",{id:"strip_gz",style:{["--height"]:`${e}px`}}),t("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:n.isShowLight&&s}),n.isShowPSD!==!1&&t(j,{...n})]})},j=h.memo(function(e){const s=["gz28","gz2otis","gz6","gzgf"].includes(e.variant),r=(a=>{switch(a){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}})(e.variant);return t(Q,{num:e.isShowPSD,inStrip:s,style:{["--psd-dy"]:r,transform:"translate(var(--translate-x), var(--translate-y))",["--translate-x"]:"calc(var(--rmg-svg-width) / 2 + 80px)",["--translate-y"]:"calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"}})},(n,e)=>n.variant===e.variant&&n.isShowPSD===e.isShowPSD),ee=h.memo(function(e){const{passed:s,large:r}=e;return t("path",{d:r?"M0,12.95 V-12.95 H-12.95 a12.95,12.95 0 0,0 0,25.9 h25.9 a12.95,12.95 0 0,0 0,-25.9 H0":"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0",fill:"#fff",strokeWidth:2,stroke:s?"#aaa":"var(--rmg-theme-colour)"})},(n,e)=>n.passed===e.passed&&n.large===e.large),A=15;function F(n){const{lineNum:e,stnNum:s,passed:r,large:a,...i}=n,c=h.useRef(null),o=h.useRef(null),[m,l]=h.useState({width:0}),[p,u]=h.useState({width:0});h.useEffect(()=>{c.current&&l(c.current.getBBox()),o.current&&u(o.current.getBBox())},[e,s]);const d=A/Math.max(A,m.width),N=e.length===2&&s.length===2?d:A/Math.max(A,p.width);return g("g",{...i,children:[t(ee,{passed:r,large:a}),g("g",{textAnchor:"middle",fontSize:13.5,transform:a?"scale(1.4)":"",fill:r?"#aaa":"#000",children:[t("g",{transform:`translate(-9.25,0)scale(${d})`,children:t("text",{ref:c,className:"rmg-name__zh",children:e})}),t("g",{transform:`translate(9.25,0)scale(${N})`,children:t("text",{ref:o,className:"rmg-name__zh",children:s})})]})]})}const te=h.memo(function(e){const{lineName:s,commonPart:r}=e,a=h.useRef(null),[i,c]=h.useState({x:0,height:0,width:0});h.useEffect(()=>{a.current&&c(a.current.getBBox())},[s.toString()]);const o=T/Math.max(T,i.width),m=(-i.x-i.width/2)*o,l=i.height*(1-o)*1.2/2;return t("g",{ref:a,transform:`translate(${m},${l})scale(${o})`,children:g("text",{className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end",children:[r,t("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:s[0].slice(r.length).trim()}),t("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:s[1].slice(r.length).trim()})]})})},(n,e)=>n.lineName.toString()===e.lineName.toString());function ne(n){return t("rect",{x:-22.5,height:24,width:45,rx:4.5,...n})}const T=42,U=h.memo(function(e){const{lineName:s,foregroundColour:r,backgroundColour:a,passed:i}=e,[c,o]=re(s),m=h.useRef(null),l=h.useRef(null),[p,u]=h.useState({width:0}),[d,N]=h.useState({width:0});h.useEffect(()=>{m.current&&u(m.current.getBBox()),l.current&&N(l.current.getBBox())},[s.toString()]);const x=T/Math.max(T,p.width),v=T/Math.max(T,d.width),_={nameZh:{y:7.3+13.5*(1-x)*x/2},nameEn:{y:19.5-9*(1-v)*v/2}};return g("g",{textAnchor:"middle",fill:i?G.white:r,children:[t(ne,{fill:i?"#aaa":a}),c===2?t(te,{lineName:s,commonPart:o}):g(R,{children:[t("text",{ref:m,className:"rmg-name__zh",fontSize:12,transform:`translate(0,${_.nameZh.y})scale(${x})`,children:c===1?g(R,{children:[t("tspan",{fontSize:16,dy:.7,className:"rmg-name__zh",children:o}),t("tspan",{dy:-.7,className:"rmg-name__zh",children:s[0].slice(o.length)})]}):s[0]}),t("text",{ref:l,className:"rmg-name__en",fontSize:8,transform:`translate(0,${_.nameEn.y})scale(${v})`,children:s[1]})]})]})},(n,e)=>n.lineName.toString()===e.lineName.toString()&&n.foregroundColour===e.foregroundColour&&n.backgroundColour===e.backgroundColour&&n.passed===e.passed),re=n=>{const e=n[0].match(/^(\d+)\D+$/);if(e)return[1,e[1]];const s=n.map(r=>r.match(/^(\w+).+$/));return s[0]&&s[1]&&s[0][1]===s[1][1]?[2,s[0][1]]:[3,""]},ae=h.memo(function(e){const{stnName:s,onUpdate:r}=e,a=h.useRef(null);return h.useEffect(()=>{a.current&&r&&r(a.current.getBBox())},[s.toString()]),g("g",{ref:a,children:[t("text",{className:"rmg-name__zh",fontSize:18,children:s[0]}),t("g",{fontSize:10.5,children:s[1].split("\\").map((i,c)=>t("text",{className:"rmg-name__en",dy:16+c*11,children:i},c))})]})},(n,e)=>n.stnName.toString()===e.stnName.toString());function se(n){const{stnName:e,onUpdate:s,passed:r,...a}=n,i=h.useRef(null),[c,o]=h.useState({x:0,width:0});return h.useEffect(()=>{if(i.current){const m=i.current.getBBox();o(m),s&&s(m)}},[e.toString()]),g("g",{fill:r?"#aaa":"#000",...a,children:[g("g",{transform:"translate(0,3)",fontSize:18,children:[t("text",{textAnchor:"end",x:c.x-3,className:"rmg-name__zh",children:"("}),t("text",{textAnchor:"start",x:c.width+c.x+3,className:"rmg-name__zh",children:")"})]}),g("g",{ref:i,textAnchor:"middle",children:[t("text",{className:"rmg-name__zh",fontSize:13,children:e[0]}),t("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:e[1]})]})]})}function ie(n){const{passed:e,...s}=n;return g("g",{textAnchor:"middle",fill:e?"#aaa":"var(--rmg-theme-colour)",...s,children:[t("text",{className:"rmg-name__zh",fontSize:13,children:"快车停靠站"}),t("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]})}function ce(n){const{primaryName:e,secondaryName:s,stationState:r,flipped:a,express:i}=n,[c,o]=h.useState({width:0}),[m,l]=h.useState({x:0,width:-20}),p=N=>{switch(N){case k.PASSED:return"#aaa";case k.CURRENT:return"#f00";case k.FUTURE:return"#000"}},u=e[1].split("\\").length,d={g:{x:0,y:a?17.5:-20-u*14*Math.cos(-45)},StationSecondaryName:{x:(c.width+m.width/2+10)*(a?-1:1),y:2+5*(u-1)},ExpressTag:{x:(c.width+m.width+20+35)*(a?-1:1),y:2+5*(u-1)}};return g("g",{textAnchor:a?"end":"start",fill:p(r),transform:`translate(${d.g.x},${d.g.y})rotate(-45)`,children:[t(ae,{stnName:e,onUpdate:o}),s&&t(se,{stnName:s,onUpdate:l,passed:r===k.PASSED,transform:`translate(${d.StationSecondaryName.x},${d.StationSecondaryName.y})`}),i&&t(ie,{passed:r===k.PASSED,transform:`translate(${d.ExpressTag.x},${d.ExpressTag.y})`})]})}const oe=n=>{const{stnId:e,stnState:s,stnY:r}=n,a=f(d=>d.param.theme),i=f(d=>d.param.line_name),c=f(d=>d.param.line_num),o=f(d=>d.param.stn_list[e]),m=o.parents.length===2||o.children.length===2,l=r>0||o.parents.indexOf(o.branch.left[1]||"")===1||o.children.indexOf(o.branch.right[1]||"")===1?180:0,p=o.name[1].split("\\").length,u=m?l===180?16+(p-1)*12*Math.cos(-45):-9:l===180?-6:(25+(p-1)*15)*Math.cos(-45);return g(R,{children:[t(le,{intInfos:m?[[a[0],a[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)",...i]].concat(o.transfer.info[0]):o.transfer.info[0],stnState:s,tickRotation:l}),t(F,{lineNum:c,stnNum:o.num,passed:s===-1}),t("g",{transform:`translate(${-u},0)`,children:t(ce,{primaryName:o.name,secondaryName:o.secondaryName||void 0,stationState:s,flipped:l===180,express:o.services.includes(Y.express)})})]})},le=n=>g(R,{children:[t(me,{strokeWidth:4,...n}),t(he,{transform:`translate(0,${n.tickRotation===180?-47:23})`,...n})]}),me=n=>{const{intInfos:e,stnState:s,tickRotation:r,...a}=n;return t("g",{...a,children:e.map((i,c)=>t("use",{xlinkHref:"#inttick",stroke:s===-1?"#aaa":i[2],transform:`translate(${-2*(e.length-1)+4*c},0)rotate(${r===180?180:0})`},c))})},he=n=>{const{intInfos:e,tickRotation:s,stnState:r,...a}=n;return t("g",{...a,children:e.map((i,c)=>t("g",{transform:`translate(0,${c*28*(s===180?-1:1)})`,children:t(U,{lineName:[i[4],i[5]],foregroundColour:i[3],backgroundColour:i[2],passed:r===-1})},c))})},C=(n,e)=>n[e].parents.length===2||n[e].children.length===2?.25:0,de=(n,e,s)=>{const r=y("linestart","lineend",e);if(r.nodes.includes(n))return y(r.nodes[1],n,e).len;{const a=s.filter(l=>l.includes(n))[0];let i=n;for(;!r.nodes.includes(i);)i=a[a.indexOf(i)-1];let c=n;for(;!r.nodes.includes(c);)c=a[a.indexOf(c)+1];const o=i==="linestart",m=c==="lineend";if(a.toString()===s[0].toString()){const l=[];return!o&&!m?(l[0]=y(r.nodes[1],i,e).len,l[1]=y(i,c,e).len,l[2]=y(i,n,e).len,l[3]=y(n,c,e).len):o?(l[0]=0,l[1]=y(r.nodes[1],c,e).len,l[2]=y(a[1],n,e).len,l[3]=y(n,c,e).len):(l[0]=y(r.nodes[1],i,e).len,l[1]=y(i,r.nodes.slice(-2)[0],e).len,l[2]=y(i,n,e).len,l[3]=y(n,a.slice(-2)[0],e).len),l[0]+l[2]*l[1]/(l[2]+l[3])}else if(!o&&!m){const l=[];return l[0]=y(r.nodes[1],i,e).len,l[1]=y(i,c,e).len,l[2]=y(i,n,e).len,l[3]=y(n,c,e).len,l[0]+l[2]*l[1]/(l[2]+l[3])}else return o?y(r.nodes[1],c,e).len-y(n,c,e).len:y(r.nodes[1],i,e).len+y(i,n,e).len}},ge=()=>{const{branches:n,routes:e,depsStr:s}=f(z=>z.helper),{svgWidth:r,svg_height:a,y_pc:i,padding:c,branchSpacingPct:o,direction:m,line_name:l,current_stn_idx:p,stn_list:u}=f(z=>z.param),d=J(u,C,C),N=h.useMemo(()=>(console.log("computing x shares"),Object.keys(u).reduce((z,B)=>({...z,[B]:de(B,d,n)}),{})),[n.toString(),JSON.stringify(d)]),x=y("linestart","lineend",d),v=y(x.nodes[1],x.nodes.slice(-2)[0],d),_=m===S.right?[r[w.RailMap]*c/100+65,r[w.RailMap]*(1-c/100)-20]:[r[w.RailMap]*c/100,r[w.RailMap]*(1-c/100)-65],E=Object.keys(N).reduce((z,B)=>({...z,[B]:_[0]+N[B]/v.len*(_[1]-_[0])}),{}),M=h.useMemo(()=>(console.log("computing y shares"),Object.keys(u).reduce((z,B)=>{if(n[0].includes(B))return{...z,[B]:0};{const b=n.slice(1).filter(X=>X.includes(B))[0];return{...z,[B]:u[b[0]].children.indexOf(b[1])?-2:2}}},{})),[s]),W=Object.keys(M).reduce((z,B)=>({...z,[B]:-M[B]*o*a/200}),{}),H=h.useMemo(()=>q(p,e,m),[p,m,e.toString()]),L=n.map(z=>K(z,H)).reduce((z,B)=>(z.main.push(B.main),z.pass.push(B.pass),z),{main:[],pass:[]}),V=Object.keys(L).reduce((z,B)=>({...z,[B]:L[B].map(b=>xe(b,E,W))}),{});return g("g",{id:"main",style:{["--y-percentage"]:i,transform:"translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"},children:[t(ue,{paths:V}),t(fe,{xs:E,ys:W,stnStates:H}),t("g",{id:"line_name",style:{["--translate-x"]:m===S.right?`${_[0]-65}px`:`${_[1]+65}px`},children:t(U,{lineName:l,foregroundColour:"var(--rmg-theme-fg)",backgroundColour:"var(--rmg-theme-colour)"})})]})},ue=h.memo(function(e){return g("g",{fill:"none",strokeWidth:4,children:[t("g",{stroke:"#aaa",strokeDasharray:4,children:e.paths.pass.map((s,r)=>t("path",{d:s},r))}),t("g",{stroke:"var(--rmg-theme-colour)",children:e.paths.main.map((s,r)=>t("path",{d:s},r))})]})},(n,e)=>JSON.stringify(n.paths)===JSON.stringify(e.paths)),xe=(n,e,s)=>{let r;const a=[];return n.forEach(i=>{const c=e[i],o=s[i];if(!r&&r!==0){r=o,a.push(`M ${c},${o}`);return}o===0?(o<r&&a.push(`H ${c-40}`,"a 40,40 0 0,0 40,-40",`V ${o}`),o>r&&a.push(`H ${c-40}`,"a 40,40 0 0,1 40,40",`V ${o}`)):(o<r&&a.push(`V ${o+40}`,"a 40,40 0 0,1 40,-40",`H ${c}`),o>r&&a.push(`V ${o-40}`,"a 40,40 0 0,0 40,40",`H ${c}`)),a.push(`H ${c}`),r=o}),a.join(" ").replace(/( H ([\d.]+))+/g," H $2")},fe=n=>{const{xs:e,ys:s,stnStates:r}=n,a=f(i=>i.param.stn_list);return t("g",{id:"stn_icons",children:Object.keys(a).filter(i=>!["linestart","lineend"].includes(i)).map(i=>t("g",{style:{transform:`translate(${e[i]}px,${s[i]}px)`},children:t(oe,{stnId:i,stnState:r[i],stnY:s[i]})},i))})};function D(n){return t("path",{d:"M60,60 L0,0 L60,-60 H90 L40,-10 H150 V10 H40 L90,60z",fill:"black",...n})}const P=w.RailMap,pe=()=>{const{canvasScale:n}=f(d=>d.app),{svgWidth:e,svg_height:s,direction:r,psd_num:a,info_panel_type:i,notesGZMTR:c,current_stn_idx:o,stn_list:m,theme:l}=f(d=>d.param),p=e[P],u=m[o];return g(O,{type:P,svgWidth:p,svgHeight:s,canvasScale:n,theme:l,children:[t(Se,{}),t(Z,{variant:i,isShowLight:i===$.gz2otis,isShowPSD:i===$.gz2otis&&a}),r===S.left&&u.parents.includes("linestart")||r===S.right&&u.children.includes("lineend")?t(ze,{}):g(R,{children:[t(ge,{}),t(_e,{}),c.map((d,N)=>t(Be,{note:d},N))]}),i===$.gz2otis&&t("line",{x2:p,transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},Se=h.memo(function(){return t("defs",{children:t("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"})})}),_e=()=>{const{routes:n}=f(o=>o.helper),{direction:e,direction_gz_x:s,direction_gz_y:r,current_stn_idx:a}=f(o=>o.param),i=h.useMemo(()=>[...new Set(n.reduce((o,m)=>m.includes(a)?o.concat(m.filter(l=>!["linestart","lineend"].includes(l)).slice(e===S.left?0:-1)[0]):o,[]).filter(o=>o!==a))],[a,e,n.toString()]),c={textAnchor:e===S.left?"start":"end",transform:`translate(${e===S.left?65:-65},-5)`,destIds:i};return g("g",{id:"direction_gz",style:{["--x-percentage"]:s,["--y-percentage"]:r},children:[t(D,{transform:`scale(0.35)rotate(${e===S.left?0:180})`}),i.length!==2?t(ye,{...c}):t(Ne,{...c})]})},ye=n=>{const{destIds:e,...s}=n,r=f(a=>a.param.stn_list);return g("g",{...s,children:[t("text",{className:"rmg-name__zh",fontSize:28,children:e.map(a=>r[a].name[0]).join("/")+"方向"}),t("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+e.map(a=>r[a].name[1].replace("\\"," ")).join("/")})]})},Ne=n=>{const{destIds:e,...s}=n,r=f(m=>m.param.direction),a=f(m=>m.param.stn_list),i=e.map(m=>a[m].name[0].length),c=Math.min(...i),o=c>1&&i[0]!==i[1]?Math.abs(i[0]-i[1])/(c-1):0;return g("g",{...s,children:[e.map((m,l)=>g(h.Fragment,{children:[t("text",{className:"rmg-name__zh",fontSize:25,x:r===S.left?0:-75,y:-21+42*l,letterSpacing:i[l]>i[1-l]?"0em":`${o}em`,children:a[m].name[0]}),t("text",{className:"rmg-name__en",fontSize:11.5,x:r===S.left?0:-75,y:-1+42*l,children:"Towards "+a[m].name[1].replace("\\"," ")})]},m)),t("text",{className:"rmg-name__zh",fontSize:28,x:r===S.left?25*(Math.max(...i)+1):0,y:5,children:"方向"})]})},ze=h.memo(function(){return g("g",{id:"terminus_gz",textAnchor:"middle",children:[t("text",{className:"rmg-name__zh",fontSize:90,children:"终 点 站"}),t("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),g("g",{strokeWidth:8,stroke:"#000",children:[t("path",{d:"M -160,68 h -160"}),t("path",{d:"M 160,68 h 160"})]})]})}),Be=h.memo(function(e){const s=h.useRef(null),[r,a]=h.useState({width:0,height:0,y:0});return h.useEffect(()=>{s.current&&a(s.current.getBBox())},[e.note[0],e.note[1]]),g("g",{className:"note-box",style:{["--x-percentage"]:e.note[2],["--y-percentage"]:e.note[3]},children:[e.note[4]&&t("rect",{height:r.height+4,width:r.width+4,x:-2,y:r.y-2,fill:"none",stroke:"black",strokeWidth:.5}),g("g",{ref:s,children:[t("g",{fontSize:16,letterSpacing:1.2,children:e.note[0].split(`
`).map((i,c)=>t("text",{className:"rmg-name__zh",y:c*18,children:i},c))}),t("g",{fontSize:10,letterSpacing:.33,transform:`translate(0,${18*e.note[0].split(`
`).length})`,children:e.note[1].split(`
`).map((i,c)=>{var o;return t("text",{className:"rmg-name__en",y:c*11,textLength:c<(((o=e.note[1].match(/\n/g))==null?void 0:o.length)||0)?r.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:i},c)})})]})]})},(n,e)=>n.note.toString()===e.note.toString()),we=h.memo(function(e){const{stnName:s,onUpdate:r}=e,a=h.useRef(null);return h.useEffect(()=>{a.current&&r&&r(a.current.getBBox())},[s.toString()]),g("g",{ref:a,children:[t("text",{className:"rmg-name__zh",fontSize:90,children:s[0]}),t("g",{fontSize:36,children:s[1].split("\\").map((i,c)=>t("text",{className:"rmg-name__en",dy:70+c*36,children:i},c))})]})},(n,e)=>n.stnName.toString()===e.stnName.toString()),ve=n=>{const{secondaryName:e,transform:s}=n,r=h.useRef(null),[a,i]=h.useState({x:0,width:0});return h.useEffect(()=>{r.current&&i(r.current.getBBox())},[e.toString()]),g("g",{transform:s,children:[g("g",{transform:"translate(0,4.5)",fontSize:36,children:[t("text",{textAnchor:"end",x:a.x-3,className:"rmg-name__zh",children:"("}),t("text",{textAnchor:"start",x:a.width+a.x+3,className:"rmg-name__zh",children:")"})]}),g("g",{ref:r,textAnchor:"middle",children:[t("text",{className:"rmg-name__zh",fontSize:26,children:e[0]}),t("text",{dy:22,className:"rmg-name__en",fontSize:14,children:e[1]})]})]})},$e=()=>{const n=f(d=>d.param.svg_height),e=f(d=>d.param.svgWidth),s=f(d=>d.param.direction),r=f(d=>d.param.info_panel_type),a=f(d=>d.param.line_num),i=f(d=>d.param.current_stn_idx),c=f(d=>d.param.stn_list[i]),[o,m]=h.useState({width:0}),l=c[s===S.left?"parents":"children"],p={name:`translate(${(s===S.left?1:-1)*e[w.RunIn]/4},45)`,next:`translate(${(s===S.left?1:-1)*e[w.RunIn]/10},45)`},u={nameGroup:{x:e.runin/2,y:.5*n-50-(c.name[1].split("\\").length-1)*18-(c.secondaryName?29:0)},secondaryName:{x:0,y:70+c.name[1].split("\\").length*36}};return g("g",{children:[g("g",{transform:r===$.gz2otis?p.name:"",children:[g("g",{textAnchor:"middle",transform:`translate(${u.nameGroup.x},${u.nameGroup.y})`,children:[t(we,{stnName:c.name,onUpdate:m}),c.secondaryName&&t(ve,{secondaryName:c.secondaryName,transform:`translate(${u.secondaryName.x},${u.secondaryName.y})`})]}),t(F,{lineNum:a,stnNum:c.num,style:{["--translate-x"]:`${(e[w.RunIn]+o.width)/2+55}px`,["--translate-y"]:`${.5*n-30-(c.name[1].split("\\").length-1)*18-(c.secondaryName?58/2:0)}px`,transform:"translate(var(--translate-x, 800px), var(--translate-y, 145px))"},large:!0})]}),t("g",{transform:r===$.gz2otis?p.next:"",children:!l||l.includes("linestart")||l.includes("lineend")?t(R,{}):l.length===1?t(Re,{nextId:l[0],nameBBox:o}):t(Te,{nextIds:l,nameBBox:o})})]})},Re=n=>{const{nextId:e,nameBBox:s}=n,r=f(N=>N.param.svgWidth),a=f(N=>N.param.direction),i=f(N=>N.param.stn_list[e]),{name:c,secondaryName:o}=i,[m,l]=h.useState({width:0}),p=h.useRef(null);h.useEffect(()=>{p.current&&l(p.current.getBBox())},[c.toString()]);const u=c[0].length,d=(r[w.RunIn]-s.width)/2;return g(R,{children:[g("g",{id:"big_next",children:[g("g",{textAnchor:"middle",style:{["--translate-x"]:a===S.left?"80px":u<=2?`${r[w.RunIn]-45-m.width-70}px`:`${r[w.RunIn]-45-m.width-35*1.5}px`},children:[t("text",{className:"rmg-name__zh",fontSize:35,children:"下站"}),t("text",{className:"rmg-name__en",fontSize:17,dy:30,children:"Next"})]}),g("g",{textAnchor:"start",ref:p,style:{["--translate-x"]:a===S.left?u<=2?`${115+35}px`:`${115+35/2}px`:`${r[w.RunIn]-45-m.width}px`},children:[t("text",{className:"rmg-name__zh",fontSize:35,children:c[0]}),t("g",{fontSize:17,children:c[1].split("\\").map((N,x)=>t("text",{className:"rmg-name__en",dy:30+x*17,children:N},x))})]}),o&&t("g",{textAnchor:"middle",style:{["--translate-x"]:a===S.left?u<=2?`${115+35}px`:`${115+35/2}px`:`${r[w.RunIn]-45-m.width}px`},children:t(Ee,{secName:o,transform:`translate(${m.width/2},${30+c[1].split("\\").length*17+5})`})})]}),t(D,{id:"arrow",style:{["--translate-x"]:a===S.left?`${(115+35*((u<=2?1:.5)+u)+d)/2-20}px`:`${(r[w.RunIn]-45-m.width-(u<=2?70+35:35*2.5)+d+n.nameBBox.width+55+18.5*1.4)/2+20}px`,["--rotate"]:a===S.left?"0deg":"180deg"}})]})},Ee=n=>{const{secName:e,...s}=n,r=h.useRef(null),[a,i]=h.useState({x:0,width:0});return h.useEffect(()=>{r.current&&i(r.current.getBBox())},[n.secName.toString()]),g("g",{...s,children:[g("g",{transform:"translate(0,2.5)",fontSize:25,children:[t("text",{textAnchor:"end",x:a.x-3,className:"rmg-name__zh",children:"("}),t("text",{textAnchor:"start",x:a.width+a.x+3,className:"rmg-name__zh",children:")"})]}),g("g",{ref:r,children:[t("text",{className:"rmg-name__zh",fontSize:18,children:e[0]}),t("text",{className:"rmg-name__en",fontSize:10,dy:15,children:e[1]})]})]})},Te=n=>{const{nextIds:e,nameBBox:s}=n,{routes:r}=f(x=>x.helper),a=f(x=>x.param.svgWidth),i=f(x=>x.param.direction),c=f(x=>x.param.stn_list),o=e.map(x=>c[x].name),[m,l]=h.useState({width:0}),p=h.useRef([]);h.useEffect(()=>{l(x=>({...x,width:0})),p.current.forEach(x=>{const v=x==null?void 0:x.getBBox();l(_=>v?_.width>v.width?_:v:_)})},[o.toString()]);const u=n.nextIds.map(x=>r.reduce((v,_)=>_.includes(x)?v.concat(_.filter(E=>!["linestart","lineend"].includes(E)).slice(i===S.left?0:-1)[0]):v,[])),d=Math.max(...o.map(x=>x[0].length)),N=(a[w.RunIn]-s.width)/2;return g(R,{children:[t("g",{id:"big_next_2",children:o.map((x,v)=>g(h.Fragment,{children:[g("g",{textAnchor:"middle",style:{["--translate-x"]:i===S.left?"72px":`${a[w.RunIn]-45-m.width-41}px`},children:[t("text",{className:"rmg-name__zh",children:"下站"}),t("text",{className:"rmg-name__en",y:22,children:"Next"})]}),g("g",{ref:_=>p.current[v]=_,textAnchor:"start",style:{["--translate-x"]:i===S.left?"113px":`${a[w.RunIn]-45-m.width}px`},children:[t("text",{className:"rmg-name__zh",children:x[0]}),x[1].split("\\").map((_,E)=>t("text",{className:"rmg-name__en",y:22+E*13,children:_},E)),t("text",{className:"rmg-name__zh",y:-35,children:u[v].map(_=>c[_].name[0]).join("/")+"方向"}),t("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20,children:"Towards "+u[v].map(_=>c[_].name[1]).join("/").replace("\\"," ")})]})]},v))}),t(D,{id:"arrow",style:{["--translate-x"]:i===S.left?`${(99+27*(1+d)+N)/2-20}px`:`${(a[w.RunIn]-45-m.width-41-27+N+n.nameBBox.width+55+18.5*1.4)/2+20}px`,["--rotate"]:i===S.left?"0deg":"180deg"}})]})};function ke(n){const{num:e,...s}=n;return g("g",{textAnchor:"middle",fill:"var(--rmg-theme-fg)",...s,children:[t("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),t("text",{className:"rmg-name__en",fontSize:38,dy:-9.5,children:e}),t("text",{className:"rmg-name__zh",fontSize:13,dy:10,children:"站台"}),t("text",{className:"rmg-name__en",fontSize:9,dy:21,children:"Platform"})]})}function be(n){const{canvasType:e}=n,{svgWidth:s,svg_height:r}=f(a=>a.param);return g("g",{id:"otis_frame",strokeWidth:3,stroke:"black",children:[t("line",{y2:r,transform:`translate(${s[e]/2},0)`}),t("line",{x2:s[e],transform:"translate(0,90)"})]})}const I=w.RunIn;function Ae(){const{canvasScale:n}=f(p=>p.app),{svgWidth:e,svg_height:s,direction:r,info_panel_type:a,platform_num:i,psd_num:c,theme:o}=f(p=>p.param),m=e[I],l={platform:`translate(${r===S.left?50:-50},45)`};return g(O,{type:I,svgWidth:m,svgHeight:s,canvasScale:n,theme:o,children:[t(Z,{variant:a,isShowLight:a!==$.gz2otis,isShowPSD:a!==$.gz2otis&&c}),t("g",{transform:a===$.gz2otis?l.platform:"",children:t(ke,{num:i,style:{["--translate-x"]:`${r===S.left?m-100:100}px`,["--translate-y"]:"calc(var(--rmg-svg-height) / 2 - 30px)",transform:"translate(var(--translate-x, 100px), var(--translate-y))"}})}),t($e,{}),a===$.gz2otis&&t(be,{canvasType:I})]})}const We={runin:t(Ae,{}),railmap:t(pe,{})};export{We as default};
