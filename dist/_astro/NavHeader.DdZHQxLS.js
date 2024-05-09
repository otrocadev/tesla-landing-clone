import{o as n,c as t,a as r,F as u,r as m,t as d,b,d as h,n as v,e as _,w as y,T as w,f as M,g as k}from"./runtime-dom.esm-bundler.BERvm9df.js";/* empty css                       */const f=(o,s)=>{const c=o.__vccOpts||o;for(const[e,l]of s)c[e]=l;return c},I={},S={class:"h-6 w-32",viewBox:"0 0 342 35",xmlns:"http://www.w3.org/2000/svg"},C=r("path",{d:"M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z",fill:"currentColor"},null,-1),A=[C];function z(o,s){return n(),t("svg",S,A)}const Z=f(I,[["render",z]]),H={__name:"MenuSection",props:{cathegoryInfo:Object},setup(o,{expose:s}){s();const e={props:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},N={class:"bg-white flex px-32 py-10 justify-center shadow"},V={class:"flex flex-wrap justify-start basis-auto"},B=["href"],$=["src"],j={class:"text-lg"},P={class:"flex flex-col text-lg ml-10"},D=["href"],E={class:"flex gap-12"},O={class:"text-slate-600 pb-4 text-xl"},T=["href"];function L(o,s,c,e,l,g){return n(),t("div",N,[r("div",V,[(n(!0),t(u,null,m(e.props.cathegoryInfo.elements,a=>(n(),t("a",{href:a.url,class:"flex flex-col min-w-52 max-w-60 text-center transition-transform duration-500 hover:scale-110",key:a.name},[r("img",{class:"max-w-56",src:a.img,alt:""},null,8,$),r("h4",j,d(a.name),1)],8,B))),128))]),r("ul",P,[(n(!0),t(u,null,m(e.props.cathegoryInfo.related,a=>(n(),t("li",{class:"transition-all duration-500 hover:text-red-500 hover:scale-110 hover:underline",key:a.name},[r("a",{href:a.url},d(a.name),9,D)]))),128))]),r("div",E,[(n(!0),t(u,null,m(e.props.cathegoryInfo.discober,a=>(n(),t("ul",{key:a.name},[r("li",O,d(a.name),1),r("li",null,[r("ul",null,[(n(!0),t(u,null,m(a.links,i=>(n(),t("li",{class:"transition-all duration-500 hover:text-red-500 hover:scale-110 hover:underline",key:i.name},[r("a",{href:i.url},d(i.name),9,T)]))),128))])])]))),128))])])}const R=f(H,[["render",L]]),F={},J={class:"flex align-middle gap-3 mr-2"},U=b(`<li class="p-1 rounded hover:bg-slate-300 hover:text-black"><a href="#"><svg class="" viewBox="0 0 24 24" height="24px"><path fill="currentColor" d="M12 20.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm.053-3.533a7.8 7.8 0 0 1 .92-.767 6.97 6.97 0 0 0 .746-.61 2.31 2.31 0 0 0 .468-.635c.126-.253.188-.548.188-.883 0-.374-.082-.723-.246-1.048-.158-.324-.415-.588-.771-.792-.356-.203-.81-.305-1.362-.305-.575 0-1.045.116-1.411.347a1.991 1.991 0 0 0-.788.89c-.06.134-.11.272-.148.413-.111.414-.445.767-.874.767-.428 0-.784-.35-.71-.772.07-.407.2-.79.386-1.15.301-.583.758-1.048 1.37-1.394C10.435 6.176 11.185 6 12.07 6c.93 0 1.687.181 2.273.544.59.358 1.014.803 1.271 1.337.257.533.386 1.07.386 1.608 0 .545-.085 1.012-.254 1.403-.17.385-.375.698-.616.94-.235.242-.55.514-.943.817-.312.247-.561.46-.747.635-.18.176-.33.385-.451.627-.05.099-.087.2-.113.302-.108.424-.422.787-.86.787-.437 0-.806-.356-.76-.79a2.948 2.948 0 0 1 .797-1.743Z"></path></svg></a></li><li class="p-1 rounded hover:bg-slate-300 hover:text-black"><a href="#"><svg viewBox="0 0 24 24" height="24px"><path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z"></path></svg></a></li><li class="p-1 rounded hover:bg-slate-300 hover:text-black"><a href="#"><svg class="" viewBox="0 0 24 24" height="24px"><path fill="
        currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6.858 18.752c.605-1.868 2.722-3.24 5.142-3.24 2.42 0 4.537 1.372 5.142 3.24C15.712 19.844 13.933 20.5 12 20.5s-3.712-.656-5.142-1.748zm11.469-1.095c-1.02-2.165-3.483-3.645-6.327-3.645s-5.307 1.48-6.327 3.645A8.456 8.456 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5 4.687 0 8.5 3.813 8.5 8.5a8.456 8.456 0 0 1-2.173 5.657zM12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg></a></li>`,3),W=[U];function X(o,s){return n(),t("ul",J,W)}const Y=f(F,[["render",X]]),q={__name:"NavHeader",setup(o,{expose:s}){s();const c=[{name:"Vehículos",elements:[{name:"Model S",img:"./header-menu/models-menu.avif",url:"#"},{name:"Model 3",img:"./header-menu/model3-menu.avif",url:"#"},{name:"Model X",img:"./header-menu/modelx-menu.avif",url:"#"},{name:"Model Y",img:"./header-menu/modely-menu.avif",url:"#"},{name:"Cybertruck",img:"./header-menu/cybertruck-menu.avif",url:"#"},{name:"Necesito ayuda para elegir",img:"./header-menu/choose-menu.avif",url:"#"}],related:[{name:"Prueva de conducción",url:"#"},{name:"Tasación",url:"#"},{name:"Vehículos preconfigurados",url:"#"},{name:"Ocasión",url:"#"},{name:"Coche de empresa",url:"#"},{name:"Roadster",url:"#"}]},{name:"Energia",elements:[{name:"Powerwall",img:"./header-menu/powerwall-menu.avif",url:"#"},{name:"Megapack",img:"./header-menu/megapack-menu.avif",url:"#"}],related:[{name:"Soporte",url:"#"},{name:"Sea un socio de Tesla",url:"#"},{name:"Historias de clientes",url:"#"},{name:"Utilities",url:"#"},{name:"Comercial",url:"#"}]},{name:"Carga",elements:[{name:"Carga",img:"./header-menu/chargingcar-menu.avif",url:"#"},{name:"Carga en casa",img:"./header-menu/charger-menu.avif",url:"#"},{name:"Supercarga",img:"./header-menu/supercharger-menu.avif",url:"#"}],related:[{name:"Votación de Supercargador",url:"#"},{name:"Instale un Supercargador",url:"#"},{name:"Instale Wall Connectors",url:"#"}]},{name:"Descubrir",discober:[{name:"Recursos",links:[{name:"Prueba de conducción",url:"#"},{name:"Historias de clientes",url:"#"},{name:"Eventos",url:"#"},{name:"Video guías",url:"#"}]},{name:"Servicions de ubicación",links:[{name:"Dónde estamos",url:"#"},{name:"Encuentre un instalador certificado",url:"#"},{name:"Buscar un taller de carrocería",url:"#"}]},{name:"Persona Jurídica (Empresa)",links:[{name:"Acerca de",url:"#"},{name:"Empleo",url:"#"},{name:"Relaciones con los inversores",url:"#"}]}]},{name:"Tienda",elements:[{name:"Carga",img:"./header-menu/charger-menu.avif",url:"#"},{name:"Accesorios para el vehículo",img:"./header-menu/accesories-menu.avif",url:"#"},{name:"Ropa",img:"./header-menu/clothing-menu.avif",url:"#"},{name:"Estilo de vida",img:"./header-menu/lifestyle-menu.avif",url:"#"}]}],e=h(!1),l=h(),p={menuData:c,menuIsActive:e,cathegorySelected:l,activeMenuIsActive:function(){e.value=!0},deactiveMenuIsActive:function(){e.value=!1,l.value=h(NaN)},passCathegory:function(x){l.value=x},Logo:Z,MenuSection:R,NavIcons:Y,ref:h};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},G={class:"text-white py-4 px-10 flex items-center top-0 w-screen justify-between absolute z-40"},K=["onMouseover"];function Q(o,s,c,e,l,g){return n(),t("div",{class:v({"backdrop-blur-sm w-screen h-screen":e.menuIsActive})},[r("header",{onMouseleave:s[1]||(s[1]=a=>e.deactiveMenuIsActive())},[r("div",G,[r("div",{class:v(["flex flex-grow basis-0",{"text-black":e.menuIsActive}])},[_(e.Logo)],2),r("nav",{class:v({"text-black":e.menuIsActive})},[r("ul",{onMouseover:s[0]||(s[0]=a=>e.activeMenuIsActive()),class:"flex text-sm [&>li>a]:px-4 [&>li>a]:py-2 [&>li]:hover:"},[(n(),t(u,null,m(e.menuData,a=>r("li",{key:a.name,class:"py-2 rounded hover:bg-slate-300 hover:text-black"},[r("a",{onMouseover:i=>e.passCathegory(a),href:"#"},d(a.name),41,K)])),64))],32)],2),r("nav",{class:v(["flex flex-grow basis-0 justify-end",{"text-black":e.menuIsActive}])},[_(e.NavIcons)],2)]),_(w,{name:"drop"},{default:y(()=>[e.menuIsActive?(n(),M(e.MenuSection,{class:"absolute w-screen top-0 pt-24",key:e.cathegorySelected,cathegoryInfo:e.cathegorySelected},null,8,["cathegoryInfo"])):k("",!0)]),_:1})],32)],2)}const re=f(q,[["render",Q]]);export{re as default};