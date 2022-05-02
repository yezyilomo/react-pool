"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3253],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(b,l(l({ref:t},p),{},{components:a})):n.createElement(b,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3252:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={sidebar_position:2},s="useGlobalState",c={unversionedId:"api_reference/low_level_api/useGlobalState",id:"api_reference/low_level_api/useGlobalState",title:"useGlobalState",description:"useGlobalState is a hook that used within a react component to subscribe to a global state. useGlobalState works just like React.useState hook but it accepts a global state object and returns an array of [state, setState, updateState] rather than [state, setState]. In addition to a global state object parameter it also accept another optional parameter which is the config object, available configurations are selector & patcher, these parameters works exactly the same as in store.useState. We could say useGlobalState is a low level implementation of store.useState.",source:"@site/docs/api_reference/low_level_api/useGlobalState.md",sourceDirName:"api_reference/low_level_api",slug:"/api_reference/low_level_api/useGlobalState",permalink:"/docs/api_reference/low_level_api/useGlobalState",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api_reference/low_level_api/useGlobalState.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"createGlobalState",permalink:"/docs/api_reference/low_level_api/createGlobalState"},next:{title:"useGlobalStateReducer",permalink:"/docs/api_reference/low_level_api/useGlobalStateReducer"}},p={},u=[],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useglobalstate"},"useGlobalState"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useGlobalState")," is a hook that used within a react component to subscribe to a global state. ",(0,o.kt)("inlineCode",{parentName:"p"},"useGlobalState")," works just like ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useState")," hook but it accepts a global state object and returns an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"[state, setState, updateState]")," rather than ",(0,o.kt)("inlineCode",{parentName:"p"},"[state, setState]"),". In addition to a global state object parameter it also accept another optional parameter which is the config object, available configurations are ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"patcher"),", these parameters works exactly the same as in ",(0,o.kt)("inlineCode",{parentName:"p"},"store.useState"),". We could say ",(0,o.kt)("inlineCode",{parentName:"p"},"useGlobalState")," is a low level implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"store.useState"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Signature\nuseGlobalState(globalState: GlobalState, config?: {selector: Function, patcher: Function})\n")),(0,o.kt)("p",null,"Below is a simple example showing how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"useGlobalState")," hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { createGlobalState, useGlobalState } from 'state-pool';\n\n\nconst initialGlobalState = {\n    name: \"Yezy\",\n    age: 25,\n    email: \"yezy@me.com\"\n}\n\nconst user = createGlobalState(initialGlobalState);\n\nfunction Component(props){\n    const [user, setUser, updateUser] = useGlobalState(user);\n    // Other stuff ...\n}\n")),(0,o.kt)("p",null,"Below is an example with ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"patcher")," configurations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const initialGlobalState = {\n    name: "Yezy",\n    age: 25,\n    email: "yezy@me.com"\n}\n\nconst user = createGlobalState(initialGlobalState);\n\n\nfunction UserName(props){\n    const selector = (user) => user.name;  // Subscribe to user.name only\n    const patcher = (user, name) => {user.name = name};  // Update user.name\n\n    const [name, setName] = useGlobalState(user, {selector: selector, patcher: patcher});\n\n    const handleNameChange = (e) => {\n        setName(e.target.value);\n    }\n\n    return (\n        <div>\n            Name: {name}\n            <br/>\n            <input type="text" value={name} onChange={handleNameChange}/>\n        </div>\n    );\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"useGlobalState")," is used to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"store.useState")," hook."))))}d.isMDXComponent=!0}}]);