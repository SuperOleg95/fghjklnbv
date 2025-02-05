import{_ as v}from"./C-CKAGb-.js";import{_ as k}from"./BIrP0tfr.js";import{U as d}from"./DfOrBC-5.js";import{_ as g}from"./Cuyx6Lco.js";import{k as h}from"./BBh5GaNK.js";import{d as u,c as p,G as f,w as n,f as e,h as o,A as w,aV as C,e as $,aC as S,y as j,O as B,S as x,D as _,j as U}from"./DLhycmb2.js";import{_ as b}from"./CC1b0vIO.js";import{_ as z}from"./nLoNuji1.js";import"./CQRNCq7a.js";import"./DGmpbfWG.js";import"./UbtjZav2.js";const M={class:"w-full flex bg-white dark:bg-gray-900 justify-center"},N={class:"w-[1280px] bg-white dark:bg-gray-900 p-8"},A={class:"flex justify-evenly gap-8 max-w-[1280px]"},I={class:"flex flex-col w-[40%] justify-center gap-4"},T={class:"flex flex-col w-[40%] justify-center"},D={class:"grid grid-cols-2 gap-4"},E=u({__name:"about",setup(m){const l=[[{label:"ben@example.com"}]];return(r,t)=>{const i=d,s=g,a=h;return p(),f(a,{items:l,popper:{placement:"bottom-start"},ui:{width:" w-full",padding:"p-0",item:{padding:"px-0 py-0"}}},{item:n(({item:c})=>[e("div",M,[e("div",N,[e("div",A,[e("div",I,[t[1]||(t[1]=e("h1",{class:"text-4xl text-left font-bold"},"About us",-1)),t[2]||(t[2]=e("h1",{class:"text-xl text-left"},"our corporate slogan",-1)),o(i,{variant:"outline",class:"text-left w-fit",size:"xl"},{default:n(()=>t[0]||(t[0]=[w("Overview")])),_:1})]),e("div",T,[e("div",D,[o(s,null,{default:n(()=>t[3]||(t[3]=[e("h1",{class:"text-xl"},"Company",-1)])),_:1}),o(s,null,{default:n(()=>t[4]||(t[4]=[e("h1",{class:"text-xl"},"Partner",-1)])),_:1}),o(s,null,{default:n(()=>t[5]||(t[5]=[e("h1",{class:"text-xl"},"Partner",-1)])),_:1}),o(s,null,{default:n(()=>t[6]||(t[6]=[e("h1",{class:"text-xl"},"Competencies",-1)])),_:1}),o(s,null,{default:n(()=>t[7]||(t[7]=[e("h1",{class:"text-xl"},"Philosophy",-1)])),_:1}),o(s,null,{default:n(()=>t[8]||(t[8]=[e("h1",{class:"text-xl"},"Compliance",-1)])),_:1})])])])])])]),default:n(()=>[o(i,{color:"white",label:"About us",icon:"i-heroicons-briefcase",variant:"ghost",class:"opacity-60 hover:opacity-100",size:"xl"})]),_:1})}}}),L=C("/main/sw.jpg"),P={class:"w-full bg-white dark:bg-gray-900 p-8"},V={class:"flex justify-center gap-8"},O={class:"flex flex-col w-[25%] justify-center gap-4"},G={class:"flex flex-col w-[25%] justify-center"},H={class:"grid grid-cols-2 gap-4"},R=u({__name:"software",setup(m){const l=[[{label:"ben@example.com"}]];return(r,t)=>{const i=d,s=g,a=h;return p(),f(a,{items:l,popper:{placement:"bottom-start"},ui:{width:" w-full",padding:"p-0",item:{padding:"px-0 py-0"}}},{item:n(({item:c})=>[e("div",P,[e("div",V,[e("div",O,[t[1]||(t[1]=e("h1",{class:"text-4xl text-left font-bold"},"Software engineering",-1)),t[2]||(t[2]=e("h1",{class:"text-xl text-left"},"is a big deal",-1)),o(i,{variant:"outline",class:"text-left w-fit",size:"xl"},{default:n(()=>t[0]||(t[0]=[w("Browse solutions")])),_:1})]),e("div",G,[e("div",H,[o(s,null,{default:n(()=>t[3]||(t[3]=[e("h1",{class:"text-xl"}," Automotive Software-Engineering ",-1)])),_:1}),o(s,null,{default:n(()=>t[4]||(t[4]=[e("h1",{class:"text-xl"}," Medical System & Software Engineering ",-1)])),_:1}),o(s,null,{default:n(()=>t[5]||(t[5]=[e("h1",{class:"text-xl"},"Cyber Security",-1)])),_:1})])]),t[6]||(t[6]=e("div",{class:"flex flex-col w-[25%] justify-center"},[e("img",{src:L})],-1))])])]),default:n(()=>[o(i,{color:"white",label:"Software",icon:"i-heroicons-code-bracket",variant:"ghost",class:"opacity-60 hover:opacity-100",size:"xl"})]),_:1})}}}),q={class:"flex bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900"},F=u({__name:"megamenu",setup(m){return(l,r)=>{const t=E,i=R,s=d;return p(),$("nav",q,[o(t),o(i),o(s,{color:"white",label:"Engineering",icon:"i-heroicons-cog-8-tooth",variant:"ghost",class:"opacity-60 hover:opacity-100",size:"xl"}),o(s,{color:"white",label:"Products",icon:"i-heroicons-sparkles",variant:"ghost",class:"opacity-60 hover:opacity-100",size:"xl"}),o(s,{color:"white",label:"Career",icon:"i-heroicons-presentation-chart-line",variant:"ghost",class:"opacity-60 hover:opacity-100",size:"xl"})])}}}),J=()=>S("color-mode").value,K=u({__name:"CommonColorThemeSelector",setup(m){const l=J();j();const{t:r}=B();x(()=>t.value.filter(s=>s[0].name!==l.preference));const t=x(()=>[[{name:"system",icon:"i-heroicons-computer-desktop-solid",label:r("colormodeSystem"),color:"green"}],[{name:"dark",icon:"i-heroicons-moon-20-solid",label:r("colormodeDark"),color:"fuchsia"}],[{name:"light",icon:"i-heroicons-sun-20-solid",label:r("colormodeLight"),color:"blue"}]]),i=x(()=>{switch(l.preference){case"light":return"i-heroicons-sun-20-solid";case"dark":return"i-heroicons-moon-20-solid";default:return"i-heroicons-computer-desktop-solid"}});return(s,a)=>{const c=b,y=d;return p(),f(y,{variant:"ghost",class:"p-0 text-black dark:text-white",onClick:a[0]||(a[0]=()=>{_(l).preference==="light"?_(l).preference="dark":_(l).preference="light"})},{default:n(()=>[o(c,{name:_(i),class:"h-8 w-8"},null,8,["name"])]),_:1})}}}),Q={},W={class:"flex justify-between p-2"},X={class:"flex"},Y={class:"space-x-4"};function Z(m,l){const r=v,t=k,i=F,s=K,a=b,c=z;return p(),f(c,null,{default:n(()=>[e("div",W,[e("div",X,[o(r,{src:"/logo.png",class:"object-contain h-10"}),o(t,{content:"Schleißheimer",size:"xl",class:"hidden xl:block"})]),o(i),e("div",Y,[o(s),o(a,{name:"i-heroicons-globe-europe-africa",class:"h-8 w-8"}),o(a,{name:"i-heroicons-magnifying-glass",class:"h-8 w-8"})])])]),_:1})}const mt=U(Q,[["render",Z]]);export{mt as default};
