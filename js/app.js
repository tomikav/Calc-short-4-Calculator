/* ============ APP: vistas, navegación, evaluación y hoja de apuntes ============
   Este archivo no tiene contenido de la materia: todo lo lee de content/<idioma>/. */
const app = document.getElementById('app');
let RET=null; const EXK={}; let CUR={i:0,tab:'lore'};
let timerId=null; function clearTimer(){ if(timerId){clearInterval(timerId);timerId=null;} }
/* ---------- planes de estudio ---------- */
let PLAN = store('calc-plan');
function curPlan(){ const P=COURSE.plans||[]; return P.find(p=>p.id===PLAN) || P.find(p=>p.sections==='all') || null; }
function planIdx(p){ p=p||curPlan(); if(!p||p.sections==='all') return LV.map((_,i)=>i); return p.sections.map(id=>LV.findIndex(l=>l.id===id)).filter(i=>i>=0); }
function unlocked(i){ if(S.free||S.done[LV[i].id]) return true; const P=planIdx(); const pos=P.indexOf(i); if(pos<=0) return true; return !!S.done[LV[P[pos-1]].id]; }
function nextInPlan(i){ const P=planIdx(); const pos=P.indexOf(i); return pos>=0 && pos<P.length-1 ? P[pos+1] : -1; }
function planStars(p){ return planIdx(p).reduce((s,i)=>s+(S.done[LV[i].id]||0),0); }
function prog(n){ return '■'.repeat(n)+'□'.repeat(3-n); }
function codeOf(id){ const l=LV.find(x=>x.id===id); return l?l.code:id; }

/* ---------- referencias a la teoría y videos ---------- */
function refChip(k){ const r=REF[k]; if(!r) return ''; const c=(typeof COL!=='undefined'&&COL[k])||'#e10600'; return `<button class="ref" style="border-left:6px solid ${c}" onclick="goRef('${k}')"><i style="background:${c}"></i>${r[2]} <b style="color:${c}">${t('toTheory')}</b></button>`; }
function refRow(keys, lbl){ if(!keys||!keys.length) return ''; return `<div class="refs"><span>${lbl||t('uses')}:</span>${keys.map(refChip).join('')}</div>`; }
function vidsHTML(id){ const v=VIDS[id]; if(!v) return ''; return `<div class="vids">${v.map(([u,ti])=>`<a href="${u}" target="_blank" rel="noopener"><span class="play"></span><span>${ti}</span><span class="yt">${t('youtube')}</span></a>`).join('')}</div>`; }
function tagAnchors(root, L){ root.querySelectorAll('h3').forEach(h=>{ const ks=Object.entries(REF).filter(([k,v])=>v[0]===L.id && h.innerHTML.includes(v[1])).map(e=>e[0]); if(ks.length) h.dataset.ref=ks.join(' '); }); }
function goRef(k){
  const r=REF[k]; const i=LV.findIndex(x=>x.id===r[0]); if(i<0) return;
  RET = { i:CUR.i, tab:CUR.tab, y:window.scrollY };
  showLevel(i,'lore',true);
  setTimeout(()=>{ const h=document.querySelector(`[data-ref~="${k}"]`); if(h){ h.scrollIntoView({block:'start'}); window.scrollBy(0,-80); h.classList.add('flash'); setTimeout(()=>h.classList.remove('flash'),2600);} },60);
  showBack();
}
function showBack(){ let b=document.getElementById('backbtn'); if(!b){ b=document.createElement('button'); b.id='backbtn'; document.body.appendChild(b); } if(!RET){ b.style.display='none'; return; } b.style.display='block'; b.textContent=t('backToEx')+' ('+LV[RET.i].code+')'; b.onclick=()=>{ const r=RET; RET=null; showBack(); showLevel(r.i,r.tab,true); setTimeout(()=>window.scrollTo(0,r.y),80); }; }

/* ---------- mapa ---------- */
function tableHTML(title, rows, cls){ if(!rows||!rows.length) return ''; return `<section class="route ${cls||''}"><div class="hd">${title}</div><table>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table></section>`; }
const MP_IC={
  lock:`<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`,
  check:`<svg viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"/></svg>`,
  play:`<svg viewBox="0 0 24 24"><path d="M7 4l12 8-12 8z"/></svg>`,
  dot:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/></svg>`,
};
function mpNext(P){ const n=P.find(i=>unlocked(i)&&!S.done[LV[i].id]); return n===undefined? P[P.length-1] : n; }
function mpGoCode(txt){ const m=String(txt).match(/SEC-[0-9A-Z]+/); if(!m) return; const i=LV.findIndex(l=>l.code===m[0]); if(i<0) return; if(unlocked(i)) showLevel(i); else toast(t('denied')); }
function mpRing(pct){ const r=52, c=2*Math.PI*r; return `<svg class="mp-ring" viewBox="0 0 120 120"><circle cx="60" cy="60" r="${r}" class="bg"/><circle cx="60" cy="60" r="${r}" class="fg" style="--c:${c};--o:${c*(1-pct/100)}" stroke-dasharray="${c}" stroke-dashoffset="${c}"/><circle cx="60" cy="60" r="${r-10}" class="in"/></svg><div class="mp-pct"><b>${pct}</b><span>%</span></div>`; }
function showMap(){
  RET=null; showBack(); hud(); window.scrollTo(0,0); clearTimer(); document.body.classList.remove('printmode','calc-on');
  const plan=curPlan(); const P=planIdx(plan); const M=t('mp');
  const total=planStars(plan), max=P.length*3, pct=Math.round(100*total/Math.max(1,max));
  const doneN=P.filter(i=>S.done[LV[i].id]).length, nx=mpNext(P), NL=LV[nx];
  const fb = t('contentFallback') && CONTENT_LANG!==LANG ? `<div class="tip" style="margin-top:16px">${t('contentFallback')}</div>` : '';
  const route = plan && plan.route===true ? COURSE.route : (plan&&plan.route)||null;
  const icon = plan && typeof PLAN_ICONS!=='undefined' ? (PLAN_ICONS[plan.icon]||'') : '';
  let html = `${fb}<section class="mp-hero">
    <div class="mp-wm">${plan?plan.code.replace(/\D/g,'')||'XX':'//'}</div><i class="mp-stripes"></i><i class="mp-bars"></i>
    <div class="mp-hl">
      <div class="mp-tag"><span class="dot"></span>${plan?plan.code:''} // ${t('plans')} // ${(plan?plan.range:COURSE.tag).toUpperCase()}</div>
      <h1 class="mp-name">${plan?plan.name:'CÁLCULO'}<b>//</b></h1>
      <p class="mp-desc">${plan?plan.desc:COURSE.intro(LV.length)}</p>
      <div class="mp-btns"><button class="mp-go" onclick="showLevel(${nx})"><span>${doneN?M.cont:M.start}</span><em>${NL.code} · ${NL.n}</em></button>
        <button class="mp-gh" onclick="showSheet()">${t('openSheet')}</button><button class="mp-gh" onclick="showIntro(true)">${M.change}</button></div>
    </div>
    <div class="mp-hr"><div class="mp-ringw">${mpRing(pct)}<div class="mp-ic">${icon}</div></div>
      <div class="mp-stats">
        <div><span>${M.secs}</span><b>${P.length}</b></div>
        <div><span>${M.done}</span><b>${doneN}<small>/${P.length}</small></b></div>
        <div><span>${M.stars}</span><b>${total}<small>/${max}</small></b></div>
      </div></div>
    <div class="mp-foot mono">${t('progressHint')}</div></section>`;
  if(plan&&plan.exam&&COURSE.exam){
    html += `<section class="mp-sec"><div class="mp-sh"><span class="n">01</span><span class="t">${COURSE.examTitle}</span><i></i></div><div class="mp-exam">${
      COURSE.exam.map((r,k)=>`<button class="mp-topic" style="--d:${k*.06}s" onclick="mpGoCode('${String(r[2]).replace(/'/g,'')}')">${typeof EXAM_FIG!=='undefined'&&EXAM_FIG[k]?`<span class="th">${figSVG(EXAM_FIG[k],{w:120,h:84,mini:true})}</span>`:''}<span class="tx"><span class="k">${r[0]}</span><span class="nm">${r[1]}</span><span class="rf">${r[2]}</span></span><i class="ar">&gt;</i></button>`).join('')}</div></section>`;
  }
  if(route){
    html += `<section class="mp-sec"><div class="mp-sh"><span class="n">${plan&&plan.exam?'02':'01'}</span><span class="t">${plan&&plan.route===true?COURSE.routeTitle:M.route}</span><i></i></div><ol class="mp-route" style="--n:${Math.min(route.length,route.length>6?Math.ceil(route.length/2):route.length)}">${
      route.map((r,k)=>{ const [lab,hr]=String(r[0]).split('·').map(x=>x.trim()); return `<li style="--d:${k*.07}s" onclick="mpGoCode('${String(r[1]).replace(/'/g,'')}')"><div class="rn">${String(k+1).padStart(2,'0')}</div><div class="rb"><div class="rl">${lab}${hr?`<span>${hr}</span>`:''}</div><div class="rc">${r[1]}</div><div class="rt">${r[2]}</div></div></li>`; }).join('')}</ol></section>`;
  }
  html += `<section class="mp-sec"><div class="mp-sh"><span class="n">${String(1+(plan&&plan.exam?1:0)+(route?1:0)).padStart(2,'0')}</span><span class="t">${M.map}</span><i></i></div><div class="mp-line" id="map"></div></section>`;
  app.innerHTML = html;
  const m=document.getElementById('map'); let cur=null, grid=null, d=0, phk=0, stepk=0;
  const groups={}; P.forEach(i=>{ (groups[LV[i].g]=groups[LV[i].g]||[]).push(i); });
  P.forEach(i=>{ const L=LV[i];
    if(L.g!==cur){ cur=L.g; const G=COURSE.groups[cur]||['','','']; const gi=groups[cur], gd=gi.filter(x=>S.done[LV[x].id]).length;
      const ph=document.createElement('div'); ph.className='mp-phase'+(gd===gi.length?' full':'');
      phk++; ph.innerHTML=`<div class="mp-ph"><div class="mp-phn">${phk}</div><div class="mp-pht"><span class="l">${G[0]}</span><span class="t">${G[1]}</span><span class="d">${G[2]}</span></div><div class="mp-php"><span>${gd}/${gi.length}</span><div class="b"><div style="width:${100*gd/gi.length}%"></div></div></div></div>`;
      m.appendChild(ph); grid=document.createElement('div'); grid.className='mp-grid'; ph.appendChild(grid); }
    const st=S.done[L.id]||0, ok=unlocked(i)||st>0, isNx=i===nx&&!st;
    const state = !ok?'locked':st?'cleared':isNx?'next':'open';
    const b=document.createElement('button'); b.className=`mp-node ${state}${L.boss?' final':''}`; b.style.setProperty('--d',(d++*.045)+'s');
    const req=(L.req&&L.req.length)?L.req.map(codeOf).join(' · '):t('none');
    const eb=(COURSE.examBadges||{})[L.id], off=(COURSE.offTopic||{})[L.id];
    const ic = state==='locked'?MP_IC.lock:state==='cleared'?MP_IC.check:state==='next'?MP_IC.play:MP_IC.dot;
    const lab = {locked:M.locked,cleared:M.cleared,next:M.next,open:M.open}[state];
    b.innerHTML=`<i class="cb tl"></i><i class="cb br"></i>
      <div class="nt"><span class="cd"><b class="stp">${String(++stepk).padStart(2,'0')}</b>${L.code}</span><span class="st">${ic}<em>${lab}</em></span></div>
      ${eb||off?`<div class="bd">${eb?`<span class="exb">${COURSE.examBadgeLabel} · ${eb}</span>`:''}${off?`<span class="exb off">${off}</span>`:''}</div>`:''}
      <div class="nm">${L.n}</div><div class="sb">${L.sub}</div>
      <div class="rq">${t('requires')}: ${req}</div>
      <div class="pg">${[0,1,2].map(k=>`<i class="${k<st?'on':''}"></i>`).join('')}<span>${st}/3</span></div>`;
    b.onclick=()=>{ if(ok) showLevel(i); else toast(t('denied')); };
    grid.appendChild(b);
  });
  requestAnimationFrame(()=>document.querySelectorAll('.mp-ring .fg').forEach(c=>c.style.strokeDashoffset=getComputedStyle(c).getPropertyValue('--o')));
}

/* ---------- pantalla de inicio ---------- */
let introTimers=[];
const PLAN_ICONS={
  target:`<svg viewBox="0 0 100 100"><g class="ic-spin"><circle cx="50" cy="50" r="44" stroke-dasharray="6 5"/></g>
    <circle cx="50" cy="50" r="30"/><circle cx="50" cy="50" r="14" class="ic-pulse"/>
    <path d="M50 2v20M50 78v20M2 50h20M78 50h20"/><path d="M28 28l6 6M72 28l-6 6M28 72l6-6M72 72l-6-6" class="ic-dim"/>
    <circle cx="50" cy="50" r="3.5" class="ic-fill"/></svg>`,
  chip:`<svg viewBox="0 0 100 100"><rect x="24" y="24" width="52" height="52" rx="3"/><rect x="34" y="34" width="32" height="32" class="ic-dim"/>
    <path d="M36 12v12M50 12v12M64 12v12M36 76v12M50 76v12M64 76v12M12 36h12M12 50h12M12 64h12M76 36h12M76 50h12M76 64h12"/>
    <path d="M44 58c4 0 3-16 6-16s2 16 6 16" class="ic-pulse"/><g class="ic-spin"><circle cx="50" cy="50" r="46" stroke-dasharray="2 9" class="ic-dim"/></g></svg>`,
  network:`<svg viewBox="0 0 100 100"><g class="ic-spin"><polygon points="50,6 88,28 88,72 50,94 12,72 12,28" stroke-dasharray="7 5" class="ic-dim"/></g>
    <path d="M50 22L74 38L68 68L32 68L26 38Z"/><path d="M50 22L50 50M74 38L50 50M68 68L50 50M32 68L50 50M26 38L50 50" class="ic-dim"/>
    <circle cx="50" cy="22" r="4.5" class="ic-fill"/><circle cx="74" cy="38" r="4.5" class="ic-fill"/><circle cx="68" cy="68" r="4.5" class="ic-fill"/><circle cx="32" cy="68" r="4.5" class="ic-fill"/><circle cx="26" cy="38" r="4.5" class="ic-fill"/>
    <circle cx="50" cy="50" r="7" class="ic-pulse"/></svg>`,
};
function introCard(p,k,cur){
  const idx=planIdx(p), n=idx.length, st=planStars(p), pct=Math.round(100*st/Math.max(1,n*3)); const act=cur&&cur.id===p.id&&PLAN;
  const names=idx.map(i=>LV[i].n), show=p.featured?names:names.slice(0,5);
  return `<button class="in-plan${p.featured?' feat':''}${act?' act':''}" style="--ac:${p.accent||'#ff2a1f'};--d:${0.15+k*0.14}s" onclick="pickPlan('${p.id}')">
    <i class="cb tl"></i><i class="cb tr"></i><i class="cb bl"></i><i class="cb br"></i><i class="ip-scan"></i>
    <div class="ip-top"><div class="ip-icon">${PLAN_ICONS[p.icon]||PLAN_ICONS.network}</div>
      <div class="ip-meta"><div class="ip-code">${p.code}${p.featured?`<span class="ip-feat">${t('featured')}</span>`:''}${act?`<span class="ip-act">${t('active')}</span>`:''}</div>
      <div class="ip-name">${p.name}</div><div class="ip-range">${p.range}</div></div></div>
    <div class="ip-desc">${p.desc}</div>
    <div class="ip-topics"><div class="ip-lbl">${t('topics')} // ${t('sectionsN')(n)}</div>${show.map(x=>`<span>${x}</span>`).join('')}${names.length>show.length?`<span class="more">${t('more')(names.length-show.length)}</span>`:''}</div>
    <div class="ip-prog"><div class="ip-lbl"><span>${t('progress')}</span><span>${st}/${n*3} · ${pct}%</span></div><div class="ip-bar"><div style="--w:${pct}%"></div></div></div>
    <div class="ip-go"><span>${act?t('continuePlan'):t('enter')}</span><em>&gt;&gt;</em></div></button>`;
}
function showIntro(skipBoot){
  introTimers.forEach(clearTimeout); introTimers=[];
  let ov=document.getElementById('intro'); if(!ov){ ov=document.createElement('div'); ov.id='intro'; document.body.appendChild(ov); }
  ov.style.display='block'; document.body.style.overflow='hidden';
  const plans=COURSE.plans||[]; const cur=curPlan();
  const glyphs=['∫','π','dx','√','Σ','∞','θ','dy','e','∂','Δ','λ'];
  const tick=t('ticker'); const tk=[...tick,...tick].map(x=>`<span>${x}</span>`).join('');
  ov.innerHTML = `<div class="in-bg"><div class="in-floor"></div><div class="in-glow"></div>
      ${glyphs.map((g,k)=>`<i class="in-gl" style="left:${(k*83)%97}%;--t:${14+(k*7)%13}s;--dl:-${(k*3.7)%14}s;--s:${18+(k*11)%40}px">${g}</i>`).join('')}
      <div class="in-scanl"></div></div>
    <div class="in-ticker"><div>${tk}</div></div>
    <i class="in-hud h1"></i><i class="in-hud h2"></i><i class="in-hud h3"></i><i class="in-hud h4"></i>
    <div class="in-wrap"><div class="in-boot" id="inboot"><div class="in-bar"><div id="inbar"></div></div></div>
    <div class="in-main" id="inmain">
      <div class="in-tag"><span class="dot"></span>${t('introSub')}</div>
      <div class="in-logo" data-t="CÁLCULO//">CÁLCULO<b>//</b></div>
      <div class="in-title"><span>${t('plansTitle')}</span><i></i></div><div class="in-hint">${t('plansHint')}</div>
      <div class="in-plans">${plans.map((p,k)=>introCard(p,k,cur)).join('')}</div></div>
    <button class="in-skip" id="inskip">${t('skip')}</button></div>`;
  const main=document.getElementById('inmain'), bootEl=document.getElementById('inboot'), skip=document.getElementById('inskip'), bar=document.getElementById('inbar');
  const reveal=()=>{ introTimers.forEach(clearTimeout); introTimers=[]; bar.style.width='100%'; bootEl.classList.add('done'); main.classList.add('on'); skip.style.display='none'; typeset(ov); };
  skip.onclick=reveal;
  if(skipBoot){ reveal(); return; }
  const B=t('boot');
  B.forEach((line,k)=>{ introTimers.push(setTimeout(()=>{ const d=document.createElement('div'); d.className='bl'; d.innerHTML=`<span>&gt;</span> ${line} <em>${k===B.length-1?'[OK]':'....... [OK]'}</em>`; bootEl.insertBefore(d,bootEl.lastElementChild); bar.style.width=(100*(k+1)/B.length)+'%'; }, 240*k+150)); });
  introTimers.push(setTimeout(reveal, 240*B.length+420));
}
function pickPlan(id){ PLAN=id; store('calc-plan',id); const ov=document.getElementById('intro'); if(ov) ov.style.display='none'; document.body.style.overflow=''; showMap(); }

/* ---------- ejemplos paso a paso ---------- */
const STAGE_COL={ENU:'#5c5c5c',DIB:'#0057ff',COR:'#8a2be2',PLA:'#e10600',CAL:'#0b0b0b',RES:'#00a37a'};
function stageTag(s){ const m=s.match(/^\{\{(\w+)\}\}\s*/); if(!m||!STAGE_COL[m[1]]) return s; return `<span class="stg" style="background:${STAGE_COL[m[1]]}">${t('stages')[m[1]]}</span>`+s.slice(m[0].length); }
function exBlock(ex, L, n){
  const d=document.createElement('div'); d.className='ex';
  const rf=(EXREF[L.id]||{})[ex.t]||[]; const real=COURSE.realPattern&&COURSE.realPattern.test(ex.t);
  d.innerHTML = `<div class="hd${real?' real':''}"><span><b>${real?t('exReal'):t('exSolved')}</b> // ${ex.t}</span><span class="cnt"></span></div><div class="q">${ex.q}</div><ol>${ex.s.map((s,j)=>`<li class="hide">${stageTag(s)}${refRow(rf[j])}</li>`).join('')}</ol>
   <div class="ctl"><button class="go nx" style="margin-top:0">${t('nextStep')}</button><button class="ghost all">${t('showAll')}</button><button class="ghost rs">${t('hide')}</button></div>`;
  const key=L.id+'#'+n; const lis=[...d.querySelectorAll('li')]; let k=EXK[key]||0;
  const upd=()=>{ EXK[key]=k; lis.forEach((l,j)=>l.classList.toggle('hide',j>=k)); d.querySelector('.cnt').textContent=`${t('step')} ${k}/${lis.length}`; d.querySelector('.nx').disabled = k>=lis.length; d.querySelector('.nx').style.opacity = k>=lis.length?.4:1; };
  d.querySelector('.nx').onclick=()=>{ if(k<lis.length){k++;upd();} };
  d.querySelector('.all').onclick=()=>{ k=lis.length; upd(); };
  d.querySelector('.rs').onclick=()=>{ k=0; upd(); };
  upd(); return d;
}

/* ---------- sección ---------- */
function showLevel(i, tab='lore', keepRet){
  const L=LV[i]; window.scrollTo(0,0); clearTimer(); CUR={i,tab}; document.body.classList.remove('printmode');
  if(!keepRet){ RET=null; showBack(); }
  app.innerHTML = `<div class="lvlhead"><button class="back" onclick="showMap()">${t('back')}</button><div><div class="code">${L.code} // ${L.sub}</div><h2>${L.n}</h2></div></div>
   <div class="dep"><div><span>${t('requires')}</span>${(L.req&&L.req.length)?L.req.map(id=>`<a onclick="showLevel(LV.findIndex(x=>x.id==='${id}'))">${codeOf(id)} · ${LV.find(x=>x.id===id).n}</a>`).join(''):`<em>${t('startPoint')}</em>`}</div><div><span>${t('usedIn')}</span><em>${L.uses||''}</em></div></div>
   <div class="tabs" id="tabs"></div><div id="body"></div>`;
  const TB=t('tabs');
  const tabs=[['lore',TB.lore],...(L.ex&&L.ex.length?[['ex',TB.ex]]:[]),...(L.lab&&typeof LABS!=='undefined'&&LABS[L.lab]?[['lab',TB.lab]]:[]),...(VIDS[L.id]?[['vid',TB.vid]]:[]),['battle',TB.battle]];
  const T=document.getElementById('tabs');
  tabs.forEach(([k,tl])=>{const b=document.createElement('button');b.className='tab'+(k===tab?' on':'');b.textContent=tl;b.onclick=()=>showLevel(i,k);T.appendChild(b);});
  let body=document.getElementById('body');
  const withCalc = (tab==='ex'||tab==='battle') && typeof mountCalc==='function';
  document.body.classList.toggle('calc-on', withCalc);
  if(withCalc){ body.className='lv-split'; body.innerHTML='<div class="lv-main" id="lvmain"></div><aside class="calc-side noprint" id="calcside"></aside>'; mountCalc(document.getElementById('calcside')); body=document.getElementById('lvmain'); }
  const idx = tabs.findIndex(x=>x[0]===tab); const next = tabs[idx+1];
  const nextBtn = next ? `<button class="go" onclick="showLevel(${i},'${next[0]}')">${t('continueTo')} ${next[1]} &gt;</button>` : '';
  const vblock = VIDS[L.id] ? `<h3>${t('videosTitle')}</h3><p class="small">${t('videosHint')}</p>${vidsHTML(L.id)}` : '';
  if(tab==='lore'){ body.innerHTML=`<div class="panel">${sheetBlock(L)}${L.lore}${vblock}${nextBtn}</div>`; tagAnchors(body,L); typeset(body); }
  else if(tab==='ex'){ const p=document.createElement('div'); p.className='panel'; p.innerHTML=`<p class="small">${t('exHint')}</p>`; L.ex.forEach((e,n)=>p.appendChild(exBlock(e,L,n))); p.insertAdjacentHTML('beforeend', nextBtn); body.appendChild(p); typeset(p); }
  else if(tab==='lab'){ const p=document.createElement('div'); p.className='panel'; body.appendChild(p); LABS[L.lab](p,L); p.insertAdjacentHTML('beforeend', nextBtn); typeset(p); }
  else if(tab==='vid'){ body.innerHTML=`<div class="panel"><h3>${t('videosTitle')}</h3><p class="small">${t('videosTab')}</p>${vidsHTML(L.id)}${nextBtn}</div>`; }
  else battle(i, body);
}

/* ---------- evaluación ---------- */
function burst(el){ const r=el.getBoundingClientRect(); for(let i=0;i<22;i++){ const d=document.createElement('i'); d.className='bit'; const a=Math.random()*2*Math.PI, v=60+Math.random()*90; d.style.left=(r.left+r.width*0.12)+'px'; d.style.top=(r.top+r.height/2)+'px'; d.style.setProperty('--dx',Math.cos(a)*v+'px'); d.style.setProperty('--dy',Math.sin(a)*v+'px'); d.style.background=['#e10600','#0057ff','#ffb000','#00a37a','#8a2be2','#0b0b0b'][i%6]; document.body.appendChild(d); setTimeout(()=>d.remove(),750); } }
const SOLC=['#0057ff','#8a2be2','#e10600','#00a37a','#ffb000','#0b0b0b'];
function solHTML(Q){
  const fig = Q.fig && typeof figSVG==='function' ? `<figure class="qfig">${figSVG(Q.fig)}<figcaption>${t('figCap')}</figcaption></figure>` : '';
  const steps = Q.sol&&Q.sol.length ? `<div class="qsol"><div class="qsol-h">${t('procedure')}</div><ol>${Q.sol.map((x,k)=>`<li style="--sc:${SOLC[k%SOLC.length]};--sd:${k*.08}s">${x}</li>`).join('')}</ol></div>` : '';
  if(!fig&&!steps) return '';
  return `<div class="qsolw${fig?' hasfig':''}">${steps}${fig}</div>`;
}
function battle(i, body){
  const L=LV[i]; const qs = shuffle(L.qs); const maxH = L.hearts||3;
  let streak=0, qi=0, hearts=maxH, xpGain=0, hintUsed=false, left=L.time||0;
  body.innerHTML = `<div class="arena"><div class="target" id="tgt"><div class="lbl">${t('target')}</div><div class="nm">${L.tgt||L.code}</div></div>
     <div class="stat"><div class="lbl">${t('firewall')}</div><div class="hp"><div id="hpb" style="width:100%"></div></div></div>
     <div class="stat" style="flex:0 0 auto"><div class="lbl">${t('integrity')}</div><div class="cells" id="hearts"></div></div>
     ${L.time?`<div class="stat" style="flex:0 0 auto"><div class="lbl">${t('time')}</div><div class="timer" id="tmr"></div></div>`:''}</div>
   <div id="q"></div>`;
  const H=()=>{ document.getElementById('hearts').innerHTML='<i>'+'■'.repeat(hearts)+'</i>'+'□'.repeat(maxH-hearts); };
  H();
  if(L.time){ const tick=()=>{ const el=document.getElementById('tmr'); if(!el){clearTimer();return;} el.textContent=`${Math.floor(left/60)}:${String(left%60).padStart(2,'0')}`; if(left<=0){ clearTimer(); finish(false,t('timeUp')); return; } left--; }; tick(); timerId=setInterval(tick,1000); }
  function render(){
    const Q=qs[qi]; hintUsed=false;
    const opts = shuffle(Q.o.map((tx,k)=>({tx,ok:k===0})));
    const box=document.getElementById('q');
    box.innerHTML = `<div class="qcard"><div class="qnum">${t('question')} ${String(qi+1).padStart(2,'0')} / ${String(qs.length).padStart(2,'0')}${Q.hard?`<span class="qhard">${t('hard')}</span>`:''}</div>
      <div class="qtext">${Q.q}</div><div class="opts" id="opts"></div>
      <div class="row"><button class="ghost" id="hb">${t('hint')}</button></div>
      <div class="hintbox" id="hint">${Q.h||''}</div>
      <div class="fb" id="fb"></div></div>`;
    const O=document.getElementById('opts');
    opts.forEach((o,k)=>{ const b=document.createElement('button'); b.className='opt'; b.dataset.k='['+'ABCD'[k]+']'; b.innerHTML=o.tx; b.onclick=()=>answer(o,b); O.appendChild(b); });
    document.getElementById('hb').onclick=()=>{ hintUsed=true; document.getElementById('hint').style.display='block'; document.getElementById('hb').disabled=true; typeset(document.getElementById('hint')); };
    function answer(o,b){
      [...O.children].forEach(x=>x.disabled=true); document.getElementById('hb').disabled=true;
      const fb=document.getElementById('fb');
      if(o.ok){ b.classList.add('ok'); const g=(Q.hard?20:10)/(hintUsed?2:1); xpGain+=g; const tg=document.getElementById('tgt'); tg.classList.remove('hit'); void tg.offsetWidth; tg.classList.add('hit');
        document.getElementById('hpb').style.width=(100*(qs.length-qi-1)/qs.length)+'%';
        streak++; const M=t('okMsgs'); burst(b); fb.className='fb ok';
        fb.innerHTML=`<div class="okhd"><span class="tick"></span><span class="okm">${M[Math.floor(Math.random()*M.length)]}</span><span class="okxp">+${g} XP</span>${streak>=2?`<span class="streak">${t('streak')} x${streak}</span>`:''}</div>${Q.e}${solHTML(Q)}${refRow(QREF[L.id],t('theory'))}`; }
      else { b.classList.add('no'); [...O.children].forEach((x,k)=>{ if(opts[k].ok) x.classList.add('ok'); }); hearts--; H();
        streak=0; fb.className='fb no'; fb.innerHTML=`<div class="st" style="color:var(--red)">${t('wrong')}</div>${Q.e}${solHTML(Q)}${refRow(QREF[L.id],t('review'))}`; }
      const nx=document.createElement('button'); nx.className='go'; nx.textContent = hearts<=0? t('seeResult') : (qi<qs.length-1?t('nextQ'):t('finalQ'));
      nx.onclick=()=>{ if(hearts<=0) return finish(false,t('noLives')); qi++; if(qi>=qs.length) finish(true); else render(); };
      fb.appendChild(nx); typeset(fb);
    }
    typeset(box);
  }
  function finish(win,msg){
    clearTimer();
    const stF = win ? Math.max(1, Math.min(3, hearts - (maxH-3))) : 0;
    const bonus = win ? stF*10 : 0; const prev = S.done[L.id]||0;
    S.xp += xpGain + bonus; if(win && stF>prev) S.done[L.id]=stF; save(); hud();
    body.innerHTML = `<div class="panel end"><div class="mono small">${L.code} // ${t('report')}</div>
      <div class="big ${win?'win':'lose'}">${win?t('win'):t('lose')}</div>
      ${win?`<p class="mono" style="font-size:26px;letter-spacing:6px;color:var(--red)">${prog(stF)}</p>`:`<p class="mono">${msg||''}</p>`}
      <p class="mono">+${xpGain+bonus} XP ${bonus?`(${t('bonus')} ${bonus})`:''}</p>
      <p class="small">${win? (stF<3?t('winHint'):t('perfect')) : t('loseHint')}</p>
      <div class="row" style="justify-content:center">
       <button class="ghost" onclick="showLevel(${i},'battle')">${t('retry')}</button>
       ${win && nextInPlan(i)>=0? `<button class="go" onclick="showLevel(${nextInPlan(i)})">${t('nextSection')} &gt;</button>`:''}
       <button class="ghost" onclick="showMap()">${t('map')}</button></div></div>`;
    if(win && L.boss) toast(t('bossDone'));
  }
  render();
}

/* ---------- hoja de apuntes ---------- */
let SHEETDONE = store('calc-sheet')||{};
function sheetToggle(k,el){ SHEETDONE[k]=el.checked; store('calc-sheet',SHEETDONE); el.closest('.hrow').classList.toggle('done',el.checked); }
const isTex = c => /\\|\^|_/.test(c);
const mth = c => isTex(c) ? `\\(\\displaystyle ${c}\\)` : c;
function hrow(it){ const [p,sec,lab,c,ej]=it; const k='h:'+lab; const L=LV.find(x=>x.id===sec);
  return `<label class="hrow${SHEETDONE[k]?' done':''}"><input type="checkbox" ${SHEETDONE[k]?'checked':''} onchange="sheetToggle('${k.replace(/'/g,"\\'")}',this)"><span class="hl">${lab}<em>${L?L.code:''}</em></span><span class="hc">${mth(c)}<span class="hej"><b>${t('eg')}</b> ${mth(ej)}</span></span></label>`; }
function sheetBlock(L){ if(typeof HOJA2==='undefined') return ''; const its=HOJA2.filter(it=>it[1]===L.id); if(!its.length) return '';
  return `<div class="hoja"><div class="hd"><span>${t('sheetBox')}</span><span class="small2">${t('sheetBoxHint')}</span></div>${its.map(it=>`<div class="pchip p${it[0]}">${it[0]?t('prio')+' '+it[0]:t('before')}</div>`+hrow(it)).join('')}</div>`; }
function showSheet(){
  RET=null; showBack(); clearTimer(); window.scrollTo(0,0); document.body.classList.remove('printmode','calc-on');
  const done=Object.values(SHEETDONE).filter(Boolean).length;
  app.innerHTML = `<div class="lvlhead"><button class="back" onclick="showMap()">${t('back')}</button><div><div class="code">${t('sheetCode')}</div><h2>${t('sheetTitle')}</h2></div></div>
   <div class="panel"><p>${t('sheetIntro')(done,HOJA2.length)}</p>
   <div class="row" style="margin:0 0 10px"><button class="go" style="margin:0" onclick="showPrint()">${t('printVersion')} &gt;</button></div>
   ${[0,1,2,3].map(p=>`<div class="hsec"><div class="hsec-hd p${p}"><span>${PNAME[p][0]}</span>${PNAME[p][1]}</div>${HOJA2.filter(it=>it[0]===p).map(hrow).join('')}</div>`).join('')}</div>`;
  typeset(app);
}
function showPrint(){
  RET=null; showBack(); clearTimer(); window.scrollTo(0,0); document.body.classList.remove('calc-on'); document.body.classList.add('printmode');
  app.innerHTML = `<div class="noprint row" style="margin:14px 0"><button class="back" onclick="showSheet()">${t('back2')}</button><button class="go" style="margin:0" onclick="tryPrint()">${t('print')}</button><span class="small">${t('printHint')}</span></div>
   <div class="psheet"><div class="ptitle">${COURSE.title.toUpperCase()} · ${t('sheetTitle').toUpperCase()}</div>
   ${[0,1,2,3].map(p=>`<div class="pblock"><div class="ph">${PNAME[p][0]} <span>${PNAME[p][1]}</span></div><table class="pt">${HOJA2.filter(it=>it[0]===p).map(([pp,sec,lab,c,ej])=>`<tr><td class="pl">${lab}</td><td class="pc"><div>${mth(c)}</div><div class="pe"><b>${t('eg')}</b> ${mth(ej)}</div></td></tr>`).join('')}</table></div>`).join('')}</div>`;
  typeset(app);
}
function tryPrint(){ try{ window.print(); }catch(e){ toast(t('printBlocked')); } }

/* ---------- modo TV ---------- */
let TV = store('calc-tv')===true;
function applyTV(){ document.body.classList.toggle('tv',TV); const b=document.getElementById('tvbtn'); if(b) b.textContent = (TV?'[x] ':'[ ] ')+t('tv'); }
function toggleTV(){ TV=!TV; store('calc-tv',TV); applyTV(); window.dispatchEvent(new Event('resize')); }

function boot(){ applyStaticI18n(); applyTV(); showMap(); showIntro(); }
