if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,d)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let c={};const f=s=>a(s,r),b={module:{uri:r},exports:c,require:f};e[r]=Promise.all(i.map((s=>b[s]||f(s)))).then((s=>(d(...s),c)))}}define(["./workbox-ebf2f394"],(function(s){"use strict";s.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/0.styles.c8d0ab3e.css",revision:"3c3dbbb053d1c1984bf035a2770cfa0f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/icons/safari-pinned-tab.svg",revision:"27a470b797437f0a4199a0ea96856b1b"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/22.8614024d.js",revision:"aa078037f1f4c5be2ea23520e2f12aa8"},{url:"assets/js/23.2247122e.js",revision:"59bacf5831a77d7094bd3aebdd01bf47"},{url:"assets/js/app.ff6de53a.js",revision:"afc870884237acde0990fd35f31b25c3"},{url:"assets/js/layout-Blog.ebb5ec07.js",revision:"ba4caf52c4ab1db923e5eecf1d165d8d"},{url:"assets/js/layout-Layout.8241e617.js",revision:"18ef81168786c5402bb64b43e10e877c"},{url:"assets/js/layout-NotFound.07cd5122.js",revision:"b7cbaac79e05b02156389a497aa0bfc3"},{url:"assets/js/layout-Slide.44b92495.js",revision:"1517503197a12b0aa8b6ed9a391a8264"},{url:"assets/js/page-☁️新枫之谷（台服冒险岛）游戏下载.2c18bac4.js",revision:"5d7c6359bf6b88babcbb529d5cbe0056"},{url:"assets/js/page-❓解决聊天打字全是问号.3d129a0f.js",revision:"ea32cbbd8e442f87e5ef943eefcf8897"},{url:"assets/js/page-🎈MapleStory各服务器对比及新人建议入坑选择指南.66dd0207.js",revision:"095c951ce35affcbfe5e15e97f91aba7"},{url:"assets/js/page-🎮启动游戏的方法.83b51349.js",revision:"bc68779634be75ba22ddb6fa8df68129"},{url:"assets/js/page-💲beanfun乐豆点Gash充值教程.e0ec0045.js",revision:"c523dc03201850cef9f79a9e77404ed3"},{url:"assets/js/page-🔐新枫之谷（台服冒险岛）解锁教程.2d6b088b.js",revision:"3eeba71663ffd4f5f8802495320d0cd7"},{url:"assets/js/page-🆔新枫之谷（台服冒险岛）账号注册.13edfec2.js",revision:"936eed82232a10433bf8de08067943a5"},{url:"assets/js/page-关于一个充满了新枫之谷探索成果的网站.c1bcbb0f.js",revision:"c51f95f420fde89cd764be595d82e44d"},{url:"assets/js/page-小T同学xTikas.b62bc16c.js",revision:"f39a579ac11a64c434f37eef8ce4db00"},{url:"assets/js/page-离心式洗号——揭秘岁城离心不为人知的事实.9a347b57.js",revision:"c521fe5ca0dffbc73a8a4151bb774a9e"},{url:"assets/js/page-缤放登录器-乐豆第三方客户端：使用教程.06dc8db4.js",revision:"bd0d09a66581095bb5668ef302c797f6"},{url:"assets/js/react-dom.production.min.js",revision:"23bfe7e99565ee8f34afd63c06f4c24b"},{url:"assets/js/react.production.min.js",revision:"61699b70cf57abe63fdf5f4007d36ec1"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.2ead5018.js",revision:"294b43b9fec8ec70c1fc7cee6963bacf"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.eb5eb3e2.js",revision:"7311261c5f2366ba7cd9c587ada3726a"},{url:"assets/js/vendors~layout-Layout.8aae58f2.js",revision:"f72b41013a27b0ff962eb4191d186492"},{url:"assets/js/vendors~photo-swipe.1bcd8de1.js",revision:"f94361ee983b0dfd49d72d43732f370c"},{url:"assets/js/vendors~reveal.86373c54.js",revision:"cd8ca3972a2386da1ee07176686ce99f"},{url:"assets/js/vue.min.js",revision:"b21b8531847604ab5f2f5caaef51ba31"},{url:"index.html",revision:"eeda6943077ee49cd01b49956bf8972c"},{url:"404.html",revision:"b80d4a8371ce8e0a939c6d6f5ab76d28"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
