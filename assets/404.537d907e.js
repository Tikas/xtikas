import{_ as h,f as i,u as _,g as p,r as f,c as k,b as a,t as m,d as g,w as v,a as d,o as L}from"./app.ed7b8dca.js";const x=i({name:"404",setup(){var t,u,l;const e=_(),o=p(),s=(t=o.value.notFound)!=null?t:["Oops! You're lost. \u{1F615}"],n=()=>s[Math.floor(Math.random()*s.length)],c=(u=o.value.home)!=null?u:e.value,r=(l=o.value.backToHome)!=null?l:"Back to home";return{getMsg:n,homeLink:c,homeText:r}}}),T={class:"theme-mix"},b={class:"theme-mix-content not-found"},B=a("h1",null,"404",-1),M=d(" \u2190 ");function $(e,o,s,n,c,r){const t=f("RouterLink");return L(),k("div",T,[a("div",b,[B,a("blockquote",null,m(e.getMsg()),1),M,g(t,{to:e.homeLink},{default:v(()=>[d(m(e.homeText),1)]),_:1},8,["to"])])])}var N=h(x,[["render",$]]);export{N as default};
