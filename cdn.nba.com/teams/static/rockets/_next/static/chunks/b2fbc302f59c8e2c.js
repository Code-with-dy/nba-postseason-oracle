(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88085,(e,t,n)=>{t.exports=e.r(25941)},23743,(e,t,n)=>{t.exports=e.r(32032)},40501,e=>{"use strict";function t(e,n=""){return[n,e].filter(Boolean).join("-")}function n(e,t){return`var(${e}${t?`, ${t}`:""})`}function r(e,n=""){var o;return((o=function(e,t="-"){return e.replace(/\s+/g,t)}(`--${t(e,n)}`.toString())).includes("\\.")||Number.isInteger(parseFloat(o.toString()))?o:o.replace(".","\\.")).replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function o(e,t,o){let i=r(e,o);return{variable:i,reference:n(i,t)}}function i(e,t){let n={};for(let r of t){if(Array.isArray(r)){let[t,i]=r;n[t]=o(`${e}-${t}`,i);continue}n[r]=o(`${e}-${r}`)}return n}e.s(["addPrefix",()=>t,"cssVar",()=>o,"defineCssVars",()=>i,"toVarDefinition",()=>r,"toVarReference",()=>n])},7305,e=>{"use strict";var t=e.i(51244);function n(e){return(0,t.isObject)(e)&&e.reference?e.reference:String(e)}let r=(e,...t)=>t.map(n).join(` ${e} `).replace(/calc/g,""),o=(...e)=>`calc(${r("+",...e)})`,i=(...e)=>`calc(${r("-",...e)})`,a=(...e)=>`calc(${r("*",...e)})`,s=(...e)=>`calc(${r("/",...e)})`,l=e=>{let t=n(e);return null==t||Number.isNaN(parseFloat(t))?a(t,-1):String(t).startsWith("-")?String(t).slice(1):`-${t}`},c=Object.assign(e=>({add:(...t)=>c(o(e,...t)),subtract:(...t)=>c(i(e,...t)),multiply:(...t)=>c(a(e,...t)),divide:(...t)=>c(s(e,...t)),negate:()=>c(l(e)),toString:()=>e.toString()}),{add:o,subtract:i,multiply:a,divide:s,negate:l});e.s(["calc",()=>c])},43428,40626,9932,e=>{"use strict";var t=e.i(5117),n=e.i(61196),r=e.i(51244),o=e.i(73817),i=e.i(7305),a=e.i(40501);function s(e,t,n={}){let{stop:o,getKey:i}=n;return function e(n,a=[]){if((0,r.isObject)(n)||Array.isArray(n)){let r={};for(let[s,l]of Object.entries(n)){let c=i?.(s)??s,u=[...a,c];if(o?.(n,u))return t(n,a);r[c]=e(l,u)}return r}return t(n,a)}(e)}var l=e.i(87669),c=e.i(39231);let u=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"];function d(e){let t=(0,c.pick)(e,u),n=e.semanticTokens,r=e=>l.pseudoPropNames.includes(e)||"default"===e,o={};return s(t,(e,t)=>{null!=e&&(o[t.join(".")]={isSemantic:!1,value:e})}),s(n,(e,t)=>{null!=e&&(o[t.join(".")]={isSemantic:!0,value:e})},{stop:e=>Object.keys(e).every(r)}),o}function f(e,t){return(0,a.cssVar)(String(e).replace(/\./g,"-"),void 0,t)}function p(e){let t=function(e){let{__cssMap:t,__cssVars:n,__breakpoints:r,...o}=e;return o}(e),{cssMap:a,cssVars:s}=function(e){let t=d(e),n=e.config?.cssVarPrefix,a={},s={};for(let[e,c]of Object.entries(t)){let{isSemantic:u,value:d}=c,{variable:p,reference:h}=f(e,n);if(!u){if(e.startsWith("space")){let[t,...n]=e.split("."),r=`${t}.-${n.join(".")}`,o=i.calc.negate(d),a=i.calc.negate(h);s[r]={value:o,var:p,varRef:a}}a[p]=d,s[e]={value:d,var:p,varRef:h};continue}let m=(0,r.isObject)(d)?d:{default:d};a=(0,o.mergeWith)(a,Object.entries(m).reduce((r,[o,i])=>{if(!i)return r;let a=function(e,r){let o=[String(e).split(".")[0],r].join(".");if(!t[o])return r;let{reference:i}=f(o,n);return i}(e,`${i}`);return"default"===o?r[p]=a:r[l.pseudoSelectors?.[o]??o]={[p]:a},r},{})),s[e]={value:h,var:p,varRef:h}}return{cssVars:a,cssMap:s}}(t);return Object.assign(t,{__cssVars:{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0",...s},__cssMap:a,__breakpoints:(0,n.analyzeBreakpoints)(t.breakpoints)}),t}e.s(["flattenTokens",()=>d],40626),e.s(["toCSSVar",()=>p],9932);var h=e.i(86280),m=e.i(4911),g=e.i(83378),y=e.i(27742),v=e.i(46773),v=v,b=e.i(11388),_=e.i(24061),w=e.i(7400);function S(e){let{cssVarsRoot:n,theme:r,children:o}=e,i=(0,_.useMemo)(()=>p(r),[r]);return(0,t.jsxs)(v.a,{theme:i,children:[(0,t.jsx)(x,{root:n}),o]})}function x({root:e=":host, :root"}){let n=[e,"[data-theme]"].join(",");return(0,t.jsx)(b.Global,{styles:e=>({[n]:e.__cssVars})})}let[C,j]=(0,m.createContext)({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function k(e){return(0,m.createContext)({name:`${e}StylesContext`,errorMessage:`useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `})}function O(){let{colorMode:e}=(0,w.useColorMode)();return(0,t.jsx)(b.Global,{styles:t=>{let n=(0,g.memoizedGet)(t,"styles.global"),r=(0,y.runIfFn)(n,{theme:t,colorMode:e});if(r)return(0,h.css)(r)(t)}})}e.s(["CSSVars",()=>x,"GlobalStyle",()=>O,"StylesProvider",()=>C,"ThemeProvider",()=>S,"createStylesContext",()=>k,"useStyles",()=>j],43428)},56544,e=>{"use strict";var t=e.i(24061);let n=(e,n)=>{let r=(0,t.useRef)(!1),o=(0,t.useRef)(!1);(0,t.useEffect)(()=>{if(r.current&&o.current)return e();o.current=!0},n),(0,t.useEffect)(()=>(r.current=!0,()=>{r.current=!1}),[])};e.s(["useUpdateEffect",()=>n])},95585,e=>{"use strict";var t=e.i(5117),n=e.i(82525),r=e.i(53528),o=e.i(23728),i=e.i(91469),a=e.i(7016);function s(e){return(0,t.jsx)(r.Icon,{focusable:"false","aria-hidden":!0,...e,children:(0,t.jsx)("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}let l=(0,o.forwardRef)(function(e,r){let o=(0,i.useStyleConfig)("CloseButton",e),{children:l,isDisabled:c,__css:u,...d}=(0,n.omitThemingProps)(e);return(0,t.jsx)(a.chakra.button,{type:"button","aria-label":"Close",ref:r,disabled:c,__css:{outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,...o,...u},...d,children:l||(0,t.jsx)(s,{width:"1em",height:"1em"})})});l.displayName="CloseButton",e.s(["CloseButton",()=>l])},35317,56269,64082,e=>{"use strict";var t=e.i(5117),n=e.i(55729),r=e.i(46773),r=r,o=e.i(24061),i=e.i(7400);let a="chakra-ui-light",s="chakra-ui-dark",l="chakra-ui-color-mode";function c(e){return{ssr:!1,type:"localStorage",get(t){let n;if(!globalThis?.document)return t;try{n=localStorage.getItem(e)||t}catch(e){}return n||t},set(t){try{localStorage.setItem(e,t)}catch(e){}}}}let u=c(l);function d(e,t){let n=e.match(RegExp(`(^| )${t}=([^;]+)`));return n?.[2]}function f(e,t){return{ssr:!!t,type:"cookie",get:n=>t?d(t,e):globalThis?.document&&d(document.cookie,e)||n,set(t){document.cookie=`${e}=${t}; max-age=31536000; path=/`}}}let p=f(l),h=e=>f(l,e);e.s(["cookieStorageManager",()=>p,"cookieStorageManagerSSR",()=>h,"createCookieStorageManager",()=>f,"createLocalStorageManager",()=>c,"localStorageManager",()=>u],56269);let m=()=>{},g=(0,n.isBrowser)()?o.useLayoutEffect:o.useEffect;function y(e,t){return"cookie"===e.type&&e.ssr?e.get(t):t}let v=function(e){let{value:n,children:l,options:{useSystemColorMode:c,initialColorMode:d,disableTransitionOnChange:f}={},colorModeManager:p=u}=e,h=(0,r._)(),v="dark"===d?"dark":"light",[b,_]=(0,o.useState)(()=>y(p,v)),[w,S]=(0,o.useState)(()=>y(p)),{getSystemTheme:x,setClassName:C,setDataset:j,addListener:k}=(0,o.useMemo)(()=>(function(e={}){let{preventTransition:t=!0,nonce:n}=e,r={setDataset:e=>{let n=t?r.preventTransition():void 0;document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e,n?.()},setClassName(e){document.body.classList.add(e?s:a),document.body.classList.remove(e?a:s)},query:()=>window.matchMedia("(prefers-color-scheme: dark)"),getSystemTheme:e=>r.query().matches??"dark"===e?"dark":"light",addListener(e){let t=r.query(),n=t=>{e(t.matches?"dark":"light")};return"function"==typeof t.addListener?t.addListener(n):t.addEventListener("change",n),()=>{"function"==typeof t.removeListener?t.removeListener(n):t.removeEventListener("change",n)}},preventTransition(){let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),void 0!==n&&(e.nonce=n),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(e)})})}}};return r})({preventTransition:f,nonce:h?.nonce}),[f,h?.nonce]),O="system"!==d||b?b:w,A=(0,o.useCallback)(e=>{let t="system"===e?x():e;_(t),C("dark"===t),j(t),p.set(t)},[p,x,C,j]);g(()=>{"system"===d&&S(x())},[]),(0,o.useEffect)(()=>{let e=p.get();e?A(e):"system"===d?A("system"):A(v)},[p,v,d,A]);let E=(0,o.useCallback)(()=>{A("dark"===O?"light":"dark")},[O,A]);(0,o.useEffect)(()=>{if(c)return k(A)},[c,k,A]);let P=(0,o.useMemo)(()=>({colorMode:n??O,toggleColorMode:n?m:E,setColorMode:n?m:A,forced:void 0!==n}),[O,E,A,n]);return(0,t.jsx)(i.ColorModeContext.Provider,{value:P,children:l})};function b(e){let n=(0,o.useMemo)(()=>({colorMode:"dark",toggleColorMode:m,setColorMode:m,forced:!0}),[]);return(0,t.jsx)(i.ColorModeContext.Provider,{value:n,...e})}function _(e){let n=(0,o.useMemo)(()=>({colorMode:"light",toggleColorMode:m,setColorMode:m,forced:!0}),[]);return(0,t.jsx)(i.ColorModeContext.Provider,{value:n,...e})}v.displayName="ColorModeProvider",b.displayName="DarkMode",_.displayName="LightMode",e.s(["ColorModeProvider",()=>v,"DarkMode",()=>b,"LightMode",()=>_],35317);var w=e.i(11388);let S=String.raw,x=S`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,C=()=>(0,t.jsx)(w.Global,{styles:x}),j=({scope:e=""})=>(0,t.jsx)(w.Global,{styles:S`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${x}
    `});e.s(["CSSPolyfill",()=>C,"CSSReset",()=>j],64082)},68383,e=>{"use strict";var t=e.i(5117),n=e.i(28294),r=e.i(24061);let o=(0,r.createContext)({getDocument:()=>document,getWindow:()=>window});function i({defer:e}={}){let[,t]=(0,r.useReducer)(e=>e+1,0);return(0,n.useSafeLayoutEffect)(()=>{e&&t()},[e]),(0,r.useContext)(o)}function a(e){let{children:n,environment:i,disabled:a}=e,s=(0,r.useRef)(null),l=(0,r.useMemo)(()=>i||{getDocument:()=>s.current?.ownerDocument??document,getWindow:()=>s.current?.ownerDocument.defaultView??window},[i]),c=!a||!i;return(0,t.jsxs)(o.Provider,{value:l,children:[n,c&&(0,t.jsx)("span",{id:"__chakra_env",hidden:!0,ref:s})]})}o.displayName="EnvironmentContext",a.displayName="EnvironmentProvider",e.s(["EnvironmentProvider",()=>a,"useEnvironment",()=>i])},10932,e=>{"use strict";var t=e.i(5117),n=e.i(35317),r=e.i(64082),o=e.i(43428),i=e.i(10522),a=e.i(68383);let s=e=>{let{children:s,colorModeManager:l,portalZIndex:c,resetScope:u,resetCSS:d=!0,theme:f={},environment:p,cssVarsRoot:h,disableEnvironment:m,disableGlobalStyle:g}=e,y=(0,t.jsx)(a.EnvironmentProvider,{environment:p,disabled:m,children:s});return(0,t.jsx)(o.ThemeProvider,{theme:f,cssVarsRoot:h,children:(0,t.jsxs)(n.ColorModeProvider,{colorModeManager:l,options:f.config,children:[d?(0,t.jsx)(r.CSSReset,{scope:u}):(0,t.jsx)(r.CSSPolyfill,{}),!g&&(0,t.jsx)(o.GlobalStyle,{}),c?(0,t.jsx)(i.PortalManager,{zIndex:c,children:y}):y]})})};e.s(["Provider",()=>s])},70533,e=>{"use strict";var t=e.i(24061),n=e.i(15525);function r(e,r){let o=(0,n.useCallbackRef)(e);(0,t.useEffect)(()=>{if(null==r)return;let e=null;return e=window.setTimeout(()=>{o()},r),()=>{e&&window.clearTimeout(e)}},[r,o])}e.s(["useTimeout",()=>r])},68557,37084,75795,3970,84442,e=>{"use strict";let t,n,r;var o,i=e.i(25438),a=e.i(5117),s=e.i(10932),l=e.i(4911),c=e.i(22176),u=e.i(24061),d=e.i(56544),f=e.i(70533),p=e.i(27742),h=e.i(73480),m=e.i(84629);let g=(e,t)=>e.find(e=>e.id===t);function y(e,t){let n=v(e,t),r=n?e[n].findIndex(e=>e.id===t):-1;return{position:n,index:r}}function v(e,t){for(let[n,r]of Object.entries(e))if(g(r,t))return n}var b=e.i(7016);let _={initial:e=>{let{position:t}=e,n=["top","bottom"].includes(t)?"y":"x",r=["top-right","bottom-right"].includes(t)?1:-1;return"bottom"===t&&(r=1),{opacity:0,[n]:24*r}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},w=(0,u.memo)(e=>{let{id:t,message:n,onCloseComplete:r,onRequestRemove:o,requestClose:i=!1,position:s="bottom",duration:l=5e3,containerStyle:c,motionVariants:g=_,toastSpacing:y="0.5rem"}=e,[v,w]=(0,u.useState)(l),S=(0,h.useIsPresent)();(0,d.useUpdateEffect)(()=>{S||r?.()},[S]),(0,d.useUpdateEffect)(()=>{w(l)},[l]);let x=()=>{S&&o()};(0,u.useEffect)(()=>{S&&i&&o()},[S,i,o]),(0,f.useTimeout)(x,v);let C=(0,u.useMemo)(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:y,...c}),[c,y]),j=(0,u.useMemo)(()=>{let e,t,n;return e=s.includes("right"),t=s.includes("left"),n="center",e&&(n="flex-end"),t&&(n="flex-start"),{display:"flex",flexDirection:"column",alignItems:n}},[s]);return(0,a.jsx)(m.motion.div,{layout:!0,className:"chakra-toast",variants:g,initial:"initial",animate:"animate",exit:"exit",onHoverStart:()=>w(null),onHoverEnd:()=>w(l),custom:{position:s},style:j,children:(0,a.jsx)(b.chakra.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:C,children:(0,p.runIfFn)(n,{id:t,onClose:x})})})});w.displayName="ToastComponent";var S=e.i(32569),x=e.i(23013),C=e.i(77767),j=e.i(95808),k=e.i(95585);let O=e=>{let{status:t,variant:n="solid",id:r,title:o,isClosable:i,onClose:s,description:l,colorScheme:c,icon:u}=e,d=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return(0,a.jsxs)(S.Alert,{addRole:!1,status:t,variant:n,id:d?.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:c,children:[(0,a.jsx)(x.AlertIcon,{children:u}),(0,a.jsxs)(b.chakra.div,{flex:"1",maxWidth:"100%",children:[o&&(0,a.jsx)(C.AlertTitle,{id:d?.title,children:o}),l&&(0,a.jsx)(j.AlertDescription,{id:d?.description,display:"block",children:l})]}),i&&(0,a.jsx)(k.CloseButton,{size:"sm",onClick:s,position:"absolute",insetEnd:1,top:1})]})};function A(e={}){let{render:t,toastComponent:n=O}=e;return r=>"function"==typeof t?t({...r,...e}):(0,a.jsx)(n,{...r,...e})}e.s(["Toast",()=>O,"createRenderToast",()=>A],37084);let E=(t=o={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},n=new Set,r=e=>{t=e(t),n.forEach(e=>e())},{getState:()=>t,subscribe:e=>(n.add(e),()=>{r(()=>o),n.delete(e)}),removeToast:(e,t)=>{r(n=>({...n,[t]:n[t].filter(t=>t.id!=e)}))},notify:(e,t)=>{let n=function(e,t={}){P+=1;let n=t.id??P,r=t.position??"bottom";return{id:n,message:e,position:r,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>E.removeToast(String(n),r),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}(e,t),{position:o,id:i}=n;return r(e=>{let t=o.includes("top")?[n,...e[o]??[]]:[...e[o]??[],n];return{...e,[o]:t}}),i},update:(e,t)=>{e&&r(n=>{let r={...n},{position:o,index:i}=y(r,e);return o&&-1!==i&&(r[o][i]={...r[o][i],...t,message:A(t)}),r})},closeAll:({positions:e}={})=>{r(t=>(e??["bottom","bottom-right","bottom-left","top","top-left","top-right"]).reduce((e,n)=>(e[n]=t[n].map(e=>({...e,requestClose:!0})),e),{...t}))},close:e=>{r(t=>{let n=v(t,e);return n?{...t,[n]:t[n].map(t=>t.id==e?{...t,requestClose:!0}:t)}:t})},isActive:e=>!!y(E.getState(),e).position}),P=0;e.s(["toastStore",()=>E],75795);var M=e.i(84732);let[T,$]=(0,l.createContext)({name:"ToastOptionsContext",strict:!1}),F=e=>{let t=(0,u.useSyncExternalStore)(E.subscribe,E.getState,E.getState),{motionVariants:n,component:r=w,portalProps:o,animatePresenceProps:i}=e,s=Object.keys(t).map(e=>{let o,s,l,u=t[e];return(0,a.jsx)("div",{role:"region","aria-live":"polite","aria-label":`Notifications-${e}`,id:`chakra-toast-manager-${e}`,style:(o="top"===e||"bottom"===e,s=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,l=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:o?"0 auto":void 0,top:s,bottom:l,right:e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",left:e.includes("right")?void 0:"env(safe-area-inset-left, 0px)"}),children:(0,a.jsx)(c.AnimatePresence,{...i,initial:!1,children:u.map(e=>(0,a.jsx)(r,{motionVariants:n,...e},e.id))})},e)});return(0,a.jsx)(M.Portal,{...o,children:s})};e.s(["ToastOptionProvider",()=>T,"ToastProvider",()=>F,"useToastOptionContext",()=>$],3970);let I=e=>function({children:t,theme:n=e,toastOptions:r,...o}){return(0,a.jsxs)(s.Provider,{theme:n,...o,children:[(0,a.jsx)(T,{value:r?.defaultOptions,children:t}),(0,a.jsx)(F,{...r})]})};e.s(["createProvider",()=>I],84442);let R=I(i.theme);e.s(["ChakraProvider",()=>R],68557)},10639,(e,t,n)=>{t.exports=e.r(13934)},88802,e=>{"use strict";var t=e.i(55006),n=e.i(1898);let r=(0,n.defineStyle)({borderRadius:"0.25rem",fontWeight:"bold",textTransform:"uppercase",px:"1rem",py:"0.75rem",color:"white"}),o=(0,n.defineStyle)({bg:"brand.500",color:"white",_hover:{transform:"scale(1.05)",transition:"transform 0.3s ease",textDecoration:"none"}}),i=(0,n.defineStyle)({bg:"transparent",color:"white",border:"1px solid white",position:"relative",overflow:"hidden",transition:"color 0.3s ease",zIndex:1,_before:{content:'""',position:"absolute",left:0,top:0,width:"100%",height:"100%",bg:"white",transform:"scaleX(0)",transformOrigin:"center",transition:"transform 0.3s ease",zIndex:-1,pointerEvents:"none"},_hover:{color:"black",borderColor:"white",cursor:"pointer",textDecoration:"none",_before:{transform:"scaleX(1)"}}}),a=(0,n.defineStyle)(e=>({bg:"white",color:"black",_hover:{transform:e.isDisabled?"none":"scale(1.05)",transition:e.isDisabled?"none":"transform 0.3s ease",textDecoration:"none"},_light:{bg:"gray.500",color:"white",_hover:{cursor:"pointer",transform:"scale(1.05)",transition:"transform 0.3s ease",textDecoration:"none"}}})),s=(0,n.defineStyleConfig)({baseStyle:r,variants:{primary:o,secondary:a,outline:i},defaultProps:{variant:"primary",colorScheme:"alphas"}}),l=(0,n.defineStyleConfig)({baseStyle:{textTransform:"uppercase",fontWeight:"bold"}});var c=e.i(31932);let u=(0,t.extendTheme)({config:{initialColorMode:"dark",useSystemColorMode:!1},styles:{global:e=>({body:{color:(0,c.mode)("gray.900","white")(e),bg:(0,c.mode)("white","black")(e)}})},fonts:{heading:"var(--font-oswald)",body:"var(--font-montserrat)"},colors:{brand:{50:"#FBE9EA",100:"#F5C1C4",200:"#DD2B35",300:"#DD2B35",400:"#E24B53",500:"#EC0E24",600:"#B01C24",700:"#84151B",800:"#580E12",900:"#000000"},gold:{50:"#F5F0E8",100:"#E8DCC4",200:"#D4C49A",300:"#CDA857",400:"#B8943A",500:"#A67C1D",600:"#927202",700:"#7A5F02",800:"#624B01",900:"#4A3701"},gray:{50:"#FAFAFA",100:"#F5F5F5",200:"#E5E5E5",300:"#D4D4D4",400:"#A3A3A3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"}},sizes:{"9xl":"1600px","10xl":"1760px","11xl":"1920px"},zIndices:{dropdown:10100,sticky:10200,banner:10300,overlay:10400,modal:10500,popover:10600,skipNav:10700,toast:10800,tooltip:10900},components:{Button:s,Heading:l}});e.s(["default",0,u],88802)},66086,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,n.default=function(){for(var e,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];"u">typeof window&&(void 0===window.gtag&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(e=window).gtag.apply(e,n))}},61362,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=!(arguments.length>1)||void 0===arguments[1]||arguments[1],i=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=n||"";return o&&(a=n.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(r)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&0>n.charAt(t-1).search(/[^\s-]/)?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})),i&&(a="string"==typeof(t=e=a)&&-1!==t.indexOf("@")?(console.warn("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e),a};var r=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i},96863,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.GA4=void 0;var r=l(e.r(66086)),o=l(e.r(61362)),i=["eventCategory","eventAction","eventLabel","eventValue","hitType"],a=["title","location"],s=["page","hitType"];function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){g(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function h(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==u(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}var v=function(){var e;function t(){var e=this;if(!(this instanceof t))throw TypeError("Cannot call a class as a function");g(this,"reset",function(){e.isInitialized=!1,e._testMode=!1,e._currentMeasurementId,e._hasLoadedGA=!1,e._isQueuing=!1,e._queueGtag=[]}),g(this,"_gtag",function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];e._testMode||e._isQueuing?e._queueGtag.push(n):r.default.apply(void 0,n)}),g(this,"_loadGA",function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://www.googletagmanager.com/gtag/js";if("u">typeof window&&"u">typeof document&&!e._hasLoadedGA){var o=document.createElement("script");o.async=!0,o.src="".concat(r,"?id=").concat(t),n&&o.setAttribute("nonce",n),document.body.appendChild(o),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},e._hasLoadedGA=!0}}),g(this,"_toGtagOptions",function(e){if(e){var t={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(e).reduce(function(e,n){var r=function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,s=[],l=!0,c=!1;try{i=(n=n.call(e)).next,!1;for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),2!==s.length);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(n,2)||h(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=r[0],i=r[1];return t[o]?e[t[o]]=i:e[o]=i,e},{})}}),g(this,"initialize",function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)throw Error("Require GA_MEASUREMENT_ID");var r="string"==typeof t?[{trackingId:t}]:t;e._currentMeasurementId=r[0].trackingId;var o=n.gaOptions,i=n.gtagOptions,a=n.nonce,s=n.testMode,l=void 0!==s&&s,c=n.gtagUrl;if(e._testMode=l,l||e._loadGA(e._currentMeasurementId,a,c),e.isInitialized||(e._gtag("js",new Date),r.forEach(function(t){var n=p(p(p({},e._toGtagOptions(p(p({},o),t.gaOptions))),i),t.gtagOptions);Object.keys(n).length?e._gtag("config",t.trackingId,n):e._gtag("config",t.trackingId)})),e.isInitialized=!0,!l){var u=d(e._queueGtag);for(e._queueGtag=[],e._isQueuing=!1;u.length;){var f=u.shift();e._gtag.apply(e,d(f)),"get"===f[0]&&(e._isQueuing=!0)}}}),g(this,"set",function(t){t?"object"!==u(t)?console.warn("Expected `fieldsObject` arg to be an Object"):(0===Object.keys(t).length&&console.warn("empty `fieldsObject` given to .set()"),e._gaCommand("set",t)):console.warn("`fieldsObject` is required in .set()")}),g(this,"_gaCommandSendEvent",function(t,n,r,o,i){e._gtag("event",n,p(p({event_category:t,event_label:r,value:o},i&&{non_interaction:i.nonInteraction}),e._toGtagOptions(i)))}),g(this,"_gaCommandSendEventParameters",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if("string"==typeof n[0])e._gaCommandSendEvent.apply(e,d(n.slice(1)));else{var o=n[0],a=o.eventCategory,s=o.eventAction,l=o.eventLabel,u=o.eventValue,f=(o.hitType,c(o,i));e._gaCommandSendEvent(a,s,l,u,f)}}),g(this,"_gaCommandSendTiming",function(t,n,r,o){e._gtag("event","timing_complete",{name:n,value:r,event_category:t,event_label:o})}),g(this,"_gaCommandSendPageview",function(t,n){if(n&&Object.keys(n).length){var r=e._toGtagOptions(n),o=r.title,i=r.location,s=c(r,a);e._gtag("event","page_view",p(p(p(p({},t&&{page_path:t}),o&&{page_title:o}),i&&{page_location:i}),s))}else t?e._gtag("event","page_view",{page_path:t}):e._gtag("event","page_view")}),g(this,"_gaCommandSendPageviewParameters",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if("string"==typeof n[0])e._gaCommandSendPageview.apply(e,d(n.slice(1)));else{var o=n[0],i=o.page,a=(o.hitType,c(o,s));e._gaCommandSendPageview(i,a)}}),g(this,"_gaCommandSend",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var o="string"==typeof n[0]?n[0]:n[0].hitType;switch(o){case"event":e._gaCommandSendEventParameters.apply(e,n);break;case"pageview":e._gaCommandSendPageviewParameters.apply(e,n);break;case"timing":e._gaCommandSendTiming.apply(e,d(n.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(o));break;default:console.warn("Send command doesn't exist: ".concat(o))}}),g(this,"_gaCommandSet",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]=g({},n[0],n[1])),e._gtag("set",e._toGtagOptions(n[0]))}),g(this,"_gaCommand",function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];switch(t){case"send":e._gaCommandSend.apply(e,r);break;case"set":e._gaCommandSet.apply(e,r);break;default:console.warn("Command doesn't exist: ".concat(t))}}),g(this,"ga",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if("string"==typeof n[0])e._gaCommand.apply(e,n);else{var o=n[0];e._gtag("get",e._currentMeasurementId,"client_id",function(t){e._isQueuing=!1;var n=e._queueGtag;for(o({get:function(n){return"clientId"===n?t:"trackingId"===n?e._currentMeasurementId:"apiVersion"===n?"1":void 0}});n.length;){var r=n.shift();e._gtag.apply(e,d(r))}}),e._isQueuing=!0}return e.ga}),g(this,"event",function(t,n){if("string"==typeof t)e._gtag("event",t,e._toGtagOptions(n));else{var r=t.action,i=t.category,a=t.label,s=t.value,l=t.nonInteraction,c=t.transport;if(!i||!r)return void console.warn("args.category AND args.action are required in event()");var u={hitType:"event",eventCategory:(0,o.default)(i),eventAction:(0,o.default)(r)};a&&(u.eventLabel=(0,o.default)(a)),void 0!==s&&("number"!=typeof s?console.warn("Expected `args.value` arg to be a Number."):u.eventValue=s),void 0!==l&&("boolean"!=typeof l?console.warn("`args.nonInteraction` must be a boolean."):u.nonInteraction=l),void 0!==c&&("string"!=typeof c?console.warn("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(c)&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),u.transport=c)),e._gaCommand("send",u)}}),g(this,"send",function(t){e._gaCommand("send",t)}),this.reset()}return e=[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();n.GA4=v,n.default=new v},60186,(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.ReactGAImplementation=void 0;var o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=i(void 0);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=a?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}(e.r(96863));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}n.ReactGAImplementation=o.GA4,n.default=o.default},17059,58132,27850,94083,e=>{"use strict";e.s([],17059);var t=e.i(5117),n=e.i(24061),r=e.i(10639);let o=(0,n.createContext)({}),i=()=>(0,n.useContext)(o);e.s(["QueryObjectProvider",0,e=>{let[i,a]=(0,n.useState)(null),s=(0,r.useRouter)();return(0,n.useEffect)(()=>{try{let e=Object.fromEntries(new URLSearchParams(window.location.search));a(e)}catch(e){console.error("Failed to parse query params:",e)}},[s.asPath]),(0,t.jsx)(o.Provider,{value:i,children:e.children})},"useQueryObject",0,i],58132);let a=n.default.createContext({});e.s(["APIContext",0,a,"APIProvider",0,e=>{let[r,o]=(0,n.useState)({});(0,n.useEffect)(()=>{console.log("api provider context",e);try{var t=new Headers;for(var n in e?.headers||{})t.append(n,e.headers[n]);var r={method:e?.method||"GET",headers:t,redirect:e?.redirect||"follow"};fetch(`${e.url}`,r).then(e=>e.json()).then(e=>{o(e)}).catch(e=>{console.log(e),o(!1)})}catch(e){console.log(e),o(!1)}},[]);let i={context:r,setContext:o};return e.name&&(console.log("registering fancy..",e.name),i[e.name]=r),(0,t.jsx)(a.Provider,{value:i,children:e.children})},"useAPI",0,()=>(0,n.useContext)(a)],27850),e.s(["STMUserProvider",()=>l,"useSTMUser",()=>c],94083);let s=n.default.createContext({}),l=e=>{let r=i(),[o,a]=(0,n.useState)(null);return(0,n.useEffect)(()=>{if(console.log("queryObject context",r),r&&r.hasOwnProperty("id")){let t=r.id||!1;try{var e=new Headers;e.append("Authorization","Bearer db5kDLSBeIJ734Q5IsZkuu8hvQRWxQZr"),fetch(`https://htxrockets.com/api/stm/snowuser?id=${t}`,{method:"GET",headers:e,redirect:"follow"}).then(e=>e.json()).then(e=>{a(e)}).catch(e=>{console.log(e),a(!1)})}catch(e){console.log(e),a(!1)}}},[r.context]),(0,t.jsx)(s.Provider,{value:{context:o,setContext:a},children:e.children})},c=()=>(0,n.useContext)(s)},75629,(e,t,n)=>{},86553,(e,t,n)=>{var r=e.i(31099);e.r(75629);var o=e.r(24061),i=o&&"object"==typeof o&&"default"in o?o:{default:o},a=void 0!==r.default&&r.default.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,i=void 0===o?a:o;c(s(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(c(s(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed||"u"<typeof window){var n="u">typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},n.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},n.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&c(s(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var u=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},d={};function f(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return d[r]||(d[r]="jsx-"+u(e+"-"+n)),d[r]}function p(e,t){"u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var n=e+t;return d[n]||(d[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[n]}var h=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,i=void 0!==o&&o;this._sheet=r||new l({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=i,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var o=f(r,n);return{styleId:o,rules:Array.isArray(t)?t.map(function(e){return p(o,e)}):[p(o,t)]}}return{styleId:f(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=o.createContext(null);function g(){return new h}function y(){return o.useContext(m)}m.displayName="StyleSheetContext";var v=i.default.useInsertionEffect||i.default.useLayoutEffect,b="u">typeof window?g():void 0;function _(e){var t=b||y();return t&&("u"<typeof window?t.add(e):v(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}_.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},n.StyleRegistry=function(e){var t=e.registry,n=e.children,r=o.useContext(m),a=o.useState(function(){return r||t||g()})[0];return i.default.createElement(m.Provider,{value:a},n)},n.createStyleRegistry=g,n.style=_,n.useStyleRegistry=y},28438,(e,t,n)=>{t.exports=e.r(86553).style},30791,e=>{e.v({className:"oswald_16ee1c1c-module__3tfXKa__className",variable:"oswald_16ee1c1c-module__3tfXKa__variable"})},48922,e=>{e.v({className:"montserrat_dbaa1693-module__Xf9SGW__className",variable:"montserrat_dbaa1693-module__Xf9SGW__variable"})},71177,e=>{e.v({className:"alex_brush_79d8b0c3-module__rfpNQa__className",variable:"alex_brush_79d8b0c3-module__rfpNQa__variable"})},45072,e=>{"use strict";e.i(31099);var t=e.i(5117),n=e.i(28438),r=e.i(68557),o=e.i(88802),i=e.i(88085),a=e.i(23743);e.i(17059);var s=e.i(58132),l=e.i(89265),c=e.i(30791);let u={className:c.default.className,style:{fontFamily:"'Oswald', 'Oswald Fallback'",fontStyle:"normal"}};null!=c.default.variable&&(u.variable=c.default.variable);var d=e.i(48922);let f={className:d.default.className,style:{fontFamily:"'Montserrat', 'Montserrat Fallback'",fontStyle:"normal"}};null!=d.default.variable&&(f.variable=d.default.variable);var p=e.i(71177);let h={className:p.default.className,style:{fontFamily:"'Alex Brush', 'Alex Brush Fallback'",fontWeight:400,fontStyle:"normal"}};null!=p.default.variable&&(h.variable=p.default.variable);var m=e.i(24061),g=e.i(42084),y=e.i(5988),v=e.i(11390);function b({children:e,isValidProp:t,...n}){t&&(0,y.loadExternalIsValidProp)(t),(n={...(0,m.useContext)(g.MotionConfigContext),...n}).isStatic=(0,v.useConstant)(()=>n.isStatic);let r=(0,m.useMemo)(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return m.createElement(g.MotionConfigContext.Provider,{value:r},e)}var _=e.i(60186);e.s(["default",0,function({Component:e,pageProps:c}){let d=(0,m.useRef)(!1),p=e.getLayout??(e=>e);return(0,m.useEffect)(()=>{d.current||(_.default.initialize([{trackingId:l.GA4_MEASUREMENT_ID,testMode:!1}]),d.current=!0)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{children:(0,t.jsx)("meta",{name:"google-site-verification",content:"-Q-PNdaVkWfN4gJiON_9O6-LfmJ2AUUCy92giHJbPDk",className:n.default.dynamic([["57f7c5bd99265a00",[u.style.fontFamily,f.style.fontFamily,h.style.fontFamily]]])})}),(0,t.jsx)(n.default,{id:"57f7c5bd99265a00",dynamic:[u.style.fontFamily,f.style.fontFamily,h.style.fontFamily],children:`:root{--font-oswald:${u.style.fontFamily};--font-montserrat:${f.style.fontFamily};--font-alex-brush:${h.style.fontFamily}}`}),(0,t.jsx)(i.default,{id:"nba-fetch-proxy",strategy:"beforeInteractive",dangerouslySetInnerHTML:{__html:`
(function() {
  var buildTimeConfigUrl = "${l.NBA_SITE_CONFIG_URL.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}";
  var directConfigUrl = "https://content-api-prod.nba.com/public/1/leagues/nba/teams/${l.HOUSTON_ROCKETS_TEAM_ID}/site/config";
  var host = typeof window !== "undefined" ? window.location.hostname : "";
  // Direct API (no proxy) on NBA domains: www-qa.nba.com/rockets, nba.com/rockets, www.nba.com, etc.
  var isNbaHost = host === "nba.com" || host.endsWith(".nba.com");
  var configUrl = isNbaHost ? directConfigUrl : buildTimeConfigUrl;
  window.__NBA_SITE_CONFIG_URL__ = configUrl;
  var setNavConfigUrl = function() {
    var el = document.getElementById("nba-nav");
    if (el) el.setAttribute("data-config-url", configUrl);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setNavConfigUrl);
  } else {
    setNavConfigUrl();
  }
  if (configUrl.indexOf("/") === 0) {
    var proxyBase = configUrl.replace(/\\/public.*$/, "");
    var apiOrigin = "https://content-api-prod.nba.com";
    var realFetch = window.fetch;
    window.fetch = function(input, init) {
      var url = typeof input === "string" ? input : (input && input.url);
      if (url && url.indexOf(apiOrigin + "/") === 0) {
        var newUrl = proxyBase + url.slice(apiOrigin.length);
        input = typeof input === "string" ? newUrl : new Request(newUrl, input);
      }
      return realFetch.call(this, input, init);
    };
  }
})();
          `.trim()}}),(0,t.jsx)(i.default,{id:"gtm-script",strategy:"afterInteractive",children:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${l.GTM_CONTAINER_ID}');`}),(0,t.jsx)(i.default,{id:"nba-embed-script",strategy:"afterInteractive",src:"https://www.nba.com/_teams/include/embed.js"}),(0,t.jsx)(s.QueryObjectProvider,{children:(0,t.jsx)(b,{reducedMotion:"user",children:(0,t.jsx)(r.ChakraProvider,{theme:o.default,children:p((0,t.jsx)(e,{...c,className:n.default.dynamic([["57f7c5bd99265a00",[u.style.fontFamily,f.style.fontFamily,h.style.fontFamily]]])+" "+(c&&null!=c.className&&c.className||"")}))})})})]})}],45072)},16342,(e,t,n)=>{let r="/_app";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(45072)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},81606,e=>{e.v(t=>Promise.all(["static/chunks/fb6830a1e3232726.js"].map(t=>e.l(t))).then(()=>t(34509)))},76407,e=>{e.v(t=>Promise.all(["static/chunks/90c6dc80c657a9dc.js"].map(t=>e.l(t))).then(()=>t(32088)))}]);