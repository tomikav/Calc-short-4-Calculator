/* ============ CALCULADORA CIENTÍFICA ============
   Parser propio (sin eval): + − × ÷ ^ ! , multiplicación implícita (2π, 3x, 2sin(x)),
   funciones trig / inversas / hiperbólicas, ln, log, raíces, |x|, constantes π, e, ANS.
   Modos: CALC (expresión), ∫ (integral definida numérica, Simpson) y f′ (derivada en un punto).
   Además muestra la forma exacta probable del resultado (fracción, kπ, √). */
const CALC = { deg: store('calc-deg')||false, ans:0, hist: store('calc-hist')||[], mode:'calc' };

const C_FN = {
  sin:x=>Math.sin(cAng(x)), cos:x=>Math.cos(cAng(x)), tan:x=>Math.tan(cAng(x)),
  sec:x=>1/Math.cos(cAng(x)), csc:x=>1/Math.sin(cAng(x)), cot:x=>1/Math.tan(cAng(x)),
  asin:x=>cAngOut(Math.asin(x)), acos:x=>cAngOut(Math.acos(x)), atan:x=>cAngOut(Math.atan(x)),
  sinh:Math.sinh, cosh:Math.cosh, tanh:Math.tanh,
  ln:Math.log, log:Math.log10, exp:Math.exp,
  sqrt:Math.sqrt, cbrt:Math.cbrt, abs:Math.abs, floor:Math.floor, ceil:Math.ceil,
};
function cAng(x){ return CALC.deg ? x*Math.PI/180 : x; }
function cAngOut(x){ return CALC.deg ? x*180/Math.PI : x; }
function cFact(n){ if(n<0||!Number.isInteger(n)) return Math.exp(cLnGamma(n+1)); let r=1; for(let i=2;i<=n;i++) r*=i; return r; }
function cLnGamma(z){ const g=[676.5203681218851,-1259.1392167224028,771.32342877765313,-176.61502916214059,12.507343278686905,-0.13857109526572012,9.9843695780195716e-6,1.5056327351493116e-7]; z-=1; let x=0.99999999999980993; for(let i=0;i<8;i++) x+=g[i]/(z+i+1); const t=z+7.5; return 0.5*Math.log(2*Math.PI)+(z+0.5)*Math.log(t)-t+Math.log(x); }

function cTok(src){
  const s=src.replace(/\s+/g,'').replace(/×|·/g,'*').replace(/÷/g,'/').replace(/−/g,'-').replace(/π/g,'pi').replace(/√/g,'sqrt').replace(/∛/g,'cbrt').replace(/\*\*/g,'^').replace(/,/g,'.');
  const T=[]; let i=0;
  while(i<s.length){
    const c=s[i];
    if(/[0-9.]/.test(c)){ let j=i; while(j<s.length&&/[0-9.]/.test(s[j])) j++; if(s[j]==='E'&&/[-+0-9]/.test(s[j+1]||'')){ j++; if(/[-+]/.test(s[j])) j++; while(/[0-9]/.test(s[j]||'')) j++; } T.push({t:'n',v:parseFloat(s.slice(i,j))}); i=j; }
    else if(/[a-zA-Z]/.test(c)){ let j=i; while(j<s.length&&/[a-zA-Z]/.test(s[j])) j++; let w=s.slice(i,j).toLowerCase();
      // separa palabras pegadas tipo "2xsin" -> x, sin  /  "pix" -> pi, x
      while(w){ const m=w.match(/^(asin|acos|atan|sinh|cosh|tanh|sin|cos|tan|sec|csc|cot|ln|log|exp|sqrt|cbrt|abs|floor|ceil|pi|ans|e|x)/); if(!m) throw new Error('?'+w); T.push({t:'id',v:m[1]}); w=w.slice(m[1].length); }
      i=j; }
    else if('+-*/^()!|'.includes(c)){ T.push({t:c}); i++; }
    else throw new Error('?'+c);
  }
  return T;
}
function cParse(src){
  const T=cTok(src); let p=0; let absDepth=0;
  const peek=()=>T[p], eat=t=>{ if(T[p]&&T[p].t===t){p++;return true;} return false; };
  const startsPrimary=k=>k&&(k.t==='n'||k.t==='id'||k.t==='('||(k.t==='|'&&absDepth===0));
  function expr(){ let a=term(); for(;;){ if(eat('+')){const b=term(),A=a;a=x=>A(x)+b(x);} else if(eat('-')){const b=term(),A=a;a=x=>A(x)-b(x);} else return a; } }
  function term(){ let a=unary(); for(;;){ if(eat('*')){const b=unary(),A=a;a=x=>A(x)*b(x);} else if(eat('/')){const b=unary(),A=a;a=x=>A(x)/b(x);} else if(startsPrimary(peek())){const b=power(),A=a;a=x=>A(x)*b(x);} else return a; } }
  function unary(){ if(eat('-')){const a=unary();return x=>-a(x);} if(eat('+')) return unary(); return power(); }
  function power(){ const a=post(); if(eat('^')){ const b=unary(); return x=>Math.pow(a(x),b(x)); } return a; }
  function post(){ let a=primary(); while(eat('!')){const A=a;a=x=>cFact(A(x));} return a; }
  function primary(){
    const k=T[p++]; if(!k) throw new Error('fin');
    if(k.t==='n') return ()=>k.v;
    if(k.t==='('){ const a=expr(); eat(')'); return a; }
    if(k.t==='|'){ absDepth++; const a=expr(); absDepth--; if(!eat('|')) throw new Error('|'); return x=>Math.abs(a(x)); }
    if(k.t==='id'){
      if(k.v==='pi') return ()=>Math.PI; if(k.v==='e') return ()=>Math.E; if(k.v==='ans') return ()=>CALC.ans; if(k.v==='x') return x=>x;
      const f=C_FN[k.v];
      // potencia de función: sin^2(x)
      let pw=null; if(peek()&&peek().t==='^'&&T[p+1]&&T[p+1].t==='n'&&T[p+2]&&T[p+2].t==='('){ p++; pw=T[p++].v; }
      const arg = eat('(') ? (()=>{const a=expr(); eat(')'); return a;})() : power();
      return pw==null ? x=>f(arg(x)) : x=>Math.pow(f(arg(x)),pw);
    }
    throw new Error(k.t);
  }
  const f=expr(); if(p<T.length) throw new Error('sobra '+T[p].t); return f;
}
function cEval(src,x){ const v=cParse(src)(x); return v; }

/* forma exacta probable */
function cRat(v,maxD=200){ for(let d=1;d<=maxD;d++){ const n=Math.round(v*d); if(Math.abs(n/d-v)<1e-9*Math.max(1,Math.abs(v))) return [n,d]; } return null; }
function cRatTex([n,d]){ return d===1? String(n) : (n<0?'-':'')+R`\frac{${Math.abs(n)}}{${d}}`; }
function cExact(v){
  if(!isFinite(v)) return '';
  const out=[];
  const r=cRat(v); if(r&&r[1]>1) out.push(cRatTex(r));
  if(!r){
    const rp=cRat(v/Math.PI,60); if(rp&&rp[0]!==0) out.push((rp[1]===1? (rp[0]===1?'':rp[0]===-1?'-':rp[0]) : (rp[0]<0?'-':'')+R`\frac{${Math.abs(rp[0])}}{${rp[1]}}`)+R`\pi`);
    const r2=cRat(v*v,100); if(r2&&!r&&v!==0){ const [n,d]=r2; // v = ±√(n/d) → simplifica a √
      const sgn=v<0?'-':''; const s=cSurd(n*d); const den=d; // √(n/d)=√(nd)/d
      const [k,m]=s; const g=cGcd(k,den); const kk=k/g, dd=den/g;
      if(m!==1) out.push(sgn+(dd===1? `${kk===1?'':kk}\\sqrt{${m}}` : R`\frac{${kk===1?'':kk}\sqrt{${m}}}{${dd}}`)); }
    for(const [lab,c] of [['\\sqrt2',Math.SQRT2],['\\sqrt3',Math.sqrt(3)],['e',Math.E],['e^2',Math.E*Math.E]]){ const q=cRat(v/c,60); if(q&&q[0]!==0&&!out.length) out.push((q[1]===1? (q[0]===1?'':q[0]===-1?'-':q[0]) : (q[0]<0?'-':'')+R`\frac{${Math.abs(q[0])}}{${q[1]}}`)+lab); }
    // a + b√2 / a + b·ln  (√2 y π mixtos son comunes: 2√2-1, π/2 - 1)
    if(!out.length){ for(const [lab,c] of [['\\sqrt2',Math.SQRT2],['\\sqrt3',Math.sqrt(3)],['\\pi',Math.PI],['e^2',Math.E*Math.E],['e',Math.E],['\\ln2',Math.LN2],['\\ln3',Math.log(3)]]){
      for(let b=-12;b<=12&&!out.length;b++){ if(!b) continue; for(const dv of [1,2,3,4,6,8,12,15,24,30]){ const a=v*dv-b*c; const ar=Math.round(a); if(Math.abs(a-ar)<1e-8){ const bs=(b===1?'':b===-1?'-':b)+lab; const num = ar? `${bs}${ar>0?'+':''}${ar}` : bs; out.push(dv===1?num:R`\frac{${num}}{${dv}}`); break; } } } } }
    const lr=cRat(Math.exp(v),40); if(lr&&!out.length&&(lr[0]!==1||lr[1]!==1)) out.push(R`\ln${lr[1]===1?lr[0]:R`\frac{${lr[0]}}{${lr[1]}}`}`);
  }
  return out.length? out[0] : '';
}
function cGcd(a,b){ a=Math.abs(a);b=Math.abs(b); while(b){[a,b]=[b,a%b];} return a||1; }
function cSurd(n){ let k=1,m=n; for(let f=2;f*f<=m;f++){ while(m%(f*f)===0){ m/=f*f; k*=f; } } return [k,m]; }
function cFmt(v){ if(!isFinite(v)) return isNaN(v)?'—':(v>0?'∞':'−∞'); const a=Math.abs(v); if(a!==0&&(a>=1e10||a<1e-6)) return v.toExponential(8).replace(/\.?0+e/,'e'); return String(+v.toPrecision(12)); }

const C_KEYS = [
  ['sin','sin('],['cos','cos('],['tan','tan('],['sec','sec('],['csc','csc('],['cot','cot('],
  ['sin⁻¹','asin('],['cos⁻¹','acos('],['tan⁻¹','atan('],['ln','ln('],['log','log('],['eˣ','e^('],
  ['x²','^2'],['x³','^3'],['xʸ','^'],['√','√('],['∛','∛('],['1/x','^(-1)'],
  ['π','π'],['e','e'],['|x|','abs('],['n!','!'],['(','('],[')',')'],
  ['7','7'],['8','8'],['9','9'],['DEL',':del'],['AC',':ac'],['÷','÷'],
  ['4','4'],['5','5'],['6','6'],['×','×'],['−','-'],['+','+'],
  ['1','1'],['2','2'],['3','3'],['0','0'],['.','.'],['x','x'],
  ['ANS','ans'],['EXP','E'],['=',':eq'],
];

function calcHTML(){
  const L=t('calc');
  return `<div class="cx">
   <div class="cx-head" onclick="if(event.target===this||event.target.classList.contains('cx-title'))calcMin()"><span class="cx-title">${L.title}</span>
     <button class="cx-deg" id="cxdeg" onclick="event.stopPropagation();calcDeg()">${CALC.deg?'DEG':'RAD'}</button>
     <button class="cx-min" onclick="event.stopPropagation();calcMin()" aria-label="min">–</button><button class="cx-min cx-close" onclick="event.stopPropagation();toggleCalc()" aria-label="close">×</button></div>
   <div class="cx-body">
   <div class="cx-modes">${[['calc',L.mCalc],['int',L.mInt],['der',L.mDer]].map(([k,n])=>`<button class="cx-m${CALC.mode===k?' on':''}" onclick="calcMode('${k}')">${n}</button>`).join('')}</div>
   <div class="cx-fields" id="cxf"></div>
   <div class="cx-out"><div class="cx-res mono" id="cxres">0</div><div class="cx-ex" id="cxex"></div><div class="cx-err" id="cxerr"></div></div>
   <div class="cx-keys">${C_KEYS.map(([lab,v])=>`<button class="cx-k${/^[0-9.]$/.test(lab)?' num':''}${lab==='='?' eq':''}${/DEL|AC/.test(lab)?' del':''}" data-v="${v.replace(/"/g,'&quot;')}">${lab}</button>`).join('')}</div>
   <div class="cx-histh"><span>${L.hist}</span><button onclick="calcClearHist()">${L.clear}</button></div>
   <ol class="cx-hist mono" id="cxhist"></ol>
   <p class="cx-tip">${L.tip}</p>
   </div></div>`;
}
let CX_FOCUS=null;
function mountCalc(el){
  if(!el) return; el.innerHTML=calcHTML(); calcApplyMin();
  calcFields(); calcHistRender();
  el.querySelectorAll('.cx-k').forEach(b=>b.onmousedown=e=>e.preventDefault());
  el.querySelectorAll('.cx-k').forEach(b=>b.onclick=()=>calcKey(b.dataset.v));
}
function calcFields(){
  const L=t('calc'), f=document.getElementById('cxf'); if(!f) return;
  const keep = CALC.f||{};
  if(CALC.mode==='calc') f.innerHTML=`<input class="cx-in mono" id="cx_e" placeholder="${L.ph}" value="${keep.e||''}" spellcheck="false" autocomplete="off">`;
  else if(CALC.mode==='int') f.innerHTML=`<div class="cx-introw"><span class="cx-int">∫</span><div class="cx-lims"><input class="cx-in sm mono" id="cx_b" placeholder="b" value="${keep.b||''}"><input class="cx-in sm mono" id="cx_a" placeholder="a" value="${keep.a||''}"></div><input class="cx-in mono" id="cx_f" placeholder="f(x)  ej: pi*(4-x^2)^2" value="${keep.f||''}" spellcheck="false"><span class="cx-dx">dx</span></div>`;
  else f.innerHTML=`<div class="cx-introw"><span class="cx-int sm">d/dx</span><input class="cx-in mono" id="cx_f" placeholder="f(x)" value="${keep.f||''}" spellcheck="false"></div><div class="cx-introw"><span class="cx-dx">x =</span><input class="cx-in sm mono" id="cx_a" placeholder="a" value="${keep.a||''}"></div>`;
  f.querySelectorAll('input').forEach(i=>{ i.onfocus=()=>CX_FOCUS=i; i.oninput=()=>{ calcSaveF(); calcLive(); }; i.onkeydown=e=>{ if(e.key==='Enter'){ e.preventDefault(); calcRun(); } }; });
  CX_FOCUS = f.querySelector(CALC.mode==='calc'?'#cx_e':'#cx_f');
  calcLive();
}
function calcSaveF(){ const g=id=>{const e=document.getElementById(id); return e?e.value:undefined;}; CALC.f=Object.assign(CALC.f||{}, Object.fromEntries([['e',g('cx_e')],['f',g('cx_f')],['a',g('cx_a')],['b',g('cx_b')]].filter(x=>x[1]!==undefined))); }
function calcMode(m){ calcSaveF(); CALC.mode=m; const side=document.getElementById('calcside'); if(side) mountCalc(side); }
function calcDeg(){ CALC.deg=!CALC.deg; store('calc-deg',CALC.deg); const b=document.getElementById('cxdeg'); if(b) b.textContent=CALC.deg?'DEG':'RAD'; calcLive(); }
function calcFloating(){ const s=document.getElementById('calcside'); if(s&&s.classList.contains('calc-float')) return false; return window.innerWidth<1180 || (document.body.classList.contains('board-open') && window.innerWidth<2000); }
function calcApplyMin(){ const s=document.getElementById('calcside'); if(!s) return; const fl=calcFloating();
  s.classList.toggle('min', fl ? store('calc-fopen')!==true : !!store('calc-min')); }
function calcMin(){ const s=document.getElementById('calcside'); if(!s) return; s.classList.toggle('min'); const m=s.classList.contains('min');
  if(calcFloating()) store('calc-fopen', !m); else store('calc-min', m); }
window.addEventListener('resize', ()=>calcApplyMin());
function calcKey(v){
  const inp=CX_FOCUS||document.querySelector('#cxf input'); if(!inp) return;
  if(v===':eq') return calcRun();
  if(v===':ac'){ document.querySelectorAll('#cxf input').forEach(i=>i.value=''); calcSaveF(); calcLive(); inp.focus(); return; }
  const a=inp.selectionStart??inp.value.length, b=inp.selectionEnd??a;
  if(v===':del'){ const s=a===b?Math.max(0,a-1):a; inp.value=inp.value.slice(0,s)+inp.value.slice(b); inp.setSelectionRange(s,s); }
  else { inp.value=inp.value.slice(0,a)+v+inp.value.slice(b); const c=a+v.length; inp.setSelectionRange(c,c); }
  inp.focus(); calcSaveF(); calcLive();
}
function calcCompute(){
  const L=t('calc'), g=id=>(document.getElementById(id)||{}).value||'';
  if(CALC.mode==='calc'){ const e=g('cx_e'); if(!e.trim()) return null; return {expr:e, v:cEval(e)}; }
  if(CALC.mode==='int'){ const f=g('cx_f'), a=g('cx_a'), b=g('cx_b'); if(!f.trim()||!a.trim()||!b.trim()) return null;
    const F=cParse(f), A=cEval(a), B=cEval(b);
    const fx=x=>{ const y=F(x); return isFinite(y)?y:F(x+1e-9); };
    const v=simpson(fx,A,B,2000); return {expr:`∫[${a}, ${b}] ${f} dx`, v}; }
  const f=g('cx_f'), a=g('cx_a'); if(!f.trim()||!a.trim()) return null;
  const F=cParse(f), A=cEval(a), h=1e-5; const v=(F(A-2*h)-8*F(A-h)+8*F(A+h)-F(A+2*h))/(12*h);
  return {expr:`f′(${a}), f = ${f}`, v};
}
function calcLive(){
  const res=document.getElementById('cxres'), ex=document.getElementById('cxex'), er=document.getElementById('cxerr'); if(!res) return;
  try{ const r=calcCompute(); er.textContent=''; if(!r){ res.textContent='0'; ex.innerHTML=''; return; }
    res.textContent='= '+cFmt(r.v); const x=cExact(r.v); ex.innerHTML = x? `<span>${t('calc').exact}</span> \\(${x}\\)` : ''; if(x) typeset(ex);
  }catch(e){ er.textContent=t('calc').err; }
}
function calcRun(){
  try{ const r=calcCompute(); if(!r) return; CALC.ans=r.v; CALC.hist.unshift([r.expr,cFmt(r.v),cExact(r.v)]); CALC.hist=CALC.hist.slice(0,12); store('calc-hist',CALC.hist); calcHistRender(); calcLive(); }
  catch(e){ const er=document.getElementById('cxerr'); if(er) er.textContent=t('calc').err; }
}
function calcHistRender(){ const h=document.getElementById('cxhist'); if(!h) return;
  h.innerHTML=CALC.hist.map(([e,v,x],k)=>`<li onclick="calcUse(${k})" title="ANS"><span class="cx-he">${e.replace(/</g,'&lt;')}</span><span class="cx-hv">${v}${x?` <span class="cx-hx">\\(=${x}\\)</span>`:''}</span></li>`).join('');
  typeset(h); }
function calcUse(k){ const it=CALC.hist[k]; if(!it) return; const n=parseFloat(it[1]); if(isFinite(n)) CALC.ans=n; calcKey('ans'); }
function calcClearHist(){ CALC.hist=[]; store('calc-hist',[]); calcHistRender(); }

/* ---- calculadora como opción del header ----
   En ejemplos/evaluación: muestra u oculta la del lado (se recuerda).
   En cualquier otra pantalla: abre/cierra una calculadora flotante. */
let CALC_SHOW = store('calc-show')!==false;
function calcHeaderState(){
  document.body.classList.toggle('calc-hide', !CALC_SHOW);
  const side=document.querySelector('.lv-split #calcside'), fl=document.getElementById('calcfloat');
  const b=document.getElementById('calcbtn'); if(b) b.classList.toggle('on', side? CALC_SHOW : !!fl);
}
function toggleCalc(){
  const side=document.querySelector('.lv-split #calcside');
  if(side){ CALC_SHOW=!CALC_SHOW; store('calc-show',CALC_SHOW); if(CALC_SHOW){ side.classList.remove('min'); } calcHeaderState(); return; }
  let fl=document.getElementById('calcfloat');
  if(fl){ fl.remove(); calcHeaderState(); return; }
  fl=document.createElement('aside'); fl.id='calcfloat'; fl.className='calc-float-wrap noprint';
  fl.innerHTML='<div class="calc-side calc-float" id="calcside"></div>'; document.body.appendChild(fl);
  mountCalc(document.getElementById('calcside')); document.getElementById('calcside').classList.remove('min');
  calcHeaderState();
}
