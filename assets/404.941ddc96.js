import{_ as i,f as d,u as _,g as p,r as f,c as k,b as a,t as m,d as g,w as v,a as h,o as L}from"./app.8f4b3090.js";const x=d({name:"404",setup(){var t,u,l;const e=_(),o=p(),s=(t=o.value.notFound)!=null?t:["Oops! You're lost. \u{1F615}"],n=()=>s[Math.floor(Math.random()*s.length)],c=(u=o.value.home)!=null?u:e.value,r=(l=o.value.backToHome)!=null?l:"Back to home";return{getMsg:n,homeLink:c,homeText:r}}}),T={class:"theme-mix"},B={class:"theme-mix-content not-found"},M=a("h1",null,"404",-1),$=h(" \u2190 ");function b(e,o,s,n,c,r){const t=f("RouterLink");return L(),k("div",T,[a("div",B,[M,a("blockquote",null,m(e.getMsg()),1),$,g(t,{to:e.homeLink},{default:v(()=>[h(m(e.homeText),1)]),_:1},8,["to"])])])}var N=i(x,[["render",b]]);export{N as default};
