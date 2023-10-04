"use strict";(self.webpackChunkwelcome_bluesky=self.webpackChunkwelcome_bluesky||[]).push([[8804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(a),p=r,b=m["".concat(s,".").concat(p)]||m[p]||c[p]||l;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),d=a(7392),u=a(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,d]=b({queryString:a,groupId:n}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=s??m;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,l]),tabValues:l}}var f=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==i&&(m(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:c},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},4034:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{src:t,width:a,height:r,ml:l,mr:o,mt:i,mb:s}=e;return n.createElement("img",{src:t,width:a,height:r,style:{marginTop:i,marginBottom:s,marginLeft:l,marginRight:o,borderRadius:"8px",boxShadow:"0 0 8px rgba(0, 0, 0, 0.1)"}})}},3643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162),i=a(4034);const s={sidebar_position:1},d="DNS \u30ec\u30b3\u30fc\u30c9\u7de8",u={unversionedId:"walks/custom_domain/setting/use_dns_record",id:"walks/custom_domain/setting/use_dns_record",title:"DNS \u30ec\u30b3\u30fc\u30c9\u7de8",description:"\u3053\u3053\u3067\u306f\u3001DNS \u30ec\u30b3\u30fc\u30c9\u306b TXT \u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u30c9\u30e1\u30a4\u30f3\u3092\u30cf\u30f3\u30c9\u30eb\u306b\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/walks/custom_domain/setting/use_dns_record.md",sourceDirName:"walks/custom_domain/setting",slug:"/walks/custom_domain/setting/use_dns_record",permalink:"/welcome-bluesky/docs/walks/custom_domain/setting/use_dns_record",draft:!1,editUrl:"https://github.com/bluesky-jp/welcome-bluesky/edit/main/docs/walks/custom_domain/setting/use_dns_record.md",tags:[],version:"current",lastUpdatedAt:1696411187,formattedLastUpdatedAt:"2023\u5e7410\u67084\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u306e\u8a2d\u5b9a",permalink:"/welcome-bluesky/docs/walks/custom_domain/setting/"},next:{title:".well-known \u7de8",permalink:"/welcome-bluesky/docs/walks/custom_domain/setting/use_wellknown"}},m={},c=[{value:"\u8a2d\u5b9a\u65b9\u6cd5",id:"\u8a2d\u5b9a\u65b9\u6cd5",level:2},{value:"1. DNS \u8a2d\u5b9a\u9805\u76ee\u306e\u78ba\u8a8d",id:"1-dns-\u8a2d\u5b9a\u9805\u76ee\u306e\u78ba\u8a8d",level:3},{value:"1. <code>Setting</code> \u304b\u3089 <code>Change handle</code> \u3092\u9078\u629e",id:"1-setting-\u304b\u3089-change-handle-\u3092\u9078\u629e",level:4},{value:"2. <code>I have my own domain</code> \u30ea\u30f3\u30af\u3092\u9078\u629e",id:"2-i-have-my-own-domain-\u30ea\u30f3\u30af\u3092\u9078\u629e",level:4},{value:"3. \u8a2d\u5b9a\u5185\u5bb9\u306e\u30b3\u30d4\u30fc",id:"3-\u8a2d\u5b9a\u5185\u5bb9\u306e\u30b3\u30d4\u30fc",level:4},{value:"2. DNS \u306e\u8a2d\u5b9a",id:"2-dns-\u306e\u8a2d\u5b9a",level:3},{value:"1. DNS \u8a2d\u5b9a\u753b\u9762\u306b\u9077\u79fb",id:"1-dns-\u8a2d\u5b9a\u753b\u9762\u306b\u9077\u79fb",level:4},{value:"2. TXT \u30ec\u30b3\u30fc\u30c9\u306e\u8ffd\u52a0",id:"2-txt-\u30ec\u30b3\u30fc\u30c9\u306e\u8ffd\u52a0",level:4},{value:"3. Bluesky \u3067 DNS \u8a8d\u8a3c",id:"3-bluesky-\u3067-dns-\u8a8d\u8a3c",level:3}],p={toc:c},b="wrapper";function k(e){let{components:t,...s}=e;return(0,r.kt)(b,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dns-\u30ec\u30b3\u30fc\u30c9\u7de8"},"DNS \u30ec\u30b3\u30fc\u30c9\u7de8"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001DNS \u30ec\u30b3\u30fc\u30c9\u306b TXT \u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u30c9\u30e1\u30a4\u30f3\u3092\u30cf\u30f3\u30c9\u30eb\u306b\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u8a2d\u5b9a\u65b9\u6cd5"},"\u8a2d\u5b9a\u65b9\u6cd5"),(0,r.kt)("h3",{id:"1-dns-\u8a2d\u5b9a\u9805\u76ee\u306e\u78ba\u8a8d"},"1. DNS \u8a2d\u5b9a\u9805\u76ee\u306e\u78ba\u8a8d"),(0,r.kt)("p",null,"\u8cfc\u5165\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u306b\u3064\u3044\u3066 DNS (\u30c9\u30e1\u30a4\u30f3\u306b\u7d10\u3065\u304f IP \u306a\u3069\u306e\u89e3\u6c7a\u3092\u884c\u3046\u30b7\u30b9\u30c6\u30e0) \u306e\u8a2d\u5b9a\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u305d\u306e\u969b\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092 Bluesky \u304b\u3089\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u964d ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://bsky.app"},"\u516c\u5f0f\u306e Web \u30af\u30e9\u30a4\u30a2\u30f3\u30c8"))," \u3092\u4f7f\u7528\u3057\u3066\u3001\u305d\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u7b49\u3092\u8a18\u8f09\u3057\u307e\u3059\u304c\u3001Android \u3084 iOS \u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u3064\u3044\u3066\u3082\u64cd\u4f5c\u65b9\u6cd5\u306f\u57fa\u672c\u7684\u306b\u306f\u540c\u3058\u3067\u3059\u3002")),(0,r.kt)("h4",{id:"1-setting-\u304b\u3089-change-handle-\u3092\u9078\u629e"},"1. ",(0,r.kt)("inlineCode",{parentName:"h4"},"Setting")," \u304b\u3089 ",(0,r.kt)("inlineCode",{parentName:"h4"},"Change handle")," \u3092\u9078\u629e"),(0,r.kt)("p",null,"\u753b\u9762\u5de6\u5074\u306e\u30e1\u30cb\u30e5\u30fc\u304b\u3089 ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," (\u8a2d\u5b9a) \u3092\u9078\u629e\u3057\u307e\u3059\u3002\u6b21\u306b\u3001\u8a2d\u5b9a\u753b\u9762\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced")," \u30bb\u30af\u30b7\u30e7\u30f3\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"Change handle")," (\u30cf\u30f3\u30c9\u30eb\u306e\u5909\u66f4) \u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{height:"350",mb:"1rem",mr:"20px",src:a(5371).Z,mdxType:"Image"}),(0,r.kt)(i.Z,{height:"350",mb:"1rem",src:a(4918).Z,mdxType:"Image"}),(0,r.kt)("h4",{id:"2-i-have-my-own-domain-\u30ea\u30f3\u30af\u3092\u9078\u629e"},"2. ",(0,r.kt)("inlineCode",{parentName:"h4"},"I have my own domain")," \u30ea\u30f3\u30af\u3092\u9078\u629e"),(0,r.kt)("p",null,"\u51fa\u3066\u304d\u305f\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"I have my own domain")," (\u81ea\u5206\u306e\u30c9\u30e1\u30a4\u30f3\u3092\u6301\u3063\u3066\u3044\u307e\u3059) \u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{width:"500",src:a(6880).Z,mdxType:"Image"}),(0,r.kt)("h4",{id:"3-\u8a2d\u5b9a\u5185\u5bb9\u306e\u30b3\u30d4\u30fc"},"3. \u8a2d\u5b9a\u5185\u5bb9\u306e\u30b3\u30d4\u30fc"),(0,r.kt)("p",null,"DNS \u306e\u8a2d\u5b9a\u9805\u76ee\u306e\u5185\u5bb9\u3067\u3042\u308b ",(0,r.kt)("inlineCode",{parentName:"p"},"did=")," \u304b\u3089\u59cb\u307e\u308b\u6587\u5b57\u5217\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{width:"500",mb:"1rem",src:a(3614).Z,mdxType:"Image"}),(0,r.kt)("p",null,"\u3053\u3053\u307e\u3067\u306e\u5de5\u7a0b\u3067\u4e0a\u8a18\u306e\u753b\u9762\u304c\u51fa\u529b\u3055\u308c\u305f\u3068\u601d\u3044\u307e\u3059\u306e\u3067\u3001\u8d64\u67a0\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"Value:")," \u306e\u4e0b\u306b\u3042\u308b ",(0,r.kt)("inlineCode",{parentName:"p"},"did=")," \u3067\u59cb\u307e\u308b\u6587\u5b57\u5217\u3092\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4e0a\u8a18\u306e\u753b\u50cf\u306e\u4f8b\u3060\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"did=did:pic:iijrtk7ocored6zuziwmqq3c")," \u3092\u30b3\u30d4\u30fc\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u30b3\u30d4\u30fc\u3057\u305f\u5024\u306f\u6b21\u3067 DNS \u306e\u8a2d\u5b9a\u3092\u884c\u3046\u969b\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"2-dns-\u306e\u8a2d\u5b9a"},"2. DNS \u306e\u8a2d\u5b9a"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u969b\u306b DNS \u306e\u8a2d\u5b9a\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\u3042\u306a\u305f\u304c\u6240\u6709\u3057\u3066\u3044\u308b\u30c9\u30e1\u30a4\u30f3\u306e\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u306b\u5fdc\u3058\u3066\u8a2d\u5b9a\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u4eca\u56de\u306e\u4f8b\u3067\u306f ",(0,r.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/ja-jp/products/registrar/"},"Cloudflare Registrar")," \u3068 ",(0,r.kt)("a",{parentName:"p",href:"https://www.onamae.com/"},"\u304a\u540d\u524d.com")," \u306e\u8a2d\u5b9a\u753b\u9762\u3092\u4f8b\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,r.kt)("h4",{id:"1-dns-\u8a2d\u5b9a\u753b\u9762\u306b\u9077\u79fb"},"1. DNS \u8a2d\u5b9a\u753b\u9762\u306b\u9077\u79fb"),(0,r.kt)("p",null,"\u30c9\u30e1\u30a4\u30f3\u306e\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002\u305d\u306e\u5f8c\u306b DNS \u306e\u8a2d\u5b9a\u753b\u9762\u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002"),(0,r.kt)(l.Z,{groupId:"service",queryString:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cloudflare",label:"Cloudflare Registrar",default:!0,mdxType:"TabItem"},(0,r.kt)("br",null),(0,r.kt)("p",null,"\u30db\u30fc\u30e0\u753b\u9762\u304b\u3089\u53d6\u5f97\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{width:"800",mb:"1rem",src:a(8165).Z,mdxType:"Image"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DNS")," \u30bf\u30d6\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{width:"350",src:a(2334).Z,mdxType:"Image"})),(0,r.kt)(o.Z,{value:"onamae",label:"\u304a\u540d\u524d.com",mdxType:"TabItem"},(0,r.kt)("br",null),(0,r.kt)("p",null,"\u30db\u30fc\u30e0\u753b\u9762\u304b\u3089\u3001\u30c9\u30e1\u30a4\u30f3\u306e DNS \u8a2d\u5b9a\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{width:"500",mb:"1rem",src:a(7159).Z,mdxType:"Image"}),(0,r.kt)("p",null,"\u8cfc\u5165\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u6b21\u3078\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{width:"500",src:a(8961).Z,mdxType:"Image"}))),(0,r.kt)("h4",{id:"2-txt-\u30ec\u30b3\u30fc\u30c9\u306e\u8ffd\u52a0"},"2. TXT \u30ec\u30b3\u30fc\u30c9\u306e\u8ffd\u52a0"),(0,r.kt)("p",null,"DNS \u306e\u8a2d\u5b9a\u753b\u9762\u306b\u9077\u79fb\u3067\u304d\u305f\u3089\u3001TXT \u30ec\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u307e\u305a\u306f\u3001\u30ec\u30b3\u30fc\u30c9\u306e\u8ffd\u52a0\u753b\u9762\u306b\u9077\u79fb\u3057\u307e\u3059\u3002"),(0,r.kt)(l.Z,{groupId:"service",queryString:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cloudflare",label:"Cloudflare Registrar",default:!0,mdxType:"TabItem"},(0,r.kt)(i.Z,{width:"800",mb:"1rem",src:a(3082).Z,mdxType:"Image"}),(0,r.kt)("p",null,"\u30ec\u30b3\u30fc\u30c9\u306e\u5165\u529b\u753b\u9762\u304c\u51fa\u529b\u3055\u308c\u308b\u3068\u601d\u3046\u306e\u3067\u3001\u6b21\u306e\u3088\u3046\u306b\u5165\u529b\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d5\u30a3\u30fc\u30eb\u30c9\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"TXT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",{parentName:"tr",align:null},"_","atproto")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Content")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#3-%E8%A8%AD%E5%AE%9A%E5%86%85%E5%AE%B9%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC"},"\u5148\u306e\u624b\u9806")," \u3067 Bluesky \u516c\u5f0f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u30b3\u30d4\u30fc\u3057\u305f ",(0,r.kt)("inlineCode",{parentName:"td"},"did=")," \u3067\u59cb\u307e\u308b\u6587\u5b57\u5217")))),(0,r.kt)(i.Z,{width:"800",mb:"1rem",src:a(1782).Z,mdxType:"Image"}),(0,r.kt)("p",null,"\u5165\u529b\u3057\u305f\u3089\u3001\u4e0b\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"Save")," \u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002")),(0,r.kt)(o.Z,{value:"onamae",label:"\u304a\u540d\u524d.com",mdxType:"TabItem"},(0,r.kt)(i.Z,{width:"500",mb:"1rem",src:a(7036).Z,mdxType:"Image"}),(0,r.kt)("p",null,"\u30ec\u30b3\u30fc\u30c9\u306e\u5165\u529b\u753b\u9762\u304c\u51fa\u529b\u3055\u308c\u308b\u3068\u601d\u3046\u306e\u3067\u3001\u6b21\u306e\u3088\u3046\u306b\u5165\u529b\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d5\u30a3\u30fc\u30eb\u30c9\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u30db\u30b9\u30c8\u540d")),(0,r.kt)("td",{parentName:"tr",align:null},"_","atproto")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"TYPE")),(0,r.kt)("td",{parentName:"tr",align:null},"TXT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"VALUE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#3-%E8%A8%AD%E5%AE%9A%E5%86%85%E5%AE%B9%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC"},"\u5148\u306e\u624b\u9806")," \u3067 Bluesky \u516c\u5f0f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u30b3\u30d4\u30fc\u3057\u305f ",(0,r.kt)("inlineCode",{parentName:"td"},"did=")," \u3067\u59cb\u307e\u308b\u6587\u5b57\u5217")))),(0,r.kt)(i.Z,{width:"800",mb:"1rem",src:a(713).Z,mdxType:"Image"}),(0,r.kt)("p",null,"\u5165\u529b\u3057\u305f\u3089\u3001\u53f3\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"\u8ffd\u52a0")," \u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("strong",{parentName:"p"},"\u8ffd\u52a0\u3092\u62bc\u3057\u305f\u3060\u3051\u3067\u306f\u3001\u8a2d\u5b9a\u306f\u5b8c\u4e86\u3057\u3066\u3044\u307e\u305b\u3093\u3002")," \u8ffd\u52a0\u5f8c\u3001\u753b\u9762\u306e\u4e00\u756a\u4e0b\u306b\u3042\u308b\u30dc\u30bf\u30f3\u304b\u3089\u78ba\u8a8d\u753b\u9762\u306b\u9077\u79fb\u3057\u3066\u78ba\u8a8d\u3092\u5b8c\u4e86\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(i.Z,{width:"500",src:a(2283).Z,mdxType:"Image"}))),(0,r.kt)("p",null,"\u4ee5\u4e0a\u3067 DNS \u306e\u8a2d\u5b9a\u306f\u5b8c\u4e86\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"3-bluesky-\u3067-dns-\u8a8d\u8a3c"},"3. Bluesky \u3067 DNS \u8a8d\u8a3c"),(0,r.kt)("p",null,"DNS \u306e\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001Bluesky \u306e\u516c\u5f0f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"Change Handle")," \u753b\u9762\u306b\u623b\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u6b21\u306e\u753b\u50cf\u306e\u753b\u9762\u3067\u3059\u3002"),(0,r.kt)(i.Z,{width:"500",mb:"1rem",src:a(3477).Z,mdxType:"Image"}),(0,r.kt)("p",null,"\u307e\u305a\u3001\u4e0a\u8a18\u306e\u753b\u50cf\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter the domain you want to use")," \u306e\u76f4\u4e0b\u306b\u3042\u308b\u5165\u529b\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u3042\u306a\u305f\u304c\u30cf\u30f3\u30c9\u30eb\u3068\u3057\u3066\u8a2d\u5b9a\u3057\u305f\u3044\u30c9\u30e1\u30a4\u30f3\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u6b21\u306b\u3001\u753b\u9762\u306e\u4e0b\u90e8\u306b\u3042\u308b ",(0,r.kt)("inlineCode",{parentName:"p"},"Verify DNS Record")," \u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{width:"500",mb:"1rem",src:a(8976).Z,mdxType:"Image"}),(0,r.kt)("p",null,"\u3082\u3057\u3042\u306a\u305f\u304c\u8a2d\u5b9a\u3057\u305f DNS \u30ec\u30b3\u30fc\u30c9\u306e\u8a2d\u5b9a\u304c\u6b63\u3057\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Verify DNS Record")," \u30dc\u30bf\u30f3\u3092\u62bc\u3057\u305f\u5f8c\u3067\u4e0a\u8a18\u753b\u50cf\u306e\u3088\u3046\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"Domain verified!")," \u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002\u3042\u3068\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Update to xxxxx")," \u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3042\u306a\u305f\u304c\u8a2d\u5b9a\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u304c\u30cf\u30f3\u30c9\u30eb\u3057\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u3082\u3057 DNS \u8a8d\u8a3c\u3067\u5931\u6557\u3057\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Domain verified!")," \u304c\u8868\u793a\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001DNS \u30ec\u30b3\u30fc\u30c9\u306e\u8a2d\u5b9a\u304c\u53cd\u6620\u3055\u308c\u308b\u307e\u3067\u6570\u5206\u307b\u3069\u5f85\u3064\u304b\u3001",(0,r.kt)("a",{parentName:"p",href:"#3-dns-%E3%81%AE%E8%A8%AD%E5%AE%9A"},"DNS \u30ec\u30b3\u30fc\u30c9\u306e\u8a2d\u5b9a"),"\u3092\u898b\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}k.isMDXComponent=!0},5371:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_0-1a1893e57d7df2c71118f82eae88d3ac.png"},4918:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_1-e3acb48f0a17aba8f6b491168da476a5.png"},6880:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_2-77896697fb675e1693c24169d7caece6.png"},3614:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_3-73ada038971405c2a73c59cf28134437.png"},8165:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_4_c_1-2b62f83545911f3d510e6e6dd31b7ee8.png"},2334:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_4_c_2-f64c3b84dc4a0ad571ce014f92ebd9f1.png"},7159:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_4_o_1-94998c022b5159b8bb2d20772b02d2f0.png"},8961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_4_o_2-9615311e0457506158576f975af33887.png"},3082:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_5_c_1-8e48afcefb68af6959a8383539991075.png"},7036:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_5_o_1-9763030cae4c514171fe2fad0c66ecc7.png"},1782:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_6_c_1-98e19c286acdff44b01e34c43164ca31.png"},713:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_6_o_1-9664b2443e49c251f3ef770ced99d0fc.png"},2283:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_6_o_2-cfbd8673f0d4ea2d4833aca9c831afc5.png"},3477:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_7-07ac80031395a588f5fcd7bc8abb0716.png"},8976:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_domain_web_8-3cb605cffeaeb48a4f66f8ef7416c044.png"}}]);