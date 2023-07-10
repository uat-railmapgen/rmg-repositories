import{j as s,F as v,a7 as w}from"./chakra-c9623454.js";import{b as D,c as H,u as f,e as p,l as N,M as L,ax as C,aw as P,ay as z,bc as W,bd as Z}from"./index-d7f6c5d5.js";import{R as O,g as _}from"./app-router-355b765e.js";import{r as a}from"./react-5680e458.js";import{A as $}from"./ag-grid-f7b88286.js";import"./param-updater-utils-2e34e9e7.js";function B(h){const{lineNumber:c,stationNumber:o,lineColour:g}=h,l={h:"24px",position:"relative",color:"black","&::before":{content:"''",w:"calc(100% + 2px)",h:"26px",position:"absolute",top:"-1px",left:"-1px",bg:"white",borderRadius:"13px"},span:{display:"flex",justifyContent:"center",alignItems:"center",padding:"3px",minWidth:"24px",border:"2px solid",borderColor:g,zIndex:1,"&:first-of-type":{borderRadius:"12px 0 0 12px"},"&:last-of-type":{borderRadius:"0 12px 12px 0",marginLeft:"-2px"}}};return s.jsxs(v,{sx:l,children:[s.jsx("span",{children:c}),s.jsx("span",{children:o})]})}function Y(h){const{branchIndex:c}=h,{t:o,i18n:g}=D(),l=H(),x=f(e=>e.app.sidePanelMode),{style:i,theme:R,stn_list:y,line_num:G,coline:j}=f(e=>e.param),M=f(e=>e.helper.branches)[c].filter(e=>!["linestart","lineend"].includes(e)),A=a.useMemo(()=>[{headerName:o("StationAgGrid.num"),field:"num",cellRenderer:({value:e})=>s.jsx(B,{lineNumber:G,stationNumber:e,lineColour:R[2]}),pinned:"left",minWidth:110,hide:![p.GZMTR].includes(i)},{headerName:o("Chinese name"),field:"name",valueFormatter:({value:e,data:n})=>e[0]+(i===p.GZMTR&&(n!=null&&n.secondaryName)&&(n!=null&&n.secondaryName[0])?` (${n.secondaryName[0]})`:"")},{headerName:o("English name"),field:"name",cellRenderer:({value:e,data:n})=>s.jsx(O,{text:e[1]+(i===p.GZMTR&&n.secondaryName&&n.secondaryName[1]?` (${n.secondaryName[1]})`:"")}),minWidth:300},{headerName:o("StationAgGrid.interchange"),field:"transfer",cellRenderer:({value:e})=>s.jsx(w,{children:e.groups.map(n=>n.lines).flat().map((n,t)=>{var r,u,S,b;return s.jsx(N,{name:n.name,bg:(u=(r=n.theme)==null?void 0:r[2])!=null?u:"#aaaaaa",fg:(b=(S=n.theme)==null?void 0:S[3])!=null?b:L.white,showShortName:!0},t)})})},{headerName:o("StationAgGrid.coline"),field:"rowSpan",rowSpan:({data:e})=>{var n;return(n=e==null?void 0:e.rowSpan[0])!=null?n:0},cellClassRules:{"rmg-ag-grid--spanned-cell":({value:e})=>e[0]>0},cellRenderer:({value:e})=>{var n,t;return s.jsx(w,{children:(t=(n=j[e[1]])==null?void 0:n.colors)==null?void 0:t.map((r,u)=>s.jsx(N,{name:[r[4],r[5]],bg:r[2],fg:r[3],showShortName:!0},u))})},hide:![p.SHMetro].includes(i)}],[i,R.toString(),g.language]),d=a.useRef(null),m=a.useRef(!1);a.useEffect(()=>{m.current&&d.current&&d.current.api.getSelectedRows().length===1&&x!==C.STATION&&d.current.api.deselectAll()},[m.current,x]);const T=M.map(e=>({...y[e],id:e,rowSpan:l(_(e,c))})),I={resizable:!0},k=a.useCallback(()=>{m.current=!0},[m.current]),E=a.useCallback(({api:e})=>{var t;const n=(t=e.getSelectedRows())==null?void 0:t.map(r=>r.id);console.log("StationAgGrid.handleSelectionChanged():: Row selection changed",n),n!=null&&n.length&&(l(P(C.STATION)),l(z(n[0])),l(W(void 0)))},[]),F=a.useCallback(({data:e})=>e.id,[]);return s.jsx(Z,{children:s.jsx($,{ref:d,rowData:T,defaultColDef:I,columnDefs:A,getRowId:F,headerHeight:36,rowHeight:36,suppressCellFocus:!0,suppressMovableColumns:!0,suppressRowTransform:!0,rowSelection:"single",onSelectionChanged:E,onGridReady:k,debug:!1})})}export{Y as default};
