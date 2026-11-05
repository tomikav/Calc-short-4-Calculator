/* ============ ARRANQUE DEL PROGRAMA Y SELECTOR DE RUTA ============
   Reemplaza la pantalla de inicio de app.js (showIntro).
   1. Encendido tipo monitor CRT.
   2. Registro de arranque (como un sistema que carga sus módulos), con datos reales del curso.
   3. Selector: "¿Qué curso estás viendo?" → ruta ordenada de qué aprender y en qué orden.
   Las rutas salen de COURSE.paths (content/es/timeline.js). Teclado: ↑ ↓ elegir · Enter empezar · Esc saltar. */

let BOOT_T=[]; let PATH_SEL=null;
const bootClear=()=>{ BOOT_T.forEach(clearTimeout); BOOT_T=[]; };
const bootAt=(ms,fn)=>BOOT_T.push(setTimeout(fn,ms));
const REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

function bootStats(){
  const qs=LV.reduce((s,l)=>s+(l.qs||[]).length,0), ex=LV.reduce((s,l)=>s+(l.ex||[]).length,0);
  const eras=Object.keys(COURSE.groups).length, wk=typeof WIKI!=='undefined'?Object.keys(WIKI).length:0;
  const hs=typeof HIST!=='undefined'?HIST.length:0, done=Object.keys(S.done||{}).length;
  return {n:LV.length, qs, ex, eras, wk, hs, done, xp:S.xp||0, rank:rankOf(S.xp||0)[1]};
}
function bootLines(){
  const s=bootStats(); const P=(typeof PALETTES!=='undefined'&&PALETTES[THEME.id])?PALETTES[THEME.id].name:'—';
  return [
    ['sys', `CALC//OS 3.0 · núcleo de estudio · licencia MIT`, ''],
    ['chk', `verificando memoria`, `${(s.n*64).toLocaleString('es')} KB`],
    ['mod', `montando /content/${typeof CONTENT_LANG!=='undefined'?CONTENT_LANG:'es'}`, `${s.n} secciones`],
    ['mod', `cargando eras  00 → ${String(s.eras-1).padStart(2,'0')}`, `${s.eras} eras`],
    ['mod', `módulo limites.ko       lim f(x)`, 'OK'],
    ['mod', `módulo derivada.ko      f′(x)`, 'OK'],
    ['mod', `módulo integral.ko      ∫ f dx`, 'OK'],
    ['mod', `módulo series.ko        Σ aₙ`, 'OK'],
    ['mod', `módulo nabla.ko         ∇ · ∇×`, 'OK'],
    ['idx', `indexando glosario`, `${s.wk} términos`],
    ['idx', `cargando banco de evaluación`, `${s.qs} preguntas · ${s.ex} ejemplos`],
    ['idx', `línea de tiempo histórica`, `${s.hs} hitos`],
    ['usr', `paleta activa`, P],
    ['usr', `restaurando progreso`, `${s.xp} XP · ${s.done} secciones · ${s.rank.split('//').pop().trim()}`],
  ];
}

function showIntro(skipBoot){
  bootClear(); if(typeof introTimers!=='undefined'){ introTimers.forEach(clearTimeout); }
  const old=document.getElementById('intro'); if(old) old.style.display='none';
  let ov=document.getElementById('boot'); if(!ov){ ov=document.createElement('div'); ov.id='boot'; document.body.appendChild(ov); }
  ov.style.display='block'; ov.className=''; document.body.style.overflow='hidden';
  ov.innerHTML=`<div class="bt-crt"></div><div class="bt-scan"></div><div class="bt-vig"></div>
   <div class="bt-wrap">
    <section class="bt-term" id="btterm">
      <div class="bt-bar"><i></i><i></i><i></i><span>calc// — tty1 — arranque</span></div>
      <div class="bt-log" id="btlog"></div>
      <div class="bt-prog"><div class="bt-pbar"><div id="btpb"></div></div><span id="btpct">000%</span></div>
    </section>
    <section class="bt-main" id="btmain"></section>
    <button class="bt-skip" id="btskip">ESC · SALTAR ARRANQUE</button>
   </div>`;
  const skip=()=>{ bootClear(); renderSelector(true); };
  document.getElementById('btskip').onclick=skip;
  ov.onkeydown=null;
  if(skipBoot || REDUCED){ renderSelector(true); return; }
  ov.classList.add('power');
  const L=bootLines(), log=document.getElementById('btlog'), pb=document.getElementById('btpb'), pct=document.getElementById('btpct');
  let t=520;
  L.forEach((ln,k)=>{ const at=t;
    bootAt(at,()=>{
      const d=document.createElement('div'); d.className='bt-ln '+ln[0];
      const tag={sys:'SYS',chk:'CHK',mod:'MOD',idx:'IDX',usr:'USR'}[ln[0]];
      d.innerHTML=`<span class="tm">[${(at/1000).toFixed(3).padStart(7,' ')}]</span> <span class="tg">${tag}</span> <span class="tx"></span><span class="dt"></span><span class="st"></span>`;
      log.appendChild(d); log.scrollTop=log.scrollHeight;
      const tx=d.querySelector('.tx'); const full=ln[1]; let i=0;
      const typer=()=>{ i=Math.min(full.length,i+3); tx.textContent=full.slice(0,i); if(i<full.length) BOOT_T.push(setTimeout(typer,12)); else {
        if(ln[2]){ d.querySelector('.dt').textContent=' '+'.'.repeat(Math.max(3,40-full.length)); d.querySelector('.st').innerHTML=ln[2]==='OK'?'<b>[ OK ]</b>':`<em>${ln[2]}</em>`; } } };
      typer();
      const p=Math.round(100*(k+1)/L.length); pb.style.width=p+'%'; pct.textContent=String(p).padStart(3,'0')+'%';
    });
    t+= k<2 ? 170 : 115;
  });
  bootAt(t+260,()=>{ const d=document.createElement('div'); d.className='bt-ln ok'; d.innerHTML='<span class="tg">&gt;&gt;</span> SISTEMA LISTO<span class="cur">_</span>'; log.appendChild(d); log.scrollTop=log.scrollHeight; });
  bootAt(t+900,()=>renderSelector(false));
  document.addEventListener('keydown', bootKeys);
}

function bootKeys(e){
  const ov=document.getElementById('boot'); if(!ov||ov.style.display==='none'){ document.removeEventListener('keydown',bootKeys); return; }
  if(e.key==='Escape' && !ov.classList.contains('sel')){ bootClear(); renderSelector(true); return; }
  if(!ov.classList.contains('sel')) return;
  const P=COURSE.paths||[]; let i=P.findIndex(p=>p.key===PATH_SEL);
  if(e.key==='ArrowDown'||e.key==='ArrowRight'){ e.preventDefault(); selectPath(P[(i+1)%P.length].key); }
  else if(e.key==='ArrowUp'||e.key==='ArrowLeft'){ e.preventDefault(); selectPath(P[(i-1+P.length)%P.length].key); }
  else if(/^[0-9]$/.test(e.key) && P[+e.key]){ selectPath(P[+e.key].key); }
  else if(e.key==='Enter'){ e.preventDefault(); startPath(); }
}

function renderSelector(instant){
  bootClear(); const ov=document.getElementById('boot'); if(!ov) return;
  ov.classList.remove('power'); ov.classList.add('sel'); if(instant) ov.classList.add('instant');
  const P=COURSE.paths||[]; const curP=curPlan();
  PATH_SEL = store('calc-path') || (curP && (P.find(p=>p.plan===curP.id)||{}).key) || (P[0]&&P[0].key);
  const s=bootStats();
  document.getElementById('btmain').innerHTML=`
    <header class="bt-head">
      <div class="bt-logo" data-t="CÁLCULO//">CÁLCULO<b>//</b></div>
      <div class="bt-sub">Sistema de estudio · de álgebra a cálculo vectorial · ${s.n} secciones · ${s.eras} eras</div>
      <div class="bt-prompt"><span>calc@estudio:~$</span> ruta --curso <em id="btcur">?</em><i class="cur">_</i></div>
    </header>
    <div class="bt-grid">
      <nav class="bt-list" aria-label="Cursos">
        <div class="bt-q">¿Qué curso estás viendo?</div>
        ${P.map((p,k)=>`<button class="bt-opt" data-k="${p.key}" onclick="selectPath('${p.key}')" ondblclick="startPath()">
          <span class="n">[${k}]</span><span class="tt"><b>${p.name}</b><em>${p.sub}</em></span></button>`).join('')}
        <div class="bt-keys"><kbd>↑</kbd><kbd>↓</kbd> elegir · <kbd>Enter</kbd> empezar · <kbd>0</kbd>–<kbd>${P.length-1}</kbd> directo</div>
      </nav>
      <article class="bt-route" id="btroute"></article>
    </div>`;
  document.removeEventListener('keydown', bootKeys); document.addEventListener('keydown', bootKeys);
  selectPath(PATH_SEL);
}

function selectPath(key){
  const P=(COURSE.paths||[]).find(p=>p.key===key); if(!P) return; PATH_SEL=key;
  document.querySelectorAll('.bt-opt').forEach(b=>b.classList.toggle('on',b.dataset.k===key));
  const cur=document.getElementById('btcur'); if(cur) cur.textContent=P.cmd||key;
  const plan=(COURSE.plans||[]).find(x=>x.id===P.plan); if(!plan) return;
  const idx=planIdx(plan); const hrs=Math.round(idx.reduce((h,i)=>h+(LV[i].boss?0.5:1.2),0));
  const done=idx.filter(i=>S.done[LV[i].id]).length;
  const groups=[]; idx.forEach(i=>{ const L=LV[i]; let g=groups[groups.length-1]; if(!g||g.g!==L.g){ g={g:L.g,items:[]}; groups.push(g); } g.items.push(i); });
  const pre=(P.pre||[]).map(id=>LV.find(l=>l.id===id)).filter(Boolean);
  let step=0;
  const r=document.getElementById('btroute');
  r.innerHTML=`<div class="br-h"><span>RUTA // ${plan.code}</span><b>${P.title||plan.name}</b></div>
    <p class="br-d">${P.desc}</p>
    <div class="br-meta"><span><em>secciones</em>${idx.length}</span><span><em>eras</em>${groups.length}</span><span><em>tiempo</em>≈ ${hrs} h</span><span><em>avance</em>${done}/${idx.length}</span></div>
    ${pre.length?`<div class="br-pre"><span>ANTES DEBERÍAS DOMINAR</span>${pre.map(L=>`<a onclick="startPath('${L.id}')">${L.code} · ${L.n}</a>`).join('')}</div>`:''}
    ${P.ladder?`<div class="br-lad"><div class="br-lh">CÓMO SE CONSTRUYEN LAS MATEMÁTICAS · CADA NIVEL USA EL ANTERIOR</div><ol>${P.ladder.map((l,k)=>`<li style="--d:${k*.05}s"><span class="lv">${String(k).padStart(2,'0')}</span><span class="lt"><b>${l[0]}</b> ${l[1]}</span><span class="lf">\\(${l[2]}\\)</span></li>`).join('')}</ol></div>`:''}
    <div class="br-tree">${groups.map(g=>{ const G=COURSE.groups[g.g]||['','','','','','var(--red2)'];
      return `<div class="br-era" style="--c:${G[5]}"><div class="br-eh"><span>${G[0]}</span><b>${G[1]}</b><em>${G[3]||''}</em></div>
        <ul>${g.items.map((i,k)=>{ const L=LV[i]; step++; const st=S.done[L.id]?'ok':'';
          return `<li class="${st}${L.boss?' boss':''}" onclick="startPath('${L.id}')"><span class="br" aria-hidden="true">${k===g.items.length-1?'└─':'├─'}</span><span class="sn">${String(step).padStart(2,'0')}</span><span class="cd">${L.code}</span><span class="nm">${L.n}</span><span class="ck">${st?'✓':''}</span></li>`; }).join('')}</ul></div>`; }).join('')}</div>
    <div class="br-go"><button class="bt-start" onclick="startPath()"><span>ENTER</span> EMPEZAR ESTA RUTA <em>&gt;&gt;</em></button>
      <button class="bt-alt" onclick="startPath(null,true)">VER EL MAPA</button></div>`;
  r.scrollTop=0; typeset(r);
}

function startPath(secId, mapOnly){
  const P=(COURSE.paths||[]).find(p=>p.key===PATH_SEL); if(!P) return;
  store('calc-path',P.key); PLAN=P.plan; store('calc-plan',P.plan);
  const ov=document.getElementById('boot'); if(ov) ov.style.display='none'; document.body.style.overflow='';
  document.removeEventListener('keydown',bootKeys); bootClear();
  showMap();
  if(mapOnly) return;
  let i = secId ? LV.findIndex(l=>l.id===secId) : mpNext(planIdx(curPlan()));
  if(i>=0 && (unlocked(i) || secId)){ if(secId && !unlocked(i)){ toast(t('denied')); return; } showLevel(i); }
}
