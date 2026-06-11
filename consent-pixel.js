// ===== LUMORA · Consentimiento RGPD + Meta Pixel =====
// Carga el píxel SOLO tras consentimiento (obligatorio en la UE).
//
// 👉 PASO 1: pega aquí tu ID de píxel (Meta Events Manager → Orígenes de datos → tu píxel).
const META_PIXEL_ID = "2177454113041586"; // Lumora Pixel

const CONSENT_KEY = "lumora_consent_v1";
const lumoraConsent = () => localStorage.getItem(CONSENT_KEY);

// Carga el píxel y dispara el evento de la página actual (data-page en <body>).
function loadPixel(){
  if(window.fbq) return;
  if(!META_PIXEL_ID || META_PIXEL_ID === "PEGA_TU_PIXEL_ID"){
    console.info("[Lumora] Pega tu META_PIXEL_ID en consent-pixel.js para activar el seguimiento.");
    return;
  }
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');

  const page = document.body.dataset.page;
  if(page === 'home'){
    fbq('track','ViewContent',{content_name:'Cortadora Pro Zero-Gapped',content_type:'product',content_ids:['cortadora-pro'],value:39.95,currency:'EUR'});
  }
  if(page === 'gracias'){
    fbq('track','Purchase',{content_name:'Cortadora Pro Zero-Gapped',content_ids:['cortadora-pro'],value:39.95,currency:'EUR'});
  }
}

// Helper para eventos de interacción (lo llama app.js).
function lumoraTrack(event, params){ if(window.fbq) fbq('track', event, params || {}); }

// ---- Banner de consentimiento ----
(function(){
  if(lumoraConsent() === 'accepted') loadPixel();
  const banner = document.getElementById('consent');
  if(!banner) return;
  if(lumoraConsent()){ banner.style.display = 'none'; return; }
  banner.style.display = '';
  const close = (choice) => { localStorage.setItem(CONSENT_KEY, choice); banner.style.display='none'; if(choice==='accepted') loadPixel(); };
  document.getElementById('consent-accept').onclick = () => close('accepted');
  document.getElementById('consent-reject').onclick = () => close('rejected');
})();
