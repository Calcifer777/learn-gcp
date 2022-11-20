"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5303],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,b=d["".concat(s,".").concat(g)]||d[g]||p[g]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2431:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1,sidebar_label:"Buckets"},i="Buckets",o={unversionedId:"gcs/buckets",id:"gcs/buckets",title:"Buckets",description:"Location",source:"@site/docs/gcs/01-buckets.md",sourceDirName:"gcs",slug:"/gcs/buckets",permalink:"/learn-gcp/docs/gcs/buckets",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Buckets"},sidebar:"tutorialSidebar",previous:{title:"GCS",permalink:"/learn-gcp/docs/category/gcs"},next:{title:"Objects",permalink:"/learn-gcp/docs/gcs/objects"}},s={},c=[{value:"Location",id:"location",level:2},{value:"Considerations",id:"considerations",level:3},{value:"Recommendations",id:"recommendations",level:3},{value:"Storage classes",id:"storage-classes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"buckets"},"Buckets"),(0,r.kt)("h2",{id:"location"},"Location"),(0,r.kt)("h3",{id:"considerations"},"Considerations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Regional"),(0,r.kt)("th",{parentName:"tr",align:null},"Dual-region"),(0,r.kt)("th",{parentName:"tr",align:null},"Multi-region"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Availability"),(0,r.kt)("td",{parentName:"tr",align:null},"- Data redundancy across AZ (sync) ",(0,r.kt)("br",null)," - RTO=0: automated failover and failback on zonal failure"),(0,r.kt)("td",{parentName:"tr",align:null},"- Higher availability than regional ",(0,r.kt)("br",null)," - Data redundancy across regions (async) ",(0,r.kt)("br",null),"- Turbo replication option for replication within 15 minutes - RTO=0: automated failover and failback on regional failure"),(0,r.kt)("td",{parentName:"tr",align:null},"- Higher availability than regional ",(0,r.kt)("br",null)," - Data redundancy across regions (async) ",(0,r.kt)("br",null)," - RTO=0: automated failover and failback on regional failure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Performance"),(0,r.kt)("td",{parentName:"tr",align:null},"- 200 Gbps (per region, per project) ",(0,r.kt)("br",null)," - Scalable to many Tbps by requesting higher bandwidth quota"),(0,r.kt)("td",{parentName:"tr",align:null},"- 200 Gbps (per region, per project) ",(0,r.kt)("br",null)," Scalable to many Tbps by requesting higher bandwidth quota"),(0,r.kt)("td",{parentName:"tr",align:null},"- 50 Gbps (per region, per project) ",(0,r.kt)("br",null),"- Limited performance scaling, variable performance for reads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pricing"),(0,r.kt)("td",{parentName:"tr",align:null},"- Lowest storage price ",(0,r.kt)("br",null)," - No replication charges ",(0,r.kt)("br",null)," - No egress charges when reading data inside the same region"),(0,r.kt)("td",{parentName:"tr",align:null},"- Highest storage price ",(0,r.kt)("br",null)," - Replication charges apply on write ",(0,r.kt)("br",null)," - No egress charges when reading data within either region"),(0,r.kt)("td",{parentName:"tr",align:null},"- Higher storage price than regional, but lower than dual-region ",(0,r.kt)("br",null)," - Replication charges apply on write ",(0,r.kt)("br",null)," - Egress charges always apply when reading data")))),(0,r.kt)("h3",{id:"recommendations"},"Recommendations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"Recommended bucket location"),(0,r.kt)("th",{parentName:"tr",align:null},"Workload examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Optimized latency and bandwidth ",(0,r.kt)("br",null)," - Lowest data storage cost ",(0,r.kt)("br",null)," - Cross-zone redundancy"),(0,r.kt)("td",{parentName:"tr",align:null},"Regional"),(0,r.kt)("td",{parentName:"tr",align:null},"- Analytics ",(0,r.kt)("br",null)," - Backup and archive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Optimized latency and bandwidth ",(0,r.kt)("br",null)," - Cross-region redundancy"),(0,r.kt)("td",{parentName:"tr",align:null},"Dual-region"),(0,r.kt)("td",{parentName:"tr",align:null},"- Analytics ",(0,r.kt)("br",null)," - Backup and archive ",(0,r.kt)("br",null)," - Disaster recovery")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Cross-geography data access ",(0,r.kt)("br",null)," - Highest availability"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi region"),(0,r.kt)("td",{parentName:"tr",align:null},"Content serving")))),(0,r.kt)("h2",{id:"storage-classes"},"Storage classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A storage class is a piece of metadata that is used by every object."),(0,r.kt)("li",{parentName:"ul"},"The storage class set for an object affects the object's availability and pricing model.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can change the storage class of an existing object either by rewriting the object or by using Object Lifecycle Management."))),(0,r.kt)("li",{parentName:"ul"},"When you create a bucket, you can specify a default storage class for the bucket. When you add objects to the bucket, they inherit this storage class unless explicitly set otherwise.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you don't specify a default storage class when you create a bucket, that bucket's default storage class is set to Standard storage."),(0,r.kt)("li",{parentName:"ul"},"Changing the default storage class of a bucket does not affect any of the objects that already exist in the bucket.")))),(0,r.kt)("p",null,"Available storage classes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard "),(0,r.kt)("li",{parentName:"ul"},"Nearline"),(0,r.kt)("li",{parentName:"ul"},"Coldline"),(0,r.kt)("li",{parentName:"ul"},"Archive")))}p.isMDXComponent=!0}}]);