import{aj as C,ah as O,D as S,o as F,aL as P,aH as j,r as W,B as I,a4 as k}from"./Ca2lcQJJ.js";function T(e){return C()?(O(e),!0):!1}function m(e){return typeof e=="function"?e():S(e)}const b=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const v=Object.prototype.toString,A=e=>v.call(e)==="[object Object]",G=()=>+Date.now(),p=()=>{};function D(e,r){function t(...n){return new Promise((o,i)=>{Promise.resolve(e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})).then(o).catch(i)})}return t}function L(e,r={}){let t,n,o=p;const i=a=>{clearTimeout(a),o(),o=p};return a=>{const l=m(e),s=m(r.maxWait);return t&&i(t),l<=0||s!==void 0&&s<=0?(n&&(i(n),n=null),Promise.resolve(a())):new Promise((u,h)=>{o=r.rejectOnCancel?h:u,s&&!n&&(n=setTimeout(()=>{t&&i(t),n=null,u(a())},s)),t=setTimeout(()=>{n&&i(n),n=null,u(a())},l)})}}function M(...e){let r=0,t,n=!0,o=p,i,c,a,l,s;!j(e[0])&&typeof e[0]=="object"?{delay:c,trailing:a=!0,leading:l=!0,rejectOnCancel:s=!1}=e[0]:[c,a=!0,l=!0,s=!1]=e;const u=()=>{t&&(clearTimeout(t),t=void 0,o(),o=p)};return g=>{const f=m(c),w=Date.now()-r,d=()=>i=g();return u(),f<=0?(r=Date.now(),d()):(w>f&&(l||!n)?(r=Date.now(),d()):a&&(i=new Promise((y,x)=>{o=s?x:y,t=setTimeout(()=>{r=Date.now(),n=!0,y(d()),u()},Math.max(0,f-w))})),!l&&!t&&(t=setTimeout(()=>n=!0,f)),n=!1,i)}}function R(e){return k()}function B(e,r=200,t={}){return D(L(r,t),e)}function E(e,r=200,t=!1,n=!0,o=!1){return D(M(r,t,n,o),e)}function H(e,r=!0,t){R()?F(e,t):r?e():P(e)}function _(e,r=1e3,t={}){const{immediate:n=!0,immediateCallback:o=!1}=t;let i=null;const c=W(!1);function a(){i&&(clearInterval(i),i=null)}function l(){c.value=!1,a()}function s(){const u=m(r);u<=0||(c.value=!0,o&&e(),a(),i=setInterval(e,u))}if(n&&b&&s(),j(r)||typeof r=="function"){const u=I(r,()=>{c.value&&b&&s()});T(u)}return T(l),{isActive:c,pause:l,resume:s}}export{H as a,m as b,E as c,G as d,_ as e,b as f,A as i,p as n,T as t,B as u};
