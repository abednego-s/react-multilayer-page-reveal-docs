"use strict";(self.webpackChunkreact_multilayer_page_reveal_docs=self.webpackChunkreact_multilayer_page_reveal_docs||[]).push([[402],{1937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(4848),a=t(8453);const o={},i="Usage with routers",s={id:"usage-with-routers",title:"Usage with routers",description:"Start the animation when changing routes",source:"@site/docs/usage-with-routers.md",sourceDirName:".",slug:"/usage-with-routers",permalink:"/react-multilayer-page-reveal-docs/docs/usage-with-routers",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage-with-routers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/react-multilayer-page-reveal-docs/docs/intro"}},l={},c=[{value:"Start the animation when changing routes",id:"start-the-animation-when-changing-routes",level:2},{value:"Examples",id:"examples",level:2},{value:"react-router-dom",id:"react-router-dom",level:3},{value:"Next.js router",id:"nextjs-router",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"usage-with-routers",children:"Usage with routers"}),"\n",(0,r.jsx)(n.h2,{id:"start-the-animation-when-changing-routes",children:"Start the animation when changing routes"}),"\n",(0,r.jsxs)(n.p,{children:["To start the animation when navigating between routes, you can utilize the client-side routing hooks provided by routing libraries or frameworks. They can be used along with ",(0,r.jsx)(n.code,{children:"reveal()"})," function, and if you need to adjust the timings, you can pass a delay (in miliseconds) as second argument, for example ",(0,r.jsx)(n.code,{children:"reveal(fn, 500)"}),". However, when choosing to use a link element, canceling its default action with ",(0,r.jsx)(n.code,{children:"preventDefault()"})," may be required in order to start the animation and navigate to a route. See examples below."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"react-router-dom",children:"react-router-dom"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"useNavigate"})," hook and starts the animation by calling ",(0,r.jsx)(n.code,{children:"reveal()"})," function with a delay"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { useMultiLayerPageReveal } from "react-multilayer-page-reveal";\nimport { Link, useNavigate } from "react-router-dom";\n\nexport function MyComponent() {\n  const { reveal } = useMultiLayerPageReveal();\n  const navigate = useNavigate();\n\n  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {\n    e.preventDefault();\n    reveal(() => navigate("/another-page"), 750);\n  }\n\n  return (\n    <>\n      <h1>Hello World</h1>\n      <p>Welcome</p>\n      <Link to="/another-page" onClick={handleClick}>\n        Go to the next page\n      </Link>\n    </>\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["See the demo: ",(0,r.jsx)(n.a,{href:"https://codesandbox.io/p/sandbox/react-multilayer-page-reveal-react-router-dom-9ngyq8",children:"Open Codesandbox"})]}),"\n",(0,r.jsx)(n.h3,{id:"nextjs-router",children:"Next.js router"}),"\n",(0,r.jsxs)(n.p,{children:["Using Next.js ",(0,r.jsx)(n.code,{children:"useRouter"})," hook and starts the animation by calling ",(0,r.jsx)(n.code,{children:"reveal()"})," function"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'"use client";\n\nimport Link from "next/link";\nimport { useRouter } from "next/navigation";\nimport { useMultiLayerPageReveal } from "react-multilayer-page-reveal";\n\nexport default function MyComponent() {\n  const { reveal } = useMultiLayerPageReveal();\n  const router = useRouter();\n\n  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {\n    e.preventDefault();\n    reveal();\n    router.push("/another-page");\n  }\n\n  return (\n    <>\n      <h1>Hello World</h1>\n      <p>Welcome</p>\n      <Link href="/another-page" onClick={handleClick}>\n        Go to the next page\n      </Link>\n    </>\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["See the demo: ",(0,r.jsx)(n.a,{href:"https://codesandbox.io/p/sandbox/react-multilayer-page-reveal-demo-nextjs-nhqfdl",children:"Open Codesandbox"})]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);