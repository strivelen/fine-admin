var V=Object.defineProperty;var j=(e,t,s)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var C=(e,t,s)=>(j(e,typeof t!="symbol"?t+"":t,s),s);import{r as u,j as a,c as B,u as z,a as H,H as $,S as N,U as W,b as q,B as G,L as K,d as J,D as Y,F as Q,T as X,P as Z,e as ee,E as te,I as se,C as ne,R as oe,f as ie,g as re,G as ae,h as le,i as ce,M as de,k as ue,l as pe,m as fe,n as me,o as he,p as ge,q as Oe,s as ye,t as _e,v as Ce,w as be,x as Ee,y as Le,A as ke,z as Ie,W as Re,J as xe,K as Se,N as y,O as ve,Q as Pe,V as Te,X as P,Y as De,Z as T,_ as Ae,$ as D,a0 as we,a1 as E,a2 as L,a3 as Ue,a4 as Fe,a5 as Me,a6 as Ve,a7 as je,a8 as Be,a9 as ze,aa as I,ab as He,ac as $e,ad as Ne,ae as We,af as qe,ag as Ge,ah as Ke,ai as Je}from"./vendor-0e720bfc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const Ye="modulepreload",Qe=function(e){return"/fine-admin/"+e},S={},c=function(t,s,r){if(!s||s.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(s.map(i=>{if(i=Qe(i),i in S)return;S[i]=!0;const l=i.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!r)for(let m=n.length-1;m>=0;m--){const O=n[m];if(O.href===i&&(!l||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${f}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Ye,l||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),l)return new Promise((m,O)=>{d.addEventListener("load",m),d.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},Xe={layout:"default",auth:!0},Ze={"/login":{title:"登录",layout:!1,auth:!1},"/non-menu":{title:"非菜单页面",menuKey:"/test"},"/details/:id?":{title:"动态详情页",menuKey:"/test"}},et=u.lazy(()=>c(()=>import("./AuthRoute-ca522e94.js"),["assets/AuthRoute-ca522e94.js","assets/useRequest-645097aa.js","assets/vendor-0e720bfc.js","assets/index-d62a84b9.js","assets/throttle-fe19b4d4.js"])),tt=u.lazy(()=>c(()=>import("./ErrorBoundary-094346df.js"),["assets/ErrorBoundary-094346df.js","assets/vendor-0e720bfc.js"])),st=u.lazy(()=>c(()=>import("./404-8da3bf27.js"),["assets/404-8da3bf27.js","assets/vendor-0e720bfc.js"])),nt=Object.assign({"/src/pages/404.tsx":()=>c(()=>import("./404-8da3bf27.js"),["assets/404-8da3bf27.js","assets/vendor-0e720bfc.js"]),"/src/pages/dashboard/index.tsx":()=>c(()=>import("./index-ec7be80d.js"),["assets/index-ec7be80d.js","assets/vendor-0e720bfc.js","assets/useRequest-645097aa.js","assets/index-d62a84b9.js","assets/throttle-fe19b4d4.js","assets/index-204b5fc8.css"]),"/src/pages/details/[[id]].tsx":()=>c(()=>import("./__id__-46f23fb1.js"),["assets/__id__-46f23fb1.js","assets/vendor-0e720bfc.js"]),"/src/pages/form/basic-form.tsx":()=>c(()=>import("./basic-form-24a5457c.js"),["assets/basic-form-24a5457c.js","assets/vendor-0e720bfc.js","assets/index-53ad0c6f.js","assets/index-45d4ede2.js","assets/AntdIcon-76890c80.js","assets/index-ac8d7459.js","assets/index-3129656e.js","assets/index-9fb95036.js","assets/index-f8dcf536.js","assets/throttle-fe19b4d4.js","assets/relativeTime-5abd1bf9.js","assets/index-68da9484.js","assets/index-b3379533.js","assets/index-35224c64.js"]),"/src/pages/form/step-form.tsx":()=>c(()=>import("./step-form-89badf84.js"),["assets/step-form-89badf84.js","assets/vendor-0e720bfc.js","assets/index-02d93196.js","assets/index-45d4ede2.js","assets/index-ac8d7459.js","assets/AntdIcon-76890c80.js","assets/index-9fb95036.js","assets/index-f8dcf536.js","assets/throttle-fe19b4d4.js","assets/relativeTime-5abd1bf9.js","assets/index-35224c64.js","assets/index-68da9484.js"]),"/src/pages/index.tsx":()=>c(()=>import("./index-3dd101a5.js"),["assets/index-3dd101a5.js","assets/index-ec7be80d.js","assets/vendor-0e720bfc.js","assets/useRequest-645097aa.js","assets/index-d62a84b9.js","assets/throttle-fe19b4d4.js","assets/index-204b5fc8.css"]),"/src/pages/list/search/index.tsx":()=>c(()=>import("./index-89d60017.js"),["assets/index-89d60017.js","assets/vendor-0e720bfc.js","assets/index-d62a84b9.js","assets/domTarget-a50ce1e5.js","assets/useRequest-645097aa.js","assets/throttle-fe19b4d4.js","assets/index-53ad0c6f.js","assets/index-45d4ede2.js","assets/AntdIcon-76890c80.js","assets/index-ac8d7459.js","assets/index-35224c64.js","assets/index-f8dcf536.js","assets/relativeTime-5abd1bf9.js"]),"/src/pages/list/table-list/index.tsx":()=>c(()=>import("./index-dfcac295.js"),["assets/index-dfcac295.js","assets/vendor-0e720bfc.js","assets/styled-components.browser.esm-7dc2a07b.js","assets/Table-d7866c4c.js","assets/index-53ad0c6f.js","assets/index-45d4ede2.js","assets/AntdIcon-76890c80.js","assets/index-ac8d7459.js","assets/index-3129656e.js","assets/index-f8dcf536.js","assets/throttle-fe19b4d4.js","assets/relativeTime-5abd1bf9.js","assets/index-02d93196.js","assets/index-9fb95036.js","assets/index-b3379533.js","assets/index-35224c64.js"]),"/src/pages/login/index.tsx":()=>c(()=>import("./index-3cc66bee.js"),["assets/index-3cc66bee.js","assets/vendor-0e720bfc.js","assets/index-45d4ede2.js","assets/index-53ad0c6f.js","assets/AntdIcon-76890c80.js","assets/index-ac8d7459.js","assets/index-23026184.css"]),"/src/pages/non-menu.tsx":()=>c(()=>import("./non-menu-0b3de502.js"),["assets/non-menu-0b3de502.js","assets/vendor-0e720bfc.js"]),"/src/pages/profile/advanced.tsx":()=>c(()=>import("./advanced-ecfffcd5.js"),["assets/advanced-ecfffcd5.js","assets/styled-components.browser.esm-7dc2a07b.js","assets/vendor-0e720bfc.js","assets/index-45d4ede2.js"]),"/src/pages/profile/basic.tsx":()=>c(()=>import("./basic-8606f7b6.js"),["assets/basic-8606f7b6.js","assets/vendor-0e720bfc.js","assets/Table-d7866c4c.js","assets/index-53ad0c6f.js","assets/index-45d4ede2.js","assets/AntdIcon-76890c80.js","assets/index-ac8d7459.js","assets/index-3129656e.js","assets/index-f8dcf536.js","assets/throttle-fe19b4d4.js","assets/relativeTime-5abd1bf9.js","assets/index-02d93196.js"]),"/src/pages/result/fail.tsx":()=>c(()=>import("./fail-9288d395.js"),["assets/fail-9288d395.js","assets/vendor-0e720bfc.js"]),"/src/pages/result/success.tsx":()=>c(()=>import("./success-aa319fbb.js"),["assets/success-aa319fbb.js","assets/vendor-0e720bfc.js"]),"/src/pages/settings/change-password.tsx":()=>c(()=>import("./change-password-276a0416.js"),["assets/change-password-276a0416.js","assets/vendor-0e720bfc.js","assets/index-53ad0c6f.js","assets/index-45d4ede2.js","assets/AntdIcon-76890c80.js","assets/index-ac8d7459.js","assets/index-9fb95036.js","assets/index-f8dcf536.js","assets/throttle-fe19b4d4.js","assets/relativeTime-5abd1bf9.js"]),"/src/pages/settings/my-info.tsx":()=>c(()=>import("./my-info-639db725.js"),["assets/my-info-639db725.js","assets/vendor-0e720bfc.js","assets/index-b3379533.js","assets/index-f8dcf536.js","assets/index-45d4ede2.js","assets/index-ac8d7459.js","assets/AntdIcon-76890c80.js","assets/throttle-fe19b4d4.js","assets/relativeTime-5abd1bf9.js","assets/index-9fb95036.js","assets/index-53ad0c6f.js"]),"/src/pages/test.tsx":()=>c(()=>import("./test-446376bf.js"),["assets/test-446376bf.js","assets/vendor-0e720bfc.js"])}),ot=Object.assign({"/src/layouts/default/index.tsx":()=>c(()=>import("./index-62a4ee33.js"),["assets/index-62a4ee33.js","assets/vendor-0e720bfc.js","assets/index-d62a84b9.js","assets/domTarget-a50ce1e5.js","assets/relativeTime-5abd1bf9.js","assets/index-45d4ede2.js","assets/AntdIcon-76890c80.js","assets/index-3fb9063e.css"])}),it=Object.entries(ot).map(([e,t])=>{const s=e.replace("/src/layouts/","").replace(/.tsx|\/index.tsx/,""),r=u.lazy(t);return{type:s,component:a(r,{})}}),rt=Object.entries(nt).map(([e,t])=>{const s=u.lazy(t),r=ct(e),n={...Xe,...Ze[r]||{}};return{...n,path:r,element:n.auth?a(et,{children:a(s,{})}):a(s,{})}}),at=dt(it,rt),lt=B([...at,{path:"*",element:a(st,{})}],{basename:"/fine-admin/"});function ct(e){let t=e.replace("/src/pages","").replace(/.tsx|\/index.tsx/,"");return/\[\[.+?\]\]/.test(t)?t.replace(/\[\[/g,":").replace(/\]\]/g,"?"):/\[.+?\]/.test(t)?t.replace(/\[/g,":").replace(/\]/g,""):t||"/"}function dt(e,t){const s=t.filter(n=>n.layout===!1);return[...e.map(n=>{const i=t.filter(l=>l.layout===n.type);return{errorElement:a(tt,{}),element:n.component,children:i}}),...s]}const A=H,g=z;o.HomeOutlined=$;o.SettingOutlined=N;o.UnorderedListOutlined=W;o.UserOutlined=q;o.BlockOutlined=G;o.LinkOutlined=K;o.LockOutlined=J;o.DashboardOutlined=Y;o.FormOutlined=Q;o.TableOutlined=X;o.ProfileOutlined=Z;o.DownOutlined=ee;o.EllipsisOutlined=te;o.InfoCircleOutlined=se;o.CloseCircleOutlined=ne;o.RightOutlined=oe;o.CheckCircleOutlined=ie;o.DingdingOutlined=re;o.GithubOutlined=ae;o.FullscreenOutlined=le;o.FullscreenExitOutlined=ce;o.MenuUnfoldOutlined=de;o.MenuFoldOutlined=ue;o.LoadingOutlined=pe;o.IdcardOutlined=fe;o.PoweroffOutlined=me;o.CheckOutlined=he;o.BellOutlined=ge;o.CaretUpOutlined=Oe;o.CaretDownOutlined=ye;o.StarOutlined=_e;o.LikeOutlined=Ce;o.MessageOutlined=be;o.DownloadOutlined=Ee;o.PlusOutlined=Le;o.AlipayCircleFilled=ke;o.TaobaoCircleOutlined=Ie;o.WeiboCircleOutlined=Re;o.EyeOutlined=xe;o.EyeInvisibleOutlined=Se;function o({type:e,...t}){if(!e)return null;const s=o[e];return a(s,{...t})}const ut={layoutMode:"sidemenu",collapsed:!1,breadcrumb:["首页"],isDarkMode:!1,themeColor:"#1677ff",isOpenSetting:!1,isFixedWidth:!1,isFixedHeader:!0},w=y({name:"layout",initialState:ut,reducers:{setLayoutMode:(e,t)=>{e.layoutMode=t.payload},setBreadcrumb:(e,t)=>{e.breadcrumb=t.payload},setCollapsed:(e,t)=>{e.collapsed=t.payload},setDarkMode:(e,t)=>{e.isDarkMode=t.payload},setThemeColor:(e,t)=>{e.themeColor=t.payload},setIsOpenSetting:(e,t)=>{e.isOpenSetting=t.payload},setIsFixedWidth:(e,t)=>{e.isFixedWidth=t.payload},setIsFixedHeader:(e,t)=>{e.isFixedHeader=t.payload}}}),{setLayoutMode:Gt,setBreadcrumb:Kt,setCollapsed:Jt,setDarkMode:pt,setThemeColor:ft,setIsOpenSetting:Yt,setIsFixedWidth:Qt,setIsFixedHeader:Xt}=w.actions,Zt=e=>e.layout.layoutMode,es=e=>e.layout.breadcrumb,R=e=>e.layout.isDarkMode,U=e=>e.layout.themeColor,ts=e=>e.layout.isOpenSetting,ss=e=>e.layout.isFixedWidth,ns=e=>e.layout.isFixedHeader,mt=w.reducer,ht=a(o,{type:"LoadingOutlined",style:{fontSize:24},spin:!0});function gt({height:e}){const t=g(R);return a(ve,{align:"middle",justify:"center",style:{flex:1,height:e||"100vh",backgroundColor:t?"#000":"#fff"},children:a(Pe,{children:a(Te,{indicator:ht,tip:"加载中..."})})})}let k;function Ot(){const e=P.useApp();k=e.message,e.modal,e.notification}function yt(){return Ot(),a(u.Suspense,{fallback:a(gt,{}),children:a(De,{router:lt})})}function _t(e=1){return new Promise(t=>setTimeout(()=>t({data:e}),500))}const Ct={value:2,status:"idle"},b=T("counter/fetchCount",async e=>(await _t(e)).data),bt=y({name:"counter",initialState:Ct,reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},incrementByAmount:(e,t)=>{e.value+=t.payload}},extraReducers:e=>{e.addCase(b.pending,t=>{t.status="loading"}).addCase(b.fulfilled,(t,s)=>{t.status="idle",t.value+=s.payload}).addCase(b.rejected,t=>{t.status="failed"})}}),Et=bt.reducer,h={app:{name:"后台管理系统"},api:{baseUrl:"https://www.fastmock.site/mock/d6f0134049a0e22b01d7aae6fafc9045/api",timeout:3e4,sessionKey:"sessionkey",status:{200:"请求成功",401:"未授权，请重新登录",403:"拒绝访问",404:"请求错误，未找到该资源",408:"请求超时",500:"服务器发生错误",501:"服务未实现",502:"网络错误",503:"服务不可用",504:"网络超时",505:"HTTP版本不受支持"}},pageSize:20,themeColors:["#1677ff","#ee3f4d","#c08eaf","#95509f","#722ed1","#00b96b","#7cb305","#13c2c2","#d6a01d"],fixedWidth:1200};function Lt(e,t){const s=document.createElement("a");s.href=e,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s)}function kt(e,t="",s){let r=new Blob([e],{type:s});const n=window.URL.createObjectURL(r);Lt(n,t),window.URL.revokeObjectURL(n)}function It(e=[],t,s){let r=JSON.parse(JSON.stringify(e));if(r.length===0)return[];let n=[];for(let i of r){const l=i[t];if(l){const f=It(l,t,i.key);delete i[t],n=[...n,{...i,_parent_:s},...f]}else n.push({...i,_parent_:s})}return n}class Rt{constructor(t={}){C(this,"instance");C(this,"baseConfig",{baseURL:h.api.baseUrl,timeout:h.api.timeout});this.instance=Ae.create(Object.assign(this.baseConfig,t)),this.instance.interceptors.request.use(s=>{const r=Tt(_.getState());return r&&(s.headers[h.api.sessionKey]=r),s},s=>Promise.reject(s)),this.instance.interceptors.response.use(s=>{var i;const{headers:r,data:n}=s;if((i=r["content-type"])!=null&&i.includes("application/json")&&n.Code!==200){const l=n.Message||h.api.status[n.Code]||"HTTP响应错误";return n.Code===401&&M.purge(),k.error(l),Promise.reject(l)}return s},s=>(k.error(`${s.message}, 请检查网络或联系管理员`),Promise.reject(s)))}get(t,s){return this.instance.get(t,s).then(({data:r})=>r.Data)}post(t,s,r){return this.instance.post(t,s,r).then(({data:n})=>n.Data)}getBlob(t,s,r){return this.post(t,s,{responseType:"blob",...r}).then(n=>{const{data:i,headers:l}=n,f=l["content-type"],x=l["content-disposition"].split("=")[1];return{blob:i,filename:decodeURIComponent(x),fileType:f}})}async getStreamFileToDownload(t,s,r){const{blob:n,filename:i,fileType:l}=await this.getBlob(t,s,r);return kt(n,i,l),{blob:n,filename:i,fileType:l}}request(t){return this.instance.request(t).then(s=>s.data)}}const p=new Rt,os=()=>p.get("/AnalysisChart"),xt=async e=>p.post("/User/Login",e),is=()=>p.get("/User/Auth"),St=()=>p.get("/User/Get"),rs=e=>p.post("/Article/List",e),as=e=>p.post("/Rule/List",e),vt={userInfo:{},token:void 0,isLogin:!1},v=T("user/fetchLogin",async e=>await xt(e)),F=y({name:"user",initialState:vt,reducers:{setToken:(e,t)=>{e.token=t.payload},setUserInfo:(e,t)=>{e.userInfo=t.payload}},extraReducers:e=>{e.addCase(v.fulfilled,(t,s)=>{const{UserInfo:r,SessionKey:n,MenuItems:i=[]}=s.payload;t.userInfo=r,t.token=n,t.isLogin=!0}).addCase(v.rejected,t=>{t.isLogin=!1}).addCase(D,t=>{t.userInfo={},t.token=void 0,t.isLogin=!1})}}),{setToken:ls,setUserInfo:Pt}=F.actions,Tt=e=>e.user.token,cs=e=>e.user.userInfo,Dt=F.reducer,At={loading:!1},wt=y({name:"loading",initialState:At,reducers:{setLoading:(e,t)=>{e.loading=t.payload}}}),Ut=wt.reducer,Ft=we({loading:Ut,counter:Et,user:E({key:"user",storage:L,blacklist:["status"]},Dt),layout:E({key:"layout",storage:L},mt)}),Mt={key:"root",version:1,storage:L,blacklist:["user","layout","counter","loading"]},Vt=E(Mt,Ft),_=Ue({reducer:Vt,middleware:e=>e({serializableCheck:{ignoredActions:[Me,Ve,je,Be,D,ze]}})}),M=Fe(_),jt=async function(){if(!JSON.parse(localStorage.getItem("persist:user")||"{}").token)return;const t=await St();_.dispatch(Pt(t))},{darkAlgorithm:Bt}=He;function ds(){const e=A(),t=g(R);return a($e,{checked:t,checkedChildren:"🌜",unCheckedChildren:"🌞",onChange:s=>e(pt(s))})}function zt({children:e}){const t=g(R);return u.useEffect(()=>{document.body.className=t?"dark":""},[t]),a(I,{theme:{algorithm:t?[Bt]:void 0},children:e})}function Ht({children:e}){const t=g(U);return a(I,{theme:{token:{colorPrimary:t}},children:e})}function us(){const e=A(),t=g(U);return a(Ne,{wrap:!0,size:"small",direction:"horizontal",children:h.themeColors.map((s,r)=>a($t,{color:s,isActive:t===s,onClick:()=>{e(ft(s))}},r))})}function $t({color:e,isActive:t,onClick:s}){return a("div",{style:{cursor:"pointer",borderRadius:6,width:26,height:26,overflow:"hidden",backgroundColor:e},onClick:s,children:a(Nt,{isShow:t})})}function Nt({isShow:e}){return a("div",{style:{display:e?"block":"none",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,.3)",textAlign:"center",lineHeight:"26px"},children:a(o,{type:"CheckOutlined",style:{color:"#fff"}})})}We.locale("zh-cn");jt();qe.createRoot(document.getElementById("root")).render(a(Ge,{store:_,children:a(Ke,{loading:null,persistor:M,children:a(zt,{children:a(Ht,{children:a(I,{locale:Je,input:{autoComplete:"off"},children:a(P,{children:a(yt,{})})})})})})}));export{ds as D,o as I,gt as L,us as T,os as a,rs as b,h as c,A as d,Kt as e,is as f,as as g,Zt as h,ss as i,cs as j,Qt as k,v as l,k as m,ns as n,Xt as o,M as p,Gt as q,Yt as r,Tt as s,ts as t,g as u,It as v,at as w,es as x,R as y,Jt as z};