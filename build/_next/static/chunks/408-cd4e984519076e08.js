(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[408],{5192:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var r=n(5893),a=n(7346),i=n(2362),s=n(1883),c=n.n(s),o=function(e){var t=e.className;return(0,r.jsx)("footer",{className:(0,i.Sh)(c().footer,t),children:(0,r.jsx)(a.x,{size:"s",align:"center",children:(0,r.jsx)("span",{className:c().date,children:"\xa9 ".concat((new Date).getFullYear()," Bert Quilay")})})})}},2221:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var r=n(1799),a=n(9396),i=n(9534),s=n(5893),c=n(7294),o=n(2362),u=n(361),l=n.n(u),d=function(e){var t=e.children,n=e.level,u=void 0===n?1:n,d=e.as,f=e.align,p=void 0===f?"auto":f,h=e.weight,m=void 0===h?"medium":h,v=e.className,g=(0,i.Z)(e,["children","level","as","align","weight","className"]),w=Math.min(Math.max(u,0),5),x=d||"h".concat(Math.max(w,1));return(0,s.jsx)(c.Fragment,{children:(0,s.jsx)(x,(0,a.Z)((0,r.Z)({className:(0,o.Sh)(l().heading,v),"data-align":p,"data-weight":m,"data-level":w},g),{children:t}))})}},1424:function(e,t,n){"use strict";n.d(t,{E:function(){return x}});var r=n(7568),a=n(1799),i=n(9534),s=n(4051),c=n.n(s),o=n(5893),u=n(3861),l=n(1879),d=n(8718),f=n(6240),p=n(4529),h=n(7294),m=n(5622),v=n(2362),g=n(2288),w=n.n(g),x=function(e){var t=e.className,n=e.style,r=e.reveal,s=e.delay,c=void 0===s?0:s,u=e.raised,l=e.src,f=e.srcSet,m=e.placeholder,g=(0,i.Z)(e,["className","style","reveal","delay","raised","src","srcSet","placeholder"]),x=(0,h.useState)(!1),j=x[0],S=x[1],N=(0,d.Fg)().themeId,b=(0,h.useRef)(),Z=l||(null===f||void 0===f?void 0:f[0]),k=(0,p.NM)(b,!_(Z)),E=(0,h.useCallback)((function(){S(!0)}),[]);return(0,o.jsx)("div",{className:(0,v.Sh)(w().image,t),"data-visible":k||j,"data-reveal":r,"data-raised":u,"data-theme":N,style:(0,v.Fh)({delay:(0,v.aU)(c)},n),ref:b,children:(0,o.jsx)(y,(0,a.Z)({delay:c,onLoad:E,loaded:j,inViewport:k,reveal:r,src:Z,srcSet:f,placeholder:m},g))})},y=function(e){var t=e.onLoad,n=e.loaded,s=e.inViewport,d=e.srcSet,g=e.placeholder,x=e.delay,y=e.src,j=e.alt,S=e.play,N=void 0===S||S,b=e.restartOnPause,Z=e.reveal,k=e.sizes,E=e.noPauseButton,F=(0,i.Z)(e,["onLoad","loaded","inViewport","srcSet","placeholder","delay","src","alt","play","restartOnPause","reveal","sizes","noPauseButton"]),I=(0,f.J)(),P=(0,h.useState)(!0),z=P[0],L=P[1],R=(0,h.useState)(!I),B=R[0],C=R[1],M=(0,h.useState)(),U=M[0],V=M[1],W=(0,h.useState)(!1),D=W[0],J=W[1],K=(0,h.useRef)(),O=(0,h.useRef)(),X=_(y),Y=s,q=(0,m.A2)(d),A=(0,p.f3)();(0,h.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Ro)({srcSet:d,sizes:k});case 2:t=e.sent,V(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();X&&d?e():X&&V(y.src)}),[X,k,y,d]),(0,h.useEffect)((function(){if(O.current&&U){var e=function(){C(!1),O.current.pause()};N||(e(),b&&(O.current.currentTime=0)),D||(s?s&&!I&&N&&(C(!0),O.current.play()):e())}}),[s,N,I,b,D,U]);return(0,o.jsxs)("div",{className:w().elementWrapper,"data-reveal":Z,"data-visible":s||n,style:(0,v.Fh)({delay:(0,v.aU)(x+1e3)}),children:[X&&A&&(0,o.jsxs)(h.Fragment,{children:[(0,o.jsx)("video",(0,a.Z)({muted:!0,loop:!0,playsInline:!0,className:w().element,"data-loaded":n,autoPlay:!I,role:"img",onLoadStart:t,src:U,"aria-label":j,ref:O},F)),!E&&(0,o.jsxs)(u.z,{className:w().button,onClick:function(e){e.preventDefault(),J(!0),O.current.paused?(C(!0),O.current.play()):(C(!1),O.current.pause())},children:[(0,o.jsx)(l.J,{icon:B?"pause":"play"}),B?"Pause":"Play"]})]}),!X&&(0,o.jsx)("img",(0,a.Z)({className:w().element,"data-loaded":n,onLoad:t,decoding:"async",src:Y?y.src:void 0,srcSet:Y?q:void 0,width:y.width,height:y.height,alt:j,sizes:k},F)),z&&(0,o.jsx)("img",{"aria-hidden":!0,className:w().placeholder,"data-loaded":n,style:(0,v.Fh)({delay:(0,v.aU)(x)}),ref:K,src:g.src,width:g.width,height:g.height,onTransitionEnd:function(){return L(!1)},decoding:"async",alt:"",role:"presentation"})]})};function _(e){return"string"===typeof e.src&&e.src.endsWith(".mp4")}},5633:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(5893),a=n(9008),i=n.n(a),s="Bert Quilay",c="@bertquilay",o=function(e){var t=e.title,n=e.description,a=e.prefix,o=[void 0===a?s:a,t].filter(Boolean).join(" | ");return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:o},"title"),(0,r.jsx)("meta",{name:"description",content:n},"description"),(0,r.jsx)("meta",{name:"author",content:s}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:title",content:o}),(0,r.jsx)("meta",{name:"twitter:site",content:c}),(0,r.jsx)("meta",{name:"twitter:creator",content:c})]})}},6602:function(e,t,n){"use strict";n.d(t,{$:function(){return d}});var r=n(1799),a=n(9396),i=n(9534),s=n(5893),c=n(7294),o=n(2362),u=n(4828),l=n.n(u),d=(0,c.forwardRef)((function(e,t){var n=e.as,c=void 0===n?"div":n,u=e.children,d=e.className,f=(0,i.Z)(e,["as","children","className"]);return(0,s.jsx)(c,(0,a.Z)((0,r.Z)({className:(0,o.Sh)(l().section,d),ref:t},f),{children:u}))}))},5622:function(e,t,n){"use strict";n.d(t,{A2:function(){return u},Ro:function(){return f}});var r=n(7568),a=n(828),i=n(4051),s=n.n(i);function c(e){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.src,r=t.srcSet,a=t.sizes,e.abrupt("return",new Promise((function(e,t){var i=u(r);try{if(!n&&!r)throw new Error("No image src or srcSet provided");var s=new Image;n&&(s.src=n),i&&(s.srcset=i),a&&(s.sizes=a);var c=function(){s.removeEventListener("load",c);var t=s.currentSrc;s=null,e(t)};s.addEventListener("load",c)}catch(o){t("Error loading ".concat(i,": ").concat(o))}})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return"string"===typeof e?e:e.map((function(e){return"".concat(e.src," ").concat(e.width,"w")})).join(", ")}function l(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(s().mark((function e(){var t,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,n=a.length>1&&void 0!==a[1]?a[1]:1,e.abrupt("return",new Promise((function(e){var a=document.createElement("canvas"),i=a.getContext("2d");a.width=t,a.height=n,i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(0,0,t,n),a.toBlob(function(){var t=(0,r.Z)(s().mark((function t(n){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}throw new Error("Video thumbnail failed to load");case 2:r=URL.createObjectURL(n),a.remove(),e(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})));case 2:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(s().mark((function e(t){var n,i,o,d,f,p,h;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.srcSet,i=t.sizes,o=u(n),e.next=4,Promise.all(o.split(", ").map(function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,i,c,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,a.Z)(t.split(" "),2),r=n[0],i=n[1],c=Number(i.replace("w","")),e.next=4,l(c);case 4:return o=e.sent,e.abrupt("return",{src:r,image:o,width:i});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:return d=e.sent,f=d.map((function(e){var t=e.image,n=e.width;return"".concat(t," ").concat(n)})).join(", "),e.next=8,c({srcSet:f,sizes:i});case 8:return p=e.sent,h=d.find((function(e){return e.image===p})),e.abrupt("return",h.src);case 11:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}},1883:function(e){e.exports={footer:"Footer_footer__nKPS_",link:"Footer_link__2Y2qR",date:"Footer_date__d0nD9"}},361:function(e){e.exports={heading:"Heading_heading__209rB"}},2288:function(e){e.exports={image:"Image_image__fhfXL",container:"Image_container__9ry6H",elementWrapper:"Image_elementWrapper__dY5KC",placeholder:"Image_placeholder__rZeKX",element:"Image_element__EpM9I",button:"Image_button__S1k_J"}},4828:function(e){e.exports={section:"Section_section__FuI7l"}}}]);