import{U as o}from"./vRJhantU.js";import{d as p,c as i,i as s,F as n,Z as d,C as m,n as _}from"./CX0YGnEc.js";const x=p({__name:"BlockButtonGroup",props:{data:{}},setup(f){function c(a){var l,r;switch(a.type){case"pages":return((l=a.page)==null?void 0:l.permalink)??void 0;case"posts":return((r=a.post)==null?void 0:r.slug)??void 0;case"external":return a.external_url??void 0;default:return}}return(a,l)=>{const r=o;return s(),i("div",{class:_(`flex flex-col justify-${a.data.alignment} space-y-4 md:space-x-4 md:flex-row md:space-y-0`)},[(s(!0),i(n,null,d(a.data.buttons,e=>(s(),m(r,{key:e.id,to:c(e),color:e==null?void 0:e.color,variant:e==null?void 0:e.variant,target:e!=null&&e.external_url?"_blank":"_self",label:(e==null?void 0:e.label)??void 0,size:"xl","trailing-icon":"i-heroicons-arrow-right-20-solid "},null,8,["to","color","variant","target","label"]))),128))],2)}}});export{x as _};
