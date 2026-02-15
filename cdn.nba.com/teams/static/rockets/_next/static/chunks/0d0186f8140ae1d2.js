(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16007,e=>{"use strict";var t,i,r,a,s,n,o=((t={}).FULL="full",t.HALF="half",t.QUARTER="quarter",t),l=((i={}).ROCKETS_REWARDS="rockets-rewards",i.ACCESS_TO_EXCLUSIVE_CLUBS="access-to-exclusive-clubs",i.BUSINESS_CONNECTIONS="business-connections",i.DEDICATED_SERVICE="dedicated-service",i.FIRST_CLASS_SERVICE="first-class-service",i.PARKING_CONVENIENCE="parking-convenience",i.PREMIUM_HOSPITALITY="premium-hospitality",i.PRIVATE_EVENTS="private-events",i.PRIORITY_PRICING="priority-pricing",i.TOYOTA_TUNDRA_GARAGE_PARKING="toyota-tundra-garage-parking",i.VIP_LOADING_DOCK_PARKING="vip-loading-dock-parking",i),d=((r={}).EAST_AND_WEST_FROST_CLUB="east-and-west-frost-club",r.GOLDEN_NUGGET_CLUB="golden-nugget-club",r.LEXUS_LOUNGE="lexus-lounge",r.MICHELOB_ULTRA_CLUB="michelob-ultra-club",r.PNC_CLUB="pnc-club",r.SIRE_SPIRITS_SOCIAL_CLUB="sire-spirits-social-club",r),c=((a={}).BASELINE_CLUB="baseline-club",a.COURTSIDE="courtside",a.FLOOR="floor",a.FROST_CLUB="frost-club",a.LEDGE_DINING="ledge-dining",a.SIRE_SPIRITS_SOCIAL_CLUB="sire-spirits-social-club",a),u=((s={}).DRAFTKINGS_PARTY="draftkings-party",s.EXECUTIVE="executive",s.LOFTS="lofts",s.SKY_BOX="sky-box",s.THE_GREEN_ROOM="the-green-room",s.THE_SNEAKER_SUITE="the-sneaker-suite",s.THEATER_BOX="theater-box",s.SIRE_SPIRITS_SOCIAL_CLUB="sire-spirits-social-club",s),m=((n={}).HOME="home",n.NEWS="news",n.COMMUNITY="community",n.PHOTOS="photos",n.VIDEOS="videos",n.TICKETS="tickets",n.FANS="fans",n.SINGLE_GAME_TICKETS="single_game_tickets",n.SCHEDULE="schedule",n.ROSTER="roster",n);e.s(["FeaturedMembershipBenefit",()=>l,"Membership",()=>o,"NbaAnalyticsPageType",()=>m,"PremiumClub",()=>d,"PremiumSeating",()=>c,"PremiumSuite",()=>u])},88085,(e,t,i)=>{t.exports=e.r(25941)},37780,e=>{"use strict";var t=e.i(5117),i=e.i(89265);e.s(["NbaNav",0,()=>(0,t.jsx)("div",{id:"nba-nav","data-team":"rockets","data-custom_top":"schedule_top","data-pagetype":"custom","data-config-url":i.NBA_SITE_CONFIG_URL})])},77836,e=>{"use strict";var t=e.i(5117),i=e.i(37780),r=e.i(9503),a=e.i(76524),s=e.i(7400),n=e.i(88085);let o=({pageType:e})=>(0,t.jsxs)(t.Fragment,{children:[e&&(0,t.jsx)(n.default,{id:`nba-analytics-${e}`,dangerouslySetInnerHTML:{__html:`
          window.nbaAnalytics = {
            pageType: "${e}",
          };
        `},strategy:"afterInteractive"}),(0,t.jsx)(n.default,{id:"nba-analytics",src:"https://www.nba.com/_teams/include/analytics.js",strategy:"afterInteractive"})]});e.s(["default",0,({children:e,nbaAnalyticsPageType:n})=>{let l=(0,s.useColorModeValue)("white","brand.900");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.NbaNav,{}),(0,t.jsx)(a.Box,{as:"main",bg:l,children:e}),(0,t.jsx)(r.NbaFooter,{}),(0,t.jsx)(o,{pageType:n})]})}],77836)},94864,e=>{"use strict";var t=e.i(51005);e.s(["Navigation",()=>t.default])},26362,e=>{"use strict";var t=e.i(89265);e.s(["getCampaignUrl",0,({baseUrl:e,utmSource:i,utmMedium:r,utmCampaign:a})=>{try{if(!e)throw Error("Ticket link is required for campaign");if(!i||!r||!a)throw Error("UTM parameters are required for campaign");let s=new URL(e),n=new URL(t.AXS_TICKET_URL),o=new URL(t.TOYOTA_CENTER_URL);if(s.hostname===n.hostname)return(({baseUrl:e,utmSource:t="rockets",utmMedium:i="web",utmCampaign:r})=>{try{if(!e)throw Error("Base URL is required for ticket campaign");return`${e}?cpsrc=${r}|${t}|${i}`}catch(e){return"#"}})({baseUrl:e,utmSource:i,utmMedium:r,utmCampaign:a});if(s.hostname===o.hostname)return(({baseUrl:e,utmSource:t="rockets",utmMedium:i="web",utmCampaign:r})=>{try{if(!e)throw Error("Base URL is required for campaign");return`${e}?utm_campaign=${r}&utm_source=${t}&utm_medium=${i}`}catch(e){return"#"}})({baseUrl:e,utmSource:i,utmMedium:r,utmCampaign:a});return"#"}catch(e){return"#"}}])},67154,e=>{"use strict";var t=e.i(5117),i=e.i(1898),r=e.i(71942),a=e.i(24061),s=e.i(63593),n=e.i(23728),o=e.i(7016);let l=(0,n.forwardRef)((e,n)=>{let{className:l,...d}=e,{headerId:c,setHeaderMounted:u}=(0,s.useModalContext)();(0,a.useEffect)(()=>(u(!0),()=>u(!1)),[u]);let m=(0,r.cx)("chakra-modal__header",l),p=(0,s.useModalStyles)(),h=(0,i.defineStyle)({flex:0,...p.header});return(0,t.jsx)(o.chakra.header,{ref:n,className:m,id:c,...d,__css:h})});l.displayName="ModalHeader",e.s(["ModalHeader",()=>l])},43704,e=>{"use strict";var t=e.i(5117),i=e.i(82525),r=e.i(4911),a=e.i(22277),s=e.i(53528),n=e.i(23728),o=e.i(91469),l=e.i(7016);let[d,c]=(0,r.createContext)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),u=(0,n.forwardRef)(function(e,r){let s=(0,o.useMultiStyleConfig)("List",e),{children:n,styleType:c="none",stylePosition:u,spacing:m,...p}=(0,i.omitThemingProps)(e),h=(0,a.getValidChildren)(n);return(0,t.jsx)(d,{value:s,children:(0,t.jsx)(l.chakra.ul,{ref:r,listStyleType:c,listStylePosition:u,role:"list",__css:{...s.container,...m?{"& > *:not(style) ~ *:not(style)":{mt:m}}:{}},...p,children:h})})});u.displayName="List";let m=(0,n.forwardRef)((e,i)=>{let{as:r,...a}=e;return(0,t.jsx)(u,{ref:i,as:"ol",styleType:"decimal",marginStart:"1em",...a})});m.displayName="OrderedList";let p=(0,n.forwardRef)(function(e,i){let{as:r,...a}=e;return(0,t.jsx)(u,{ref:i,as:"ul",styleType:"initial",marginStart:"1em",...a})});p.displayName="UnorderedList";let h=(0,n.forwardRef)(function(e,i){let r=c();return(0,t.jsx)(l.chakra.li,{ref:i,...e,__css:r.item})});h.displayName="ListItem";let f=(0,n.forwardRef)(function(e,i){let r=c();return(0,t.jsx)(s.Icon,{ref:i,role:"presentation",...e,__css:r.icon})});f.displayName="ListIcon",e.s(["List",()=>u,"ListIcon",()=>f,"ListItem",()=>h,"OrderedList",()=>m,"UnorderedList",()=>p,"useListStyles",()=>c])},5546,28858,95381,68461,76236,e=>{"use strict";var t=e.i(5117),i=e.i(82525),r=e.i(22277),a=e.i(71942),s=e.i(24061);let[n,o]=(0,e.i(4911).createContext)({name:"BreadcrumbStylesContext",errorMessage:"useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Breadcrumb />\" "});e.s(["BreadcrumbStylesProvider",()=>n,"useBreadcrumbStyles",()=>o],28858);var l=e.i(23728),d=e.i(91469),c=e.i(7016);let u=(0,l.forwardRef)(function(e,o){let l=(0,d.useMultiStyleConfig)("Breadcrumb",e),{children:u,spacing:m="0.5rem",separator:p="/",className:h,listProps:f,...x}=(0,i.omitThemingProps)(e),g=(0,r.getValidChildren)(u),b=g.length,w=g.map((e,t)=>(0,s.cloneElement)(e,{separator:p,spacing:m,isLastChild:b===t+1})),y=(0,a.cx)("chakra-breadcrumb",h);return(0,t.jsx)(c.chakra.nav,{ref:o,"aria-label":"breadcrumb",className:y,__css:l.container,...x,children:(0,t.jsx)(n,{value:l,children:(0,t.jsx)(c.chakra.ol,{className:"chakra-breadcrumb__list",...f,__css:{display:"flex",alignItems:"center",...l.list},children:w})})})});u.displayName="Breadcrumb",e.s(["Breadcrumb",()=>u],5546);var m=e.i(1898);let p=(0,l.forwardRef)(function(e,i){let{isCurrentPage:r,as:s,className:n,href:l,...d}=e,u=o(),m={ref:i,as:s,className:(0,a.cx)("chakra-breadcrumb__link",n),...d};return r?(0,t.jsx)(c.chakra.span,{"aria-current":"page",__css:u.link,...m}):(0,t.jsx)(c.chakra.a,{__css:u.link,href:l,...m})});p.displayName="BreadcrumbLink",e.s(["BreadcrumbLink",()=>p],95381);let h=(0,l.forwardRef)(function(e,i){let{spacing:r,...a}=e,s=o(),n=(0,m.defineStyle)({mx:r,...s.separator});return(0,t.jsx)(c.chakra.span,{ref:i,role:"presentation",...a,__css:n})});h.displayName="BreadcrumbSeparator",e.s(["BreadcrumbSeparator",()=>h],68461);let f=(0,l.forwardRef)(function(e,i){let{isCurrentPage:n,separator:l,isLastChild:d,spacing:u,children:f,className:x,...g}=e,b=(0,r.getValidChildren)(f).map(e=>e.type===p?(0,s.cloneElement)(e,{isCurrentPage:n}):e.type===h?(0,s.cloneElement)(e,{spacing:u,children:e.props.children||l}):e),w=o(),y=(0,m.defineStyle)({display:"inline-flex",alignItems:"center",...w.item}),j=(0,a.cx)("chakra-breadcrumb__list-item",x);return(0,t.jsxs)(c.chakra.li,{ref:i,className:j,...g,__css:y,children:[b,!d&&(0,t.jsx)(h,{spacing:u,children:l})]})});f.displayName="BreadcrumbItem",e.s(["BreadcrumbItem",()=>f],76236)},8709,e=>{e.v({"curator-widget":"index-module__WYRupa__curator-widget"})},68802,e=>{"use strict";var t=e.i(5117),i=e.i(27414),r=e.i(76524),a=e.i(88085),s=e.i(8709);e.s(["CuratorWidget",0,({feedId:e,elementId:n,heading:o})=>(0,t.jsxs)(r.Box,{className:s.default["curator-widget"],py:{base:"2.5rem",md:"5rem"},px:{base:"2rem"},maxW:"9xl",mx:"auto",children:[o&&(0,t.jsx)(i.Heading,{as:"h2",size:"lg",textAlign:"center",textTransform:"uppercase",mb:4,children:o}),(0,t.jsx)("div",{"data-crt-feed-id":e,id:n}),(0,t.jsx)(a.default,{src:`https://cdn.curator.io/published/${e}.js`,id:`curator-${e}`,strategy:"lazyOnload"})]})])},59122,e=>{"use strict";var t=e.i(5117),i=e.i(54371),r=e.i(40499),a=e.i(23728),s=e.i(7016);function n(e){return(0,r.mapResponsive)(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}let o=(0,a.forwardRef)(function(e,r){let{area:a,colSpan:o,colStart:l,colEnd:d,rowEnd:c,rowSpan:u,rowStart:m,...p}=e,h=(0,i.compact)({gridArea:a,gridColumn:n(o),gridRow:n(u),gridColumnStart:l,gridColumnEnd:d,gridRowStart:m,gridRowEnd:c});return(0,t.jsx)(s.chakra.div,{ref:r,__css:h,...p})});o.displayName="GridItem",e.s(["GridItem",()=>o])},33795,e=>{"use strict";var t=e.i(5117);let i=(0,e.i(23728).forwardRef)(function(e,i){let{htmlWidth:r,htmlHeight:a,alt:s,...n}=e;return(0,t.jsx)("img",{width:r,height:a,ref:i,alt:s,...n})});i.displayName="NativeImage",e.s(["NativeImage",()=>i])},44669,e=>{"use strict";var t=e.i(28294),i=e.i(24061);function r(e){let{loading:r,src:a,srcSet:s,onLoad:n,onError:o,crossOrigin:l,sizes:d,ignoreFallback:c}=e,[u,m]=(0,i.useState)("pending");(0,i.useEffect)(()=>{m(a?"loading":"pending")},[a]);let p=(0,i.useRef)(null),h=(0,i.useCallback)(()=>{if(!a)return;f();let e=new Image;e.src=a,l&&(e.crossOrigin=l),s&&(e.srcset=s),d&&(e.sizes=d),r&&(e.loading=r),e.onload=e=>{f(),m("loaded"),n?.(e)},e.onerror=e=>{f(),m("failed"),o?.(e)},p.current=e},[a,l,s,d,n,o,r]),f=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,t.useSafeLayoutEffect)(()=>{if(!c)return"loading"===u&&h(),()=>{f()}},[u,h,c]),c?"loaded":u}let a=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t;e.s(["shouldShowFallbackImage",()=>a,"useImage",()=>r])},18777,e=>{"use strict";var t=e.i(5117),i=e.i(58210),r=e.i(33795),a=e.i(44669),s=e.i(23728),n=e.i(7016);let o=(0,s.forwardRef)(function(e,s){let{fallbackSrc:o,fallback:l,src:d,srcSet:c,align:u,fit:m,loading:p,ignoreFallback:h,crossOrigin:f,fallbackStrategy:x="beforeLoadOrError",referrerPolicy:g,...b}=e,w=void 0!==o||void 0!==l,y=null!=p||h||!w,j=(0,a.useImage)({...e,crossOrigin:f,ignoreFallback:y}),k=(0,a.shouldShowFallbackImage)(j,x),S={ref:s,objectFit:m,objectPosition:u,...y?b:(0,i.omit)(b,["onError","onLoad"])};return k?l||(0,t.jsx)(n.chakra.img,{as:r.NativeImage,className:"chakra-image__placeholder",src:o,...S}):(0,t.jsx)(n.chakra.img,{as:r.NativeImage,src:d,srcSet:c,crossOrigin:f,loading:p,referrerPolicy:g,className:"chakra-image",...S})});o.displayName="Image",e.s(["Image",()=>o])},77213,e=>{"use strict";var t=e.i(5117),i=e.i(82525),r=e.i(71942),a=e.i(23728),s=e.i(91469),n=e.i(7016);let o=(0,a.forwardRef)(function(e,a){let{className:o,centerContent:l,...d}=(0,i.omitThemingProps)(e),c=(0,s.useStyleConfig)("Container",e);return(0,t.jsx)(n.chakra.div,{ref:a,className:(0,r.cx)("chakra-container",o),...d,__css:{...c,...l&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});o.displayName="Container",e.s(["Container",()=>o])},66232,e=>{"use strict";var t=e.i(5117),i=e.i(24061),r=e.i(25030);e.i(29881);var a=e.i(18728),s=e.i(6594),n=e.i(44407),o=e.i(51005),l=e.i(24166),d=e.i(57426),c=e.i(86367),u=e.i(88626),m=e.i(76663),p=e.i(37681),h=e.i(5018),f=e.i(98427),x=e.i(25875),g=e.i(51667),b=e.i(42937),w=e.i(31424),y=e.i(30573),j=e.i(29696),k=e.i(54140),S=e.i(82360),v=e.i(26608),_=e.i(29062),T=e.i(12488);e.s(["A11y",()=>p.default,"Autoplay",()=>x.default,"Controller",()=>m.default,"EffectCards",()=>T.default,"EffectCoverflow",()=>v.default,"EffectCreative",()=>_.default,"EffectCube",()=>k.default,"EffectFade",()=>j.default,"EffectFlip",()=>S.default,"FreeMode",()=>b.default,"Grid",()=>w.default,"HashNavigation",()=>f.default,"History",()=>h.default,"Keyboard",()=>s.default,"Manipulation",()=>y.default,"Mousewheel",()=>n.default,"Navigation",()=>o.default,"Pagination",()=>l.default,"Parallax",()=>c.default,"Scrollbar",()=>d.default,"Thumbs",()=>g.default,"Virtual",()=>a.default,"Zoom",()=>u.default],58082);var I=e.i(58082);let E=(0,e.i(7016).chakra)(({children:e,classNames:a=[],modulesMap:s=[],containerStart:n=null,containerEnd:o=null,wrapperStart:l=null,wrapperEnd:d=null,...c})=>{let u=(Array.isArray(s)?s:[]).map(e=>I[e]||!1).filter(Boolean);return(0,t.jsxs)(r.Swiper,{className:["component",...a].filter(Boolean).join(" "),modules:u,virtual:!1,...c,children:[n&&(0,t.jsx)("span",{slot:"container-start",children:n}),l&&(0,t.jsx)("span",{slot:"wrapper-start",children:l}),i.default.Children.map(e,(e,i)=>(0,t.jsx)(r.SwiperSlide,{children:e},i)),d&&(0,t.jsx)("span",{slot:"wrapper-end",children:d}),o&&(0,t.jsx)("span",{slot:"container-end",children:o})]})});E.displayName="Swiper",e.s(["default",0,E],66232)},97432,e=>{"use strict";var t=e.i(5117),i=e.i(82525),r=e.i(71942),a=e.i(23728),s=e.i(91469),n=e.i(7016);let o=(0,a.forwardRef)(function(e,a){let o=(0,s.useStyleConfig)("Link",e),{className:l,isExternal:d,...c}=(0,i.omitThemingProps)(e);return(0,t.jsx)(n.chakra.a,{target:d?"_blank":void 0,rel:d?"noopener":void 0,ref:a,className:(0,r.cx)("chakra-link",l),...c,__css:o})});o.displayName="Link",e.s(["Link",()=>o])},68343,66209,76438,70587,e=>{"use strict";var t=e.i(5117),i=e.i(82525),r=e.i(71942),a=e.i(24061),s=e.i(4911),n=e.i(64948);let[o,l]=(0,s.createContext)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[d,c]=(0,s.createContext)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[u,m,p,h]=(0,n.createDescendantContext)();e.s(["AccordionDescendantsProvider",()=>u,"AccordionItemProvider",()=>d,"AccordionStylesProvider",()=>o,"useAccordionDescendant",()=>h,"useAccordionDescendants",()=>p,"useAccordionItemContext",()=>c,"useAccordionStyles",()=>l],66209);var f=e.i(73647),x=e.i(31017),g=e.i(95233);e.i(31099);let b=e=>{let{condition:t,message:i}=e};function w(e){var t,i;let r,{onChange:s,defaultIndex:n,index:o,allowMultiple:l,allowToggle:d,...c}=e;b({condition:!!(null!=(r=(t=e).index||t.defaultIndex)&&!Array.isArray(r)&&t.allowMultiple),message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof r},`}),b({condition:!!((i=e).allowMultiple&&i.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"});let u=p(),[m,h]=(0,a.useState)(-1);(0,a.useEffect)(()=>()=>{h(-1)},[]);let[x,g]=(0,f.useControllableState)({value:o,defaultValue:()=>l?n??[]:n??-1,onChange:s});return{index:x,setIndex:g,htmlProps:c,getAccordionItemProps:e=>{let t=!1;return null!==e&&(t=Array.isArray(x)?x.includes(e):x===e),{isOpen:t,onChange:t=>{null!==e&&(l&&Array.isArray(x)?g(t?x.concat(e):x.filter(t=>t!==e)):t?g(e):d&&g(-1))}}},focusedIndex:m,setFocusedIndex:h,descendants:u}}e.s(["warn",()=>b],76438);let[y,j]=(0,s.createContext)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function k(e){var t,i;let{isDisabled:r,isFocusable:s,id:n,...o}=e,{getAccordionItemProps:l,setFocusedIndex:d}=j(),c=(0,a.useRef)(null),u=(0,a.useId)(),m=n??u,p=`accordion-button-${m}`,f=`accordion-panel-${m}`;b({condition:!!((t=e).isFocusable&&!t.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `});let{register:w,index:y,descendants:k}=h({disabled:r&&!s}),{isOpen:S,onChange:v}=l(-1===y?null:y);b({condition:(i={isOpen:S,isDisabled:r}).isOpen&&!!i.isDisabled,message:"Cannot open a disabled accordion item"});let _=(0,a.useCallback)(()=>{v?.(!S),d(y)},[y,d,S,v]),T=(0,a.useCallback)(e=>{let t={ArrowDown:()=>{let e=k.nextEnabled(y);e?.node.focus()},ArrowUp:()=>{let e=k.prevEnabled(y);e?.node.focus()},Home:()=>{let e=k.firstEnabled();e?.node.focus()},End:()=>{let e=k.lastEnabled();e?.node.focus()}}[e.key];t&&(e.preventDefault(),t(e))},[k,y]),I=(0,a.useCallback)(()=>{d(y)},[d,y]),E=(0,a.useCallback)(function(e={},t=null){return{...e,type:"button",ref:(0,x.mergeRefs)(w,c,t),id:p,disabled:!!r,"aria-expanded":!!S,"aria-controls":f,onClick:(0,g.callAllHandlers)(e.onClick,_),onFocus:(0,g.callAllHandlers)(e.onFocus,I),onKeyDown:(0,g.callAllHandlers)(e.onKeyDown,T)}},[p,r,S,_,I,T,f,w]),N=(0,a.useCallback)(function(e={},t=null){return{...e,ref:t,role:"region",id:f,"aria-labelledby":p,hidden:!S}},[p,S,f]);return{isOpen:S,isDisabled:r,isFocusable:s,onOpen:()=>{v?.(!0)},onClose:()=>{v?.(!1)},getButtonProps:E,getPanelProps:N,htmlProps:o}}e.s(["AccordionProvider",()=>y,"useAccordion",()=>w,"useAccordionContext",()=>j,"useAccordionItem",()=>k],70587);var S=e.i(23728),v=e.i(91469),_=e.i(7016);let T=(0,S.forwardRef)(function({children:e,reduceMotion:s,...n},l){let d=(0,v.useMultiStyleConfig)("Accordion",n),{htmlProps:c,descendants:m,...p}=w((0,i.omitThemingProps)(n)),h=(0,a.useMemo)(()=>({...p,reduceMotion:!!s}),[p,s]);return(0,t.jsx)(u,{value:m,children:(0,t.jsx)(y,{value:h,children:(0,t.jsx)(o,{value:d,children:(0,t.jsx)(_.chakra.div,{ref:l,...c,className:(0,r.cx)("chakra-accordion",n.className),__css:d.root,children:e})})})})});T.displayName="Accordion",e.s(["Accordion",()=>T],68343)},99387,e=>{"use strict";var t=e.i(5117),i=e.i(71942),r=e.i(66209),a=e.i(23728),s=e.i(7016);let n=(0,a.forwardRef)(function(e,a){let{getButtonProps:n}=(0,r.useAccordionItemContext)(),o=n(e,a),l={display:"flex",alignItems:"center",width:"100%",outline:0,...(0,r.useAccordionStyles)().button};return(0,t.jsx)(s.chakra.button,{...o,className:(0,i.cx)("chakra-accordion__button",e.className),__css:l})});n.displayName="AccordionButton",e.s(["AccordionButton",()=>n])},15052,e=>{"use strict";var t=e.i(5117),i=e.i(71942),r=e.i(66209),a=e.i(70587),s=e.i(53528);function n(e){let{isOpen:n,isDisabled:o}=(0,r.useAccordionItemContext)(),{reduceMotion:l}=(0,a.useAccordionContext)(),d=(0,i.cx)("chakra-accordion__icon",e.className),c={opacity:o?.4:1,transform:n?"rotate(-180deg)":void 0,transition:l?void 0:"transform 0.2s",transformOrigin:"center",...(0,r.useAccordionStyles)().icon};return(0,t.jsx)(s.Icon,{viewBox:"0 0 24 24","aria-hidden":!0,className:d,__css:c,...e,children:(0,t.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}n.displayName="AccordionIcon",e.s(["AccordionIcon",()=>n])},24823,e=>{"use strict";var t=e.i(5117),i=e.i(1898),r=e.i(71942),a=e.i(24061),s=e.i(66209),n=e.i(70587),o=e.i(23728),l=e.i(7016);let d=(0,o.forwardRef)(function(e,o){let{children:d,className:c}=e,{htmlProps:u,...m}=(0,n.useAccordionItem)(e),p=(0,s.useAccordionStyles)(),h=(0,i.defineStyle)({...p.container,overflowAnchor:"none"}),f=(0,a.useMemo)(()=>m,[m]);return(0,t.jsx)(s.AccordionItemProvider,{value:f,children:(0,t.jsx)(l.chakra.div,{ref:o,...u,className:(0,r.cx)("chakra-accordion__item",c),__css:h,children:"function"==typeof d?d({isExpanded:!!m.isOpen,isDisabled:!!m.isDisabled}):d})})});d.displayName="AccordionItem",e.s(["AccordionItem",()=>d])},55085,22779,e=>{"use strict";var t=e.i(5117),i=e.i(71942),r=e.i(66209),a=e.i(70587),s=e.i(76438),n=e.i(22176),o=e.i(84629),l=e.i(24061),d=e.i(30912);let c={exit:{height:{duration:.2,ease:d.TRANSITION_EASINGS.ease},opacity:{duration:.3,ease:d.TRANSITION_EASINGS.ease}},enter:{height:{duration:.3,ease:d.TRANSITION_EASINGS.ease},opacity:{duration:.4,ease:d.TRANSITION_EASINGS.ease}}},u={exit:({animateOpacity:e,startingHeight:t,transition:i,transitionEnd:r,delay:a})=>({...e&&{opacity:+!!(null!=t&&parseInt(t.toString(),10)>0)},height:t,transitionEnd:r?.exit,transition:i?.exit??d.withDelay.exit(c.exit,a)}),enter:({animateOpacity:e,endingHeight:t,transition:i,transitionEnd:r,delay:a})=>({...e&&{opacity:1},height:t,transitionEnd:r?.enter,transition:i?.enter??d.withDelay.enter(c.enter,a)})},m=(0,l.forwardRef)((e,r)=>{let{in:a,unmountOnExit:d,animateOpacity:c=!0,startingHeight:m=0,endingHeight:p="auto",style:h,className:f,transition:x,transitionEnd:g,animatePresenceProps:b,...w}=e,[y,j]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=setTimeout(()=>{j(!0)});return()=>clearTimeout(e)},[]),(0,s.warn)({condition:Number(m)>0&&!!d,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let k=parseFloat(m.toString())>0,S={startingHeight:m,endingHeight:p,animateOpacity:c,transition:y?x:{enter:{duration:0}},transitionEnd:{enter:g?.enter,exit:d?g?.exit:{...g?.exit,display:k?"block":"none"}}},v=!d||a,_=a||d?"enter":"exit";return(0,t.jsx)(n.AnimatePresence,{...b,initial:!1,custom:S,children:v&&(0,t.jsx)(o.motion.div,{ref:r,...w,className:(0,i.cx)("chakra-collapse",f),style:{overflow:"hidden",display:"block",...h},custom:S,variants:u,initial:!!d&&"exit",animate:_,exit:"exit"})})});m.displayName="Collapse",e.s(["Collapse",()=>m],22779);var p=e.i(23728),h=e.i(7016);let f=(0,p.forwardRef)(function(e,s){let{className:n,motionProps:o,...l}=e,{reduceMotion:d}=(0,a.useAccordionContext)(),{getPanelProps:c,isOpen:u}=(0,r.useAccordionItemContext)(),p=c(l,s),f=(0,i.cx)("chakra-accordion__panel",n),x=(0,r.useAccordionStyles)();d||delete p.hidden;let g=(0,t.jsx)(h.chakra.div,{...p,__css:x.panel,className:f});return d?g:(0,t.jsx)(m,{in:u,...o,children:g})});f.displayName="AccordionPanel",e.s(["AccordionPanel",()=>f],55085)},39169,e=>{"use strict";var t=e.i(5117),i=e.i(23743),r=e.i(88085);function a(e){let{pageTitle:a,category:s,scripts:n}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:a}),(0,t.jsx)("meta",{property:a,content:s},"title"),(0,t.jsx)("meta",{charSet:"utf-8"},"charset"),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport"),n&&n.length&&n.map((e,i)=>(0,t.jsx)(r.default,{src:e},"head-script-"+i))]})})}e.s(["default",()=>a])},34702,e=>{"use strict";e.s(["CURATOR_CCD_FEED",0,{feedId:"75aa1a18-0bd3-41a0-ac50-2e3707c4aff7",elementId:"curator-feed-clutch-city-dancers-layout"},"CURATOR_DEFAULT_FEED",0,{feedId:"afccc624-0120-4bec-af73-9aac88e1a06c",elementId:"curator-feed-default-feed-layout"},"CURATOR_ENTERTAINMENT_FEED",0,{feedId:"fbda3e73-247c-444a-ae83-4689fa83139e",elementId:"curator-feed-rockets-entertainment-layout"},"ROCKETS_DEFAULT_FEED",0,{feedId:"afccc624-0120-4bec-af73-9aac88e1a06c",elementId:"curator-feed-default-feed-layout"},"ROCKETS_ENTERTAINMENT_FACEBOOK_URL",0,"https://www.facebook.com/RocketsEntertainment","ROCKETS_ENTERTAINMENT_INSTAGRAM_URL",0,"https://instagram.com/rocketsentertainment"])},20231,e=>{e.v({"newsblock-swiper":"NewsblockSwiper-module__xmstVG__newsblock-swiper"})},72545,e=>{"use strict";var t=e.i(5117),i=e.i(24061),r=e.i(39169),a=e.i(27657);e.i(93797);var s=e.i(23004),n=e.i(90239),o=e.i(8505),l=e.i(50061),d=e.i(63951),c=e.i(93073),u=e.i(25825),m=e.i(80404),p=e.i(95004),h=e.i(68802),f=e.i(58879),x=e.i(24708);let g=x.default.div.withConfig({displayName:"Home.styles__OverflowHidden",componentId:"sc-7c21e385-0"})`
  overflow: hidden;
`,b=x.default.div.withConfig({displayName:"Home.styles__StyledHome",componentId:"sc-7c21e385-1"})`
  /* 
  SPACING SYSTEM (px)
  2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

  FONT SIZE SYSTEM (px)
  10 / 12 / 14 / 16 / 18 / 20 / 24 / 36 / 44 / 52 / 62 / 74 / 86 / 98
  */
  --rocketsTransition: all 0.1s ease-in-out;
  --rocketsGlassBorder: 1px solid rgba(255, 255, 255, 0.1);
  --rocketsTextColor: #ffffff;
  background: #222426;
  background: radial-gradient(
    ellipse farthest-corner at top left,
    #88000c 0%,
    #0f0f0d 15%
  );
  /* background-blend-mode: overlay; */
  color: var(--rocketsTextColor);
  min-height: 100vh;
  min-width: 0;
  .inner {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 12px;
    max-width: 1450px;
    transition: var(--rocketsTransition);
  }
  .link,
  .ticket-link,
  .button-wrapper a {
    text-decoration: none;
  }
  .header-link {
    font-weight: bold;
    transition: var(--rocketsTransition);
    :hover {
      color: #dd3b45;
    }
  }
  .sec-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    p {
      display: flex;
      gap: 4px;
    }
  }
  .timer-button {
    p {
      font-size: 10px;
      font-weight: 400;
      width: 120px;
    }
    svg {
      width: 150px;
    }
  }
  /* DateCountdownTimer */
  .countdown-timer-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-transform: lowercase;
    gap: 12px;
    padding-inline: 12px;
    .countdown-timer {
      justify-content: center;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 60px;
      }
    }
    .desc {
      text-align: center;
      font-weight: bold;
    }
  }
  .retail-wrapper > .link,
  .cta-btn {
    display: flex;
    padding: 8px;
    width: 100%;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 8px;

    background: #dd3b45;
    color: #ffffff;
    text-align: center;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #dd3b4599;
    }
  }

  .west-table-container {
    .west-table-body {
      tr td {
        border-bottom: solid 1px #ffffff30;
      }
      tr > td .rank {
        display: inline-block;
        width: 22px;
      }
      tr:not(.highlight) {
        color: #c1c1c1;
      }
      tr > th:first-child,
      tr > td:first-child {
        position: sticky;
        left: 0;
      }
      tr > td:first-child {
        background: #222426;
      }
      tr:nth-of-type(6) td {
        border-bottom: dashed 1px #ffffff;
      }
      tr:nth-of-type(10) td {
        border-bottom: solid 2px #ffffff;
      }
      .highlight,
      .highlight > td:first-child {
        font-weight: 600;
        background: #4d0d11;
      }
    }
  }
  .react-datepicker__current-month {
    font-size: 20px !important;
  }
  .react-datepicker-wrapper {
    width: 100%;
    .react-date-picker {
      width: 100%;
      border: var(--rocketsGlassBorder);
      border-radius: 5px;
      background-color: transparent;
      padding: 8px;
    }
  }

  /* ChakraUiRetailCard */
  .overflow {
    overflow: visible !important;
  }
  .rockets-swiper {
    display: flex;
    align-items: stretch;
    max-width: 1600px;
  }

  .retail-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 250px;
    min-height: 380px;
    padding: 22px 15px;
    row-gap: 12px;
    text-align: center;
    .thumbnail {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 250px;
      min-height: 150px;
      position: relative;
      img {
        margin: 0 auto;
        width: auto;
        height: 120px;
      }
    }
    .title {
      text-transform: none;
      font-weight: 600;
      color: #ffffff;
      font-size: 17px;
      margin: auto 0;
    }
    .price {
      font-weight: 600;
    }
  }

  .crt-load-more {
    background: rgba(255, 255, 255, 0.2) !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px) !important;
    -webkit-backdrop-filter: blur(2px) !important;
    border: var(--rocketsGlassBorder) !important;
    border-radius: 15px;
    color: #ffffff !important;
    font-weight: 700;
    padding: 16px 32px;
    text-transform: uppercase;
    transition: var(--rocketsTransition);
    :hover {
      background: rgba(255, 255, 255, 0.25) !important;
    }
  }
  /* MEDIA QUERIES */
  @media screen and (max-width: 1440px) {
    .west-table-container {
      max-height: 425px;
    }
  }
  @media screen and (max-width: 1140px) {
    .west-table-container {
      max-height: 375px;
    }
  }
  @media screen and (max-width: 999px) {
    .west-table-container {
      max-height: 400px;
    }
  }
  @media screen and (max-width: 770px) {
    .mediablock .link {
      width: 100% !important;
    }
  }
  @media screen and (max-width: 670px) {
    .rockets-news {
      .thumbnail-info {
        padding: 4px;
        width: 80%;
        .title {
          font-size: 24px;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .button-wrapper a {
      font-size: 11px;
    }
  }
`;var w=e.i(31854),y=e.i(76524),j=e.i(27414),k=e.i(98579),S=e.i(20462),v=e.i(72541),_=e.i(59868),T=e.i(86803),I=e.i(91650),E=e.i(11875),N=e.i(77499),C=e.i(68043),A=e.i(32569),R=e.i(23013),L=e.i(48542),O=e.i(63593),P=e.i(52937),B=e.i(29588),U=e.i(73527),D=e.i(67154),F=e.i(43804),M=e.i(603),H=e.i(51552),G=e.i(99045),V=e.i(43557),z=e.i(67020),$=e.i(7268),K=e.i(25030);e.i(29881);var Y=e.i(94864),W=e.i(42937),W=W,q=e.i(60186),X=e.i(89265),Z=e.i(23743),J=e.i(66232),Q=e.i(20231),ee=e.i(40689);let et=({items:e,limit:r,onNewsblockClick:a})=>{let[s,n]=(0,i.useState)(null),o=r?e.slice(0,r):e;return((0,i.useEffect)(()=>{q.default.send({hitType:"pageview",page:window.location.pathname})},[]),(0,i.useEffect)(()=>{s&&s.update()},[s]),e)?(0,t.jsx)(J.default,{className:Q.default["newsblock-swiper"],speed:300,loop:!0,autoplay:{delay:3500,disableOnInteraction:!0},navigation:!0,pagination:{clickable:!0,dynamicBullets:!0},breakpoints:{320:{slidesPerView:1.15,spaceBetween:16},768:{slidesPerView:1}},modulesMap:["Navigation","Pagination","Autoplay","EffectFade"],onSwiper:n,children:o.map(e=>(0,t.jsx)(ee.Newsblock,{item:e,onNewsblockClick:a},`news-block-item-${e.id}`))}):null};var ei=e.i(70407),er=e.i(87992),ea=e.i(44796);let es=[{id:"default-1",title:"Download The Rockets Mobile App",thumbnail:{metadata:{tags:[],concepts:[]},sys:{space:{sys:{type:"Link",linkType:"Space",id:"hv4ck6llk3k8"}},id:"7m03xv0aHUIDrswLKLllFg",type:"Asset",createdAt:"2025-10-07T20:18:04.084Z",updatedAt:"2025-10-07T20:18:04.084Z",environment:{sys:{id:"master",type:"Link",linkType:"Environment"}},publishedVersion:3,revision:1,locale:"en-US"},fields:{title:"Download The Rockets Mobile App",description:"",file:{url:`${X.STATIC_ASSETS_URL}/shared/mobile-app-cta-760x442.webp`,details:{size:335920,image:{width:760,height:442}},fileName:"mobile-app-cta-760x442.webp",contentType:"image/webp"}}},url:"https://nba.com/rockets/mobile-app",startDate:"2025-01-01T00:00-05:00",endDate:""},{id:"default-2",title:"Sign Up for Rockets Insider",thumbnail:{metadata:{tags:[],concepts:[]},sys:{space:{sys:{type:"Link",linkType:"Space",id:"hv4ck6llk3k8"}},id:"7m03xv0aHUIDrswLKLllFg",type:"Asset",createdAt:"2025-10-07T20:18:04.084Z",updatedAt:"2025-10-07T20:18:04.084Z",environment:{sys:{id:"master",type:"Link",linkType:"Environment"}},publishedVersion:3,revision:1,locale:"en-US"},fields:{title:"Sign Up for Rockets Insider",description:"",file:{url:`${X.STATIC_ASSETS_URL}/shared/rockets-insider-760x442.webp`,details:{size:335920,image:{width:760,height:442}},fileName:"rockets-insider-760x442.webp",contentType:"image/webp"}}},url:`${X.ROCKETS_INSIDER_FORM_URL}`,startDate:"2025-01-01T00:00-05:00",endDate:""}],en=({items:e})=>{let i=e?e?.slice(0,5):[],r=i?.length>0?i[0]:null,a=i?.length>1?i.slice(1):[es[0]],s=2;return(a?.length===1&&(s=1),a?.length===2&&a.push(...es),a?.length===3&&a.push(es[0]),e&&r&&a&&0!==a.length)?(0,t.jsxs)(w.Flex,{direction:"column",gap:4,py:{base:6,md:8},children:[(0,t.jsxs)(w.Flex,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(j.Heading,{as:"h2",fontSize:{base:"2xl",md:"4xl"},children:"Promotions"}),(0,t.jsxs)(ei.default,{href:"https://www.toyotacenter.com/events/rockets-game-promos",target:"_blank",rel:"noopener noreferrer",textTransform:"uppercase",fontWeight:"semibold",fontSize:"sm",display:"flex",alignItems:"center",gap:2,justifyContent:"flex-end",mt:{base:0,md:2},children:["View All",(0,t.jsx)($.BsArrowRight,{})]})]}),(0,t.jsx)(w.Flex,{direction:"column",children:(0,t.jsxs)(er.SimpleGrid,{columns:{base:1,md:2},py:{base:2,md:0},children:[(0,t.jsx)(ei.default,{href:r.url,target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(ea.default,{src:r.thumbnail?.fields?.file?.url,alt:r.title,width:r.thumbnail?.fields?.file?.details?.image?.width,height:r.thumbnail?.fields?.file?.details?.image?.height,objectFit:"cover",objectPosition:"center",w:"100%",h:"100%"})},r.id),(0,t.jsx)(er.SimpleGrid,{columns:s,children:a.map(e=>(0,t.jsx)(ei.default,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(ea.default,{src:e.thumbnail?.fields?.file?.url,alt:e.title,width:e.thumbnail?.fields?.file?.details?.image?.width,height:e.thumbnail?.fields?.file?.details?.image?.height,objectFit:"cover",objectPosition:"center",w:"100%",h:"100%"})},e.id))})]})})]}):null};var eo=e.i(77836),el=e.i(16007),ed=e.i(34702);let ec=()=>{let[e,x]=(0,i.useState)(!1),{isOpen:J,onClose:Q,onOpen:ee}=z.useDisclosure(),[er,es]=(0,i.useState)(0),[eo,el]=(0,i.useState)(!1),[ec,eu]=(0,i.useState)("new-arrivals"),[em,ep]=(0,i.useState)(!1),eh=(0,i.useRef)(null);return((0,i.useEffect)(()=>{setTimeout(()=>{(async()=>{try{let e=await fetch("https://d26dmzpiksq0q.cloudfront.net/static/hou-homepage-v2.json"),t=await e.json();x(t||!1)}catch(e){console.log("Error fetching RocketsDotCom Data",e)}})()},500)},[]),(0,i.useEffect)(()=>{eo||el(!0)},[er,eo]),(0,i.useEffect)(()=>{if(eh?.current?.innerHTML){let e=new IntersectionObserver(([e])=>{ep(e.isIntersecting)},{root:null,rootMargin:"0px",threshold:.5});return e.observe(eh.current),()=>{e.disconnect()}}},[eh.current]),e)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Z.default,{children:((e,t,i)=>{try{return((e,t,i)=>{if(!((e,t,i)=>{try{let r=document.getElementById(t)||document.createElement("script");return r.id=t,r.nonce=i,r.innerText=e,r.crossOrigin="anonymous",document.head.appendChild(r),!0}catch(e){return!1}})(`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${e},hjsv:${t},hjdebug:${(null==i?void 0:i.debug)||!1}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,"hotjar-init-script",null==i?void 0:i.nonce)||!("u">typeof window)||!window.hj)throw Error("Failed to initialize Hotjar tracking script.")})(e,t,void 0),!0}catch(e){return console.error("Error:",e),!1}})(X.HOTJAR_SITE_ID,X.HOTJAR_VERSION)}),(0,t.jsx)(r.default,{pageTitle:"Home | Houston Rockets"}),(0,t.jsx)(g,{children:(0,t.jsxs)(b,{children:[(0,t.jsx)(n.SwiperSchedule,{schedule:e?.schedule,state:e?.state}),e.opsConfig&&!0===e.opsConfig.showStream&&(0,t.jsxs)("div",{className:"youtube-live",style:{maxWidth:"1160px",margin:"24px auto"},children:[e.opsConfig.streamYTKey&&!1!==e.opsConfig.streamYTKey&&(0,t.jsx)(o.YoutubeEmbed,{id:e.opsConfig.streamYTKey}),!1===e.opsConfig.streamYTKey&&!1!==e.opsConfig.streamPlayback&&(0,t.jsx)(l.IVSStreamBasic,{platform:!1,playbackURL:e.opsConfig.streamPlayback})]}),(0,t.jsxs)("div",{className:"inner",children:[(0,t.jsx)(et,{items:e?.content?.newsblock,onNewsblockClick:e=>{q.default.event({label:`${e} Thumbnail Click`})}}),(0,t.jsx)("section",{className:"rockets-media",children:(0,t.jsxs)(w.Flex,{my:{base:8,md:16},direction:{base:"column",md:"row"},gap:"20px",children:[(0,t.jsxs)(y.Box,{maxW:{base:"100%",md:e?.standings?"70%":"100%"},children:[(0,t.jsxs)(w.Flex,{justifyContent:"space-between",alignItems:{base:"flex-end",md:"center"},direction:{base:"column",md:"row"},gap:{base:4,md:0},children:[(0,t.jsxs)(w.Flex,{alignItems:"center",justifyContent:{base:"space-between",md:"flex-start"},gap:4,grow:{base:0,md:1},w:{base:"100%",md:"auto"},children:[(0,t.jsx)(j.Heading,{as:"h2",fontSize:{base:"2xl",md:"4xl"},children:"Latest News"}),(0,t.jsxs)(ei.default,{display:"flex",alignItems:"center",gap:2,href:"https://htxrockets.com/redirect/to/id?id=276",target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(k.Text,{fontSize:{base:"sm",md:"md"},fontWeight:"semibold",children:"Presented by"}),(0,t.jsx)(ea.default,{src:"https://d26dmzpiksq0q.cloudfront.net/shared/toyota_horiz_red_v1.svg",alt:"Toyota",width:24,height:24,objectFit:"contain",objectPosition:"center",w:"auto",h:{base:"24px",md:"28px"}})]})]}),(0,t.jsxs)(ei.default,{href:"https://nba.com/rockets/news",target:"_blank",rel:"noopener noreferrer",textTransform:"uppercase",fontSize:"sm",fontWeight:"semibold",display:"flex",alignItems:"center",gap:2,children:["View All",(0,t.jsx)($.BsArrowRight,{})]})]}),(0,t.jsx)(K.Swiper,{ref:eh,className:"rockets-news",onSlideChange:e=>{let t=e.activeIndex;if(em&&eh.current){let e=eh.current.querySelectorAll(".rockets-news .swiper-slide")[t];if(e){let t="Slide "+e.getAttribute("data-title");q.default.event({category:"Carousel",action:"impression",label:t})}}},slidesPerView:1,spaceBetween:16,speed:300,navigation:!0,breakpoints:{320:{slidesPerView:1.2},768:{slidesPerView:2.5}},modules:[Y.Navigation],children:e?.content?.media?.slice(0,11).map((e,i)=>(0,t.jsx)(K.SwiperSlide,{"data-title":e?.title,children:(0,t.jsx)(d.MediaCard,{title:e?.title,date:e?.date,type:e?.type,thumbnail:e?.featuredImage&&e?.featuredImage.src?e?.featuredImage.src:e?.featuredImage,link:e?.permalink})},"media-slide-"+i))})]}),e?.standings&&(0,t.jsxs)(w.Flex,{className:"west-table-container-wrapper",direction:"column",mx:"auto",maxW:{base:"100%",md:"27%"},w:"100%",align:"center",children:[(0,t.jsx)("div",{className:"sec-header",children:(0,t.jsx)("h2",{children:"Standings"})}),(0,t.jsx)(S.TableContainer,{className:"west-table-container",bg:"radial-gradient(ellipse at top left, rgba(90, 90, 90, 0.55) 0, rgba(45, 45, 45, 0.6) 28%)",my:"1.25rem",w:"100%",border:"solid 1px rgba(255, 255, 255, 0.1)",borderRadius:"12px",p:2,overflowY:"auto",overflowX:"hidden",children:(0,t.jsxs)(v.Table,{size:"sm",overflowX:"hidden",children:[(0,t.jsx)(_.Thead,{children:(0,t.jsxs)(T.Tr,{children:[(0,t.jsx)(I.Th,{children:"Team"}),(0,t.jsx)(I.Th,{isNumeric:!0,children:"REC"}),(0,t.jsx)(I.Th,{isNumeric:!0,children:"GB"}),(0,t.jsx)(I.Th,{isNumeric:!0,children:"Last 10"})]})}),(0,t.jsx)(E.Tbody,{className:"west-table-body",children:e?.standings?.sta?.co?.filter(e=>"West"===e.val)[0]?.di?.reduce((e,t)=>(t.t&&(e=e.concat(t.t)),e),[]).sort((e,t)=>parseInt(e.crnk,10)-parseInt(t.crnk,10)).map((e,i)=>(0,t.jsxs)(T.Tr,{className:e?.tc.toLowerCase()==="houston"?"highlight":"",children:[(0,t.jsxs)(N.Td,{children:[(0,t.jsx)("span",{className:"rank",children:e.crnk}),e.tn]}),(0,t.jsxs)(N.Td,{isNumeric:!0,children:[e.w,"-",e.l]}),(0,t.jsx)(N.Td,{isNumeric:!0,children:e.gb}),(0,t.jsx)(N.Td,{isNumeric:!0,children:e.l10})]},`standings-row-${i}`))})]})})]})]})}),(0,t.jsx)(en,{items:e?.content?.promotionNewsblock}),(0,t.jsx)("div",{className:"google-ads",style:{padding:"16px 10%",width:"100%",margin:"0 auto",display:"flex",justifyContent:"center"},children:(0,t.jsx)(c.DFPAdUnit,{adUnitPath:"/2117/nba_rockets/homepage_middle",adSlotId:"ad-unit-homepage-middle-0",adSize:[[728,90],[320,50]]},"ad-unit-homepage-middle-0")}),(0,t.jsx)("section",{children:(0,t.jsx)(C.Stack,{children:(0,t.jsxs)(A.Alert,{status:"info",style:{color:"#999999",paddingTop:"0",paddingBottom:"0"},bg:"transparent",fontWeight:"400",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",textAlign:"center",children:[(0,t.jsxs)(y.Box,{display:"flex",alignItems:"start",justifyContent:"center",align:"center",children:[(0,t.jsx)(R.AlertIcon,{m:"4px",h:"16px",w:"16px",color:"primary"}),(0,t.jsx)(k.Text,{children:"Welcome to the official homepage of the Houston Rockets"})]}),(0,t.jsx)(L.Button,{onClick:ee,bg:"primary",color:"white",m:"16px",variant:"outline",_hover:{color:"#000000",bgColor:"#ffffff"},children:"Send Feedback"}),(0,t.jsx)(O.Modal,{isOpen:J,onClose:Q,children:(0,t.jsx)(P.ModalOverlay,{children:(0,t.jsx)(B.ModalContent,{children:(0,t.jsxs)(U.ModalBody,{bg:"#222222",children:[(0,t.jsx)(D.ModalHeader,{color:"#ffffff",children:"Help us improve your browsing experience:"}),(0,t.jsx)(u.ChakraForm,{action:"https://htxrockets.com/forms/v1/submit/multipart?id=863",appendSubmitButton:!0,children:(0,t.jsx)(y.Box,{p:"40px",color:"#ffffff",mt:"4",bg:"#111111",rounded:"md",shadow:"md",children:(0,t.jsx)(F.RadioGroup,{children:(0,t.jsxs)(C.Stack,{spacing:4,direction:"column",children:[(0,t.jsx)(M.Radio,{name:"rating",value:"3",children:"Love it"}),(0,t.jsx)(M.Radio,{name:"rating",value:"2",children:"Good"}),(0,t.jsx)(M.Radio,{name:"rating",value:"1",children:"Just Okay"}),(0,t.jsx)(k.Text,{mb:"8px",children:"Please write any additional comments/recommendations below:"}),(0,t.jsx)(H.Textarea,{name:"feedback",size:"sm"})]})})})})]})})})})]})})}),e?.content?.shopify?.data?.collections?.edges.length&&(0,t.jsxs)("section",{className:"rockets-shop",children:[(0,t.jsxs)("div",{className:"sec-header",children:[(0,t.jsxs)(G.HStack,{alignItems:"end",children:[(0,t.jsx)(j.Heading,{as:"h2",fontSize:{base:"2xl",md:"4xl"},textTransform:"uppercase",children:"Shop"}),(0,t.jsx)(V.Select,{className:"header-select",value:ec,onChange:function(e){eu(e.target.value)},w:"135px",h:"var(--chakra-sizes-9)",children:e?.content?.shopify?.data?.collections?.edges.filter(e=>-1!==["309610184748","282163052588","41806921772"].indexOf(e?.node?.id?.match(/\d+/)[0])).map((e,i)=>(0,t.jsx)("option",{value:e.node.handle,children:e.node.title},"retail-title-"+i))})]}),(0,t.jsxs)(ei.default,{href:"https://rocketsshop.com/?utm_source=rockets&utm_medium=web&utm_content=nav&ref=rocketsdotcom",target:"_blank",rel:"noopener noreferrer",textTransform:"uppercase",fontWeight:"semibold",fontSize:"sm",display:"flex",alignItems:"center",gap:2,children:["Visit Shop",(0,t.jsx)($.BsArrowRight,{})]})]}),(0,t.jsx)(K.Swiper,{className:"rockets-swiper overflow",slidesPerView:1.4,centeredSlides:!0,freeMode:!0,breakpoints:{391:{centeredSlides:!1,slidesPerView:"auto"}},spaceBetween:30,grabCursor:!0,navigation:!0,modules:[Y.Navigation,W.default],children:e?.content?.shopify?.data?.collections?.edges?.filter(e=>e.node.handle===ec)[0]?.node?.products?.edges?.map((e,i)=>{let r=e?.node?.variants?.edges[0]?.node?.image?.url,s=e?.node?.title,n=e?.node?.variants?.edges[0]?.node?.price?.amount,o=e?.node?.onlineStoreUrl;return(0,t.jsx)(K.SwiperSlide,{children:(0,t.jsx)(a.default,{children:(0,t.jsx)(m.ChakraUiRetailCard,{thumbnail:r,title:s,price:n,link:o})})},"retail-slide-"+i)})})]}),e?.leaders?(0,t.jsxs)("section",{className:"rockets-team",children:[(0,t.jsxs)("div",{className:"sec-header",children:[(0,t.jsx)(j.Heading,{as:"h2",fontSize:{base:"2xl",md:"4xl"},textTransform:"uppercase",children:"Roster"}),(0,t.jsxs)(ei.default,{className:"link",href:`https://www.nba.com/rockets/player?seasonYear=${e?.state?.seasonalYear||"2024"}`,target:"_blank",rel:"noopener noreferrer",textTransform:"uppercase",fontWeight:"semibold",fontSize:"sm",display:"flex",alignItems:"center",gap:2,children:["View All",(0,t.jsx)($.BsArrowRight,{})]})]}),(0,t.jsx)(K.Swiper,{className:"rockets-swiper overflow",slidesPerView:1.35,centeredSlides:!0,breakpoints:{391:{centeredSlides:!1,slidesPerView:"auto"}},spaceBetween:30,grabCursor:!0,freeMode:!0,navigation:!0,modules:[Y.Navigation,W.default],children:e?.leaders?.roster?.sort((e,t)=>t.stats.season?.ppg-e.stats.season?.ppg).map((i,r)=>{let a=e?.roster?.t?.pl.filter(e=>parseInt(e.pid,10)===parseInt(i.id,10))[0];return(0,t.jsx)(K.SwiperSlide,{children:(0,t.jsx)(p.PlayerCard,{link:`https://www.nba.com/rockets/player/?id=${a.pid}&seasonYear=${e?.state?.seasonalYear||"2024"}`,thumbnail:a.pid,fn:a.fn,ln:a.ln,pos:a.pos,num:a.num,reb:i.stats.season?.rpg||0,ast:i.stats.season?.apg||0,pts:i.stats.season?.ppg||0,logo:"https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg"})},"roster-slide-"+r)})})]}):(0,t.jsxs)("section",{className:"rockets-team",children:[(0,t.jsxs)("div",{className:"sec-header",children:[(0,t.jsx)(j.Heading,{as:"h2",fontSize:{base:"2xl",md:"4xl"},children:"Roster"}),(0,t.jsxs)(ei.default,{href:"https://www.nba.com/rockets/roster",target:"_blank",rel:"noopener noreferrer",textTransform:"uppercase",fontWeight:"semibold",fontSize:"sm",display:"flex",alignItems:"center",gap:2,children:["View All",(0,t.jsx)($.BsArrowRight,{})]})]}),(0,t.jsx)(K.Swiper,{className:"rockets-swiper overflow",slidesPerView:1.35,centeredSlides:!0,breakpoints:{391:{centeredSlides:!1,slidesPerView:"auto"}},spaceBetween:30,grabCursor:!0,freeMode:!0,navigation:!0,modules:[Y.Navigation,W.default],children:e?.roster?.t?.pl.map((i,r)=>(0,t.jsx)(K.SwiperSlide,{children:(0,t.jsx)(p.PlayerCard,{link:`https://www.nba.com/rockets/player/?id=${i.pid}&seasonYear=${e?.state?.seasonalYear||"2024"}`,thumbnail:i.pid,fn:i.fn,ln:i.ln,pos:i.pos,num:i.num,logo:"https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg"})},"roster-slide-"+r))})]})]}),(0,t.jsx)(h.CuratorWidget,{feedId:ed.ROCKETS_DEFAULT_FEED.feedId,elementId:ed.ROCKETS_DEFAULT_FEED.elementId,heading:"Follow Us",headingColor:"white"}),(0,t.jsx)(f.ChakraTakeoverAd,{adData:e?.content?.ads?.filter(e=>"takeover"===e.type)})]})})]}):(0,t.jsx)("div",{style:{width:"100%",minHeight:"100vh",position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1e3,background:"#111",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(s.GlitchEffectImage,{thumbnail:"https://d26dmzpiksq0q.cloudfront.net/shared/logos/rockets_white.svg",width:"200px"})})};ec.getLayout=function(e){return(0,t.jsx)(eo.default,{nbaAnalyticsPageType:el.NbaAnalyticsPageType.HOME,children:e})},e.s(["default",0,ec],72545)},46199,(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(72545)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},81606,e=>{e.v(t=>Promise.all(["static/chunks/fb6830a1e3232726.js"].map(t=>e.l(t))).then(()=>t(34509)))},76407,e=>{e.v(t=>Promise.all(["static/chunks/90c6dc80c657a9dc.js"].map(t=>e.l(t))).then(()=>t(32088)))},62626,e=>{e.v(t=>Promise.all(["static/chunks/cc5984091ee9cc6f.js"].map(t=>e.l(t))).then(()=>t(83294)))}]);