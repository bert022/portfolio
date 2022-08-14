(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686],{686:function(e,r,n){"use strict";n.r(r),n.d(r,{Model:function(){return _}});var t=n(7568),u=n(1799),a=n(9396),c=n(9534),i=n(828),s=n(9815),o=n(4051),v=n.n(o),f=n(5893),l=n(6240),d=n(7378),p=n(3234),m=n(406),y=n(8899);function x(e,r,n){void 0===n&&(n={});var t=(0,m.i)(e)?e:(0,p.B)(e);return(0,y.b8)("",t,r,n),{stop:function(){return t.stop()},isAnimating:function(){return t.isAnimating()}}}var h=n(4529),w=n(5223),g=n(7294),D=n(9477);const U={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:"\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }\n  ",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform float h;\n\n    varying vec2 vUv;\n\n    void main() {\n\n    \tvec4 sum = vec4( 0.0 );\n\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n    \tgl_FragColor = sum;\n\n    }\n  "},R={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:"\n    varying vec2 vUv;\n\n    void main() {\n\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n  ",fragmentShader:"\n\n  uniform sampler2D tDiffuse;\n  uniform float v;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n    gl_FragColor = sum;\n\n  }\n  "};var k=n(5622),M=n(2362),b=n(3142),P=n(4209),S=n.n(P),C=n(6521),Z="Frame",E="Screen",F={stiffness:40,damping:20,mass:1.4,restSpeed:.001},_=function(e){var r=e.models,n=e.show,t=void 0===n||n,i=e.showDelay,s=void 0===i?0:i,o=e.cameraPosition,v=void 0===o?{x:0,y:0,z:8}:o,p=e.style,m=e.className,y=e.alt,x=(0,c.Z)(e,["models","show","showDelay","cameraPosition","style","className","alt"]),k=(0,g.useState)(!1),P=k[0],C=k[1],Z=(0,g.useRef)(),E=(0,g.useRef)(),_=(0,g.useRef)(),A=(0,g.useRef)(),L=(0,g.useRef)(),z=(0,g.useRef)(),T=(0,g.useRef)(),N=(0,g.useRef)(),I=(0,g.useRef)(),J=(0,g.useRef)(),B=(0,g.useRef)(),K=(0,g.useRef)(),O=(0,g.useRef)(),G=(0,g.useRef)(),W=(0,g.useRef)(),X=(0,g.useRef)(),H=(0,g.useRef)(),q=(0,h.NM)(Z,!1,{threshold:.2}),V=(0,l.J)(),Y=(0,d.q)(0,F),Q=(0,d.q)(0,F),$=(0,w.s)(q),ee=$.measureFps,re=$.isLowFps;(0,g.useEffect)((function(){var e=Z.current,r=e.clientWidth,n=e.clientHeight;z.current=new D.CP7({canvas:E.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),z.current.setPixelRatio(2),z.current.setSize(r,n),z.current.outputEncoding=D.knz,z.current.physicallyCorrectLights=!0,_.current=new D.cPb(36,r/n,.1,100),_.current.position.set(v.x,v.y,v.z),L.current=new D.xsS,A.current=new D.ZAu,L.current.add(A.current);var t=new D.Mig(16777215,1.2),u=new D.Ox3(16777215,1.1),a=new D.Ox3(16777215,.8);a.position.set(-6,2,2),u.position.set(.5,0,.866),W.current=[t,u,a],W.current.forEach((function(e){return L.current.add(e)})),T.current=new D.ZAu,L.current.add(T.current),T.current.position.set(0,0,-.8),T.current.rotateX(Math.PI/2);var c=512;N.current=new D.dd2(c,c),N.current.texture.generateMipmaps=!1,I.current=new D.dd2(c,c),I.current.texture.generateMipmaps=!1;var i=new D.BKK(8,8).rotateX(Math.PI/2),s=new D.vBJ({map:N.current.texture,opacity:.8,transparent:!0});G.current=new D.Kj0(i,s),G.current.scale.y=-1,T.current.add(G.current),X.current=new D.Kj0(i),X.current.visible=!1,T.current.add(X.current);var o=new D.vBJ({color:16777215,opacity:0,transparent:!0});H.current=new D.Kj0(i,o),H.current.rotateX(Math.PI),H.current.position.y-=1e-5,T.current.add(H.current),J.current=new D.iKG(-4,4,4,-4,0,1.5),J.current.rotation.x=Math.PI/2,T.current.add(J.current),B.current=new D.lRF,B.current.userData.darkness={value:3},B.current.onBeforeCompile=function(e){e.uniforms.darkness=B.current.userData.darkness,e.fragmentShader="\n        uniform float darkness;\n        ".concat(e.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );"),"\n      ")},B.current.depthTest=!1,B.current.depthWrite=!1,K.current=new D.jyz(U),K.current.depthTest=!1,O.current=new D.jyz(R),O.current.depthTest=!1;var f=Y.onChange(te),l=Q.onChange(te);return function(){N.current.dispose(),I.current.dispose(),(0,b.Ji)(W.current),(0,b.in)(L.current),(0,b.e8)(z.current),f(),l()}}),[]);var ne=(0,g.useCallback)((function(e){X.current.visible=!0,X.current.material=K.current,X.current.material.uniforms.tDiffuse.value=N.current.texture,K.current.uniforms.h.value=e*(1/256),z.current.setRenderTarget(I.current),z.current.render(X.current,J.current),X.current.material=O.current,X.current.material.uniforms.tDiffuse.value=I.current.texture,O.current.uniforms.v.value=e*(1/256),z.current.setRenderTarget(N.current),z.current.render(X.current,J.current),X.current.visible=!1}),[]),te=(0,g.useCallback)((function(){var e=L.current.background;L.current.background=null,L.current.overrideMaterial=B.current,z.current.setRenderTarget(N.current),z.current.render(L.current,J.current),L.current.overrideMaterial=null,ne(5),ne(2),z.current.setRenderTarget(null),L.current.background=e,A.current.rotation.x=Y.get(),A.current.rotation.y=Q.get(),z.current.render(L.current,_.current),ee(),re.current?z.current.setPixelRatio(1):z.current.setPixelRatio(2)}),[ne,re,ee,Y,Q]);return(0,g.useEffect)((function(){var e=function(e){var r=window.innerWidth,n=window.innerHeight,t=(e.clientX-r/2)/r,u=(e.clientY-n/2)/n;Q.set(t/2),Y.set(u/2)};return q&&!V&&window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[q,V,Y,Q]),(0,g.useEffect)((function(){var e=function(){if(Z.current){var e=Z.current,r=e.clientWidth,n=e.clientHeight;z.current.setSize(r,n),_.current.aspect=r/n,_.current.updateProjectionMatrix(),te()}};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[te]),(0,f.jsxs)("div",(0,a.Z)((0,u.Z)({className:(0,M.Sh)(S().model,m),"data-loaded":P,style:(0,M.Fh)({delay:(0,M.aU)(s)},p),ref:Z,role:"img","aria-label":y},x),{children:[(0,f.jsx)("canvas",{className:S().canvas,ref:E}),r.map((function(e,r){return(0,f.jsx)(j,{renderer:z,modelGroup:A,show:t,showDelay:s,renderFrame:te,index:r,setLoaded:C,model:e},JSON.stringify(e.position))}))]}))},j=function(e){var r=e.renderer,n=e.model,u=e.modelGroup,a=e.renderFrame,c=e.index,o=e.showDelay,f=e.setLoaded,d=e.show,p=(0,g.useState)(),m=p[0],y=p[1],h=(0,l.J)(),w=(0,g.createRef)();(0,g.useEffect)((function(){var e=function(){var e=(0,t.Z)(v().mark((function e(n,t){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.encoding=D.knz,n.flipY=!1,n.anisotropy=r.current.capabilities.getMaxAnisotropy(),n.generateMipmaps=!1,e.next=6,r.current.initTexture(n);case 6:t.material.color=new D.Ilk(16777215),t.material.transparent=!0,t.material.map=n;case 9:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(v().mark((function r(){var f,l,d,p,m,y,g,U,R,M;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return f=n.texture,l=n.position,d=n.url,r.t0=i.Z,r.t1=Promise,r.next=7,b.Et.loadAsync(f.placeholder.src);case 7:return r.t2=r.sent,r.next=10,b.Zf.loadAsync(d);case 10:return r.t3=r.sent,r.t4=[r.t2,r.t3],r.next=14,r.t1.all.call(r.t1,r.t4);case 14:return r.t5=r.sent,y=(0,r.t0)(r.t5,2),g=y[0],U=y[1],u.current.add(U.scene),U.scene.traverse(function(){var r=(0,t.Z)(v().mark((function r(n){return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.material&&(n.material.color=new D.Ilk(2039845),n.material.color.convertSRGBToLinear()),n.name===E&&(w.current=n.clone(),w.current.material=n.material.clone(),n.parent.add(w.current),w.current.material.opacity=1,w.current.position.z+=.001,e(g,w.current),p=(0,t.Z)(v().mark((function r(){var t,u;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,k.Ro)(f);case 2:return t=r.sent,r.next=5,b.Et.loadAsync(t);case 5:return u=r.sent,r.next=8,e(u,n);case 8:x(1,0,{onUpdate:function(e){w.current.material.opacity=e,a()}});case 9:case"end":return r.stop()}}),r)}))));case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()),R=new D.Pa4(l.x,l.y,l.z),h&&(M=U.scene.position).set.apply(M,(0,s.Z)(R.toArray())),n.animation===C.u.SpringUp&&(m=function(){var e,r=new D.Pa4(R.x,R.y-1,R.z);(e=U.scene.position).set.apply(e,(0,s.Z)(r.toArray())),x(r.y,R.y,{type:"spring",delay:(300*c+o)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:function(e){U.scene.position.y=e,a()}})}),n.animation===C.u.LaptopOpen&&(m=function(){var e,r,n=U.scene.children.find((function(e){return e.name===Z})),t=new D.Pa4(D.M8C.degToRad(90),0,0),u=new D.Pa4(0,0,0);return(e=U.scene.position).set.apply(e,(0,s.Z)(R.toArray())),(r=n.rotation).set.apply(r,(0,s.Z)(t.toArray())),x(t.x,u.x,{type:"spring",delay:(300*c+o+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:function(e){n.rotation.x=e,a()}})}),r.abrupt("return",{loadFullResTexture:p,playAnimation:m});case 25:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();y({start:f})}),[]),(0,g.useEffect)((function(){if(m&&d){var e,r=function(){var r=(0,t.Z)(v().mark((function r(){var n,t,u;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.start();case 2:return n=r.sent,t=n.loadFullResTexture,u=n.playAnimation,f(!0),h||(e=u()),r.next=9,t();case 9:h&&a();case 10:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,g.startTransition)((function(){r()})),function(){null===e||void 0===e||e.stop()}}}),[m,d])}},5223:function(e,r,n){"use strict";n.d(r,{s:function(){return u}});var t=n(7294);function u(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=(0,t.useRef)(0),n=(0,t.useRef)(0),u=(0,t.useRef)(0),a=(0,t.useRef)([]),c=(0,t.useRef)(!1);(0,t.useEffect)((function(){n.current=performance.now(),u.current=0,a.current=[]}),[e]);var i=(0,t.useCallback)((function(){var e=performance.now();u.current=u.current+1,e>=n.current+100&&(r.current=100*u.current/(e-n.current)*10,a.current.push(r.current),n.current=e,u.current=0),a.current.length<=9||(a.current=a.current.slice(-9),a.current.every((function(e){return e<60}))&&(c.current=!0),a.current.every((function(e){return e>70}))&&(c.current=!1))}),[]);return{measureFps:i,fps:r,isLowFps:c}}},3142:function(e,r,n){"use strict";n.d(r,{Et:function(){return o},Ji:function(){return d},Zf:function(){return s},e8:function(){return l},in:function(){return v}});var t=n(9477),u=n(4976),a=n(7607);t.CtF.enabled=!0;var c=new u._,i=new a.E;c.setDecoderPath("/draco/"),i.setDRACOLoader(c);var s=i,o=new t.dpR,v=function(e){null===e||void 0===e||e.traverse((function(e){if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)f(e.material);else{var r=!0,n=!1,t=void 0;try{for(var u,a=e.material[Symbol.iterator]();!(r=(u=a.next()).done);r=!0){var c=u.value;f(c)}}catch(i){n=!0,t=i}finally{try{r||null==a.return||a.return()}finally{if(n)throw t}}}}))},f=function(e){e.dispose();var r=!0,n=!1,t=void 0;try{for(var u,a=Object.keys(e)[Symbol.iterator]();!(r=(u=a.next()).done);r=!0){var c,i,s,o=e[u.value];if(o&&"object"===typeof o&&"minFilter"in o)o.dispose(),null===(c=o.source)||void 0===c||null===(i=c.data)||void 0===i||null===(s=i.close)||void 0===s||s.call(i)}}catch(v){n=!0,t=v}finally{try{r||null==a.return||a.return()}finally{if(n)throw t}}},l=function(e){e.dispose(),e=null},d=function(e){var r=!0,n=!1,t=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done);r=!0){var c=u.value;c.parent.remove(c)}}catch(i){n=!0,t=i}finally{try{r||null==a.return||a.return()}finally{if(n)throw t}}}},4209:function(e){e.exports={model:"Model_model__228ej",canvas:"Model_canvas__kaLjL"}}}]);