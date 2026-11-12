const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
    menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
  }));
}
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
  }),{threshold:.12});
  revealItems.forEach(el=>observer.observe(el));
}else{revealItems.forEach(el=>el.classList.add('visible'));}
