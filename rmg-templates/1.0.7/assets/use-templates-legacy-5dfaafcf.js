!function(){function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(a.push(r.value),a.length!==n);c=!0);}catch(f){l=!0,o=f}finally{try{if(!c&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(n,e,r){return(e=function(n){var e=function(n,e){if("object"!==t(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,e||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===t(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}System.register(["./index-legacy-802946ab.js","./react-legacy-fc1bc4c4.js"],(function(t,e){"use strict";var r,u,a,c,l;return{setters:[function(t){r=t.u,u=t.f,a=t.y},function(t){c=t.u,l=t.r}],execute:function(){t({a:function(){var t,n=c(),e=n.t,u=n.i18n,a=f(),l=r((function(t){return t.app})),s=l.coreCompanyConfig,p=l.otherCompanyConfig,m=s.map((function(t){return[t.id,a(t.name)]})).reduce((function(t,n){return o(o({},t),{},i({},n[0],n[1]))}),{"":e("Please select...")}),y=p.map((function(t){return[t.id,a(t.name)]})).sort((function(t,n){return t[1].localeCompare(n[1],u.languages[0])})).reduce((function(t,n){return o(o({},t),{},i({},n[0],n[1]))}),{});return i(t={},e("Core companies"),m),i(t,e("Other companies"),y),t},b:function(t){var e=u(),o=r((function(t){return t.app})).templateList,i=n(l.useState([]),2),c=i[0],f=i[1],s=n(l.useState(!1),2),p=s[0],m=s[1];return l.useEffect((function(){t&&"new"!==t?t in o?f(o[t]):(m(!0),fetch("/rmg-templates/resources/templates/"+t+"/00config.json").then((function(t){return t.json()})).then((function(n){f(n),e(a({company:t,templates:n}))})).finally((function(){return m(!1)}))):f([])}),[t]),{templates:c,isLoading:p}},u:f});var e=t("E",function(t){return t.APP_LOAD="APP_LOAD",t.UPLOAD_TEMPLATES="UPLOAD_TEMPLATES",t.RESET_TICKETS="RESET_TICKETS",t.APP_CLIP_VIEW_OPENED="APP_CLIP_VIEW_OPENED",t.APP_CLIP_VIEW_CLOSED="APP_CLIP_VIEW_CLOSED",t.APP_CLIP_VIEW_IMPORT="APP_CLIP_VIEW_IMPORT",t}(e||{}));t("I",{COMPANY_CODE_UNDEFINED:{en:"Company code is missing","zh-Hans":"缺少铁路公司代码","zh-Hant":"缺少鐵路公司代碼"},COMPANY_NAME_INCOMPLETE:{en:"Company name is not completed","zh-Hans":"公司名称不完整","zh-Hant":"公司名稱不完整"},TEMPLATE_SECTION_EMPTY:{en:"Template section is empty","zh-Hans":"模板部份为空白","zh-Hant":"範本部份為空白"},TEMPLATE_CODE_UNDEFINED:{en:"Template code is missing","zh-Hans":"至少1个模板的代码缺失","zh-Hant":"至少1個範本的代碼缺失"},TEMPLATE_CODE_DUPLICATED:{en:"Duplicated template code found","zh-Hans":"包含重复的模板代码","zh-Hant":"包含重複的範本代碼"},TEMPLATE_NAME_INCOMPLETE:{en:"Template name is not completed","zh-Hans":"模板名称不完整","zh-Hant":"範本名稱不完整"},TEMPLATE_PARAM_UNDEFINED:{en:"Configuration file is not uploaded","zh-Hans":"未上传模板配置文件","zh-Hant":"未上載範本設定檔"}}),t("G","**Do not edit lines below, they are meant for bots only!!!**");function f(){var t=c().i18n;return function(n){var e,r;return null!==(e=null!==(r=t.languages.map((function(t){return n[t]})).find((function(t){return void 0!==t})))&&void 0!==r?r:n.en)&&void 0!==e?e:"(Translation Error)"}}}}}))}();
