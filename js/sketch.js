/* ============ LIENZO DE JUSTIFICACIÓN ============
   makeSketch(host, {onInk}) crea un recuadro para dibujar dentro de una pregunta.
   Herramientas: 4 colores, borrador, ejes de guía, deshacer y limpiar.
   Devuelve { ink(), image(), lock() }. ink() = largo total del trazo en px. */
const SK_COLORS=['#0b0b0b','#e10600','#0057ff','#00a37a'];
function makeSketch(host,opt){
  opt=opt||{};
  host.innerHTML=`<div class="sk-bar">
      ${SK_COLORS.map((c,k)=>`<button class="sk-c${k?'':' on'}" data-c="${c}" style="--c:${c}" aria-label="${c}"></button>`).join('')}
      <button class="sk-b" data-t="eraser">${t('eraser')}</button>
      <button class="sk-b on" data-t="axes">${t('skAxes')}</button>
      <span class="sk-sp"></span>
      <button class="sk-b" data-t="undo">${t('undo')}</button>
      <button class="sk-b" data-t="clear">${t('clearBoard')}</button></div>
    <div class="sk-wrap"><canvas class="sk-bg"></canvas><canvas class="sk-cv"></canvas><div class="sk-empty">${opt.prompt||''}</div></div>`;
  const wrap=host.querySelector('.sk-wrap'), bg=host.querySelector('.sk-bg'), cv=host.querySelector('.sk-cv'), empty=host.querySelector('.sk-empty');
  const st={strokes:[],cur:null,color:SK_COLORS[0],eraser:false,axes:true,locked:false,dpr:1,w:0,h:0};
  const ctx=cv.getContext('2d'), bctx=bg.getContext('2d');
  function size(){ const r=wrap.getBoundingClientRect(); if(r.width<10) return; st.dpr=window.devicePixelRatio||1; st.w=r.width; st.h=r.height;
    [cv,bg].forEach(c=>{ c.width=r.width*st.dpr; c.height=r.height*st.dpr; c.style.width=r.width+'px'; c.style.height=r.height+'px'; }); drawBg(); redraw(); }
  function drawBg(){ const c=bctx, W=st.w, H=st.h; c.setTransform(st.dpr,0,0,st.dpr,0,0); c.clearRect(0,0,W,H); c.fillStyle='#fff'; c.fillRect(0,0,W,H);
    c.strokeStyle='#ececE8'; c.lineWidth=1; for(let x=0;x<W;x+=24){ c.beginPath(); c.moveTo(x+.5,0); c.lineTo(x+.5,H); c.stroke(); } for(let y=0;y<H;y+=24){ c.beginPath(); c.moveTo(0,y+.5); c.lineTo(W,y+.5); c.stroke(); }
    if(st.axes){ const ox=Math.round(W*.18/24)*24+.5, oy=Math.round(H*.72/24)*24+.5; c.strokeStyle='#9a9a95'; c.lineWidth=1.4;
      c.beginPath(); c.moveTo(8,oy); c.lineTo(W-8,oy); c.moveTo(ox,H-8); c.lineTo(ox,8); c.stroke();
      c.fillStyle='#9a9a95'; c.beginPath(); c.moveTo(W-8,oy); c.lineTo(W-16,oy-4); c.lineTo(W-16,oy+4); c.fill(); c.beginPath(); c.moveTo(ox,8); c.lineTo(ox-4,16); c.lineTo(ox+4,16); c.fill();
      c.font='12px "JetBrains Mono",monospace'; c.fillText('x',W-18,oy-8); c.fillText('y',ox+8,16); } }
  function seg(s,a,b){ ctx.strokeStyle=s.er?'#000':s.c; ctx.globalCompositeOperation=s.er?'destination-out':'source-over'; ctx.lineWidth=s.er?18:2.6; ctx.lineCap='round'; ctx.lineJoin='round';
    ctx.beginPath(); ctx.moveTo(a[0],a[1]); ctx.lineTo(b[0],b[1]); ctx.stroke(); }
  function redraw(){ ctx.setTransform(st.dpr,0,0,st.dpr,0,0); ctx.globalCompositeOperation='source-over'; ctx.clearRect(0,0,st.w,st.h);
    st.strokes.forEach(s=>{ if(s.p.length===1) seg(s,s.p[0],[s.p[0][0]+.1,s.p[0][1]]); for(let i=1;i<s.p.length;i++) seg(s,s.p[i-1],s.p[i]); }); ctx.globalCompositeOperation='source-over'; }
  function ink(){ let L=0; st.strokes.forEach(s=>{ if(s.er) return; for(let i=1;i<s.p.length;i++) L+=Math.hypot(s.p[i][0]-s.p[i-1][0],s.p[i][1]-s.p[i-1][1]); }); return L; }
  function changed(){ empty.style.display=st.strokes.length?'none':''; if(opt.onInk) opt.onInk(ink()); }
  const pos=e=>{ const r=cv.getBoundingClientRect(); return [e.clientX-r.left,e.clientY-r.top]; };
  cv.addEventListener('pointerdown',e=>{ if(st.locked) return; cv.setPointerCapture(e.pointerId); st.cur={c:st.color,er:st.eraser,p:[pos(e)]}; st.strokes.push(st.cur); redraw(); e.preventDefault(); });
  cv.addEventListener('pointermove',e=>{ if(!st.cur) return; const p=pos(e), q=st.cur.p[st.cur.p.length-1]; if(Math.hypot(p[0]-q[0],p[1]-q[1])<1.2) return; st.cur.p.push(p); seg(st.cur,q,p); ctx.globalCompositeOperation='source-over'; });
  const up=()=>{ if(st.cur){ st.cur=null; changed(); } };
  cv.addEventListener('pointerup',up); cv.addEventListener('pointercancel',up); cv.addEventListener('pointerleave',up);
  host.querySelectorAll('.sk-c').forEach(b=>b.onclick=()=>{ st.color=b.dataset.c; st.eraser=false; host.querySelectorAll('.sk-c').forEach(x=>x.classList.toggle('on',x===b)); host.querySelector('[data-t=eraser]').classList.remove('on'); });
  host.querySelector('[data-t=eraser]').onclick=e=>{ st.eraser=!st.eraser; e.currentTarget.classList.toggle('on',st.eraser); };
  host.querySelector('[data-t=axes]').onclick=e=>{ st.axes=!st.axes; e.currentTarget.classList.toggle('on',st.axes); drawBg(); };
  host.querySelector('[data-t=undo]').onclick=()=>{ if(st.locked) return; st.strokes.pop(); redraw(); changed(); };
  host.querySelector('[data-t=clear]').onclick=()=>{ if(st.locked) return; st.strokes=[]; redraw(); changed(); };
  const ro=new ResizeObserver(()=>size()); ro.observe(wrap); setTimeout(size,0);
  return {
    ink,
    image(){ const c=document.createElement('canvas'); c.width=cv.width; c.height=cv.height; const x=c.getContext('2d'); x.drawImage(bg,0,0); x.drawImage(cv,0,0); return c.toDataURL('image/png'); },
    lock(){ st.locked=true; st.cur=null; host.classList.add('sk-locked'); ro.disconnect(); },
  };
}
