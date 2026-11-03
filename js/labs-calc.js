/* Simuladores interactivos: gráficas, áreas, volúmenes, longitud */
/* ============ HELPERS: plotting ============ */
function makeCanvas(parent, w=640, h=420){
  const c = document.createElement('canvas'); const dpr = window.devicePixelRatio||1;
  c.width = w*dpr; c.height = h*dpr; c.style.aspectRatio = w+'/'+h; parent.appendChild(c);
  const ctx = c.getContext('2d'); ctx.scale(dpr,dpr); c.W=w; c.H=h; return {c, ctx};
}
function View(ctx, W, H, xr, yr, pad=30){
  const v = {ctx,W,H,xr,yr};
  v.X = x => pad + (x-xr[0])/(xr[1]-xr[0])*(W-2*pad);
  v.Y = y => H-pad - (y-yr[0])/(yr[1]-yr[0])*(H-2*pad);
  v.clear = () => { ctx.clearRect(0,0,W,H); };
  v.axes = () => {
    ctx.save(); ctx.strokeStyle='#e9e9e5'; ctx.lineWidth=1;
    const sx = niceStep(xr[1]-xr[0]), sy = niceStep(yr[1]-yr[0]);
    ctx.fillStyle='#9a9a9a'; ctx.font='11px JetBrains Mono';
    for(let x=Math.ceil(xr[0]/sx)*sx; x<=xr[1]; x+=sx){ ctx.beginPath(); ctx.moveTo(v.X(x),v.Y(yr[0])); ctx.lineTo(v.X(x),v.Y(yr[1])); ctx.stroke(); if(Math.abs(x)>1e-9) ctx.fillText(+x.toFixed(2), v.X(x)+2, v.Y(0)+12 > H-4 ? H-4 : Math.max(12, v.Y(0)+12)); }
    for(let y=Math.ceil(yr[0]/sy)*sy; y<=yr[1]; y+=sy){ ctx.beginPath(); ctx.moveTo(v.X(xr[0]),v.Y(y)); ctx.lineTo(v.X(xr[1]),v.Y(y)); ctx.stroke(); if(Math.abs(y)>1e-9) ctx.fillText(+y.toFixed(2), Math.min(W-30, Math.max(2, v.X(0)+4)), v.Y(y)-2); }
    ctx.strokeStyle='#0b0b0b'; ctx.lineWidth=1.5;
    if(yr[0]<=0&&yr[1]>=0){ ctx.beginPath(); ctx.moveTo(v.X(xr[0]),v.Y(0)); ctx.lineTo(v.X(xr[1]),v.Y(0)); ctx.stroke(); }
    if(xr[0]<=0&&xr[1]>=0){ ctx.beginPath(); ctx.moveTo(v.X(0),v.Y(yr[0])); ctx.lineTo(v.X(0),v.Y(yr[1])); ctx.stroke(); }
    ctx.restore();
  };
  v.fn = (f,a,b,col,lw=2.5) => { ctx.save(); ctx.strokeStyle=col; ctx.lineWidth=lw; ctx.beginPath(); let first=true; const n=300; for(let i=0;i<=n;i++){ const x=a+(b-a)*i/n, y=f(x); if(!isFinite(y)){first=true;continue;} first? ctx.moveTo(v.X(x),v.Y(y)) : ctx.lineTo(v.X(x),v.Y(y)); first=false; } ctx.stroke(); ctx.restore(); };
  v.param = (fx,fy,t0,t1,col,lw=2.5) => { ctx.save(); ctx.strokeStyle=col; ctx.lineWidth=lw; ctx.beginPath(); const n=300; for(let i=0;i<=n;i++){ const t=t0+(t1-t0)*i/n; i? ctx.lineTo(v.X(fx(t)),v.Y(fy(t))) : ctx.moveTo(v.X(fx(t)),v.Y(fy(t))); } ctx.stroke(); ctx.restore(); };
  v.label = (t,x,y,col) => { ctx.save(); ctx.fillStyle=col; ctx.font='bold 13px JetBrains Mono'; ctx.fillText(t, v.X(x), v.Y(y)); ctx.restore(); };
  return v;
}
function niceStep(range){ const r = range/8; const p = Math.pow(10, Math.floor(Math.log10(r))); const m = r/p; return (m<1.5?1:m<3.5?2:m<7.5?5:10)*p; }
function simpson(f,a,b,n=400){ if(n%2) n++; const h=(b-a)/n; let s=f(a)+f(b); for(let i=1;i<n;i++) s += f(a+i*h)*(i%2?4:2); return s*h/3; }
function toFrac(v){ if(Math.abs(v-Math.round(v))<1e-9) return String(Math.round(v)); for(let d=2; d<=200; d++){ const n=Math.round(v*d); if(Math.abs(n/d-v)<1e-9){ return (n<0?'-':'')+R`\frac{${Math.abs(n)}}{${d}}`; } } return v.toFixed(3); }
function fmt(k){ return toFrac(k); }
function paren(e){ return /[+\-]/.test(e.replace(/^-/,'')) ? '('+e+')' : e; }
function minus(e,k){ if(Math.abs(k)<1e-12) return e; if(e==='0') return fmt(-k); return k>0 ? `${paren(e)}-${fmt(k)}` : `${paren(e)}+${fmt(-k)}`; }
function kminus(k,e){ if(e==='0') return fmt(k); if(Math.abs(k)<1e-12) return '-'+paren(e); return `${fmt(k)}-${paren(e)}`; }

/* ============ LABS ============ */
const LABS = {};

/* --- Lab 1: Tabular DI --- */
LABS.partes = (el, L) => {
  const EX = [
    { name:R`\(x^2e^{3x}\)`, D:['x^2','2x','2','0'], I:['e^{3x}',R`\tfrac{1}{3}e^{3x}`,R`\tfrac{1}{9}e^{3x}`,R`\tfrac{1}{27}e^{3x}`], res:R`\int x^2e^{3x}dx = e^{3x}\left(\frac{x^2}{3}-\frac{2x}{9}+\frac{2}{27}\right)+C`, why:'Algebraica (x²) gana a Exponencial → u = x². Derivas hasta llegar a 0.'},
    { name:R`\(x\sin x\)`, D:['x','1','0'], I:[R`\sin x`,R`-\cos x`,R`-\sin x`], res:R`\int x\sin x\,dx = -x\cos x+\sin x + C`, why:'Algebraica gana a Trigonométrica → u = x.'},
    { name:R`\(x^3e^{-x/2}\)`, D:['x^3','3x^2','6x','6','0'], I:['e^{-x/2}','-2e^{-x/2}','4e^{-x/2}','-8e^{-x/2}','16e^{-x/2}'], res:R`\int x^3e^{-x/2}dx = -e^{-x/2}\left(2x^3+12x^2+48x+96\right)+C`, why:'Ejercicio 4.33 del taller. u = x³ porque al derivar 3 veces desaparece.'},
  ];
  let ex = 0, step = 0;
  el.innerHTML = `
  <p>Cuando <b>u es un polinomio</b>, en vez de aplicar partes 2 o 3 veces seguidas usa la <b>tabla DI</b> (método tabular): columna D = derivas u hasta 0, columna I = integras dv. Multiplicas en <b>diagonal</b> alternando signos <span class="sign">+ − + −</span>.</p>
  <div class="ctrl seg" id="exs"></div>
  <div class="grid2">
    <div><table class="t di"><thead><tr><th>Signo</th><th>D (derivar u)</th><th>I (integrar dv)</th></tr></thead><tbody id="dib"></tbody></table>
    <div class="row"><button class="go" id="stp">SIGUIENTE PASO ></button><button class="ghost" id="rst">REINICIAR</button></div></div>
    <div class="readout" id="dires"></div>
  </div>
  <h3 class="pix" style="font-size:11px;color:var(--c);margin-top:18px">LIATE: quién es u</h3>
  <table class="t"><tr><th>L</th><th>I</th><th>A</th><th>T</th><th>E</th></tr><tr><td>Logarítmica<br>\(\ln x\)</td><td>Inversa trig<br>\(\arctan x\)</td><td>Algebraica<br>\(x^n\)</td><td>Trigonométrica<br>\(\sin x\)</td><td>Exponencial<br>\(e^x\)</td></tr></table>
  <p class="small">La que esté más a la izquierda es u. El resto (con dx) es dv.</p>`;
  const exs = el.querySelector('#exs');
  EX.forEach((e,i)=>{ const b=document.createElement('button'); b.innerHTML=e.name; b.onclick=()=>{ex=i;step=0;draw();}; exs.appendChild(b); });
  const signs = ['+','−','+','−','+','−'];
  function draw(){
    [...exs.children].forEach((b,i)=>b.classList.toggle('on',i===ex));
    const e = EX[ex]; const tb = el.querySelector('#dib');
    tb.innerHTML = e.D.map((d,i)=>`<tr class="${i<=step?'':'hide'}"><td class="sign">${i<e.D.length-1?signs[i]:''}</td><td>\\(${d}\\)</td><td>\\(${e.I[i]}\\)</td></tr>`).join('');
    const terms = []; for(let i=0;i<Math.min(step, e.D.length-1);i++) terms.push(`${signs[i]==='+'?'+':'-'}\\left(${e.D[i]}\\right)\\left(${e.I[i+1]}\\right)`);
    const done = step >= e.D.length-1;
    el.querySelector('#dires').innerHTML = `<div class="small">${e.why}</div>
      <p>Diagonales acumuladas:</p><div>\\[${terms.length? terms.join(' ') : '\\text{(avanza los pasos)}'}\\]</div>
      ${done? `<div class="tip">Llegaste a 0 en D → ¡terminaste!<br>\\[${e.res}\\]</div>`:''}`;
    typeset(el);
  }
  el.querySelector('#stp').onclick=()=>{ if(step<EX[ex].D.length-1){step++;draw();} };
  el.querySelector('#rst').onclick=()=>{ step=0; draw(); };
  draw();
};

/* --- Lab 2: completar cuadrado --- */
LABS.cuadrado = (el) => {
  el.innerHTML = `<p>Escribe los coeficientes de \\(ax^2+bx+c\\) (prueba los del taller: 5.20 → a=−1, b=6, c=27).</p>
  <div class="ctrl"><label>a <input type="number" id="ca" value="1" step="any"></label><label>b <input type="number" id="cb" value="6" step="any"></label><label>c <input type="number" id="cc" value="15" step="any"></label></div>
  <div class="readout" id="cout"></div>
  <div class="ctrl seg" id="presets"></div>`;
  const P = [[1,-2,5,'5.34'],[-1,6,27,'5.20'],[4,4,10,'5.23'],[-1,4,12,'5.15'],[1,6,15,'5.22'],[-1,-6,0,'5.40'],[2,20,60,'5.28']];
  const pr = el.querySelector('#presets');
  P.forEach(p=>{ const b=document.createElement('button'); b.textContent='Taller '+p[3]; b.onclick=()=>{ ['ca','cb','cc'].forEach((id,i)=>el.querySelector('#'+id).value=p[i]); go(); }; pr.appendChild(b); });
  function go(){
    const a=+el.querySelector('#ca').value, b=+el.querySelector('#cb').value, c=+el.querySelector('#cc').value;
    const out = el.querySelector('#cout');
    if(!a){ out.innerHTML='a no puede ser 0'; return; }
    const h=b/(2*a), k=c-b*b/(4*a);
    const inner = Math.abs(h)<1e-12 ? 'x' : (h>0? `x+${fmt(h)}` : `x-${fmt(-h)}`);
    const A = a===1?'':(a===-1?'-':fmt(a));
    const K = Math.abs(k)<1e-12?'':(k>0?`+${fmt(k)}`:`-${fmt(-k)}`);
    let tipo='', sub='';
    const kk = k/a; // a[(x+h)^2 + kk]
    if(a>0 && k>0){ tipo='Suma de cuadrados \\(u^2+c^2\\) → aparece <b>arctan</b> (o ln si va en raíz).'; sub=R`x+${fmt(h)}`.replace('+-','-')+R` = \sqrt{${fmt(k/a)}}\,\tan\theta`; }
    else if(a<0 && k>0){ tipo='Resta \\(c^2-u^2\\) → con raíz aparece <b>arcsen</b>. Sustitución con seno.'; sub=R`x+${fmt(h)}`.replace('+-','-')+R` = \sqrt{${fmt(-k/a)}}\,\sin\theta`; }
    else if(a>0 && k<0){ tipo='Resta \\(u^2-c^2\\) → sustitución con <b>secante</b> o fracciones parciales (si no hay raíz).'; sub=R`x+${fmt(h)}`.replace('+-','-')+R` = \sqrt{${fmt(-k/a)}}\,\sec\theta`; }
    else if(Math.abs(k)<1e-12){ tipo='¡Es un cuadrado perfecto! No necesitas trigonometría.'; }
    else tipo='Siempre negativo: su raíz no es real.';
    out.innerHTML = `
      <div>Paso 1 · sacar a: \\(${a}\\left(x^2 ${b/a>=0?'+':''}${fmt(b/a)}x ${c/a>=0?'+':''}${fmt(c/a)}\\right)\\)</div>
      <div>Paso 2 · sumar y restar \\(\\left(\\tfrac{b}{2a}\\right)^2 = ${fmt(h*h)}\\)</div>
      <div style="margin:10px 0">Resultado: \\[${a}x^2${b>=0?'+':''}${b}x${c>=0?'+':''}${c} \\;=\\; ${A}\\left(${inner}\\right)^2 ${K}\\]</div>
      <div class="tip">${tipo}${sub? `<br>Sustitución sugerida: \\(${sub}\\)`:''}</div>`;
    typeset(out);
  }
  el.querySelectorAll('input').forEach(i=>i.oninput=go); go();
};

/* --- Lab 3: triángulo sustitución trig --- */
LABS.trig = (el, L) => {
  el.innerHTML = `<p>Elige el radical. Mueve x y mira cómo el triángulo te da <b>todas</b> las funciones para volver a x al final.</p>
  <div class="ctrl seg" id="tt"></div>
  <div class="grid2"><div id="cv"></div><div class="readout" id="tout"></div></div>
  <div class="ctrl"><label>a = <input type="range" id="ta" min="1" max="4" step="1" value="3"><span id="tav"></span></label><label>x = <input type="range" id="tx" min="0" max="1" step="0.01" value="0.5"><span id="txv"></span></label></div>`;
  const T = [
    {k:'sin', lab:R`\(\sqrt{a^2-x^2}\)`},
    {k:'tan', lab:R`\(\sqrt{a^2+x^2}\)`},
    {k:'sec', lab:R`\(\sqrt{x^2-a^2}\)`},
  ];
  let t=0; const tt=el.querySelector('#tt');
  T.forEach((o,i)=>{const b=document.createElement('button');b.innerHTML=o.lab;b.onclick=()=>{t=i;draw();};tt.appendChild(b);});
  const {c,ctx} = makeCanvas(el.querySelector('#cv'),520,360);
  function draw(){
    [...tt.children].forEach((b,i)=>b.classList.toggle('on',i===t));
    const a=+el.querySelector('#ta').value; const s=+el.querySelector('#tx').value;
    let x, opp, adj, hyp, oL, aL, hL, info;
    if(t===0){ x = 0.05*a + s*0.9*a; opp=x; hyp=a; adj=Math.sqrt(a*a-x*x); oL='x'; aL=R`\sqrt{${a*a}-x^2}`; hL=String(a);
      info = R`x=${a}\sin\theta,\quad dx=${a}\cos\theta\,d\theta \\ \sqrt{${a*a}-x^2}=${a}\cos\theta \\ \sin\theta=\frac{x}{${a}},\ \cos\theta=\frac{\sqrt{${a*a}-x^2}}{${a}},\ \tan\theta=\frac{x}{\sqrt{${a*a}-x^2}} \\ \theta=\arcsin\frac{x}{${a}}`; }
    else if(t===1){ x = 0.2+s*2.5*a; opp=x; adj=a; hyp=Math.hypot(a,x); oL='x'; aL=String(a); hL=R`\sqrt{${a*a}+x^2}`;
      info = R`x=${a}\tan\theta,\quad dx=${a}\sec^2\theta\,d\theta \\ \sqrt{${a*a}+x^2}=${a}\sec\theta \\ \sin\theta=\frac{x}{\sqrt{${a*a}+x^2}},\ \cos\theta=\frac{${a}}{\sqrt{${a*a}+x^2}} \\ \theta=\arctan\frac{x}{${a}}`; }
    else { x = a*1.05 + s*2.5*a; hyp=x; adj=a; opp=Math.sqrt(x*x-a*a); oL=R`\sqrt{x^2-${a*a}}`; aL=String(a); hL='x';
      info = R`x=${a}\sec\theta,\quad dx=${a}\sec\theta\tan\theta\,d\theta \\ \sqrt{x^2-${a*a}}=${a}\tan\theta \\ \cos\theta=\frac{${a}}{x},\ \tan\theta=\frac{\sqrt{x^2-${a*a}}}{${a}} \\ \theta=\operatorname{arcsec}\frac{x}{${a}}`; }
    el.querySelector('#tav').textContent=a; el.querySelector('#txv').textContent=x.toFixed(2);
    // draw triangle
    ctx.clearRect(0,0,c.W,c.H);
    const sc = Math.min(380/adj, 260/opp);
    const x0=60, y0=310, A=[x0,y0], B=[x0+adj*sc,y0], C=[x0+adj*sc,y0-opp*sc];
    ctx.fillStyle='rgba(225,6,0,.06)'; ctx.strokeStyle='#0b0b0b'; ctx.lineWidth=3;
    ctx.beginPath(); ctx.moveTo(...A); ctx.lineTo(...B); ctx.lineTo(...C); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle='#8a8a8a'; ctx.lineWidth=1.5; ctx.strokeRect(B[0]-14,B[1]-14,14,14);
    ctx.beginPath(); ctx.arc(A[0],A[1],38,-Math.atan2(opp,adj),0); ctx.stroke();
    ctx.fillStyle='#0b0b0b'; ctx.font='bold 18px JetBrains Mono'; ctx.fillText('θ',A[0]+44,A[1]-8);
    ctx.font='bold 15px JetBrains Mono'; ctx.fillStyle='#0b0b0b';
    const pl = t===0? ['√('+a*a+' − x²)','x',String(a)] : t===1? [String(a),'x','√('+a*a+' + x²)'] : [String(a),'√(x² − '+a*a+')','x'];
    ctx.fillText('ady = '+pl[0], (A[0]+B[0])/2-50, y0+22);
    ctx.fillText('op = '+pl[1], B[0]+8, (B[1]+C[1])/2);
    ctx.save(); ctx.translate((A[0]+C[0])/2-20,(A[1]+C[1])/2-12); ctx.rotate(-Math.atan2(opp*sc,adj*sc)); ctx.fillText('hip = '+pl[2],-30,0); ctx.restore();
    el.querySelector('#tout').innerHTML = `<div class="small">Ady = \\(${aL}\\) · Op = \\(${oL}\\) · Hip = \\(${hL}\\)</div>\\[\\begin{gathered}${info}\\end{gathered}\\]`;
    typeset(el.querySelector('#tout'));
  }
  el.querySelectorAll('input').forEach(i=>i.oninput=draw); draw();
};

/* --- Lab 4: constructor de fracciones parciales --- */
LABS.fracciones = (el) => {
  el.innerHTML = `<p>Construye un denominador con los botones y mira la <b>plantilla</b> que debes plantear. Regla de oro: número de constantes = grado del denominador.</p>
  <div class="ctrl seg" id="fb"></div>
  <div class="readout" id="fout"></div>
  <div class="tip"><b>Truco del tapado:</b> para un factor lineal \\((x-r)\\) no repetido, tapa ese factor en la fracción original y evalúa en \\(x=r\\). Eso es su constante directamente.</div>`;
  const roots = [1,-2,3,-1,2]; const quads = ['x^2+1','x^2+x+1','x^2+4'];
  let fac = [{t:'L',r:1},{t:'L',r:-2}]; let ri=2, qi=0;
  const B = [['+ lineal (x−r)',()=>fac.push({t:'L',r:roots[ri++%5]})],['+ repetido (x−r)²',()=>fac.push({t:'R',r:roots[ri++%5],m:2})],['+ repetido (x−r)³',()=>fac.push({t:'R',r:roots[ri++%5],m:3})],['+ cuadrático irreducible',()=>fac.push({t:'Q',q:quads[qi++%3]})],['LIMPIAR',()=>{fac=[];ri=0;qi=0;}]];
  const fb = el.querySelector('#fb'); B.forEach(([t,f])=>{const b=document.createElement('button');b.textContent=t;b.onclick=()=>{f();draw();};fb.appendChild(b);});
  const lin = r => r>0?`x-${r}`:`x+${-r}`;
  function draw(){
    const out = el.querySelector('#fout');
    if(!fac.length){ out.innerHTML='Agrega factores'; return; }
    let L=0; const letter=()=>String.fromCharCode(65+L++);
    let den=[], parts=[], deg=0;
    fac.forEach(f=>{
      if(f.t==='L'){ den.push(`(${lin(f.r)})`); parts.push(R`\frac{${letter()}}{${lin(f.r)}}`); deg+=1; }
      if(f.t==='R'){ den.push(`(${lin(f.r)})^{${f.m}}`); for(let k=1;k<=f.m;k++) parts.push(R`\frac{${letter()}}{(${lin(f.r)})${k>1?'^{'+k+'}':''}}`); deg+=f.m; }
      if(f.t==='Q'){ den.push(`(${f.q})`); const p=letter(), q=letter(); parts.push(R`\frac{${p}x+${q}}{${f.q}}`); deg+=2; }
    });
    out.innerHTML = `\\[\\frac{P(x)}{${den.join('')}} = ${parts.join('+')}\\]
      <div class="small">Grado del denominador: <b>${deg}</b> → constantes: <b>${L}</b> [OK] &nbsp;·&nbsp; Si grado de P(x) ≥ ${deg}, <b>divide primero</b>.</div>
      <div class="small" style="margin-top:6px">Al integrar: \\(\\int\\frac{A}{x-r}=A\\ln|x-r|\\) · \\(\\int\\frac{B}{(x-r)^2}=-\\frac{B}{x-r}\\) · \\(\\int\\frac{Px+Q}{x^2+k^2}\\) → ln + arctan.</div>`;
    typeset(out);
  }
  draw();
};

/* --- Lab 5: área entre curvas --- */
LABS.area = (el, L) => {
  const sq = Math.sqrt;
  const P = [
    { n:'y = 2x  vs  y = x²', xr:[-0.4,2.6], yr:[-0.6,4.6], curves:v=>{ v.fn(x=>2*x,-0.4,2.6,'#0b0b0b'); v.fn(x=>x*x,-0.4,2.6,'#e10600'); v.label('y = 2x',1.6,3.6,'#0b0b0b'); v.label('y = x²',2.05,4.3,'#e10600'); },
      x:{pieces:[{a:0,b:2,top:x=>2*x,bot:x=>x*x}], tex:R`A=\int_0^2\left(2x-x^2\right)dx`},
      y:{pieces:[{a:0,b:4,right:y=>sq(y),left:y=>y/2}], tex:R`A=\int_0^4\left(\sqrt y-\tfrac{y}{2}\right)dy`}, exact:4/3, ex:'4/3' },
    { n:'x = y²  vs  y = x − 2', xr:[-0.6,4.8], yr:[-2.2,2.8], curves:v=>{ v.param(t=>t*t,t=>t,-2.2,2.3,'#0b0b0b'); v.fn(x=>x-2,-0.2,4.8,'#e10600'); v.label('x = y²',0.3,2.2,'#0b0b0b'); v.label('y = x − 2',3.4,0.9,'#e10600'); },
      x:{pieces:[{a:0,b:1,top:x=>sq(x),bot:x=>-sq(x)},{a:1,b:4,top:x=>sq(x),bot:x=>x-2}], tex:R`A=\int_0^1\left[\sqrt x-(-\sqrt x)\right]dx+\int_1^4\left[\sqrt x-(x-2)\right]dx`, warn:'¡Abajo cambia de fórmula en x = 1! En dx necesitas DOS integrales (colores distintos).'},
      y:{pieces:[{a:-1,b:2,right:y=>y+2,left:y=>y*y}], tex:R`A=\int_{-1}^{2}\left[(y+2)-y^2\right]dy`, warn:'En dy derecha e izquierda nunca cambian → UNA sola integral.'}, exact:4.5, ex:'9/2' },
    { n:'sen x  vs  cos x  en [0, π]', xr:[-0.2,3.4], yr:[-1.3,1.3], curves:v=>{ v.fn(Math.sin,-0.2,3.4,'#0b0b0b'); v.fn(Math.cos,-0.2,3.4,'#e10600'); v.label('sen x',2.2,0.95,'#0b0b0b'); v.label('cos x',0.05,1.1,'#e10600'); },
      x:{pieces:[{a:0,b:PI/4,top:Math.cos,bot:Math.sin},{a:PI/4,b:PI,top:Math.sin,bot:Math.cos}], tex:R`A=\int_0^{\pi/4}(\cos x-\sin x)\,dx+\int_{\pi/4}^{\pi}(\sin x-\cos x)\,dx`, warn:'Se cruzan en x = π/4 → quién está arriba cambia → partir.'}, exact:2*Math.SQRT2, ex:'2√2' },
  ];
  el.innerHTML = `<div class="ctrl seg" id="ap"></div>
  <div class="ctrl seg" id="am"></div>
  <div id="cv"></div>
  <div class="ctrl"><label>Rectángulos n = <input type="range" id="an" min="2" max="60" value="8"><b id="anv"></b></label></div>
  <div class="readout" id="aout"></div>`;
  let p=0, mode='x';
  const ap=el.querySelector('#ap'), am=el.querySelector('#am');
  P.forEach((o,i)=>{const b=document.createElement('button');b.textContent=o.n;b.onclick=()=>{p=i;mode='x';draw();};ap.appendChild(b);});
  const {c,ctx} = makeCanvas(el.querySelector('#cv'),640,400);
  function draw(){
    [...ap.children].forEach((b,i)=>b.classList.toggle('on',i===p));
    const pr=P[p];
    am.innerHTML=''; ['x','y'].forEach(m=>{ if(!pr[m]) return; const b=document.createElement('button'); b.textContent = m==='x'?'Rebanadas verticales (dx)':'Rebanadas horizontales (dy)'; b.classList.toggle('on',mode===m); b.onclick=()=>{mode=m;draw();}; am.appendChild(b); });
    const n=+el.querySelector('#an').value; el.querySelector('#anv').textContent=n;
    const v=View(ctx,c.W,c.H,pr.xr,pr.yr); v.clear(); v.axes();
    const M=pr[mode]; const a=M.pieces[0].a, b=M.pieces[M.pieces.length-1].b; const w=(b-a)/n; let sum=0;
    const cols=['rgba(11,11,11,.16)','rgba(225,6,0,.28)'];
    for(let i=0;i<n;i++){
      const m=a+(i+.5)*w; const pc=M.pieces.findIndex(q=>m>=q.a&&m<=q.b); const q=M.pieces[pc];
      ctx.fillStyle=cols[pc%2]; ctx.strokeStyle='rgba(11,11,11,.45)';
      if(mode==='x'){ const t=q.top(m), bo=q.bot(m); sum+=(t-bo)*w; const X1=v.X(m-w/2),X2=v.X(m+w/2),Y1=v.Y(t),Y2=v.Y(bo); ctx.fillRect(X1,Y1,X2-X1,Y2-Y1); ctx.strokeRect(X1,Y1,X2-X1,Y2-Y1); }
      else { const r=q.right(m), l=q.left(m); sum+=(r-l)*w; const Y1=v.Y(m+w/2),Y2=v.Y(m-w/2),X1=v.X(l),X2=v.X(r); ctx.fillRect(X1,Y1,X2-X1,Y2-Y1); ctx.strokeRect(X1,Y1,X2-X1,Y2-Y1); }
    }
    pr.curves(v);
    const out=el.querySelector('#aout');
    out.innerHTML = `\\[${M.tex}\\]<div>Suma de ${n} rectángulos ≈ <b>${sum.toFixed(4)}</b> &nbsp;|&nbsp; valor exacto = <b>${pr.ex}</b> ≈ ${pr.exact.toFixed(4)}</div>${M.warn?`<div class="${M.pieces.length>1?'trap':'tip'}">${M.warn}</div>`:''}`;
    typeset(out);
  }
  el.querySelector('#an').oninput=draw; draw();
};

/* --- Lab 6/7: volúmenes --- */
function volumeLab(el, L, defaultAxis){
  const sq=Math.sqrt;
  const REG = [
    {n:'y = x  y  y = x²', a:0,b:1, top:x=>x, bot:x=>x*x, tT:'x', bT:'x^2'},
    {n:'y = √x, y = 0, x ∈ [0,4]', a:0,b:4, top:x=>sq(x), bot:x=>0, tT:R`\sqrt{x}`, bT:'0'},
    {n:'y = 4 − x², 1er cuadrante', a:0,b:2, top:x=>4-x*x, bot:x=>0, tT:'4-x^2', bT:'0'},
    {n:'y = 1/x, x ∈ [1,4]', a:1,b:4, top:x=>1/x, bot:x=>0, tT:R`\frac{1}{x}`, bT:'0'},
  ];
  el.innerHTML = `<p>Mismo rectángulo vertical, distinto eje: <b>si el eje es horizontal</b> el rectángulo es ⟂ al eje → <b>arandela</b>. <b>Si el eje es vertical</b> el rectángulo es ∥ al eje → <b>cascarón</b>. Mueve todo y observa.</p>
  <div class="ctrl seg" id="vr"></div>
  <div class="ctrl seg" id="vax"></div>
  <div class="ctrl"><label>Posición del eje = <input type="range" id="vk" min="-3" max="6" step="0.5" value="0"><b id="vkv"></b></label>
  <label>Rebanada en x = <input type="range" id="vx" min="0" max="1" step="0.01" value="0.6"><b id="vxv"></b></label></div>
  <div id="cv"></div><div class="readout" id="vout"></div>`;
  let r=0, axis=defaultAxis;
  const vr=el.querySelector('#vr'), vax=el.querySelector('#vax');
  REG.forEach((o,i)=>{const b=document.createElement('button');b.textContent=o.n;b.onclick=()=>{r=i;draw();};vr.appendChild(b);});
  [['h','Eje horizontal  y = k'],['v','Eje vertical  x = h']].forEach(([k,t])=>{const b=document.createElement('button');b.textContent=t;b.dataset.k=k;b.onclick=()=>{axis=k;el.querySelector('#vk').value=0;draw();};vax.appendChild(b);});
  const {c,ctx}=makeCanvas(el.querySelector('#cv'),640,430);
  function draw(){
    [...vr.children].forEach((b,i)=>b.classList.toggle('on',i===r));
    [...vax.children].forEach(b=>b.classList.toggle('on',b.dataset.k===axis));
    const G=REG[r]; const k=+el.querySelector('#vk').value; const s=+el.querySelector('#vx').value;
    const xs=G.a+(G.b-G.a)*(0.02+0.96*s);
    el.querySelector('#vkv').textContent=(axis==='h'?'y = ':'x = ')+k; el.querySelector('#vxv').textContent=xs.toFixed(2);
    let yl=1e9,yh=-1e9; for(let i=0;i<=100;i++){const x=G.a+(G.b-G.a)*i/100; yl=Math.min(yl,G.bot(x)); yh=Math.max(yh,G.top(x));}
    let xr,yr;
    if(axis==='h'){ xr=[Math.min(G.a,0)-0.4, G.b+0.6]; yr=[Math.min(yl,2*k-yh,k,0)-0.5, Math.max(yh,2*k-yl,k)+0.5]; }
    else { xr=[Math.min(G.a,2*k-G.b,k,0)-0.5, Math.max(G.b,2*k-G.a,k)+0.5]; yr=[Math.min(yl,0)-0.5, yh+0.8]; }
    const v=View(ctx,c.W,c.H,xr,yr); v.clear(); v.axes();
    // regions
    const poly=(fx,fy,alpha)=>{ ctx.beginPath(); for(let i=0;i<=120;i++){const x=G.a+(G.b-G.a)*i/120; const [X,Y]=[fx(x,G.top(x)),fy(x,G.top(x))]; i?ctx.lineTo(v.X(X),v.Y(Y)):ctx.moveTo(v.X(X),v.Y(Y));} for(let i=120;i>=0;i--){const x=G.a+(G.b-G.a)*i/120; ctx.lineTo(v.X(fx(x,G.bot(x))),v.Y(fy(x,G.bot(x))));} ctx.closePath(); ctx.fillStyle=`rgba(11,11,11,${alpha*0.6})`; ctx.fill(); };
    if(axis==='h') poly((x,y)=>x,(x,y)=>2*k-y,0.12); else poly((x,y)=>2*k-x,(x,y)=>y,0.12);
    poly((x,y)=>x,(x,y)=>y,0.35);
    v.fn(G.top,G.a,G.b,'#0b0b0b'); v.fn(G.bot,G.a,G.b,'#e10600');
    // axis
    ctx.save(); ctx.setLineDash([8,6]); ctx.strokeStyle='#e10600'; ctx.lineWidth=2.5; ctx.beginPath();
    if(axis==='h'){ ctx.moveTo(v.X(xr[0]),v.Y(k)); ctx.lineTo(v.X(xr[1]),v.Y(k)); } else { ctx.moveTo(v.X(k),v.Y(yr[0])); ctx.lineTo(v.X(k),v.Y(yr[1])); }
    ctx.stroke(); ctx.restore(); ctx.fillStyle='#e10600'; ctx.font='bold 13px JetBrains Mono';
    axis==='h'? ctx.fillText('eje y = '+k, v.X(xr[1])-80, v.Y(k)-6) : ctx.fillText('eje x = '+k, v.X(k)+6, v.Y(yr[1])+16);
    // slice
    const t=G.top(xs), bo=G.bot(xs), dw=(G.b-G.a)/40;
    ctx.fillStyle='rgba(225,6,0,.85)'; ctx.fillRect(v.X(xs-dw/2), v.Y(t), Math.max(3,v.X(xs+dw/2)-v.X(xs-dw/2)), v.Y(bo)-v.Y(t));
    let info='', vol=0, tex='', warn='';
    if(axis==='h'){
      const below = k<=yl+1e-9, above = k>=yh-1e-9;
      let Rv, rv, RT, rT;
      if(below){ Rv=t-k; rv=bo-k; RT=minus(G.tT,k); rT=minus(G.bT,k); }
      else if(above){ Rv=k-bo; rv=k-t; RT=kminus(k,G.bT); rT=kminus(k,G.tT); }
      else { warn='El eje atraviesa la región: el sólido se superpone. Los parciales evitan este caso; mueve el eje.'; Rv=Math.max(Math.abs(t-k),Math.abs(bo-k)); rv=0; RT='?'; rT='0'; }
      // washer drawing
      const cx=v.X(xs), cy=v.Y(k), ry=Math.abs(v.Y(k+Rv)-cy), ri=Math.abs(v.Y(k+rv)-cy);
      ctx.save(); ctx.globalAlpha=.85; ctx.fillStyle='rgba(225,6,0,.16)'; ctx.strokeStyle='#0b0b0b'; ctx.lineWidth=2;
      ctx.beginPath(); ctx.ellipse(cx,cy,ry*.28,ry,0,0,2*PI); ctx.fill(); ctx.stroke();
      if(ri>1){ ctx.fillStyle='#ffffff'; ctx.beginPath(); ctx.ellipse(cx,cy,ri*.28,ri,0,0,2*PI); ctx.fill(); ctx.stroke(); }
      ctx.restore();
      // R r arrows
      ctx.strokeStyle='#0b0b0b'; ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(cx+ry*.3+6,cy); ctx.lineTo(cx+ry*.3+6, v.Y(below||!above? (below? t : t) : bo)); ctx.stroke();
      const isDisk = Math.abs(rv)<1e-9 || rT==='0';
      vol = PI*simpson(x=>{ let R1,r1; const T=G.top(x),B=G.bot(x); if(below){R1=T-k;r1=B-k;} else if(above){R1=k-B;r1=k-T;} else {R1=Math.max(Math.abs(T-k),Math.abs(B-k));r1=0;} return R1*R1-r1*r1; }, G.a, G.b);
      tex = isDisk ? R`V=\pi\int_{${fmt(G.a)}}^{${fmt(G.b)}}\left(${RT}\right)^2dx` : R`V=\pi\int_{${fmt(G.a)}}^{${fmt(G.b)}}\left[\left(${RT}\right)^2-\left(${rT}\right)^2\right]dx`;
      info = `<b>${isDisk?'DISCO':'ARANDELA'}</b> (rebanada ⟂ al eje) · Eje ${above?'ARRIBA':'ABAJO'} de la región → R = distancia a la curva <b>${above?'de abajo':'de arriba'}</b> (la lejana).<br>
        \\(R(x)=${RT}\\) = ${Rv.toFixed(3)} &nbsp; ${isDisk?'':`\\(r(x)=${rT}\\) = ${rv.toFixed(3)}`}`;
    } else {
      const left = k<=G.a+1e-9, right = k>=G.b-1e-9;
      let rad, radT; const hT = G.bT==='0'? G.tT : `${G.tT}-${paren(G.bT)}`;
      if(left){ rad=xs-k; radT=minus('x',k); } else if(right){ rad=k-xs; radT=kminus(k,'x'); } else { rad=Math.abs(xs-k); radT='?'; warn='El eje cae dentro de la región: el sólido se superpone. Mueve el eje fuera.'; }
      const cx=v.X(k), rx=Math.abs(v.X(k+rad)-cx), yT=v.Y(t), yB=v.Y(bo), e=rx*.22;
      ctx.save(); ctx.fillStyle='rgba(225,6,0,.12)'; ctx.strokeStyle='#0b0b0b'; ctx.lineWidth=2;
      ctx.beginPath(); ctx.ellipse(cx,yB,rx,e,0,0,PI); ctx.lineTo(cx-rx,yT); ctx.ellipse(cx,yT,rx,e,0,PI,0,true); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx,yT,rx,e,0,0,2*PI); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(cx,yB,rx,e,0,0,PI); ctx.stroke();
      ctx.setLineDash([4,4]); ctx.beginPath(); ctx.ellipse(cx,yB,rx,e,0,PI,2*PI); ctx.stroke(); ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(cx-rx,yT); ctx.lineTo(cx-rx,yB); ctx.moveTo(cx+rx,yT); ctx.lineTo(cx+rx,yB); ctx.stroke();
      ctx.strokeStyle='#0b0b0b'; ctx.beginPath(); ctx.moveTo(cx,(yT+yB)/2); ctx.lineTo(v.X(xs),(yT+yB)/2); ctx.stroke();
      ctx.fillStyle='#0b0b0b'; ctx.font='bold 12px JetBrains Mono'; ctx.fillText('radio',(cx+v.X(xs))/2-14,(yT+yB)/2-6);
      ctx.restore();
      vol = 2*PI*simpson(x=>Math.abs(x-k)*(G.top(x)-G.bot(x)), G.a, G.b);
      tex = R`V=2\pi\int_{${fmt(G.a)}}^{${fmt(G.b)}}\underbrace{\left(${radT}\right)}_{\text{radio}}\underbrace{\left(${hT}\right)}_{\text{altura}}dx`;
      info = `<b>CASCARÓN</b> (rebanada ∥ al eje) · Eje a la ${right?'DERECHA':'IZQUIERDA'} → radio = distancia del rectángulo al eje.<br>
        radio = \\(${radT}\\) = ${rad.toFixed(3)} &nbsp; altura = \\(${hT}\\) = ${(t-bo).toFixed(3)}`;
    }
    const out=el.querySelector('#vout');
    out.innerHTML = `<div>${info}</div>\\[${tex}\\]<div>Volumen ≈ <b>${vol.toFixed(4)}</b> = <b>${(vol/PI).toFixed(4)}π</b></div>${warn?`<div class="trap">${warn}</div>`:''}`;
    typeset(out);
  }
  el.querySelectorAll('input').forEach(i=>i.oninput=draw); draw();
}
LABS.discos = (el,L)=>volumeLab(el,L,'h');
LABS.cascarones = (el,L)=>volumeLab(el,L,'v');

/* --- Lab 8: longitud --- */
LABS.longitud = (el,L) => {
  const P = [
    {n:'y = (x⁴+3)/(6x), [1,3]  (Taller #4)', f:x=>(x**4+3)/(6*x), a:1,b:3, ex:'14/3', exact:14/3, yr:[0,5.2], tex:R`L=\int_1^3\sqrt{1+\left(\tfrac{x^2}{2}-\tfrac{1}{2x^2}\right)^2}dx=\int_1^3\left(\tfrac{x^2}{2}+\tfrac{1}{2x^2}\right)dx`},
    {n:'y = ⅔(x²+1)^{3/2}, [1,2]  (Taller #2)', f:x=>2/3*Math.pow(x*x+1,1.5), a:1,b:2, ex:'17/3', exact:17/3, yr:[1,8.2], tex:R`L=\int_1^2\sqrt{1+4x^2(x^2+1)}\,dx=\int_1^2(2x^2+1)\,dx`},
    {n:'y = sen x, [0, π]', f:Math.sin, a:0,b:PI, ex:'(sin forma cerrada)', exact:simpson(x=>Math.sqrt(1+Math.cos(x)**2),0,PI,2000), yr:[-0.3,1.4], tex:R`L=\int_0^{\pi}\sqrt{1+\cos^2x}\,dx`},
  ];
  el.innerHTML = `<p>La longitud es <b>Pitágoras en pedacitos</b>: cada segmento mide \\(\\Delta s=\\sqrt{\\Delta x^2+\\Delta y^2}=\\sqrt{1+\\left(\\tfrac{\\Delta y}{\\Delta x}\\right)^2}\\,\\Delta x\\). Con infinitos pedacitos → integral.</p>
  <div class="ctrl seg" id="lp"></div><div id="cv"></div>
  <div class="ctrl"><label>Segmentos n = <input type="range" id="ln" min="1" max="40" value="3"><b id="lnv"></b></label></div>
  <div class="readout" id="lout"></div>`;
  let p=0; const lp=el.querySelector('#lp');
  P.forEach((o,i)=>{const b=document.createElement('button');b.textContent=o.n;b.onclick=()=>{p=i;draw();};lp.appendChild(b);});
  const {c,ctx}=makeCanvas(el.querySelector('#cv'),640,400);
  function draw(){
    [...lp.children].forEach((b,i)=>b.classList.toggle('on',i===p));
    const G=P[p], n=+el.querySelector('#ln').value; el.querySelector('#lnv').textContent=n;
    const v=View(ctx,c.W,c.H,[G.a-0.3,G.b+0.3],G.yr); v.clear(); v.axes();
    v.fn(G.f,G.a,G.b,'#e10600',3);
    let sum=0; const pts=[]; for(let i=0;i<=n;i++){const x=G.a+(G.b-G.a)*i/n; pts.push([x,G.f(x)]);}
    ctx.strokeStyle='#0b0b0b'; ctx.lineWidth=2; ctx.beginPath(); pts.forEach(([x,y],i)=>i?ctx.lineTo(v.X(x),v.Y(y)):ctx.moveTo(v.X(x),v.Y(y))); ctx.stroke();
    pts.forEach(([x,y])=>{ctx.fillStyle='#0b0b0b';ctx.beginPath();ctx.arc(v.X(x),v.Y(y),3.5,0,2*PI);ctx.fill();});
    for(let i=0;i<n;i++) sum+=Math.hypot(pts[i+1][0]-pts[i][0],pts[i+1][1]-pts[i][1]);
    // triangle on segment 0
    const [x0,y0]=pts[0],[x1,y1]=pts[1];
    ctx.save(); ctx.setLineDash([5,4]); ctx.strokeStyle='#e10600'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(v.X(x0),v.Y(y0)); ctx.lineTo(v.X(x1),v.Y(y0)); ctx.lineTo(v.X(x1),v.Y(y1)); ctx.stroke(); ctx.restore();
    ctx.fillStyle='#e10600'; ctx.font='bold 13px JetBrains Mono'; ctx.fillText('Δx',(v.X(x0)+v.X(x1))/2-8,v.Y(y0)+16); ctx.fillText('Δy',v.X(x1)+6,(v.Y(y0)+v.Y(y1))/2);
    const out=el.querySelector('#lout');
    out.innerHTML=`\\[${G.tex}\\]<div>Suma de ${n} segmentos ≈ <b>${sum.toFixed(5)}</b> &nbsp;|&nbsp; exacto = <b>${G.ex}</b> ≈ ${G.exact.toFixed(5)} &nbsp;|&nbsp; error = ${(G.exact-sum).toExponential(2)}</div>`;
    typeset(out);
  }
  el.querySelector('#ln').oninput=draw; draw();
};

