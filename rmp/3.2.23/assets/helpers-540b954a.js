import{S as x,v as d}from"./index-431509bf.js";const p=()=>navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),S=t=>new Promise(e=>{const n=new FileReader;n.onloadend=()=>e(n.result),n.readAsDataURL(t)}),b=(t,e)=>t.find(n=>{const r=n.style;return r.getPropertyValue("font-family")===e.family&&r.getPropertyValue("unicode-range")===e.unicodeRange}),E=async(t,e,n,r)=>{var c,f;const s=Array.from(new Set(e.map(o=>[...t.querySelectorAll(o)]).flat().map(o=>o.innerHTML).join("").replace(/\s/g,""))).join(""),i=await document.fonts.load(n.join(", "),s),l=(f=(c=document.querySelector(`link#${r}`))==null?void 0:c.sheet)==null?void 0:f.cssRules;if(!l)return Promise.reject(new Error(`cssRules can not be found in link#${r}`));const u=Array.from(l).filter(o=>o instanceof CSSFontFaceRule),a=i.reduce((o,m)=>{const y=b(u,m);return y?o.find(M=>{const h=M.style,g=y.style;return h.getPropertyValue("font-family")===g.getPropertyValue("font-family")&&h.getPropertyValue("unicode-range")===g.getPropertyValue("unicode-range")})?o:o.concat(y):o},[]);return await Promise.all(a.map(async o=>{try{const m=await fetch(N(o)),y=await S(await m.blob());return o.cssText.replace(/src:[ \w('",\-:/.)]+;/g,`src: url('${y}'); `)}catch(m){return console.error(m),""}}))},N=t=>{var n;const e=t.style.getPropertyValue("src");return p()?e.replace(/^url\("(\S+)"\).*$/,"$1"):"/rmp//styles/"+((n=e.match(/^url\("([\S*]+)"\)/))==null?void 0:n[1])},R={[x.MTR]:{className:[".rmp-name__mtr__zh",".rmp-name__mtr__en"],cssFont:["80px GenYoMin TW","Vegur"],cssName:"fonts_mtr"},[d.BerlinSBahnLineBadge]:{className:[".rmp-name__berlin"],cssFont:["16px Roboto"],cssName:"fonts_berlin"},[d.BerlinUBahnLineBadge]:{className:[".rmp-name__berlin"],cssFont:["16px Roboto"],cssName:"fonts_berlin"}},w=t=>{const e=t.currentTarget.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;return{x:n,y:r}},B=(t,e)=>Math.round(t/e)*e,F=t=>{let[e,n,r,s]=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE];return t.forEachNode((i,l)=>{const u=document.getElementById(i);if(u){const a=_(u);e=Math.min(a.x,e),n=Math.min(a.y,n),r=Math.max(a.x+a.width,r),s=Math.max(a.y+a.height,s)}}),e-=50,n-=50,r+=100,s+=100,{xMin:e,yMin:n,xMax:r,yMax:s}},_=t=>{const e=t.getBBox(),n=t.ownerSVGElement,r=t.parentNode.getScreenCTM().inverse().multiply(t.getScreenCTM()),s=[n.createSVGPoint(),n.createSVGPoint(),n.createSVGPoint(),n.createSVGPoint()];s[0].x=e.x,s[0].y=e.y,s[1].x=e.x+e.width,s[1].y=e.y,s[2].x=e.x+e.width,s[2].y=e.y+e.height,s[3].x=e.x,s[3].y=e.y+e.height;let[i,l,u,a]=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE];return s.forEach(c=>{c=c.matrixTransform(r),i=Math.min(i,c.x),u=Math.max(u,c.x),l=Math.min(l,c.y),a=Math.max(a,c.y)}),e.x=i,e.width=u-i,e.y=l,e.height=a-l,e},P=navigator.platform.startsWith("Mac"),L=t=>{const e=Object.fromEntries([...Object.values(x),Object.values(d)].map(n=>[n,!1]));return t.forEachNode(n=>{const r=t.getNodeAttribute(n,"type");e[r]=!0}),e},U=t=>{for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t};export{R as F,w as a,F as c,L as f,E as g,P as i,B as r,U as s};
