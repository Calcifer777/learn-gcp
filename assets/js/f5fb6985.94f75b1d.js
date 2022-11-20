"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3,sidebar_label:"Object Data Lifecycle"},o="Object Data Lifecycle",l={unversionedId:"gcs/object-data-lifecycle",id:"gcs/object-data-lifecycle",title:"Object Data Lifecycle",description:"- A retention policy that specifies a retention period can be placed on a bucket. An object in the bucket cannot be deleted or replaced until it reaches the specified age.",source:"@site/docs/gcs/03-object-data-lifecycle.md",sourceDirName:"gcs",slug:"/gcs/object-data-lifecycle",permalink:"/learn-gcp/docs/gcs/object-data-lifecycle",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Object Data Lifecycle"},sidebar:"tutorialSidebar",previous:{title:"Objects",permalink:"/learn-gcp/docs/gcs/objects"},next:{title:"Interacting with GCS",permalink:"/learn-gcp/docs/gcs/interacting-with-gcs"}},c={},s=[{value:"Lifecycle rule options",id:"lifecycle-rule-options",level:2},{value:"Object versioning",id:"object-versioning",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"object-data-lifecycle"},"Object Data Lifecycle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A retention policy that specifies a retention period can be placed on a bucket. An object in the bucket cannot be deleted or replaced until it reaches the specified age."),(0,r.kt)("li",{parentName:"ul"},"An object hold can be placed on individual objects to prevent anyone from deleting or replacing the object until the hold is removed."),(0,r.kt)("li",{parentName:"ul"},"Object Versioning can be enabled on a bucket in order to retain older versions of objects. When the live version of an object is deleted or replaced, it becomes noncurrent if versioning is enabled on the bucket. If you accidentally delete a live object version, you can restore the noncurrent version of it back to the live version."),(0,r.kt)("li",{parentName:"ul"},"Object Versioning increases storage costs, but this can be partially mitigated by configuring Object Lifecycle Management to delete older object versions. For one possible setup, see the lifecycle configuration example for deleting objects."),(0,r.kt)("li",{parentName:"ul"},"Object Lifecycle Management can be configured for a bucket, which gives you more automated control over deleting objects. When you define a lifecycle configuration, Cloud Storage performs a specified action on an object only if the object meets your criteria.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Object Versioning does not protect your data if you delete the entire bucket")),(0,r.kt)("h2",{id:"lifecycle-rule-options"},"Lifecycle rule options"),(0,r.kt)("p",null,"A lifecycle rule specifies exactly one of the following actions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Delete")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SetStorageClass")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AbortIncompleteMultipartUpload"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The Delete action takes precedence over any SetStorageClass action."),(0,r.kt)("li",{parentName:"ul"},"The SetStorageClass action that switches the object to the storage class with the lowest at-rest storage pricing takes precedence."))),(0,r.kt)("p",null,"Lifecycle rule conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"age")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createdBefore")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"customTimeBefore")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"daysSinceCustomTime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"daysSinceNoncurrentTime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isLive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"matchesStorageClass")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"matchesPrefix and matchesSuffix")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"noncurrentTimeBefore")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"numNewerVersions"))),(0,r.kt)("h2",{id:"object-versioning"},"Object versioning"),(0,r.kt)("p",null,"You enable Object Versioning for a bucket. Once enabled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cloud Storage retains a noncurrent object version each time you replace or delete a live object version, as long as you do not specify the generation number of the live version.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Noncurrent versions retain the name of the object, but are uniquely identified by their generation number."),(0,r.kt)("li",{parentName:"ul"},"Noncurrent versions only appear in requests that explicitly call for them to be included."))),(0,r.kt)("li",{parentName:"ul"},"You permanently delete versions of objects by including the generation number in the deletion request or by using Object Lifecycle Management."),(0,r.kt)("li",{parentName:"ul"},"Noncurrent versions of objects exist independently of any live version.")))}p.isMDXComponent=!0}}]);