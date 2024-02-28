"use strict";(self.webpackChunkreact_multilayer_page_reveal_docs=self.webpackChunkreact_multilayer_page_reveal_docs||[]).push([[976],{1512:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(4848),t=r(8453);const a={sidebar_position:1},i="Getting Started",s={id:"intro",title:"Getting Started",description:"Installation",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/react-multilayer-page-reveal-docs/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Usage with routers",permalink:"/react-multilayer-page-reveal-docs/docs/usage-with-routers"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage/Examples",id:"usageexamples",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Call a function when animation starts or ends",id:"call-a-function-when-animation-starts-or-ends",level:3},{value:"Start the animation with a callback and delay",id:"start-the-animation-with-a-callback-and-delay",level:3},{value:"Props",id:"props",level:2},{value:"Basic Demo",id:"basic-demo",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"  npm install react-multilayer-page-reveal\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usageexamples",children:"Usage/Examples"}),"\n",(0,o.jsx)(n.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,o.jsxs)(n.p,{children:["Wrap your components inside ",(0,o.jsx)(n.code,{children:"MultiLayerPageRevealProvider"})," component"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'import React from "react";\nimport { MultiLayerPageRevealProvider } from "react-multilayer-page-reveal";\nimport { MyComponent } from "./MyComponent";\n\nfunction App() {\n  return (\n    <MultiLayerPageRevealProvider preset="duo-move" direction="left">\n      <MyComponent />\n    </MultiLayerPageRevealProvider>\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Start the animation by calling ",(0,o.jsx)(n.code,{children:"reveal()"})," function from ",(0,o.jsx)(n.code,{children:"useMultiLayerPageReveal"})," hook"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"function MyComponent() {\n  const { reveal } = useMultiLayerPageReveal();\n\n  function handleReveal() {\n    reveal();\n  }\n\n  return (\n    <>\n      <h1>Hello world</h1>\n      <button onClick={handleReveal}>Go</button>\n    </>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"call-a-function-when-animation-starts-or-ends",children:"Call a function when animation starts or ends"}),"\n",(0,o.jsxs)(n.p,{children:["To call a function when animation starts, use ",(0,o.jsx)(n.code,{children:"onStart"})," prop, or use ",(0,o.jsx)(n.code,{children:"onEnd"})," to call a function when animation ends."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'function App() {\n  function onStart() {\n    console.log("animation starts");\n  }\n\n  function onEnd() {\n    console.log("animation ends");\n  }\n\n  return (\n    <MultiLayerPageRevealProvider\n      preset="duo-move"\n      direction="left"\n      onStart={onStart}\n      onEnd={onEnd}\n    >\n      <MyComponent />\n    </MultiLayerPageRevealProvider>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"start-the-animation-with-a-callback-and-delay",children:"Start the animation with a callback and delay"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"function MyComponent() {\n    ...\n    function handleReveal() {\n        reveal(() => {\n            console.log('hello')\n        }, 750);\n    }\n    ...\n    <button onClick={handleReveal}>Go</button>\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"preset"})," (",(0,o.jsx)(n.code,{children:"simple"})," | ",(0,o.jsx)(n.code,{children:"duo-move"})," | ",(0,o.jsx)(n.code,{children:"triple-woosh"})," |",(0,o.jsx)(n.code,{children:"content-move"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["Default: ",(0,o.jsx)(n.code,{children:"simple"})]}),"\n",(0,o.jsx)(n.p,{children:"Presets of the animation style"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"direction"})," (",(0,o.jsx)(n.code,{children:"left"})," | ",(0,o.jsx)(n.code,{children:"right"})," | ",(0,o.jsx)(n.code,{children:"top"})," | ",(0,o.jsx)(n.code,{children:"bottom"})," | ",(0,o.jsx)(n.code,{children:"cornerTopLeft"})," | ",(0,o.jsx)(n.code,{children:"cornerTopRight"})," | ",(0,o.jsx)(n.code,{children:"cornerBottomLeft"})," | ",(0,o.jsx)(n.code,{children:"cornerBottomRight"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["Default: ",(0,o.jsx)(n.code,{children:"right"})]}),"\n",(0,o.jsx)(n.p,{children:"Direction from which the animation moves"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"onStart"})," (",(0,o.jsx)(n.code,{children:"Function"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Callback function when animation starts"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"onEnd"})," (",(0,o.jsx)(n.code,{children:"Function"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Callback function when animation ends"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"layerColors"})," (",(0,o.jsx)(n.code,{children:"string[]"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["Color(s) for the layers, e.g: ",(0,o.jsx)(n.code,{children:"['#fff', '#ddd']"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"simple"})," preset requires 1 color, ",(0,o.jsx)(n.code,{children:"duo-move"})," requires 2 colors,\n",(0,o.jsx)(n.code,{children:"tripe-woosh"})," and ",(0,o.jsx)(n.code,{children:"content-move"})," require 3 colors."]}),"\n",(0,o.jsx)(n.p,{children:"If no layer colors provided, these default colors will be applied:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"simple"}),": ['#202023']"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"duo-move"}),":['#202023', '#3d4a41']"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"triple-woosh"}),":['#0092dd', '#fff', '#3e3a35'],"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"content-move"}),":['#202023', '#555', '#d1d1d1']"]}),"\n",(0,o.jsx)(n.h2,{id:"basic-demo",children:"Basic Demo"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://codesandbox.io/p/devbox/react-multilayer-page-reveal-demo-basic-wjzqhr",children:"Open Codesandbox"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var o=r(6540);const t={},a=o.createContext(t);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);