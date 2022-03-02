var ve=Object.defineProperty,me=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var Y=(e,t,s)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Z=(e,t)=>{for(var s in t||(t={}))ke.call(t,s)&&Y(e,s,t[s]);if(X)for(var s of X(t))fe.call(t,s)&&Y(e,s,t[s]);return e},x=(e,t)=>me(e,he(t));import{f as $,_,o as n,a as l,b as p,h as E,i as V,j as c,k as U,l as z,m as W,r as m,n as k,w as I,e as D,t as b,p as q,q as f,s as ge,v as H,x as be,y as N,F as M,z as C,A as $e,B as _e,C as Le,D as oe,E as ae,g as B,G as ye,H as Te,I as se,d as S,u as we,J as re,K,L as P,M as le,N as ee,O as Se,P as ie,Q as Ne,R as G,S as Me,T as Be,U as Ce,V as Ae,W as Ie,X as Pe}from"./app.7db06daa.js";const Re=$({name:"ToggleSidebarButton",emits:["toggle"]}),Oe=p("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","shape-rendering":"geometricPrecision",viewBox:"0 0 24 24",height:"1.5em",width:"1.5em",style:{color:"currentcolor"}},[p("path",{d:"M3 12h18M3 6h18M3 18h18"})],-1),De=[Oe];function He(e,t,s,a,r,d){return n(),l("div",{class:"toggle-sidebar-button",onClick:t[0]||(t[0]=o=>e.$emit("toggle"))},De)}var ue=_(Re,[["render",He]]);const Ee=$({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=E(),s=ge(),{item:a}=V(e),r=c(()=>U(a.value.link)),d=c(()=>z(a.value.link)||W(a.value.link)),o=c(()=>{if(!d.value){if(a.value.target)return a.value.target;if(r.value)return"_blank"}}),i=c(()=>o.value==="_blank"),u=c(()=>!r.value&&!d.value&&!i.value),v=c(()=>{if(!d.value){if(a.value.rel)return a.value.rel;if(i.value)return"noopener noreferrer"}}),h=c(()=>a.value.ariaLabel||a.value.text),y=c(()=>{const T=Object.keys(s.value.locales);return T.length?!T.some(L=>L===a.value.link):a.value.link!=="/"});return{isActiveInSubpath:c(()=>!u.value||!y.value?!1:t.path.startsWith(a.value.link)),isBlankTarget:i,isRouterLink:u,linkRel:v,linkTarget:o,linkAriaLabel:h}}}),Ue=["href","rel","target","aria-label"];function Ge(e,t,s,a,r,d){const o=m("RouterLink"),i=m("OutboundLink");return e.isRouterLink?(n(),k(o,q({key:0,class:["nav-link",{"router-link-active":e.isActiveInSubpath}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:I(()=>[D(b(e.item.text),1)]),_:1},16,["class","to","aria-label"])):(n(),l("a",q({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[D(b(e.item.text)+" ",1),e.isBlankTarget?(n(),k(i,{key:0})):f("",!0)],16,Ue))}var j=_(Ee,[["render",Ge]]);const je=$({name:"Dropdown",components:{NavLink:j},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=V(e),s=H(!1),a=E();be(()=>a.path,()=>{s.value=!1});const r=c(()=>t.value.ariaLabel||t.value.text);return{open:s,dropdownAriaLabel:r}}}),Fe={class:"dropdown-wrapper"},qe=["aria-label"],Ve={class:"arrow-down"},ze=["aria-label"],We={class:"dropdown-menu"},Ke={key:0},Je={class:"mobile-dropdown-menu"},Qe={key:0};function Xe(e,t,s,a,r,d){const o=m("NavLink");return n(),l("div",Fe,[p("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel},[p("span",Ve,b(e.item.text),1)],8,qe),p("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[0]||(t[0]=i=>e.open=!e.open)},[p("span",{class:N(e.open?"arrow-down":"arrow-right")},b(e.item.text),3)],8,ze),p("ul",We,[(n(!0),l(M,null,C(e.item.children,(i,u)=>(n(),l("li",{key:i.link||u,class:"dropdown-item"},[i.children?(n(),l("h4",Ke,"TODO")):(n(),k(o,{key:1,item:i},null,8,["item"]))]))),128))]),$e(p("ul",Je,[(n(!0),l(M,null,C(e.item.children,(i,u)=>(n(),l("li",{key:i.link||u,class:"dropdown-item"},[i.children?(n(),l("h4",Qe,"TODO")):(n(),k(o,{key:1,item:i},null,8,["item"]))]))),128))],512),[[_e,e.open]])])}var Ye=_(je,[["render",Xe]]);const ce=e=>oe(e)?ae(e):e.children?x(Z({},e),{children:e.children.map(ce)}):e,Ze=()=>{const e=B();return c(()=>(e.value.navbar?e.value.navbar:[]).map(ce))},xe=$({name:"NavbarLinks",components:{NavLink:j,Dropdown:Ye},setup(){return{navbarLinks:c(()=>[...Ze().value,...Le().value])}}}),et={key:0,class:"navbar-links-wrapper"},tt={class:"navbar-links"};function nt(e,t,s,a,r,d){const o=m("Dropdown"),i=m("NavLink");return e.navbarLinks.length?(n(),l("div",et,[p("nav",tt,[(n(!0),l(M,null,C(e.navbarLinks,u=>(n(),l("div",{key:u.link,class:"navbar-links-item"},[u.children?(n(),k(o,{key:0,item:u},null,8,["item"])):(n(),k(i,{key:1,item:u},null,8,["item"]))]))),128))])])):f("",!0)}var de=_(xe,[["render",nt]]);const ot=$({name:"IconBase",props:{iconName:{type:String,required:!0},width:{type:[Number,String],default:24},height:{type:[Number,String],default:24},iconColor:{type:String,default:"currentColor"}}}),at=["stroke","width","height"];function st(e,t,s,a,r,d){return n(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:e.iconColor,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","shape-rendering":"geometricPrecision",width:e.width,height:e.height,viewBox:"0 0 24 24",class:N("icon-"+e.iconName),role:"presentation",style:Te({color:e.iconColor})},[ye(e.$slots,"default")],14,at)}var rt=_(ot,[["render",st]]);const lt=$({name:"Sun"}),it=p("circle",{cx:"12",cy:"12",r:"5"},null,-1),ut=p("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"},null,-1),ct=[it,ut];function dt(e,t,s,a,r,d){return n(),l("g",null,ct)}var pt=_(lt,[["render",dt]]);const vt=$({name:"Moon"}),mt={d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"};function ht(e,t,s,a,r,d){return n(),l("path",mt)}var kt=_(vt,[["render",ht]]);const ft=$({name:"NavbarFeatures",components:{IconBase:rt,Sun:pt,Moon:kt},emits:["toggle"],setup(){const e=B(),t=c(()=>{var r;return(r=e.value.mode)!=null?r:"auto"}),s=se(),a=c(()=>e.value.toggleThemeModeAriaLabel);return{themeModeConfig:t,themeMode:s,toggleThemeModeAriaLabel:a}}}),gt={class:"navbar-features"},bt={key:0,class:"navbar-features-item"},$t=["aria-label"];function _t(e,t,s,a,r,d){const o=m("Moon"),i=m("IconBase"),u=m("Sun");return n(),l("div",gt,[e.themeModeConfig==="auto"?(n(),l("div",bt,[p("button",{onClick:t[0]||(t[0]=v=>e.$emit("toggle")),type:"button","aria-label":e.toggleThemeModeAriaLabel},[e.themeMode==="dark"?(n(),k(i,{key:0,"icon-name":"moon",width:"1.5em",height:"1.5em"},{default:I(()=>[S(o)]),_:1})):(n(),k(i,{key:1,"icon-name":"sun",width:"1.5em",height:"1.5em"},{default:I(()=>[S(u)]),_:1}))],8,$t)])):f("",!0)])}var Lt=_(ft,[["render",_t]]);const yt=$({name:"Navbar",components:{ToggleSidebarButton:ue,NavbarLinks:de,NavbarFeatures:Lt},emits:["toggle-sidebar","toggle-theme-mode"],setup(){const e=B(),t=we(),s=c(()=>e.value.navbar?e.value.navbar.length:!1),a=c(()=>e.value.home||t.value),r=c(()=>e.value.logo),d=c(()=>e.value.title);return{hasNavbarLinks:s,siteBrandLink:a,siteBrandLogo:r,siteBrandTitle:d,withBase:re}}}),Tt={class:"navbar"},wt={class:"navbar-inner"},St={class:"site-brand"},Nt=["src"],Mt={class:"navbar-right"};function Bt(e,t,s,a,r,d){const o=m("ToggleSidebarButton"),i=m("RouterLink"),u=m("NavbarLinks"),v=m("NavbarFeatures"),h=m("NavbarSearch");return n(),l("header",Tt,[p("div",wt,[p("div",St,[S(o,{onToggle:t[0]||(t[0]=y=>e.$emit("toggle-sidebar"))}),e.siteBrandLogo||e.siteBrandTitle?(n(),k(i,{key:0,to:e.siteBrandLink},{default:I(()=>[e.siteBrandLogo?(n(),l("div",{key:0,class:N(["logo-box",{"logo-with-title":e.siteBrandTitle}])},[p("img",{class:"logo",src:e.withBase(e.siteBrandLogo),alt:"VuePress Mix Theme Logo"},null,8,Nt)],2)):f("",!0),e.siteBrandTitle?(n(),l("strong",{key:1,class:N(["site-brand-title",{"can-hide":e.siteBrandLogo}])},b(e.siteBrandTitle),3)):f("",!0)]),_:1},8,["to"])):f("",!0)]),S(u,{class:"can-hide"}),p("div",Mt,[S(v,{onToggle:t[1]||(t[1]=y=>e.$emit("toggle-theme-mode"))}),S(h)])])])}var Ct=_(yt,[["render",Bt]]);const At=$({name:"SidebarItemLink",props:{item:{type:Object,required:!0}},setup(e){const{item:t}=V(e),s=c(()=>U(t.value.link)),a=c(()=>z(t.value.link)||W(t.value.link)),r=c(()=>{if(!a.value){if(t.value.target)return t.value.target;if(s.value)return"_blank"}}),d=c(()=>r.value==="_blank"),o=c(()=>!s.value&&!a.value&&!d.value),i=c(()=>{if(!a.value){if(t.value.rel)return t.value.rel;if(d.value)return"noopener noreferrer"}}),u=c(()=>t.value.ariaLabel||t.value.text),v=E(),h=c(()=>t.value.link===v.fullPath);return{isBlankTarget:d,isRouterLink:o,linkTarget:r,linkRel:i,linkAriaLabel:u,isActiveItem:h}}}),It={class:"sidebar-item-text"},Pt=["href","rel","target","aria-label"],Rt={class:"sidebar-item-text"};function Ot(e,t,s,a,r,d){const o=m("RouterLink"),i=m("OutboundLink");return n(),l("li",{class:N(["sidebar-item",{active:e.isActiveItem}])},[e.isRouterLink?(n(),k(o,q({key:0,class:"sidebar-item-link",to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:I(()=>[p("span",It,b(e.item.text),1)]),_:1},16,["to","aria-label"])):(n(),l("a",{key:1,class:"sidebar-outbound-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},[p("div",Rt,[p("span",null,b(e.item.text),1),e.isBlankTarget?(n(),k(i,{key:0})):f("",!0)])],8,Pt))],2)}var pe=_(At,[["render",Ot]]);const Dt=$({name:"SidebarItemGroup",components:{SidebarItemLink:pe},props:{item:{type:Object,required:!0}},setup(e){var T,L;const{item:t}=V(e),s=c(()=>U(t.value.link)),a=c(()=>z(t.value.link)||W(t.value.link)),r=c(()=>{if(!a.value){if(t.value.target)return t.value.target;if(s.value)return"_blank"}}),d=c(()=>r.value==="_blank"),o=c(()=>!s.value&&!a.value&&!d.value),i=c(()=>{if(!a.value){if(t.value.rel)return t.value.rel;if(d.value)return"noopener noreferrer"}}),u=c(()=>t.value.ariaLabel||t.value.text),v=B(),h=c(()=>{var w,R,O;return(O=(w=t.value)==null?void 0:w.collapsible)!=null?O:((R=v.value)==null?void 0:R.collapsible)===!0}),y=H(h.value===!0&&((L=t.value.collapsed)!=null?L:((T=v.value)==null?void 0:T.collapsed)===!0));return{linkTarget:r,linkRel:i,linkAriaLabel:u,isRouterLink:o,collapsible:h,collapsed:y,handleClick:w=>{w.preventDefault(),y.value=!y.value}}}}),Ht=["aria-label"],Et={class:"sidebar-item-group-title"},Ut=p("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{width:"16px"}},[p("path",{d:"M9 18l6-6-6-6"})],-1),Gt=[Ut],jt={class:"sidebar-item-link-group-title"},Ft=p("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{width:"16px"}},[p("path",{d:"M9 18l6-6-6-6"})],-1),qt=[Ft],Vt=["href","rel","target","aria-label"],zt={class:"sidebar-items sidebar-items-sub"};function Wt(e,t,s,a,r,d){const o=m("RouterLink"),i=m("OutboundLink"),u=m("SidebarItemLink"),v=m("SidebarItemGroup",!0);return n(),l("li",{class:N(["sidebar-item",{collapsed:e.collapsed}])},[e.item.type==="group"?(n(),l("a",{key:0,class:"sidebar-item-group","aria-label":e.linkAriaLabel},[p("span",Et,b(e.item.text),1),e.collapsible?(n(),l("span",{key:0,class:"arrow",onClick:t[0]||(t[0]=(...h)=>e.handleClick&&e.handleClick(...h))},Gt)):f("",!0)],8,Ht)):e.isRouterLink&&e.item.type==="link-group"?(n(),k(o,q({key:1,class:"sidebar-item-link-group",to:e.item.link,rel:e.linkRel,"aria-label":e.linkAriaLabel},e.$attrs),{default:I(()=>[p("span",jt,b(e.item.text),1),e.collapsible?(n(),l("span",{key:0,class:"arrow",onClick:t[1]||(t[1]=(...h)=>e.handleClick&&e.handleClick(...h))},qt)):f("",!0)]),_:1},16,["to","rel","aria-label"])):(n(),l("a",{key:2,class:"sidebar-outbound-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},[D(b(e.item.text)+" ",1),e.isBlankTarget?(n(),k(i,{key:0})):f("",!0)],8,Vt)),p("ul",zt,[(n(!0),l(M,null,C(e.item.children,h=>(n(),l(M,{key:h.link},[h.type==="link"?(n(),k(u,{key:0,item:h},null,8,["item"])):(n(),k(v,{key:1,item:h},null,8,["item"]))],64))),128))])],2)}var Kt=_(Dt,[["render",Wt]]);const Jt=$({name:"Sidebar",components:{NavbarLinks:de,SidebarItemLink:pe,SidebarItemGroup:Kt},setup(){return{sidebarItems:K()}}}),Qt={class:"sidebar"},Xt={class:"sidebar-inner"},Yt={class:"sidebar-items"};function Zt(e,t,s,a,r,d){const o=m("NavbarLinks"),i=m("SidebarItemLink"),u=m("SidebarItemGroup");return n(),l("aside",Qt,[S(o),p("div",Xt,[p("ul",Yt,[(n(!0),l(M,null,C(e.sidebarItems,v=>(n(),l(M,{key:v.link},[v.type==="link"?(n(),k(i,{key:0,item:v},null,8,["item"])):(n(),k(u,{key:1,item:v},null,8,["item"]))],64))),128))])])])}var xt=_(Jt,[["render",Zt]]);const en=$({name:"Home",components:{NavLink:j},setup(){const e=P(),t=le(),s=c(()=>e.value.heroImage?re(e.value.heroImage):null),a=c(()=>e.value.heroText===null?null:e.value.heroText||t.value.title||"Hello"),r=c(()=>e.value.heroAlt||a.value||"hero"),d=c(()=>e.value.tagline===null?null:e.value.tagline||t.value.description||"Welcome to your VuePress site"),o=c(()=>ee(e.value.actions)?e.value.actions.map(({text:h,link:y,type:g="primary"})=>({text:h,link:y,type:g})):[]),i=c(()=>ee(e.value.features)?e.value.features:[]),u=c(()=>e.value.footer),v=c(()=>e.value.footerHtml);return{heroImage:s,heroAlt:r,heroText:a,tagline:d,actions:o,features:i,footer:u,footerHtml:v}}}),tn=["aria-labelledby"],nn={class:"hero"},on=["src","alt"],an={key:1,id:"main-title"},sn={key:2,class:"description"},rn={key:3,class:"actions"},ln={key:0,class:"features"},un={class:"theme-mix-content"},cn=["innerHTML"],dn=["textContent"];function pn(e,t,s,a,r,d){const o=m("NavLink"),i=m("Content");return n(),l("main",{class:"home","aria-labelledby":e.heroText?"main-title":null},[p("header",nn,[e.heroImage?(n(),l("img",{key:0,src:e.heroImage,alt:e.heroAlt},null,8,on)):f("",!0),e.heroText?(n(),l("h1",an,b(e.heroText),1)):f("",!0),e.tagline?(n(),l("p",sn,b(e.tagline),1)):f("",!0),e.actions.length?(n(),l("p",rn,[(n(!0),l(M,null,C(e.actions,u=>(n(),k(o,{key:u.text,class:N(["action-button",[u.type]]),item:u},null,8,["class","item"]))),128))])):f("",!0)]),e.features.length?(n(),l("div",ln,[(n(!0),l(M,null,C(e.features,u=>(n(),l("div",{key:u.title,class:"feature"},[p("h2",null,b(u.title),1),p("p",null,b(u.details),1)]))),128))])):f("",!0),p("div",un,[S(i)]),e.footer?(n(),l(M,{key:1},[e.footerHtml?(n(),l("div",{key:0,class:"footer",innerHTML:e.footer},null,8,cn)):(n(),l("div",{key:1,class:"footer",textContent:b(e.footer)},null,8,dn))],64)):f("",!0)],8,tn)}var vn=_(en,[["render",pn]]);const mn=$({name:"Toc",setup(){var y;const e=G(),s=((y=B().value.tocLevel)!=null?y:3)-1,a=[],r=(g,T=0)=>g.length===0||T>=s?c(()=>a):(g.map(L=>{a.push(L),L.children.length&&r(L.children,++T),T=0}),c(()=>a)),d=r(e.value.headers),o=H(!1),i=E(),u=H(i.hash);let v=null;const h=Se(()=>{var O,J,Q;o.value=!1;const g=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),T=Array.from(document.querySelectorAll(".toc-anchor")),w=Array.from(document.querySelectorAll(".header-anchor")).filter(A=>T.some(F=>F.hash===A.hash));g===0&&w.length&&(v=w[0]);let R=g;for(let A=0;A<w.length;A++){const F=(J=(O=w[A].parentElement)==null?void 0:O.offsetTop)!=null?J:0;Math.abs(g-F)<R&&(R=Math.abs(g-F),v=w[A])}u.value=decodeURIComponent((Q=v==null?void 0:v.hash)!=null?Q:"")},0);return ie(()=>{var g,T;if(u.value){const L=Array.from(document.querySelectorAll(".header-anchor"));for(let w=0;w<L.length;w++)decodeURIComponent(L[w].hash)===u.value&&scrollTo(0,(T=(g=L[w].parentElement)==null?void 0:g.offsetTop)!=null?T:0)}window.addEventListener("scroll",h)}),Ne(()=>{window.removeEventListener("scroll",h)}),{anchors:d,isTocOpen:o,hash:u}}}),hn=p("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","shape-rendering":"geometricPrecision",viewBox:"0 0 24 24",height:"1.5em",width:"1.5em",style:{color:"currentcolor"}},[p("path",{d:"M21 10H7M21 6H3M21 14H3M21 18H7"})],-1),kn=[hn],fn={class:"toc-items"},gn=["href"];function bn(e,t,s,a,r,d){return n(),l("div",{class:N(["theme-mix-toc",{"toc-open":e.isTocOpen}])},[p("div",{class:"toc-mask",onClick:t[0]||(t[0]=o=>e.isTocOpen=!1)}),p("button",{class:"mobile-toc-title",onClick:t[1]||(t[1]=o=>e.isTocOpen=!e.isTocOpen)},kn),p("div",{class:N(["toc-items-wrap",{"show-toc":e.isTocOpen}])},[p("ul",fn,[(n(!0),l(M,null,C(e.anchors,o=>(n(),l("li",{class:N(["toc-item",{["toc-level-"+o.level]:!0,active:`#${o.slug}`===e.hash}]),key:o.slug,onClick:t[2]||(t[2]=i=>e.isTocOpen=!e.isTocOpen)},[p("a",{class:"toc-anchor",href:"#"+o.slug},b(o.title),9,gn)],2))),128))])],2)],2)}var $n=_(mn,[["render",bn]]);const _n=e=>!U(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Ln={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},yn=({docsRepo:e,docsBranch:t,docsDir:s,filePathRelative:a,editLinkPattern:r})=>{const d=_n(e);let o;return r?o=r:d!==null&&(o=Ln[d]),o?o.replace(/:repo/,U(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Me(`${Be(s)}/${a}`)):null},Tn=()=>{const e=B(),t=G(),s=P();return c(()=>{var v,h;if(!((h=(v=s.value.editLink)!=null?v:e.value.editLink)!=null?h:!0))return null;const{docsRepo:r,docsBranch:d="main",docsDir:o="",editLinkText:i}=e.value;if(!r)return null;const u=yn({docsRepo:r,docsBranch:d,docsDir:o,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return u?{text:i!=null?i:"Edit this page",link:u}:null})},wn=()=>{const e=le(),t=B(),s=G(),a=P();return c(()=>{var o,i,u,v;return!((i=(o=a.value.lastUpdated)!=null?o:t.value.lastUpdated)!=null?i:!0)||!((u=s.value.git)==null?void 0:u.updatedTime)?null:new Date((v=s.value.git)==null?void 0:v.updatedTime).toLocaleString(e.value.lang)})},Sn=$({name:"PageMeta",components:{NavLink:j},setup(){const e=B(),t=Tn(),s=wn();return{themeLocale:e,editNavLink:t,lastUpdated:s}}}),Nn={class:"page-meta"},Mn={key:1,class:"last-updated"},Bn={class:"meta-item-label"},Cn={class:"meta-item-info"};function An(e,t,s,a,r,d){const o=m("NavLink");return n(),l("div",Nn,[e.editNavLink?(n(),k(o,{key:0,class:"meta-item-label edit-link",item:e.editNavLink},null,8,["item"])):f("",!0),e.lastUpdated?(n(),l("div",Mn,[p("span",Bn,b(e.themeLocale.lastUpdatedText)+": ",1),p("span",Cn,b(e.lastUpdated),1)])):f("",!0)])}var In=_(Sn,[["render",An]]);const te=e=>e===!1?null:oe(e)?ae(e):Ce(e)?e:!1,ne=(e,t,s)=>{const a=e.findIndex(r=>r.link===t);if(a!==-1){const r=e[a+s];return(r==null?void 0:r.link)?r:null}return null},Pn=$({name:"PageNav",components:{NavLink:j},setup(){const e=P(),t=K(),s=E(),a=c(()=>{const o=[],i=u=>(u.map(v=>{(v.type==="link"||v.type==="link-group")&&o.push(v),v.type!=="link"&&i(v.children)}),o);return i(t.value)}),r=c(()=>{const o=te(e.value.prev);return o!==!1?o:ne(a.value,s.path,-1)}),d=c(()=>{const o=te(e.value.next);return o!==!1?o:ne(a.value,s.path,1)});return{prevNavLink:r,nextNavLink:d}}}),Rn={key:0,class:"page-nav"},On={class:"inner"},Dn={key:0,class:"prev"},Hn=D(" \u2190 "),En={key:1,class:"next"},Un=D(" \u2192 ");function Gn(e,t,s,a,r,d){const o=m("NavLink");return e.prevNavLink||e.nextNavLink?(n(),l("nav",Rn,[p("div",On,[e.prevNavLink?(n(),l("span",Dn,[Hn,S(o,{item:e.prevNavLink},null,8,["item"])])):f("",!0),e.nextNavLink?(n(),l("span",En,[S(o,{item:e.nextNavLink},null,8,["item"]),Un])):f("",!0)])])):f("",!0)}var jn=_(Pn,[["render",Gn]]);const Fn=$({name:"Page",components:{Toc:$n,PageMeta:In,PageNav:jn},setup(){const e=B(),t=G(),s=c(()=>t.value.headers),a=P(),r=c(()=>s.value.length&&e.value.toc!==!1&&a.value.toc!==!1);return{headers:s,shouldShowToc:r}}}),qn={class:"page"},Vn={class:"theme-mix-content"},zn={key:0,class:"toc-wrap"};function Wn(e,t,s,a,r,d){const o=m("Content"),i=m("PageMeta"),u=m("PageNav"),v=m("Toc");return n(),l("main",qn,[p("div",{class:N(["theme-mix-content-wrap",{"with-toc":e.shouldShowToc}])},[p("div",Vn,[S(o),S(i),S(u)]),e.shouldShowToc?(n(),l("div",zn,[S(v)])):f("",!0)],2)])}var Kn=_(Fn,[["render",Wn]]);const Jn=$({name:"Layout",components:{Navbar:Ct,ToggleSidebarButton:ue,Sidebar:xt,Home:vn,Page:Kn},setup(){const e=G(),t=P(),s=B(),a=c(()=>t.value.navbar!==!1&&s.value.navbar!==!1),r=K(),d=H(!1),o=L=>{d.value=typeof L=="boolean"?L:!d.value},i=c(()=>({"no-sidebar":!r.value.length,"sidebar-open":d.value,"with-navbar":a.value}));let u;ie(()=>{u=Ae().afterEach(()=>{o(!1)})}),Ie(()=>{u()});const v=Pe(),h=v.resolve,y=v.pending,g=se();return{page:e,frontmatter:t,shouldShowNavbar:a,toggleSidebar:o,containerClass:i,onBeforeEnter:h,onBeforeLeave:y,toggleThemeMode:()=>{g.value==="light"?g.value="dark":g.value="light",document.documentElement.dataset.theme=g.value,localStorage.setItem("theme",g.value)}}}}),Qn={class:"theme-layout"};function Xn(e,t,s,a,r,d){const o=m("Navbar"),i=m("ToggleSidebarButton"),u=m("Sidebar"),v=m("Home"),h=m("Page");return n(),l("div",{class:N(["theme-mix",e.containerClass])},[e.shouldShowNavbar?(n(),k(o,{key:0,onToggleSidebar:e.toggleSidebar,onToggleThemeMode:e.toggleThemeMode},null,8,["onToggleSidebar","onToggleThemeMode"])):(n(),k(i,{key:1,onToggle:e.toggleSidebar},null,8,["onToggle"])),p("div",{class:"sidebar-mask",onClick:t[0]||(t[0]=y=>e.toggleSidebar(!1))}),p("div",Qn,[S(u),e.frontmatter.home?(n(),k(v,{key:0})):(n(),k(h,{key:e.page.path}))])],2)}var xn=_(Jn,[["render",Xn]]);export{xn as default};
