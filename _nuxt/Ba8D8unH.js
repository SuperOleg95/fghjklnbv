import{aj as Y,ah as ee,D as te,o as k,aL as ne,aH as J,r as A,B,a4 as K,X as M,a3 as G,aP as oe}from"./Bu6kQjQV.js";function W(e){return Y()?(ee(e),!0):!1}function b(e){return typeof e=="function"?e():te(e)}const I=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const re=Object.prototype.toString,se=e=>re.call(e)==="[object Object]",X=()=>+Date.now(),F=()=>{};function N(e,t){function n(...o){return new Promise((c,s)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(c).catch(s)})}return n}function le(e,t={}){let n,o,c=F;const s=r=>{clearTimeout(r),c(),c=F};return r=>{const i=b(e),l=b(t.maxWait);return n&&s(n),i<=0||l!==void 0&&l<=0?(o&&(s(o),o=null),Promise.resolve(r())):new Promise((f,u)=>{c=t.rejectOnCancel?u:f,l&&!o&&(o=setTimeout(()=>{n&&s(n),o=null,f(r())},l)),n=setTimeout(()=>{o&&s(o),o=null,f(r())},i)})}}function ie(...e){let t=0,n,o=!0,c=F,s,a,r,i,l;!J(e[0])&&typeof e[0]=="object"?{delay:a,trailing:r=!0,leading:i=!0,rejectOnCancel:l=!1}=e[0]:[a,r=!0,i=!0,l=!1]=e;const f=()=>{n&&(clearTimeout(n),n=void 0,c(),c=F)};return m=>{const p=b(a),v=Date.now()-t,S=()=>s=m();return f(),p<=0?(t=Date.now(),S()):(v>p&&(i||!o)?(t=Date.now(),S()):r&&(s=new Promise((E,w)=>{c=l?w:E,n=setTimeout(()=>{t=Date.now(),o=!0,E(S()),f()},Math.max(0,p-v))})),!i&&!n&&(n=setTimeout(()=>o=!0,p)),o=!1,s)}}function ue(e){return K()}function ce(e,t=200,n={}){return N(le(t,n),e)}function ae(e,t=200,n=!1,o=!0,c=!1){return N(ie(t,n,o,c),e)}function Q(e,t=!0,n){ue()?k(e,n):t?e():ne(e)}function fe(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:c=!1}=n;let s=null;const a=A(!1);function r(){s&&(clearInterval(s),s=null)}function i(){a.value=!1,r()}function l(){const f=b(t);f<=0||(a.value=!0,c&&e(),r(),s=setInterval(e,f))}if(o&&I&&l(),J(t)||typeof t=="function"){const f=B(t,()=>{a.value&&I&&l()});W(f)}return W(i),{isActive:a,pause:i,resume:l}}function y(e){var t;const n=b(e);return(t=n==null?void 0:n.$el)!=null?t:n}const j=I?window:void 0;function $(...e){let t,n,o,c;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,c]=e,t=j):[t,n,o,c]=e,!t)return F;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const s=[],a=()=>{s.forEach(f=>f()),s.length=0},r=(f,u,m,p)=>(f.addEventListener(u,m,p),()=>f.removeEventListener(u,m,p)),i=B(()=>[y(t),b(c)],([f,u])=>{if(a(),!f)return;const m=se(u)?{...u}:u;s.push(...n.flatMap(p=>o.map(v=>r(f,p,v,m))))},{immediate:!0,flush:"post"}),l=()=>{i(),a()};return W(l),l}function de(){const e=A(!1),t=K();return t&&k(()=>{e.value=!0},t),e}function me(e){const t=de();return M(()=>(t.value,!!e()))}function pe(e,t={}){const{immediate:n=!0,fpsLimit:o=void 0,window:c=j}=t,s=A(!1),a=o?1e3/o:null;let r=0,i=null;function l(m){if(!s.value||!c)return;r||(r=m);const p=m-r;if(a&&p<a){i=c.requestAnimationFrame(l);return}r=m,e({delta:p,timestamp:m}),i=c.requestAnimationFrame(l)}function f(){!s.value&&c&&(s.value=!0,r=0,i=c.requestAnimationFrame(l))}function u(){s.value=!1,i!=null&&c&&(c.cancelAnimationFrame(i),i=null)}return n&&f(),W(u),{isActive:oe(s),pause:u,resume:f}}function ve(e,t,n={}){const{window:o=j,...c}=n;let s;const a=me(()=>o&&"ResizeObserver"in o),r=()=>{s&&(s.disconnect(),s=void 0)},i=M(()=>Array.isArray(e)?e.map(u=>y(u)):[y(e)]),l=B(i,u=>{if(r(),a.value&&o){s=new ResizeObserver(t);for(const m of u)m&&s.observe(m,c)}},{immediate:!0,flush:"post"}),f=()=>{r(),l()};return W(f),{isSupported:a,stop:f}}function be(e,t={width:0,height:0},n={}){const{window:o=j,box:c="content-box"}=n,s=M(()=>{var u,m;return(m=(u=y(e))==null?void 0:u.namespaceURI)==null?void 0:m.includes("svg")}),a=A(t.width),r=A(t.height),{stop:i}=ve(e,([u])=>{const m=c==="border-box"?u.borderBoxSize:c==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(o&&s.value){const p=y(e);if(p){const v=p.getBoundingClientRect();a.value=v.width,r.value=v.height}}else if(m){const p=Array.isArray(m)?m:[m];a.value=p.reduce((v,{inlineSize:S})=>v+S,0),r.value=p.reduce((v,{blockSize:S})=>v+S,0)}else a.value=u.contentRect.width,r.value=u.contentRect.height},n);Q(()=>{const u=y(e);u&&(a.value="offsetWidth"in u?u.offsetWidth:t.width,r.value="offsetHeight"in u?u.offsetHeight:t.height)});const l=B(()=>y(e),u=>{a.value=u?t.width:0,r.value=u?t.height:0});function f(){i(),l()}return{width:a,height:r,stop:f}}const O=new Map;function we(e){const t=Y();function n(r){var i;const l=O.get(e)||new Set;l.add(r),O.set(e,l);const f=()=>c(r);return(i=t==null?void 0:t.cleanups)==null||i.push(f),f}function o(r){function i(...l){c(i),r(...l)}return n(i)}function c(r){const i=O.get(e);i&&(i.delete(r),i.size||s())}function s(){O.delete(e)}function a(r,i){var l;(l=O.get(e))==null||l.forEach(f=>f(r,i))}return{on:n,once:o,off:c,emit:a,reset:s}}const U=1;function ge(e,t={}){const{throttle:n=0,idle:o=200,onStop:c=F,onScroll:s=F,offset:a={left:0,right:0,top:0,bottom:0},eventListenerOptions:r={capture:!1,passive:!0},behavior:i="auto",window:l=j,onError:f=d=>{console.error(d)}}=t,u=A(0),m=A(0),p=M({get(){return u.value},set(d){S(d,void 0)}}),v=M({get(){return m.value},set(d){S(void 0,d)}});function S(d,_){var h,L,R,x;if(!l)return;const g=b(e);if(!g)return;(R=g instanceof Document?l.document.body:g)==null||R.scrollTo({top:(h=b(_))!=null?h:v.value,left:(L=b(d))!=null?L:p.value,behavior:b(i)});const C=((x=g==null?void 0:g.document)==null?void 0:x.documentElement)||(g==null?void 0:g.documentElement)||g;p!=null&&(u.value=C.scrollLeft),v!=null&&(m.value=C.scrollTop)}const E=A(!1),w=G({left:!0,right:!1,top:!0,bottom:!1}),T=G({left:!1,right:!1,top:!1,bottom:!1}),P=d=>{E.value&&(E.value=!1,T.left=!1,T.right=!1,T.top=!1,T.bottom=!1,c(d))},Z=ce(P,n+o),H=d=>{var _;if(!l)return;const h=((_=d==null?void 0:d.document)==null?void 0:_.documentElement)||(d==null?void 0:d.documentElement)||y(d),{display:L,flexDirection:R}=getComputedStyle(h),x=h.scrollLeft;T.left=x<u.value,T.right=x>u.value;const g=Math.abs(x)<=(a.left||0),C=Math.abs(x)+h.clientWidth>=h.scrollWidth-(a.right||0)-U;L==="flex"&&R==="row-reverse"?(w.left=C,w.right=g):(w.left=g,w.right=C),u.value=x;let D=h.scrollTop;d===l.document&&!D&&(D=l.document.body.scrollTop),T.top=D<m.value,T.bottom=D>m.value;const z=Math.abs(D)<=(a.top||0),V=Math.abs(D)+h.clientHeight>=h.scrollHeight-(a.bottom||0)-U;L==="flex"&&R==="column-reverse"?(w.top=V,w.bottom=z):(w.top=z,w.bottom=V),m.value=D},q=d=>{var _;if(!l)return;const h=(_=d.target.documentElement)!=null?_:d.target;H(h),E.value=!0,Z(d),s(d)};return $(e,"scroll",n?ae(q,n,!0,!1):q,r),Q(()=>{try{const d=b(e);if(!d)return;H(d)}catch(d){f(d)}}),$(e,"scrollend",P,r),{x:p,y:v,isScrolling:E,arrivedState:w,directions:T,measure(){const d=b(e);l&&d&&H(d)}}}function Se(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:c="requestAnimationFrame",callback:s}=e,a=A(X()+n),r=()=>a.value=X()+n,i=s?()=>{r(),s(a.value)}:r,l=c==="requestAnimationFrame"?pe(i,{immediate:o}):fe(i,c,{immediate:o});return t?{timestamp:a,...l}:a}export{Se as a,y as b,ce as c,ge as d,be as e,ve as f,we as u};
