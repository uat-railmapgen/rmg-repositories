!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function t(n,r,t){return(r=function(n){var r=function(n,r){if("object"!==e(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(n,"string");return"symbol"===e(r)?r:String(r)}(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}System.register(["./chakra-legacy-eeb88485.js","./index-legacy-d7f72788.js","./react-legacy-125cc24e.js","./app-router-legacy-2f8ff606.js","./ag-grid-legacy-8d1e15cd.js","./param-updater-utils-legacy-0358cd50.js"],(function(e,n){"use strict";var t,o,i,a,l,u,c,s,d,f,p,m,g,b,h,v,y,j,x,S;return{setters:[function(e){t=e.a0,o=e.u,i=e.j,a=e.Q,l=e.e,u=e.a8},function(e){c=e.b,s=e.c,d=e.u,f=e.e,p=e.b6,m=e.i,g=e.aq,b=e.ap,h=e.ar,v=e.b7},function(e){y=e.r},function(e){j=e.R,x=e.g},function(e){S=e.m},null],execute:function(){e("default",(function(e){var t=e.branchIndex,o=c(),a=o.t,l=o.i18n,R=s(),N=d((function(e){return e.app.sidePanelMode})),O=d((function(e){return e.param})),C=O.style,P=O.theme,G=O.stn_list,A=O.line_num,T=O.coline,M=d((function(e){return e.helper.branches}))[t].filter((function(e){return!["linestart","lineend"].includes(e)})),k=y.useMemo((function(){return[{headerName:a("StationAgGrid.num"),field:"num",cellRenderer:function(e){var n=e.value;return i.jsx(w,{lineNumber:A,stationNumber:n,lineColour:P[2]})},pinned:"left",minWidth:110,hide:![f.GZMTR].includes(C)},{headerName:a("Chinese name"),field:"name",valueFormatter:function(e){var n=e.value,r=e.data;return n[0]+(C===f.GZMTR&&null!=r&&r.secondaryName&&null!=r&&r.secondaryName[0]?" (".concat(r.secondaryName[0],")"):"")}},{headerName:a("English name"),field:"name",cellRenderer:function(e){var n=e.value,r=e.data;return i.jsx(j,{text:n[1]+(C===f.GZMTR&&r.secondaryName&&r.secondaryName[1]?" (".concat(r.secondaryName[1],")"):"")})},minWidth:300},{headerName:a("StationAgGrid.interchange"),field:"transfer",cellRenderer:function(e){var n=e.value;return i.jsx(u,{children:n.groups.map((function(e){return e.lines})).flat().map((function(e,n){var r,t,o,a;return i.jsx(p,{name:e.name,bg:null!==(r=null===(t=e.theme)||void 0===t?void 0:t[2])&&void 0!==r?r:"#aaaaaa",fg:null!==(o=null===(a=e.theme)||void 0===a?void 0:a[3])&&void 0!==o?o:m.white,showShortName:!0},n)}))})}},{headerName:a("StationAgGrid.coline"),field:"rowSpan",rowSpan:function(e){var n,r=e.data;return null!==(n=null==r?void 0:r.rowSpan[0])&&void 0!==n?n:0},cellClassRules:{"rmg-ag-grid--spanned-cell":function(e){return e.value[0]>0}},cellRenderer:function(e){var n,r=e.value;return i.jsx(u,{children:null===(n=T[r[1]])||void 0===n||null===(n=n.colors)||void 0===n?void 0:n.map((function(e,n){return i.jsx(p,{name:[e[4],e[5]],bg:e[2],fg:e[3],showShortName:!0},n)}))})},hide:![f.SHMetro].includes(C)}]}),[C,P.toString(),l.language]),D=y.useRef(null),I=y.useRef(!1);y.useEffect((function(){I.current&&D.current&&(1===D.current.api.getSelectedRows().length&&N!==g.STATION&&D.current.api.deselectAll())}),[I.current,N]);var E=M.map((function(e){return r(r({},G[e]),{},{id:e,rowSpan:R(x(e,t))})})),H=y.useCallback((function(){I.current=!0}),[I.current]),W=y.useCallback((function(e){var n,r=null===(n=e.api.getSelectedRows())||void 0===n?void 0:n.map((function(e){return e.id}));console.log("StationAgGrid.handleSelectionChanged():: Row selection changed",r),null!=r&&r.length&&(R(b(g.STATION)),R(h(r[0])),R(v(void 0)))}),[]),Z=y.useCallback((function(e){return e.data.id}),[]);return i.jsx(n,{children:i.jsx(S.AgGridReact,{ref:D,rowData:E,defaultColDef:{resizable:!0},columnDefs:k,getRowId:Z,headerHeight:36,rowHeight:36,suppressCellFocus:!0,suppressMovableColumns:!0,suppressRowTransform:!0,rowSelection:"single",onSelectionChanged:W,onGridReady:H,debug:!1})})}));var n=function(e){var n=e.children,r=t().colorMode,l=o("RmgAgGrid");return i.jsx(a,{className:"light"===r?"ag-theme-alpine":"ag-theme-alpine-dark",sx:l,children:n})};function w(e){var n=e.lineNumber,r=e.stationNumber,t={h:"24px",position:"relative",color:"black","&::before":{content:"''",w:"calc(100% + 2px)",h:"26px",position:"absolute",top:"-1px",left:"-1px",bg:"white",borderRadius:"13px"},span:{display:"flex",justifyContent:"center",alignItems:"center",padding:"3px",minWidth:"24px",border:"2px solid",borderColor:e.lineColour,zIndex:1,"&:first-of-type":{borderRadius:"12px 0 0 12px"},"&:last-of-type":{borderRadius:"0 12px 12px 0",marginLeft:"-2px"}}};return i.jsxs(l,{sx:t,children:[i.jsx("span",{children:n}),i.jsx("span",{children:r})]})}}}}))}();
