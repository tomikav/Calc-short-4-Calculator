/* ============ PIZARRA VIRTUAL ============
   Panel lateral para escribir a mano: lápiz, tiza, borrador y colores.
   Revisión con IA opcional: usa una API compatible con OpenAI (por defecto OpenRouter)
   con la clave del propio usuario, guardada solo en su navegador. */
const BOARD = {
  open:false, tool:'pen', color:'#0b0b0b', size:3, dark:false,
  strokes:[], cur:null, cv:null, ctx:null, dpr:1,
  colors:['#0b0b0b','#ffffff','#e10600','#0057ff','#ffd400'],
};
const AI_DEFAULT = { base:'https://openrouter.ai/api/v1', key:'', model:'openai/gpt-4o-mini' };
function aiCfg(){ return Object.assign({}, AI_DEFAULT, store('calc-ai')||{}); }

function boardHTML(){
  const B=BOARD;
  return `<div class="bd-head"><span class="bd-title">${t('board')}</span><button class="bd-x" onclick="toggleBoard(false)" aria-label="close">×</button></div>
  <div class="bd-tools">
    <div class="bd-group">
      <button class="bd-tool" data-tool="pen" onclick="boardTool('pen')">${t('pen')}</button>
      <button class="bd-tool" data-tool="chalk" onclick="boardTool('chalk')">${t('chalk')}</button>
      <button class="bd-tool" data-tool="eraser" onclick="boardTool('eraser')">${t('eraser')}</button>
    </div>
    <div class="bd-group">${B.colors.map(c=>`<button class="bd-col" data-col="${c}" style="background:${c}" onclick="boardColor('${c}')" aria-label="${c}"></button>`).join('')}</div>
    <div class="bd-group"><label class="bd-size">${t('size')} <input type="range" min="1" max="16" value="${B.size}" oninput="BOARD.size=+this.value"></label></div>
    <div class="bd-group">
      <button class="bd-btn" onclick="boardBg()">${t('bgToggle')}</button>
      <button class="bd-btn" onclick="boardUndo()">${t('undo')}</button>
      <button class="bd-btn" onclick="boardClear()">${t('clearBoard')}</button>
      <button class="bd-btn" onclick="boardSave()">PNG</button>
    </div>
  </div>
  <div class="bd-canvas" id="bdwrap"><canvas id="bdcv"></canvas></div>
  <div class="bd-ai">
    <div class="bd-ai-hd"><span>${t('aiTitle')}</span><button class="bd-btn" onclick="aiSettings()">${t('aiConfig')}</button></div>
    <textarea id="bdctx" rows="2" placeholder="${t('aiCtxPh')}"></textarea>
    <div class="row" style="margin-top:8px"><button class="go" style="margin:0" id="bdcheck" onclick="aiCheck()">${t('aiCheck')}</button><span class="small" id="bdaimsg"></span></div>
    <div id="bdres"></div>
  </div>`;
}
function ensureBoard(){
  let p=document.getElementById('board'); if(p) return p;
  p=document.createElement('aside'); p.id='board'; p.innerHTML=boardHTML(); document.body.appendChild(p);
  const cv=document.getElementById('bdcv'); BOARD.cv=cv; BOARD.ctx=cv.getContext('2d');
  cv.addEventListener('pointerdown',bDown); cv.addEventListener('pointermove',bMove);
  ['pointerup','pointerleave','pointercancel'].forEach(e=>cv.addEventListener(e,bUp));
  new ResizeObserver(()=>boardResize()).observe(document.getElementById('bdwrap'));
  boardTool(BOARD.tool); boardColor(BOARD.color); return p;
}
function toggleBoard(force){
  const p=ensureBoard(); BOARD.open = force===undefined ? !BOARD.open : force;
  p.classList.toggle('open',BOARD.open); document.body.classList.toggle('board-open',BOARD.open);
  if(BOARD.open){ const L=LV[CUR.i]; const c=document.getElementById('bdctx'); if(c&&!c.value&&L) c.value=`${L.code} · ${L.n}`; setTimeout(boardResize,320); }
  if(typeof calcApplyMin==='function') calcApplyMin();
  const bb=document.getElementById('boardbtn'); if(bb) bb.classList.toggle('on',BOARD.open);
}
function boardResize(){
  const w=document.getElementById('bdwrap'); if(!w||!BOARD.cv) return;
  const r=w.getBoundingClientRect(); if(r.width<10||r.height<10) return;
  BOARD.dpr=window.devicePixelRatio||1; BOARD.cv.width=r.width*BOARD.dpr; BOARD.cv.height=r.height*BOARD.dpr;
  BOARD.cv.style.width=r.width+'px'; BOARD.cv.style.height=r.height+'px'; boardRedraw();
}
function boardTool(tl){ BOARD.tool=tl; document.querySelectorAll('.bd-tool').forEach(b=>b.classList.toggle('on',b.dataset.tool===tl)); }
function boardColor(c){ BOARD.color=c; if(BOARD.tool==='eraser') boardTool('pen'); document.querySelectorAll('.bd-col').forEach(b=>b.classList.toggle('on',b.dataset.col===c)); }
function boardBg(){ BOARD.dark=!BOARD.dark; document.getElementById('bdwrap').classList.toggle('dark',BOARD.dark);
  if(BOARD.dark&&BOARD.color==='#0b0b0b') boardColor('#ffffff'); else if(!BOARD.dark&&BOARD.color==='#ffffff') boardColor('#0b0b0b'); }
function boardUndo(){ BOARD.strokes.pop(); boardRedraw(); }
function boardClear(){ BOARD.strokes=[]; boardRedraw(); document.getElementById('bdres').innerHTML=''; }

/* ---- dibujo ---- */
function bPos(e){ const r=BOARD.cv.getBoundingClientRect(); return [e.clientX-r.left, e.clientY-r.top, e.pressure>0?e.pressure:0.5]; }
function bDown(e){ e.preventDefault(); BOARD.cv.setPointerCapture(e.pointerId);
  BOARD.cur={tool:BOARD.tool,color:BOARD.color,size:BOARD.size,seed:Math.random()*1e6|0,pts:[bPos(e)]}; BOARD.strokes.push(BOARD.cur); drawStroke(BOARD.cur,0); }
function bMove(e){ if(!BOARD.cur) return; e.preventDefault(); const evs=e.getCoalescedEvents?e.getCoalescedEvents():[e];
  for(const ev of evs){ BOARD.cur.pts.push(bPos(ev)); drawStroke(BOARD.cur, BOARD.cur.pts.length-2); } }
function bUp(){ BOARD.cur=null; }
function rng(seed){ let s=seed>>>0; return ()=>{ s=(s*1664525+1013904223)>>>0; return s/4294967296; }; }
function drawStroke(st, from){
  const c=BOARD.ctx, d=BOARD.dpr, P=st.pts; if(!c) return;
  c.save(); c.scale(d,d); c.lineCap='round'; c.lineJoin='round';
  if(st.tool==='eraser'){ c.globalCompositeOperation='destination-out'; c.strokeStyle='#000'; }
  else c.strokeStyle=st.color;
  const start=Math.max(0,from);
  if(P.length===1){ c.fillStyle=st.color; if(st.tool==='eraser') c.fillStyle='#000'; c.beginPath(); c.arc(P[0][0],P[0][1],st.size*(st.tool==='eraser'?3:0.6),0,2*Math.PI); c.fill(); }
  for(let i=start;i<P.length-1;i++){
    const [x0,y0,p0]=P[i], [x1,y1,p1]=P[i+1];
    if(st.tool==='chalk'){
      const R=rng(st.seed + i*7919); c.globalAlpha=0.55; c.fillStyle=st.color;
      const dist=Math.hypot(x1-x0,y1-y0), n=Math.max(2,dist/1.2), w=st.size*1.6+2;
      for(let k=0;k<n;k++){ const tt=k/n, x=x0+(x1-x0)*tt, y=y0+(y1-y0)*tt;
        for(let j=0;j<3;j++){ if(R()<0.35) continue; c.fillRect(x+(R()-.5)*w, y+(R()-.5)*w, 1.2+R()*1.6, 1.2+R()*1.6); } }
    } else {
      c.lineWidth = st.tool==='eraser' ? st.size*6+8 : st.size*(0.55+((p0+p1)/2)*0.9);
      c.beginPath(); c.moveTo(x0,y0); c.lineTo(x1,y1); c.stroke();
    }
  }
  c.restore();
}
function boardRedraw(){ const c=BOARD.ctx; if(!c) return; c.clearRect(0,0,BOARD.cv.width,BOARD.cv.height); BOARD.strokes.forEach(s=>drawStroke(s,0)); }
function boardImage(type){
  const o=document.createElement('canvas'); o.width=BOARD.cv.width; o.height=BOARD.cv.height; const x=o.getContext('2d');
  x.fillStyle=BOARD.dark?'#1f2a24':'#ffffff'; x.fillRect(0,0,o.width,o.height); x.drawImage(BOARD.cv,0,0);
  return o.toDataURL(type||'image/png', 0.85);
}
function boardSave(){ try{ const a=document.createElement('a'); a.href=boardImage(); a.download='pizarra.png'; a.click(); }catch(e){ toast(t('saveBlocked')); } }

/* ---- revisión con IA (opcional) ---- */
function aiSettings(){
  const c=aiCfg(); const res=document.getElementById('bdres');
  res.innerHTML=`<div class="bd-cfg"><p class="small">${t('aiCfgHint')}</p>
   <label>${t('aiBase')}<input id="aibase" value="${c.base}"></label>
   <label>${t('aiKey')}<input id="aikey" type="password" value="${c.key}" placeholder="sk-..."></label>
   <label>${t('aiModel')}<input id="aimodel" value="${c.model}"></label>
   <div class="row"><button class="go" style="margin:0" onclick="aiSave()">${t('save')}</button><button class="bd-btn" onclick="aiForget()">${t('aiForget')}</button></div></div>`;
}
function aiSave(){ store('calc-ai',{ base:document.getElementById('aibase').value.trim().replace(/\/$/,''), key:document.getElementById('aikey').value.trim(), model:document.getElementById('aimodel').value.trim() }); document.getElementById('bdres').innerHTML=`<p class="small">${t('aiSaved')}</p>`; }
function aiForget(){ store('calc-ai',{}); aiSettings(); }
function aiPrompt(){
  return LANG==='en'
  ? 'You are an Integral Calculus tutor. You receive a photo of a student\'s handwritten work. Do NOT solve the whole exercise. Check whether the procedure is correct so far, point out the FIRST mistake (where it is and why it is wrong) and give a hint to fix it. Use LaTeX between \\( and \\) for math. Reply ONLY with JSON: {"score":0-5,"status":"ok|errors|incomplete|unreadable","summary":"one sentence","errors":[{"where":"step or line","what":"what is wrong","fix":"how to fix it"}],"hint":"next step hint"}'
  : 'Eres un tutor de Cálculo Integral. Recibes una foto del procedimiento escrito a mano por un estudiante. NO resuelvas todo el ejercicio. Revisa si el procedimiento va bien hasta donde llega, señala el PRIMER error (en qué paso o línea está y por qué está mal) y da una pista para corregirlo. Usa LaTeX entre \\( y \\) para las fórmulas. Responde SOLO con JSON: {"score":0-5,"status":"ok|errors|incomplete|unreadable","summary":"una frase","errors":[{"where":"paso o línea","what":"qué está mal","fix":"cómo corregirlo"}],"hint":"pista para el siguiente paso"}';
}
async function aiCheck(){
  const c=aiCfg(), msg=document.getElementById('bdaimsg'), res=document.getElementById('bdres'), btn=document.getElementById('bdcheck');
  if(!c.key){ aiSettings(); msg.textContent=t('aiNeedKey'); return; }
  if(!BOARD.strokes.length){ msg.textContent=t('aiEmpty'); return; }
  btn.disabled=true; msg.textContent=t('aiWorking'); res.innerHTML='';
  const ctxTxt=document.getElementById('bdctx').value.trim();
  try{
    const r=await fetch(c.base+'/chat/completions',{ method:'POST',
      headers:{ 'Content-Type':'application/json', 'Authorization':'Bearer '+c.key, 'X-Title':'Calculo' },
      body:JSON.stringify({ model:c.model, temperature:0.2, messages:[
        { role:'system', content:aiPrompt() },
        { role:'user', content:[ { type:'text', text:(LANG==='en'?'Exercise / topic: ':'Ejercicio / tema: ')+(ctxTxt||'-') }, { type:'image_url', image_url:{ url:boardImage('image/jpeg') } } ] } ] }) });
    if(!r.ok){ const tx=await r.text(); throw new Error(r.status+' '+tx.slice(0,200)); }
    const j=await r.json(); const raw=(j.choices&&j.choices[0]&&j.choices[0].message&&j.choices[0].message.content)||'';
    const txt=Array.isArray(raw)?raw.map(x=>x.text||'').join(''):raw;
    let data=null; try{ data=JSON.parse(txt.replace(/^[\s\S]*?\{/,'{').replace(/\}[^}]*$/,'}')); }catch(e){}
    res.innerHTML = data ? aiRender(data) : `<div class="bd-res"><p>${txt.replace(/</g,'&lt;')}</p></div>`;
    msg.textContent=''; typeset(res);
  }catch(e){ msg.textContent=''; res.innerHTML=`<div class="bd-res err"><p>${t('aiError')}</p><p class="small">${String(e.message||e).replace(/</g,'&lt;')}</p></div>`; }
  btn.disabled=false;
}
function aiRender(d){
  const st={ok:['#00a37a',t('aiOk')],errors:['#e10600',t('aiErr')],incomplete:['#ff7a00',t('aiInc')],unreadable:['#5c5c5c',t('aiUnread')]}[d.status]||['#0b0b0b',d.status||''];
  const sc=Math.max(0,Math.min(5,Math.round(+d.score||0)));
  return `<div class="bd-res"><div class="bd-score"><span class="bd-st" style="background:${st[0]}">${st[1]}</span><span class="bd-pts">${'■'.repeat(sc)}${'□'.repeat(5-sc)} ${sc}/5</span></div>
   <p>${d.summary||''}</p>
   ${(d.errors||[]).map(er=>`<div class="bd-er"><b>${er.where||''}</b><div>${er.what||''}</div>${er.fix?`<div class="bd-fix">${t('aiFix')}: ${er.fix}</div>`:''}</div>`).join('')}
   ${d.hint?`<div class="tip">${d.hint}</div>`:''}</div>`;
}
