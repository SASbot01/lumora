// ---- Custom cursor ----
const cur = document.querySelector('.cursor');
const dot = document.querySelector('.cursor-dot');
let mx=innerWidth/2, my=innerHeight/2, cx=mx, cy=my;
addEventListener('mousemove', e=>{
  mx=e.clientX; my=e.clientY;
  dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;
  document.documentElement.style.setProperty('--mx', mx+'px');
  document.documentElement.style.setProperty('--my', my+'px');
});
(function loop(){ cx+=(mx-cx)*.18; cy+=(my-cy)*.18;
  cur.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`;
  requestAnimationFrame(loop);})();
document.querySelectorAll('a,button,.tilt,.btn,input').forEach(el=>{
  el.addEventListener('mouseenter',()=>cur.classList.add('big'));
  el.addEventListener('mouseleave',()=>cur.classList.remove('big'));
});

// ---- Header shrink ----
const hd=document.getElementById('hd');
addEventListener('scroll',()=>hd.classList.toggle('scrolled', scrollY>40));

// ---- Reveal on scroll ----
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// ---- Count up stats ----
const cio=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(!e.isIntersecting) return;
    const el=e.target, target=+el.dataset.count; let n=0;
    const step=Math.max(1,Math.round(target/45));
    const t=setInterval(()=>{ n+=step; if(n>=target){n=target;clearInterval(t);} el.textContent=n; },22);
    cio.unobserve(el);
  });
},{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

// ---- Parallax (hero photo + brand bg) ----
const heroPhoto=document.getElementById('heroPhoto');
const brandBg=document.getElementById('brandBg');
addEventListener('scroll',()=>{
  const y=scrollY;
  if(heroPhoto) heroPhoto.style.transform=`scale(1.1) translateY(${y*0.18}px)`;
  if(brandBg){ const r=brandBg.getBoundingClientRect();
    brandBg.style.transform=`scale(1.1) translateY(${(r.top)* -0.06}px)`; }
});

// ---- 3D tilt cards ----
document.querySelectorAll('.tilt, .product .media').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`rotateY(${px*12}deg) rotateX(${-py*12}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});

// ---- Before / After slider ----
(function(){
  const ba=document.getElementById('ba'); if(!ba) return;
  const after=ba.querySelector('.after'), handle=document.getElementById('baHandle');
  let drag=false;
  const set=(clientX)=>{ const r=ba.getBoundingClientRect();
    let p=(clientX-r.left)/r.width; p=Math.max(0,Math.min(1,p));
    after.style.clipPath=`inset(0 0 0 ${p*100}%)`; handle.style.left=(p*100)+'%'; };
  const start=()=>drag=true, end=()=>drag=false;
  handle.addEventListener('mousedown',start); addEventListener('mouseup',end);
  ba.addEventListener('mousemove',e=>{ if(drag) set(e.clientX); });
  handle.addEventListener('touchstart',start); addEventListener('touchend',end);
  ba.addEventListener('touchmove',e=>{ if(drag) set(e.touches[0].clientX); },{passive:true});
})();

// ---- Demo actions ----
// 👉 PEGA AQUÍ tu link de pago (Stripe Payment Link o Shopify) para vender de verdad.
//    Ej: const CHECKOUT_URL = "https://buy.stripe.com/xxxxx";
const CHECKOUT_URL = "https://buy.stripe.com/fZu8wO1YfcBvexDcXu5kk0c";
function addCart(){
  if(CHECKOUT_URL){ location.href = CHECKOUT_URL; return; }
  alert("🛒 (Demo) Aún no hay pasarela conectada.\nPega tu link de pago en CHECKOUT_URL (app.js) para empezar a cobrar.");
}
function subscribe(e){e.preventDefault();alert("✅ (Demo) ¡Suscrito! En la tienda real esto entra en Klaviyo y dispara el email de -10%.");return false;}

// ---- 3D scenes (cortadoras flotantes) ----
addEventListener('load',()=>{
  if(!window.LumoraScene){console.warn('Three.js no disponible');return;}
  const hero=document.getElementById('hero3d');
  if(hero) LumoraScene(hero,{clippers:[
    {x:0.4,y:0,s:1.15,sp:.5,fs:1},
    {x:-3.5,y:.7,s:.58,sp:-.8,rz:.5,fs:1.4},
    {x:3.4,y:-.5,s:.7,sp:.7,rz:-.4,fs:.9}
  ],pCount:190});
});

// ---- Galería de producto ----
function swapMain(thumb){
  const main=document.getElementById('mainImg'); if(!main) return;
  main.src=thumb.src;
  document.querySelectorAll('.thumbs img').forEach(t=>t.classList.remove('active'));
  thumb.classList.add('active');
}
