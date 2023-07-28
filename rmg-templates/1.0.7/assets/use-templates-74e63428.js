import{u as _,f as T,y as u}from"./index-5ec33624.js";import{u as l,r as P}from"./react-d5c86316.js";var p=(e=>(e.APP_LOAD="APP_LOAD",e.UPLOAD_TEMPLATES="UPLOAD_TEMPLATES",e.RESET_TICKETS="RESET_TICKETS",e.APP_CLIP_VIEW_OPENED="APP_CLIP_VIEW_OPENED",e.APP_CLIP_VIEW_CLOSED="APP_CLIP_VIEW_CLOSED",e.APP_CLIP_VIEW_IMPORT="APP_CLIP_VIEW_IMPORT",e))(p||{});const I={COMPANY_CODE_UNDEFINED:{en:"Company code is missing","zh-Hans":"缺少铁路公司代码","zh-Hant":"缺少鐵路公司代碼"},COMPANY_NAME_INCOMPLETE:{en:"Company name is not completed","zh-Hans":"公司名称不完整","zh-Hant":"公司名稱不完整"},TEMPLATE_SECTION_EMPTY:{en:"Template section is empty","zh-Hans":"模板部份为空白","zh-Hant":"範本部份為空白"},TEMPLATE_CODE_UNDEFINED:{en:"Template code is missing","zh-Hans":"至少1个模板的代码缺失","zh-Hant":"至少1個範本的代碼缺失"},TEMPLATE_CODE_DUPLICATED:{en:"Duplicated template code found","zh-Hans":"包含重复的模板代码","zh-Hant":"包含重複的範本代碼"},TEMPLATE_NAME_INCOMPLETE:{en:"Template name is not completed","zh-Hans":"模板名称不完整","zh-Hant":"範本名稱不完整"},TEMPLATE_PARAM_UNDEFINED:{en:"Configuration file is not uploaded","zh-Hans":"未上传模板配置文件","zh-Hant":"未上載範本設定檔"}},c="**Do not edit lines below, they are meant for bots only!!!**";function C(){const{i18n:e}=l();return o=>{var s,E;return(E=(s=e.languages.map(n=>o[n]).find(n=>n!==void 0))!=null?s:o.en)!=null?E:"(Translation Error)"}}function L(){const{t:e,i18n:o}=l(),s=C(),{coreCompanyConfig:E,otherCompanyConfig:n}=_(t=>t.app),r=E.map(t=>[t.id,s(t.name)]).reduce((t,a)=>({...t,[a[0]]:a[1]}),{"":e("Please select...")}),i=n.map(t=>[t.id,s(t.name)]).sort((t,a)=>t[1].localeCompare(a[1],o.languages[0])).reduce((t,a)=>({...t,[a[0]]:a[1]}),{});return{[e("Core companies")]:r,[e("Other companies")]:i}}function h(e){const o=T(),{templateList:s}=_(t=>t.app),[E,n]=P.useState([]),[r,i]=P.useState(!1);return P.useEffect(()=>{!e||e==="new"?n([]):e in s?n(s[e]):(i(!0),fetch("/rmg-templates/resources/templates/"+e+"/00config.json").then(t=>t.json()).then(t=>{n(t),o(u({company:e,templates:t}))}).finally(()=>i(!1)))},[e]),{templates:E,isLoading:r}}export{p as E,c as G,I,L as a,h as b,C as u};
