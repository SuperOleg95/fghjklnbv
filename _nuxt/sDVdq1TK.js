import{d as n,S as c,v as o,al as h,p,m as u,c as d,G as l,D as r,I as f}from"./CpTUtX2A.js";import{_ as m}from"./D11Wd4eS.js";const S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(a){const t=a,i=c(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=o(h(p().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return u(e,t.src)}return t.src});return(s,e)=>(d(),l(f(r(m)),{src:r(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
