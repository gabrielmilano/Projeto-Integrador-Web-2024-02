(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[773],{7383:(e,t,r)=>{Promise.resolve().then(r.bind(r,211))},6045:(e,t,r)=>{"use strict";r.d(t,{Lx:()=>s,gf:()=>o,y4:()=>n});let a=e=>{document.cookie="token=".concat(e,"; path=/; samesite=strict;")},o=()=>{let e="token=",t=decodeURIComponent(document.cookie).split(";");for(let r=0;r<t.length;r++){let a=t[r].trim();if(0===a.indexOf(e))return a.substring(e.length,a.length)}return null},s=async e=>{try{let t=await fetch("".concat("http://localhost:8080/api","/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"});if(!t.ok){let e=await t.json();throw console.error("Erro ao realizar login:",e),Error("Erro ao realizar login")}let r=await t.json(),o=r.content.token;return a(o),r}catch(e){throw console.error("Erro ao realizar login:",e),e}},n=()=>{document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",window.location.href="/pages/public/login"}},211:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(5155),o=r(2115),s=r(6046),n=r(6045);function l(){let[e,t]=(0,o.useState)(""),[r,l]=(0,o.useState)(""),[i,c]=(0,o.useState)(""),[u,d]=(0,o.useState)(!1),h=(0,s.useRouter)(),m=async t=>{t.preventDefault(),d(!0),c("");try{await (0,n.Lx)({usuario:e,senha:r}),h.push("/pages/aut/homeLogado")}catch(e){c("Erro ao realizar login. Verifique suas credenciais.")}finally{d(!1)}};return(0,a.jsx)("div",{className:"container mx-auto px-4 py-8",children:(0,a.jsxs)("div",{className:"max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-4 text-center text-black-600",children:"Login"}),(0,a.jsxs)("form",{onSubmit:m,children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"user",className:"block text-gray-700",children:"Usu\xe1rio"}),(0,a.jsx)("input",{id:"usuario",type:"text",value:e,onChange:e=>t(e.target.value),className:"border p-2 w-full rounded",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-gray-700",children:"Senha"}),(0,a.jsx)("input",{id:"senha",type:"password",value:r,onChange:e=>l(e.target.value),className:"border p-2 w-full rounded",required:!0})]}),i&&(0,a.jsx)("p",{className:"text-red-600 mb-4",children:i}),(0,a.jsx)("button",{type:"submit",className:"w-full px-4 py-2 rounded text-white ".concat(u?"bg-gray-500":"bg-gray-600"," hover:bg-gray-700"),disabled:u,children:u?"Entrando...":"Login"})]})]})})}},6046:(e,t,r)=>{"use strict";var a=r(6658);r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(7383)),_N_E=e.O()}]);