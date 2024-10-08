if(function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).EmblaCarousel=n()}(this,(function(){"use strict";function t(t){return"number"==typeof t}function n(t){return"string"==typeof t}function e(t){return"boolean"==typeof t}function o(t){return"[object Object]"===Object.prototype.toString.call(t)}function i(t){return Math.abs(t)}function r(t){return Math.sign(t)}function s(t,n){return i(t-n)}function c(t){return f(t).map(Number)}function u(t){return t[a(t)]}function a(t){return Math.max(0,t.length-1)}function l(t,n){return n===a(t)}function d(t,n=0){return Array.from(Array(t),((t,e)=>n+e))}function f(t){return Object.keys(t)}function p(t,n){return[t,n].reduce(((t,n)=>(f(n).forEach((e=>{const i=t[e],r=n[e],s=o(i)&&o(r);t[e]=s?p(i,r):r})),t)),{})}function g(t,n){return void 0!==n.MouseEvent&&t instanceof n.MouseEvent}function m(){let t=[];const n={add:function(e,o,i,r={passive:!0}){let s;if("addEventListener"in e)e.addEventListener(o,i,r),s=()=>e.removeEventListener(o,i,r);else{const t=e;t.addListener(i),s=()=>t.removeListener(i)}return t.push(s),n},clear:function(){t=t.filter((t=>t()))}};return n}function h(t=0,n=0){const e=i(t-n);function o(n){return n<t}function r(t){return t>n}function s(t){return o(t)||r(t)}return{length:e,max:n,min:t,constrain:function(e){return s(e)?o(e)?t:n:e},reachedAny:s,reachedMax:r,reachedMin:o,removeOffset:function(t){return e?t-e*Math.ceil((t-n)/e):t}}}function y(t,n,e){const{constrain:o}=h(0,t),r=t+1;let s=c(n);function c(t){return e?i((r+t)%r):o(t)}function u(){return s}function a(){return y(t,u(),e)}const l={get:u,set:function(t){return s=c(t),l},add:function(t){return a().set(u()+t)},clone:a};return l}function b(t,n,o,c,u,a,l,d,f,p,y,b,v,S,E,x,w,L,A){const{cross:O,direction:I}=t,T=["INPUT","SELECT","TEXTAREA"],D={passive:!1},M=m(),N=m(),F=h(50,225).constrain(S.measure(20)),k={mouse:300,touch:400},C={mouse:500,touch:600},H=E?43:25;let P=!1,B=0,V=0,z=!1,q=!1,R=!1,j=!1;function U(t){if(!g(t,c)&&t.touches.length>=2)return $(t);const n=a.readPoint(t),e=a.readPoint(t,O),o=s(n,B),i=s(e,V);if(!q&&!j){if(!t.cancelable)return $(t);if(q=o>i,!q)return $(t)}const r=a.pointerMove(t);o>x&&(R=!0),p.useFriction(.3).useDuration(.75),d.start(),u.add(I(r)),t.preventDefault()}function $(t){const n=y.byDistance(0,!1).index!==b.get(),e=a.pointerUp(t)*(E?C:k)[j?"mouse":"touch"],o=function(t,n){const e=b.add(-1*r(t)),o=y.byDistance(t,!E).distance;return E||i(t)<F?o:w&&n?.5*o:y.byIndex(e.get(),0).distance}(I(e),n),c=function(t,n){if(0===t||0===n)return 0;if(i(t)<=i(n))return 0;const e=s(i(t),i(n));return i(e/t)}(e,o),u=H-10*c,l=L+c/50;q=!1,z=!1,N.clear(),p.useDuration(u).useFriction(l),f.distance(o,!E),j=!1,v.emit("pointerUp")}function _(t){R&&(t.stopPropagation(),t.preventDefault(),R=!1)}return{init:function(t){if(!A)return;function i(i){(e(A)||A(t,i))&&function(t){const e=g(t,c);j=e,R=E&&e&&!t.buttons&&P,P=s(u.get(),l.get())>=2,e&&0!==t.button||function(t){const n=t.nodeName||"";return T.includes(n)}(t.target)||(z=!0,a.pointerDown(t),p.useFriction(0).useDuration(0),u.set(l),function(){const t=j?o:n;N.add(t,"touchmove",U,D).add(t,"touchend",$).add(t,"mousemove",U,D).add(t,"mouseup",$)}(),B=a.readPoint(t),V=a.readPoint(t,O),v.emit("pointerDown"))}(i)}const r=n;M.add(r,"dragstart",(t=>t.preventDefault()),D).add(r,"touchmove",(()=>{}),D).add(r,"touchend",(()=>{})).add(r,"touchstart",i).add(r,"mousedown",i).add(r,"touchcancel",$).add(r,"contextmenu",$).add(r,"click",_,!0)},destroy:function(){M.clear(),N.clear()},pointerDown:function(){return z}}}function v(t,n){let e,o;function r(t){return t.timeStamp}function s(e,o){const i="client"+("x"===(o||t.scroll)?"X":"Y");return(g(e,n)?e:e.touches[0])[i]}return{pointerDown:function(t){return e=t,o=t,s(t)},pointerMove:function(t){const n=s(t)-s(o),i=r(t)-r(e)>170;return o=t,i&&(e=t),n},pointerUp:function(t){if(!e||!o)return 0;const n=s(o)-s(e),c=r(t)-r(e),u=r(t)-r(o)>170,a=n/c;return c&&!u&&i(a)>.1?a:0},readPoint:s}}function S(t,n,o,r,s,c,u){const a=[t].concat(r);let l,d,f=[],p=!1;function g(t){return s.measureSize(u.measure(t))}return{init:function(s){c&&(d=g(t),f=r.map(g),l=new ResizeObserver((o=>{(e(c)||c(s,o))&&function(e){for(const o of e){if(p)return;const e=o.target===t,c=r.indexOf(o.target),u=e?d:f[c];if(i(g(e?t:r[c])-u)>=.5){s.reInit(),n.emit("resize");break}}}(o)})),o.requestAnimationFrame((()=>{a.forEach((t=>l.observe(t)))})))},destroy:function(){p=!0,l&&l.disconnect()}}}function E(t,n,e,o,r){const s=r.measure(10),c=r.measure(50),u=h(.1,.99);let a=!1;function l(){return!a&&!!t.reachedAny(e.get())&&!!t.reachedAny(n.get())}return{shouldConstrain:l,constrain:function(r){if(!l())return;const a=t.reachedMin(n.get())?"min":"max",d=i(t[a]-n.get()),f=e.get()-n.get(),p=u.constrain(d/c);e.subtract(f*p),!r&&i(f)<s&&(e.set(t.constrain(e.get())),o.useDuration(25).useBaseFriction())},toggleActive:function(t){a=!t}}}function x(t,n,e,o){const i=n.min+.1,r=n.max+.1,{reachedMin:s,reachedMax:c}=h(i,r);return{loop:function(n){if(!function(t){return 1===t?c(e.get()):-1===t&&s(e.get())}(n))return;const i=t*(-1*n);o.forEach((t=>t.add(i)))}}}function w(n,o,i,r,s,c,u,a){const l={passive:!0,capture:!0};let d=0;function f(t){"Tab"===t.code&&(d=(new Date).getTime())}return{init:function(p){a&&(c.add(document,"keydown",f,!1),o.forEach(((o,f)=>{c.add(o,"focus",(o=>{(e(a)||a(p,o))&&function(e){if((new Date).getTime()-d>10)return;u.emit("slideFocusStart"),n.scrollLeft=0;const o=i.findIndex((t=>t.includes(e)));t(o)&&(s.useDuration(0),r.index(o,0),u.emit("slideFocus"))}(f)}),l)})))}}}function L(n){let e=n;function o(n){return t(n)?n:n.get()}return{get:function(){return e},set:function(t){e=o(t)},add:function(t){e+=o(t)},subtract:function(t){e-=o(t)}}}function A(t,n){const e="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},o=n.style;let i=!1;return{clear:function(){i||(o.transform="",n.getAttribute("style")||n.removeAttribute("style"))},to:function(n){i||(o.transform=e(t.direction(n)))},toggleActive:function(t){i=!t}}}function O(t,n,e,o,i,r,s,u,a){const l=c(i),d=c(i).reverse(),f=function(){const t=s[0];return m(g(d,t),e,!1)}().concat(function(){const t=n-s[0]-1;return m(g(l,t),-e,!0)}());function p(t,n){return t.reduce(((t,n)=>t-i[n]),n)}function g(t,n){return t.reduce(((t,e)=>p(t,n)>0?t.concat([e]):t),[])}function m(i,s,c){const l=function(t){return r.map(((e,i)=>({start:e-o[i]+.5+t,end:e+n-.5+t})))}(s);return i.map((n=>{const o=c?0:-e,i=c?e:0,r=c?"end":"start",s=l[n][r];return{index:n,loopPoint:s,slideLocation:L(-1),translate:A(t,a[n]),target:()=>u.get()>s?o:i}}))}return{canLoop:function(){return f.every((({index:t})=>p(l.filter((n=>n!==t)),n)<=.1))},clear:function(){f.forEach((t=>t.translate.clear()))},loop:function(){f.forEach((t=>{const{target:n,translate:e,slideLocation:o}=t,i=n();i!==o.get()&&(e.to(i),o.set(i))}))},loopPoints:f}}function I(t,n,o){let i,r=!1;return{init:function(s){o&&(i=new MutationObserver((t=>{r||(e(o)||o(s,t))&&function(t){for(const e of t)if("childList"===e.type){s.reInit(),n.emit("slidesChanged");break}}(t)})),i.observe(t,{childList:!0}))},destroy:function(){i&&i.disconnect(),r=!0}}}function T(t,n,e,o){const i={};let r,s=null,c=null,u=!1;return{init:function(){r=new IntersectionObserver((t=>{u||(t.forEach((t=>{const e=n.indexOf(t.target);i[e]=t})),s=null,c=null,e.emit("slidesInView"))}),{root:t.parentElement,threshold:o}),n.forEach((t=>r.observe(t)))},destroy:function(){r&&r.disconnect(),u=!0},get:function(t=!0){if(t&&s)return s;if(!t&&c)return c;const n=function(t){return f(i).reduce(((n,e)=>{const o=parseInt(e),{isIntersecting:r}=i[o];return(t&&r||!t&&!r)&&n.push(o),n}),[])}(t);return t&&(s=n),t||(c=n),n}}}function D(n,e,o,r,s,l,d,f,p){const{startEdge:g,endEdge:m,direction:h}=n,y=t(o);return{groupSlides:function(t){return y?function(t,n){return c(t).filter((t=>t%n==0)).map((e=>t.slice(e,e+n)))}(t,o):function(t){return t.length?c(t).reduce(((n,o,c)=>{const y=u(n)||0,b=0===y,v=o===a(t),S=s[g]-l[y][g],E=s[g]-l[o][m],x=!r&&b?h(d):0,w=i(E-(!r&&v?h(f):0)-(S+x));return c&&w>e+p&&n.push(o),v&&n.push(t.length),n}),[]).map(((n,e,o)=>{const i=Math.max(o[e-1]||0);return t.slice(i,n)})):[]}(t)}}}function M(t,e,o,f,p,g,M){const{align:N,axis:F,direction:k,startIndex:C,loop:H,duration:P,dragFree:B,dragThreshold:V,inViewThreshold:z,slidesToScroll:q,skipSnaps:R,containScroll:j,watchResize:U,watchSlides:$,watchDrag:_,watchFocus:G}=g,W={measure:function(t){const{offsetTop:n,offsetLeft:e,offsetWidth:o,offsetHeight:i}=t;return{top:n,right:e+o,bottom:n+i,left:e,width:o,height:i}}},J=W.measure(e),Q=o.map(W.measure),X=function(t,n){const e="rtl"===n,o="y"===t,i=!o&&e?-1:1;return{scroll:o?"y":"x",cross:o?"x":"y",startEdge:o?"top":e?"right":"left",endEdge:o?"bottom":e?"left":"right",measureSize:function(t){const{height:n,width:e}=t;return o?n:e},direction:function(t){return t*i}}}(F,k),Y=X.measureSize(J),K=function(t){return{measure:function(n){return t*(n/100)}}}(Y),Z=function(t,e){const o={start:function(){return 0},center:function(t){return i(t)/2},end:i};function i(t){return e-t}return{measure:function(i,r){return n(t)?o[t](i):t(e,i,r)}}}(N,Y),tt=!H&&!!j,nt=H||!!j,{slideSizes:et,slideSizesWithGaps:ot,startGap:it,endGap:rt}=function(t,n,e,o,r,s){const{measureSize:c,startEdge:a,endEdge:d}=t,f=e[0]&&r,p=function(){if(!f)return 0;const t=e[0];return i(n[a]-t[a])}(),g=function(){if(!f)return 0;const t=s.getComputedStyle(u(o));return parseFloat(t.getPropertyValue(`margin-${d}`))}(),m=e.map(c),h=e.map(((t,n,e)=>{const o=!n,i=l(e,n);return o?m[n]+p:i?m[n]+g:e[n+1][a]-t[a]})).map(i);return{slideSizes:m,slideSizesWithGaps:h,startGap:p,endGap:g}}(X,J,Q,o,nt,p),st=D(X,Y,q,H,J,Q,it,rt,2),{snaps:ct,snapsAligned:ut}=function(t,n,e,o,r){const{startEdge:s,endEdge:c}=t,{groupSlides:a}=r,l=a(o).map((t=>u(t)[c]-t[0][s])).map(i).map(n.measure),d=o.map((t=>e[s]-t[s])).map((t=>-i(t))),f=a(d).map((t=>t[0])).map(((t,n)=>t+l[n]));return{snaps:d,snapsAligned:f}}(X,Z,J,Q,st),at=-u(ct)+u(ot),{snapsContained:lt,scrollContainLimit:dt}=function(t,n,e,o){const i=h(-n+t,0),r=e.map(((t,n)=>{const{min:o,max:r}=i,s=i.constrain(t),c=!n,u=l(e,n);return c?r:u||a(o,s)?o:a(r,s)?r:s})).map((t=>parseFloat(t.toFixed(3)))),c=function(){const t=r[0],n=u(r);return h(r.lastIndexOf(t),r.indexOf(n)+1)}();function a(t,n){return s(t,n)<1}return{snapsContained:function(){if(n<=t+2)return[i.max];if("keepSnaps"===o)return r;const{min:e,max:s}=c;return r.slice(e,s)}(),scrollContainLimit:c}}(Y,at,ut,j),ft=tt?lt:ut,{limit:pt}=function(t,n,e){const o=n[0];return{limit:h(e?o-t:u(n),o)}}(at,ft,H),gt=y(a(ft),C,H),mt=gt.clone(),ht=c(o),yt=function(t,n,e,o){const i=m(),r=1e3/60;let s=null,c=0,u=0;function a(t){if(!u)return;s||(s=t);const i=t-s;for(s=t,c+=i;c>=r;)e(r),c-=r;o(c/r),u&&n.requestAnimationFrame(a)}function l(){n.cancelAnimationFrame(u),s=null,c=0,u=0}return{init:function(){i.add(t,"visibilitychange",(()=>{t.hidden&&(s=null,c=0)}))},destroy:function(){l(),i.clear()},start:function(){u||(u=n.requestAnimationFrame(a))},stop:l,update:()=>e(r),render:o}}(f,p,(t=>(({dragHandler:t,scrollBody:n,scrollBounds:e,options:{loop:o}},i)=>{o||e.constrain(t.pointerDown()),n.seek(i)})(Nt,t)),(t=>(({scrollBody:t,translate:n,location:e,offsetLocation:o,scrollLooper:i,slideLooper:r,dragHandler:s,animation:c,eventHandler:u,scrollBounds:a,options:{loop:l}},d)=>{const f=t.settled(),p=!a.shouldConstrain(),g=l?f:f&&p;g&&!s.pointerDown()&&(c.stop(),u.emit("settle")),g||u.emit("scroll");const m=e.get()*d+St.get()*(1-d);o.set(m),l&&(i.loop(t.direction()),r.loop()),n.to(o.get())})(Nt,t))),bt=ft[gt.get()],vt=L(bt),St=L(bt),Et=L(bt),xt=L(bt),wt=function(t,n,e,o,s){let c=0,u=0,a=s,l=.68,d=t.get(),f=0;function p(t){return a=t,m}function g(t){return l=t,m}const m={direction:function(){return u},duration:function(){return a},velocity:function(){return c},seek:function(n){const i=n/1e3,s=a*i,p=o.get()-t.get();let g=0;return a?(e.set(t),c+=p/s,c*=l,d+=c,t.add(c*i),g=d-f):(c=0,e.set(o),t.set(o),g=p),u=r(g),f=d,m},settled:function(){return i(o.get()-n.get())<.001},useBaseFriction:function(){return g(.68)},useBaseDuration:function(){return p(s)},useFriction:g,useDuration:p};return m}(vt,Et,St,xt,P),Lt=function(t,n,e,o,s){const{reachedAny:c,removeOffset:a,constrain:l}=o;function d(t){return t.concat().sort(((t,n)=>i(t)-i(n)))[0]}function f(n,o){const i=[n,n+e,n-e];if(!t)return n;if(!o)return d(i);const s=i.filter((t=>r(t)===o));return s.length?d(s):u(i)-e}return{byDistance:function(e,o){const r=s.get()+e,{index:u,distance:d}=function(e){const o=t?a(e):l(e),r=n.map(((t,n)=>({diff:f(t-o,0),index:n}))).sort(((t,n)=>i(t.diff)-i(n.diff))),{index:s}=r[0];return{index:s,distance:o}}(r),p=!t&&c(r);return!o||p?{index:u,distance:e}:{index:u,distance:e+f(n[u]-d,0)}},byIndex:function(t,e){return{index:t,distance:f(n[t]-s.get(),e)}},shortcut:f}}(H,ft,at,pt,xt),At=function(t,n,e,o,i,r,s){function c(i){const c=i.distance,u=i.index!==n.get();r.add(c),c&&(o.duration()?t.start():(t.update(),t.render(1),t.update())),u&&(e.set(n.get()),n.set(i.index),s.emit("select"))}return{distance:function(t,n){c(i.byDistance(t,n))},index:function(t,e){const o=n.clone().set(t);c(i.byIndex(o.get(),e))}}}(yt,gt,mt,wt,Lt,xt,M),Ot=function(t){const{max:n,length:e}=t;return{get:function(t){return e?(t-n)/-e:0}}}(pt),It=m(),Tt=T(e,o,M,z),{slideRegistry:Dt}=function(t,n,e,o,i,r){const{groupSlides:s}=i,{min:c,max:f}=o;return{slideRegistry:function(){const o=s(r),i=!t||"keepSnaps"===n;return 1===e.length?[r]:i?o:o.slice(c,f).map(((t,n,e)=>{const o=!n,i=l(e,n);return o?d(u(e[0])+1):i?d(a(r)-u(e)[0]+1,u(e)[0]):t}))}()}}(tt,j,ft,dt,st,ht),Mt=w(t,o,Dt,At,wt,It,M,G),Nt={ownerDocument:f,ownerWindow:p,eventHandler:M,containerRect:J,slideRects:Q,animation:yt,axis:X,dragHandler:b(X,t,f,p,xt,v(X,p),vt,yt,At,wt,Lt,gt,M,K,B,V,R,.68,_),eventStore:It,percentOfView:K,index:gt,indexPrevious:mt,limit:pt,location:vt,offsetLocation:Et,previousLocation:St,options:g,resizeHandler:S(e,M,p,o,X,U,W),scrollBody:wt,scrollBounds:E(pt,Et,xt,wt,K),scrollLooper:x(at,pt,Et,[vt,Et,St,xt]),scrollProgress:Ot,scrollSnapList:ft.map(Ot.get),scrollSnaps:ft,scrollTarget:Lt,scrollTo:At,slideLooper:O(X,Y,at,et,ot,ct,ft,Et,o),slideFocus:Mt,slidesHandler:I(e,M,$),slidesInView:Tt,slideIndexes:ht,slideRegistry:Dt,slidesToScroll:st,target:xt,translate:A(X,e)};return Nt}const N={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function F(t){function n(t,n){return p(t,n||{})}const e={mergeOptions:n,optionsAtMedia:function(e){const o=e.breakpoints||{},i=f(o).filter((n=>t.matchMedia(n).matches)).map((t=>o[t])).reduce(((t,e)=>n(t,e)),{});return n(e,i)},optionsMediaQueries:function(n){return n.map((t=>f(t.breakpoints||{}))).reduce(((t,n)=>t.concat(n)),[]).map(t.matchMedia)}};return e}function k(t,e,o){const i=t.ownerDocument,r=i.defaultView,s=F(r),c=function(t){let n=[];return{init:function(e,o){return n=o.filter((({options:n})=>!1!==t.optionsAtMedia(n).active)),n.forEach((n=>n.init(e,t))),o.reduce(((t,n)=>Object.assign(t,{[n.name]:n})),{})},destroy:function(){n=n.filter((t=>t.destroy()))}}}(s),u=m(),a=function(){let t,n={};function e(t){return n[t]||[]}const o={init:function(n){t=n},emit:function(n){return e(n).forEach((e=>e(t,n))),o},off:function(t,i){return n[t]=e(t).filter((t=>t!==i)),o},on:function(t,i){return n[t]=e(t).concat([i]),o},clear:function(){n={}}};return o}(),{mergeOptions:l,optionsAtMedia:d,optionsMediaQueries:f}=s,{on:p,off:g,emit:h}=a,y=T;let b,v,S,E,x=!1,w=l(N,k.globalOptions),L=l(w),A=[];function O(n){const e=M(t,S,E,i,r,n,a);return n.loop&&!e.slideLooper.canLoop()?O(Object.assign({},n,{loop:!1})):e}function I(e,o){x||(w=l(w,e),L=d(w),A=o||A,function(){const{container:e,slides:o}=L,i=n(e)?t.querySelector(e):e;S=i||t.children[0];const r=n(o)?S.querySelectorAll(o):o;E=[].slice.call(r||S.children)}(),b=O(L),f([w,...A.map((({options:t})=>t))]).forEach((t=>u.add(t,"change",T))),L.active&&(b.translate.to(b.location.get()),b.animation.init(),b.slidesInView.init(),b.slideFocus.init(P),b.eventHandler.init(P),b.resizeHandler.init(P),b.slidesHandler.init(P),b.options.loop&&b.slideLooper.loop(),S.offsetParent&&E.length&&b.dragHandler.init(P),v=c.init(P,A)))}function T(t,n){const e=H();D(),I(l({startIndex:e},t),n),a.emit("reInit")}function D(){b.dragHandler.destroy(),b.eventStore.clear(),b.translate.clear(),b.slideLooper.clear(),b.resizeHandler.destroy(),b.slidesHandler.destroy(),b.slidesInView.destroy(),b.animation.destroy(),c.destroy(),u.clear()}function C(t,n,e){L.active&&!x&&(b.scrollBody.useBaseFriction().useDuration(!0===n?0:L.duration),b.scrollTo.index(t,e||0))}function H(){return b.index.get()}const P={canScrollNext:function(){return b.index.add(1).get()!==H()},canScrollPrev:function(){return b.index.add(-1).get()!==H()},containerNode:function(){return S},internalEngine:function(){return b},destroy:function(){x||(x=!0,u.clear(),D(),a.emit("destroy"),a.clear())},off:g,on:p,emit:h,plugins:function(){return v},previousScrollSnap:function(){return b.indexPrevious.get()},reInit:y,rootNode:function(){return t},scrollNext:function(t){C(b.index.add(1).get(),t,-1)},scrollPrev:function(t){C(b.index.add(-1).get(),t,1)},scrollProgress:function(){return b.scrollProgress.get(b.location.get())},scrollSnapList:function(){return b.scrollSnapList},scrollTo:C,selectedScrollSnap:H,slideNodes:function(){return E},slidesInView:function(){return b.slidesInView.get()},slidesNotInView:function(){return b.slidesInView.get(!1)}};return I(e,o),setTimeout((()=>a.emit("init")),0),P}return k.globalOptions=void 0,k})),function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).EmblaCarouselAutoHeight=n()}(this,(function(){"use strict";function t(t={}){let n,e=[];const o=["select","slideFocus"];function i(){n.containerNode().style.height=`${function(){const{slideRegistry:t}=n.internalEngine();return t[n.selectedScrollSnap()]?.map((t=>e[t])).reduce(((t,n)=>Math.max(t,n)),0)}()}px`}return{name:"autoHeight",options:t,init:function(t){n=t;const{options:{axis:r},slideRects:s}=n.internalEngine();"y"!==r&&(e=s.map((t=>t.height)),o.forEach((t=>n.on(t,i))),i())},destroy:function(){o.forEach((t=>n.off(t,i)));const t=n.containerNode();t.style.height="",t.getAttribute("style")||t.removeAttribute("style")}}}return t.globalOptions=void 0,t})),function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).EmblaCarouselAutoplay=n()}(this,(function(){"use strict";const t={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function n(e={}){let o,i,r,s=!1,c=!0,u=!1,a=0;function l(){if(r)return;if(!c)return;s||i.emit("autoplay:play");const{ownerWindow:t}=i.internalEngine();t.clearInterval(a),a=t.setInterval(m,o.delay),s=!0}function d(){if(r)return;s&&i.emit("autoplay:stop");const{ownerWindow:t}=i.internalEngine();t.clearInterval(a),a=0,s=!1}function f(){if(p())return c=s,d();c&&l()}function p(){const{ownerDocument:t}=i.internalEngine();return"hidden"===t.visibilityState}function g(t){void 0!==t&&(u=t),c=!0,l()}function m(){const{index:t}=i.internalEngine(),n=t.clone().add(1).get(),e=i.scrollSnapList().length-1;o.stopOnLastSnap&&n===e&&d(),i.canScrollNext()?i.scrollNext(u):i.scrollTo(0,u)}return{name:"autoplay",options:e,init:function(s,a){i=s;const{mergeOptions:g,optionsAtMedia:m}=a,h=g(t,n.globalOptions),y=g(h,e);if(o=m(y),i.scrollSnapList().length<=1)return;u=o.jump,r=!1;const{eventStore:b,ownerDocument:v}=i.internalEngine(),S=i.rootNode(),E=o.rootNode&&o.rootNode(S)||S,x=i.containerNode();i.on("pointerDown",d),o.stopOnInteraction||i.on("pointerUp",l),o.stopOnMouseEnter&&(b.add(E,"mouseenter",(()=>{c=!1,d()})),o.stopOnInteraction||b.add(E,"mouseleave",(()=>{c=!0,l()}))),o.stopOnFocusIn&&(i.on("slideFocusStart",d),o.stopOnInteraction||b.add(x,"focusout",l)),b.add(v,"visibilitychange",f),o.playOnInit&&!p()&&l()},destroy:function(){i.off("pointerDown",d).off("pointerUp",l).off("slideFocusStart",d),d(),r=!0,s=!1},play:g,stop:function(){s&&d()},reset:function(){s&&g()},isPlaying:function(){return s}}}return n.globalOptions=void 0,n})),function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).EmblaCarouselClassNames=n()}(this,(function(){"use strict";const t={active:!0,breakpoints:{},snapped:"is-snapped",inView:"is-in-view",draggable:"is-draggable",dragging:"is-dragging"};function n(t,n){if(!t||!n)return;const{classList:e}=t;e.contains(n)&&e.remove(n)}function e(t,n){if(!t||!n)return;const{classList:e}=t;e.contains(n)||e.add(n)}function o(i={}){let r,s,c,u;const a=["select"],l=["pointerDown","pointerUp"],d=["slidesInView"];function f(t,o){"pointerDown"===o?e(c,r.dragging):n(c,r.dragging)}function p(t,o){var i;(i=s.containerNode().querySelectorAll(`.${o}`),Array.from(i)).forEach((t=>n(t,o))),t?.forEach((t=>e(u[t],o)))}function g(){const{slideRegistry:t}=s.internalEngine();p(t[s.selectedScrollSnap()],r.snapped)}function m(){p(s.slidesInView(),r.inView)}return{name:"classNames",options:i,init:function(n,p){s=n;const{mergeOptions:h,optionsAtMedia:y}=p,b=h(t,o.globalOptions),v=h(b,i);r=y(v),c=s.rootNode(),u=s.slideNodes(),!!s.internalEngine().options.watchDrag&&e(c,r.draggable),r.dragging&&l.forEach((t=>s.on(t,f))),r.snapped&&(a.forEach((t=>s.on(t,g))),g()),r.inView&&(d.forEach((t=>s.on(t,m))),m())},destroy:function(){n(c,r.draggable),l.forEach((t=>s.off(t,f))),a.forEach((t=>s.off(t,g))),d.forEach((t=>s.off(t,m))),u.forEach((t=>n(t,r.snapped)))}}}return o.globalOptions=void 0,o})),function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).EmblaCarouselFade=n()}(this,(function(){"use strict";function t(t,n,e){return Math.min(Math.max(t,n),e)}function n(t){return"number"==typeof t&&!isNaN(t)}function e(e={}){const o=1e3/60;let i,r,s,c,u=[],a=0,l=0,d=0,f=!1;function p(){b(i.selectedScrollSnap(),1)}function g(){f=!1}function m(){f=!1,a=0,l=0}function h(){const t=i.internalEngine().scrollBody.duration();l=t?0:1,f=!0,t||p()}function y(t){const{scrollSnaps:e,location:o,target:r}=i.internalEngine();!n(t)||u[t]<.5||(o.set(e[t]),r.set(o))}function b(n,e){i.scrollSnapList().forEach(((o,r)=>{const s=Math.abs(e),c=u[r],l=r===n,p=t(l?c+s:c-s,0,1);u[r]=p;const g=l&&f,m=i.previousScrollSnap();g&&(u[m]=1-p),l&&function(t,n){const{index:e,dragHandler:o,scrollSnaps:r}=i.internalEngine(),s=o.pointerDown(),c=1/(r.length-1);let u=t,l=s?i.selectedScrollSnap():i.previousScrollSnap();if(s&&u===l){const t=-1*Math.sign(a);u=l,l=e.clone().set(l).add(t).get()}d=l*c+(u-l)*c*n}(n,p),function(t){const n=i.internalEngine().slideRegistry[t],{scrollSnaps:e,containerRect:o}=i.internalEngine(),r=u[t];n.forEach((n=>{const s=i.slideNodes()[n].style,c=parseFloat(r.toFixed(2)),u=c>0,a=function(t){const{axis:n}=i.internalEngine();return`translate${n.scroll.toUpperCase()}(${n.direction(t)}px)`}(u?e[t]:o.width+2);u&&(s.transform=a),s.opacity=c.toString(),s.pointerEvents=r>.5?"auto":"none",u||(s.transform=a)}))}(r)}))}function v(){const{dragHandler:t,index:n,scrollBody:e}=i.internalEngine(),o=i.selectedScrollSnap();if(!t.pointerDown())return o;const r=Math.sign(e.velocity()),s=Math.sign(a),c=n.clone().set(o).add(-1*r).get();return r&&s?s===r?c:o:null}function S(){const{target:t,location:e}=i.internalEngine(),s=t.get()-e.get(),c=Math.abs(s)>=1,d=v(),f=!n(d);return function(t){const{dragHandler:e,scrollBody:i}=t.internalEngine(),s=o/1e3,c=e.pointerDown(),d=i.velocity()*s,f=i.duration(),p=v(),g=!n(p);if(c){if(!d)return;a+=d,l=Math.abs(d/r),y(p)}if(!c){if(!f||g)return;l+=(1-u[p])/f,l*=.68}g||b(p,l)}(i),!f&&!c&&u[d]>.999}function E(){return d}return{name:"fade",options:e,init:function(n){i=n;const e=i.selectedScrollSnap(),{scrollBody:o,containerRect:a,axis:l}=i.internalEngine(),d=l.measureSize(a);r=t(.75*d,200,500),f=!1,u=i.scrollSnapList().map(((t,n)=>n===e?1:0)),s=o.settled,c=i.scrollProgress,o.settled=S,i.scrollProgress=E,i.on("select",h).on("slideFocus",p).on("pointerDown",m).on("pointerUp",g),function(){const{translate:t,slideLooper:n}=i.internalEngine();t.clear(),t.toggleActive(!1),n.loopPoints.forEach((({translate:t})=>{t.clear(),t.toggleActive(!1)}))}(),p()},destroy:function(){const{scrollBody:t}=i.internalEngine();t.settled=s,i.scrollProgress=c,i.off("select",h).off("slideFocus",p).off("pointerDown",m).off("pointerUp",g),i.slideNodes().forEach((t=>{const n=t.style;n.opacity="",n.transform="",n.pointerEvents="",t.getAttribute("style")||t.removeAttribute("style")}))}}}return e.globalOptions=void 0,e})),!customElements.get("bs-slider")){class t extends HTMLElement{constructor(){super()}connectedCallback(){this.slider=null,this.thumbSlider=null,this.options=this.querySelector("[data-options]"),this.thumbOptions=this.querySelector("[data-thumbs-options]"),this.viewport=this.querySelector(".bs-slider-viewport"),this.thumbsViewport=this.querySelector(".bs-thumbs-slider-viewport"),this.init(),document.addEventListener("shopify:section:load",(()=>this.init(event))),document.addEventListener("shopify:section:select",(()=>this.init(event))),document.addEventListener("shopify:block:select",(()=>this.init(event)))}toggleArrows(t,n,e){const o=()=>{t.canScrollPrev()?n.removeAttribute("disabled"):n.setAttribute("disabled","disabled"),t.canScrollNext()?e.removeAttribute("disabled"):e.setAttribute("disabled","disabled")};return t.on("select",o).on("init",o).on("reInit",o),e.removeAttribute("disabled")}addArrows(t,n,e){const o=()=>t.scrollPrev(),i=()=>t.scrollNext();n.addEventListener("click",o,!1),e.addEventListener("click",i,!1);const r=this.toggleArrows(t,n,e);return()=>{r(),n.removeEventListener("click",o,!1),e.removeEventListener("click",i,!1)}}addDots(t,n){let e=[];const o=()=>{n.innerHTML=t.scrollSnapList().map((()=>'<button class="bs-dot" type="button"></button>')).join(""),e=n.querySelectorAll(".bs-dot"),e.forEach(((n,e)=>n.addEventListener("click",(()=>t.scrollTo(e)),!1)))},i=()=>{const n=t.previousScrollSnap(),o=t.selectedScrollSnap();e[n].classList.remove("selected"),e[o].classList.add("selected")};return t.on("init",o).on("reInit",o).on("init",i).on("reInit",i).on("select",i),()=>n.innerHTML=""}addThumbBtnsClickHandlers(t,n){const e=n.slideNodes(),o=e.map(((n,e)=>()=>t.scrollTo(e)));return e.forEach(((t,n)=>t.addEventListener("click",o[n],!1))),()=>e.forEach(((t,n)=>t.removeEventListener("click",o[n],!1)))}addToggleThumbBtnsActive(t,n){const e=n.slideNodes(),o=()=>{n.scrollTo(t.selectedScrollSnap());const o=t.previousScrollSnap(),i=t.selectedScrollSnap();e[o].classList.remove("selected"),e[i].classList.add("selected")};return t.on("select",o),n.on("init",o),()=>{const n=t.selectedScrollSnap();e[n].classList.remove("selected")}}init(t){if(!this.options||!this.viewport||this.classList.contains("initialized")){if(Shopify.designMode&&t?.detail?.blockId){let n=this.querySelector(`.bs-slide[data-id=${t.detail.blockId}]`)?.getAttribute("data-index");n&&this.slider.scrollTo(Number(n))}return}let n=JSON.parse(this.options.content.textContent),e=[EmblaCarouselClassNames()],o=document.querySelector(n._prevBtn),i=document.querySelector(n._nextBtn),r=document.querySelector(n._dotsNode);if(n._autoplay){let t={delay:Number(n._autoplay||5e3),stopOnMouseEnter:!0,stopOnInteraction:!1};e.push(EmblaCarouselAutoplay(t))}n._autoheight&&e.push(EmblaCarouselAutoHeight()),n._fade&&e.push(EmblaCarouselFade()),this.slider=EmblaCarousel(this.viewport,n,e);const s=this;if(this.slider.on("init",(()=>s.classList.add("initialized"))),this.thumbOptions&&this.thumbsViewport){this.thumbSlider=EmblaCarousel(this.thumbsViewport,JSON.parse(this.thumbOptions.content.textContent));const t=this.addThumbBtnsClickHandlers(this.slider,this.thumbSlider),n=this.addToggleThumbBtnsActive(this.slider,this.thumbSlider);this.slider.on("destroy",t).on("destroy",n),this.thumbSlider.on("destroy",t).on("destroy",n),this.thumbOptions.remove()}else{r&&this.addDots(this.slider,r)}o&&i&&this.addArrows(this.slider,o,i);this.options.remove()}}customElements.define("bs-slider",t)}