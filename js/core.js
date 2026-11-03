/* ============ NÚCLEO: estado, utilidades y HUD ============ */
const R = String.raw;
const PI = Math.PI;
const YT = id => 'https://www.youtube.com/watch?v='+id;
const YTL = id => 'https://www.youtube.com/playlist?list='+id;

/* Llave horizontal de color debajo de una expresión: U('x^{2-1}','exp2','Ley 2') */
function U(e,k,lab,col){ const c=col||(typeof COL!=='undefined'&&COL[k])||'#e10600'; const l=lab||(typeof SHORT!=='undefined'&&SHORT[k])||k; return `{\\color{${c}}{\\underbrace{${e}}_{\\text{${l}}}}}`; }

function store(k,v){ try{ if(v===undefined) return JSON.parse(localStorage.getItem(k)||'null'); localStorage.setItem(k,JSON.stringify(v)); }catch(e){ return null; } }

let S = Object.assign({ xp:0, done:{}, free:false }, store('calc-state')||{});
function save(){ store('calc-state', S); }

function rankOf(xp){ const RK=t('ranks'); let r=RK[0]; for(const k of RK) if(xp>=k[0]) r=k; return r; }
function hud(){
  const RK=t('ranks'); const r = rankOf(S.xp); const i = RK.indexOf(r); const next = RK[i+1];
  const pct = next ? (S.xp - r[0])/(next[0]-r[0])*100 : 100;
  document.getElementById('xpfill').style.width = pct+'%';
  document.getElementById('rank').textContent = r[1];
  document.getElementById('xptxt').textContent = S.xp+' XP' + (next? ' / '+next[0] : '');
  document.getElementById('free').checked = S.free;
}
function goFull(){ try{ const d=document.documentElement; if(document.fullscreenElement){ document.exitFullscreen(); return; } const p=(d.requestFullscreen||d.webkitRequestFullscreen).call(d); if(p&&p.catch) p.catch(()=>toast(t('fullBlocked'))); }catch(e){ toast(t('fullBlocked')); } }
function toggleFree(){ S.free = document.getElementById('free').checked; save(); showMap(); }
function toast(msg){ const el=document.getElementById('toast'); el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),2200); }
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
