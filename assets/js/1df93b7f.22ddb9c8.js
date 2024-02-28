"use strict";(self.webpackChunkreact_multilayer_page_reveal_docs=self.webpackChunkreact_multilayer_page_reveal_docs||[]).push([[583],{3345:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var o=n(4164),r=n(8774),a=n(4586),i=n(781),l=n(1107);const s={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var c=n(6540);let d={data:""},f=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||d,m=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,h=/\n+/g,p=(e,t)=>{let n="",o="",r="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?n=a+" "+i+";":o+="f"==a[1]?p(i,a):a+"{"+p(i,"k"==a[1]?"":t)+"}":"object"==typeof i?o+=p(i,t?t.replace(/([^,])+/g,(e=>a.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=p.p?p.p(a,i):a+":"+i+";")}return n+(t&&r?t+"{"+r+"}":r)+o},g={},b=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+b(e[n]);return t}return e},x=(e,t,n,o,r)=>{let a=b(e),i=g[a]||(g[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(a));if(!g[i]){let t=a!==e?e:(e=>{let t,n,o=[{}];for(;t=m.exec(e.replace(u,""));)t[4]?o.shift():t[3]?(n=t[3].replace(h," ").trim(),o.unshift(o[0][n]=o[0][n]||{})):o[0][t[1]]=t[2].replace(h," ").trim();return o[0]})(e);g[i]=p(r?{["@keyframes "+i]:t}:t,n?"":"."+i)}let l=n&&g.g?g.g:null;return n&&(g.g=g[i]),((e,t,n,o)=>{o?t.data=t.data.replace(o,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(g[i],t,o,l),i},v=(e,t,n)=>e.reduce(((e,o,r)=>{let a=t[r];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+o+(null==a?"":a)}),"");function j(e){let t=this||{},n=e.call?e(t.p):e;return x(n.unshift?n.raw?v(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,f(t.target),t.g,t.o,t.k)}j.bind({g:1});let w,y,C,B=j.bind({k:1});function N(e,t){let n=this||{};return function(){let o=arguments;function r(a,i){let l=Object.assign({},a),s=l.className||r.className;n.p=Object.assign({theme:y&&y()},l),n.o=/ *go\d+/.test(s),l.className=j.apply(n,o)+(s?" "+s:""),t&&(l.ref=i);let c=e;return e[0]&&(c=l.as||e,delete l.as),C&&c[0]&&C(l),w(c,l)}return t?t(r):r}}var L=n(4848),_=B`
  0% {
    transform: translate3d(0, 0, 0);
  }
  35%,
  65% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, -200%, 0);
  }
`,S=B`
  0% {
      transform: translate3d(0, 0, 0);
  }
  30%,
  70% {
      transform: translate3d(0, -100%, 0);
      animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }
  100% {
      transform: translate3d(0, -200%, 0);
  }
`,k=B`
  0%,
  14.5% {
    transform: translate3d(0, 0, 0);
  }
  37.5%,
  62.5% {
    transform: translate3d(0, -100%, 0);
    animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
 }
  85.5%,
  100% {
    transform: translate3d(0, -200%, 0);
  }
`,A=B`
  0% {
    transform: translate3d(0, 0, 0);
  }
  25%,
  75% {
    transform: translate3d(0, -100%, 0);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: translate3d(0, -200%, 0);
  }
`,T=B`
  0%,
  12.5% {
      transform: translate3d(0, 0, 0);
  }
  37.5%,
  62.5% {
      transform: translate3d(0, -100%, 0);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  87.5%,
  100% {
      transform: translate3d(0, -200%, 0);
  }
`,z=B`
	0%,
	25% {
		transform: translate3d(0, 0, 0);
		animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	75%,
	100% {
		transform: translate3d(0, -200%, 0);
	}
`,F=B`
  0% {
    transform: translate3d(0, 0, 0);
  }
  35%,
  65% {
    transform: translate3d(0, -100%, 0);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: translate3d(0, -200%, 0);
  }
`,R=B`
 0% {
    transform: translate3d(0, 0, 0);
  }
  45%,
  55% {
    transform: translate3d(0, -100%, 0);
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  100% {
    transform: translate3d(0, -200%, 0);
  }
`,$=B`
 0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  45%,
  55% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
`;!function(e,t,n,o){p.p=t,w=e,y=n,C=o}(c.createElement);var E=(0,c.createContext)({}),O=({direction:e,isAnimating:t,preset:n})=>{let o=t?"1":"0",r={};if("cornerTopLeft"===e||"cornerTopRight"===e||"cornerBottomLeft"===e||"cornerBottomRight"===e){let e={opacity:o};t&&(e={...e,top:"50%",left:"50%"}),r={...r,...e}}if("top"===e||"bottom"===e){let n={width:"100vw",height:"100vh",transform:"top"===e?"rotate3d(0, 0, 1, 180deg)":"none",opacity:o};t&&(n="top"===e?{...n,left:"0",bottom:"100%"}:{...n,left:"0",top:"100%"}),r={...r,...n}}if("right"===e||"left"===e){let n={width:"100vh",height:"100vw",transform:`translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, ${"left"===e?90:-90}deg) translate3d(0,100%,0)`,opacity:o};t&&(n={...n,top:"50%",left:"50%"}),r={...r,...n}}return t&&("simple"===n&&(r={...r,"& > div":{animation:`${_} 1.5s cubic-bezier(0.2, 1, 0.3, 1) forwards`}}),"duo-move"===n&&(r={...r,"& > div":{animation:`${S} 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards`,"&:nth-child(2)":{"animation-name":k}}}),"triple-woosh"===n&&(r={...r,"& > div":{animation:`${A} 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards`,"&:nth-child(2)":{"animation-name":T},"&:nth-child(3)":{"animation-name":z}}}),"content-move"===n&&(r={...r,"& > div":{animation:`${F} 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19)forwards`,"&:nth-child(2)":{"animation-name":R,"animation-timing-function":"cubic-bezier(0.895, 0.03, 0.685, 0.22)"},"&:nth-child(3)":{"animation-name":$,"animation-timing-function":"cubic-bezier(0.755, 0.05, 0.855, 0.06)"}}})),j(r)},G={simple:{numOfLayers:1,layerColors:["#202023"]},"duo-move":{numOfLayers:2,layerColors:["#202023","#3d4a41"]},"triple-woosh":{numOfLayers:3,layerColors:["#0092dd","#fff","#3e3a35"]},"content-move":{numOfLayers:3,layerColors:["#202023","#555","#d1d1d1"]}},M=N("div",c.forwardRef)`
  position: fixed;
  z-index: 1000;
  pointer-events: none;
`,W=N("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ddd;
`,I=({numOfLayers:e,layerColors:t,onAnimationEnd:n})=>(0,L.jsx)(L.Fragment,{children:Array.from(Array(e),((e,o)=>(0,L.jsx)(W,{style:{background:t[o]},onAnimationEnd:n},o)))}),D=({preset:e="simple",direction:t="right",onStart:n,onEnd:o,layerColors:r,children:a})=>{let[i,l]=(0,c.useState)({windowWidth:0,windowHeight:0}),[s,d]=(0,c.useState)(!1),f=(0,c.useRef)(null),m=(0,c.useRef)(),u=(0,c.useRef)(0),h=(0,c.useMemo)((()=>{let t=G[e];if(r){if(!Array.isArray(r))throw new Error('"layerColors" expects an array.');if(r.length!==t.layerColors.length)throw new Error(`"${e}" effect takes ${t.layerColors.length} layer colors. ${r.length} is given.`);t={...t,layerColors:r}}return t}),[r,e]),{windowWidth:p,windowHeight:g}=i,b=(e,o)=>{d(!0),n&&"function"==typeof n&&n(t),m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{e&&"function"==typeof e&&e()}),o)},x=(0,c.useMemo)((()=>({reveal:b})),[]);return(0,c.useLayoutEffect)((()=>{let e=((e,t)=>{let n;return()=>{null!==n&&clearTimeout(n),n=window.setTimeout((()=>{n=null,e()}),t)}})((()=>{l({windowWidth:window.innerWidth,windowHeight:window.innerHeight})}),100);return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),(0,L.jsxs)(E.Provider,{value:x,children:[a,(0,L.jsx)(M,{ref:f,"data-testid":"react-multilayer-page-reveal",className:O({direction:t,isAnimating:s,preset:e}),style:{...(()=>{let e=Math.sqrt(p**2+g**2),n=`${e}px`,o=`${e}px`,r="";return"cornerTopLeft"===t?r=`translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 135deg) translate3d(0, ${e}px, 0)`:"cornerTopRight"===t?r=`translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, -135deg) translate3d(0, ${e}px, 0)`:"cornerBottomLeft"===t?r=`translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 45deg) translate3d(0, ${e}px, 0)`:"cornerBottomRight"===t&&(r=`translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, -45deg) translate3d(0, ${e}px, 0)`),!s||"cornerTopLeft"!==t&&"cornerTopRight"!==t&&"cornerBottomLeft"!==t&&"cornerBottomRight"!==t?null:{width:n,height:o,transform:r}})()},children:(0,L.jsx)(I,{numOfLayers:h.numOfLayers,layerColors:h.layerColors,onAnimationEnd:()=>{++u.current,u.current===h.numOfLayers&&(d(!1),u.current=0,o&&"function"==typeof o&&o(t))}})})]})},H=()=>(0,c.useContext)(E);const q={demoTitle:"demoTitle_dtKk",demoButton:"demoButton_ULBV"};function K(e){let{onRevealed:t}=e;const{reveal:n}=H();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("p",{className:q.demoTitle,children:"Cool!"}),(0,L.jsx)("button",{onClick:()=>n(t,750),className:"button button--secondary button--lg",children:"Show animation"})]})}function P(e){let{onRevealed:t}=e;const{reveal:n}=H();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("p",{className:q.demoTitle,children:"Choose your effect and click button below to start the animation!"}),(0,L.jsx)("button",{onClick:()=>n(t,750),className:"button button--secondary button--lg",children:"Show animation"})]})}const V={effectBox:"effectBox_T6vA",effectBoxFormGroup:"effectBoxFormGroup_so0J",effectBoxLabel:"effectBoxLabel_QGoM",effectBoxSelect:"effectBoxSelect_K2xF",effectBoxColorInput:"effectBoxColorInput_WjS9"};function J(e){let{onSelectPreset:t,onSelectDirection:n,onSelectColor:o,layerColors:r}=e;return(0,L.jsxs)("div",{className:V.effectBox,children:[(0,L.jsxs)("div",{className:V.effectBoxFormGroup,children:[(0,L.jsx)("label",{className:V.effectBoxLabel,htmlFor:"effect",children:"Choose an effect"}),(0,L.jsxs)("select",{id:"effect",name:"effect",onChange:e=>t(e.target.value),className:V.effectBoxSelect,children:[(0,L.jsx)("option",{value:"triple-woosh",children:"Triple Woosh"}),(0,L.jsx)("option",{value:"simple",children:"Simple"}),(0,L.jsx)("option",{value:"duo-move",children:"Duo Move"}),(0,L.jsx)("option",{value:"content-move",children:"Content Move"})]})]}),(0,L.jsxs)("div",{className:V.effectBoxFormGroup,children:[(0,L.jsx)("label",{className:V.effectBoxLabel,htmlFor:"direction",children:"Choose direction"}),(0,L.jsxs)("select",{id:"direction",name:"direction",onChange:e=>n(e.target.value),className:V.effectBoxSelect,children:[(0,L.jsx)("option",{value:"left",children:"left"}),(0,L.jsx)("option",{value:"right",children:"right"}),(0,L.jsx)("option",{value:"top",children:"top"}),(0,L.jsx)("option",{value:"bottom",children:"bottom"}),(0,L.jsx)("option",{value:"cornerTopLeft",children:"corner top left"}),(0,L.jsx)("option",{value:"cornerTopRight",children:"corner top right"}),(0,L.jsx)("option",{value:"cornerBottomLeft",children:"corner bottom left"}),(0,L.jsx)("option",{value:"cornerBottomRight",children:"corner bottom right"})]})]}),(0,L.jsxs)("div",{className:V.effectBoxFormGroup,children:[(0,L.jsx)("label",{className:V.effectBoxLabel,children:"Choose layer colors"}),r.map(((e,t)=>(0,L.jsx)("input",{type:"color",value:e,onChange:e=>o(e.target.value,t),className:V.effectBoxColorInput},t)))]})]})}const Q={container:"container_vGrW",content:"content_GkkS",contentInner:"contentInner_EVK5"},U=["#EDF9B4","#219ebc","#023047"];function Z(){const[e,t]=(0,c.useState)("triple-woosh"),[n,o]=(0,c.useState)("left"),[r,a]=(0,c.useState)(U),[i,l]=(0,c.useState)(0);function s(){l((e=>1===e?0:1))}return(0,L.jsx)(D,{preset:e,direction:n,layerColors:r,children:(0,L.jsx)("div",{className:Q.container,children:(0,L.jsxs)("div",{className:Q.content,children:[(0,L.jsx)(J,{onSelectPreset:e=>function(e){t(e),"simple"===e&&a((e=>e.slice(0,1))),"triple-woosh"!==e&&"content-move"!==e||a((e=>[...e.slice(0,e.length),...U.slice(e.length)])),"duo-move"===e&&a((e=>[...e.slice(0,1),U[1]]))}(e),onSelectDirection:e=>o(e),onSelectColor:(e,t)=>function(e,t){a((n=>n.map(((n,o)=>t===o?e:n))))}(e,t),layerColors:r}),(0,L.jsx)("div",{className:Q.contentInner,children:0===i?(0,L.jsx)(P,{onRevealed:s}):(0,L.jsx)(K,{onRevealed:s})})]})})})}function X(){const{siteConfig:e}=(0,a.A)();return(0,L.jsx)("header",{className:(0,o.A)("hero hero--primary",s.heroBanner),children:(0,L.jsxs)("div",{className:"container",children:[(0,L.jsx)(l.A,{as:"h1",className:"hero__title",children:e.title}),(0,L.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,L.jsx)("div",{className:s.buttons,children:(0,L.jsx)(r.A,{className:"button button--secondary button--lg",to:"/docs/intro",children:"Documentation"})})]})})}function Y(){const{siteConfig:e}=(0,a.A)();return(0,L.jsxs)(i.A,{title:e.title,description:e.tagline,children:[(0,L.jsx)(X,{}),(0,L.jsx)(Z,{})]})}}}]);