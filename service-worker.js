if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const b=e=>s(e,c),f={module:{uri:c},exports:r,require:b};a[c]=Promise.all(i.map((e=>f[e]||b(e)))).then((e=>(d(...e),r)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.c8d0ab3e.css",revision:"3c3dbbb053d1c1984bf035a2770cfa0f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/21.43420ce8.js",revision:"1a04e89026f286dae9b84b2e2219b85e"},{url:"assets/js/22.3c5dcf58.js",revision:"6ddf5d64da9230127c7bc362e099e015"},{url:"assets/js/app.4448e33d.js",revision:"b9110fbe297bf05161372c83b3444ac3"},{url:"assets/js/layout-Blog.ebb5ec07.js",revision:"ba4caf52c4ab1db923e5eecf1d165d8d"},{url:"assets/js/layout-Layout.8241e617.js",revision:"18ef81168786c5402bb64b43e10e877c"},{url:"assets/js/layout-NotFound.07cd5122.js",revision:"b7cbaac79e05b02156389a497aa0bfc3"},{url:"assets/js/layout-Slide.44b92495.js",revision:"1517503197a12b0aa8b6ed9a391a8264"},{url:"assets/js/page-☁️新枫之谷（台服冒险岛）游戏下载.b0b44f1d.js",revision:"9caa15b4fcca13179b3683b19db71396"},{url:"assets/js/page-❓解决聊天打字全是问号.9482a1b1.js",revision:"6d6f6f6eeda9ff698acfb4c3eb06448f"},{url:"assets/js/page-🎈MapleStory各服务器对比及新人建议入坑选择指南.65f691d3.js",revision:"68cf2fa6dc41b573a6b63613da85bbb2"},{url:"assets/js/page-🎮启动游戏的方法.08dc92f8.js",revision:"679b640f579f954abf17686025f37478"},{url:"assets/js/page-💲beanfun乐豆点Gash充值教程.5e891772.js",revision:"85f164b56d725246e2a57691e99479f2"},{url:"assets/js/page-🔐新枫之谷（台服冒险岛）解锁教程.509410d3.js",revision:"368f38acb7e90dac6f30616e010748fb"},{url:"assets/js/page-🆔新枫之谷（台服冒险岛）账号注册.18ce3c63.js",revision:"6292c953ade477f8341dfecc3d664a32"},{url:"assets/js/page-小T同学xTikas.1a6bd608.js",revision:"ef5ee6cf2e22c4e05b09c72db58eb041"},{url:"assets/js/page-离心式洗号——揭秘岁城离心不为人知的事实.10475dc6.js",revision:"ae9561c8bbb327b988a3239a0c41e655"},{url:"assets/js/page-缤放登录器-乐豆第三方客户端：使用教程.b199226d.js",revision:"a23f1c3fb99a79a7907b20dc190893d1"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.2ead5018.js",revision:"294b43b9fec8ec70c1fc7cee6963bacf"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.eb5eb3e2.js",revision:"7311261c5f2366ba7cd9c587ada3726a"},{url:"assets/js/vendors~layout-Layout.43dc3415.js",revision:"7b177230c5ee4e6950e5feb0ed97a9c9"},{url:"assets/js/vendors~photo-swipe.47d32451.js",revision:"808c631d9a1fbb3d69bb4ef0cfeb1249"},{url:"assets/js/vendors~reveal.71754345.js",revision:"f7ded98bd64eb7d20d3267912fa0b1f7"},{url:"404.html",revision:"c6ca171fbfdf54826790acf865ce414e"},{url:"article/index.html",revision:"c4add51c39322b734e1c5fc805acac1a"},{url:"category/index.html",revision:"a91caa936cd2f757ba9abcb246b45ba1"},{url:"category/吃瓜/index.html",revision:"8f5da7fc80ebcec9cbb3739648d46959"},{url:"category/工具/index.html",revision:"7accccb75cfc0b60b5cf48d7d4242a6d"},{url:"category/新人教程/index.html",revision:"ce11aafe03194a708f1a8e7829d1ac6f"},{url:"download.html",revision:"68bdb0ce156000656ecb59fde5736ecb"},{url:"encrypt/index.html",revision:"b3696d36d278ef88b76da38d2e6ecd02"},{url:"how-to-start-the-game.html",revision:"14090aa0a354f206bc9069c6ffd3b770"},{url:"i-want-to-play-maplestory.html",revision:"717a31438680c40aba04118e336733ee"},{url:"index.html",revision:"22401634b91bb5d3f3dc493433065ce9"},{url:"lixin.html",revision:"b6ed5915bed00dd3669691daa726dcbe"},{url:"pungin-beanfun.html",revision:"1041e0d0dee9de9e3be21d05487171dd"},{url:"recharge-tutorial.html",revision:"75290fad5daec7f7684ec701ca72d181"},{url:"register-an-account.html",revision:"a850c38b05f36c5de4b2c6e6f9471139"},{url:"slide/index.html",revision:"648ff331bd1ee99ed5a6cafa44d5e0e1"},{url:"star/index.html",revision:"177f3d4304e0b42c59ab9fc7738a7744"},{url:"tag/Gash/index.html",revision:"9398717c87f6cb3b925ad23625287d02"},{url:"tag/index.html",revision:"08398fb208f82ae3b8606cbda072d49b"},{url:"tag/下载/index.html",revision:"ee0fa861859f1038113fb69a9589fe01"},{url:"tag/充值/index.html",revision:"88ac5080c549af8a9b4723c2c9b8624a"},{url:"tag/打字/index.html",revision:"479861961d9d2b132df691c7787166a1"},{url:"tag/指南/index.html",revision:"a92ee12aa8384e549e26dd32827e96ff"},{url:"tag/教程/index.html",revision:"2b893aedfe113ac36f9629e422d9467d"},{url:"tag/方法/index.html",revision:"e3cff6646d0db4707bb04afd8a6b533e"},{url:"tag/更新/index.html",revision:"bcf4ec28945ee7b2968065900b876ff6"},{url:"tag/注册/index.html",revision:"e6454251b0311fe11122f4b868ce10f1"},{url:"tag/洗号/index.html",revision:"822c5036dd32387c7c592a1733ef4370"},{url:"tag/游戏/index.html",revision:"6a7f14c2af833571ef920f0f49719d42"},{url:"tag/登录器/index.html",revision:"3179ca2be7e858d720a0c1ff13549c8d"},{url:"tag/离心/index.html",revision:"9866ddf338805951c5709a0826e59aca"},{url:"tag/缤放/index.html",revision:"50ea020700f922980b7cad3fce741485"},{url:"tag/聊天/index.html",revision:"31159f379738d3b562decab5936e5c7d"},{url:"tag/解锁/index.html",revision:"a5d26879ccd66e18c795f21790c496f2"},{url:"tag/账号/index.html",revision:"323856d673bb3fdd499b3276fa56886e"},{url:"timeline/index.html",revision:"9b18c310424636e6d434384f120c3995"},{url:"typing-problem.html",revision:"819184f90659c1659e9c38cbfdacb4e7"},{url:"unlock-tutorial.html",revision:"9aa9fdc797dbdb07dec1c44b567ddd4a"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"27a1fc7291f0c90cfb6979abb832cf5a"}],{}),e.cleanupOutdatedCaches()}));
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
