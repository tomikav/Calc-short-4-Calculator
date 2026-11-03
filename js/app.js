/* ============ APP: vistas, navegación, evaluación y hoja de apuntes ============
   Este archivo no tiene contenido de la materia: todo lo lee de content/<idioma>/. */
const app = document.getElementById('app');
let RET=null; const EXK={}; let CUR={i:0,tab:'lore'};
let ACTIVE_PLAN=store('calc-study-plan')||'complete';
let timerId=null; function clearTimer(){ if(timerId){clearInterval(timerId);timerId=null;} }
function unlocked(i){ return S.free || i===0 || !!S.done[LV[i-1].id]; }
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
function chooseStudyPlan(id){ ACTIVE_PLAN=id; store('calc-study-plan',id); showMap(); }
function studyPlanHTML(){
  const plans=COURSE.studyPlans||[]; if(!plans.length) return tableHTML(COURSE.routeTitle,COURSE.route);
  const plan=plans.find(p=>p.id===ACTIVE_PLAN)||plans[0]; ACTIVE_PLAN=plan.id;
  const choices=plans.map(p=>`<button class="plan-option${p.id===plan.id?' active':''}" type="button" aria-pressed="${p.id===plan.id}" onclick="chooseStudyPlan('${p.id}')">${t(p.labelKey)}<small>${p.duration}</small></button>`).join('');
  return `<section class="plan-picker"><div class="hd">${t('studyTitle')}</div><p class="plan-intro">${t('studyChoose')}</p><div class="plan-options">${choices}</div>${tableHTML(`${plan.title} // ${plan.duration}`,plan.route,'selected-plan')}</section>`;
}
function showMap(){
  RET=null; showBack(); hud(); window.scrollTo(0,0); clearTimer(); document.body.classList.remove('printmode','quiz-fullscreen');
  const total = LV.reduce((s,l)=>s+(S.done[l.id]||0),0);
  const fb = t('contentFallback') && CONTENT_LANG!==LANG ? `<div class="tip" style="margin-top:16px">${t('contentFallback')}</div>` : '';
  app.innerHTML = `${fb}<section class="hero"><div class="tag">${COURSE.tag}</div>
   <h1>CÁLCULO<b>//</b></h1><p>${COURSE.intro(LV.length)}</p>
   <p style="margin-top:14px"><button class="go" style="margin:0" onclick="showSheet()">${t('openSheet')} &gt;</button></p>
   <p class="mono" style="font-size:12px;color:#999">${t('progress')}: ${total}/${LV.length*3} · ${t('progressHint')}</p></section>
   ${tableHTML(COURSE.examTitle, COURSE.exam, 'exam')}${studyPlanHTML()}
   <div class="line" id="map"></div>`;
  const m = document.getElementById('map'); let cur=null, grid=null;
  LV.forEach((L,i)=>{
    if(L.g!==cur){ cur=L.g; const G=COURSE.groups[cur]||['','','']; const ph=document.createElement('div'); ph.className='phase'; ph.innerHTML=`<div class="ph-hd"><span class="ph-n">${G[0]}</span><span class="ph-t">${G[1]}</span></div><div class="ph-d">${G[2]}</div>`; m.appendChild(ph); grid=document.createElement('div'); grid.className='map'; ph.appendChild(grid); }
    const b=document.createElement('button'); const ok=unlocked(i);
    b.className='node'+(ok?'':' locked')+(S.done[L.id]?' cleared':'')+(L.boss?' final':'');
    const req = (L.req&&L.req.length)? L.req.map(codeOf).join(' · ') : t('none');
    const eb = (COURSE.examBadges||{})[L.id], off=(COURSE.offTopic||{})[L.id];
    b.innerHTML = `<div class="code">${L.code}${eb?` <span class="exb">${COURSE.examBadgeLabel} · ${eb}</span>`:''}${off?` <span class="exb off">${off}</span>`:''}</div><div class="nm">${L.n}</div><div class="sub">${L.sub}</div><div class="req">${t('requires')}: ${req}</div><div class="prog">${prog(S.done[L.id]||0)}</div>`;
    b.onclick=()=>{ if(ok) showLevel(i); else toast(t('denied')); };
    grid.appendChild(b);
  });
}

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
  const L=LV[i]; window.scrollTo(0,0); clearTimer(); CUR={i,tab}; document.body.classList.remove('printmode'); document.body.classList.toggle('quiz-fullscreen',tab==='battle');
  if(!keepRet){ RET=null; showBack(); }
  app.innerHTML = `<div class="lvlhead"><button class="back" onclick="showMap()">${t('back')}</button><div><div class="code">${L.code} // ${L.sub}</div><h2>${L.n}</h2></div></div>
   <div class="dep"><div><span>${t('requires')}</span>${(L.req&&L.req.length)?L.req.map(id=>`<a onclick="showLevel(LV.findIndex(x=>x.id==='${id}'))">${codeOf(id)} · ${LV.find(x=>x.id===id).n}</a>`).join(''):`<em>${t('startPoint')}</em>`}</div><div><span>${t('usedIn')}</span><em>${L.uses||''}</em></div></div>
   <div class="tabs" id="tabs"></div><div id="body"></div>`;
  const TB=t('tabs');
  const tabs=[['lore',TB.lore],...(L.ex&&L.ex.length?[['ex',TB.ex]]:[]),...(L.lab&&typeof LABS!=='undefined'&&LABS[L.lab]?[['lab',TB.lab]]:[]),...(VIDS[L.id]?[['vid',TB.vid]]:[]),['battle',TB.battle]];
  const T=document.getElementById('tabs');
  tabs.forEach(([k,tl])=>{const b=document.createElement('button');b.className='tab'+(k===tab?' on':'');b.textContent=tl;b.onclick=()=>showLevel(i,k);T.appendChild(b);});
  const body=document.getElementById('body');
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
function burst(el){ const r=el.getBoundingClientRect(); for(let i=0;i<14;i++){ const d=document.createElement('i'); d.className='bit'; const a=Math.random()*2*Math.PI, v=60+Math.random()*90; d.style.left=(r.left+r.width*0.12)+'px'; d.style.top=(r.top+r.height/2)+'px'; d.style.setProperty('--dx',Math.cos(a)*v+'px'); d.style.setProperty('--dy',Math.sin(a)*v+'px'); d.style.background=i%3?'#e10600':'#0b0b0b'; document.body.appendChild(d); setTimeout(()=>d.remove(),750); } }
function battle(i, body){
  const L=LV[i]; const qs = shuffle(L.qs); const maxH = L.hearts||3;
  let streak=0, qi=0, hearts=maxH, xpGain=0, hintUsed=false, left=L.time||0;
  body.innerHTML = `<div class="arena"><div class="target" id="tgt"><div class="lbl">${t('target')}</div><div class="nm">${L.tgt||L.code}</div></div>
     <div class="stat"><div class="lbl">${t('firewall')}</div><div class="hp"><div id="hpb" style="width:100%"></div></div></div>
     <div class="stat" style="flex:0 0 auto"><div class="lbl">${t('integrity')}</div><div class="cells" id="hearts"></div></div>
     ${L.time?`<div class="stat" style="flex:0 0 auto"><div class="lbl">${t('time')}</div><div class="timer" id="tmr"></div></div>`:''}</div>
   <div class="quiz-layout"><div class="quiz-left"><div class="quiz-left-head"><button type="button" onclick="showMap()">‹ ${t('map')}</button><span>${L.code} // ${L.n}</span></div><div id="q"></div></div><aside class="quiz-board">
     <div class="quiz-board-title"><b>${t('boardTitle')}</b><small>${t('boardInQuiz')}</small></div>
     ${boardToolsHTML('quiz-tools')}
     <div class="board-paper quiz-paper"><canvas id="boardcanvas" aria-label="Pizarrón para desarrollar la pregunta de evaluación" role="img"></canvas></div>
   </aside></div>`;
  mountBoard();
  const H=()=>{ document.getElementById('hearts').innerHTML='<i>'+'■'.repeat(hearts)+'</i>'+'□'.repeat(maxH-hearts); };
  H();
  if(L.time){ const tick=()=>{ const el=document.getElementById('tmr'); if(!el){clearTimer();return;} el.textContent=`${Math.floor(left/60)}:${String(left%60).padStart(2,'0')}`; if(left<=0){ clearTimer(); finish(false,t('timeUp')); return; } left--; }; tick(); timerId=setInterval(tick,1000); }
  function render(){
    const Q=qs[qi]; hintUsed=false;
    const opts = shuffle(Q.o.map((tx,k)=>({tx,ok:k===0})));
    const box=document.getElementById('q');
    box.innerHTML = `<div class="qcard"><div class="qnum">${t('question')} ${String(qi+1).padStart(2,'0')} / ${String(qs.length).padStart(2,'0')}</div>
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
      if(o.ok){ b.classList.add('ok'); const g=hintUsed?5:10; xpGain+=g; const tg=document.getElementById('tgt'); tg.classList.remove('hit'); void tg.offsetWidth; tg.classList.add('hit');
        document.getElementById('hpb').style.width=(100*(qs.length-qi-1)/qs.length)+'%';
        streak++; const M=t('okMsgs'); burst(b); fb.className='fb ok';
        fb.innerHTML=`<div class="okhd"><span class="tick"></span><span class="okm">${M[Math.floor(Math.random()*M.length)]}</span><span class="okxp">+${g} XP</span>${streak>=2?`<span class="streak">${t('streak')} x${streak}</span>`:''}</div>${Q.e}${Q.p?`<div class="solution"><b>Procedimiento completo</b><ol>${Q.p.map(step=>`<li>${step}</li>`).join('')}</ol></div>`:''}${refRow(QREF[L.id],t('theory'))}`; }
      else { b.classList.add('no'); [...O.children].forEach((x,k)=>{ if(opts[k].ok) x.classList.add('ok'); }); hearts--; H();
        streak=0; fb.className='fb no'; fb.innerHTML=`<div class="st" style="color:var(--red)">${t('wrong')}</div>${Q.e}${Q.p?`<div class="solution"><b>Procedimiento completo</b><ol>${Q.p.map(step=>`<li>${step}</li>`).join('')}</ol></div>`:''}${refRow(QREF[L.id],t('review'))}`; }
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
       ${win && i<LV.length-1? `<button class="go" onclick="showLevel(${i+1})">${t('nextSection')} &gt;</button>`:''}
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
  RET=null; showBack(); clearTimer(); window.scrollTo(0,0); document.body.classList.remove('printmode');
  const done=Object.values(SHEETDONE).filter(Boolean).length;
  app.innerHTML = `<div class="lvlhead"><button class="back" onclick="showMap()">${t('back')}</button><div><div class="code">${t('sheetCode')}</div><h2>${t('sheetTitle')}</h2></div></div>
   <div class="panel"><p>${t('sheetIntro')(done,HOJA2.length)}</p>
   <div class="row" style="margin:0 0 10px"><button class="go" style="margin:0" onclick="showPrint()">${t('printVersion')} &gt;</button></div>
   ${[0,1,2,3].map(p=>`<div class="hsec"><div class="hsec-hd p${p}"><span>${PNAME[p][0]}</span>${PNAME[p][1]}</div>${HOJA2.filter(it=>it[0]===p).map(hrow).join('')}</div>`).join('')}</div>`;
  typeset(app);
}
function showPrint(){
  RET=null; showBack(); clearTimer(); window.scrollTo(0,0); document.body.classList.add('printmode');
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

function boot(){ applyStaticI18n(); applyTV(); showMap(); }
