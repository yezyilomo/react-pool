"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4555],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3971:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},c="Intro",s={unversionedId:"api_reference/intro",id:"api_reference/intro",title:"Intro",description:"State pool API is divided into two parts.",source:"@site/docs/api_reference/intro.md",sourceDirName:"api_reference",slug:"/api_reference/intro",permalink:"/docs/api_reference/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api_reference/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/basic_tutorial/intro"},next:{title:"createStore",permalink:"/docs/api_reference/high_level_api/createStore"}},u={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro"},"Intro"),(0,a.kt)("p",null,"State pool API is divided into two parts. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"High Level API(Store based API)"),(0,a.kt)("li",{parentName:"ol"},"Low Level API(Non-Store based API)")),(0,a.kt)("p",null,"In a high level API, global states are stored in a container that we call a store. With high level API, State pool allows you to create as many stores as you want and use them anywhere in your application, it doesn't enforce having a single central store."),(0,a.kt)("p",null,"Here is a simple example using high level API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { createStore } from 'state-pool';\n\n// Create a store\nconst store = createStore();\n\n// Create count global state and initialize it with 0\nconst count = store.setState(\"count\", 0);\n\nfunction ClicksCounter(props){\n    // Use count global state\n    const [count, setCount] = useGlobalState(count);\n\n    const incrementCount = (e) => {\n        setCount(count+1);\n    }\n\n    return (\n        <div>\n            Count: {count}\n            <br/>\n            <button onClick={incrementCount}>Click</button>\n        </div>\n    );\n}\n\nReactDOM.render(ClicksCounter, document.querySelector(\"#root\"));\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"On the other hand, low level API doesn't use the concept of a store, You simply store your global state wherever you want. In low level API ",(0,a.kt)("strong",{parentName:"p"},"state-pool")," doesn't care where you store your global state as long as you can access them, for-instance I could choose to store my global state in a global variable and it would still work just fine."),(0,a.kt)("p",null,"So basically the low level API gives you a way to create and use global state, it doesn't matter where you store them as long as you can access them."),(0,a.kt)("p",null,"Here is the same example as the previous one re-written using low level API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { createGlobalState, useGlobalState } from 'state-pool';\n\n\n// Create count global state and initialize it with 0\nconst count = createGlobalState(0);\n\nfunction ClicksCounter(props){\n    // Use count global state\n    const [count, setCount] = useGlobalState(count);\n\n    const incrementCount = (e) => {\n        setCount(count+1);\n    }\n\n    return (\n        <div>\n            Count: {count}\n            <br/>\n            <button onClick={incrementCount}>Click</button>\n        </div>\n    );\n}\n\nReactDOM.render(ClicksCounter, document.querySelector(\"#root\"));\n")),(0,a.kt)("p",null,"Now let's explore these two APIs"))}m.isMDXComponent=!0}}]);