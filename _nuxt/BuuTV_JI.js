import f from"./MqwsH7xl.js";import{_ as x}from"./CSVbdhOK.js";import{d,c as r,G as p,w as m,f as n,n as k,t as i,h as u,R as v,e as _,F as C,K as y,D as S}from"./VwykerqC.js";import{_ as w}from"./CQb0izSK.js";import{u as B}from"./rI5Qw-82.js";import{q as $}from"./TLcY8zoW.js";import"./UbtjZav2.js";const b={class:"h-[600px] rounded-xl bg-gray-200 dark:bg-gray-700 flex flex-col"},D={class:"pt-14 p-4 text-3xl"},N={class:"flex"},q={class:"text-lg"},A=d({__name:"card",props:{heading:String,description:String,color:String,link:String},setup(l){const t=l;return(a,c)=>{const e=f,o=x;return r(),p(o,{to:t.link},{default:m(()=>[n("div",b,[n("div",{class:k(`min-h-[60%] bg-${t.color}-500 rounded-t-xl`)},null,2),n("div",D,[n("div",N,[n("h5",null,i(t.heading),1),u(e,{name:"mdi:chevron-right",class:"mt-1"})]),n("h5",q,i(t.description),1)])])]),_:1},8,["to"])}}}),F={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"},R=d({__name:"Collection",async setup(l){let t,a;const{data:c}=([t,a]=v(()=>B("cards",()=>$("cards").all())),t=await t,a(),t);let e=[];if(c.value)for(let o of c.value)e.push({title:o.title,descr:o.description,link:o.meta.link,color:o.meta.color});return(o,L)=>{const g=A,h=w;return r(),p(h,null,{default:m(()=>[n("div",F,[(r(!0),_(C,null,y(S(e),s=>(r(),_("div",null,[u(g,{heading:s.title,description:s.descr,color:s.color,link:s.link},null,8,["heading","description","color","link"])]))),256))])]),_:1})}}});export{R as default};
