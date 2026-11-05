/* ============ SIMULADOR DE PRÁCTICA INFINITA (aritmética y álgebra básica) ============
   LABS.drill usa la clave L.drill de la sección para elegir un generador de DRILL.
   Cada generador recibe el nivel (1, 2 o 3) y devuelve { q: enunciado en TeX, a: respuesta, s: pasos en TeX }.
   La respuesta a puede ser un número o una fracción [numerador, denominador].
   Para agregar un tipo de ejercicio: crea DRILL.miTipo = lv => ({...}) y pon drill:'miTipo' en la sección. */
const DRILL = (()=>{
  const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
  const nz=(a,b)=>{ let v; do v=rnd(a,b); while(!v); return v; };
  const pick=a=>a[Math.floor(Math.random()*a.length)];
  const gcd=(a,b)=>{ a=Math.abs(a); b=Math.abs(b); while(b) [a,b]=[b,a%b]; return a||1; };
  const lcm=(a,b)=>Math.abs(a/gcd(a,b)*b);
  const P=v=>v<0?`(${v})`:`${v}`;              // número con paréntesis si es negativo
  const sg=v=>v<0?`-${-v}`:`+${v}`;             // término con signo
  const sg0=v=>v===0?'':sg(v);
  const cf=v=>v===1?'':v===-1?'-':`${v}`;
  const red=(n,d)=>{ if(d<0){n=-n;d=-d;} const g=gcd(n,d); return [n/g,d/g]; };
  const F=(n,d)=>{ [n,d]=red(n,d); return d===1?`${n}`:`${n<0?'-':''}\\frac{${Math.abs(n)}}{${d}}`; };
  const Fr=(n,d)=>`${n<0?'-':''}\\frac{${Math.abs(n)}}{${d}}`;          // fracción sin simplificar
  const fact=n=>{ const f={}; let p=2; while(n>1){ while(n%p===0){ f[p]=(f[p]||0)+1; n/=p; } p++; } return f; };
  const ftex=f=>Object.entries(f).map(([p,e])=>e>1?`${p}^{${e}}`:p).join('\\cdot ');
  const nf=v=>(+v.toFixed(6)).toString();
  const D={};

  D.numeros = lv=>{
    if(lv===1 || Math.random()<0.4){ const a=nz(-20,20), b=nz(-20,20);
      return {q:`|${a}|+|${b}|`, a:Math.abs(a)+Math.abs(b), s:[`|${a}|=${Math.abs(a)},\\ |${b}|=${Math.abs(b)}`, `${Math.abs(a)}+${Math.abs(b)}=${Math.abs(a)+Math.abs(b)}`]}; }
    if(lv===2){ const a=nz(-15,15), b=nz(-15,15);
      return {q:`\\text{Distancia entre }${a}\\text{ y }${b}`, a:Math.abs(a-b), s:[`|${a}-${P(b)}|=|${a-b}|`, `=${Math.abs(a-b)}`]}; }
    const a=nz(-30,30), b=nz(-30,30), c=nz(-30,30);
    return {q:`|${a}|-|${b}|+|${c}|`, a:Math.abs(a)-Math.abs(b)+Math.abs(c), s:[`${Math.abs(a)}-${Math.abs(b)}+${Math.abs(c)}`, `=${Math.abs(a)-Math.abs(b)+Math.abs(c)}`]};
  };

  D.suma = lv=>{
    if(lv===1){ const a=rnd(100,999), b=rnd(100,999); const add=Math.random()<0.5;
      const [x,y]=add?[a,b]:[Math.max(a,b),Math.min(a,b)];
      return {q:`${x}${add?'+':'-'}${y}`, a:add?x+y:x-y, s:[add?'Alinea a la derecha y suma columna por columna, llevando cuando pase de 9':'Alinea a la derecha y resta columna por columna, prestando cuando no alcance', `${x}${add?'+':'-'}${y}=${add?x+y:x-y}`, add?`\\text{Verifica estimando: }${Math.round(x/100)*100}+${Math.round(y/100)*100}\\approx${Math.round(x/100)*100+Math.round(y/100)*100}`:`\\text{Verifica: }${x-y}+${y}=${x}`]}; }
    const n = lv===2?2:4; const t=[nz(-25,25)]; const ops=[];
    for(let i=1;i<n;i++){ t.push(nz(-25,25)); ops.push(pick(['+','-'])); }
    let q=`${t[0]}`; ops.forEach((o,i)=>q+=`${o}${P(t[i+1])}`);
    const vals=[t[0], ...ops.map((o,i)=>o==='+'?t[i+1]:-t[i+1])];
    let s1=`${vals[0]}`; vals.slice(1).forEach(v=>s1+=sg(v));
    const pos=vals.filter(v=>v>0).reduce((a,b)=>a+b,0), neg=vals.filter(v=>v<0).reduce((a,b)=>a+b,0);
    const r=pos+neg;
    const st=[`\\text{Quita los dobles signos: }${s1}`]; if(pos&&neg) st.push(`\\text{Positivos: }${pos}\\quad\\text{Negativos: }${neg}`, `${pos}${sg(neg)}=${r}`); else st.push(`=${r}`);
    return {q, a:r, s:st};
  };

  D.mult = lv=>{
    if(lv===1){ const a=rnd(2,12), b=rnd(2,12);
      if(Math.random()<0.5) return {q:`${a}\\times${b}`, a:a*b, s:[`${a}\\times${b}=${a*b}`]};
      return {q:`${a*b}\\div${a}`, a:b, s:[`\\text{¿Qué número por }${a}\\text{ da }${a*b}?`, `${a}\\times${b}=${a*b}\\Rightarrow${b}`]}; }
    if(lv===2){ let a; do a=rnd(12,99); while(a%10===0); const b=rnd(3,9);
      if(Math.random()<0.6){ const d=Math.floor(a/10)*10, u=a%10;
        return {q:`${a}\\times${b}`, a:a*b, s:[`${a}=${d}+${u}`, `${d}\\times${b}=${d*b},\\quad ${u}\\times${b}=${u*b}`, `${d*b}+${u*b}=${a*b}`]}; }
      return {q:`${a*b}\\div${b}`, a:a, s:[`\\text{División larga: }${a*b}\\div${b}`, `\\text{Verifica: }${b}\\times${a}=${a*b}`, `=${a}`]}; }
    const x=nz(-9,9), y=nz(-9,9), z=nz(-6,6); const negs=[x,y,z].filter(v=>v<0).length;
    if(Math.random()<0.5) return {q:`${P(x)}${P(y)}${P(z)}`, a:x*y*z, s:[`\\text{Negativos: }${negs}\\ (${negs%2?'impar → −':'par → +'})`, `${Math.abs(x)}\\cdot${Math.abs(y)}\\cdot${Math.abs(z)}=${Math.abs(x*y*z)}`, `=${x*y*z}`]};
    return {q:`${x*y}\\div${P(y)}`, a:x, s:[`\\text{Signos: }${x*y<0?'−':'+'}\\text{ entre }${y<0?'−':'+'}\\Rightarrow${x<0?'−':'+'}`, `${Math.abs(x*y)}\\div${Math.abs(y)}=${Math.abs(x)}`, `=${x}`]};
  };

  D.jer = lv=>{
    const T = [
      ()=>{ const a=rnd(1,20), b=rnd(2,9), c=rnd(2,9); return {q:`${a}+${b}\\times${c}`, a:a+b*c, s:[`${b}\\times${c}=${b*c}`, `${a}+${b*c}=${a+b*c}`]}; },
      ()=>{ const c=rnd(2,9), k=rnd(2,9), a=rnd(10,40); return {q:`${a}-${c*k}\\div${c}`, a:a-k, s:[`${c*k}\\div${c}=${k}`, `${a}-${k}=${a-k}`]}; },
      ()=>{ const c=rnd(2,6), k=rnd(2,6), b=rnd(2,6); return {q:`${c*k}\\div${c}\\times${b}`, a:k*b, s:['\\text{Izquierda a derecha}', `${c*k}\\div${c}=${k}`, `${k}\\times${b}=${k*b}`]}; },
      ()=>{ const a=rnd(5,15), b=rnd(1,12), c=rnd(2,6), d=rnd(1,20); return {q:`(${a}-${b})\\times${c}+${d}`, a:(a-b)*c+d, s:[`${a}-${b}=${a-b}`, `${P(a-b)}\\times${c}=${(a-b)*c}`, `${(a-b)*c}+${d}=${(a-b)*c+d}`]}; },
      ()=>{ const a=rnd(2,9), b=rnd(2,9), c=rnd(2,9), d=rnd(2,9); return {q:`${a}\\times${b}-${c}\\times${d}`, a:a*b-c*d, s:[`${a}\\times${b}=${a*b},\\quad${c}\\times${d}=${c*d}`, `${a*b}-${c*d}=${a*b-c*d}`]}; },
      ()=>{ const a=rnd(1,9), b=rnd(2,5), c=rnd(1,9), d=rnd(1,9); const p=c-d; return {q:`${a}+${b}(${c}-${d})^2`, a:a+b*p*p, s:[`${c}-${d}=${p}`, `${P(p)}^2=${p*p}`, `${b}\\cdot${p*p}=${b*p*p}`, `${a}+${b*p*p}=${a+b*p*p}`]}; },
      ()=>{ const n=rnd(2,6); return {q:`-${n}^2+${P(-n)}^2`, a:0, s:[`-${n}^2=-${n*n}\\ \\text{(solo el ${n} se eleva)}`, `(-${n})^2=${n*n}`, `-${n*n}+${n*n}=0`]}; },
      ()=>{ const den=rnd(2,6), k=rnd(1,6), b=rnd(2,5), c=rnd(1,5), e=rnd(1,9); const top=den*k+b*c; return {q:`\\dfrac{${top}-${b}\\cdot${c}}{${den}}+${e}`, a:k+e, s:[`\\text{Numerador: }${b}\\cdot${c}=${b*c},\\ ${top}-${b*c}=${den*k}`, `\\frac{${den*k}}{${den}}=${k}`, `${k}+${e}=${k+e}`]}; },
      ()=>{ const e=rnd(2,4), a=e*rnd(1,3), b=rnd(2,9), d=rnd(1,12), c=rnd(1,9); const inner=b-d, mid=c-inner; return {q:`${a}[${c}-(${b}-${d})]\\div${e}`, a:a*mid/e, s:[`${b}-${d}=${inner}`, `${c}-${P(inner)}=${mid}`, `${a}\\cdot${P(mid)}=${a*mid}`, `${a*mid}\\div${e}=${a*mid/e}`]}; },
    ];
    const pool = lv===1?T.slice(0,3):lv===2?T.slice(0,6):T.slice(3);
    let r; do r=pick(pool)(); while(!Number.isInteger(r.a)); return r;
  };

  D.mcm = lv=>{
    const base = lv===1?[2,3,4,5,6,8,9,10,12]:lv===2?[6,8,9,10,12,14,15,16,18,20,24,30]:[12,18,24,28,30,36,40,42,45,48,54,60,72];
    let a=pick(base), b; do b=pick(base); while(b===a);
    const fa=fact(a), fb=fact(b); const g=gcd(a,b), l=lcm(a,b);
    const wantL = Math.random()<0.5;
    return {q:`\\text{${wantL?'MCM':'MCD'}}(${a},\\ ${b})`, a:wantL?l:g, s:[`${a}=${ftex(fa)||'1'},\\quad ${b}=${ftex(fb)||'1'}`,
      wantL?`\\text{Todos los primos con el exponente mayor}`:`\\text{Solo los primos comunes con el exponente menor}`,
      `\\text{${wantL?'MCM':'MCD'}}=${ftex(fact(wantL?l:g))||'1'}=${wantL?l:g}`]};
  };

  D.frac = lv=>{
    const ds = lv===1?[2,3,4,5,6,8,10]:[2,3,4,5,6,7,8,9,10,12];
    let b=pick(ds), d=pick(ds); let a=nz(1,b*(lv===3?2:1)-1)||1, c=nz(1,d-1)||1;
    if(lv===3){ if(Math.random()<0.5) a=-a; }
    const op = lv===1?pick(['+','-']):pick(['+','-','\\cdot','\\div']);
    const A=Fr(a,b), C=Fr(c,d);
    if(op==='+'||op==='-'){ const m=lcm(b,d); const na=a*(m/b), nc=c*(m/d); const n=op==='+'?na+nc:na-nc;
      return {q:`${A}${op}${C}`, a:[n,m], s:[b===d?`\\text{Mismo denominador: }${b}`:`\\text{MCM}(${b},${d})=${m}`, `${Fr(na,m)}${op}${Fr(nc,m)}`, `=${Fr(n,m)}${red(n,m)[1]!==m||red(n,m)[0]!==n?`=${F(n,m)}`:''}`]}; }
    if(op==='\\cdot'){ return {q:`${A}\\cdot${C}`, a:[a*c,b*d], s:['\\text{Arriba por arriba, abajo por abajo}', `${Fr(a*c,b*d)}`, `=${F(a*c,b*d)}`]}; }
    return {q:`${A}\\div${C}`, a:[a*d,b*c], s:['\\text{Invierte la segunda y multiplica}', `${A}\\cdot${Fr(d,c)}=${Fr(a*d,b*c)}`, `=${F(a*d,b*c)}`]};
  };

  D.dec = lv=>{
    const t = lv===1?rnd(0,1):lv===2?rnd(0,3):rnd(1,4);
    if(t===0){ const p=pick([10,20,25,50,5,30]), N=pick([40,60,80,120,150,200,240,300,360,500]); const r=p*N/100;
      return {q:`${p}\\%\\text{ de }${N}`, a:r, s:[`${p}\\%=\\frac{${p}}{100}=${nf(p/100)}`, `${nf(p/100)}\\times${N}=${nf(r)}`]}; }
    if(t===1){ const a=rnd(1,99)/10, b=rnd(1,99)/100; const r=+(a+b).toFixed(2);
      return {q:`${nf(a)}+${nf(b)}`, a:r, s:['\\text{Alinea las comas (completa con ceros)}', `${a.toFixed(2)}+${b.toFixed(2)}=${r.toFixed(2)}`]}; }
    if(t===2){ const a=rnd(2,9), b=rnd(2,9), da=rnd(1,2), db=rnd(1,2); const A=a/10**da, B=b/10**db; const r=+(A*B).toFixed(6);
      return {q:`${nf(A)}\\times${nf(B)}`, a:r, s:[`\\text{Sin comas: }${a}\\times${b}=${a*b}`, `\\text{Decimales: }${da}+${db}=${da+db}`, `=${nf(r)}`]}; }
    if(t===3){ const k=pick([2,4,5]), q=rnd(2,15), dv=k/10; const N=+(q*dv).toFixed(4);
      return {q:`${nf(N)}\\div${nf(dv)}`, a:q, s:['\\text{Corre la coma del divisor hasta que sea entero (y la del dividendo igual)}', `${nf(N*10)}\\div${k}=${q}`]}; }
    const b=pick([20,25,40,50,60,80]), p=pick([10,20,25,40,50,75,60,80]); const a=b*p/100; if(!Number.isInteger(a)) return D.dec(lv);
    return {q:`${a}\\text{ es qué \\% de }${b}?`, a:p, s:[`\\frac{${a}}{${b}}=${nf(a/b)}`, `${nf(a/b)}\\times100=${p}\\%`]};
  };

  D.prop = lv=>{
    const t = lv===1?0:lv===2?rnd(0,1):rnd(0,2);
    if(t===0){ const a=rnd(2,6), u=pick([500,800,1200,1500,2000,2500,3000]), c=rnd(7,15); const b=a*u;
      return {q:`${a}\\text{ unidades cuestan }${b}.\\ \\text{¿Cuánto cuestan }${c}?`, a:c*u, s:['\\text{Más unidades → más plata: directa}', `x=\\frac{${c}\\cdot${b}}{${a}}`, `=${c*u}`]}; }
    if(t===1){ const w=pick([2,3,4,6,8,12]), d=pick([3,4,6,8,10,12,15]); const tot=w*d; const ws=[1,2,3,4,5,6,8,10,12,15,16,20,24].filter(x=>x!==w&&tot%x===0); const w2=pick(ws);
      return {q:`${w}\\text{ obreros tardan }${d}\\text{ días. ¿Cuántos días tardan }${w2}?`, a:tot/w2, s:['\\text{Más obreros → menos días: inversa}', `${w}\\cdot${d}=${tot}`, `x=\\frac{${tot}}{${w2}}=${tot/w2}`]}; }
    const v=pick([18,36,54,72,90,108,144]);
    return {q:`${v}\\ \\tfrac{\\text{km}}{\\text{h}}\\ \\text{en}\\ \\tfrac{\\text{m}}{\\text{s}}`, a:v/3.6, s:[`${v}\\cdot\\frac{1000}{3600}`, `=\\frac{${v}}{3.6}=${nf(v/3.6)}`]};
  };

  D.pot = lv=>{
    const t = lv===1?rnd(0,1):lv===2?rnd(0,3):rnd(2,5);
    if(t===0){ const a=rnd(2,5), n=rnd(2,a<=3?5:3); return {q:`${a}^{${n}}`, a:a**n, s:[`${Array(n).fill(a).join('\\cdot')}=${a**n}`]}; }
    if(t===1){ const r=rnd(2,15); return {q:`\\sqrt{${r*r}}`, a:r, s:[`${r}^2=${r*r}\\Rightarrow\\sqrt{${r*r}}=${r}`]}; }
    if(t===2){ const a=rnd(2,4), n=rnd(2,4); const par=Math.random()<0.5; return par?{q:`(-${a})^{${n}}`, a:(-a)**n, s:[`\\text{Exponente ${n%2?'impar → −':'par → +'}}`, `${a}^{${n}}=${a**n}`, `=${(-a)**n}`]}:{q:`-${a}^{${n}}`, a:-(a**n), s:['\\text{Sin paréntesis: solo se eleva el número}', `-(${a}^{${n}})=-${a**n}`]}; }
    if(t===3){ const r=rnd(1,5); return {q:`\\sqrt[3]{${-(r**3)}}`, a:-r, s:[`(-${r})^3=${-(r**3)}`, `\\Rightarrow-${r}`]}; }
    if(t===4){ const a=rnd(2,10), b=rnd(2,4), n=rnd(2,3); return {q:`\\sqrt{${a*a}}+${b}^{${n}}`, a:a+b**n, s:[`\\sqrt{${a*a}}=${a}`, `${b}^{${n}}=${b**n}`, `${a}+${b**n}=${a+b**n}`]}; }
    const n=rnd(1,4); return {q:`2^{-${n}}`, a:[1,2**n], s:[`2^{-${n}}=\\frac{1}{2^{${n}}}`, `=\\frac{1}{${2**n}}`]};
  };

  D.alg = lv=>{
    const x=nz(-9,9);
    if(lv===1){ const a=nz(2,9), b=nz(-15,15); const c=a*x+b;
      return {q:`${a}x${sg(b)}=${c}`, a:x, s:[`${a}x=${c}${sg(-b)}=${c-b}`, `x=\\frac{${c-b}}{${a}}=${x}`, `\\text{Verifica: }${a}${P(x)}${sg(b)}=${c}`]}; }
    if(lv===2){ let a=nz(2,9), c=nz(1,9); if(a===c) a++; const b=nz(-15,15); const d=a*x+b-c*x;
      return {q:`${a}x${sg(b)}=${c===1?'':c}x${sg0(d)}`, a:x, s:[`${a}x-${c===1?'':c}x=${d}${sg(-b)}`, `${cf(a-c)}x=${d-b}`, `x=${x}`]}; }
    const a=nz(2,5), b=nz(-6,6), c=nz(1,4), d=nz(-6,6); let e=a*(x+b)-c*(x+d); if(a===c||e===0) return D.alg(lv);
    return {q:`${a}(x${sg(b)})=${c===1?'':c}(x${sg(d)})${sg(e)}`, a:x, s:[`${a}x${sg(a*b)}=${c===1?'':c}x${sg(c*d)}${sg(e)}`, `${a}x-${c===1?'':c}x=${c*d+e}${sg(-a*b)}`, `${cf(a-c)}x=${c*d+e-a*b}`, `x=${x}`]};
  };
  return D;
})();

function drillParse(s){
  s=String(s).trim().replace(/−/g,'-').replace(/,/g,'.').replace(/\s+/g,'').replace(/%$/,'').replace(/^x=/i,'');
  if(!s) return null;
  const m=s.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/); if(m){ const d=+m[2]; return d? +m[1]/d : null; }
  return /^-?\d*\.?\d+$/.test(s)? +s : null;
}

LABS.drill = (el, L) => {
  const gen = DRILL[L.drill]; if(!gen){ el.innerHTML='—'; return; }
  const key='calc-drill-'+L.drill; const st=store(key)||{best:0,ok:0,tot:0};
  let lv=1, cur=null, streak=0, answered=false;
  el.innerHTML = `<p>Ejercicios <b>infinitos</b> generados al azar. Resuelve en tu cabeza o en papel, escribe el resultado y comprueba. Si fallas, mira los pasos y haz otro igual: así se aprende, replicando.</p>
   <div class="ctrl seg dr-lv">${[1,2,3].map(n=>`<button data-lv="${n}" class="${n===1?'on':''}">Nivel ${n}</button>`).join('')}</div>
   <div class="dr-card"><div class="dr-q" id="drq"></div>
    <div class="dr-row"><input id="dra" class="dr-in" inputmode="decimal" autocomplete="off" placeholder="Tu respuesta (ej. −12, 3/4, 0.5)"><button class="dr-go" id="drc">Comprobar</button><button class="dr-sk" id="drs">Ver solución</button><button class="dr-nx" id="drn">Otro →</button></div>
    <div class="dr-fb" id="drf"></div><ol class="dr-steps" id="drp" hidden></ol></div>
   <div class="dr-stat" id="drt"></div>`;
  const $=s=>el.querySelector(s);
  const stat=()=>{ $('#drt').innerHTML=`Racha: <b>${streak}</b> · Mejor racha: <b>${st.best}</b> · Aciertos totales: <b>${st.ok}</b> de ${st.tot}`; };
  const ans=()=>Array.isArray(cur.a)?cur.a[0]/cur.a[1]:cur.a;
  const ansTex=()=>{ if(!Array.isArray(cur.a)) return String(+cur.a.toFixed(6)); let [n,d]=cur.a; const g=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b)[a,b]=[b,a%b];return a;}; if(d<0){n=-n;d=-d;} const k=g(n,d)||1; n/=k; d/=k; return d===1?String(n):`${n<0?'-':''}\\frac{${Math.abs(n)}}{${d}}`; };
  const showSteps=()=>{ const p=$('#drp'); p.innerHTML=cur.s.map(x=>`<li>\\(${x}\\)</li>`).join('')+`<li class="dr-res">Respuesta: \\(${ansTex()}\\)</li>`; p.hidden=false; typeset(p); };
  function next(){ cur=gen(lv); answered=false; $('#drq').innerHTML=`\\[${cur.q}\\]`; $('#dra').value=''; $('#drf').textContent=''; $('#drf').className='dr-fb'; $('#drp').hidden=true; typeset($('#drq')); stat(); setTimeout(()=>$('#dra').focus(),30); }
  function check(){
    const v=drillParse($('#dra').value); const fb=$('#drf');
    if(v===null){ fb.textContent='Escribe un número: entero, decimal (0.5) o fracción (3/4).'; fb.className='dr-fb warn'; return; }
    const ok=Math.abs(v-ans())<1e-6*Math.max(1,Math.abs(ans()));
    if(!answered){ st.tot++; }
    if(ok){ const raw=String($('#dra').value).replace(/−/g,'-'); const fm=raw.match(/^\s*-?(\d+)\s*\/\s*(\d+)\s*$/); const g=(a,b)=>{a=+a;b=+b;while(b)[a,b]=[b,a%b];return a;}; fb.innerHTML='✓ ¡Correcto!'+(fm&&g(fm[1],fm[2])>1?' Pero simplifícala: '+`\\(${ansTex()}\\)`:''); fb.className='dr-fb ok'; typeset(fb);
      if(!answered){ st.ok++; streak++; st.best=Math.max(st.best,streak); S.xp+=2; save(); hud(); if(streak%10===0) toast(`🔥 Racha de ${streak}`); }
      answered=true; store(key,st); stat(); setTimeout(next, 900); }
    else { fb.textContent='✗ No es. Revisa los pasos y vuelve a intentarlo, o pide otro.'; fb.className='dr-fb no'; if(!answered){ streak=0; } answered=true; store(key,st); stat(); showSteps(); }
  }
  el.querySelectorAll('.dr-lv button').forEach(b=>b.onclick=()=>{ lv=+b.dataset.lv; el.querySelectorAll('.dr-lv button').forEach(x=>x.classList.toggle('on',x===b)); next(); });
  $('#drc').onclick=check; $('#drn').onclick=next; $('#drs').onclick=()=>{ if(!answered){ st.tot++; streak=0; answered=true; store(key,st); stat(); } showSteps(); };
  $('#dra').addEventListener('keydown',e=>{ if(e.key==='Enter') check(); });
  next();
};
