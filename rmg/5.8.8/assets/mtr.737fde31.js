var _=Object.defineProperty;var p=(t,n,i)=>n in t?_(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i;var c=(t,n,i)=>(p(t,typeof n!="symbol"?n+"":n,i),i);import{d as I}from"./share.1d797fcb.js";const O=(t,n,i)=>{const r=n[0];if(r.includes(t)){if(n.slice(1).find(e=>e.includes(t)))return 0;{const e=n.slice(1).find(a=>{const h=a[0]==="linestart",s=r.indexOf(t)<r.indexOf(a.slice(-1)[0]),R=a.slice(-1)[0]==="lineend",N=r.indexOf(t)>r.indexOf(a[0]);return h&&s||R&&N});return e?i[e[0]].children.indexOf(e[1])===1?-1:1:0}}else{const e=n.slice(1).find(a=>a.includes(t));return e?e[0]!=="linestart"&&e.slice(-1)[0]!=="lineend"?i[e[0]].children.indexOf(e[1])===1?1.2:-1.2:i[e[0]].children.indexOf(e[1])===1?1:-1:0}},S=t=>{const i=`a${6},${6},0,0,1,${6},${6}`,r=`a${6},${6},0,0,0,${6},${6}`,e=`a${6},${6},0,0,0,${6},-${6}`,a=`a${6},${6},0,0,1,${6},-${6}`;let h;const s=[];for(const R of t){if(!h)s.push("M"+R.join(","));else if(R[1]===h[1])s.push("H"+R[0]);else{const N=(R[0]+h[0])/2-(h[1]===0?0:12);s.push("H"+N),R[1]>h[1]?(s.push(i),s.push("V"+(R[1]-6)),s.push(r)):(s.push(e),s.push("V"+(R[1]+6)),s.push(a)),s.push("H"+R[0])}h=R}return s.join(" ").replace(/( H([\d.]+))+/g," H$2")},T=(t,n)=>{let i=0;const{transfer:r}=t[n],e=r.info.map(a=>a.length);return r.tick_direc==="l"&&(!e[1]&&e[0]>1&&(i+=.4),e[1]&&(e[0]!==1||e[1]!==2)&&(i+=.4)),e[0]===1&&e[1]===2&&t[n].parents[0]!=="linestart"&&t[n].children[0]!=="lineend"&&(i+=.8),t[n].parents.length===2&&(i+=.2),t[t[n].parents[0]].children.length===2&&(i+=.4),i},A=(t,n)=>{let i=0;const{transfer:r}=t[n],e=r.info.map(a=>a.length);return r.tick_direc==="r"&&(!e[1]&&e[0]>1&&(i+=.4),e[1]&&(e[0]!==1||e[1]!==2)&&(i+=.4)),e[0]===1&&e[1]===2&&t[n].parents[0]!=="linestart"&&t[n].children[0]!=="lineend"&&(i+=.8),t[n].children.length===2&&(i+=.2),t[t[n].children[0]].parents.length===2&&(i+=.4),i};class G extends I{constructor(){super(...arguments);c(this,"leftWideFactor",i=>T(this.stnList,i));c(this,"rightWideFactor",i=>A(this.stnList,i))}static drawLine(i,r,e,a,h,s,R,N,u=0){const o={main:[],pass:[],sidingMain:[],sidingPass:[]};return i.forEach(l=>{const U=l[0]!=="linestart"&&l.slice(-1)[0]!=="lineend";l=l.filter(d=>!["linestart","lineend"].includes(d));let f=l.filter(d=>r[d]>=0),g=l.filter(d=>r[d]<=0);f.length===1&&(g=l),f.filter(d=>g.indexOf(d)!==-1).length===0&&f.length&&(g[0]===l[0]?g.push(f[0]):f[0]===l[0]&&f[f.length-1]===l[l.length-1]&&g.length?(g=l,f=[]):g.unshift(f[f.length-1])),U?(o.sidingMain.push(S(f.map(d=>[h[d],s[d]]))),o.sidingPass.push(S(g.map(d=>[h[d],s[d]])))):(o.main.push(new this({stnList:e,criticalPath:N})._linePath(f,a,i,h,s,R,N,u)),o.pass.push(new this({stnList:e,criticalPath:N})._linePath(g,a,i,h,s,R,N,u)))}),o}}class $ extends G{static drawLine(n,i,r,e,a,h,s,R,N=0){const u={main:[],pass:[],sidingMain:[],sidingPass:[]};return n.forEach(o=>{o=o.filter(f=>!["linestart","lineend"].includes(f));let l=o.filter(f=>i[f]>=0),U=o.filter(f=>i[f]<=0);l.length===1&&(U=o),l.filter(f=>U.indexOf(f)!==-1).length===0&&l.length&&(U[0]===o[0]?U.push(l[0]):l[0]===o[0]&&l[l.length-1]===o[o.length-1]&&U.length?(U=o,l=[]):U.unshift(l[l.length-1])),u.main.push(new this({stnList:r,criticalPath:R})._linePath(l,e,n,a,h,s,R,N)),u.pass.push(new this({stnList:r,criticalPath:R})._linePath(U,e,n,a,h,s,R,N))}),u}}export{G as S,$ as a,O as g,T as l,A as r};
