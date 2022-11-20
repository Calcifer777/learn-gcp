"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),y=o,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:7,sidebar_label:"Misc"},a="Misc",c={unversionedId:"gcs/misc",id:"gcs/misc",title:"Misc",description:"Retention policy",source:"@site/docs/gcs/07-misc.md",sourceDirName:"gcs",slug:"/gcs/misc",permalink:"/learn-gcp/docs/gcs/misc",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Misc"},sidebar:"tutorialSidebar",previous:{title:"Encryption",permalink:"/learn-gcp/docs/gcs/data-encryption"},next:{title:"Data Change Tracking",permalink:"/learn-gcp/docs/gcs/data-change-tracking"}},l={},p=[{value:"Retention policy",id:"retention-policy",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"misc"},"Misc"),(0,o.kt)("h2",{id:"retention-policy"},"Retention policy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can add a retention policy to a bucket to specify a retention period.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If a bucket does not have a retention policy, you can delete or replace objects in the bucket at any time."),(0,o.kt)("li",{parentName:"ul"},"If a bucket has a retention policy, objects in the bucket can only be deleted or replaced once their age is greater than the retention period."),(0,o.kt)("li",{parentName:"ul"},"A retention policy retroactively applies to existing objects in the bucket as well as new objects added to the bucket.")))),(0,o.kt)("p",null,"You can lock a retention policy to permanently set it on the bucket."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once you lock a retention policy, you cannot remove it or reduce the retention period it has."),(0,o.kt)("li",{parentName:"ul"},"You cannot delete a bucket with a locked retention policy unless every object in the bucket has met the retention period."),(0,o.kt)("li",{parentName:"ul"},"You can increase the retention period of a locked retention policy."),(0,o.kt)("li",{parentName:"ul"},"Locking a retention policy can help your data comply with record retention regulations.")))}u.isMDXComponent=!0}}]);