var h=Object.defineProperty;var u=(e,t)=>h(e,"name",{value:t,configurable:!0});import{R as n,a as f,j as i,r as _}from"./jsx-runtime.cac6885b.js";import{h as S,i as o,j as v,o as R,e as c,g as E}from"./index.esm.178b0ab7.js";var T=u((...e)=>e.filter(Boolean).join(" "),"cx"),[x,p]=S({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),g=o((e,t)=>{const a=v("Table",e),{className:r,...m}=R(e);return n.createElement(x,{value:a},n.createElement(c.table,{ref:t,__css:a.table,className:T("chakra-table",r),...m}))});g.displayName="Table";o((e,t)=>{var l;const{overflow:a,overflowX:r,className:m,...s}=e;return n.createElement(c.div,{ref:t,className:T("chakra-table__container",m),...s,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:(l=a!=null?a:r)!=null?l:"auto",overflowY:"hidden",maxWidth:"100%"}})});var C=o((e,t)=>{const{placement:a="bottom",...r}=e,m=p();return n.createElement(c.caption,{...r,ref:t,__css:{...m.caption,captionSide:a}})});C.displayName="TableCaption";var D=o((e,t)=>{const a=p();return n.createElement(c.thead,{...e,ref:t,__css:a.thead})}),N=o((e,t)=>{const a=p();return n.createElement(c.tbody,{...e,ref:t,__css:a.tbody})});o((e,t)=>{const a=p();return n.createElement(c.tfoot,{...e,ref:t,__css:a.tfoot})});var k=o(({isNumeric:e,...t},a)=>{const r=p();return n.createElement(c.th,{...t,ref:a,__css:r.th,"data-is-numeric":e})}),y=o((e,t)=>{const a=p();return n.createElement(c.tr,{...e,ref:t,__css:a.tr})}),w=o(({isNumeric:e,...t},a)=>{const r=p();return n.createElement(c.td,{...t,ref:a,__css:r.td,"data-is-numeric":e})});function b(e){const{data:t,fields:a}=e,r=E("RmgDataTable"),m=t.map(s=>({data:s,display:a.reduce((l,d)=>d.key?{...l,[d.label]:{value:(s[d.key]||"").toString()}}:{...l,[d.label]:{value:d.displayHandler(s)}},{})}));return f(g,{size:"sm",sx:r,children:[i(D,{children:i(y,{children:a.map((s,l)=>s.hidden?i(_.exports.Fragment,{},l):i(k,{p:1,children:s.label},l))})}),i(N,{children:m.map(s=>i(y,{children:a.map((l,d)=>l.hidden?i(_.exports.Fragment,{},d):i(w,{p:1,children:s.display[l.label].value},s.data.id+"-"+d))},s.data.id))})]})}u(b,"RmgDataTable");try{b.displayName="RmgDataTable",b.__docgenInfo={description:"",displayName:"RmgDataTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"RmgDataTableFieldType<T>[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/rmg-data-table/rmg-data-table.tsx#RmgDataTable"]={docgenInfo:b.__docgenInfo,name:"RmgDataTable",path:"src/rmg-data-table/rmg-data-table.tsx#RmgDataTable"})}catch{}export{b as R};
//# sourceMappingURL=rmg-data-table.cc9cecbf.js.map
