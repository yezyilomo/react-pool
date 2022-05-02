"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4113],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5785:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:8},l="store.clear",c={unversionedId:"api_reference/high_level_api/store.clear",id:"api_reference/high_level_api/store.clear",title:"store.clear",description:"This is used to clear an entire store if you don't need all global states in it anymore or you want to reload/reset all global states. It accepts a function to run after clearing the store.",source:"@site/docs/api_reference/high_level_api/store.clear.md",sourceDirName:"api_reference/high_level_api",slug:"/api_reference/high_level_api/store.clear",permalink:"/docs/api_reference/high_level_api/store.clear",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api_reference/high_level_api/store.clear.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"store.remove",permalink:"/docs/api_reference/high_level_api/store.remove"},next:{title:"store.persist",permalink:"/docs/api_reference/high_level_api/store.persist"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"storeclear"},"store.clear"),(0,a.kt)("p",null,"This is used to clear an entire store if you don't need all global states in it anymore or you want to reload/reset all global states. It accepts a function to run after clearing the store. "),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"}," The function runs before components subscribed to all global states in a store rerenders."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Signature\nstore.clear(fn: Function)\n")),(0,a.kt)("p",null,"Below is an example showing how to use it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport { createStore } from \'state-pool\';\n\n\nconst store = createStore();\n\nconst user = {\n    name: "Yezy",\n    age: 25,\n    email: "yezy@me.com"\n}\n    \nconst profile = {\n    url: "https://yezyilomo.me",\n    rating: 5\n}\nstore.setState("user", user);\nstore.setState("profile", profile);\n\n\nfunction UserInfo(props){\n    const [user, setUser, updateUser] = store.useState("user");\n\n    const updateName = (e) => {\n        updateUser(user => {\n            user.name = e.target.value;\n        });\n    }\n\n    const reinitializeStore = () => {\n        const user = {name: "Yezy", age: 25, email: "yezy@me.com"}\n        const profile = {url: "https://yezyilomo.me", rating: 5}\n        store.setState("user", user);\n        store.setState("profile", profile);\n    }\n\n    const resetStore = (e) => {\n        store.clear(initializeStore);\n    }\n\n    return (\n        <div>\n            Name: {user.name}\n            <br/>\n            <input type="text" value={user.name} onChange={updateName}/>\n             <button onClick={resetStore}>Reset Store</button>\n        </div>\n    );\n}\n\nReactDOM.render(UserInfo, document.querySelector("#root"));\n')),(0,a.kt)("p",null,"From the code above, when you click ",(0,a.kt)("inlineCode",{parentName:"p"},"Reset Store")," button ",(0,a.kt)("inlineCode",{parentName:"p"},"store.clear")," will remove all global states from the store and create them again by executing ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeStore"),". This might come in handy when you need to clear all data when user logs out of your application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," both ",(0,a.kt)("inlineCode",{parentName:"p"},"store.remove")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"store.clear")," when executed causes all components subscribed to global states which are removed to rerender."))}d.isMDXComponent=!0}}]);