const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".site-nav");
if(menuButton&&nav){
  menuButton.addEventListener("click",()=>{
    const open=menuButton.getAttribute("aria-expanded")==="true";
    menuButton.setAttribute("aria-expanded",String(!open));
    menuButton.setAttribute("aria-label",open?"Open menu":"Close menu");
    nav.classList.toggle("open",!open);
  });
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    menuButton.setAttribute("aria-expanded","false");
    menuButton.setAttribute("aria-label","Open menu");
    nav.classList.remove("open");
  }));
}
const year=document.querySelector("#year");
if(year)year.textContent=String(new Date().getFullYear());
