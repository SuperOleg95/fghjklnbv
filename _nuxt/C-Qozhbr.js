import{_ as h}from"./B9nCFlLR.js";import{_ as v}from"./CJ4UeHMv.js";import{_ as x}from"./DK0KSqmo.js";import{_ as C}from"./Ds9HFJAw.js";/* empty css        */import{u as k}from"./C73Olfw5.js";import{q as w}from"./C9_BlUIS.js";import{d as B,B as N,Y as T,C as D,i as a,w as _,g as V,c as n,e as $,f as o,A,D as r,F as b,Z as q,$ as F}from"./CX0YGnEc.js";const O={key:0,class:"grid gap-4 grid-cols-2 md:grid-cols-4 md:gap-8"},j=["delay"],G=B({__name:"Refs",async setup(z){let e,i;const{data:c}=([e,i]=N(()=>k("partners",()=>w("partners").all())),e=await e,i(),e);let t=[];if(c.value)for(let s of c.value)t.push({id:s.id,image:s.meta.image});return(s,m)=>{const p=h,d=v,u=x,f=C,y=T("motion");return a(),D(f,null,{default:_(()=>[V("div",null,[o(p,null,{default:_(()=>m[0]||(m[0]=[A("Our partners")])),_:1}),o(d,{content:"Trusted by many",size:"sm"})]),r(t)&&r(t).length>0?(a(),n("div",O,[(a(!0),n(b,null,q(r(t),(l,g)=>F((a(),n("div",{key:l.id,initial:{opacity:0,y:150},visibleOnce:{opacity:1,y:0},delay:250+200*g,class:"flex items-center justify-center"},[o(u,{class:"h-14 lg:h-32",src:l.image},null,8,["src"])],8,j)),[[y]])),128))])):$("",!0)]),_:1})}}});export{G as default};
