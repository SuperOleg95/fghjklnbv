import{d,c as m,i as f,g as s,f as l,t as i,$ as v,w as b,A as y,C as S,r as x,ac as C,n as j,E as $}from"./C-4U8D4B.js";import{_ as k}from"./DrZDnH-v.js";import{u as B}from"./DeQEqeSj.js";import{u as V}from"./DXBHd4IE.js";import{q as A}from"./Dzm2mGAd.js";const N={class:"relative left-[7%] top-[50%] space-y-2"},T={class:"2xl:text-2xl font-bold"},q={class:"text-base"},z=d({__name:"SwiperSlideTypography",props:{obj:{}},setup(h){return(o,e)=>{const a=v;return f(),m("div",N,[s("h1",T,i(o.obj.title),1),e[0]||(e[0]=s("div",{class:"h-1 w-40 bg-black"},null,-1)),s("h5",q,i(o.obj.descr),1),l(a,{size:"lg"},{default:b(()=>[y(i(o.obj.button),1)]),_:1})])}}}),D={class:"!px-0 !mt-0"},H=d({__name:"Swiper",async setup(h){let o,e;const a=B(),{data:c}=([o,e]=S(()=>V("slides",()=>A("slider").all())),o=await o,e(),o);let p=[],u=x([]);if(c.value)for(let t of c.value)u.value.push(String(t.meta.color)),p.push({button:String(t.meta.button),color:String(t.meta.color),title:t.title,descr:t.description});C(a.breakpoint,(t,r)=>{console.log("Breakpoint updated:",r,"->",t)});function g(t){return p.find(n=>n.color===t)}return(t,r)=>{const n=z,w=k;return f(),m("div",D,[l(w,{items:$(u),loop:"",dots:"","auto-scroll":"",ui:{item:"basis-full",dots:"bottom-4"}},{default:b(({item:_})=>[s("div",{class:j(`w-full h-[600px] bg-${_}-400 rounded-lg relative`)},[l(n,{obj:g(String(_))},null,8,["obj"])],2)]),_:1},8,["items"])])}}});export{H as _};
