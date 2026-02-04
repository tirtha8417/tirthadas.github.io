const sections=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})
},{threshold:.2});
sections.forEach(s=>observer.observe(s));