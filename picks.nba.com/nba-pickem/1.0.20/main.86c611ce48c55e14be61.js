!function(){var e,t,n,r,i={"/DvN":function(e,t,n){"use strict";n.d(t,{$p:function(){return l},Em:function(){return s},c$:function(){return u},to:function(){return c},vw:function(){return d}});var r=n("kM8z");const i=e=>e.score,a=(0,r.Mz)([i],e=>e.dataByEventAndRound),o=(0,r.Mz)([a,(e,t)=>t],(e,t)=>e[t]||{}),s=(0,r.Mz)([i],e=>e.dataByProject||{}),l=(0,r.Mz)([s],e=>e.points||0),d=(0,r.Mz)([s],e=>e.lastWeekIsFetched||!1),c=(0,r.Mz)([s],e=>e.lastWeekPoints||0),u=(0,r.Mz)([o,(e,t,n)=>n],(e,t)=>e[t]||{})},"/Iuz":function(e,t,n){"use strict";n.d(t,{u:function(){return i}});var r=n("1igH");n("s4Z8");window.location,window.parent.location,(0,r.jg)();const i=(e,t={})=>{e.replace("-element","");return!1}},"/T3s":function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var r=n("1mTy");const i=e=>e===r.Oe},"039+":function(e,t,n){"use strict";n.d(t,{TI:function(){return i}});const r=(0,n("mXGw").createContext)({}),{Provider:i,Consumer:a}=r;t.Ay=r},"0TlH":function(e,t,n){"use strict";n.d(t,{LR:function(){return c},Lf:function(){return s},WZ:function(){return i},YN:function(){return l},iC:function(){return a},rg:function(){return o},wC:function(){return d}});var r=n("PtY4");const i=({baseUrl:e,projectID:t,leaderboardId:n,limit:i})=>{const a=i||10;return r.A.get(`${e}/projects/${t}/leaderboards/${n}?limit=${a}`)},a=({baseUrl:e,projectID:t,leaderboardId:n,userID:i})=>r.A.get(`${e}/projects/${t}/leaderboards/${n}/users/${i}`),o=({baseUrl:e,projectID:t,eventID:n,leaderboardId:i,limit:a})=>{const o=a||10;return r.A.get(`${e}/projects/${t}/events/${n}/leaderboards/${i}?limit=${o}`)},s=({baseUrl:e,projectID:t,eventID:n,leaderboardId:i,userID:a})=>r.A.get(`${e}/projects/${t}/events/${n}/leaderboards/${i}/users/${a}`),l=({baseUrl:e,projectID:t,leaderboardId:n,limit:i})=>{const a=i||10;return r.A.get(`${e}/projects/${t}/leaderboards/${n}?limit=${a}`)},d=({baseUrl:e,projectID:t,leaderboardId:n,userID:i})=>r.A.get(`${e}/projects/${t}/leaderboards/${n}/users/${i}`),c=({baseUrl:e,projectID:t})=>r.A.get(`${e}/projects/${t}/groups`)},"1mTy":function(e,t,n){"use strict";n.d(t,{$$:function(){return V},$i:function(){return Z},BQ:function(){return B},Bc:function(){return ie},Bj:function(){return x},Bk:function(){return m},Cb:function(){return ue},D2:function(){return s},D9:function(){return l},EP:function(){return v},Ej:function(){return te},HM:function(){return ce},HX:function(){return z},Ic:function(){return i},JJ:function(){return pe},Kw:function(){return h},Mt:function(){return w},NY:function(){return c},Oe:function(){return L},Ov:function(){return Q},PN:function(){return D},QN:function(){return F},QU:function(){return q},Qb:function(){return oe},Rx:function(){return g},Ry:function(){return p},Rz:function(){return X},SB:function(){return le},Sh:function(){return K},Uw:function(){return U},V2:function(){return $},VT:function(){return ee},Vx:function(){return R},WI:function(){return E},WT:function(){return r},YH:function(){return d},YZ:function(){return A},Yz:function(){return Y},Z2:function(){return P},ZE:function(){return f},dt:function(){return re},dw:function(){return C},gU:function(){return O},hV:function(){return W},hc:function(){return me},j3:function(){return se},jC:function(){return _},jW:function(){return T},kB:function(){return H},mG:function(){return y},nn:function(){return J},oP:function(){return G},oZ:function(){return j},pZ:function(){return o},qi:function(){return b},sP:function(){return u},sn:function(){return I},tH:function(){return k},tW:function(){return de},w9:function(){return M},wW:function(){return a},x1:function(){return S},ys:function(){return N},z8:function(){return ae},zG:function(){return ne}});const r="article-element",i="brand-survey-element",a="category-element",o="commentary-element",s="data-capture-element",l="element-carousel-element",d="external-article-element",c="freestyle-trivia-element",u="generic-match-event-element",p="nba-grid-predictor-element",m="goal-element",g="group-leaderboard-element",f="halftime-fulltime-element",h="nba-instant-win-element",v="image-gallery-element",y="ladder-poll-element",b="ladder-quiz-element",x="leaderboard-element",N="media-element",A="quick-fire-quiz-element",C="quick-fire-question-element",O="multi-predictor-element",T="multi-predictor-score-element",I="multi-predictor-pick-number-element",E="multi-predictor-prediction-element",w="multi-predictor-player-element",_="number-quiz-element",k="number-slider-element",P="opta-widget-element",j="player-picker-element",L="player-rater-element",$="podium-element",S="poll-element",R="prediction-element",B="project-leaderboard-element",D="nba-rail-predictor-element",H="rater-wrapper-element",M="round-leaderboard-element",z="round-user-score-element",U="user-score-element",V="score-predictor-element",F="score-predictor-high-scores-element",G="sharing-element",W="slider-element",Z="smash-rater-element",J="social-element",K="sorting-quiz-element",Q="nba-stacked-predictor-element",Y="standalone-category-element",X="stat-callout-element",q="stat-comparison-element",ee="substitution-element",te="sweepstake-element",ne="swing-poll-element",re="team-selector-element",ie="trivia-element",ae="video-element",oe="video-carousel-element",se="video-trivia-element",le="voting-carousel-element",de="word-puzzle-element",ce="element-container-element",ue=[r,i,a,o,s,l,d,c,u,p,m,g,f,v,h,y,b,x,N,O,T,I,E,w,_,k,P,j,L,$,S,R,B,A,C,D,H,M,z,U,V,F,G,W,Z,J,K,Q,Y,X,q,ee,te,ne,re,ie,ae,oe,se,le,de,ce],pe=[a,T,I,E,w,C,L],me=(new Set([U,z,x,M,g]),new Set([ie,c,se]))},"2je+":function(e,t,n){"use strict";n.d(t,{A:function(){return o}});var r=n("mXGw"),i=n("039+"),a=n("fjaf"),o=(e,t)=>{const n=(0,r.useContext)(i.Ay)[t];return((e,t={})=>{(0,r.useEffect)(()=>{e.current&&Object.entries(t).forEach(([t,n])=>{e.current.style.setProperty(`--${t}`,n)})},[e.current,t])})(e,(0,r.useMemo)(()=>(0,a.f)(n),[n]))}},"3c/i":function(e,t,n){"use strict";n.d(t,{T:function(){return i}});var r=n("prkb");const i=e=>r.AH`
  @media (hover: hover) and (pointer: fine) {
    ${e};
  }
`},"4gBx":function(e,t){"use strict";var n=function(e){return e.OPTION_BUTTON="OptionButton",e.PRIMARY_BUTTON="PrimaryButton",e.ELEMENT_CONTENT="ElementContent",e.TABS="Tabs",e}(n||{});t.A=n},"5gAz":function(e,t,n){"use strict";n.d(t,{iU:function(){return i},L$:function(){return o},Bb:function(){return d}});var r=n("QBYJ"),i=e=>r.y[e]||null,a=n("oNR1"),o=(e,t)=>{const n=(0,a.zy)();let r=0;const i=new URLSearchParams(n.search);return i.has(e)&&(r=t.findIndex(({id:t})=>t===i.get(e))),r},s=n("UHZw"),l=n("fjaf"),d=(e,t,n,r=null)=>{const i=(0,s.Cb)(t);let a={};return r?(n.hasOwnProperty("theme")&&(a={...e.theme[r][i],...n.theme[r]}),a={...e.theme[r][i]}):a={...e[i],...n},(0,l.f)(a)}},"5hCX":function(e,t,n){"use strict";n.d(t,{ER:function(){return o},d_:function(){return a},sq:function(){return i}});var r=n("q2Lh");const i=r.J1`
  mutation updateElementReactions(
    $userId: String!
    $eventId: ID!
    $projectId: ID!
    $elementId: String!
    $oldReaction: String
    $newReaction: String
  ) {
    updateElementReactions(
      userId: $userId
      eventId: $eventId
      projectId: $projectId
      elementId: $elementId
      oldReaction: $oldReaction
      newReaction: $newReaction
    )
  }
`,a=r.J1`
  mutation addLastReaction($reactionKey: String!, $elementId: String!) {
    addLastReaction(reactionKey: $reactionKey, elementId: $elementId) @client
  }
`,o=r.J1`
  query {
    reactions @client
  }
`},"5kgV":function(e,t,n){"use strict";n.d(t,{$e:function(){return u},J_:function(){return s},Po:function(){return p},Z7:function(){return l},aW:function(){return i},jI:function(){return o},n_:function(){return a},ux:function(){return d},v2:function(){return c}});var r=n("Xrb3");const{connected:i,initialize:a,connecting:o,initialized:s,changeEvent:l,disconnected:d,changeLanguage:c,updateInstance:u,updatePresenceCounter:p}=(0,r.A)("CONNECTED","INITIALIZE","CONNECTING","INITIALIZED","DISCONNECTED","CHANGE_EVENT","CHANGE_LANGUAGE","UPDATE_INSTANCE","UPDATE_PRESENCE_COUNTER",{prefix:"lvis"})},"6InW":function(e,t,n){"use strict";var r=n("88ja"),i=n("oYCi");t.A=({advert:e,pos:t})=>{if(!e)return null;const{path:n,slotWidth:a,slotHeight:o,sizeMapping:s,targeting:l,position:d}=e;return n&&a&&o?(0,i.jsx)(r.A,{pos:t,path:n,slotWidth:a,slotHeight:o,sizeMapping:s,position:d,targeting:l,advertId:e.id,elementId:"google-ad"}):null}},"6WEz":function(e,t,n){"use strict";n.d(t,{G_:function(){return s},H6:function(){return o},bn:function(){return l},m$:function(){return d}});var r=n("kM8z"),i=n("eB0S");const a=e=>e.project?e.project:i.K,o=e=>a(e).settings||{},s=e=>a(e).styles,l=e=>a(e).isFetched,d=(0,r.Mz)([o],e=>e.presenceCounter||{})},"7FLN":function(e,t,n){"use strict";n.d(t,{oJ:function(){return K},Bu:function(){return J},u4:function(){return Q}});var r=n("Wu6c");const i="fkAuthenticationType",a="logged-in",o=e=>({eventType:"authentication success",eventData:{interactionType:e.type,eventDigitalData:JSON.parse(JSON.stringify(e))}}),s=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:edit-name:icon",eventDigitalData:JSON.parse(JSON.stringify(e))}}),l=e=>({eventType:"nba fantasy game interaction",eventData:{interactionType:"button",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:sign-in:cta",interactionText:e.label,eventDigitalData:JSON.parse(JSON.stringify(e))}}),d=e=>({eventType:"nba fantasy game interaction",eventData:{interactionType:"button",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:sign-up:cta",interactionText:e.label,eventDigitalData:JSON.parse(JSON.stringify(e))}}),c=e=>({eventType:"nba fantasy game interaction",eventData:{eventName:"Pick'Em",eventType:"Pick 'Em",interactionType:"button",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:sign-out:cta",interactionText:e.label,eventDigitalData:JSON.parse(JSON.stringify(e))}}),u=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:calendar:icon",eventDigitalData:JSON.parse(JSON.stringify(e))}}),p=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:calendar-date:icon",categoryType:e.label,eventDigitalData:JSON.parse(JSON.stringify(e))}}),m=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:chiclet-click:button",categoryType:e.label,eventDigitalData:JSON.parse(JSON.stringify(e))}}),g=e=>({eventType:"nba fantasy game interaction",eventData:{eventName:"Pick'Em",eventType:"Pick 'Em",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:chiclet-dismiss:icon",categoryType:e.label,eventDigitalData:JSON.parse(JSON.stringify(e))}}),f=e=>({eventType:"nba fantasy game interaction",eventData:{eventName:"Pick'Em",eventType:"Pick 'Em",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:prizing-view-leaderboard:button",eventDigitalData:JSON.parse(JSON.stringify(e))}}),h=e=>({eventType:"nba fantasy game interaction",eventData:{eventName:"Pick'Em",eventType:"Pick 'Em",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:prizing-tile-dismiss:button",eventDigitalData:JSON.parse(JSON.stringify(e))}}),v=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:question-submission:button",interactionContentID:e.gameId,interactionText:e.submittedAnswer,categoryType:e.questionType,categoryTitle:e.questionText,contentTitle:e.gameTitle,contentName:e.tabName,interactionType:e.type,newSession:e.newSession,eventDigitalData:JSON.parse(JSON.stringify(e))}}),y=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:link",interactionType:"icon",interactionContentType:e.broadcasters,eventDigitalData:JSON.parse(JSON.stringify(e))}}),b=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:today:button",interactionType:"button",eventDigitalData:JSON.parse(JSON.stringify(e))}}),x=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game-tutorial:controls:button",interactionState:e.state,eventDigitalData:JSON.parse(JSON.stringify(e))}}),N=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game-tutorial:dismiss:button",eventDigitalData:JSON.parse(JSON.stringify(e))}}),A=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game-tutorial:play:button",eventDigitalData:JSON.parse(JSON.stringify(e))}}),C=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game-tutorial:info:icon",eventDigitalData:JSON.parse(JSON.stringify(e))}}),O=e=>({eventType:"nba fantasy game interaction",eventData:{interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:prizing-view-rules:button",eventDigitalData:JSON.parse(JSON.stringify(e))}}),T=e=>({eventType:"nba fantasy game interaction",eventData:{eventName:"Pick'Em",eventType:"Pick 'Em",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:sponsor:button",interactionContentID:e.sponsorId,eventDigitalData:JSON.parse(JSON.stringify(e))}}),I=e=>({eventType:"nba fantasy game interaction",eventData:{eventName:"Pick'Em",eventType:"Pick 'Em",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:acquisition-placement:cta",interactionContentType:e.promoText,interactionText:e.buttonText,eventDigitalData:JSON.parse(JSON.stringify(e))}}),E=e=>({eventType:"nba fantasy game interaction",eventData:{eventName:"Pick'Em",eventType:"Pick 'Em",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:create-group:button",interactionText:e.label,eventDigitalData:JSON.parse(JSON.stringify(e))}}),w=e=>({eventType:"nba fantasy game interaction",eventData:{eventName:"Pick'Em",eventType:"Pick 'Em",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:join-group:button",interactionText:e.label,eventDigitalData:JSON.parse(JSON.stringify(e))}}),_=e=>({eventType:"nba fantasy game interaction",eventData:{eventName:"Pick'Em",eventType:"Pick 'Em",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:invite-group:button",interactionText:e.label,eventDigitalData:JSON.parse(JSON.stringify(e))}}),k=e=>({eventType:"nba fantasy game interaction",eventData:{eventName:"Pick'Em",eventType:"Pick 'Em",interactionContent:"Pick Em",interactionCategory:"2025-2026 nba pick em",interactionId:"nba-fantasy-game:share",interactionText:e.label,interactionType:"share",eventDigitalData:JSON.parse(JSON.stringify(e))}}),P=({user:e})=>({eventType:"pageLoad",eventData:{customData:{},eventDigitalData:{page:{pageInfo:{pageName:"Page View: Fantasy Game",siteSection:"Fantasy"},content:{categoryTitle:"Pick Em",contentTitle:"home",contentType:"2025-2026 nba pick em"}},site:{propertyName:"nba:web",league:"nba",partner:"Monterosa"},user:e}}}),j=({user:e})=>({eventType:"pageLoad",eventData:{customData:{},eventDigitalData:{page:{pageInfo:{pageName:"Page View: Fantasy Game",siteSection:"Fantasy"},content:{categoryTitle:"Pick Em",contentTitle:"prizing",contentType:"2025-2026 nba pick em"}},site:{propertyName:"nba:web",league:"nba",partner:"Monterosa"},user:e}}}),L=({user:e,activeTab:t})=>({eventType:"pageLoad",eventData:{customData:{},eventDigitalData:{page:{pageInfo:{pageName:"Page View: Fantasy Game",siteSection:"Fantasy"},content:{categoryTitle:"Pick Em",contentTitle:"chiclet view",categoryType:t,contentType:"2025-2026 nba pick em"}},site:{propertyName:"nba:web",league:"nba",partner:"Monterosa"},user:e}}}),$=({user:e,activeLbd:t})=>({eventType:"pageLoad",eventData:{customData:{},eventDigitalData:{page:{pageInfo:{pageName:"Page View: Fantasy Game",siteSection:"Fantasy"},content:{eventName:"Pick'Em",eventType:"Pick 'Em",categoryTitle:"Pick Em",contentTitle:"leaderboard",categoryType:t,contentType:"2025-2026 nba pick em"}},site:{propertyName:"nba:web",league:"nba",partner:"Monterosa"},user:e}}}),S=({user:e})=>({eventType:"pageLoad",eventData:{customData:{},eventDigitalData:{page:{pageInfo:{pageName:"Page View: Fantasy Game",siteSection:"Fantasy"},content:{eventName:"Pick'Em",eventType:"Pick 'Em",categoryTitle:"Pick Em",contentTitle:"groups",contentType:"2025-2026 nba pick em"}},site:{propertyName:"nba:web",league:"nba",partner:"Monterosa"},user:e}}}),R=({user:e,name:t})=>({eventType:"pageLoad",eventData:{customData:{},eventDigitalData:{page:{pageInfo:{pageName:"Page View: Fantasy Game",siteSection:"Fantasy"},content:{eventName:"Pick'Em",eventType:"Pick 'Em",categoryTitle:"Pick Em",contentTitle:"groups details",categoryType:t,contentType:"2025-2026 nba pick em"}},site:{propertyName:"nba:web",league:"nba",partner:"Monterosa"},user:e}}}),B=({user:e})=>({eventType:"pageLoad",eventData:{customData:{},eventDigitalData:{page:{pageInfo:{pageName:"Page View: Fantasy Game",siteSection:"Fantasy"},content:{categoryTitle:"Pick Em",contentTitle:"how to play",contentType:"2025-2026 nba pick em"}},site:{propertyName:"nba:web",league:"nba",partner:"Monterosa"},user:e}}}),D=({user:e,slide:t})=>({eventType:"pageLoad",eventData:{customData:{},eventDigitalData:{page:{pageInfo:{pageName:"Page View: Fantasy Game",siteSection:"Fantasy"},content:{categoryTitle:"Pick Em",contentTitle:`how to play - ${t}`,contentType:"2025-2026 nba pick em"}},site:{propertyName:"nba:web",league:"nba",partner:"Monterosa"},user:e}}}),H=({user:e})=>({eventType:"pageLoad",eventData:{customData:{},eventDigitalData:{page:{pageInfo:{pageName:"Page View: Fantasy Game",siteSection:"Fantasy"},content:{categoryTitle:"Pick Em",contentTitle:"rules",contentType:"2025-2026 nba pick em"}},site:{propertyName:"nba:web",league:"nba",partner:"Monterosa"},user:e}}}),M=({user:e})=>({eventType:"pageLoad",eventData:{customData:{},eventDigitalData:{page:{pageInfo:{pageName:"Page View: Fantasy Game",siteSection:"Fantasy"},content:{categoryTitle:"Pick Em",contentTitle:"age restriction",contentType:"2025-2026 nba pick em"}},site:{propertyName:"nba:web",league:"nba",partner:"Monterosa"},user:e}}}),z=e=>({eventType:"play in-game interaction",eventData:{interactionContent:"Pick Em",interactionId:"nba-fantasy:game:start",eventDigitalData:JSON.parse(JSON.stringify(e))}}),U=e=>({eventType:"play in-game interaction",eventData:{interactionContent:"Pick Em",interactionId:"nba-fantasy:game:complete",eventDigitalData:JSON.parse(JSON.stringify(e))}});var V=n("QBC/");let F=!1,G=null,W=!0,Z={[r.Oz.PICKEM_START]:!1,[r.Oz.PICKEM_COMPLETE]:!0,[r.Oz.CHICLET_PAGEVIEW]:!1,[r.Oz.HOME_PAGEVIEW]:!1};const J=e=>(!e||F||G||(G=(e=>{const t=document.createElement("script");t.type="text/javascript",t.async=!0;const n=new URL(e);t.src=n.href;const r=document.getElementsByTagName("head")[0];return r.querySelector(`script[src="${n.href}"]`)?Promise.resolve():new Promise(e=>{t.onload=()=>{e()},r.appendChild(t)})})(e).then(()=>{F=!0,window.playDataLayer=window.playDataLayer||[]})),G),K=(e,t)=>{if(Z[e])return null;!1===Z[e]&&(Z[e]=!0);const{lvisID:{state:n,info:F}}=(0,V.Gu)(),G=n===a,J={userState:G?"authenticated":"guest",...G&&{userID:F?.externalId},...G&&{authenticationType:"NBA CIAM"},...G&&{authenticationProvider:"NBA CIAM"}};let K,Q=null;switch(e){case r.Oz.AUTHENTICATED:K=o,localStorage.removeItem(i);break;case r.Oz.PICKEM_START:Z[r.Oz.PICKEM_COMPLETE]=!1,K=z;break;case r.Oz.PICKEM_COMPLETE:K=U;break;case r.Oz.HOME_PAGEVIEW:K=P;break;case r.Oz.PRIZING_PAGEVIEW:Z[r.Oz.HOME_PAGEVIEW]=!1,K=j;break;case r.Oz.CHICLET_PAGEVIEW:K=L;break;case r.Oz.LEADERBOARD_PAGEVIEW:K=$;break;case r.Oz.GROUPS_PAGEVIEW:K=S;break;case r.Oz.GROUP_DETAILS_PAGEVIEW:K=R;break;case r.Oz.HOW_TO_PLAY_PAGEVIEW:Z[r.Oz.HOME_PAGEVIEW]=!1,K=B;break;case r.Oz.HOW_TO_PLAY_SLIDE_PAGEVIEW:K=D;break;case r.Oz.RULES_PAGEVIEW:K=H;break;case r.Oz.AGE_GATE_PAGEVIEW:K=M;break;case r.Oz.EDIT_NAME:K=s;break;case r.Oz.SIGN_IN:localStorage.setItem(i,"login"),K=l;break;case r.Oz.SIGN_UP:localStorage.setItem(i,"registration"),K=d;break;case r.Oz.SIGN_OUT:K=c;break;case r.Oz.CALENDAR_CLICK:K=u;break;case r.Oz.CALENDAR_DATE:K=p;break;case r.Oz.CHICLET_CLICK:K=m;break;case r.Oz.CHICLET_DISMISS:K=g;break;case r.Oz.INFO_LEADERBOARD_CLICK:K=f;break;case r.Oz.INFO_DISMISS:K=h;break;case r.Oz.QUESTION_SUBMISSION:K=v;break;case r.Oz.BROADCASTER_CLICK:K=y;break;case r.Oz.RULES_CLICK:K=O;break;case r.Oz.SPONSOR_CLICK:K=T;break;case r.Oz.TODAY_CLICK:K=b;break;case r.Oz.TUTORIAL_NAVIGATION:K=x;break;case r.Oz.TUTORIAL_CLOSE:K=N;break;case r.Oz.TUTORIAL_PLAY:K=A;break;case r.Oz.TUTORIAL_CLICK:K=C;break;case r.Oz.ACQUISITION_CLICK:K=I;break;case r.Oz.CREATE_GROUP:K=E;break;case r.Oz.JOIN_GROUP:K=w;break;case r.Oz.INVITE_MEMBERS:K=_;break;case r.Oz.SHARE:K=k;break;default:K=null}return K&&(Q=K({...t||{},user:J,newSession:W})),e===r.Oz.QUESTION_SUBMISSION&&(W=!1),Q},Q=async e=>{if(!e)return;if(!F){if(!G)return;await G}const{lvisID:{state:t,info:n}}=(0,V.Gu)(),r=t===a,i={userState:r?"authenticated":"guest",...r&&{userID:n?.externalId},...r&&{authenticationType:"NBA CIAM"},...r&&{authenticationProvider:"NBA CIAM"}};if(e.hasOwnProperty("type")){const t=e;if("sponsor_click"===t.type){const e=T({user:i,sponsorId:t.payload.event_label});window.playDataLayer=window.playDataLayer||[],window.playDataLayer.push(e)}return}e.hasOwnProperty("elementId")||(window.playDataLayer=window.playDataLayer||[],window.playDataLayer.push(e))}},"88ja":function(e,t,n){"use strict";n.d(t,{A:function(){return p}});var r=n("mXGw"),i=n("0aT4"),a=n("lvZi"),o=n("Ho5h");const s=e=>e.reduce((e,{id:t,value:n})=>Object.assign(e,{[t]:n}),{}),l=(e,t)=>e.map(e=>({viewport:[e.viewportWidth,e.viewportHeight],slot:[o.SO.TOP,o.SO.BOTTOM].includes(t)&&e.viewportWidth>1024?[[e.slotWidth,e.slotHeight],[728,90]]:[e.slotWidth,e.slotHeight]}));var d=n("BhVK"),c=n("Fx+d"),u=n("oYCi"),p=({pos:e,path:t,slotWidth:n,slotHeight:o,sizeMapping:p=[],targeting:m=[],position:g,advertId:f,elementId:h})=>{const{trackConversion:v}=(0,d.A)();(0,r.useEffect)(()=>{f&&v({elementId:h,elementContext:"google_ad",actionSource:c.S.AD,actionType:c.X.CLICK,actionContext:{advert_id:f}})},[f,h,v]);const y=(0,r.useCallback)(()=>{f&&v({elementId:h,elementContext:"google_ad",actionSource:c.S.AD,actionType:c.X.CLICK,actionContext:{advert_id:f}})},[f,h,v]);return(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(a.A,{}),children:(0,u.jsx)("div",{onClick:y,children:(0,u.jsx)(i.ZE,{adUnitPath:t,slotSize:[n,o],sizeMapping:l(p,g),targeting:s([...m,{id:"pos",value:e}]),renderWhenViewable:!1,collapseEmptyDiv:!1})})})}},"8fbK":function(e,t,n){"use strict";n.d(t,{Qf:function(){return s},X1:function(){return o},fO:function(){return a}});var r=n("dIqr"),i=n("wzRx");const a=e=>e===r.Data.STATE_STARTED,o=e=>e===r.Data.STATE_CLOSED;function s({elementInstance:e}){const t=e.getState(),[n,r]=(0,i.A)(e.getCustomFields());return{id:e.id,type:e.type,state:t,isActive:a(t),isClosed:o(t),contentType:e.contentType,publishedAt:e.publishedAt,customStyles:n,customFields:r}}},"9+Fe":function(e,t,n){"use strict";n.d(t,{A:function(){return le}});var r=n("mXGw");let i=function(e){return e.ADDED_TIME="ADT",e.CHANCE="CHA",e.COMMENTARY="COM",e.CORNER="COR",e.INFO="DEF",e.DISALLOWED="DIS",e.EXTRA_TIME="EXT",e.FULL_TIME="FLT",e.FREE_KICK="FRK",e.GOAL="GOL",e.HALF_TIME="HFT",e.INJURY="INJ",e.KICK_OFF="KCK",e.PENALTY="PEN",e.QUOTATION="QUO",e.RED_CARD="RED",e.SAVE="SAV",e.SUBSTITUTION_OFF="SOF",e.SUBSTITUTION_ON="SON",e.SUBSTITUTION="SUB",e.TEAM_LINE_UP="TEN",e.THROW_IN="THI",e.VAR="VAR",e.WOODWORK="WDK",e.WEATHER_UPDATE="WEA",e.YELLOW_CARD="YEC",e}({});const a="match-event-icon",o=a,s=`${a}--${i.ADDED_TIME.toLocaleLowerCase()}`,l=`${a}--${i.CHANCE.toLocaleLowerCase()}`,d=`${a}--${i.COMMENTARY.toLocaleLowerCase()}`,c=`${a}--${i.CORNER.toLocaleLowerCase()}`,u=`${a}--${i.INFO.toLocaleLowerCase()}`,p=`${a}--${i.DISALLOWED.toLocaleLowerCase()}`,m=`${a}--${i.EXTRA_TIME.toLocaleLowerCase()}`,g=`${a}--${i.FULL_TIME.toLocaleLowerCase()}`,f=`${a}--${i.FREE_KICK.toLocaleLowerCase()}`,h=`${a}--${i.GOAL.toLocaleLowerCase()}`,v=`${a}--${i.HALF_TIME.toLocaleLowerCase()}`,y=`${a}--${i.INJURY.toLocaleLowerCase()}`,b=`${a}--${i.KICK_OFF.toLocaleLowerCase()}`,x=`${a}--${i.PENALTY.toLocaleLowerCase()}`,N=`${a}--${i.QUOTATION.toLocaleLowerCase()}`,A=`${a}--${i.RED_CARD.toLocaleLowerCase()}`,C=`${a}--${i.SAVE.toLocaleLowerCase()}`,O=`${a}--${i.SUBSTITUTION_OFF.toLocaleLowerCase()}`,T=`${a}--${i.SUBSTITUTION_ON.toLocaleLowerCase()}`,I=`${a}--${i.SUBSTITUTION.toLocaleLowerCase()}`,E=`${a}--${i.TEAM_LINE_UP.toLocaleLowerCase()}`,w=`${a}--${i.THROW_IN.toLocaleLowerCase()}`,_=`${a}--${i.VAR.toLocaleLowerCase()}`,k=`${a}--${i.WOODWORK.toLocaleLowerCase()}`,P=`${a}--${i.WEATHER_UPDATE.toLocaleLowerCase()}`,j=`${a}--${i.YELLOW_CARD.toLocaleLowerCase()}`;var L=n("oYCi");function $({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42 76.12c18.844 0 34.12-15.276 34.12-34.12C76.12 23.156 60.844 7.88 42 7.88 23.156 7.88 7.88 23.156 7.88 42c0 18.844 15.276 34.12 34.12 34.12zM42 84c23.196 0 42-18.804 42-42S65.196 0 42 0 0 18.804 0 42s18.804 42 42 42z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M46.086 17.94a3.94 3.94 0 00-7.88 0v5.666H32.94a3.94 3.94 0 000 7.88h5.266v5.266a3.94 3.94 0 007.88 0v-5.266h5.666a3.94 3.94 0 000-7.88h-5.666V17.94z",fill:"currentColor"})]})}function S({className:e}){return(0,L.jsx)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:(0,L.jsx)("path",{d:"M42 5.781c23.155 0 42 15.152 42 33.788a29.886 29.886 0 01-8.911 20.87l2.139 15.214a3.131 3.131 0 01-4.32 3.318l-17.416-7.398A51.382 51.382 0 0142 73.347c-23.155 0-42-15.152-42-33.778C0 20.943 18.845 5.781 42 5.781zm0 61.305a44.942 44.942 0 0012.803-1.826 3.13 3.13 0 012.087.114l13.367 5.667-1.596-11.333a3.13 3.13 0 01.96-2.713c5.217-4.904 8.108-11.092 8.108-17.426 0-15.172-16.028-27.516-35.74-27.516-19.71 0-35.728 12.334-35.728 27.516C6.26 54.752 22.289 67.086 42 67.086z",fill:"currentColor"})})}function R({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{d:"M42 5.781c23.155 0 42 15.152 42 33.788a29.886 29.886 0 01-8.911 20.87l2.139 15.214a3.131 3.131 0 01-4.32 3.318l-17.416-7.398A51.382 51.382 0 0142 73.347c-23.155 0-42-15.152-42-33.778C0 20.943 18.845 5.781 42 5.781zm0 61.305a44.942 44.942 0 0012.803-1.826 3.13 3.13 0 012.087.114l13.367 5.667-1.596-11.333a3.13 3.13 0 01.96-2.713c5.217-4.904 8.108-11.092 8.108-17.426 0-15.172-16.028-27.516-35.74-27.516-19.71 0-35.728 12.334-35.728 27.516C6.26 54.752 22.289 67.086 42 67.086z",fill:"currentColor"}),(0,L.jsx)("circle",{cx:"25",cy:"38",r:"5",fill:"currentColor"}),(0,L.jsx)("circle",{cx:"59",cy:"38",r:"5",fill:"currentColor"}),(0,L.jsx)("circle",{cx:"42",cy:"38",r:"5",fill:"currentColor"})]})}function B({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{stroke:"currentColor",strokeWidth:"7.88",strokeLinecap:"round",d:"M4.06 80.06V3.94"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M84 3.94a3.94 3.94 0 01-3.94 3.94H3.94a3.94 3.94 0 010-7.88h76.12A3.94 3.94 0 0184 3.94z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 41.12c18.844 0 34.12-15.276 34.12-34.12 0-18.844-15.276-34.12-34.12-34.12-18.844 0-34.12 15.276-34.12 34.12 0 18.844 15.276 34.12 34.12 34.12zM8 49c23.196 0 42-18.804 42-42S31.196-35 8-35-34-16.196-34 7s18.804 42 42 42z",fill:"currentColor"}),(0,L.jsx)("circle",{cx:"35.5",cy:"36.5",r:"10.5",fill:"currentColor"})]})}function D({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{d:"M45.676 55.455h-7.363c-1.735 0-3.393 1.526-3.317 3.317.076 1.8 1.46 3.317 3.317 3.317h7.363c1.734 0 3.393-1.526 3.317-3.317-.076-1.791-1.45-3.317-3.317-3.317z",fill:"currentColor"}),(0,L.jsx)("path",{d:"M38.34 40.036H42l-3.317-3.317v22.053c0 1.734 1.526 3.392 3.317 3.317 1.8-.076 3.317-1.46 3.317-3.317v-7.449-11.874-2.73c0-1.79-1.517-3.316-3.317-3.316H38.34c-1.735 0-3.393 1.525-3.317 3.316.076 1.8 1.46 3.317 3.317 3.317zM39.658 25.49c0 .037 0 .066-.01.104.039-.294.077-.588.124-.882a1.05 1.05 0 01-.085.294c.114-.265.227-.53.332-.796-.029.057-.057.123-.105.17.17-.227.341-.445.521-.672-.066.085-.132.142-.208.208.227-.17.445-.34.673-.521a1.652 1.652 0 01-.17.104c.265-.113.53-.227.795-.331-.104.038-.19.066-.294.085.294-.038.588-.076.882-.123a.766.766 0 01-.209 0c.294.038.588.076.882.123a1.048 1.048 0 01-.294-.085c.265.113.53.227.796.331-.057-.028-.123-.057-.17-.104.227.17.445.341.672.521-.085-.066-.142-.132-.208-.208.17.227.34.445.521.673a1.618 1.618 0 01-.104-.171c.113.265.227.53.331.796a1.725 1.725 0 01-.085-.294c.038.294.076.588.123.882a.766.766 0 010-.209c-.038.294-.076.588-.123.881.02-.104.038-.198.085-.293-.113.265-.227.53-.331.796.028-.057.057-.123.104-.17-.17.227-.341.445-.521.672.066-.085.132-.142.208-.209-.227.171-.445.342-.673.522.057-.038.114-.076.171-.104-.265.113-.53.227-.796.331.104-.038.19-.066.294-.085-.294.038-.588.076-.882.123a.766.766 0 01.209 0c-.294-.038-.588-.076-.882-.123.105.019.2.038.294.085-.265-.113-.53-.227-.796-.331.057.028.123.056.17.104-.227-.17-.445-.341-.672-.521.085.066.142.132.209.208-.171-.227-.342-.445-.522-.673.038.057.076.114.105.17-.114-.265-.228-.53-.332-.795.038.104.066.19.085.294a28.063 28.063 0 00-.123-.882c0 .029.01.066.01.104.047.882.34 1.716.976 2.341.578.578 1.516 1.005 2.34.976.863-.038 1.744-.322 2.341-.976.578-.625 1.023-1.469.976-2.34-.057-1.147-.436-2.209-1.26-3.033a4.33 4.33 0 00-3.033-1.26c-2.379 0-4.227 1.961-4.293 4.292-.066 2.322 1.98 4.255 4.236 4.293 1.109.02 2.275-.436 3.052-1.222.843-.853 1.232-1.886 1.289-3.07.047-.825-.398-1.773-.977-2.341-.578-.578-1.516-1.005-2.34-.977-1.867.086-3.213 1.46-3.308 3.317z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42 76.12c18.844 0 34.12-15.276 34.12-34.12C76.12 23.156 60.844 7.88 42 7.88 23.156 7.88 7.88 23.156 7.88 42c0 18.844 15.276 34.12 34.12 34.12zM42 84c23.196 0 42-18.804 42-42S65.196 0 42 0 0 18.804 0 42s18.804 42 42 42z",fill:"currentColor"})]})}function H({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42 76.12c18.844 0 34.12-15.276 34.12-34.12C76.12 23.156 60.844 7.88 42 7.88 23.156 7.88 7.88 23.156 7.88 42c0 18.844 15.276 34.12 34.12 34.12zM42 84c23.196 0 42-18.804 42-42S65.196 0 42 0 0 18.804 0 42s18.804 42 42 42z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.896 25.676a3.94 3.94 0 10-5.572 5.572L36.88 42.806 26.13 53.558a3.94 3.94 0 105.572 5.572l10.751-10.752L53.205 59.13a3.94 3.94 0 105.572-5.572L48.025 42.806l11.558-11.558a3.94 3.94 0 00-5.572-5.572L42.453 37.234 30.896 25.676z",fill:"currentColor"})]})}function M({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34 76.12c14.426 0 26.12-11.694 26.12-26.12S48.426 23.88 34 23.88 7.88 35.574 7.88 50 19.574 76.12 34 76.12zM34 84c18.778 0 34-15.222 34-34S52.778 16 34 16 0 31.222 0 50s15.222 34 34 34z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.702 31.381a3.94 3.94 0 013.94 3.94v11.245a3.94 3.94 0 01-7.88 0V35.321a3.94 3.94 0 013.94-3.94zM74.086 3.94a3.94 3.94 0 00-7.88 0v5.666H60.94a3.94 3.94 0 000 7.88h5.266v5.266a3.94 3.94 0 007.88 0v-5.266h5.666a3.94 3.94 0 000-7.88h-5.666V3.94z",fill:"currentColor"})]})}function z({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42 76.125c18.847 0 34.125-15.278 34.125-34.125S60.847 7.875 42 7.875 7.875 23.153 7.875 42 23.153 76.125 42 76.125zM42 84c23.196 0 42-18.804 42-42S65.196 0 42 0 0 18.804 0 42s18.804 42 42 42z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41.938 19a3.938 3.938 0 013.937 3.938v15.75a3.938 3.938 0 01-7.875 0v-15.75A3.938 3.938 0 0141.938 19z",fill:"currentColor"})]})}function U({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 20 20",fill:"none",children:[(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"M14.72 7.391c.518 0 .938-.42.938-.938V.938a.938.938 0 00-1.876 0v5.515c0 .518.42.938.938.938zm-9.26.029c.518 0 .938-.42.938-.938V.966a.938.938 0 00-1.876 0v5.516c0 .518.42.938.938.938z"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"M4.523.938c0 .518.42.938.939.938h9.076a.938.938 0 100-1.876H5.462a.938.938 0 00-.939.938z"}),(0,L.jsx)("circle",{r:"1.547",transform:"matrix(-1 0 0 1 15.836 18.442)",fill:"currentColor"})]})}function V({className:e}){return(0,L.jsx)("svg",{className:e,width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,L.jsx)("path",{d:"M11.8125 6.5C11.8125 3.3125 9.1875 0.6875 6 0.6875C2.78906 0.6875 0.1875 3.3125 0.1875 6.5C0.1875 9.71094 2.78906 12.3125 6 12.3125C9.1875 12.3125 11.8125 9.71094 11.8125 6.5ZM10.6875 6.5C10.6875 7.53125 10.3594 8.46875 9.77344 9.26562L9.58594 8.49219L7.59375 8.72656L6.75 10.5547L7.45312 10.9766C6.51562 11.2812 5.46094 11.2812 4.52344 10.9766L5.22656 10.5547L4.38281 8.72656L2.39062 8.49219L2.20312 9.26562C1.61719 8.46875 1.3125 7.53125 1.3125 6.5L1.92188 7.03906L3.375 5.65625L3 3.6875L2.17969 3.75781C2.76562 2.96094 3.60938 2.35156 4.54688 2.04688L4.24219 2.79688L6 3.75781L7.73438 2.79688L7.42969 2.04688C8.39062 2.35156 9.21094 2.96094 9.79688 3.75781L8.97656 3.6875L8.60156 5.65625L10.0547 7.03906L10.6641 6.5H10.6875ZM4.85156 8.14062H7.125L7.80469 6.00781L6 4.67188L4.17188 6.00781L4.85156 8.14062Z",fill:"currentColor"})})}function F({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42 76.125c18.847 0 34.125-15.278 34.125-34.125S60.847 7.875 42 7.875 7.875 23.153 7.875 42 23.153 76.125 42 76.125zM42 84c23.196 0 42-18.804 42-42S65.196 0 42 0 0 18.804 0 42s18.804 42 42 42z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41.938 42a3.938 3.938 0 013.937 3.938v15.75a3.938 3.938 0 01-7.875 0v-15.75A3.938 3.938 0 0141.938 42z",fill:"currentColor"})]})}function G({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M29.56 33.5a3.94 3.94 0 01-3.94-3.94V6.94a3.94 3.94 0 017.88 0v22.62a3.94 3.94 0 01-3.94 3.94zM53.56 33.5a3.94 3.94 0 01-3.94-3.94V6.94a3.94 3.94 0 017.88 0v22.62a3.94 3.94 0 01-3.94 3.94z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M57 6.94a3.94 3.94 0 01-3.94 3.94H30.44a3.94 3.94 0 110-7.88h22.62A3.94 3.94 0 0157 6.94zM29.56 50.493a3.94 3.94 0 00-3.94 3.94v22.62a3.94 3.94 0 007.88 0v-22.62a3.94 3.94 0 00-3.94-3.94zM53.56 51a3.94 3.94 0 00-3.94 3.94v22.62a3.94 3.94 0 007.88 0V54.94A3.94 3.94 0 0053.56 51z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M56.5 78.06a3.94 3.94 0 00-3.94-3.94H29.94a3.94 3.94 0 000 7.88h22.62a3.94 3.94 0 003.94-3.94zM32.507 53.94a3.94 3.94 0 01-3.94 3.94H5.947a3.94 3.94 0 010-7.88h22.62a3.94 3.94 0 013.94 3.94zM32.625 29.94a3.94 3.94 0 01-3.94 3.94H6.065a3.94 3.94 0 010-7.88h22.62a3.94 3.94 0 013.94 3.94z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.94 27a3.94 3.94 0 013.94 3.94v22.62a3.94 3.94 0 11-7.88 0V30.94A3.94 3.94 0 015.94 27zM50.5 53.94a3.94 3.94 0 003.94 3.94h22.62a3.94 3.94 0 000-7.88H54.44a3.94 3.94 0 00-3.94 3.94zM50.5 29.94a3.94 3.94 0 003.94 3.94h22.62a3.94 3.94 0 000-7.88H54.44a3.94 3.94 0 00-3.94 3.94z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M77.56 27a3.94 3.94 0 00-3.94 3.94v22.62a3.94 3.94 0 007.88 0V30.94A3.94 3.94 0 0077.56 27z",fill:"currentColor"})]})}function W({className:e}){return(0,L.jsx)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:(0,L.jsx)("path",{d:"M28 14C12.536 14 0 26.536 0 42s12.536 28 28 28 28-12.536 28-28h25a3 3 0 003-3V17a3 3 0 00-3-3H28zm0 7v11a3 3 0 003 3h1a3 3 0 003-3V21h42v14H51.675a3 3 0 00-2.97 3.425l.082.57c.142.989.213 1.992.213 3.005 0 11.598-9.402 21-21 21S7 53.598 7 42s9.402-21 21-21z",fill:"currentColor"})})}function Z({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.433 56.013a3.987 3.987 0 01-3.988-3.987V3.987a3.987 3.987 0 117.975 0v48.039a3.987 3.987 0 01-3.987 3.987zM80.013 56.23a3.987 3.987 0 01-3.988-3.987V4.205a3.988 3.988 0 017.975 0v48.038a3.987 3.987 0 01-3.987 3.988z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M84 3.987a3.988 3.988 0 01-3.987 3.988H4.987a3.987 3.987 0 010-7.975h75.025A3.988 3.988 0 0184 3.987z",fill:"currentColor"}),(0,L.jsx)("circle",{cx:"42.5",cy:"77.5",r:"6.5",fill:"currentColor"})]})}function J({className:e}){return(0,L.jsx)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:(0,L.jsx)("path",{d:"M38.408 25.948c-.556 3.722-3.721 6.375-7.315 6.546.898 3.337 3.08 4.663 5.732 5.433.257.085.214.342.214.342l-.427 2.652s-.043.214-.385.172c-9.155-1.027-15.358-8-14.203-16.47 1.07-5.861 5.647-8.129 9.882-7.53 4.235.684 7.144 4.62 6.502 8.855zM9.19 32.495c.855 3.337 3.123 4.663 5.732 5.433.257.085.214.342.214.342l-.385 2.652s-.043.214-.385.172C5.211 40.108-.949 33.135.12 24.665c1.113-5.903 5.733-8.17 9.925-7.572 4.236.684 7.145 4.62 6.46 8.855-.556 3.765-3.679 6.417-7.315 6.546zM45.592 57.676c.556-3.722 3.721-6.375 7.315-6.546-.898-3.336-3.08-4.663-5.732-5.433-.257-.085-.214-.342-.214-.342l.427-2.652s.043-.214.385-.171c9.155 1.026 15.358 8 14.203 16.47-1.07 5.86-5.647 8.128-9.882 7.53-4.235-.685-7.144-4.621-6.502-8.856zM74.81 51.13c-.855-3.336-3.123-4.663-5.732-5.433-.257-.085-.214-.342-.214-.342l.385-2.652s.043-.214.385-.171c9.155.984 15.315 7.957 14.246 16.427-1.113 5.904-5.733 8.171-9.925 7.572-4.236-.684-7.145-4.62-6.46-8.855.556-3.765 3.679-6.417 7.315-6.546z",fill:"currentColor"})})}function K({className:e}){return(0,L.jsx)("svg",{className:e,width:"12",height:"11",viewBox:"0 0 12 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,L.jsx)("path",{d:"M10.125 0.25H1.875C1.24219 0.25 0.75 0.765625 0.75 1.375V9.625C0.75 10.2578 1.24219 10.75 1.875 10.75H10.125C10.7344 10.75 11.25 10.2578 11.25 9.625V1.375C11.25 0.765625 10.7344 0.25 10.125 0.25Z",fill:"#FF596C"})})}function Q({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 20 20",fill:"none",children:[(0,L.jsx)("path",{d:"M8.482 5.825c.98-.015 1.264.498 1.69.832l1.805 1.717.45-.95.085-.133a.735.735 0 01.49-.275l.36-.042a.476.476 0 01.5.305l1.38 3.668a.956.956 0 01-.196.724l-3.016 3.86a.986.986 0 01-1.38.166l-4.371-1.92c-1.015-.504-2.282-.955-1.208-2.161-.497-.453-.742-.88-.736-1.281.007-.402.207-.745.6-1.03-.18-.76-.042-1.35.417-1.77.46-.42 1.06-.563 1.8-.428.234-.845.678-1.272 1.33-1.282zm10.126 8.764a.476.476 0 00-.082-.668l-1.26-.985a.476.476 0 00-.669.082l-3.08 3.943a.476.476 0 00.082.668l1.261.985a.476.476 0 00.668-.082l3.08-3.943z",stroke:"currentColor",strokeWidth:"1.36"}),(0,L.jsx)("path",{d:"M2.536 10.813c-.317.316-.834.32-1.11-.034A6.483 6.483 0 1112.38 3.98c.196.403-.037.865-.46 1.008-.425.143-.878-.09-1.09-.484a4.86 4.86 0 10-8.245 5.119c.26.364.267.873-.05 1.19z",fill:"currentColor"})]})}function Y({className:e}){return(0,L.jsx)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:(0,L.jsx)("path",{d:"M32.71 25.67c.671-.673 1.821-.197 1.821.753v10.288c0 .59.478 1.067 1.067 1.067h30.425c.589 0 1.066.477 1.066 1.066V46c0 .59-.477 1.067-1.066 1.067H35.598c-.59 0-1.067.477-1.067 1.066v10.288c0 .95-1.15 1.426-1.82.753L16.75 43.175a1.066 1.066 0 010-1.506l15.96-15.999z",fill:"red"})})}function X({className:e}){return(0,L.jsx)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:(0,L.jsx)("path",{d:"M50.296 59.168c-.673.675-1.827.198-1.827-.756V48.137c0-.591-.48-1.07-1.07-1.07H16.98a1.07 1.07 0 01-1.07-1.07v-7.15c0-.59.48-1.07 1.07-1.07H47.4c.59 0 1.07-.478 1.07-1.07V26.433c0-.954 1.154-1.43 1.827-.755l15.95 15.99a1.07 1.07 0 010 1.51l-15.95 15.99z",fill:"currentColor"})})}function q({className:e}){return(0,L.jsx)("svg",{className:e,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,L.jsx)("g",{id:"Event Icons",children:(0,L.jsx)("path",{id:"new icon",d:"M19.5428 16.8238C19.2861 17.0813 18.8468 16.8996 18.8468 16.5362V12.6215C18.8468 12.3967 18.664 12.2139 18.4392 12.2139H6.85139C6.74328 12.2139 6.6396 12.1709 6.56316 12.0945C6.48672 12.018 6.44377 11.9144 6.44377 11.8063V9.08283C6.44377 8.85807 6.62663 8.67521 6.85139 8.67521H18.4392C18.664 8.67521 18.8468 8.49273 18.8468 8.26759V4.3533C18.8468 3.98988 19.2861 3.80816 19.5428 4.0653L25.619 10.1567C25.6952 10.2331 25.738 10.3366 25.738 10.4445C25.738 10.5524 25.6952 10.6559 25.619 10.7324L19.5428 16.8238ZM12.8095 15.4916C13.0651 15.2352 13.5032 15.4162 13.5032 15.7784V19.6977C13.5032 19.9221 13.6853 20.1038 13.9097 20.1038H25.5002C25.7245 20.1038 25.9062 20.2859 25.9062 20.5103V23.2364C25.9062 23.4607 25.7245 23.6424 25.5002 23.6424H13.9097C13.6849 23.6424 13.5032 23.8245 13.5032 24.0485V27.9682C13.5032 28.3301 13.0651 28.5114 12.8099 28.255L6.72987 22.1598C6.65401 22.0837 6.61141 21.9806 6.61141 21.8731C6.61141 21.7656 6.65401 21.6626 6.72987 21.5864L12.8095 15.4916Z",fill:"currentColor"})})})}function ee({className:e}){return(0,L.jsx)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:(0,L.jsx)("path",{d:"M42.002 27.88a5.675 5.675 0 100-11.348 5.675 5.675 0 000 11.349zM54.594 42.203l-5.35-9.999a5.563 5.563 0 00-4.919-2.972h-4.701a5.563 5.563 0 00-4.918 2.972l-5.297 9.998c-.648 1.244-.216 2.757 1.027 3.405.378.217.81.325 1.19.325.918 0 1.783-.487 2.215-1.352l3.134-5.89-2.486 25.94a2.968 2.968 0 002.649 3.243h.27c1.513 0 2.81-1.135 2.918-2.648l1.622-16.807 1.62 16.807c.163 1.513 1.406 2.648 2.92 2.648h.27a2.967 2.967 0 002.648-3.242L46.92 38.69l3.134 5.89c.432.865 1.351 1.352 2.216 1.352.378 0 .81-.108 1.189-.325 1.351-.648 1.783-2.161 1.135-3.404zM71.111 27.88a5.675 5.675 0 100-11.348 5.675 5.675 0 000 11.349zM83.704 42.203l-5.35-9.999a5.563 5.563 0 00-4.919-2.972h-4.701a5.563 5.563 0 00-4.918 2.972l-5.297 9.998c-.648 1.244-.216 2.757 1.027 3.405.378.217.81.325 1.189.325.919 0 1.784-.487 2.216-1.352l3.134-5.89L63.6 64.63a2.968 2.968 0 002.649 3.243h.27c1.513 0 2.81-1.135 2.918-2.648l1.621-16.807 1.622 16.807c.162 1.513 1.405 2.648 2.918 2.648h.27a2.967 2.967 0 002.648-3.242L76.03 38.69l3.135 5.89c.432.865 1.351 1.352 2.216 1.352.378 0 .81-.108 1.189-.325 1.35-.648 1.783-2.161 1.135-3.404zM12.892 27.88a5.675 5.675 0 100-11.348 5.675 5.675 0 000 11.349zM25.484 42.203l-5.35-9.999a5.563 5.563 0 00-4.918-2.972h-4.702a5.563 5.563 0 00-4.918 2.972L.3 42.202c-.649 1.244-.217 2.757 1.026 3.405.379.217.811.325 1.19.325.918 0 1.783-.487 2.215-1.352l3.135-5.89L5.38 64.63a2.967 2.967 0 002.648 3.243h.27c1.513 0 2.81-1.135 2.918-2.648l1.622-16.807 1.621 16.807c.162 1.513 1.405 2.648 2.918 2.648h.27a2.968 2.968 0 002.649-3.242L17.81 38.69l3.134 5.89c.433.865 1.351 1.352 2.216 1.352.378 0 .81-.108 1.19-.325 1.35-.648 1.782-2.161 1.134-3.404z",fill:"currentColor"})})}function te({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("circle",{cx:"12.5",cy:"29.5",r:"4.5",fill:"currentColor"}),(0,L.jsx)("path",{d:"M19.2 3.645v76.71c0 .908.737 1.645 1.645 1.645h53.06c.908 0 1.645-.737 1.645-1.645V3.645c0-.908-.737-1.645-1.645-1.645h-53.06c-.908 0-1.645.737-1.645 1.645zM56.475 5.29c-.78 4.32-4.56 7.61-9.1 7.61s-8.32-3.29-9.1-7.61h18.2zm0 38.355c-.78 4.32-4.56 7.61-9.1 7.61s-8.32-3.29-9.1-7.61h18.2zm-18.2-3.29c.78-4.32 4.56-7.61 9.1-7.61s8.32 3.29 9.1 7.61h-18.2zm0 38.355c.78-4.32 4.56-7.61 9.1-7.61s8.32 3.29 9.1 7.61h-18.2zm21.525 0c-.81-6.141-6.066-10.9-12.425-10.9-6.358 0-11.615 4.759-12.425 10.9H22.49V43.645h12.46c.81 6.141 6.067 10.9 12.425 10.9 6.358 0 11.615-4.759 12.425-10.9h12.46V78.71H59.8zm12.46-38.355H59.8c-.81-6.141-6.067-10.9-12.425-10.9-6.358 0-11.615 4.759-12.425 10.9H22.49V5.29h12.46c.81 6.141 6.067 10.9 12.425 10.9 6.358 0 11.615-4.759 12.425-10.9h12.46v35.065z",stroke:"currentColor",fill:"currentColor",strokeWidth:"1.905"})]})}function ne({className:e}){return(0,L.jsx)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M83.132 20.886c-.528-.192-1.152-.125-1.595.167L63.913 32.67c-.336.222-.527.546-.527.886v16.758c0 .342.193.665.527.886l17.624 11.618c.274.181.618.276.967.276.213 0 .426-.034.628-.109.528-.189.868-.602.868-1.053V21.94c0-.453-.338-.864-.868-1.053zM76.12 34.062l-4.854 3.2v9.348l4.854 3.2V34.062zM7.88 23.88v36.11h43.727V23.88H7.88zM6.042 16h47.403c3.337 0 6.042 2.419 6.042 5.403v41.064c0 2.984-2.705 5.403-6.042 5.403H6.042C2.705 67.87 0 65.451 0 62.467V21.403C0 18.42 2.705 16 6.042 16z",fill:"currentColor"})})}function re({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M57.61 50.355a3.94 3.94 0 10-5.571 5.572l4.783 4.783-4.467 4.467a3.94 3.94 0 005.572 5.572l4.467-4.467 4.467 4.467a3.94 3.94 0 105.572-5.572l-4.467-4.467 4.783-4.783a3.94 3.94 0 10-5.572-5.572l-4.783 4.783-4.783-4.783zM3.433 65.013a3.987 3.987 0 01-3.988-3.987V12.988a3.987 3.987 0 017.975 0v48.038a3.987 3.987 0 01-3.987 3.987zM79.013 65.23a3.988 3.988 0 01-3.988-3.987V13.205a3.988 3.988 0 017.975 0v48.038a3.988 3.988 0 01-3.987 3.988z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M83 12.988a3.987 3.987 0 01-3.987 3.987H3.987a3.987 3.987 0 110-7.975h75.025A3.988 3.988 0 0183 12.988z",fill:"currentColor"})]})}function ie({className:e}){return(0,L.jsxs)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:[(0,L.jsx)("path",{d:"M63.867 28.523a18.094 18.094 0 00-6.232 1.066c-.192-.355-.438-.71-.656-1.066a24.6 24.6 0 00-44.526 8.637A15.061 15.061 0 001 51.758 15.06 15.06 0 0016.033 66.79h47.834a19.134 19.134 0 000-38.267zm0 32.8H16.033a9.566 9.566 0 01-4.1-18.204 9.265 9.265 0 014.1-.93 7.481 7.481 0 011.367 0 19.134 19.134 0 0137.61-4.947 13.667 13.667 0 118.857 24.081z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M56.979 28.523c.072.119.148.237.224.355.152.237.304.474.432.711a18.094 18.094 0 016.232-1.066 19.133 19.133 0 010 38.267H16.033A15.06 15.06 0 011 51.756 15.06 15.06 0 0112.453 37.16a24.6 24.6 0 0144.526-8.637zm-45.351 7.848a25.576 25.576 0 0146.162-8.39l.01.015.01.016a20.33 20.33 0 00.256.403 19.072 19.072 0 015.804-.868 20.11 20.11 0 01-.003 40.22H16.032A16.037 16.037 0 01.024 51.757v-.003A16.037 16.037 0 0111.628 36.37zm.305 6.748a9.567 9.567 0 004.1 18.204h47.834a13.666 13.666 0 10-8.856-24.08A19.134 19.134 0 0017.4 42.19a7.468 7.468 0 00-1.368 0 9.265 9.265 0 00-4.1.93zm51.934 17.228a12.69 12.69 0 10-8.224-22.36l-1.175.998-.4-1.489a18.157 18.157 0 00-35.692 4.695v1.069l-1.065-.098a6.517 6.517 0 00-1.189 0l-.047.004h-.047a8.29 8.29 0 00-3.668.832l-.007.003a8.59 8.59 0 003.682 16.346h47.832z",fill:"currentColor"})]})}function ae({className:e}){return(0,L.jsx)("svg",{className:e,viewBox:"0 0 84 84",fill:"none",children:(0,L.jsx)("path",{d:"M71 0H14v84h57V0z",fill:"gold"})})}const oe=e=>{switch(e){case i.ADDED_TIME:return(0,L.jsx)($,{className:`${o} ${s}`,"data-testid":"added"});case i.CHANCE:return(0,L.jsx)(S,{className:`${o} ${l}`,"data-testid":"chance"});case i.COMMENTARY:return(0,L.jsx)(R,{className:`${o} ${d}`,"data-testid":"commentary"});case i.CORNER:return(0,L.jsx)(B,{className:`${o} ${c}`,"data-testid":"corner"});case i.DISALLOWED:return(0,L.jsx)(H,{className:`${o} ${p}`,"data-testid":"disallowed"});case i.EXTRA_TIME:return(0,L.jsx)(M,{className:`${o} ${m}`,"data-testid":"extra"});case i.FREE_KICK:return(0,L.jsx)(U,{className:`${o} ${f}`,"data-testid":"free"});case i.FULL_TIME:return(0,L.jsx)(z,{className:`${o} ${g}`,"data-testid":"full"});case i.GOAL:return(0,L.jsx)(V,{className:`${o} ${h}`,"data-testid":"goal"});case i.HALF_TIME:return(0,L.jsx)(F,{className:`${o} ${v}`,"data-testid":"half"});case i.INFO:return(0,L.jsx)(D,{className:`${o} ${u}`,"data-testid":"info"});case i.INJURY:return(0,L.jsx)(G,{className:`${o} ${y}`,"data-testid":"injury"});case i.KICK_OFF:return(0,L.jsx)(W,{className:`${o} ${b}`,"data-testid":"kick"});case i.PENALTY:return(0,L.jsx)(Z,{className:`${o} ${x}`,"data-testid":"penalty"});case i.QUOTATION:return(0,L.jsx)(J,{className:`${o} ${N}`,"data-testid":"quotation"});case i.RED_CARD:return(0,L.jsx)(K,{className:`${o} ${A}`,"data-testid":"red"});case i.SAVE:return(0,L.jsx)(Q,{className:`${o} ${C}`,"data-testid":"save"});case i.SUBSTITUTION_OFF:return(0,L.jsx)(Y,{className:`${o} ${O}`,"data-testid":"off"});case i.SUBSTITUTION_ON:return(0,L.jsx)(X,{className:`${o} ${T}`,"data-testid":"on"});case i.SUBSTITUTION:return(0,L.jsx)(q,{className:`${o} ${I}`,"data-testid":"substitution"});case i.TEAM_LINE_UP:return(0,L.jsx)(ee,{className:`${o} ${E}`,"data-testid":"team"});case i.THROW_IN:return(0,L.jsx)(te,{className:`${o} ${w}`,"data-testid":"throw"});case i.VAR:return(0,L.jsx)(ne,{className:`${o} ${_}`,"data-testid":"var"});case i.WOODWORK:return(0,L.jsx)(re,{className:`${o} ${k}`,"data-testid":"woodwork"});case i.WEATHER_UPDATE:return(0,L.jsx)(ie,{className:`${o} ${P}`,"data-testid":"weather"});case i.YELLOW_CARD:return(0,L.jsx)(ae,{className:`${o} ${j}`,"data-testid":"yellow"});default:return null}},se=({name:e})=>(0,L.jsx)(r.Suspense,{fallback:(0,L.jsx)("div",{}),children:oe(e)});var le=(0,r.memo)(se)},"9/e/":function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n("mXGw"),i=(n("62jW"),n("SCTN")),a=n("b3N3"),o=n("CqJp"),s=n("BhVK"),l=n("/Iuz"),d=n("Fx+d"),c=n("oYCi");function u({sponsor:e,id:t}){const{trackConversion:n}=(0,s.A)(),[u,p]=(0,r.useState)(!1),{id:m,image:g,url:f,text:h,maxWidth:v,positioning:y}=e,[b,x]=(0,i.Wx)({threshold:0,triggerOnce:!0});(0,r.useEffect)(()=>{!0!==x||u||((0,l.u)("sponsor_view",{event_category:"view",event_label:m??"Sponsor",element_id:t}),n({elementId:t,elementContext:"sponsor",actionSource:d.S.SPONSOR,actionType:d.X.VIEW,actionContext:{sponsor_id:m}}),p(!0))},[x,m,t,u,n]);const N=(0,r.useCallback)(()=>{(0,l.u)("sponsor_click",{event_category:"click",event_label:m??"Sponsor",element_id:t}),n({elementId:t,elementContext:"sponsor",actionSource:d.S.SPONSOR,actionType:d.X.CLICK,actionContext:{sponsor_id:m}})},[t,m,n]);if(!g)return null;const A=!!f;return(0,c.jsxs)(o.mo,{className:`${a.n.BLOCK} ${a.n.BLOCK}--${y}`,ref:b,$positioning:y,children:[h&&(0,c.jsx)(o.EY,{className:a.n.TEXT,children:h}),(0,c.jsx)(o.N_,{className:a.n.LINK,"data-testid":"sponsor-link",onClick:N,$isLink:A,style:{maxWidth:v},...A?{href:f,target:"_blank"}:{},children:(0,c.jsx)(o._V,{className:a.n.LINK_IMAGE,src:g,"data-testid":"sponsor-image"})})]})}},"9DRM":function(e,t,n){"use strict";n.d(t,{Hf:function(){return d},Wh:function(){return a},mn:function(){return l},rS:function(){return o},sX:function(){return s}});var r=n("dIqr"),i=n("wzRx");const a=e=>e===r.Prediction.STATE_STARTED,o=e=>e===r.Prediction.STATE_STOPPED,s=e=>e===r.Prediction.STATE_REVEALED,l=e=>{const{correctAnswer:t}=e.getCustomFields();return"number"==typeof t?t:e.correctOption};function d({elementInstance:e}){const t=e.getState(),[n,r]=(0,i.A)(e.getCustomFields());return{id:e.id,type:e.type,state:t,pollId:e.enmasseId,options:e.getOptions(),results:e.getResults()||[],question:e.getQuestion(),duration:e.duration,userVote:e.getUserVote(),isActive:a(t),isStopped:o(t),isRevealed:s(t),hasResults:e.hasResults(),publishedAt:e.publishedAt,isUserVoted:e.hasUserVoted(),contentType:e.contentType,correctOption:l(e),revealResultsMode:e.revealResultsMode,customStyles:n,customFields:r}}},"9aI2":function(e,t,n){"use strict";n.d(t,{b:function(){return r}});const r={ROOT:"/",USER:"/user",NO_CONNECTION:"/no-connection",NO_EVENT:"/no-event",UPCOMING_EVENT:"/upcoming-event",PRIZING:"/prizing",TUTORIAL:"/how-to-play",...n("klPl").b}},A8vD:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var r=n("fict");const i=e=>t=>(0,r.A)(`${e.toString()}_${t}`)},BL8N:function(e,t,n){var r=n("mXGw");function i(e){return r.createElement("svg",e,r.createElement("path",{d:"M6 1.8125C8.57812 1.8125 10.6875 3.92188 10.6875 6.5C10.6875 9.10156 8.57812 11.1875 6 11.1875C3.39844 11.1875 1.3125 9.10156 1.3125 6.5C1.3125 3.92188 3.39844 1.8125 6 1.8125ZM6 0.6875C2.78906 0.6875 0.1875 3.3125 0.1875 6.5C0.1875 9.71094 2.78906 12.3125 6 12.3125C9.1875 12.3125 11.8125 9.71094 11.8125 6.5C11.8125 3.3125 9.1875 0.6875 6 0.6875ZM6 4.625C4.94531 4.625 4.125 5.46875 4.125 6.5C4.125 7.55469 4.94531 8.375 6 8.375C7.03125 8.375 7.875 7.55469 7.875 6.5C7.875 5.46875 7.03125 4.625 6 4.625Z",fill:"currentColor"}))}i.defaultProps={width:"12",height:"13",viewBox:"0 0 12 13",fill:"none"},e.exports=i,i.default=i},BhVK:function(e,t,n){"use strict";var r=n("mXGw"),i=n("+bMA"),a=n("DXx6"),o=n("oRQk"),s=n("ED6d"),l=n("dUZd"),d=n("xs66"),c=n("BtVd"),u=n("l/jD");t.A=()=>{const{conversionTracking:e}=(0,s.A)(),{serviceUrl:t,enabledConversionTracking:n,enabledDeviceTracking:p}=e||{},m=(0,i.d4)(u.H3),g=(0,i.d4)(c._s),f=(0,i.d4)(d.Ni),h=(0,i.d4)(d.CE),v=(0,i.d4)(l.LE),y=(0,i.d4)(l.jy),b=(0,r.useMemo)(()=>p?(()=>{if("undefined"==typeof window||"undefined"==typeof navigator)return{};const e=(new a.O).getResult();return{useragent:e?.ua||navigator.userAgent,platform:"WEB",browsername:e?.browser.name||"Unknown",browserversion:e?.browser.version||"",osname:e?.os.name||"Unknown",osversion:e?.os.version||"",devicename:e?.device.model||"",devicebrand:e?.device.vendor||"",language:navigator.language,source:document.referrer&&new URL(document.referrer).hostname||"",referrer:document.referrer||""}})():void 0,[p]);return{trackConversion:(0,r.useCallback)(async e=>{if(!n)return;const r={version:1,userid:h,mic_projectid:m,timestamp:Date.now(),eventname:`${e.elementContext}_${e.actionType}`,eventp1:e.actionSource,eventp2:e.actionContext,eventp3:e.elementId,mic_eventid:g??"",mic_sid:f,mic_user_id:v||"",mic_externalid:y||"",appversion:"1.0.20",...b};if(t)try{await fetch(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})}catch(e){o.A.error("Conversion Tracking failed",e)}else o.A.warn("Conversion Tracking service URL is not set")},[t,n,m,g,b])}}},Bscc:function(e,t,n){"use strict";n.d(t,{$n:function(){return a},L6:function(){return s},Ts:function(){return i},gU:function(){return u},i1:function(){return o},jE:function(){return d},oL:function(){return l},tF:function(){return c}});var r=n("Xrb3");const{init:i,setEvent:a,setLoaded:o,setCountry:s,setAreActionsHandled:l,setStickyScoreBar:d,setStickyPromoAudio:c,setStickyPromoVideo:u}=(0,r.A)("INIT","SET_EVENT","SET_LOADED","SET_COUNTRY","SET_ARE_ACTIONS_HANDLED","SET_STICKY_SCORE_BAR","SET_STICKY_PROMO_AUDIO","SET_STICKY_PROMO_VIDEO",{prefix:"app"})},BtVd:function(e,t,n){"use strict";n.d(t,{$h:function(){return c},DA:function(){return l},DY:function(){return u},Nz:function(){return s},QY:function(){return a},S3:function(){return d},Zc:function(){return r},_s:function(){return i},yq:function(){return o}});const r=e=>e.event,i=e=>r(e).id,a=e=>r(e).isFetched,o=e=>r(e).settings,s=e=>r(e).styles,l=e=>o(e).enableGamification,d=e=>o(e).requireUserLogin,c=e=>o(e).totalQuestions||0,u=e=>o(e).gamificationApiMaxDelay||0},BzQo:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var r=n("prkb"),i=n("EAF/"),a=n("ZYfE"),o=n("3c/i");const s=r.Ay.div.withConfig({displayName:"letter-preview__Letter"})`
  ${i.a8}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
  cursor: ${({$isHint:e,$isDragging:t,$isDisabled:n})=>e||n?"default":t?"grabbing":"grab"};
  opacity: ${({$isDragging:e})=>e?0:1};
  text-transform: uppercase;
  width: 48px;
  height: 48px;
  border-radius: var(--wordQuizButtonBorderRadius, 0);
  border-width: var(--wordQuizButtonBorderWidth, 0);
  transition:
    opacity 0.3s,
    color 0.3s,
    border-color 0.3s,
    background-color 0.3s,
    box-shadow 0.3s;

  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-style: solid;
    border-radius: var(--wordQuizButtonBorderRadius, 0);
    border-width: var(--wordQuizButtonBorderWidth, 0);
    transition: border-color 0.3s;
  }

  color: var(--wordQuizDefaultTextColor, var(--default-text-colour));
  box-shadow: var(--wordQuizButtonBoxShadow, var(--default-box-shadow));

  ${a.A`
    --gradient-direction: var(--wordQuizButtonGradientDirection, var(--gradient-direction-default));
    --gradient-color: var(--wordQuizButtonBackgroundColor, var(--gradient-default));
  `}

  &:after {
    border-color: var(--wordQuizButtonBorderColor, transparent);
  }

  &:focus {
    :after {
      border-color: var(--wordQuizButtonBorderColor, transparent);
    }
  }

  ${({$isHint:e,$isDragging:t,$isRevealed:n,$isSubmitted:i,$isDisabled:s})=>e||n||i||s?null:(0,o.T)(r.AH`
          &:hover {
            color: var(--wordQuizHoverTextColor);
            box-shadow: ${t?"none":" var(--wordQuizHoverButtonBoxShadow, none)"};

            ${a.A`
        --gradient-direction: var(--wordQuizButtonGradientDirection, var(--gradient-direction-default));
        --gradient-color: var(--wordQuizHoverButtonBackgroundColor, var(--wordQuizButtonBackgroundColor, var(--gradient-default)));
      `}

            &:after {
              border-color: var(
                --wordQuizHoverButtonBorderColor,
                var(--elementHighlightColor, var(--element-highlight-default))
              );
            }

            &:focus:after {
              border-color: var(
                --wordQuizHoverButtonBorderColor,
                var(--elementHighlightColor, var(--element-highlight-default))
              );
            }
          }
        `)}

  ${({$withHover:e})=>e?r.AH`
          box-shadow: none !important;
        `:null};

  ${({$isCorrect:e})=>e?r.AH`
          color: var(--wordQuizCorrectTextColor, var(--default-text-color));
          box-shadow: var(--wordQuizCorrectButtonBoxShadow);

          ${a.A`
        --gradient-direction: var(--wordQuizButtonGradientDirection, var(--gradient-direction-default));
        --gradient-color: var(--wordQuizCorrectButtonBackgroundColor, var(--gradient-correct));
      `}

          &:after {
            border-color: var(--wordQuizCorrectButtonBorderColor, transparent);
          }

          &:focus {
            :after {
              border-color: var(--wordQuizCorrectButtonBorderColor, transparent);
            }
          }
        `:null};

  ${({$isIncorrect:e})=>e?r.AH`
          color: var(--wordQuizIncorrectTextColor, var(--default-text-color));
          box-shadow: var(--wordQuizIncorrectButtonBoxShadow);

          ${a.A`
        --gradient-direction: var(--buttonGradientDirection, var(--gradient-direction-default));
        --gradient-color: var(--wordQuizIncorrectButtonBackgroundColor, var(--gradient-incorrect));
      `}

          &:after {
            border-color: var(--wordQuizIncorrectButtonBorderColor, transparent);
          }

          &:focus {
            :after {
              border-color: var(--wordQuizIncorrectButtonBorderColor, transparent);
            }
          }
        `:null};

  ${({$isHint:e})=>e?r.AH`
          color: var(
            --wordQuizHintTextColor,
            var(--fkElementTitleColor, var(--element-title-default))
          );
          box-shadow: var(--wordQuizHintBoxShadow) !important;
          border-color: var(--wordQuizHintBorderColor, transparent) !important;
          border-style: solid;
          background: var(--wordQuizHintBackgroundColor, transparent);
          &:after {
            border-color: transparent;
          }
        `:null};
`;var l=n("oYCi"),d=({isHint:e=!1,children:t,isRevealed:n=!1,isSubmitted:r,isCorrectLetter:i,isDisabled:a=!1,isDragging:o=!1,withHover:d=!1})=>{const c=n&&!e&&i,u=n&&!i;return(0,l.jsx)(s,{$isDragging:o,$isRevealed:n,$isSubmitted:r,$isCorrect:c,$isIncorrect:u,$isHint:e,$isDisabled:a,$withHover:d,children:t})}},"CEx/":function(e,t,n){"use strict";n.d(t,{KW:function(){return f},Lk:function(){return p},Ql:function(){return E},S9:function(){return y},Ts:function(){return O},UA:function(){return v},WP:function(){return A},X3:function(){return b},_I:function(){return T},cJ:function(){return d},dq:function(){return g},gq:function(){return m},i3:function(){return s},md:function(){return o},n:function(){return u},o1:function(){return x},qd:function(){return h},tb:function(){return N},vh:function(){return c},vt:function(){return a},xH:function(){return I}});var r=n("Xrb3"),i=n("A8vD");const{create:a,createComplete:o,revokeAll:s,voteElement:l,updateElement:d,revokeElement:c,createElement:u,updateStateElement:p,updateResultsElement:m,updateUserVoteElement:g,removeAllUserVotes:f,removeUserVoteElement:h,removeUserVoteByElementAndEvent:v,removeUserVotesByEvent:y,updateCorrectOptionElement:b,goToNextElementByEvent:x,goToFirstElementByEvent:N,initElements:A,showResults:C,updatePublishedAt:O}=(0,r.A)("CREATE","CREATE_COMPLETE","REVOKE_ALL","VOTE_ELEMENT","UPDATE_ELEMENT","CREATE_ELEMENT","REVOKE_ELEMENT","UPDATE_STATE_ELEMENT","UPDATE_RESULTS_ELEMENT","UPDATE_USER_VOTE_ELEMENT","REMOVE_ALL_USER_VOTES","REMOVE_USER_VOTE_ELEMENT","REMOVE_USER_VOTE_BY_ELEMENT_AND_EVENT","REMOVE_USER_VOTES_BY_EVENT","UPDATE_CORRECT_OPTION_ELEMENT","GO_TO_NEXT_ELEMENT_BY_EVENT","GO_TO_FIRST_ELEMENT_BY_EVENT","INIT_ELEMENTS","SHOW_RESULTS","UPDATE_PUBLISHED_AT",{prefix:"elements"}),T=(0,i.b)(C),I=(0,i.b)(l),E=(0,i.b)(h)},CXuk:function(e,t,n){"use strict";n.d(t,{XF:function(){return a},bw:function(){return i},vA:function(){return o}});const{location:r}=window,i=e=>{r.href=e},a=e=>{window.open(e,"_blank")},o=()=>(r.search||"").replace(/^\?/g,"").split("&").reduce((e,t)=>{const[n,r]=t.split("=");return n&&(e[n]=decodeURIComponent(r)),e},{})},CqJp:function(e,t,n){"use strict";n.d(t,{EY:function(){return l},N_:function(){return s},_V:function(){return o},mo:function(){return d}});var r=n("prkb"),i=n("EAF/"),a=n("b3N3");const o=r.Ay.img.withConfig({displayName:"sponsor__Image"})`
  width: 100%;
  height: auto;
`,s=r.Ay.a.withConfig({displayName:"sponsor__Link"})`
  cursor: ${({$isLink:e})=>e?"pointer":"default"};
`,l=(0,r.Ay)(i.hH).withConfig({displayName:"sponsor__Text"})`
  color: var(--sponsor-title-default);
`,d=r.Ay.div.withConfig({displayName:"sponsor__SponsorWrapper"})`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow: hidden;

  --sponsor-title-default: var(--fkSponsorTextColor, var(--element-body-default));

  ${({$positioning:e})=>e&&(e===a.I.TOP||e===a.I.BOTTOM)&&r.AH`
      flex-direction: column;
    `}

  ${s} {
    ${({$positioning:e})=>e&&(e===a.I.RIGHT||e===a.I.BOTTOM)&&r.AH`
        order: -1;
      `}
  }
`},DcEz:function(e,t,n){"use strict";n.d(t,{S:function(){return g},W:function(){return m}});var r=n("qkuk"),i=n("8fbK"),a=n("bQIR");const o=e=>"open"===e,s=e=>"closed"===e,l=e=>"revealed"===e,d=e=>e.filter(e=>(0,a.W)(e.contentType)),c=e=>e.sort((e,t)=>{const{publishedAt:n}=e,{publishedAt:r}=t,i=e.getCustomFields().order,a=t.getCustomFields().order;return i===a?n-r:i-a}),u=e=>e.map(e=>e.id),p=(e,t)=>(0,r.Zz)(c,(e=>t=>t.filter(t=>t.getCustomFields().quickFireQuizId===e))(e),d)(t),m=(e,t)=>u(p(e,t));function g({elementInstance:e,eventInstance:t}){const n=(0,i.Qf)({elementInstance:e}),r=t.getHistory()||[],{id:a,state:d}=n.customFields,c=p(a,r),m=u(c);return{...n,isActive:o(d),isClosed:s(d),isRevealed:l(d),questionIds:m}}},E2hB:function(e,t,n){"use strict";n.d(t,{E:function(){return i},K:function(){return a}});var r=n("Xrb3");const{getPosition:i,setPosition:a}=(0,r.A)("GET_POSITION","SET_POSITION",{prefix:"scaffold"})},ED6d:function(e,t,n){"use strict";var r=n("+bMA"),i=n("6WEz");t.A=()=>(0,r.d4)(i.H6)},EG7w:function(e,t,n){"use strict";n.d(t,{Gz:function(){return a},Yg:function(){return i},xl:function(){return r}});const r=()=>window.matchMedia("(min-width: 768px)").matches,i=()=>window.matchMedia("(orientation: landscape)").matches,a=()=>{const{userAgent:e}=window.navigator;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)}},EHs7:function(e,t,n){"use strict";var r=n("mXGw"),i=n("EMCP"),a=n("+bMA"),o=n("6WEz");t.A=e=>{const{broadcasters:t=[]}=(0,a.d4)(o.H6),{isDomestic:n}=(0,i.A)();return(0,r.useMemo)(()=>{if(!e)return[];const r=t.find(({id:e})=>"LeaguePass"===e);return n?e.trim().split(",").map(e=>t.find(({id:t})=>t.toLowerCase()===e.trim().toLowerCase())).filter(Boolean):[r]},[t,n,e])}},EMCP:function(e,t,n){"use strict";var r=n("mXGw"),i=n("+bMA"),a=n("X1LX"),o=n("6WEz");t.A=()=>{const[e,t]=(0,r.useState)(!1),n=(0,i.d4)(a.JJ),{prizing:{regions:s,domesticIcon:l,internationalIcon:d}}=(0,i.d4)(o.H6);(0,r.useEffect)(()=>{t(s.some(e=>e.countryCode===n))},[n,s]);const c=(0,r.useMemo)(()=>e?l:d,[e,l,d]);return{isDomestic:e,imageUrl:c}}},EVFA:function(e,t,n){"use strict";n.d(t,{Ce:function(){return u},DD:function(){return l},HR:function(){return s},PN:function(){return c},TR:function(){return o},i9:function(){return i},te:function(){return d},uR:function(){return a}});var r=n("Xrb3");const{fetchProjectScore:i,fetchProjectScoreFail:a,fetchProjectScoreSuccess:o,fetchProjectLastWeekScoreSuccess:s,fetchProjectLastWeekScoreReset:l,fetchEventScore:d,fetchEventScoreFail:c,fetchEventScoreSuccess:u}=(0,r.A)("FETCH_PROJECT_SCORE","FETCH_PROJECT_SCORE_FAIL","FETCH_PROJECT_SCORE_SUCCESS","FETCH_PROJECT_LAST_WEEK_SCORE_SUCCESS","FETCH_PROJECT_LAST_WEEK_SCORE_RESET","FETCH_EVENT_SCORE","FETCH_EVENT_SCORE_FAIL","FETCH_EVENT_SCORE_SUCCESS",{prefix:"score"})},Eacy:function(e,t,n){"use strict";n.d(t,{EY:function(){return o},UC:function(){return a},yB:function(){return i}});var r=n("prkb");const i=r.Ay.div.withConfig({displayName:"inner__InnerWrapper"})`
  position: relative;
  min-height: ${({$withImage:e})=>e?"40px":"48px"};
  height: 100%;

  &.no-min-height {
    margin-top: 8px;
    min-height: auto;
  }

  &:after {
    content: '';
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: var(--fkOptionButtonBorderRadius, 4px);
    transition: opacity 0.8s;
  }
`,a=r.Ay.div.withConfig({displayName:"inner__Content"})`
  position: relative;
  display: grid;
  align-items: center;
  height: 100%;
  min-height: 48px;
  word-break: break-word;
  grid-template-columns: 48px 1fr 48px;

  &.no-min-height {
    min-height: auto;
  }
`,o=r.Ay.div.withConfig({displayName:"inner__Text"})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  height: 100%;
  text-align: center;
  transition: all 0.3s ease;
  grid-column-start: 2;
`},"Fx+d":function(e,t,n){"use strict";n.d(t,{S:function(){return r},X:function(){return i}});let r=function(e){return e.REACTION="reaction",e.SPONSOR="sponsor",e.FORM="form",e.SIGN_UP="sign-up",e.SIGN_IN="sign-in",e.SHARE="share",e.LINK="link",e.ARTICLE="article",e.AD="ad",e.VOTE="vote",e.RESULT="result",e.START="start",e.BUTTON="button",e.FORM_SUBMIT="form_submit",e.DATA_CAPTURE="data_capture_form",e}({}),i=function(e){return e.CLICK="click",e.VIEW="view",e.SUBMIT="submit",e.SHARE="share",e.REACTION="reaction_click",e}({})},GPK5:function(e,t,n){"use strict";n.d(t,{D7:function(){return o},H1:function(){return i},Z3:function(){return a},kd:function(){return r},um:function(){return s}});const r="lvis-id-custom-tab";let i=function(e){return e.PENDING="pending",e.LOGGED_IN="logged-in",e.LOGGED_OUT="logged-out",e}({}),a=function(e){return e.HIDDEN="hidden",e.OPENED="opened",e.CLOSED="closed",e}({});const o={state:i.PENDING,iframe:a.HIDDEN,info:{},codes:{},error:"",usernameModal:!1,unlockCodeOpened:!1,unlockCodeLoading:!1,unlockCodeError:"",ui:{width:0,height:0}};let s=function(e){return e.SUCCESS="success",e.FAILURE="failure",e}({})},Ho5h:function(e,t,n){"use strict";n.d(t,{SO:function(){return a},n$:function(){return o},tD:function(){return i},ru:function(){return r}});let r=function(e){return e.BAR="bar",e.BACK="background",e.NONE="none",e}({});const i="root";let a=function(e){return e.LOGO="logo",e.TOP="top",e.MARKETING="marketing",e.BOTTOM="bottom",e.RECURRING="recurring",e}({});const o={BLOCK:"layout-container"}},ICk1:function(e,t,n){"use strict";n.d(t,{_:function(){return o},m:function(){return a}});var r=n("prkb"),i=n("BFkT");const a=r.Ay.figure.withConfig({displayName:"figure__Wrapper"})`
  position: relative;
  display: block;
  margin: 0;
  max-width: 100%;
  width: 100%;
`,o=(0,r.Ay)(i._V).withConfig({displayName:"figure__Image"})`
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
  object-fit: cover;
  opacity: ${({$shouldDim:e})=>e?"0.3":"1"};
  transition: opacity 0.3s ease;
`},Jl3E:function(e,t,n){var r=n("mXGw");function i(e){return r.createElement("svg",e,r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 8.288C4.307 6.273 6.224 5 8.36 5s4.052 1.273 5.36 3.288c-1.308 2.016-3.224 3.289-5.36 3.289S4.308 10.304 3 8.288Zm3.305 0c0 1.134.922 2.056 2.055 2.056a2.058 2.058 0 0 0 2.055-2.056A2.058 2.058 0 0 0 8.36 6.233a2.057 2.057 0 0 0-2.055 2.055Zm.822 0c0-.68.553-1.233 1.233-1.233a1.234 1.234 0 0 1 0 2.467c-.68 0-1.233-.554-1.233-1.234Z",fill:"currentColor"}))}i.defaultProps={viewBox:"0 0 16 16",fill:"none"},e.exports=i,i.default=i},K8oY:function(e,t,n){"use strict";n.d(t,{$E:function(){return d},Dm:function(){return a},G6:function(){return l},QP:function(){return s},V:function(){return u},Zw:function(){return c},aK:function(){return p},ad:function(){return o},lj:function(){return i}});var r=n("Xrb3");const{fetchProjectTop:i,fetchProjectTopFail:a,fetchProjectTopSuccess:o,fetchEventTop:s,fetchEventTopFail:l,fetchEventTopSuccess:d,fetchGroupTop:c,fetchGroupTopFail:u,fetchGroupTopSuccess:p}=(0,r.A)("FETCH_PROJECT_TOP","FETCH_PROJECT_TOP_FAIL","FETCH_PROJECT_TOP_SUCCESS","FETCH_EVENT_TOP","FETCH_EVENT_TOP_FAIL","FETCH_EVENT_TOP_SUCCESS","FETCH_GROUP_TOP","FETCH_GROUP_TOP_FAIL","FETCH_GROUP_TOP_SUCCESS",{prefix:"leaderboard"})},"L8f+":function(e,t,n){"use strict";n.d(t,{C:function(){return a},m:function(){return i}});var r=n("prkb");const i=r.Ay.div.withConfig({displayName:"iframe-video__Wrapper"})`
  position: relative;
  aspect-ratio: 16 / 9;
  height: 100%;

  margin: auto;
  ${({$desktop:e})=>e?r.AH`
          max-height: calc(
            calc(var(--vh, 1vh) * 100) - calc(
                var(--header-height, 0px) + var(--promo-height, 0px) + var(--scorebar-height, 0px) +
                  var(--footer-height)
              )
          );
        `:r.AH`
          max-height: calc(
            calc(var(--vh, 1vh) * 100) - calc(
                var(--header-height, 0px) + var(--scorebar-height, 0px) + var(--footer-height)
              )
          );
        `}
`,a=r.Ay.iframe.withConfig({displayName:"iframe-video__Video"})`
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`},LoKe:function(e,t,n){"use strict";n.d(t,{G:function(){return a},k:function(){return i}});var r=n("Xrb3");const{setFormation:i}=(0,r.A)("SET_FORMATION",{prefix:"team-selector"}),{setStoredPositions:a}=(0,r.A)("SET_STORED_POSITIONS",{prefix:"team-selector"})},LrLE:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n("prkb");const i="https://fonts.googleapis.com/css?family=Mulish:400,600,700,800&display=swap";t.A=r.AH`
  :root {
    --container-max-width: 1400px;
    --font-family-default: Mulish, arial, helvetica;
    --font-family-main: var(--fkPrimaryFont, var(--font-family-default));
    --font-weight-regular: 400;
    --letter-spacing: 0px;

    --color-0-0: #0b0f1c;
    --color-1-0: #fff;
    --color-2-0: #b6b7bb;
    --color-3-0: #e83e7e;
    --color-4-0: #11c094; /* correct */
    --color-5-0: #e83e7e; /* incorrect */
    --color-6-0: #81849e;
    --color-7-0: #aeb0c1;
    --color-8-0: #1c214c;
    --color-9-0: #f7f7f9;
    --color-10-0: #9ba3a7;
    --color-11-0: #ececee;

    --title-font-size: 16px;
    --text-font-size: 14px;

    --title-font-weight: 700;
    --text-font-weight: 400;

    --header-height-mobile: 64px;
    --header-height-desktop: 75px;

    --blank-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=);

    --gradient-default: #fff, #fff;
    --gradient-primary-button-submitted: #7763f2, #7763f2;

    --gradient-correct: #11c094, #11c094;
    --gradient-incorrect: #e83e7e, #e83e7e;

    --revealed-color: #a1a5cb;
    --correct-color: #149a78;
    --incorrect-color: #c62a64;

    --gradient-overlay: rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7);
    --gradient-opaque-20: rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2);
    --gradient-opaque-40: rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4);
    --gradient-direction-default: 90deg;

    --gradient-direction-percentage-bar: 180deg;

    --element-background-default: #f7f8f9, #f7f8f9;

    --element-separator: #c4c4c4;

    --body-background-color: #f7f7f9;

    /* Default Max Widths */
    --fkElementMaxWidths-default: 726;
    --fkElementContentMaxWidths-default: 726;
    --fkPrimaryButtonMaxWidths-default: 320;

    /* BASE UI VARIABLES */

    --primary-closed-label-background: #ecedf2;
    --default-box-shadow: 0px 3px 6px rgba(129, 132, 158, 0.3);

    --carousel-pagination-background: #ecedf2;
    --carousel-pagination-dot-background: #ffffff;

    --option-box-gradient: #ebecee, #ebecee;

    --option-button-radius: 4px;
    --option-button-width: 2px;
    --option-button-text-default: #0b0f1c;
    --option-button-text-revealed: #0b0f1c;
    --option-button-text-hover: #0b0f1c;
    --option-button-text-correct: #ffffff;
    --option-button-text-incorrect: #ffffff;
    --option-button-text-selected: #ffffff;

    --option-button-percentage-default: #0b0f1c;
    --option-button-percentage-revealed: #0b0f1c;
    --option-button-percentage-hover: #0b0f1c;
    --option-button-percentage-correct: #ffffff;
    --option-button-percentage-incorrect: #ffffff;
    --option-button-percentage-selected: #ffffff;

    --option-button-border-default: transparent;
    --option-button-border-revealed: transparent;
    --option-button-border-hover: #7763f2;
    --option-button-border-correct: transparent;
    --option-button-border-incorrect: transparent;
    --option-button-border-selected: transparent;

    --option-button-background-default: #ecedf2, #ecedf2;
    --option-button-background-revealed: #ecedf2, #ecedf2;
    --option-button-background-hover: #ecedf2, #ecedf2;
    --option-button-background-correct: #11c094, #11c094;
    --option-button-background-incorrect: #e83e7e, #e83e7e;
    --option-button-background-selected: #7763f2, #7763f2;

    --option-button-filler-default: #aaacc9, #aaacc9;
    --option-button-filler-revealed: #aaacc9, #aaacc9;
    --option-button-filler-hover: #aaacc9, #aaacc9;
    --option-button-filler-correct: #0f9e7a, #0f9e7a;
    --option-button-filler-incorrect: #cc366e, #cc366e;
    --option-button-filler-selected: #8d0ca6, #8d0ca6;

    --primary-button-text-default: #fff;
    --profile-button-default-text-color: #fff;

    --slider-track-background: #aaacc9;
    --slider-thumb-background: #fff;
    --slider-thumb-border-radius: 24px;

    --select-button-default-color: #0b0f1c;
    --select-button-default-selected-color: #fff;
    --select-button-selected-background-color: #ecedf2;
    --select-button-hover-background-color: #ecedf2;
    --select-button-background-color: #ecedf2;

    --link-default-color: #fff;
    --link-hover-text-color: #fff;
    --list-divider-color: rgba(255, 255, 255, 0.2);
  }
`},MdoO:function(e,t,n){"use strict";n.d(t,{$:function(){return o},e:function(){return s}});var r=n("Q1a0"),i=n("9DRM"),a=n("vP7M");const o=({userVotes:e,wordPuzzleInstance:t,state:n=t.getState()})=>{const{revealType:r}=t.getCustomFields();switch(r){case"onClose":return(0,i.rS)(n)||(0,i.sX)(n);case"onVote":return(0,a.bU)(e);default:return!1}};function s({elementInstance:e,userVotes:t}){const n=(0,r.u7)({elementInstance:e});return{...n,isRevealed:o({userVotes:t,wordPuzzleInstance:e}),customFields:{...n.customFields,hint:(n.customFields.hint||"").toLowerCase(),letters:(n.customFields.letters||"").toLowerCase(),correctAnswer:(n.customFields.correctAnswer||"").toLowerCase(),correctAnswerDisplay:n.customFields.correctAnswer||""}}}},NBcf:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return i}});var r=n("prkb");const i=r.AH`
  --element-highlight-default: var(--fkElementHighlightColor, #7763f2);
  --element-highlight-dark-default: var(--fkElementHighlightDarkenSingle);
  --element-highlight-dark-gradient-default:
    var(--fkElementHighlightDarkenSingle), var(--fkElementHighlightDarkenSingle);

  --element-label-default: var(--fkElementLabelColor, var(--color-0-0));
  --element-title-default: var(--fkElementTitleColor, var(--color-0-0));
  --element-subtitle-default: var(--fkElementSubtitleColor, var(--color-0-0));
  --element-body-default: var(--fkElementDescriptionTextColor, var(--color-0-0));
  --element-reaction-label-default: var(--reactionsPrimaryLabelColor);
  --element-reaction-label-selected: var(--reactionsPrimaryLabelColorSelected);
  --element-reaction-icon-default: var(--reactionsPrimaryIconColor);
  --element-reaction-icon-selected-default: var(--reactionsPrimaryIconSelectedColor);
`,a=r.AH`
  --element-highlight-dark-override: var(--fkElementHighlightDarkenSingle);

  /* Element level */
  --element-highlight-gradient-override:
    var(--fkElementHighlightColor), var(--fkElementHighlightColor);
  --element-highlight-gradient-overlay-override:
    var(--element-highlight-dark-override), var(--element-highlight-dark-override);

  /* Global level */
  --element-highlight-gradient-default:
    var(--element-highlight-default), var(--element-highlight-default);
  --element-highlight-gradient-overlay-default:
    var(--element-highlight-dark-default), var(--element-highlight-dark-default);
`},NVNb:function(e,t,n){"use strict";n.d(t,{A:function(){return O}});var r=n("mXGw"),i=n("BFkT"),a=n("bISm"),o=n("9usg"),s=n("dIqr"),l=n("+bMA");var d=n("BtVd"),c=n("oYCi"),u=({questionNumber:e,className:t})=>{const n=`${e}/${(0,l.d4)(e=>(0,d.$h)(e))}`;return(0,c.jsx)(i.HX,{roundLabel:n,className:`${t??""} question-progress`,hasSeparator:!1})};const p="element-header-interactive",m={BLOCK:p,IMAGE:`${p}__image`,VIDEO:`${p}__video`,STATE_LABEL:`${p}__state-label`,ELEMENT_LABEL:`${p}__element-label`,STATUS_BAR:`${p}__status-bar`,DIVIDER:`${p}__status-bar__divider`,ROUND:`${p}__status-bar__round`,QUESTION:`${p}__status-bar__question`,QUESTION_PROGRESS:`${p}__status-bar__question-progress`,COUNTDOWN:`${p}__status-bar__countdown`,TITLE:`${p}__title`,SUBTITLE:`${p}__subtitle`};var g=n("prkb"),f=n("EAF/"),h=n("L8f+");const v=g.Ay.div.withConfig({displayName:"element-header-interactive__Wrapper"})`
  display: grid;
  gap: 8px;
  position: relative;
  justify-items: center;
  font-family: var(--font-family-main);

  ${h.m} {
    width: 100%;
  }
`,y=g.Ay.div.withConfig({displayName:"element-header-interactive__StatusBar"})`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 16px;
  grid-template-columns: 1fr;

  > * {
    &:first-child {
      text-align: right;
    }
    &:last-child {
      text-align: left;
    }
    &:only-child {
      text-align: center;
    }
  }

  ${({$hasSeparator1:e,$hasSeparator2:t})=>(e||t)&&"grid-template-columns: 1fr auto 1fr;"};
  ${({$hasSeparator1:e,$hasSeparator2:t})=>e&&t&&"grid-template-columns: 1fr auto auto auto 1fr;"};
`,b=(0,g.Ay)(i.Gi).withConfig({displayName:"element-header-interactive__StyledCountdown"})`
  ${f.dF}
  padding: 0;
  text-align: ${({$hasSeparator:e})=>e?"left":"center"};
`,x=g.Ay.div.withConfig({displayName:"element-header-interactive__Separator"})`
  width: 1px;
  height: 20px;
  background-color: var(--fkTimeDividerColor, var(--element-time-divider-default));
`;var N=n("Wu6c"),A=n("msSd");const C=({hasSeparator:e,startedAt:t,duration:n,enabled:i})=>{const[a,o]=(0,r.useState)(s.Date.now());return(0,r.useEffect)(()=>{const e=setInterval(()=>{o(s.Date.now())},1e3);return()=>clearInterval(e)},[]),(0,c.jsx)(b,{$hasSeparator:e,startedAt:t,duration:n,date:a,enabled:i,className:m.COUNTDOWN})};var O=e=>{const{id:t,imageUrl:n,imageAlt:s,revealImageUrl:l,isRevealed:d,videoEmbedCode:p,publishedAt:g,duration:f,enabledCountdown:h,showCountdown:b,showElementLabel:O,elementText:T,showRound:I,roundText:E,round:w,showClosedLabel:_,title:k,subtitle:P,showQuestionNumber:j,questionNumber:L,aspectRatio:$="auto"}=e,{global:{closedLabelText:S}={},videoPlayer:{allowFullScreen:R}={allowFullScreen:!0}}=(0,r.useContext)(A.Ay),B=!!p,D=!(B||!n&&!l),H=!!I&&!!E&&!!w,M=b&&h,z=O&&T,U=_&&S,V=j&&!!L,F=H||M||V,G=H&&(M||V),W=V&&M,Z=d&&l?l:n,J=B&&$===a.nT.AUTO?a.nT.SIXTEEN_NINE:$;return(0,c.jsx)(i.Pi,{componentType:N.tn.ELEMENT_CONTENT,children:(0,c.jsxs)(v,{className:m.BLOCK,children:[D?(0,c.jsx)(i._V,{className:m.IMAGE,imageUrl:Z,imageAlt:s,aspectRatio:$}):null,B?(0,c.jsx)(o.L9,{className:m.VIDEO,src:p,label:k,id:t,poster:Z,aspectRatio:J,allowFullScreen:R}):null,U?(0,c.jsx)(i.Lg,{closedLabel:S,className:m.STATE_LABEL}):null,z?(0,c.jsx)(i.xr,{className:m.ELEMENT_LABEL,label:T}):null,F?(0,c.jsxs)(y,{className:m.STATUS_BAR,$hasSeparator1:G,$hasSeparator2:W,children:[H?(0,c.jsx)(i.HX,{roundLabel:E.replace("{round}",w.toString()),className:m.ROUND,hasSeparator:G}):null,G?(0,c.jsx)(x,{className:m.DIVIDER}):null,V?(0,c.jsx)(u,{className:m.QUESTION,questionNumber:L}):null,W?(0,c.jsx)(x,{className:m.DIVIDER}):null,M?(0,c.jsx)(C,{hasSeparator:G,startedAt:g,duration:f,enabled:M}):null]}):null,k?(0,c.jsx)(i.l7,{title:k,className:m.TITLE}):null,P?(0,c.jsx)(i.hF,{subtitle:P,className:m.SUBTITLE}):null]})})}},ObKy:function(e,t,n){"use strict";var r=n("Wu6c"),i=n("oQhA");t.A=(e,t)=>{const{isLoggedIn:n,userPoints:a,isPending:o}=(0,i.A)();return[e===r.KB.LOGIN&&!n,e===r.KB.POINTS&&a<t,o]}},OsSD:function(e,t,n){"use strict";var r=n("mXGw"),i=n("1igH"),a=n("oRQk");t.A=e=>{const[t,n]=(0,r.useState)(!1),o=(0,i.jg)(),s=void 0===e||!0===e;(0,r.useEffect)(()=>{if(!t&&o&&s)try{setTimeout(()=>{n(!0),(0,i.JS)()},500)}catch(e){a.A.error("Error while setting finished loading UI:",e)}},[t,o,s])}},PSab:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n("1mTy");const i=e=>e===r.wW},PT1H:function(e,t,n){"use strict";n.d(t,{_:function(){return a},n:function(){return o}});var r=n("9DRM"),i=n("vP7M");const a=({sortingQuizInstance:e,userVotes:t,state:n=e.getState()})=>{const{revealType:a}=e.getCustomFields();switch(a){case"onClose":return(0,r.rS)(n)||(0,r.sX)(n);case"onVote":return(0,i.bU)(t);default:return!1}};function o({elementInstance:e,userVotes:t}){const n=(0,r.Hf)({elementInstance:e});return{...n,options:n.options.map((e,t)=>({...e,id:t})),isRevealed:a({userVotes:t,sortingQuizInstance:e}),correctOrder:(n.customFields.correctAnswer||"").split(" ").map(e=>Number(e)-1)}}},Q1a0:function(e,t,n){"use strict";n.d(t,{BB:function(){return o},PX:function(){return a},u7:function(){return s}});var r=n("dIqr"),i=n("wzRx");const a=e=>e===r.FlexiPoll.STATE_STARTED,o=e=>e===r.FlexiPoll.STATE_CLOSED;function s({elementInstance:e}){const t=e.getState(),[n,r]=(0,i.A)(e.getCustomFields());return window._poll=e,{id:e.id,type:e.type,state:t,pollId:e.enmasseId,options:e.getOptions(),results:e.getResults()||[],question:e.getQuestion(),duration:e.duration,isActive:a(t),userVote:e.getUserVote(),isClosed:o(t),hasResults:e.hasResults(),publishedAt:e.publishedAt,isUserVoted:e.hasUserVoted(),contentType:e.contentType,minOptionsPerVote:e.getMinOptionsPerVote(),maxOptionsPerVote:e.getMaxOptionsPerVote(),maxVotesPerUser:e.getMaxVotesPerUser(),maxVotesPerOption:e.getMaxVotesPerOption(),revealResultsMode:e.revealResultsMode,enabledCountdown:!0,customStyles:n,customFields:r}}},"QBC/":function(e,t,n){"use strict";n.d(t,{Ay:function(){return ii},Gu:function(){return oi},b6:function(){return ti}});var r=n("0PWn"),i=n("qkuk"),a=n("5aSR"),o=n("8TF0");const s="localhost"===window.location.hostname?"":"/pickem";let l=null;var d=n("d/iB"),c=n("WOCE"),u=n("se+n"),p=n("yLjE"),m=n("Bscc"),g=n("CEx/"),f=n("iYQB"),h=n("Xrb3");const{set:v}=(0,h.A)("SET",{prefix:"listings"});var y=n("5kgV"),b=n("hDYc");const{redirect:x}=(0,h.A)("REDIRECT",{prefix:"router"});var N=n("eiof");const A=[m.Ts,m.i1,m.oL,y.aW,y.n_,y.jI,y.J_,y.Z7,y.ux,y.v2,y.$e,y.Po,x,g.vt,g.md,g.i3,g.vh,g.n,g.WP,f.n,f.vh,f.hZ,f.wC,f.yo,f.sg,f.dh,f.Av,f.Uk,f.cJ,f.eZ,b.o,N.Ts,v,p.ri,p.Ne,p.ie,p.fQ,p.Sl,p.gM,p.f6,p.yz,p.TX,p.xb,p.A9,p.Xp,p.sS,p.HQ,p.R6,p.RO,p.im,p.zi,p.QQ].map(e=>e.toString());[p.HQ,p.ri,p.Ne,p.ie,p.fQ,p.Sl,p.gM,p.f6,p.yz,p.A9,p.Xp,p.sS,p.R6,p.RO,p.im,p.zi,p.QQ,y.Po,x].map(e=>e.toString());var C=n("Wu6c");const O=()=>C.OS.IS_IOS||C.OS.IS_SAFARI?{type:"localstorage"}:{},{setEvent:T}=(0,h.A)("SET_EVENT",{prefix:"pickem"});var I=n("efaT");const E={event:null};var w=(0,I.A)({[T]:(e,{payload:t})=>({...e,event:t})},E);const _="pickem";var k={states:[_],namespace:C.rS.APP_NAME,disableWarnings:!0,preloadedState:{[_]:E}},P=n("1Jxa"),j=n("jSwI");const L={};var $=(0,I.A)({[j.X]:(e,{payload:t})=>({...e,[t.id]:t.value})},L);const S="freestyletrivia";var R={states:[`${S}`],namespace:C.rS.APP_NAME,disableWarnings:!0,preloadedState:{[S]:L}};const B="ladder";var D={states:[B],namespace:C.rS.APP_NAME,disableWarnings:!0,preloadedState:{[B]:{}}},H=n("Tg3w");const M={};var z=(0,I.A)({[H.gJ]:(e,{payload:{questionId:t,startTime:n}})=>({...e,[t]:{startTime:n}}),[H.g_]:(e,{payload:{parentId:t,questionArray:n}})=>({...e,[t]:{questions:n}}),[H.W_]:(e,{payload:{parentId:t,questionViewed:n}})=>({...e,[t]:{...e[t],questionsViewed:e[t]&&e[t].questionsViewed?[...e[t].questionsViewed,n]:[n]}}),[H.jU]:(e,{payload:{parentId:t,questionArray:n}})=>({...e,[t]:{...e[t],questions:n}})},M);const U="quickFireQuiz";var V={states:[U],namespace:C.rS.APP_NAME,disableWarnings:!0,preloadedState:{[U]:M}};const F="podium";var G={states:[F],namespace:C.rS.APP_NAME,disableWarnings:!0,preloadedState:{[F]:{}}};const W="teamSelector";var Z={states:[W],namespace:C.rS.APP_NAME,disableWarnings:!0,preloadedState:{[W]:{}}},J=n("BxPu");const{updateName:K,updateNameForEvent:Q,updateSessionId:Y,updateVisitedState:X}=(0,h.A)("UPDATE_NAME","UPDATE_NAME_FOR_EVENT","UPDATE_SESSION_ID","UPDATE_VISITED_STATE",{prefix:"user"}),q={isFirstVisited:null},ee=(0,I.A)({[X]:(e,{payload:{isFirstVisited:t}})=>({...e,isFirstVisited:t}),[Q]:(e,{payload:{name:t,eventId:n}})=>({...e,[n]:{...e[n],name:t,isUsernamePromptSkiped:!1}}),[Y]:(e,{payload:{sessionId:t,eventId:n}})=>({...e,[n]:{...e[n],publicId:e[n]?.publicId||(0,J.A)(),sessionId:t,isUsernamePromptSkiped:t===e.sessionId&&e.isUsernamePromptSkiped}})},q);var te=ee;const ne="dataCapture";var re={states:[ne],namespace:C.rS.APP_NAME,disableWarnings:!0,preloadedState:{[ne]:q}},ie=n("GPK5");const ae="lvisID";var oe={states:[`${ae}.info`],namespace:C.rS.APP_NAME,disableWarnings:!0,preloadedState:{[ae]:ie.D7}};const se="user";var le={states:[se],namespace:C.rS.APP_NAME,disableWarnings:!0,preloadedState:{[se]:q}},de=n("TweP");const ce="elements";var ue={states:[`${ce}.votes`,`${ce}.currentElementIndexToEvent`],namespace:C.rS.APP_NAME,disableWarnings:!0,preloadedState:{[ce]:de.K}},pe=n("E2hB");const me={};var ge=(0,I.A)({[pe.E]:(e,{payload:{contentType:t,elementId:n,newPosition:r}})=>({...e,[t]:{...e[t],[n]:{...e[t]?.[n],position:r}}}),[pe.K]:(e,{payload:{contentType:t,elementId:n,newPosition:r}})=>({...e,[t]:{...e[t],[n]:{...e[t]?.[n],position:r??0}}})},me);const fe="scaffold",he=[ue,R,V,re,D,Z,{states:[fe],namespace:C.rS.APP_NAME,disableWarnings:!0,preloadedState:{[fe]:me}},oe,G,le,k],ve=he.map(P.UN),ye=(0,P.Fp)(...he.map(P.Hh));var be=n("9aI2"),xe=n("X1LX");const Ne=e=>e.router,Ae=e=>{const t=Ne(e);return Object.prototype.hasOwnProperty.call(t,"location")?t.location.pathname:""},Ce=e=>t=>n=>{const r=e.getState();(Ne(r).location.pathname!==be.b.STORAGE_CHANGED||(0,xe.G0)(r))&&t(n)};let Oe;const Te=()=>(Oe||(Oe=(0,c.Ay)()),Oe),Ie=e=>{const t=(0,d.A)(e),n=Te(),r=(0,u.u)()?(0,a.PL)({channel:"fankit2_state_sync",blacklist:A,broadcastChannelOption:O()}):()=>e=>t=>e(t),i=[Ce,n,t,r];return(0,u.u)()&&i.push(...ve),i};var Ee=n("dJqt"),we=n("zAUO"),_e=(0,I.A)({[we.V]:(e,{payload:t})=>({...e,element:t}),[we.d]:(e,{payload:t})=>({...e,element:t})},{element:""}),ke=n("imju"),Pe=(0,I.A)({[ke.G]:(e,{payload:{positions:t,elementId:n,eventId:r}})=>({...e,[r]:{...e[r],[n]:{...e[r]?.[n],positions:t}}})},{}),je=n("K8oY");const Le=(0,I.A)({[je.lj]:e=>({...e,dataByProject:{...e.dataByProject,error:null,isFetching:!0}}),[je.Dm]:(e,{payload:{error:t}})=>({...e,dataByProject:{...e.dataByProject,error:t,isFetching:!1}}),[je.ad]:(e,{payload:{top:t,user:n}})=>({...e,dataByProject:{...e.dataByProject,error:null,isFetching:!1,top:t||[],user:n||{}}}),[je.QP]:(e,{payload:{round:t,eventId:n}})=>({...e,dataByEventAndRound:{...e.dataByEventAndRound,[n]:{...e.dataByEventAndRound[n],[t]:{...e.dataByEventAndRound[n]?.[t],error:null,isFetching:!0}}}}),[je.G6]:(e,{payload:{error:t,round:n,eventId:r}})=>({...e,dataByEventAndRound:{...e.dataByEventAndRound,[r]:{...e.dataByEventAndRound[r],[n]:{...e.dataByEventAndRound[r]?.[n],error:t,isFetching:!0}}}}),[je.$E]:(e,{payload:{top:t,user:n,round:r,eventId:i}})=>({...e,dataByEventAndRound:{...e.dataByEventAndRound,[i]:{...e.dataByEventAndRound[i],[r]:{...e.dataByEventAndRound[i]?.[r],error:null,isFetching:!1,top:t||[],user:n||{}}}}}),[je.Zw]:(e,{payload:{groupId:t}})=>({...e,dataByGroup:{...e.dataByGroup,[t]:{...e.dataByGroup?.[t],error:null,isFetching:!0}}}),[je.V]:(e,{payload:{groupId:t,error:n}})=>({...e,dataByGroup:{...e.dataByGroup,[t]:{...e.dataByGroup?.[t],error:n,isFetching:!1}}}),[je.aK]:(e,{payload:{groupId:t,top:n,user:r}})=>({...e,dataByGroup:{...e.dataByGroup,[t]:{...e.dataByGroup[t],error:null,isFetching:!1,top:n||[],user:r||{}}}})},{dataByProject:{error:null,isFetching:!1,top:[],user:{}},dataByEventAndRound:{},dataByGroup:{}});var $e=Le,Se=n("p3en"),Re=(0,I.A)({[Se.G]:(e,{payload:{positions:t,elementId:n,eventId:r}})=>({...e,[r]:{...e[r],[n]:{...e[r]?.[n],positions:t}}})},{}),Be=n("LoKe"),De=(0,I.A)({[Be.k]:(e,{payload:{formation:t,elementId:n,eventId:r}})=>({...e,[r]:{...e[r],[n]:{...e[r]?.[n],formation:t}}}),[Be.G]:(e,{payload:{positions:t,elementId:n,eventId:r}})=>({...e,[r]:{...e[r],[n]:{...e[r]?.[n],positions:t}}})},{}),He=n("V5i3"),Me=(0,I.A)({[He.$]:(e,{payload:{payload:t,eventId:n}})=>{const{isSubmitted:r,elementId:i}=t;return{...e,[n]:{...e[n],[i]:{isSubmitted:r}}}}},{}),ze=(0,I.A)({[p.HQ]:(e,{payload:t})=>({...e,ui:{...e.ui,...t}}),[p.ri]:e=>({...e,state:ie.H1.LOGGED_OUT,info:{},codes:{},error:""}),[p.Ne]:(e,{payload:t})=>({...e,info:{...e.info,...t},iframe:ie.Z3.HIDDEN,error:""}),[p.ie]:(e,{payload:t})=>({...e,state:ie.H1.LOGGED_OUT,info:{},error:t}),[p.fQ]:(e,{payload:t})=>({...e,info:{...e.info,...t},error:""}),[p.Sl]:(e,{payload:t})=>({...e,state:ie.H1.LOGGED_OUT,error:t}),[p.gM]:(e,{payload:{username:t="",nickname:n=""}})=>({...e,info:{...e.info,username:t,nickname:n}}),[p.f6]:e=>({...e,state:ie.H1.LOGGED_IN,error:""}),[p.yz]:e=>({...e,state:ie.H1.LOGGED_OUT,error:"Unexpected error"}),[p.TX]:e=>({...e,state:ie.H1.PENDING,error:""}),[p.xb]:e=>({...e,state:ie.H1.LOGGED_OUT}),[p.A9]:e=>({...e,codes:{},state:ie.H1.PENDING,iframe:ie.Z3.CLOSED}),[p.Xp]:e=>({...e,codes:{},state:ie.H1.PENDING,iframe:ie.Z3.CLOSED}),[p.sS]:e=>({...e,iframe:ie.Z3.HIDDEN}),[p.R6]:e=>({...e,iframe:ie.Z3.OPENED}),[p.RO]:e=>({...e,iframe:ie.Z3.HIDDEN}),[p.zi]:(e,{payload:t})=>({...e,info:{...e.info,...t},error:""}),[p.QQ]:e=>({...e,error:"Unable to fetch user"}),[p.Kr]:e=>({...e,usernameModal:!0}),[p.a5]:e=>({...e,usernameModal:!1}),[p.kZ]:(e,{payload:t})=>({...e,info:{...e.info,...t}})},ie.D7);const{fetchEventReactionsRequest:Ue,fetchEventReactionsSuccess:Ve,fetchEventReactionsFailure:Fe}=(0,h.A)("FETCH_EVENT_REACTIONS_REQUEST","FETCH_EVENT_REACTIONS_SUCCESS","FETCH_EVENT_REACTIONS_FAILURE",{prefix:"reactions"});var Ge=(0,I.A)({[Ue]:e=>({...e,loading:!0,error:null}),[Ve]:(e,{payload:t})=>({...e,loading:!1,elements:t.reduce((e,t)=>(e[t.elementId]={...t.reactions},e),{})}),[Fe]:(e,{payload:t})=>({...e,loading:!1,error:t.error})},{loading:!1,error:null,elements:[]}),We=n("EVFA");const Ze=(0,I.A)({[We.i9]:e=>({...e,dataByProject:{...e.dataByProject,error:null,isFetched:!1}}),[We.uR]:(e,{payload:{error:t}})=>({...e,dataByProject:{...e.dataByProject,error:t,isFetched:!0}}),[We.TR]:(e,{payload:{points:t}})=>({...e,dataByProject:{...e.dataByProject,error:null,isFetched:!0,points:t}}),[We.HR]:(e,{payload:{points:t}})=>({...e,dataByProject:{...e.dataByProject,lastWeekPoints:t,lastWeekIsFetched:!0}}),[We.DD]:e=>({...e,dataByProject:{...e.dataByProject,lastWeekPoints:null,lastWeekIsFetched:!1}}),[We.te]:(e,{payload:{round:t,eventId:n}})=>({...e,dataByEventAndRound:{...e.dataByEventAndRound,[n]:{...e.dataByEventAndRound[n],[t]:{...e.dataByEventAndRound[n]?.[t],error:null,isFetched:!1}}}}),[We.PN]:(e,{payload:{error:t,round:n,eventId:r}})=>({...e,dataByEventAndRound:{...e.dataByEventAndRound,[r]:{...e.dataByEventAndRound[r],[n]:{...e.dataByEventAndRound[r]?.[n],error:t,isFetched:!0}}}}),[We.Ce]:(e,{payload:{points:t,round:n,eventId:r}})=>({...e,dataByEventAndRound:{...e.dataByEventAndRound,[r]:{...e.dataByEventAndRound[r],[n]:{...e.dataByEventAndRound[r]?.[n],error:null,isFetched:!0,points:t}}}})},{dataByProject:{error:null,isFetched:!1,points:null,lastWeekPoints:null,lastWeekIsFetched:!1},dataByEventAndRound:{}});var Je=Ze,Ke=(0,I.A)({[m.Ts]:e=>({...e,isInit:!0}),[m.$n]:(e,{payload:t})=>({...e,event:t}),[m.i1]:e=>({...e,isLoaded:!0}),[m.L6]:(e,{payload:t})=>({...e,country:t}),[m.oL]:(e,{payload:t})=>({...e,areActionsHandled:t}),[m.tF]:(e,{payload:t})=>({...e,stickyPromoAudio:t}),[m.gU]:(e,{payload:t})=>({...e,stickyPromoVideo:t}),[m.jE]:(e,{payload:t})=>({...e,stickyScoreBar:t})},{isInit:!1,isLoaded:!1,areActionsHandled:!0,stickyPromoAudio:!1,stickyPromoVideo:!1,stickyScoreBar:!1,sentReady:!1,country:null,event:null}),Qe=n("vP7M"),Ye=n("2VT5");const Xe={ids:[],votes:{},entities:{},orderedIds:[],currentElementIndexToEvent:{}};var qe=(0,I.A)({[g.i3]:e=>({...Xe,votes:e.votes,currentElementIndexToEvent:e.currentElementIndexToEvent}),[g.vt]:(e,{payload:t})=>({...e,ids:t.sort(Qe.Tq).map(e=>e.id),entities:t.reduce((e,t)=>(e[t.id]=t,e),{}),orderedIds:t.sort(Qe.QV).map(e=>e.id)}),[g.n]:(e,{payload:t})=>({...e,ids:[t,...Object.values(e.entities)].sort(Qe.Tq).map(e=>e.id),entities:{...e.entities,[t.id]:t}}),[g.vh]:(e,{payload:t})=>{const n=e.ids.filter(e=>e!==t),r={...e.entities};return delete r[t],{...e,ids:n,entities:r}},[g.dq]:(e,{payload:{eventId:t,id:n,votes:r}})=>({...e,votes:{...e.votes,[t]:{...e.votes[t],[n]:r}}}),[g.UA]:(e,{payload:{eventId:t,elementId:n}})=>({...e,votes:{...e.votes,[t]:e.votes[t].filter(e=>e.id!==n)}}),[g.S9]:(e,{payload:t})=>({...e,votes:{...e.votes,[t]:{}}}),[g.KW]:e=>({...e,votes:{}}),[g.o1]:(e,{payload:t})=>({...e,currentElementIndexToEvent:{...e.currentElementIndexToEvent,[t]:(e.currentElementIndexToEvent[t]||0)+1}}),[g.tb]:(e,{payload:t})=>({...e,currentElementIndexToEvent:{...e.currentElementIndexToEvent,[t]:0}}),[g.Ts]:(e,{payload:{id:t,publishedAt:n}})=>({...e,ids:e.ids,entities:{...e.entities,[t]:{...e.entities[t],publishedAt:n}}}),[(0,Ye.A)(g.cJ,g.Lk,g.gq,g.X3)]:(e,{payload:{id:t,...n}})=>{const r={...e.entities,[t]:{...e.entities[t],...n}},i=Object.values(r).sort(Qe.Tq).map(e=>e.id);return{...e,ids:i,entities:r}}},Xe),et=n("wzRx");const tt={id:null,name:null,endAt:null,state:null,startAt:null,isActive:!1,isFetched:!1,isFinished:!1,isUpcoming:!1,settings:{},styles:{}};var nt=(0,I.A)({[f.wC]:()=>({...tt,isFetched:!0}),[f.Uk]:(e,{payload:t})=>({...e,...t}),[f.Av]:()=>({...tt}),[(0,Ye.A)(f.yo,f.hZ)]:(e,{payload:t})=>{const{customFields:n={},...r}=t,[i,a]=(0,et.A)(n);return{...e,...r,styles:i,settings:a,isFetched:!0}},[f.sg]:e=>({...e,isFetched:!0})},tt),rt=(0,I.A)({[v]:(e,{payload:t})=>t},[]);const{show:it,hide:at}=(0,h.A)("SHOW","HIDE",{prefix:"loader"});var ot=(0,I.A)({[it]:e=>({isShow:!0,counter:e.counter+1}),[at]:e=>{const t=e.counter-1;return{isShow:!!t,counter:t}}},{isShow:!1,counter:0});const st={host:C.D_.PROJECT_HOST,project:C.D_.PROJECT_ID,eventId:C.D_.EVENT_ID,connected:!1,connecting:!1,initialized:!1,disconnected:!1,initializing:!1,delayBeforeReconnect:0,services:{},presenceCounter:null,language:null};var lt=(0,I.A)({[y.$e]:(e,{payload:{host:t,project:n}})=>({...e,host:t,project:n}),[y.J_]:(e,{payload:t})=>({...e,initialized:!0,initializing:!1,services:t.services}),[y.n_]:e=>({...e,initialized:!1,initializing:!0}),[y.Z7]:(e,{payload:t})=>({...e,eventId:t}),[y.v2]:(e,{payload:t})=>({...e,language:t}),[y.ux]:e=>({...e,disconnected:!0,connecting:!1,connected:!1}),[y.jI]:(e,{payload:t})=>({...e,connecting:!0,connected:!1,delayBeforeReconnect:t}),[y.aW]:e=>({...e,disconnected:!1,connecting:!1,connected:!0}),[y.Po]:(e,{payload:t})=>({...e,presenceCounter:t})},st),dt=n("eB0S"),ct=(0,I.A)({[N.Ts]:e=>({...e,init:!0}),[N.cL]:e=>({...e,init:!1,ready:!1}),[N.Gc]:e=>({...e,ready:!0}),[N.uw]:e=>({...e,hideHeaderAndFooter:!0})},{hideHeaderAndFooter:!1,init:!1,ready:!1}),ut=n("7gXV"),pt=n("dIqr"),mt=n.n(pt),gt=n("nZhW"),ft=n("oRQk"),ht=n("0TlH"),vt=n("dUZd"),yt=n("BtVd"),bt=n("l/jD");function*xt({payload:{limit:e}}){const t=yield Object.defineProperty((0,ut.Lt)(bt.H3),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:25,code:"select(getProjectID)"}}),n=yield Object.defineProperty((0,ut.Lt)(vt.Fc),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:26,code:"select(getAuthInfo)"}}),r=(0,gt.$_)(),i="overall",a=yield Object.defineProperty((0,ut.Lt)(yt.DY),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:30,code:"select(getGamificationApiMaxDelay)"}}),o=Math.floor(Math.random()*a);yield Object.defineProperty((0,ut.cb)(o),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:32,code:"delay(delayTime)"}});try{const a=yield Object.defineProperty((0,ut.T1)(ht.WZ,{baseUrl:r,projectID:t,leaderboardId:i,limit:e}),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:35,code:"call(getTopLeaderboardsForProject, {\n      baseUrl,\n      projectID,\n      leaderboardId,\n      limit,\n    })"}});let o={};n?.userId&&(o={...(yield Object.defineProperty((0,ut.T1)(ht.iC,{baseUrl:r,projectID:t,leaderboardId:i,userID:n.userId}),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:45,code:"call(getUserDataForProject, {\n        baseUrl,\n        projectID,\n        leaderboardId,\n        userID: userData.userId,\n      })"}})).data.data,username:n.nickname||n.username}),yield Object.defineProperty((0,ut.yJ)((0,je.ad)({top:a.data.data,user:o})),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:54,code:"put(\n      fetchProjectTopSuccess({\n        top: top.data.data,\n        user: userFetched,\n      }),\n    )"}})}catch(e){yield Object.defineProperty((0,ut.yJ)((0,je.Dm)({error:e})),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:61,code:"put(\n      fetchProjectTopFail({\n        error: e,\n      }),\n    )"}}),ft.A.error("Error while fetching project top leaderboard",e)}}function*Nt({payload:{limit:e,round:t}}){const n=yield Object.defineProperty((0,ut.Lt)(bt.H3),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:72,code:"select(getProjectID)"}}),r=yield Object.defineProperty((0,ut.Lt)(vt.Fc),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:73,code:"select(getAuthInfo)"}}),i=yield Object.defineProperty((0,ut.Lt)(yt._s),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:74,code:"select(getEventId)"}}),a=(0,gt.$_)(),o=null===t?"overall":`round_${t}`,s=yield Object.defineProperty((0,ut.Lt)(yt.DY),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:78,code:"select(getGamificationApiMaxDelay)"}}),l=Math.floor(Math.random()*s);yield Object.defineProperty((0,ut.cb)(l),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:80,code:"delay(delayTime)"}});try{const s=yield Object.defineProperty((0,ut.T1)(ht.rg,{baseUrl:a,projectID:n,eventID:i,leaderboardId:o,limit:e}),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:83,code:"call(getTopLeaderboardsForEvent, {\n      baseUrl,\n      projectID,\n      eventID,\n      leaderboardId,\n      limit,\n    })"}});let l={};r?.userId&&(l={...(yield Object.defineProperty((0,ut.T1)(ht.Lf,{baseUrl:a,projectID:n,eventID:i,leaderboardId:o,userID:r.userId}),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:94,code:"call(getUserDataForEvent, {\n        baseUrl,\n        projectID,\n        eventID,\n        leaderboardId,\n        userID: userData.userId,\n      })"}})).data.data,username:r.nickname||r.username}),yield Object.defineProperty((0,ut.yJ)((0,je.$E)({round:t,top:s.data.data,user:l,eventId:i})),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:104,code:"put(\n      fetchEventTopSuccess({\n        round,\n        top: top.data.data,\n        user: userFetched,\n        eventId: eventID,\n      }),\n    )"}})}catch(e){yield Object.defineProperty((0,ut.yJ)((0,je.G6)({round:t,error:e,eventId:i})),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:113,code:"put(\n      fetchEventTopFail({\n        round,\n        error: e,\n        eventId: eventID,\n      }),\n    )"}}),ft.A.error("Error while fetching event top leaderboard",e)}}function At(e){const{payload:{round:t}}=e;return t}function*Ct(){yield Object.defineProperty((0,ut.p8)(je.lj,xt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:133,code:"takeLatest(fetchProjectTop, getProjectLeaderboard)"}}),yield Object.defineProperty(function(e,t,n,...r){return(0,ut.Zy)(Object.defineProperty(function*(){const i={};for(;;){const a=yield Object.defineProperty((0,ut.s)(e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/helpers/take-latest-by-identifier.ts",lineNumber:23,code:"take(patternOrChannel)"}}),o=yield Object.defineProperty((0,ut.T1)(n,a),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/helpers/take-latest-by-identifier.ts",lineNumber:24,code:"call(identifierSelector, action)"}});i[o]&&(yield Object.defineProperty((0,ut.ZT)(i[o]),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/helpers/take-latest-by-identifier.ts",lineNumber:27,code:"cancel(tasks[identifier])"}})),i[o]=yield Object.defineProperty((0,ut.Zy)(t,...r.concat(a)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/helpers/take-latest-by-identifier.ts",lineNumber:30,code:"fork(saga, ...args.concat(action))"}})}},"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/helpers/take-latest-by-identifier.ts",lineNumber:19,code:"function* takeByIdentifier() {\n    const tasks = {};\n\n    while (true) {\n      const action = yield take(patternOrChannel);\n      const identifier = yield call(identifierSelector, action);\n\n      if (tasks[identifier]) {\n        yield cancel(tasks[identifier]);\n      }\n\n      tasks[identifier] = yield fork(saga, ...args.concat(action));\n    }\n  }"}}))}(je.QP,Nt,At),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:134,code:"takeLatestByIdentifier(fetchEventTop, getEventLeaderboard, getRoundFromAction)"}})}Object.defineProperty(xt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:24,code:null}}),Object.defineProperty(Nt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:71,code:null}}),Object.defineProperty(Ct,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/tasks/leaderboard.ts",lineNumber:132,code:null}});let Ot=null;function*Tt(e){if(!(!e&&!Ot||e&&Ot))return!e&&Ot?(yield Object.defineProperty((0,ut.ZT)(Ot),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/handlers.js",lineNumber:16,code:"cancel(leaderboardTask)"}}),void(Ot=null)):void(Ot=yield Object.defineProperty((0,ut.Zy)(Ct),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/handlers.js",lineNumber:21,code:"fork(leaderboardFlow)"}}))}function*It({payload:{customFields:{enableGamification:e}}}){yield*Tt(e)}function Et(){(0,gt.cV)((0,gt.l2)(pt.getAssets()))}function*wt(){yield Object.defineProperty((0,ut.jP)([f.hZ,f.yo],It),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/observers.js",lineNumber:11,code:"takeEvery([set, update], gamificationSwitcherHandler)"}})}function*_t(){yield Object.defineProperty((0,ut.jP)(y.J_,Et),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/observers.js",lineNumber:15,code:"takeEvery(initialized, onLvisInitHandler)"}})}function*kt(){yield Object.defineProperty((0,ut.Zy)(_t),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/index.ts",lineNumber:9,code:"fork(lvisInitObserver)"}}),yield Object.defineProperty((0,ut.Zy)(wt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/index.ts",lineNumber:10,code:"fork(gamificationSwitcherObserver)"}})}Object.defineProperty(Tt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/handlers.js",lineNumber:10,code:null}}),Object.defineProperty(It,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/handlers.js",lineNumber:24,code:null}}),Object.defineProperty(wt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/observers.js",lineNumber:10,code:null}}),Object.defineProperty(_t,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/observers.js",lineNumber:14,code:null}}),Object.defineProperty(kt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/elements/leaderboard/store/sagas/index.ts",lineNumber:8,code:null}});var Pt=n("//Fu"),jt=n("W/29");function*Lt(e){const t=yield Object.defineProperty((0,ut.Lt)(yt._s),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/event-switch/store/sagas/index.ts",lineNumber:11,code:"select(getEventId)"}});e&&t!==e&&(yield Object.defineProperty((0,ut.yJ)((0,f.dh)(e)),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/event-switch/store/sagas/index.ts",lineNumber:14,code:"put(eventSwitch(eventID))"}}),(0,jt.z)("e",e))}function*$t(e){const{payload:t}=e,{pathname:n}=t.location;if(n.split("/").indexOf("event")>=0){const e=(e=>{const t=e.split("/"),n=t.findIndex(e=>"event"===e);return t[n+1]})(n);yield Object.defineProperty((0,ut.T1)(Lt,e),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/event-switch/store/sagas/index.ts",lineNumber:26,code:"call(changeEvent, eventID)"}})}}function*St(){const e=new URL(window.location.href).searchParams.get("e");yield Object.defineProperty((0,ut.T1)(Lt,e),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/event-switch/store/sagas/index.ts",lineNumber:32,code:"call(changeEvent, eventID)"}})}function*Rt(){const e=yield Object.defineProperty(function(){let e=window.location.href;return(0,c.Od)(t=>{const n=n=>{e!==window.location.href&&(e=window.location.href,t({e:n}))};return window.addEventListener("popstate",n),()=>window.removeEventListener("popstate",n)})}(),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/event-switch/store/sagas/index.ts",lineNumber:53,code:"onHistoryChanelCreator()"}});yield Object.defineProperty((0,ut.jP)(e,St),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/event-switch/store/sagas/index.ts",lineNumber:54,code:"takeEvery(onHistoryChangeChanel, onHistoryChangeHandler)"}}),yield Object.defineProperty((0,ut.jP)(Pt.LK,$t),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/event-switch/store/sagas/index.ts",lineNumber:55,code:"takeEvery(LOCATION_CHANGE, redirectHandler)"}})}function*Bt({payload:e}){const t=yield Object.defineProperty((0,ut.Lt)(yt._s),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/form/store/sagas/handlers.ts",lineNumber:7,code:"select(getEventId)"}});yield Object.defineProperty((0,ut.yJ)((0,He.$)({eventId:t,payload:e})),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/form/store/sagas/handlers.ts",lineNumber:9,code:"put(setIsSubmittedForEvent({ eventId, payload }))"}})}function*Dt(){yield Object.defineProperty((0,ut.jP)(He.a,Bt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/form/store/sagas/observers.ts",lineNumber:7,code:"takeEvery(setIsSubmitted, setIsSubmittedHandler)"}})}function*Ht(){yield Object.defineProperty((0,ut.Zy)(Dt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/form/store/sagas/index.ts",lineNumber:6,code:"fork(setIsSubmittedObserver)"}})}function*Mt(){const e=yield Object.defineProperty((0,ut.Lt)(vt.YV),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/geolocation/store/sagas/index.ts",lineNumber:8,code:"select(getAuthIsLoggedIn)"}}),t=yield Object.defineProperty((0,ut.Lt)(vt.Mc),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/geolocation/store/sagas/index.ts",lineNumber:9,code:"select(getUserCountry)"}}),n=e?t:window.Afterburner?.country??null;yield Object.defineProperty((0,ut.yJ)((0,m.L6)(n)),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/geolocation/store/sagas/index.ts",lineNumber:12,code:"put(setCountry(countryCode))"}})}function*zt(){yield Object.defineProperty((0,ut.jP)([m.Ts,p.f6],Mt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/geolocation/store/sagas/index.ts",lineNumber:16,code:"takeEvery([init, lvisLoginSuccess], startingFlow)"}})}Object.defineProperty(Lt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/event-switch/store/sagas/index.ts",lineNumber:10,code:null}}),Object.defineProperty($t,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/event-switch/store/sagas/index.ts",lineNumber:19,code:null}}),Object.defineProperty(St,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/event-switch/store/sagas/index.ts",lineNumber:30,code:null}}),Object.defineProperty(Rt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/event-switch/store/sagas/index.ts",lineNumber:52,code:null}}),Object.defineProperty(Bt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/form/store/sagas/handlers.ts",lineNumber:6,code:null}}),Object.defineProperty(Dt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/form/store/sagas/observers.ts",lineNumber:6,code:null}}),Object.defineProperty(Ht,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/form/store/sagas/index.ts",lineNumber:5,code:null}}),Object.defineProperty(Mt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/geolocation/store/sagas/index.ts",lineNumber:7,code:null}}),Object.defineProperty(zt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/geolocation/store/sagas/index.ts",lineNumber:15,code:null}});var Ut=n("PtY4");Ut.A.create();let Vt=function(e){return e.EMAIL="email",e.ANONYMOUS="anonymous",e}({});var Ft=n("/Iuz");function Gt(e){return new Promise(t=>{mt().User.login(e.userId,e.timeStamp,e.signature,function(){t(ie.um.SUCCESS)},function(){t(ie.um.FAILURE)})})}function*Wt(){const{userId:e,timeStamp:t,signature:n}=yield Object.defineProperty((0,ut.Lt)(vt.Fc),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:47,code:"select(getAuthInfo)"}});if(!e||!t||!n)return;const r=yield Object.defineProperty((0,ut.T1)(Gt,{userId:e,timeStamp:t,signature:n}),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:53,code:"call(lvisLogin, { userId, timeStamp, signature })"}});switch(r){case ie.um.SUCCESS:yield Object.defineProperty((0,ut.yJ)((0,p.f6)()),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:57,code:"put(lvisLoginSuccess())"}});break;case ie.um.FAILURE:yield Object.defineProperty((0,ut.yJ)((0,p.yz)()),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:61,code:"put(lvisLoginFailure())"}});break;default:ft.A.info("Undeclared LVIS_LOGIN_STATES type",r)}}function*Zt(){yield Object.defineProperty((0,ut.T1)(Wt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:72,code:"call(lvisLoginSaga)"}})}function*Jt(){yield Object.defineProperty((0,ut.T1)(Wt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:76,code:"call(lvisLoginSaga)"}})}function*Kt(){yield Object.defineProperty((0,ut.yJ)((0,p.A9)()),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:80,code:"put(lvisDisconnected())"}})}function*Qt(){yield Object.defineProperty((0,ut.yJ)((0,p.Xp)()),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:84,code:"put(lvisConnecting())"}})}function*Yt(){yield Object.defineProperty((0,ut.yJ)((0,p.sS)()),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:88,code:"put(lvisConnected())"}})}function*Xt(e){const t=yield Object.defineProperty((0,ut.Lt)(vt.YV),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:92,code:"select(getAuthIsLoggedIn)"}}),n=e?.payload?`${e.payload}_sign_up_view`:"sign_up_view",r=t?"profile_view":n;(0,Ft.u)(r,{event_category:"Sign Up",event_label:"Fankit Sign Up"})}function*qt(){const e=yield Object.defineProperty((0,ut.Lt)(bt.ak,ie.kd),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:102,code:"select(getLvisService, SERVICE_ID)"}}),t=yield Object.defineProperty((0,ut.Lt)(bt.H3),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:103,code:"select(getProjectID)"}}),{accessToken:n}=yield Object.defineProperty((0,ut.Lt)(vt.Fc),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:104,code:"select(getAuthInfo)"}});try{const r=yield Object.defineProperty(((e,t,n,r=Vt.EMAIL)=>Ut.A.get(`${e}/v1/user`,{params:{projectId:n,strategy:r},headers:{authorization:`bearer ${t}`}}))(e,n,t),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:107,code:"getCodesRequest(serviceUrl, accessToken, projectId)"}});yield Object.defineProperty((0,ut.yJ)((0,p.zi)(r.data.data)),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:109,code:"put(fetchUserSuccess(response.data.data))"}})}catch(e){ft.A.error("Error fetching user data",e),yield Object.defineProperty((0,ut.yJ)((0,p.QQ)()),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:112,code:"put(fetchUserFailure())"}})}}function*en(){yield Object.defineProperty((0,ut.jP)(p.Ne,Zt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:117,code:"takeEvery(loginSuccess, loginSuccessHandler)"}}),yield Object.defineProperty((0,ut.jP)(p.fQ,Jt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:118,code:"takeEvery(userAuthSuccess, userAuthSuccessHandler)"}}),yield Object.defineProperty((0,ut.jP)(y.ux,Kt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:119,code:"takeEvery(disconnected, lvisDisconnectedHandler)"}}),yield Object.defineProperty((0,ut.jP)(y.jI,Qt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:120,code:"takeEvery(connecting, lvisConnectingHandler)"}}),yield Object.defineProperty((0,ut.jP)(y.aW,Yt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:121,code:"takeEvery(connected, lvisConnectedHandler)"}}),yield Object.defineProperty((0,ut.jP)(p.im,qt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:123,code:"takeEvery(fetchUser, fetchUserHandler)"}}),yield Object.defineProperty((0,ut.jP)(p.R6,Xt),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:124,code:"takeEvery(openIframe, openIframeHandler)"}})}Object.defineProperty(Wt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:46,code:null}}),Object.defineProperty(Zt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:71,code:null}}),Object.defineProperty(Jt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:75,code:null}}),Object.defineProperty(Kt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:79,code:null}}),Object.defineProperty(Qt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:83,code:null}}),Object.defineProperty(Yt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:87,code:null}}),Object.defineProperty(Xt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:91,code:null}}),Object.defineProperty(qt,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:101,code:null}}),Object.defineProperty(en,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/m-id-auth/store/sagas/index.ts",lineNumber:116,code:null}});var tn=n("/DvN");function*nn(){const{userId:e}=yield Object.defineProperty((0,ut.Lt)(vt.Fc),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:21,code:"select(getAuthInfo)"}});if(!e)return;const t=yield Object.defineProperty((0,ut.Lt)(yt._s),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:27,code:"select(getEventId)"}}),n=yield Object.defineProperty((0,ut.Lt)(bt.H3),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:28,code:"select(getProjectID)"}}),r=(0,gt.$_)(),i=yield Object.defineProperty((0,ut.Lt)(tn.vw),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:30,code:"select(getPointsDataByProjectLastWeekIsFetched)"}}),a=yield Object.defineProperty((0,ut.Lt)(yt.DY),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:32,code:"select(getGamificationApiMaxDelay)"}}),o=Math.floor(Math.random()*a);yield Object.defineProperty((0,ut.cb)(o),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:34,code:"delay(delayTime)"}});try{const{data:a}=yield Object.defineProperty((0,ut.T1)(ht.LR,{baseUrl:r,projectID:n}),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:37,code:"call(getEventGroups, {\n      baseUrl,\n      projectID,\n    })"}}),o=a.data.find(e=>e.events.map(({eventId:e})=>e).includes(t));if(o){const t=o.id,s=o.name,l=s.match(/\d+/)?.[0],d=a.data.find(e=>e.name==="Week "+(l-1));if(d&&!i){const{data:t}=yield Object.defineProperty((0,ut.T1)(ht.iC,{baseUrl:r,projectID:n,leaderboardId:`group_${d.id}`,userID:e}),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:54,code:"call(getUserDataForProject, {\n          baseUrl,\n          projectID,\n          leaderboardId: `group_${lastWeekGroup.id}`,\n          userID: userId,\n        })"}}),i=t.data.score||0;yield Object.defineProperty((0,ut.yJ)((0,We.HR)({points:i})),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:63,code:"put(fetchProjectLastWeekScoreSuccess({ points }))"}})}else d||i||(yield Object.defineProperty((0,ut.yJ)((0,We.HR)({points:0})),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:65,code:"put(fetchProjectLastWeekScoreSuccess({ points: 0 }))"}}));const{data:c}=yield Object.defineProperty((0,ut.T1)(ht.iC,{baseUrl:r,projectID:n,leaderboardId:`group_${t}`,userID:e}),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:68,code:"call(getUserDataForProject, {\n        baseUrl,\n        projectID,\n        leaderboardId: `group_${groupId}`,\n        userID: userId,\n      })"}}),u=c.data.score||0;yield Object.defineProperty((0,ut.yJ)((0,We.TR)({points:u})),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:77,code:"put(fetchProjectScoreSuccess({ points }))"}})}}catch(e){ft.A.log(e)}}function*rn(){const{userId:e}=yield Object.defineProperty((0,ut.Lt)(vt.Fc),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:85,code:"select(getAuthInfo)"}});if(!e)return;const t=yield Object.defineProperty((0,ut.Lt)(yt._s),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:91,code:"select(getEventId)"}}),n=yield Object.defineProperty((0,ut.Lt)(bt.H3),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:92,code:"select(getProjectID)"}}),r=(0,gt.$_)(),i=yield Object.defineProperty((0,ut.Lt)(yt.DY),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:95,code:"select(getGamificationApiMaxDelay)"}}),a=Math.floor(Math.random()*i);yield Object.defineProperty((0,ut.cb)(a),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:97,code:"delay(delayTime)"}});try{const{data:i}=yield Object.defineProperty((0,ut.T1)(ht.Lf,{baseUrl:r,projectID:n,eventID:t,leaderboardId:"overall",userID:e}),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:100,code:"call(getUserDataForEvent, {\n      baseUrl,\n      projectID,\n      eventID,\n      leaderboardId: 'overall',\n      userID: userId,\n    })"}}),a=i.data.score||0;yield Object.defineProperty((0,ut.yJ)((0,We.Ce)({eventId:t,round:null,points:a})),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:110,code:"put(fetchEventScoreSuccess({ eventId: eventID, round: null, points }))"}})}catch(e){ft.A.log(e)}}Object.defineProperty(nn,"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:20,code:null}}),Object.defineProperty(rn,"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/handlers.js",lineNumber:84,code:null}});var an=n("6WEz");function*on(){yield Object.defineProperty((0,ut.s)(m.Ts),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/index.js",lineNumber:11,code:"take(init)"}});const{gamificationPollInterval:e}=yield Object.defineProperty((0,ut.Lt)(an.H6),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/index.js",lineNumber:13,code:"select(getAppSetup)"}}),t=e>3e3?e:3e3;for(;;)yield Object.defineProperty(nn(),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/index.js",lineNumber:19,code:"fetchGroupUserScoreHandler()"}}),yield Object.defineProperty(rn(),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/index.js",lineNumber:20,code:"fetchEventUserScoreHandler()"}}),yield Object.defineProperty((0,ut.cb)(t),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/index.js",lineNumber:21,code:"delay(pollInterval)"}})}function*sn(){yield Object.defineProperty((0,ut.Zy)(on),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/index.js",lineNumber:26,code:"fork(pollScore)"}})}Object.defineProperty(on,"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/index.js",lineNumber:10,code:null}}),Object.defineProperty(sn,"@@redux-saga/LOCATION",{value:{fileName:"src/custom/modules/score/store/sagas/index.js",lineNumber:25,code:null}});var ln=n("UvmQ");function*dn(){const e=yield Object.defineProperty((0,ut.Lt)(bt.H3),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/sso/store/sagas/index.ts",lineNumber:18,code:"select(getProjectID)"}}),{mIdFrontendUrl:t,mIdEnabled:n=!1}=yield Object.defineProperty((0,ut.Lt)(an.H6),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/sso/store/sagas/index.ts",lineNumber:19,code:"select(getAppSetup)"}}),r=(0,u.u)();if(n&&r&&t)try{const n=window.localStorage.getItem("monterosa_sdk_device_id"),r=yield Object.defineProperty((0,ut.T1)(ln.Og,{baseUrl:t,projectId:e,deviceId:n}),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/sso/store/sagas/index.ts",lineNumber:26,code:"call(checkUser, { baseUrl: mIdFrontendUrl, projectId, deviceId })"}}),i=((e,t=null)=>e&&void 0!==e.data?e.data:t)(r?.data);i.username?yield Object.defineProperty((0,ut.yJ)((0,p.a5)()),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/sso/store/sagas/index.ts",lineNumber:32,code:"put(hideUsernameModal())"}}):yield Object.defineProperty((0,ut.yJ)((0,p.Kr)()),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/sso/store/sagas/index.ts",lineNumber:30,code:"put(openUsernameModal())"}}),yield Object.defineProperty((0,ut.yJ)((0,p.Ne)(i)),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/sso/store/sagas/index.ts",lineNumber:35,code:"put(loginSuccess(userData))"}})}catch(e){yield Object.defineProperty((0,ut.yJ)((0,p.ie)(e.message)),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/sso/store/sagas/index.ts",lineNumber:37,code:"put(loginFailure(e.message))"}}),yield Object.defineProperty((0,ut.yJ)((0,g.KW)()),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/sso/store/sagas/index.ts",lineNumber:38,code:"put(removeAllUserVotes())"}})}}function*cn(){yield Object.defineProperty((0,ut.jP)(m.Ts,dn),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/sso/store/sagas/index.ts",lineNumber:43,code:"takeEvery(init, initHandler)"}})}Object.defineProperty(dn,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/sso/store/sagas/index.ts",lineNumber:17,code:null}}),Object.defineProperty(cn,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/sso/store/sagas/index.ts",lineNumber:42,code:null}});const un=e=>(e=>e.pickem)(e).event??null,pn=e=>e===pt.Event.STATE_ACTIVE,mn=e=>e===pt.Event.STATE_UPCOMING,gn=e=>e===pt.Event.STATE_FINISHED;function fn(e,t){let n;return t&&(n=e.find(e=>e.getUUID()===t)),!n&&t&&(n=pt.Listings.get(t)),n||(n=(e=>e.reverse().find(e=>{const t=e.getCustomFields(),n=t&&"object"==typeof t&&"gameType"in t?t.gameType:null,r=e.getState();return"weekly"===n&&r===pt.Event.STATE_ACTIVE}))(e),n||(n=(e=>e.reverse().find(e=>{const t=e.getCustomFields(),n=t&&"object"==typeof t&&"gameType"in t?t.gameType:null,r=e.getState();return"weekly"===n&&r===pt.Event.STATE_FINISHED}))(e)),n||(n=(e=>{return t=e.filter(e=>mn(e.getState())).sort((e,t)=>e.getStartAt()<t.getStartAt()?-1:1),t[0];var t})(e))),n}function hn(e){const t=e.getState();return{id:e.getUUID(),name:e.getName(),endAt:e.getEndAt(),state:t,startAt:e.getStartAt(),isActive:pn(t),isFinished:gn(t),isUpcoming:mn(t),customFields:e.getCustomFields()}}var vn=n("QSxb"),yn=n("klPl");const bn=`${C.rS.APP_NAME}_init-time`;function xn(e){return(0,c.Od)(t=>(e.addEventListener("message",t),()=>{e.removeEventListener("message",t),e.close()}))}function Nn(e,t){const n=function(e,t){return e?JSON.parse(e)[t]:null}(e,t);return null===n?n:parseInt(n,10)}function*An(e,t,{key:n,newValue:r,oldValue:i}){if(null===n||n===bn&&Nn(r,e)!==Nn(i,e)){const{allowMultipleSessions:e=!1}=yield Object.defineProperty((0,ut.Lt)(an.H6),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/storage/store/sagas/index.js",lineNumber:43,code:"select(getAppSetup)"}});e||(yield Object.defineProperty((0,ut.yJ)((0,m.oL)(!1)),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/storage/store/sagas/index.js",lineNumber:47,code:"put(setAreActionsHandled(false))"}}),yield Object.defineProperty((0,ut.yJ)(x(yn.b.STORAGE_CHANGED)),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/storage/store/sagas/index.js",lineNumber:48,code:"put(redirect(ROUTES.STORAGE_CHANGED))"}}),t.close())}}function*Cn(e){if(!(0,u.u)())return void(yield Object.defineProperty((0,ut.yJ)({type:"STORAGE_DISABLED",payload:{message:"Local storage is not available."}}),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/storage/store/sagas/index.js",lineNumber:57,code:"put({\n      type: 'STORAGE_DISABLED',\n      payload: { message: 'Local storage is not available.' },\n    })"}}));const t=new vn.X2("storage-channel",O()),n=e.getUUID(),r=localStorage.getItem(bn),i=r?JSON.parse(r):{};i[n]=(new Date).getTime();const a=localStorage.getItem(bn),o=JSON.stringify(i);localStorage.setItem(bn,o),t.postMessage({key:bn,oldValue:a,newValue:o});const s=yield Object.defineProperty((0,ut.T1)(xn,t),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/storage/store/sagas/index.js",lineNumber:74,code:"call(createOnChangeStorageChannel, storageChannel)"}});yield Object.defineProperty((0,ut.jP)(s,An,n,s),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/storage/store/sagas/index.js",lineNumber:76,code:"takeEvery(channel, onChangeStorageHandler, eventId, channel)"}})}function*On(){const e=yield Object.defineProperty((0,ut.Lt)(yt._s),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/handlers.js",lineNumber:9,code:"select(getEventId)"}});yield Object.defineProperty((0,ut.yJ)(Y({eventId:e,sessionId:pt.User.getSessionId()})),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/handlers.js",lineNumber:11,code:"put(updateSessionId({ eventId, sessionId: User.getSessionId() }))"}})}function*Tn({payload:e}){const t=yield Object.defineProperty((0,ut.Lt)(yt._s),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/handlers.js",lineNumber:15,code:"select(getEventId)"}});yield Object.defineProperty((0,ut.yJ)(Q({eventId:t,name:e})),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/handlers.js",lineNumber:17,code:"put(updateNameForEvent({ eventId, name }))"}})}function*In(){yield Object.defineProperty((0,ut.jP)(f.hZ,On),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/observers.js",lineNumber:8,code:"takeEvery(setEvent, updateSessionIdHandler)"}})}function*En(){yield Object.defineProperty((0,ut.jP)(K,Tn),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/observers.js",lineNumber:12,code:"takeEvery(updateName, updateNameHandler)"}})}Object.defineProperty(An,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/storage/store/sagas/index.js",lineNumber:38,code:null}}),Object.defineProperty(Cn,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/storage/store/sagas/index.js",lineNumber:54,code:null}}),Object.defineProperty(On,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/handlers.js",lineNumber:8,code:null}}),Object.defineProperty(Tn,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/handlers.js",lineNumber:14,code:null}}),Object.defineProperty(In,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/observers.js",lineNumber:7,code:null}}),Object.defineProperty(En,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/observers.js",lineNumber:11,code:null}});var wn=n("xs66");function*_n(){const e=null===(yield Object.defineProperty((0,ut.Lt)(wn.z3),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/index.js",lineNumber:8,code:"select(getUserFirstVisit)"}}));yield Object.defineProperty((0,ut.yJ)(X({isFirstVisited:e})),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/index.js",lineNumber:11,code:"put(updateVisitedState({ isFirstVisited }))"}})}function*kn(){yield Object.defineProperty((0,ut.Zy)(In),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/index.js",lineNumber:15,code:"fork(updateSessionIdObserver)"}}),yield Object.defineProperty((0,ut.Zy)(En),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/index.js",lineNumber:16,code:"fork(updateNameObserver)"}}),yield Object.defineProperty(_n(),"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/index.js",lineNumber:17,code:"updateVisited()"}})}function*Pn({state:e}){yield Object.defineProperty((0,ut.yJ)((0,f.Uk)({state:e,isActive:pn(e),isFinished:gn(e),isUpcoming:mn(e)})),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/handlers.ts",lineNumber:19,code:"put(\n    changeState({\n      state,\n      isActive: isActiveEvent(state),\n      isFinished: isFinishedEvent(state),\n      isUpcoming: isUpcomingEvent(state),\n    }),\n  )"}}),yield Object.defineProperty((0,ut.yJ)(x()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/handlers.ts",lineNumber:28,code:"put(redirect())"}})}function*jn({eventInstance:e}){yield Object.defineProperty((0,ut.yJ)((0,f.yo)(hn(e))),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/handlers.ts",lineNumber:32,code:"put(update(getEventData(eventInstance)))"}})}function*Ln({eventInstance:e,elementInstance:t}){yield Object.defineProperty((0,ut.yJ)((0,f.n)({elementInstance:t,eventInstance:e})),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/handlers.ts",lineNumber:36,code:"put(createElement({ elementInstance, eventInstance }))"}})}function*$n({eventInstance:e,elementInstance:t}){yield Object.defineProperty((0,ut.yJ)((0,f.cJ)({elementInstance:t,eventInstance:e})),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/handlers.ts",lineNumber:40,code:"put(updateElement({ elementInstance, eventInstance }))"}})}function*Sn({eventInstance:e,elementInstance:t}){yield Object.defineProperty((0,ut.yJ)((0,f.vh)({eventInstance:e,elementInstance:t})),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/handlers.ts",lineNumber:44,code:"put(revokeElement({ eventInstance, elementInstance }))"}})}Object.defineProperty(_n,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/index.js",lineNumber:7,code:null}}),Object.defineProperty(kn,"@@redux-saga/LOCATION",{value:{fileName:"src/modules/user/store/sagas/index.js",lineNumber:14,code:null}}),Object.defineProperty(Pn,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/handlers.ts",lineNumber:18,code:null}}),Object.defineProperty(jn,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/handlers.ts",lineNumber:31,code:null}}),Object.defineProperty(Ln,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/handlers.ts",lineNumber:35,code:null}}),Object.defineProperty($n,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/handlers.ts",lineNumber:39,code:null}}),Object.defineProperty(Sn,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/handlers.ts",lineNumber:43,code:null}});var Rn=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-/,Bn=n("8fbK"),Dn=n("Q1a0"),Hn=n("rvm8"),Mn=n("9DRM"),zn=n("qvNf"),Un=n("DcEz"),Vn=n("udCZ"),Fn=n("d80D"),Gn=n("PT1H"),Wn=n("sCWl"),Zn=n("MdoO"),Jn=n("1mTy");const Kn={[Jn.WT]:Bn.Qf,[Jn.Ic]:Dn.u7,[Jn.wW]:Dn.u7,[Jn.pZ]:Bn.Qf,[Jn.D2]:Bn.Qf,[Jn.D9]:Bn.Qf,[Jn.YH]:Bn.Qf,[Jn.NY]:Hn._u,[Jn.sP]:Bn.Qf,[Jn.Bk]:Bn.Qf,[Jn.Rx]:Bn.Qf,[Jn.Ry]:Mn.Hf,[Jn.ZE]:Bn.Qf,[Jn.EP]:Bn.Qf,[Jn.Kw]:Dn.u7,[Jn.mG]:Dn.u7,[Jn.qi]:Dn.u7,[Jn.Bj]:Bn.Qf,[Jn.ys]:Bn.Qf,[Jn.YZ]:Un.S,[Jn.dw]:zn.nK,[Jn.gU]:Fn.F,[Jn.jW]:Mn.Hf,[Jn.sn]:Dn.u7,[Jn.WI]:Mn.Hf,[Jn.Mt]:Mn.Hf,[Jn.jC]:Dn.u7,[Jn.tH]:Dn.u7,[Jn.Z2]:Bn.Qf,[Jn.oZ]:Mn.Hf,[Jn.V2]:Dn.u7,[Jn.x1]:Dn.u7,[Jn.Oe]:Dn.u7,[Jn.Vx]:Mn.Hf,[Jn.BQ]:Bn.Qf,[Jn.PN]:Mn.Hf,[Jn.kB]:Vn.L,[Jn.w9]:Bn.Qf,[Jn.HX]:Bn.Qf,[Jn.Uw]:Bn.Qf,[Jn.$$]:Mn.Hf,[Jn.QN]:Dn.u7,[Jn.oP]:Bn.Qf,[Jn.hV]:Dn.u7,[Jn.$i]:Dn.u7,[Jn.nn]:Bn.Qf,[Jn.Sh]:Gn.n,[Jn.Ov]:Mn.Hf,[Jn.Yz]:Dn.u7,[Jn.Rz]:Bn.Qf,[Jn.QU]:Bn.Qf,[Jn.VT]:Bn.Qf,[Jn.Ej]:Mn.Hf,[Jn.zG]:Dn.u7,[Jn.dt]:Dn.u7,[Jn.Bc]:zn.nK,[Jn.z8]:Bn.Qf,[Jn.Qb]:Bn.Qf,[Jn.SB]:Wn.d,[Jn.j3]:zn.nK,[Jn.tW]:Zn.e,[Jn.HM]:Bn.Qf};function Qn({eventInstance:e,elementInstance:t,userVotes:n={}}){const{contentType:r}=t,i=Kn[r];return i?i({eventInstance:e,elementInstance:t,userVotes:n}):null}var Yn=n("bvkK");const Xn=async e=>(await e).default,qn=()=>Xn(n.e(2203).then(n.bind(n,"8I4N"))),er=()=>Xn(n.e(7838).then(n.bind(n,"fNHn"))),tr=()=>Xn(n.e(6958).then(n.bind(n,"GVav"))),nr=()=>Xn(n.e(2975).then(n.bind(n,"bqqp"))),rr=()=>Xn(n.e(4952).then(n.bind(n,"4AId"))),ir={[Jn.WT]:qn,[Jn.Ic]:er,[Jn.wW]:er,[Jn.pZ]:qn,[Jn.D2]:qn,[Jn.D9]:qn,[Jn.YH]:qn,[Jn.NY]:()=>Xn(n.e(7726).then(n.bind(n,"rG53"))),[Jn.sP]:qn,[Jn.Bk]:qn,[Jn.Ry]:tr,[Jn.Rx]:qn,[Jn.ZE]:qn,[Jn.EP]:qn,[Jn.Kw]:er,[Jn.mG]:er,[Jn.qi]:er,[Jn.Bj]:qn,[Jn.ys]:qn,[Jn.YZ]:()=>Xn(n.e(667).then(n.bind(n,"3UwX"))),[Jn.dw]:rr,[Jn.gU]:()=>Xn(n.e(1945).then(n.bind(n,"+lFb"))),[Jn.jW]:tr,[Jn.sn]:er,[Jn.WI]:tr,[Jn.Mt]:tr,[Jn.jC]:er,[Jn.tH]:er,[Jn.Z2]:qn,[Jn.oZ]:tr,[Jn.Oe]:nr,[Jn.V2]:er,[Jn.x1]:er,[Jn.Vx]:tr,[Jn.BQ]:qn,[Jn.PN]:tr,[Jn.kB]:()=>Xn(n.e(2955).then(n.bind(n,"ikEQ"))),[Jn.w9]:qn,[Jn.HX]:qn,[Jn.Uw]:qn,[Jn.$$]:tr,[Jn.QN]:er,[Jn.oP]:qn,[Jn.hV]:()=>Xn(n.e(9348).then(n.bind(n,"1XL8"))),[Jn.$i]:nr,[Jn.nn]:qn,[Jn.Sh]:()=>Xn(n.e(4312).then(n.bind(n,"Ap6h"))),[Jn.Ov]:tr,[Jn.Yz]:er,[Jn.Rz]:qn,[Jn.QU]:qn,[Jn.VT]:qn,[Jn.Ej]:tr,[Jn.zG]:()=>Xn(n.e(65).then(n.bind(n,"0X9k"))),[Jn.dt]:er,[Jn.Bc]:rr,[Jn.z8]:qn,[Jn.Qb]:qn,[Jn.SB]:()=>Xn(n.e(5099).then(n.bind(n,"aeIe"))),[Jn.j3]:rr,[Jn.tW]:()=>Xn(n.e(7015).then(n.bind(n,"vOim"))),[Jn.HM]:qn};function ar(e){const{contentType:t}=e;return ir[t]}const or=new Map;function*sr(e){const t=or.get(e);yield Object.defineProperty((0,ut.ZT)(t),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:27,code:"cancel(task)"}}),or.delete(e)}function*lr(){const e=[...or.keys()];for(;e.length;)yield*sr(e.pop())}function*dr({eventInstance:e,elementInstance:t,elementSaga:n}){const r=yield Object.defineProperty((0,ut.Zy)(n,{elementInstance:t,eventInstance:e}),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:41,code:"fork(elementSaga, { elementInstance, eventInstance })"}});or.set(t.id,r)}function*cr({eventInstance:e,suitableElements:t,listElementsSaga:n}){for(let r=0;r<t.length;r+=1){const i=t[r],a=yield Object.defineProperty((0,ut.T1)(n[r]),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:49,code:"call(listElementsSaga[index])"}});yield*dr({elementSaga:a,elementInstance:i,eventInstance:e})}}function*ur(e){const t=yield Object.defineProperty((0,ut.Lt)(Yn.QN),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:56,code:"select(getVotesForCurrentEvent)"}}),n=(e.getHistory()||[]).filter(Qe.ec).reverse(),r=n.map(n=>Qn({eventInstance:e,elementInstance:n,userVotes:t[n.id]})),i=n.map(ar);yield Object.defineProperty((0,ut.yJ)((0,g.vt)(r)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:64,code:"put(create(listElementsData))"}}),yield*cr({eventInstance:e,suitableElements:n,listElementsSaga:i}),yield Object.defineProperty((0,ut.yJ)((0,g.md)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:68,code:"put(createComplete())"}})}function*pr(e,{payload:{elementInstance:t}}){if(!(0,Qe.ec)(t))return;const n=Qn({eventInstance:e,elementInstance:t}),r=yield Object.defineProperty((0,ut.T1)(ar(t)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:77,code:"call(getElementSaga(elementInstance))"}});yield Object.defineProperty((0,ut.yJ)((0,g.n)(n)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:79,code:"put(createElement(elementData))"}}),yield*dr({eventInstance:e,elementInstance:t,elementSaga:r})}function*mr(e,{payload:{elementInstance:t}}){if(!(0,Qe.ec)(t))return;const n=yield Object.defineProperty((0,ut.Lt)(e=>(0,Yn.BM)(e,t.id)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:89,code:"select((state) => getUserVotesByElementId(state, elementInstance.id))"}}),r=Qn({eventInstance:e,elementInstance:t,userVotes:n});yield Object.defineProperty((0,ut.yJ)((0,g.cJ)(r)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:92,code:"put(updateElement(elementData))"}})}function*gr(e){const t=e.getHistory()||[];for(let n=0;n<t.length;n+=1)yield*mr(e,{payload:{elementInstance:t[n]}})}function*fr(e,{payload:{elementInstance:t}}){or.has(t.id)&&(yield*sr(t.id),yield Object.defineProperty((0,ut.yJ)((0,g.vh)(t.id)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:109,code:"put(revokeElement(elementInstance.id))"}}))}function*hr(e,{payload:t}){yield Object.defineProperty((0,ut.yJ)((0,g.UA)({eventId:e.getUUID,elementId:t})),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:113,code:"put(removeUserVoteByElementAndEvent({ eventId: eventInstance.getUUID, elementId }))"}})}function*vr(){const e=window.location.hash.split("el=").pop();Rn.test(e)&&(yield Object.defineProperty((0,ut.yJ)((0,we.d)(e)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:121,code:"put(setElement(getElementIDFromURL))"}}))}function*yr(e){try{for(yield Object.defineProperty((0,ut.jP)(f.n,pr,e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:127,code:"takeEvery(eventActions.createElement, onElementCreateHandler, eventInstance)"}}),yield Object.defineProperty((0,ut.jP)(f.cJ,mr,e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:128,code:"takeEvery(eventActions.updateElement, onElementUpdateHandler, eventInstance)"}}),yield Object.defineProperty((0,ut.jP)(f.vh,fr,e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:129,code:"takeEvery(eventActions.revokeElement, onElementRevokeHandler, eventInstance)"}}),yield Object.defineProperty((0,ut.jP)(g.md,vr),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:131,code:"takeEvery(createComplete, onElementInURL)"}}),yield Object.defineProperty((0,ut.jP)(g.qd,hr,e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:132,code:"takeEvery(removeUserVoteElement, onElementRemoveVote, eventInstance)"}}),yield Object.defineProperty((0,ut.jP)(y.v2,gr,e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:133,code:"takeEvery(changeLanguage, onAllElementsUpdateHandler, eventInstance)"}}),yield*ur(e);;)yield Object.defineProperty((0,ut.s)(g.i3),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:137,code:"take(revokeAll)"}})}finally{(yield Object.defineProperty((0,ut.KW)(),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:140,code:"cancelled()"}}))&&(yield*lr(),yield Object.defineProperty((0,ut.yJ)((0,g.i3)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:143,code:"put(revokeAll())"}}))}}Object.defineProperty(sr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:24,code:null}}),Object.defineProperty(lr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:32,code:null}}),Object.defineProperty(dr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:40,code:null}}),Object.defineProperty(cr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:46,code:null}}),Object.defineProperty(ur,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:55,code:null}}),Object.defineProperty(pr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:71,code:null}}),Object.defineProperty(mr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:84,code:null}}),Object.defineProperty(gr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:95,code:null}}),Object.defineProperty(fr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:102,code:null}}),Object.defineProperty(hr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:112,code:null}}),Object.defineProperty(vr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:116,code:null}}),Object.defineProperty(yr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/elements/index.ts",lineNumber:125,code:null}});let br=null;function*xr(e){yield Object.defineProperty((0,ut.yJ)((0,g.S9)(e.getUUID())),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:36,code:"put(removeUserVotesByEvent(eventInstance.getUUID()))"}}),yield Object.defineProperty((0,ut.yJ)((0,g.tb)(e.getUUID())),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:37,code:"put(goToFirstElementByEvent(eventInstance.getUUID()))"}})}function*Nr(){br&&(yield Object.defineProperty((0,ut.ZT)(br),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:45,code:"cancel(elementsTask)"}}),br=null)}function*Ar(e){yield Object.defineProperty(Nr(),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:51,code:"cancelElementsTask()"}});const{restartOnLoad:t=!1}=yield Object.defineProperty((0,ut.Lt)(an.H6),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:53,code:"select(getAppSetup)"}});t&&(yield Object.defineProperty((0,ut.T1)(xr,e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:55,code:"call(resetElementsOnRestart, eventInstance)"}})),br=yield Object.defineProperty((0,ut.Zy)(yr,e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:58,code:"fork(elementsSaga, eventInstance)"}})}function*Cr(e){yield Object.defineProperty((0,ut.yJ)((0,f.hZ)(e)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:62,code:"put(set(eventData))"}})}function*Or(e){var t;yield Object.defineProperty((t=e,new Promise(e=>{t.bind(pt.Event.ON_READY,()=>{t.unbind(pt.Event.ON_READY),e(t)}),(0,pt.setEvent)(t)})),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:66,code:"setEventToLvis(eventInstance)"}}),yield Object.defineProperty((0,ut.Zy)(Cn,e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:67,code:"fork(storage, eventInstance)"}}),yield Object.defineProperty((0,ut.Zy)(kn),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:68,code:"fork(user)"}});const n=hn(e);yield Object.defineProperty(Cr(n),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:70,code:"setEventData(eventData)"}}),yield Object.defineProperty((0,ut.yJ)(x()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:71,code:"put(redirect())"}});const{customFields:{requireUserLogin:r=!1}={}}=n;r?(yield Object.defineProperty((0,ut.s)(g.WP),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:78,code:"take(initElements)"}}),yield*Ar(e)):yield*Ar(e)}function*Tr(e){yield Object.defineProperty((0,ut.T1)(xr,e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:84,code:"call(resetElementsOnRestart, eventInstance)"}}),yield*Ar(e)}function*Ir(e){const t=yield Object.defineProperty(function(e){return(0,c.Od)(t=>{const n=e=>t({state:e});return e.bind(pt.Event.ON_STATE,n),()=>e.unbind(pt.Event.ON_STATE,n)})}(e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:89,code:"onStateChanelCreator(eventInstance)"}}),n=yield Object.defineProperty(function(e){return(0,c.Od)(t=>{const n=()=>t({eventInstance:e});return e.bind(pt.Event.ON_UPDATE,n),()=>e.unbind(pt.Event.ON_UPDATE,n)})}(e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:90,code:"onUpdateChanelCreator(eventInstance)"}}),r=yield Object.defineProperty(function(e){return(0,c.Od)(t=>{const n=n=>t({eventInstance:e,elementInstance:n});return e.bind(pt.Event.ON_ELEMENT_PUBLISH,n),()=>e.unbind(pt.Event.ON_ELEMENT_PUBLISH,n)})}(e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:91,code:"onElementCreateChanelCreator(eventInstance)"}}),i=yield Object.defineProperty(function(e){return(0,c.Od)(t=>{const n=n=>t({eventInstance:e,elementInstance:n});return e.bind(pt.Event.ON_ELEMENT_REVOKE,n),()=>e.unbind(pt.Event.ON_ELEMENT_REVOKE,n)})}(e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:92,code:"onElementRevokeChanelCreator(eventInstance)"}}),a=yield Object.defineProperty(function(e){return(0,c.Od)(t=>{const n=n=>t({eventInstance:e,elementInstance:n});return e.bind(pt.Event.ON_ELEMENT_UPDATE,n),()=>e.unbind(pt.Event.ON_ELEMENT_UPDATE,n)})}(e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:93,code:"onElementUpdateChanelCreator(eventInstance)"}});try{for(yield Object.defineProperty((0,ut.jP)(t,Pn),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:96,code:"takeEvery(onStateChanel, onStateHandler)"}}),yield Object.defineProperty((0,ut.jP)(n,jn),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:97,code:"takeEvery(onUpdateChanel, onUpdateHandler)"}}),yield Object.defineProperty((0,ut.jP)(r,Ln),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:98,code:"takeEvery(onElementCreateChanel, onCreateElementHandler)"}}),yield Object.defineProperty((0,ut.jP)(i,Sn),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:99,code:"takeEvery(onElementRevokeChanel, onRevokeElementHandler)"}}),yield Object.defineProperty((0,ut.jP)(a,$n),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:100,code:"takeEvery(onElementUpdateChanel, onUpdateElementHandler)"}}),yield Object.defineProperty((0,ut.jP)(f.eZ,Tr,e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:101,code:"takeEvery(replay, onReplayEvent, eventInstance)"}}),yield*Or(e);;)yield Object.defineProperty((0,ut.s)(f.wC),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:105,code:"take(unset)"}})}finally{if(yield Object.defineProperty((0,ut.KW)(),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:108,code:"cancelled()"}})){yield*Nr();try{(0,pt.unsetEvent)()}catch(e){ft.A.info("Event instance unset",e)}t.close(),n.close(),r.close(),i.close(),a.close(),yield Object.defineProperty((0,ut.yJ)((0,f.wC)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:123,code:"put(unset())"}})}}}Object.defineProperty(xr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:35,code:null}}),Object.defineProperty(Nr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:40,code:null}}),Object.defineProperty(Ar,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:50,code:null}}),Object.defineProperty(Cr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:61,code:null}}),Object.defineProperty(Or,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:65,code:null}}),Object.defineProperty(Tr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:83,code:null}}),Object.defineProperty(Ir,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/event/sagas/index.ts",lineNumber:88,code:null}});var Er=n("jTUD"),wr=n.n(Er);const _r=e=>{const t={};return Object.keys(e).forEach(n=>{e[n].forEach(e=>{"endpoint"!==e.name&&"webservice"!==e.name||(t[n]=e.data)})}),t},kr=[".monterosa.cloud","lvis.io"];let Pr,jr;function*Lr(e){const t=e[0],n=yield Object.defineProperty((0,ut.Lt)(bt.Oe),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:48,code:"select(getLvisConnected)"}}),r=yield Object.defineProperty((0,ut.Lt)(bt.G1),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:49,code:"select(getLvisDisconnected)"}});if(t===pt.ConnectionManager.STATE_CONNECTING&&n)yield Object.defineProperty((0,ut.yJ)((0,y.ux)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:52,code:"put(disconnected())"}});else if(t!==pt.ConnectionManager.STATE_CONNECTING||n)t===pt.ConnectionManager.STATE_CONNECTED&&(r&&(yield Object.defineProperty((0,ut.yJ)(x(be.b.ROOT)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:62,code:"put(redirect(ROUTES.ROOT))"}})),yield Object.defineProperty((0,ut.yJ)((0,y.aW)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:64,code:"put(connected())"}}));else{const t=e[1],n=e[2];t>=1&&r&&(yield Object.defineProperty((0,ut.yJ)(x(be.b.NO_CONNECTION)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:57,code:"put(redirect(ROUTES.NO_CONNECTION))"}})),yield Object.defineProperty((0,ut.yJ)((0,y.jI)(n)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:59,code:"put(connecting(delay))"}})}}function*$r(e,t){const n=yield Object.defineProperty((0,ut.Lt)(un),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:69,code:"select(getEvent)"}}),r=fn(e,t||n||C.D_.EVENT_ID);if(!r)return yield Object.defineProperty((0,ut.yJ)((0,f.Av)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:74,code:"put(resetEvent())"}}),yield Object.defineProperty((0,ut.yJ)((0,f.sg)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:75,code:"put(fetched())"}}),void(Pr=null);const i=r.getUUID();i!==Pr&&(Pr=i,jr&&(yield Object.defineProperty((0,ut.ZT)(jr),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:89,code:"cancel(eventTask)"}})),r&&(yield Object.defineProperty((0,ut.yJ)(T(Pr)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:93,code:"put(setEvent(eventId))"}}),yield Object.defineProperty((0,ut.yJ)((0,y.Z7)(Pr)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:94,code:"put(changeEvent(eventId))"}}),jr=yield Object.defineProperty((0,ut.Zy)(Ir,r),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:96,code:"fork(eventSaga, suitableEvent)"}})))}function*Sr({payload:e}){const t=pt.Listings.getList()||[];yield Object.defineProperty((0,ut.Zy)($r,t,e),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:103,code:"fork(eventChangeHandler, listings, payload)"}})}function*Rr(){const e=pt.Listings.getList()||[],t=function(e){return e.map(e=>({id:e.getUUID(),name:e.getName(),state:e.getState(),startAt:e.getStartAt(),endAt:e.getEndAt(),gameId:e.getCustomFields()?.gameId,gameClock:e.getCustomFields()?.gameClock,gameQuarter:e.getCustomFields()?.gameQuarter,broadcasterID:e.getCustomFields()?.broadcaster,homeTeam:e.getCustomFields()?.homeTeam,awayTeam:e.getCustomFields()?.awayTeam,homeScore:e.getCustomFields()?.homeScore,awayScore:e.getCustomFields()?.awayScore,date:wr().utc(e.getCustomFields()?.gameDate).format("YYYY-MM-DD"),type:e.getCustomFields()?.gameType,isLive:"active"===e.getState(),isFinished:"finished"===e.getState(),weekNumber:e.getCustomFields()?.weekNumber}))}(e);yield Object.defineProperty((0,ut.yJ)(v(t)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:110,code:"put(setListings(listListings))"}}),yield Object.defineProperty((0,ut.Zy)($r,e,null),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:111,code:"fork(eventChangeHandler, listings, null)"}})}function*Br(){yield Object.defineProperty((0,ut.cb)(1e3),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:115,code:"sagaDelay(1000)"}})}function*Dr(){const e=(0,pt.getHost)().replace(/^.*?:\/\//,""),t=pt.Project.getUUID();yield Object.defineProperty((0,ut.yJ)((0,y.$e)({host:e,project:t})),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:123,code:"put(updateInstance({ host, project }))"}});const n=pt.Project.getSettings();yield Object.defineProperty((0,ut.yJ)((0,y.J_)({services:_r((0,pt.getAssets)())})),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:126,code:"put(\n    initialized({\n      services: normalizeAssets(getAssets()),\n    }),\n  )"}}),yield Object.defineProperty((0,ut.yJ)((0,b.o)(n)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:131,code:"put(setSettings(settings))"}}),yield Object.defineProperty((0,ut.Zy)(Rr),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:133,code:"fork(updateListings)"}})}function*Hr({count:e}){const{lvis:{presenceCounter:t}}=yield Object.defineProperty((0,ut.Lt)(),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:139,code:"select()"}});t!==e&&(yield Object.defineProperty((0,ut.yJ)((0,y.Po)(e)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:143,code:"put(updatePresenceCounter(count))"}}))}function*Mr(){const{lvis:{host:e,project:t}}=yield Object.defineProperty((0,ut.Lt)(),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:149,code:"select()"}}),n=kr.reduce((t,n)=>t||e.endsWith(n),!1);if(yield Object.defineProperty((0,ut.yJ)((0,N.cL)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:156,code:"put(reset())"}}),!n)throw new Error("Host is not allowed");(0,pt.init)({host:e,project:t})}function*zr(){const e=pt.Project.getSettings();yield Object.defineProperty((0,ut.yJ)((0,b.o)(e)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:168,code:"put(setSettings(settings))"}})}function*Ur(){const e=yield Object.defineProperty((0,c.Od)(e=>{const t=()=>{e({}),e(c.Kp)};return mt().bind(pt.ON_READY,t),()=>mt().unbind(pt.ON_READY,t)}),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:172,code:"lvisReadyChannelCreator()"}}),t=yield Object.defineProperty((0,c.Od)(e=>{const t=(t=null)=>e({count:t});return pt.Project.bind(pt.Project.ON_SUBS_COUNT,t),pt.Project.bind(pt.Project.ON_SUBS_COUNT_MISSING,t),()=>{pt.Project.unbind(pt.Project.ON_SUBS_COUNT,t),pt.Project.unbind(pt.Project.ON_SUBS_COUNT_MISSING,t)}}),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:173,code:"onSubsCountChannelCreator()"}}),n=yield Object.defineProperty((0,c.Od)(e=>{const t=()=>e({});return pt.Listings.bind(pt.Listings.ON_UPDATE,t),()=>pt.Listings.unbind(pt.Listings.ON_UPDATE,t)}),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:174,code:"onListingsUpdateChannelCreator()"}}),r=yield Object.defineProperty((0,c.Od)(e=>{const t=(...t)=>e(t);return pt.ConnectionManager.bind(pt.ConnectionManager.ON_STATE,t),()=>pt.ConnectionManager.unbind(pt.ConnectionManager.ON_STATE,t)}),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:175,code:"connectionChangeStateChannelCreator()"}});yield Object.defineProperty((0,ut.jP)(e,Dr),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:177,code:"takeEvery(lvisReadyChannel, lvisReadyHandler)"}}),yield Object.defineProperty((0,ut.jP)(t,Hr),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:178,code:"takeEvery(subsCountChannel, subsCountHandler)"}}),yield Object.defineProperty((0,ut.jP)(n,Br),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:179,code:"takeEvery(listingsUpdateChannel, listingsUpdateHandler)"}}),yield Object.defineProperty((0,ut.jP)(r,Lr),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:180,code:"takeEvery(connectionChangeStateChannel, connectionChangeStateHandler)"}}),yield Object.defineProperty((0,ut.jP)(y.v2,zr),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:181,code:"takeEvery(changeLanguage, changeLanguageHandler)"}}),yield Object.defineProperty((0,ut.jP)(f.dh,Sr),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:182,code:"takeEvery(eventSwitch, eventSwitchHandler)"}}),yield Object.defineProperty((0,ut.Zy)(Mr),"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:184,code:"fork(lvisInitializeHandler)"}})}Object.defineProperty(Lr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:46,code:null}}),Object.defineProperty($r,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:68,code:null}}),Object.defineProperty(Sr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:100,code:null}}),Object.defineProperty(Rr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:106,code:null}}),Object.defineProperty(Br,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:114,code:null}}),Object.defineProperty(Dr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:119,code:null}}),Object.defineProperty(Hr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:136,code:null}}),Object.defineProperty(Mr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:146,code:null}}),Object.defineProperty(zr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:165,code:null}}),Object.defineProperty(Ur,"@@redux-saga/LOCATION",{value:{fileName:"src/store/modules/lvis/sagas/index.ts",lineNumber:171,code:null}});const Vr=new Set([be.b.NO_EVENT,be.b.NO_CONNECTION,be.b.UPCOMING_EVENT,be.b.USER,be.b.STORAGE_CHANGED]);function*Fr(){const e=yield Object.defineProperty((0,ut.Lt)(yt.S3),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:25,code:"select(getRequireUserLogin)"}}),t=yield Object.defineProperty((0,ut.Lt)(Ae),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:26,code:"select(getCurrentRoute)"}});if(!e)return!1;for(;;){const e=yield Object.defineProperty((0,ut.Lt)(vt.YV),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:33,code:"select(getAuthIsLoggedIn)"}});if(!(yield Object.defineProperty((0,ut.Lt)(vt.OW),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:34,code:"select(getAuthIsPending)"}})))return!e&&(t!==be.b.USER&&(yield Object.defineProperty((0,ut.yJ)((0,Pt.VC)(be.b.USER)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:41,code:"put(push(ROUTES.USER))"}})),!0);yield Object.defineProperty((0,ut.cb)(250),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:37,code:"delay(250)"}})}}function*Gr(e){const t=yield Object.defineProperty((0,ut.Lt)(Ae),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:52,code:"select(getCurrentRoute)"}}),n=yield Object.defineProperty((0,ut.Lt)(xe.$$),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:53,code:"select(getIsInit)"}}),r=yield Object.defineProperty((0,ut.Lt)(xe.Sd),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:54,code:"select(getIsLoaded)"}});return(e=>null===e.id||void 0===e.id)(e)||gn(e)?t===be.b.NO_EVENT?(r||(yield Object.defineProperty((0,ut.cb)(1e3),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:59,code:"delay(1000)"}}),yield Object.defineProperty((0,ut.yJ)((0,m.i1)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:60,code:"put(setLoaded())"}})),!0):(n&&(yield Object.defineProperty((0,ut.yJ)((0,Pt.VC)(be.b.NO_EVENT)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:66,code:"put(push(ROUTES.NO_EVENT))"}}),r||(yield Object.defineProperty((0,ut.cb)(1e3),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:68,code:"delay(1000)"}}),yield Object.defineProperty((0,ut.yJ)((0,m.i1)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:69,code:"put(setLoaded())"}}))),!0):!!mn(e.state)&&(t===be.b.UPCOMING_EVENT?(r||(yield Object.defineProperty((0,ut.yJ)((0,m.i1)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:78,code:"put(setLoaded())"}})),!0):(yield Object.defineProperty((0,ut.yJ)((0,Pt.VC)(be.b.UPCOMING_EVENT)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:83,code:"put(push(ROUTES.UPCOMING_EVENT))"}}),r||(yield Object.defineProperty((0,ut.yJ)((0,m.i1)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:85,code:"put(setLoaded())"}})),!0))}function*Wr({payload:e}){const t=yield Object.defineProperty((0,ut.Lt)(xe.Sd),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:94,code:"select(getIsLoaded)"}});if(e)return void(yield Object.defineProperty((0,ut.yJ)((0,Pt.VC)(e)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:97,code:"put(push(redirectURL))"}}));const n=yield Object.defineProperty((0,ut.Lt)(yt.Zc),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:101,code:"select(getEvent)"}});if(yield Object.defineProperty(Gr(n),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:103,code:"setCurrentRoute(event)"}}))return;if(t||(yield Object.defineProperty((0,ut.yJ)((0,m.i1)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:108,code:"put(setLoaded())"}})),yield*Fr())return;yield Object.defineProperty((0,ut.yJ)((0,g.WP)()),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:115,code:"put(initElements())"}});const r=yield Object.defineProperty((0,ut.Lt)(Ae),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:117,code:"select(getCurrentRoute)"}});Vr.has(r)&&(yield Object.defineProperty((0,ut.yJ)((0,Pt.VC)(be.b.ROOT)),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:120,code:"put(push(ROUTES.ROOT))"}}))}function*Zr(){yield Object.defineProperty((0,ut.jP)([m.Ts,x,f.Av,p.ri,p.f6],Wr),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:125,code:"takeEvery([init, redirect, resetEvent, logout, lvisLoginSuccess], startingFlow)"}})}Object.defineProperty(Fr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:24,code:null}}),Object.defineProperty(Gr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:51,code:null}}),Object.defineProperty(Wr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:93,code:null}}),Object.defineProperty(Zr,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/router/index.ts",lineNumber:124,code:null}});const Jr=Ut.A.create({withCredentials:!0}),Kr=({baseUrl:e,projectId:t,eventId:n,userId:r,token:i})=>Jr.get(`${e}/v1/projects/${t}/events/${n}/users/${r}/vote-history`,{headers:{authorization:`bearer ${i}`}});function*Qr(e,t,n){const r=yield Object.defineProperty((0,ut.Lt)(vt.GQ),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:17,code:"select(getAuthAccessToken)"}}),{mIdFrontendUrl:i}=yield Object.defineProperty((0,ut.Lt)(an.H6),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:18,code:"select(getAppSetup)"}}),a=yield Object.defineProperty((0,ut.Lt)(Yn.QN),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:19,code:"select(getVotesForCurrentEvent)"}}),o=a?.timestamp||0;if(e&&t&&n&&r&&i)try{const a=yield Object.defineProperty((0,ut.T1)(Kr,{userId:e,token:r,baseUrl:i,eventId:n,projectId:t}),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:34,code:"call(fetchVoteHistory, {\n      userId,\n      token: accessToken,\n      baseUrl: mIdFrontendUrl,\n      eventId,\n      projectId,\n    })"}}),s=((e,t=null)=>e&&void 0!==e.data?e.data:t)(a?.data);for(let e=0;e<s.length;e++){const{elementId:t,option:r,tsMs:i}=s[e];if(i>o){let e;if(1===Object.keys(r).length){const t=+Object.keys(r)[0]-1;e={[t]:1}}if(Object.keys(r).length>1){const t={};Object.keys(r).forEach(e=>{const n=parseInt(e,10)-1;t[n.toString()]=r[e]}),e={votes:{...t}}}yield Object.defineProperty((0,ut.yJ)((0,g.dq)({eventId:n,id:t,votes:e})),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:71,code:"put(updateUserVoteElement({ eventId, id: elementId, votes }))"}})}}}catch(e){ft.A.error("Error fetching vote history:",e)}else ft.A.error("Missing required parameters for fetching vote history",{userId:!!e,projectId:!!t,eventId:!!n,accessToken:!!r,serviceUrl:!!i})}function*Yr(){let e,t,n;for(;!(e&&t&&n);)e=yield Object.defineProperty((0,ut.Lt)(vt.LE),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:87,code:"select(getAuthUserId)"}}),t=yield Object.defineProperty((0,ut.Lt)(bt.H3),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:88,code:"select(getProjectID)"}}),n=yield Object.defineProperty((0,ut.Lt)(yt._s),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:89,code:"select(getEventId)"}}),e&&t&&n||(yield Object.defineProperty((0,ut.s)([m.Ts,f.hZ]),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:93,code:"take([init, setEvent])"}}));yield Object.defineProperty((0,ut.T1)(Qr,e,t,n),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:98,code:"call(getUserVoteHistoryByEvent, userId, projectId, eventId)"}})}function*Xr(){const e=yield Object.defineProperty((0,ut.Lt)(vt.LE),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:102,code:"select(getAuthUserId)"}}),t=yield Object.defineProperty((0,ut.Lt)(bt.H3),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:103,code:"select(getProjectID)"}}),n=yield Object.defineProperty((0,ut.Lt)(yt._s),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:104,code:"select(getEventId)"}});e&&t&&n&&(yield Object.defineProperty((0,ut.T1)(Qr,e,t,n),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:110,code:"call(getUserVoteHistoryByEvent, userId, projectId, eventId)"}}))}function*qr(){yield Object.defineProperty((0,ut.jP)(p.Ne,Yr),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:114,code:"takeEvery(loginSuccess, getUserVoteHistoryFlow)"}}),yield Object.defineProperty((0,ut.jP)(f.hZ,Xr),"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:115,code:"takeEvery(setEvent, getPastEventsVoteHistoryFlow)"}})}function*ei(){yield Object.defineProperty((0,ut.Q7)([(0,ut.Zy)(sn),(0,ut.Zy)(kt),(0,ut.Zy)(Zr),(0,ut.Zy)(Ur),(0,ut.Zy)(en),(0,ut.Zy)(Ht),(0,ut.Zy)(Rt),(0,ut.Zy)(qr),(0,ut.Zy)(cn),(0,ut.Zy)(zt)]),"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/index.ts",lineNumber:15,code:"all([\n    fork(score),\n    fork(leaderboard),\n    fork(router),\n    fork(lvis),\n    fork(lvisIdAuth),\n    fork(dataCapture),\n    fork(getEventsRouting),\n    fork(voteHistory),\n    fork(sso),\n    fork(geolocation),\n  ])"}})}Object.defineProperty(Qr,"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:16,code:null}}),Object.defineProperty(Yr,"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:79,code:null}}),Object.defineProperty(Xr,"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:101,code:null}}),Object.defineProperty(qr,"@@redux-saga/LOCATION",{value:{fileName:"src/custom/store/sagas/vote-history/index.ts",lineNumber:113,code:null}}),Object.defineProperty(ei,"@@redux-saga/LOCATION",{value:{fileName:"src/store/sagas/index.ts",lineNumber:14,code:null}});const ti=(l||(l=(0,o.zR)({basename:s})),l),ni=(0,i.Yl)((ri=ti,(0,i.HY)({app:Ke,lvis:lt,user:te,score:Je,event:nt,loader:ot,lvisID:ze,router:(0,Ee.S6)(ri),project:dt.A,elements:qe,listings:rt,sdk:ct,scrolled:_e,quickFireQuiz:z,scaffold:ge,leaderboard:$e,freestyletrivia:$,dataCapture:Me,teamSelector:De,ladder:Pe,podium:Re,reactions:Ge,pickem:w})),ye,(e=>{const t=Ie(e),n=(0,i.Tw)(...t),a=(0,i.Zz)(n);return(0,r.t)(a)})(ti));var ri;Te().run(ei),(0,a.OV)(ni);var ii=ni;const{dispatch:ai,getState:oi}=ni},QBYJ:function(e,t,n){"use strict";n.d(t,{y:function(){return re}});var r=n("mXGw"),i=n("1mTy");const a=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(6036)]).then(n.bind(n,"1xEQ"))),o=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(4017)]).then(n.bind(n,"TEdL"))),s=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(9632)]).then(n.bind(n,"CODP"))),l=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(983),n.e(4711)]).then(n.bind(n,"Db/V"))),d=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(4597),n.e(6936),n.e(7475)]).then(n.bind(n,"FJ/w"))),c=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(4465)]).then(n.bind(n,"JpZ7"))),u=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(9546)]).then(n.bind(n,"lRKU"))),p=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(2165)]).then(n.bind(n,"UXCl"))),m=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(9210)]).then(n.bind(n,"JiMg"))),g=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(4597),n.e(6936),n.e(1207)]).then(n.bind(n,"Wh9G"))),f=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(3479)]).then(n.bind(n,"D+Vc"))),h=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(4469)]).then(n.bind(n,"VgmY"))),v=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(2186),n.e(6171)]).then(n.bind(n,"be6k"))),y=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(7937),n.e(9292)]).then(n.bind(n,"f0Wp"))),b=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(7937),n.e(9292)]).then(n.bind(n,"f0Wp"))),x=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(2813)]).then(n.bind(n,"u3EA"))),N=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(3328)]).then(n.bind(n,"T2AI"))),A=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(4597),n.e(6936),n.e(983),n.e(2558),n.e(4624)]).then(n.bind(n,"WZhK"))),C=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(1478),n.e(6936),n.e(983),n.e(2558),n.e(5030),n.e(183)]).then(n.bind(n,"ga6U"))),O=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(1478),n.e(6936),n.e(983),n.e(2558),n.e(3102)]).then(n.bind(n,"S6Lt"))),T=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(1478),n.e(6936),n.e(983),n.e(2558),n.e(594)]).then(n.bind(n,"Fnqw"))),I=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(7928)]).then(n.bind(n,"mp6c"))),E=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(5030),n.e(1847)]).then(n.bind(n,"KGQ9"))),w=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(7937),n.e(6380)]).then(n.bind(n,"oWNU"))),_=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(6836)]).then(n.bind(n,"Zw/o"))),k=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(803)]).then(n.bind(n,"EkxL"))),P=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(6276)]).then(n.bind(n,"UW3X"))),j=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(447)]).then(n.bind(n,"xbRm"))),L=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(2687)]).then(n.bind(n,"tFPd"))),$=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(2240)]).then(n.bind(n,"bQY9"))),S=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(5801)]).then(n.bind(n,"kinX"))),R=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(2186),n.e(752)]).then(n.bind(n,"OfVd"))),B=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(2186),n.e(2772)]).then(n.bind(n,"3xr4"))),D=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(2051)]).then(n.bind(n,"XE+H"))),H=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(1972)]).then(n.bind(n,"wel/"))),M=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(7762),n.e(6936),n.e(4024)]).then(n.bind(n,"ZF2l"))),z=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(3040),n.e(6936),n.e(983),n.e(2558),n.e(2437)]).then(n.bind(n,"5Hvk"))),U=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6143),n.e(6936),n.e(983),n.e(2558),n.e(2174)]).then(n.bind(n,"mhxz"))),V=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(9609)]).then(n.bind(n,"2rJZ"))),F=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(8251)]).then(n.bind(n,"URU2"))),G=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(1895)]).then(n.bind(n,"nKVz"))),W=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(6727)]).then(n.bind(n,"1KOg"))),Z=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(4868)]).then(n.bind(n,"5pUH"))),J=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(8349)]).then(n.bind(n,"mmPE"))),K=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(6815)]).then(n.bind(n,"YT0i"))),Q=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(3330)]).then(n.bind(n,"ywrn"))),Y=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(8675)]).then(n.bind(n,"5FYS"))),X=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(3166)]).then(n.bind(n,"5em0"))),q=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(6936),n.e(983),n.e(2558),n.e(1547)]).then(n.bind(n,"av9U"))),ee=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(1136),n.e(3040),n.e(6936),n.e(983),n.e(2558),n.e(7896)]).then(n.bind(n,"BBQF"))),te=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(5642)]).then(n.bind(n,"5kdF"))),ne=(0,r.lazy)(()=>Promise.all([n.e(4153),n.e(6936),n.e(2186),n.e(8549)]).then(n.bind(n,"qEvB"))),re={[i.WT]:a,[i.Ic]:o,[i.pZ]:s,[i.D2]:l,[i.D9]:d,[i.YH]:c,[i.NY]:u,[i.sP]:p,[i.Bk]:m,[i.Rx]:g,[i.ZE]:f,[i.EP]:h,[i.mG]:y,[i.qi]:b,[i.Bj]:x,[i.ys]:N,[i.YZ]:A,[i.gU]:C,[i.jC]:O,[i.tH]:T,[i.Z2]:I,[i.oZ]:E,[i.V2]:w,[i.x1]:_,[i.kB]:P,[i.Vx]:k,[i.BQ]:x,[i.w9]:x,[i.HX]:j,[i.Uw]:j,[i.$$]:L,[i.QN]:$,[i.oP]:S,[i.hV]:D,[i.$i]:H,[i.nn]:M,[i.Sh]:z,[i.Yz]:U,[i.Rz]:V,[i.QU]:F,[i.VT]:G,[i.Ej]:W,[i.zG]:Z,[i.dt]:J,[i.Bc]:K,[i.SB]:Q,[i.z8]:Y,[i.Qb]:X,[i.j3]:q,[i.tW]:ee,[i.HM]:te,[i.Ry]:ne,[i.Ov]:R,[i.PN]:B,[i.Kw]:v}},RDW4:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n("1mTy");const i=e=>e===r.jW||e===r.sn||e===r.WI||e===r.Mt},SUpI:function(e,t,n){"use strict";n.d(t,{A:function(){return I}});var r=n("prkb"),i=n("ICk1"),a=n("mXGw"),o=n("BFkT"),s=n("jhQ1"),l=n("uDhf"),d=n("oYCi");const c=({percentage:e,className:t})=>{const{x:n}=(0,s.zh)({from:{x:0},to:{x:e},delay:50}),r={transform:n.to(e=>`translateX(-${100-e}%)`)};return(0,d.jsx)(l.m,{className:t,style:r})};var u=(0,a.memo)(c),p=n("owEX");const m="option-button",g={BLOCK:m,FIGURE:`${m}__figure`,FIGURE_IMAGE:`${m}__figure__image`,FIGURE_PROGRESS:`${m}__figure__progress`,PROGRESS_FILLER:`${m}__progress__filler`,PROGRESS_FILLER_PERCENT:`${m}__progress__filler__percent`,PROGRESS_PERCENT_NUMBER:`${m}__progress__filler__percent__number`,INNER:`${m}__inner`,INNER_CONTENT:`${m}__inner__content`,INNER_CONTENT_INLINE_IMAGE:`${m}__inner__content__inline-image`,INNER_CONTENT_INLINE_IMAGE_IMAGE:`${m}__inner__content__inline-image__image`,INNER_CONTENT_TEXT:`${m}__inner__content__text`,BUTTON_ICON:`${m}__button-icon`,WINNER_TEXT:`${m}__winner__text`,ICON:`${m}__icon`,WITH_IMAGE:`${m}__with--image`,WITH_IMAGE_INLINE:`${m}__with--image-inline`,NOT_CORRECT_OR_SELECTED:`${m}--not-correct-or-selected`,CORRECT_NOT_SELECTED:`${m}--correct-not-selected`,SIBLING_SELECTED:`${m}--sibling-selected`},f=({percentage:e=0,showResults:t})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{className:g.PROGRESS_FILLER,percentage:e}),t&&(0,d.jsx)(p.$,{$show:t,children:(0,d.jsxs)(p.Q,{className:g.PROGRESS_FILLER_PERCENT,children:[(0,d.jsx)(o.zv,{className:g.PROGRESS_PERCENT_NUMBER,value:e}),"%"]})})]});var h=(0,a.memo)(f),v=({withFiller:e,showResults:t,percentage:n,image:r,imageAlt:a,aspectRatio:o,isSelected:s,isCorrect:l,isClosed:c})=>{const u=c&&!s&&!l;return(0,d.jsxs)(i.m,{className:g.FIGURE,children:[e?(0,d.jsx)(h,{showResults:t,percentage:n}):null,(0,d.jsx)(i._,{className:g.FIGURE_IMAGE,imageAlt:a,imageUrl:r,$aspectRatio:o,$shouldDim:u})]})};const y=r.Ay.div.withConfig({displayName:"inline-image__Wrapper"})`
  width: 38px;
  height: 38px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 8px;
  background-color: var(--inline-image-background-color, transparent);
`,b=(0,r.Ay)(o._V).withConfig({displayName:"inline-image__Image"})`
  object-fit: cover;
`;var x=({src:e,alt:t})=>(0,d.jsx)(y,{className:g.INNER_CONTENT_INLINE_IMAGE,children:(0,d.jsx)(b,{className:g.INNER_CONTENT_INLINE_IMAGE_IMAGE,imageUrl:e,imageAlt:t})}),N=n("Eacy"),A=({withImage:e,withInlineImage:t,image:n,children:r,$withMinHeight:i=!0})=>(0,d.jsx)(N.yB,{className:`${g.INNER} ${i?"":"no-min-height"}`,$withImage:e,children:(0,d.jsxs)(N.UC,{className:`${g.INNER_CONTENT} ${i?"":"no-min-height"}`,children:[t?(0,d.jsx)(x,{src:n,alt:r||"option-image"}):null,(0,d.jsx)(N.EY,{className:g.INNER_CONTENT_TEXT,children:r})]})}),C=n("U1YV"),O=n("bISm"),T=n("UHZw"),I=({image:e,imageAlt:t,aspectRatio:n,disabled:r,children:i,percentage:a,withFiller:s,withHover:l,withIcon:c,withDraggable:u,showResults:p,customCss:m,isCorrect:f,isRevealed:y,isSelected:b,isResults:x,winnerText:N,percentageText:I,isPoll:w=!1,siblingSelected:_,isCorrectNotSelected:k,...P})=>{const j=(0,T.Iz)({isPoll:w,isRevealed:y,isCorrect:f,isSelected:b,isClosed:r}),L=!!e&&n===O.nT.INLINE,$=!!e&&n!==O.nT.INLINE,S=c&&!s,R=!$&&s,B=!!i,D=!!I,H=u&&!r,M=f&&!!N&&$,z=!w&&y&&!b&&!f;return(0,d.jsxs)(C.Xy,{children:[(0,d.jsxs)(E,{...P,disabled:r,$isDisabled:r,$showResults:p,$state:k?"correctNotSelected":j,$withImage:$,$withFiller:s,$withHover:l,$withDraggable:H,className:`${g.BLOCK} ${$?g.WITH_IMAGE:""} ${L?g.WITH_IMAGE_INLINE:""} ${z?g.NOT_CORRECT_OR_SELECTED:""} ${k?g.CORRECT_NOT_SELECTED:""} ${_&&!b?g.SIBLING_SELECTED:""}`,$_css:m,children:[$?(0,d.jsx)(v,{withFiller:s,showResults:p,percentage:a,image:e,imageAlt:t,aspectRatio:n,isSelected:b,isCorrect:f,isClosed:r}):null,R?(0,d.jsx)(h,{showResults:p,percentage:a}):null,B?(0,d.jsx)(A,{withImage:$,withInlineImage:L,image:e,$withMinHeight:!D,children:i}):null,D?(0,d.jsx)(A,{withImage:$,withInlineImage:L,image:e,$withMinHeight:!1,children:I}):null,S?(0,d.jsx)(o.a2,{className:g.BUTTON_ICON,state:k?O.yg.CORRECT:j,withDraggable:H,positionAbsolute:!0}):null]}),M?(0,d.jsx)(C.qA,{className:g.WINNER_TEXT,children:(0,d.jsx)(C.d6,{children:N})}):null]})},E=(0,r.Ay)(C.mO).withConfig({displayName:"option-button___StyledWrapper"}).withConfig({displayName:"option-button___StyledWrapper"})`${e=>e.$_css}`},TEbb:function(e,t,n){"use strict";n.d(t,{A:function(){return k}});var r=n("mXGw"),i=n("wXXv"),a=n("lvZi"),o=n("prkb"),s=n("UHZw"),l=n("Wu6c"),d=n("kJnb");const c=(e,t)=>{const n=t.find(t=>t.screen===e);return n&&`margin: ${n.vertical}${n.unit} 0;`},u=o.AH`
  margin: ${`var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V) 0;`};

  ${({$paddings:e})=>e&&c(l.P$.MOBILE_PORTRAIT,e)}

  ${d.A.ssm(o.AH`
      ${`margin: var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V)) 0;`};
    `,({$paddings:e})=>e&&c(l.P$.MOBILE_LANDSCAPE,e))}


  ${d.A.md(o.AH`
      ${`margin: var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V))) 0;`};
    `,({$paddings:e})=>e&&c(l.P$.TABLET_PORTRAIT,e))}


  ${d.A.lg(o.AH`
      ${`margin: var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V)))) 0;`};
    `,({$paddings:e})=>e&&c(l.P$.TABLET_LANDSCAPE,e))}


  ${d.A.xl(o.AH`
      ${`margin: var(--elementPaddings${(0,s.ZH)(l.P$.DESKTOP)}V, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V))))) 0;`};
    `,({$paddings:e})=>e&&c(l.P$.DESKTOP,e))}
`;var p=n("oIgW");const m=(e,t)=>{const n=t.find(t=>t.screen===e);return n&&`\n    padding: 0 ${n.horizontal}${n.unit};\n\n    &:first-child {\n      padding-top: ${n.vertical}${n.unit};\n    }\n\n    &:last-child {\n      padding-bottom: ${n.vertical}${n.unit};\n    }\n  `},g=o.AH`
  padding: 0 ${`var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}H);`};

  &:first-child {
    padding-top: ${`var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V);`};
  }

  &:last-child {
    padding-bottom: ${`var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V);`};
  }

  ${({$paddings:e})=>e&&m(l.P$.MOBILE_PORTRAIT,e)}

  ${d.A.ssm(o.AH`
      ${`padding: 0 var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}H, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}H));`};
    `,o.AH`
      &:first-child {
        ${`padding-top: var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V));`};
      }
    `,o.AH`
      &:last-child {
        ${`padding-bottom: var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V));`};
      }
    `,({$paddings:e})=>e&&m(l.P$.MOBILE_LANDSCAPE,e))}

  ${d.A.md(o.AH`
      ${`padding: 0 var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}H, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}H, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}H)));`};
    `,o.AH`
      &:first-child {
        ${`padding-top: var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V)));`};
      }
    `,o.AH`
      &:last-child {
        ${`padding-bottom: var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V)));`};
      }
    `,({$paddings:e})=>e&&m(l.P$.TABLET_PORTRAIT,e))}


  ${d.A.lg(o.AH`
      ${`padding: 0 var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_LANDSCAPE)}H, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}H, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}H, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}H))));`};
    `,o.AH`
      &:first-child {
        ${`padding-top: var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V))));`};
      }
    `,o.AH`
      &:last-child {
        ${`padding-bottom: var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V))));`};
      }
    `,({$paddings:e})=>e&&m(l.P$.TABLET_LANDSCAPE,e))}

  ${d.A.xl(o.AH`
      ${`padding: 0 var(--elementPaddings${(0,s.ZH)(l.P$.DESKTOP)}H, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_LANDSCAPE)}H, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}H, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}H, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}H)))));`};
    `,o.AH`
      &:first-child {
        ${`padding-top: var(--elementPaddings${(0,s.ZH)(l.P$.DESKTOP)}V, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V)))));`};
      }
    `,o.AH`
      &:last-child {
        ${`padding-bottom: var(--elementPaddings${(0,s.ZH)(l.P$.DESKTOP)}V, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.TABLET_PORTRAIT)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_LANDSCAPE)}V, var(--elementPaddings${(0,s.ZH)(l.P$.MOBILE_PORTRAIT)}V)))));`};
      }
    `,({$paddings:e})=>e&&m(l.P$.DESKTOP,e))}
`,f=o.Ay.div.withConfig({displayName:"element__Divider"})`
  background-color: ${({$color:e})=>e||"transparent"};
  height: ${({$height:e})=>e||0}px;

  ${u}
`,h=o.i7`
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`,v=o.Ay.section.withConfig({displayName:"element__Wrapper"})`
  width: 100%;
  margin: 0 auto;

  opacity: 0;
  transform: translateY(-10px);

  ${({$loaded:e})=>e&&o.AH`
      animation: ${h} 0.4s linear forwards;
    `}

  ${g}

  ${p.U}

  &:last-child ${f} {
    display: none;
  }

  &:nth-child(5n + 1) {
    animation-delay: ${.25}s;
  }
  &:nth-child(5n + 2) {
    animation-delay: ${.5}s;
  }
  &:nth-child(5n + 3) {
    animation-delay: ${.75}s;
  }
  &:nth-child(5n + 4) {
    animation-delay: ${1}s;
  }
  &:nth-child(5n + 5) {
    animation-delay: ${1.25}s;
  }
`;var y=n("5gAz"),b=n("039+"),x=n("nsqW"),N=n("oYCi"),A=({children:e,variables:t})=>{const n=(0,r.useMemo)(()=>Object.entries(t).reduce((e,[t,n])=>({...e,[`--${t}`]:n}),{}),[t]);return(0,N.jsx)("div",{style:n,children:e})},C=n("z1iX"),O=n("X6bk"),T=n("oRQk");const I=({error:e})=>(T.A.error(e.message),null),E=(e,t)=>{C.v4(n=>{n.setExtra("componentStack",t.componentStack),n.setTag("errorBoundary","withErrorHandlingHOC"),n.setTag("environment","production"),C.Cp(e)})};var w=({children:e})=>(0,N.jsx)(O.ErrorBoundary,{FallbackComponent:I,onError:E,children:e});function _({element:e,paddings:t,maxWidths:n,elementBorderRadius:o,dividerColor:s,dividerThickness:l,containerId:d,shared:c=!1}){const[u,p]=(0,r.useState)(!1),m=(0,r.useContext)(b.Ay),{contentType:g,customStyles:h,customFields:{themes:C}}=e;let O=g;O.includes("user-score")?O="scoreElement":O.includes("leaderboard")?O="leaderboardElement":O.includes("score-predictor-")&&(O="scorePredictorElement");const T=(0,r.useMemo)(()=>(0,y.Bb)(m,O,h,C),[m,O,h,C]),{elementHighlightColor:I}=T;I&&!(0,x.Z)(I)&&(T.elementHighlightColorOverrideSingle=(0,i.e$)(.1,I));const E=(0,y.iU)(g);return E?(0,N.jsx)(v,{className:c?"shared-element":null,$loaded:u,id:e.id,$paddings:t,$maxWidths:n,children:(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(a.A,{children:(0,N.jsx)(f,{$paddings:t,$color:s,$height:l})}),children:(0,N.jsxs)(w,{children:[(0,N.jsx)(A,{variables:T,children:(0,N.jsx)(E,{element:e,elementBorderRadius:o,themes:C,containerId:d,setLoaded:p})}),(0,N.jsx)(f,{$paddings:t,$color:s,$height:l})]})},e.id)}):null}var k=(0,r.memo)(_)},Tg3w:function(e,t,n){"use strict";n.d(t,{W_:function(){return o},gJ:function(){return i},g_:function(){return a},jU:function(){return s}});var r=n("Xrb3");const{setStartTime:i,setRandomIds:a,setQuestionsViewed:o,updateRandomIds:s}=(0,r.A)("SET_START_TIME","SET_RANDOM_IDS","SET_QUESTIONS_VIEWED","UPDATE_RANDOM_IDS",{prefix:"quickFireQuiz"})},TweP:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n("vP7M"),i=n("2VT5"),a=n("efaT"),o=n("CEx/");const s={ids:[],votes:{},entities:{},orderedIds:[],currentElementIndexToEvent:{}};(0,a.A)({[o.i3]:e=>({...s,votes:e.votes,currentElementIndexToEvent:e.currentElementIndexToEvent}),[o.vt]:(e,{payload:t})=>({...e,ids:t.sort(r.Tq).map(e=>e.id),entities:t.reduce((e,t)=>(e[t.id]=t,e),{}),orderedIds:t.sort(r.QV).map(e=>e.id)}),[o.n]:(e,{payload:t})=>({...e,ids:[t,...Object.values(e.entities)].sort(r.Tq).map(e=>e.id),entities:{...e.entities,[t.id]:t}}),[o.vh]:(e,{payload:t})=>{const n=e.ids.filter(e=>e!==t),r={...e.entities};return delete r[t],{...e,ids:n,entities:r}},[o.dq]:(e,{payload:{eventId:t,id:n,votes:r}})=>({...e,votes:{...e.votes,[t]:{...e.votes[t],[n]:r}}}),[o.UA]:(e,{payload:{eventId:t,elementId:n}})=>({...e,votes:{...e.votes,[t]:e.votes[t].filter(e=>e.id!==n)}}),[o.S9]:(e,{payload:t})=>({...e,votes:{...e.votes,[t]:{}}}),[o.KW]:e=>({...e,votes:{}}),[o.o1]:(e,{payload:t})=>({...e,currentElementIndexToEvent:{...e.currentElementIndexToEvent,[t]:(e.currentElementIndexToEvent[t]||0)+1}}),[o.tb]:(e,{payload:t})=>({...e,currentElementIndexToEvent:{...e.currentElementIndexToEvent,[t]:0}}),[o.Ts]:(e,{payload:{id:t,publishedAt:n}})=>({...e,ids:e.ids,entities:{...e.entities,[t]:{...e.entities[t],publishedAt:n}}}),[(0,i.A)(o.cJ,o.Lk,o.gq,o.X3)]:(e,{payload:{id:t,...n}})=>{const i={...e.entities,[t]:{...e.entities[t],...n}},a=Object.values(i).sort(r.Tq).map(e=>e.id);return{...e,ids:a,entities:i}}},s)},U1YV:function(e,t,n){"use strict";n.d(t,{Xy:function(){return I},d6:function(){return T},qA:function(){return O},mO:function(){return C}});var r=n("prkb"),i=n("uDhf"),a=n("owEX"),o=n("ZYfE");const s=r.AH`
  --inline-image-background-color: var(--fkOptionButtonCorrectInlineImageBackgroundColor);
  color: var(--fkOptionButtonCorrectTextColor, var(--option-button-text-correct));
  box-shadow: var(--fkOptionButtonCorrectBoxShadow);

  ${o.A`
    --gradient-direction: var(--fkOptionButtonCorrectGradientDirection, var(--gradient-direction-correct));
    --gradient-color: var(--fkOptionButtonCorrectBackgroundColor, var(--option-button-background-correct));
  `}

  &:after {
    border-width: 3px;
    border-color: var(
      --fkOptionButtonCorrectBorderColor,
      var(--option-button-border-correct, transparent)
    );
  }

  &:focus {
    :after {
      border-width: 3px;
      border-color: var(
        --fkOptionButtonCorrectBorderColor,
        var(--option-button-border-correct, transparent)
      );
    }
  }
`;var l={cssPrimary:s,fillerCssPrimary:r.AH`
  ${s}

  ${i.m} {
    ${o.A`
      --gradient-direction: var(--fkOptionButtonCorrectGradientDirection, var(--gradient-direction-correct));
      --gradient-color: var(--fkOptionButtonCorrectFillerColor, var(--option-button-filler-correct));
    `}
  }

  ${({$withImage:e})=>e&&r.AH`
      ${a.$} {
        color: var(--fkOptionButtonCorrectTextColor, var(--option-button-text-correct));

        ${o.A`
    --gradient-direction: var(--fkOptionButtonCorrectGradientDirection, var(--gradient-direction-correct));
    --gradient-color: var(--fkOptionButtonCorrectBackgroundColor, var(--option-button-background-correct));
  `}
      }
    `};
`};const d=r.AH`
  --inline-image-background-color: var(--fkOptionButtonDefaultInlineImageBackgroundColor);
  color: var(--fkOptionButtonDefaultTextColor, var(--option-button-text-default));
  box-shadow: var(--fkOptionButtonDefaultBoxShadow);

  ${o.A`
    --gradient-direction: var(--fkOptionButtonDefaultGradientDirection, var(--gradient-direction-default));
    --gradient-color: var(--fkOptionButtonDefaultBackgroundColor, var(--option-button-background-default));
  `}

  &:after {
    border-color: var(
      --fkOptionButtonDefaultBorderColor,
      var(--option-button-border-default, transparent)
    );
  }

  &:focus {
    :after {
      border-color: var(
        --fkOptionButtonDefaultBorderColor,
        var(--option-button-border-default, transparent)
      );
    }
  }
`;var c={cssPrimary:d,fillerCssPrimary:r.AH`
  ${d}

  ${i.m} {
    ${o.A`
      --gradient-direction: var(--fkOptionButtonDefaultGradientDirection, var(--gradient-direction-default));
      --gradient-color: var(--fkOptionButtonDefaultFillerColor, var(--option-button-filler-default));
    `}
  }

  ${({$withImage:e})=>e&&r.AH`
      ${a.$} {
        color: var(--fkOptionButtonDefaultTextColor, var(--option-button-text-default));

        ${o.A`
    --gradient-direction: var(--fkOptionButtonDefaultGradientDirection, var(--gradient-direction-default));
    --gradient-color: var(--fkOptionButtonDefaultBackgroundColor, var(--option-button-background-default));
  `}
      }
    `};
`};const u=r.AH`
  --inline-image-background-color: var(--fkOptionButtonIncorrectInlineImageBackgroundColor);
  color: var(--fkOptionButtonIncorrectTextColor, var(--option-button-text-incorrect));
  box-shadow: var(--fkOptionButtonIncorrectBoxShadow);

  ${o.A`
    --gradient-direction: var(--fkOptionButtonIncorrectGradientDirection, var(--gradient-direction-incorrect));
    --gradient-color: var(--fkOptionButtonIncorrectBackgroundColor, var(--option-button-background-incorrect));
  `}

  &:after {
    border-width: 3px;
    border-color: var(
      --fkOptionButtonIncorrectBorderColor,
      var(--option-button-border-incorrect, transparent)
    );
  }

  &:focus {
    :after {
      border-width: 3px;
      border-color: var(
        --fkOptionButtonIncorrectBorderColor,
        var(--option-button-border-incorrect, transparent)
      );
    }
  }
`;var p={cssPrimary:u,fillerCssPrimary:r.AH`
  ${u}

  ${i.m} {
    ${o.A`
      --gradient-direction: var(--fkOptionButtonIncorrectGradientDirection, var(--gradient-direction-incorrect));
      --gradient-color: var(--fkOptionButtonIncorrectFillerColor, var(--option-button-filler-incorrect));
    `}
  }

  ${({$withImage:e})=>e&&r.AH`
      ${a.$} {
        color: var(--fkOptionButtonIncorrectTextColor, var(--option-button-text-incorrect));

        ${o.A`
    --gradient-direction: var(--fkOptionButtonIncorrectGradientDirection, var(--gradient-direction-incorrect));
    --gradient-color: var(--fkOptionButtonIncorrectBackgroundColor, var(--option-button-background-incorrect));
  `}
      }
    `};
`};const m=r.AH`
  --inline-image-background-color: var(--fkOptionButtonRevealedInlineImageBackgroundColor);
  color: var(--fkOptionButtonRevealedTextColor, var(--option-button-text-revealed));
  box-shadow: var(--fkOptionButtonRevealedBoxShadow);

  ${o.A`
    --gradient-direction: var(--fkOptionButtonRevealedGradientDirection, var(--gradient-direction-revealed));
    --gradient-color: var(--fkOptionButtonRevealedBackgroundColor, var(--option-button-background-revealed));
  `}

  &:after {
    border-color: var(
      --fkOptionButtonRevealedBorderColor,
      var(--option-button-border-revealed, transparent)
    );
  }

  &:focus {
    :after {
      border-color: var(
        --fkOptionButtonRevealedBorderColor,
        var(--option-button-border-revealed, transparent)
      );
    }
  }
`;var g={cssPrimary:m,fillerCssPrimary:r.AH`
  ${m}

  ${i.m} {
    ${o.A`
      --gradient-direction: var(--fkOptionButtonRevealedGradientDirection, var(--gradient-direction-revealed));
      --gradient-color: var(--fkOptionButtonRevealedFillerColor, var(--option-button-filler-revealed));
    `}
  }

  ${({$withImage:e})=>e&&r.AH`
      ${a.$} {
        color: var(--fkOptionButtonRevealedTextColor, var(--option-button-text-revealed));

        ${o.A`
    --gradient-direction: var(--fkOptionButtonRevealedGradientDirection, var(--gradient-direction-revealed));
    --gradient-color: var(--fkOptionButtonRevealedBackgroundColor, var(--option-button-background-revealed));
  `}
      }
    `};
`};const f=r.AH`
  --inline-image-background-color: var(--fkOptionButtonSelectedInlineImageBackgroundColor);
  color: var(--fkOptionButtonSelectedTextColor, var(--option-button-text-selected));
  box-shadow: var(--fkOptionButtonSelectedBoxShadow);

  ${o.A`
    --gradient-direction: var(--fkOptionButtonSelectedGradientDirection, var(--gradient-direction-selected));
    --gradient-color: var(--fkOptionButtonSelectedBackgroundColor, var(--element-highlight-gradient-default, var(--option-button-background-selected)));
  `}

  &:after {
    border-width: 3px;
    border-color: var(
      --fkOptionButtonSelectedBorderColor,
      var(--option-button-border-selected, transparent)
    );
  }

  &:focus {
    :after {
      border-width: 3px;
      border-color: var(
        --fkOptionButtonSelectedBorderColor,
        var(--option-button-border-selected, transparent)
      );
    }
  }
`;var h={cssPrimary:f,fillerCssPrimary:r.AH`
  ${f}

  ${i.m} {
    ${o.A`
      --gradient-direction: var(--fkOptionButtonSelectedGradientDirection, var(--gradient-direction-selected));
      --gradient-color: var(--fkOptionButtonSelectedFillerColor, var(--element-highlight-gradient-overlay-default, var(--option-button-filler-selected)));
    `}
  }

  ${({$withImage:e})=>e&&r.AH`
      ${a.$} {
        color: var(--fkOptionButtonSelectedTextColor, var(--option-button-text-selected));

        ${o.A`
          --gradient-direction: var(--fkOptionButtonSelectedGradientDirection, var(--gradient-direction-selected));
          --gradient-color: var(--fkOptionButtonSelectedBackgroundColor, var(--element-highlight-gradient-default, var(--option-button-background-selected)));
        `}
      }
    `};
`},v=n("EAF/"),y=n("ICk1"),b=n("Eacy"),x=n("f3JF"),N=n("3c/i");const A=r.AH`
  display: flex;
  flex-direction: column;

  ${b.yB} {
    background: inherit;
    width: 100%;

    &:after {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  ${b.UC} {
    display: block;
  }

  ${i.m} {
    opacity: 0;
  }

  ${a.$} {
    font-size: calc(var(--elementButtonFontSize, 16px) - 4px);
    line-height: 1;
    top: 8px;
    right: 8px;
    bottom: auto;
    left: auto;
    border-radius: var(--fkOptionButtonPercentageBorderWidth, 4px);

    ${a.Q} {
      padding: 6px 4px;
      margin: auto;
    }
  }
`,C=r.Ay.button.withConfig({displayName:"option-button__Wrapper"})`
  position: relative;
  padding: 0;
  width: 100%;
  height: 100%;
  border: none;

  ${v.K}

  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-style: solid;
    border-width: var(--fkOptionButtonBorderWidth, 2px);
    border-radius: var(--fkOptionButtonBorderRadius, 4px);
    transition: border-color 0.3s;
  }

  border-radius: var(--fkOptionButtonBorderRadius, 4px);
  overflow: hidden;
  cursor: ${({$isDisabled:e})=>e?"default":"pointer"};
  -webkit-tap-highlight-color: transparent;

  ${({$state:e,$withFiller:t})=>t?{default:c.fillerCssPrimary,correct:l.fillerCssPrimary,incorrect:p.fillerCssPrimary,selected:h.fillerCssPrimary,revealed:g.fillerCssPrimary,noPick:c.fillerCssPrimary,correctNotSelected:c.fillerCssPrimary}[e]:{default:c.cssPrimary,correct:l.cssPrimary,incorrect:p.cssPrimary,selected:h.cssPrimary,revealed:g.cssPrimary,noPick:c.cssPrimary,correctNotSelected:c.cssPrimary}[e]};
  ${({$withImage:e})=>e&&A};

  transition:
    background-color,
    box-shadow,
    transform 0.3s;

  ${({$isDisabled:e})=>!e&&(0,N.T)(r.AH`
      &:hover {
        ${x.A.cssPrimary}
      }
    `)}

  ${({$isDisabled:e,$withHover:t})=>!e&&!!t&&x.A.cssPrimary}

  ${({$withDraggable:e})=>e&&r.AH`
      touch-action: none;
    `}

  ${({$state:e})=>"incorrect"===e&&r.AH`
      ${y.m} {
        opacity: 0.3;
      }
    `}

  ${({$state:e})=>"correctNotSelected"===e&&r.AH`
      ${y.m} {
        opacity: 1 !important;
      }
    `}
`,O=r.Ay.div.withConfig({displayName:"option-button__WinnerTextWrapper"})`
  position: absolute;
  right: 8px;
  top: 8px;
  display: flex;
  padding: 6px 4px;
  justify-content: center;
  align-items: center;
  color: var(--fkOptionButtonCorrectTextColor, var(--option-button-text-correct));
  box-shadow: var(--fkOptionButtonCorrectBoxShadow);

  ${o.A`
    --gradient-direction: var(--fkOptionButtonCorrectGradientDirection, var(--gradient-direction-correct));
    --gradient-color: var(--fkOptionButtonCorrectBackgroundColor, var(--option-button-background-correct));
  `}
`,T=r.Ay.span.withConfig({displayName:"option-button__WinnerText"})`
  text-align: center;
  /* leading-trim: both;
  text-edge: cap; */
  font-family: var(--fkElementOptionTitleFontFamily, var(--font-family-main));
  font-weight: var(--fkElementOptionTitleFontWeight, 700);
  letter-spacing: var(--fkElementOptionTitleLetterSpacing);
  color: var(--fkOptionButtonCorrectTextColor, var(--option-button-text-correct));
`,I=r.Ay.div.withConfig({displayName:"option-button__OptionButtonWrapper"})`
  position: relative;
  width: 100%;
  height: 100%;
`},UvmQ:function(e,t,n){"use strict";n.d(t,{Og:function(){return o},TK:function(){return s}});const r=n("PtY4").A.create({withCredentials:!0}),i={strategy:"email",provider:"nba"},a="nbaPickem2025",o=({baseUrl:e,...t})=>r.get(`${e}/v1/user/check/nonstandard`,{params:{...i,...t},headers:{authorization:`bearer ${a}`}}),s=({baseUrl:e,projectId:t,username:n})=>r.put(`${e}/v1/user`,{...i,projectId:t,data:{username:n}},{headers:{authorization:`bearer ${a}`}})},V5i3:function(e,t,n){"use strict";n.d(t,{$:function(){return a},a:function(){return i}});var r=n("Xrb3");const{setIsSubmitted:i,setIsSubmittedForEvent:a}=(0,r.A)("SET_IS_SUBMITTED","SET_IS_SUBMITTED_FOR_EVENT",{prefix:"data-capture"})},VoRu:function(){},"W/29":function(e,t,n){"use strict";n.d(t,{j:function(){return i},z:function(){return r}});const r=(e,t)=>{const n=new URLSearchParams(window.location.search);n.set(e,t),window.history.replaceState(null,null,`?${n.toString()}`)},i=e=>{const t=new URLSearchParams(window.location.search);t.delete(e);const n=t.toString()?`?${t.toString()}`:window.location.pathname;window.history.replaceState(null,null,n)}},Wu6c:function(e,t,n){"use strict";n.d(t,{KB:function(){return i},Oz:function(){return a.A},LO:function(){return o},tU:function(){return s},uy:function(){return d},j1:function(){return c},VI:function(){return m},ti:function(){return g},rS:function(){return f},D_:function(){return I},tn:function(){return E.A},OS:function(){return w.A},Cg:function(){return k},P$:function(){return j},eF:function(){return $},jY:function(){return R},nA:function(){return S},o:function(){return B}});var r=function(e){return e.PUBLIC="public",e.LOGIN="login",e.POINTS="points",e}(r||{}),i=r,a=n("m+jG"),o={xxs:"375px",xs:"425px",ssm:"560px",sm:"620px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1600px"},s="fk-",l=function(e){return e.HUB="hub",e.TABS="tabs",e.CARD="card",e.TIMELINE="timeline",e}(l||{}),d=l,c={CARD:"card",LETTER:"letter",SORT:"sort"},u=n("CXuk");const{j:p}=(0,u.vA)();var m={HOTJAR_HJID:p||void 0},g={IMAGE_SHARING:void 0},f={APP_NAME:"fankit2"},h=n("AXGa"),v=n("oRQk");const y=(e,t)=>{if(!e)return null;const n=e.trim();n!==e&&v.A.log(`${t} ID trimmed: "${e}" → "${n}"`);const r=(e=>e.replace(/[^0-9a-fA-F-]/g,""))(n);return r!==n&&v.A.warn(`⚠️ ${t} ID "${n}" contained invalid characters. Auto-corrected to "${r}". Please review your data source to prevent future issues.`),(0,h.A)(r)?r:(v.A.error(`Invalid ${t} ID`,e),null)},{h:b,p:x,e:N}=(0,u.vA)(),{staticHost:A,projectId:C,eventId:O}=window.Afterburner||{};var T,I={EVENT_ID:y(N||O,"Event"),PROJECT_ID:y(x||C||void 0,"Project"),PROJECT_HOST:null==(T=b||A||void 0)?T:T.trim()},E=n("4gBx"),w=n("i+O1"),_=function(e){return e.NAME="name",e.NSURNAME="nSurname",e.NAMESURNAME="nameSurname",e.SURNAME="surname",e}(_||{}),k=_,P=function(e){return e.MOBILE_PORTRAIT="mp",e.MOBILE_LANDSCAPE="ml",e.TABLET_PORTRAIT="tp",e.TABLET_LANDSCAPE="tl",e.DESKTOP="dt",e}(P||{}),j=P;const{d:L}=(0,u.vA)();var $={SENTRY_DSN:L||void 0},S={SEO_TITLE:"NBA Pick'Em | Play for Free Every Day"},R={SEO_DESCRIPTION:"Play Pick'Em for free every day. Predict player stat lines, team props, and more to win great prizes."},B={SSO_TOKEN_METHOD:void 0}},X1LX:function(e,t,n){"use strict";n.d(t,{$$:function(){return i},G0:function(){return o},GP:function(){return l},JJ:function(){return c},Sd:function(){return a},Zc:function(){return u},bG:function(){return s},z0:function(){return d}});const r=e=>e.app,i=e=>r(e).isInit,a=e=>r(e).isLoaded,o=e=>r(e).areActionsHandled,s=e=>r(e).stickyPromoAudio,l=e=>r(e).stickyPromoVideo,d=e=>r(e).stickyScoreBar,c=e=>r(e).country??null,u=e=>r(e).event??null},Xouy:function(e,t,n){"use strict";n.d(t,{A:function(){return f}});var r=n("+bMA"),i=n("TEbb"),a=n("OsSD"),o=n("6WEz"),s=()=>(0,r.d4)(o.H6).noElement||{},l=n("prkb"),d=n("EAF/");const c=l.Ay.main.withConfig({displayName:"element__Wrapper"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  font-family: var(--font-family-main);
  color: var(--globalTextColor, var(--color-0-0));
  text-align: center;
`,u=(0,l.Ay)(d.Yk).withConfig({displayName:"element__Title"})`
  margin-bottom: 30px;
`,p=l.Ay.main.withConfig({displayName:"element__ElementWrapper"})`
  text-align: center;
`;var m=n("bvkK"),g=n("oYCi");function f({elementId:e}){const{titleText:t}=s(),n=(0,r.d4)(t=>(0,m.nz)(t,e)),o=!!n;return(0,a.A)(),o?(0,g.jsx)(p,{children:(0,g.jsx)(i.A,{element:n})}):(0,g.jsx)(c,{children:(0,g.jsx)(u,{children:t})})}},ZYfE:function(e,t,n){"use strict";var r=n("prkb");t.A=(e,...t)=>()=>`\n  --gradient-image: var(--blank-image);\n  --gradient-direction: 90deg;\n  --gradient-color: transparent, transparent;\n\n  ${(0,r.AH)(e,...t)}\n\n  background:\n    var(--gradient-image) center top / cover,\n    linear-gradient(\n      var(--gradient-direction),\n      var(--gradient-color)\n    );\n`},b3N3:function(e,t,n){"use strict";n.d(t,{I:function(){return a},n:function(){return i}});const r="sponsor",i={BLOCK:r,TEXT:`${r}__text`,LINK:`${r}__link`,LINK_IMAGE:`${r}__link__image`};let a=function(e){return e.LEFT="left",e.TOP="top",e.RIGHT="right",e.BOTTOM="bottom",e}({})},bQIR:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n("1mTy");const i=e=>e===r.dw},bvkK:function(e,t,n){"use strict";n.d(t,{BM:function(){return f},E3:function(){return b},IC:function(){return l},QN:function(){return c},UQ:function(){return m},YU:function(){return h},Z0:function(){return v},eA:function(){return g},jP:function(){return y},nz:function(){return p},xQ:function(){return u}});var r=n("kM8z"),i=n("Ho5h"),a=n("TweP"),o=n("1mTy"),s=n("BtVd");const l=e=>e.elements?e.elements:a.K,d=e=>l(e).ids,c=(0,r.Mz)([e=>l(e).votes,s._s],(e,t)=>e[t]||{}),u=e=>l(e).entities,p=(e,t)=>u(e)[t],m=e=>e?.listings,g=e=>{const t=l(e);return p(e,t.ids[0])},f=(e,t)=>c(e)[t],h=(0,r.Mz)(e=>e,(e,t)=>t,(e,t)=>t.map(t=>f(e,t)??{})),v=e=>{const t=(e=>(0,r.Mz)(u,t=>Object.values(t).filter(t=>{if(!o.hc.has(t.contentType))return!1;const{customFields:{gamification:{roundNumber:n}={}}={}}=t;return null===e||n===e})))(e);return(0,r.Mz)(t,e=>e.reduce((e,t)=>{const{customFields:{gamification:{points:{correctAnswer:n=0}}={}}={}}=t;return e+n},0))},y=(e,t)=>(0,r.Mz)(d,u,(n,r)=>{if(e===i.tD)return n;const a=e===t;return n.filter(t=>{const n=r[t]?.customFields?.containerId??null;let i=null;return i="string"==typeof n&&n.includes(",")?n.split(",").map(e=>e.trim()).includes(e)?e:null:n,a&&!n||e===i})}),b=(0,r.Mz)([u,(e,t)=>t],(e,t)=>Object.values(e).filter(e=>e?.customFields?.containerId===t&&e.id!==t));(0,r.Mz)(u,e=>Object.keys(e).filter(t=>{const n=e[t];return!0===n?.customFields?.enableReactions}))},d80D:function(e,t,n){"use strict";n.d(t,{F:function(){return g},c:function(){return m}});var r=n("qkuk"),i=n("8fbK"),a=n("RDW4");const o=e=>"open"===e,s=e=>"closed"===e,l=e=>"revealed"===e,d=e=>e.filter(e=>(0,a.Z)(e.contentType)),c=e=>e.sort((e,t)=>{const{publishedAt:n}=e,{publishedAt:r}=t,i=e.getCustomFields().order,a=t.getCustomFields().order;return i===a?n-r:i-a}),u=e=>e.map(e=>e.id),p=(e,t)=>(0,r.Zz)(c,(e=>t=>t.filter(t=>t.getCustomFields().multiPredictorId===e))(e),d)(t),m=(e,t)=>u(p(e,t));function g({elementInstance:e,eventInstance:t}){const n=(0,i.Qf)({elementInstance:e}),r=t.getHistory()||[],{id:a,state:d}=n.customFields,c=p(a,r),m=u(c);return{...n,isActive:o(d),isClosed:s(d),isRevealed:l(d),predictorIds:m}}},dQjo:function(e,t,n){"use strict";var r=n("BFkT"),i=n("NVNb"),a=n("9/e/"),o=n("k2BZ"),s=n("Wu6c"),l=n("oYCi");t.A=({id:e,accessLevel:t=s.KB.LOGIN,primaryButtonLabel:n,primaryButtonFunction:d,secondaryButtonLabel:c=null,secondaryButtonFunction:u=null,pointsThresholdText:p,userPoints:m,pointsThreshold:g=0,sponsor:f,showElementLabel:h,elementText:v,title:y,subtitle:b,imageUrl:x,videoEmbedCode:N,isLoading:A,loadingText:C})=>{const O=t===s.KB.LOGIN,T=!A&&O&&!!d&&!!n,I=!A&&O&&!!u&&!!c,E=t===s.KB.POINTS,w=g-m;return(0,l.jsxs)(r.Qi,{children:[(0,l.jsx)(i.A,{imageUrl:x,videoEmbedCode:N,showElementLabel:h,elementText:v,showClosedLabel:!1,title:y,subtitle:b}),A?(0,l.jsx)(r.Pi,{componentType:s.tn.PRIMARY_BUTTON,children:(0,l.jsx)(r.jn,{disabled:!0,children:C})}):null,T?(0,l.jsx)(r.Pi,{componentType:s.tn.PRIMARY_BUTTON,children:(0,l.jsx)(r.jn,{onClick:d,children:n})}):null,I?(0,l.jsx)(r.Pi,{componentType:s.tn.PRIMARY_BUTTON,children:(0,l.jsx)(r.tA,{onClick:u,children:c})}):null,E?(0,l.jsx)(r.l7,{title:p.replace("{points}",w.toString()),className:o.n.POINTS_TITLE}):null,f?(0,l.jsx)(a.A,{id:e,sponsor:f}):null]})}},dUZd:function(e,t,n){"use strict";n.d(t,{Fc:function(){return o},GQ:function(){return f},LE:function(){return m},MA:function(){return v},Mc:function(){return h},OW:function(){return l},YV:function(){return d},dM:function(){return p},dY:function(){return u},jy:function(){return g},lC:function(){return c},s3:function(){return y}});var r=n("kM8z"),i=n("GPK5");const a=e=>e.lvisID,o=e=>a(e)?.info,s=e=>a(e)?.state,l=e=>s(e)===i.H1.PENDING,d=e=>s(e)===i.H1.LOGGED_IN,c=e=>s(e)===i.H1.LOGGED_OUT,u=e=>a(e)?.error,p=e=>{const t=o(e);return t.nickname||t.username},m=(0,r.Mz)([o],e=>e?.userId),g=(0,r.Mz)([o],e=>e?.externalId),f=(0,r.Mz)([o],e=>e?.accessToken),h=((0,r.Mz)([o],e=>e?.appProfile),e=>o(e)?.countryCode??null),v=e=>a(e)?.usernameModal??!1,y=e=>o(e)?.ageVerified??!1},dksT:function(e,t,n){"use strict";n.d(t,{xh:function(){return l}});var r=n("mXGw"),i=n("iXzu"),a=n("UHZw");const o=()=>parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height")||"0",10),s=()=>parseInt(getComputedStyle(document.documentElement).getPropertyValue("--scorebar-height")||"0",10),l=e=>{const t=e.getBoundingClientRect(),n=o(),r=s();return{top:t.top-(n+r),bottom:t.bottom-(n+r),left:t.left,right:t.right,width:t.width,height:t.height}};t.Ay=e=>{const[t,n]=(0,r.useState)(0),d=(0,a.nF)(()=>{const t=(e=>{const{height:t}={width:window.innerWidth,height:window.innerHeight-(o()+s())},{top:n,bottom:r,height:i}=l(e);return n>=0&&r<=t?i:n<0&&0<r?r:r>t&&t>n?t-n:0})(e.current);n(t)},100),c=new i.default(d);return(0,r.useEffect)(()=>{let t=null;return window.addEventListener("scroll",d),window.addEventListener("resize",d),e.current&&(c.observe(e.current),t=e.current),()=>{window.removeEventListener("scroll",d),window.removeEventListener("resize",d),c.unobserve(t)}}),t}},eB0S:function(e,t,n){"use strict";n.d(t,{K:function(){return o}});var r=n("efaT"),i=n("wzRx"),a=n("hDYc");const o={styles:{},settings:{},isFetched:!1};t.A=(0,r.A)({[a.o]:(e,{payload:t})=>{const[n,r]=(0,i.A)(t);return{...e,styles:n,settings:r,isFetched:!0}}},o)},eiof:function(e,t,n){"use strict";n.d(t,{Gc:function(){return o},Ts:function(){return i},cL:function(){return a},uw:function(){return s}});var r=n("Xrb3");const{init:i,reset:a,ready:o,setHideHeaderAndFooter:s}=(0,r.A)("INIT","RESET","READY","SET_HIDE_HEADER_AND_FOOTER",{prefix:"sdk"})},f3JF:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});var r=n("prkb"),i=n("ZYfE");const a=r.AH`
  --inline-image-background-color: var(--fkOptionButtonHoverInlineImageBackgroundColor);
  color: var(--fkOptionButtonHoverTextColor, var(--option-button-text-hover));
  box-shadow: var(--hoverButtonBoxShadow, var(--optionLightHoverButtonBoxShadow));
  ${i.A`
      --gradient-direction: var(--fkOptionButtonHoverGradientDirection, var(--gradient-direction-hover));
      --gradient-color: var(--fkOptionButtonHoverBackgroundColor, var(--option-button-background-hover));
    `}

  &:after {
    border-width: 3px;
    border-color: var(
      --fkOptionButtonHoverBorderColor,
      var(--fkElementHighlightColor, var(--option-button-border-hover))
    );
  }

  &:focus {
    :after {
      border-width: 3px;
      border-color: var(
        --fkOptionButtonHoverBorderColor,
        var(--fkElementHighlightColor, var(--option-button-border-hover))
      );
    }
  }
`;t.A={cssPrimary:a}},fZs4:function(e,t,n){"use strict";var r=n("GYZn"),i=n("1r56"),a=n("NyFw"),o=n("yg4t"),s=n("dJqt"),l=n("xaFU"),d=n("TRdg"),c=n("+bMA"),u=n("Wu6c"),p=n("mXGw"),m=n("prkb");const g=m.Ay.div.withConfig({displayName:"access-gate__Overlay"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.65);
  z-index: 100;
`,f=m.Ay.div.withConfig({displayName:"access-gate__Wrapper"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(100% - 16px);
  min-height: 200px;
  transform: translate(-50%, -50%);
  color: #fff;
  background: #191c23;
  border: 1px solid #4e525c;
  border-radius: 8px;
  padding: 40px 24px;
  pointer-events: auto;
  z-index: 100;

  @media (min-width: 768px) {
    width: 560px;
  }
`,h=m.Ay.h1.withConfig({displayName:"access-gate__Title"})`
  font-family: Knockout;
  font-size: 40px;
  font-style: normal;
  font-weight: 360;
  line-height: 36px;
  text-transform: uppercase;
  color: #fff;
`,v=(m.Ay.div.withConfig({displayName:"access-gate__Body"})`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  color: #fff;
  padding-left: 16px;

  li {
    list-style-type: disc;
    list-style-position: outside;
  }
`,m.Ay.div.withConfig({displayName:"access-gate__Icon"})`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`),y=m.Ay.div.withConfig({displayName:"access-gate__Buttons"})`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`,b=m.Ay.div.withConfig({displayName:"access-gate__Button"})`
  width: 248px;
  height: 48px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({type:e})=>"primary"===e?"#FFF":"#191C23"};
  color: ${({type:e})=>"primary"===e?"#000":"#FFF"};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;

  ${({type:e})=>"secondary"===e&&m.AH`
      border: 1px solid #4e525c;
    `}
`;var x=n("oYCi");const N=()=>(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M12.0001 13.4142L17.293 18.7071L18.7072 17.2929L13.4143 12L18.7072 6.70706L17.293 5.29285L12.0001 10.5857L6.70718 5.29285L5.29297 6.70706L10.5859 12L5.29297 17.2928L6.70718 18.7071L12.0001 13.4142Z",fill:"white"})});let A=function(e){return e.Standalone="standalone",e.Iframe="iframe",e.Webview="webview",e}({});function C(e,t,n){return function(){const{searchParams:e}=new URL(document.location.href);return e.has("webview")?A.Webview:window.parent!==window?A.Iframe:A.Standalone}()!==A.Webview?e:u.OS.IS_IOS?t:n}var O=n("BFkT"),T=n("msSd"),I=n("7FLN"),E=({handleClose:e})=>{const{userAccessTitle:t,userAccessSubtitle:n,userAccessSignInUrlWeb:r,userAccessSignInUrlNativeIOS:i,userAccessSignInUrlNativeAndroid:a,userAccessSignUpUrlWeb:o,userAccessSignUpUrlNativeIOS:s,userAccessSignUpUrlNativeAndroid:l,lockedContentPrimaryButtonLabel:d,lockedContentSecondaryButtonLabel:c}=(0,p.useContext)(T.Ay),m=C(r,i,a),A=C(o,s,l);return(0,p.useEffect)(()=>(document.body.style.overflow="hidden",document.body.style.pointerEvents="none",()=>{document.body.style.overflow="",document.body.style.pointerEvents="auto"}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{}),(0,x.jsxs)(f,{children:[(0,x.jsx)(h,{children:t}),(0,x.jsx)(O.qn,{content:n}),(0,x.jsx)(v,{onClick:e,children:(0,x.jsx)(N,{})}),(0,x.jsxs)(y,{children:[(0,x.jsx)(b,{type:"secondary",onClick:()=>{const e=(0,I.oJ)(u.Oz.SIGN_IN,{label:d});(0,I.u4)(e),setTimeout(()=>{window.location.href=m},1500)},children:d}),c&&(0,x.jsx)(b,{type:"primary",onClick:()=>{const e=(0,I.oJ)(u.Oz.SIGN_UP,{label:c});(0,I.u4)(e),setTimeout(()=>{window.location.href=A},1500)},children:c})]})]})]})};const w=m.Ay.div.withConfig({displayName:"age-gate__Overlay"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`,_=m.Ay.div.withConfig({displayName:"age-gate__Wrapper"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(100% - 16px);
  min-height: 200px;
  transform: translate(-50%, -50%);
  background: #191c23;
  border-radius: 8px;
  border: 1px solid #4e525c;
  padding: 40px 24px;
  pointer-events: auto;
  z-index: 100;

  @media (min-width: 768px) {
    width: 560px;
  }
`,k=m.Ay.h1.withConfig({displayName:"age-gate__Title"})`
  font-family: Knockout;
  font-size: 40px;
  font-style: normal;
  font-weight: 360;
  line-height: 36px;
  text-transform: uppercase;
  color: #fff;
`,P=m.Ay.p.withConfig({displayName:"age-gate__Subtitle"})`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  padding-left: 5px;
  color: #fff;
`,j=m.Ay.div.withConfig({displayName:"age-gate__Footer"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,L=m.Ay.div.withConfig({displayName:"age-gate__Button"})`
  width: 248px;
  height: 48px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({type:e})=>"primary"===e?"#FFF":"#191C23"};
  color: ${({type:e})=>"primary"===e?"#000":"#FFF"};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;

  ${({type:e})=>"secondary"===e&&m.AH`
      border: 1px solid #4e525c;
    `}
`;var S=n("6WEz"),R=()=>{const{ageGate:e}=(0,c.d4)(S.H6);return(0,p.useEffect)(()=>{const e=(0,I.oJ)(u.Oz.AGE_GATE_PAGEVIEW,{});(0,I.u4)(e)},[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w,{}),(0,x.jsxs)(_,{children:[(0,x.jsx)(k,{children:e?.titleText}),(0,x.jsx)(P,{children:e?.subtitleText}),(0,x.jsx)(j,{children:(0,x.jsx)(L,{type:"primary",onClick:()=>{window.location.href=e?.redirectUrl},children:e?.buttonText})})]})]})},B=n("qjjL"),D=n("1FCT");const H=(e,t)=>{const n=t||new Date,r=e.getTime()-n.getTime();if(r<=0)return"0m";const i=Math.floor(r/864e5),a=Math.floor(r%864e5/36e5),o=Math.floor(r%36e5/6e4),s=[];return i>0&&s.push(`${i}d`),a>0&&s.push(`${a}h`),o>0&&s.push(`${o}m`),s.length>0?s.join(" "):"0m"},M=()=>(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7",height:"10",viewBox:"0 0 7 10",fill:"none",children:(0,x.jsx)("path",{d:"M5 4.85742V3.42871C5 2.60028 4.32843 1.92871 3.5 1.92871C2.67157 1.92871 2 2.60028 2 3.42871V4.85742H5ZM6 4.85742C6.55228 4.85742 7 5.30514 7 5.85742V9C7 9.55228 6.55228 10 6 10H1C0.447715 10 2.04527e-09 9.55229 0 9V5.85742C0 5.30514 0.447715 4.85742 1 4.85742V3.42871C1 2.048 2.11929 0.928711 3.5 0.928711C4.88071 0.928711 6 2.048 6 3.42871V4.85742Z",fill:"white"})}),z=m.Ay.div.withConfig({displayName:"chiclet__Container"})`
  position: relative;
`,U=m.Ay.div.withConfig({displayName:"chiclet__Inner"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,V=m.Ay.div.withConfig({displayName:"chiclet__Pill"})`
  min-width: 95px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 999px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({$selected:e})=>e?"#FFF":"#2B2F37"};
  background-color: #191c23;
  transition: all 0.3s ease;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  color: #fff;
  padding: 0 14px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  ${({$bgImage:e})=>e&&m.AH`
      background-image: url(${e});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}
`,F=m.Ay.img.withConfig({displayName:"chiclet__Logo"})`
  width: 24px;
  height: 24px;
  aspect-ratio: 1/1;
`,G=m.Ay.span.withConfig({displayName:"chiclet__Separator"})`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #fff;
`,W=m.Ay.div.withConfig({displayName:"chiclet__Connector"})`
  position: absolute;
  top: 15px;
  left: -16px;
  width: 16px;
  height: 0.923px;
  background-color: rgba(255, 255, 255, 0.7);
`,Z=m.Ay.div.withConfig({displayName:"chiclet__Status"})`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: Roboto;
  font-size: 11.08px;
  font-style: normal;
  font-weight: 400;
  color: #fff;

  ${({$closed:e})=>e&&m.AH`
      color: #ff453a;
    `}

  ${({$opened:e})=>e&&m.AH`
      color: #adffb3;
    `}
`;var J=({event:e,selected:t,onSelect:n})=>{const[r,i]=(0,p.useState)(new Date),a=(e=>(0,B.v)(new Date,{start:new Date(1e3*e.startAt),end:new Date(1e3*e.closeAt)}))(e),o=(e=>(0,D.d)(new Date,new Date(1e3*e.closeAt)))(e),s=!a&&!o;(0,p.useEffect)(()=>{if(!s)return;const e=setInterval(()=>{i(new Date)},6e4);return()=>clearInterval(e)},[s]);const l=(0,p.useCallback)(()=>a?(0,x.jsx)(Z,{$opened:!0,children:"Picks open"}):o?(0,x.jsx)(Z,{$closed:!0,children:"Picks closed"}):(0,x.jsxs)(Z,{children:[(0,x.jsx)(M,{}),H(new Date(1e3*e.startAt),r)]}),[a,o,e,r]);return(0,x.jsxs)(z,{children:[(0,x.jsxs)(U,{children:[(0,x.jsx)(V,{$bgImage:e.bgImage,$selected:t,onClick:()=>n(e.id),children:e.isWeekly?(0,x.jsxs)(x.Fragment,{children:[e.logo&&(0,x.jsx)(F,{src:e.logo}),e.label||"Weekly Picks"]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(F,{src:e?.homeTeam?.logo}),(0,x.jsx)(G,{children:"vs"}),(0,x.jsx)(F,{src:e?.awayTeam?.logo})]})}),l()]}),!e.isWeekly&&(0,x.jsx)(W,{})]})};const K=()=>(0,x.jsx)("svg",{width:"15",height:"8",viewBox:"0 0 15 8",fill:"none",children:(0,x.jsx)("path",{d:"M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 4L1 3.5ZM14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM1 4L1 4.5L14 4.5V4V3.5L1 3.5L1 4Z",fill:"white"})});var Q=n("ZYfE");const Y=m.Ay.div.withConfig({displayName:"event-navigation__Container"})`
  max-width: 100vw;
  display: flex;
  align-items: ${({$curWeek:e})=>e?"flex-start":"center"};
  justify-content: ${({$curWeek:e})=>e?"flex-start":"space-between"};
  gap: 16px;
  padding: ${({$curWeek:e})=>e?"8px":"8px 16px"};
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;
  ${Q.A`
    --gradient-direction: var(--fkHeaderBackgroundColorGradientDirection, var(--gradient-direction-default));
    --gradient-color: var(--fkHeaderBackgroundColor, var(--header-background-deafault));
  `}
  z-index: 1;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`,X=(m.Ay.div.withConfig({displayName:"event-navigation__Connector"})`
  position: absolute;
  top: 50%;
  left: -20px;
  width: 20px;
  height: 1px;
  background-color: #fff;
`,m.Ay.span.withConfig({displayName:"event-navigation__EventName"})`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
`),q=m.Ay.button.withConfig({displayName:"event-navigation__Button"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid #fff;
  background-color: #191c23;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  color: #fff;
  cursor: pointer;
`;var ee=n("jTUD"),te=n.n(ee),ne=n("VqJ3"),re=n.n(ne),ie=n("mIEp"),ae=n.n(ie),oe=n("Kv1s"),se=n.n(oe),le=n("dIqr"),de=n.n(le),ce=n("W/29"),ue=n("bvkK"),pe=n("BtVd");te().extend(se()),te().extend(ae()),te().extend(re());var me=({selectedEvent:e,onChange:t})=>{const[n,r]=(0,p.useState)(null),i=(0,c.d4)(pe.Zc),a=(0,c.d4)(ue.UQ),{teams:o,fkSpecialEvents:s,enableGameEvents:l=!1}=(0,c.d4)(S.H6),d=(0,p.useMemo)(()=>{const e=a.find(e=>{const t="weekly"===e.type,n="active"===e.state;return t&&n});return!!e&&e.weekNumber===i?.settings?.weekNumber},[a,i]);(0,p.useEffect)(()=>{e&&r(e)},[e]);const m=(0,p.useCallback)(e=>o?.find(t=>t.id===e),[o]),g=(0,p.useMemo)(()=>{if(!a||!i)return[];const{settings:{weekNumber:e}}=i,t=a.filter(t=>{const n="weekly"===t.type,r=t.weekNumber===e;return n&&r}),n=a.filter(t=>{const n="game"===t.type,r=t.weekNumber===e;return n&&r}).map(e=>{const t=m(e.homeTeam),n=m(e.awayTeam);return{id:e.id,isWeekly:!1,startAt:e.startAt,closeAt:e.endAt,withTeams:!!t?.id&&!!n?.id,homeTeam:{name:t?.id,logo:t?.logo,color:t?.accentColour},awayTeam:{name:n?.id,logo:n?.logo,color:n?.accentColour}}}).sort((e,t)=>{const n=le.Date.now(),r=e.closeAt<n,i=t.closeAt<n;return r&&!i?1:!r&&i?-1:e.startAt-t.startAt}),r=[];return t&&t.forEach(e=>{const t=(s||[])?.find(t=>t.events?.some(t=>t.eventId===e.id)),n=t?.chicletTextOverride??e.name,i=t?.chicletLogo??null,a=t?.chicletBgImage??null;r.push({id:e.id,isWeekly:!0,label:n,logo:i,bgImage:a,startAt:e.startAt,closeAt:e.endAt})}),n&&l&&r.push(...n),r},[i,a,l,s,m]);(0,p.useEffect)(()=>{if(!e)return;const{homeTeam:t,awayTeam:n,date:r,type:i}=a?.find(t=>t.id===e)||{};if(t&&n&&r&&i)if("weekly"===i){const e=(0,I.oJ)(u.Oz.CHICLET_PAGEVIEW,{activeTab:"Weekly Picks Tab"});(0,I.u4)(e)}else{const e=`${t} @ ${n}, ${r}`,i=(0,I.oJ)(u.Oz.CHICLET_PAGEVIEW,{activeTab:e});(0,I.u4)(i)}},[e,a,d]);const f=(0,p.useCallback)(()=>{if(!a?.length)return;const e=a.find(e=>"active"===e.state&&"weekly"===e.type);if(e){const n=te().utc(1e3*e.startAt).format("YYYY-MM-DD");r(e.id),t(n,e.id),(0,ce.j)("e");const i=(0,I.oJ)(u.Oz.TODAY_CLICK,{});(0,I.u4)(i)}},[a,t]),h=(0,p.useCallback)(e=>{const n=a.find(t=>t.id===e),i=te().utc(1e3*n.startAt).format("YYYY-MM-DD"),{homeTeam:o,awayTeam:s}=n;if("weekly"===n.type){const e=(0,I.oJ)(u.Oz.CHICLET_CLICK,{label:"Weekly Picks Tab"});(0,I.u4)(e)}else{const e=`${o} @ ${s}, ${i}`,t=(0,I.oJ)(u.Oz.CHICLET_CLICK,{label:e});(0,I.u4)(t)}r(e),t(i,e),(0,ce.z)("e",e)},[a,t]);return d?(0,x.jsx)(Y,{$curWeek:d,children:g.filter(e=>e.isWeekly||e.withTeams).map(e=>(0,x.jsx)(J,{event:e,selected:n===e.id,onSelect:h},e.id))}):(0,x.jsxs)(Y,{$curWeek:d,children:[i&&(0,x.jsx)(X,{children:i.name}),i&&(0,x.jsxs)(q,{onClick:f,children:["Today",(0,x.jsx)(K,{})]})]})};const ge=m.Ay.div.withConfig({displayName:"footer__Wrapper"})`
  --header-background-deafault:
    var(--elementHighlightLightColor), var(--elementHighlightLightColorDarkenSingle);

  width: 100%;
  padding: 16px 24px;
  text-align: center;

  background: #000;
  color: #fff;

  a {
    cursor: pointer;
  }
`,fe=(0,m.Ay)(O.qn).withConfig({displayName:"footer__Menu"})`
  p {
    font-size: 12px;
  }
  a {
    font-size: 10px;
    color: #2199e8;
  }
`;var he=({handleRules:e})=>{const{footerHtml:t}=(0,c.d4)(S.H6),n=(0,p.useRef)(null);return(0,p.useEffect)(()=>{if(!n?.current)return;const t=n.current;if(!t)return;const r=t.querySelector('a[href="#cookie"]');if(r){const e=document.createElement("button");e.className="consent-btn ot-sdk-show-settings",e.innerText="Your Privacy Choices",r.replaceWith(e)}const i=t.querySelector('a[href="#rules"]');if(i){const t=document.createElement("button");t.className="consent-btn",t.innerText="Rules",t.addEventListener("click",e),i.replaceWith(t)}},[t,e]),(0,x.jsx)(ge,{ref:n,children:t&&(0,x.jsx)(fe,{content:t})})};const ve="game-details-broadcaster",ye=()=>(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",children:(0,x.jsx)("path",{d:"M10.5 5.5L0.75 10.6962L0.750001 0.303847L10.5 5.5Z",fill:"white"})});var be=n("EAF/"),xe=n("kJnb");const Ne=m.Ay.div.withConfig({displayName:"game-details__Container"})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 16px;

  ${({$bgColor:e})=>e&&m.AH`
      background-color: ${e};
    `}
`,Ae=m.Ay.div.withConfig({displayName:"game-details__Inner"})`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 0 24px;

  ${xe.A.md`
    max-width: 440px;
  `}
`,Ce=m.Ay.div.withConfig({displayName:"game-details__Row"})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Oe=m.Ay.div.withConfig({displayName:"game-details__TeamWrapper"})`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
`,Te=m.Ay.img.withConfig({displayName:"game-details__TeamLogo"})`
  height: 40px;
  align-self: stretch;
  aspect-ratio: 1/1;
`,Ie=(0,m.Ay)(be.cP).withConfig({displayName:"game-details__TeamName"})`
  color: #fff;
`,Ee=m.Ay.div.withConfig({displayName:"game-details__TeamScore"})`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Knockout;
  font-size: 36px;
  font-style: normal;
  font-weight: 360;
  line-height: normal;
  color: #fff;
`,we=m.Ay.div.withConfig({displayName:"game-details__HomeTeamWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`,_e=m.Ay.div.withConfig({displayName:"game-details__AwayTeamWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`,ke=m.Ay.div.withConfig({displayName:"game-details__CenterWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
`,Pe=m.Ay.div.withConfig({displayName:"game-details__Center"})`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
`,je=(0,m.Ay)(be.cP).withConfig({displayName:"game-details__Text"})`
  color: #fff;
`,Le=m.Ay.img.withConfig({displayName:"game-details__Banner"})`
  width: auto;
  height: 22px;
  overflow: hidden;
`,$e=m.Ay.div.withConfig({displayName:"game-details__Watch"})`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #606060;
  overflow: hidden;
  padding: 0 10px;
  cursor: pointer;
`,Se=m.Ay.div.withConfig({displayName:"game-details__Broadcasters"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  .game-details-broadcaster_nbc {
    height: 14px;
  }
`,Re=m.Ay.div.withConfig({displayName:"game-details__WatchNowText"})`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  text-align: center;

  span {
    border-bottom: 1px solid #3b82f6;
  }
`;m.Ay.span.withConfig({displayName:"game-details__Label"})`
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  leading-trim: both;
  text-edge: cap;
  color: #fff;
`,m.Ay.div.withConfig({displayName:"game-details__PlayIconWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;var Be=n("EHs7"),De=()=>{const{teams:e=[],pickem:{finishedText:t},fkSpecialEvents:n=[]}=(0,c.d4)(S.H6),r=(0,c.d4)(pe.Zc),i=(0,c.d4)(S.H6),a=(0,c.d4)(pe.yq),o=(0,p.useCallback)(t=>t?e.find(e=>e.id===t):null,[e]),s=(0,Be.A)(a?.broadcaster),l=(0,p.useMemo)(()=>n?.find(e=>e.events?.some(e=>e.eventId===r?.id)),[n,r?.id]),d=(0,p.useCallback)(()=>{if(!r.isActive)return;const e=`https://www.nba.com/how-to-watch-game-redirect/${a.gameId}?partnerRef=PickEm&surface=GameHeader`;window.open(e,"_blank");const t=(0,I.oJ)(u.Oz.BROADCASTER_CLICK,{broadcasters:s.map(e=>e.id).join(";")});(0,I.u4)(t)},[r,a,s]),m=(0,p.useMemo)(()=>a.gameQuarter<=4?t:`${t}/OT`,[t,a.gameQuarter]),g=i?.pickem?.gameDetailsWatchText,f=o(a?.awayTeam),h=o(a?.homeTeam),v=!(!a?.homeScore||!a?.awayScore);return r?(0,x.jsx)(Ne,{className:"game-details",$bgColor:l?.scorebarBackgroundColor??"#000",children:(0,x.jsxs)(Ae,{children:[(0,x.jsxs)(Ce,{children:[(0,x.jsxs)(we,{children:[(0,x.jsxs)(Oe,{children:[(0,x.jsx)(Te,{src:h?.logo,alt:h?.title}),(0,x.jsx)(Ie,{children:h?.title})]}),v&&(0,x.jsx)(Ee,{children:a.homeScore})]}),r.isActive&&(0,x.jsxs)(ke,{children:[a.gameQuarter&&(0,x.jsxs)(je,{children:["Q",a.gameQuarter]}),a.gameClock&&(0,x.jsx)(je,{children:a.gameClock})]}),r.isFinished&&(0,x.jsx)(ke,{children:(0,x.jsx)(je,{children:m})}),(0,x.jsxs)(_e,{children:[v&&(0,x.jsx)(Ee,{children:a.awayScore}),(0,x.jsxs)(Oe,{children:[(0,x.jsx)(Te,{src:f?.logo,alt:f?.title}),(0,x.jsx)(Ie,{children:f?.title})]})]})]}),r.isActive&&(0,x.jsx)(Pe,{children:(0,x.jsxs)($e,{onClick:d,children:[(0,x.jsx)(ye,{}),(0,x.jsx)(Re,{children:g}),(0,x.jsx)(Se,{children:s.map(e=>(0,x.jsx)(Le,{src:e.image,className:`${ve} ${ve}_${e.id.toLowerCase()}`},e.id))})]})})]})}):null};const He=()=>(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,x.jsx)("path",{d:"M20.9696 16.0001V14.0001L3.99902 14.0001L3.99902 16.0001L20.9696 16.0001Z",fill:"white"}),(0,x.jsx)("path",{d:"M20.9696 10.0001V8.00006L3.99907 8.00006L3.99907 10.0001L20.9696 10.0001Z",fill:"white"})]}),Me=()=>(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M12.0001 13.4142L17.293 18.7071L18.7072 17.2929L13.4143 12L18.7072 6.70706L17.293 5.29285L12.0001 10.5857L6.70718 5.29285L5.29297 6.70706L10.5859 12L5.29297 17.2928L6.70718 18.7071L12.0001 13.4142Z",fill:"white"})}),ze=m.Ay.div.withConfig({displayName:"Icon__Container"})`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;var Ue=({opened:e,handleClick:t})=>(0,x.jsx)(ze,{onClick:t,children:e?(0,x.jsx)(Me,{}):(0,x.jsx)(He,{})});const Ve=m.Ay.div.withConfig({displayName:"Menu__Wrapper"})`
  position: absolute;
  top: 49px;
  left: 3px;
  width: 288px;
  border-radius: 8px;
  border: 1px solid #2b2f37;
  background: #191c23;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  padding-bottom: 8px;
  overflow: hidden;
  pointer-events: ${({$opened:e})=>e?"all":"none"};
  opacity: 0;
  z-index: 100;

  ${({$opened:e})=>e&&m.AH`
      opacity: 1;
      transition: opacity 0.3s ease-in-out 0.2s;
    `}
`,Fe="burger-menu",Ge={BLOCK:Fe,ICON:`${Fe}__icon`,MENU:`${Fe}__menu`,MENU_CONTAINER:`${Fe}__menu-container`};var We=({opened:e=!1,children:t})=>((0,p.useEffect)(()=>{document.body.style.overflow=e?"hidden":null},[e]),(0,x.jsx)(Ve,{className:Ge.MENU,$opened:e,children:t})),Ze=(e,t)=>{const n=(0,p.useCallback)(n=>{e.every(e=>e&&e.current&&!e.current.contains(n.target))&&t()},[e,t]);(0,p.useEffect)(()=>(document.addEventListener("keyup",n),document.addEventListener("touchend",n),document.addEventListener("pointerup",n),()=>{document.removeEventListener("keyup",n),document.removeEventListener("touchend",n),document.removeEventListener("pointerup",n)}),[n])};const Je=({opened:e,onClose:t,onToggle:n,children:r})=>{const i=(0,p.useRef)(null),a=(0,p.useRef)(null);return Ze([i,a],t),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{ref:i,className:Ge.BLOCK,children:(0,x.jsx)(Ue,{opened:e,handleClick:n})}),(0,x.jsx)("div",{ref:a,children:(0,x.jsx)(We,{opened:e,children:r})})]})};var Ke=(0,p.memo)(Je);const Qe=m.Ay.div.withConfig({displayName:"cells__Container"})`
  width: 100%;
  background: #191c23;
`,Ye=m.Ay.div.withConfig({displayName:"cells__Row"})`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  &:not(:last-child) {
    border-bottom: 1px solid #4e525c;
  }

  ${({$active:e})=>e&&m.AH`
      background: var(--fkEventPickerSelectedDayBgColor);
    `}
`,Xe=m.Ay.span.withConfig({displayName:"cells__Event"})`
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #fff;
`,qe=m.Ay.span.withConfig({displayName:"cells__Live"})`
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #adffb3;
`,et=m.Ay.span.withConfig({displayName:"cells__Picks"})`
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.5);
`,tt=m.Ay.span.withConfig({displayName:"cells__Day"})`
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: var(--fkEventPickerDefaultDayTextColor, #fff);

  --weekEventBgColor: var(--fkEventPickerWeekEventBgColor, #0268d6);
  --weekEventTextColor: var(--fkEventPickerWeekEventTextColor, #fff);

  ${({$active:e})=>e&&m.AH`
      width: 100%;
      border-radius: 16px;
      font-weight: 700;
    `}

  ${({$active:e,$weekEvent:t})=>e&&t&&m.AH`
      background: var(--fkEventPickerWeekEventBgColor, var(--weekEventBgColor));
      color: var(--fkEventPickerWeekEventTextColor, var(--weekEventTextColor));
    `}
`,nt=m.Ay.div.withConfig({displayName:"cells__DayCell"})`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1px;
  padding: 3px;
  -webkit-tap-highlight-color: transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: ${({$active:e})=>e?"pointer":"default"};

  ${({$selected:e})=>e&&m.AH`
      border-radius: 4px;

      ${et} {
        color: #000;
      }
    `}

  ${({$live:e})=>e&&m.AH`
      ${tt} {
        background: var(--fkEventPickerLiveEventBgColor, #adffb3);
        color: var(--fkEventPickerLiveEventTextColor, #191c23);
      }
    `}
`,rt=`${u.tU}event-picker`,it={BLOCK:rt,LABEL:`${rt}__label`,ICON:`${rt}__icon`,MENU:`${rt}__menu`,DAY_CELL:`${rt}__day-cell`,DAY_PILL:`${rt}__day-pill`};var at=n("ggLN"),ot=n("7Z4j"),st=n("DI83"),lt=n("QG5k"),dt=n("Ml2g"),ct=n("dX2q"),ut=n("whn4"),pt=n("ioX/"),mt=({date:e,listings:t,selected:n,onChange:r})=>{const i=(0,p.useMemo)(()=>{const i=(0,at.w)(e),a=(0,ot.p)(i),o=(0,st.k)(i,{weekStartsOn:1}),s=(0,lt.$)(a,{weekStartsOn:1}),l=[];let d=[],c=o,u="";for(;c<=s;){const e=(0,dt.R)(n,c);for(let e=0;e<7;e++){const e=c,o=t.find(({date:t,type:n})=>"weekly"===n&&(0,ct.GP)(e,"yyyy-MM-dd")===t),s=void 0!==o,l=c<i||c>a;u=l?"":(0,ct.GP)(c,"d");const p=s&&"weekly"===o.type;let m="";s&&p&&(m="Period");let g="";if(s&&p){const e=Number(o.weekNumber);g=(e>10?e-1:e).toString()}d.push((0,x.jsxs)(nt,{$live:s&&o.isLive,$active:s&&!l,$selected:!!n&&(0,ut.r)(e,n)&&!l,className:it.DAY_CELL,onClick:()=>p?r(e,o.id):{},children:[(0,x.jsx)(tt,{$active:s&&!l,$weekEvent:p,className:it.DAY_PILL,children:u}),!l&&(0,x.jsx)(Xe,{children:m}),p&&!o.isLive&&!l&&(0,x.jsx)(Xe,{children:g}),p&&o.isLive&&!l&&(0,x.jsx)(qe,{children:"Live"})]},c.toString())),c=(0,pt.f)(c,1)}l.push((0,x.jsx)(Ye,{$active:e,children:d},c.toString())),d=[]}return l},[e,n,t,r]);return(0,x.jsx)(Qe,{children:i})};const gt=m.Ay.div.withConfig({displayName:"nav__Container"})`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #191c23;
  padding: 0 16px;
`,ft=m.Ay.div.withConfig({displayName:"nav__Icon"})`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
`,ht=(m.Ay.img.withConfig({displayName:"nav__Arrow"})`
  width: 18px;
  height: 18px;
`,m.Ay.div.withConfig({displayName:"nav__Label"})`
  width: 140px;
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
`),vt=()=>(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M8.92676 4H14.8525V2H16.8281V4H21V22H3V4H6.95117V2H8.92676V4ZM5 10V20H19V10H5ZM8.92676 18H6.95117V16H8.92676V18ZM12.877 18H10.9023V16H12.877V18ZM16.8281 18H14.8525V16H16.8281V18ZM8.92676 14H6.95117V12H8.92676V14ZM12.877 14H10.9023V12H12.877V14ZM16.8281 14H14.8525V12H16.8281V14ZM5 9.5H19V6H5V9.5Z",fill:"white"})}),yt=()=>(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M12.0001 13.4142L17.293 18.7071L18.7072 17.2929L13.4143 12L18.7072 6.70706L17.293 5.29285L12.0001 10.5857L6.70718 5.29285L5.29297 6.70706L10.5859 12L5.29297 17.2928L6.70718 18.7071L12.0001 13.4142Z",fill:"white"})}),bt=()=>(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.0113 2.46973L12.0295 3.53039L6.77865 9.00006L12.0295 14.4697L11.0113 15.5304L4.74219 9.00006L11.0113 2.46973Z",fill:"#2B2F37"})}),xt=()=>(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.28022 2.46973L6.21956 3.53039L11.6892 9.00006L6.21956 14.4697L7.28022 15.5304L13.8105 9.00006L7.28022 2.46973Z",fill:"#2B2F37"})});var Nt=({date:e,onChange:t})=>(0,x.jsxs)(gt,{children:[(0,x.jsx)(ft,{onClick:e=>{e.stopPropagation(),t(-1)},children:(0,x.jsx)(bt,{})}),(0,x.jsx)(ht,{children:e}),(0,x.jsx)(ft,{onClick:e=>{e.stopPropagation(),t(1)},children:(0,x.jsx)(xt,{})})]});const At=m.Ay.div.withConfig({displayName:"weekdays__List"})`
  width: 100%;
  height: 24px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0;
  border-top: 1px solid #4e525c;
  border-bottom: 1px solid #4e525c;
  background: #191c23;
`,Ct=m.Ay.div.withConfig({displayName:"weekdays__Day"})`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%;
  text-transform: uppercase;
  color: #fff;
`;var Ot=()=>(0,x.jsx)(At,{children:["M","T","W","T","F","S","S"].map((e,t)=>(0,x.jsx)(Ct,{children:e},t))});const Tt=m.Ay.div.withConfig({displayName:"event-picker__Wrapper"})`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
`,It=(m.Ay.div.withConfig({displayName:"event-picker__Label"})`
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%;
  text-transform: uppercase;
  color: #fff;
`,m.Ay.div.withConfig({displayName:"event-picker__Clicker"})`
  cursor: pointer;

  ${xe.A.md`
    padding: 8px;;
  `}
`),Et=(m.Ay.img.withConfig({displayName:"event-picker__Icon"})`
  width: 24px;
  height: 24px;
`,m.Ay.div.withConfig({displayName:"event-picker__Modal"})`
  position: fixed;
  top: 48px;
  right: 8px;
  width: calc(100vw - 16px);
  max-width: 420px;
  background: #fff;
  box-shadow: var(--fkEventPickerBoxShadow);
  border-radius: 8px;
  border: 1px solid #4e525c;
  overflow: hidden;
  z-index: 2;

  ${Q.A`
    --gradient-direction: var(--fkEventPickerButtonGradientDirection, var(--gradient-direction-default));
    --gradient-color: var(--fkEventPickerBackgroundColor, var(--fk-header-background-color));
  `}
`);var wt=n("qMGW"),_t=n("QCrr"),kt=({selected:e,onChangeDate:t})=>{const[n,r]=(0,p.useState)(new Date),[i,a]=(0,p.useState)(!1),o=(0,p.useRef)(null),s=(0,p.useRef)(null),l=e?new Date((0,wt.H)(e)):null,d=(0,c.d4)(ue.UQ);return Ze([o,s],()=>a(!1)),(0,p.useEffect)(()=>{e&&r(new Date((0,wt.H)(e)))},[e]),(0,x.jsxs)(Tt,{className:it.BLOCK,children:[(0,x.jsx)(It,{ref:o,className:it.ICON,onClick:e=>{e.stopPropagation();const t=(0,I.oJ)(u.Oz.CALENDAR_CLICK,{});(0,I.u4)(t);const n=!i;a(n),n&&a(!i)},children:i?(0,x.jsx)(yt,{}):(0,x.jsx)(vt,{})}),i&&(0,x.jsxs)(Et,{ref:s,className:it.MENU,children:[(0,x.jsx)(Nt,{date:(0,ct.GP)(n,"MMMM yyyy"),onChange:e=>{const t=(0,_t.P)(n,e);r(t)}}),(0,x.jsx)(Ot,{}),(0,x.jsx)(mt,{date:n,selected:l,listings:d,onChange:(e,n)=>{if(!n)return;const r=(0,I.oJ)(u.Oz.CALENDAR_DATE,{label:n});(0,I.u4)(r),t((0,ct.GP)(e,"yyyy-MM-dd"),n),(0,ce.z)("e",n),a(!1)}})]})]})};const Pt=m.Ay.div.withConfig({displayName:"auth__Item"})`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #208bff;
  cursor: pointer;

  &:hover {
    background: #2b2f38;
  }
`;var jt=n("yLjE"),Lt=n("dUZd"),$t=()=>{const e=(0,c.d4)(Lt.YV),t=(0,c.wA)(),{userAccessSignInUrlWeb:n,userAccessSignInUrlNativeIOS:r,userAccessSignInUrlNativeAndroid:i}=(0,p.useContext)(T.Ay),a=C(n,r,i),o=(0,p.useCallback)(()=>{const n=e?u.Oz.SIGN_OUT:u.Oz.SIGN_IN,r=e?"Sign Out":"Sign In",i=(0,I.oJ)(n,{label:r});(0,I.u4)(i),e?t((0,jt.ri)()):window.location.href=a},[e,a,t]);return(0,x.jsx)(Pt,{onClick:o,children:e?"Sign Out":"Sign In"})};const St=m.Ay.div.withConfig({displayName:"list__Container"})`
  width: 100%;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }
`,Rt=m.Ay.div.withConfig({displayName:"list__Item"})`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;

  color: #fff;
  background: ${({$active:e})=>e?"#2B2F38":"transparent"};

  &:hover {
    background: #2b2f38;
  }
`,Bt=m.Ay.a.withConfig({displayName:"list__Hyperlink"})``;var Dt=n("oNR1"),Ht=n("USb2"),Mt=({items:e,onNavigate:t})=>{const n=(0,Dt.zy)();return(0,x.jsx)(St,{children:(e||[]).map(({title:e,url:r})=>r.startsWith("/")?(0,x.jsx)(Ht.N_,{to:r,onClick:t,children:(0,x.jsx)(Rt,{$active:n.pathname===r,children:e})},r):(0,x.jsx)(Bt,{href:r,onClick:t,children:(0,x.jsx)(Rt,{$active:n.pathname===r,children:e})},r))})};const zt=({isDomestic:e})=>(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"84",height:"30",viewBox:"0 0 84 30",fill:"none",children:[(0,x.jsx)("g",{filter:"url(#filter0_f_5103_11060)",children:(0,x.jsx)("circle",{cx:"46",cy:"-9",r:"17",fill:e?"#0066FF":"#F58426"})}),(0,x.jsx)("defs",{children:(0,x.jsxs)("filter",{id:"filter0_f_5103_11060",x:"0",y:"-55",width:"92",height:"92",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,x.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,x.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,x.jsx)("feGaussianBlur",{stdDeviation:"14.5",result:"effect1_foregroundBlur_5103_11060"})]})})]}),Ut=m.Ay.div.withConfig({displayName:"points__ModalWrapper"})`
  position: relative;
  display: inline-block;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`,Vt=m.Ay.div.withConfig({displayName:"points__Container"})`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 10px;
  border-radius: 40px;
  border: 1px solid #606060;
  background: #191c23;
  position: relative;
  cursor: pointer;

  ${xe.A.md`
    margin-right: 8px;
  `}
`,Ft=m.Ay.span.withConfig({displayName:"points__Name"})`
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: #fff;
`,Gt=m.i7`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`,Wt=m.Ay.img.withConfig({displayName:"points__Icon"})`
  width: 17px;
  height: 17px;
  ${({$isAnimating:e})=>e&&m.AH`
      animation: ${Gt} 0.6s ease-in-out;
    `}
`,Zt=m.i7`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`,Jt=m.Ay.span.withConfig({displayName:"points__ScoreWrapper"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,Kt=m.Ay.span.withConfig({displayName:"points__Score"})`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.98px;
  color: #fff;
`,Qt=m.Ay.span.withConfig({displayName:"points__PointsDifference"})`
  position: absolute;
  right: -15px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #20f890;
  white-space: nowrap;
  animation: ${Zt} 1.5s ease-out forwards;
  pointer-events: none;

  ${xe.A.md`
    right: -25px;
  `}
`,Yt=m.Ay.div.withConfig({displayName:"points__Absolute"})`
  position: absolute;
  top: 0;
  right: 50px;
  width: 34px;
  height: 34px;
`,Xt=m.Ay.div.withConfig({displayName:"points__Modal"})`
  position: fixed;
  top: 45px;
  right: 8px;
  min-width: 250px;
  border-radius: 8px;
  border: 1px solid #393939;
  background: #111;
  box-shadow: 0 10px 4px 0 rgba(0, 0, 0, 0.35);
  z-index: 1000;
`,qt=m.Ay.div.withConfig({displayName:"points__ModalContent"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  position: relative;
`,en=m.Ay.div.withConfig({displayName:"points__ModalHeader"})`
  display: flex;
  align-items: center;
  gap: 6px;

  ${Wt} {
    width: 12px;
    height: 12px;
  }
`,tn=m.Ay.h3.withConfig({displayName:"points__ModalTitle"})`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  color: #fff;
`,nn=m.Ay.div.withConfig({displayName:"points__ModalRow"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,rn=m.Ay.span.withConfig({displayName:"points__ModalLabel"})`
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: #fff;
`,an=m.Ay.span.withConfig({displayName:"points__ModalPoints"})`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #fff;
`;var on=n("EMCP"),sn=n("/DvN"),ln=()=>{const e=(0,c.d4)(Lt.dM),t=(0,c.d4)(Lt.YV),n=(0,c.d4)(sn.to),{points:r=0}=(0,c.d4)(sn.Em),{pickem:{yourPointsText:i,yourSweepstakeEntriesText:a,thisWeekText:o,lastWeekText:s}}=(0,c.d4)(S.H6),{isDomestic:l,imageUrl:d}=(0,on.A)(),u=(0,p.useRef)(r),[m,g]=(0,p.useState)(null),[f,h]=(0,p.useState)(!1),v=null!==m,y=l?a:i,b=(0,p.useRef)(null),N=(0,p.useRef)(null);Ze([b,N],()=>h(!1)),(0,p.useEffect)(()=>{const e=u.current;let t=null;if(e!==r&&0!==e){const n=r-e;n>0&&(g(n),t=setTimeout(()=>{g(null)},1500))}return u.current=r,()=>{t&&clearTimeout(t)}},[r]);const A=e?.length>8?`${e.substring(0,8)}...`:e;return t?(0,x.jsxs)(Ut,{children:[(0,x.jsxs)(Vt,{ref:b,onClick:()=>{h(!f)},children:[(0,x.jsx)(Ft,{children:A}),(0,x.jsx)(Wt,{src:d,$isAnimating:v}),(0,x.jsxs)(Jt,{children:[(0,x.jsx)(Kt,{children:r}),v&&(0,x.jsxs)(Qt,{children:["+",m]},m)]}),(0,x.jsx)(Yt,{children:(0,x.jsx)(zt,{isDomestic:l})})]}),f&&(0,x.jsx)(Xt,{ref:N,children:(0,x.jsxs)(qt,{children:[(0,x.jsxs)(en,{children:[(0,x.jsx)(Wt,{src:d,$isAnimating:!1}),(0,x.jsx)(tn,{children:y})]}),(0,x.jsxs)(nn,{children:[(0,x.jsx)(rn,{children:o}),(0,x.jsx)(an,{children:r})]}),(0,x.jsxs)(nn,{children:[(0,x.jsx)(rn,{children:s}),(0,x.jsx)(an,{children:n??0})]})]})})]}):null};let dn=function(e){return e[e.PROFANITY_ERROR=400]="PROFANITY_ERROR",e[e.USERNAME_TAKEN=409]="USERNAME_TAKEN",e}({});const cn=m.Ay.div.withConfig({displayName:"profile-update__Overlay"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`,un=m.Ay.div.withConfig({displayName:"profile-update__Wrapper"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(100% - 16px);
  min-height: 200px;
  transform: translate(-50%, -50%);
  background: #191c23;
  border-radius: 8px;
  border: 1px solid #4e525c;
  padding: 40px 24px;
  pointer-events: auto;
  z-index: 3;

  @media (min-width: 768px) {
    width: 560px;
  }
`,pn=m.Ay.div.withConfig({displayName:"profile-update__Icon"})`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`,mn=m.Ay.h1.withConfig({displayName:"profile-update__Header"})`
  width: 100%;
  font-family: Knockout;
  font-size: 40px;
  font-style: normal;
  font-weight: 360;
  line-height: 36px;
  text-transform: uppercase;
  color: #fff;
`,gn=m.Ay.div.withConfig({displayName:"profile-update__Main"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`,fn=m.Ay.div.withConfig({displayName:"profile-update__Control"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,hn=m.Ay.div.withConfig({displayName:"profile-update__Label"})`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
`,vn=m.Ay.input.withConfig({displayName:"profile-update__Input"})`
  width: 100%;
  height: 48px;
  border: 1px solid #4e525c;
  border-radius: 4px;
  outline: none;
  padding: 0 10px;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
  background: transparent;

  &::placeholder {
    color: #bfc2c6;
  }

  ${({$error:e})=>e&&m.AH`
      border: 1px solid #b3261e;
    `}
`,yn=m.Ay.button.withConfig({displayName:"profile-update__Button"})`
  width: 248px;
  height: 48px;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid #4e525c;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #191c23;
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
  opacity: ${({$disabled:e})=>e?.5:1};
`;var bn=n("UvmQ"),xn=n("l/jD"),Nn=()=>{const[e,t]=(0,p.useState)(""),[n,r]=(0,p.useState)(!1),[i,a]=(0,p.useState)(null),{mIdFrontendUrl:o,userAccess:{usernameAlreadyTakenText:s,profanityCheckText:l}}=(0,c.d4)(S.H6),d=(0,c.d4)(xn.H3),u=(0,c.d4)(Lt.dM),m=(0,p.useRef)(null),g=(0,c.wA)();return(0,p.useEffect)(()=>{m?.current&&m.current.focus()},[]),(0,p.useEffect)(()=>(document.body.style.overflow="hidden",document.body.style.pointerEvents="none",()=>{document.body.style.overflow="",document.body.style.pointerEvents="auto"}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(cn,{}),(0,x.jsxs)(un,{children:[(0,x.jsx)(pn,{onClick:async()=>{if(d&&o){if(!u){const e=async()=>{try{const e=`PickemFan${Math.floor(10**6+8999999*Math.random())}`;await(0,bn.TK)({baseUrl:o,projectId:d,username:e}),g((0,jt.kZ)({username:e}))}catch(t){console.log("Error updating username",t),await new Promise(e=>{setTimeout(()=>e(),250)}),await e()}};await e()}g((0,jt.a5)())}},children:(0,x.jsx)(N,{})}),(0,x.jsx)(mn,{children:"Edit username"}),(0,x.jsx)(gn,{children:(0,x.jsxs)(fn,{children:[i&&(0,x.jsx)(hn,{children:i}),(0,x.jsx)(vn,{ref:m,type:"text",value:e,$error:!!n,autoFocus:!0,onChange:e=>{const{value:n}=e.target;n.length<=40&&t(n),r(!/^[a-zA-Z0-9]*$/.test(n)),a(null)},placeholder:"Update your display name"})]})}),(0,x.jsx)(yn,{disabled:!e||n,$disabled:!e||n,onClick:async()=>{if(d&&o)try{await(0,bn.TK)({baseUrl:o,projectId:d,username:e}),g((0,jt.kZ)({username:e})),g((0,jt.a5)())}catch(e){r(!0),e===dn.USERNAME_TAKEN?a(s):e===dn.PROFANITY_ERROR?a(l):a("Error updating username")}},children:"Update"})]})]})};const An=()=>(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.6399 9.36395L13.9328 8.65684L6.86183 15.7279L7.56894 16.435L14.6399 9.36395ZM13.9328 5.82842L4.03341 15.7279L7.56895 19.2634L17.4684 9.36395L13.9328 5.82842Z",fill:"white"}),(0,x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.32628 16.435L2.97275 20.3241L6.86183 19.9705L3.32628 16.435Z",fill:"white"}),(0,x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.7612 3L14.6399 5.12131L18.1755 8.65684L20.2968 6.53552L16.7612 3Z",fill:"white"})]}),Cn=m.Ay.div.withConfig({displayName:"user__Row"})`
  max-width: 100%;
  height: 56px;
  display: grid;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  grid-template-columns: 1fr 24px;
  padding: 16px;
  border-bottom: 1px solid #4e525c;

  &:hover {
    background: #2b2f38;
  }
`,On=m.Ay.span.withConfig({displayName:"user__Name"})`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
`,Tn=m.Ay.div.withConfig({displayName:"user__Icon"})`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;var In=()=>{const e=(0,c.d4)(Lt.dM),t=(0,c.d4)(Lt.YV),n=(0,c.wA)();return t?(0,x.jsxs)(Cn,{children:[(0,x.jsx)(On,{children:e}),(0,x.jsx)(Tn,{onClick:()=>{const e=(0,I.oJ)(u.Oz.EDIT_NAME,{});(0,I.u4)(e),n((0,jt.Kr)())},children:(0,x.jsx)(An,{})})]}):null};const En=()=>(0,x.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12ZM19.8 12C19.8 16.3078 16.3078 19.8 12 19.8C7.69218 19.8 4.2 16.3078 4.2 12C4.2 7.69218 7.69218 4.2 12 4.2C16.3078 4.2 19.8 7.69218 19.8 12Z",fill:"white"}),(0,x.jsx)("path",{d:"M12.5527 14.4545C12.7196 14.4545 12.8683 14.4183 12.9989 14.3457L12.9445 15.5755C12.6035 15.8585 12.2153 16 11.78 16C11.1197 16 10.6916 15.8476 10.4957 15.5429C10.3651 15.3397 10.2998 15.1257 10.2998 14.9008C10.2998 14.6686 10.3143 14.4654 10.3433 14.2913L10.9963 10.6127H12.8465L12.2371 14.041C12.2298 14.0845 12.2262 14.1244 12.2262 14.1607C12.2262 14.3566 12.335 14.4545 12.5527 14.4545ZM11.214 8.83867C11.214 8.37431 11.3156 8.03692 11.5188 7.8265C11.7292 7.60883 12.052 7.5 12.4874 7.5C13.0969 7.5 13.4016 7.76846 13.4016 8.30538C13.4016 8.76248 13.2964 9.09624 13.086 9.30666C12.8828 9.51707 12.5599 9.62228 12.1173 9.62228C11.5151 9.62228 11.214 9.36108 11.214 8.83867Z",fill:"white"})]}),wn=m.DU`
  :root {
    --header-height: ${({height:e})=>e||0}px;
    --header-visible-height: ${({visibleHeight:e})=>e||0}px;
  }
`,_n=m.Ay.header.withConfig({displayName:"header__Wrapper"})`
  --header-background-deafault:
    var(--fkElementHighlightColor), var(--fkElementHighlightDarkenSingle);

  padding: 0 8px 0 0;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--fkHeaderBoxShadow);
  user-select: none;

  ${Q.A`
    --gradient-direction: var(--fkHeaderBackgroundColorGradientDirection, var(--gradient-direction-default));
    --gradient-color: var(--fkHeaderBackgroundColor, var(--header-background-deafault));
  `}
`,kn=m.Ay.div.withConfig({displayName:"header__Group"})`
  display: flex;
  align-items: center;
  gap: 4px;

  ${xe.A.md`
    gap: 8px;
  `}
`,Pn=m.Ay.img.withConfig({displayName:"header__Logo"})`
  width: 83px;
  height: 28px;
  object-fit: contain;
  cursor: pointer;
`,jn=m.Ay.div.withConfig({displayName:"header__AdvertWrapper"})`
  margin-top: 16px;
  margin-bottom: 16px;
`,Ln=m.Ay.div.withConfig({displayName:"header__Clicker"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;

  ${xe.A.md`
    padding: 8px;
  `}
`,$n=m.Ay.div.withConfig({displayName:"header__Icon"})`
  width: 24px;
  height: 24px;
`;var Sn=n("9aI2"),Rn=n("Imp0");var Bn=n("6InW"),Dn=n("Ho5h"),Hn=n("dksT");te().extend(se()),te().extend(ae()),te().extend(re());var Mn=({selected:e,onChangeDate:t})=>{const[n,r]=(0,p.useState)(!1),i=(0,c.d4)(ue.UQ),a=(0,c.d4)(Lt.MA),{adverts:o,headerLogo:s,headerLinks:l=[]}=(0,p.useContext)(T.Ay),d=(0,p.useRef)(null),m=(0,Dt.W6)(),{height:g}=(0,Rn.A)(d),{isDomestic:f}=(0,on.A)(),h=(0,Hn.Ay)(d),v=()=>r(!1),y=o?.find(e=>e.position===Dn.SO.LOGO),b=(0,p.useMemo)(()=>l.filter(e=>!!f||e.url!==Sn.b.PRIZING),[l,f]),N=(0,p.useCallback)(()=>{if(!i?.length)return;const e=i.find(e=>"active"===e.state&&"weekly"===e.type);if(e){const n=te().utc(1e3*e.startAt).format("YYYY-MM-DD");t(n,e.id),(0,ce.j)("e");const r=(0,I.oJ)(u.Oz.TODAY_CLICK,{});(0,I.u4)(r)}},[i,t]);return(0,x.jsxs)(_n,{className:"header",ref:d,children:[(0,x.jsx)(wn,{height:g,visibleHeight:h}),(0,x.jsxs)(kn,{children:[(0,x.jsxs)(Ke,{opened:n,onClose:v,onToggle:()=>r(!n),children:[(0,x.jsx)(In,{}),(0,x.jsx)(Mt,{items:b,onNavigate:v}),(0,x.jsx)($t,{})]}),s&&(0,x.jsx)(Pn,{src:s,onClick:N}),y?(0,x.jsx)(jn,{children:(0,x.jsx)(Bn.A,{advert:y,pos:"ns_atf_01"})}):null]}),(0,x.jsxs)(kn,{children:[(0,x.jsx)(ln,{}),(0,x.jsx)(Ln,{onClick:()=>{const e=(0,I.oJ)(u.Oz.TUTORIAL_CLICK,{});(0,I.u4)(e),m.push(Sn.b.TUTORIAL)},children:(0,x.jsx)($n,{children:(0,x.jsx)(En,{})})}),(0,x.jsx)(kt,{selected:e,onChangeDate:t})]}),a&&(0,x.jsx)(Nn,{})]})};const zn=()=>(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",children:(0,x.jsx)("path",{d:"M1 3.07691C0.745099 3.07691 0.538462 3.28355 0.538462 3.53845C0.538462 3.79335 0.745099 3.99999 1 3.99999L1 3.53845L1 3.07691ZM9.63405 3.86481C9.81429 3.68457 9.81429 3.39234 9.63405 3.2121L6.69684 0.274882C6.51659 0.0946405 6.22436 0.0946405 6.04412 0.274882C5.86388 0.455124 5.86388 0.747354 6.04412 0.927596L8.65498 3.53845L6.04412 6.14931C5.86388 6.32955 5.86388 6.62178 6.04412 6.80202C6.22436 6.98226 6.51659 6.98226 6.69684 6.80202L9.63405 3.86481ZM1 3.53845L1 3.99999L9.30769 3.99999V3.53845V3.07691L1 3.07691L1 3.53845Z",fill:"white"})});var Un=n("oIgW");const Vn=m.Ay.div.withConfig({displayName:"prizing-banner__Container"})`
  --fkPrizingBorderColor: var(--fkPrizingSpecialBorderColor, #606060);

  position: relative;
  width: calc(100% - 32px);
  min-height: 128px;
  display: grid;
  grid-template-columns: 1fr 120px;
  margin: 0 16px;
  border-radius: 8px;
  border: 1px solid var(--fkPrizingBorderColor);
  box-shadow: 0 4px 24px 0 rgba(172, 172, 172, 0.3) inset;
  background: #000;
  color: #fff;
  position: relative;
  overflow: hidden;

  ${({$bgImageUrl:e})=>e&&m.AH`
      background-image: url(${e});
      background-size: 110%;
      background-repeat: no-repeat;
    `}

  ${xe.A.md`
    width: 100%;
    margin: 0 auto;
    grid-template-columns: 1fr 200px;
  `}

  ${(0,Un.A)(u.P$.MOBILE_PORTRAIT)}

  ${xe.A.ssm((0,Un.A)(u.P$.MOBILE_LANDSCAPE))}
  ${xe.A.md((0,Un.A)(u.P$.TABLET_PORTRAIT))}
  ${xe.A.lg((0,Un.A)(u.P$.TABLET_LANDSCAPE))}
  ${xe.A.xl((0,Un.A)(u.P$.DESKTOP))}
`,Fn=m.Ay.div.withConfig({displayName:"prizing-banner__Column"})`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;
  padding: 16px;
  z-index: 1;
`,Gn=m.Ay.h1.withConfig({displayName:"prizing-banner__Title"})`
  font-family: Knockout;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;
  color: #fff;
`,Wn=m.Ay.h2.withConfig({displayName:"prizing-banner__Subtitle"})`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #fff;
`,Zn=m.Ay.div.withConfig({displayName:"prizing-banner__CTA"})`
  height: 100%;
  display: flex;
  align-items: end;
  gap: 4px;
  margin-top: 8px;
  cursor: pointer;

  a {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    text-decoration: none;
    color: #fff;
  }
`,Jn=m.Ay.div.withConfig({displayName:"prizing-banner__Inline"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,Kn=m.Ay.img.withConfig({displayName:"prizing-banner__Image"})`
  width: auto;
  height: 100%;
  object-fit: contain;
`;var Qn=({handleRules:e})=>{const{isDomestic:t}=(0,on.A)(),n=(0,c.d4)(pe.Zc),{prizingBanners:r=[]}=(0,c.d4)(S.H6),i=(0,p.useMemo)(()=>r.find(e=>e.id===n.settings.prizingBannerId),[r,n]),a=(0,p.useCallback)(()=>{i?.ctaUrl?window.location.href=i.ctaUrl:e()},[i,e]);return t&&i?(0,x.jsxs)(Vn,{$bgImageUrl:i.backgroundImageUrl,children:[(0,x.jsxs)(Fn,{children:[(0,x.jsx)(Gn,{children:i.titleText}),(0,x.jsx)(Wn,{children:i.subtitleText}),(0,x.jsx)(Zn,{onClick:a,children:(0,x.jsxs)(Jn,{children:[i.ctaText,(0,x.jsx)(zn,{})]})})]}),(0,x.jsx)(Kn,{src:i.image,alt:i.imageAlt})]}):null};const Yn=m.Ay.div.withConfig({displayName:"progress-bar__Container"})`
  --fkProgressBarBackgroundColor: var(--fkProgressBarSpecialColor, #1d428a);

  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: ${({$curWeek:e})=>e?"column":"row"};
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: linear-gradient(0deg, var(--fkProgressBarBackgroundColor) 33%, #191c23 100%);
  padding: 8px 16px;
  position: sticky;
  top: 0;
  z-index: 10;
`,Xn=m.Ay.div.withConfig({displayName:"progress-bar__Bar"})`
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: #001635;
  overflow: hidden;
`,qn=m.Ay.div.withConfig({displayName:"progress-bar__Filler"})`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(180deg, #fff 40.62%, #6d9ad8 112.5%);
`,er=m.Ay.div.withConfig({displayName:"progress-bar__Row"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,tr=m.Ay.div.withConfig({displayName:"progress-bar__Status"})`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #fff;
  white-space: nowrap;
`,nr=m.Ay.h2.withConfig({displayName:"progress-bar__Heading"})`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  text-edge: cap;
  color: #fff;
`;var rr=n("vP7M");te().extend(se()),te().extend(ae()),te().extend(re());var ir=({selectedDate:e})=>{const t=(0,c.d4)(ue.xQ),{pickem:{youScoredPointsText:n,entriesIntoTheSweepstakeText:r}}=(0,c.d4)(S.H6),i=(0,c.d4)(pe._s),{points:a=0}=(0,c.d4)(e=>(0,sn.c$)(e,i,null)),o=(0,c.d4)(pe.Zc),s=(0,c.d4)(ue.UQ),{isDomestic:l}=(0,on.A)(),d=(0,p.useMemo)(()=>Object.values(t),[t]),u=(0,p.useMemo)(()=>d.filter(e=>["nba-instant-win-element","nba-number-predictor-element","nba-grid-predictor-element","nba-rail-predictor-element","nba-stacked-predictor-element"].includes(e.contentType)),[d]),m=(0,p.useMemo)(()=>u.map(e=>e.id),[u]),g=(0,c.d4)(e=>(0,ue.YU)(e,m)),f=(0,p.useMemo)(()=>u.filter((e,t)=>{const n=g[t];return(0,rr.bU)(n)}),[u,g]),h=(0,p.useMemo)(()=>u.filter((e,t)=>{const n=g[t];return!e.isActive&&!(0,rr.bU)(n)}),[u,g]),v=(0,p.useMemo)(()=>u.length-h.length,[u,h]),y=(0,p.useMemo)(()=>{const e=s.find(e=>{const t="weekly"===e.type,n="active"===e.state;return t&&n});return!!e&&e.weekNumber===o?.settings?.weekNumber},[s,o]),b=(0,p.useMemo)(()=>v?Math.ceil(f.length/v*100):0,[f,v]);if(!e)return null;if(!y){const e=l?r:n;return(0,x.jsx)(Yn,{$curWeek:!1,children:(0,x.jsx)(nr,{children:`${e.replace("{score}",a)}`})})}return(0,x.jsxs)(Yn,{$curWeek:!0,children:[(0,x.jsxs)(er,{children:[(0,x.jsx)(tr,{children:`${f.length}/${v} completed`}),(0,x.jsx)(tr,{children:`${b}%`})]}),(0,x.jsx)(Xn,{children:(0,x.jsx)(qn,{style:{width:`${b}%`}})})]})};m.Ay.div.withConfig({displayName:"rules__Container"})`
  width: 100%;
`;const ar=m.Ay.div.withConfig({displayName:"rules__Overlay"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`,or=m.Ay.div.withConfig({displayName:"rules__Wrapper"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(100% - 16px);
  min-height: 200px;
  transform: translate(-50%, -50%);
  background: #191c23;
  border-radius: 8px;
  border: 1px solid #4e525c;
  padding: 40px 24px;
  pointer-events: auto;
  z-index: 10;

  @media (min-width: 768px) {
    width: 560px;
  }
`,sr=m.Ay.div.withConfig({displayName:"rules__Icon"})`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`,lr=m.Ay.h1.withConfig({displayName:"rules__Header"})`
  font-family: Knockout;
  font-size: 40px;
  font-style: normal;
  font-weight: 360;
  line-height: 36px;
  text-transform: uppercase;
  color: #fff;
`,dr=m.Ay.div.withConfig({displayName:"rules__Content"})`
  max-height: 350px;
  overflow-y: auto;
  padding: 0 20px 10px;
  margin: 0 -20px;
`,cr=(0,m.Ay)(O.qn).withConfig({displayName:"rules__Text"})`
  color: #fff;
  font-size: 14px;
`,ur=m.Ay.div.withConfig({displayName:"rules__Footer"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,pr=m.Ay.div.withConfig({displayName:"rules__Button"})`
  width: 248px;
  height: 48px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({type:e})=>"primary"===e?"#FFF":"#191C23"};
  color: ${({type:e})=>"primary"===e?"#000":"#FFF"};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;

  ${({type:e})=>"secondary"===e&&m.AH`
      border: 1px solid #4e525c;
    `}
`;var mr=({handleClose:e})=>{const{rules:{title:t,body:n,buttonText:r}}=(0,c.d4)(S.H6);return(0,p.useEffect)(()=>(document.body.style.overflow="hidden",document.body.style.pointerEvents="none",()=>{document.body.style.overflow="",document.body.style.pointerEvents="auto"}),[]),(0,p.useEffect)(()=>{const e=(0,I.oJ)(u.Oz.RULES_PAGEVIEW,{});(0,I.u4)(e)},[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(ar,{}),(0,x.jsxs)(or,{children:[(0,x.jsx)(sr,{onClick:e,children:(0,x.jsx)(N,{})}),(0,x.jsx)(lr,{children:t}),(0,x.jsx)(dr,{children:(0,x.jsx)(cr,{content:n})}),(0,x.jsx)(ur,{children:(0,x.jsx)(pr,{type:"primary",onClick:e,children:r})})]})]})},gr=n("vJLl");const fr=m.Ay.div.withConfig({displayName:"page-layout__Wrapper"})`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 2;

  /* ${gr.A`
    --gradient-direction: var(--bodyBackgroundGradientDirection);
    --gradient-image: var(--globalBackgroundImageMobile);
    --gradient-color: var(--bodyBackgroundColor, var(--gradient-default));
    --position: var(--globalBackgroundImagePosition);
    --repeat: var(--globalBackgroundImageRepeat);
    --attachment: var(--globalBackgroundImageAttachment);
    --size: var(--globalBackgroundImageSize);
  `}

  ${xe.A.md`
    ${gr.A`
      --gradient-image: var(--globalBackgroundImageTablet, var(--globalBackgroundImageMobile));
      --gradient-direction: var(--bodyBackgroundGradientDirection);
      --gradient-color: var(--bodyBackgroundColor, var(--gradient-default));
      --position: var(--globalBackgroundImagePosition);
      --repeat: var(--globalBackgroundImageRepeat);
      --attachment: var(--globalBackgroundImageAttachment);
      --size: var(--globalBackgroundImageSize);
    `}
  `}

  ${xe.A.lg`
    ${gr.A`
      --gradient-image: var(--globalBackgroundImageDesktop, var(--globalBackgroundImageTablet, var(--globalBackgroundImageMobile)));
      --gradient-direction: var(--bodyBackgroundGradientDirection);
      --gradient-color: var(--bodyBackgroundColor, var(--gradient-default));
      --position: var(--globalBackgroundImagePosition);
      --repeat: var(--globalBackgroundImageRepeat);
      --attachment: var(--globalBackgroundImageAttachment);
      --size: var(--globalBackgroundImageSize);
    `}
  `} */
`,hr=m.Ay.div.withConfig({displayName:"page-layout__HeaderWrapper"})`
  top: 0;
  position: ${({$sticky:e})=>e?"sticky":"relative"};
  z-index: 100;
`,vr=m.Ay.div.withConfig({displayName:"page-layout__AdvertWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  z-index: 1;
`,yr=m.Ay.div.withConfig({displayName:"page-layout__TopDecorationImageWrapper"})`
  position: relative;
  width: 100%;
  z-index: 0;
`,br=m.Ay.div.withConfig({displayName:"page-layout__TopDecorationImage"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-image: url(${({$image:e})=>e});
  background-size: contain;
  background-position: center;
  background-repeat: repeat-x;
`;const xr="fkPickemTutorial",Nr={SLIDE:`${xr}_slide`};var Ar=n("UHZw"),Cr=n("1igH"),Or=n("m+jG"),Tr=n("kM8z");const Ir=(0,Tr.Mz)(S.H6,S.G_,pe.yq,pe.Nz,(e,t,n,r)=>({appSetup:e,appStyles:t,eventSettings:n,eventStyles:r}));var Er=()=>(0,c.d4)(Ir);const wr=e=>e?`\n  @font-face {\n    font-family: '${e.font??e.name}';\n    src: url('${e.file}');\n    font-weight: ${e.fontWeight};\n  }`:"";var _r=n("iXzu");function kr(){const e=(0,Cr.jg)(),t=function(){if("undefined"==typeof window)return!1;const e=window;if("function"==typeof e.ReactNativeWebView?.postMessage)return!0;const t=navigator.userAgent||"";return!!/\bwv\b/.test(t)||!(!/iPad|iPhone|iPod/.test(t)||window.MSStream||/Safari/.test(t))}(),n=function(){try{return window.self!==window.top}catch{return!0}}();return{isInReactNativeApp:t,isInIframe:n,isInWeb:!t&&!n,hasParentApp:Boolean(e)}}const Pr=e=>e.sdk,jr=e=>Pr(e).hideHeaderAndFooter,Lr=e=>Pr(e).init,$r=e=>Pr(e).ready;const Sr=(e,t,n)=>!e||!n||e&&!t;var Rr=n("se+n"),Br=n("X1LX");const Dr=(0,Rr.u)(),Hr=(0,Tr.Mz)(Br.$$,Br.Sd,pe.QY,S.bn,S.H6,Lt.OW,(e,t,n,r,{mIdEnabled:i=!1},a)=>({isInitialised:e,isLoaded:t,isEventFetched:n,isProjectFetched:r,isAuthenticated:Sr(i,a,Dr)}));var Mr=n("Bscc"),zr=()=>{const e=(0,c.wA)(),t=(0,Cr.jg)(),n=(0,c.d4)(jr),{isInitialised:r,isLoaded:i,isEventFetched:a,isProjectFetched:o}=(0,c.d4)(Hr),{showHeader:s,showFooter:l}=(0,p.useContext)(T.Ay);return(0,p.useEffect)(()=>{!r&&a&&o&&e((0,Mr.Ts)())},[r,a,o,e,t]),(0,p.useEffect)(()=>{i&&document.body.classList.add("loaded")},[i]),{isInitialised:r,withHeader:s&&!n,withFooter:l&&!n}},Ur=n("wXXv"),Vr=n("fjaf"),Fr=n("oRQk"),Gr=n("5kgV"),Wr=n("EVFA");const Zr=m.Ay.div.withConfig({displayName:"how-to-play__Wrapper"})`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 8px;
`,Jr=m.Ay.div.withConfig({displayName:"how-to-play__Container"})`
  width: calc(100% - 32px);
  max-width: 400px;
  position: relative;
  overflow: hidden;

  .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    width: 100% !important;
    flex-shrink: 0;
  }
`,Kr=m.Ay.div.withConfig({displayName:"how-to-play__Card"})`
  --fkTutorialBorderColor: var(--fkPrizingSpecialBorderColor, var(--fkTutorialBorderColor, #fff));
  --fkTutorialBackgroundColor: var(--fkPrizingSpecialBackgroundColor, #000);

  width: 100%;
  min-height: 530px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 37px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--fkTutorialBorderColor, #fff);
  border-radius: var(--fkTutorialBorderRadius, 0);
  box-shadow: 0 3.692px 22.154px 0 rgba(172, 172, 172, 0.3) inset;
  position: relative;

  ${Q.A`
    --gradient-direction: var(--fkTutorialGradientDirection, var(--gradient-direction-default));
    --gradient-color: var(--fkTutorialBackgroundColor, var(--fk-header-background-color));
  `}
`,Qr=(m.Ay.img.withConfig({displayName:"how-to-play__Close"})`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`,m.Ay.h2.withConfig({displayName:"how-to-play__Heading"})`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: var(--fkTutorialTitleColor, #fff);
`),Yr=m.Ay.img.withConfig({displayName:"how-to-play__Image"})`
  width: 248px;
  height: 248px;
  margin-top: 33px;
`,Xr=m.Ay.h3.withConfig({displayName:"how-to-play__Title"})`
  font-family: Roboto;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: var(--fkTutorialSlideTitleColor, #fff);
  margin-top: 54px;
`,qr=m.Ay.p.withConfig({displayName:"how-to-play__Description"})`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: var(--fkTutorialSlideDescriptionColor, #fff);
  margin-top: 8px;
`,ei=m.Ay.div.withConfig({displayName:"how-to-play__Footer"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 57px;
  position: relative;

  .navigation-button {
    border-radius: 50%;
  }
`,ti=(m.Ay.button.withConfig({displayName:"how-to-play__NavButton"})`
  width: 44.3px;
  height: 44.3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: var(--fkTutorialDefaultButtonBackgroundColor, #fff);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.15;
  }

  &:not(:disabled):hover {
    background-color: var(--fkTutorialHoveredButtonBackgroundColor, #fff);
  }
`,m.Ay.img.withConfig({displayName:"how-to-play__NavIcon"})`
  width: 29.5px;
  height: 29.5px;
`,m.Ay.button.withConfig({displayName:"how-to-play__Button"})`
  width: 88px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 22.154px;
  background-color: var(--fkTutorialDefaultButtonBackgroundColor, #fff);
  cursor: pointer;
`),ni=m.Ay.div.withConfig({displayName:"how-to-play__Bullets"})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 7.38px;
`,ri=m.Ay.div.withConfig({displayName:"how-to-play__Bullet"})`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--fkTutorialActiveSlidePipColor, #fff);
  opacity: ${({$active:e})=>e?1:.25};
`,ii=m.Ay.div.withConfig({displayName:"how-to-play__Icon"})`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;var ai=n("Zrgt"),oi=n("bazq"),si=n("9usg"),li=()=>{const[e,t]=(0,p.useState)(0),n=(0,p.useRef)(null),r=(0,p.useRef)(null),i=(0,p.useRef)(null),a=(0,Dt.W6)(),{isDomestic:o}=(0,on.A)(),{tutorial:{titleText:s,slides:l}}=(0,c.d4)(S.H6),d=(0,p.useMemo)(()=>l.filter(e=>e.region===(o?"domestic":"international")),[l,o]);(0,p.useEffect)(()=>{window.localStorage.setItem(xr,"true")},[]),(0,p.useEffect)(()=>{const e=(0,I.oJ)(u.Oz.HOW_TO_PLAY_PAGEVIEW,{});(0,I.u4)(e)},[]),(0,p.useEffect)(()=>{if(d.length>0&&d[e]&&i.current!==e){const t=(0,I.oJ)(u.Oz.HOW_TO_PLAY_SLIDE_PAGEVIEW,{slide:d[e].text});(0,I.u4)(t),i.current=e}},[e,d]);const m=(0,p.useMemo)(()=>r.current&&r.current.isEnd||!1,[e]),g=()=>{const e=(0,I.oJ)(u.Oz.TUTORIAL_CLOSE,{});(0,I.u4)(e),a.push("/")};return(0,x.jsx)(Zr,{children:(0,x.jsxs)(Jr,{ref:n,children:[(0,x.jsx)(oi.RC,{loop:!1,speed:500,modules:[ai.FJ],grabCursor:!0,allowTouchMove:!0,spaceBetween:10,slidesPerView:1,centeredSlides:!0,slideToClickedSlide:!0,onSwiper:e=>{r.current=e},onSlideChange:e=>{t(e.activeIndex)},children:d.map((e,t)=>(0,x.jsx)(oi.qr,{children:(0,x.jsxs)(Kr,{className:Nr.SLIDE,children:[(0,x.jsx)(ii,{onClick:g,children:(0,x.jsx)(N,{})}),(0,x.jsx)(Qr,{children:s}),e.imageUrl&&(0,x.jsx)(Yr,{src:e.imageUrl}),e.text&&(0,x.jsx)(Xr,{children:e.text}),e.description&&(0,x.jsx)(qr,{children:e.description})]})},t))}),d.length&&(0,x.jsxs)(ei,{children:[(0,x.jsx)(si.Dg,{onClick:()=>{if(r.current&&r.current.slidePrev){r.current.slidePrev();const e=(0,I.oJ)(u.Oz.TUTORIAL_NAVIGATION,{state:"previous"});(0,I.u4)(e)}},disabled:0===e}),(0,x.jsx)(ni,{children:d.map((t,n)=>(0,x.jsx)(ri,{$active:n===e},n))}),m?(0,x.jsx)(ti,{onClick:()=>{const e=(0,I.oJ)(u.Oz.TUTORIAL_PLAY,{});(0,I.u4)(e),a.push("/")},children:"Play"}):(0,x.jsx)(si.Dg,{isRight:!0,onClick:()=>{if(r.current&&r.current.slideNext){r.current.slideNext();const e=(0,I.oJ)(u.Oz.TUTORIAL_NAVIGATION,{state:"next"});(0,I.u4)(e)}}})]})]})})};const di=m.Ay.div.withConfig({displayName:"prizing__Container"})`
  position: relative;
  width: calc(100% - 32px);
  margin: 16px;
  display: grid;
  row-gap: 16px;

  ${xe.A.md`
    width: 100%;
    margin: 16px auto;
    row-gap: 32px;
  `}

  ${(0,Un.A)(u.P$.MOBILE_PORTRAIT)}

  ${xe.A.ssm((0,Un.A)(u.P$.MOBILE_LANDSCAPE))}
  ${xe.A.md((0,Un.A)(u.P$.TABLET_PORTRAIT))}
  ${xe.A.lg((0,Un.A)(u.P$.TABLET_LANDSCAPE))}
  ${xe.A.xl((0,Un.A)(u.P$.DESKTOP))}
`,ci=m.Ay.div.withConfig({displayName:"prizing__MainCard"})`
  --fkPrizingBorderColor: var(--fkPrizingSpecialBorderColor, #606060);
  --fkPrizingBackgroundColor: var(--fkPrizingSpecialBackgroundColor, #000);

  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid var(--fkPrizingBorderColor);
  background: var(--fkPrizingBackgroundColor);
  box-shadow: 0 3.692px 22.154px 0 rgba(172, 172, 172, 0.3) inset;
  overflow: hidden;

  ${xe.A.md`
    flex-direction: row-reverse;
  `}
`,ui=m.Ay.div.withConfig({displayName:"prizing__ExtraCard"})`
  --fkPrizingBorderColor: var(--fkPrizingSpecialBorderColor, #606060);
  --fkPrizingBackgroundColor: var(--fkPrizingSpecialBackgroundColor, #000);

  display: grid;
  grid-gap: 16px;
  border-radius: 8px;
  border: 1px solid var(--fkPrizingBorderColor);
  background: var(--fkPrizingBackgroundColor);
  box-shadow: 0 3.692px 22.154px 0 rgba(172, 172, 172, 0.3) inset;
  overflow: hidden;
`,pi=m.Ay.img.withConfig({displayName:"prizing__Image"})`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;

  ${xe.A.md`
    width: 50%;
    height: 100%;
  `}
`,mi=m.Ay.div.withConfig({displayName:"prizing__Inner"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: start;
  justify-content: stretch;
  gap: 8px;
  padding: 16px;
  z-index: 2;
`,gi=m.Ay.div.withConfig({displayName:"prizing__ExtraInner"})`
  display: grid;
  padding: 16px;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  ${xe.A.md`
    grid-template-columns: repeat(4, 1fr);
  `}
`,fi=m.Ay.div.withConfig({displayName:"prizing__Label"})`
  ffont-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  color: #f4c714;

  ${xe.A.md`
    color: #FFF;  
  `}
`,hi=m.Ay.div.withConfig({displayName:"prizing__Title"})`
  font-family: Knockout;
  font-size: 36px;
  font-style: normal;
  font-weight: 395;
  line-height: 34px;
  text-transform: uppercase;
  text-align: left;
  color: #fff;
`,vi=m.Ay.div.withConfig({displayName:"prizing__Body"})`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #fff;
`,yi=m.Ay.button.withConfig({displayName:"prizing__CTA"})`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid #fff;
  background: #fff;
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
`,bi=m.Ay.div.withConfig({displayName:"prizing__Block"})`
  width: 100%;
  display: grid;
  grid-template-rows: 167px 56px;
  grid-row-gap: 8px;

  ${xe.A.md`
    grid-template-rows: 108px 56px;
  `}
`,xi=m.Ay.div.withConfig({displayName:"prizing__PrizeText"})`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: #fff;
`,Ni=m.Ay.img.withConfig({displayName:"prizing__PrizeImage"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  overflow: hidden;
`;var Ai=()=>{const{prizing:{mainItems:e,extraLabel:t,extraTitle:n,extraBody:r,extraCta:i,extraItems:a}}=(0,c.d4)(S.H6),o=(0,Dt.W6)(),s=e?.length>0,l=n&&a?.length>0;(0,p.useEffect)(()=>{const e=(0,I.oJ)(u.Oz.PRIZING_PAGEVIEW,{});(0,I.u4)(e)},[]);const d=()=>{o.push(Sn.b.ROOT)};return(0,x.jsxs)(di,{children:[s&&(0,x.jsxs)(ci,{children:[(0,x.jsx)(pi,{src:e[0].imageUrl,alt:e[0].titleText}),(0,x.jsxs)(mi,{children:[(0,x.jsx)(fi,{children:e[0].labelText}),(0,x.jsx)(hi,{children:e[0].titleText}),(0,x.jsx)(vi,{children:e[0].bodyText}),!!e[0].ctaText&&(0,x.jsx)(yi,{onClick:d,children:e[0].ctaText})]})]}),l&&(0,x.jsxs)(ui,{children:[(0,x.jsxs)(mi,{children:[(0,x.jsx)(fi,{children:t}),(0,x.jsx)(hi,{children:n}),(0,x.jsx)(vi,{children:r}),!!i&&(0,x.jsx)(yi,{onClick:d,children:i})]}),(0,x.jsx)(gi,{children:a.map(({imageUrl:e,prize:t})=>(0,x.jsxs)(bi,{children:[(0,x.jsx)(Ni,{src:e,alt:t}),(0,x.jsx)(xi,{children:t})]},t))})]})]})},Ci=n("OsSD");const Oi="storage-changed",Ti={BLOCK:Oi,TITLE:`${Oi}__title`,MESSAGE:`${Oi}__message`,REFRESH_BUTTON:`${Oi}__refresh-button`};var Ii=n("NBcf");const Ei=m.Ay.main.withConfig({displayName:"storage-changed__Wrapper"})`
  ${Ii.Z}
  ${Ii.C}
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  font-family: var(--font-family-main);
  color: var(--globalTextColor, var(--color-0-0));
`,wi=(0,m.Ay)(be.Yk).withConfig({displayName:"storage-changed__Title"})`
  font-size: 26px;
  margin-bottom: 30px;
  max-width: 550px;
`,_i=(0,m.Ay)(be._2).withConfig({displayName:"storage-changed__Message"})`
  margin-bottom: 20px;
  max-width: 550px;
`,ki=()=>{const e=(0,p.useRef)(null),{titleText:t="Your session has been closed",messageText:n,buttonText:r="Refresh"}=(0,c.d4)(S.H6).storageChanged||{};return(0,Ci.A)(),(0,x.jsxs)(Ei,{ref:e,className:Ti.BLOCK,children:[(0,x.jsx)(wi,{className:Ti.TITLE,children:t}),n?(0,x.jsx)(_i,{className:Ti.MESSAGE,children:n}):null,(0,x.jsx)(O.Pi,{componentType:u.tn.PRIMARY_BUTTON,children:(0,x.jsx)(O.jn,{onClick:()=>{try{window.location.reload()}catch(e){Fr.A.error("Error refreshing the page:",e)}},className:Ti.REFRESH_BUTTON,children:r})})]})};var Pi=(0,p.memo)(ki),ji=n("BhVK"),Li=n("svRP"),$i=n("2je+");const Si=m.Ay.div.withConfig({displayName:"user__Wrapper"})`
  ${Ii.Z}
  ${Ii.C}

  padding: 20px 20px;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-position: 50% 0;

  ${Q.A`
    --gradient-image: var(--backgroundImageMobile, var(--blank-image));
    --gradient-direction: var(--gradientDirection, var(--gradient-direction-default));
    --gradient-color: var(--backgroundColor, var(--element-background-default));
  `};

  ${xe.A.xxs`
    padding: 30px 20px;
  `}

  ${xe.A.md`
    ${Q.A`
      --gradient-image: var(--backgroundImageTablet, var(--blank-image));
      --gradient-direction: var(--gradientDirection, var(--gradient-direction-default));
      --gradient-color: var(--backgroundColor, var(--element-background-default));
    `};
  `}

  ${xe.A.lg`
    ${Q.A`
      --gradient-image: var(--backgroundImageDesktop, var(--blank-image));
      --gradient-direction: var(--gradientDirection, var(--gradient-direction-default));
      --gradient-color: var(--backgroundColor, var(--element-background-default));
    `};
  `}
`,Ri=(0,m.Ay)(be.Yk).withConfig({displayName:"user__Title"})`
  margin: 0 0 8px;
  padding: 0 16px;
  color: var(--fkElementTitleColor, var(--color-0-0));
`,Bi=(0,m.Ay)(O.qn).withConfig({displayName:"user__Subtitle"})`
  margin-bottom: 20px;
  color: var(--fkElementSubtitleColor, var(--color-0-0));
`,Di=m.Ay.img.withConfig({displayName:"user__Logo"})`
  margin-bottom: 20px;
  max-width: 400px;
  height: auto;
`,Hi=m.Ay.div.withConfig({displayName:"user__Error"})`
  padding: 24px 0;
  color: red;
`;var Mi=n("/Iuz"),zi=n("Fx+d");const Ui=()=>{const[e,t,n,r,i,a,o]=(()=>{const e=(0,p.useRef)(null),t=(0,c.wA)(),n=(0,c.d4)(Lt.dY),{usernamePrompt:{titleText:r,messageText:i,confirmText:a,logo:o}}=(0,p.useContext)(T.Ay),s=(0,p.useCallback)(()=>{t((0,jt.R6)())},[t]);return(0,$i.A)(e,"usernamePrompt"),[e,o,r,i,a,n,s]})(),{trackConversion:s}=(0,ji.A)(),[l]=(0,Li.G)({threshold:.1});return(0,Ci.A)(),(0,p.useEffect)(()=>{l&&((0,Mi.u)("registration_view",{event_category:"view",event_label:n}),s({elementId:"registration",eventContext:n,elementContext:"registration",actionSource:zi.S.SIGN_UP,actionType:zi.X.VIEW,actionContext:{titleText:n,messageText:r}}))},[n,s,r,l]),(0,x.jsxs)(Si,{ref:e,children:[t&&(0,x.jsx)(Di,{src:t,alt:"logo"}),n&&(0,x.jsx)(Ri,{children:n}),r&&(0,x.jsx)(Bi,{content:r}),(0,x.jsx)(O.Pi,{componentType:u.tn.PRIMARY_BUTTON,children:(0,x.jsx)(O.jn,{onClick:()=>{s({elementId:"registration",eventContext:n,elementContext:"registration",actionSource:zi.S.SIGN_UP,actionType:zi.X.SUBMIT,actionContext:{confirmText:i}}),o()},children:i})}),a&&(0,x.jsx)(Hi,{children:a})]})};var Vi=(0,p.memo)(Ui),Fi=n("Xouy"),Gi=n("Gn6B"),Wi=n.n(Gi);const Zi=(0,Tr.Mz)(S.H6,xn.K$,(e,t)=>({...e.noConnection,delayBeforeReconnect:t}));const Ji=m.Ay.main.withConfig({displayName:"no-connection__Wrapper"})`
  ${Ii.Z}
  ${Ii.C}
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  font-family: var(--font-family-main);
  color: var(--globalTextColor, var(--color-0-0));
`,Ki=(0,m.Ay)(be.Yk).withConfig({displayName:"no-connection__Title"})`
  margin-bottom: 30px;
`,Qi=(0,m.Ay)(be.qz).withConfig({displayName:"no-connection__Message"})`
  margin-bottom: 20px;
`,Yi=m.Ay.div.withConfig({displayName:"no-connection__FadeIn"})`
  width: 100%;
  margin: 0 auto;
  opacity: 0;
  display: none;
  visibility: hidden;
  transition:
    opacity 300ms ease 5s,
    visibility 300ms ease 5s;

  ${({$show:e})=>e&&m.AH`
      display: block;
      opacity: 1;
      visibility: visible;
    `}
`;function Xi(){const[e,t]=(0,p.useState)(le.Date.now()),[n,r]=(0,p.useState)(le.Date.now()),[i,a]=(0,p.useState)(!1);(0,Ci.A)(),(0,p.useEffect)(()=>{const e=setInterval(()=>{t(le.Date.now())},1e3);return()=>clearInterval(e)},[]);const{titleText:o,messageText:s,reconnectingMessageText:l,buttonText:d,delayBeforeReconnect:m}=(0,c.d4)(Zi);(0,p.useEffect)(()=>{a(!1),r(le.Date.now())},[m]);const g=(0,p.useCallback)(()=>{a(!0);const{ConnectionManager:e}=de();e.connect()},[]),f=(0,p.useCallback)(()=>{a(!0)},[]);return(0,x.jsxs)(Ji,{children:[o&&(0,x.jsx)(Ki,{children:o}),i&&(0,x.jsx)(Qi,{children:l||"Attempting to reconnect"}),!i&&s&&(0,x.jsx)(Qi,{children:Wi()(s,"{countdown}",()=>(0,x.jsx)(O.Gi,{duration:m,startedAt:n,date:e,onFinish:f,enabled:!0},"countdown"))}),!i&&(0,x.jsx)(O.Pi,{componentType:u.tn.PRIMARY_BUTTON,children:(0,x.jsx)(O.jn,{onClick:g,children:d})}),i&&(0,x.jsx)(Yi,{$show:i,children:(0,x.jsx)(O.Pi,{componentType:u.tn.PRIMARY_BUTTON,children:(0,x.jsx)(O.jn,{onClick:g,children:d})})})]})}var qi=(0,p.memo)(Xi),ea=n("3c/i");const ta=m.Ay.main.withConfig({displayName:"no-event__Wrapper"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  font-family: var(--font-family-main);
  color: var(--globalTextColor, var(--color-0-0));

  opacity: ${({$hasLoaded:e})=>e?1:0};
  transition: opacity 0.3s ease-in;
`,na=(0,m.Ay)(be.Yk).withConfig({displayName:"no-event__Title"})`
  margin-bottom: 30px;
`,ra=(0,m.Ay)(be.qz).withConfig({displayName:"no-event__Message"})`
  margin-bottom: 20px;
`,ia=m.Ay.a.withConfig({displayName:"no-event__Link"})`
  text-decoration: none;
  white-space: nowrap;
  color: var(--globalTextColor, var(--color-0-0));

  ${(0,ea.T)(m.AH`
    &:hover {
      color: var(--globalTextColor, var(--color-0-0));
    }
  `)}
`,aa=()=>{const{titleText:e,titleUrl:t,messageText:n,messageUrl:r}=(0,c.d4)(S.H6).noEvent||{},[i,a]=(0,p.useState)(!1);return(0,Ci.A)(i),(0,p.useEffect)(()=>{i||setTimeout(()=>{a(!0)},1e3)},[i]),(0,x.jsxs)(ta,{$hasLoaded:i,children:[e&&t?(0,x.jsx)(na,{children:(0,x.jsx)(ia,{href:t,target:"blank",children:e})}):(0,x.jsx)(na,{children:e}),n&&r?(0,x.jsx)(ra,{children:(0,x.jsx)(ia,{href:r,target:"blank",children:n})}):(0,x.jsx)(ra,{children:n})]})};var oa=(0,p.memo)(aa);const sa="presence-counter",la={BLOCK:sa,ICON:`${sa}__icon`,ICON_TARGET:`${sa}__icon--target`,ICON_USERS:`${sa}__icon--users`,ICON_EYE:`${sa}__icon--eye`,NUMBER:`${sa}__number`,TEXT:`${sa}__text`};let da=function(e){return e.NONE="none",e.TEXT="text",e.NUMBER="number",e}({}),ca=function(e){return e.EYE="eye",e.USERS="users",e.TARGET="target",e}({});var ua=n("Jl3E"),pa=n.n(ua),ma=n("BL8N"),ga=n.n(ma),fa=n("isB0"),ha=n.n(fa);const va="\n  width: 16px;\n  height: 16px;\n  color: var(--presenceCounterIconColor, var(--fkElementHighlightColor));\n",ya=(0,m.Ay)(pa()).withConfig({displayName:"Icon__EyeIcon"})`
  ${va}
`,ba=(0,m.Ay)(ga()).withConfig({displayName:"Icon__TargetIcon"})`
  ${va}
  margin-right: 2px;
`,xa=(0,m.Ay)(ha()).withConfig({displayName:"Icon__UsersIcon"})`
  ${va}
  margin-right: 2px;
`;function Na({type:e}){switch(e){case ca.TARGET:return(0,x.jsx)(ba,{className:`${la.ICON} ${la.ICON_TARGET}`});case ca.USERS:return(0,x.jsx)(xa,{className:`${la.ICON} ${la.ICON_USERS}`});case ca.EYE:default:return(0,x.jsx)(ya,{className:`${la.ICON} ${la.ICON_EYE}`})}}const Aa=m.Ay.div.withConfig({displayName:"presence-counter__Wrapper"})`
  display: flex;
  background-color: ${({$noBg:e})=>e?"transparent":"var(--presenceCounterBackgroundColor)"};
  padding: 4px 8px;
  border-radius: calc(var(--presenceCounterBorderRadius, 0) * 1px);
  width: fit-content;
  align-items: center;
`,Ca=`\n  ${be.dF}\n  line-height: 1;\n  margin-left: 2px;\n  color: var(--presenceCounterColor, var(--color-0-0));\n`,Oa=m.Ay.span.withConfig({displayName:"presence-counter__Counter"})`
  ${Ca}
`,Ta=m.Ay.span.withConfig({displayName:"presence-counter__DefaultText"})`
  ${Ca}
  text-transform: uppercase;
`;var Ia=({noBg:e=!1,iconType:t})=>{const n=(0,c.d4)(xn.kS),{defaultText:r}=(0,c.d4)(S.m$),i=function(e,t){return null!==e?da.NUMBER:null!=t?da.TEXT:da.NONE}(n,r);return i===da.NONE?null:(0,x.jsxs)(Aa,{className:la.BLOCK,$noBg:e,children:[(0,x.jsx)(Na,{type:da.TEXT===i?ca.TARGET:t}),i===da.NUMBER?(0,x.jsx)(Oa,{className:la.NUMBER,"data-testid":"counter",children:(0,Ar.ZV)(n)}):(0,x.jsx)(Ta,{className:la.TEXT,children:r})]})},Ea=n("9/e/"),wa=n("9+Fe");const _a=m.Ay.div.withConfig({displayName:"event__Wrapper"})`
  ${be.dy}
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({$reverse:e})=>e?"row-reverse":"row"};
  justify-content: flex-end;
`,ka=m.Ay.span.withConfig({displayName:"event__Name"})`
  ${({$wrapped:e})=>!e&&m.AH`
      max-width: 38vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`,Pa=m.Ay.div.withConfig({displayName:"event__Times"})``,ja=m.Ay.span.withConfig({displayName:"event__Time"})`
  margin-left: ${({$reverse:e})=>e?"0":"8px"};
  margin-right: ${({$reverse:e})=>e?"8px":"0"};
  font-weight: 700;
`;var La=({player:e,times:t,reverse:n=!1,scoreBarNumberSuffix:r})=>{const i=(0,p.useRef)(null),{width:a}=(0,Rn.A)(i);return(0,x.jsxs)(_a,{$reverse:n,children:[(0,x.jsx)(ka,{$wrapped:a>=95,children:e}),(0,x.jsx)(Pa,{ref:i,children:t.map(e=>(0,x.jsxs)(ja,{$reverse:n,children:[e,r]},e))})]})};let $a=function(e){return e.LIVE="live",e.NOT_LIVE="notLive",e}({}),Sa=function(e){return e.GOAL="GOL",e.RED_CARD="RED",e}({});const Ra={[Sa.RED_CARD]:"#ff0000"},Ba=m.Ay.span.withConfig({displayName:"event-group__IconWrapper"})`
  svg {
    width: 16px;
    height: 16px;
    color: ${({$scoreBarType:e})=>Ra[e]||"var(--iconColor, #ccc)"};
  }
`,Da=m.Ay.div.withConfig({displayName:"event-group__GroupedEvent"})`
  display: grid;
  grid-template-columns: 1fr 16px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 8px;

  ${xe.A.md`
  grid-gap: 40px;
  `}
`,Ha=m.Ay.div.withConfig({displayName:"event-group__Events"})`
  display: flex;
  flex-direction: column;
`;var Ma=({events:{competitor1:e,competitor2:t},scoreBarType:n,scoreBarNumberSuffix:r})=>(0,x.jsxs)(Da,{children:[(0,x.jsx)(Ha,{children:e&&e.map(({scoreBarPlayer:e,scoreBarTimes:t},n)=>(0,x.jsx)(La,{player:e,times:t,scoreBarNumberSuffix:r},n))}),(0,x.jsx)(Ba,{$scoreBarType:n,children:(0,x.jsx)(wa.A,{name:n})}),(0,x.jsx)(Ha,{children:t&&t.map(({scoreBarPlayer:e,scoreBarTimes:t},n)=>(0,x.jsx)(La,{player:e,times:t,scoreBarNumberSuffix:r,reverse:!0},n))})]});const za=m.i7`
  0% {
    opacity: 0;
    max-height: 0px;
  }
  100% {
    opacity: 1;
    max-height: 50px;
  }
`,Ua=m.i7`
  0% {
    opacity: 1;
    max-height: 50px;
  }
  100% {
    opacity: 0;
    max-height: 1px;
  }
`,Va=m.Ay.div.withConfig({displayName:"team__Container"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${xe.A.sm`
    height: 48px;
    flex-direction:  ${({$reverse:e})=>e?"row":"row-reverse"};
    justify-content:  ${({reverse:e})=>e?"start":"end"}
    align-items: start;
  `}
`,Fa=m.Ay.div.withConfig({displayName:"team__Crest"})`
  width: 48px;
  height: 48px;
  background: no-repeat center center url(${({src:e})=>`${e}`});
  background-size: contain;
`,Ga=(0,m.Ay)(be.cP).withConfig({displayName:"team__Name"})`
  margin: 0;
  word-break: break-word;
  font-size: var(--scoreFontSize, 14px);
  opacity: ${({$isOpen:e,$isCrest:t})=>e||!e&&!t?1:0};
  max-height: ${({$isOpen:e,$isCrest:t})=>e||!e&&!t?"none":"1px"};
  animation-delay: 50ms;

  ${({$isOpen:e,$isCrest:t})=>e||!e&&!t?m.AH`
          animation: ${za} 350ms ease-in;
        `:m.AH`
          span {
            max-height: 1px;
          }
          animation: ${Ua} 350ms ease-out;
          animation-fill-mode: forwards;
        `}

  ${xe.A.sm`
    opacity: 1;
    max-height: none;
    padding-right:  ${({$reverse:e})=>e?"0":"16px"};
    padding-left:  ${({$reverse:e})=>e?"16px":"0"};
  `}
`;var Wa=({crest:e,name:t,reverse:n,isOpen:r})=>(0,x.jsxs)(Va,{$reverse:n,children:[e&&(0,x.jsx)(Fa,{src:e}),Ga&&(0,x.jsx)(Ga,{$reverse:n,$isOpen:r,$isCrest:!!e,children:t})]}),Za=(e,t)=>{const[n,r]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{let i;return e&&!n?r(!0):!e&&n&&(i=setTimeout(()=>r(!1),t)),()=>clearTimeout(i)},[e,t,n]),n},Ja=n("CqJp");const Ka=m.DU`
  :root {
    --scorebar-height: ${({scorebarHeight:e})=>e}px;
  }
`,Qa=m.Ay.div.withConfig({displayName:"score-bar__Wrapper"})`
  width: 100%;
  padding: 8px;

  ${Q.A`
    --gradient-image: var(--backgroundImageMobile, var(--blank-image));
    --gradient-direction: var(--backgroundGradientDirection);
    --gradient-color: var(--backgroundColor, var(--gradient-default));
  `};

  ${xe.A.md`
    ${Q.A`
      --gradient-image: var(--backgroundImageTablet, var(--blank-image));
      --gradient-direction: var(--backgroundGradientDirection);
      --gradient-color: var(--backgroundColor, var(--gradient-default));
    `};
  `}

  ${xe.A.lg`
    ${Q.A`
      --gradient-image: var(--backgroundImageDesktop, var(--blank-image));
      --gradient-direction: var(--backgroundGradientDirection);
      --gradient-color: var(--backgroundColor, var(--gradient-default));
    `};
  `}
  color: var(--primaryTextColor, var(--fkElementTextColor, var(--element-body-default)));

  ${({$isSticky:e})=>e&&m.AH`
      position: sticky;
      z-index: 99;
      top: 0;
    `};
`,Ya=m.Ay.div.withConfig({displayName:"score-bar__Container"})`
  margin: 0 auto;
  display: grid;
  grid-template-rows: ${({$expanded:e})=>e?"repeat(3, auto)":"auto"};
  grid-gap: ${({$expanded:e})=>e?"16px":"0"};
  transition: all 350ms ease-in-out;
  overflow: hidden;

  ${(0,Un.A)(u.P$.MOBILE_PORTRAIT)}

  ${xe.A.ssm((0,Un.A)(u.P$.MOBILE_LANDSCAPE))}
  ${xe.A.md((0,Un.A)(u.P$.TABLET_PORTRAIT))}
  ${xe.A.lg((0,Un.A)(u.P$.TABLET_LANDSCAPE))}
  ${xe.A.xl((0,Un.A)(u.P$.DESKTOP))}
`,Xa=m.i7`
  0% {
    opacity: 0;
    max-height: 0px;
  }
  100% {
    opacity: 1;
    max-height: 50px;
  }
`,qa=m.i7`
  0% {
    opacity: 1;
    max-height: 50px;
  }
  100% {
    opacity: 0;
    max-height: 1px;
  }
`,eo=m.Ay.div.withConfig({displayName:"score-bar__TopLine"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  animation-delay: 50ms;

  ${({$isOpen:e})=>e?m.AH`
          animation: ${Xa} 350ms ease-in;
        `:m.AH`
          span {
            max-height: 1px;
          }
          animation: ${qa} 350ms ease-out;
          animation-fill-mode: forwards;
        `}
`,to=m.Ay.div.withConfig({displayName:"score-bar__TopLineInner"})`
  display: grid;
  grid-gap: 4px;
  grid-auto-flow: column;
  max-width: 50%;
`,no=m.Ay.img.withConfig({displayName:"score-bar__TopLogo"})`
  height: 16px;
  width: auto;
`,ro=m.Ay.div.withConfig({displayName:"score-bar__CenterColumn"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,io=(0,m.Ay)(be.cP).withConfig({displayName:"score-bar__TopText"})`
  color: var(--secondaryTextColor, var(--element-label-default));
  text-align: ${({$left:e})=>e?"left":"right"};
  line-height: 16px;
`,ao=(0,m.Ay)(be.cP).withConfig({displayName:"score-bar__CenterText"})`
  text-align: center;
  line-height: 16px;
  color: ${({$secondary:e})=>e?"var(--secondaryTextColor, var(--element-label-default))":"inherit"};
  animation-delay: 50ms;
  ${({$isOpen:e})=>e?m.AH`
          animation: ${Xa} 350ms ease-in;
        `:m.AH`
          span {
            max-height: 1px;
          }
          animation: ${qa} 350ms ease-out;
          animation-fill-mode: forwards;
        `}
`,oo=m.Ay.div.withConfig({displayName:"score-bar__Bar"})`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 16px;
  justify-content: center;
`,so=m.Ay.div.withConfig({displayName:"score-bar__MatchEvents"})`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 0;
  width: 100%;

  --eventHeight: 32px;

  ${({$interacted:e})=>e&&m.AH`
      transition: max-height 350ms ease-in-out;
    `};

  ${({$isOpen:e,$events:t})=>e&&m.AH`
      max-height: calc(var(--eventHeight) * ${t});
    `};
`,lo=m.Ay.div.withConfig({displayName:"score-bar__SponsorWrapper"})`
  display: block;
  margin: 8px 0 0;
  padding: 8px 0 0;
  border-top: 1px solid var(--separatorColor, #d9d9d9);
  width: 100%;
  height: 50px;

  ${Ja.mo} {
    height: 100%;
    margin: 0 auto;
  }
  ${Ja.N_} {
    height: 100%;
    img {
      height: 100%;
    }
  }
`,co=m.Ay.div.withConfig({displayName:"score-bar__ScoreWrapper"})`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: var(--scoreSeperator, 2px);
  justify-content: center;
`,uo=m.Ay.div.withConfig({displayName:"score-bar__Score"})`
  ${be.a8}
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 8px;
  white-space: nowrap;
  color: var(--scoreColor);
  background-color: var(--scoreBackgroundColor);
  border-width: var(--scoreBackgroundBorderWidth, 0);
  border-color: var(--scoreBackgroundBorderColor);
  border-style: solid;
`,po=(0,p.createContext)({}),{Provider:mo,Consumer:go}=po;var fo=po;const ho=()=>{const e=(0,p.useRef)(null),t=(0,c.wA)(),[n,r]=(0,p.useState)(!1),[i,a]=(0,p.useState)(!1),[o,s]=(0,p.useState)(!1),[l,d]=(0,p.useState)(!0),u=(0,c.d4)(Br.z0),{sponsors:m}=(0,p.useContext)(T.Ay),{scoreBarState:g,scoreBarSticky:f,scoreBarEvents:h=[],competitorOneName:v,competitorOneCrest:y,competitorOneScore:b,competitorTwoName:N,competitorTwoCrest:A,competitorTwoScore:C,scoreBarInfoTopLeft:O,scoreBarLogoTopLeft:I,scoreBarInfoCenterOne:E,scoreBarInfoTopRight:w,scoreBarLogoTopRight:_,scoreBarInfoCenterTwo:k,scoreBarNumberSuffix:P,scoreBarSponsorId:j}=(0,p.useContext)(fo);(0,p.useEffect)(()=>{s(!0)},[]),(0,p.useEffect)(()=>{t((0,Mr.jE)(f))},[t,f]);const{height:L}=(0,Rn.A)(e),$=u?L+16:0,S=!!h.length,R=g===$a.LIVE,B=g===$a.NOT_LIVE||g===$a.LIVE&&n,D=Za(B,50),H=!!O,M=!!w,z=!!I,U=!!_,V=Za(n,50),F=m?.find(e=>e.id===j),G=F&&V,W=h.reduce((e,{scoreBarType:t,scoreBarPlayer:n,scoreBarTime:r,scoreBarPosition:i})=>{e[t]=e[t]||{},e[t][i]=e[t][i]||[];const a=e[t][i].find(e=>e.scoreBarPlayer===n);return a?a.scoreBarTimes.push(r):e[t][i].push({scoreBarPlayer:n,scoreBarTimes:[r],scoreBarPosition:i}),e},{});(0,$i.A)(e,"scoreBar");const Z=(0,p.useCallback)(()=>{const e=document.documentElement.scrollTop||document.body.scrollTop;e>.2*window.innerHeight&&d(!1),0===e&&d(!0)},[]);return(0,p.useEffect)(()=>{const e=(0,Ar.nF)(Z,100);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",Z)},[Z]),(0,p.useEffect)(()=>{l&&r(!0),S&&l?a(!0):l||(a(!1),r(!1))},[S,l]),(0,x.jsxs)(Qa,{ref:e,$isSticky:u,children:[(0,x.jsxs)(Ya,{$expanded:i,children:[(0,x.jsxs)(eo,{$isOpen:V,"aria-hidden":!V,children:[(0,x.jsxs)(to,{children:[z&&(0,x.jsx)(no,{src:I}),H&&(0,x.jsx)(io,{$left:!0,children:O})]}),M?(0,x.jsxs)(to,{children:[U&&(0,x.jsx)(no,{src:_}),(0,x.jsx)(io,{children:w})]}):(0,x.jsx)(Ia,{})]}),(0,x.jsxs)(oo,{children:[(0,x.jsx)(Wa,{crest:y,name:v,isOpen:n}),(0,x.jsxs)(ro,{children:[R?(0,x.jsxs)(co,{children:[(0,x.jsx)(uo,{children:b}),(0,x.jsx)(uo,{children:C})]}):null,(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(ao,{$isOpen:D,"aria-hidden":!D,children:E}),(0,x.jsx)(ao,{$isOpen:D,"aria-hidden":!D,$secondary:!0,children:k})]})]}),(0,x.jsx)(Wa,{crest:A,name:N,isOpen:n,reverse:!0})]}),(0,x.jsxs)(so,{$isOpen:i,"aria-hidden":!i,$interacted:o,$events:h.length,children:[W&&W.GOL&&(0,x.jsx)(Ma,{events:W.GOL,scoreBarType:Sa.GOAL,scoreBarNumberSuffix:P}),W&&W.RED&&(0,x.jsx)(Ma,{events:W.RED,scoreBarType:Sa.RED_CARD,scoreBarNumberSuffix:P})]})]}),G&&(0,x.jsx)(lo,{children:(0,x.jsx)(Ea.A,{sponsor:F})}),(0,x.jsx)(Ka,{scorebarHeight:$})]})};var vo=(0,p.memo)(ho);const yo=parseInt(u.LO.lg,10);var bo=e=>{const{elementsDisplayMechanic:t}=e,{width:n}=(e=>{const[t,n]=(0,p.useState)(e?.getBoundingClientRect()),r=(0,p.useCallback)(()=>{e&&n(e?.getBoundingClientRect())},[e]);return(0,p.useEffect)(()=>{const t=new _r.default(e=>{e.forEach(r)});return t.observe(e),()=>{t.unobserve(e)}},[e,r]),t})(document.body),r=(0,p.useMemo)(()=>t===u.uy.HUB&&n<=yo?u.uy.TABS:t,[n,t]),i=(0,p.useMemo)(()=>{const n=e.containers||e.childContainers||[];return t===u.uy.HUB&&r===u.uy.TABS?(n.forEach(e=>{e.childContainers&&e.childContainers.forEach(t=>{t.colour||(t.colour=e.colour),t.image||(t.image=e.image),t.backgroundRepeat||(t.backgroundRepeat=e.backgroundRepeat),t.backgroundSize||(t.backgroundSize=e.backgroundSize)})}),n.flatMap(e=>e.elementsDisplayMechanic===u.uy.TABS?e.childContainers||[]:e)):n},[e,t,r]);return[r,i]},xo=n("88ja"),No=n("TEbb"),Ao=n("1mTy"),Co=e=>{const{defaultContainerId:t=null}=(0,p.useContext)(fo),n=(0,ue.jP)(e,t),r=(0,c.d4)(n),i=(0,c.d4)(ue.xQ);var a;return a=i,r.filter(e=>{const t=a[e];if(!t)return!1;const{contentType:n}=t;return!Ao.JJ.includes(n)})};const Oo=m.Ay.div.withConfig({displayName:"card__Wrapper"})`
  width: 100%;
`,To=(m.Ay.div.withConfig({displayName:"layout__Layout"})`
  width: 100%;
`,m.AH`
  max-height: calc(var(--viewport-height) - var(--hub-offset) - var(--footer-visible-height));

  position: sticky;
  top: var(--hub-offset);

  overflow-y: auto;
  scroll-behavior: smooth;
`),Io=m.Ay.div.withConfig({displayName:"layout__Container"})`
  width: 100%;
  ${({$sticky:e})=>e&&To}

  ${({$colour:e})=>e&&m.AH`
      background-color: ${e};
    `}

  ${({$image:e})=>e&&m.AH`
      background-image: url(${e});
    `}

  ${({$backgroundRepeat:e})=>e&&m.AH`
      background-repeat: ${e};
    `}

  ${({$backgroundSize:e})=>e&&m.AH`
      background-size: ${e};
    `}
`,Eo=(0,m.Ay)(Io).withConfig({displayName:"layout__HubContainer"})`
  flex-grow: ${({width:e})=>e?0:1};
  min-width: 320px;
  width: ${({$clientWidth:e,width:t})=>t?e/100*t+"px":"auto"};
`;var wo=({container:e})=>{const t=Co(e.id),n=(0,c.d4)(e=>(0,ue.nz)(e,t[0])),r=!!n,{adverts:i}=(0,p.useContext)(T.Ay),[a,o]=((e,t)=>{if(!e)return[null,null,null];const n=n=>"root"!==t&&null!==t?e.filter(e=>e.position===n&&e.containerId===t):e.filter(e=>e.position===n);return[n(Dn.SO.TOP),n(Dn.SO.BOTTOM),n(Dn.SO.RECURRING)]})(i,e.id),s=(0,c.d4)(ue.eA),l=s?.id,{trackConversion:d}=(0,ji.A)(),{dividerColor:u,dividerThickness:m,colour:g,image:f,backgroundRepeat:h,backgroundSize:v,sticky:y}=e;(0,p.useEffect)(()=>{window.scrollTo(0,0)},[l]);const b=()=>{d({elementId:l,elementContext:"google_ad",actionSource:zi.S.AD,actionType:zi.X.CLICK,actionContext:{advert_id:e.id}})};return(0,x.jsx)(Oo,{children:(0,x.jsxs)(Io,{$dividerColor:u,$dividerThickness:m,$colour:g,$image:f,$backgroundRepeat:h,$backgroundSize:v,$sticky:y,children:[!!a&&a.map(({path:t,slotWidth:n,slotHeight:r,sizeMapping:i,targeting:a},o)=>(0,x.jsx)("div",{onClick:b,children:(0,x.jsx)(xo.A,{path:t,slotWidth:n,slotHeight:r,sizeMapping:i,targeting:a,advertId:e.id,elementId:l},o)})),r&&(0,x.jsx)(No.A,{element:n,paddings:e.paddings,maxWidths:e.maxWidths,elementBorderRadius:e.elementBorderRadius}),!!o&&o.map(({path:t,slotWidth:n,slotHeight:r,sizeMapping:i,targeting:a},o)=>(0,x.jsx)("div",{onClick:b,children:(0,x.jsx)(xo.A,{path:t,slotWidth:n,slotHeight:r,sizeMapping:i,targeting:a,advertId:e.id,elementId:l},o)}))]})})};let _o=function(e){return e.NONE="none",e.IMAGE="image",e.VIDEO="video",e.AUDIO="audio",e.TILES="tiles",e}({});var ko=()=>{const e=(0,c.d4)(Br.bG),t=(0,c.d4)(Br.GP),{promoType:n,promoVideoSrc:r,promoAudioSrc:i}=(0,p.useContext)(fo),{projectPromoVideos:a}=(0,p.useContext)(T.Ay);return[n===_o.AUDIO&&!!i&&e,n===_o.VIDEO&&(!!r||!!a)&&t]};const Po=m.Ay.div.withConfig({displayName:"hub__Wrapper"})`
  display: flex;
  flex: 1;
  width: 100%;

  ${({$isScorebarSticky:e,$isPromoAudioSticky:t})=>e&&t&&m.AH`
      --custom-sticky-height: calc(
        var(--header-height) + var(--scorebar-height) + var(--promo-height)
      );
    `}

  ${({$isScorebarSticky:e,$isPromoAudioSticky:t})=>e&&!t&&m.AH`
      --custom-sticky-height: calc(var(--header-height) + var(--scorebar-height));
    `}

${({$isScorebarSticky:e,$isPromoAudioSticky:t})=>!e&&t&&m.AH`
      --custom-sticky-height: calc(var(--header-height) + var(--promo-height));
    `}

  ${({$isScorebarSticky:e,$isPromoAudioSticky:t})=>!e&&!t&&m.AH`
      --custom-sticky-height: calc(var(--header-height));
    `}


  --hub-offset: ${({$sticky:e})=>e?0:"var(--custom-sticky-height, 0px)"};
`;var jo=e=>{const{sticky:t,containers:n,hasPageScrolled:r,setHasPageScrolled:i}=e,a=(0,c.d4)(Br.z0),[o]=ko(),s=n.length>0,{clientWidth:l}=document.body;return s&&(0,x.jsx)(Po,{$sticky:t,$isScorebarSticky:a,$isPromoAudioSticky:o,children:n.map(e=>{const{dividerColor:t,dividerThickness:n,colour:a,image:o,backgroundRepeat:s,backgroundSize:d,sticky:c}=e;return(0,x.jsx)(Eo,{id:e.id,$clientWidth:l,$dividerColor:t,$dividerThickness:n,$colour:a,$image:o,$backgroundRepeat:s,$backgroundSize:d,$sticky:c,className:Dn.n$.BLOCK,children:(0,x.jsx)(ls,{container:e,hasPageScrolled:r,setHasPageScrolled:i})},e.id)})})},Lo=n("5gAz"),$o=n("1wv4");const So=(0,m.Ay)(O.a2).withConfig({displayName:"tabs__ArrowIcon"})`
  margin: auto;
  height: 100%;
  width: 100%;
`,Ro=(0,m.Ay)($o.tU).withConfig({displayName:"tabs__Tabs"})`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`,Bo=m.Ay.div.withConfig({displayName:"tabs__NavOuter"})`
  ${({$isScorebarSticky:e,$isPromoAudioSticky:t})=>{let n="0px";switch(!0){case e&&t:n="calc(var(--scorebar-height, 0px) + var(--promo-height, 0px))";break;case e&&!t:n="calc(var(--scorebar-height, 0px))";break;case!e&&t:n="calc(var(--promo-height, 0px))";break;default:n="0px"}return m.AH`
      --custom-sticky-height: ${n};
    `}}

  --tabs-offset: var(--custom-sticky-height, 0px);
  position: sticky;
  top: var(--tabs-offset);
  z-index: 10;
  background-color: var(--tabsBackgroundColor, var(--fkElementHighlightColor));
`,Do=m.Ay.nav.withConfig({displayName:"tabs__Navigation"})`
  display: flex;
  justify-content: center;
  justify-content: ${({$lessThanFourColumns:e})=>e?"center":"flex-start"};
  overflow-x: ${({$lessThanFourColumns:e})=>e?"hidden":"auto"};
  overflow-y: hidden;
  white-space: ${({$lessThanFourColumns:e})=>e?"normal":"nowrap"};

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  height: var(--tabsNavigationHeight);
  width: 100%;
`,Ho=m.Ay.div.withConfig({displayName:"tabs__NavInner"})`
  width: ${({$lessThanFourColumns:e})=>e?"100%":"auto"};
`,Mo=m.i7`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`,zo=m.i7`
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`,Uo=m.Ay.button.withConfig({displayName:"tabs__NavButton"})`
  position: fixed;
  ${({isRight:e})=>e?m.AH`
          right: 5px;
        `:m.AH`
          left: 5px;
        `}
  top: calc(var(--tabs-offset) + 16px);
  padding: 1px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: none;
  background-color: white;
  visibility: hidden;
  opacity: 0;
  animation-delay: 100ms;
  animation: ${({visible:e})=>e?Mo:zo} 300ms forwards
    cubic-bezier(0.61, 1, 0.88, 1);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background: var(--color-1-0);
  transition: box-shadow 300ms ease;
  cursor: pointer;
  ${So} {
    transform: ${({isRight:e})=>e?"rotate(180deg)":"none"};
  }
  ${(0,ea.T)(m.AH`
    &:hover {
      box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
    }
  `)}
`,Vo=(0,m.Ay)($o.wb).withConfig({displayName:"tabs__TabList"})`
  position: relative;
  display: ${({cols:e})=>e<4?"grid":"flex"};
  height: 100%;

  justify-content: center;
  border: calc(var(--tabsBackgroundBorderWidth, 0) * 1px) solid var(--tabsBackgroundBorderColor);

  ${({cols:e})=>e<4&&m.AH`
      grid-template-columns: repeat(${e}, calc(100% / ${e}));
    `};
`,Fo=(0,m.Ay)($o.oz).withConfig({displayName:"tabs__Tab"})`
  --header-background-default:
    var(--fkElementHighlightDarkenSingle), var(--fkElementHighlightDarkenSingle);
  position: relative;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  border-color: var(--tabBorderColor);
  border-style: solid;
  border-width: calc(var(--tabBorderWidth, 0) * 1px) calc(var(--tabBorderWidth, 0) * 1px)
    calc(var(--tabBorderWidth, 0) * 1px) 0;

  color: ${({selected:e})=>e?"var(--selectedTabLinkColor, var(--color-0-0))":"var(--tabLinkColor, var(--color-7-0))"};

  font-family: var(--font-family-main);
  font-size: 14px;
  font-weight: 800;
  line-height: 18px;
  text-decoration: none;
  cursor: pointer;
  transition:
    color 0.5s ease,
    background-color 0.5s ease;

  ${({$highlighted:e,selected:t})=>e&&t?m.AH`
          ${Q.A`
            --gradient-direction: var(--tabHighlightGradientDirection, var(--gradient-direction-default));
            --gradient-color: var(--tabHighlightColor, var(--header-background-default));
          `}
        `:m.AH`
          background: var(--tabBackgroundColor, transparent);
        `};

  &:first-of-type {
    border-left-width: calc(var(--tabBorderWidth, 0) * 1px);
  }

  &:focus-visible,
  &:focus {
    border: none;
    outline: none;
    outline-color: transparent;
    border-color: transparent;
  }
`,Go=m.Ay.div.withConfig({displayName:"tabs__TabInner"})`
  padding: 0 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
`,Wo=(0,m.Ay)($o.Kp).withConfig({displayName:"tabs__TabPanel"})`
  text-align: center;

  ${({selected:e})=>e&&m.AH`
      flex-grow: 1;
      display: flex;
    `};
`,Zo=m.Ay.div.withConfig({displayName:"tabs__Indicator"})`
  --header-background-default:
    var(--fkElementHighlightDarkenSingle), var(--fkElementHighlightDarkenSingle);
  height: ${4}px;
  position: absolute;
  left: ${({$left:e,$lessThanFourColumns:t})=>t?`${e}%`:`${e}px`};
  width: ${({$widthOfTab:e,$lessThanFourColumns:t})=>t?`${e}%`:`${e}px`};
  bottom: 0;
  transition:
    left 0.5s ease,
    width 0.5s ease;

  ${Q.A`
    --gradient-direction: var(--tabHighlightGradientDirection, var(--gradient-direction-default));
    --gradient-color: var(--tabHighlightColor, var(--header-background-default));
  `}
`;var Jo=n("EG7w"),Ko=e=>{const{id:t,sticky:n,highlightType:r,containers:i,hasPageScrolled:a,setHasPageScrolled:o}=e,s=(0,p.useRef)({}),l=(0,p.useRef)(null),d=(0,p.useRef)(null),m=i.length,g=(0,c.d4)(Br.z0),[f]=ko(),h=!!m,v=(0,p.useMemo)(()=>m<4,[m]),[y,b]=((e,t)=>{const n=(0,Lo.L$)(e,t),r=(0,Dt.zy)(),i=(0,Dt.W6)(),[a,o]=(0,p.useState)(n);return[a,(0,p.useCallback)(n=>{const a=new URLSearchParams(r.search);a.set(e,t[n].id),o(n),i.push({search:a.toString()})},[i,r,e,t,o])]})(t,i),[N,A]=(0,p.useState)(0),[C,T]=(0,p.useState)(0),[I,E]=(0,p.useState)(!1),[w,_]=(0,p.useState)(!1),[k,P]=(0,p.useState)(!0),j=(0,Jo.Gz)(),L=(()=>{let e;return(...t)=>{clearTimeout(e),e=setTimeout(()=>(()=>{const{scrollLeft:e,clientWidth:t,scrollWidth:n}=d.current;P(0===e),_(e+t+10>=n)})(...t),100)}})();(0,p.useEffect)(()=>{const e=()=>{const e=d.current,t=l.current;if(!e||!t)return;const{width:n}=e.getBoundingClientRect(),{width:r}=t.getBoundingClientRect();E(r>n),_(!(r>n))};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[d]);const $=(0,p.useCallback)(e=>{if(v)return A(100/m),void T(N*e);const t=s.current[e],n=s.current[e].getBoundingClientRect().left,r=l.current.getBoundingClientRect().left;T(n-r),A(t.offsetWidth)},[m,N,v]),S=(0,p.useCallback)(e=>{const t=d.current;if(t){const n=200;e?t.scrollBy({left:n,behavior:"smooth"}):t.scrollBy({left:-n,behavior:"smooth"})}},[]);(0,p.useEffect)(()=>{$(y)},[i]);const R=(0,p.useCallback)((e,t)=>{(0,Mi.u)("tab_click",{event_category:"click",event_label:e}),$(t)},[$]);return h&&(0,x.jsxs)(Ro,{selectedIndex:y,onSelect:b,children:[(0,x.jsx)(Bo,{$sticky:n,$isScorebarSticky:g,$isPromoAudioSticky:f,children:(0,x.jsx)(O.Pi,{componentType:u.tn.TABS,children:(0,x.jsxs)(Do,{$lessThanFourColumns:v,ref:d,onScroll:L,children:[(0,x.jsx)(Ho,{$lessThanFourColumns:v,ref:l,children:(0,x.jsxs)(Vo,{cols:m,children:[i.map(({id:e,name:t},n)=>(0,x.jsx)(Fo,{onClick:()=>R(e,n),$highlighted:r===Dn.ru.BACK,children:(0,x.jsx)(Go,{ref:e=>((e,t)=>{s.current[t]=e})(e,n),children:t})},e)),r===Dn.ru.BAR&&(0,x.jsx)(Zo,{$lessThanFourColumns:v,$left:C,$widthOfTab:N})]})}),I&&!j&&!k&&(0,x.jsx)(Uo,{onClick:()=>S(!1),visible:!k,children:(0,x.jsx)(So,{})}),I&&!j&&!w&&(0,x.jsx)(Uo,{onClick:()=>S(!0),isRight:!0,visible:!w,children:(0,x.jsx)(So,{})})]})})}),i.map(e=>{const{dividerColor:t,dividerThickness:n,colour:r,image:i,backgroundRepeat:s,backgroundSize:l,sticky:d}=e;return(0,x.jsx)(Wo,{children:(0,x.jsx)(Io,{$dividerColor:t,$dividerThickness:n,$colour:r,$image:i,$backgroundRepeat:s,$backgroundSize:l,$sticky:d,className:Dn.n$.BLOCK,children:(0,x.jsx)(ls,{container:e,hasPageScrolled:a,setHasPageScrolled:o})})},e.id)})]})};const Qo=()=>(0,x.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:(0,x.jsx)("path",{d:"M19.0269 4.27601L6.99503 16.3079L2.74134 12.0542C2.53999 11.8529 2.21351 11.8529 2.01212 12.0542L1.52601 12.5403C1.32466 12.7417 1.32466 13.0681 1.52601 13.2695L6.63044 18.374C6.8318 18.5753 7.15827 18.5753 7.35967 18.374L20.2423 5.49138C20.4436 5.29003 20.4436 4.96356 20.2423 4.76216L19.7561 4.27601C19.5548 4.07466 19.2283 4.07466 19.0269 4.27601Z",fill:"#009E57"})}),Yo=m.Ay.div.withConfig({displayName:"picks-complete__Container"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid ${({$bgColor:e})=>e||"#606060"};
  background: ${({$bgColor:e})=>e||"#191c23"};
  padding: 16px;
  margin: 8px auto;

  ${(0,Un.A)(u.P$.MOBILE_PORTRAIT)}

  ${xe.A.ssm((0,Un.A)(u.P$.MOBILE_LANDSCAPE))}
  ${xe.A.md((0,Un.A)(u.P$.TABLET_PORTRAIT))}
  ${xe.A.lg((0,Un.A)(u.P$.TABLET_LANDSCAPE))}
  ${xe.A.xl((0,Un.A)(u.P$.DESKTOP))}
`,Xo=m.Ay.h2.withConfig({displayName:"picks-complete__Title"})`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #009e57;
`,qo=m.Ay.div.withConfig({displayName:"picks-complete__IconWrapper"})`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #009e57;
  border-radius: 50%;
`;var es=()=>{const e=(0,c.d4)(pe._s),{fkSpecialEvents:t=[]}=(0,c.d4)(S.H6),n=(0,p.useMemo)(()=>t?.find(t=>t.events?.some(t=>t.eventId===e)),[t,e]);return(0,x.jsxs)(Yo,{$bgColor:n?.scorebarBackgroundColor,children:[(0,x.jsx)(qo,{children:(0,x.jsx)(Qo,{})}),(0,x.jsx)(Xo,{children:"Picks Complete"})]})};const ts=m.i7`
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`,ns=m.Ay.div.withConfig({displayName:"feed__Wrapper"})`
  ${Ii.Z}
  ${Ii.C}
  width: 100%;
  padding: 0 16px;
`,rs=((0,m.Ay)(O.jn).withConfig({displayName:"feed__LoadMoreButton"})`
  margin: 16px 0;
  opacity: 0;
  transform: translateY(-10px);
  will-change: opacity transform;
  animation: ${ts} 0.4s linear forwards;
  animation-delay: ${({$length:e})=>`calc(${e} * 0.50s)`};
`,m.Ay.div.withConfig({displayName:"feed__AdvertWraper"})`
  padding-bottom: 4px;
`,m.Ay.div.withConfig({displayName:"feed__Label"})`
  ${be.Px}

  ${(0,Un.A)(u.P$.MOBILE_PORTRAIT)}

  ${xe.A.ssm((0,Un.A)(u.P$.MOBILE_LANDSCAPE))}
  ${xe.A.md((0,Un.A)(u.P$.TABLET_PORTRAIT))}
  ${xe.A.lg((0,Un.A)(u.P$.TABLET_LANDSCAPE))}
  ${xe.A.xl((0,Un.A)(u.P$.DESKTOP))}

  width: calc(100% - 32px);
  color: #fff;
  text-align: left;
  margin: 16px;

  ${xe.A.md`
    width: 100%;
    margin: 16px auto;
  `}
`),is=m.Ay.img.withConfig({displayName:"feed__Alert"})`
  ${(0,Un.A)(u.P$.MOBILE_PORTRAIT)}

  ${xe.A.ssm((0,Un.A)(u.P$.MOBILE_LANDSCAPE))}
  ${xe.A.md((0,Un.A)(u.P$.TABLET_PORTRAIT))}
  ${xe.A.lg((0,Un.A)(u.P$.TABLET_LANDSCAPE))}
  ${xe.A.xl((0,Un.A)(u.P$.DESKTOP))}

  margin: 8px auto;
  border-radius: 8px;
  border: 1px solid #606060;
`;te().extend(se()),te().extend(ae()),te().extend(re());var as=({containerId:e,paddings:t=[],maxWidths:n=[],elementBorderRadius:r=[],dividerColor:i,dividerThickness:a})=>{const o=Co(e),s=(0,c.d4)(ue.xQ),l=(0,c.d4)(pe.Zc),d=(0,c.d4)(ue.UQ),m=(0,c.d4)(ue.QN),{pickem:{makeYourPicksText:g,yourPicksText:f,picksComingSoonImage:h,halftimeImage:v}={}}=(0,c.d4)(S.H6),y=l?.isActive,b="game"===l.settings.gameType,N="weekly"===l.settings.gameType,{gameQuarter:A,gameClock:C}=l.settings,O="2"===A&&("0:00"===C||"00:00"===C),T=(0,p.useMemo)(()=>{const e=d.find(e=>"weekly"===e.type&&"active"===e.state);return!!e&&e.weekNumber===l?.settings?.weekNumber},[d,l]),E=(0,p.useMemo)(()=>({paddings:t,maxWidths:n,elementBorderRadius:r,dividerColor:i,dividerThickness:a,containerId:e}),[t,n,r,i,a,e]);(0,p.useEffect)(()=>{const e=(0,I.oJ)(u.Oz.HOME_PAGEVIEW,{});(0,I.u4)(e)},[]);const w=(0,p.useMemo)(()=>o.filter(e=>["nba-instant-win-element","nba-number-predictor-element","nba-grid-predictor-element","nba-rail-predictor-element","nba-stacked-predictor-element"].includes(s[e].contentType)&&"started"===s[e].state&&void 0===m[e]),[s,o,m]),_=N&&o.length>0&&0===w.length,k=b&&y&&!!h&&!o.length,P=b&&y&&O&&!!v;return(0,x.jsxs)(ns,{children:[N&&(0,x.jsx)(rs,{children:T?g:f}),k?(0,x.jsx)(is,{src:h}):null,P?(0,x.jsx)(is,{src:v}):null,o.map(e=>(0,x.jsx)("div",{children:(0,x.jsx)(No.A,{element:s[e],...E})},e)),_&&(0,x.jsx)(es,{})]})};const os=m.Ay.div.withConfig({displayName:"timeline__Wrapper"})`
  width: 100%;
`;var ss=({container:e,hasPageScrolled:t,setHasPageScrolled:n})=>{const{id:r,paddings:i,maxWidths:a,elementBorderRadius:o,dividerColor:s,dividerThickness:l,sticky:d,colour:c,image:u,backgroundRepeat:m,backgroundSize:g}=e,{loadOnClick:f,initialRenderLength:h}=(0,p.useContext)(T.Ay);return(0,x.jsx)(os,{children:(0,x.jsx)(Io,{id:r,$sticky:d,$colour:c,$image:u,$backgroundRepeat:m,$backgroundSize:g,className:Dn.n$.BLOCK,children:(0,x.jsx)(as,{containerId:r,paddings:i,maxWidths:a,elementBorderRadius:o,dividerColor:s,dividerThickness:l,hasPageScrolled:t,setHasPageScrolled:n,loadOnClick:f,initialRenderLength:h})})})};function ls({container:e,hasPageScrolled:t,setHasPageScrolled:n}){const{id:r,sticky:i=!1,highlightType:a}=e,[o,s]=bo(e);return{[u.uy.TIMELINE]:(0,x.jsx)(ss,{container:e,hasPageScrolled:t,setHasPageScrolled:n}),[u.uy.CARD]:(0,x.jsx)(wo,{container:e}),[u.uy.TABS]:(0,x.jsx)(Ko,{id:r,sticky:i,highlightType:a,containers:s,hasPageScrolled:t,setHasPageScrolled:n}),[u.uy.HUB]:(0,x.jsx)(jo,{sticky:i,containers:s,hasPageScrolled:t,setHasPageScrolled:n})}[o]}var ds=n("bISm");const cs="button-collapse",us={BLOCK:cs,BUTTON:`${cs}__button`,BUTTON_ICON:`${cs}__button-icon`},ps=m.Ay.div.withConfig({displayName:"button-collapse__Wrapper"})`
  display: none;

  ${xe.A.sm`
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 102;
    transition: right 500ms ease 0ms;
  `}
`,ms=m.Ay.button.withConfig({displayName:"button-collapse__Button"})`
  border-radius: var(--fkButtonCollapseBorderRadius, 4px);
  border-width: var(--fkButtonCollapseBorderWidth, 0px);
  border-style: solid;
  border-color: var(--fkButtonCollapseDefaultBorderColor);
  background-color: var(--fkButtonCollapseDefaultBackgroundColor, var(--color-1-0));
  box-shadow: var(--fkButtonCollapseDefaultBoxShadow);
  cursor: pointer;
  transition:
    color 0.3s,
    background-color 0.3s,
    border-color 0.3s,
    opacity 0.3s;
  -webkit-tap-highlight-color: transparent;
  padding: 10px;

  ${(0,ea.T)(m.AH`
    &:hover {
      background: var(--fkButtonCollapseHoverBackgroundColor, var(--color-1-0));
      box-shadow: var(--fkButtonCollapseHoverBoxShadow);
      border-color: var(--fkButtonCollapseHoverBorderColor);

      svg {
        fill: var(--fkButtonCollapseHoverArrowColor, var(--color-0-0));
      }
    }
  `)}

  &:focus {
    outline: 0;
    -webkit-tap-highlight-color: transparent;
  }
`,gs=(0,m.Ay)(O.a2).withConfig({displayName:"button-collapse__ArrowIcon"})`
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  margin: 0 auto;
  transform: rotate(${({$isCollapsed:e})=>e?"0deg":"180deg"});
  transition: fill 300ms ease;
`,fs=({horizontal:e,collapsed:t,clickHandler:n})=>{const r=(0,p.useRef)(null);return(0,p.useEffect)(()=>{e&&n(!0)},[n,e]),(0,x.jsx)(ps,{className:us.BLOCK,ref:r,children:(0,x.jsx)(ms,{className:us.BUTTON,type:"button",onClick:()=>n(!t),children:(0,x.jsx)(gs,{className:us.BUTTON_ICON,$isCollapsed:t,state:ds.yg.ARROW})})})};var hs=(0,p.memo)(fs);const vs="iframe-video",ys={BLOCK:vs,VIDEO_DEFAULT:`${vs}__video--default`,VIDEO_VIMEO:`${vs}__video--vimeo`,VIDEO_YOUTUBE:`${vs}__video--youtube`};let bs=function(e){return e.YOUTUBE="youtube",e.YOUTUBE2="youtu.be",e.VIMEO="vimeo",e.INVALID="invalid",e}({});var xs=n("L8f+");const Ns=e=>`https://player.vimeo.com/video/${(e=>{const t=e.split("/");return t[t.length-1]})(e)}`;const As=e=>{return`https://www.youtube.com/embed/${t=e,t.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/)[1]}`;var t};const Cs={[bs.YOUTUBE]:({title:e,src:t,desktop:n,className:r})=>(0,x.jsx)(xs.m,{className:r??"",$desktop:n,children:(0,x.jsx)(xs.C,{className:ys.VIDEO_YOUTUBE,src:As(t),type:"text/html",title:e,allowFullScreen:!0})}),[bs.VIMEO]:({title:e,src:t,desktop:n,className:r})=>(0,x.jsx)(xs.m,{$desktop:n,className:r??"",children:(0,x.jsx)(xs.C,{className:ys.VIDEO_VIMEO,src:Ns(t),type:"text/html",title:e,allowFullScreen:!0})}),[bs.INVALID]:({src:e,desktop:t,className:n})=>(0,x.jsx)(xs.m,{className:n??"",$desktop:t,children:(0,x.jsx)(O.ps,{className:ys.VIDEO_DEFAULT,src:e})})};var Os=({desktop:e=!1,src:t,title:n,className:r})=>{const i=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${i}px`);const a=Cs[(o=t,o.includes(bs.VIMEO)?bs.VIMEO:o.includes(bs.YOUTUBE)||o.includes(bs.YOUTUBE2)?bs.YOUTUBE:bs.INVALID)];var o;return(0,x.jsx)(a,{desktop:e,className:`${ys.BLOCK} ${r??""}`,src:t,title:n})};const Ts=m.Ay.div.withConfig({displayName:"video-layout__VideoPromo"})``,Is=m.Ay.div.withConfig({displayName:"video-layout__LayoutWrapper"})`
  transition: all 300ms ease 0ms;
  opacity: 1;
  height: 100%;
  border-left: 1px solid var(--tabsBackgroundBorderColor);
`,Es=(0,m.Ay)(ls).withConfig({displayName:"video-layout__VideoLayout"})``,ws=m.Ay.div.withConfig({displayName:"video-layout__Container"})`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;

  ${Is} {
    width: 100%;
    display: ${({$collapsed:e,$horizontal:t})=>e&&t?"none":"block"};
  }

  ${xe.A.sm`
    flex-direction: row;

    ${Is} {
      transition: all 300ms ease 0ms;
      opacity: 1;
      transform: ${({$collapsed:e,$panelSize:t})=>e?`translateX(${t}px) translateZ(0px)`:"translateX(1px) translateZ(0px)"};
      height: 100%;
      width: ${({$collapsed:e,$panelSize:t})=>e?1:t}px;
      border-left: 1px solid var(--tabsBackgroundBorderColor);
    }
  `}
`,_s=m.Ay.div.withConfig({displayName:"video-layout__Inner"})`
  align-self: flex-start;
  position: sticky;
  ${({$isStickyPromo:e})=>e?m.AH`
          top: calc(var(--promo-height, 0px) + var(--scorebar-height, 0px));
        `:m.AH`
          top: calc(var(--scorebar-height, 0px));
        `}
  z-index:11;
  width: 100%;

  ${xe.A.sm`
      width: calc(100% - ${({$collapsed:e,$panelSize:t})=>e?1:t}px);
      transition: width 300ms ease 0ms;
    `}

  ${xs.m} {
    width: auto;
  }
`;var ks=({videoLedSrc:e,playerWidth:t,columnCollapse:n,container:r})=>{const[i,a]=(0,p.useState)(!1),[o,s]=(0,p.useState)(!1),l=(0,c.d4)(Br.bG),d=(0,c.d4)(Br.GP),u=l||d,m=(0,Jo.Yg)(),g=(0,Jo.xl)();return(0,p.useEffect)(()=>{(m||o)&&window.scroll(0,0)},[m,o]),(0,x.jsxs)(ws,{$horizontal:m,$panelSize:t,$collapsed:o,children:[(0,x.jsxs)(_s,{$panelSize:t,$collapsed:o,$horizontal:m,$isStickyPromo:u,children:[(0,x.jsx)(Ts,{children:(0,x.jsx)(Os,{desktop:g,src:e})}),n&&(0,x.jsx)(hs,{horizontal:m,clickHandler:s,collapsed:o})]}),(0,x.jsx)(Is,{children:(0,x.jsx)(Es,{container:r,hasPageScrolled:i,setHasPageScrolled:a})})]})},Ps=n("dQjo");const js=m.Ay.div.withConfig({displayName:"bar__Wrapper"})`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  width: 100%;
  align-items: center;
  user-select: none;

  ${xe.A.md`
  grid-template-columns: ${({$isStreaming:e})=>e?"1fr auto":"auto 1fr auto"} ;
  `}
`,Ls=m.Ay.div.withConfig({displayName:"bar__Progress"})`
  display: flex;
  align-items: center;
  height: 4px;
  cursor: ${({$streaming:e})=>e?"default":"pointer"};
  background: ${({$progress:e})=>`linear-gradient(var(--primaryButtonBackgroundGradientDirection, var(--gradient-direction-default)), var(--primaryButtonBackgroundColor, var(--gradient-incorrect)) ${e}%, rgba(255, 255, 255, 0.25) 0)`};
`,$s=m.Ay.div.withConfig({displayName:"bar__Time"})`
  ${be.AT};
  display: ${({$mobileHidden:e})=>e?"none":"flex"};
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 8px;
  color: var(--timerColor, var(--color-1-0));

  ${xe.A.md`
    display: flex;
  `}
`,Ss=m.Ay.div.withConfig({displayName:"bar__Dot"})`
  background: red;
  height: 8px;
  width: 8px;
  border-radius: 50%;
`,Rs=(e,t,n)=>{const r=e.pageX,i=t.getBoundingClientRect().left+window.scrollX;return n/t.offsetWidth*(r-i)};var Bs=({desktop:e,player:t})=>{const{current:n}=t,[r,i]=(0,p.useState)(1),[a,o]=(0,p.useState)(1),[s,l]=(0,p.useState)(null),[d,c]=(0,p.useState)(!1),u=(0,p.useRef)(null),m=a/r*100;(0,p.useEffect)(()=>{c(r===1/0)},[r]);const g=(0,p.useCallback)(()=>{o(n.currentTime)},[n]),f=(0,p.useCallback)(()=>{i(n.duration),o(n.currentTime)},[n]);return(0,p.useEffect)(()=>n?(n.addEventListener("loadeddata",f),n.addEventListener("timeupdate",g),s&&s!==a&&(n.currentTime=s,l(null)),()=>{n.removeEventListener("loadeddata",f),n.removeEventListener("timeupdate",g)}):()=>{},[t,s,a,n,g,f]),(0,x.jsxs)(js,{$isStreaming:d,children:[d?null:(0,x.jsx)($s,{$mobileHidden:!0,children:(0,Ar.fU)(Math.trunc(e?a:r))}),(0,x.jsx)(Ls,{ref:u,$progress:m,onMouseDown:e=>{if(d)return;l(Rs(e,u.current,r));const t=e=>{l(Rs(e,u.current,r))};document.addEventListener("mousemove",t),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",t)})},$streaming:d}),d?(0,x.jsxs)($s,{children:[(0,x.jsx)(Ss,{}),"LIVE"]}):(0,x.jsx)($s,{children:(0,Ar.fU)(Math.trunc(e?r:a))})]})};const Ds=m.Ay.button.withConfig({displayName:"play-button__Button"})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: none;
  color: var(--primaryButtonTextColor, var(--color-1-0));
  cursor: pointer;

  ${Q.A`
    --gradient-direction: var(--primaryButtonBackgroundGradientDirection, var(--gradient-direction-default));
    --gradient-color: var(--primaryButtonBackgroundColor, var(--gradient-incorrect));
  `}

  ${(0,ea.T)(m.AH`
    &:hover {
      color: var(--primaryButtonHoverTextColor, var(--primaryButtonTextColor, var(--color-1-0)));
      cursor: pointer;

      ${Q.A`
    --gradient-direction: var(--primaryButtonBackgroundGradientDirection, var(--gradient-direction-default));
    --gradient-color: var(--primaryButtonHoverBackgroundColor, var(--primaryButtonBackgroundColor, var(--gradient-incorrect)));
  `}
    }
  `)}

  ${xe.A.md`
    height: 40px;
    width: 40px;
  `}
`,Hs=()=>(0,x.jsx)("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"transparent",xmlns:"http://www.w3.org/2000/svg","data-testid":"audio-element-pause-icon",children:(0,x.jsx)("path",{d:"M4.5 14.9688C5.3125 14.9688 6 14.3125 6 13.4688V2.46875C6 1.65625 5.3125 0.96875 4.5 0.96875H1.5C0.65625 0.96875 0 1.65625 0 2.46875V13.4688C0 14.3125 0.65625 14.9688 1.5 14.9688H4.5ZM14 13.4688V2.46875C14 1.65625 13.3125 0.96875 12.5 0.96875H9.5C8.65625 0.96875 8 1.65625 8 2.46875V13.4688C8 14.3125 8.65625 14.9688 9.5 14.9688H12.5C13.3125 14.9688 14 14.3125 14 13.4688Z",fill:"currentColor"})}),Ms=()=>(0,x.jsx)("svg",{width:"15",height:"18",viewBox:"0 0 15 18",fill:"transparent",xmlns:"http://www.w3.org/2000/svg","data-testid":"audio-element-play-icon",children:(0,x.jsx)("path",{d:"M13.25 7.71875L2.25 1.21875C1.34375 0.6875 0 1.21875 0 2.5V15.5C0 16.6875 1.25 17.4062 2.25 16.8125L13.25 10.3125C14.2188 9.71875 14.2188 8.3125 13.25 7.71875Z",fill:"currentColor"})});var zs=({player:e,setter:t,isPlaying:n,isDisabled:r})=>(0,x.jsx)(Ds,{type:"button",onClick:()=>{(0,Mi.u)("promo_audio_click",{event_category:"click",event_label:"audio promo"}),t(!n),n?e.current.pause():e.current.play()},disabled:r,"data-testid":"audio-element-play-button",children:n?(0,x.jsx)(Hs,{}):(0,x.jsx)(Ms,{})});const Us=m.AH`
  top: calc(var(--promo-spacer-small, 0px));

  ${xe.A.xxs`
        top: calc(var(--promo-spacer, 0px) );
      `}
`,Vs=m.AH`
  top: calc(var(--promo-spacer-small, 0px) + var(--scorebar-height, 0px));

  ${xe.A.xxs`
        top: calc(var(--promo-spacer, 0px) +  var(--scorebar-height, 0px));
      `}
`,Fs=m.AH`
  top: calc(var(--promo-spacer, 0px) + var(--scorebar-height, 0px));
`,Gs=m.Ay.div.withConfig({displayName:"promo-audio__Container"})`
  display: block;
  min-height: ${({$minHeight:e})=>e?`${e}px`:"1px"};

  width: 100%;
  background-color: var(--wrapperBackgroundColor, var(--element-highlight-dark-default));
  background-image: var(--wrapperBackgroundImageMobile);
  background-size: cover;
  background-position: 50% 0;

  ${xe.A.md`
    background-image: var(--wrapperBackgroundImageTablet);
  `}

  ${xe.A.lg`
    background-image: var(--wrapperBackgroundImageDesktop);
  `}


  ${Ja.mo} {
    margin: 0 auto;
    padding: 8px 0;
  }

  ${Ja.EY} {
    color: var(--sponsorPromoTitleColor, var(--promoTitleColor, var(--sponsor-title-default)));
  }
`,Ws=m.Ay.div.withConfig({displayName:"promo-audio__Inner"})`
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: calc(var(--audioMaxWidth, var(--element-max-width)) * 1px);
  display: grid;
  grid-row-gap: 8px;
  grid-template-rows: repeat(2, auto);
`,Zs=m.Ay.div.withConfig({displayName:"promo-audio__AudioWrapper"})`
  width: 100%;
  padding: 8px;
  background-size: cover;
  background-position: 50% 0;
  background-color: var(--wrapperBackgroundColor, var(--element-highlight-dark-default));
  background-image: var(--wrapperBackgroundImageMobile);

  ${xe.A.md`
    padding: 8px 16px;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
    background-image: var(--wrapperBackgroundImageTablet);
  `}

  ${xe.A.lg`
    background-image: var(--wrapperBackgroundImageDesktop);
  `}


  ${({$isSticky:e})=>e&&m.AH`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
    `};

  ${({$isSticky:e,$withHeader:t,$isScorebarSticky:n})=>e&&t&&!n&&m.AH`
      ${Us}
    `};

  ${({$isSticky:e,$withHeader:t,$isScorebarSticky:n})=>e&&n&&!t&&m.AH`
      ${Vs}
    `};

  ${({$isSticky:e,$withHeader:t,$isScorebarSticky:n})=>e&&n&&t&&m.AH`
      ${Fs}
    `};
`,Js=m.Ay.div.withConfig({displayName:"promo-audio__Header"})`
  display: grid;
  grid-template-columns: ${({$withImage:e})=>e?"72px auto":"auto"};
  grid-gap: 16px;
  align-items: center;
  transition: all 300ms ease;

  ${xe.A.md`
    grid-template-columns: ${({$withImage:e})=>e?"40px 56px auto":"40px auto"};
  `}
`,Ks=m.Ay.div.withConfig({displayName:"promo-audio__ColumnContainer"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  text-align: left;
`,Qs=m.Ay.div.withConfig({displayName:"promo-audio__RowContainer"})`
  display: grid;
  grid-template-columns: 32px 1fr 32px;
  grid-gap: 8px;
  align-items: center;

  ${xe.A.md`
    grid-template-columns: 1fr;
  `}
`,Ys=m.Ay.img.withConfig({displayName:"promo-audio__Image"})`
  height: 72px;
  width: 72px;
  object-fit: cover;

  ${xe.A.md`
  height: 56px;
  width: 56px;
  `}
`,Xs=m.Ay.audio.withConfig({displayName:"promo-audio__Audio"})`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
`,qs=m.Ay.button.withConfig({displayName:"promo-audio__CollapseButton"})`
  display: flex;
  height: 100%;
  width: 32px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  font-weight: 900;

  &::before {
    position: relative;
    border-color: var(--collapseColor, var(--color-1-0));
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: '';
    display: inline-block;
    height: 8px;
    width: 8px;
    transform: rotate(-45deg);
    vertical-align: top;
    transition: transform 300ms ease;

    ${({$collapsed:e})=>e&&m.AH`
        top: 0;
        transform: rotate(135deg);
      `}
  }

  ${xe.A.md`
    display: none;
  `}
`,el=(0,m.Ay)(be.Yk).withConfig({displayName:"promo-audio__Title"})`
  color: var(--promoTitleColor, var(--color-1-0));
`,tl=(0,m.Ay)(be._2).withConfig({displayName:"promo-audio__Description"})`
  margin-top: 8px;
  color: var(--descriptionColor, var(--color-1-0));
`,nl=m.Ay.div.withConfig({displayName:"promo-audio__BarContainer"})`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr;
  justify-items: start;
`,rl=({src:e,title:t,description:n,image:r,sponsor:i,resizeOnScroll:a,withHeader:o,isScorebarSticky:s})=>{const l=(0,c.wA)(),d=(0,p.useRef)(null),u=(0,p.useRef)(null),m=(0,p.useRef)(null),[g,f]=(0,p.useState)(!1),[h,v]=(0,p.useState)(!1),[y,b]=(0,p.useState)(!1),[N,A]=(0,p.useState)(null),[C,O]=(0,p.useState)(null),{width:T}=(0,Rn.A)(d),I=o?h?-75:-64:0,E=!!t&&!!g,w=!!t&&!g,{current:_}=m,k=(0,p.useMemo)(()=>a&&C&&C<=I,[I,a,C]);(0,p.useEffect)(()=>{(0,Mi.u)("promo_audio_view",{event_category:"view",event_label:e})},[e]),(0,p.useEffect)(()=>{l((0,Mr.tF)(!!k)),h||f(k)},[h,l,k]);const P=r&&!g,j=r||n;return(0,p.useEffect)(()=>(_&&(_.onended=()=>b(!1)),()=>{}),[_,m,y]),(0,p.useEffect)(()=>{v(T>=768)},[T]),(0,p.useEffect)(()=>{h&&g&&f(!1)},[h,g,f]),(0,p.useEffect)(()=>{const e=()=>{if(d){const{top:e}=(0,Hn.xh)(d.current);O(e)}if(u){const{height:e}=(0,Hn.xh)(u.current);A(e)}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,p.useEffect)(()=>{if("number"!=typeof C){const{top:e}=(0,Hn.xh)(d.current);O(e)}const{height:e}=(0,Hn.xh)(u.current);"number"!=typeof N&&A(e),e!==N&&A(e)},[h,N,u,C,g]),(0,x.jsxs)(Gs,{ref:d,$minHeight:N,children:[(0,x.jsx)(Zs,{ref:u,$withHeader:o,$isSticky:k,$isScorebarSticky:s,children:(0,x.jsxs)(Ws,{children:[(0,x.jsxs)(Js,{$withImage:P,children:[h&&(0,x.jsx)(zs,{player:m,setter:b,isPlaying:y,isDisabled:!e}),P&&(0,x.jsx)(Ys,{src:r,alt:t}),(0,x.jsxs)(Ks,{children:[w&&(0,x.jsx)(el,{children:t}),n&&!g&&(0,x.jsx)(tl,{children:n})]})]}),(0,x.jsxs)(Qs,{children:[!h&&(0,x.jsx)(zs,{player:m,setter:b,isPlaying:y,isDisabled:!e}),(0,x.jsxs)(nl,{children:[E&&(0,x.jsx)(el,{children:t}),(0,x.jsx)(Bs,{desktop:h,player:m})]}),j&&(0,x.jsx)(qs,{onClick:()=>f(!g),$collapsed:g}),(0,x.jsx)(Xs,{ref:m,src:e,controls:!0,"data-testid":"audio-element"})]})]})}),i&&(0,x.jsx)(Ea.A,{sponsor:i,id:"audio_promo"})]})};var il=(0,p.memo)(rl);const al="responsive-image",ol={BLOCK:al,IMAGE:`${al}__image`},sl=e=>`(min-width: ${e})`,ll=m.Ay.picture.withConfig({displayName:"responsive-image__Picture"})``,dl=m.Ay.img.withConfig({displayName:"responsive-image__Image"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;function cl({className:e,srcMobile:t,srcTablet:n,srcDesktop:r}){return(0,x.jsxs)(ll,{className:`${ol.BLOCK} ${e??""}`,children:[(0,x.jsx)("source",{media:sl(u.LO.lg),srcSet:r}),(0,x.jsx)("source",{media:sl(u.LO.md),srcSet:n}),(0,x.jsx)(dl,{className:ol.IMAGE,src:t})]})}const ul=m.Ay.a.withConfig({displayName:"promo-image__Link"})`
  cursor: ${({$isLink:e})=>e?"pointer":"default"};
`;function pl({promoLink:e,promoImageMobile:t,promoImageTablet:n,promoImageDesktop:r}){const i=!!e;(0,p.useEffect)(()=>{(0,Mi.u)("promo_image_view",{event_category:"view",event_label:e})},[e]);const a=(0,p.useCallback)(()=>{(0,Mi.u)("promo_image_click",{event_category:"click",event_label:e})},[e]);return(0,x.jsx)(ul,{$isLink:i,...i?{href:e,target:"_blank"}:{},onClick:a,children:(0,x.jsx)(cl,{srcMobile:t,srcTablet:n,srcDesktop:r})})}var ml=(0,p.memo)(pl);const gl=m.Ay.div.withConfig({displayName:"promo-tiles__Wrapper"})`
  padding: 15px 7px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--wrapperBackgroundColor, var(--element-highlight-dark-default));

  ${xe.A.ssm`
    flex-direction: row;
  `}
`,fl=m.Ay.div.withConfig({displayName:"promo-tiles__Item"})`
  margin-bottom: 15px;
  padding: 0 7px;
  display: flex;
  flex-direction: row;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${xe.A.ssm`
    margin-bottom: 0;
    flex-direction: column;
    flex: 1 1 0;
  `}
`,hl=m.Ay.figure.withConfig({displayName:"promo-tiles__Figure"})`
  padding-right: 15px;
  width: 50%;

  ${xe.A.ssm`
    margin-bottom: 5px;
    padding-right: 0;
    width: auto;
  `}

  &:hover {
    cursor: pointer;
  }
`,vl=m.Ay.img.withConfig({displayName:"promo-tiles__Image"})`
  width: 100%;
  height: auto;

  ${xe.A.ssm`
    max-height: auto;
  `}
`,yl=(0,m.Ay)(be.Yk).withConfig({displayName:"promo-tiles__Title"})`
  width: 50%;
  text-align: left;
  color: var(--promoTitleColor, var(--color-1-0));

  ${xe.A.ssm`
    width: auto;
  `}
`;var bl=n("CXuk"),xl=({items:e})=>{(0,p.useEffect)(()=>{(0,Mi.u)("promo_tiles_view",{event_category:"view",event_label:"tile_promo"})},[e]);const t=(0,p.useCallback)(e=>{e&&((0,Mi.u)("promo_tiles_click",{event_category:"click",event_label:e}),(0,bl.bw)(e))},[]);return(0,x.jsx)(gl,{children:e.map(({image:e,title:n,url:r},i)=>(0,x.jsxs)(fl,{children:[(0,x.jsx)(hl,{onClick:()=>t(r),children:(0,x.jsx)(vl,{src:e,alt:n})}),(0,x.jsx)(yl,{children:n})]},i))})};const Nl=({onClickHandler:e,videos:t})=>(0,x.jsx)(si.KC,{layout:ds.tk.GRID,children:t.length>1&&t.map(({src:t,title:n},r)=>(0,x.jsx)(si.Nh,{children:(0,x.jsx)(O.jn,{onClick:()=>e(t),children:n})},r))});var Al=(0,p.memo)(Nl);const Cl=m.AH`
  top: calc(
    var(--promo-spacer-small, 0px) + var(--header-height-mobile) + var(--tabsNavigationHeight, 0px)
  );
  ${xe.A.xxs`
  top: calc(var(--promo-spacer, 0px) + var(--header-height-mobile) + var(--tabsNavigationHeight, 0px));
`}

  ${xe.A.ssm`
  top: calc(var(--promo-spacer, 0px) + var(--header-height-desktop) + var(--tabsNavigationHeight, 0px));
`}
`,Ol=m.AH`
  top: calc(
    var(--promo-spacer-small, 0px) + var(--tabsNavigationHeight, 0px) + var(--scorebar-height, 0px)
  );

  ${xe.A.xxs`
        top: calc(var(--promo-spacer, 0px) + var(--tabsNavigationHeight, 0px) + var(--scorebar-height, 0px));
      `}

  ${xe.A.ssm`
        top: calc(var(--promo-spacer, 0px) + var(--tabsNavigationHeight, 0px) + var(--scorebar-height, 0px));
      `}
`,Tl=m.AH`
  top: calc(
    var(--promo-spacer-small, 0px) + var(--header-height-mobile) +
      var(--tabsNavigationHeight, 0px) + var(--scorebar-height, 0px)
  );

  ${xe.A.xxs`
          top: calc(var(--promo-spacer, 0px) + var(--header-height-mobile) + var(--tabsNavigationHeight, 0px) + var(--scorebar-height, 0px));
        `}

  ${xe.A.ssm`
          top: calc(var(--promo-spacer, 0px) + var(--header-height-desktop) + var(--tabsNavigationHeight, 0px) + var(--scorebar-height, 0px));
        `}
`,Il=m.Ay.div.withConfig({displayName:"promo-video__VideoWrapper"})`
  width: 100%;
  background-color: var(--wrapperBackgroundColor, var(--element-highlight-dark-default));
  background-image: var(--wrapperBackgroundImageMobile);
  background-size: cover;
  background-position: 50% 0;

  ${xe.A.md`
    background-image: var(--wrapperBackgroundImageTablet);
  `}

  ${xe.A.lg`
    background-image: var(--wrapperBackgroundImageDesktop);
  `}

  ${Ja.EY} {
    color: var(--sponsorPromoTitleColor, var(--promoTitleColor, var(--sponsor-title-default)));
  }
`,El=m.Ay.div.withConfig({displayName:"promo-video__Inner"})`
  padding: 16px 0;
  margin: 0 auto;
  position: relative;
  max-width: calc(var(--videoMaxWidth) * 1px);
  width: 100%;

  text-align: left;

  @media (max-width: ${({$maxWidth:e})=>e}px) {
    padding: 0;
  }
`,wl=m.Ay.div.withConfig({displayName:"promo-video__Spacer"})`
  padding-bottom: 56.25%;
  background: rgba(0, 0, 0, 0.2);
`,_l=m.Ay.div.withConfig({displayName:"promo-video__Description"})`
  @media (max-width: ${({$maxWidth:e})=>e}px) {
    padding: 0 16px;
  }

  > * {
    padding-bottom: 8px;
    &:first-child {
      padding-top: 8px;
    }
    &:last-child {
      padding-bottom: 0;

      @media (max-width: ${({$maxWidth:e})=>e}px) {
        padding-bottom: 8px;
      }
    }
  }
`,kl=m.Ay.div.withConfig({displayName:"promo-video__StickyContainer"})`
  ${({$isSticky:e})=>e&&m.AH`
      --promo-spacer-small: 8px;
      --promo-spacer: 16px;

      position: fixed;
      top: 8px;
      right: 8px;
      left: auto;

      max-width: 250px;
      max-height: 181px;
      width: 250px;
      height: 181px;

      padding-bottom: 0;
      z-index: 10;

      ${xe.A.xxs`
        top: 16px;
        right: 16px;
      `}

      ${xe.A.md`
        max-width: 320px;
        width: 320px;
      `}

      ${xe.A.lg`
        max-width: 360px;
        width: 360px;
        max-height: 202px;
        height: 202px;
      `}

      ${xe.A.xl`
        max-width: 400px;
        width: 400px;
        max-height: 225px;
        height: 225px;
      `}
    `}

  ${({$isSticky:e,$withHeader:t,$isScorebarSticky:n})=>e&&t&&!n&&m.AH`
      ${Cl}
    `};

  ${({$isSticky:e,$withHeader:t,$isScorebarSticky:n})=>e&&n&&!t&&m.AH`
      ${Ol}
    `};

  ${({$isSticky:e,$withHeader:t,$isScorebarSticky:n})=>e&&n&&t&&m.AH`
      ${Tl}
    `};
`,Pl=(0,m.Ay)(be.Yk).withConfig({displayName:"promo-video__Title"})`
  text-align: left;
  display: block;
  color: var(--promoTitleColor, var(--color-1-0));
`;function jl({src:e,title:t,sponsor:n,maxWidth:r,resizeOnScroll:i,withHeader:a,projectPromoVideos:o,isScorebarSticky:s,videoLed:l}){const d=(0,p.useRef)(null),c=(0,Hn.Ay)(d),u=(0,p.useMemo)(()=>i&&0===c&&!l,[i,l,c]),m=o?o[0].src:"",[g,f]=(0,p.useState)(null);return(0,p.useEffect)(()=>{e?(f(e),(0,Mi.u)("promo_video_view",{event_category:"view",event_label:e})):(f(m),(0,Mi.u)("promo_video_view",{event_category:"view",event_label:m}))},[e,m]),(0,x.jsx)(Il,{ref:d,children:(0,x.jsxs)(El,{$maxWidth:r,children:[u&&(0,x.jsx)(wl,{}),(0,x.jsx)(kl,{$isSticky:u,$withHeader:a,$isScorebarSticky:s,children:g&&(0,x.jsx)(Os,{src:g})}),(0,x.jsxs)(_l,{$maxWidth:r,children:[t&&(0,x.jsx)(Pl,{children:t}),!!o&&!e&&(0,x.jsx)(Al,{onClickHandler:e=>{e!==g&&f(e)},videos:o}),n?(0,x.jsx)(Ea.A,{sponsor:n,id:"video_promo"}):null]})]})})}var Ll=(0,p.memo)(jl),$l=n("ObKy"),Sl=n("kX8C"),Rl=n("039+");const Bl=m.DU`
  :root {
    --promo-height: ${({height:e})=>e}px;
    --promo-visible-height: ${({visibleHeight:e})=>e}px;
  }
`,Dl=m.Ay.div.withConfig({displayName:"promo__Wrapper"})`
  ${Ii.Z}
  ${Ii.C}

  width: 100%;
  background-color: var(--headerBackgroundColor, var(--color-1-0));
  z-index: 11;
`,Hl=m.Ay.div.withConfig({displayName:"promo__LockedWrapper"})`
  padding: 8px;
`,Ml=({videoLed:e})=>{const{promoAccessLevel:t,primaryButtonLabel:n,pointsThreshold:r,pointsThresholdText:i,promoVideoSrc:a,promoVideoTitle:o,promoVideoSponsorId:s,promoAudioSrc:l,promoAudioImage:d,promoAudioTitle:u,promoAudioDescription:m,promoAudioSponsorId:g,promoAudioAccessLevel:f,resizePromoAudioOnScroll:h,promoImageMobile:v,promoImageTablet:y,promoImageDesktop:b,promoLink:N,promoTiles:A,resizePromoVideoOnScroll:C}=(0,p.useContext)(fo),{projectPromoVideos:O,sponsors:I}=(0,p.useContext)(T.Ay),[{ref:E,primaryButtonFunction:w,userPoints:_}]=(0,Sl.A)(t),[k,P,j,L,$,S,R,B,D]=(()=>{const{promoType:e,promoVideoSrc:t,promoAudioSrc:n,promoImageMobile:r,promoImageTablet:i,promoImageDesktop:a,promoTiles:o}=(0,p.useContext)(fo),{showHeader:s=!1,projectPromoVideos:l}=(0,p.useContext)(T.Ay),{promo:d}=(0,p.useContext)(Rl.Ay),c=(0,p.useRef)(null),{height:u}=(0,Rn.A)(c),m=(0,Hn.Ay)(c);return(0,$i.A)(c,"promo"),[c,!(e!==_o.VIDEO||!t&&!l),e===_o.AUDIO&&!!n,!(e!==_o.IMAGE||!r&&!i&&!a),e===_o.TILES&&!!o,s,d,u,m]})(),[H,M]=(0,$l.A)(t,r),z=P||j,U=H&&z||M&&z,V=(0,c.d4)(Br.z0),F=P?s:g,G=P?a:l,W=P?o:u,Z=`${G}-${W}`,J=I?.find(e=>e.id===F);return(0,x.jsxs)(Dl,{ref:k,children:[(0,x.jsx)(Bl,{height:B,visibleHeight:D}),U?(0,x.jsx)(Hl,{children:(0,x.jsx)(Ps.A,{id:Z,passedRef:E,accessLevel:t,primaryButtonLabel:n,primaryButtonFunction:w,userPoints:_,pointsThresholdText:i,pointsThreshold:r,sponsor:J,title:W})}):(0,x.jsxs)(x.Fragment,{children:[P?(0,x.jsx)(Ll,{src:G,title:W,sponsor:J,resizeOnScroll:C,maxWidth:R.videoMaxWidth,withHeader:S,isScorebarSticky:V,projectPromoVideos:O,videoLed:e}):null,j?(0,x.jsx)(il,{src:G,image:d,title:W,description:m,sponsor:J,accessLevel:f,resizeOnScroll:h,withHeader:S,isScorebarSticky:V}):null,L?(0,x.jsx)(ml,{promoImageMobile:v,promoImageTablet:y,promoImageDesktop:b,promoLink:N}):null,$?(0,x.jsx)(xl,{items:A}):null]})]})};var zl=(0,p.memo)(Ml);const Ul=m.Ay.div.withConfig({displayName:"root__Wrapper"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;var Vl=function(){const e=(()=>{const e=(0,p.useRef)(null);return(0,$i.A)(e,"topNavigation"),e})(),t=(()=>{const{elementsDisplayMechanic:e=u.uy.TIMELINE,timelineMode:t={},cardMode:n={},tabsMode:r={},hubMode:i={}}=(0,p.useContext)(fo),a=(0,p.useMemo)(()=>{switch(e){case u.uy.TIMELINE:return t;case u.uy.CARD:return n;case u.uy.TABS:return r;case u.uy.HUB:return i;default:return t}},[e,t,n,r,i]);return{id:Dn.tD,elementsDisplayMechanic:e,...a}})(),{withPromo:n,withScoreBar:r,enableVideoLed:i,videoLedSrc:a,playerWidth:o,columnCollapse:s}=(()=>{const{promoType:e=_o.NONE,showScoreBar:t=!1,enableVideoLed:n=!1,videoLedSrc:r="",videoLedPlayerWidth:i=350,videoLedColumnCollapse:a}=(0,p.useContext)(fo),o=(0,c.d4)(jr);return{withPromo:e!==_o.NONE&&!o,withScoreBar:t&&!o,enableVideoLed:n,videoLedSrc:r,playerWidth:i,columnCollapse:a}})(),[l,d]=(0,p.useState)(!1);return(0,Ci.A)(),(0,x.jsxs)(Ul,{ref:e,children:[r?(0,x.jsx)(vo,{}):null,n?(0,x.jsx)(zl,{videoLed:i}):null,i?(0,x.jsx)(ks,{videoLedSrc:a,playerWidth:o,columnCollapse:s,container:t}):(0,x.jsx)(ls,{container:t,hasPageScrolled:l,setHasPageScrolled:d})]})};const Fl=m.Ay.main.withConfig({displayName:"upcoming-event__Wrapper"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  font-family: var(--font-family-main);
  color: #fff;
`,Gl=(0,m.Ay)(be.Yk).withConfig({displayName:"upcoming-event__Title"})`
  margin-bottom: 30px;
`,Wl=((0,m.Ay)(be.qz).withConfig({displayName:"upcoming-event__Message"})`
  margin-bottom: 20px;
`,m.Ay.img.withConfig({displayName:"upcoming-event__Image"})`
  width: 100%;
  max-width: 726px;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #606060;
  overflow: hidden;
`),Zl=()=>{const{texts:{titleText:e},event:{startAt:t},pickem:{picksComingSoonImage:n}}={texts:(0,c.d4)(S.H6).upcomingEvent||{},pickem:(0,c.d4)(S.H6).pickem||{},event:(0,c.d4)(pe.Zc)};return null===t?null:(0,x.jsx)(Fl,{children:n?(0,x.jsx)(Wl,{src:n}):(0,x.jsx)(Gl,{children:e})})};var Jl=(0,p.memo)(Zl),Kl=()=>{const e=new URLSearchParams(window.location.search).get("element"),{isDomestic:t}=(0,on.A)();return(0,x.jsxs)(Dt.dO,{children:[(0,x.jsx)(Dt.qh,{path:Sn.b.NO_EVENT,component:oa}),(0,x.jsx)(Dt.qh,{path:Sn.b.UPCOMING_EVENT,component:Jl}),(0,x.jsx)(Dt.qh,{path:Sn.b.NO_CONNECTION,component:qi}),(0,x.jsx)(Dt.qh,{path:Sn.b.USER,component:Vi}),(0,x.jsx)(Dt.qh,{path:Sn.b.STORAGE_CHANGED,component:Pi}),t&&(0,x.jsx)(Dt.qh,{path:Sn.b.PRIZING,component:Ai}),(0,x.jsx)(Dt.qh,{path:Sn.b.TUTORIAL,component:li}),(0,x.jsx)(Dt.qh,{path:Sn.b.ROOT,children:e?(0,x.jsx)(Fi.A,{elementId:e}):(0,x.jsx)(Vl,{})})]})},Ql=n("iYQB"),Yl=n("eiof"),Xl=m.AH`
  img {
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`,ql=m.AH`
  #loader {
    position: fixed;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 70px;

    text-align: center;
    transform: translate(-50%, -50%);

    div {
      width: 18px;
      height: 18px;
      margin: 2px;
      background-color: var(--urlColor, #e3e3e3);
      border-radius: 100%;
      display: inline-block;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both;

      &:nth-child(1) {
        animation-delay: -0.32s;
      }

      &:nth-child(2) {
        animation-delay: -0.16s;
      }

      &:nth-child(3) {
        left: 56px;
        animation-delay: 0;
      }
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`,ed=n("LrLE");m.DU`
  ${ed.A};
  ${Xl};

  * {
    box-sizing: border-box;
  }
`;var td=m.DU`
  ${ed.A};
  ${ql};
  ${Xl};

  :root {
    ${({specialStyles:e})=>e.bgImageMobile&&m.AH`
        --globalBackgroundImageMobile: url(${e.bgImageMobile}) !important;
      `}
    ${({specialStyles:e})=>e.bgImageTablet&&m.AH`
        --globalBackgroundImageTablet: url(${e.bgImageTablet}) !important;
      `}
    ${({specialStyles:e})=>e.bgImageDesktop&&m.AH`
        --globalBackgroundImageDesktop: url(${e.bgImageDesktop}) !important;
      `}
    --globalBackgroundImagePosition: 0 0 !important;
    --globalBackgroundImageSize: 100% 100% !important;
    --globalBackgroundImageAttachment: fixed !important;

    ${({specialStyles:e})=>e.accentColor&&m.AH`
        --fkCollapseButtonColor: ${e.accentColor};
        --fkTutorialBorderColor: ${e.accentColor};
        --fkProgressBarSpecialColor: ${e.accentColor};
      `}

    ${({specialStyles:e})=>e.prizingCardBackgroundColor&&m.AH`
        --fkPrizingSpecialBackgroundColor: ${e.prizingCardBackgroundColor};
      `}

    ${({specialStyles:e})=>e.prizingCardBorderColor&&m.AH`
        --fkPrizingSpecialBorderColor: ${e.prizingCardBorderColor};
      `}
      
    ${({specialStyles:e})=>e.prizingCardTextColor&&m.AH`
        --fkPrizingCardTextColor: ${e.prizingCardTextColor};
      `}

    --viewport-height: ${({viewportHeight:e})=>e}px;
    --urlBackgroundGradient: var(--urlBackground),var(--urlBackground);
  }

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  .consent-btn {
    appearance: none;
    padding: 0px;
    border: 0px;
    border-radius: 0px;
    background: transparent;
    font-family: Roboto;
    font-size: 10px;
    outline: none;
    text-transform: none;
    text-decoration: none;
    color: rgb(33, 153, 232);
    cursor: pointer;
  }

  body {
    color: var(--color-0-0);
    transition: background-color 0.3s;
    position: relative;

    &::after {
      height: 100vh;
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 60%,
        rgba(0, 0, 0, 1) 100%
      );
      pointer-events: none;
      z-index: 0;
    }

    ${gr.A`
    --gradient-direction: var(--bodyBackgroundGradientDirection, var(--gradient-direction-default));
    --gradient-image: var(--globalBackgroundImageMobile, var(--blank-image));
    --gradient-color: var(--bodyBackgroundColor, var(--gradient-default));
    --position: var(--globalBackgroundImagePosition);
    --repeat: var(--globalBackgroundImageRepeat);
    --attachment: var(--globalBackgroundImageAttachment);
    --size: var(--globalBackgroundImageSize);
  `}

  ${xe.A.md`
    ${gr.A`
      --gradient-image: var(--globalBackgroundImageTablet, var(--globalBackgroundImageMobile, var(--blank-image)));
      --gradient-direction: var(--bodyBackgroundGradientDirection, var(--gradient-direction-default));
      --gradient-color: var(--bodyBackgroundColor, var(--gradient-default));
      --position: var(--globalBackgroundImagePosition);
      --repeat: var(--globalBackgroundImageRepeat);
      --attachment: var(--globalBackgroundImageAttachment);
      --size: var(--globalBackgroundImageSize);
    `};
  `};

  ${xe.A.lg`
    ${gr.A`
      --gradient-image: var(--globalBackgroundImageDesktop, var(--globalBackgroundImageTablet, var(--globalBackgroundImageMobile, var(--blank-image))));
      --gradient-direction: var(--bodyBackgroundGradientDirection, var(--gradient-direction-default));
      --gradient-color: var(--bodyBackgroundColor, var(--gradient-default));
      --position: var(--globalBackgroundImagePosition);
      --repeat: var(--globalBackgroundImageRepeat);
      --attachment: var(--globalBackgroundImageAttachment);
      --size: var(--globalBackgroundImageSize);
    `};
  `};

    touch-action: manipulation;

    &.loaded {
      #loader {
        display: none;
      }

      #app {
        display: block;
      }
    }

    &.block-scroll {
      overflow: hidden;
    }
  }

  #modal {
    position: fixed;
    z-index: 103;
  }

  #app {
    height: 100%;
    display: none;
    text-align: center;
    font-family: var(--font-family-main);
    font-weight: var(--font-weight-regular);
    letter-spacing: var(--letter-spacing);
    position: relative;
    z-index: 2;
  }

  .select2-container {
    font-family: var(--font-family-main);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


  input[type=number] {
    -moz-appearance: textfield;
  }

`;te().extend(se()),te().extend(ae()),te().extend(re());const nd=({condition:e,children:t,passedRef:n})=>e?(0,x.jsx)("div",{ref:n,children:t}):t;var rd=()=>{const[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(null),[i,a]=(0,p.useState)(null),{isInitialised:o,withHeader:s,withFooter:l}=zr(),d=(0,Dt.W6)(),u=(()=>{const[e,t]=(0,p.useState)(window.innerHeight);return(0,p.useEffect)(()=>{const e=(0,Ar.nF)(()=>{t(window.innerHeight)},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),e})(),m=(0,c.d4)(S.H6),g=(0,c.d4)(S.G_),{eventSettings:f}=Er(),h=(0,c.d4)(pe.Zc),v=(()=>{const[e,t]=(0,p.useState)(window.innerWidth||0);return(0,p.useEffect)(()=>{const e=()=>{t(window.innerWidth)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e})(),y=(0,c.d4)(Lt.YV),b=(0,c.d4)(Lt.s3),N=y&&!b,A=(0,Dt.W5)({path:"/",strict:!0}).isExact,{isInReactNativeApp:C,isInIframe:O}=kr(),E=(0,Cr.um)(),{wrapperRef:w,headerRef:_,footerRef:k}=function(e=!1){const t=(0,p.useRef)(null),n=(0,p.useRef)(null),r=(0,p.useRef)(null),i=(0,p.useRef)(null),a=(0,c.d4)($r),o=(0,p.useRef)(null),{isInIframe:s,isInReactNativeApp:l,hasParentApp:d}=kr();return(0,p.useEffect)(()=>{let e=null;return e=new _r.default(e=>{requestAnimationFrame(()=>{e.forEach(e=>{const{width:a}=e.contentRect,c=t.current?.getBoundingClientRect().height||0,u=n.current?.getBoundingClientRect().height||0,p=r.current?.getBoundingClientRect().height||0,m=i.current?i.current.getBoundingClientRect().height+32:0,g=c+u+p,f=Number(a.toFixed(0)),h=Number(g.toFixed(0)),v=Number(m.toFixed(0)),y=(0,Ar.OW)(h,v),b={height:y,width:f};o.current+32!==y&&(o.current=y,s&&((e,t)=>{const n={action:e,payload:t};window.parent.postMessage(n,"*")})("fankitIframeResize",b),(d||l)&&(0,Cr.Sv)(b.width,b.height))})})}),t?.current&&e.observe(t.current),n?.current&&e.observe(n.current),r?.current&&e.observe(r.current),i?.current&&e.observe(i.current),()=>{e?.disconnect()}},[e,a,s,l,d]),{wrapperRef:t,headerRef:n,footerRef:r,usernameRef:i}}(o),P=!!new URLSearchParams(window.location.search).get("element"),j=(e=>{const t=e?.hubMode;return(0,p.useMemo)(()=>t?.containers?.some(e=>!0===e?.sticky),[t])})(f),{globalScripts:L,showHeader:$,showFooter:B,uploadedFonts:D,fkSpecialEvents:H,analytics:{adobeUrl:M=null}={}}=(0,p.useContext)(T.Ay),z=O||C||E;L&&L.length&&L.forEach(({src:e,async:t})=>{(0,Ar.Zh)(e,t)});const U=(0,c.wA)();(0,Cr.LS)()&&U((0,Yl.uw)()),function(e){const t=(0,p.useRef)({headElement:document.head,styleElement:document.createElement("style")}),{headElement:n,styleElement:r}=t.current;(0,p.useEffect)(()=>(r.innerHTML=e,n.appendChild(r),()=>{n.removeChild(r)}),[n,r,e])}(((e,t)=>{const n=(0,p.useMemo)(()=>{if(!e.variables||0===Object.keys(e.variables).length)return"";const{variables:{fkElementHighlightColor:n="#7763F2"}={}}=e,r={fkElementHighlightDarkenSingle:(0,Ur.e$)(.1,n),fkElementHighlightLightenSingle:(0,Ur.a)(.1,n)},i={...e.variables,...r},a=(0,Vr.f)(i),o=(e=>{const t=Object.entries(e);let n=":root {";return t.forEach(([e,t])=>{n+=`--${e}: ${t};`}),n+="}",n})(a),{fkPrimaryFont:s}=a;return 0!==Object.keys(a).length&&((e,t=[])=>{(!e||"Mulish"===e)&&(0,Ar.H4)("https://fonts.googleapis.com/css?family=Mulish:300,400,600,700,800&display=swap"),t.forEach(({font:e})=>(0,Ar.H4)(e))})(s,t.fonts),t.stylesBlock?`${o} ${t.stylesBlock}`:o},[e,t.stylesBlock,t.fonts]);return n})(g,m)),(e=>{if(!e)return;const t=e.map(wr).join("");(0,Ar.TD)(t,{"data-type":"font"})})(D),(()=>{const e=(0,c.wA)(),t=le.Project,n=(0,c.d4)(xn.Z0),r=new URLSearchParams(window.location.search).get("lang")?.toLowerCase(),i=t.getLanguages(),a=i.find(e=>e.default);(0,p.useEffect)(()=>{if(r&&i?.length)return i.some(e=>e.key===r)?void(r!==n&&(t.setCurrentLanguage(r),e((0,Gr.v2)(r)))):(e((0,Gr.v2)(a?.key)),void Fr.A.error("Language has not been configured"));e((0,Gr.v2)(t.getCurrentLanguage()))},[])})(),(0,I.Bu)(M);const V=s&&!P&&$,F=l&&!P&&B;(0,p.useEffect)(()=>{h?.id&&h.id!==i&&(a(h.id),r(te().utc(1e3*h.startAt).format("YYYY-MM-DD")))},[h,i]),(0,p.useEffect)(()=>{Boolean(window.localStorage.getItem(xr))||d.push(Sn.b.TUTORIAL)},[d]);const G=(0,p.useMemo)(()=>{if(!h)return{boxShadow:void 0,accentColor:void 0,bgImageMobile:void 0,bgImageTablet:void 0,bgImageDesktop:void 0,topDecorationImage:void 0,prizingCardTextColor:void 0,prizingCardBorderColor:void 0,prizingCardBackgroundColor:void 0};const e=(H||[])?.find(e=>e.events?.some(e=>e.eventId===h.id));if(!e)return{boxShadow:void 0,accentColor:void 0,bgImageMobile:void 0,bgImageTablet:void 0,bgImageDesktop:void 0,topDecorationImage:void 0,prizingCardTextColor:void 0,prizingCardBorderColor:void 0,prizingCardBackgroundColor:void 0};const t=e.bgImage.find(e=>"mobile"===e.breakpoint)?.image,n=e.bgImage.find(e=>"tablet"===e.breakpoint)?.image,r=e.bgImage.find(e=>"desktop"===e.breakpoint)?.image;return{boxShadow:e.boxShadow,accentColor:e.accentColor,bgImageMobile:t,bgImageTablet:n,bgImageDesktop:r,topDecorationImage:e.containerTopDecorationImage,prizingCardTextColor:e.prizingCardTextColor,prizingCardBorderColor:e.prizingCardBorderColor,prizingCardBackgroundColor:e.prizingCardBackgroundColor}},[H,h]),W=(e,t)=>{A||d.push(Sn.b.ROOT),r(e),t&&t!==h.id&&(a(t),U((0,Ql.dh)(t))),U((0,Wr.DD)())},Z=()=>{t(!0);const e=(0,I.oJ)(Or.A.RULES_CLICK,{});(0,I.u4)(e)},J=m?.adverts?.find(e=>e.position===Dn.SO.TOP),K=m?.adverts?.find(e=>e.position===Dn.SO.MARKETING),Q=m?.adverts?.find(e=>e.position===Dn.SO.BOTTOM),Y=J||K,X=v>=968,q="game"===h?.settings?.gameType,ee="weekly"===h?.settings?.gameType;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(td,{viewportHeight:u,specialStyles:G}),(0,x.jsxs)(fr,{children:[V?(0,x.jsx)(hr,{$sticky:j,ref:_,children:(0,x.jsx)(Mn,{selected:n,onChangeDate:W})}):null,(0,x.jsx)(me,{selectedEvent:i,onChange:W}),A&&ee?(0,x.jsx)(ir,{selectedDate:n}):null,A&&q?(0,x.jsx)(De,{}):null,G.topDecorationImage?(0,x.jsx)(yr,{children:(0,x.jsx)(br,{$image:G.topDecorationImage})}):null,Y?(0,x.jsxs)(vr,{children:[J&&(0,x.jsx)(Bn.A,{advert:J,pos:"bnr_atf_01"}),K&&X&&(0,x.jsx)(Bn.A,{advert:K,pos:"mod_ea1a0b191"})]}):null,A&&ee?(0,x.jsx)(Qn,{handleRules:Z}):null,o?(0,x.jsx)(nd,{condition:z,passedRef:w,children:(0,x.jsx)(Kl,{})}):(0,x.jsx)("div",{}),A&&q?(0,x.jsx)(Qn,{handleRules:Z}):null,Q?(0,x.jsx)(vr,{children:(0,x.jsx)(Bn.A,{advert:Q,pos:"bnr_btf_01"})}):null,F?(0,x.jsx)("div",{ref:k,children:(0,x.jsx)(he,{handleRules:Z})}):null]}),e&&(0,x.jsx)(mr,{handleClose:()=>t(!1)}),N&&(0,x.jsx)(R,{})]})},id=n("nSLO"),ad=n("i+O1");var od=n("UZ9f"),sd=n("TZC7");const ld=(0,p.createContext)({}),{Provider:dd,Consumer:cd}=ld,ud=e=>e&&Object.keys(e).length>0;var pd=n("RKrc"),md=n("oKPG"),gd=n("GHov"),fd=n("PE0h"),hd=n("Ndb8"),vd=n("5hCX");const yd=new md.D,bd=()=>{const e={};return{getItem:t=>{try{return e[t]}catch(e){return Fr.A.error(e),null}},setItem:(t,n)=>{try{e[t]=n}catch(e){Fr.A.error(e)}}}};yd.writeQuery({query:vd.ER,data:{reactions:[]}});var xd=n("5eRZ"),Nd=n("SDxj");var Ad=n("f3JF");const Cd=m.Ay.div.withConfig({displayName:"style__StyleWrapper"})`
  touch-action: none;

  ${Ii.Z}

  ${Ad.K}

  ${Ii.C}
`,Od=({children:e,style:t,styleRef:n})=>(0,x.jsx)(Cd,{className:"dnd",style:{...t},ref:n,children:e});var Td=(0,p.memo)(Od),Id=n("SUpI"),Ed=n("BzQo");const wd=()=>{const e=(0,Nd.gx)(),t=(0,p.useRef)(null);if(!e.display)return null;const{item:n,style:r,itemType:i}=e,{width:a,height:o,text:s,isRevealed:l,children:d}=n;return(0,x.jsxs)(Td,{styleRef:t,style:{...r,width:a,height:o,zIndex:1e4,background:"transparent"},children:[i===u.j1.SORT&&(0,x.jsx)(Id.A,{isRevealed:l,isSelected:!0,withDraggable:!0,withIcon:!0,withHover:!0,children:s}),i===u.j1.LETTER&&(0,x.jsx)(Ed.A,{withHover:!0,children:d})]})};var _d,kd=(e=>{const t=t=>{const n=(0,c.d4)(xn.jb)["content-tracker"]??null,[r,i]=(0,p.useState)(null);(0,p.useEffect)(()=>{(async()=>{if(!n)return;const e=await(async({uri:e})=>{const t=(0,gd.$)({uri:e,credentials:"same-origin"});return await(0,hd._D)({cache:yd,storage:(0,Rr.u)()?window.localStorage:bd()}),new fd.R({cache:yd,link:t,queryDeduplication:!1,resolvers:{Mutation:{addLastReaction(e,{reactionKey:t,elementId:n},{cache:r}){const{reactions:i}=r.readQuery({query:vd.ER}),a={reactions:{...i,[n]:t}};return r.writeQuery({query:vd.ER,data:a}),a}}},defaultOptions:{watchQuery:{fetchPolicy:"cache-and-network"}}})})({uri:n});i(e)})()},[n]);const a=(0,p.useMemo)(()=>(0,x.jsx)(pd.X,{client:r,children:(0,x.jsx)(e,{...t})}),[r,t]);return r?a:(0,x.jsx)(e,{...t})};return(0,p.memo)(t)})((_d=()=>{const[e,t]=(0,p.useState)(null),{appSetup:n,appStyles:r,eventSettings:i,eventStyles:a}=Er(),o=ud(n)&&ud(r),s=(0,p.useCallback)(()=>{window.localStorage.removeItem(`pending_vote_${e}`),t(null)},[e,t]);return(()=>{const e=(0,c.wA)(),t=(0,p.useRef)(!1),n=(0,c.d4)(xn.H3),r=(0,c.d4)(xn.Ln),i=(0,c.d4)(Lr),a=(0,c.d4)(xn.Oe),o=(0,Cr.LS)();(0,p.useEffect)(()=>{(async()=>{if(!a)return;const s=await(0,od.jK)({host:r,projectId:n}),l=await(0,sd.Vr)(s);o&&!t.current&&(t.current=!0,e((0,Yl.uw)())),s&&l&&!i&&e((0,Yl.Ts)())})()},[e,r,n,o,a,i])})(),function(){const e=(0,c.wA)(),t=(0,c.d4)(Br.Zc),n=(0,c.d4)(Lt.YV),r=(0,p.useRef)(Date.now()),i=()=>"hidden"===document.visibilityState||document.hidden;(0,p.useEffect)(()=>{e((0,Mr.Ts)())},[e]),(0,p.useEffect)(()=>{const t=()=>{i()&&(r.current=Date.now())},n=()=>{if(i())return;const t=Date.now()-r.current;if(t>3e4&&navigator.onLine)return Fr.A.log(`Reloading the page because it was hidden for ${Math.round(t/1e3)}s (threshold: 30s).`),void window.location.reload();r.current=Date.now(),e((0,Mr.Ts)())},a=()=>{ad.A.IS_SAFARI||ad.A.IS_IOS||("hidden"===document.visibilityState||document.hidden?t():"visible"===document.visibilityState&&n())},o=e=>{e.persisted||n()},s=()=>{t()},l=()=>{i()||n()},d=()=>{i()?t():r.current=Date.now()},c=()=>{Date.now()-r.current>3e4&&(Fr.A.log("Internet reconnected. Reloading the page."),window.location.reload())};return(ad.A.IS_SAFARI||ad.A.IS_IOS)&&(window.addEventListener("pageshow",o),window.addEventListener("pagehide",s),window.addEventListener("focus",l),window.addEventListener("blur",d)),document.addEventListener("visibilitychange",a),window.addEventListener("online",c),i()||(r.current=Date.now()),()=>{(ad.A.IS_SAFARI||ad.A.IS_IOS)&&(window.removeEventListener("pageshow",o),window.removeEventListener("pagehide",s),window.removeEventListener("focus",l),window.removeEventListener("blur",d)),document.removeEventListener("visibilitychange",a),window.removeEventListener("online",c)}},[n,t,e])}(),!!o&&(0,x.jsx)(m.ID,{enableVendorPrefixes:!0,children:(0,x.jsx)(T.Ul,{value:n,children:(0,x.jsx)(Rl.TI,{value:r,children:(0,x.jsx)(mo,{value:i,children:(0,x.jsx)(dd,{value:a,children:(0,x.jsxs)(id.rp,{value:{accessGateElementId:e,setAccessGate:t},children:[(0,x.jsx)(rd,{}),!!e&&(0,x.jsx)(E,{handleClose:s})]})})})})})})},function(e){return(0,x.jsxs)(Nd.QP,{options:xd.P,children:[(0,x.jsx)(_d,{...e}),(0,x.jsx)(wd,{})]})})),Pd=n("QBC/");window.jQuery=$,window.$=$;const jd=new a.E;u.VI.HOTJAR_HJID&&d.hotjar.initialize(parseInt(u.VI.HOTJAR_HJID,10),6),u.eF.SENTRY_DSN&&i.T({dsn:u.eF.SENTRY_DSN,integrations:[(0,r.dp)(Pd.b6)],tracesSampleRate:1});const Ld=document.getElementById("app");(0,l.H)(Ld).render((0,x.jsx)(c.Kq,{store:Pd.Ay,children:(0,x.jsx)(o.Ht,{client:jd,children:(0,x.jsx)(s.Ny,{history:Pd.b6,children:(0,x.jsx)(kd,{})})})}))},fjaf:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n("UHZw"),i=function(e){return e.GRADIENT="Gradient",e.GRADIENT_NEW="-gradient",e.PADDINGS="PaddingsObject",e.OBJECT="Object",e.MAX_WIDTHS="MaxWidths",e.BG_IMAGE="BackgroundImage",e.BG_IMAGE_MOBILE="BackgroundImageMobile",e.BG_IMAGE_TABLET="BackgroundImageTablet",e.BG_IMAGE_DESKTOP="BackgroundImageDesktop",e.PX_UNIT="-px",e}(i||{});const a=e=>{if(!e)return{};const t={};return Object.entries(e).forEach(([e,n])=>{let a,o,s,l;switch(!0){case(0,r.ZP)(e,i.GRADIENT_NEW):o=(0,r.hm)(e,i.GRADIENT_NEW),l=(0,r.vQ)(n),l&&(t[o]=l);break;case(0,r.ZP)(e,i.GRADIENT):o=(0,r.hm)(e,i.GRADIENT),l=(0,r.vQ)(n),l&&(t[o]=l);break;case(0,r.ZP)(e,i.PADDINGS):n.forEach(({screen:n,unit:o,vertical:s,horizontal:l})=>{a=`${(0,r.hm)(e,i.PADDINGS)}Paddings${(0,r.ZH)(n)}`,t[`${a}V`]=`${s}${o}`,t[`${a}H`]=`${l}${o}`});break;case(0,r.ZP)(e,i.MAX_WIDTHS):(n?.object?n.object:n).forEach(n=>{const{screen:i,...o}=n,s=Object.values(o)[0];a=`${e}${(0,r.ZH)(i)}`,i&&void 0!==s&&(t[a]=`${s}`)});break;case(0,r.ZP)(e,i.OBJECT):n.forEach(({screen:n,...o})=>{const s=Object.values(o)[0];a=`${(0,r.hm)(e,i.OBJECT)}${(0,r.ZH)(n)}`,n&&void 0!==s&&(t[a]=`${s}`)});break;case(0,r.ZP)(e,i.BG_IMAGE):Array.isArray(n)?n.forEach(({breakpoint:n,image:i})=>{n&&i&&(t[`${e}${(0,r.ZH)(n)}`]=`url(${i})`)}):t[e]=`url(${n})`;break;case(0,r.ZP)(e,i.BG_IMAGE_MOBILE)||(0,r.ZP)(e,i.BG_IMAGE_TABLET)||(0,r.ZP)(e,i.BG_IMAGE_DESKTOP):t[e]=`url(${n})`;break;case(0,r.ZP)(e,i.PX_UNIT):s=(0,r.hm)(e,i.PX_UNIT),t[s]=`${n}px`;break;default:t[e]=n}}),t}},hDYc:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n("Xrb3");const{setSettings:i}=(0,r.A)("SET_SETTINGS",{prefix:"project"})},"i+O1":function(e,t){"use strict";t.A={IS_IOS:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.navigator.userAgent.includes("MSIE"),IS_SAFARI:/Safari/.test(navigator.userAgent)&&!/Chrome|CriOS/.test(navigator.userAgent)}},iYQB:function(e,t,n){"use strict";n.d(t,{Av:function(){return d},Uk:function(){return c},cJ:function(){return p},dh:function(){return l},eZ:function(){return g},hZ:function(){return i},n:function(){return u},sg:function(){return s},vh:function(){return m},wC:function(){return a},yo:function(){return o}});var r=n("Xrb3");const{set:i,unset:a,update:o,fetched:s,eventSwitch:l,resetEvent:d,changeState:c,createElement:u,updateElement:p,revokeElement:m,replay:g}=(0,r.A)("SET","UNSET","UPDATE","FETCHED","EVENT_SWITCH","RESET_EVENT","CHANGE_STATE","CREATE_ELEMENT","REVOKE_ELEMENT","UPDATE_ELEMENT","REPLAY",{prefix:"event"})},imju:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n("Xrb3");const{setStoredPositions:i}=(0,r.A)("SET_STORED_POSITIONS",{prefix:"ladder"})},isB0:function(e,t,n){var r=n("mXGw");function i(e){return r.createElement("svg",e,r.createElement("path",{d:"M2.25 4.75C3.07031 4.75 3.75 4.09375 3.75 3.25C3.75 2.42969 3.07031 1.75 2.25 1.75C1.40625 1.75 0.75 2.42969 0.75 3.25C0.75 4.09375 1.40625 4.75 2.25 4.75ZM12.75 4.75C13.5703 4.75 14.25 4.09375 14.25 3.25C14.25 2.42969 13.5703 1.75 12.75 1.75C11.9062 1.75 11.25 2.42969 11.25 3.25C11.25 4.09375 11.9062 4.75 12.75 4.75ZM13.5 5.5H12C11.5781 5.5 11.2031 5.6875 10.9219 5.94531C11.8828 6.46094 12.5391 7.39844 12.7031 8.5H14.25C14.6484 8.5 15 8.17188 15 7.75V7C15 6.17969 14.3203 5.5 13.5 5.5ZM7.5 5.5C8.92969 5.5 10.125 4.32812 10.125 2.875C10.125 1.44531 8.92969 0.25 7.5 0.25C6.04688 0.25 4.875 1.44531 4.875 2.875C4.875 4.32812 6.04688 5.5 7.5 5.5ZM9.28125 6.25H9.09375C8.60156 6.48438 8.0625 6.625 7.5 6.625C6.91406 6.625 6.375 6.48438 5.88281 6.25H5.69531C4.19531 6.25 3 7.46875 3 8.96875V9.625C3 10.2578 3.49219 10.75 4.125 10.75H10.875C11.4844 10.75 12 10.2578 12 9.625V8.96875C12 7.46875 10.7812 6.25 9.28125 6.25ZM4.05469 5.94531C3.77344 5.6875 3.39844 5.5 3 5.5H1.5C0.65625 5.5 0 6.17969 0 7V7.75C0 8.17188 0.328125 8.5 0.75 8.5H2.27344C2.4375 7.39844 3.09375 6.46094 4.05469 5.94531Z",fill:"currentColor"}))}i.defaultProps={width:"15",height:"11",viewBox:"0 0 15 11",fill:"none"},e.exports=i,i.default=i},jSwI:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var r=n("Xrb3");const{setData:i}=(0,r.A)("SET_DATA",{prefix:"freestyle-trivia"})},k2BZ:function(e,t,n){"use strict";n.d(t,{Z:function(){return i},n:function(){return a}});const r="locked-content";let i=function(e){return e.LOGIN="login",e.POINTS="points",e}({});const a={BLOCK:r,POINTS_TITLE:`${r}__icon`}},kJnb:function(e,t,n){"use strict";var r=n("prkb"),i=n("Wu6c");const a=Object.keys(i.LO).reduce((e,t)=>(e[t]=(e,...n)=>r.AH`
    @media (min-width: ${i.LO[t]}) {
      ${(0,r.AH)(e,...n)};
    }
  `,e),{});t.A=a},kX8C:function(e,t,n){"use strict";var r=n("mXGw"),i=n("+bMA"),a=n("TZC7"),o=n("1igH"),s=n("k2BZ"),l=n("Wu6c"),d=n("s4Z8"),c=n("2je+"),u=n("oQhA"),p=n("yLjE"),m=n("6WEz");t.A=(e,t)=>{const n=(0,i.wA)(),g=window.location!==window.parent.location,f=(0,o.jg)(),{userPoints:h}=(0,u.A)(),{lockedContentPrimaryButtonUrl:v}=(0,i.d4)(m.H6),y=(0,r.useRef)(null),b=(0,r.useMemo)(()=>e===l.KB.POINTS?s.Z.POINTS:s.Z.LOGIN,[e]),x=(0,r.useCallback)(()=>{const e={[s.Z.LOGIN]:async()=>{if(v){const e={url:v};g||f?(0,d.x)({action:"redirectRequest",payload:e,parentApplication:f}):window.location=e.url}else if(f){const e=(0,a.Vr)();await(0,a.D8)(e)}else n((0,p.R6)(t))},default:()=>{}};(e[b]||e.default)()},[b,v,g,f,n,t]);return(0,c.A)(y,"lockedContent"),[{ref:y,primaryButtonFunction:x,userPoints:h}]}},klPl:function(e,t,n){"use strict";n.d(t,{b:function(){return r}});const r={STORAGE_CHANGED:"/storage-changed"}},"l/jD":function(e,t,n){"use strict";n.d(t,{G1:function(){return l},H3:function(){return o},K$:function(){return d},Ln:function(){return a},Oe:function(){return s},Z0:function(){return p},ak:function(){return u},jb:function(){return c},kS:function(){return m}});var r=n("kM8z");const i=e=>e.lvis,a=e=>i(e).host,o=e=>i(e).project,s=e=>i(e).connected,l=e=>i(e).disconnected,d=e=>i(e).delayBeforeReconnect,c=e=>i(e).services,u=(e,t)=>c(e)[t],p=e=>i(e).language,m=(0,r.Mz)([i],({presenceCounter:e})=>e)},lvZi:function(e,t,n){"use strict";n.d(t,{A:function(){return f}});const r="suspense-loader",i={BLOCK:r,INNER:`${r}__inner`,DOTS:`${r}__dots`};var a=n("prkb"),o=n("NBcf"),s=n("ZYfE");const l=a.i7`
  0% {
    background-color: var(--fkSuspenseLoaderDotsColor, var(--element-title-default));  
  }
  50%, 100% {
    background-color:var(--fkSuspenseLoaderDotsColor, var(--element-title-default));
    opacity: 0.2;
  }
`,d=a.AH`
  background-color: var(--fkSuspenseLoaderDotsColor, var(--element-title-default));
  width: 14px;
  height: 14px;
  border-radius: 14px;
  animation: ${l} 1s infinite linear alternate;
`,c=a.AH`
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
`,u=a.Ay.div.withConfig({displayName:"suspense-loader__FlashingDots"})`
  position: relative;
  ${d}

  animation-delay: 0.5s;

  &:before {
    ${d}
    ${c}
    left: -22px;
    animation-delay: 0s;
  }

  &:after {
    ${d}
    ${c}
    left: 22px;
    animation-delay: 1s;
  }
`,p=a.Ay.div.withConfig({displayName:"suspense-loader__Wrapper"})``,m=a.Ay.div.withConfig({displayName:"suspense-loader__Inner"})`
  ${o.Z}
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  height: 100%;

  ${s.A`
    --gradient-direction: var(--gradientDirection, var(--element-background-direction-default));
    --gradient-color: var(--fkSuspenseLoaderInnerColor, --backgroundColor, var(--element-background-default)));
  `};
`;var g=n("oYCi"),f=({children:e,className:t})=>(0,g.jsxs)(p,{className:`${i.BLOCK} ${t??""}`,children:[(0,g.jsx)(m,{className:i.INNER,children:(0,g.jsx)(u,{className:i.DOTS})}),e]})},"m+jG":function(e,t){"use strict";var n=function(e){return e.PICKEM_START="pickem_start",e.PICKEM_COMPLETE="pickem_complete",e.HOME_PAGEVIEW="home_pageview",e.PRIZING_PAGEVIEW="prizing_pageview",e.CHICLET_PAGEVIEW="chiclet_pageview",e.LEADERBOARD_PAGEVIEW="leaderboard_pageview",e.GROUPS_PAGEVIEW="groups_pageview",e.GROUP_DETAILS_PAGEVIEW="group_details_pageview",e.HOW_TO_PLAY_PAGEVIEW="how_to_play_pageview",e.HOW_TO_PLAY_SLIDE_PAGEVIEW="how_to_play_slide_pageview",e.RULES_PAGEVIEW="rules_pageview",e.AGE_GATE_PAGEVIEW="age_gate_pageview",e.AUTHENTICATED="authenticated",e.EDIT_NAME="edit_name",e.SIGN_IN="sign_in",e.SIGN_UP="sign_up",e.SIGN_OUT="sign_out",e.CALENDAR_CLICK="calendar_click",e.CALENDAR_DATE="calendar_date",e.CHICLET_CLICK="chiclet_click",e.CHICLET_DISMISS="chiclet_dismiss",e.INFO_LEADERBOARD_CLICK="info_leaderboard_click",e.INFO_DISMISS="info_dismiss",e.QUESTION_SUBMISSION="question_submission",e.SPONSOR_CLICK="sponsor_click",e.BROADCASTER_CLICK="broadcaster_click",e.ACQUISITION_CLICK="acquisition_click",e.TODAY_CLICK="today_click",e.CREATE_GROUP="create_group",e.JOIN_GROUP="join_group",e.INVITE_MEMBERS="invite_members",e.SHARE="share",e.TUTORIAL_NAVIGATION="tutorial_navigation",e.TUTORIAL_CLOSE="tutorial_close",e.TUTORIAL_PLAY="tutorial_play",e.TUTORIAL_CLICK="tutorial_click",e.RULES_CLICK="rules_click",e}(n||{});t.A=n},msSd:function(e,t,n){"use strict";n.d(t,{Ul:function(){return i}});const r=(0,n("mXGw").createContext)({}),{Provider:i,Consumer:a}=r;t.Ay=r},nSLO:function(e,t,n){"use strict";n.d(t,{rp:function(){return i}});const r=(0,n("mXGw").createContext)({}),{Provider:i,Consumer:a}=r;t.Ay=r},nZhW:function(e,t,n){"use strict";n.d(t,{$_:function(){return o},cV:function(){return a},l2:function(){return i}});let r="";const i=e=>{if(!Object.prototype.hasOwnProperty.call(e,"gamification"))return"";const t=e.gamification.find(({name:e})=>"endpoint"===e);return t?t.data.replace(/\/$/,""):""},a=e=>{r=e},o=()=>r},nsqW:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});const r=e=>0===Object.keys(e).length},oIgW:function(e,t,n){"use strict";n.d(t,{A:function(){return d},U:function(){return c}});var r=n("prkb"),i=n("UHZw"),a=n("Wu6c"),o=n("kJnb");const s=(e,t)=>t.find(t=>t.screen===e)?.width&&`max-width: ${t.find(t=>t.screen===e)?.width}px;`;function l(e){return`max-width: calc(${e}* 1px);`}const d=e=>{switch(e){case a.P$.MOBILE_LANDSCAPE:return l((0,i.Ot)(a.P$.MOBILE_LANDSCAPE,"--fkElementMaxWidths"));case a.P$.TABLET_PORTRAIT:return l((0,i.Ot)(a.P$.TABLET_PORTRAIT,"--fkElementMaxWidths"));case a.P$.TABLET_LANDSCAPE:return l((0,i.Ot)(a.P$.TABLET_LANDSCAPE,"--fkElementMaxWidths"));case a.P$.DESKTOP:return l((0,i.Ot)(a.P$.DESKTOP,"--fkElementMaxWidths"));default:return l((0,i.Ot)(a.P$.MOBILE_PORTRAIT,"--fkElementMaxWidths"))}},c=r.AH`
  ${d(a.P$.MOBILE_PORTRAIT)}

  ${({$maxWidths:e})=>e&&s(a.P$.MOBILE_PORTRAIT,e)}

  

  ${o.A.ssm(r.AH`
      ${d(a.P$.MOBILE_LANDSCAPE)};
    `,({$maxWidths:e})=>e&&s(a.P$.MOBILE_LANDSCAPE,e))}


  ${o.A.md(r.AH`
      ${d(a.P$.TABLET_PORTRAIT)};
    `,({$maxWidths:e})=>e&&s(a.P$.TABLET_PORTRAIT,e))}


  ${o.A.lg(r.AH`
      ${d(a.P$.TABLET_LANDSCAPE)};
    `,({$maxWidths:e})=>e&&s(a.P$.TABLET_LANDSCAPE,e))}

  ${o.A.xl(r.AH`
      ${d(a.P$.DESKTOP)};
    `,({$maxWidths:e})=>e&&s(a.P$.DESKTOP,e))}
`},oQhA:function(e,t,n){"use strict";var r=n("kM8z"),i=n("+bMA"),a=n("dUZd"),o=n("/DvN");const s=(0,r.Mz)(a.OW,a.YV,a.lC,o.$p,(e,t,n,r)=>({isPending:e,isLoggedIn:t,isLoggedOut:n,userPoints:r}));t.A=()=>(0,i.d4)(s)},oRQk:function(e,t,n){"use strict";let r=function(e){return e.LOG="log",e.INFO="info",e.WARN="warn",e.ERROR="error",e}({});const i=[r.LOG,r.INFO,r.WARN,r.ERROR],a={};i.forEach(e=>{a[e]=(...e)=>{}}),t.A=a},owEX:function(e,t,n){"use strict";n.d(t,{$:function(){return i},Q:function(){return a}});var r=n("prkb");const i=r.Ay.div.withConfig({displayName:"progress__PercentWrapper"})`
  opacity: ${({$show:e})=>e?"1":"0"};
  transition: opacity 0.5s;
  position: absolute;
  right: 8px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: flex;
  align-items: center;
`,a=r.Ay.div.withConfig({displayName:"progress__Percent"})``},p3en:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n("Xrb3");const{setStoredPositions:i}=(0,r.A)("SET_STORED_POSITIONS",{prefix:"podium"})},qvNf:function(e,t,n){"use strict";n.d(t,{FK:function(){return d},Kc:function(){return l},MW:function(){return c},mn:function(){return u},nK:function(){return p}});var r=n("dIqr"),i=n("wzRx"),a=n("vP7M");const o="onClose",s="onVote",l=e=>e===r.Trivia.STATE_STARTED,d=e=>e!==r.Trivia.STATE_STARTED,c=({triviaInstance:e,userVotes:t,state:n=e.getState()})=>{const{revealType:i=s,correctAnswer:l}=e.getCustomFields();switch(i){case o:return void 0!==e.correctOption&&null!==e.correctOption&&(e=>e===r.Trivia.STATE_REVEALED)(n);case s:return null!=l&&(0,a.bU)(t);default:return!1}},u=e=>{const{revealType:t=s,correctAnswer:n}=e.getCustomFields();return t===o?e.correctOption:"number"==typeof n?n:-1};function p({elementInstance:e,userVotes:t,eventInstance:n}){const r=e.getState(),a=n.getCustomFields(),[o,s]=(0,i.A)(e.getCustomFields());return{id:e.id,type:e.type,state:r,options:e.getOptions(),results:e.getResults()||[],question:e.getQuestion(),duration:a.questionTimer||e.duration,userVote:e.getUserVote(),isActive:l(r),isStopped:d(r),isRevealed:c({triviaInstance:e,userVotes:t}),hasResults:e.hasResults(),publishedAt:e.publishedAt,isUserVoted:e.hasUserVoted(),contentType:e.contentType,correctOption:u(e),enabledCountdown:!0,customStyles:o,customFields:s}}},rWuc:function(){},rvm8:function(e,t,n){"use strict";n.d(t,{FK:function(){return l},Kc:function(){return s},MW:function(){return d},_u:function(){return c}});var r=n("dIqr"),i=n("wzRx"),a=n("vP7M");const o="onVote",s=e=>e===r.Trivia.STATE_STARTED,l=e=>e!==r.Trivia.STATE_STARTED,d=({triviaInstance:e,userVotes:t,state:n=e.getState()})=>{const{revealType:i=o}=e.getCustomFields();switch(i){case"onClose":return(e=>e===r.Trivia.STATE_REVEALED)(n);case o:return(0,a.bU)(t);default:return!1}};function c({elementInstance:e,userVotes:t,eventInstance:n}){const r=e.getState(),a=n.getCustomFields(),[o,c]=(0,i.A)(e.getCustomFields());return{id:e.id,type:e.type,state:r,options:e.getOptions(),results:e.getResults()||[],question:e.getQuestion(),duration:a.questionTimer||e.duration,userVote:e.getUserVote(),isActive:s(r),isStopped:l(r),isRevealed:d({triviaInstance:e,userVotes:t}),hasResults:e.hasResults(),publishedAt:e.publishedAt,isUserVoted:e.hasUserVoted(),contentType:e.contentType,correctOption:c.correctAnswer,enabledCountdown:!0,customStyles:o,customFields:c}}},s4Z8:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var r=n("1igH");const i=({action:e,payload:t,parentApplication:n})=>{n?(0,r._z)(n,e,t):window.parent.postMessage({identifier:e,url:t.url},"*")}},sCWl:function(e,t,n){"use strict";n.d(t,{X:function(){return f},d:function(){return h}});var r=n("qkuk"),i=n("PSab"),a=n("8fbK");const o=e=>"multi"===e,s=e=>"single"===e,l=e=>"open"===e,d=e=>"closed"===e,c=e=>"revealed"===e,u=e=>e.filter(e=>(0,i.h)(e.contentType)),p=e=>e.sort((e,t)=>{const{publishedAt:n}=e,{publishedAt:r}=t,i=e.getCustomFields().order,a=t.getCustomFields().order;return i===a?n-r:i-a}),m=e=>e.map(e=>e.id),g=(e,t)=>(0,r.Zz)(p,(e=>t=>t.filter(t=>t.getCustomFields().votingCarouselId===e))(e),u)(t),f=(e,t)=>m(g(e,t));function h({elementInstance:e,eventInstance:t}){const n=(0,a.Qf)({elementInstance:e}),r=t.getHistory()||[],{id:i,state:u,mode:p}=n.customFields,f=g(i,r),h=m(f);return{...n,isActive:l(u),isClosed:d(u),isRevealed:c(u),isMultiMode:o(p),isSingleMode:s(p),categoriesIds:h}}},"se+n":function(e,t,n){"use strict";n.d(t,{u:function(){return i}});var r=n("oRQk");const i=()=>{try{const e="__storage__test";return window.localStorage.setItem(e,null),window.localStorage.removeItem(e),!0}catch(e){return r.A.error(e),!1}}},svRP:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n("mXGw");const i=e=>{const[t,n]=(0,r.useState)(!1),i=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},e);return i.current&&t.observe(i.current),()=>t.disconnect()},[e]),[t,i]}},uDhf:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n("jhQ1");const i=(0,n("prkb").Ay)(r.CS.div).withConfig({displayName:"style__Wrapper"})`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
  left: 0;
  width: 100%;
  height: 100%;
`},udCZ:function(e,t,n){"use strict";n.d(t,{L:function(){return g},p:function(){return m}});var r=n("qkuk"),i=n("8fbK"),a=n("/T3s");const o=e=>"open"===e,s=e=>"closed"===e,l=e=>"revealed"===e,d=e=>e.filter(e=>(0,a.E)(e.contentType)),c=e=>e.sort((e,t)=>{const{publishedAt:n}=e,{publishedAt:r}=t,i=e.getCustomFields().order,a=t.getCustomFields().order;return i===a?n-r:i-a}),u=e=>e.map(e=>e.id),p=(e,t)=>(0,r.Zz)(c,(e=>t=>t.filter(t=>t.getCustomFields().raterId===e))(e),d)(t),m=(e,t)=>u(p(e,t));function g({elementInstance:e,eventInstance:t}){const n=(0,i.Qf)({elementInstance:e}),r=t.getHistory()||[],{id:a,state:d}=n.customFields,c=p(a,r),m=u(c);return{...n,isActive:o(d),isClosed:s(d),isRevealed:l(d),raterIds:m}}},vJLl:function(e,t,n){"use strict";var r=n("prkb");t.A=(e,...t)=>()=>`\n  --gradient-image: var(--blank-image);\n  --gradient-direction: 90deg;\n  --gradient-color: transparent, transparent;\n  --position: center top;\n  --size: cover;\n  --repeat: no-repeat;\n  --attachment: scroll;\n\n  ${(0,r.AH)(e,...t)}\n\n  background: \n    var(--gradient-image) var(--repeat) var(--attachment) var(--position) / var(--size), \n    linear-gradient(\n      var(--gradient-direction), \n      var(--gradient-color))\n    no-repeat fixed;\n`},vP7M:function(e,t,n){"use strict";n.d(t,{BI:function(){return l},QV:function(){return d},Tq:function(){return m},bU:function(){return o},c4:function(){return s},ec:function(){return i},s$:function(){return a}});var r=n("1mTy");function i(e){const{contentType:t}=e;return r.Cb.includes(t)}const a=e=>{const[t=null]=((e={})=>Object.keys(e).map(e=>Number(e)))(e);return t},o=(e={})=>!!Object.keys(e).length,s=e=>e.some(e=>Object.keys(e).length>0),l=(e,t)=>{const n=Object.keys(e),r=Object.keys(t);return[...new Set([...n,...r]).values()].reduce((n,r)=>{const i=(e[r]||0)+(t[r]||0);return{...n,[r]:i}},{})},d=({customFields:{order:e},publishedAt:t,contentType:n},{customFields:{order:i},publishedAt:a,contentType:o})=>void 0!==e&&void 0!==i?e!==i?e-i:a-t:void 0!==e&&void 0===i||o===r.Bj||o===r.w9||o===r.Rx?-1:void 0===e&&void 0!==i||n===r.Bj||n===r.w9||n===r.Rx?1:-1,c=e=>"started"===e,u=e=>"stopped"===e||"revealed"===e;function p(e){return!!e&&(!!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?([+-]\d{2}:\d{2}|Z)$/.test(e)&&"Invalid Date"!==new Date(e).toString())}const m=({customFields:{pin:e=!1}={},question:{matchTime:t}={},state:n,publishedAt:r},{customFields:{pin:i=!1}={},question:{matchTime:a}={},state:o,publishedAt:s})=>{if(!0===e&&!1===i)return-1;if(!1===e&&!0===i)return 1;if(c(n)&&u(o))return-1;if(u(n)&&c(o))return 1;const l=p(t),d=p(a);return l&&d?new Date(t).getTime()-new Date(a).getTime():s-r}},wzRx:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});const r="css_",i="_",a="-object",o="-image";function s(e,t,n){const r=e,i=t.shift();return 0===t.length?r[i]=n:(r[i]||(r[i]={}),s(r[i],t,n)),r}function l(e,t,n){return s(e,t.split(i),n)}function d(e){let t={},n={};return Object.entries(e).forEach(([e,i])=>{if(e.includes(r)){const n=e.replace(new RegExp(`${r}|${a}|${o}`,"g"),"");t=l(t,n,i)}else n=l(n,e,i)}),[t,n]}},xs66:function(e,t,n){"use strict";n.d(t,{CE:function(){return s},Ni:function(){return o},z3:function(){return l}});var r=n("BtVd");const i=e=>e.user,a=e=>{const t=(0,r._s)(e);return i(e)[t]||{}},o=e=>a(e).sessionId,s=e=>a(e).publicId,l=e=>i(e).isFirstVisited},yLjE:function(e,t,n){"use strict";n.d(t,{A9:function(){return h},HQ:function(){return i},Kr:function(){return A},Ne:function(){return o},QQ:function(){return I},R6:function(){return b},RO:function(){return x},Sl:function(){return d},TX:function(){return p},Xp:function(){return v},a5:function(){return C},f6:function(){return m},fQ:function(){return l},gM:function(){return c},ie:function(){return s},im:function(){return O},kZ:function(){return N},ri:function(){return a},sS:function(){return y},xb:function(){return f},yz:function(){return g},zi:function(){return T}});var r=n("Xrb3");const{uiInfo:i,logout:a,loginSuccess:o,loginFailure:s,userAuthSuccess:l,userAuthFailure:d,userProfileUpdate:c,lvisLoginPending:u,lvisLoginLogging:p,lvisLoginSuccess:m,lvisLoginFailure:g,lvisLoggedOut:f,lvisDisconnected:h,lvisConnecting:v,lvisConnected:y,openIframe:b,hideIframe:x,updateUsername:N,openUsernameModal:A,hideUsernameModal:C,fetchUser:O,fetchUserSuccess:T,fetchUserFailure:I}=(0,r.A)("UI_INFO","LOGOUT","LOGIN_SUCCESS","LOGIN_FAILURE","USER_AUTH_SUCCESS","USER_AUTH_FAILURE","LVIS_LOGGED_OUT","USER_PROFILE_UPDATE","LVIS_LOGIN_PENDING","LVIS_LOGIN_LOGGING","LVIS_LOGIN_SUCCESS","LVIS_LOGIN_FAILURE","LVIS_DISCONNECTED","LVIS_CONNECTING","LVIS_CONNECTED","OPEN_IFRAME","HIDE_IFRAME","UPDATE_USERNAME","OPEN_USERNAME_MODAL","HIDE_USERNAME_MODAL","FETCH_USER","FETCH_USER_SUCCESS","FETCH_USER_FAILURE",{prefix:"auth"})},zAUO:function(e,t,n){"use strict";n.d(t,{V:function(){return i},d:function(){return a}});var r=n("Xrb3");const{getElement:i,setElement:a}=(0,r.A)("GET_ELEMENT","SET_ELEMENT",{prefix:"scrolled"})}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return i[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=i,o.amdD=function(){throw new Error("define cannot be used indirect")},e=[],o.O=function(t,n,r,i){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],i=e[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every(function(e){return o.O[e](n[l])})?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var i=Object.create(null);o.r(i);var a={};t=t||[null,n({}),n([]),n(n)];for(var s=2&r&&e;("object"==typeof s||"function"==typeof s)&&!~t.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach(function(t){a[t]=function(){return e[t]}});return a.default=function(){return e},o.d(i,a),i},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce(function(t,n){return o.f[n](e,t),t},[]))},o.u=function(e){return e+"."+{65:"83c5d568dcafe3334297",183:"6e9f031aff9c04c3a92e",447:"39d70abf7c943d4324cf",594:"b7a7a167ad9052b99da9",667:"257a693fd36d7c7f9655",752:"2c2aac48dc4bc684a6dc",803:"361b2a39cec71a0cc0d7",983:"9ea8b5443bbb6e2649f6",1136:"60edbda5fcfa602e7a48",1207:"71ad212864f25774f7a1",1478:"24f85ddd56dd62e5dc45",1547:"56db3fe4258a2e3a5810",1847:"1b6573704946ed0378c5",1895:"a66a75fc3dfeb3e17110",1945:"f00691171334089d472f",1972:"371d447cd125e07ab178",2051:"59630b47e15fe8305235",2165:"8bb2f81ddfb2e758f292",2174:"079ec1f7a356f9a5351a",2186:"8b3bd84668795900ef79",2203:"70f6c53fd26b2d9ba33e",2240:"f95d04c986f985d3cbd9",2437:"658e7e5e46bf871cb5ff",2558:"2d7d6df798d841d24045",2687:"439ccc6096baf9de8bf2",2772:"924d9d014fc5725957a0",2813:"fba6eaf1df4ae4678b5f",2955:"d24e583e8fd595c1e0f4",2975:"41f7940eb2ee8e0ed113",3040:"485fd158d660c5d05e6f",3102:"462c6bc9d49c049ba453",3166:"7735c2eb28e61ff5853e",3328:"b120f15fb74e4f5ad61a",3330:"d2b776923ad4e3e894bb",3479:"d7daaea54dd5ffd04c22",4017:"52e3bb12111e0591ab47",4024:"9cfa3625a8a9589aa851",4153:"33950bbebd46398d134f",4312:"e72d023ce4ad030d650c",4465:"ebf9423ea9a4f41538a0",4469:"c59416e401ae3f9d11c7",4597:"3a7eeb3054aceed71ea3",4624:"54c01b5f435df6126f91",4711:"8e66d3a7e0d4bd7519f2",4868:"0fcf7e46b063c01d4f73",4952:"58f1416638e54030b88a",5030:"241c8ad0b6a5a86a8f47",5099:"82e2f568517b1667b5b4",5642:"4a67e7d3c5d69f3ed74d",5801:"8084d3ce66094a610fb2",6036:"d5976daae97c1cf63fd6",6143:"8be6ee8701d013498989",6171:"807095cedec0e6374ac8",6276:"695a38966dbb35493c48",6380:"a1d93d2e79d8fccd36e6",6727:"93b6b6ba9dcc86b705c7",6815:"ca1fb14e6edac9dce163",6836:"2fe15dd9bab903b041c1",6936:"af175a4e9bc3fa8279df",6958:"395e024a969f24f3f87d",7015:"afdce9566157ba7302a2",7475:"5a8c87af291162a8b8c2",7726:"0d5f3f45b1c0aff133ea",7762:"7218f81828b7325ce285",7838:"bf1585264cca7e998f29",7896:"1c61b3f9de7a114891dc",7928:"da5be0ef55fa122687c9",7937:"31dbe58d944a3cc9ed34",8251:"b869ebe9340e377939bf",8349:"a030b3d44d64bcb66979",8549:"e62ee95420d41a1520dd",8675:"6a17f93ebb34eb3ebd6a",9210:"61dc705caf2d84c08ad7",9292:"4a1bb8f4cd405556cb27",9348:"368a78aec9f78399659e",9546:"cb57cb27114645e794e2",9609:"10ed41db39303995ba7d",9632:"b126cd3805bfa799e601"}[e]+".js"},o.miniCssF=function(e){return e+".924d9d014fc5725957a0.css"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o.l=function(e,t,n,i){if(r[e])r[e].push(t);else{var a,s;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var c=l[d];if(c.getAttribute("src")==e){a=c;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=e),r[e]=[t];var u=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var i=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach(function(e){return e(n)}),t)return t(n)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),s&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},o.p="/nba-pickem/1.0.20/",function(){if("undefined"!=typeof document){var e={8792:0};o.f.miniCss=function(t,n){e[t]?n.push(e[t]):0!==e[t]&&{2772:1}[t]&&n.push(e[t]=function(e){return new Promise(function(t,n){var r=o.miniCssF(e),i=o.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=(o=n[r]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var o;if((i=(o=a[r]).getAttribute("data-href"))===e||i===t)return o}}(r,i))return t();!function(e,t,n,r,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",o.nc&&(a.nonce=o.nc),a.onerror=a.onload=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var o=n&&n.type,s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+s+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=s,a.parentNode&&a.parentNode.removeChild(a),i(l)}},a.href=t,document.head.appendChild(a)}(e,i,0,t,n)})}(t).then(function(){e[t]=0},function(n){throw delete e[t],n}))}}}(),function(){var e={8792:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(function(n,i){r=e[t]=[n,i]});n.push(r[2]=i);var a=o.p+o.u(t),s=new Error;o.l(a,function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}},"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],s=n[1],l=n[2],d=0;if(a.some(function(t){return 0!==e[t]})){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var c=l(o)}for(t&&t(n);d<a.length;d++)i=a[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),o.nc=void 0;var s=o.O(void 0,[6736],function(){return o("fZs4")});s=o.O(s)}();