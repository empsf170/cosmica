
document.addEventListener("DOMContentLoaded",()=>{
 const nav=document.querySelector(".navbar");
 const top=document.querySelector(".floating-top");
 const reveals=document.querySelectorAll(".reveal");
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
 reveals.forEach(e=>obs.observe(e));
 window.addEventListener("scroll",()=>{
   nav?.classList.toggle("scrolled",scrollY>30);
   top?.classList.toggle("show",scrollY>500);
 });
 top?.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
   const el=document.querySelector(a.getAttribute("href")); if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}
 }));
 // Directory filter
 const search=document.querySelector("#directorySearch");
 const cards=[...document.querySelectorAll(".directory-card")];
 search?.addEventListener("input",()=>{
   const q=search.value.toLowerCase();
   cards.forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q)?"flex":"none");
 });
 // Demo contact form
 document.querySelectorAll(".demo-form").forEach(f=>f.addEventListener("submit",e=>{
   e.preventDefault(); const msg=f.querySelector(".form-msg"); if(msg){msg.textContent="Thank you — your enquiry has been received.";msg.classList.remove("d-none")}
 }));
});
