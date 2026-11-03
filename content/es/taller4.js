/* ============ SOLUCIONARIO DEL TALLER 4 (temario del parcial) ============
   Cada ejercicio: n (número), g (grupo), q (enunciado), fig (dibujo), s (pasos explicados), r (resultado).
   Los figs se arman con ayudantes para no repetir código. */
const T4F=(()=>{
  const mx=(f,a,b)=>{ let m=0; for(let i=0;i<=60;i++){ const v=Math.abs(f(a+(b-a)*i/60)); if(isFinite(v)&&v>m) m=v; } return m||1; };
  return {
   vx:(f,a,b,o={})=>{ const M=mx(f,a,b), p=(b-Math.min(0,a))*.08; return {xr:[Math.min(0,a)-p,b+p],yr:[-M*1.18,M*1.18],fills:[{top:f,a,b,c:'blue'}],curves:[{f,a,b,c:'blue',lab:o.lab,lx:o.lx}],axis:{y:0,lab:'eje x'},mirror:true,disk:true,slice:{x:o.sx??a+(b-a)*.62,top:f,c:'red'}}; },
   vy:(g,c,d,o={})=>{ const M=mx(g,c,d), p=(d-Math.min(0,c))*.08; return {xr:[-M*1.25,M*1.25],yr:[Math.min(0,c)-p,d+p],fills:[{dir:'y',right:g,left:y=>0,a:c,b:d,c:'blue'}],ycurves:[{g,a:c,b:d,c:'blue',lab:o.lab,ly:o.ly??c+(d-c)*.75}],axis:{x:0,lab:'eje y'},mirror:true,disk:true,slice:{y:o.sy??c+(d-c)*.45,right:g,c:'red'}}; },
   wx:(t,b,a,c,o={})=>{ const k=o.k??0, M=Math.max(mx(t,a,c),Math.abs(k)), p=(c-Math.min(0,a))*.08, lo=k===0?-M*1.15:Math.min(0,k)-M*.1, hi=Math.max(M*1.15,k+M*.1);
     return {xr:[Math.min(0,a)-p,c+p],yr:[lo,hi],fills:[{top:t,bot:b,a,b:c,c:'blue'}],curves:[{f:t,a,b:c,c:'red',lab:o.lt,lx:o.ltx},{f:b,a,b:c,c:'ink',lab:o.lb,lx:o.lbx}],axis:{y:k,lab:o.al||'eje x'},mirror:k===0,washer:true,slice:{x:o.sx??a+(c-a)*.55,top:t,bot:b,c:'red'}}; },
   wy:(r,l,c,d,o={})=>{ const k=o.k??0, M=Math.max(mx(r,c,d),Math.abs(k)), p=(d-Math.min(0,c))*.08;
     return {xr:[Math.min(k,0)-M*.15,M*1.2],yr:[Math.min(0,c)-p,d+p],fills:[{dir:'y',right:r,left:l,a:c,b:d,c:'blue'}],ycurves:[{g:r,a:c,b:d,c:'red',lab:o.lr,ly:o.lry??c+(d-c)*.7},{g:l,a:c,b:d,c:'ink',lab:o.ll,ly:o.lly??c+(d-c)*.3}],axis:{x:k,lab:o.al||'eje y'},washer:true,slice:{y:o.sy??c+(d-c)*.5,right:r,left:l,c:'red'}}; },
   arc:(f,a,b,o={})=>{ let lo=Infinity,hi=-Infinity; for(let i=0;i<=60;i++){ const v=f(a+(b-a)*i/60); if(isFinite(v)){ lo=Math.min(lo,v); hi=Math.max(hi,v);} } lo=Math.min(lo,0); const p=(hi-lo)*.12||1, q=(b-Math.min(0,a))*.1;
     return {xr:[Math.min(0,a)-q,b+q],yr:[lo-p*.3,hi+p],curves:[{f,a:o.ca??Math.min(0,a),b:b+q,c:'ink',dash:true}],arc:{f,a,b,c:'red'}}; },
   arcP:(px,py,t0,t1,o={})=>{ let x0=Infinity,x1=-Infinity,y0=Infinity,y1=-Infinity; for(let i=0;i<=80;i++){ const t=t0+(t1-t0)*i/80, x=px(t), y=py(t); x0=Math.min(x0,x); x1=Math.max(x1,x); y0=Math.min(y0,y); y1=Math.max(y1,y);} const px_=(x1-x0)*.12||1, py_=(y1-y0)*.12||1;
     return {xr:[Math.min(0,x0)-px_,Math.max(0,x1)+px_],yr:[Math.min(0,y0)-py_,Math.max(0,y1)+py_],params:[{px,py,t0:o.T0??t0,t1:o.T1??t1,c:'ink'}],arc:{px,py,t0,t1,c:'red'}}; },
   sec:(t,b,a,c,shape,o={})=>{ const M=Math.max(Math.abs(T4F._m(t,a,c)),Math.abs(T4F._m(b,a,c))), q=(c-a)*.12;
     return {xr:[Math.min(0,a)-q,c+q*2],yr:[Math.min(0,-M*.15,...[0].map(()=>b(a+(c-a)/2)))-M*.15,M*1.35],fills:[{top:t,bot:b,a,b:c,c:'blue',hatch:true}],curves:[{f:t,a,b:c,c:'blue'},{f:b,a,b:c,c:'blue'}],section:{x:o.sx??a+(c-a)*.6,top:t,bot:b,c:'purple',shape}}; },
   _m:(f,a,b)=>{ let m=0; for(let i=0;i<=60;i++){ const v=f(a+(b-a)*i/60); if(isFinite(v)&&Math.abs(v)>Math.abs(m)) m=v; } return m; },
  };
})();
const sq2=x=>Math.sqrt(Math.max(0,x));
const T4GROUPS={df:'Integral definida y TFC (mismo nivel del taller)',ae:'Áreas bajo y entre curvas (mismo nivel del taller)',dx:'Discos alrededor del eje x (5.2 #1 a #10)',dy:'Discos alrededor del eje y (5.2 #11 a #17)',ar:'Arandelas (5.2 #18 a #22)',sec:'Secciones transversales (5.2 #23 a #27 y #32)',ej:'Ejes desplazados (5.2 #33 y #34)',lc:'Longitud de curvas y = f(x) (5.4 #1 a #6)',lp:'Longitud de paramétricas y rectas (5.4 #7 a #17)'};
const T4=[
 /* ---------- discos eje x ---------- */
 {n:'5.2 #1',g:'dx',q:R`\(y=x^2+1\), \(0\le x\le2\), eje x`,fig:T4F.vx(x=>x*x+1,0,2,{lab:'R = x² + 1',lx:.2}),
  s:[R`Rebanada vertical que gira en el eje x → disco de radio \(R=x^2+1\) (la altura de la curva).`,R`\(V=\pi\int_0^2(x^2+1)^2dx\). Expande: \((x^2+1)^2=x^4+2x^2+1\).`,R`\(\pi\left[\frac{x^5}{5}+\frac{2x^3}{3}+x\right]_0^2=\pi\left(\frac{32}{5}+\frac{16}{3}+2\right)=\pi\cdot\frac{96+80+30}{15}\).`],r:R`\(V=\frac{206\pi}{15}\approx43.14\) u³`},
 {n:'5.2 #2',g:'dx',q:R`\(y=-x^2+4x\), \(0\le x\le3\), eje x`,fig:T4F.vx(x=>4*x-x*x,0,3,{lab:'R = 4x − x²',lx:.2}),
  s:[R`\(R=4x-x^2\Rightarrow R^2=16x^2-8x^3+x^4\).`,R`\(V=\pi\left[\frac{16x^3}{3}-2x^4+\frac{x^5}{5}\right]_0^3\).`,R`En 3: \(\frac{16\cdot27}{3}-2\cdot81+\frac{243}{5}=144-162+48.6=30.6=\frac{153}{5}\).`],r:R`\(V=\frac{153\pi}{5}\approx96.13\) u³`},
 {n:'5.2 #3(a)',g:'dx',q:R`Región bajo \(y=4-x^2\) en el primer cuadrante, eje x`,fig:T4F.vx(x=>4-x*x,0,2,{lab:'R = 4 − x²',lx:.3}),
  s:[R`Cortes con x: \(4-x^2=0\Rightarrow x=2\). Disco con \(R=4-x^2\).`,R`\(R^2=16-8x^2+x^4\). \(V=\pi\left[16x-\frac{8x^3}{3}+\frac{x^5}{5}\right]_0^2=\pi\left(32-\frac{64}{3}+\frac{32}{5}\right)\).`,R`Denominador 15: \(\frac{480-320+96}{15}=\frac{256}{15}\).`],r:R`\(V=\frac{256\pi}{15}\approx53.62\) u³`},
 {n:'5.2 #3(b)',g:'dy',q:R`Misma región, alrededor del eje y`,fig:T4F.vy(y=>sq2(4-y),0,4,{lab:'x = √(4 − y)'}),
  s:[R`Eje vertical → rebanada horizontal. Despeja: \(y=4-x^2\Rightarrow x=\sqrt{4-y}\), y de 0 a 4.`,R`\(R^2=4-y\). \(V=\pi\int_0^4(4-y)dy=\pi\left[4y-\frac{y^2}{2}\right]_0^4=\pi(16-8)\).`],r:R`\(V=8\pi\approx25.13\) u³`},
 {n:'5.2 #4(a)',g:'dx',q:R`Región bajo \(y=4-2x\) en el primer cuadrante, eje x`,fig:T4F.vx(x=>4-2*x,0,2,{lab:'R = 4 − 2x',lx:.2}),
  s:[R`La recta corta el eje x en \(x=2\). \(R=4-2x\).`,R`\(V=\pi\int_0^2(16-16x+4x^2)dx=\pi\left(32-32+\frac{32}{3}\right)\).`,R`Comprobación: es un cono de radio 4 y altura 2: \(\frac13\pi\cdot16\cdot2\) ✓.`],r:R`\(V=\frac{32\pi}{3}\approx33.51\) u³`},
 {n:'5.2 #4(b)',g:'dy',q:R`Misma región, alrededor del eje y`,fig:T4F.vy(y=>(4-y)/2,0,4,{lab:'x = (4 − y)/2'}),
  s:[R`Despeja: \(x=\frac{4-y}{2}\), y de 0 a 4.`,R`\(V=\frac\pi4\int_0^4(4-y)^2dy=\frac\pi4\left[-\frac{(4-y)^3}{3}\right]_0^4=\frac\pi4\cdot\frac{64}{3}\).`,R`Cono de radio 2 y altura 4: \(\frac13\pi\cdot4\cdot4\) ✓.`],r:R`\(V=\frac{16\pi}{3}\approx16.76\) u³`},
 {n:'5.2 #5',g:'dx',q:R`\(y=\frac{x^2}{\pi}\), \(x=4\), \(y=0\), eje x`,fig:T4F.vx(x=>x*x/Math.PI,0,4,{lab:'y = x²/π',lx:1.2}),
  s:[R`\(R=\frac{x^2}{\pi}\Rightarrow R^2=\frac{x^4}{\pi^2}\).`,R`\(V=\pi\int_0^4\frac{x^4}{\pi^2}dx=\frac1\pi\cdot\frac{4^5}{5}\). (Un π de arriba se cancela con uno de abajo.)`],r:R`\(V=\frac{1024}{5\pi}\approx65.19\) u³`},
 {n:'5.2 #6',g:'dx',q:R`\(y=x^3\), \(x=3\), \(y=0\), eje x`,fig:T4F.vx(x=>x**3,0,3,{lab:'y = x³',lx:1.5}),
  s:[R`\(R=x^3\Rightarrow R^2=x^6\).`,R`\(V=\pi\left[\frac{x^7}{7}\right]_0^3=\frac{3^7\pi}{7}\).`],r:R`\(V=\frac{2187\pi}{7}\approx981.52\) u³`},
 {n:'5.2 #7',g:'dx',q:R`\(y=\frac1x\), \(x=2\), \(x=4\), \(y=0\), eje x`,fig:T4F.vx(x=>1/x,2,4,{lab:'y = 1/x',lx:2.2}),
  s:[R`\(R=\frac1x\Rightarrow R^2=x^{-2}\).`,R`\(V=\pi\int_2^4x^{-2}dx=\pi\left[-\frac1x\right]_2^4=\pi\left(-\frac14+\frac12\right)\).`],r:R`\(V=\frac\pi4\approx0.785\) u³`},
 {n:'5.2 #8',g:'dx',q:R`\(y=x^{3/2}\), \(y=0\), entre \(x=2\) y \(x=3\), eje x`,fig:T4F.vx(x=>x**1.5,2,3,{lab:'y = x^(3/2)',lx:2.1}),
  s:[R`\(R^2=(x^{3/2})^2=x^3\).`,R`\(V=\pi\left[\frac{x^4}{4}\right]_2^3=\pi\cdot\frac{81-16}{4}\).`],r:R`\(V=\frac{65\pi}{4}\approx51.05\) u³`},
 {n:'5.2 #9',g:'dx',q:R`\(y=\sqrt{9-x^2}\), \(y=0\), entre \(x=-2\) y \(x=3\), eje x`,fig:T4F.vx(x=>sq2(9-x*x),-2,3,{lab:'√(9 − x²)',lx:-1.5}),
  s:[R`Semicírculo de radio 3; solo de −2 a 3. \(R^2=9-x^2\) (la raíz desaparece).`,R`\(V=\pi\left[9x-\frac{x^3}{3}\right]_{-2}^3\). En 3: \(27-9=18\). En −2: \(-18+\frac83=-\frac{46}{3}\).`,R`\(V=\pi\left(18+\frac{46}{3}\right)=\pi\cdot\frac{100}{3}\).`],r:R`\(V=\frac{100\pi}{3}\approx104.72\) u³`},
 {n:'5.2 #10',g:'dx',q:R`\(y=x^{2/3}\), \(y=0\), entre \(x=1\) y \(x=27\), eje x`,fig:T4F.vx(x=>x**(2/3),1,27,{lab:'y = x^(2/3)',lx:4}),
  s:[R`\(R^2=x^{4/3}\). \(\int x^{4/3}dx=\frac{x^{7/3}}{7/3}=\frac37x^{7/3}\).`,R`\(27^{7/3}=(\sqrt[3]{27})^7=3^7=2187\); \(1^{7/3}=1\).`,R`\(V=\frac{3\pi}{7}(2187-1)=\frac{3\cdot2186\pi}{7}\).`],r:R`\(V=\frac{6558\pi}{7}\approx2943.2\) u³`},
 /* ---------- discos eje y ---------- */
 {n:'5.2 #11',g:'dy',q:R`\(x=y^2\), \(x=0\), \(y=3\), eje y`,fig:T4F.vy(y=>y*y,0,3,{lab:'x = y²'}),
  s:[R`Rebanada horizontal: \(R=x=y^2\), y de 0 a 3.`,R`\(V=\pi\int_0^3y^4dy=\pi\cdot\frac{3^5}{5}\).`],r:R`\(V=\frac{243\pi}{5}\approx152.68\) u³`},
 {n:'5.2 #12',g:'dy',q:R`\(x=\frac2y\), \(y=2\), \(y=6\), \(x=0\), eje y`,fig:T4F.vy(y=>2/y,2,6,{lab:'x = 2/y'}),
  s:[R`\(R=\frac2y\Rightarrow R^2=\frac4{y^2}=4y^{-2}\).`,R`\(V=4\pi\left[-\frac1y\right]_2^6=4\pi\left(-\frac16+\frac12\right)=4\pi\cdot\frac13\).`],r:R`\(V=\frac{4\pi}{3}\approx4.19\) u³`},
 {n:'5.2 #13',g:'dy',q:R`\(x=2\sqrt y\), \(y=4\), \(x=0\), eje y`,fig:T4F.vy(y=>2*sq2(y),0,4,{lab:'x = 2√y'}),
  s:[R`\(R=2\sqrt y\Rightarrow R^2=4y\).`,R`\(V=\pi\int_0^44y\,dy=\pi\left[2y^2\right]_0^4=32\pi\).`],r:R`\(V=32\pi\approx100.53\) u³`},
 {n:'5.2 #14',g:'dy',q:R`\(x=y^{2/3}\), \(y=27\), \(x=0\), eje y`,fig:T4F.vy(y=>y**(2/3),0,27,{lab:'x = y^(2/3)'}),
  s:[R`\(R^2=y^{4/3}\). \(\int_0^{27}y^{4/3}dy=\frac37\cdot27^{7/3}=\frac37\cdot2187\).`],r:R`\(V=\frac{6561\pi}{7}\approx2944.6\) u³`},
 {n:'5.2 #15',g:'dy',q:R`\(x=y^{3/2}\), \(y=9\), \(x=0\), eje y`,fig:T4F.vy(y=>y**1.5,0,9,{lab:'x = y^(3/2)'}),
  s:[R`\(R^2=y^3\).`,R`\(V=\pi\left[\frac{y^4}{4}\right]_0^9=\frac{6561\pi}{4}\).`],r:R`\(V=\frac{6561\pi}{4}\approx5153.0\) u³`},
 {n:'5.2 #16',g:'dy',q:R`\(x=\sqrt{4-y^2}\), \(x=0\), eje y`,fig:T4F.vy(y=>sq2(4-y*y),-2,2,{lab:'x = √(4 − y²)'}),
  s:[R`Es la mitad derecha de un círculo de radio 2; y va de −2 a 2. \(R^2=4-y^2\).`,R`\(V=\pi\int_{-2}^2(4-y^2)dy=2\pi\left(8-\frac83\right)=\frac{32\pi}{3}\).`,R`Es una esfera de radio 2: \(\frac43\pi\cdot8\) ✓.`],r:R`\(V=\frac{32\pi}{3}\approx33.51\) u³`},
 {n:'5.2 #17',g:'dy',q:R`Mitad superior de la elipse \(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\), girada en el eje x (esferoide alargado)`,fig:T4F.vx(x=>2*sq2(1-x*x/9),-3,3,{lab:'a = 3, b = 2',lx:-2.6}),
  s:[R`Despeja: \(y^2=b^2\left(1-\frac{x^2}{a^2}\right)\). Ese es \(R^2\), x de −a a a.`,R`\(V=\pi b^2\int_{-a}^a\left(1-\frac{x^2}{a^2}\right)dx\) \(=\pi b^2\left[x-\frac{x^3}{3a^2}\right]_{-a}^a\) \(=\pi b^2\left(2a-\frac{2a}{3}\right)\).`,R`Si a = b = r sale la esfera \(\frac43\pi r^3\) ✓.`],r:R`\(V=\frac43\pi ab^2\)`},
 /* ---------- arandelas ---------- */
 {n:'5.2 #18',g:'ar',q:R`Entre \(y=6x\) y \(y=6x^2\), eje x`,fig:T4F.wx(x=>6*x,x=>6*x*x,0,1,{lt:'R = 6x',ltx:.2,lb:'r = 6x²',lbx:.8}),
  s:[R`Cortes: \(6x=6x^2\Rightarrow x=0,1\). En \(x=\frac12\): \(3>1.5\) → lejana \(6x\).`,R`\(V=\pi\int_0^1(36x^2-36x^4)dx=36\pi\left(\frac13-\frac15\right)=36\pi\cdot\frac{2}{15}\).`],r:R`\(V=\frac{24\pi}{5}\approx15.08\) u³`},
 {n:'5.2 #19',g:'ar',q:R`Entre \(x-2y=0\) y \(y^2=4x\), eje x`,fig:T4F.wx(x=>2*sq2(x),x=>x/2,0,16,{lt:'R = 2√x',ltx:2,lb:'r = x/2',lbx:11}),
  s:[R`Despeja y: \(y=\frac x2\) y \(y=2\sqrt x\). Cortes: \(\frac{x^2}{4}=4x\Rightarrow x=0,16\).`,R`En \(x=4\): \(4>2\) → \(R=2\sqrt x\), \(r=\frac x2\).`,R`\(V=\pi\int_0^{16}\left(4x-\frac{x^2}{4}\right)dx\) \(=\pi\left[2x^2-\frac{x^3}{12}\right]_0^{16}\) \(=\pi\left(512-\frac{1024}{3}\right)\).`],r:R`\(V=\frac{512\pi}{3}\approx536.17\) u³`},
 {n:'5.2 #20',g:'ar',q:R`Casquete esférico: región del primer cuadrante bajo \(x^2+y^2=r^2\), entre \(x=r-h\) y \(x=r\), eje x`,fig:T4F.vx(x=>sq2(9-x*x),2,3,{lab:'r = 3, h = 1',lx:2.05}),
  s:[R`\(R^2=r^2-x^2\), x de \(r-h\) a \(r\).`,R`\(V=\pi\left[r^2x-\frac{x^3}{3}\right]_{r-h}^r\). Desarrollando queda \(\pi h^2\left(r-\frac h3\right)\).`,R`Ejemplo r = 3, h = 1: \(\pi\cdot1\cdot\frac83\approx8.38\).`],r:R`\(V=\pi h^2\left(r-\frac h3\right)\)`},
 {n:'5.2 #21',g:'ar',q:R`Entre \(y=4x\) y \(y=4x^2\), eje y`,fig:T4F.wy(y=>sq2(y)/2,y=>y/4,0,4,{lr:'R = √y/2',ll:'r = y/4'}),
  s:[R`Eje y → dy. Despeja: \(x=\frac y4\) y \(x=\frac{\sqrt y}{2}\). Cortes en y = 0 y y = 4.`,R`En \(y=1\): \(\frac12>\frac14\) → \(R=\frac{\sqrt y}{2}\), \(r=\frac y4\).`,R`\(V=\pi\int_0^4\left(\frac y4-\frac{y^2}{16}\right)dy=\pi\left(2-\frac43\right)\).`],r:R`\(V=\frac{2\pi}{3}\approx2.09\) u³`},
 {n:'5.2 #22',g:'ar',q:R`Alrededor de \(y=2\): región del primer cuadrante entre \(3x^2-16y+48=0\), \(x^2-16y+80=0\) y el eje y`,fig:T4F.wx(x=>x*x/16+5,x=>3*x*x/16+3,0,4,{k:2,al:'y = 2',lt:'y = x²/16 + 5',ltx:.2,lb:'y = 3x²/16 + 3',lbx:2.4}),
  s:[R`Despeja y: \(y=\frac{3x^2}{16}+3\) y \(y=\frac{x^2}{16}+5\). Cortes: \(\frac{2x^2}{16}=2\Rightarrow x=4\) (primer cuadrante).`,R`El eje \(y=2\) está abajo; la lejana es la de arriba: \(R=\frac{x^2}{16}+3\), \(r=\frac{3x^2}{16}+1\).`,R`\(R^2-r^2=\left(\frac{x^4}{256}+\frac{6x^2}{16}+9\right)-\left(\frac{9x^4}{256}+\frac{6x^2}{16}+1\right)=8-\frac{x^4}{32}\).`,R`\(V=\pi\left[8x-\frac{x^5}{160}\right]_0^4=\pi\left(32-\frac{32}{5}\right)\).`],r:R`\(V=\frac{128\pi}{5}\approx80.42\) u³`},
 /* ---------- secciones ---------- */
 {n:'5.2 #23',g:'sec',q:R`Base \(x^2+y^2\le4\); secciones ⟂ al eje x: cuadrados`,fig:T4F.sec(x=>sq2(4-x*x),x=>-sq2(4-x*x),-2,2,'sq'),
  s:[R`Lado: \(s=2\sqrt{4-x^2}\Rightarrow A=s^2=4(4-x^2)\).`,R`\(V=\int_{-2}^24(4-x^2)dx=8\int_0^2(4-x^2)dx=8\left(8-\frac83\right)\).`],r:R`\(V=\frac{128}{3}\approx42.67\) u³`},
 {n:'5.2 #24',g:'sec',q:R`Misma base; secciones: triángulos isósceles de altura 4`,fig:T4F.sec(x=>sq2(4-x*x),x=>-sq2(4-x*x),-2,2,'tri'),
  s:[R`\(A=\frac12\cdot s\cdot4=2s=4\sqrt{4-x^2}\).`,R`\(V=4\int_{-2}^2\sqrt{4-x^2}dx\). La integral es el área de un semicírculo de radio 2: \(2\pi\).`],r:R`\(V=8\pi\approx25.13\) u³`},
 {n:'5.2 #25',g:'sec',q:R`Base bajo \(y=\sqrt{\cos x}\), \(-\frac\pi2\le x\le\frac\pi2\); cuadrados`,fig:T4F.sec(x=>sq2(Math.cos(x)),x=>0,-Math.PI/2,Math.PI/2,'sq'),
  s:[R`\(s=\sqrt{\cos x}\Rightarrow A=\cos x\).`,R`\(V=\int_{-\pi/2}^{\pi/2}\cos x\,dx=\sin\frac\pi2-\sin\left(-\frac\pi2\right)=1+1\).`],r:R`\(V=2\) u³`},
 {n:'5.2 #26',g:'sec',q:R`Base entre \(y=1-x^2\) y \(y=1-x^4\); cuadrados ⟂ al eje x`,fig:T4F.sec(x=>1-x**4,x=>1-x*x,-1,1,'sq'),
  s:[R`Cortes en \(x=0,\pm1\). Para \(|x|<1\): \(x^4<x^2\) → arriba \(1-x^4\). \(s=x^2-x^4\).`,R`\(A=x^4-2x^6+x^8\). \(V=2\left(\frac15-\frac27+\frac19\right)=2\cdot\frac{63-90+35}{315}\).`],r:R`\(V=\frac{16}{315}\approx0.051\) u³`},
 {n:'5.2 #27',g:'sec',q:R`Octante del sólido común a dos cilindros de radio 1 con ejes perpendiculares (secciones horizontales cuadradas)`,
  s:[R`A la altura y, cada cilindro da un ancho \(\sqrt{1-y^2}\): la sección es un cuadrado de lado \(\sqrt{1-y^2}\).`,R`\(A(y)=1-y^2\). \(V=\int_0^1(1-y^2)dy=1-\frac13\).`,R`El sólido completo (8 octantes) mide \(\frac{16}{3}\); para radio r: \(\frac{16r^3}{3}\).`],r:R`\(V=\frac23\) u³`},
 {n:'5.2 #32',g:'sec',q:R`Base entre \(y=\sqrt x\) y \(y=x^2\); secciones: semicírculos con diámetro en la base`,fig:T4F.sec(x=>sq2(x),x=>x*x,0,1,'semi'),
  s:[R`Diámetro \(s=\sqrt x-x^2\). Área de semicírculo \(\frac\pi8s^2\).`,R`\(s^2=x-2x^{5/2}+x^4\). \(\int_0^1s^2dx=\frac12-\frac47+\frac15=\frac{9}{70}\).`,R`\(V=\frac\pi8\cdot\frac{9}{70}\).`],r:R`\(V=\frac{9\pi}{560}\approx0.050\) u³`},
 /* ---------- ejes desplazados ---------- */
 {n:'5.2 #33(a)',g:'ej',q:R`Región entre \(y^2=x^3\), \(x=4\), \(y=0\), alrededor de \(x=4\)`,fig:T4F.wy(y=>4,y=>y**(2/3),0,8,{k:4,al:'x = 4',lr:'',ll:'x = y^(2/3)'}),
  s:[R`\(y=x^{3/2}\Rightarrow x=y^{2/3}\); con \(x=4\): \(y=8\). Eje vertical → dy.`,R`Rebanada de \(x=y^{2/3}\) a \(x=4\): toca el eje → disco con \(R=4-y^{2/3}\).`,R`\(V=\pi\int_0^8\left(16-8y^{2/3}+y^{4/3}\right)dy\) \(=\pi\left[16y-\frac{24}{5}y^{5/3}+\frac37y^{7/3}\right]_0^8\) \(=\pi\left(128-\frac{768}{5}+\frac{384}{7}\right)\) \(=\pi\cdot\frac{4480-5376+1920}{35}\).`],r:R`\(V=\frac{1024\pi}{35}\approx91.91\) u³`},
 {n:'5.2 #33(b)',g:'ej',q:R`Misma región, alrededor de \(y=8\)`,fig:T4F.wx(x=>x**1.5,x=>0,0,4,{k:8,al:'y = 8',lt:'y = x^(3/2)',ltx:1.2}),
  s:[R`Eje \(y=8\) arriba. Rebanada vertical de 0 a \(x^{3/2}\): lejana y = 0 → \(R=8\); cercana la curva → \(r=8-x^{3/2}\).`,R`\(R^2-r^2=64-(64-16x^{3/2}+x^3)=16x^{3/2}-x^3\).`,R`\(V=\pi\left[\frac{32}{5}x^{5/2}-\frac{x^4}{4}\right]_0^4=\pi\left(\frac{1024}{5}-64\right)\).`],r:R`\(V=\frac{704\pi}{5}\approx442.34\) u³`},
 {n:'5.2 #34(a)',g:'ej',q:R`Región entre \(y^2=x^3\), \(y=8\), \(x=0\), alrededor de \(x=4\)`,fig:T4F.wy(y=>y**(2/3),y=>0,0,8,{k:4,al:'x = 4',lr:'x = y^(2/3)',ll:''}),
  s:[R`Región entre el eje y y la curva \(x=y^{2/3}\), de y = 0 a 8. Eje \(x=4\) a la derecha.`,R`Lejana \(x=0\) → \(R=4\); cercana la curva → \(r=4-y^{2/3}\).`,R`\(R^2-r^2=8y^{2/3}-y^{4/3}\). \(V=\pi\left[\frac{24}{5}y^{5/3}-\frac37y^{7/3}\right]_0^8=\pi\left(\frac{768}{5}-\frac{384}{7}\right)\).`],r:R`\(V=\frac{3456\pi}{35}\approx310.21\) u³`},
 {n:'5.2 #34(b)',g:'ej',q:R`Misma región, alrededor de \(y=8\)`,fig:T4F.wx(x=>8,x=>x**1.5,0,4,{k:8,al:'y = 8',lt:'',lb:'y = x^(3/2)',lbx:2.6}),
  s:[R`La región está entre la curva y \(y=8\), x de 0 a 4. La rebanada toca el eje → disco con \(R=8-x^{3/2}\).`,R`\(R^2=64-16x^{3/2}+x^3\). \(V=\pi\left[64x-\frac{32}{5}x^{5/2}+\frac{x^4}{4}\right]_0^4=\pi\left(256-\frac{1024}{5}+64\right)\).`],r:R`\(V=\frac{576\pi}{5}\approx361.91\) u³`},
 /* ---------- longitud y = f(x) ---------- */
 {n:'5.4 #1',g:'lc',q:R`\(y=4x^{3/2}\), entre \(x=\frac13\) y \(x=5\)`,fig:T4F.arc(x=>4*x**1.5,1/3,5),
  s:[R`\(y'=6x^{1/2}\Rightarrow1+(y')^2=1+36x\).`,R`\(u=1+36x,\ du=36dx\); límites 13 y 181.`,R`\(L=\frac1{36}\cdot\frac23\left[u^{3/2}\right]_{13}^{181}=\frac{181\sqrt{181}-13\sqrt{13}}{54}\).`],r:R`\(L\approx44.23\) u`},
 {n:'5.4 #2',g:'lc',q:R`\(y=\frac23(x^2+1)^{3/2}\), de 1 a 2`,fig:T4F.arc(x=>2/3*(x*x+1)**1.5,1,2),
  s:[R`\(y'=2x\sqrt{x^2+1}\). \(1+(y')^2=4x^4+4x^2+1=(2x^2+1)^2\).`,R`\(L=\int_1^2(2x^2+1)dx=\left[\frac{2x^3}{3}+x\right]_1^2=\frac{22}{3}-\frac53\).`],r:R`\(L=\frac{17}{3}\approx5.67\) u`},
 {n:'5.4 #3',g:'lc',q:R`\(y=(4-x^{2/3})^{3/2}\), de 1 a 8`,fig:T4F.arc(x=>(4-x**(2/3))**1.5,1,8),
  s:[R`\(y'=-x^{-1/3}\sqrt{4-x^{2/3}}\). \((y')^2=\frac{4}{x^{2/3}}-1\) → \(1+(y')^2=\frac{4}{x^{2/3}}\).`,R`\(\sqrt{\ }=2x^{-1/3}\). \(L=2\cdot\frac32\left[x^{2/3}\right]_1^8=3(4-1)\).`],r:R`\(L=9\) u`},
 {n:'5.4 #4',g:'lc',q:R`\(y=\frac{x^4+3}{6x}\), de 1 a 3`,fig:T4F.arc(x=>(x**4+3)/(6*x),1,3),
  s:[R`\(y=\frac{x^3}{6}+\frac1{2x}\Rightarrow y'=\frac{x^2}{2}-\frac1{2x^2}\); \(AB=\frac14\).`,R`\(\sqrt{1+y'^2}=\frac{x^2}{2}+\frac1{2x^2}\). \(L=\left[\frac{x^3}{6}-\frac1{2x}\right]_1^3=\frac{13}{3}+\frac13\).`],r:R`\(L=\frac{14}{3}\approx4.67\) u`},
 {n:'5.4 #5',g:'lc',q:R`\(x=\frac{y^4}{16}+\frac1{2y^2}\), entre \(y=-3\) y \(y=-2\)`,
  s:[R`\(x'=\frac{y^3}{4}-\frac1{y^3}\); \(AB=\frac14\) → \(1+x'^2=\left(\frac{y^3}{4}+\frac1{y^3}\right)^2\).`,R`Para y negativo lo de adentro es negativo: \(\sqrt{u^2}=-u\).`,R`\(L=-\left[\frac{y^4}{16}-\frac1{2y^2}\right]_{-3}^{-2}=-\left(\frac78-\frac{721}{144}\right)\).`],r:R`\(L=\frac{595}{144}\approx4.13\) u`},
 {n:'5.4 #6',g:'lc',q:R`\(30xy^3-y^8=15\), entre \(y=1\) y \(y=3\)`,
  s:[R`Despeja: \(x=\frac{y^5}{30}+\frac1{2y^3}\Rightarrow x'=\frac{y^4}{6}-\frac{3}{2y^4}\); \(AB=\frac14\).`,R`\(L=\left[\frac{y^5}{30}-\frac1{2y^3}\right]_1^3=\frac{121}{15}+\frac12-\frac1{54}=\frac{2308}{270}\).`],r:R`\(L=\frac{1154}{135}\approx8.55\) u`},
 /* ---------- paramétricas y rectas ---------- */
 {n:'5.4 #7',g:'lp',q:R`\(x=\frac{t^3}{3},\ y=\frac{t^2}{2}\), \(0\le t\le1\)`,fig:T4F.arcP(t=>t**3/3,t=>t*t/2,0,1),
  s:[R`\(x'=t^2,\ y'=t\Rightarrow\sqrt{t^4+t^2}=t\sqrt{t^2+1}\).`,R`\(u=t^2+1\): \(\frac12\int_1^2u^{1/2}du=\frac13(2\sqrt2-1)\).`],r:R`\(L=\frac{2\sqrt2-1}{3}\approx0.61\) u`},
 {n:'5.4 #8',g:'lp',q:R`\(x=3t^2+2,\ y=2t^3-\frac12\), \(1\le t\le4\)`,fig:T4F.arcP(t=>3*t*t+2,t=>2*t**3-.5,1,4,{T0:0}),
  s:[R`\(x'=6t,\ y'=6t^2\Rightarrow6t\sqrt{1+t^2}\).`,R`\(L=2\left[(1+t^2)^{3/2}\right]_1^4=2(17\sqrt{17}-2\sqrt2)\).`],r:R`\(L\approx134.53\) u`},
 {n:'5.4 #9',g:'lp',q:R`\(x=4\sin t,\ y=4\cos t-5\), \(0\le t\le\pi\)`,fig:T4F.arcP(t=>4*Math.sin(t),t=>4*Math.cos(t)-5,0,Math.PI,{T1:2*Math.PI}),
  s:[R`\(x'=4\cos t,\ y'=-4\sin t\Rightarrow\sqrt{16}=4\).`,R`\(L=\int_0^\pi4\,dt\). Es media circunferencia de radio 4 con centro (0, −5).`],r:R`\(L=4\pi\approx12.57\) u`},
 {n:'5.4 #10',g:'lp',q:R`\(x=\sqrt5\sin2t-2,\ y=\sqrt5\cos2t-\sqrt3\), \(0\le t\le\frac\pi4\)`,fig:T4F.arcP(t=>Math.sqrt(5)*Math.sin(2*t)-2,t=>Math.sqrt(5)*Math.cos(2*t)-Math.sqrt(3),0,Math.PI/4,{T1:Math.PI}),
  s:[R`\(x'=2\sqrt5\cos2t,\ y'=-2\sqrt5\sin2t\Rightarrow\sqrt{20}=2\sqrt5\).`,R`\(L=2\sqrt5\cdot\frac\pi4\).`],r:R`\(L=\frac{\sqrt5\,\pi}{2}\approx3.51\) u`},
 {n:'5.4 #11',g:'lp',q:R`Segmento \(y=2x+3\) de \(x=1\) a \(x=3\) (integrando en x)`,fig:T4F.arc(x=>2*x+3,1,3),
  s:[R`\(y'=2\Rightarrow\sqrt{1+4}=\sqrt5\). \(L=\sqrt5\cdot2\).`,R`Distancia entre (1, 5) y (3, 9): \(\sqrt{4+16}=2\sqrt5\) ✓.`],r:R`\(L=2\sqrt5\approx4.47\) u`},
 {n:'5.4 #12',g:'lp',q:R`Segmento \(2y-3x+3=0\) entre \(y=1\) y \(y=3\) (integrando en y)`,
  s:[R`\(x=\frac{2y+3}{3}\Rightarrow x'=\frac23\). \(L=\int_1^3\sqrt{1+\frac49}dy=\frac{\sqrt{13}}{3}\cdot2\).`,R`Distancia entre \(\left(\frac53,1\right)\) y (3, 3): \(\sqrt{\frac{16}{9}+4}=\frac{2\sqrt{13}}{3}\) ✓.`],r:R`\(L=\frac{2\sqrt{13}}{3}\approx2.40\) u`},
 {n:'5.4 #13 a #16',g:'lp',q:R`Plantear la integral y aproximar con la regla de la parábola (n = 8)`,
  s:[R`#13 \(x=t,\ y=t^2\), \(0\le t\le2\): \(L=\int_0^2\sqrt{1+4t^2}\,dt\approx4.647\).`,R`#14 \(x=t^2,\ y=\sqrt t\), \(1\le t\le4\): \(L=\int_1^4\sqrt{4t^2+\frac1{4t}}\,dt\approx15.047\).`,R`#15 \(x=\sin t,\ y=\cos2t\), \(0\le t\le\frac\pi2\): \(L=\int_0^{\pi/2}\sqrt{\cos^2t+4\sin^22t}\,dt\approx2.32\).`,R`#16 \(x=t,\ y=\tan t\), \(0\le t\le\frac\pi4\): \(L=\int_0^{\pi/4}\sqrt{1+\sec^4t}\,dt\approx1.278\).`,R`Regla de la parábola: \(\frac h3\left[f_0+4f_1+2f_2+\cdots+4f_7+f_8\right]\), \(h=\frac{b-a}{8}\). En la app: calculadora → ∫ DEFINIDA.`],r:R`Plantear la raíz bien vale casi todo el punto`},
 {n:'5.4 #17',g:'lp',q:R`Hipocicloide \(x=a\sin^3t,\ y=a\cos^3t\), \(0\le t\le2\pi\)`,fig:T4F.arcP(t=>Math.sin(t)**3,t=>Math.cos(t)**3,0,Math.PI/2,{T1:2*Math.PI}),
  s:[R`\(x'=3a\sin^2t\cos t,\ y'=-3a\cos^2t\sin t\).`,R`\(x'^2+y'^2=9a^2\sin^2t\cos^2t\,(\sin^2t+\cos^2t)\) \(=9a^2\sin^2t\cos^2t\) → \(\sqrt{\ }=3a\sin t\cos t\) (primer cuadrante).`,R`Por simetría: \(L=4\int_0^{\pi/2}3a\sin t\cos t\,dt=12a\cdot\frac12\).`],r:R`\(L=6a\)`},
];

/* áreas e integral definida: se toman de las preguntas de la evaluación (ya verificadas) */
(()=>{ if(typeof QUIZ==='undefined') return; const add=[];
  QUIZ.definida.forEach((Q,i)=>add.push({n:'Definida '+(i+1),g:'df',q:Q.q,fig:Q.fig,s:Q.sol,r:Q.o[0]}));
  QUIZ.area.forEach((Q,i)=>add.push({n:'Área '+(i+1),g:'ae',q:Q.q,fig:Q.fig,s:Q.sol,r:Q.o[0]+' u²'}));
  T4.unshift(...add); })();
