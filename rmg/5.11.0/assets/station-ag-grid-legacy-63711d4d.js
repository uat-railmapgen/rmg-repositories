!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function t(n,r,t){return(r=function(n){var r=function(n,r){if("object"!==e(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(n,"string");return"symbol"===e(r)?r:String(r)}(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}System.register(["./chakra-legacy-b8b156e3.js","./index-legacy-29a9019f.js","./app-router-legacy-863d65c2.js","./react-legacy-e9fbe36a.js","./ag-grid-legacy-66449068.js","./param-updater-utils-legacy-76b98547.js"],(function(e,n){"use strict";var t,o,i,a,l,u,c,s,d,f,p,m,b,g,h,v,y,j;return{setters:[function(e){t=e.j,o=e.F,i=e.a7},function(e){a=e.b,l=e.c,u=e.u,c=e.e,s=e.l,d=e.M,f=e.ax,p=e.aw,m=e.ay,b=e.bc,g=e.bd},function(e){h=e.R,v=e.g},function(e){y=e.r},function(e){j=e.A},null],execute:function(){function n(e){var n=e.lineNumber,r=e.stationNumber,i={h:"24px",position:"relative",color:"black","&::before":{content:"''",w:"calc(100% + 2px)",h:"26px",position:"absolute",top:"-1px",left:"-1px",bg:"white",borderRadius:"13px"},span:{display:"flex",justifyContent:"center",alignItems:"center",padding:"3px",minWidth:"24px",border:"2px solid",borderColor:e.lineColour,zIndex:1,"&:first-of-type":{borderRadius:"12px 0 0 12px"},"&:last-of-type":{borderRadius:"0 12px 12px 0",marginLeft:"-2px"}}};return t.jsxs(o,{sx:i,children:[t.jsx("span",{children:n}),t.jsx("span",{children:r})]})}e("default",(function(e){var o=e.branchIndex,x=a(),S=x.t,w=x.i18n,N=l(),O=u((function(e){return e.app.sidePanelMode})),R=u((function(e){return e.param})),C=R.style,P=R.theme,T=R.stn_list,A=R.line_num,G=R.coline,M=u((function(e){return e.helper.branches}))[o].filter((function(e){return!["linestart","lineend"].includes(e)})),D=y.useMemo((function(){return[{headerName:S("StationAgGrid.num"),field:"num",cellRenderer:function(e){var r=e.value;return t.jsx(n,{lineNumber:A,stationNumber:r,lineColour:P[2]})},pinned:"left",minWidth:110,hide:![c.GZMTR].includes(C)},{headerName:S("Chinese name"),field:"name",valueFormatter:function(e){var n=e.value,r=e.data;return n[0]+(C===c.GZMTR&&null!=r&&r.secondaryName&&null!=r&&r.secondaryName[0]?" (".concat(r.secondaryName[0],")"):"")}},{headerName:S("English name"),field:"name",cellRenderer:function(e){var n=e.value,r=e.data;return t.jsx(h,{text:n[1]+(C===c.GZMTR&&r.secondaryName&&r.secondaryName[1]?" (".concat(r.secondaryName[1],")"):"")})},minWidth:300},{headerName:S("StationAgGrid.interchange"),field:"transfer",cellRenderer:function(e){var n=e.value;return t.jsx(i,{children:n.groups.map((function(e){return e.lines})).flat().map((function(e,n){var r,o,i,a;return t.jsx(s,{name:e.name,bg:null!==(r=null===(o=e.theme)||void 0===o?void 0:o[2])&&void 0!==r?r:"#aaaaaa",fg:null!==(i=null===(a=e.theme)||void 0===a?void 0:a[3])&&void 0!==i?i:d.white,showShortName:!0},n)}))})}},{headerName:S("StationAgGrid.coline"),field:"rowSpan",rowSpan:function(e){var n,r=e.data;return null!==(n=null==r?void 0:r.rowSpan[0])&&void 0!==n?n:0},cellClassRules:{"rmg-ag-grid--spanned-cell":function(e){return e.value[0]>0}},cellRenderer:function(e){var n,r,o=e.value;return t.jsx(i,{children:null===(n=G[o[1]])||void 0===n||null===(r=n.colors)||void 0===r?void 0:r.map((function(e,n){return t.jsx(s,{name:[e[4],e[5]],bg:e[2],fg:e[3],showShortName:!0},n)}))})},hide:![c.SHMetro].includes(C)}]}),[C,P.toString(),w.language]),k=y.useRef(null),I=y.useRef(!1);y.useEffect((function(){I.current&&k.current&&(1===k.current.api.getSelectedRows().length&&O!==f.STATION&&k.current.api.deselectAll())}),[I.current,O]);var E=M.map((function(e){return r(r({},T[e]),{},{id:e,rowSpan:N(v(e,o))})})),F=y.useCallback((function(){I.current=!0}),[I.current]),H=y.useCallback((function(e){var n,r=null===(n=e.api.getSelectedRows())||void 0===n?void 0:n.map((function(e){return e.id}));console.log("StationAgGrid.handleSelectionChanged():: Row selection changed",r),null!=r&&r.length&&(N(p(f.STATION)),N(m(r[0])),N(b(void 0)))}),[]),W=y.useCallback((function(e){return e.data.id}),[]);return t.jsx(g,{children:t.jsx(j,{ref:k,rowData:E,defaultColDef:{resizable:!0},columnDefs:D,getRowId:W,headerHeight:36,rowHeight:36,suppressCellFocus:!0,suppressMovableColumns:!0,suppressRowTransform:!0,rowSelection:"single",onSelectionChanged:H,onGridReady:F,debug:!1})})}))}}}))}();
