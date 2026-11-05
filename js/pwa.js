/* ============ APP INSTALABLE (PWA) ============
   1. Registra el service worker (sw.js) para que todo funcione sin internet.
   2. Muestra el botón "Instalar app" de la barra cuando el navegador lo permite.
   El service worker solo funciona servido por http(s) (GitHub Pages, un servidor local),
   no abriendo index.html con doble clic. */
let PWA_PROMPT = null;
const PWA_IOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
const PWA_STANDALONE = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;

if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        const w = reg.installing; if (!w) return;
        w.addEventListener('statechange', () => {
          if (w.state !== 'installed') return;
          if (navigator.serviceWorker.controller) { typeof toast === 'function' && toast(t('updateReady')); }
          else { typeof toast === 'function' && toast(t('offlineReady')); }
        });
      });
    }).catch(() => {});
  });
}

function pwaShowBtn(on){ const b = document.getElementById('installbtn'); if (b) b.hidden = !on; }
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); PWA_PROMPT = e; pwaShowBtn(true); });
window.addEventListener('appinstalled', () => { PWA_PROMPT = null; pwaShowBtn(false); typeof toast === 'function' && toast(t('installOk')); });
window.addEventListener('DOMContentLoaded', () => { if (PWA_IOS && !PWA_STANDALONE()) pwaShowBtn(true); });

async function installApp(){
  if (PWA_PROMPT) { PWA_PROMPT.prompt(); const r = await PWA_PROMPT.userChoice.catch(() => null); PWA_PROMPT = null; if (!r || r.outcome !== 'accepted') pwaShowBtn(false); return; }
  if (PWA_IOS) { toast(t('installIOS')); return; }
}
