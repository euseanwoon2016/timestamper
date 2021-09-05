(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{82:function(e,t,n){"use strict";n.r(t),n.d(t,{TimestamperActionKind:function(){return F},TimestamperContext:function(){return q},default:function(){return Q},timestampIsEqual:function(){return X}});var r=n(3789),i=n(2809),o=n(7294),a=n(318),s=n(862),c=n(3924),l=n(2827),p=n(980),m=n(9050),d=n(3850),u=n(8017),f=n(9444),x=n(8482),h=n(336),g=n(9887),y=n(8906),E=n(8448),T=n(4115),S=n(6627),j=n(9008),v=n(5893),_=function(e){var t=e.title,n=e.description,r=e.url,i=e.img;return(0,v.jsxs)(j.default,{children:[(0,v.jsx)("title",{children:t}),(0,v.jsx)("meta",{name:"title",content:t}),(0,v.jsx)("meta",{name:"description",content:n}),(0,v.jsx)("meta",{property:"og:type",content:"website"}),(0,v.jsx)("meta",{property:"og:url",content:null!==r&&void 0!==r?r:""}),(0,v.jsx)("meta",{property:"og:title",content:t}),(0,v.jsx)("meta",{property:"og:description",content:n}),(0,v.jsx)("meta",{property:"og:image",content:null!==i&&void 0!==i?i:""}),(0,v.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,v.jsx)("meta",{property:"twitter:url",content:null!==r&&void 0!==r?r:""}),(0,v.jsx)("meta",{property:"twitter:title",content:t}),(0,v.jsx)("meta",{property:"twitter:description",content:n}),(0,v.jsx)("meta",{property:"twitter:image",content:null!==i&&void 0!==i?i:""}),(0,v.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,v.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,v.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,v.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},b=n(6755),I=n(9950),O=n(8420),w=function(){var e=(0,p.useColorMode)(),t=e.colorMode,n=e.toggleColorMode;return(0,v.jsx)(O.h,{borderRadius:"md","aria-label":t,onClick:n,icon:"light"===t?(0,v.jsx)(b.k,{}):(0,v.jsx)(I.N,{})})},M=n(9327),P=n(3733),A=n(2770),R=n(17),D=function(e){var t=e.isOpen,n=e.onClose,i=(0,p.useToast)(),a=(0,o.useContext)(q),s=a.state,c=(a.dispatch,function(){if(null!==s.timestampList)return(0,r.Z)(s.timestampList).sort((function(e,t){return e.timestamp.actualSeconds-t.timestamp.actualSeconds})).map((function(e){var t=e.timestamp,n=t.hours,r=t.minutes,i=t.seconds,o=e.event;return"".concat("00"!=n?"".concat(n,":"):"").concat(r,":").concat(i," ").concat(o)})).join("\n")});return(0,v.jsxs)(A.u_,{isOpen:t,onClose:n,children:[(0,v.jsx)(A.ZA,{}),(0,v.jsxs)(A.hz,{children:[(0,v.jsx)(A.xB,{children:"Export As Text"}),(0,v.jsx)(A.ol,{}),(0,v.jsx)(A.fe,{children:(0,v.jsx)(R.g,{whiteSpace:"pre-wrap",height:"400px",children:c()})}),(0,v.jsxs)(A.mz,{children:[(0,v.jsx)(y.z,{variant:"ghost",mr:3,leftIcon:(0,v.jsx)(P.T,{}),onClick:function(){navigator.clipboard.writeText(c()),i({title:"Copied to clipboard!",description:"You can paste it directly into the YouTube chat.",status:"success",duration:3e3,isClosable:!0})},children:"Copy"}),(0,v.jsx)(y.z,{colorScheme:"red",onClick:n,children:"Close"})]})]})]})},k=n(3454),L=n(5499);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){var t=e.isOpen,n=e.onClose,r=(0,L.Z)(["timestamps","videoId","timestamperSettings"]),s=(0,a.Z)(r,3),c=(s[0],s[1]),l=s[2],p=(0,o.useContext)(q),m=p.state,d=p.dispatch;return(0,v.jsxs)(A.u_,{isOpen:t,onClose:n,children:[(0,v.jsx)(A.ZA,{}),(0,v.jsxs)(A.hz,{children:[(0,v.jsx)(A.xB,{children:"Settings"}),(0,v.jsx)(A.ol,{}),(0,v.jsx)(A.fe,{children:(0,v.jsxs)(u.xu,{display:"flex",sx:{gap:"0.5rem"},flexDir:"column",children:[(0,v.jsxs)("label",{children:[(0,v.jsx)(T.x,{children:(0,v.jsx)(k.u,{hasArrow:!0,label:"Number of seconds before the current time when creating timestamp.",children:"Time offset (seconds):"})}),(0,v.jsx)(g.I,{type:"number",onChange:function(e){var t=e.currentTarget,n=t.name,r=t.value,o=Y(Y({},m.timestamperSettings),{},(0,i.Z)({},n,r));c("timestamperSettings",o),d({type:F.SET_TIMESTAMPER_SETTINGS,payload:o})},name:"timeOffset",value:m.timestamperSettings.timeOffset})]}),(0,v.jsx)(k.u,{hasArrow:!0,label:"Clear all site data such as current video ID, saved timestamps and settings.",children:(0,v.jsx)(y.z,{onClick:function(){l("timestamperSettings"),l("timestamps"),l("videoId"),window.location.reload()},colorScheme:"red",children:"Clear All Data"})})]})}),(0,v.jsx)(A.mz,{children:(0,v.jsx)(y.z,{onClick:n,children:"Save"})})]})]})},V=n(3527),z=n.n(V);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var H=function(e){var t=e.timestampEvent,n=(0,o.useContext)(q),r=n.state,a=n.dispatch,s=(0,o.useRef)(null),c=(0,o.useRef)(null),p=(0,o.useRef)(null),m=(0,o.useRef)(null),d=function(){a({type:F.REMOVE_TIMESTAMP,payload:t})},f=function(e,n){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.timestamp);r[n]=parseInt(e.currentTarget.value,10).toString(),X(t.timestamp,r)||a({type:F.UPDATE_TIMESTAMP_TIME,payload:{timestampEvent:t,newTimestamp:r}})};return(0,o.useEffect)((function(){document.activeElement!==s.current&&s.current.focus()}),[r.timestampList]),(0,o.useEffect)((function(){c.current.value=t.timestamp.hours.toString().padStart(2,"0"),p.current.value=t.timestamp.minutes.toString().padStart(2,"0"),m.current.value=t.timestamp.seconds.toString().padStart(2,"0")}),[t]),(0,v.jsxs)(u.xu,{className:z().timestampEvent,display:"flex",children:[(0,v.jsx)(O.h,{variant:"ghost",marginRight:"0.5rem","aria-label":"Jump to this timestamp",icon:(0,v.jsx)(M.oqk,{size:"2rem"}),borderRadius:"5px",colorScheme:"blue",onClick:function(){r.player.seekTo(t.timestamp.actualSeconds)}}),(0,v.jsxs)(u.xu,{flex:"0 1 32%",display:"flex",className:z().timestamp,children:[(0,v.jsx)(g.I,{ref:c,min:"0",max:"59",type:"number",onBlur:function(e){f(e,"hours")}}),(0,v.jsx)(g.I,{ref:p,min:"0",max:"59",type:"number",onBlur:function(e){f(e,"minutes")}}),(0,v.jsx)(g.I,{ref:m,min:"0",max:"59",type:"number",onBlur:function(e){f(e,"seconds")}})]}),(0,v.jsx)(u.xu,{fontSize:"24",style:{paddingInline:"0.5rem"},children:":"}),(0,v.jsx)(u.xu,{flex:"0 1 68%",children:(0,v.jsx)(g.I,{ref:s,type:"text",placeholder:"Something cool happened...",onInput:function(e){a({type:F.UPDATE_TIMESTAMP_EVENT,payload:{timestampEvent:t,newValue:e.currentTarget.value}})},value:t.event,onKeyDown:function(e){"Escape"===e.key&&d()}})}),(0,v.jsx)(O.h,{variant:"ghost",marginLeft:"0.5rem","aria-label":"Delete this timestamp",icon:(0,v.jsx)(l.p,{}),borderRadius:"5px",colorScheme:"red",onClick:d})]})},U=function(){var e=(0,o.useContext)(q),t=e.state,n=e.dispatch,r=(0,p.useColorMode)().colorMode,i=(0,m.q)(),j=i.isOpen,b=i.onOpen,I=i.onClose,O=(0,m.q)(),P=O.isOpen,A=O.onOpen,R=O.onClose,k=(0,o.useRef)(null),C=(0,o.useRef)(null),Y=(0,L.Z)(["timestamps","videoId","timestamperSettings"]),V=(0,a.Z)(Y,3),Z=V[0],U=V[1],B=V[2];(0,o.useEffect)((function(){if(null===t.player){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r),window.onYouTubeIframeAPIReady=function(){n({type:F.SET_PLAYER,payload:new window.YT.Player("player",{height:"100%",width:"100%",playerVars:{playsinline:1},events:{onReady:function(e){n({type:F.SET_PLAYER_READY,payload:!0})}}})})}}null===t.timestampList&&G()}),[]),(0,o.useEffect)((function(){if(null!==t.timestampList)if(0!==t.timestampList.length){var e=JSON.stringify(t.timestampList);U("timestamps",e,{path:"/",expires:new Date(Date.now()+7776e6),sameSite:"strict",secure:!0})}else B("timestamps")}),[t.timestampList]),(0,o.useEffect)((function(){t.isPlayerReady&&null!==t.videoId&&t.player.loadVideoById(t.videoId);var e=function(e){"Enter"===e.key&&n({type:F.ADD_TIMESTAMP,payload:""})};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t.isPlayerReady,t.videoId]);var G=function(){Z.timestamps?n({type:F.SET_TIMESTAMP_LIST,payload:Z.timestamps}):n({type:F.SET_TIMESTAMP_LIST,payload:[]}),Z.videoId&&(k.current.value="https://www.youtube.com/watch?v=".concat(Z.videoId),n({type:F.SET_VIDEO_ID,payload:Z.videoId})),Z.timestamperSettings&&n({type:F.SET_TIMESTAMPER_SETTINGS,payload:Z.timestamperSettings})};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_,{title:"Timestamper",description:"Timestamp manager for YouTube.",img:"/android-chrome-192x192.png"}),(0,v.jsxs)(d.W,{maxW:"100%",children:[(0,v.jsxs)(u.xu,{display:"flex",margin:"0 auto",maxW:"container.lg",justifyContent:"space-between",alignItems:"center",children:[(0,v.jsxs)(f.r,{href:"/",paddingY:"0.5rem",alignItems:"center",style:{textDecoration:"none"},display:"flex",children:[(0,v.jsx)(x.E,{boxSize:"100px",src:"images/timestamp.png",alt:"Timestamp Logo"}),(0,v.jsx)(h.X,{children:"Timestamper"})]}),(0,v.jsx)(w,{})]}),(0,v.jsxs)(u.xu,{display:"flex",sx:{gap:"0.5rem"},children:[(0,v.jsx)(g.I,{placeholder:"https://www.youtube.com/watch?v=12345",ref:k}),(0,v.jsx)(y.z,{onClick:function(){try{var e=new URL(k.current.value),t=new URLSearchParams(e.search).get("v");t?(U("videoId",t,{path:"/",expires:new Date(Date.now()+7776e6),sameSite:"strict",secure:!0}),n({type:F.SET_VIDEO_ID,payload:t})):n({type:F.SET_VIDEO_HAS_ERRORS,payload:!0})}catch(r){n({type:F.SET_VIDEO_HAS_ERRORS,payload:!0})}},colorScheme:"blue",children:"Update"}),(0,v.jsx)(y.z,{onClick:function(){B("videoId"),n({type:F.SET_VIDEO_ID,payload:null}),n({type:F.SET_VIDEO_HAS_ERRORS,payload:!1}),k.current.value="",t.player.loadVideoById({videoId:null})},colorScheme:"red",children:"Clear"})]}),function(){if(t.videoHasErrors)return(0,v.jsx)(u.xu,{color:"red.600",children:"You provided an invalid link!"})}(),(0,v.jsxs)(u.xu,{display:"grid",gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gridGap:"1rem",marginY:"1rem",children:[(0,v.jsxs)(u.xu,{position:"relative",children:[(0,v.jsx)(u.xu,{className:z().player,id:"player"}),function(){if(null==t.videoId)return(0,v.jsx)(u.xu,{className:z().playerOverlay,children:(0,v.jsx)(E.M,{width:"100%",height:"100%",children:(0,v.jsx)(h.X,{size:"lg",color:"grey",fontFamily:"Roboto",fontWeight:"extrabold",textTransform:"uppercase",userSelect:"none",children:"No video link provided"})})})}()]}),(0,v.jsxs)(u.xu,{children:[(0,v.jsx)(u.xu,{borderRadius:"0.5rem",border:"1px solid ".concat("dark"==r?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.1)"),ref:C,overflowY:"auto",height:"70vh",display:"flex",flexDir:"column",sx:{gap:"0.5rem"},padding:"0.5rem",children:null===t.timestampList||0===t.timestampList.length?(0,v.jsxs)(E.M,{height:"100%",fontFamily:"Roboto",color:"grey",userSelect:"none",flexDir:"column",children:[(0,v.jsx)(h.X,{size:"lg",fontFamily:"Roboto",fontWeight:"extrabold",textTransform:"uppercase",children:"No timestamps yet!"}),(0,v.jsxs)(T.x,{children:["Hint: You can press ",(0,v.jsx)(S.T,{children:"enter"})," to create new timestamp!"]})]}):t.timestampList.map((function(e,t){return(0,v.jsx)(H,{timestampEvent:e},t)}))}),(0,v.jsxs)(u.xu,{display:"flex",sx:{gap:"0.5rem"},children:[(0,v.jsx)(y.z,{marginY:"0.5rem",leftIcon:(0,v.jsx)(s.d,{}),colorScheme:"green",onClick:function(){n({type:F.ADD_TIMESTAMP,payload:""})},children:"Add"}),(0,v.jsx)(y.z,{marginY:"0.5rem",leftIcon:(0,v.jsx)(M.cZL,{size:"1.5rem"}),colorScheme:"blue",onClick:b,children:"Export As Text"}),(0,v.jsx)(y.z,{marginY:"0.5rem",leftIcon:(0,v.jsx)(c.e,{}),onClick:A,children:"Settings"}),(0,v.jsx)(y.z,{marginY:"0.5rem",leftIcon:(0,v.jsx)(l.p,{}),colorScheme:"red",onClick:function(){n({type:F.CLEAR_TIMESTAMPS,payload:null})},children:"Clear"}),(0,v.jsx)("div",{style:{marginBlock:"0.5rem"},dangerouslySetInnerHTML:{__html:'<style>img.kofiimg{display: initial!important;vertical-align:middle;height:13px!important;width:20px!important;padding-top:0!important;padding-bottom:0!important;border:none;margin-top:0;margin-right:5px!important;margin-left:0!important;margin-bottom:3px!important;content:url(\'https://storage.ko-fi.com/cdn/cup-border.png\')}.kofiimg:after{vertical-align:middle;height:25px;padding-top:0;padding-bottom:0;border:none;margin-top:0;margin-right:6px;margin-left:0;margin-bottom:4px!important;content:url(\'https://storage.ko-fi.com/cdn/whitelogo.svg\')}.btn-container{display:inline-block!important;white-space:nowrap;min-width:160px}span.kofitext{color:#fff !important;letter-spacing: -0.15px!important;text-wrap:none;vertical-align:middle;line-height:33px !important;padding:0;text-align:center;text-decoration:none!important; text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);}.kofitext a{color:#fff !important;text-decoration:none:important;}.kofitext a:hover{color:#fff !important;text-decoration:none}a.kofi-button{box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);line-height:36px!important;min-width:150px;display:inline-block!important;background-color:#29abe0;padding:2px 12px !important;text-align:center !important;border-radius:7px;color:#fff;cursor:pointer;overflow-wrap:break-word;vertical-align:middle;border:0 none #fff !important;font-family:\'Quicksand\',Helvetica,Century Gothic,sans-serif !important;text-decoration:none;text-shadow:none;font-weight:700!important;font-size:14px !important}a.kofi-button:visited{color:#fff !important;text-decoration:none !important}a.kofi-button:hover{opacity:.85;color:#f5f5f5 !important;text-decoration:none !important}a.kofi-button:active{color:#f5f5f5 !important;text-decoration:none !important}.kofitext img.kofiimg {height:15px!important;width:22px!important;display: initial;animation: kofi-wiggle 3s infinite;}@keyframes kofi-wiggle{0%{transform:rotate(0) scale(1)}60%{transform:rotate(0) scale(1)}75%{transform:rotate(0) scale(1.12)}80%{transform:rotate(0) scale(1.1)}84%{transform:rotate(-10deg) scale(1.1)}88%{transform:rotate(10deg) scale(1.1)}92%{transform:rotate(-10deg) scale(1.1)}96%{transform:rotate(10deg) scale(1.1)}100%{transform:rotate(0) scale(1)}}</style><link href="https://fonts.googleapis.com/css?family=Quicksand:400,700" rel="stylesheet" type="text/css"><div class="btn-container"><a title="Support me on ko-fi.com" class="kofi-button" style="background-color:#0e78b5;" href="https://ko-fi.com/W7W362D8G" target="_blank"> <span class="kofitext"><img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi donations" class="kofiimg">Give me your money</span></a></div>'}})]})]})]})]}),(0,v.jsx)(D,{isOpen:j,onClose:I}),(0,v.jsx)(N,{isOpen:P,onClose:R})]})},B=function(e){if(e<=0)return{actualSeconds:0,hours:"00",minutes:"00",seconds:"00"};var t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%60);return{actualSeconds:e,hours:t.toString().padStart(2,"0"),minutes:n.toString().padStart(2,"0"),seconds:r.toString().padStart(2,"0")}};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F,X=function(e,t){return e.hours===t.hours&&e.minutes===t.minutes&&e.seconds===t.seconds},q=o.createContext(null),K={timestampList:null,videoHasErrors:!1,videoId:null,player:null,isPlayerReady:!1,timestamperSettings:{timeOffset:5}};!function(e){e[e.SET_VIDEO_ID=0]="SET_VIDEO_ID",e[e.SET_VIDEO_HAS_ERRORS=1]="SET_VIDEO_HAS_ERRORS",e[e.ADD_TIMESTAMP=2]="ADD_TIMESTAMP",e[e.REMOVE_TIMESTAMP=3]="REMOVE_TIMESTAMP",e[e.CLEAR_TIMESTAMPS=4]="CLEAR_TIMESTAMPS",e[e.SET_TIMESTAMPER_SETTINGS=5]="SET_TIMESTAMPER_SETTINGS",e[e.UPDATE_TIMESTAMP_EVENT=6]="UPDATE_TIMESTAMP_EVENT",e[e.UPDATE_TIMESTAMP_TIME=7]="UPDATE_TIMESTAMP_TIME",e[e.SET_PLAYER=8]="SET_PLAYER",e[e.SET_PLAYER_READY=9]="SET_PLAYER_READY",e[e.SET_TIMESTAMP_LIST=10]="SET_TIMESTAMP_LIST"}(F||(F={}));var J=function(e,t){switch(t.type){case F.SET_VIDEO_ID:return W(W({},e),{},{videoId:t.payload,videoHasErrors:!1});case F.SET_VIDEO_HAS_ERRORS:return W(W({},e),{},{videoHasErrors:t.payload});case F.ADD_TIMESTAMP:var n={timestamp:B(e.player.getCurrentTime()-e.timestamperSettings.timeOffset),event:t.payload};return W(W({},e),{},{timestampList:[].concat((0,r.Z)(e.timestampList),[n])});case F.REMOVE_TIMESTAMP:var i=(0,r.Z)(e.timestampList);return i.splice(e.timestampList.indexOf(t.payload),1),W(W({},e),{},{timestampList:(0,r.Z)(i)});case F.CLEAR_TIMESTAMPS:return W(W({},e),{},{timestampList:[]});case F.SET_TIMESTAMPER_SETTINGS:return W(W({},e),{},{timestamperSettings:t.payload});case F.UPDATE_TIMESTAMP_EVENT:var o=t.payload,a=o.timestampEvent,s=o.newValue,c=e.timestampList.map((function(e){return e===a?W(W({},e),{},{event:s}):e}));return W(W({},e),{},{timestampList:c});case F.UPDATE_TIMESTAMP_TIME:var l=t.payload,p=l.timestampEvent,m=l.newTimestamp;m.actualSeconds=(u=m,60*parseInt(u.hours)*60+60*parseInt(u.minutes)+parseInt(u.seconds));var d=e.timestampList.map((function(e){return e===p?W(W({},e),{},{timestamp:m}):e}));return W(W({},e),{},{timestampList:d});case F.SET_PLAYER:return W(W({},e),{},{player:t.payload});case F.SET_PLAYER_READY:return W(W({},e),{},{isPlayerReady:t.payload});case F.SET_TIMESTAMP_LIST:return W(W({},e),{},{timestampList:t.payload});default:return e}var u},Q=function(){var e=(0,o.useReducer)(J,K),t=e[0],n=e[1];return(0,v.jsx)(q.Provider,{value:{state:t,dispatch:n},children:(0,v.jsx)(U,{})})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(82)}])},3527:function(e){e.exports={player:"timestamper_player__3LRFG",playerOverlay:"timestamper_playerOverlay__2cvs3",timestampEvent:"timestamper_timestampEvent__3iLvD",fade:"timestamper_fade__Ruj0O",timestamp:"timestamper_timestamp__1ZaFD"}}},function(e){e.O(0,[774,90,188,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);