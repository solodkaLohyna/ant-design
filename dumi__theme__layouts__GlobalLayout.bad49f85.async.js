"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1032],{368655:function(Se,Z,e){e.r(Z),e.d(Z,{HappyProvider:function(){return k}});var I=e(75529),s=e(366680),A=e(974165),C=e(115861),i=e(671002),l=e(601413),q=e(973935),ee=e.t(q,2),x=(0,l.Z)({},ee),Y=x.version,L=x.render,N=x.unmountComponentAtNode,h;try{var te=Number((Y||"").split(".")[0]);te>=18&&(h=x.createRoot)}catch(t){}function G(t){var n=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;n&&(0,i.Z)(n)==="object"&&(n.usingClientEntryPoint=t)}var j="__rc_react_root__";function J(t,n){G(!0);var o=n[j]||h(n);G(!1),o.render(t),n[j]=o}function ne(t,n){L(t,n)}function D(t,n){}function a(t,n){if(h){J(t,n);return}ne(t,n)}function z(t){return U.apply(this,arguments)}function U(){return U=(0,C.Z)((0,A.Z)().mark(function t(n){return(0,A.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.resolve().then(function(){var u;(u=n[j])===null||u===void 0||u.unmount(),delete n[j]}));case 1:case"end":return r.stop()}},t)})),U.apply(this,arguments)}function ue(t){N(t)}function ce(t){}function d(t){return F.apply(this,arguments)}function F(){return F=(0,C.Z)((0,A.Z)().mark(function t(n){return(0,A.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(h===void 0){r.next=2;break}return r.abrupt("return",z(n));case 2:ue(n);case 3:case"end":return r.stop()}},t)})),F.apply(this,arguments)}var v=e(667294),g=e(204942),B=e(297685),$=e(510274),de=e(693967),ae=e.n(de),T=e(82225),M=e(75164),P=e(900210),re=(0,P.createTheme)(function(t){return t}),O="data-happy-wave-target",R=new P.Keyframes("antWaveTargetEffect",{"0%":{transform:"scale(1)"},"10%":{transform:"scale(1.1)"},"35%":{transform:"scale(0.94)"},"60%":{transform:"scale(1.05)"},"85%":{transform:"scale(0.97)"},"100%":{transform:"scale(1)"}}),H=new P.Keyframes("antWaveDotEffect",{"0%":{opacity:0,left:"var(--start-x)",top:"var(--start-y)",width:"var(--start-size)",height:"var(--start-size)",background:"var(--background)",border:"var(--border)"},"25%":{opacity:1},"50%":{opacity:.8},"100%":{opacity:0,left:"var(--end-x)",top:"var(--end-y)",width:"var(--end-size)",height:"var(--end-size)",background:"var(--background)",border:"var(--border)"}});function oe(t,n,o){var r={theme:re,token:o};(0,P.useStyleRegister)((0,l.Z)((0,l.Z)({},r),{},{path:["HappyWorkTheme","target"]}),function(){return(0,g.Z)({},"[".concat(O,"-").concat(n,"], & [").concat(O,"-").concat(n,"]"),{animationName:R,animationDuration:"0.45s",animationTimingFunction:"ease-in-out",animationFillMode:"backwards"})}),(0,P.useStyleRegister)((0,l.Z)((0,l.Z)({},r),{},{hashId:n,path:["HappyWorkTheme","effect"]}),function(){var u=".".concat(t);return[(0,g.Z)({},u,(0,g.Z)({position:"fixed",pointerEvents:"none",zIndex:999},"".concat(u,"-dot"),{boxSizing:"border-box",position:"absolute",borderRadius:"100%",opacity:0,transform:"translate(-50%, -50%)",zIndex:999,"&.happy-in-out":{animationName:H,animationDuration:o.motionDurationSlow,animationTimingFunction:"linear",animationFillMode:"backwards"}}))]})}var Q=7,p=10;function X(t,n,o,r,u,E){return t>=o&&t<=u&&n>=r&&n<=E}function m(t){var n=t.hashId,o=t.target,r=t.token,u=t.onFinish,E="happy-wave",W="".concat(E,"-dot"),se=v.useState(null),w=(0,B.Z)(se,2),f=w[0],b=w[1],V=v.useState(0),ie=(0,B.Z)(V,2),y=ie[0],K=ie[1],_=v.useState(0),ve=(0,B.Z)(_,2),Ce=ve[0],Me=ve[1];oe(E,n,r);var me="".concat(O,"-").concat(n);return v.useEffect(function(){var c=(0,M.Z)(function(){if(!["-dangerous","-error"].some(function(Re){return o.className.includes(Re)})){var S=o.getBoundingClientRect(),fe=S.width,le=S.height;K(S.left+fe/2),Me(S.top+le/2),b([]);var Ee=Math.min(fe,le),Oe=Math.max(fe,le),xe=Ee/2,Ze=Oe/2,he=fe/2,ge=le/2,Te=15,Pe=30,pe=he+Te,Ae=ge+Te,Ne=he+Pe,ye=ge+Pe,Ue=Ee>=20?p:Q;setTimeout(function(){var Re=Math.random()*360,Fe=r.colorPrimary,Be=new $.C(Fe).toHsv();Be.h-=30;var Ge=new $.C(Be).toHexString();b(new Array(Ue).fill(null).map(function(Qe,$e){for(var Je=360/Ue,Le=Re+Je*$e,Ie=0,De=0,je=xe-1;je<=Ze;je+=1){var Xe=Math.cos(Le*Math.PI/180)*je,Ve=Math.sin(Le*Math.PI/180)*je;if(!X(Xe,Ve,-he,-ge,he,ge))break;Ie=Xe,De=Ve}var He=Ie,We=De,be=xe,Ke=Math.random()*(Ne-pe)+pe,Ye=Math.random()*(ye-Ae)+Ae;do He=Math.cos(Le*Math.PI/180)*be,We=Math.sin(Le*Math.PI/180)*be,be+=1;while(X(He,We,-Ke,-Ye,Ke,Ye));var ze=Math.random()*3+3;return le>=20&&(ze=Math.random()*4+6),{key:$e+1,startX:"".concat(Ie,"px"),startY:"".concat(De,"px"),endX:"".concat(He,"px"),endY:"".concat(We,"px"),startSize:"".concat(ze,"px"),endSize:"".concat(Math.random()>.75?ze:0,"px"),type:Math.random()>.6?"outlined":"fill",color:Math.random()>.5?Fe:Ge}}))},50),o.setAttribute(me,"true")}});return function(){M.Z.cancel(c)}},[]),v.useEffect(function(){var c=setTimeout(function(){o.removeAttribute(me),u()},600);return function(){clearTimeout(c)}},[]),f?v.createElement("div",{className:ae()(E,n),style:{left:y,top:Ce}},v.createElement(T.V4,{component:!1,keys:f,motionAppear:!0,motionName:"happy-in-out"},function(c){var S,fe=c.className,le=c.style,Ee=c.key,Oe=c.startX,xe=c.startY,Ze=c.endX,he=c.endY,ge=c.startSize,Te=c.endSize,Pe=c.type,pe=c.color,Ae="".concat(W,"-").concat(Ee),Ne=ae()(W,fe,Ae),ye=(S={},(0,g.Z)(S,"--start-x",Oe),(0,g.Z)(S,"--start-y",xe),(0,g.Z)(S,"--end-x",Ze),(0,g.Z)(S,"--end-y",he),(0,g.Z)(S,"--start-size",ge),(0,g.Z)(S,"--end-size",Te),S);return Pe==="fill"?ye["--background"]=pe:ye["--border"]="1px solid ".concat(pe),v.createElement("div",{className:Ne,style:(0,l.Z)((0,l.Z)({},le),ye)})})):null}function k(t){var n=t.children,o=t.disabled,r=(0,s.Z)(function(E,W){var se=W.token,w=W.hashId,f=document.createElement("div");f.style.position="absolute",f.style.left="0px",f.style.top="0px",document.body.appendChild(f),a(v.createElement(m,{target:E,token:se,hashId:w,onFinish:function(){d(f).then(function(){var V;(V=f.parentElement)===null||V===void 0||V.removeChild(f)})}}),f)}),u=v.useMemo(function(){return o?{}:{showEffect:r}},[o]);return v.createElement(I.ZP,{wave:u},n)}},49313:function(Se,Z,e){e.d(Z,{Z:function(){return A},f:function(){return s}});var I=e(667294),s=I.createContext(!1);function A(){return I.useContext(s)}},438746:function(Se,Z,e){e.d(Z,{Z:function(){return L}});var I=e(97857),s=e.n(I),A=e(952677),C=e.n(A),i=e(805574),l=e.n(i),q=e(385956),ee=e(667294),x=e(302559);function Y(N){return N.replace("-cn","").replace(/\/$/,"")}function L(){var N=(0,q.useLocation)(),h=N.search,te=(0,x.default)(),G=l()(te,2),j=G[1],J=ee.useCallback(function(ne,D){var a=Y(ne);if(j==="cn"&&(a="".concat(a,"-cn")),h&&(a="".concat(a).concat(h)),D){var z;C()(D)==="object"?z=D[j]:z=D,a="".concat(a,"#").concat(z)}return a},[j,h]);return s()(s()({},N),{},{pathname:Y(N.pathname),getLink:J})}},840070:function(Se,Z,e){e.r(Z),e.d(Z,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return g},default:function(){return de}});var I=e(97857),s=e.n(I),A=e(805574),C=e.n(A),i=e(667294),l=e(900210),q=e(368655),ee=e(359020),x=e(965516),Y=e(471232),L=e(385956),N=e(49313),h=e(217187),te=e(438746),G=e(513769),j=e.n(G),J=e(75529),ne=e(647759),D=e(438199),a=e(785893),z=["children","theme"],U=64,ue=38,ce=function(T){var M=T.children,P=T.theme,re=j()(T,z),O=(0,i.useContext)(J.ZP.ConfigContext),R=O.getPrefixCls,H=O.iconPrefixCls,oe=R(),Q=x.Z.useToken(),p=Q.token,X=(0,i.useContext)(D.Z),m=X.bannerVisible;return i.useEffect(function(){J.ZP.config({theme:P})},[P]),(0,a.jsx)(ne.f6,s()(s()({},re),{},{theme:P,customToken:{headerHeight:U,bannerHeight:ue,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:p.colorFillTertiary,antCls:".".concat(oe),iconCls:".".concat(H),marginFarXS:p.marginXXL/6*7,marginFarSM:p.marginXXL/3*5,marginFar:p.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:U+p.margin+(m?ue:0)},children:M}))},d=ce,F=i.lazy(function(){return Promise.all([e.e(7898),e.e(4137),e.e(263)]).then(e.bind(e,531434))}),v=768,g="ANT_DESIGN_NOT_SHOW_BANNER",B=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return T.map(function(M){return M==="dark"?x.Z.darkAlgorithm:M==="compact"?x.Z.compactAlgorithm:null}).filter(Boolean)},$=function(){var T=(0,L.useOutlet)(),M=(0,te.Z)(),P=M.pathname,re=(0,L.useSearchParams)(),O=C()(re,2),R=O[0],H=O[1],oe=(0,h.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),Q=C()(oe,2),p=Q[0],X=p.theme,m=X===void 0?[]:X,k=p.direction,t=p.isMobile,n=p.bannerVisible,o=n===void 0?!1:n,r=Q[1],u=(0,i.useCallback)(function(y){r(function(ve){return s()(s()({},ve),y)});var K=R.toString(),_=R;Object.entries(y).forEach(function(ve){var Ce=C()(ve,2),Me=Ce[0],me=Ce[1];if(Me==="direction"&&(me==="rtl"?_.set("direction","rtl"):_.delete("direction")),Me==="theme"){var c;_=(0,L.createSearchParams)(s()(s()({},_),{},{theme:me.filter(function(S){return S!=="light"})})),(c=document.querySelector("html"))===null||c===void 0||c.setAttribute("data-prefers-color",me.includes("dark")?"dark":"light")}}),_.toString()!==K&&H(_)},[R,H]),E=function(){u({isMobile:window.innerWidth<v})};(0,i.useEffect)(function(){var y=R.getAll("theme"),K=R.get("direction");return r({theme:y,direction:K==="rtl"?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",y.includes("dark")?"dark":"light"),E(),window.addEventListener("resize",E),function(){window.removeEventListener("resize",E)}},[]);var W=i.useMemo(function(){return{direction:k,updateSiteConfig:u,theme:m,isMobile:t,bannerVisible:o}},[t,k,u,m,o]),se=i.useMemo(function(){return{algorithm:B(m),token:{motion:!m.includes("motion-off")},cssVar:!0,hashed:!1}},[m]),w=i.useState(function(){return(0,l.createCache)()}),f=C()(w,1),b=f[0];(0,L.useServerInsertedHTML)(function(){var y=(0,l.extractStyle)(b,{plain:!0,types:"style"});return(0,a.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:y}})}),(0,L.useServerInsertedHTML)(function(){var y=(0,l.extractStyle)(b,{plain:!0,types:["cssVar","token"]});return(0,a.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:y}})}),(0,L.useServerInsertedHTML)(function(){return(0,a.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,ee.$Z)()}})});var V=P.startsWith("/~demos"),ie=T;return V||(ie=(0,a.jsxs)(Y.Z,{children:[T,(0,a.jsx)(i.Suspense,{children:(0,a.jsx)(F,{value:m,onChange:function(K){return u({theme:K})}})})]})),(0,a.jsx)(N.f.Provider,{value:m.includes("dark"),children:(0,a.jsx)(l.StyleProvider,{cache:b,linters:[l.legacyNotSelectorLinter,l.parentSelectorLinter,l.NaNLinter],children:(0,a.jsx)(D.Z.Provider,{value:W,children:(0,a.jsx)(d,{theme:se,children:(0,a.jsx)(q.HappyProvider,{disabled:!m.includes("happy-work"),children:ie})})})})})},de=$},471232:function(Se,Z,e){e.d(Z,{Z:function(){return ue}});var I=e(97857),s=e.n(I),A=e(805574),C=e.n(A),i=e(667294),l=e(693967),q=e.n(l),ee=e(544695),x=e(73287),Y=e(215570),L=e(269924),N=e(890887),h=e(414466),te=e(9783),G=e.n(te),j=e(286665),J=function(d){var F=d.componentCls,v=d.colorText,g=d.fontSize,B=d.lineHeight,$=d.fontFamily;return G()({},F,{color:v,fontSize:g,lineHeight:B,fontFamily:$})},ne=function(){return{}},D=(0,j.I$)("App",J,ne),a=e(785893),z=function(){return i.useContext(h.Z)},U=function(d){var F=d.prefixCls,v=d.children,g=d.className,B=d.rootClassName,$=d.message,de=d.notification,ae=d.style,T=d.component,M=T===void 0?"div":T,P=(0,i.useContext)(x.E_),re=P.getPrefixCls,O=re("app",F),R=D(O),H=C()(R,3),oe=H[0],Q=H[1],p=H[2],X=q()(Q,O,g,B,p),m=(0,i.useContext)(h.J),k=i.useMemo(function(){return{message:s()(s()({},m.message),$),notification:s()(s()({},m.notification),de)}},[$,de,m.message,m.notification]),t=(0,Y.Z)(k.message),n=C()(t,2),o=n[0],r=n[1],u=(0,N.Z)(k.notification),E=C()(u,2),W=E[0],se=E[1],w=(0,L.Z)(),f=C()(w,2),b=f[0],V=f[1],ie=i.useMemo(function(){return{message:o,notification:W,modal:b}},[o,W,b]);(0,ee.ln)("App")(!(p&&M===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");var y=M===!1?i.Fragment:M,K={className:X,style:ae};return oe((0,a.jsx)(h.Z.Provider,{value:ie,children:(0,a.jsx)(h.J.Provider,{value:k,children:(0,a.jsxs)(y,s()(s()({},M===!1?void 0:K),{},{children:[V,r,se,v]}))})}))};U.useApp=z;var ue=U}}]);
