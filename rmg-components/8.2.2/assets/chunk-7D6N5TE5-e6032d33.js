import{c as ve}from"./chunk-XRMX4GAI-f266e033.js";import{u as B}from"./index-3e7aa64e.js";import{u as I,a as ye}from"./index-82c2af04.js";import{m as Z}from"./index-17e33fe9.js";import{e as o,h as l}from"./chunk-ZJJGQIVY-4bd0a974.js";import{r as a}from"./index-76fb7be0.js";var pe={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};const he=()=>typeof document<"u";let $=!1,w=null,v=!1,R=!1;const K=new Set;function x(e,u){K.forEach(n=>n(e,u))}const ke=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function we(e){return!(e.metaKey||!ke&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function ee(e){v=!0,we(e)&&(w="keyboard",x("keyboard",e))}function p(e){if(w="pointer",e.type==="mousedown"||e.type==="pointerdown"){v=!0;const u=e.composedPath?e.composedPath()[0]:e.target;let n=!1;try{n=u.matches(":focus-visible")}catch{}if(n)return;x("pointer",e)}}function Ee(e){return e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType}function Ce(e){Ee(e)&&(v=!0,w="virtual")}function ge(e){e.target===window||e.target===document||(!v&&!R&&(w="virtual",x("virtual",e)),v=!1,R=!1)}function Le(){v=!1,R=!0}function te(){return w!=="pointer"}function Pe(){if(!he()||$)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){v=!0,e.apply(this,n)},document.addEventListener("keydown",ee,!0),document.addEventListener("keyup",ee,!0),document.addEventListener("click",Ce,!0),window.addEventListener("focus",ge,!0),window.addEventListener("blur",Le,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",p,!0),document.addEventListener("pointermove",p,!0),document.addEventListener("pointerup",p,!0)):(document.addEventListener("mousedown",p,!0),document.addEventListener("mousemove",p,!0),document.addEventListener("mouseup",p,!0)),$=!0}function Se(e){Pe(),e(te());const u=()=>e(te());return K.add(u),()=>{K.delete(u)}}function Fe(e,u=[]){const n=Object.assign({},e);for(const s of u)s in n&&delete n[s];return n}function He(e={}){const u=ve(e),{isDisabled:n,isReadOnly:s,isRequired:P,isInvalid:d,id:A,onBlur:ne,onFocus:oe,"aria-describedby":H}=u,{defaultChecked:U,isChecked:V,isFocusable:ae,onChange:re,isIndeterminate:m,name:q,value:O,tabIndex:T=void 0,"aria-label":W,"aria-labelledby":_,"aria-invalid":S,...se}=e,F=Fe(se,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),D=I(re),j=I(ne),z=I(oe),[E,ie]=a.useState(!1),[b,C]=a.useState(!1),[h,G]=a.useState(!1),[k,y]=a.useState(!1);a.useEffect(()=>Se(ie),[]);const c=a.useRef(null),[N,ue]=a.useState(!0),[de,g]=a.useState(!!U),M=V!==void 0,r=M?V:de,J=a.useCallback(t=>{if(s||n){t.preventDefault();return}M||g(r?t.target.checked:m?!0:t.target.checked),D==null||D(t)},[s,n,r,M,m,D]);B(()=>{c.current&&(c.current.indeterminate=!!m)},[m]),ye(()=>{n&&C(!1)},[n,C]),B(()=>{const t=c.current;if(!(t!=null&&t.form))return;const i=()=>{g(!!U)};return t.form.addEventListener("reset",i),()=>{var f;return(f=t.form)==null?void 0:f.removeEventListener("reset",i)}},[]);const Q=n&&!ae,X=a.useCallback(t=>{t.key===" "&&y(!0)},[y]),Y=a.useCallback(t=>{t.key===" "&&y(!1)},[y]);B(()=>{if(!c.current)return;c.current.checked!==r&&g(c.current.checked)},[c.current]);const le=a.useCallback((t={},i=null)=>{const f=L=>{b&&L.preventDefault(),y(!0)};return{...t,ref:i,"data-active":o(k),"data-hover":o(h),"data-checked":o(r),"data-focus":o(b),"data-focus-visible":o(b&&E),"data-indeterminate":o(m),"data-disabled":o(n),"data-invalid":o(d),"data-readonly":o(s),"aria-hidden":!0,onMouseDown:l(t.onMouseDown,f),onMouseUp:l(t.onMouseUp,()=>y(!1)),onMouseEnter:l(t.onMouseEnter,()=>G(!0)),onMouseLeave:l(t.onMouseLeave,()=>G(!1))}},[k,r,n,b,E,h,m,d,s]),ce=a.useCallback((t={},i=null)=>({...t,ref:i,"data-active":o(k),"data-hover":o(h),"data-checked":o(r),"data-focus":o(b),"data-focus-visible":o(b&&E),"data-indeterminate":o(m),"data-disabled":o(n),"data-invalid":o(d),"data-readonly":o(s)}),[k,r,n,b,E,h,m,d,s]),fe=a.useCallback((t={},i=null)=>({...F,...t,ref:Z(i,f=>{f&&ue(f.tagName==="LABEL")}),onClick:l(t.onClick,()=>{var f;N||((f=c.current)==null||f.click(),requestAnimationFrame(()=>{var L;(L=c.current)==null||L.focus({preventScroll:!0})}))}),"data-disabled":o(n),"data-checked":o(r),"data-invalid":o(d)}),[F,n,r,d,N]),me=a.useCallback((t={},i=null)=>({...t,ref:Z(c,i),type:"checkbox",name:q,value:O,id:A,tabIndex:T,onChange:l(t.onChange,J),onBlur:l(t.onBlur,j,()=>C(!1)),onFocus:l(t.onFocus,z,()=>C(!0)),onKeyDown:l(t.onKeyDown,X),onKeyUp:l(t.onKeyUp,Y),required:P,checked:r,disabled:Q,readOnly:s,"aria-label":W,"aria-labelledby":_,"aria-invalid":S?!!S:d,"aria-describedby":H,"aria-disabled":n,style:pe}),[q,O,A,J,j,z,X,Y,P,r,Q,s,W,_,S,d,H,n,T]),be=a.useCallback((t={},i=null)=>({...t,ref:i,onMouseDown:l(t.onMouseDown,De),"data-disabled":o(n),"data-checked":o(r),"data-invalid":o(d)}),[r,n,d]);return{state:{isInvalid:d,isFocused:b,isChecked:r,isActive:k,isHovered:h,isIndeterminate:m,isDisabled:n,isReadOnly:s,isRequired:P},getRootProps:fe,getCheckboxProps:le,getIndicatorProps:ce,getInputProps:me,getLabelProps:be,htmlProps:F}}function De(e){e.preventDefault(),e.stopPropagation()}export{He as u};
//# sourceMappingURL=chunk-7D6N5TE5-e6032d33.js.map
