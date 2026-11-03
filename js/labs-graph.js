/* Simuladores: graficar funciones y dibujar regiones */
/* --- Lab: graficar (tabla de valores) --- */
LABS.graficar = (el) => {
  const sq=Math.sqrt;
  const F = {
    recta:{n:'Recta  y = mx + b', p:{m:[-3,3,0.5,2],b:[-4,4,0.5,1]}, f:(x,p)=>p.m*x+p.b, tex:p=>R`y=${fm(p.m)}x${sg(p.b)}`, sub:(x,p)=>R`${fm(p.m)}(${fx(x)})${sg(p.b)}`, xs:p=>[-2,-1,0,1,2], win:[-5,5,-6,6],
      info:p=>`Pendiente m = ${p.m}: por cada 1 a la derecha sube ${p.m}. Corte con y: (0, ${p.b}).${p.m? ` Corte con x: (${(+(-p.b/p.m).toFixed(2))}, 0).`:''} Con 2 puntos basta.`},
    parabola:{n:'Parábola  y = a(x − h)² + k', p:{a:[-2,2,0.5,1],h:[-3,3,0.5,0],k:[-4,4,0.5,0]}, f:(x,p)=>p.a*(x-p.h)**2+p.k, tex:p=>R`y=${fm(p.a)}\left(x${sg(-p.h)}\right)^2${sg(p.k)}`, sub:(x,p)=>R`${fm(p.a)}(${fx(x)}${sg(-p.h)})^2${sg(p.k)}`, xs:p=>[-2,-1,0,1,2].map(d=>p.h+d), win:[-6,6,-7,7],
      info:p=>`Vértice: (${p.h}, ${p.k}). Abre hacia ${p.a>0?'ARRIBA (a > 0)':'ABAJO (a < 0)'}. Tabla simétrica alrededor de x = ${p.h}.`},
    cubica:{n:'Cúbica  y = a·x³', p:{a:[-2,2,0.5,1]}, f:(x,p)=>p.a*x**3, tex:p=>R`y=${fm(p.a)}x^3`, sub:(x,p)=>R`${fm(p.a)}(${fx(x)})^3`, xs:p=>[-2,-1,-0.5,0,0.5,1,2], win:[-3,3,-9,9],
      info:p=>'Pasa por el origen. Forma de S. Es impar: simétrica respecto al origen.'},
    raiz:{n:'Raíz  y = a√(x − h) + k', p:{a:[-2,2,0.5,1],h:[-3,3,1,0],k:[-3,3,0.5,0]}, f:(x,p)=>x<p.h?NaN:p.a*sq(x-p.h)+p.k, tex:p=>R`y=${fm(p.a)}\sqrt{x${sg(-p.h)}}${sg(p.k)}`, sub:(x,p)=>R`${fm(p.a)}\sqrt{${fx(x)}${sg(-p.h)}}${sg(p.k)}`, xs:p=>[0,1,4,9].map(d=>p.h+d), win:[-4,10,-5,7],
      info:p=>`Empieza en (${p.h}, ${p.k}) y solo existe para x ≥ ${p.h}. Elige x que den raíces exactas: h+0, h+1, h+4, h+9.`},
    inversa:{n:'Hipérbola  y = a/(x − h) + k', p:{a:[-3,3,0.5,1],h:[-3,3,1,0],k:[-3,3,0.5,0]}, f:(x,p)=>Math.abs(x-p.h)<1e-6?NaN:p.a/(x-p.h)+p.k, tex:p=>R`y=\frac{${fm(p.a,true)}}{x${sg(-p.h)}}${sg(p.k)}`, sub:(x,p)=>R`\frac{${fm(p.a,true)}}{${fx(x)}${sg(-p.h)}}${sg(p.k)}`, xs:p=>[-3,-1,-0.5,0.5,1,3].map(d=>p.h+d), win:[-6,6,-6,6],
      info:p=>`Nunca toca la recta x = ${p.h} (asíntota vertical) ni y = ${p.k} (asíntota horizontal). Tiene dos ramas.`},
    exp:{n:'Exponencial  y = eˣ⁻ʰ + k', p:{h:[-3,3,1,0],k:[-3,3,0.5,0]}, f:(x,p)=>Math.exp(x-p.h)+p.k, tex:p=>R`y=e^{x${sg(-p.h)}}${sg(p.k)}`, sub:(x,p)=>R`e^{${fx(x)}${sg(-p.h)}}${sg(p.k)}`, xs:p=>[-2,-1,0,1,2].map(d=>p.h+d), win:[-5,5,-4,9],
      info:p=>`Pasa por (${p.h}, ${1+p.k}). Nunca baja de y = ${p.k}. e ≈ 2.718.`},
    ln:{n:'Logaritmo  y = ln(x − h) + k', p:{h:[-3,3,1,0],k:[-3,3,0.5,0]}, f:(x,p)=>x<=p.h?NaN:Math.log(x-p.h)+p.k, tex:p=>R`y=\ln(x${sg(-p.h)})${sg(p.k)}`, sub:(x,p)=>R`\ln(${fx(x)}${sg(-p.h)})${sg(p.k)}`, xs:p=>[Math.exp(-2),Math.exp(-1),1,Math.E,Math.E**2].map(d=>p.h+d), win:[-4,10,-5,5],
      info:p=>`Solo existe para x > ${p.h}. Pasa por (${p.h+1}, ${p.k}) porque ln 1 = 0.`},
    seno:{n:'Seno  y = a·sen(x) + k', p:{a:[-3,3,0.5,1],k:[-2,2,0.5,0]}, f:(x,p)=>p.a*Math.sin(x)+p.k, tex:p=>R`y=${fm(p.a)}\sin x${sg(p.k)}`, sub:(x,p)=>R`${fm(p.a)}\sin(${fx(x)})${sg(p.k)}`, xs:p=>[0,PI/2,PI,3*PI/2,2*PI], win:[-0.6,7,-4,4],
      info:p=>`Oscila entre ${p.k-Math.abs(p.a)} y ${p.k+Math.abs(p.a)}. Se repite cada 2π ≈ 6.28. Puntos clave en 0, π/2, π, 3π/2, 2π.`},
    coseno:{n:'Coseno  y = a·cos(x) + k', p:{a:[-3,3,0.5,1],k:[-2,2,0.5,0]}, f:(x,p)=>p.a*Math.cos(x)+p.k, tex:p=>R`y=${fm(p.a)}\cos x${sg(p.k)}`, sub:(x,p)=>R`${fm(p.a)}\cos(${fx(x)})${sg(p.k)}`, xs:p=>[0,PI/2,PI,3*PI/2,2*PI], win:[-0.6,7,-4,4],
      info:p=>`Empieza en su máximo (0, ${p.a+p.k}). Es el seno corrido π/2.`},
  };
  function fm(v,keep){ if(keep) return String(v); return v===1?'':v===-1?'-':String(v); }
  function sg(v){ return v===0?'':(v>0?'+'+v:String(v)); }
  function fx(x){ const k=x/PI; const map={0:'0',0.5:R`\tfrac{\pi}{2}`,1:R`\pi`,1.5:R`\tfrac{3\pi}{2}`,2:R`2\pi`}; if(Math.abs(x)>1e-9 && map[+k.toFixed(6)]!==undefined && [0.5,1,1.5,2].includes(+k.toFixed(6))) return map[+k.toFixed(6)]; if(Math.abs(x-Math.E)<1e-9) return 'e'; if(Math.abs(x-Math.E**2)<1e-9) return 'e^2'; if(Math.abs(x-Math.exp(-1))<1e-9) return 'e^{-1}'; if(Math.abs(x-Math.exp(-2))<1e-9) return 'e^{-2}'; return +x.toFixed(3); }
  el.innerHTML = `<p>Elige una familia, mueve los parámetros y construye la gráfica <b>punto por punto</b>, como en papel: tabla de valores → ubicar puntos → unir con curva suave.</p>
   <div class="ctrl seg" id="gf"></div><div class="ctrl" id="gp"></div>
   <div class="grid2"><div id="cv"></div><div><div class="readout" id="gt"></div>
   <div class="row"><button class="go" id="gn" style="margin-top:0">SIGUIENTE PUNTO</button><button class="ghost" id="gc">UNIR CURVA</button><button class="ghost" id="gr">REINICIAR</button></div></div></div>
   <div class="readout" id="gi"></div>`;
  let fam='parabola', P={}, shown=0, curve=false;
  const gf=el.querySelector('#gf');
  Object.entries(F).forEach(([k,o])=>{const b=document.createElement('button');b.textContent=o.n;b.dataset.k=k;b.onclick=()=>{fam=k;setup();};gf.appendChild(b);});
  const {c,ctx}=makeCanvas(el.querySelector('#cv'),560,460);
  function setup(){
    [...gf.children].forEach(b=>b.classList.toggle('on',b.dataset.k===fam));
    const o=F[fam]; P={}; const gp=el.querySelector('#gp'); gp.innerHTML='';
    Object.entries(o.p).forEach(([k,[mn,mx,st,df]])=>{ P[k]=df; const l=document.createElement('label'); l.innerHTML=`${k} = <input type="range" min="${mn}" max="${mx}" step="${st}" value="${df}"><b>${df}</b>`; const i=l.querySelector('input'); i.oninput=()=>{ let v=+i.value; if(k==='a'&&v===0) v=st; P[k]=v; l.querySelector('b').textContent=v; draw(); }; gp.appendChild(l); });
    shown=0; curve=false; draw();
  }
  function draw(){
    const o=F[fam]; const w=o.win; const v=View(ctx,c.W,c.H,[w[0],w[1]],[w[2],w[3]]); v.clear(); v.axes();
    const xs=o.xs(P);
    if(curve) v.fn(x=>o.f(x,P), w[0], w[1], '#0b0b0b', 2.5);
    xs.slice(0,shown).forEach(x=>{ const y=o.f(x,P); if(!isFinite(y)) return; ctx.fillStyle='#e10600'; ctx.beginPath(); ctx.arc(v.X(x),v.Y(y),5,0,2*PI); ctx.fill(); ctx.fillStyle='#0b0b0b'; ctx.font='11px JetBrains Mono'; ctx.fillText(`(${+x.toFixed(2)}, ${+y.toFixed(2)})`, v.X(x)+7, v.Y(y)-7); });
    const rows = xs.map((x,i)=>{ const y=o.f(x,P); return `<tr style="${i<shown?'':'opacity:.25'}"><td>\\(${fx(x)}\\)</td><td>\\(${o.sub(x,P)}\\)</td><td>${i<shown? (isFinite(y)?(+y.toFixed(3)):'no existe'):'?'}</td></tr>`; }).join('');
    el.querySelector('#gt').innerHTML = `<div style="margin-bottom:6px">\\(${o.tex(P)}\\)</div><table class="t"><tr><th>x</th><th>reemplazo</th><th>y</th></tr>${rows}</table>`;
    el.querySelector('#gi').innerHTML = `<b>LECTURA:</b> ${o.info(P)} ${shown<xs.length?'<br><span class="small">Pulsa SIGUIENTE PUNTO para calcular y ubicar el próximo.</span>':(!curve?'<br><span class="small">Todos los puntos listos: pulsa UNIR CURVA.</span>':'')}`;
    typeset(el.querySelector('#gt'));
  }
  el.querySelector('#gn').onclick=()=>{ if(shown<F[fam].xs(P).length){shown++;draw();} };
  el.querySelector('#gc').onclick=()=>{ shown=F[fam].xs(P).length; curve=true; draw(); };
  el.querySelector('#gr').onclick=()=>{ shown=0; curve=false; draw(); };
  setup();
};

/* --- Lab: dibujar una región paso a paso --- */
LABS.region = (el) => {
  const sq=Math.sqrt;
  const P = [
    { n:'Área: y = x² · y = 2x', win:[-1.2,3.2,-1,5.5],
      curves:[{t:'fx',f:x=>x*x,a:-1.2,b:2.4,lab:'y = x²',pts:[[-1,1],[0,0],[1,1],[2,4]]},{t:'fx',f:x=>2*x,a:-0.5,b:2.7,lab:'y = 2x',pts:[[0,0],[1,2],[2,4]]}],
      cuts:[[0,0],[2,4]], reg:{m:'x',a:0,b:2,top:x=>2*x,bot:x=>x*x}, rect:1, axis:null,
      steps:['Identifico: y = x² es una parábola (U con vértice en el origen); y = 2x es una recta que pasa por el origen con pendiente 2.',
        'Tabla de y = x²: (−1,1), (0,0), (1,1), (2,4). Ubico y uno con curva suave.',
        'Tabla de y = 2x: (0,0), (1,2), (2,4). Dos puntos bastan para una recta.',
        'Cortes algebraicos: x² = 2x → x(x − 2) = 0 → x = 0 y x = 2. Puntos (0, 0) y (2, 4).',
        'Región encerrada: entre los dos cortes. Punto de prueba x = 1: recta 2 > parábola 1 → la recta va ARRIBA.',
        'Rectángulo vertical: alto = 2x − x², ancho dx. Área = ∫₀² (2x − x²) dx.']},
    { n:'Área: x = y² · y = x − 2', win:[-0.8,5,-2.4,3],
      curves:[{t:'xy',g:y=>y*y,c:-2.2,d:2.3,lab:'x = y²',pts:[[0,0],[1,1],[1,-1],[4,2],[4,-2]]},{t:'fx',f:x=>x-2,a:-0.2,b:5,lab:'y = x − 2',pts:[[2,0],[0,-2],[4,2]]}],
      cuts:[[1,-1],[4,2]], reg:{m:'y',a:-1,b:2,right:y=>y+2,left:y=>y*y}, rect:0.5, axis:null,
      steps:['Identifico: x = y² es parábola ACOSTADA (abre a la derecha). y = x − 2 es recta; despejada: x = y + 2.',
        'Tabla de x = y² eligiendo y: y = 0 → x = 0; y = ±1 → x = 1; y = ±2 → x = 4.',
        'Tabla de la recta: (0,−2), (2,0), (4,2).',
        'Cortes: y² = y + 2 → (y − 2)(y + 1) = 0 → y = 2, y = −1. Puntos (4, 2) y (1, −1).',
        'Región: entre la parábola (izquierda) y la recta (derecha). Prueba y = 0: recta x = 2 > parábola x = 0.',
        'Rectángulo HORIZONTAL (dy): largo = (y + 2) − y². Área = ∫₋₁² (y + 2 − y²) dy. En dx habría que partir en x = 1.']},
    { n:'Disco: y = √x, y = 0, x = 4 · eje x', win:[-0.6,5,-2.6,2.8],
      curves:[{t:'fx',f:x=>sq(x),a:0,b:4.8,lab:'y = √x',pts:[[0,0],[1,1],[4,2]]},{t:'vl',x:4,lab:'x = 4'}],
      cuts:[[0,0],[4,2],[4,0]], reg:{m:'x',a:0,b:4,top:x=>sq(x),bot:x=>0}, rect:2, axis:{t:'h',v:0},
      steps:['Identifico: y = √x (media parábola acostada, solo x ≥ 0); y = 0 es el eje x; x = 4 es recta vertical.',
        'Tabla de y = √x con raíces exactas: (0,0), (1,1), (4,2).',
        'Dibujo la recta vertical x = 4.',
        'Cortes: √x con y = 0 → (0,0); √x con x = 4 → (4,2); x = 4 con y = 0 → (4,0).',
        'Región: bajo la raíz, sobre el eje x, a la izquierda de x = 4.',
        'Rectángulo vertical, PERPENDICULAR al eje x → al girar es un DISCO de radio R = √x.',
        'Eje de giro: y = 0 (punteado). Reflejo la región abajo. V = π∫₀⁴ (√x)² dx = 8π.']},
    { n:'Cascarón: y = 4 − x², 1er cuadrante · eje y', win:[-2.6,2.8,-0.6,4.8],
      curves:[{t:'fx',f:x=>4-x*x,a:-0.3,b:2.3,lab:'y = 4 − x²',pts:[[0,4],[1,3],[2,0]]}],
      cuts:[[0,4],[2,0]], reg:{m:'x',a:0,b:2,top:x=>4-x*x,bot:x=>0}, rect:1, axis:{t:'v',v:0},
      steps:['Identifico: y = 4 − x² es parábola que abre hacia ABAJO con vértice (0, 4). "Primer cuadrante" = x ≥ 0, y ≥ 0.',
        'Tabla: (0,4), (1,3), (2,0). Cortes con x: 4 − x² = 0 → x = ±2; me quedo con x = 2.',
        '(Las otras fronteras son los ejes.)',
        'Esquinas de la región: (0,0), (2,0), (0,4).',
        'Región: bajo la parábola en el primer cuadrante.',
        'Rectángulo vertical, PARALELO al eje y → CASCARÓN: radio = x, altura = 4 − x².',
        'Eje de giro: x = 0. V = 2π∫₀² x(4 − x²) dx = 8π. (Por discos daría lo mismo con dy.)']},
    { n:'Arandela: y = x · y = x² · eje y = 2', win:[-0.5,1.6,-0.4,4.4],
      curves:[{t:'fx',f:x=>x,a:-0.3,b:1.5,lab:'y = x',pts:[[0,0],[1,1]]},{t:'fx',f:x=>x*x,a:-0.3,b:1.4,lab:'y = x²',pts:[[0,0],[0.5,0.25],[1,1]]}],
      cuts:[[0,0],[1,1]], reg:{m:'x',a:0,b:1,top:x=>x,bot:x=>x*x}, rect:0.5, axis:{t:'h',v:2},
      steps:['Identifico: y = x recta; y = x² parábola.',
        'Tabla de y = x: (0,0), (1,1).',
        'Tabla de y = x²: (0,0), (0.5, 0.25), (1,1).',
        'Cortes: x = x² → x(x − 1) = 0 → x = 0, 1.',
        'Región: prueba x = 0.5: recta 0.5 > parábola 0.25 → arriba la recta.',
        'Rectángulo vertical, PERPENDICULAR al eje horizontal → ARANDELA.',
        'Eje y = 2 está ENCIMA: R = 2 − x² (a la curva lejana, la de abajo), r = 2 − x. V = π∫₀¹[(2 − x²)² − (2 − x)²]dx = 8π/15.']},
    { n:'Cascarón: y = 1/x, x = 1, x = 4, y = 0 · eje y', win:[-4.6,4.8,-0.4,1.6],
      curves:[{t:'fx',f:x=>1/x,a:0.6,b:4.7,lab:'y = 1/x',pts:[[1,1],[2,0.5],[4,0.25]]},{t:'vl',x:1,lab:'x = 1'},{t:'vl',x:4,lab:'x = 4'}],
      cuts:[[1,1],[4,0.25],[1,0],[4,0]], reg:{m:'x',a:1,b:4,top:x=>1/x,bot:x=>0}, rect:2.5, axis:{t:'v',v:0},
      steps:['Identifico: y = 1/x hipérbola (rama positiva); x = 1 y x = 4 rectas verticales; y = 0 eje x.',
        'Tabla de 1/x: (1,1), (2,0.5), (4,0.25).',
        'Dibujo las verticales x = 1 y x = 4.',
        'Esquinas: (1,0), (1,1), (4,0.25), (4,0).',
        'Región: bajo 1/x entre x = 1 y x = 4.',
        'Rectángulo vertical, PARALELO al eje y → CASCARÓN: radio x, altura 1/x.',
        'Eje x = 0 (eje y). V = 2π∫₁⁴ x·(1/x) dx = 6π.']},
  ];
  el.innerHTML = `<p>Protocolo de dibujo aplicado a ejercicios del taller. Avanza paso a paso y hazlo en paralelo en tu cuaderno.</p>
   <div class="ctrl seg" id="rp"></div><div id="cv"></div>
   <div class="row"><button class="go" id="rn" style="margin-top:0">SIGUIENTE PASO</button><button class="ghost" id="rb">ATRÁS</button><button class="ghost" id="rr">REINICIAR</button><span class="mono small" id="rc"></span></div>
   <div class="readout" id="ro"></div>`;
  let p=0, st=0; const rp=el.querySelector('#rp');
  P.forEach((o,i)=>{const b=document.createElement('button');b.textContent=o.n;b.onclick=()=>{p=i;st=0;draw();};rp.appendChild(b);});
  const {c,ctx}=makeCanvas(el.querySelector('#cv'),640,430);
  const COL=['#0b0b0b','#e10600','#555'];
  function draw(){
    [...rp.children].forEach((b,i)=>b.classList.toggle('on',i===p));
    const o=P[p], w=o.win; const v=View(ctx,c.W,c.H,[w[0],w[1]],[w[2],w[3]]); v.clear(); v.axes();
    const nC=o.curves.length; const S=o.steps.length;
    // which step draws what: 0 identify; 1..nC curves (step index i draws curve i-1 if exists); cuts at S-4? use semantic indices
    const iCuts=3, iReg=4, iRect=5, iAxis=6;
    const R2=o.reg;
    if(st>=iReg){
      const build=()=>{ ctx.beginPath(); const N=120;
        if(R2.m==='x'){ for(let i=0;i<=N;i++){const x=R2.a+(R2.b-R2.a)*i/N; const X=v.X(x),Y=v.Y(R2.top(x)); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y);} for(let i=N;i>=0;i--){const x=R2.a+(R2.b-R2.a)*i/N; ctx.lineTo(v.X(x),v.Y(R2.bot(x)));} }
        else { for(let i=0;i<=N;i++){const y=R2.a+(R2.b-R2.a)*i/N; const X=v.X(R2.right(y)),Y=v.Y(y); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y);} for(let i=N;i>=0;i--){const y=R2.a+(R2.b-R2.a)*i/N; ctx.lineTo(v.X(R2.left(y)),v.Y(y));} }
        ctx.closePath(); };
      build(); ctx.fillStyle='rgba(225,6,0,.16)'; ctx.fill();
      if(st>=iAxis && o.axis){ ctx.save(); if(o.axis.t==='h'){ ctx.translate(0, v.Y(o.axis.v)); ctx.scale(1,-1); ctx.translate(0,-v.Y(o.axis.v)); } else { ctx.translate(v.X(o.axis.v),0); ctx.scale(-1,1); ctx.translate(-v.X(o.axis.v),0); } build(); ctx.fillStyle='rgba(11,11,11,.08)'; ctx.fill(); ctx.restore(); }
    }
    o.curves.forEach((cu,i)=>{
      const on = st>=1+Math.min(i,1) && (i<2 || st>=2);
      if(!on) return; const col=COL[i%3];
      if(cu.t==='fx') v.fn(cu.f,cu.a,cu.b,col,2.5);
      else if(cu.t==='xy') v.param(cu.g,y=>y,cu.c,cu.d,col,2.5);
      else if(cu.t==='vl'){ ctx.save(); ctx.strokeStyle=col; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(v.X(cu.x),v.Y(w[2])); ctx.lineTo(v.X(cu.x),v.Y(w[3])); ctx.stroke(); ctx.restore(); }
      (cu.pts||[]).forEach(([x,y])=>{ ctx.fillStyle=col; ctx.beginPath(); ctx.arc(v.X(x),v.Y(y),3.5,0,2*PI); ctx.fill(); });
      ctx.fillStyle=col; ctx.font='bold 13px JetBrains Mono';
      const lp = cu.t==='vl' ? [cu.x, w[3]-(w[3]-w[2])*0.08] : (cu.pts&&cu.pts.length? cu.pts[cu.pts.length-1] : [0,0]);
      ctx.fillText(cu.lab, v.X(lp[0])+6, v.Y(lp[1])-6);
    });
    if(st>=iCuts){ o.cuts.forEach(([x,y])=>{ ctx.strokeStyle='#e10600'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(v.X(x),v.Y(y),7,0,2*PI); ctx.stroke(); ctx.fillStyle='#e10600'; ctx.font='bold 12px JetBrains Mono'; ctx.fillText(`(${x}, ${y})`, v.X(x)+9, v.Y(y)+16); }); }
    if(st>=iRect){ ctx.fillStyle='rgba(225,6,0,.85)';
      if(R2.m==='x'){ const x=o.rect, dw=(R2.b-R2.a)/30; const X1=v.X(x-dw/2),X2=v.X(x+dw/2); ctx.fillRect(X1,v.Y(R2.top(x)),Math.max(4,X2-X1),v.Y(R2.bot(x))-v.Y(R2.top(x))); ctx.fillStyle='#0b0b0b'; ctx.font='bold 12px JetBrains Mono'; ctx.fillText('dx',v.X(x)-6,v.Y(R2.bot(x))+16); }
      else { const y=o.rect, dh=(R2.b-R2.a)/30; const Y1=v.Y(y+dh/2),Y2=v.Y(y-dh/2); ctx.fillRect(v.X(R2.left(y)),Y1,v.X(R2.right(y))-v.X(R2.left(y)),Math.max(4,Y2-Y1)); ctx.fillStyle='#0b0b0b'; ctx.font='bold 12px JetBrains Mono'; ctx.fillText('dy',v.X(R2.right(y))+6,v.Y(y)+4); }
    }
    if(st>=iAxis && o.axis){ ctx.save(); ctx.setLineDash([8,6]); ctx.strokeStyle='#e10600'; ctx.lineWidth=2.5; ctx.beginPath();
      if(o.axis.t==='h'){ ctx.moveTo(v.X(w[0]),v.Y(o.axis.v)); ctx.lineTo(v.X(w[1]),v.Y(o.axis.v)); } else { ctx.moveTo(v.X(o.axis.v),v.Y(w[2])); ctx.lineTo(v.X(o.axis.v),v.Y(w[3])); }
      ctx.stroke(); ctx.restore(); ctx.fillStyle='#e10600'; ctx.font='bold 12px JetBrains Mono';
      o.axis.t==='h' ? ctx.fillText('EJE y = '+o.axis.v, v.X(w[1])-95, v.Y(o.axis.v)-6) : ctx.fillText('EJE x = '+o.axis.v, v.X(o.axis.v)+6, v.Y(w[3])+14); }
    el.querySelector('#rc').textContent = `PASO ${st+1}/${S}`;
    el.querySelector('#ro').innerHTML = o.steps.slice(0,st+1).map((s,i)=>`<div style="padding:4px 0;${i===st?'font-weight:700':'color:#6b6b6b'}"><span class="mono" style="color:#e10600">P${String(i+1).padStart(2,'0')}</span> ${s}</div>`).join('');
  }
  el.querySelector('#rn').onclick=()=>{ if(st<P[p].steps.length-1){st++;draw();} };
  el.querySelector('#rb').onclick=()=>{ if(st>0){st--;draw();} };
  el.querySelector('#rr').onclick=()=>{ st=0; draw(); };
  draw();
};
