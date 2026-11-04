/* ============ PALETAS DE COLOR ============
   Toda la interfaz sale de variables CSS (--bg, --paper, --ink, --red...).
   Una paleta es solo un conjunto de valores para esas variables: para crear
   una nueva copia un bloque de PALETTES y cambia los colores.
   Las mismas claves sirven como "design tokens" si luego se pasa a una app
   (React Native, Flutter, etc.): ver docs/TEMAS.md.

   --red   color principal (acento)       --red2  acento brillante
   --blue  color secundario               --green color de "correcto"
   --hud   fondo de barras y paneles oscuros
   scheme  'light' | 'dark' (en oscuro las gráficas se muestran sobre una tarjeta clara) */
const PALETTES = {
  tactico:  { name:'Táctico',    scheme:'light', vars:{ bg:'#f3f3f0', paper:'#ffffff', soft:'#fafaf8', ink:'#0b0b0b', ink2:'#333333', mut:'#6b6b6b', line:'#d6d6d0', hud:'#0b0b0b', red:'#e10600', red2:'#ff2a1f', blue:'#0057ff', green:'#00a37a' } },
  oceano:   { name:'Océano',     scheme:'light', vars:{ bg:'#edf2f8', paper:'#ffffff', soft:'#f6f9fc', ink:'#0a1628', ink2:'#25344d', mut:'#5d6b82', line:'#d3dceb', hud:'#0a1628', red:'#0a5cff', red2:'#3d8bff', blue:'#e8590c', green:'#0f9d76' } },
  selva:    { name:'Selva',      scheme:'light', vars:{ bg:'#eef3ec', paper:'#ffffff', soft:'#f7faf5', ink:'#0d1f14', ink2:'#27392d', mut:'#5c6f61', line:'#d2ddd0', hud:'#0d1f14', red:'#0f8a4b', red2:'#22b864', blue:'#6d28d9', green:'#0f8a4b' } },
  atardecer:{ name:'Atardecer',  scheme:'light', vars:{ bg:'#f8f1ea', paper:'#fffdfa', soft:'#fdf7f1', ink:'#2b1608', ink2:'#4a3020', mut:'#7d6656', line:'#ead9c8', hud:'#2b1608', red:'#e8590c', red2:'#ff8a3d', blue:'#1c7ed6', green:'#2b8a3e' } },
  papel:    { name:'Papel',      scheme:'light', vars:{ bg:'#efe6d2', paper:'#fbf6ea', soft:'#f6efdf', ink:'#2b2118', ink2:'#46382b', mut:'#7a6a58', line:'#ddd0b6', hud:'#2b2118', red:'#9c2f12', red2:'#c4471f', blue:'#1f4e79', green:'#3c6e2f' } },
  noche:    { name:'Noche',      scheme:'dark',  vars:{ bg:'#0d1117', paper:'#161b22', soft:'#1c222b', ink:'#e6edf3', ink2:'#c9d1d9', mut:'#8b949e', line:'#2d333b', hud:'#05070a', red:'#ff4d4f', red2:'#ff7b72', blue:'#58a6ff', green:'#3fb950' } },
  terminal: { name:'Terminal',   scheme:'dark',  vars:{ bg:'#050b07', paper:'#0b140e', soft:'#0f1b13', ink:'#d6f5e0', ink2:'#b4dcc1', mut:'#7fa58b', line:'#1d3526', hud:'#000000', red:'#13a862', red2:'#5ef0a0', blue:'#40c4ff', green:'#e0b300' } },
  synth:    { name:'Synthwave',  scheme:'dark',  vars:{ bg:'#120b1f', paper:'#1b1230', soft:'#221839', ink:'#f2e9ff', ink2:'#dccdf5', mut:'#a08cc4', line:'#36295a', hud:'#0a0614', red:'#e8338f', red2:'#ff7ad1', blue:'#2de2e6', green:'#f9c80e' } },
};
const THEME_KEYS = ['bg','paper','soft','ink','ink2','mut','line','hud','red','red2','blue','green'];
let THEME = Object.assign({ id:'tactico', custom:null }, store('calc-theme')||{});

function applyTheme(){
  const P = PALETTES[THEME.id] || PALETTES.tactico;
  const v = Object.assign({}, P.vars, THEME.custom ? { red:THEME.custom, red2:THEME.custom } : {});
  const r = document.documentElement;
  THEME_KEYS.forEach(k=>r.style.setProperty('--'+k, v[k]));
  r.dataset.scheme = P.scheme; r.dataset.palette = THEME.id;
  const m = document.querySelector('meta[name="theme-color"]'); if(m) m.setAttribute('content', v.hud);
  const pb = document.getElementById('palbtn'); if(pb) pb.style.setProperty('--sw', v.red);
}
function setTheme(id){ THEME.id=id; store('calc-theme',THEME); applyTheme(); renderPalPanel(); }
function setAccent(hex){ THEME.custom=hex||null; store('calc-theme',THEME); applyTheme(); renderPalPanel(); }

function renderPalPanel(){
  const el=document.getElementById('palpanel'); if(!el) return;
  el.innerHTML = `<div class="pal-h">PALETA DE COLORES</div>
   <div class="pal-grid">${Object.entries(PALETTES).map(([k,p])=>{ const v=p.vars;
     return `<button class="pal-op${k===THEME.id?' on':''}" onclick="setTheme('${k}')" aria-label="${p.name}">
       <span class="pal-sw" style="background:${v.bg};border-color:${v.line}"><i style="background:${v.hud}"></i><i style="background:${v.paper}"></i><i style="background:${v.red}"></i><i style="background:${v.blue}"></i></span>
       <span class="pal-nm">${p.name}<em>${p.scheme==='dark'?'oscuro':'claro'}</em></span></button>`; }).join('')}</div>
   <div class="pal-cus"><label>Acento propio <input type="color" value="${THEME.custom||(PALETTES[THEME.id]||PALETTES.tactico).vars.red}" oninput="setAccent(this.value)"></label>
   ${THEME.custom?`<button class="pal-rs" onclick="setAccent(null)">QUITAR</button>`:''}</div>
   <div class="pal-ft">Se guarda en este navegador. Los colores son variables CSS: ver <b>docs/TEMAS.md</b>.</div>`;
}
function togglePal(ev){
  if(ev) ev.stopPropagation();
  let el=document.getElementById('palpanel');
  if(!el){ el=document.createElement('div'); el.id='palpanel'; el.className='palpanel'; el.onclick=e=>e.stopPropagation(); document.body.appendChild(el); }
  const open=!el.classList.contains('on'); el.classList.toggle('on',open); if(open) renderPalPanel();
  const b=document.getElementById('palbtn'); if(b) b.classList.toggle('on',open);
}
document.addEventListener('click',()=>{ const el=document.getElementById('palpanel'); if(el&&el.classList.contains('on')) togglePal(); });
applyTheme();
