/* ============ ENLACES TIPO WIKIPEDIA, CITAS, LÍNEA DE TIEMPO Y GLOSARIO ============
   Datos en content/<idioma>/wiki.js:
     WIKI  glosario: término → definición corta, sección y título donde se explica, ejemplo, Wikipedia, fuentes
     CITE  bibliografía: clave → autor, título, editorial, URL
     HIST  hitos históricos de la línea de tiempo
   Marcado dentro de la teoría (se convierte con wkParse al cargar):
     [[clave]]  [[clave|texto visible]]   enlace interno con vista previa
     [^clave]   [^clave|§2.3]             cita numerada a la bibliografía
   Además, wikify() enlaza solo la primera aparición de cada término del glosario
   en el texto de la teoría (como hace Wikipedia), sin tocar fórmulas ni títulos. */

Object.assign(I18N.es,{ tl:'LÍNEA DE TIEMPO', gloss:'GLOSARIO', pal:'PALETA DE COLORES', backToEx:'< VOLVER',
  wkTheory:'TEORÍA →', wkEx:'EJEMPLO →', wkWiki:'Wikipedia ↗', wkRefs:'REFERENCIAS', wkSee:'VER TAMBIÉN', wkSrc:'Fuentes' });
if(I18N.en) Object.assign(I18N.en,{ tl:'TIMELINE', gloss:'GLOSSARY', pal:'COLOR PALETTE', backToEx:'< BACK',
  wkTheory:'THEORY →', wkEx:'EXAMPLE →', wkWiki:'Wikipedia ↗', wkRefs:'REFERENCES', wkSee:'SEE ALSO', wkSrc:'Sources' });

let VIEW='map';
const WK_ESC = s=>String(s).replace(/"/g,'&quot;');
function wkParse(s){
  if(typeof s!=='string') return s;
  return s.replace(/\[\[([\w-]+)(?:\|([^\]]+))?\]\]/g,(m,k,txt)=>{ const W=(typeof WIKI!=='undefined')&&WIKI[k]; return `<a class="wk" data-wk="${k}">${txt||k.replace(/-/g,' ')}</a>`; })
          .replace(/\[\^([\w-]+)(?:\|([^\]]+))?\]/g,(m,k,loc)=>`<sup class="cite" data-c="${k}"${loc?` data-loc="${WK_ESC(loc)}"`:''}>[·]</sup>`);
}
function wikiURL(w){ return /^https?:/.test(w)? w : 'https://es.wikipedia.org/wiki/'+encodeURIComponent(w.replace(/ /g,'_')); }
function citeHTML(k,loc){ const C=CITE[k]; if(!C) return k;
  return `${C.a?C.a.replace(/\.$/,'')+'. ':''}<i>${C.t}</i>${C.p?'. '+C.p:''}${loc?' · '+loc:''}${C.u?` <a href="${C.u}" target="_blank" rel="noopener">↗</a>`:''}`; }

/* ---------- vista previa (como las "page previews" de Wikipedia) ---------- */
let wkT=null, wkH=null, wkCur=null;
function wkCard(){ let c=document.getElementById('wkcard'); if(!c){ c=document.createElement('div'); c.id='wkcard'; c.className='wkcard';
  c.onmouseenter=()=>clearTimeout(wkH); c.onmouseleave=()=>wkHide(200); document.body.appendChild(c); } return c; }
function wkShow(a){
  const k=a.dataset.wk, W=WIKI[k]; if(!W) return; wkCur=a; const c=wkCard(); const L=LV.find(x=>x.id===W.sec);
  c.innerHTML=`<div class="wk-h"><span class="wk-k">${L?L.code+' · '+L.n:'GLOSARIO'}</span><b>${W.t}</b></div>
   <div class="wk-d">${W.d}</div>
   ${W.f?`<div class="wk-f">\\[${W.f}\\]</div>`:''}
   <div class="wk-b">${L?`<button onclick="goWiki('${k}','lore')">${t('wkTheory')}</button>`:''}${L&&W.ex!==undefined&&L.ex&&L.ex[W.ex]?`<button onclick="goWiki('${k}','ex')">${t('wkEx')}</button>`:''}${W.w?`<a href="${wikiURL(W.w)}" target="_blank" rel="noopener">${t('wkWiki')}</a>`:''}</div>
   ${W.c&&W.c.length?`<div class="wk-s"><span>${t('wkSrc')}:</span> ${W.c.map(x=>{const [ck,loc]=x.split('|'); const C=CITE[ck]; return C?`<a href="${C.u||'#'}" target="_blank" rel="noopener">${C.s||C.t}${loc?' '+loc:''}</a>`:''; }).join(' · ')}</div>`:''}`;
  const r=a.getBoundingClientRect(), w=Math.min(360, window.innerWidth-24);
  c.style.width=w+'px'; c.style.left=Math.max(12,Math.min(r.left, window.innerWidth-w-12))+'px';
  c.classList.add('on'); const h=c.offsetHeight;
  const below = r.bottom+8+h < window.innerHeight; c.style.top=(below? r.bottom+8 : Math.max(8,r.top-h-8))+'px'; c.classList.toggle('up',!below);
  typeset(c);
}
function wkHide(ms){ clearTimeout(wkH); wkH=setTimeout(()=>{ const c=document.getElementById('wkcard'); if(c) c.classList.remove('on'); wkCur=null; }, ms||0); }
const WK_TOUCH = window.matchMedia && matchMedia('(hover: none)').matches;
document.addEventListener('mouseover',e=>{ if(WK_TOUCH) return; const a=e.target.closest&&e.target.closest('a.wk'); if(!a) return; clearTimeout(wkH); clearTimeout(wkT); wkT=setTimeout(()=>wkShow(a),230); });
document.addEventListener('mouseout',e=>{ const a=e.target.closest&&e.target.closest('a.wk'); if(a){ clearTimeout(wkT); wkHide(260); } });
document.addEventListener('click',e=>{
  const a=e.target.closest&&e.target.closest('a.wk');
  if(a){ e.preventDefault(); if(WK_TOUCH && wkCur!==a){ wkShow(a); return; } wkHide(); goWiki(a.dataset.wk,'lore'); return; }
  const s=e.target.closest&&e.target.closest('sup.cite');
  if(s){ const el=document.getElementById('ref-'+s.dataset.n); if(el){ el.scrollIntoView({behavior:'smooth',block:'center'}); el.classList.add('flash'); setTimeout(()=>el.classList.remove('flash'),2200); } return; }
  if(!(e.target.closest&&e.target.closest('#wkcard'))) wkHide();
});
window.addEventListener('scroll',()=>{ if(wkCur) wkHide(); },{passive:true});

/* ---------- ir a la teoría o al ejemplo ---------- */
function flashScroll(el){ if(!el) return; el.scrollIntoView({block:'start'}); window.scrollBy(0,-84); el.classList.add('flash'); setTimeout(()=>el.classList.remove('flash'),2600); }
function findHeading(root, txt){ if(!txt) return null; const n=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  return [...root.querySelectorAll('h3,h4')].find(h=>n(h.textContent).includes(n(txt))) || null; }
function goWiki(k, mode){
  const W=WIKI[k]; if(!W) return; wkHide(); const i=LV.findIndex(x=>x.id===W.sec); if(i<0) return;
  RET = VIEW==='level' ? { i:CUR.i, tab:CUR.tab, y:window.scrollY } : null;
  const tab = mode==='ex' && LV[i].ex && LV[i].ex.length ? 'ex' : 'lore';
  showLevel(i, tab, true);
  setTimeout(()=>{
    if(tab==='ex'){ const ex=document.querySelectorAll('.ex')[W.ex||0]; if(ex){ const all=ex.querySelector('.all'); if(all) all.click(); flashScroll(ex); } }
    else { const h=findHeading(document.getElementById('body'), W.h); if(h) flashScroll(h); }
  },90);
  showBack();
}

/* ---------- enlazado automático (primera aparición de cada término) ---------- */
let WK_RX=null, WK_AL={};
function wkBuild(){ if(typeof WIKI==='undefined') return; const al=[];
  Object.entries(WIKI).forEach(([k,W])=>(W.al||[]).forEach(a=>{ WK_AL[a.toLowerCase()]=k; al.push(a); }));
  al.sort((a,b)=>b.length-a.length);
  WK_RX = new RegExp('(?<![\\p{L}\\p{N}])('+al.map(a=>a.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')(?![\\p{L}\\p{N}])','iu'); }
function wikify(root){
  if(!root||!root.querySelectorAll) return; if(!WK_RX) wkBuild(); if(!WK_RX) return;
  root.querySelectorAll('[data-wiki="1"]').forEach(panel=>{
    if(panel.dataset.wikified) return; panel.dataset.wikified='1';
    const self=panel.dataset.sec; const done=new Set([...panel.querySelectorAll('a.wk')].map(a=>a.dataset.wk)); let n=0;
    const walker=document.createTreeWalker(panel, NodeFilter.SHOW_TEXT, { acceptNode(nd){
      const p=nd.parentElement; if(!p || p.closest('a,button,h2,h3,h4,mjx-container,.formula,.wk,script,style,.refs,.vids,.wk-refs,.pinfo-h,.rp,.hoja,.mp-sh,.cite,code,.tscroll th')) return NodeFilter.FILTER_REJECT;
      return /\S/.test(nd.nodeValue)? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } });
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    for(const nd of nodes){ if(n>=40) break;
      let txt=nd.nodeValue, m, frag=null, last=0, cursor=0;
      const rx=new RegExp(WK_RX.source, 'giu');
      while((m=rx.exec(txt))){ const k=WK_AL[m[1].toLowerCase()]; if(!k||done.has(k)||WIKI[k].sec===self) continue;
        done.add(k); n++; frag=frag||document.createDocumentFragment();
        frag.appendChild(document.createTextNode(txt.slice(last,m.index)));
        const a=document.createElement('a'); a.className='wk auto'; a.dataset.wk=k; a.textContent=m[1]; frag.appendChild(a); last=m.index+m[1].length; }
      if(frag){ frag.appendChild(document.createTextNode(txt.slice(last))); nd.parentNode.replaceChild(frag,nd); }
    }
  });
}
/* typeset() de index.html + enlazado al terminar MathJax */
typeset = function(el){
  if(window.__mj && window.MathJax && MathJax.typesetPromise){ MathJax.typesetClear && MathJax.typesetClear([el]); return MathJax.typesetPromise([el]).then(()=>wikify(el)).catch(()=>{}); }
};

/* ---------- referencias al final de cada sección ---------- */
function refsBlock(L, panel){
  const cites=[...panel.querySelectorAll('sup.cite')]; const order=[]; const key=(k,loc)=>k+'|'+(loc||'');
  cites.forEach(s=>{ const kk=key(s.dataset.c,s.dataset.loc); if(!order.includes(kk)) order.push(kk); s.dataset.n=order.indexOf(kk)+1; s.textContent='['+s.dataset.n+']'; s.title=(CITE[s.dataset.c]||{}).t||''; });
  (L.cites||[]).forEach(x=>{ const [k,loc]=x.split('|'); const kk=key(k,loc); if(!order.includes(kk)) order.push(kk); });
  const own=Object.entries(typeof WIKI!=='undefined'?WIKI:{}).filter(([k,W])=>W.sec===L.id);
  const wps=[...new Map(own.filter(([k,W])=>W.w).map(([k,W])=>[W.w,W])).values()];
  const see=(L.see||[]).filter(k=>WIKI[k]);
  if(!order.length && !wps.length && !see.length) return '';
  return `<section class="wk-refs">
    ${see.length?`<div class="wk-rh">${t('wkSee')}</div><div class="wk-see">${see.map(k=>`<a class="wk" data-wk="${k}">${WIKI[k].t}</a>`).join('')}</div>`:''}
    ${order.length||wps.length?`<div class="wk-rh">${t('wkRefs')}</div><ol>${order.map((kk,j)=>{ const [k,loc]=kk.split('|'); return `<li id="ref-${j+1}">${citeHTML(k,loc)}</li>`; }).join('')}
      ${wps.map(W=>`<li class="wp">Wikipedia, «${W.w.replace(/_/g,' ')}». <a href="${wikiURL(W.w)}" target="_blank" rel="noopener">↗</a></li>`).join('')}</ol>`:''}
  </section>`;
}

/* ---------- envolver las pantallas del motor (sin reescribirlas) ---------- */
const _showLevel = showLevel;
showLevel = function(i, tab, keepRet){
  VIEW='level'; _showLevel(i, tab||'lore', keepRet);
  const L=LV[i]; const panel=document.querySelector('#body .panel, #lvmain .panel');
  if(panel && (tab||'lore')==='lore'){
    panel.dataset.wiki='1'; panel.dataset.sec=L.id;
    const go=panel.querySelector(':scope > button.go'); const rb=refsBlock(L,panel);
    if(rb){ if(go) go.insertAdjacentHTML('beforebegin', rb); else panel.insertAdjacentHTML('beforeend', rb); }
    if(L.era) { const d=document.querySelector('.lvlhead .code'); if(d) d.insertAdjacentHTML('beforeend',` <span class="lv-era">${L.era}</span>`); }
  }
};
const _showMap = showMap;
showMap = function(){
  VIEW='map'; _showMap();
  const plan=curPlan(); const P=planIdx(plan); const gs=[]; P.forEach(i=>{ if(gs[gs.length-1]!==LV[i].g) gs.push(LV[i].g); });
  const m=document.getElementById('map'); if(m){ m.classList.add('tl-line');
    m.querySelectorAll('.mp-phase').forEach((ph,k)=>{ const G=COURSE.groups[gs[k]]; if(!G) return; ph.style.setProperty('--era', G[5]||'var(--red)');
      const pn=ph.querySelector('.mp-phn'); if(pn) pn.textContent=String(G[0]).replace(/\D/g,'')||pn.textContent;
      const hd=ph.querySelector('.mp-ph'); if(hd&&G[3]) hd.insertAdjacentHTML('afterbegin',`<div class="tl-yr"><b>${G[3]}</b>${G[4]?`<span>${G[4]}</span>`:''}</div>`); }); }
  const b=document.querySelector('.mp-btns'); if(b) b.insertAdjacentHTML('beforeend',`<button class="mp-gh" onclick="showHistory()">${t('tl')}</button><button class="mp-gh" onclick="showGlossary()">${t('gloss')}</button>`);
};

/* ---------- pantalla: línea de tiempo histórica ---------- */
function showHistory(){
  VIEW='hist'; RET=null; showBack(); window.scrollTo(0,0); clearTimer(); document.body.classList.remove('printmode','calc-on');
  const H=(typeof HIST!=='undefined'?HIST:[]).slice().sort((a,b)=>a.n-b.n);
  const secBtn=id=>{ const i=LV.findIndex(x=>x.id===id); return i<0?'':`<button class="hs-go" onclick="showLevel(${i})">${LV[i].code} · ${LV[i].n} →</button>`; };
  app.innerHTML=`<div class="lvlhead"><button class="back" onclick="showMap()">${t('back')}</button><div><div class="code">HISTORIA // DE ARQUÍMEDES A STOKES</div><h2>Línea de tiempo del cálculo</h2></div></div>
   <div class="panel hs-intro"><p>El cálculo no se inventó en orden. Primero apareció la integral (áreas y volúmenes, hace más de 2000 años), luego la derivada (tangentes y velocidades, siglo XVII), y la base rigurosa —el <b>límite</b>— llegó al final, en el siglo XIX. Aquí está cada idea en el año en que nació, con el enlace a la sección donde la estudias.</p>
   <div class="hs-legend">${Object.entries(COURSE.groups).filter(([k,G])=>G[5]).map(([k,G])=>`<span style="--c:${G[5]}"><i></i>${G[1]}</span>`).join('')}</div></div>
   <ol class="hs-line">${H.map((e,k)=>{ const L=LV.find(x=>x.id===e.sec); const G=L?COURSE.groups[L.g]:null; return `<li style="--c:${(G&&G[5])||'var(--red)'};--d:${Math.min(k,20)*.04}s">
     <div class="hs-y">${e.y}</div><div class="hs-c"><div class="hs-w">${e.who}${e.w?` <a href="${wikiURL(e.w)}" target="_blank" rel="noopener" class="hs-wp">Wikipedia ↗</a>`:''}</div>
     <div class="hs-t">${e.what}</div>${e.sec?secBtn(e.sec):''}</div></li>`; }).join('')}</ol>`;
  typeset(app);
}

/* ---------- pantalla: glosario A–Z ---------- */
function showGlossary(q){
  VIEW='gloss'; RET=null; showBack(); clearTimer(); document.body.classList.remove('printmode','calc-on');
  const norm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const E=Object.entries(WIKI).sort((a,b)=>norm(a[1].t).localeCompare(norm(b[1].t)));
  if(!q || !document.getElementById('glres')){ window.scrollTo(0,0);
    app.innerHTML=`<div class="lvlhead"><button class="back" onclick="showMap()">${t('back')}</button><div><div class="code">GLOSARIO // ${E.length} TÉRMINOS</div><h2>Glosario de cálculo</h2></div></div>
    <div class="panel"><input id="glq" class="gl-q" placeholder="Buscar: derivada, gradiente, Taylor, Stokes…" oninput="showGlossary(this.value||' ')"><div id="glres"></div></div>`; if(q) document.getElementById('glq').value=q.trim(); }
  const qq=norm((q||'').trim()); const F=E.filter(([k,W])=>!qq||norm(W.t+' '+(W.al||[]).join(' ')+' '+W.d).includes(qq));
  let last=''; const out=F.map(([k,W])=>{ const L0=norm(W.t)[0].toUpperCase(); const L=LV.find(x=>x.id===W.sec);
    const hd = L0!==last ? `<div class="gl-l">${last=L0}</div>` : '';
    return hd+`<div class="gl-e"><div class="gl-t"><a class="wk" data-wk="${k}">${W.t}</a>${L?`<span>${L.code}</span>`:''}</div><div class="gl-d">${W.d}</div></div>`; }).join('');
  const r=document.getElementById('glres'); r.innerHTML=out||'<p class="small">Sin resultados.</p>'; typeset(r);
}
