/* ============ PARCIAL: GUÍA DE GRAFICAR, INFO POR TEMA Y PREGUNTAS DE TALLER ============
   - GRAPH_GUIDE(): guía completa para graficar e identificar curvas (va dentro de Área y de Graficar).
   - TOPIC_INFO[id]: bloque "LO QUE PIDE EL PARCIAL" al inicio de la teoría de cada tema.
   - QUIZ[id]: preguntas basadas en el Taller 4 (Conjunto 5.2 y 5.4) o de la misma dificultad.
     Reemplazan el banco anterior de esos temas. Cada pregunta trae su procedimiento (sol) y gráfica (fig). */

const gm=(sp)=>figSVG(sp,{w:150,h:100,mini:true});
const GG_CAT=[
 ['Recta','y = mx + b','m = pendiente, b = corte con y. Dos puntos bastan.',{xr:[-2,3],yr:[-2,4],curves:[{f:x=>x+1,c:'blue'}]}],
 ['Parábola vertical','y = ax² + bx + c','Vértice en x = −b/2a. a > 0 abre ∪, a < 0 abre ∩.',{xr:[-3,3],yr:[-1,5],curves:[{f:x=>x*x,c:'blue'},{f:x=>4-x*x,c:'red'}]}],
 ['Parábola acostada','x = ay² + by + c','Igual que la vertical pero girada: abre a la derecha si a > 0.',{xr:[-1,4],yr:[-2.2,2.2],ycurves:[{g:y=>y*y,c:'blue'}]}],
 ['Raíz','y = √x','Media parábola acostada. Solo x ≥ 0. Puntos: (0,0), (1,1), (4,2), (9,3).',{xr:[-.5,9.5],yr:[-.4,3.4],curves:[{f:sq,a:0,c:'blue'}]}],
 ['Cúbica','y = x³','Pasa por el origen, sube a la derecha y baja a la izquierda. Es impar.',{xr:[-1.6,1.6],yr:[-3,3],curves:[{f:x=>x**3,c:'blue'}]}],
 ['Potencias fraccionarias','y = x^(3/2), y = x^(2/3)','x^(3/2) crece más rápido que una recta; x^(2/3) tiene punta en el origen.',{xr:[-2,3],yr:[-.3,3],curves:[{f:x=>Math.abs(x)**(2/3),c:'red'},{f:x=>x>=0?x**1.5:NaN,a:0,c:'blue'}]}],
 ['Hipérbola','y = 1/x','Asíntotas en los ejes: nunca toca x = 0 ni y = 0.',{xr:[-3,3],yr:[-3,3],curves:[{f:x=>1/x,a:.3,b:3,c:'blue'},{f:x=>1/x,a:-3,b:-.3,c:'blue'}]}],
 ['Exponencial y logaritmo','y = eˣ, y = ln x','eˣ corta en (0,1) y siempre es positiva. ln x corta en (1,0) y solo existe si x > 0.',{xr:[-2,3],yr:[-2,3],curves:[{f:Math.exp,c:'red'},{f:x=>x>0?Math.log(x):NaN,a:.05,c:'blue'}]}],
 ['Circunferencia','x² + y² = r²','Centro (0,0), radio r. Despejando: y = ±√(r² − x²). El + es la mitad de arriba.',{xr:[-3.45,3.45],yr:[-2.3,2.3],curves:[{f:x=>sq(4-x*x),a:-2,b:2,c:'blue'},{f:x=>-sq(4-x*x),a:-2,b:2,c:'blue',dash:true}]}],
 ['Elipse','x²/a² + y²/b² = 1','Corta los ejes en ±a y ±b. Se dibuja con esos 4 puntos.',{xr:[-3.4,3.4],yr:[-2.2,2.2],curves:[{f:x=>2*sq(1-x*x/9),a:-3,b:3,c:'blue'},{f:x=>-2*sq(1-x*x/9),a:-3,b:3,c:'blue'}]}],
 ['Seno y coseno','y = sen x, y = cos x','Oscilan entre −1 y 1. Período 2π. sen empieza en 0; cos empieza en 1.',{xr:[0,6.6],yr:[-1.3,1.3],curves:[{f:Math.sin,c:'blue'},{f:Math.cos,c:'red'}]}],
 ['Valor absoluto','y = |x|','Una V con vértice en el origen. |x − h| mueve la V a x = h.',{xr:[-3,3],yr:[-.4,3],curves:[{f:Math.abs,c:'blue'}]}],
];
function GRAPH_GUIDE(){
  return R`
  <div class="gg">
  <div class="gg-hd"><span>GUÍA</span> Cómo graficar correctamente</div>
  <p>En el parcial el dibujo <b>se califica</b> (la rúbrica del taller tiene un criterio solo para "representación gráfica"). Además, sin dibujo no sabes qué curva va arriba, dónde se cortan ni cuál es el radio. Este es el procedimiento completo.</p>
  <h3>1 · Identifica la curva por su ecuación</h3>
  <p>Antes de calcular nada, mira la forma de la ecuación. Cada familia tiene un dibujo característico:</p>
  <div class="gg-grid">${GG_CAT.map(([n,e,d,sp])=>`<div class="gg-card"><div class="gg-fig">${gm(sp)}</div><div class="gg-n">${n}</div><div class="gg-e">${e}</div><div class="gg-d">${d}</div></div>`).join('')}</div>
  <div class="tip"><b>Truco:</b> si la ecuación tiene \(y^2\) y \(x\) sin cuadrado (como \(x=y^2\) o \(y^2=4x\)) es una parábola <b>acostada</b>. Si tiene \(x^2\) y \(y^2\) sumados con el mismo coeficiente, es una <b>circunferencia</b>; con distinto coeficiente, una <b>elipse</b>.</div>
  <h3>2 · Los 6 pasos para dibujar cualquier curva</h3>
  <ol class="recipe">
   <li><b>Dominio:</b> ¿dónde existe? Raíz par → lo de adentro ≥ 0. Fracción → denominador ≠ 0. ln → argumento > 0.</li>
   <li><b>Cortes con los ejes:</b> con y haz x = 0; con x haz y = 0 y resuelve.</li>
   <li><b>Simetría:</b> si \(f(-x)=f(x)\) es par (simétrica respecto al eje y); si \(f(-x)=-f(x)\) es impar (simétrica respecto al origen).</li>
   <li><b>Puntos clave:</b> vértice de la parábola \(\left(-\frac{b}{2a},f(-\frac{b}{2a})\right)\), máximos y mínimos, y una <b>tabla de valores</b> con 4 o 5 puntos elegidos para que las cuentas den exactas.</li>
   <li><b>Comportamiento:</b> ¿crece o decrece? ¿Tiene asíntotas? ¿Hacia dónde va cuando x es muy grande?</li>
   <li><b>Dibuja y rotula:</b> une los puntos con trazo suave (no con rectas), escribe la ecuación sobre cada curva y marca los puntos de corte con sus coordenadas.</li>
  </ol>
  <h3>3 · Transformaciones: mover una curva que ya conoces</h3>
  <div class="tscroll"><table class="t"><tr><th>Ecuación</th><th>Qué le pasa a \(y=f(x)\)</th><th>Ejemplo</th></tr>
   <tr><td>\(f(x)+k\)</td><td>Sube k (baja si k &lt; 0)</td><td>\(x^2+1\): parábola con vértice en (0, 1)</td></tr>
   <tr><td>\(f(x-h)\)</td><td>Se mueve h a la <b>derecha</b></td><td>\((x-3)^2\): vértice en (3, 0)</td></tr>
   <tr><td>\(-f(x)\)</td><td>Se voltea respecto al eje x</td><td>\(-x^2\): abre hacia abajo</td></tr>
   <tr><td>\(f(-x)\)</td><td>Se voltea respecto al eje y</td><td>\(\sqrt{-x}\): media parábola hacia la izquierda</td></tr>
   <tr><td>\(a\,f(x)\)</td><td>Se estira (a &gt; 1) o se aplasta (0 &lt; a &lt; 1)</td><td>\(4-x^2\) es \(-x^2\) subida 4</td></tr>
  </table></div>
  <h3>4 · Cómo dibujar una región (área o volumen)</h3>
  <div class="gg-steps">
   <div class="gg-step"><b>01</b><span>Grafica cada curva por separado con su tabla de valores.</span></div>
   <div class="gg-step"><b>02</b><span>Halla los <b>puntos de corte</b> igualando las ecuaciones. Márcalos con coordenadas.</span></div>
   <div class="gg-step"><b>03</b><span>Sombrea solo la zona <b>encerrada</b> por todas las fronteras (incluye rectas como x = 4 o y = 0).</span></div>
   <div class="gg-step"><b>04</b><span>Prueba un punto intermedio para saber qué curva va <b>arriba</b> (o a la derecha).</span></div>
   <div class="gg-step"><b>05</b><span>Dibuja una <b>rebanada representativa</b>: vertical (dx) o horizontal (dy).</span></div>
   <div class="gg-step"><b>06</b><span>En volúmenes, dibuja el <b>eje de giro</b> punteado y mide el radio desde el eje hasta la curva.</span></div>
  </div>
  <figure class="gg-big">${figSVG({xr:[-.4,2.6],yr:[-.4,4.6],fills:[{top:x=>2*x,bot:x=>x*x,a:0,b:2,c:'blue'}],curves:[{f:x=>2*x,c:'red',lab:'y = 2x',lx:.55},{f:x=>x*x,c:'ink',lab:'y = x²',lx:1.75}],slice:{x:1,top:x=>2*x,bot:x=>x*x,c:'yel'},pts:[[0,0,'(0, 0)'],[2,4,'(2, 4)']],labels:[[1.35,1.55,'prueba x = 1: 2 > 1','ink']]},{w:420,h:270})}<figcaption>Así debe quedar: curvas rotuladas, cortes con coordenadas, región sombreada y una rebanada.</figcaption></figure>
  <div class="trap"><b>Errores que bajan nota:</b> dibujar la parábola como una V con picos; olvidar que \(\sqrt x\) no existe para x &lt; 0; no marcar los cortes; sombrear una zona que no está encerrada; dibujar el eje de giro y no indicar el radio.</div>
  </div>`;
}

const TOPIC_INFO={
 definida:R`<div class="pinfo"><div class="pinfo-h">LO QUE PIDE EL PARCIAL // TEMA 1</div><ul>
  <li>Evaluar \(\int_a^b f(x)\,dx=F(b)-F(a)\) <b>con paréntesis</b>: el error más común es el signo al restar \(F(a)\).</li>
  <li>Cambiar los límites cuando haces sustitución: si \(u=g(x)\), los nuevos límites son \(g(a)\) y \(g(b)\).</li>
  <li>TFC parte 1: \(\frac{d}{dx}\int_a^{g(x)}f(t)\,dt=f(g(x))\cdot g'(x)\).</li>
  <li>Interpretar el signo: la integral es <b>área con signo</b>; el área geométrica nunca es negativa.</li>
  <li>Dar el resultado exacto (fracción, π, ln) y, si el profe lo pide, el decimal con calculadora.</li></ul></div>`,
 area:R`<div class="pinfo"><div class="pinfo-h">LO QUE PIDE EL PARCIAL // TEMAS 2 Y 3</div><ul>
  <li><b>Dibujo obligatorio</b> con las curvas rotuladas, los cortes y la rebanada (abajo está la guía completa).</li>
  <li>Puntos de corte resolviendo la ecuación, no "a ojo".</li>
  <li>Decidir dx o dy y justificarlo.</li>
  <li>Resultado con unidades: <b>u²</b> (unidades cuadradas).</li></ul></div>`,
 discos:R`<div class="pinfo"><div class="pinfo-h">LO QUE PIDE EL PARCIAL // TEMAS 4 Y 5 · TALLER 4, CONJUNTO 5.2</div><ul>
  <li>Problemas 1 a 4: región dada en figura, girar alrededor del eje x o y.</li>
  <li>Problemas 5 a 10: rebanada <b>vertical</b>, giro alrededor del eje x → \(V=\pi\int R(x)^2dx\).</li>
  <li>Problemas 11 a 16: rebanada <b>horizontal</b>, giro alrededor del eje y → \(V=\pi\int R(y)^2dy\) (despeja x).</li>
  <li>Problemas 18 a 22: dos curvas → <b>arandelas</b> \(\pi\int(R^2-r^2)\). Problemas 33 y 34: ejes desplazados (x = 4, y = 8).</li>
  <li>Siempre: dibujo de la región, rebanada, eje punteado, R y r señalados, resultado en <b>u³</b>.</li></ul></div>`,
 secciones:R`<div class="pinfo"><div class="pinfo-h">LO QUE PIDE EL PARCIAL // TEMA 6 · TALLER 4, PROBLEMAS 23 A 26 Y 32</div><ul>
  <li>Aquí <b>no se gira nada</b>: la base es una región plana y encima se levantan figuras (cuadrados, triángulos, semicírculos).</li>
  <li>El lado (o diámetro) es la <b>longitud de la rebanada</b> en la base: arriba − abajo.</li>
  <li>Áreas que debes saber: cuadrado \(s^2\) · semicírculo \(\frac\pi8s^2\) · equilátero \(\frac{\sqrt3}4s^2\) · triángulo de altura h \(\frac12sh\).</li>
  <li>Volumen \(V=\int_a^bA(x)\,dx\). Normalmente <b>no lleva π</b> (solo si las secciones son círculos).</li></ul></div>`,
 longitud:R`<div class="pinfo"><div class="pinfo-h">LO QUE PIDE EL PARCIAL // TEMA 7 · TALLER 4, CONJUNTO 5.4</div><ul>
  <li>Problemas 1 a 6: \(L=\int\sqrt{1+(y')^2}\,dx\). Casi siempre \(1+(y')^2\) es un <b>cuadrado perfecto</b>: búscalo.</li>
  <li>Problemas 7 a 10: paramétricas, \(L=\int\sqrt{x'(t)^2+y'(t)^2}\,dt\), y hay que dibujar la curva.</li>
  <li>Problemas 11 y 12: segmentos de recta: verifica con la fórmula de distancia.</li>
  <li>Problemas 13 a 16: solo plantear la integral (y aproximarla con Simpson): la calculadora del lado sirve para eso.</li></ul></div>`,
};

/* ---------- PREGUNTAS ---------- */
const QUIZ={
 definida:[
  {q:R`\(\displaystyle\int_0^2(x^3-2x+1)\,dx\)`,o:['2','4','6','0'],e:'Antiderivada término a término y evaluar.',h:'F(x) = x⁴/4 − x² + x',
   sol:[R`Antiderivada: \(F(x)=\frac{x^4}{4}-x^2+x\).`,R`\(F(2)=\frac{16}{4}-4+2=2\). \(F(0)=0\).`,R`\(F(2)-F(0)=2\).`],
   fig:{xr:[-.2,2.3],yr:[-.6,5.3],fills:[{top:x=>x**3-2*x+1,bot:x=>0,a:0,b:2,c:'blue'}],curves:[{f:x=>x**3-2*x+1,c:'blue',lab:'x³ − 2x + 1',lx:1.55}]}},
  {q:R`\(\displaystyle\int_1^4\left(\sqrt x+\frac1{\sqrt x}\right)dx\)`,o:[R`\(\frac{20}{3}\)`,R`\(\frac{14}{3}\)`,R`\(\frac{26}{3}\)`,'8'],e:'Escribe las raíces como potencias.',h:'√x = x^(1/2), 1/√x = x^(−1/2)',
   sol:[R`\(\int(x^{1/2}+x^{-1/2})dx=\frac23x^{3/2}+2x^{1/2}\).`,R`En 4: \(\frac23\cdot8+2\cdot2=\frac{16}{3}+4=\frac{28}{3}\).`,R`En 1: \(\frac23+2=\frac83\).`,R`\(\frac{28}{3}-\frac83=\frac{20}{3}\approx6.67\).`],
   fig:{xr:[0,4.4],yr:[0,3.2],fills:[{top:x=>Math.sqrt(x)+1/Math.sqrt(x),a:1,b:4,c:'blue'}],curves:[{f:x=>Math.sqrt(x)+1/Math.sqrt(x),a:.15,c:'blue',lab:'√x + 1/√x',lx:2.6}]}},
  {q:R`\(\displaystyle\int_0^3x\sqrt{x^2+16}\,dx\)`,o:[R`\(\frac{61}{3}\)`,R`\(\frac{122}{3}\)`,R`\(\frac{125}{3}\)`,'61'],e:'Sustitución u = x² + 16 cambiando los límites.',h:'du = 2x dx',
   sol:[R`\(u=x^2+16\), \(du=2x\,dx\Rightarrow x\,dx=\frac{du}{2}\).`,R`Límites: \(x=0\to u=16\); \(x=3\to u=25\).`,R`\(\frac12\int_{16}^{25}u^{1/2}du=\frac12\cdot\frac23\left[u^{3/2}\right]_{16}^{25}=\frac13(125-64)\).`,R`\(=\frac{61}{3}\approx20.33\).`]},
  {q:R`\(\displaystyle\int_1^e\frac{\ln x}{x}\,dx\)`,o:[R`\(\frac12\)`,'1','e − 1',R`\(\frac{e}{2}\)`],e:'u = ln x.',h:'La derivada de ln x es 1/x.',
   sol:[R`\(u=\ln x,\ du=\frac{dx}{x}\). Límites: \(x=1\to u=0\); \(x=e\to u=1\).`,R`\(\int_0^1u\,du=\left[\frac{u^2}{2}\right]_0^1=\frac12\).`]},
  {q:R`\(\displaystyle\int_{-2}^{2}(x^5-3x^3+x^2)\,dx\)`,o:[R`\(\frac{16}{3}\)`,'0',R`\(\frac{8}{3}\)`,R`\(\frac{32}{3}\)`],e:'Las potencias impares se cancelan en un intervalo simétrico.',h:'¿Cuáles términos son impares?',
   sol:[R`\(x^5\) y \(-3x^3\) son impares: en \([-2,2]\) su integral es 0.`,R`\(x^2\) es par: \(\int_{-2}^2x^2dx=2\int_0^2x^2dx=2\cdot\frac83\).`,R`Resultado: \(\frac{16}{3}\).`]},
  {q:R`Área entre \(y=x^2-1\) y el eje x, para \(0\le x\le2\)`,o:['2',R`\(\frac23\)`,R`\(\frac43\)`,'0'],e:'Parte donde la curva cruza el eje (x = 1).',h:'La integral sola da 2/3: ¿por qué no es el área?',
   sol:[R`La curva corta el eje x en \(x=1\): en \((0,1)\) está debajo y en \((1,2)\) arriba.`,R`\(\int_0^1(1-x^2)dx=1-\frac13=\frac23\).`,R`\(\int_1^2(x^2-1)dx=\left[\frac{x^3}{3}-x\right]_1^2=\frac23-\left(-\frac23\right)=\frac43\).`,R`Área \(=\frac23+\frac43=2\) u². (La integral sin partir da \(\frac23\).)`],
   fig:{xr:[-.2,2.3],yr:[-1.3,3.3],fills:[{top:x=>0,bot:x=>x*x-1,a:0,b:1,c:'red'},{top:x=>x*x-1,bot:x=>0,a:1,b:2,c:'blue'}],curves:[{f:x=>x*x-1,c:'ink',lab:'x² − 1',lx:1.7}],labels:[[.5,-.45,'2/3','red'],[1.7,.6,'4/3','blue']]}},
  {q:R`\(\displaystyle\frac{d}{dx}\int_1^{x^2}\sqrt{1+t^3}\,dt\)`,o:[R`\(2x\sqrt{1+x^6}\)`,R`\(\sqrt{1+x^6}\)`,R`\(\sqrt{1+x^3}\)`,R`\(2x\sqrt{1+x^3}\)`],e:'TFC parte 1 con regla de la cadena.',h:'Evalúa en el límite de arriba y multiplica por su derivada.',
   sol:[R`TFC: \(\frac{d}{dx}\int_a^{g(x)}f(t)dt=f(g(x))\,g'(x)\).`,R`\(f(t)=\sqrt{1+t^3}\), \(g(x)=x^2\Rightarrow f(x^2)=\sqrt{1+x^6}\), \(g'(x)=2x\).`,R`Resultado: \(2x\sqrt{1+x^6}\).`]},
  {hard:true,q:R`\(\displaystyle\int_0^{\pi/2}\sin^3x\,dx\)`,o:[R`\(\frac23\)`,R`\(\frac13\)`,'1',R`\(\frac{\pi}{4}\)`],e:'Potencia impar: separa un sen x.',h:'sen³x = (1 − cos²x) sen x',
   sol:[R`\(\sin^3x=(1-\cos^2x)\sin x\). Sea \(u=\cos x,\ du=-\sin x\,dx\).`,R`Límites: \(x=0\to u=1\); \(x=\frac\pi2\to u=0\).`,R`\(\int_1^0(1-u^2)(-du)=\int_0^1(1-u^2)du=1-\frac13=\frac23\).`],
   fig:{xr:[0,1.8],yr:[-.1,1.15],xt:[[_pi/4,'π/4'],[_pi/2,'π/2']],fills:[{top:x=>Math.sin(x)**3,a:0,b:_pi/2,c:'green'}],curves:[{f:x=>Math.sin(x)**3,c:'green',lab:'sen³x',lx:.7}]}},
  {hard:true,q:R`\(\displaystyle\int_{-1}^{3}|x-1|\,dx\)`,o:['4','2','0','8'],e:'Parte donde cambia la fórmula del valor absoluto.',h:'|x − 1| = 1 − x si x < 1',
   sol:[R`\(|x-1|=1-x\) si \(x<1\) y \(x-1\) si \(x\ge1\). Parto en \(x=1\).`,R`\(\int_{-1}^1(1-x)dx=\left[x-\frac{x^2}{2}\right]_{-1}^1=\frac12-\left(-\frac32\right)=2\).`,R`\(\int_1^3(x-1)dx=\left[\frac{x^2}{2}-x\right]_1^3=\frac32-\left(-\frac12\right)=2\).`,R`Total: \(2+2=4\). (Son dos triángulos de base 2 y altura 2.)`],
   fig:{xr:[-1.4,3.4],yr:[-.3,2.4],fills:[{top:x=>Math.abs(x-1),a:-1,b:1,c:'yel'},{top:x=>Math.abs(x-1),a:1,b:3,c:'blue'}],curves:[{f:x=>Math.abs(x-1),c:'ink',lab:'|x − 1|',lx:2.3}]}},
 ],
 area:[
  {q:R`Área entre \(y=x^2\) y \(y=x+2\)`,o:[R`\(\frac92\)`,'9',R`\(\frac{7}{6}\)`,R`\(\frac{10}{3}\)`],e:'Cortes en −1 y 2; arriba la recta.',h:'x² − x − 2 = 0',
   sol:[R`Cortes: \(x^2=x+2\Rightarrow x^2-x-2=0\Rightarrow(x-2)(x+1)=0\Rightarrow x=-1,\ 2\).`,R`Prueba en \(x=0\): recta 2, parábola 0 → arriba \(x+2\).`,R`\(A=\int_{-1}^2(x+2-x^2)dx=\left[\frac{x^2}{2}+2x-\frac{x^3}{3}\right]_{-1}^2\).`,R`En 2: \(2+4-\frac83=\frac{10}{3}\). En −1: \(\frac12-2+\frac13=-\frac76\).`,R`\(A=\frac{10}{3}+\frac76=\frac{27}{6}=\frac92=4.5\) u².`],
   fig:{xr:[-1.6,2.6],yr:[-.5,4.6],fills:[{top:x=>x+2,bot:x=>x*x,a:-1,b:2,c:'blue'}],curves:[{f:x=>x+2,c:'red',lab:'y = x + 2',lx:-1.4},{f:x=>x*x,c:'ink',lab:'y = x²',lx:1.7}],slice:{x:.5,top:x=>x+2,bot:x=>x*x,c:'yel'},pts:[[-1,1,'(−1, 1)'],[2,4,'(2, 4)']]}},
  {q:R`Área entre \(y=\sqrt x\) y \(y=\frac x2\)`,o:[R`\(\frac43\)`,R`\(\frac{16}{3}\)`,'4',R`\(\frac23\)`],e:'Cortes en 0 y 4; arriba la raíz.',h:'√x = x/2 → x = x²/4',
   sol:[R`Cortes: \(\sqrt x=\frac x2\Rightarrow x=\frac{x^2}{4}\Rightarrow x(x-4)=0\Rightarrow x=0,\ 4\).`,R`En \(x=1\): \(\sqrt1=1>\frac12\) → arriba \(\sqrt x\).`,R`\(A=\int_0^4\left(x^{1/2}-\frac x2\right)dx=\left[\frac23x^{3/2}-\frac{x^2}{4}\right]_0^4=\frac{16}{3}-4\).`,R`\(A=\frac43\approx1.33\) u².`],
   fig:{xr:[-.3,4.6],yr:[-.3,2.5],fills:[{top:sq,bot:x=>x/2,a:0,b:4,c:'blue'}],curves:[{f:sq,a:0,c:'red',lab:'y = √x',lx:.6},{f:x=>x/2,c:'ink',lab:'y = x/2',lx:3.4}],slice:{x:1.5,top:sq,bot:x=>x/2,c:'yel'},pts:[[4,2,'(4, 2)']]}},
  {q:R`Área entre \(x=y^2\) y \(x=3-2y^2\)`,o:['4','2','6',R`\(\frac83\)`],e:'Parábolas acostadas: integra en dy.',h:'Iguala: y² = 3 − 2y²',
   sol:[R`Las dos son \(x=g(y)\) → rebanada horizontal (dy).`,R`Cortes: \(y^2=3-2y^2\Rightarrow3y^2=3\Rightarrow y=\pm1\).`,R`En \(y=0\): \(3-0=3>0\) → derecha \(3-2y^2\), izquierda \(y^2\).`,R`\(A=\int_{-1}^1(3-3y^2)dy=\left[3y-y^3\right]_{-1}^1=2-(-2)=4\) u².`],
   fig:{xr:[-.4,3.4],yr:[-1.5,1.5],fills:[{dir:'y',right:y=>3-2*y*y,left:y=>y*y,a:-1,b:1,c:'blue'}],ycurves:[{g:y=>y*y,c:'ink',lab:'x = y²',ly:-1.3,a:-1.5,b:1.5},{g:y=>3-2*y*y,c:'red',lab:'x = 3 − 2y²',ly:.6,a:-1.25,b:1.25}],slice:{y:.3,right:y=>3-2*y*y,left:y=>y*y,c:'yel'},pts:[[1,1,'(1, 1)'],[1,-1,'(1, −1)']]}},
  {q:R`Área total entre \(y=x^3-x\) y el eje x`,o:[R`\(\frac12\)`,'0',R`\(\frac14\)`,'1'],e:'Cruza el eje en −1, 0 y 1: parte y usa simetría.',h:'x³ − x = x(x − 1)(x + 1)',
   sol:[R`Cortes: \(x^3-x=x(x-1)(x+1)=0\Rightarrow x=-1,0,1\).`,R`En \((0,1)\) la curva está debajo del eje: altura \(0-(x^3-x)=x-x^3\).`,R`Por simetría (impar): \(A=2\int_0^1(x-x^3)dx=2\left(\frac12-\frac14\right)\).`,R`\(A=\frac12\) u². Sin partir, la integral daría 0.`],
   fig:{xr:[-1.4,1.4],yr:[-.6,.6],gy:.2,fills:[{top:x=>x**3-x,bot:x=>0,a:-1,b:0,c:'blue'},{top:x=>0,bot:x=>x**3-x,a:0,b:1,c:'blue'}],curves:[{f:x=>x**3-x,c:'ink',lab:'x³ − x',lx:1.08}]}},
  {q:R`Área entre \(y=\sin x\) y \(y=\cos x\), \(0\le x\le\frac\pi2\)`,o:[R`\(2\sqrt2-2\)`,'0',R`\(\sqrt2-1\)`,R`\(2\sqrt2\)`],e:'Se cruzan en π/4: parte la integral.',h:'tan x = 1',
   sol:[R`Cortes: \(\sin x=\cos x\Rightarrow x=\frac\pi4\).`,R`\(\int_0^{\pi/4}(\cos x-\sin x)dx=\left[\sin x+\cos x\right]_0^{\pi/4}=\sqrt2-1\).`,R`\(\int_{\pi/4}^{\pi/2}(\sin x-\cos x)dx=\left[-\cos x-\sin x\right]_{\pi/4}^{\pi/2}=-1+\sqrt2\).`,R`\(A=2\sqrt2-2\approx0.83\) u².`],
   fig:{xr:[0,1.75],yr:[-.1,1.15],xt:[[_pi/4,'π/4'],[_pi/2,'π/2']],fills:[{top:Math.cos,bot:Math.sin,a:0,b:_pi/4,c:'blue'},{top:Math.sin,bot:Math.cos,a:_pi/4,b:_pi/2,c:'red'}],curves:[{f:Math.cos,c:'blue',lab:'cos x',lx:.1},{f:Math.sin,c:'red',lab:'sen x',lx:1.2}]}},
  {q:R`Área bajo \(y=4-x^2\) y sobre el eje x`,o:[R`\(\frac{32}{3}\)`,R`\(\frac{16}{3}\)`,'8',R`\(\frac{64}{3}\)`],e:'Cortes en ±2; usa simetría.',h:'4 − x² = 0',
   sol:[R`Cortes con el eje: \(4-x^2=0\Rightarrow x=\pm2\).`,R`\(A=\int_{-2}^2(4-x^2)dx=2\int_0^2(4-x^2)dx=2\left(8-\frac83\right)\).`,R`\(A=2\cdot\frac{16}{3}=\frac{32}{3}\approx10.67\) u².`],
   fig:{xr:[-2.5,2.5],yr:[-.4,4.5],fills:[{top:x=>4-x*x,a:-2,b:2,c:'blue'}],curves:[{f:x=>4-x*x,c:'blue',lab:'4 − x²',lx:.5}],pts:[[-2,0,'−2'],[2,0,'2']]}},
  {hard:true,q:R`Área entre \(y=x^2-4x\) y \(y=-x^2+2x\)`,o:['9','27','18','6'],e:'Dos parábolas: cortes en 0 y 3.',h:'2x² − 6x = 0',
   sol:[R`Cortes: \(x^2-4x=-x^2+2x\Rightarrow2x^2-6x=0\Rightarrow x=0,\ 3\).`,R`En \(x=1\): \(-1+2=1\) contra \(1-4=-3\) → arriba \(-x^2+2x\).`,R`Altura: \((-x^2+2x)-(x^2-4x)=-2x^2+6x\).`,R`\(A=\int_0^3(-2x^2+6x)dx=\left[-\frac23x^3+3x^2\right]_0^3=-18+27=9\) u².`],
   fig:{xr:[-.5,3.6],yr:[-4.4,1.6],fills:[{top:x=>-x*x+2*x,bot:x=>x*x-4*x,a:0,b:3,c:'blue'}],curves:[{f:x=>-x*x+2*x,c:'red',lab:'−x² + 2x',lx:.15},{f:x=>x*x-4*x,c:'ink',lab:'x² − 4x',lx:2.8}],slice:{x:1.5,top:x=>-x*x+2*x,bot:x=>x*x-4*x,c:'yel'},pts:[[3,-3,'(3, −3)']]}},
  {hard:true,q:R`Área entre \(y^2=2x+6\) y \(y=x-1\)`,o:['18','9','36',R`\(\frac{38}{3}\)`],e:'En dx la frontera de abajo cambia: usa dy.',h:'Despeja x de las dos.',
   sol:[R`Despeja x: \(x=\frac{y^2}{2}-3\) (izquierda) y \(x=y+1\) (derecha).`,R`Cortes: \(y+1=\frac{y^2}{2}-3\Rightarrow y^2-2y-8=0\Rightarrow y=4,\ -2\).`,R`\(A=\int_{-2}^4\left(y+1-\frac{y^2}{2}+3\right)dy=\left[\frac{y^2}{2}+4y-\frac{y^3}{6}\right]_{-2}^4\).`,R`En 4: \(8+16-\frac{32}{3}=\frac{40}{3}\). En −2: \(2-8+\frac43=-\frac{14}{3}\).`,R`\(A=\frac{40}{3}+\frac{14}{3}=18\) u².`],
   fig:{xr:[-3.6,5.6],yr:[-3,5],gx:2,gy:2,fills:[{dir:'y',right:y=>y+1,left:y=>y*y/2-3,a:-2,b:4,c:'blue'}],ycurves:[{g:y=>y*y/2-3,c:'ink',lab:'y² = 2x + 6',ly:-2.7,a:-3,b:4.6},{g:y=>y+1,c:'red',lab:'y = x − 1',ly:2,a:-3,b:4.6}],slice:{y:1,right:y=>y+1,left:y=>y*y/2-3,c:'yel'},pts:[[5,4,'(5, 4)'],[-1,-2,'(−1, −2)']]}},
 ],
 discos:[
  {q:R`Taller 4 · 5.2 #1: \(y=x^2+1\), \(0\le x\le2\), alrededor del eje x`,o:[R`\(\frac{206\pi}{15}\)`,R`\(\frac{14\pi}{3}\)`,R`\(\frac{32\pi}{5}\)`,R`\(\frac{206\pi}{5}\)`],e:'Disco con R = x² + 1.',h:'Expande (x² + 1)².',
   sol:[R`Rebanada vertical que gira en el eje x → disco de radio \(R=x^2+1\).`,R`\(V=\pi\int_0^2(x^2+1)^2dx=\pi\int_0^2(x^4+2x^2+1)dx\).`,R`\(=\pi\left[\frac{x^5}{5}+\frac{2x^3}{3}+x\right]_0^2=\pi\left(\frac{32}{5}+\frac{16}{3}+2\right)\).`,R`Común denominador 15: \(\frac{96+80+30}{15}=\frac{206}{15}\Rightarrow V=\frac{206\pi}{15}\approx43.14\) u³.`],
   fig:{xr:[-.3,2.5],yr:[-5.5,5.5],gy:2,fills:[{top:x=>x*x+1,a:0,b:2,c:'blue'}],curves:[{f:x=>x*x+1,a:0,b:2,c:'blue',lab:'R = x² + 1',lx:.2}],axis:{y:0,lab:'eje x'},mirror:true,disk:true,slice:{x:1.3,top:x=>x*x+1,c:'red'}}},
  {q:R`Taller 4 · 5.2 #2: \(y=-x^2+4x\), \(0\le x\le3\), alrededor del eje x`,o:[R`\(\frac{153\pi}{5}\)`,R`\(9\pi\)`,R`\(\frac{243\pi}{5}\)`,R`\(\frac{51\pi}{5}\)`],e:'Disco con R = 4x − x².',h:'(4x − x²)² = 16x² − 8x³ + x⁴',
   sol:[R`\(R=4x-x^2\Rightarrow R^2=16x^2-8x^3+x^4\).`,R`\(V=\pi\left[\frac{16x^3}{3}-2x^4+\frac{x^5}{5}\right]_0^3=\pi\left(144-162+\frac{243}{5}\right)\).`,R`\(=\pi\left(-18+\frac{243}{5}\right)=\pi\cdot\frac{153}{5}\).`,R`\(V=\frac{153\pi}{5}\approx96.13\) u³.`],
   fig:{xr:[-.3,3.4],yr:[-4.6,4.6],gy:2,fills:[{top:x=>4*x-x*x,a:0,b:3,c:'blue'}],curves:[{f:x=>4*x-x*x,a:0,b:3,c:'blue',lab:'−x² + 4x',lx:.3}],axis:{y:0,lab:'eje x'},mirror:true,disk:true,slice:{x:2,top:x=>4*x-x*x,c:'red'}}},
  {q:R`Taller 4 · 5.2 #5: \(y=\frac{x^2}{\pi}\), \(x=4\), \(y=0\), eje x`,o:[R`\(\frac{1024}{5\pi}\)`,R`\(\frac{1024\pi}{5}\)`,R`\(\frac{64}{3}\)`,R`\(\frac{1024}{5}\)`],e:'El π de la fórmula se simplifica con el π² del denominador.',h:'R² = x⁴/π²',
   sol:[R`\(R=\frac{x^2}{\pi}\Rightarrow R^2=\frac{x^4}{\pi^2}\).`,R`\(V=\pi\int_0^4\frac{x^4}{\pi^2}dx=\frac1\pi\left[\frac{x^5}{5}\right]_0^4=\frac1\pi\cdot\frac{1024}{5}\).`,R`\(V=\frac{1024}{5\pi}\approx65.19\) u³.`],
   fig:{xr:[-.3,4.4],yr:[-5.6,5.6],gy:2,fills:[{top:x=>x*x/_pi,a:0,b:4,c:'blue'}],curves:[{f:x=>x*x/_pi,a:0,b:4,c:'blue',lab:'y = x²/π',lx:1.2}],axis:{y:0,lab:'eje x'},mirror:true,disk:true,slice:{x:3,top:x=>x*x/_pi,c:'red'}}},
  {q:R`Taller 4 · 5.2 #9: \(y=\sqrt{9-x^2}\), \(y=0\), entre \(x=-2\) y \(x=3\), eje x`,o:[R`\(\frac{100\pi}{3}\)`,R`\(36\pi\)`,R`\(\frac{80\pi}{3}\)`,R`\(18\pi\)`],e:'R² = 9 − x²: la raíz desaparece.',h:'Cuidado con F(−2).',
   sol:[R`\(R^2=9-x^2\). \(V=\pi\int_{-2}^3(9-x^2)dx=\pi\left[9x-\frac{x^3}{3}\right]_{-2}^3\).`,R`En 3: \(27-9=18\). En −2: \(-18+\frac83=-\frac{46}{3}\).`,R`\(V=\pi\left(18+\frac{46}{3}\right)=\frac{100\pi}{3}\approx104.72\) u³.`],
   fig:{xr:[-3.4,3.4],yr:[-3.4,3.4],fills:[{top:x=>sq(9-x*x),a:-2,b:3,c:'blue'}],curves:[{f:x=>sq(9-x*x),a:-3,b:3,c:'blue',lab:'√(9 − x²)',lx:-1.2}],axis:{y:0,lab:'eje x'},mirror:true,disk:true,slice:{x:1,top:x=>sq(9-x*x),c:'red'}}},
  {q:R`Taller 4 · 5.2 #11: \(x=y^2\), \(x=0\), \(y=3\), alrededor del eje y`,o:[R`\(\frac{243\pi}{5}\)`,R`\(9\pi\)`,R`\(\frac{81\pi}{2}\)`,R`\(27\pi\)`],e:'Eje y: rebanada horizontal, R = y².',h:'R² = y⁴',
   sol:[R`Eje y → rebanada horizontal de radio \(R=x=y^2\), con y de 0 a 3.`,R`\(V=\pi\int_0^3y^4dy=\pi\left[\frac{y^5}{5}\right]_0^3=\frac{243\pi}{5}\approx152.68\) u³.`],
   fig:{xr:[-9.5,9.5],yr:[-.3,3.4],gx:3,fills:[{dir:'y',right:y=>y*y,left:y=>0,a:0,b:3,c:'blue'}],ycurves:[{g:y=>y*y,c:'blue',lab:'x = y²',ly:2.2,a:0,b:3}],axis:{x:0,lab:'eje y'},mirror:true,disk:true,slice:{y:2,right:y=>y*y,c:'red'}}},
  {q:R`Taller 4 · 5.2 #4(b): región bajo \(y=4-2x\) en el primer cuadrante, alrededor del eje y`,o:[R`\(\frac{16\pi}{3}\)`,R`\(\frac{32\pi}{3}\)`,R`\(8\pi\)`,R`\(16\pi\)`],e:'Despeja x: x = (4 − y)/2.',h:'Es un cono de radio 2 y altura 4.',
   sol:[R`Eje y → dy. Despeja: \(x=\frac{4-y}{2}\), y de 0 a 4.`,R`\(V=\pi\int_0^4\frac{(4-y)^2}{4}dy=\frac\pi4\left[-\frac{(4-y)^3}{3}\right]_0^4=\frac\pi4\cdot\frac{64}{3}\).`,R`\(V=\frac{16\pi}{3}\approx16.76\) u³. Comprobación: cono \(\frac13\pi r^2h=\frac13\pi\cdot4\cdot4\) ✓.`],
   fig:{xr:[-2.6,2.6],yr:[-.3,4.5],fills:[{top:x=>4-2*x,a:0,b:2,c:'blue'}],curves:[{f:x=>4-2*x,a:0,b:2,c:'blue',lab:'y = 4 − 2x',lx:1.1}],axis:{x:0,lab:'eje y'},mirror:true,disk:true,slice:{y:1.5,right:y=>(4-y)/2,c:'red'}}},
  {q:R`Taller 4 · 5.2 #18: entre \(y=6x\) y \(y=6x^2\), alrededor del eje x`,o:[R`\(\frac{24\pi}{5}\)`,R`\(\pi\)`,R`\(\frac{6\pi}{5}\)`,R`\(12\pi\)`],e:'Arandela: R = 6x, r = 6x².',h:'Cortes en 0 y 1.',
   sol:[R`Cortes: \(6x=6x^2\Rightarrow x=0,\ 1\). En (0, 1) \(6x>6x^2\): \(R=6x\), \(r=6x^2\).`,R`\(V=\pi\int_0^1(36x^2-36x^4)dx=36\pi\left(\frac13-\frac15\right)\).`,R`\(V=36\pi\cdot\frac{2}{15}=\frac{24\pi}{5}\approx15.08\) u³.`],
   fig:{xr:[-.15,1.3],yr:[-6.6,6.6],gy:2,fills:[{top:x=>6*x,bot:x=>6*x*x,a:0,b:1,c:'blue'}],curves:[{f:x=>6*x,a:0,b:1,c:'red',lab:'R = 6x',lx:.25},{f:x=>6*x*x,a:0,b:1,c:'ink',lab:'r = 6x²',lx:.85}],axis:{y:0,lab:'eje x'},mirror:true,washer:true,slice:{x:.6,top:x=>6*x,bot:x=>6*x*x,c:'red'}}},
  {q:R`Taller 4 · 5.2 #19: entre \(x-2y=0\) y \(y^2=4x\), alrededor del eje x`,o:[R`\(\frac{512\pi}{3}\)`,R`\(\frac{1024\pi}{3}\)`,R`\(512\pi\)`,R`\(\frac{256\pi}{3}\)`],e:'Despeja y de las dos: y = x/2 y y = 2√x.',h:'Cortes: (x/2)² = 4x',
   sol:[R`\(y=\frac x2\) y \(y=2\sqrt x\). Cortes: \(\frac{x^2}{4}=4x\Rightarrow x(x-16)=0\Rightarrow x=0,\ 16\).`,R`En \(x=4\): \(2\sqrt4=4>2\) → \(R=2\sqrt x\), \(r=\frac x2\).`,R`\(V=\pi\int_0^{16}\left(4x-\frac{x^2}{4}\right)dx=\pi\left[2x^2-\frac{x^3}{12}\right]_0^{16}=\pi\left(512-\frac{1024}{3}\right)\).`,R`\(V=\frac{512\pi}{3}\approx536.17\) u³.`],
   fig:{xr:[-1,17.5],yr:[-9,9],gx:4,gy:4,fills:[{top:x=>2*sq(x),bot:x=>x/2,a:0,b:16,c:'blue'}],curves:[{f:x=>2*sq(x),a:0,b:16,c:'red',lab:'R = 2√x',lx:3},{f:x=>x/2,a:0,b:16,c:'ink',lab:'r = x/2',lx:11}],axis:{y:0,lab:'eje x'},mirror:true,washer:true,slice:{x:7,top:x=>2*sq(x),bot:x=>x/2,c:'red'}}},
  {q:R`Taller 4 · 5.2 #21: entre \(y=4x\) y \(y=4x^2\), alrededor del eje y`,o:[R`\(\frac{2\pi}{3}\)`,R`\(\frac{4\pi}{3}\)`,R`\(\frac{\pi}{3}\)`,R`\(2\pi\)`],e:'Eje y: arandelas en dy.',h:'x = y/4 y x = √y/2',
   sol:[R`Despeja x: \(x=\frac y4\) y \(x=\frac{\sqrt y}{2}\). Cortes en \(y=0\) y \(y=4\).`,R`En \(y=1\): \(\frac12>\frac14\) → \(R=\frac{\sqrt y}{2}\), \(r=\frac y4\).`,R`\(V=\pi\int_0^4\left(\frac y4-\frac{y^2}{16}\right)dy=\pi\left[\frac{y^2}{8}-\frac{y^3}{48}\right]_0^4=\pi\left(2-\frac43\right)\).`,R`\(V=\frac{2\pi}{3}\approx2.09\) u³.`],
   fig:{xr:[-1.3,1.3],yr:[-.3,4.4],fills:[{dir:'y',right:y=>sq(y)/2,left:y=>y/4,a:0,b:4,c:'blue'}],ycurves:[{g:y=>sq(y)/2,c:'red',lab:'R = √y/2',ly:2.6,a:0,b:4},{g:y=>y/4,c:'ink',lab:'r = y/4',ly:1,a:0,b:4}],axis:{x:0,lab:'eje y'},washer:true,slice:{y:2,right:y=>sq(y)/2,left:y=>y/4,c:'red'}}},
  {hard:true,q:R`Taller 4 · 5.2 #33(a): región entre \(y^2=x^3\), \(x=4\) y \(y=0\) (1er cuadrante), alrededor de \(x=4\)`,o:[R`\(\frac{1024\pi}{35}\)`,R`\(\frac{512\pi}{35}\)`,R`\(\frac{128\pi}{7}\)`,R`\(\frac{1024\pi}{7}\)`],e:'Eje vertical desplazado: disco en dy con R = 4 − y^(2/3).',h:'En x = 4, y = 8.',
   sol:[R`Despeja: \(x=y^{2/3}\). En \(x=4\): \(y=4^{3/2}=8\). Eje vertical → dy, y de 0 a 8.`,R`Radio = distancia de la curva al eje: \(R=4-y^{2/3}\).`,R`\(R^2=16-8y^{2/3}+y^{4/3}\). \(V=\pi\left[16y-\frac{24}{5}y^{5/3}+\frac37y^{7/3}\right]_0^8\).`,R`\(8^{5/3}=32\), \(8^{7/3}=128\): \(\pi\left(128-\frac{768}{5}+\frac{384}{7}\right)\).`,R`Común denominador 35: \(\frac{4480-5376+1920}{35}=\frac{1024}{35}\Rightarrow V=\frac{1024\pi}{35}\approx91.91\) u³.`],
   fig:{xr:[-.5,8.5],yr:[-.5,8.6],gx:2,gy:2,fills:[{dir:'y',right:y=>4,left:y=>y**(2/3),a:0,b:8,c:'blue'}],ycurves:[{g:y=>y**(2/3),c:'blue',lab:'y² = x³',ly:3,a:0,b:8.5}],axis:{x:4,lab:'x = 4'},disk:true,slice:{y:3,right:y=>4,left:y=>y**(2/3),c:'red'}}},
  {hard:true,q:R`Entre \(y=x^2\) y \(y=x\), alrededor de \(y=-1\)`,o:[R`\(\frac{7\pi}{15}\)`,R`\(\frac{2\pi}{15}\)`,R`\(\frac{\pi}{2}\)`,R`\(\frac{8\pi}{15}\)`],e:'Eje debajo: suma 1 a cada altura.',h:'R = x + 1, r = x² + 1',
   sol:[R`Cortes en 0 y 1; arriba \(y=x\). El eje \(y=-1\) está abajo: la curva lejana es la de arriba.`,R`\(R=x-(-1)=x+1\); \(r=x^2+1\).`,R`\(R^2-r^2=(x^2+2x+1)-(x^4+2x^2+1)=2x-x^2-x^4\).`,R`\(V=\pi\int_0^1(2x-x^2-x^4)dx=\pi\left(1-\frac13-\frac15\right)=\frac{7\pi}{15}\approx1.47\) u³.`],
   fig:{xr:[-.2,1.3],yr:[-1.5,1.3],gy:.5,fills:[{top:x=>x,bot:x=>x*x,a:0,b:1,c:'blue'}],curves:[{f:x=>x,a:0,b:1,c:'red',lab:'y = x',lx:.2},{f:x=>x*x,a:0,b:1,c:'ink',lab:'y = x²',lx:.85}],axis:{y:-1,lab:'y = −1'},washer:true,slice:{x:.55,top:x=>x,bot:x=>x*x,c:'red'}}},
 ],
 secciones:[
  {q:R`Taller 4 #23: base \(x^2+y^2\le4\), secciones ⟂ al eje x son cuadrados. Volumen:`,o:[R`\(\frac{128}{3}\)`,R`\(\frac{64}{3}\)`,R`\(16\pi\)`,R`\(\frac{32}{3}\)`],e:'Lado = 2√(4 − x²).',h:'s va de abajo a arriba del círculo.',
   sol:[R`En la posición x la rebanada va de \(-\sqrt{4-x^2}\) a \(\sqrt{4-x^2}\): \(s=2\sqrt{4-x^2}\).`,R`\(A(x)=s^2=4(4-x^2)\).`,R`\(V=\int_{-2}^24(4-x^2)dx=8\int_0^2(4-x^2)dx=8\left(8-\frac83\right)=\frac{128}{3}\approx42.67\) u³.`],
   fig:FIG.secciones&&FIG.secciones[1]},
  {q:R`Taller 4 #24: misma base, pero las secciones son triángulos isósceles de altura 4. Volumen:`,o:[R`\(8\pi\)`,R`\(16\pi\)`,R`\(\frac{128}{3}\)`,R`\(4\pi\)`],e:'A = ½·base·altura = 4√(4 − x²); la integral es un semicírculo.',h:'∫√(4 − x²) de −2 a 2 = área de semicírculo de radio 2.',
   sol:[R`Base del triángulo \(s=2\sqrt{4-x^2}\), altura 4: \(A=\frac12\cdot2\sqrt{4-x^2}\cdot4=4\sqrt{4-x^2}\).`,R`\(V=4\int_{-2}^2\sqrt{4-x^2}\,dx\).`,R`Esa integral es el área de un semicírculo de radio 2: \(\frac12\pi\cdot4=2\pi\).`,R`\(V=4\cdot2\pi=8\pi\approx25.13\) u³.`],
   fig:{xr:[-2.6,3],yr:[-2.9,3.1],fills:[{top:x=>sq(4-x*x),bot:x=>-sq(4-x*x),a:-2,b:2,c:'blue',hatch:true}],curves:[{f:x=>sq(4-x*x),c:'blue',a:-2,b:2},{f:x=>-sq(4-x*x),c:'blue',a:-2,b:2}],section:{x:.5,top:x=>sq(4-x*x),bot:x=>-sq(4-x*x),c:'purple',shape:'tri'},labels:[[.2,-2.6,'triángulo de altura 4','purple']]}},
  {q:R`Taller 4 #25: base bajo \(y=\sqrt{\cos x}\), \(-\frac\pi2\le x\le\frac\pi2\), cuadrados. Volumen:`,o:['2','1','π',R`\(\frac\pi2\)`],e:'A = (√cos x)² = cos x.',h:'∫cos x = sen x',
   sol:[R`Lado = altura de la base: \(s=\sqrt{\cos x}\Rightarrow A=s^2=\cos x\).`,R`\(V=\int_{-\pi/2}^{\pi/2}\cos x\,dx=\left[\sin x\right]_{-\pi/2}^{\pi/2}=1-(-1)=2\) u³.`],
   fig:FIG.secciones&&FIG.secciones[3]},
  {q:R`Taller 4 #26: base entre \(y=1-x^2\) y \(y=1-x^4\), secciones ⟂ al eje x son cuadrados. Volumen:`,o:[R`\(\frac{16}{315}\)`,R`\(\frac{8}{315}\)`,R`\(\frac{4}{15}\)`,R`\(\frac{16}{105}\)`],e:'Lado = (1 − x⁴) − (1 − x²) = x² − x⁴.',h:'Para |x| < 1, x⁴ < x².',
   sol:[R`Cortes: \(1-x^2=1-x^4\Rightarrow x^2(x^2-1)=0\Rightarrow x=0,\pm1\). Para \(|x|<1\), \(x^4<x^2\) → arriba \(1-x^4\).`,R`Lado: \(s=(1-x^4)-(1-x^2)=x^2-x^4\). \(A=s^2=x^4-2x^6+x^8\).`,R`\(V=2\int_0^1(x^4-2x^6+x^8)dx=2\left(\frac15-\frac27+\frac19\right)\).`,R`Común denominador 315: \(\frac{63-90+35}{315}=\frac{8}{315}\Rightarrow V=\frac{16}{315}\approx0.051\) u³.`],
   fig:{xr:[-1.3,1.5],yr:[-.1,1.15],gy:.25,fills:[{top:x=>1-x**4,bot:x=>1-x*x,a:-1,b:1,c:'blue',hatch:true}],curves:[{f:x=>1-x**4,a:-1.1,b:1.1,c:'red',lab:'1 − x⁴',lx:-1.25},{f:x=>1-x*x,a:-1.1,b:1.1,c:'ink',lab:'1 − x²',lx:.75}],section:{x:.7,top:x=>1-x**4,bot:x=>1-x*x,c:'purple'}}},
  {q:R`Taller 4 #32: base entre \(y=\sqrt x\) y \(y=x^2\), secciones ⟂ al eje x son semicírculos con diámetro en la base. Volumen:`,o:[R`\(\frac{9\pi}{560}\)`,R`\(\frac{9\pi}{70}\)`,R`\(\frac{\pi}{30}\)`,R`\(\frac{9\pi}{280}\)`],e:'Diámetro √x − x²; área (π/8)s².',h:'(√x − x²)² = x − 2x^(5/2) + x⁴',
   sol:[R`Cortes en 0 y 1; arriba \(\sqrt x\). Diámetro \(s=\sqrt x-x^2\).`,R`\(A=\frac\pi8s^2=\frac\pi8\left(x-2x^{5/2}+x^4\right)\).`,R`\(\int_0^1\left(x-2x^{5/2}+x^4\right)dx=\frac12-\frac47+\frac15=\frac{35-40+14}{70}=\frac{9}{70}\).`,R`\(V=\frac\pi8\cdot\frac{9}{70}=\frac{9\pi}{560}\approx0.050\) u³.`],
   fig:{xr:[-.2,1.4],yr:[-.15,1.2],gy:.25,fills:[{top:sq,bot:x=>x*x,a:0,b:1,c:'blue',hatch:true}],curves:[{f:sq,a:0,b:1.3,c:'red',lab:'√x',lx:.1},{f:x=>x*x,a:0,b:1.1,c:'ink',lab:'x²',lx:.95}],section:{x:.45,top:sq,bot:x=>x*x,c:'purple',shape:'semi'}}},
  {q:R`Área de la sección cuando es un triángulo equilátero de lado s:`,o:[R`\(\frac{\sqrt3}{4}s^2\)`,R`\(\frac12s^2\)`,R`\(\frac{\sqrt3}{2}s^2\)`,R`\(\frac\pi8s^2\)`],e:'Altura (√3/2)s.',h:'Pitágoras con media base s/2.',
   sol:[R`Altura: \(h=\sqrt{s^2-\left(\frac s2\right)^2}=\sqrt{\frac34s^2}=\frac{\sqrt3}{2}s\).`,R`\(A=\frac12\cdot s\cdot\frac{\sqrt3}{2}s=\frac{\sqrt3}{4}s^2\).`]},
  {hard:true,q:R`Base: \(x^2+y^2\le1\). Secciones ⟂ al eje x: triángulos equiláteros. Volumen:`,o:[R`\(\frac{4\sqrt3}{3}\)`,R`\(\frac{2\sqrt3}{3}\)`,R`\(\sqrt3\pi\)`,R`\(\frac{\sqrt3}{3}\)`],e:'s = 2√(1 − x²).',h:'A = (√3/4)s²',
   sol:[R`\(s=2\sqrt{1-x^2}\Rightarrow A=\frac{\sqrt3}{4}\cdot4(1-x^2)=\sqrt3(1-x^2)\).`,R`\(V=\sqrt3\int_{-1}^1(1-x^2)dx=\sqrt3\cdot\frac43=\frac{4\sqrt3}{3}\approx2.31\) u³.`],
   fig:FIG.secciones&&FIG.secciones[5]},
 ],
 longitud:[
  {q:R`Taller 4 · 5.4 #2: \(y=\frac23(x^2+1)^{3/2}\), de \(x=1\) a \(x=2\)`,o:[R`\(\frac{17}{3}\)`,R`\(\frac{14}{3}\)`,'5',R`\(\frac{19}{3}\)`],e:'1 + y′² = (2x² + 1)².',h:'y′ = 2x√(x² + 1)',
   sol:[R`Cadena: \(y'=\frac23\cdot\frac32(x^2+1)^{1/2}\cdot2x=2x\sqrt{x^2+1}\).`,R`\(1+(y')^2=1+4x^2(x^2+1)=4x^4+4x^2+1=(2x^2+1)^2\).`,R`\(L=\int_1^2(2x^2+1)dx=\left[\frac{2x^3}{3}+x\right]_1^2=\frac{22}{3}-\frac53=\frac{17}{3}\approx5.67\) u.`],
   fig:FIG.longitud&&FIG.longitud[0]},
  {q:R`Taller 4 · 5.4 #3: \(y=(4-x^{2/3})^{3/2}\), de \(x=1\) a \(x=8\)`,o:['9','7','12',R`\(\frac{21}{2}\)`],e:'1 + y′² = 4/x^(2/3).',h:'y′ = −x^(−1/3)√(4 − x^(2/3))',
   sol:[R`\(y'=\frac32(4-x^{2/3})^{1/2}\cdot\left(-\frac23x^{-1/3}\right)=-x^{-1/3}\sqrt{4-x^{2/3}}\).`,R`\((y')^2=\frac{4-x^{2/3}}{x^{2/3}}=\frac{4}{x^{2/3}}-1\Rightarrow1+(y')^2=\frac{4}{x^{2/3}}\).`,R`\(\sqrt{\frac{4}{x^{2/3}}}=2x^{-1/3}\). \(L=\int_1^82x^{-1/3}dx=2\cdot\frac32\left[x^{2/3}\right]_1^8\).`,R`\(L=3(4-1)=9\) u.`],
   fig:{xr:[0,8.6],yr:[0,8.6],gx:2,gy:2,curves:[{f:x=>(4-x**(2/3))**1.5,a:0,b:8,c:'ink',dash:true}],arc:{f:x=>(4-x**(2/3))**1.5,a:1,b:8,c:'red'},labels:[[4.4,2.2,'L = 9','red']]}},
  {q:R`Taller 4 · 5.4 #4: \(y=\frac{x^4+3}{6x}\), de \(x=1\) a \(x=3\)`,o:[R`\(\frac{14}{3}\)`,R`\(\frac{13}{3}\)`,'5',R`\(\frac{40}{9}\)`],e:'Separa la fracción y usa AB = ¼.',h:'y = x³/6 + 1/(2x)',
   sol:[R`\(y=\frac{x^3}{6}+\frac{1}{2x}\Rightarrow y'=\frac{x^2}{2}-\frac{1}{2x^2}\).`,R`\(AB=\frac{x^2}{2}\cdot\frac{1}{2x^2}=\frac14\) → \(\sqrt{1+y'^2}=\frac{x^2}{2}+\frac{1}{2x^2}\).`,R`\(L=\left[\frac{x^3}{6}-\frac{1}{2x}\right]_1^3=\left(\frac{27}{6}-\frac16\right)-\left(\frac16-\frac12\right)=\frac{13}{3}+\frac13\).`,R`\(L=\frac{14}{3}\approx4.67\) u.`],
   fig:FIG.longitud&&FIG.longitud[2]},
  {q:R`Taller 4 · 5.4 #1: \(y=4x^{3/2}\) entre \(x=\frac13\) y \(x=5\)`,o:[R`\(\frac{181\sqrt{181}-13\sqrt{13}}{54}\)`,R`\(\frac{181\sqrt{181}-13\sqrt{13}}{36}\)`,R`\(\frac{2}{3}(181^{3/2}-13^{3/2})\)`,R`\(\frac{181\sqrt{181}}{54}\)`],e:'Sustitución u = 1 + 36x.',h:'∫√(1 + 36x) dx',
   sol:[R`\(y'=6x^{1/2}\Rightarrow1+(y')^2=1+36x\).`,R`\(u=1+36x,\ du=36\,dx\). Límites: \(x=\frac13\to u=13\); \(x=5\to u=181\).`,R`\(L=\frac1{36}\int_{13}^{181}u^{1/2}du=\frac1{36}\cdot\frac23\left[u^{3/2}\right]_{13}^{181}=\frac{181\sqrt{181}-13\sqrt{13}}{54}\).`,R`Con calculadora: \(\approx44.23\) u.`],
   fig:{xr:[0,5.5],yr:[0,46],gx:1,gy:10,curves:[{f:x=>4*x**1.5,c:'ink',dash:true}],arc:{f:x=>4*x**1.5,a:1/3,b:5,c:'red'}}},
  {q:R`Taller 4 · 5.4 #7: \(x=\frac{t^3}{3},\ y=\frac{t^2}{2}\), \(0\le t\le1\)`,o:[R`\(\frac{2\sqrt2-1}{3}\)`,R`\(\frac{2\sqrt2}{3}\)`,R`\(\frac{\sqrt2-1}{3}\)`,R`\(\frac{2\sqrt2-1}{2}\)`],e:'Rapidez t√(t² + 1).',h:'u = t² + 1',
   sol:[R`\(x'=t^2,\ y'=t\Rightarrow\sqrt{t^4+t^2}=t\sqrt{t^2+1}\) (t ≥ 0).`,R`\(u=t^2+1,\ du=2t\,dt\): \(\int_0^1t\sqrt{t^2+1}\,dt=\frac12\int_1^2u^{1/2}du=\frac13\left[u^{3/2}\right]_1^2\).`,R`\(L=\frac{2\sqrt2-1}{3}\approx0.61\) u.`],
   fig:FIG.longitud&&FIG.longitud[4]},
  {q:R`Taller 4 · 5.4 #8: \(x=3t^2+2,\ y=2t^3-\frac12\), \(1\le t\le4\)`,o:[R`\(2(17\sqrt{17}-2\sqrt2)\)`,R`\(17\sqrt{17}-2\sqrt2\)`,R`\(\frac23(17\sqrt{17}-2\sqrt2)\)`,R`\(6(17\sqrt{17}-2\sqrt2)\)`],e:'Rapidez 6t√(1 + t²).',h:'x′ = 6t, y′ = 6t²',
   sol:[R`\(x'=6t,\ y'=6t^2\Rightarrow\sqrt{36t^2+36t^4}=6t\sqrt{1+t^2}\).`,R`\(L=\int_1^46t\sqrt{1+t^2}\,dt=6\cdot\frac13\left[(1+t^2)^{3/2}\right]_1^4=2\left(17^{3/2}-2^{3/2}\right)\).`,R`\(L=2(17\sqrt{17}-2\sqrt2)\approx134.53\) u.`],
   fig:{xr:[0,52],yr:[0,130],gx:10,gy:25,params:[{px:t=>3*t*t+2,py:t=>2*t**3-.5,t0:0,t1:4.2,c:'ink'}],arc:{px:t=>3*t*t+2,py:t=>2*t**3-.5,t0:1,t1:4,c:'red'}}},
  {q:R`Taller 4 · 5.4 #10: \(x=\sqrt5\sin2t-2,\ y=\sqrt5\cos2t-\sqrt3\), \(0\le t\le\frac\pi4\)`,o:[R`\(\frac{\sqrt5\,\pi}{2}\)`,R`\(\sqrt5\,\pi\)`,R`\(\frac{\sqrt5\,\pi}{4}\)`,R`\(2\sqrt5\)`],e:'Rapidez constante 2√5.',h:'sen² + cos² = 1',
   sol:[R`\(x'=2\sqrt5\cos2t,\ y'=-2\sqrt5\sin2t\).`,R`\(\sqrt{20\cos^22t+20\sin^22t}=\sqrt{20}=2\sqrt5\).`,R`\(L=\int_0^{\pi/4}2\sqrt5\,dt=2\sqrt5\cdot\frac\pi4=\frac{\sqrt5\,\pi}{2}\approx3.51\) u (un cuarto de circunferencia de radio √5).`],
   fig:{xr:[-4.8,.8],yr:[-4.4,.8],params:[{px:t=>Math.sqrt(5)*Math.sin(2*t)-2,py:t=>Math.sqrt(5)*Math.cos(2*t)-Math.sqrt(3),t0:0,t1:_pi,c:'ink'}],arc:{px:t=>Math.sqrt(5)*Math.sin(2*t)-2,py:t=>Math.sqrt(5)*Math.cos(2*t)-Math.sqrt(3),t0:0,t1:_pi/4,c:'red'}}},
  {q:R`Taller 4 · 5.4 #12: segmento \(2y-3x+3=0\) entre \(y=1\) y \(y=3\), integrando en y`,o:[R`\(\frac{2\sqrt{13}}{3}\)`,R`\(\frac{\sqrt{13}}{3}\)`,R`\(2\sqrt{13}\)`,R`\(\frac{4}{3}\)`],e:'x = (2y + 3)/3, x′ = 2/3.',h:'Verifica con la fórmula de distancia.',
   sol:[R`Despeja: \(x=\frac{2y+3}{3}\Rightarrow\frac{dx}{dy}=\frac23\).`,R`\(L=\int_1^3\sqrt{1+\frac49}\,dy=\frac{\sqrt{13}}{3}\cdot2=\frac{2\sqrt{13}}{3}\approx2.40\) u.`,R`Verificación: puntos \(\left(\frac53,1\right)\) y \((3,3)\): \(\sqrt{\left(\frac43\right)^2+2^2}=\sqrt{\frac{52}{9}}=\frac{2\sqrt{13}}{3}\) ✓.`],
   fig:{xr:[0,3.6],yr:[0,3.6],curves:[{f:x=>(3*x-3)/2,c:'ink',dash:true}],arc:{f:x=>(3*x-3)/2,a:5/3,b:3,c:'red'},pts:[[5/3,1,'(5/3, 1)'],[3,3,'(3, 3)']]}},
  {q:R`Taller 4 · 5.4 #13: integral que da la longitud de \(x=t,\ y=t^2\), \(0\le t\le2\)`,o:[R`\(\int_0^2\sqrt{1+4t^2}\,dt\)`,R`\(\int_0^2\sqrt{1+2t}\,dt\)`,R`\(\int_0^2(1+4t^2)\,dt\)`,R`\(\int_0^2\sqrt{1+t^4}\,dt\)`],e:'Solo plantear; se aproxima con Simpson.',h:'x′ = 1, y′ = 2t',
   sol:[R`\(x'=1,\ y'=2t\Rightarrow\sqrt{1+4t^2}\).`,R`\(L=\int_0^2\sqrt{1+4t^2}\,dt\approx4.65\) u (puedes comprobarlo en la calculadora, modo ∫).`],
   fig:{xr:[0,2.4],yr:[0,4.4],curves:[{f:x=>x*x,c:'ink',dash:true}],arc:{f:x=>x*x,a:0,b:2,c:'red'}}},
  {hard:true,q:R`Taller 4 · 5.4 #5: \(x=\frac{y^4}{16}+\frac{1}{2y^2}\), entre \(y=-3\) y \(y=-2\)`,o:[R`\(\frac{595}{144}\)`,R`\(-\frac{595}{144}\)`,R`\(\frac{721}{144}\)`,R`\(\frac{65}{16}\)`],e:'Ojo con la sugerencia: √(u²) = −u cuando u < 0.',h:'x′ = y³/4 − 1/y³',
   sol:[R`\(x'=\frac{y^3}{4}-\frac{1}{y^3}\). \(AB=\frac{y^3}{4}\cdot\frac1{y^3}=\frac14\) ✓ → \(1+x'^2=\left(\frac{y^3}{4}+\frac{1}{y^3}\right)^2\).`,R`Para y negativo, \(\frac{y^3}{4}+\frac1{y^3}<0\), así que \(\sqrt{u^2}=-u\).`,R`\(L=-\int_{-3}^{-2}\left(\frac{y^3}{4}+y^{-3}\right)dy=-\left[\frac{y^4}{16}-\frac{1}{2y^2}\right]_{-3}^{-2}\).`,R`En −2: \(1-\frac18=\frac78\). En −3: \(\frac{81}{16}-\frac1{18}=\frac{721}{144}\).`,R`\(L=-\left(\frac{126}{144}-\frac{721}{144}\right)=\frac{595}{144}\approx4.13\) u.`]},
  {hard:true,q:R`Taller 4 · 5.4 #6: \(30xy^3-y^8=15\), entre \(y=1\) y \(y=3\)`,o:[R`\(\frac{1154}{135}\)`,R`\(\frac{121}{15}\)`,R`\(\frac{2308}{135}\)`,R`\(\frac{577}{135}\)`],e:'Despeja x(y) y usa AB = ¼.',h:'x = y⁵/30 + 1/(2y³)',
   sol:[R`Despeja: \(x=\frac{y^8+15}{30y^3}=\frac{y^5}{30}+\frac{1}{2y^3}\).`,R`\(x'=\frac{y^4}{6}-\frac{3}{2y^4}\). \(AB=\frac{y^4}{6}\cdot\frac{3}{2y^4}=\frac14\) ✓ → \(\sqrt{1+x'^2}=\frac{y^4}{6}+\frac{3}{2y^4}\).`,R`\(L=\left[\frac{y^5}{30}-\frac{1}{2y^3}\right]_1^3=\left(\frac{243}{30}-\frac1{54}\right)-\left(\frac1{30}-\frac12\right)\).`,R`\(=\frac{121}{15}+\frac12-\frac1{54}=\frac{2178+135-5}{270}=\frac{1154}{135}\approx8.55\) u.`]},
 ],
 boss:[
  {q:R`\(\displaystyle\int_0^1\frac{2x}{1+x^2}\,dx\)`,o:['ln 2','1',R`\(\frac\pi4\)`,'2 ln 2'],e:'u = 1 + x².',h:'El numerador es la derivada del denominador.',
   sol:[R`\(u=1+x^2,\ du=2x\,dx\). Límites 1 y 2.`,R`\(\int_1^2\frac{du}{u}=\ln2-\ln1=\ln2\approx0.693\).`]},
  {q:R`Área entre \(y=x^2\) y \(y=x^3\), \(0\le x\le1\)`,o:[R`\(\frac1{12}\)`,R`\(\frac7{12}\)`,R`\(\frac14\)`,R`\(\frac13\)`],e:'En (0, 1), x² > x³.',h:'Prueba x = ½.',
   sol:[R`En \(x=\frac12\): \(\frac14>\frac18\) → arriba \(x^2\).`,R`\(A=\int_0^1(x^2-x^3)dx=\frac13-\frac14=\frac1{12}\) u².`],
   fig:{xr:[-.1,1.2],yr:[-.1,1.2],gy:.25,fills:[{top:x=>x*x,bot:x=>x**3,a:0,b:1,c:'blue'}],curves:[{f:x=>x*x,c:'red',lab:'x²',lx:.55},{f:x=>x**3,c:'ink',lab:'x³',lx:.85}]}},
  {q:R`Taller 4 · 5.2 #16: \(x=\sqrt{4-y^2}\), \(x=0\), alrededor del eje y`,o:[R`\(\frac{32\pi}{3}\)`,R`\(\frac{16\pi}{3}\)`,R`\(8\pi\)`,R`\(\frac{64\pi}{3}\)`],e:'Es una esfera de radio 2.',h:'R² = 4 − y²',
   sol:[R`Rebanada horizontal: \(R=\sqrt{4-y^2}\Rightarrow R^2=4-y^2\), y de −2 a 2.`,R`\(V=\pi\int_{-2}^2(4-y^2)dy=2\pi\left(8-\frac83\right)=\frac{32\pi}{3}\approx33.51\) u³.`,R`Comprobación: esfera \(\frac43\pi r^3=\frac43\pi\cdot8\) ✓.`],
   fig:{xr:[-2.6,2.6],yr:[-2.4,2.4],fills:[{dir:'y',right:y=>sq(4-y*y),left:y=>0,a:-2,b:2,c:'blue'}],ycurves:[{g:y=>sq(4-y*y),c:'blue',lab:'x = √(4 − y²)',ly:1.6,a:-2,b:2}],axis:{x:0,lab:'eje y'},mirror:true,disk:true,slice:{y:.8,right:y=>sq(4-y*y),c:'red'}}},
  {q:R`Taller 4 · 5.2 #10: \(y=x^{2/3}\), \(y=0\), entre \(x=1\) y \(x=27\), eje x`,o:[R`\(\frac{6558\pi}{7}\)`,R`\(\frac{6561\pi}{7}\)`,R`\(\frac{2186\pi}{7}\)`,R`\(\frac{6558\pi}{5}\)`],e:'R² = x^(4/3).',h:'27^(7/3) = 3⁷',
   sol:[R`\(R^2=x^{4/3}\). \(V=\pi\int_1^{27}x^{4/3}dx=\pi\cdot\frac37\left[x^{7/3}\right]_1^{27}\).`,R`\(27^{7/3}=3^7=2187\): \(V=\frac{3\pi}{7}(2187-1)=\frac{6558\pi}{7}\approx2943.2\) u³.`]},
  {q:R`Taller 4 · 5.2 #12: \(x=\frac2y\), \(y=2\), \(y=6\), \(x=0\), eje y`,o:[R`\(\frac{4\pi}{3}\)`,R`\(\frac{2\pi}{3}\)`,R`\(4\pi\ln3\)`,R`\(\frac{8\pi}{3}\)`],e:'R² = 4/y².',h:'∫y⁻² = −1/y',
   sol:[R`\(R=\frac2y\Rightarrow R^2=\frac4{y^2}\).`,R`\(V=4\pi\int_2^6y^{-2}dy=4\pi\left[-\frac1y\right]_2^6=4\pi\left(\frac12-\frac16\right)=\frac{4\pi}{3}\approx4.19\) u³.`]},
  {q:R`Taller 4 #17: media elipse \(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\) (arriba) girada alrededor del eje x`,o:[R`\(\frac43\pi ab^2\)`,R`\(\frac43\pi a^2b\)`,R`\(\frac23\pi ab^2\)`,R`\(\pi ab^2\)`],e:'R² = b²(1 − x²/a²).',h:'Integra de −a a a.',
   sol:[R`\(y^2=b^2\left(1-\frac{x^2}{a^2}\right)=R^2\).`,R`\(V=\pi b^2\int_{-a}^a\left(1-\frac{x^2}{a^2}\right)dx=\pi b^2\left(2a-\frac{2a}{3}\right)\).`,R`\(V=\frac43\pi ab^2\) (si a = b = r sale la esfera ✓).`]},
  {q:R`Taller 4 · 5.4 #9: \(x=4\sin t,\ y=4\cos t-5\), \(0\le t\le\pi\)`,o:[R`\(4\pi\)`,R`\(8\pi\)`,R`\(2\pi\)`,'16'],e:'Rapidez constante 4.',h:'sen² + cos² = 1',
   sol:[R`\(x'=4\cos t,\ y'=-4\sin t\Rightarrow\sqrt{16}=4\).`,R`\(L=\int_0^\pi4\,dt=4\pi\approx12.57\) u (media circunferencia de radio 4).`],
   fig:FIG.longitud&&FIG.longitud[6]},
  {q:R`Secciones: base entre \(y=x\) y \(y=x^2\); cuadrados ⟂ al eje x. Volumen:`,o:[R`\(\frac1{30}\)`,R`\(\frac16\)`,R`\(\frac1{15}\)`,R`\(\frac{\pi}{30}\)`],e:'s = x − x².',h:'(x − x²)² = x² − 2x³ + x⁴',
   sol:[R`\(s=x-x^2\Rightarrow A=x^2-2x^3+x^4\).`,R`\(V=\int_0^1(x^2-2x^3+x^4)dx=\frac13-\frac12+\frac15=\frac{10-15+6}{30}=\frac1{30}\) u³.`]},
  {hard:true,q:R`Taller 4 · 5.2 #14: \(x=y^{2/3}\), \(y=27\), \(x=0\), alrededor del eje y`,o:[R`\(\frac{6561\pi}{7}\)`,R`\(\frac{2187\pi}{7}\)`,R`\(\frac{6561\pi}{5}\)`,R`\(729\pi\)`],e:'R² = y^(4/3).',h:'27^(7/3) = 2187',
   sol:[R`\(R=y^{2/3}\Rightarrow R^2=y^{4/3}\). \(V=\pi\int_0^{27}y^{4/3}dy=\pi\cdot\frac37\cdot27^{7/3}\).`,R`\(V=\frac{3\cdot2187\pi}{7}=\frac{6561\pi}{7}\approx2944.6\) u³.`]},
  {hard:true,q:R`Taller 4 · 5.2 #34(b): región entre \(y^2=x^3\), \(y=8\) y \(x=0\), alrededor de \(y=8\)`,o:[R`\(\frac{576\pi}{5}\)`,R`\(\frac{4096\pi}{35}\)`,R`\(\frac{1024\pi}{5}\)`,R`\(\frac{512\pi}{7}\)`],e:'Disco en dx con R = 8 − x^(3/2).',h:'y = x^(3/2); x de 0 a 4.',
   sol:[R`\(y=x^{3/2}\); con \(y=8\): \(x=4\). Eje horizontal \(y=8\) → rebanada vertical, x de 0 a 4.`,R`\(R=8-x^{3/2}\Rightarrow R^2=64-16x^{3/2}+x^3\).`,R`\(V=\pi\left[64x-\frac{32}{5}x^{5/2}+\frac{x^4}{4}\right]_0^4=\pi\left(256-\frac{1024}{5}+64\right)\).`,R`\(=\pi\left(320-\frac{1024}{5}\right)=\pi\cdot\frac{1600-1024}{5}=\frac{576\pi}{5}\approx361.91\) u³.`]},
 ],
};
(()=>{
  LV.forEach(L=>{
    if(QUIZ[L.id]) L.qs=QUIZ[L.id].filter(q=>q&&q.o);
    if(TOPIC_INFO[L.id]) L.lore=TOPIC_INFO[L.id]+L.lore;
    if(L.id==='area'||L.id==='graficar') L.lore=L.lore+GRAPH_GUIDE();
  });
})();
