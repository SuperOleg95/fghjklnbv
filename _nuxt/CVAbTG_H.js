import{d as L,au as C,u as U,y as K,B as F,ay as _,R as W,r as q,S as b,a0 as J,c as I,e as j,n as S,L as D,G as N,D as Q,I as X,H as Y,az as Z,A as tt,t as et,j as nt}from"./CpTUtX2A.js";import{r as ot}from"./UbtjZav2.js";const H=Object.freeze({left:0,top:0,width:16,height:16}),R=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),O=Object.freeze({...H,...R});Object.freeze({...O,body:"",hidden:!1});({...H});const B=Object.freeze({width:null,height:null}),V=Object.freeze({...B,...R});function st(e,s){const o={...e};for(const i in s){const t=s[i],r=typeof t;i in B?(t===null||t&&(r==="string"||r==="number"))&&(o[i]=t):r===typeof o[i]&&(o[i]=i==="rotate"?t%4:t)}return o}const it=/[\s,]+/;function rt(e,s){s.split(it).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function at(e,s=0){const o=e.replace(/^-?[0-9.]*/,"");function i(t){for(;t<0;)t+=4;return t%4}if(o===""){const t=parseInt(e);return isNaN(t)?0:i(t)}else if(o!==e){let t=0;switch(o){case"%":t=25;break;case"deg":t=90}if(t){let r=parseFloat(e.slice(0,e.length-o.length));return isNaN(r)?0:(r=r/t,r%1===0?i(r):0)}}return s}const ct=/(-?[0-9.]*[0-9]+[0-9.]*)/g,lt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function T(e,s,o){if(s===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*s*o)/o;if(typeof e!="string")return e;const i=e.split(ct);if(i===null||!i.length)return e;const t=[];let r=i.shift(),a=lt.test(r);for(;;){if(a){const l=parseFloat(r);isNaN(l)?t.push(r):t.push(Math.ceil(l*s*o)/o)}else t.push(r);if(r=i.shift(),r===void 0)return t.join("");a=!a}}function ut(e,s="defs"){let o="";const i=e.indexOf("<"+s);for(;i>=0;){const t=e.indexOf(">",i),r=e.indexOf("</"+s);if(t===-1||r===-1)break;const a=e.indexOf(">",r);if(a===-1)break;o+=e.slice(t+1,r).trim(),e=e.slice(0,i).trim()+e.slice(a+1)}return{defs:o,content:e}}function ft(e,s){return e?"<defs>"+e+"</defs>"+s:s}function ht(e,s,o){const i=ut(e);return ft(i.defs,s+i.content+o)}const pt=e=>e==="unset"||e==="undefined"||e==="none";function dt(e,s){const o={...O,...e},i={...V,...s},t={left:o.left,top:o.top,width:o.width,height:o.height};let r=o.body;[o,i].forEach(c=>{const n=[],h=c.hFlip,x=c.vFlip;let p=c.rotate;h?x?p+=2:(n.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),n.push("scale(-1 1)"),t.top=t.left=0):x&&(n.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),n.push("scale(1 -1)"),t.top=t.left=0);let d;switch(p<0&&(p-=Math.floor(p/4)*4),p=p%4,p){case 1:d=t.height/2+t.top,n.unshift("rotate(90 "+d.toString()+" "+d.toString()+")");break;case 2:n.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:d=t.width/2+t.left,n.unshift("rotate(-90 "+d.toString()+" "+d.toString()+")");break}p%2===1&&(t.left!==t.top&&(d=t.left,t.left=t.top,t.top=d),t.width!==t.height&&(d=t.width,t.width=t.height,t.height=d)),n.length&&(r=ht(r,'<g transform="'+n.join(" ")+'">',"</g>"))});const a=i.width,l=i.height,g=t.width,u=t.height;let m,v;a===null?(v=l===null?"1em":l==="auto"?u:l,m=T(v,g/u)):(m=a==="auto"?g:a,v=l===null?T(m,u/g):l==="auto"?u:l);const w={},f=(c,n)=>{pt(n)||(w[c]=n.toString())};f("width",m),f("height",v);const y=[t.left,t.top,g,u];return w.viewBox=y.join(" "),{attributes:w,viewBox:y,body:r}}const gt=/\sid="(\S+)"/g,mt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let wt=0;function vt(e,s=mt){const o=[];let i;for(;i=gt.exec(e);)o.push(i[1]);if(!o.length)return e;const t="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(r=>{const a=typeof s=="function"?s(r):s+(wt++).toString(),l=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+a+t+"$3")}),e=e.replace(new RegExp(t,"g"),""),e}function yt(e,s){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in s)o+=" "+i+'="'+s[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function xt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function bt(e){return"data:image/svg+xml,"+xt(e)}function It(e){return'url("'+bt(e)+'")'}const P={...V,inline:!1},St={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},kt={display:"inline-block"},A={backgroundColor:"currentColor"},G={backgroundColor:"transparent"},$={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},E={webkitMask:A,mask:A,background:G};for(const e in E){const s=E[e];for(const o in $)s[e+o]=$[o]}const k={};["horizontal","vertical"].forEach(e=>{const s=e.slice(0,1)+"Flip";k[e+"-flip"]=s,k[e.slice(0,1)+"-flip"]=s,k[e+"Flip"]=s});function M(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const At=(e,s)=>{const o=st(P,s),i={...St},t=s.mode||"svg",r={},a=s.style,l=typeof a=="object"&&!(a instanceof Array)?a:{};for(let c in s){const n=s[c];if(n!==void 0)switch(c){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":o[c]=n===!0||n==="true"||n===1;break;case"flip":typeof n=="string"&&rt(o,n);break;case"color":r.color=n;break;case"rotate":typeof n=="string"?o[c]=at(n):typeof n=="number"&&(o[c]=n);break;case"ariaHidden":case"aria-hidden":n!==!0&&n!=="true"&&delete i["aria-hidden"];break;default:{const h=k[c];h?(n===!0||n==="true"||n===1)&&(o[h]=!0):P[c]===void 0&&(i[c]=n)}}}const g=dt(e,o),u=g.attributes;if(o.inline&&(r.verticalAlign="-0.125em"),t==="svg"){i.style={...r,...l},Object.assign(i,u);let c=0,n=s.id;return typeof n=="string"&&(n=n.replace(/-/g,"_")),i.innerHTML=vt(g.body,n?()=>n+"ID"+c++:"iconifyVue"),C("svg",i)}const{body:m,width:v,height:w}=e,f=t==="mask"||(t==="bg"?!1:m.indexOf("currentColor")!==-1),y=yt(m,{...u,width:v+"",height:w+""});return i.style={...r,"--svg":It(y),width:M(u.width),height:M(u.height),...kt,...f?A:G,...l},C("span",i)},Ot=Object.create(null),zt=L({inheritAttrs:!1,render(){const e=this.$attrs,s=e.icon,o=typeof s=="string"?Ot[s]:typeof s=="object"?s:null;return o===null||typeof o!="object"||typeof o.body!="string"?this.$slots.default?this.$slots.default():null:At({...O,...o},e)}}),Ct=L({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(e){let s,o;const i=U(),t=K(),r=e;F(()=>{var n;return(n=t.nuxtIcon)==null?void 0:n.iconifyApiOptions},()=>{var n,h,x,p,d,z;if((h=(n=t.nuxtIcon)==null?void 0:n.iconifyApiOptions)!=null&&h.url){try{new URL(t.nuxtIcon.iconifyApiOptions.url)}catch{console.warn("Nuxt Icon: Invalid custom Iconify API URL");return}if((p=(x=t.nuxtIcon)==null?void 0:x.iconifyApiOptions)!=null&&p.publicApiFallback){_("custom",{resources:[(d=t.nuxtIcon)==null?void 0:d.iconifyApiOptions.url],index:0});return}_("",{resources:[(z=t.nuxtIcon)==null?void 0:z.iconifyApiOptions.url]})}},{immediate:!0});const a=W("icons",()=>({})),l=q(!1),g=b(()=>{var n,h;return(h=(n=t.nuxtIcon)==null?void 0:n.aliases)!=null&&h[r.name]?t.nuxtIcon.aliases[r.name]:r.name}),u=b(()=>ot(g.value)),m=b(()=>[u.value.provider,u.value.prefix,u.value.name].filter(Boolean).join(":")),v=b(()=>{var n;return(n=a.value)==null?void 0:n[m.value]}),w=b(()=>{var n;return(n=i.vueApp)==null?void 0:n.component(g.value)}),f=b(()=>{var h,x,p;if(!r.size&&typeof((h=t.nuxtIcon)==null?void 0:h.size)=="boolean"&&!((x=t.nuxtIcon)!=null&&x.size))return;const n=r.size||((p=t.nuxtIcon)==null?void 0:p.size)||"1em";return String(Number(n))===n?`${n}px`:n}),y=b(()=>{var n;return((n=t==null?void 0:t.nuxtIcon)==null?void 0:n.class)??"icon"});async function c(){var n;w.value||(n=a.value)!=null&&n[m.value]||(l.value=!0,a.value[m.value]=await Z(u.value).catch(()=>{}),l.value=!1)}return F(g,c),!w.value&&([s,o]=J(()=>c()),s=await s,o()),(n,h)=>l.value?(I(),j("span",{key:0,class:S(y.value),style:D({width:f.value,height:f.value})},null,6)):v.value?(I(),N(Q(zt),{key:1,icon:v.value,class:S(y.value),width:f.value,height:f.value},null,8,["icon","class","width","height"])):w.value?(I(),N(X(w.value),{key:2,class:S(y.value),width:f.value,height:f.value},null,8,["class","width","height"])):(I(),j("span",{key:3,class:S(y.value),style:D({fontSize:f.value,lineHeight:f.value,width:f.value,height:f.value})},[Y(n.$slots,"default",{},()=>[tt(et(e.name),1)],!0)],6))}}),Dt=nt(Ct,[["__scopeId","data-v-e8d572f6"]]);export{Dt as default};
