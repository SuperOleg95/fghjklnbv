import{_ as C,a as T}from"./PX1m3oaM.js";import{_ as q}from"./BO-0MqQf.js";import{_ as L}from"./D11Wd4eS.js";import{_ as V}from"./CxFL4g9C.js";import{_ as I}from"./q_5nDd9u.js";import{d as b,r as j,B as M,C as B,D as a,E as z,c as l,G as m,w as d,H as k,I as H,g as f,J as A,e as w,f as n,h as s,F as E,K as F,t as g,A as v,n as x,L as $}from"./CpTUtX2A.js";import{_ as P}from"./CWlSBZFW.js";import"./CVAbTG_H.js";import"./UbtjZav2.js";const S=b({__name:"Motionable",props:{as:{default:"div"},name:{},show:{type:Boolean,default:!0}},setup(u){const e=u,i=A(),p=j(!e.show);return M(()=>e.show,async o=>{const r=i[e.name];r&&r.isAnimating.value&&(r.stop("leave"),o&&r.apply("enter")),o||(p.value=!1,r.leave(()=>{p.value=!0}))}),(o,r)=>{const _=B("motion");return o.show||!a(p)?z((l(),m(H(o.as),{key:0},{default:d(()=>[k(o.$slots,"default")]),_:3})),[[_,o.name]]):f("",!0)}}}),G={class:"relative w-full aspect-square overflow-hidden group"},J={class:"relative p-4 space-y-2"},K={class:"flex items-center justify-center flex-none w-14"},O={class:"flex flex-col justify-center py-2 pb-1 pl-3 pr-2 overflow-hidden text-lg font-semibold leading-none tracking-tight capitalize truncate md:py-3 text-bold font-display word-spacing-tight"},U={class:"absolute z-10 bottom-4 left-7 right-7"},Q=b({__name:"TeamCard",props:{person:{}},setup(u){const e=u,i=j(!1);return(p,o)=>{const r=L,_=C,h=V,c=I,y=S,D=T,N=B("motion");return l(),w("div",{class:"opacity-100 cursor-pointer select-none animate-fade-in",onClick:o[0]||(o[0]=t=>i.value=!a(i))},[n("div",G,[e.person.image?(l(),m(r,{key:0,width:"400",height:"400",class:"object-cover w-full h-full grayscale group-hover:grayscale-0",src:e.person.image},null,8,["src"])):f("",!0),z((l(),m(y,{name:"team",show:a(i),class:"absolute inset-0 p-2 -m-2 overflow-hidden bg-primary/20 backdrop-blur-sm",initial:{opacity:0,y:25,x:200,scale:.9},enter:{opacity:1,scale:1,x:0,y:0},leave:{opacity:0,scale:.9,x:200,y:25}},{default:d(()=>[n("div",J,[s(_,{content:"Links"}),(l(!0),w(E,null,F(e.person.social_media,t=>(l(),m(c,{key:t==null?void 0:t.service,class:"inline-flex w-full border border-gray-900 hover:border-white hover:text-white",href:t==null?void 0:t.url,target:"_blank"},{default:d(()=>[n("div",K,[s(h,{class:"w-8 h-8",name:"i-heroicons-light-bulb"})]),n("p",O,g(t==null?void 0:t.service),1)]),_:2},1032,["href"]))),128))])]),_:1},8,["show"])),[[N]]),n("div",U,[e.person.name?(l(),m(_,{key:0,content:e.person.name,size:"sm",class:"text-white drop-shadow"},{default:d(()=>{var t;return[v(g((t=p.person)==null?void 0:t.name),1)]}),_:1},8,["content"])):f("",!0),e.person.job_title?(l(),m(D,{key:1,class:"text-white/50"},{default:d(()=>{var t;return[v(g((t=p.person)==null?void 0:t.job_title),1)]}),_:1})):f("",!0)]),o[1]||(o[1]=n("div",{class:"absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black h-1/3 opacity-80"},null,-1))])])}}}),R={class:"flex flex-col mx-auto lg:flex-row"},W={class:"flex flex-col pr-4 lg:w-3/5"},X={ref:"target",class:"w-full relative grid h-[40rem] max-h-[60vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 md:grid-cols-2 border-t-4 border-t-primary border-b-4 border-b-gray-500 mt-8 lg:mt-0"},le=b({__name:"2.second",setup(u){let e={image:"/test.jpg",name:"Vasua",job_title:"Developer",social_media:[{service:"LinkedIn",url:"#"},{service:"Twitter",url:"#"}]},i="10s";return(p,o)=>{const r=T,_=C,h=q,c=Q,y=P;return l(),m(y,null,{default:d(()=>[n("div",R,[n("div",W,[s(r,null,{default:d(()=>o[0]||(o[0]=[v("Our team!")])),_:1}),s(_,{content:"blallabllbal",size:"lg"}),s(h,{content:"blallabllbal",class:"mt-4"})]),n("div",X,[n("div",{ref:"leftCol",class:x([{"animate-marquee":!0},"space-y-10 py-4 -mt-10 md:max-w-[320px] "]),style:$({"--marquee-duration":a(i)})},[s(c,{person:a(e)},null,8,["person"]),s(c,{person:a(e)},null,8,["person"]),s(c,{person:a(e)},null,8,["person"])],4),n("div",{ref:"rightCol",class:x([{"animate-marquee":!0},"space-y-10 py-4 md:max-w-[320px]"]),style:$({"--marquee-duration":a(i)})},[s(c,{person:a(e)},null,8,["person"]),s(c,{person:a(e)},null,8,["person"]),s(c,{person:a(e)},null,8,["person"])],4)],512)])]),_:1})}}});export{le as default};
