(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,99045,e=>{"use strict";var t=e.i(5117),i=e.i(68043);let r=(0,e.i(23728).forwardRef)((e,r)=>(0,t.jsx)(i.Stack,{align:"center",...e,direction:"row",ref:r}));r.displayName="HStack",e.s(["HStack",()=>r])},23743,(e,t,i)=>{t.exports=e.r(32032)},22277,e=>{"use strict";var t=e.i(24061);function i(e){return t.Children.toArray(e).filter(e=>(0,t.isValidElement)(e))}e.s(["getValidChildren",()=>i])},68043,e=>{"use strict";var t=e.i(5117),i=e.i(22277),r=e.i(71942),o=e.i(24061),n=e.i(7016);let a=e=>(0,t.jsx)(n.chakra.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});a.displayName="StackItem";var s=e.i(40499);let l=(0,e.i(23728).forwardRef)((e,l)=>{let{isInline:d,direction:c,align:u,justify:f,spacing:m="0.5rem",wrap:h,children:p,divider:b,className:g,shouldWrapChildren:x,...v}=e,y=d?"row":c??"column",k=(0,o.useMemo)(()=>(function(e){let{spacing:t,direction:i}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,s.mapResponsive)(i,e=>r[e])}})({spacing:m,direction:y}),[m,y]),w=!!b,S=!x&&!w,C=(0,o.useMemo)(()=>{let e=(0,i.getValidChildren)(p);return S?e:e.map((i,r)=>{let n=void 0!==i.key?i.key:r,s=r+1===e.length,l=(0,t.jsx)(a,{children:i},n),d=x?l:i;if(!w)return d;let c=(0,o.cloneElement)(b,{__css:k});return(0,t.jsxs)(o.Fragment,{children:[d,s?null:c]},n)})},[b,k,w,S,x,p]),j=(0,r.cx)("chakra-stack",g);return(0,t.jsx)(n.chakra.div,{ref:l,display:"flex",alignItems:u,justifyContent:f,flexDirection:y,flexWrap:h,gap:w?void 0:m,className:j,...v,children:C})});l.displayName="Stack",e.s(["Stack",()=>l],68043)},40501,e=>{"use strict";function t(e,i=""){return[i,e].filter(Boolean).join("-")}function i(e,t){return`var(${e}${t?`, ${t}`:""})`}function r(e,i=""){var o;return((o=function(e,t="-"){return e.replace(/\s+/g,t)}(`--${t(e,i)}`.toString())).includes("\\.")||Number.isInteger(parseFloat(o.toString()))?o:o.replace(".","\\.")).replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function o(e,t,o){let n=r(e,o);return{variable:n,reference:i(n,t)}}function n(e,t){let i={};for(let r of t){if(Array.isArray(r)){let[t,n]=r;i[t]=o(`${e}-${t}`,n);continue}i[r]=o(`${e}-${r}`)}return i}e.s(["addPrefix",()=>t,"cssVar",()=>o,"defineCssVars",()=>n,"toVarDefinition",()=>r,"toVarReference",()=>i])},7305,e=>{"use strict";var t=e.i(51244);function i(e){return(0,t.isObject)(e)&&e.reference?e.reference:String(e)}let r=(e,...t)=>t.map(i).join(` ${e} `).replace(/calc/g,""),o=(...e)=>`calc(${r("+",...e)})`,n=(...e)=>`calc(${r("-",...e)})`,a=(...e)=>`calc(${r("*",...e)})`,s=(...e)=>`calc(${r("/",...e)})`,l=e=>{let t=i(e);return null==t||Number.isNaN(parseFloat(t))?a(t,-1):String(t).startsWith("-")?String(t).slice(1):`-${t}`},d=Object.assign(e=>({add:(...t)=>d(o(e,...t)),subtract:(...t)=>d(n(e,...t)),multiply:(...t)=>d(a(e,...t)),divide:(...t)=>d(s(e,...t)),negate:()=>d(l(e)),toString:()=>e.toString()}),{add:o,subtract:n,multiply:a,divide:s,negate:l});e.s(["calc",()=>d])},43428,40626,9932,e=>{"use strict";var t=e.i(5117),i=e.i(61196),r=e.i(51244),o=e.i(73817),n=e.i(7305),a=e.i(40501);function s(e,t,i={}){let{stop:o,getKey:n}=i;return function e(i,a=[]){if((0,r.isObject)(i)||Array.isArray(i)){let r={};for(let[s,l]of Object.entries(i)){let d=n?.(s)??s,c=[...a,d];if(o?.(i,c))return t(i,a);r[d]=e(l,c)}return r}return t(i,a)}(e)}var l=e.i(87669),d=e.i(39231);let c=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"];function u(e){let t=(0,d.pick)(e,c),i=e.semanticTokens,r=e=>l.pseudoPropNames.includes(e)||"default"===e,o={};return s(t,(e,t)=>{null!=e&&(o[t.join(".")]={isSemantic:!1,value:e})}),s(i,(e,t)=>{null!=e&&(o[t.join(".")]={isSemantic:!0,value:e})},{stop:e=>Object.keys(e).every(r)}),o}function f(e,t){return(0,a.cssVar)(String(e).replace(/\./g,"-"),void 0,t)}function m(e){let t=function(e){let{__cssMap:t,__cssVars:i,__breakpoints:r,...o}=e;return o}(e),{cssMap:a,cssVars:s}=function(e){let t=u(e),i=e.config?.cssVarPrefix,a={},s={};for(let[e,d]of Object.entries(t)){let{isSemantic:c,value:u}=d,{variable:m,reference:h}=f(e,i);if(!c){if(e.startsWith("space")){let[t,...i]=e.split("."),r=`${t}.-${i.join(".")}`,o=n.calc.negate(u),a=n.calc.negate(h);s[r]={value:o,var:m,varRef:a}}a[m]=u,s[e]={value:u,var:m,varRef:h};continue}let p=(0,r.isObject)(u)?u:{default:u};a=(0,o.mergeWith)(a,Object.entries(p).reduce((r,[o,n])=>{if(!n)return r;let a=function(e,r){let o=[String(e).split(".")[0],r].join(".");if(!t[o])return r;let{reference:n}=f(o,i);return n}(e,`${n}`);return"default"===o?r[m]=a:r[l.pseudoSelectors?.[o]??o]={[m]:a},r},{})),s[e]={value:h,var:m,varRef:h}}return{cssVars:a,cssMap:s}}(t);return Object.assign(t,{__cssVars:{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0",...s},__cssMap:a,__breakpoints:(0,i.analyzeBreakpoints)(t.breakpoints)}),t}e.s(["flattenTokens",()=>u],40626),e.s(["toCSSVar",()=>m],9932);var h=e.i(86280),p=e.i(4911),b=e.i(83378),g=e.i(27742),x=e.i(46773),x=x,v=e.i(11388),y=e.i(24061),k=e.i(7400);function w(e){let{cssVarsRoot:i,theme:r,children:o}=e,n=(0,y.useMemo)(()=>m(r),[r]);return(0,t.jsxs)(x.a,{theme:n,children:[(0,t.jsx)(S,{root:i}),o]})}function S({root:e=":host, :root"}){let i=[e,"[data-theme]"].join(",");return(0,t.jsx)(v.Global,{styles:e=>({[i]:e.__cssVars})})}let[C,j]=(0,p.createContext)({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function $(e){return(0,p.createContext)({name:`${e}StylesContext`,errorMessage:`useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `})}function M(){let{colorMode:e}=(0,k.useColorMode)();return(0,t.jsx)(v.Global,{styles:t=>{let i=(0,b.memoizedGet)(t,"styles.global"),r=(0,g.runIfFn)(i,{theme:t,colorMode:e});if(r)return(0,h.css)(r)(t)}})}e.s(["CSSVars",()=>S,"GlobalStyle",()=>M,"StylesProvider",()=>C,"ThemeProvider",()=>w,"createStylesContext",()=>$,"useStyles",()=>j],43428)},86633,81184,e=>{"use strict";var t=e.i(5117),i=e.i(82525),r=e.i(71942);let[o,n]=(0,e.i(43428).createStylesContext)("Card");e.s(["CardStylesProvider",()=>o,"useCardStyles",()=>n],81184);var a=e.i(23728),s=e.i(91469),l=e.i(7016);let d=(0,a.forwardRef)(function(e,n){let{className:a,children:d,direction:c="column",justify:u,align:f,...m}=(0,i.omitThemingProps)(e),h=(0,s.useMultiStyleConfig)("Card",e);return(0,t.jsx)(l.chakra.div,{ref:n,className:(0,r.cx)("chakra-card",a),__css:{display:"flex",flexDirection:c,justifyContent:u,alignItems:f,position:"relative",minWidth:0,wordWrap:"break-word",...h.container},...m,children:(0,t.jsx)(o,{value:h,children:d})})});e.s(["Card",()=>d],86633)},15124,27455,e=>{"use strict";var t=e.i(5117),i=e.i(71942),r=e.i(81184),o=e.i(23728),n=e.i(7016);let a=(0,o.forwardRef)(function(e,o){let{className:a,...s}=e,l=(0,r.useCardStyles)();return(0,t.jsx)(n.chakra.div,{ref:o,className:(0,i.cx)("chakra-card__body",a),__css:l.body,...s})});e.s(["CardBody",()=>a],15124);let s=(0,o.forwardRef)(function(e,o){let{className:a,justify:s,...l}=e,d=(0,r.useCardStyles)();return(0,t.jsx)(n.chakra.div,{ref:o,className:(0,i.cx)("chakra-card__footer",a),__css:{display:"flex",justifyContent:s,...d.footer},...l})});e.s(["CardFooter",()=>s],27455)},89372,e=>{"use strict";var t=e.i(5117),i=e.i(24061),r=e.i(53528),o=e.i(23728);function n(e){let{viewBox:n="0 0 24 24",d:a,displayName:s,defaultProps:l={}}=e,d=i.Children.toArray(e.path),c=(0,o.forwardRef)((e,i)=>(0,t.jsx)(r.Icon,{ref:i,viewBox:n,...l,...e,children:d.length?d:(0,t.jsx)("path",{fill:"currentColor",d:a})}));return c.displayName=s,c}e.s(["createIcon",()=>n])},27200,e=>{"use strict";var t=e.i(5117),i=e.i(68043);let r=(0,e.i(23728).forwardRef)((e,r)=>(0,t.jsx)(i.Stack,{align:"center",...e,direction:"column",ref:r}));r.displayName="VStack",e.s(["VStack",()=>r])},33659,e=>{"use strict";var t=e.i(7016),i=e.i(90327),r=e.i(84629),o=e.i(86713);let n=(0,t.chakra)(r.motion.div,{shouldForwardProp:e=>(0,o.isValidMotionProp)(e)||(0,i.shouldForwardProp)(e)});e.s(["default",0,n])},87609,e=>{"use strict";var t=e.i(5117),i=e.i(76524);e.s(["default",0,({type:e="gradient",opacity:r=.5,color:o="black",gradient:n="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.55) 50%, transparent 100%)",...a})=>{if("none"===e)return null;let s="gradient"===e?{background:n}:{background:`${o}`,opacity:r};return(0,t.jsx)(i.Box,{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:1,...s,...a})}])},70407,e=>{"use strict";var t=e.i(6692),i=e.i(7016),r=e.i(60807);let o=(0,i.chakra)(t.default,{shouldForwardProp:e=>["href","target","children","as","replace","scroll","shallow","passHref","prefetch","locale","legacyBehavior","onMouseEnter","onTouchStart","onClick"].includes(e)||(0,r.default)(e)});o.displayName="MagicLink",e.s(["default",0,o])},48824,2114,54677,e=>{"use strict";var t=e.i(5117),i=e.i(4911),r=e.i(63593),o=e.i(1969);let[n,a]=(0,i.createContext)(),s={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function l(e){let{isOpen:i,onClose:a,placement:l="right",children:d,...c}=e,u=(0,o.useTheme)(),f=u.components?.Drawer,m=function(e,t){if(e)return s[e]?.[t]??e}(l,u.direction);return(0,t.jsx)(n,{value:{placement:m},children:(0,t.jsx)(r.Modal,{isOpen:i,onClose:a,styleConfig:f,...c,children:d})})}e.s(["Drawer",()=>l,"useDrawerContext",()=>a],48824);var d=e.i(71942),c=e.i(75374),u=e.i(22176),f=e.i(84629),m=e.i(24061),h=e.i(30912);let p={exit:{duration:.15,ease:h.TRANSITION_EASINGS.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},b={exit:({direction:e,transition:t,transitionEnd:i,delay:r})=>{let{exit:o}=(0,h.getSlideTransition)({direction:e});return{...o,transition:t?.exit??h.withDelay.exit(p.exit,r),transitionEnd:i?.exit}},enter:({direction:e,transitionEnd:t,transition:i,delay:r})=>{let{enter:o}=(0,h.getSlideTransition)({direction:e});return{...o,transition:i?.enter??h.withDelay.enter(p.enter,r),transitionEnd:t?.enter}}},g=(0,m.forwardRef)(function(e,i){let{direction:r="right",style:o,unmountOnExit:n,in:a,className:s,transition:l,transitionEnd:c,delay:m,motionProps:p,animatePresenceProps:g,...x}=e,v=Object.assign({position:"fixed"},(0,h.getSlideTransition)({direction:r}).position,o),y=!n||a&&n,k=a||n?"enter":"exit",w={transitionEnd:c,transition:l,direction:r,delay:m};return(0,t.jsx)(u.AnimatePresence,{...g,custom:w,children:y&&(0,t.jsx)(f.motion.div,{...x,ref:i,initial:"exit",className:(0,d.cx)("chakra-slide",s),animate:k,exit:"exit",custom:w,variants:b,style:v,...p})})});g.displayName="Slide",e.s(["Slide",()=>g],2114);var x=e.i(7016),v=e.i(23728);let y=(0,x.chakra)(g),k=(0,v.forwardRef)((e,i)=>{let{className:o,children:n,motionProps:s,containerProps:l,...u}=e,{getDialogProps:f,getDialogContainerProps:m,isOpen:h}=(0,r.useModalContext)(),p=f(u,i),b=m(l),g=(0,d.cx)("chakra-modal__content",o),v=(0,r.useModalStyles)(),k={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...v.dialog},w={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...v.dialogContainer},{placement:S}=a();return(0,t.jsx)(c.ModalFocusScope,{children:(0,t.jsx)(x.chakra.div,{...b,className:"chakra-modal__content-container",__css:w,children:(0,t.jsx)(y,{motionProps:s,direction:S,in:h,className:g,...p,__css:k,children:n})})})});k.displayName="DrawerContent",e.s(["DrawerContent",()=>k],54677)},56544,e=>{"use strict";var t=e.i(24061);let i=(e,i)=>{let r=(0,t.useRef)(!1),o=(0,t.useRef)(!1);(0,t.useEffect)(()=>{if(r.current&&o.current)return e();o.current=!0},i),(0,t.useEffect)(()=>(r.current=!0,()=>{r.current=!1}),[])};e.s(["useUpdateEffect",()=>i])},42480,88230,e=>{"use strict";var t=e.i(55729);function i(e){if(!(0,t.isHTMLElement)(e)||(0,t.isHiddenElement)(e)||(0,t.isDisabledElement)(e))return!1;let{localName:i}=e;if(["input","select","textarea","button"].indexOf(i)>=0)return!0;let r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return i in r?r[i]():!!(0,t.isContentEditableElement)(e)||e.hasAttribute("tabindex")}function r(e){let r;return!!e&&(0,t.isHTMLElement)(e)&&i(e)&&!((r=e).hasAttribute("tabindex")&&-1===r.tabIndex)}e.s(["isFocusable",()=>i,"isTabbable",()=>r],88230);function o(e){let t=Array.from(e.querySelectorAll("input:not(:disabled):not([disabled]),select:not(:disabled):not([disabled]),textarea:not(:disabled):not([disabled]),embed,iframe,object,a[href],area[href],button:not(:disabled):not([disabled]),[tabindex],audio[controls],video[controls],*[tabindex]:not([aria-disabled]),*[contenteditable]"));return t.unshift(e),t.filter(e=>i(e)&&e.offsetWidth>0&&e.offsetHeight>0)}e.s(["getAllFocusable",()=>o],42480)},30912,e=>{"use strict";let t={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},i={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},r={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},o={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},n={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function a(e){switch(e?.direction??"right"){case"right":default:return r;case"left":return i;case"bottom":return n;case"top":return o}}let s={enter:{duration:.2,ease:t.easeOut},exit:{duration:.1,ease:t.easeIn}},l={enter:(e,t)=>({...e,delay:"number"==typeof t?t:t?.enter}),exit:(e,t)=>({...e,delay:"number"==typeof t?t:t?.exit})};e.s(["TRANSITION_DEFAULTS",()=>s,"TRANSITION_EASINGS",()=>t,"getSlideTransition",()=>a,"withDelay",()=>l])},95585,e=>{"use strict";var t=e.i(5117),i=e.i(82525),r=e.i(53528),o=e.i(23728),n=e.i(91469),a=e.i(7016);function s(e){return(0,t.jsx)(r.Icon,{focusable:"false","aria-hidden":!0,...e,children:(0,t.jsx)("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}let l=(0,o.forwardRef)(function(e,r){let o=(0,n.useStyleConfig)("CloseButton",e),{children:l,isDisabled:d,__css:c,...u}=(0,i.omitThemingProps)(e);return(0,t.jsx)(a.chakra.button,{type:"button","aria-label":"Close",ref:r,disabled:d,__css:{outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,...o,...c},...u,children:l||(0,t.jsx)(s,{width:"1em",height:"1em"})})});l.displayName="CloseButton",e.s(["CloseButton",()=>l])},68383,e=>{"use strict";var t=e.i(5117),i=e.i(28294),r=e.i(24061);let o=(0,r.createContext)({getDocument:()=>document,getWindow:()=>window});function n({defer:e}={}){let[,t]=(0,r.useReducer)(e=>e+1,0);return(0,i.useSafeLayoutEffect)(()=>{e&&t()},[e]),(0,r.useContext)(o)}function a(e){let{children:i,environment:n,disabled:a}=e,s=(0,r.useRef)(null),l=(0,r.useMemo)(()=>n||{getDocument:()=>s.current?.ownerDocument??document,getWindow:()=>s.current?.ownerDocument.defaultView??window},[n]),d=!a||!n;return(0,t.jsxs)(o.Provider,{value:l,children:[i,d&&(0,t.jsx)("span",{id:"__chakra_env",hidden:!0,ref:s})]})}o.displayName="EnvironmentContext",a.displayName="EnvironmentProvider",e.s(["EnvironmentProvider",()=>a,"useEnvironment",()=>n])},70533,e=>{"use strict";var t=e.i(24061),i=e.i(15525);function r(e,r){let o=(0,i.useCallbackRef)(e);(0,t.useEffect)(()=>{if(null==r)return;let e=null;return e=window.setTimeout(()=>{o()},r),()=>{e&&window.clearTimeout(e)}},[r,o])}e.s(["useTimeout",()=>r])},35317,56269,64082,e=>{"use strict";var t=e.i(5117),i=e.i(55729),r=e.i(46773),r=r,o=e.i(24061),n=e.i(7400);let a="chakra-ui-light",s="chakra-ui-dark",l="chakra-ui-color-mode";function d(e){return{ssr:!1,type:"localStorage",get(t){let i;if(!globalThis?.document)return t;try{i=localStorage.getItem(e)||t}catch(e){}return i||t},set(t){try{localStorage.setItem(e,t)}catch(e){}}}}let c=d(l);function u(e,t){let i=e.match(RegExp(`(^| )${t}=([^;]+)`));return i?.[2]}function f(e,t){return{ssr:!!t,type:"cookie",get:i=>t?u(t,e):globalThis?.document&&u(document.cookie,e)||i,set(t){document.cookie=`${e}=${t}; max-age=31536000; path=/`}}}let m=f(l),h=e=>f(l,e);e.s(["cookieStorageManager",()=>m,"cookieStorageManagerSSR",()=>h,"createCookieStorageManager",()=>f,"createLocalStorageManager",()=>d,"localStorageManager",()=>c],56269);let p=()=>{},b=(0,i.isBrowser)()?o.useLayoutEffect:o.useEffect;function g(e,t){return"cookie"===e.type&&e.ssr?e.get(t):t}let x=function(e){let{value:i,children:l,options:{useSystemColorMode:d,initialColorMode:u,disableTransitionOnChange:f}={},colorModeManager:m=c}=e,h=(0,r._)(),x="dark"===u?"dark":"light",[v,y]=(0,o.useState)(()=>g(m,x)),[k,w]=(0,o.useState)(()=>g(m)),{getSystemTheme:S,setClassName:C,setDataset:j,addListener:$}=(0,o.useMemo)(()=>(function(e={}){let{preventTransition:t=!0,nonce:i}=e,r={setDataset:e=>{let i=t?r.preventTransition():void 0;document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e,i?.()},setClassName(e){document.body.classList.add(e?s:a),document.body.classList.remove(e?a:s)},query:()=>window.matchMedia("(prefers-color-scheme: dark)"),getSystemTheme:e=>r.query().matches??"dark"===e?"dark":"light",addListener(e){let t=r.query(),i=t=>{e(t.matches?"dark":"light")};return"function"==typeof t.addListener?t.addListener(i):t.addEventListener("change",i),()=>{"function"==typeof t.removeListener?t.removeListener(i):t.removeEventListener("change",i)}},preventTransition(){let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),void 0!==i&&(e.nonce=i),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(e)})})}}};return r})({preventTransition:f,nonce:h?.nonce}),[f,h?.nonce]),M="system"!==u||v?v:k,T=(0,o.useCallback)(e=>{let t="system"===e?S():e;y(t),C("dark"===t),j(t),m.set(t)},[m,S,C,j]);b(()=>{"system"===u&&w(S())},[]),(0,o.useEffect)(()=>{let e=m.get();e?T(e):"system"===u?T("system"):T(x)},[m,x,u,T]);let _=(0,o.useCallback)(()=>{T("dark"===M?"light":"dark")},[M,T]);(0,o.useEffect)(()=>{if(d)return $(T)},[d,$,T]);let E=(0,o.useMemo)(()=>({colorMode:i??M,toggleColorMode:i?p:_,setColorMode:i?p:T,forced:void 0!==i}),[M,_,T,i]);return(0,t.jsx)(n.ColorModeContext.Provider,{value:E,children:l})};function v(e){let i=(0,o.useMemo)(()=>({colorMode:"dark",toggleColorMode:p,setColorMode:p,forced:!0}),[]);return(0,t.jsx)(n.ColorModeContext.Provider,{value:i,...e})}function y(e){let i=(0,o.useMemo)(()=>({colorMode:"light",toggleColorMode:p,setColorMode:p,forced:!0}),[]);return(0,t.jsx)(n.ColorModeContext.Provider,{value:i,...e})}x.displayName="ColorModeProvider",v.displayName="DarkMode",y.displayName="LightMode",e.s(["ColorModeProvider",()=>x,"DarkMode",()=>v,"LightMode",()=>y],35317);var k=e.i(11388);let w=String.raw,S=w`
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
`,C=()=>(0,t.jsx)(k.Global,{styles:S}),j=({scope:e=""})=>(0,t.jsx)(k.Global,{styles:w`
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

      ${S}
    `});e.s(["CSSPolyfill",()=>C,"CSSReset",()=>j],64082)},10932,e=>{"use strict";var t=e.i(5117),i=e.i(35317),r=e.i(64082),o=e.i(43428),n=e.i(10522),a=e.i(68383);let s=e=>{let{children:s,colorModeManager:l,portalZIndex:d,resetScope:c,resetCSS:u=!0,theme:f={},environment:m,cssVarsRoot:h,disableEnvironment:p,disableGlobalStyle:b}=e,g=(0,t.jsx)(a.EnvironmentProvider,{environment:m,disabled:p,children:s});return(0,t.jsx)(o.ThemeProvider,{theme:f,cssVarsRoot:h,children:(0,t.jsxs)(i.ColorModeProvider,{colorModeManager:l,options:f.config,children:[u?(0,t.jsx)(r.CSSReset,{scope:c}):(0,t.jsx)(r.CSSPolyfill,{}),!b&&(0,t.jsx)(o.GlobalStyle,{}),d?(0,t.jsx)(n.PortalManager,{zIndex:d,children:g}):g]})})};e.s(["Provider",()=>s])},68557,37084,75795,3970,84442,e=>{"use strict";let t,i,r;var o,n=e.i(25438),a=e.i(5117),s=e.i(10932),l=e.i(4911),d=e.i(22176),c=e.i(24061),u=e.i(56544),f=e.i(70533),m=e.i(27742),h=e.i(73480),p=e.i(84629);let b=(e,t)=>e.find(e=>e.id===t);function g(e,t){let i=x(e,t),r=i?e[i].findIndex(e=>e.id===t):-1;return{position:i,index:r}}function x(e,t){for(let[i,r]of Object.entries(e))if(b(r,t))return i}var v=e.i(7016);let y={initial:e=>{let{position:t}=e,i=["top","bottom"].includes(t)?"y":"x",r=["top-right","bottom-right"].includes(t)?1:-1;return"bottom"===t&&(r=1),{opacity:0,[i]:24*r}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},k=(0,c.memo)(e=>{let{id:t,message:i,onCloseComplete:r,onRequestRemove:o,requestClose:n=!1,position:s="bottom",duration:l=5e3,containerStyle:d,motionVariants:b=y,toastSpacing:g="0.5rem"}=e,[x,k]=(0,c.useState)(l),w=(0,h.useIsPresent)();(0,u.useUpdateEffect)(()=>{w||r?.()},[w]),(0,u.useUpdateEffect)(()=>{k(l)},[l]);let S=()=>{w&&o()};(0,c.useEffect)(()=>{w&&n&&o()},[w,n,o]),(0,f.useTimeout)(S,x);let C=(0,c.useMemo)(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:g,...d}),[d,g]),j=(0,c.useMemo)(()=>{let e,t,i;return e=s.includes("right"),t=s.includes("left"),i="center",e&&(i="flex-end"),t&&(i="flex-start"),{display:"flex",flexDirection:"column",alignItems:i}},[s]);return(0,a.jsx)(p.motion.div,{layout:!0,className:"chakra-toast",variants:b,initial:"initial",animate:"animate",exit:"exit",onHoverStart:()=>k(null),onHoverEnd:()=>k(l),custom:{position:s},style:j,children:(0,a.jsx)(v.chakra.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:C,children:(0,m.runIfFn)(i,{id:t,onClose:S})})})});k.displayName="ToastComponent";var w=e.i(32569),S=e.i(23013),C=e.i(77767),j=e.i(95808),$=e.i(95585);let M=e=>{let{status:t,variant:i="solid",id:r,title:o,isClosable:n,onClose:s,description:l,colorScheme:d,icon:c}=e,u=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return(0,a.jsxs)(w.Alert,{addRole:!1,status:t,variant:i,id:u?.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:d,children:[(0,a.jsx)(S.AlertIcon,{children:c}),(0,a.jsxs)(v.chakra.div,{flex:"1",maxWidth:"100%",children:[o&&(0,a.jsx)(C.AlertTitle,{id:u?.title,children:o}),l&&(0,a.jsx)(j.AlertDescription,{id:u?.description,display:"block",children:l})]}),n&&(0,a.jsx)($.CloseButton,{size:"sm",onClick:s,position:"absolute",insetEnd:1,top:1})]})};function T(e={}){let{render:t,toastComponent:i=M}=e;return r=>"function"==typeof t?t({...r,...e}):(0,a.jsx)(i,{...r,...e})}e.s(["Toast",()=>M,"createRenderToast",()=>T],37084);let _=(t=o={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},i=new Set,r=e=>{t=e(t),i.forEach(e=>e())},{getState:()=>t,subscribe:e=>(i.add(e),()=>{r(()=>o),i.delete(e)}),removeToast:(e,t)=>{r(i=>({...i,[t]:i[t].filter(t=>t.id!=e)}))},notify:(e,t)=>{let i=function(e,t={}){E+=1;let i=t.id??E,r=t.position??"bottom";return{id:i,message:e,position:r,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>_.removeToast(String(i),r),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}(e,t),{position:o,id:n}=i;return r(e=>{let t=o.includes("top")?[i,...e[o]??[]]:[...e[o]??[],i];return{...e,[o]:t}}),n},update:(e,t)=>{e&&r(i=>{let r={...i},{position:o,index:n}=g(r,e);return o&&-1!==n&&(r[o][n]={...r[o][n],...t,message:T(t)}),r})},closeAll:({positions:e}={})=>{r(t=>(e??["bottom","bottom-right","bottom-left","top","top-left","top-right"]).reduce((e,i)=>(e[i]=t[i].map(e=>({...e,requestClose:!0})),e),{...t}))},close:e=>{r(t=>{let i=x(t,e);return i?{...t,[i]:t[i].map(t=>t.id==e?{...t,requestClose:!0}:t)}:t})},isActive:e=>!!g(_.getState(),e).position}),E=0;e.s(["toastStore",()=>_],75795);var N=e.i(84732);let[P,A]=(0,l.createContext)({name:"ToastOptionsContext",strict:!1}),R=e=>{let t=(0,c.useSyncExternalStore)(_.subscribe,_.getState,_.getState),{motionVariants:i,component:r=k,portalProps:o,animatePresenceProps:n}=e,s=Object.keys(t).map(e=>{let o,s,l,c=t[e];return(0,a.jsx)("div",{role:"region","aria-live":"polite","aria-label":`Notifications-${e}`,id:`chakra-toast-manager-${e}`,style:(o="top"===e||"bottom"===e,s=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,l=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:o?"0 auto":void 0,top:s,bottom:l,right:e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",left:e.includes("right")?void 0:"env(safe-area-inset-left, 0px)"}),children:(0,a.jsx)(d.AnimatePresence,{...n,initial:!1,children:c.map(e=>(0,a.jsx)(r,{motionVariants:i,...e},e.id))})},e)});return(0,a.jsx)(N.Portal,{...o,children:s})};e.s(["ToastOptionProvider",()=>P,"ToastProvider",()=>R,"useToastOptionContext",()=>A],3970);let I=e=>function({children:t,theme:i=e,toastOptions:r,...o}){return(0,a.jsxs)(s.Provider,{theme:i,...o,children:[(0,a.jsx)(P,{value:r?.defaultOptions,children:t}),(0,a.jsx)(R,{...r})]})};e.s(["createProvider",()=>I],84442);let z=I(n.theme);e.s(["ChakraProvider",()=>z],68557)}]);