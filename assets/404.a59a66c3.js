import{_ as h,f as _,u as d,g as p,r as f,a as k,d as a,t as m,b as v,w as g,e as i,o as L}from"./app.91a8b2e6.js";const x=_({name:"404",setup(){var t,u,l;const e=d(),o=p(),s=(t=o.value.notFound)!=null?t:["Oops! You're lost. \u{1F615}"],n=()=>s[Math.floor(Math.random()*s.length)],c=(u=o.value.home)!=null?u:e.value,r=(l=o.value.backToHome)!=null?l:"Back to home";return{getMsg:n,homeLink:c,homeText:r}}}),T={class:"theme-mix"},B={class:"theme-mix-content not-found"},M=a("h1",null,"404",-1),$=i(" \u2190 ");function b(e,o,s,n,c,r){const t=f("RouterLink");return L(),k("div",T,[a("div",B,[M,a("blockquote",null,m(e.getMsg()),1),$,v(t,{to:e.homeLink},{default:g(()=>[i(m(e.homeText),1)]),_:1},8,["to"])])])}var N=h(x,[["render",b],["__file","404.vue"]]);export{N as default};
