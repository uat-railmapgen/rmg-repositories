import{u as l,c as E}from"./vendor-53f1dbd3.js";import{a as r,u,l as A}from"./index-e3cabd5d.js";function m(){const{i18n:e}=l();return a=>{var n,o;return(o=(n=e.languages.map(t=>a[t]).find(t=>t!==void 0))!=null?n:a.en)!=null?o:"(Translation Error)"}}var _=(e=>(e.APP_LOAD="APP_LOAD",e.UPLOAD_TEMPLATES="UPLOAD_TEMPLATES",e.RESET_TICKETS="RESET_TICKETS",e))(_||{});const p={COMPANY_CODE_UNDEFINED:{en:"Company code is missing","zh-Hans":"缺少铁路公司代码","zh-Hant":"缺少鐵路公司代碼"},COMPANY_NAME_INCOMPLETE:{en:"Company name is not completed","zh-Hans":"公司名称不完整","zh-Hant":"公司名稱不完整"},TEMPLATE_SECTION_EMPTY:{en:"Template section is empty","zh-Hans":"模板部份为空白","zh-Hant":"範本部份為空白"},TEMPLATE_CODE_UNDEFINED:{en:"Template code is missing","zh-Hans":"至少1个模板的代码缺失","zh-Hant":"至少1個範本的代碼缺失"},TEMPLATE_CODE_DUPLICATED:{en:"Duplicated template code found","zh-Hans":"包含重复的模板代码","zh-Hant":"包含重複的範本代碼"},TEMPLATE_NAME_INCOMPLETE:{en:"Template name is not completed","zh-Hans":"模板名称不完整","zh-Hant":"範本名稱不完整"},TEMPLATE_PARAM_UNDEFINED:{en:"Configuration file is not uploaded","zh-Hans":"未上传模板配置文件","zh-Hant":"未上載範本設定檔"}},L="**Do not edit lines below, they are meant for bots only!!!**";function c(e){const a=r(),{templateList:n}=u(s=>s.app),[o,t]=E.useState([]),[T,i]=E.useState(!1);return E.useEffect(()=>{!e||e==="new"?t([]):e in n?t(n[e]):(i(!0),fetch("/rmg-templates/resources/templates/"+e+"/00config.json").then(s=>s.json()).then(s=>{t(s),a(A({company:e,templates:s}))}).finally(()=>i(!1)))},[e]),{templates:o,isLoading:T}}export{_ as E,L as G,p as I,c as a,m as u};
