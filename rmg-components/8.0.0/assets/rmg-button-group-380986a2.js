import{j as d}from"./jsx-runtime-ffb262ed.js";import{r as f}from"./index-76fb7be0.js";import{a as S,B as b}from"./chunk-UVUR7MCU-5ad2b195.js";import{f as R,a as _,c as B}from"./chunk-ZJJGQIVY-4bd0a974.js";var V={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},G={horizontal:r=>({"& > *:not(style) ~ *:not(style)":{marginStart:r}}),vertical:r=>({"& > *:not(style) ~ *:not(style)":{marginTop:r}})},y=R(function(u,l){const{size:o,colorScheme:c,variant:i,className:s,spacing:p="0.5rem",isAttached:t,isDisabled:a,orientation:e="horizontal",...n}=u,v=_("chakra-button__group",s),g=f.useMemo(()=>({size:o,colorScheme:c,variant:i,isDisabled:a}),[o,c,i,a]);let h={display:"inline-flex",...t?V[e]:G[e](p)};const x=e==="vertical";return d.jsx(S,{value:g,children:d.jsx(B.div,{ref:l,role:"group",__css:h,className:v,"data-attached":t?"":void 0,"data-orientation":e,flexDir:x?"column":void 0,...n})})});y.displayName="ButtonGroup";function m(r){const{selections:u,defaultValue:l,onChange:o,multiSelect:c}=r,[i,s]=f.useState(l);f.useEffect(()=>{l.toString()&&s(l)},[l.toString()]);const p=t=>{if(c){const a=i,e=a.includes(t)?a.filter(n=>n!==t):[...a,t];s(e),o==null||o(e)}else s(t),o==null||o(t)};return d.jsx(y,{size:"xs",isAttached:!0,colorScheme:"primary",variant:"outline",minW:"100%",children:u.map((t,a)=>{const e=typeof i=="object"&&i.includes(t.value)||i===t.value,n=a!==u.length-1&&!e?"-px":void 0;return d.jsx(b,{role:"checkbox","aria-checked":e,variant:e?"solid":"outline",mr:n,flex:1,isDisabled:t.disabled,onClick:()=>p(t.value),children:t.label},t.value.toString())})})}try{m.displayName="RmgButtonGroup",m.__docgenInfo={description:"",displayName:"RmgButtonGroup",props:{selections:{defaultValue:null,description:"",name:"selections",required:!0,type:{name:"RmgButtonGroupSelection<T>[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string | boolean | T[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T) => void) | ((value: T[]) => void)"}},multiSelect:{defaultValue:null,description:"",name:"multiSelect",required:!1,type:{name:"boolean"}}}}}catch{}export{m as R};
//# sourceMappingURL=rmg-button-group-380986a2.js.map
