"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6311],{84415:function(t,r){var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),m=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),u=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),r.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var r=t.$$typeof;switch(r){case a:switch(t=t.type){case o:case s:case n:case l:case d:return t;default:switch(t=t&&t.$$typeof){case m:case c:case f:case u:case p:case i:return t;default:return r}}case e:return r}}}(t)===o}},14954:function(t,r,a){t.exports=a(84415)},96311:function(t,r,a){a.d(r,{U4:function(){return Q},sm:function(){return tm},pT:function(){return tk},Mi:function(){return t_}});var e=a(85893),o=a(87685),n=a(67294);a(48711),a(8679),a(85662),a(27278);var s=e.Fragment,i=function(t,r,a){return o.h.call(r,"css")?e.jsx(o.E,(0,o.c)(t,r),a):e.jsx(t,r,a)},c=a(70917),m=Object.defineProperty,f=(t,r,a)=>r in t?m(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,l=(t,r,a)=>f(t,"symbol"!=typeof r?r+"":r,a),d=new Map,p=new WeakMap,u=0,y=void 0;function g(t,r,a={},e=y){if(void 0===window.IntersectionObserver&&void 0!==e){let o=t.getBoundingClientRect();return r(e,{isIntersecting:e,target:t,intersectionRatio:"number"==typeof a.threshold?a.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}let{id:o,observer:n,elements:s}=function(t){let r=Object.keys(t).sort().filter(r=>void 0!==t[r]).map(r=>{var a;return`${r}_${"root"===r?(a=t.root)?(p.has(a)||(u+=1,p.set(a,u.toString())),p.get(a)):"0":t[r]}`}).toString(),a=d.get(r);if(!a){let e;let o=new Map,n=new IntersectionObserver(r=>{r.forEach(r=>{var a;let n=r.isIntersecting&&e.some(t=>r.intersectionRatio>=t);t.trackVisibility&&void 0===r.isVisible&&(r.isVisible=n),null==(a=o.get(r.target))||a.forEach(t=>{t(n,r)})})},t);e=n.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),a={id:r,observer:n,elements:o},d.set(r,a)}return a}(a),i=s.get(t)||[];return s.has(t)||s.set(t,i),i.push(r),n.observe(t),function(){i.splice(i.indexOf(r),1),0===i.length&&(s.delete(t),n.unobserve(t)),0===s.size&&(n.disconnect(),d.delete(o))}}var h=class extends n.Component{constructor(t){super(t),l(this,"node",null),l(this,"_unobserveCb",null),l(this,"handleNode",t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),l(this,"handleChange",(t,r)=>{t&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:t,entry:r}),this.props.onChange&&this.props.onChange(t,r)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:r,rootMargin:a,trackVisibility:e,delay:o,fallbackInView:n}=this.props;this._unobserveCb=g(this.node,this.handleChange,{threshold:t,root:r,rootMargin:a,trackVisibility:e,delay:o},n)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:t}=this.props;if("function"==typeof t){let{inView:r,entry:a}=this.state;return t({inView:r,entry:a,ref:this.handleNode})}let{as:r,triggerOnce:a,threshold:e,root:o,rootMargin:s,onChange:i,skip:c,trackVisibility:m,delay:f,initialInView:l,fallbackInView:d,...p}=this.props;return n.createElement(r||"div",{ref:this.handleNode,...p},t)}};function b({threshold:t,delay:r,trackVisibility:a,rootMargin:e,root:o,triggerOnce:s,skip:i,initialInView:c,fallbackInView:m,onChange:f}={}){var l;let[d,p]=n.useState(null),u=n.useRef(f),[y,h]=n.useState({inView:!!c,entry:void 0});u.current=f,n.useEffect(()=>{let n;if(!i&&d)return n=g(d,(t,r)=>{h({inView:t,entry:r}),u.current&&u.current(t,r),r.isIntersecting&&s&&n&&(n(),n=void 0)},{root:o,rootMargin:e,threshold:t,trackVisibility:a,delay:r},m),()=>{n&&n()}},[Array.isArray(t)?t.toString():t,d,o,e,s,i,a,m,r]);let b=null==(l=y.entry)?void 0:l.target,x=n.useRef(void 0);d||!b||s||i||x.current===b||(x.current=b,h({inView:!!c,entry:void 0}));let F=[p,y.inView,y.entry];return F.ref=F[0],F.inView=F[1],F.entry=F[2],F}var x=a(14954);let F=(0,c.F4)`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,v=(0,c.F4)`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,w=(0,c.F4)`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,k=(0,c.F4)`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Y=(0,c.F4)`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,X=(0,c.F4)`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,S=(0,c.F4)`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,z=(0,c.F4)`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,C=(0,c.F4)`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,O=(0,c.F4)`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,N=(0,c.F4)`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,V=(0,c.F4)`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,_=(0,c.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,j=(0,c.F4)`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,M=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,I=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,R=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,D=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,A=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,B=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,U=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,W=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P=(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function q(t){var r;return r=()=>null,a=>a?t():r()}function G(t){return q(()=>({opacity:0}))(t)}let H=t=>{let{cascade:r=!1,damping:a=.5,delay:e=0,duration:o=1e3,fraction:m=0,keyframes:f=R,triggerOnce:l=!1,className:d,style:p,childClassName:u,childStyle:y,children:g,onVisibilityChange:b}=t,F=(0,n.useMemo)(()=>(function({duration:t=1e3,delay:r=0,timingFunction:a="ease",keyframes:e=R,iterationCount:o=1}){return(0,c.iv)`
    animation-duration: ${t}ms;
    animation-timing-function: ${a};
    animation-delay: ${r}ms;
    animation-name: ${e};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:f,duration:o}),[o,f]);return void 0==g?null:"string"==typeof g||"number"==typeof g||"boolean"==typeof g?i(K,{...t,animationStyles:F,children:String(g)}):(0,x.isFragment)(g)?i(L,{...t,animationStyles:F}):i(s,{children:n.Children.map(g,(s,f)=>{if(!(0,n.isValidElement)(s))return null;let g=e+(r?f*o*a:0);switch(s.type){case"ol":case"ul":return i(c.ms,{children:({cx:r})=>i(s.type,{...s.props,className:r(d,s.props.className),style:Object.assign({},p,s.props.style),children:i(H,{...t,children:s.props.children})})});case"li":return i(h,{threshold:m,triggerOnce:l,onChange:b,children:({inView:t,ref:r})=>i(c.ms,{children:({cx:a})=>i(s.type,{...s.props,ref:r,className:a(u,s.props.className),css:q(()=>F)(t),style:Object.assign({},y,s.props.style,G(!t),{animationDelay:g+"ms"})})})});default:return i(h,{threshold:m,triggerOnce:l,onChange:b,children:({inView:t,ref:r})=>i("div",{ref:r,className:d,css:q(()=>F)(t),style:Object.assign({},p,G(!t),{animationDelay:g+"ms"}),children:i(c.ms,{children:({cx:t})=>i(s.type,{...s.props,className:t(u,s.props.className),style:Object.assign({},y,s.props.style)})})})})}})})},J={display:"inline-block",whiteSpace:"pre"},K=t=>{var r,a;let{animationStyles:e,cascade:o=!1,damping:n=.5,delay:s=0,duration:c=1e3,fraction:m=0,triggerOnce:f=!1,className:l,style:d,children:p,onVisibilityChange:u}=t,{ref:y,inView:g}=b({triggerOnce:f,threshold:m,onChange:u});return(r=()=>i("div",{ref:y,className:l,style:Object.assign({},d,J),children:p.split("").map((t,r)=>i("span",{css:q(()=>e)(g),style:{animationDelay:s+r*c*n+"ms"},children:t},r))}),a=()=>i(L,{...t,children:p}),t=>t?r():a())(o)},L=t=>{let{animationStyles:r,fraction:a=0,triggerOnce:e=!1,className:o,style:n,children:s,onVisibilityChange:c}=t,{ref:m,inView:f}=b({triggerOnce:e,threshold:a,onChange:c});return i("div",{ref:m,className:o,css:q(()=>r)(f),style:Object.assign({},n,G(!f)),children:s})},Q=t=>{let{effect:r="bounce",style:a,...e}=t,[o,s]=(0,n.useMemo)(()=>(function(t){switch(t){case"bounce":return[F,{transformOrigin:"center bottom"}];case"flash":return[v];case"headShake":return[w,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[k,{animationTimingFunction:"ease-in-out"}];case"jello":return[Y,{transformOrigin:"center"}];case"pulse":return[X,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[S];case"shake":return[z];case"shakeX":return[C];case"shakeY":return[O];case"swing":return[N,{transformOrigin:"top center"}];case"tada":return[V];case"wobble":return[_]}})(r),[r]);return i(H,{keyframes:o,style:Object.assign({},a,s),...e})},Z=(0,c.F4)`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,tt=(0,c.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tr=(0,c.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ta=(0,c.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,te=(0,c.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,to=(0,c.F4)`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,tn=(0,c.F4)`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,ts=(0,c.F4)`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,ti=(0,c.F4)`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,tc=(0,c.F4)`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`,tm=t=>{let{direction:r,reverse:a=!1,...e}=t;return i(H,{keyframes:(0,n.useMemo)(()=>(function(t,r){switch(r){case"down":return t?tn:tt;case"left":return t?ts:tr;case"right":return t?ti:ta;case"up":return t?tc:te;default:return t?to:Z}})(a,r),[r,a]),...e})},tf=(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,tl=(0,c.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,td=(0,c.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,tp=(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,tu=(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,ty=(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,tg=(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,th=(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,tb=(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,tx=(0,c.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,tF=(0,c.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,tv=(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,tw=(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,tk=t=>{let{big:r=!1,direction:a,reverse:e=!1,...o}=t;return i(H,{keyframes:(0,n.useMemo)(()=>(function(t,r,a){switch(a){case"bottom-left":return r?tl:M;case"bottom-right":return r?td:$;case"down":return t?r?tu:I:r?tp:E;case"left":return t?r?tg:D:r?ty:R;case"right":return t?r?tb:B:r?th:A;case"top-left":return r?tx:T;case"top-right":return r?tF:U;case"up":return t?r?tw:P:r?tv:W;default:return r?tf:j}})(r,e,a),[r,a,e]),...o})};(0,c.F4)`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,(0,c.F4)`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,(0,c.F4)`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,(0,c.F4)`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,(0,c.F4)`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,(0,c.F4)`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,(0,c.F4)`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,(0,c.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,(0,c.F4)`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,(0,c.F4)`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,(0,c.F4)`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,(0,c.F4)`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,(0,c.F4)`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,(0,c.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;let tY=(0,c.F4)`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tX=(0,c.F4)`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tS=(0,c.F4)`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tz=(0,c.F4)`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tC=(0,c.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,tO=(0,c.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,tN=(0,c.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,tV=(0,c.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,t_=t=>{let{direction:r,reverse:a=!1,...e}=t;return i(H,{keyframes:(0,n.useMemo)(()=>(function(t,r){switch(r){case"down":return t?tC:tY;case"right":return t?tN:tS;case"up":return t?tV:tz;default:return t?tO:tX}})(a,r),[r,a]),...e})};(0,c.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,(0,c.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,(0,c.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,(0,c.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,(0,c.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,(0,c.F4)`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,(0,c.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,(0,c.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,(0,c.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,(0,c.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);