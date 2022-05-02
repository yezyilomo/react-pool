"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6270],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3160:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:5},l="State Persistence",c={unversionedId:"basic_concepts/state_persistence",id:"basic_concepts/state_persistence",title:"State Persistence",description:"State pool has a built in support for state persistence, it makes saving your global states in your preferred permanent storage very easy, all you need to do is tell state pool how to save, load, clear and remove your global state from your preferred storage by using store.persist API.",source:"@site/docs/basic_concepts/state_persistence.md",sourceDirName:"basic_concepts",slug:"/basic_concepts/state_persistence",permalink:"/docs/basic_concepts/state_persistence",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basic_concepts/state_persistence.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Managing Subscriptions",permalink:"/docs/basic_concepts/managing_subscriptions"},next:{title:"Intro",permalink:"/docs/basic_tutorial/intro"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"state-persistence"},"State Persistence"),(0,r.kt)("p",null,"State pool has a built in support for state persistence, it makes saving your global states in your preferred permanent storage very easy, all you need to do is tell state pool how to save, load, clear and remove your global state from your preferred storage by using ",(0,r.kt)("inlineCode",{parentName:"p"},"store.persist")," API."),(0,r.kt)("p",null,"The way to implement these is by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"store.persist")," and pass them as shown below "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"store.persist({\n    saveState: function(key, value, isInitialSet){/*your code to save state */},\n    loadState: function(key){/*your code to load state */},\n    removeState: function(key){/*your code to remove state */},\n    clear: function(){/*your code to clear storage */}\n})\n")),(0,r.kt)("p",null,"After implementing these four functions you're good to go, you won\u2019t need to worry about calling them, ",(0,r.kt)("strong",{parentName:"p"},"state-pool")," will be doing that for you automatically so that you can focus on using your states."),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"store.setState"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"store.useState")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"store.useReducer")," accepts an optional configuration parameter, ",(0,r.kt)("inlineCode",{parentName:"p"},"persist"),", this is the one which is used to tell ",(0,r.kt)("strong",{parentName:"p"},"state-pool")," whether to save your global state to a permanent storage or not. i.e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"store.setState(\n    key: String,\n    initialState: Any,\n    config?: {persist: Boolean}\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"store.useState(\n    key: String,\n    config?: {default: Any, persist: Boolean, ...otherConfigs}\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"store.useReducer(\n    reducer: Function,\n    key: String,\n    config?: {default: Any, persist: Boolean, ...otherConfigs}\n)\n")),(0,r.kt)("p",null,"By default the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"persist")," in all cases is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"(which means it doesn't save global states to a permanent storage), so if you want to activate it, you have to set it to be true."),(0,r.kt)("p",null,"What's even better about ",(0,r.kt)("strong",{parentName:"p"},"state-pool")," is that you get the freedom to choose what to save in your permanent storage, so you don't need to save the whole store in your permanent storage, but if you want to save the whole store you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"PERSIST_ENTIRE_STORE")," configuration."),(0,r.kt)("p",null,"Below is an example showing how you could implement state persistance in local storage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'state-pool';\n\nconst store = createStore();\n\nlet timerId: any = null\nconst DEBOUNCE_TIME = 1000  // In milliseconds\n\nstore.persist({\n    PERSIST_ENTIRE_STORE: true,  // Use this only if you want to persist the entire store\n    saveState: function(key, value, isInitialSet){\n        const doStateSaving = () => {\n            try {\n                const serializedState = JSON.stringify(value);\n                window.localStorage.setItem(key, serializedState);\n            } catch {\n                // Ignore write errors\n            }\n        }\n\n        if(isInitialSet){\n            // We don't debounce saving state since it's the initial set\n            // so it's called only once and we need our storage to be updated\n            // right away\n            doStateSaving();\n        }\n        else {\n            // Here we debounce saving state because it's the update and this function\n            // is called every time the store state changes. However, it should not\n            // be called too often because it triggers the expensive `JSON.stringify` operation.\n            clearTimeout(timerId);\n            timerId = setTimeout(doStateSaving, DEBOUNCE_TIME);\n        }\n    },\n    loadState: function(key){\n        try {\n            const serializedState = window.localStorage.getItem(key);\n            if (serializedState === null) {\n                // No state saved\n                return undefined\n            }\n            return JSON.parse(serializedState);\n        } catch (err) {\n            // Failed to load state\n            return undefined\n        }\n    },\n    removeState: function(key){\n        window.localStorage.removeItem(key);\n    },\n    clear: function(){\n        window.localStorage.clear();\n    }\n})\n")),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you set ",(0,r.kt)("inlineCode",{parentName:"p"},"PERSIST_ENTIRE_STORE = true"),", ",(0,r.kt)("strong",{parentName:"p"},"state-pool")," will be persisting all your global states to the permanent storage by default unless you explicitly specify ",(0,r.kt)("inlineCode",{parentName:"p"},"persist = false")," when initializing your global state."))))}m.isMDXComponent=!0}}]);