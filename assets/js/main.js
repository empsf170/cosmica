document.addEventListener('DOMContentLoaded',()=>{
  const top=document.querySelector('.scroll-top');
  window.addEventListener('scroll',()=>top&&top.classList.toggle('show',scrollY>450));
  top?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
  const reveals=document.querySelectorAll('.reveal');
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
  reveals.forEach(e=>io.observe(e));
  document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
  const search=document.querySelector('[data-directory-search]');
  if(search){search.addEventListener('input',()=>{const q=search.value.toLowerCase();document.querySelectorAll('[data-directory-item]').forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q)?'':'none')})}
});
