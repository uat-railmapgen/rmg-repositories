import{j as e}from"./chakra-0b0a1fde.js";import{r as x}from"./react-f83802c2.js";import{M as b,bf as R,u as f,D as U,S as p,bd as z,a8 as w}from"./index-b47975a7.js";import{a as V,c as S,b as X,d as Y,S as C}from"./share-fbd51136.js";function J(n){const{num:t,inStrip:a,...s}=n;return e.jsxs("g",{textAnchor:"middle",fill:a?b.black:"var(--rmg-theme-fg)",...s,children:[e.jsx("rect",{height:40,width:40,rx:4,x:-20,fill:a?"#fff":"var(--rmg-theme-colour)"}),e.jsx("text",{className:"rmg-name__en",fontSize:20,dy:12,children:t}),e.jsx("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"屏蔽门"}),e.jsx("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]})}const P=n=>{const t=(r=>{switch(r){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}})(n.variant),a=x.useMemo(()=>{switch(n.variant){case"gz1":return e.jsx("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return e.jsx("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return e.jsx("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return e.jsx("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return e.jsx("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return e.jsx("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return e.jsx("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return e.jsx("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return e.jsx(e.Fragment,{})}},[n.variant]),s=-20;return e.jsxs("g",{transform:"translate(0,".concat(n.variant==="gz4"?s:0,")"),children:[e.jsx("rect",{id:"strip_gz",style:{"--height":"".concat(t,"px")}}),e.jsx("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:n.isShowLight&&a}),n.isShowPSD!==!1&&e.jsx(q,{...n})]})},q=x.memo(function(t){const a=["gz28","gz2otis","gz6","gzgf"].includes(t.variant),s=(r=>{switch(r){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}})(t.variant);return e.jsx(J,{num:t.isShowPSD,inStrip:a,style:{"--psd-dy":s,transform:"translate(var(--translate-x), var(--translate-y))","--translate-x":"calc(var(--rmg-svg-width) / 2 + 80px)","--translate-y":"calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"}})},(n,t)=>n.variant===t.variant&&n.isShowPSD===t.isShowPSD),K=x.memo(function(t){const{passed:a,large:s}=t,r=s?"M0,12.95 V-12.95 H-12.95 a12.95,12.95 0 0,0 0,25.9 h25.9 a12.95,12.95 0 0,0 0,-25.9 H0":"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0";return e.jsx("path",{d:r,fill:"#fff",strokeWidth:2,stroke:a?"#aaa":"var(--rmg-theme-colour)"})},(n,t)=>n.passed===t.passed&&n.large===t.large),T=15;function F(n){const{lineNum:t,stnNum:a,passed:s,large:r,...i}=n,c=x.useRef(null),o=x.useRef(null),[m,l]=x.useState({width:0}),[u,d]=x.useState({width:0});x.useEffect(()=>{c.current&&l(c.current.getBBox()),o.current&&d(o.current.getBBox())},[t,a]);const h=T/Math.max(T,m.width),_=t.length===2&&a.length===2?h:T/Math.max(T,u.width);return e.jsxs("g",{...i,children:[e.jsx(K,{passed:s,large:r}),e.jsxs("g",{textAnchor:"middle",fontSize:13.5,transform:r?"scale(1.4)":"",fill:s?"#aaa":"#000",children:[e.jsx("g",{transform:"translate(-9.25,0)scale(".concat(h,")"),children:e.jsx("text",{ref:c,className:"rmg-name__zh",children:t})}),e.jsx("g",{transform:"translate(9.25,0)scale(".concat(_,")"),children:e.jsx("text",{ref:o,className:"rmg-name__zh",children:a})})]})]})}const Q=x.memo(function(t){const{lineName:a,commonPart:s}=t,r=x.useRef(null),[i,c]=x.useState({x:0,height:0,width:0});x.useEffect(()=>{r.current&&c(r.current.getBBox())},[a.toString()]);const o=$/Math.max($,i.width),m=(-i.x-i.width/2)*o,l=i.height*(1-o)*1.2/2;return e.jsx("g",{ref:r,transform:"translate(".concat(m,",").concat(l,")scale(").concat(o,")"),children:e.jsxs("text",{className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end",children:[s,e.jsx("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:a[0].slice(s.length).trim()}),e.jsx("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:a[1].slice(s.length).trim()})]})})},(n,t)=>n.lineName.toString()===t.lineName.toString());function ee(n){return e.jsx("rect",{x:-22.5,height:24,width:45,rx:4.5,...n})}const $=42,O=x.memo(function(t){const{lineName:a,foregroundColour:s,backgroundColour:r,passed:i}=t,[c,o]=te(a),m=x.useRef(null),l=x.useRef(null),[u,d]=x.useState({width:0}),[h,_]=x.useState({width:0});x.useEffect(()=>{m.current&&d(m.current.getBBox()),l.current&&_(l.current.getBBox())},[a.toString()]);const g=$/Math.max($,u.width),B=$/Math.max($,h.width),j={nameZh:{y:7.3+13.5*(1-g)*g/2},nameEn:{y:19.5-9*(1-B)*B/2}};return e.jsxs("g",{textAnchor:"middle",fill:i?b.white:s,children:[e.jsx(ee,{fill:i?"#aaa":r}),c===2?e.jsx(Q,{lineName:a,commonPart:o}):e.jsxs(e.Fragment,{children:[e.jsx("text",{ref:m,className:"rmg-name__zh",fontSize:12,transform:"translate(0,".concat(j.nameZh.y,")scale(").concat(g,")"),children:c===1?e.jsxs(e.Fragment,{children:[e.jsx("tspan",{fontSize:16,dy:.7,className:"rmg-name__zh",children:o}),e.jsx("tspan",{dy:-.7,className:"rmg-name__zh",children:a[0].slice(o.length)})]}):a[0]}),e.jsx("text",{ref:l,className:"rmg-name__en",fontSize:8,transform:"translate(0,".concat(j.nameEn.y,")scale(").concat(B,")"),children:a[1]})]})]})},(n,t)=>n.lineName.toString()===t.lineName.toString()&&n.foregroundColour===t.foregroundColour&&n.backgroundColour===t.backgroundColour&&n.passed===t.passed),te=n=>{const t=n[0].match(/^(\d+)\D+$/);if(t)return[1,t[1]];const a=n.map(s=>s.match(/^(\w+).+$/));return a[0]&&a[1]&&a[0][1]===a[1][1]?[2,a[0][1]]:[3,""]},ne=x.memo(function(t){const{stnName:a,onUpdate:s}=t,r=x.useRef(null);return x.useEffect(()=>{r.current&&s&&s(r.current.getBBox())},[a.toString()]),e.jsxs("g",{ref:r,children:[e.jsx("text",{className:"rmg-name__zh",fontSize:18,children:a[0]}),e.jsx("g",{fontSize:10.5,children:a[1].split("\\").map((i,c)=>e.jsx("text",{className:"rmg-name__en",dy:16+c*11,children:i},c))})]})},(n,t)=>n.stnName.toString()===t.stnName.toString());function se(n){const{stnName:t,onUpdate:a,passed:s,...r}=n,i=x.useRef(null),[c,o]=x.useState({x:0,width:0});return x.useEffect(()=>{if(i.current){const m=i.current.getBBox();o(m),a&&a(m)}},[t.toString()]),!t[0]&&!t[1]?e.jsx(e.Fragment,{}):e.jsxs("g",{fill:s?"#aaa":"#000",...r,children:[e.jsxs("g",{transform:"translate(0,3)",fontSize:18,children:[e.jsx("text",{textAnchor:"end",x:c.x-3,className:"rmg-name__zh",children:"("}),e.jsx("text",{textAnchor:"start",x:c.width+c.x+3,className:"rmg-name__zh",children:")"})]}),e.jsxs("g",{ref:i,textAnchor:"middle",children:[e.jsx("text",{className:"rmg-name__zh",fontSize:13,children:t[0]}),e.jsx("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:t[1]})]})]})}function re(n){const{passed:t,...a}=n;return e.jsxs("g",{textAnchor:"middle",fill:t?"#aaa":"var(--rmg-theme-colour)",...a,children:[e.jsx("text",{className:"rmg-name__zh",fontSize:13,children:"快车停靠站"}),e.jsx("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]})}function ae(n){const{primaryName:t,secondaryName:a,stationState:s,flipped:r,express:i}=n,[c,o]=x.useState({width:0}),[m,l]=x.useState({x:0,width:-20}),u=_=>{switch(_){case R.PASSED:return"#aaa";case R.CURRENT:return"#f00";case R.FUTURE:return"#000"}},d=t[1].split("\\").length,h={g:{x:0,y:r?17.5:-20-d*14*Math.cos(-45)},StationSecondaryName:{x:(c.width+m.width/2+10)*(r?-1:1),y:2+5*(d-1)},ExpressTag:{x:(c.width+m.width+20+35)*(r?-1:1),y:2+5*(d-1)}};return e.jsxs("g",{textAnchor:r?"end":"start",fill:u(s),transform:"translate(".concat(h.g.x,",").concat(h.g.y,")rotate(-45)"),children:[e.jsx(ne,{stnName:t,onUpdate:o}),a&&e.jsx(se,{stnName:a,onUpdate:l,passed:s===R.PASSED,transform:"translate(".concat(h.StationSecondaryName.x,",").concat(h.StationSecondaryName.y,")")}),i&&e.jsx(re,{passed:s===R.PASSED,transform:"translate(".concat(h.ExpressTag.x,",").concat(h.ExpressTag.y,")")})]})}function ie(n){const{stnId:t,stnState:a,stnY:s}=n,r=f(h=>h.param.theme),i=f(h=>h.param.line_name),c=f(h=>h.param.line_num),o=f(h=>h.param.stn_list[t]),m=o.parents.length===2||o.children.length===2,l=s>0||o.parents.indexOf(o.branch.left[1]||"")===1||o.children.indexOf(o.branch.right[1]||"")===1?180:0,u=o.name[1].split("\\").length,d=m?l===180?16+(u-1)*12*Math.cos(-45):-9:l===180?-6:(25+(u-1)*15)*Math.cos(-45);return e.jsxs(e.Fragment,{children:[e.jsx(ce,{intInfos:m?[{theme:[r[0],r[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)"],name:i},...o.transfer.groups[0].lines]:o.transfer.groups[0].lines,stnState:a,tickRotation:l}),e.jsx(F,{lineNum:c,stnNum:o.num,passed:a===-1}),e.jsx("g",{transform:"translate(".concat(-d,",0)"),children:e.jsx(ae,{primaryName:o.name,secondaryName:o.secondaryName||void 0,stationState:a,flipped:l===180,express:o.services.includes(U.express)})})]})}const ce=n=>e.jsxs(e.Fragment,{children:[e.jsx(oe,{strokeWidth:4,...n}),e.jsx(le,{transform:"translate(0,".concat(n.tickRotation===180?-47:23,")"),...n})]}),oe=n=>{const{intInfos:t,stnState:a,tickRotation:s,...r}=n;return e.jsx("g",{...r,children:t.map((i,c)=>{var o;return e.jsx("use",{xlinkHref:"#inttick",stroke:a===-1?"#aaa":(o=i.theme)==null?void 0:o[2],transform:"translate(".concat(-2*(t.length-1)+4*c,",0)rotate(").concat(s===180?180:0,")")},c)})})},le=n=>{const{intInfos:t,tickRotation:a,stnState:s,...r}=n;return e.jsx("g",{...r,children:t.map((i,c)=>{var o,m,l,u;return e.jsx("g",{transform:"translate(0,".concat(c*28*(a===180?-1:1),")"),children:e.jsx(O,{lineName:i.name,foregroundColour:(m=(o=i.theme)==null?void 0:o[3])!=null?m:b.white,backgroundColour:(u=(l=i.theme)==null?void 0:l[2])!=null?u:"#aaaaaa",passed:s===-1})},c)})})},H=(n,t)=>n[t].parents.length===2||n[t].children.length===2?.25:0,me=(n,t,a)=>{const s=S("linestart","lineend",t);if(s.nodes.includes(n))return S(s.nodes[1],n,t).len;{const r=a.filter(l=>l.includes(n))[0];let i=n;for(;!s.nodes.includes(i);)i=r[r.indexOf(i)-1];let c=n;for(;!s.nodes.includes(c);)c=r[r.indexOf(c)+1];const o=i==="linestart",m=c==="lineend";if(r.toString()===a[0].toString()){const l=[];return!o&&!m?(l[0]=S(s.nodes[1],i,t).len,l[1]=S(i,c,t).len,l[2]=S(i,n,t).len,l[3]=S(n,c,t).len):o?(l[0]=0,l[1]=S(s.nodes[1],c,t).len,l[2]=S(r[1],n,t).len,l[3]=S(n,c,t).len):(l[0]=S(s.nodes[1],i,t).len,l[1]=S(i,s.nodes.slice(-2)[0],t).len,l[2]=S(i,n,t).len,l[3]=S(n,r.slice(-2)[0],t).len),l[0]+l[2]*l[1]/(l[2]+l[3])}else if(!o&&!m){const l=[];return l[0]=S(s.nodes[1],i,t).len,l[1]=S(i,c,t).len,l[2]=S(i,n,t).len,l[3]=S(n,c,t).len,l[0]+l[2]*l[1]/(l[2]+l[3])}else return o?S(s.nodes[1],c,t).len-S(n,c,t).len:S(s.nodes[1],i,t).len+S(i,n,t).len}},xe=()=>{const{branches:n,routes:t,depsStr:a}=f(y=>y.helper),{svgWidth:s,svg_height:r,y_pc:i,padding:c,branchSpacingPct:o,direction:m,line_name:l,current_stn_idx:u,stn_list:d}=f(y=>y.param),h=V(d,H,H),_=x.useMemo(()=>(console.log("computing x shares"),Object.keys(d).reduce((y,N)=>({...y,[N]:me(N,h,n)}),{})),[n.toString(),JSON.stringify(h)]),g=S("linestart","lineend",h),B=S(g.nodes[1],g.nodes.slice(-2)[0],h),j=m===p.right?[s[z.RailMap]*c/100+65,s[z.RailMap]*(1-c/100)-20]:[s[z.RailMap]*c/100,s[z.RailMap]*(1-c/100)-65],v=Object.keys(_).reduce((y,N)=>({...y,[N]:j[0]+_[N]/B.len*(j[1]-j[0])}),{}),I=x.useMemo(()=>(console.log("computing y shares"),Object.keys(d).reduce((y,N)=>{if(n[0].includes(N))return{...y,[N]:0};{const E=n.slice(1).filter(Z=>Z.includes(N))[0];return{...y,[N]:d[E[0]].children.indexOf(E[1])?-2:2}}},{})),[a]),D=Object.keys(I).reduce((y,N)=>({...y,[N]:-I[N]*o*r/200}),{}),W=x.useMemo(()=>X(u,t,m),[u,m,t.toString()]),M=n.map(y=>Y(y,W)).reduce((y,N)=>(y.main.push(N.main),y.pass.push(N.pass),y),{main:[],pass:[]}),G=Object.keys(M).reduce((y,N)=>({...y,[N]:M[N].map(E=>de(E,v,D))}),{});return e.jsxs("g",{id:"main",style:{"--y-percentage":i,transform:"translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"},children:[e.jsx(he,{paths:G}),e.jsx(ge,{xs:v,ys:D,stnStates:W}),e.jsx("g",{id:"line_name",style:{"--translate-x":m===p.right?"".concat(j[0]-65,"px"):"".concat(j[1]+65,"px")},children:e.jsx(O,{lineName:l,foregroundColour:"var(--rmg-theme-fg)",backgroundColour:"var(--rmg-theme-colour)"})})]})},he=x.memo(function(t){return e.jsxs("g",{fill:"none",strokeWidth:4,children:[e.jsx("g",{stroke:"#aaa",strokeDasharray:4,children:t.paths.pass.map((a,s)=>e.jsx("path",{d:a},s))}),e.jsx("g",{stroke:"var(--rmg-theme-colour)",children:t.paths.main.map((a,s)=>e.jsx("path",{d:a},s))})]})},(n,t)=>JSON.stringify(n.paths)===JSON.stringify(t.paths)),de=(n,t,a)=>{let s;const r=[];return n.forEach(i=>{const c=t[i],o=a[i];if(!s&&s!==0){s=o,r.push("M ".concat(c,",").concat(o));return}o===0?(o<s&&r.push("H ".concat(c-40),"a 40,40 0 0,0 40,-40","V ".concat(o)),o>s&&r.push("H ".concat(c-40),"a 40,40 0 0,1 40,40","V ".concat(o))):(o<s&&r.push("V ".concat(o+40),"a 40,40 0 0,1 40,-40","H ".concat(c)),o>s&&r.push("V ".concat(o-40),"a 40,40 0 0,0 40,40","H ".concat(c))),r.push("H ".concat(c)),s=o}),r.join(" ").replace(/( H ([\d.]+))+/g," H $2")},ge=n=>{const{xs:t,ys:a,stnStates:s}=n,r=f(i=>i.param.stn_list);return e.jsx("g",{id:"stn_icons",children:Object.keys(r).filter(i=>!["linestart","lineend"].includes(i)).map(i=>e.jsx("g",{style:{transform:"translate(".concat(t[i],"px,").concat(a[i],"px)")},children:e.jsx(ie,{stnId:i,stnState:s[i],stnY:a[i]})},i))})};function A(n){return e.jsx("path",{d:"M60,60 L0,0 L60,-60 H90 L40,-10 H150 V10 H40 L90,60z",fill:"black",...n})}const L=z.RailMap,ue=()=>{const{canvasScale:n}=f(h=>h.app),{svgWidth:t,svg_height:a,direction:s,psd_num:r,info_panel_type:i,notesGZMTR:c,current_stn_idx:o,stn_list:m,theme:l}=f(h=>h.param),u=t[L],d=m[o];return e.jsxs(C,{type:L,svgWidth:u,svgHeight:a,canvasScale:n,theme:l,children:[e.jsx(fe,{}),e.jsx(P,{variant:i,isShowLight:i===w.gz2otis,isShowPSD:i===w.gz2otis&&r}),s===p.left&&d.parents.includes("linestart")||s===p.right&&d.children.includes("lineend")?e.jsx(_e,{}):e.jsxs(e.Fragment,{children:[e.jsx(xe,{}),e.jsx(pe,{}),c.map((h,_)=>e.jsx(ye,{note:h},_))]}),i===w.gz2otis&&e.jsx("line",{x2:u,transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},fe=x.memo(function(){return e.jsx("defs",{children:e.jsx("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"})})}),pe=()=>{const{routes:n}=f(o=>o.helper),{direction:t,direction_gz_x:a,direction_gz_y:s,current_stn_idx:r}=f(o=>o.param),i=x.useMemo(()=>[...new Set(n.reduce((o,m)=>m.includes(r)?o.concat(m.filter(l=>!["linestart","lineend"].includes(l)).slice(t===p.left?0:-1)[0]):o,[]).filter(o=>o!==r))],[r,t,n.toString()]),c={textAnchor:t===p.left?"start":"end",transform:"translate(".concat(t===p.left?65:-65,",-5)"),destIds:i};return e.jsxs("g",{id:"direction_gz",style:{"--x-percentage":a,"--y-percentage":s},children:[e.jsx(A,{transform:"scale(0.35)rotate(".concat(t===p.left?0:180,")")}),i.length!==2?e.jsx(je,{...c}):e.jsx(Se,{...c})]})},je=n=>{const{destIds:t,...a}=n,s=f(r=>r.param.stn_list);return e.jsxs("g",{...a,children:[e.jsx("text",{className:"rmg-name__zh",fontSize:28,children:t.map(r=>s[r].name[0]).join("/")+"方向"}),e.jsx("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+t.map(r=>s[r].name[1].replace("\\"," ")).join("/")})]})},Se=n=>{const{destIds:t,...a}=n,s=f(m=>m.param.direction),r=f(m=>m.param.stn_list),i=t.map(m=>r[m].name[0].length),c=Math.min(...i),o=c>1&&i[0]!==i[1]?Math.abs(i[0]-i[1])/(c-1):0;return e.jsxs("g",{...a,children:[t.map((m,l)=>e.jsxs(x.Fragment,{children:[e.jsx("text",{className:"rmg-name__zh",fontSize:25,x:s===p.left?0:-75,y:-21+42*l,letterSpacing:i[l]>i[1-l]?"0em":"".concat(o,"em"),children:r[m].name[0]}),e.jsx("text",{className:"rmg-name__en",fontSize:11.5,x:s===p.left?0:-75,y:-1+42*l,children:"Towards "+r[m].name[1].replace("\\"," ")})]},m)),e.jsx("text",{className:"rmg-name__zh",fontSize:28,x:s===p.left?25*(Math.max(...i)+1):0,y:5,children:"方向"})]})},_e=x.memo(function(){return e.jsxs("g",{id:"terminus_gz",textAnchor:"middle",children:[e.jsx("text",{className:"rmg-name__zh",fontSize:90,children:"终 点 站"}),e.jsx("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),e.jsxs("g",{strokeWidth:8,stroke:"#000",children:[e.jsx("path",{d:"M -160,68 h -160"}),e.jsx("path",{d:"M 160,68 h 160"})]})]})}),ye=x.memo(function(t){const a=x.useRef(null),[s,r]=x.useState({width:0,height:0,y:0});return x.useEffect(()=>{a.current&&r(a.current.getBBox())},[t.note[0],t.note[1]]),e.jsxs("g",{className:"note-box",style:{"--x-percentage":t.note[2],"--y-percentage":t.note[3]},children:[t.note[4]&&e.jsx("rect",{height:s.height+4,width:s.width+4,x:-2,y:s.y-2,fill:"none",stroke:"black",strokeWidth:.5}),e.jsxs("g",{ref:a,children:[e.jsx("g",{fontSize:16,letterSpacing:1.2,children:t.note[0].split("\n").map((i,c)=>e.jsx("text",{className:"rmg-name__zh",y:c*18,children:i},c))}),e.jsx("g",{fontSize:10,letterSpacing:.33,transform:"translate(0,".concat(18*t.note[0].split("\n").length,")"),children:t.note[1].split("\n").map((i,c)=>{var o;return e.jsx("text",{className:"rmg-name__en",y:c*11,textLength:c<(((o=t.note[1].match(/\n/g))==null?void 0:o.length)||0)?s.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:i},c)})})]})]})},(n,t)=>n.note.toString()===t.note.toString()),Ne=x.memo(function(t){const{stnName:a,onUpdate:s}=t,r=x.useRef(null);return x.useEffect(()=>{r.current&&s&&s(r.current.getBBox())},[a.toString()]),e.jsxs("g",{ref:r,children:[e.jsx("text",{className:"rmg-name__zh",fontSize:90,children:a[0]}),e.jsx("g",{fontSize:36,children:a[1].split("\\").map((i,c)=>e.jsx("text",{className:"rmg-name__en",dy:70+c*36,children:i},c))})]})},(n,t)=>n.stnName.toString()===t.stnName.toString()),ze=n=>{const{secondaryName:t,transform:a}=n,s=x.useRef(null),[r,i]=x.useState({x:0,width:0});return x.useEffect(()=>{s.current&&i(s.current.getBBox())},[t.toString()]),e.jsxs("g",{transform:a,children:[e.jsxs("g",{transform:"translate(0,4.5)",fontSize:36,children:[e.jsx("text",{textAnchor:"end",x:r.x-3,className:"rmg-name__zh",children:"("}),e.jsx("text",{textAnchor:"start",x:r.width+r.x+3,className:"rmg-name__zh",children:")"})]}),e.jsxs("g",{ref:s,textAnchor:"middle",children:[e.jsx("text",{className:"rmg-name__zh",fontSize:26,children:t[0]}),e.jsx("text",{dy:22,className:"rmg-name__en",fontSize:14,children:t[1]})]})]})},Be=()=>{const n=f(h=>h.param.svg_height),t=f(h=>h.param.svgWidth),a=f(h=>h.param.direction),s=f(h=>h.param.info_panel_type),r=f(h=>h.param.line_num),i=f(h=>h.param.current_stn_idx),c=f(h=>h.param.stn_list[i]),[o,m]=x.useState({width:0}),l=c[a===p.left?"parents":"children"],u={name:"translate(".concat((a===p.left?1:-1)*t[z.RunIn]/4,",45)"),next:"translate(".concat((a===p.left?1:-1)*t[z.RunIn]/10,",45)")},d={nameGroup:{x:t.runin/2,y:.5*n-50-(c.name[1].split("\\").length-1)*18-(c.secondaryName?29:0)},secondaryName:{x:0,y:70+c.name[1].split("\\").length*36}};return e.jsxs("g",{children:[e.jsxs("g",{transform:s===w.gz2otis?u.name:"",children:[e.jsxs("g",{textAnchor:"middle",transform:"translate(".concat(d.nameGroup.x,",").concat(d.nameGroup.y,")"),children:[e.jsx(Ne,{stnName:c.name,onUpdate:m}),c.secondaryName&&e.jsx(ze,{secondaryName:c.secondaryName,transform:"translate(".concat(d.secondaryName.x,",").concat(d.secondaryName.y,")")})]}),e.jsx(F,{lineNum:r,stnNum:c.num,style:{"--translate-x":"".concat((t[z.RunIn]+o.width)/2+55,"px"),"--translate-y":"".concat(.5*n-30-(c.name[1].split("\\").length-1)*18-(c.secondaryName?58/2:0),"px"),transform:"translate(var(--translate-x, 800px), var(--translate-y, 145px))"},large:!0})]}),e.jsx("g",{transform:s===w.gz2otis?u.next:"",children:!l||l.includes("linestart")||l.includes("lineend")?e.jsx(e.Fragment,{}):l.length===1?e.jsx(we,{nextId:l[0],nameBBox:o}):e.jsx($e,{nextIds:l,nameBBox:o})})]})},we=n=>{const{nextId:t,nameBBox:a}=n,s=f(_=>_.param.svgWidth),r=f(_=>_.param.direction),i=f(_=>_.param.stn_list[t]),{name:c,secondaryName:o}=i,[m,l]=x.useState({width:0}),u=x.useRef(null);x.useEffect(()=>{u.current&&l(u.current.getBBox())},[c.toString()]);const d=c[0].length,h=(s[z.RunIn]-a.width)/2;return e.jsxs(e.Fragment,{children:[e.jsxs("g",{id:"big_next",children:[e.jsxs("g",{textAnchor:"middle",style:{"--translate-x":r===p.left?"80px":d<=2?"".concat(s[z.RunIn]-45-m.width-70,"px"):"".concat(s[z.RunIn]-45-m.width-35*1.5,"px")},children:[e.jsx("text",{className:"rmg-name__zh",fontSize:35,children:"下站"}),e.jsx("text",{className:"rmg-name__en",fontSize:17,dy:30,children:"Next"})]}),e.jsxs("g",{textAnchor:"start",ref:u,style:{"--translate-x":r===p.left?d<=2?"".concat(115+35,"px"):"".concat(115+35/2,"px"):"".concat(s[z.RunIn]-45-m.width,"px")},children:[e.jsx("text",{className:"rmg-name__zh",fontSize:35,children:c[0]}),e.jsx("g",{fontSize:17,children:c[1].split("\\").map((_,g)=>e.jsx("text",{className:"rmg-name__en",dy:30+g*17,children:_},g))})]}),o&&e.jsx("g",{textAnchor:"middle",style:{"--translate-x":r===p.left?d<=2?"".concat(115+35,"px"):"".concat(115+35/2,"px"):"".concat(s[z.RunIn]-45-m.width,"px")},children:e.jsx(ve,{secName:o,transform:"translate(".concat(m.width/2,",").concat(30+c[1].split("\\").length*17+5,")")})})]}),e.jsx(A,{id:"arrow",style:{"--translate-x":r===p.left?"".concat((115+35*((d<=2?1:.5)+d)+h)/2-20,"px"):"".concat((s[z.RunIn]-45-m.width-(d<=2?70+35:35*2.5)+h+n.nameBBox.width+55+18.5*1.4)/2+20,"px"),"--rotate":r===p.left?"0deg":"180deg"}})]})},ve=n=>{const{secName:t,...a}=n,s=x.useRef(null),[r,i]=x.useState({x:0,width:0});return x.useEffect(()=>{s.current&&i(s.current.getBBox())},[n.secName.toString()]),e.jsxs("g",{...a,children:[e.jsxs("g",{transform:"translate(0,2.5)",fontSize:25,children:[e.jsx("text",{textAnchor:"end",x:r.x-3,className:"rmg-name__zh",children:"("}),e.jsx("text",{textAnchor:"start",x:r.width+r.x+3,className:"rmg-name__zh",children:")"})]}),e.jsxs("g",{ref:s,children:[e.jsx("text",{className:"rmg-name__zh",fontSize:18,children:t[0]}),e.jsx("text",{className:"rmg-name__en",fontSize:10,dy:15,children:t[1]})]})]})},$e=n=>{const{nextIds:t,nameBBox:a}=n,{routes:s}=f(g=>g.helper),r=f(g=>g.param.svgWidth),i=f(g=>g.param.direction),c=f(g=>g.param.stn_list),o=t.map(g=>c[g].name),[m,l]=x.useState({width:0}),u=x.useRef([]);x.useEffect(()=>{l(g=>({...g,width:0})),u.current.forEach(g=>{const B=g==null?void 0:g.getBBox();l(j=>B?j.width>B.width?j:B:j)})},[o.toString()]);const d=n.nextIds.map(g=>s.reduce((B,j)=>j.includes(g)?B.concat(j.filter(v=>!["linestart","lineend"].includes(v)).slice(i===p.left?0:-1)[0]):B,[])),h=Math.max(...o.map(g=>g[0].length)),_=(r[z.RunIn]-a.width)/2;return e.jsxs(e.Fragment,{children:[e.jsx("g",{id:"big_next_2",children:o.map((g,B)=>e.jsxs(x.Fragment,{children:[e.jsxs("g",{textAnchor:"middle",style:{"--translate-x":i===p.left?"72px":"".concat(r[z.RunIn]-45-m.width-41,"px")},children:[e.jsx("text",{className:"rmg-name__zh",children:"下站"}),e.jsx("text",{className:"rmg-name__en",y:22,children:"Next"})]}),e.jsxs("g",{ref:j=>u.current[B]=j,textAnchor:"start",style:{"--translate-x":i===p.left?"113px":"".concat(r[z.RunIn]-45-m.width,"px")},children:[e.jsx("text",{className:"rmg-name__zh",children:g[0]}),g[1].split("\\").map((j,v)=>e.jsx("text",{className:"rmg-name__en",y:22+v*13,children:j},v)),e.jsx("text",{className:"rmg-name__zh",y:-35,children:d[B].map(j=>c[j].name[0]).join("/")+"方向"}),e.jsx("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20,children:"Towards "+d[B].map(j=>c[j].name[1]).join("/").replace("\\"," ")})]})]},B))}),e.jsx(A,{id:"arrow",style:{"--translate-x":i===p.left?"".concat((99+27*(1+h)+_)/2-20,"px"):"".concat((r[z.RunIn]-45-m.width-41-27+_+n.nameBBox.width+55+18.5*1.4)/2+20,"px"),"--rotate":i===p.left?"0deg":"180deg"}})]})};function Re(n){const{num:t,...a}=n;return e.jsxs("g",{textAnchor:"middle",fill:"var(--rmg-theme-fg)",...a,children:[e.jsx("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),e.jsx("text",{className:"rmg-name__en",fontSize:38,dy:-9.5,children:t}),e.jsx("text",{className:"rmg-name__zh",fontSize:13,dy:10,children:"站台"}),e.jsx("text",{className:"rmg-name__en",fontSize:9,dy:21,children:"Platform"})]})}function Ee(n){const{canvasType:t}=n,{svgWidth:a,svg_height:s}=f(r=>r.param);return e.jsxs("g",{id:"otis_frame",strokeWidth:3,stroke:"black",children:[e.jsx("line",{y2:s,transform:"translate(".concat(a[t]/2,",0)")}),e.jsx("line",{x2:a[t],transform:"translate(0,90)"})]})}const k=z.RunIn;function Te(){const{canvasScale:n}=f(u=>u.app),{svgWidth:t,svg_height:a,direction:s,info_panel_type:r,platform_num:i,psd_num:c,theme:o}=f(u=>u.param),m=t[k],l={platform:"translate(".concat(s===p.left?50:-50,",45)")};return e.jsxs(C,{type:k,svgWidth:m,svgHeight:a,canvasScale:n,theme:o,children:[e.jsx(P,{variant:r,isShowLight:r!==w.gz2otis,isShowPSD:r!==w.gz2otis&&c}),e.jsx("g",{transform:r===w.gz2otis?l.platform:"",children:e.jsx(Re,{num:i,style:{"--translate-x":"".concat(s===p.left?m-100:100,"px"),"--translate-y":"calc(var(--rmg-svg-height) / 2 - 30px)",transform:"translate(var(--translate-x, 100px), var(--translate-y))"}})}),e.jsx(Be,{}),r===w.gz2otis&&e.jsx(Ee,{canvasType:k})]})}const De={runin:e.jsx(Te,{}),railmap:e.jsx(ue,{})};export{De as default};
