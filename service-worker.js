if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,c)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let d={};const f=s=>a(s,r),o={module:{uri:r},exports:d,require:f};e[r]=Promise.all(i.map((s=>o[s]||f(s)))).then((s=>(c(...s),d)))}}define(["./workbox-ebf2f394"],(function(s){"use strict";s.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/0.styles.c8d0ab3e.css",revision:"3c3dbbb053d1c1984bf035a2770cfa0f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/icons/safari-pinned-tab.svg",revision:"27a470b797437f0a4199a0ea96856b1b"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/24.b9a24af9.js",revision:"f7842d52a2380d88456c4441b7493d2b"},{url:"assets/js/25.8d47e2d8.js",revision:"78bfc0eb7c2552e7e4e4f454235860bb"},{url:"assets/js/app.3fb67297.js",revision:"18d088eaef57a96ed50cab5407f5c7c6"},{url:"assets/js/layout-Blog.ebb5ec07.js",revision:"ba4caf52c4ab1db923e5eecf1d165d8d"},{url:"assets/js/layout-Layout.8241e617.js",revision:"18ef81168786c5402bb64b43e10e877c"},{url:"assets/js/layout-NotFound.07cd5122.js",revision:"b7cbaac79e05b02156389a497aa0bfc3"},{url:"assets/js/layout-Slide.44b92495.js",revision:"1517503197a12b0aa8b6ed9a391a8264"},{url:"assets/js/page-☁️新枫之谷（台服冒险岛）游戏下载.3f8dd5f1.js",revision:"4ecdc113dfa46c220371f451becdf488"},{url:"assets/js/page-❓解决聊天打字全是问号.4325a767.js",revision:"05812890ab1db4110469e4e6009c7b43"},{url:"assets/js/page-🎈MapleStory各服务器对比及新人建议入坑选择指南.4031a4d6.js",revision:"3eb952b886357a694634a29e7c649882"},{url:"assets/js/page-🎮启动游戏的方法.56e5b45d.js",revision:"81b5c0d67611d69ab2b318b265b23851"},{url:"assets/js/page-💲beanfun乐豆点Gash充值教程.f000cfa4.js",revision:"a5c5cb87722e4128fe4b07d19d532fd7"},{url:"assets/js/page-🔓新枫之谷（台服冒险岛）解锁教程.7eead4a0.js",revision:"596b0054e53691ec5375aa7bc48aa940"},{url:"assets/js/page-🆔新枫之谷（台服冒险岛）账号注册.054cc08d.js",revision:"5c72480c157689d328f3d9e9a796a748"},{url:"assets/js/page-关于一个充满了新枫之谷探索成果的网站.d4a275c3.js",revision:"2f4e43540d34063fd87c512a154648f2"},{url:"assets/js/page-多招教您防护自己的账号安全，让您不用担心盗号.5934a0e2.js",revision:"be8b91335c7a0f392cf5ba9cd0c0f582"},{url:"assets/js/page-小T同学xTikas.756ebf9a.js",revision:"7fc1297dc9315d8c67bc19af4c5aa795"},{url:"assets/js/page-提供新枫之谷安全可靠的代练服务.ed18a702.js",revision:"ed5fbdcdca7eefa757f00b6ca0ae98e0"},{url:"assets/js/page-离心式洗号——揭秘岁城离心不为人知的事实.aaf85aa8.js",revision:"5846dff4a7a77717032cea4607e9134f"},{url:"assets/js/page-缤放登录器-乐豆第三方客户端：使用教程.c10dd083.js",revision:"57c0bf6d0f4009facc4372ec0f66cfcf"},{url:"assets/js/react-dom.production.min.js",revision:"23bfe7e99565ee8f34afd63c06f4c24b"},{url:"assets/js/react.production.min.js",revision:"61699b70cf57abe63fdf5f4007d36ec1"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.2ead5018.js",revision:"294b43b9fec8ec70c1fc7cee6963bacf"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.eb5eb3e2.js",revision:"7311261c5f2366ba7cd9c587ada3726a"},{url:"assets/js/vendors~layout-Layout.c77a190d.js",revision:"6cca5d6d98a39cfcfd6a27ff48ffd5ba"},{url:"assets/js/vendors~photo-swipe.45df7ea1.js",revision:"609f2ef895659a36f5d1153a08665ea0"},{url:"assets/js/vendors~reveal.e63480cf.js",revision:"8f044969214c4a74a51010e5eeb9ed25"},{url:"assets/js/vue.min.js",revision:"b21b8531847604ab5f2f5caaef51ba31"},{url:"index.html",revision:"18a006ba0d75faf416cf8e120b74f00a"},{url:"404.html",revision:"020b37fd2543b16cea695ed1183fe3be"}],{}),s.cleanupOutdatedCaches()}));
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
