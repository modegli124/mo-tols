const tools=[
{id:"compress",icon:"🖼️",name:"ضغط الصور",desc:"تقليل حجم الصور مع خيارات للجودة والصيغة",url:"tools/image-compressor/"},
{id:"resize",icon:"↔",name:"تغيير حجم الصور",desc:"تعديل أبعاد الصور بسرعة من المتصفح",url:"tools/image-resizer/"},
{id:"qr",icon:"▦",name:"إنشاء QR Code",desc:"أنشئ رمز QR لرابط أو نص وحمّله",url:"tools/qr-generator/"},
{id:"words",icon:"📝",name:"عداد الكلمات",desc:"احسب الكلمات والأحرف والأسطر في النص",url:"tools/word-counter/"},
{id:"units",icon:"⇄",name:"تحويل الوحدات",desc:"تحويل الطول والوزن ودرجة الحرارة",url:"tools/unit-converter/"},
{id:"calc",icon:"🧮",name:"الحاسبة",desc:"احسب العمليات الحسابية الأساسية بسهولة",url:"tools/calculator/"}
];
const grid=document.getElementById("grid"),search=document.getElementById("search"),empty=document.getElementById("empty"),menu=document.getElementById("menuBtn"),nav=document.getElementById("main-nav");
function render(list=tools){grid.innerHTML=list.map(t=>`<a class="tool" href="${t.url}"><div class="icon" aria-hidden="true">${t.icon}</div><h3>${t.name}</h3><p>${t.desc}</p><div class="arrow" aria-hidden="true">←</div></a>`).join("");empty.hidden=!!list.length;}
render();
search?.addEventListener("input",()=>{const q=search.value.trim().toLowerCase();render(tools.filter(t=>(t.name+" "+t.desc).toLowerCase().includes(q)))});
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.setAttribute("aria-expanded","false");}));
if("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(()=>{});
