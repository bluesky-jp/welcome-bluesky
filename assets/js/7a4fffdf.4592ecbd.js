"use strict";(self.webpackChunkwelcome_bluesky=self.webpackChunkwelcome_bluesky||[]).push([[1172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Bluesky \u306e\u306f\u3058\u3081\u65b9",l={unversionedId:"intro/index",id:"intro/index",title:"Bluesky \u306e\u306f\u3058\u3081\u65b9",description:"Bluesky \u306b\u8208\u5473\u304c\u3042\u308b\u3051\u3069\u3001\u306f\u3058\u3081\u65b9\u304c\u5206\u304b\u3089\u306a\u3044\u3068\u3044\u3046\u65b9\u306b\u3002",source:"@site/docs/intro/index.md",sourceDirName:"intro",slug:"/intro/",permalink:"/welcome-bluesky/docs/intro/",draft:!1,editUrl:"https://github.com/bluesky-jp/welcome-bluesky/edit/main/docs/intro/index.md",tags:[],version:"current",lastUpdatedAt:1707287103,formattedLastUpdatedAt:"2024\u5e742\u67087\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u30a2\u30ab\u30a6\u30f3\u30c8\u767b\u9332\u65b9\u6cd5",permalink:"/welcome-bluesky/docs/intro/register"}},s={},p=[{value:"Bluesky \u3068\u306f\uff1f",id:"bluesky-\u3068\u306f",level:2},{value:"\u767b\u9332\u306b\u3064\u3044\u3066",id:"\u767b\u9332\u306b\u3064\u3044\u3066",level:2}],c={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bluesky-\u306e\u306f\u3058\u3081\u65b9"},"Bluesky \u306e\u306f\u3058\u3081\u65b9"),(0,o.kt)("p",null,"Bluesky \u306b\u8208\u5473\u304c\u3042\u308b\u3051\u3069\u3001\u306f\u3058\u3081\u65b9\u304c\u5206\u304b\u3089\u306a\u3044\u3068\u3044\u3046\u65b9\u306b\u3002"),(0,o.kt)("h2",{id:"bluesky-\u3068\u306f"},"Bluesky \u3068\u306f\uff1f"),(0,o.kt)("p",null,"Bluesky \u306f Twitter \u306e\u985e\u4f3c\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u671f\u5f85\u3055\u308c\u3066\u3044\u308b\u5206\u6563 SNS \u306e\u4e00\u3064\u3067\u3059\u3002 ",(0,o.kt)("a",{parentName:"p",href:"/docs/extras/reference#x-%E6%97%A7-twitter"},"X \ud83d\udcd6")," \u306e\u5275\u8a2d\u8005\u3067\u3042\u308b Jack Dorsey \u306b\u3088\u308b\u51fa\u8cc7\u3092\u53d7\u3051\u3066\u304a\u308a\u3001 Bluesky PBC \u306b\u3088\u3063\u3066\u958b\u767a\u30fb\u904b\u55b6\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u904b\u55b6\u81ea\u4f53\u306f\u5927\u304d\u306a\u7d44\u7e54\u3067\u306f\u306a\u304f\u3001\u305d\u306e\u305f\u3081\u304b\u3001",(0,o.kt)("strong",{parentName:"p"},"Bluesky \u306e\u30a2\u30d7\u30ea\u306f\u65e5\u672c\u8a9e\u5316\u3055\u308c\u3066\u304a\u3089\u305a"),"\u3001\u64cd\u4f5c\u306b\u8ff7\u3046\u3053\u3068\u304c\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u306e\u76ee\u7684\u306e\u4e00\u3064\u306b\u305d\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u767b\u9332\u306b\u3064\u3044\u3066"},"\u767b\u9332\u306b\u3064\u3044\u3066"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u516c\u5f0f\u30b5\u30fc\u30d0\u30fc\u3067\u3042\u308b ",(0,o.kt)("a",{parentName:"strong",href:"https://bsky.app/"},"bsky.app")," \u306f\u3069\u306a\u305f\u3067\u3082\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Bluesky \u306f\u304a\u304a\u3088\u305d\u4e00\u5e74\u7a0b\u5ea6\u306e\u9593\u3001\u62db\u5f85\u5236\u3067\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u767b\u9332\u3067\u3057\u305f\u3002\u305d\u306e\u305f\u3081\u3001\u65e2\u306b Bluesky \u3092\u306f\u3058\u3081\u3066\u3044\u308b\u77e5\u308a\u5408\u3044\u304b\u3089\u62db\u5f85\u30b3\u30fc\u30c9\u3092\u8b72\u308a\u53d7\u3051\u3066\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002\u3057\u304b\u3057\u30012024/2/6 \u306b\u516c\u5f0f\u30b5\u30fc\u30d0\u30fc\u3067\u3042\u308b ",(0,o.kt)("a",{parentName:"p",href:"https://bsky.app/"},"bsky.app")," \u306e\u62db\u5f85\u5236\u304c\u7d42\u308f\u308a\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u767b\u9332\u304c\u30aa\u30fc\u30d7\u30f3\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u305d\u306e\u305f\u3081\u3001\u62db\u5f85\u30b3\u30fc\u30c9\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u65b9\u3082\u3001\u73fe\u5728\u306f\u81ea\u7531\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3057\u305f\u3002")))}y.isMDXComponent=!0}}]);