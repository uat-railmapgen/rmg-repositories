var O=Object.defineProperty;var P=(i,e,n)=>e in i?O(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var u=(i,e,n)=>(P(i,typeof e!="symbol"?e+"":e,n),n);import{j as T,l as w}from"./vendor.f27047fc.js";import{S as W}from"./index.62dae999.js";function Y(i){const{type:e,svgWidth:n,svgHeight:s,canvasScale:t,theme:r,children:l}=i;return T("svg",{id:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",height:s*t,viewBox:`0 0 ${n} ${s}`,colorInterpolationFilters:"sRGB",style:{["--rmg-svg-width"]:n+"px",["--rmg-svg-height"]:s+"px",["--rmg-theme-colour"]:r[2],["--rmg-theme-fg"]:r[3]},children:[w("rect",{id:"canvas-bg",fill:"white",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}}),l,w("rect",{id:"canvas-border",fill:"none",strokeWidth:3,stroke:"none",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}})]})}const q=(i,e,n)=>Object.keys(i).reduce((s,t)=>({...s,[t]:i[t].children.reduce((r,l)=>({...r,[l]:1+e(i,l)+n(i,t)}),{})}),{}),o=(i,e,n)=>{if(i===e)return{len:0,nodes:[i]};const s=[],t=[];Object.keys(n[i]).forEach(l=>{const f=o(l,e,n);f.len<0||(s.push(n[i][l]+f.len),f.nodes.unshift(i),t.push(f.nodes))});const r=Math.max(...s);return{len:r,nodes:t[s.indexOf(r)]}},B=(i,e,n)=>{const s=o("linestart","lineend",e);if(s.nodes.includes(i))return o(s.nodes[1],i,e).len;{const t=n.filter(p=>p.includes(i))[0];let r=i;for(;!s.nodes.includes(r);)r=t[t.indexOf(r)-1];let l=i;for(;!s.nodes.includes(l);)l=t[t.indexOf(l)+1];const f=r==="linestart",S=l==="lineend",h=[];return!f&&!S?(h[0]=o(s.nodes[1],r,e).len,h[1]=o(r,l,e).len,h[2]=o(r,i,e).len,h[3]=o(i,l,e).len):f?(h[0]=0,h[1]=o(s.nodes[1],l,e).len,h[2]=o(t[1],i,e).len,h[3]=o(i,l,e).len):(h[0]=o(s.nodes[1],r,e).len,h[1]=o(r,s.nodes.slice(-2)[0],e).len,h[2]=o(r,i,e).len,h[3]=o(i,t.slice(-2)[0],e).len),h[0]+h[2]*h[1]/(h[2]+h[3])}},k=(i,e,n)=>{for(const s of n){const t=s.indexOf(i),r=s.indexOf(e);if(r!==-1&&r<t)return!0}return!1},E=(i,e,n)=>{for(const s of n){const t=s.indexOf(i),r=s.indexOf(e);if(t!==-1&&t<r)return!0}return!1},D=(i,e,n)=>(console.log("computing stations' states"),[...new Set([].concat(...e))].reduce((s,t)=>({...s,[t]:t===i?0:(n===W.right?E(i,t,e):k(i,t,e))?1:-1}),{}));class G{constructor(e){u(this,"yShares",{});u(this,"xShares",{});u(this,"namePoss",{});u(this,"stnList",{});u(this,"criticalPath",{});u(this,"leftWideFactor",e=>0);u(this,"rightWideFactor",e=>0);u(this,"pathTurnParams",e=>{const t=35-17.5*Math.sqrt(3),r=e-2*t,l=r*Math.sqrt(3);return{tr:35,dx_a:17.5,dy_a:t,dx_l:l,dy_l:r}});u(this,"pathTurnSE",e=>{const{tr:n,dx_a:s,dy_a:t,dx_l:r,dy_l:l}=this.pathTurnParams(e);return`a ${n},${n} 0 0,1 ${s},${t} l ${r},${l} a ${n},${n} 0 0,0 ${s},${t}`});u(this,"pathTurnNE",e=>{const{tr:n,dx_a:s,dy_a:t,dx_l:r,dy_l:l}=this.pathTurnParams(e);return`a ${n},${n} 0 0,0 ${s},${-t} l ${r},${-l} a ${n},${n} 0 0,1 ${s},${-t}`});this.stnList=e.stnList,this.criticalPath=e.criticalPath}getYShare(e,n){if(e in this.yShares)return this.yShares[e];if(["linestart","lineend"].includes(e)||this.stnList[e].parents.length>1||this.stnList[e].children.length>1)return this.yShares[e]=0,0;const s=this.stnList[e].parents[0];if(s)if(this.stnList[s].children.length===1){const t=this.getYShare(s);return this.yShares[e]=t,t}else{const t=this.stnList[s].children.indexOf(e)===0?1:-1;return this.yShares[e]=t,t}else return this.yShares[e]=0,0}static getYShares(e,n){console.log("computing y shares");const s=new this({stnList:e});return Object.keys(e).forEach(t=>{["linestart","lineend"].includes(t)||t in s.yShares||s.getYShare(t,n)}),s.yShares}_linePath(e,n,s,t,r,l,f,S){let[h,p,y]=[];const c=[],{dx_a:v,dx_l:_}=this.pathTurnParams(l),m=v+_/2,$=(n[1]-n[0])/f.len*2,x=((n[1]-n[0])/f.len-2*m)/2;return x+$<0&&console.warn(`SVG width too small! ${x+$}`),e.forEach(d=>{const g=t[d],a=r[d];if(!p&&p!==0){[h,y,p]=[d,g,a],e.length===1?c.push(`M ${g},${a}`):s[0].includes(d)?s[0].includes(e[1])?c.push(`M ${g},${a}`):(t[e[1]]>0&&c.push(`M ${g},${a+S}`),r[e[1]]<0&&c.push(`M ${g},${a-S}`)):c.push(`M ${g},${a}`);return}a>p?(c.push(a===0?`h ${g-y-$*this.leftWideFactor(d)-x-m*2}`:`h ${$*this.rightWideFactor(h)+x}`),c.push(this.pathTurnSE(l))):a<p&&(c.push(a===0?`h ${g-y-$*this.leftWideFactor(d)-x-m*2}`:`h ${$*this.rightWideFactor(h)+x}`),c.push(this.pathTurnNE(l))),c.push(`H ${g}`),[h,y,p]=[d,g,a]}),c.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}const J=(i,e)=>{i=i.filter(t=>!["linestart","lineend"].includes(t));let n=i.filter(t=>e[t]>=0),s=i.filter(t=>e[t]<=0);return n.length===1&&(s=i),n.filter(t=>s.indexOf(t)!==-1).length===0&&n.length&&(s[0]===i[0]?s.push(n[0]):n[0]===i[0]&&n[n.length-1]===i[i.length-1]&&s.length?(s=i,n=[]):s.unshift(n[n.length-1])),{main:n,pass:s}};export{Y as S,q as a,D as b,o as c,G as d,J as e,B as g};
