import{_ as g}from"./B034yJJE.js";import{_ as y}from"./D5ZDZ34j.js";import{_ as x}from"./CGGtdw8n.js";import{_ as v}from"./Bv0TByZr.js";import{d as c,c as o,e as i,F as k,K as h,G as m,n as B,w as d,f as n,h as t,A as w,D as $}from"./DdUDRZN8.js";import{_ as C}from"./BnDCK6Hv.js";import"./B_zpqm_E.js";import"./DuZOtvu6.js";import"./UbtjZav2.js";import"./enjB-bh1.js";const T=c({__name:"BlockButtonGroup",props:{data:{}},setup(p){function l(r){var a,s;switch(r.type){case"pages":return((a=r.page)==null?void 0:a.permalink)??void 0;case"posts":return((s=r.post)==null?void 0:s.slug)??void 0;case"external":return r.external_url??void 0;default:return}}return(r,a)=>{const s=v;return o(),i("div",{class:B(`flex flex-col justify-${r.data.alignment} space-y-4 md:space-x-4 md:flex-row md:space-y-0`)},[(o(!0),i(k,null,h(r.data.buttons,e=>(o(),m(s,{key:e.id,to:l(e),color:e==null?void 0:e.color,variant:e==null?void 0:e.variant,target:e!=null&&e.external_url?"_blank":"_self",label:(e==null?void 0:e.label)??void 0,size:"xl","trailing-icon":"i-heroicons-arrow-right-20-solid "},null,8,["to","color","variant","target","label"]))),128))],2)}}}),G={class:"relative overflow-hidden p-8 text-gray-900 border md:px-10 md:py-8 border-primary/50 rounded-panel"},N={class:"relative md:flex md:items-center md:justify-between md:space-x-4"},V={class:"flex-shrink-0 mt-4 md:mt-0"},K=c({__name:"5.fifth",setup(p){let l={buttons:[{id:0,type:"page",color:"primary",variant:"solid",label:"Press me"}],alignment:"center"};return(r,a)=>{const s=g,e=y,_=x,f=T,u=C;return o(),m(u,null,{default:d(()=>[n("div",G,[a[1]||(a[1]=n("div",{class:"absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-800 dark:via-gray-900 dark:to-gray-600"},null,-1)),a[2]||(a[2]=n("div",{class:"absolute inset-0 opacity-50 grain-bg dark:opacity-20"},null,-1)),n("div",N,[n("div",null,[t(s,null,{default:d(()=>a[0]||(a[0]=[w("Contact us")])),_:1}),t(e,{content:"Messages",class:"font-bold"}),t(_,{content:"Just press this fancy button",class:"mt-2"})]),n("div",V,[t(f,{data:$(l)},null,8,["data"])])])])]),_:1})}}});export{K as default};
