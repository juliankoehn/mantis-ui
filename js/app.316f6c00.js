(function(t){function e(e){for(var r,s,c=e[0],i=e[1],u=e[2],l=0,b=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(b.length)b.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},o={app:0},n=[];function c(t){return i.p+"js/"+({404:"404",admin:"admin","clusters~jobs":"clusters~jobs","clusters~login":"clusters~login",clusters:"clusters",jobs:"jobs",login:"login",help:"help",summary:"summary"}[t]||t)+"."+{404:"73664b9c",admin:"9a66f99d","clusters~jobs":"894d5902","clusters~login":"c49b3011",clusters:"4127f2b3",jobs:"2217382f",login:"5a33ee20",help:"3fa5048f",summary:"c5bccb8f"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"clusters~jobs":1,clusters:1,jobs:1,login:1,help:1,summary:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var r="css/"+({404:"404",admin:"admin","clusters~jobs":"clusters~jobs","clusters~login":"clusters~login",clusters:"clusters",jobs:"jobs",login:"login",help:"help",summary:"summary"}[t]||t)+"."+{404:"31d6cfe0",admin:"31d6cfe0","clusters~jobs":"ad79ac2c","clusters~login":"31d6cfe0",clusters:"c4bd6abd",jobs:"c78647b3",login:"60cbb79d",help:"50300143",summary:"3a2f308c"}[t]+".css",o=i.p+r,n=document.getElementsByTagName("link"),c=0;c<n.length;c++){var u=n[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var b=document.getElementsByTagName("style");for(c=0;c<b.length;c++){u=b[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,n=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=r,delete s[t],d.parentNode.removeChild(d),a(n)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){s[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=n);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var b=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",b.name="ChunkLoadError",b.type=r,b.request=s,a[1](b)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/mantis-ui/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var b=0;b<u.length;b++)e(u[b]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09e3":function(t,e,a){t.exports={app:"App_app_3cl75","error-alert":"App_error-alert_3ss0U"}},"139c":function(t,e,a){},"3c96":function(t,e,a){"use strict";a.d(e,"d",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return l})),a.d(e,"h",(function(){return b})),a.d(e,"g",(function(){return d})),a.d(e,"e",(function(){return m})),a.d(e,"f",(function(){return p}));const r="mantisUserName",s="mantisUserEmail",o="mantisMasters",n="mesosUrl";function c(){return localStorage.getItem(r)}function i(){return localStorage.getItem(s)}function u(){const t=localStorage.getItem(o);try{return JSON.parse(t)}catch(e){return[]}}function l(){return localStorage.getItem(n)}function b(t){return localStorage.setItem(r,t||"")}function d(t){return localStorage.setItem(s,t||"")}function m(t){return localStorage.setItem(o,JSON.stringify(t))}function p(t){return localStorage.setItem(n,t)}},4360:function(t,e,a){"use strict";var r=a("2b0e"),s=a("2f62");function o(t){return!t||0===t.length}var n=a("63e0"),c=a("3c96");const i="LOGIN_USER",u="LOGOUT_USER",l={name:"",email:""},b={loggedIn:t=>{return!o(t.name)&&!o(t.email)}},d={[n["a"].LoginUser]({commit:t},{name:e,email:a}){Object(c["h"])(e),Object(c["g"])(a),t(i,{name:e,email:a})},[n["a"].LogoutUser]({commit:t}){Object(c["h"])(""),Object(c["g"])(""),t(u)}},m={[i](t,{name:e,email:a}){t.name=e,t.email=a},[u](t){t.name="",t.email=""}};var p={state:l,getters:b,actions:d,mutations:m},f=a("9a27");const g="FETCH_JOB_DETAILS",S="FETCH_ARCHIVED_WORKERS_FOR_JOB",h="FETCH_JOB_OUTPUT_EVENTS",j="FETCH_JOB_STATUS_EVENTS",O="SET_SELECTED_JOB",J="SET_ARCHIVED_WORKERS_FOR_JOB",E="SET_JOB_STATUS_EVENTS",C="SET_JOB_STATUS_SSE",T="SET_JOB_OUTPUT_EVENTS",v="SET_JOB_OUTPUT_ITEM_PRETTY_PRINTED",y="SET_JOB_OUTPUT_SSE",_="CLEAR_JOB_OUTPUT_EVENTS",A="STOP_JOB_OUTPUT_SSE",U="UPDATE_RPS",L="RESET_JOB_DETAILS",F={selectedJob:null,archivedWorkers:[],isLoadingJobDetails:!1,isFetchingArchivedWorkers:!1,jobStatusEvents:[],jobOutputEvents:[],hasJobStatusStarted:!1,hasJobOutputStarted:!1,currentJobOutputMessagePrettyPrinted:"",rpsPrettyPrintThreshold:50,jobOutputSse:null,jobStatusSse:null,maxJobOutputLength:200,rps:0},P={},M={async[n["a"].FetchJobDetails]({commit:t,dispatch:e},{jobId:a}){t(g);const{data:r,errors:s}=await Object(f["b"])(a);s&&e(n["a"].AddGlobalErrors,s),t(O,r)},async[n["a"].FetchArchivedWorkersForJob]({commit:t,dispatch:e},{jobId:a}){t(S);const{data:r={},errors:s}=await Object(f["a"])(a);s&&e(n["a"].AddGlobalErrors,s),t(J,r)},async[n["a"].ResubmitWorker]({rootState:t},{jobId:e,workerNumber:a}){const r=t.user.email;return Object(f["f"])(e,a,r)},async[n["a"].ScaleJobStage]({rootState:t},{jobId:e,stageNumber:a,numWorkers:r}){const s=t.user.email;return Object(f["g"])(e,a,r,s)},async[n["a"].KillJobs]({dispatch:t,rootState:e},{jobIds:a=[]}){const r=e.user.email,{data:s,errors:o}=await Object(f["d"])(a,r);return o&&t(n["a"].AddGlobalErrors,o),{data:s,errors:o}},async[n["a"].QuickSubmitJob]({dispatch:t},{jobConfig:e}){const{data:a,errors:r}=await Object(f["e"])(e);return r&&t(n["a"].AddGlobalErrors,r),{data:a,errors:r}},[n["a"].StreamJobStatus]({commit:t},{jobId:e}){const a=()=>{t(j)},r=e=>{let a={};try{a=JSON.parse(e.data)}catch(e){console.debug(`StreamJobStatus: Unable to parse record ${e} as json`)}const r={timestamp:a?a.status.timestamp:(new Date).getTime(),message:a?a.status.message:"",stageNum:a?a.status.stageNum:"N/A",state:a?a.status.state:"N/A"};t(E,{item:r})},s=Object(f["i"])(e,a,r);t(C,{sse:s})},[n["a"].StreamJobOutput]({commit:t},{jobOutputUrl:e}){const a=()=>{t(h)},r=e=>{const a={timestamp:(new Date).getTime(),message:e.data};t(T,{item:a}),t(U),t(v,{item:a})},s=Object(f["h"])(e,a,r);t(y,{sse:s})},[n["a"].ClearJobOutput]({commit:t}){t(_)},[n["a"].StopJobOutputStream]({commit:t}){t(A)},[n["a"].ResetJobDetails]({commit:t}){t(A),t(L)},[n["a"].UpdateCurrentJobOutputMessagePreview]({commit:t},{item:e}){t(v,{item:e})}},I={[g](t){t.isLoadingJobDetails=!0},[S](t){t.isFetchingArchivedWorkers=!0},[O](t,e){t.selectedJob=e,t.isLoadingJobDetails=!1},[J](t,{list:e=[]}){t.archivedWorkers=e,t.isFetchingArchivedWorkers=!1},[j](t){t.hasJobStatusStarted=!0},[E](t,{item:e}){t.jobStatusEvents=[e,...t.jobStatusEvents]},[C](t,{sse:e}){t.jobStatusSse=e},[h](t){t.hasJobOutputStarted=!0},[T](t,{item:e}){const a=t.jobOutputEvents,r=([,...t])=>t;a.length>t.maxJobOutputLength?t.jobOutputEvents=[e,...r(a)]:t.jobOutputEvents=[e,...t.jobOutputEvents]},[v](t,{item:e}){if(!("Infinity"!==t.rps&&t.rps>=t.rpsPrettyPrintThreshold))try{const a=JSON.parse(e.message);t.currentJobOutputMessagePrettyPrinted=JSON.stringify(a,void 0,2)}catch(a){console.debug(`Error: Unable to pretty print job output message due to ${a}`),t.currentJobOutputMessagePrettyPrinted="Unable to pretty print job output message."}},[U](t){const e=t.jobOutputEvents,a=Math.abs(e[0].timestamp-e[e.length-1].timestamp),r=(e.length/(a/1e3)).toFixed(2);t.rps=new Number(r)},[y](t,{sse:e}){t.jobOutputSse=e},[_](t){t.jobOutputEvents=[]},[A](t){const e=t.jobOutputSse;e&&e.close(),t.rps=0,t.jobOutputSse=null,t.hasJobOutputStarted=!1},[L](t){t.jobStatusSse=null,t.selectedJob=null,t.archivedWorkers=[],t.jobStatusEvents=[],t.jobOutputEvents=[],t.currentJobOutputMessagePrettyPrinted="",t.rps=0}};var N={state:F,getters:P,actions:M,mutations:I};const $="SET_PAGE_SIZE",w="SET_PAGE_NUMBER",k="FETCH_ALL_JOBS",R="SET_JOBS_LIST",D="SET_TOTAL_RESOURCES",x={list:[],pageSize:15,pageNumber:1,isLoadingList:!1,totalResources:{cpu:0,memory:0},total:0},B={},G={async[n["a"].FetchJobs]({commit:t,state:e,dispatch:a},{searchText:r,labelFilterText:s}={}){const o=e.pageSize*(e.pageNumber-1);t(k);const{data:c={},errors:i}=await Object(f["c"])(e.pageSize,o,r,s);i&&a(n["a"].AddGlobalErrors,i),t(R,c),t(D,c)},[n["a"].UpdateJobsTablePageSize]({commit:t},{size:e=15}){t($,e)},[n["a"].UpdateJobsTablePageNumber]({commit:t},{pageNumber:e=1}){t(w,e)}},z={[k](t){t.isLoadingList=!0},[$](t,e){t.pageSize=e},[w](t,e){t.pageNumber=e},[R](t,{list:e=[],total:a=0}){t.list=e,t.total=a,t.isLoadingList=!1},[D](t,{list:e=[]}){let a=0,r=0;e.forEach(t=>{a+=t.totCPUs,r=t.totMemory}),t.totalResources={cpu:a,memory:r}}};var q={state:x,getters:B,actions:G,mutations:z},W=a("50ae");async function H(t=15,e=0,a="",r=""){const s=Object(W["d"])();let o=a?`&matching=.*${a}.*`:"";o+=r?`&labels=${r}`:"";let n=s.map(({client:a})=>a.get(`/api/v1/jobClusters/?pageSize=${t}&offset=${e}&sortBy=name&compact=true${o}`));return Object(W["f"])(n)}async function Q(t){const e=Object(W["d"])();let a=e.map(({client:e})=>e.get(`/api/v1/jobClusters/${t}`));return Object(W["f"])(a)}async function V(t){const e=Object(W["d"])();let a=e.map(({client:e})=>e.get(`/api/v1/jobClusters/${t}/jobs`));return Object(W["f"])(a)}async function K(t){const e=Object(W["d"])();let a=e.map(({client:e})=>e.post("/api/v1/jobClusters",t));return Object(W["f"])(a)}async function Z(t,e){const a=Object(W["d"])();let r=a.map(({client:a})=>a.put(`/api/v1/jobClusters/${t}`,e));return Object(W["f"])(r)}async function Y(t,e,a){const r=Object(W["d"])();let s=r.map(({client:r})=>r.post(`/api/v1/jobClusters/${t}/actions/updateArtifact`,{name:t,user:a,...e}));return Object(W["f"])(s)}async function X(t,e,a){const r=Object(W["d"])();let s=r.map(({client:r})=>r.post(`/api/v1/jobClusters/${t}/actions/updateSla`,{name:t,user:a,...e}));return Object(W["f"])(s)}async function tt(t,e,a){const r=Object(W["d"])();let s=r.map(({client:r})=>r.post(`/api/v1/jobClusters/${t}/actions/updateMigrationStrategy`,{name:t,user:a,...e}));return Object(W["f"])(s)}async function et(t,e,a){const r=Object(W["d"])();let s=r.map(({client:r})=>r.post(`/api/v1/jobClusters/${t}/actions/updateLabel`,{name:t,user:a,labels:e}));return Object(W["f"])(s)}async function at(t,e){const a=Object(W["d"])();let r=a.map(({client:a})=>a.post(`/api/v1/jobClusters/${t}/jobs`,e));return Object(W["f"])(r)}async function rt(t,e){const{client:a}=Object(W["b"])();let r=a.post(`/api/v1/jobClusters/${t}/actions/enableCluster`,{user:e,name:t});return Object(W["f"])([r])}async function st(t,e){const{client:a}=Object(W["b"])();let r=a.post(`/api/v1/jobClusters/${t}/actions/disableCluster`,{user:e,name:t});return Object(W["f"])([r])}async function ot(t,e){const{client:a}=Object(W["b"])();let r=a.delete(`/api/v1/jobClusters/${t}?user=${e}`);return Object(W["f"])([r])}const nt="FETCH_JOB_CLUSTER_DETAILS",ct="SET_SELECTED_JOB_CLUSTER",it="FETCH_JOB_CLUSTER_JOBS",ut="SET_JOBS_FOR_SELECTED_JOB_CLUSTER",lt={selectedJobCluster:null,jobsForSelectedJobCluster:[],isLoadingJobClusterDetails:!1,isLoadingJobClusterJobs:!1},bt={},dt={async[n["a"].CreateJobCluster]({dispatch:t},{jobCluster:e}){const{data:a,errors:r}=await K(e);return r&&t(n["a"].AddGlobalErrors,r),{data:a,errors:r}},async[n["a"].UpdateJobClusterStandard]({dispatch:t},{clusterId:e,jobCluster:a}){const{data:r,errors:s}=await Z(e,a);return s&&t(n["a"].AddGlobalErrors,s),{data:r,errors:s}},async[n["a"].UpdateJobClusterQuickArtifact]({rootState:t,dispatch:e},{clusterId:a,artifactConfig:r}){const s=t.user.email,{data:o,errors:c}=await Y(a,r,s);return c&&e(n["a"].AddGlobalErrors,c),{data:o,errors:c}},async[n["a"].UpdateJobClusterQuickSla]({rootState:t,dispatch:e},{clusterId:a,slaConfig:r}){const s=t.user.email,{data:o,errors:c}=await X(a,r,s);return c&&e(n["a"].AddGlobalErrors,c),{data:o,errors:c}},async[n["a"].UpdateJobClusterQuickMigrationStrategy]({rootState:t,dispatch:e},{clusterId:a,migrationConfig:r}){const s=t.user.email,{data:o,errors:c}=await tt(a,r,s);return c&&e(n["a"].AddGlobalErrors,c),{data:o,errors:c}},async[n["a"].UpdateJobClusterQuickLabel]({rootState:t,dispatch:e},{clusterId:a,labels:r}){const s=t.user.email,{data:o,errors:c}=await et(a,r,s);return c&&e(n["a"].AddGlobalErrors,c),{data:o,errors:c}},async[n["a"].FetchJobClusterDetails]({commit:t,dispatch:e},{clusterId:a}){t(nt);const{data:r,errors:s}=await Q(a);s&&e(n["a"].AddGlobalErrors,s),t(ct,r)},async[n["a"].FetchJobClusterJobs]({commit:t,dispatch:e},{clusterId:a}){t(it);const{data:r,errors:s}=await V(a);s&&e(n["a"].AddGlobalErrors,s),t(ut,r)},async[n["a"].EnableJobCluster]({rootState:t},{clusterId:e}){const a=t.user.email;return rt(e,a)},async[n["a"].DisableJobCluster]({rootState:t},{clusterId:e}){const a=t.user.email;return st(e,a)},async[n["a"].DeleteJobCluster]({rootState:t},{clusterId:e}){const a=t.user.email;return ot(e,a)},async[n["a"].SubmitJobForCluster]({dispatch:t},{clusterId:e,jobConfig:a}){const{data:r,errors:s}=await at(e,a);return s&&t(n["a"].AddGlobalErrors,s),{data:r,errors:s}}},mt={[nt](t){t.isLoadingJobClusterDetails=!0},[it](t){t.isLoadingJobClusterJobs=!0},[ct](t,e){t.selectedJobCluster=e,t.isLoadingJobClusterDetails=!1},[ut](t,{list:e}){t.jobsForSelectedJobCluster=e,t.isLoadingJobClusterJobs=!1}};var pt={state:lt,getters:bt,actions:dt,mutations:mt};const ft="SET_PAGE_SIZE",gt="SET_PAGE_NUMBER",St="FETCH_ALL_JOBS",ht="SET_JOBS_LIST",jt={list:[],pageSize:15,pageNumber:1,isLoadingList:!1,total:0},Ot={},Jt={async[n["a"].FetchJobClusters]({commit:t,state:e,dispatch:a},{searchText:r,labelFilterText:s}={}){const o=e.pageSize*(e.pageNumber-1);t(St);const{data:c={},errors:i}=await H(e.pageSize,o,r,s);i&&a(n["a"].AddGlobalErrors,i),t(ht,c)},[n["a"].UpdateClusterTablePageSize]({commit:t},{size:e=15}){t(ft,e)},[n["a"].UpdateClusterTablePageNumber]({commit:t},{pageNumber:e=1}){t(gt,e)}},Et={[St](t){t.isLoadingList=!0},[ft](t,e){t.pageSize=e},[gt](t,e){t.pageNumber=e},[ht](t,{list:e=[],total:a=0}){t.list=e,t.isLoadingList=!1,t.total=a}};var Ct={state:jt,getters:Ot,actions:Jt,mutations:Et},Tt=a("769c"),vt=a.n(Tt);async function yt(){const t=Object(W["d"])();let e=t.map(({client:t})=>t.get("/api/v1/masterConfigs")),a=await vt()(e);const r=a.map(t=>{return t.isFulfilled?{data:t.value.data}:{errors:Object(W["e"])(t.reason.response)}});return r[0]}const _t="SET_MANTIS_MASTERS",At="ADD_GLOBAL_ERROR",Ut="SET_MESOS_URL",Lt="SET_MANTIS_MASTER_CONFIGS",Ft={mantisMasters:[],globalErrors:[],mesosUrl:"",masterConfigs:[]},Pt={},Mt={[n["a"].SetMantisMasters]({commit:t},e=[]){Object(c["e"])(e),t(_t,e)},[n["a"].SetMesosUrl]({commit:t},e){Object(c["f"])(e),t(Ut,e)},[n["a"].AddGlobalErrors]({commit:t},e=[]){t(At,e)},async[n["a"].FetchMasterConfigs]({commit:t,dispatch:e}){const{data:a={},errors:r}=await yt();r&&e(n["a"].AddGlobalErrors,r),t(Lt,a)}},It={[_t](t,e){t.mantisMasters=e},[At](t,e){t.globalErrors=[...t.globalErrors,...e]},[Ut](t,e){t.mesosUrl=e},[Lt](t,e){t.masterConfigs=e}};var Nt={state:Ft,getters:Pt,actions:Mt,mutations:It};async function $t(){const{client:t}=Object(W["b"])(),e=t.get("/api/v1/artifacts");return Object(W["f"])([e])}async function wt(t){const{client:e}=Object(W["b"])(),a=t.split("/").pop().replace(/\.(jar|zip)$/,".json"),r=e.get(`/api/v1/artifacts/${a}`);return Object(W["f"])([r])}async function kt(t){const{client:e}=Object(W["b"])(),a=new FormData;a.append("file",t);const r=e.post("/api/v1/artifacts",a);return Object(W["f"])([r])}const Rt="FETCH_ARTIFACT_JSON",Dt="SET_SELECTED_ARTIFACT",xt="SET_SELECTED_ARTIFACT_PROPERTIES",Bt={selectedArtifact:null,isLoadingArtifactProperties:!1,selectedArtifactPropertiesJson:null},Gt={},zt={async[n["a"].FetchJobArtifact]({commit:t,dispatch:e},{artifactName:a}){t(Rt);const{data:r,errors:s}=await wt(a);s&&e(n["a"].AddGlobalErrors,s),t(xt,r),t(Dt,{artifactName:a})},async[n["a"].UploadArtifact]({},{file:t}){const{data:e,errors:a}=await kt(t);return a&&dispatch(n["a"].AddGlobalErrors,a),e}},qt={[Rt](t){t.isLoadingArtifactProperties=!0},[Dt](t,{artifactName:e}){t.selectedArtifact=e},[xt](t,e){t.selectedArtifactPropertiesJson=e,t.isLoadingArtifactProperties=!1}};var Wt={state:Bt,getters:Gt,actions:zt,mutations:qt};const Ht="FETCH_ARTIFACTS_LIST",Qt="SET_ARTIFACTS_LIST",Vt={isLoadingArtifactsList:!1,artifactNames:[]},Kt={},Zt={async[n["a"].FetchArtifacts]({commit:t,dispatch:e}){t(Ht);const{data:a,errors:r}=await $t();r&&e(n["a"].AddGlobalErrors,r),t(Qt,a)}},Yt={[Ht](t){t.isLoadingArtifactsList=!0},[Qt](t,e=[]){t.artifactNames=e,t.isLoadingArtifactsList=!1}};var Xt={state:Vt,getters:Kt,actions:Zt,mutations:Yt};r["default"].use(s["a"]);const te=!1;e["a"]=new s["a"].Store({modules:{user:p,job:N,jobs:q,jobCluster:pt,jobClusters:Ct,metadata:Nt,artifact:Wt,artifacts:Xt},strict:te})},"50ae":function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return u})),a.d(e,"c",(function(){return l})),a.d(e,"f",(function(){return b})),a.d(e,"e",(function(){return d})),a.d(e,"a",(function(){return m}));var r=a("bc3a"),s=a.n(r),o=a("4360"),n=a("769c"),c=a.n(n);function i(){const t=o["a"].state.metadata.mantisMasters;return t.map(t=>({name:t.name,client:s.a.create({baseURL:t.url})}))}function u(){const t=o["a"].state.metadata.mantisMasters[0];return{name:t.name,client:s.a.create({baseURL:t.url})}}function l(){const t=o["a"].state.metadata.mantisMasters[0];return t.url}async function b(t){let e=await c()(t);const a=e.map(t=>{return t.isFulfilled?{data:t.value.data}:{errors:d(t.reason.response)}});return a[0]}function d(t){return t&&404===t.status?[{code:1,message:`The requested resource (${t.request.responseURL}) could not be found.`}]:t&&t.data?[t.data]:[{code:2,message:"Request failed with an unexpected error."}]}function m(t,e,a,r){const s=new EventSource(t);return s.onopen=e,s.onmessage=a,s.onerror=r,s}},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),s=a("f13c"),o=a.n(s),n=a("4eb5"),c=a.n(n),i=a("ecee"),u=a("c074"),l=a("ad3d"),b=()=>{i["c"].add(u["i"],u["j"],u["g"],u["e"],u["h"],u["c"],u["b"],u["a"],u["f"],u["k"]),r["default"].component("font-awesome-icon",l["a"])},d=a("f529"),m=a.n(d),p=a("6ed5"),f=a.n(p),g=a("896a"),S=a.n(g),h=a("b2d6"),j=a.n(h),O=a("4897"),J=a.n(O),E=(a("0fae"),()=>{r["default"].use(S.a.directive),J.a.use(j.a),r["default"].prototype.$ELEMENT={size:"small",zIndex:2e3},r["default"].prototype.$loading=S.a.service,r["default"].prototype.$confirm=f.a.confirm,r["default"].prototype.$message=m.a}),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:t.$style.app}},[a("el-container",{attrs:{direction:"vertical"}},[t.loggedIn?a("TopNav",{staticClass:"stretch-x",attrs:{"user-name":t.userName},on:{"on-click-logout":t.logout}}):t._e(),a("el-main",[t._l(t.errorMessages,(function(e){return a("el-alert",{key:e,class:t.$style["error-alert"],attrs:{title:e,type:"error"}})})),a("router-view")],2)],1)],1)},T=[],v=a("e04d"),y=a.n(v),_=a("c69e"),A=a.n(_),U=a("3d2d"),L=a.n(U),F=a("4360"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-menu",{staticClass:"top-nav",attrs:{"default-active":t.activeLink,mode:"horizontal","background-color":t.backgroundColor,"text-color":t.textColor,"active-text-color":t.activeTextColor,"unique-opened":"",router:""}},[a("el-menu-item",{attrs:{index:"/"}},[a("h1",[t._v("Mantis")])]),a("el-menu-item",{attrs:{index:"/clusters"}},[a("template",{slot:"title"},[t._v("\n      Clusters\n    ")])],2),a("el-menu-item",{attrs:{index:"/jobs"}},[a("template",{slot:"title"},[t._v("\n      Jobs\n    ")])],2),a("el-menu-item",{attrs:{index:"/help"}},[a("template",{slot:"title"},[t._v("\n      Help\n    ")])],2),a("el-submenu",{class:t.$style["user-controls"],attrs:{index:"/settings"}},[a("template",{slot:"title"},[t._v("\n      "+t._s(t.userName)+"\n    ")]),a("el-menu-item",{on:{click:t.handleLogout}},[t._v("\n      Logout\n    ")])],2)],1)},M=[],I=a("f58e"),N=a.n(I),$=a("4cb2"),w=a.n($),k=a("443e"),R=a.n(k),D={name:"TopNav",components:{[R.a.name]:R.a,[w.a.name]:w.a,[N.a.name]:N.a},props:{userName:{type:String,required:!0}},data(){return{faBars:u["d"],backgroundColor:"#800000",textColor:"white",activeTextColor:getComputedStyle(document.documentElement).getPropertyValue("--yellow-500")}},computed:{activeLink:function(){return`/${this.$route.path.split("/")[1]}`}},methods:{handleLogout(){this.$emit("on-click-logout")}}},x=D,B=a("b101"),G=a("2877");function z(t){this["$style"]=B["default"].locals||B["default"]}var q=Object(G["a"])(x,P,M,!1,z,null,null),W=q.exports,H=a("63e0"),Q=a("2f62"),V=r["default"].extend({name:"App",components:{[L.a.name]:L.a,[A.a.name]:A.a,[y.a.name]:y.a,TopNav:W},computed:{...Object(Q["d"])({userName:t=>t.user.name,errorMessages:t=>{return new Set(t.metadata.globalErrors.map(t=>t.message||t.error||t))}}),...Object(Q["c"])(["loggedIn"])},methods:{logout(){F["a"].dispatch(H["a"].LogoutUser),F["a"].dispatch(H["a"].SetMantisMasters,[]),this.$router.push("/login")}}}),K=V,Z=a("8d8d");function Y(t){this["$style"]=Z["default"].locals||Z["default"]}var X=Object(G["a"])(K,C,T,!1,Y,null,null),tt=X.exports,et=a("8c4f"),at=function(t,e,a){t.matched.some(t=>t.meta.requiresAuth)?F["a"].getters.loggedIn?a():a("/login"):a()},rt=function(t,e,a){const r=t.matched.slice().reverse().find(t=>t.meta&&t.meta.title);r&&(document.title=r.meta.title)};r["default"].use(et["a"]);const st=new et["a"]({mode:"hash",base:"/mantis-ui/",routes:[{path:"/",redirect:{name:"clusters"}},{path:"/login",name:"login",meta:{title:"Mantis - Login"},component:()=>Promise.all([a.e("clusters~login"),a.e("login")]).then(a.bind(null,"62cc"))},{path:"/jobs",name:"jobs",meta:{requiresAuth:!0,title:"Mantis - Jobs"},component:()=>Promise.all([a.e("clusters~jobs"),a.e("jobs")]).then(a.bind(null,"93ab"))},{path:"/jobs/:jobId",name:"jobDetail",meta:{requiresAuth:!0,title:"Mantis - Job Detail"},component:()=>Promise.all([a.e("clusters~jobs"),a.e("jobs")]).then(a.bind(null,"3f89"))},{path:"/clusters",name:"clusters",meta:{requiresAuth:!0,title:"Mantis - Clusters"},component:()=>Promise.all([a.e("clusters~jobs"),a.e("clusters~login"),a.e("clusters")]).then(a.bind(null,"1429"))},{path:"/clusters/create",name:"clusterCreatePage",meta:{requiresAuth:!0,title:"Mantis - Create Cluster"},component:()=>Promise.all([a.e("clusters~jobs"),a.e("clusters~login"),a.e("clusters")]).then(a.bind(null,"7a36"))},{path:"/clusters/:clusterId",name:"clusterDetail",meta:{requiresAuth:!0,title:"Mantis - Cluster Detail"},component:()=>Promise.all([a.e("clusters~jobs"),a.e("clusters~login"),a.e("clusters")]).then(a.bind(null,"797c"))},{path:"/clusters/:clusterId/update",name:"clusterUpdate",meta:{requiresAuth:!0,title:"Mantis - Cluster Update"},component:()=>Promise.all([a.e("clusters~jobs"),a.e("clusters~login"),a.e("clusters")]).then(a.bind(null,"2288"))},{path:"/clusters/:clusterId/submit",name:"clusterJobSubmit",meta:{requiresAuth:!0,title:"Mantis - Job Cluster Submit Job"},component:()=>Promise.all([a.e("clusters~jobs"),a.e("clusters~login"),a.e("clusters")]).then(a.bind(null,"c4ba"))},{path:"/summary",name:"summary",meta:{requiresAuth:!0,title:"Mantis - Summary"},component:()=>a.e("summary").then(a.bind(null,"4fb6"))},{path:"/admin",name:"admin",meta:{requiresAuth:!0,title:"Mantis - Admin"},component:()=>a.e("admin").then(a.bind(null,"6f22"))},{path:"/help",name:"help",meta:{requiresAuth:!1,title:"Mantis - Help"},component:()=>a.e("help").then(a.bind(null,"0987"))},{path:"/404",name:"404",component:()=>a.e("404").then(a.bind(null,"5e44"))},{path:"*",redirect:{name:"404"}}],scrollBehavior(t,e,a){return a||{x:0,y:0}}});st.beforeEach((t,e,a)=>{at(t,e,a),rt(t,e,a)});var ot=st,nt=(a("139c"),a("3c96"));r["default"].config.productionTip=!1,b(),E(),r["default"].use(o.a,{container:"body"}),r["default"].use(c.a),function(){const t={name:Object(nt["d"])(),email:Object(nt["c"])()};F["a"].dispatch(H["a"].LoginUser,t),F["a"].dispatch(H["a"].SetMantisMasters,Object(nt["a"])()),F["a"].dispatch(H["a"].SetMesosUrl,Object(nt["b"])())}(),new r["default"]({router:ot,store:F["a"],render:t=>t(tt)}).$mount("#app")},"63e0":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));const r={LoginUser:"LoginUser",LogoutUser:"LogoutUser",AddGlobalErrors:"AddGlobalErrors",SetMantisMasters:"SetMantisMasters",FetchMasterConfigs:"FetchMasterConfigs",SetMesosUrl:"SetMesosUrl",FetchJobs:"FetchJobs",UpdateJobsTablePageSize:"UpdateJobsTablePageSize",UpdateJobsTablePageNumber:"UpdateJobsTablePageNumber",FetchJobDetails:"FetchJobDetails",CreateJobCluster:"CreateJobCluster",FetchJobClusters:"FetchJobClusters",FetchArchivedWorkersForJob:"FetchArchivedWorkersForJob",StreamJobStatus:"StreamJobStatus",StreamJobOutput:"StreamJobOutput",ClearJobOutput:"ClearJobOutput",UpdateCurrentJobOutputMessagePreview:"UpdateCurrentJobOutputMessagePreview",StopJobOutputStream:"StopJobOutputStream",KillJobs:"KillJobs",ResubmitWorker:"ResubmitWorker",ScaleJobStage:"ScaleJobStage",ResetJobDetails:"ResetJobDetails",UpdateClusterTablePageSize:"UpdateClusterTablePageSize",UpdateClusterTablePageNumber:"UpdateClusterTablePageNumber",FetchJobClusterDetails:"FetchJobClusterDetails",FetchJobClusterJobs:"FetchJobClusterJobs",EnableJobCluster:"EnableJobCluster",DisableJobCluster:"DisableJobCluster",DeleteJobCluster:"DeleteJobCluster",UpdateClusterForm:"UpdateClusterForm",SubmitJobForCluster:"SubmitJobForCluster",QuickSubmitJob:"QuickSubmitJob",FetchLatestJobForCluster:"FetchLatestJobForCluster",FetchArtifacts:"FetchArtifacts",FetchJobArtifact:"FetchJobArtifact",UploadArtifact:"UploadArtifact",UpdateJobClusterStandard:"UpdateJobClusterStandard",UpdateJobClusterQuickArtifact:"UpdateJobClusterQuickArtifact",UpdateJobClusterQuickSla:"UpdateJobClusterQuickSla",UpdateJobClusterQuickMigrationStrategy:"UpdateJobClusterQuickMigrationStrategy",UpdateJobClusterQuickLabel:"UpdateJobClusterQuickLabel"}},"8d8d":function(t,e,a){"use strict";var r=a("09e3"),s=a.n(r);e["default"]=s.a},"9a27":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return c})),a.d(e,"f",(function(){return i})),a.d(e,"g",(function(){return u})),a.d(e,"d",(function(){return l})),a.d(e,"i",(function(){return b})),a.d(e,"e",(function(){return d})),a.d(e,"j",(function(){return m})),a.d(e,"h",(function(){return p}));var r=a("50ae");const s="Mantis UI user action";async function o(t=15,e=0,a="",s=""){const o=Object(r["d"])();let n=a?`&matching=.*${a}.*`:"";n+=s?`&labels=${s}`:"";const c=o.map(({client:a})=>a.get(`/api/v1/jobs/?pageSize=${t}&offset=${e}&compact=true${n}`));return Object(r["f"])(c)}async function n(t){const e=Object(r["d"])(),a=e.map(({client:e})=>e.get(`/api/v1/jobs/${t}`));return Object(r["f"])(a)}async function c(t){const e=Object(r["d"])(),a=e.map(({client:e})=>e.get(`/api/v1/jobs/${t}/archivedWorkers`));return Object(r["f"])(a)}async function i(t,e,a){const{client:o}=Object(r["b"])(),n=o.post(`/api/v1/jobs/${t}/actions/resubmitWorker`,{user:a,workerNumber:e,reason:s});return Object(r["f"])([n])}async function u(t,e,a,s){const{client:o}=Object(r["b"])(),n=o.post(`/api/v1/jobs/${t}/actions/scaleStage`,{JobId:t,StageNumber:e,NumWorkers:a,user:s});return Object(r["f"])([n])}async function l(t,e){const{client:a}=Object(r["b"])(),o=t.map(t=>a.delete(`/api/v1/jobs/${t}?user=${e}&reason=${s}`));return Object(r["f"])(o)}async function b(t,e,a,s){const o=Object(r["c"])(),n=`${o}/api/v1/jobstatus/${t}`;return Object(r["a"])(n,e,a,s)}async function d(t){const e=Object(r["d"])();let a=e.map(({client:e})=>e.post("/api/v1/jobs/actions/quickSubmit",t));return Object(r["f"])(a)}function m(t,e){const a=Object(r["c"])(),s=e?`?sampleMSec=${e}`:"";return`${a}/api/v1/jobconnectbyid/${t}${s}`}function p(t,e,a,s){return Object(r["a"])(t,e,a,s)}},b101:function(t,e,a){"use strict";var r=a("d469"),s=a.n(r);e["default"]=s.a},d469:function(t,e,a){t.exports={"user-controls":"TopNav_user-controls_1IBco"}}});
//# sourceMappingURL=app.316f6c00.js.map