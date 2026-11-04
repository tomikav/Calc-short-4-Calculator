/* ============ CÁLCULO INTEGRAL AVANZADO: IMPROPIAS, APLICACIONES FÍSICAS, SERIES, PARAMÉTRICAS Y POLARES ============ */
LV.push(
/* ---------------- INTEGRALES IMPROPIAS ---------------- */
{ id:'impropias', n:'Integrales impropias', sub:'Intervalos infinitos y asíntotas verticales · convergencia y comparación', tgt:'AREA_INFINITA',
  req:['definida','lhopital'], uses:'Criterio de la integral para series, probabilidad (distribuciones), transformada de Laplace',
  cites:['osc2|§3.7','paul2|Improper Integrals','stewart1|§7.8'], see:['impropia','serie-p'],
  lore: R`
  <div class="why">¿Puede una región <b>infinitamente larga</b> tener área finita? Sí. La [[integral-definida|integral definida]] exige [a, b] finito y f acotada; una [[impropia|integral impropia]] rompe una de las dos y se define con un [[limite|límite]].</div>
  <h3>Tipo 1 · Intervalo infinito</h3>
  <div class="formula">\[\int_a^\infty f(x)\,dx=\lim_{t\to\infty}\int_a^tf(x)\,dx\qquad\int_{-\infty}^\infty f=\int_{-\infty}^cf+\int_c^\infty f\]</div>
  <p>Si el límite es un número, la integral <b>converge</b>; si es ±∞ o no existe, <b>diverge</b>. En la doble (−∞ a ∞) <b>ambas</b> partes deben converger.</p>
  <h3>Tipo 2 · Integrando discontinuo (asíntota vertical)</h3>
  <div class="formula">\[f\text{ discontinua en }b:\ \int_a^bf=\lim_{t\to b^-}\int_a^tf\qquad\text{en un punto interior }c:\ \int_a^b=\int_a^c+\int_c^b\]</div>
  <div class="trap">\(\int_{-1}^1\frac{dx}{x^2}\) <b>no</b> es \(\left[-\frac1x\right]_{-1}^1=-2\) (¡un área negativa de una función positiva!). Hay una asíntota en x = 0 y la integral diverge. Revisa siempre si el integrando explota dentro del intervalo.</div>
  <h3>La integral p (la más importante)</h3>
  <div class="formula">\[\int_1^\infty\frac{dx}{x^p}\ \begin{cases}\text{converge a }\frac{1}{p-1}&p>1\\\text{diverge}&p\le1\end{cases}\qquad\int_0^1\frac{dx}{x^p}\ \begin{cases}\text{converge}&p<1\\\text{diverge}&p\ge1\end{cases}\]</div>
  <p>\(\frac1x\) está justo en la frontera: diverge en ambos lados (\(\ln t\to\infty\)). Este resultado da la [[serie-p|serie p]].</p>
  <h3>Criterio de comparación</h3>
  <p>Si \(0\le f\le g\) para x ≥ a: \(\int g\) converge ⇒ \(\int f\) converge; \(\int f\) diverge ⇒ \(\int g\) diverge. (El de abajo de uno que converge converge; el de arriba de uno que diverge diverge.)</p>
  <div class="formula">\[\int_1^\infty e^{-x^2}dx:\quad e^{-x^2}\le e^{-x}\ (x\ge1)\ \text{ y }\ \int_1^\infty e^{-x}dx=\tfrac1e\ \Rightarrow\ \text{converge}\]</div>
  <h3>La trompeta de Gabriel</h3>
  <p>Girar \(y=\frac1x\) (x ≥ 1) alrededor del eje x da un sólido de <b>volumen finito</b> \(\pi\int_1^\infty\frac{dx}{x^2}=\pi\) pero <b>superficie infinita</b> (\(2\pi\int_1^\infty\frac1x\sqrt{1+x^{-4}}dx\ge2\pi\int\frac{dx}x=\infty\)). Torricelli, 1643: "se puede llenar de pintura pero no pintar"[^osc2|§3.7].</p>
  <h3>Integral de Gauss</h3>
  <div class="formula">\[\int_{-\infty}^{\infty}e^{-x^2}dx=\sqrt\pi\]</div>
  <p>No tiene antiderivada elemental; se calcula con una [[integral-doble|integral doble]] en [[polares-dobles|polares]] (lo verás en multivariable). Es la base de la campana de Gauss en estadística.</p>`,
  ex:[
   {t:'Tipo 1 con exponencial', q:R`\(\displaystyle\int_0^\infty xe^{-x}dx\)`, s:[
     R`Partes (u = x, dv = e⁻ˣdx): \(\int xe^{-x}dx=-xe^{-x}-e^{-x}\)`,
     R`\(\displaystyle\lim_{t\to\infty}\left[-xe^{-x}-e^{-x}\right]_0^t=\lim_{t\to\infty}\left(-te^{-t}-e^{-t}\right)-(0-1)\)`,
     R`\(te^{-t}=\frac{t}{e^t}\to0\) (L'Hôpital) → resultado: \(0+1=1\). Converge.`]},
   {t:'Tipo 2 con raíz', q:R`\(\displaystyle\int_0^4\frac{dx}{\sqrt x}\)`, s:[
     R`Asíntota en x = 0: \(\displaystyle\lim_{t\to0^+}\int_t^4x^{-1/2}dx=\lim_{t\to0^+}\left[2\sqrt x\right]_t^4\)`, R`\(=4-\lim2\sqrt t=4\). Converge (p = ½ < 1).`]},
   {t:'Doblemente infinita', q:R`\(\displaystyle\int_{-\infty}^{\infty}\frac{dx}{1+x^2}\)`, s:[
     R`Parte en 0: \(\int_0^\infty\frac{dx}{1+x^2}=\lim_{t\to\infty}\arctan t=\frac\pi2\)`, R`Por simetría (función par) la otra mitad también da \(\frac\pi2\).`, R`Total: π.`]},
  ],
  qs:[
   {q:R`\(\displaystyle\int_1^\infty\frac{dx}{x^3}\)`, o:[R`\(\frac12\)`,'Diverge','1',R`\(\frac13\)`], e:'p = 3 > 1: 1/(p − 1) = 1/2.', h:'Integral p.'},
   {q:R`\(\displaystyle\int_1^\infty\frac{dx}{\sqrt x}\)`, o:['Diverge','2','1',R`\(\frac12\)`], e:'p = 1/2 ≤ 1.', h:'p ≤ 1 diverge en el infinito.'},
   {q:R`\(\displaystyle\int_0^\infty e^{-2x}dx\)`, o:[R`\(\frac12\)`,'2','Diverge','1'], e:'[−e^{−2x}/2] de 0 a ∞ = 1/2.', h:'e^{−2t} → 0.'},
   {q:R`\(\displaystyle\int_{-1}^{1}\frac{dx}{x^2}\)`, o:['Diverge','−2','2','0'], e:'Asíntota en 0: ∫₀¹ dx/x² diverge.', h:'¿Explota dentro del intervalo?'},
   {q:R`\(\displaystyle\int_0^1\frac{dx}{x^{2/3}}\)`, o:['3','Diverge',R`\(\frac13\)`,R`\(\frac32\)`], e:'[3x^{1/3}]₀¹ = 3 (p < 1 cerca de 0).', h:'Tipo 2.'},
   {q:R`Si \(0\le f\le\frac1{x^2}\) para x ≥ 1, \(\int_1^\infty f\)…`, o:['Converge','Diverge','No se sabe','Vale 1'], e:'Comparación con una que converge.', h:'Está por debajo de algo finito.'},
  ]},
/* ---------------- APLICACIONES FÍSICAS ---------------- */
{ id:'aplmas', n:'Superficie, trabajo y centro de masa', sub:'Área de superficie de revolución · trabajo · presión · centroides', tgt:'BALANZA_INTEGRAL',
  req:['longitud','discos'], uses:'Física e ingeniería; en multivariable se generaliza a integrales dobles y triples con densidad',
  cites:['osc2|§2.4–2.6','paul2|Applications of Integrals','stewart1|§6.4, 8.2–8.3'], see:['centroide','trabajo'],
  lore: R`
  <div class="why">La idea de siempre: <b>parte el objeto en pedacitos</b>, calcula la cantidad en un pedacito (· dx) y <b>suma</b> con una integral. Cambia solo "qué mide un pedacito".</div>
  <h3>Área de una superficie de revolución</h3>
  <p>Girar \(y=f(x)\), a ≤ x ≤ b, alrededor del eje x. Cada pedacito de curva (longitud \(ds\)) barre una banda de radio y:</p>
  <div class="formula">\[S=2\pi\int_a^b f(x)\sqrt{1+[f'(x)]^2}\,dx=\int 2\pi\,(\text{radio})\,ds\]</div>
  <p>Alrededor del eje y el radio es x: \(S=2\pi\int x\,ds\). El \(ds=\sqrt{1+(y')^2}dx\) es el mismo de la [[longitud-arco|longitud de curva]].</p>
  <div class="formula">\[\text{Esfera: }y=\sqrt{r^2-x^2},\ \ y\sqrt{1+y'^2}=r\ \Rightarrow\ S=2\pi\int_{-r}^r r\,dx=4\pi r^2\]</div>
  <h3>Trabajo</h3>
  <p>Fuerza constante: W = F·d. Fuerza variable: \(W=\int_a^bF(x)\,dx\) (en joules si F en N y x en m).</p>
  <ol class="recipe">
   <li><b>Resorte</b> (ley de Hooke): \(F=kx\) (x medido desde la longitud natural) → \(W=\int kx\,dx\).</li>
   <li><b>Bombear un líquido:</b> rebanada horizontal a altura y, volumen \(A(y)\,dy\), peso \(\rho g A(y)dy\), distancia que sube \(d(y)\) → \(W=\int\rho g\,A(y)\,d(y)\,dy\).</li>
   <li><b>Cable o cadena</b> colgante: cada pedacito sube una distancia distinta.</li>
  </ol>
  <div class="tip">Agua: ρ = 1000 kg/m³, g = 9.8 m/s² → ρg = 9800 N/m³.</div>
  <h3>Fuerza hidrostática</h3>
  <p>La presión a profundidad h es \(P=\rho gh\). En una placa vertical: \(F=\int\rho g\,h(y)\,w(y)\,dy\), con w(y) el ancho a esa profundidad.</p>
  <h3>Momentos y centro de masa (centroide)</h3>
  <p>Para una lámina de densidad constante entre \(f\ge g\) en [a, b], con área A:</p>
  <div class="formula">\[\bar x=\frac1A\int_a^bx\,[f-g]\,dx\qquad\bar y=\frac1A\int_a^b\tfrac12\left[f^2-g^2\right]dx\]</div>
  <p>El [[centroide]] es el "punto de equilibrio". Usa la <b>simetría</b>: si la región es simétrica respecto a una recta, el centroide está en ella.</p>
  <h3>Teorema de Pappus</h3>
  <div class="formula">\[V=2\pi\bar r\,A\]</div>
  <p>El volumen de un sólido de revolución = área de la región × distancia que recorre su centroide. Toro de radios R y r: \(V=2\pi R\cdot\pi r^2=2\pi^2Rr^2\).</p>`,
  ex:[
   {t:'Superficie de un paraboloide', q:R`Gira \(y=\sqrt x\), 0 ≤ x ≤ 2, alrededor del eje x.`, s:[
     R`\(y'=\frac{1}{2\sqrt x}\Rightarrow1+y'^2=1+\frac1{4x}=\frac{4x+1}{4x}\)`,
     R`\(y\sqrt{1+y'^2}=\sqrt x\cdot\frac{\sqrt{4x+1}}{2\sqrt x}=\frac12\sqrt{4x+1}\)`,
     R`\(S=2\pi\int_0^2\frac12\sqrt{4x+1}dx=\pi\left[\frac{(4x+1)^{3/2}}{6}\right]_0^2=\frac{\pi}{6}(27-1)=\frac{13\pi}{3}\)`]},
   {t:'Trabajo en un resorte', q:R`Se necesita 10 N para estirar un resorte 0.2 m. ¿Trabajo para estirarlo de 0 a 0.5 m?`, s:[
     R`k: \(10=k(0.2)\Rightarrow k=50\) N/m.`, R`\(W=\int_0^{0.5}50x\,dx=25x^2\Big|_0^{0.5}=6.25\) J.`]},
   {t:'Centroide de una región', q:R`Centroide de la región bajo \(y=x^2\), 0 ≤ x ≤ 1.`, s:[
     R`\(A=\int_0^1x^2dx=\frac13\)`, R`\(\bar x=3\int_0^1x^3dx=\frac34\)`, R`\(\bar y=3\int_0^1\frac12x^4dx=\frac{3}{10}\)`, R`Centroide \(\left(\frac34,\frac3{10}\right)\).`]},
  ],
  qs:[
   {q:R`Fórmula de superficie al girar y = f(x) en torno al eje x`, o:[R`\(2\pi\int f\sqrt{1+f'^2}dx\)`,R`\(\pi\int f^2dx\)`,R`\(\int\sqrt{1+f'^2}dx\)`,R`\(2\pi\int xf\,dx\)`], e:'2π · radio · ds.', h:'Banda de radio y.'},
   {q:R`Resorte con k = 20 N/m: trabajo para estirarlo 0.3 m desde su longitud natural`, o:['0.9 J','6 J','1.8 J','0.45 J'], e:'∫₀^0.3 20x dx = 10(0.09).', h:'W = kx²/2.'},
   {q:R`Por simetría, el centroide de la región bajo \(y=4-x^2\) (y ≥ 0) tiene \(\bar x=\)`, o:['0','2','4/3','No se sabe'], e:'Simétrica respecto al eje y.', h:'Mira la simetría.'},
   {q:R`Pappus: volumen de un toro con R = 3, r = 1`, o:[R`\(6\pi^2\)`,R`\(3\pi^2\)`,R`\(9\pi\)`,R`\(12\pi^2\)`], e:'2π(3)·π(1)² = 6π².', h:'V = 2π r̄ A.'},
   {q:R`Presión del agua a 5 m de profundidad (ρg = 9800)`, o:['49 000 Pa','9800 Pa','1960 Pa','5000 Pa'], e:'P = ρgh.', h:'Lineal con la profundidad.'},
  ]},
/* ---------------- SUCESIONES ---------------- */
{ id:'sucesiones', n:'Sucesiones', sub:'Listas infinitas · límite de una sucesión · monótonas y acotadas', tgt:'LISTA_INFINITA',
  req:['lhopital'], uses:'Series (una serie es el límite de la sucesión de sumas parciales), método de Newton, análisis numérico',
  cites:['osc2|§5.1','paul2|Sequences','stewart2|§11.1'], see:['sucesion','serie'],
  lore: R`
  <div class="why">Una [[sucesion|sucesión]] es una lista infinita ordenada \(a_1,a_2,a_3,\dots\). Antes de sumar infinitos números (series) hay que saber cuándo una lista "se estabiliza" en un valor.</div>
  <h3>Notación y ejemplos</h3>
  <div class="formula">\[a_n=\frac{n}{n+1}:\ \tfrac12,\tfrac23,\tfrac34,\dots\qquad b_n=(-1)^n:\ -1,1,-1,\dots\qquad F_{n+1}=F_n+F_{n-1}\ \text{(Fibonacci, recursiva)}\]</div>
  <h3>Límite de una sucesión</h3>
  <p>\(\lim_{n\to\infty}a_n=L\) si los términos se acercan a L tanto como quieras desde cierto n en adelante. Si existe, la sucesión <b>converge</b>; si no, <b>diverge</b>.</p>
  <ol class="recipe">
   <li>Si \(a_n=f(n)\) y \(\lim_{x\to\infty}f(x)=L\), entonces \(a_n\to L\). → puedes usar [[lhopital|L'Hôpital]] sobre f(x).</li>
   <li>Valen las leyes de los límites y el teorema de compresión.</li>
   <li>Si \(|a_n|\to0\) entonces \(a_n\to0\).</li>
  </ol>
  <h3>Límites que conviene saber</h3>
  <div class="tscroll"><table class="t"><tr><th>Sucesión</th><th>Límite</th></tr>
   <tr><td>\(r^n\)</td><td>0 si |r| &lt; 1 · 1 si r = 1 · diverge si r ≤ −1 o r &gt; 1</td></tr>
   <tr><td>\(\frac{1}{n^p}\) (p &gt; 0)</td><td>0</td></tr><tr><td>\(\sqrt[n]{n}\)</td><td>1</td></tr>
   <tr><td>\(\left(1+\frac xn\right)^n\)</td><td>\(e^x\)</td></tr><tr><td>\(\frac{n!}{n^n}\), \(\frac{a^n}{n!}\)</td><td>0</td></tr></table></div>
  <h3>Monótonas y acotadas</h3>
  <p>Creciente: \(a_{n+1}\ge a_n\) (prueba \(a_{n+1}-a_n\ge0\), o \(\frac{a_{n+1}}{a_n}\ge1\), o f′ ≥ 0). Acotada: hay M con \(|a_n|\le M\).</p>
  <div class="formula">\[\textbf{Teorema: }\text{toda sucesión monótona y acotada converge.}\]</div>
  <p>Es un axioma disfrazado de los números reales (completitud): no hay "huecos" en ℝ, así que una sucesión que sube sin pasarse de un techo tiene que llegar a algún lado.</p>
  <div class="trap">Acotada sola no basta: \((-1)^n\) está entre −1 y 1 y no converge. Monótona sola tampoco: \(n\) crece y diverge.</div>`,
  ex:[
   {t:'Límite con L\'Hôpital', q:R`\(a_n=\frac{\ln n}{n}\)`, s:[R`\(f(x)=\frac{\ln x}{x}\) → \(\frac\infty\infty\). L'H: \(\frac{1/x}{1}\to0\)`, R`Converge a 0.`]},
   {t:'Compresión', q:R`\(a_n=\frac{\cos n}{n}\)`, s:[R`\(-\frac1n\le\frac{\cos n}{n}\le\frac1n\)`, R`Ambos extremos → 0, así que \(a_n\to0\).`]},
   {t:'Recursiva monótona', q:R`\(a_1=1\), \(a_{n+1}=\sqrt{2+a_n}\). ¿Converge? ¿A qué?`, s:[
     R`Términos: 1, 1.732, 1.932, 1.983… crece y parece acotada por 2 (inducción: si \(a_n<2\), \(a_{n+1}\lt \sqrt4=2\)).`,
     R`Monótona + acotada ⇒ converge a un L.`, R`Toma límite en la recursión: \(L=\sqrt{2+L}\Rightarrow L^2-L-2=0\Rightarrow L=2\) (L = −1 se descarta).`]},
  ],
  qs:[
   {q:R`\(\displaystyle\lim_{n\to\infty}\frac{3n^2+1}{n^2-5}\)`, o:['3','1','0','Diverge'], e:'Cociente de coeficientes principales.', h:'Como un límite al infinito.'},
   {q:R`\(\left(\frac23\right)^n\)`, o:['Converge a 0','Diverge','Converge a 1','Converge a 2/3'], e:'|r| < 1.', h:'rⁿ.'},
   {q:R`\((-1)^n\)`, o:['Diverge','Converge a 0','Converge a 1','Converge a −1'], e:'Oscila entre −1 y 1.', h:'¿Se estabiliza?'},
   {q:R`\(\left(1+\frac2n\right)^n\to\)`, o:[R`\(e^2\)`,'1','e','∞'], e:'(1 + x/n)ⁿ → eˣ.', h:'Forma 1^∞.'},
   {q:R`Toda sucesión monótona y acotada…`, o:['Converge','Diverge','Tiende a 0','Es constante'], e:'Teorema de la sucesión monótona.', h:'Completitud de ℝ.'},
  ]},
/* ---------------- SERIES Y CRITERIOS ---------------- */
{ id:'series', n:'Series infinitas y criterios de convergencia', sub:'Geométrica, telescópica, p · divergencia, integral, comparación, razón, raíz, alternante', tgt:'SUMA_INFINITA',
  req:['sucesiones','impropias'], uses:'Series de potencias y de Taylor; física (perturbaciones), probabilidad, análisis numérico',
  cites:['osc2|§5.2–5.6','paul2|Series','stewart2|§11.2–11.7','mit1801|Unit 5'], see:['serie','serie-geometrica','serie-p','criterio-razon'],
  lore: R`
  <div class="why">¿Cuánto vale \(1+\frac12+\frac14+\frac18+\cdots\)? Exactamente 2. Pero \(1+\frac12+\frac13+\frac14+\cdots\) <b>no</b> tiene suma (crece sin límite). Una [[serie]] es el límite de sus sumas parciales; los criterios dicen cuál pasa sin calcularla. Nicole Oresme demostró la divergencia de la armónica hacia 1350[^hist-oresme].</div>
  <h3>Definición</h3>
  <div class="formula">\[\sum_{n=1}^\infty a_n=\lim_{N\to\infty}S_N,\qquad S_N=a_1+a_2+\cdots+a_N\]</div>
  <h3>Serie geométrica</h3>
  <div class="formula">\[\sum_{n=0}^\infty ar^n=a+ar+ar^2+\cdots=\frac{a}{1-r}\quad\text{si }|r|<1\ \ (\text{diverge si }|r|\ge1)\]</div>
  <p><b>De dónde sale:</b> \(S_N-rS_N=a-ar^{N+1}\Rightarrow S_N=\frac{a(1-r^{N+1})}{1-r}\to\frac{a}{1-r}\). Ejemplo: \(0.\overline{9}=\frac{9}{10}+\frac9{100}+\cdots=\frac{9/10}{1-1/10}=1\).</p>
  <h3>Serie telescópica</h3>
  <div class="formula">\[\sum_{n=1}^\infty\frac{1}{n(n+1)}=\sum\left(\frac1n-\frac1{n+1}\right)=\left(1-\tfrac12\right)+\left(\tfrac12-\tfrac13\right)+\cdots\Rightarrow S_N=1-\frac1{N+1}\to1\]</div>
  <p>Se separa con [[fracciones-parciales|fracciones parciales]] y casi todo se cancela.</p>
  <h3>Serie p y armónica</h3>
  <div class="formula">\[\sum_{n=1}^\infty\frac1{n^p}\ \text{converge}\iff p>1\qquad\sum\frac1n\ \text{(armónica) diverge}\]</div>
  <p>Euler (1734) halló \(\sum\frac1{n^2}=\frac{\pi^2}6\) (problema de Basilea).</p>
  <h3>Los criterios: cuál usar</h3>
  <div class="tscroll"><table class="t"><tr><th>Si ves…</th><th>Usa</th><th>Conclusión</th></tr>
   <tr><td>cualquier serie (primero siempre)</td><td><b>Divergencia</b>: \(\lim a_n\)</td><td>si \(a_n\not\to0\) → diverge. Si → 0, no dice nada</td></tr>
   <tr><td>\(ar^n\)</td><td>Geométrica</td><td>converge si |r| &lt; 1</td></tr>
   <tr><td>\(\frac1{n^p}\)</td><td>Serie p</td><td>converge si p &gt; 1</td></tr>
   <tr><td>racional en n, raíces</td><td><b>Comparación</b> o <b>comparación en el límite</b> con \(\sum\frac1{n^p}\)</td><td>\(\lim\frac{a_n}{b_n}=c>0\) → misma suerte</td></tr>
   <tr><td>f(n) positiva, decreciente, integrable</td><td><b>Integral</b></td><td>\(\sum a_n\) y \(\int_1^\infty f\) convergen o divergen juntas</td></tr>
   <tr><td>factoriales, \(c^n\)</td><td><b>Razón</b>: \(L=\lim\left|\frac{a_{n+1}}{a_n}\right|\)</td><td>L &lt; 1 converge (abs.) · L &gt; 1 diverge · L = 1 nada</td></tr>
   <tr><td>\((\dots)^n\)</td><td><b>Raíz</b>: \(L=\lim\sqrt[n]{|a_n|}\)</td><td>igual que la razón</td></tr>
   <tr><td>\((-1)^nb_n\)</td><td><b>Alternante</b> (Leibniz)</td><td>converge si \(b_n\) decrece y → 0</td></tr></table></div>
  <div class="trap">\(a_n\to0\) <b>no</b> garantiza convergencia: la armónica \(\frac1n\to0\) y diverge. El criterio de divergencia solo sirve para <b>descartar</b>.</div>
  <h3>Convergencia absoluta y condicional</h3>
  <p>Si \(\sum|a_n|\) converge, la serie converge <b>absolutamente</b> (y entonces converge). Si \(\sum a_n\) converge pero \(\sum|a_n|\) no, es <b>condicional</b>: \(\sum\frac{(-1)^{n+1}}n=\ln2\) converge pero la armónica no. Riemann demostró que una condicional se puede <b>reordenar</b> para sumar cualquier número.</p>
  <h3>Estimar el error</h3>
  <p>En una alternante, el error al cortar en N es menor que el primer término omitido: \(|S-S_N|\le b_{N+1}\).</p>`,
  ex:[
   {t:'Geométrica con índice corrido', q:R`\(\displaystyle\sum_{n=1}^\infty\frac{2^{n+1}}{5^n}\)`, s:[
     R`\(\frac{2^{n+1}}{5^n}=2\left(\frac25\right)^n\). Primer término (n = 1): \(a=\frac45\). Razón \(r=\frac25\).`, R`\(\displaystyle\frac{4/5}{1-2/5}=\frac{4/5}{3/5}=\frac43\)`]},
   {t:'Comparación en el límite', q:R`\(\displaystyle\sum\frac{n+1}{n^3+2}\)`, s:[
     R`Para n grande se comporta como \(\frac{n}{n^3}=\frac1{n^2}\).`, R`\(\displaystyle\lim\frac{(n+1)/(n^3+2)}{1/n^2}=\lim\frac{n^3+n^2}{n^3+2}=1>0\)`, R`\(\sum\frac1{n^2}\) converge (p = 2) → la serie converge.`]},
   {t:'Criterio de la razón', q:R`\(\displaystyle\sum\frac{3^n}{n!}\)`, s:[
     R`\(\displaystyle\frac{a_{n+1}}{a_n}=\frac{3^{n+1}}{(n+1)!}\cdot\frac{n!}{3^n}=\frac{3}{n+1}\)`, R`→ 0 < 1: converge (desde n = 1 suma \(e^3-1\)).`]},
   {t:'Alternante', q:R`\(\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n}}{\sqrt n}\)`, s:[
     R`\(b_n=\frac1{\sqrt n}\) decrece y → 0 → converge (Leibniz).`, R`\(\sum\frac1{\sqrt n}\) diverge (p = ½) → la convergencia es <b>condicional</b>.`]},
  ],
  qs:[
   {q:R`\(\displaystyle\sum_{n=0}^\infty\left(\frac13\right)^n\)`, o:[R`\(\frac32\)`,'3',R`\(\frac13\)`,'Diverge'], e:'1/(1 − 1/3).', h:'Geométrica con a = 1.'},
   {q:R`\(\displaystyle\sum\frac1{n^{1.01}}\)`, o:['Converge','Diverge','Suma 1','No se puede saber'], e:'p = 1.01 > 1.', h:'Serie p.'},
   {q:R`\(\displaystyle\sum\frac{n}{n+1}\)`, o:['Diverge (término no → 0)','Converge','Converge a 1','Es condicional'], e:'aₙ → 1 ≠ 0.', h:'Criterio de divergencia primero.'},
   {q:R`Si \(\lim\left|\frac{a_{n+1}}{a_n}\right|=1\), el criterio de la razón…`, o:['No decide','Dice que converge','Dice que diverge','Dice que suma 1'], e:'L = 1 no da información.', h:'Caso frontera.'},
   {q:R`\(\displaystyle\sum\frac{(-1)^{n+1}}{n}\)`, o:['Converge condicionalmente','Converge absolutamente','Diverge','Suma 1'], e:'Alternante sí; armónica no.', h:'Compara con |aₙ|.'},
   {q:R`\(\displaystyle\sum\frac{n!}{10^n}\)`, o:['Diverge','Converge','Converge a 0','No se sabe'], e:'Razón: (n + 1)/10 → ∞.', h:'El factorial gana.'},
   {q:R`\(\displaystyle\sum_{n=1}^\infty\left(\frac1n-\frac1{n+1}\right)\)`, o:['1','Diverge','0','1/2'], e:'Telescópica: Sₙ = 1 − 1/(N + 1).', h:'Se cancela casi todo.'},
  ]},
/* ---------------- SERIES DE POTENCIAS Y TAYLOR ---------------- */
{ id:'taylor', n:'Series de potencias y de Taylor', sub:'Radio e intervalo de convergencia · Maclaurin de eˣ, sen, cos, ln · error', tgt:'POLINOMIO_INFINITO',
  req:['series'], uses:'Calculadoras y computadoras (así calculan sen, eˣ), física (aproximaciones), EDOs, fórmula de Euler',
  cites:['osc2|§6.1–6.4','paul2|Taylor Series','stewart2|§11.8–11.11','3b1b|cap. 11'], see:['serie-potencias','taylor-pol','euler-formula'],
  lore: R`
  <div class="why">¿Cómo calcula tu calculadora \(\sin(0.3)\)? Con un <b>polinomio</b>. Una [[taylor-pol|serie de Taylor]] escribe una función como un "polinomio infinito" que coincide con ella en todas sus derivadas en un punto. Brook Taylor la publicó en 1715; Maclaurin popularizó el caso a = 0 (1742)[^hist-taylor].</div>
  <h3>Serie de potencias</h3>
  <div class="formula">\[\sum_{n=0}^\infty c_n(x-a)^n=c_0+c_1(x-a)+c_2(x-a)^2+\cdots\]</div>
  <p>Converge en un intervalo centrado en a de <b>radio R</b>: converge absolutamente si |x − a| &lt; R, diverge si |x − a| &gt; R. En los bordes x = a ± R hay que <b>probar por separado</b>.</p>
  <ol class="recipe"><li>Aplica el [[criterio-razon|criterio de la razón]] a \(|c_n(x-a)^n|\): obtienes \(|x-a|\cdot L\).</li><li>Pide \(|x-a|\cdot L<1\Rightarrow R=\frac1L\).</li><li>Prueba cada extremo con los criterios de series (p, alternante…).</li></ol>
  <h3>Derivar e integrar término a término</h3>
  <p>Dentro del radio, una serie de potencias se deriva e integra como un polinomio (el radio no cambia):</p>
  <div class="formula">\[\frac{1}{1-x}=\sum x^n\ \Rightarrow\ \frac{1}{(1-x)^2}=\sum nx^{n-1},\quad-\ln(1-x)=\sum\frac{x^{n+1}}{n+1}\quad(|x|<1)\]</div>
  <h3>Serie de Taylor</h3>
  <div class="formula">\[f(x)=\sum_{n=0}^\infty\frac{f^{(n)}(a)}{n!}(x-a)^n=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots\]</div>
  <p><b>De dónde salen los coeficientes:</b> si \(f=\sum c_n(x-a)^n\), derivar n veces y evaluar en a deja solo \(n!\,c_n\). Con a = 0 se llama serie de <b>Maclaurin</b>.</p>
  <h3>Las que hay que saber</h3>
  <div class="tscroll"><table class="t"><tr><th>Función</th><th>Serie de Maclaurin</th><th>Converge</th></tr>
   <tr><td>\(\frac1{1-x}\)</td><td>\(1+x+x^2+x^3+\cdots\)</td><td>|x| &lt; 1</td></tr>
   <tr><td>\(e^x\)</td><td>\(1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots\)</td><td>todo ℝ</td></tr>
   <tr><td>\(\sin x\)</td><td>\(x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots\)</td><td>todo ℝ</td></tr>
   <tr><td>\(\cos x\)</td><td>\(1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots\)</td><td>todo ℝ</td></tr>
   <tr><td>\(\ln(1+x)\)</td><td>\(x-\frac{x^2}2+\frac{x^3}3-\cdots\)</td><td>−1 &lt; x ≤ 1</td></tr>
   <tr><td>\(\arctan x\)</td><td>\(x-\frac{x^3}3+\frac{x^5}5-\cdots\)</td><td>|x| ≤ 1</td></tr>
   <tr><td>\((1+x)^k\)</td><td>\(1+kx+\frac{k(k-1)}{2!}x^2+\cdots\) (binomial)</td><td>|x| &lt; 1</td></tr></table></div>
  <div class="tip">No derives 10 veces: <b>sustituye</b> en una conocida. \(e^{-x^2}=1-x^2+\frac{x^4}{2!}-\cdots\) (cambia x por −x²). \(x\sin x=x^2-\frac{x^4}{3!}+\cdots\) (multiplica).</div>
  <h3>Polinomio de Taylor y error</h3>
  <p>\(T_n(x)\) = la serie cortada en grado n. Desigualdad de Taylor: si \(|f^{(n+1)}|\le M\) entre a y x,</p>
  <div class="formula">\[|f(x)-T_n(x)|\le\frac{M}{(n+1)!}|x-a|^{n+1}\]</div>
  <p>\(T_1\) es la [[linealizacion|aproximación lineal]]; \(T_2\) agrega la curvatura.</p>
  <h3>La fórmula de Euler</h3>
  <p>Sustituyendo \(x=i\theta\) en la serie de \(e^x\) y separando términos pares e impares:</p>
  <div class="formula">\[e^{i\theta}=\cos\theta+i\sin\theta\qquad\Rightarrow\qquad e^{i\pi}+1=0\]</div>`,
  ex:[
   {t:'Radio e intervalo de convergencia', q:R`\(\displaystyle\sum_{n=1}^\infty\frac{(x-2)^n}{n\,3^n}\)`, s:[
     R`Razón: \(\displaystyle\left|\frac{(x-2)^{n+1}}{(n+1)3^{n+1}}\cdot\frac{n3^n}{(x-2)^n}\right|=\frac{|x-2|}{3}\cdot\frac{n}{n+1}\to\frac{|x-2|}3\)`,
     R`\(\frac{|x-2|}{3}<1\Rightarrow|x-2|<3\): R = 3, en principio \(-1\lt x<5\).`,
     R`x = 5: \(\sum\frac1n\) diverge. x = −1: \(\sum\frac{(-1)^n}{n}\) converge (alternante).`, R`Intervalo: \([-1,5)\).`]},
   {t:'Taylor de ln x en a = 1', q:R`Primeros tres términos de Taylor de \(\ln x\) en a = 1.`, s:[
     R`\(f(1)=0\), \(f'=\frac1x\to1\), \(f''=-\frac1{x^2}\to-1\), \(f'''=\frac2{x^3}\to2\)`,
     R`\(\ln x\approx(x-1)-\frac{(x-1)^2}{2}+\frac{2(x-1)^3}{3!}=(x-1)-\frac{(x-1)^2}2+\frac{(x-1)^3}3\)`]},
   {t:'Integral imposible con series', q:R`Aproxima \(\displaystyle\int_0^1e^{-x^2}dx\)`, s:[
     R`\(e^{-x^2}=1-x^2+\frac{x^4}{2}-\frac{x^6}{6}+\frac{x^8}{24}-\cdots\)`,
     R`Integra término a término: \(1-\frac13+\frac1{10}-\frac1{42}+\frac1{216}-\cdots\)`, R`≈ 0.7475 (alternante: el error es menor que el siguiente término, 1/1320).`]},
  ],
  qs:[
   {q:R`Serie de Maclaurin de \(e^x\)`, o:[R`\(\sum\frac{x^n}{n!}\)`,R`\(\sum x^n\)`,R`\(\sum\frac{(-1)^nx^{2n}}{(2n)!}\)`,R`\(\sum nx^n\)`], e:'Todas las derivadas de eˣ en 0 valen 1.', h:'f⁽ⁿ⁾(0) = 1.'},
   {q:R`Coeficiente de \(x^3\) en la serie de \(\sin x\)`, o:[R`\(-\frac16\)`,R`\(\frac16\)`,R`\(-\frac13\)`,'0'], e:'−x³/3!.', h:'x − x³/3! + …'},
   {q:R`Radio de convergencia de \(\sum\frac{x^n}{2^n}\)`, o:['2',R`\(\frac12\)`,'1','∞'], e:'Geométrica con r = x/2: |x| < 2.', h:'|x/2| < 1.'},
   {q:R`Radio de convergencia de \(\sum\frac{x^n}{n!}\)`, o:['∞','1','0','e'], e:'Razón: |x|/(n + 1) → 0 para todo x.', h:'Es la de eˣ.'},
   {q:R`Maclaurin de \(\cos(2x)\) hasta x²`, o:[R`\(1-2x^2\)`,R`\(1-x^2\)`,R`\(1-4x^2\)`,R`\(2x\)`], e:'1 − (2x)²/2.', h:'Sustituye 2x en la de cos.'},
   {q:R`\(T_1(x)\) de f en a es…`, o:['La recta tangente','La secante','La normal','La constante f(a)'], e:'f(a) + f′(a)(x − a).', h:'Orden 1.'},
  ]},
/* ---------------- PARAMÉTRICAS ---------------- */
{ id:'parametricas', n:'Curvas paramétricas', sub:'x(t), y(t) · pendiente dy/dx · área y longitud con parámetro', tgt:'TRAYECTORIA_T',
  req:['implicita','longitud'], uses:'Coordenadas polares, funciones vectoriales r(t), integrales de línea',
  cites:['osc2|§7.1–7.2','paul2|Parametric Equations','stewart2|§10.1–10.2'], see:['parametrica','longitud-arco'],
  lore: R`
  <div class="why">Una curva [[parametrica|paramétrica]] describe <b>cómo se mueve</b> un punto: en el instante t está en \((x(t),y(t))\). Así se describen órbitas, trayectorias y curvas que no son funciones (un círculo, una espiral, la cicloide).</div>
  <h3>Eliminar el parámetro</h3>
  <p>Despeja t de una ecuación y sustitúyelo en la otra, o usa una identidad:</p>
  <div class="formula">\[x=3\cos t,\ y=3\sin t\ \Rightarrow\ \left(\tfrac x3\right)^2+\left(\tfrac y3\right)^2=\cos^2t+\sin^2t=1\ \Rightarrow\ x^2+y^2=9\]</div>
  <p>El parámetro agrega información que la ecuación cartesiana pierde: el <b>sentido</b> de recorrido y la <b>velocidad</b>.</p>
  <h3>Curvas famosas</h3>
  <div class="tscroll"><table class="t"><tr><th>Curva</th><th>Ecuaciones</th></tr>
   <tr><td>Recta por P en dirección (a, b)</td><td>\(x=x_0+at,\ y=y_0+bt\)</td></tr>
   <tr><td>Elipse</td><td>\(x=a\cos t,\ y=b\sin t\)</td></tr>
   <tr><td>Cicloide (punto de una rueda)</td><td>\(x=r(t-\sin t),\ y=r(1-\cos t)\)</td></tr>
   <tr><td>Proyectil</td><td>\(x=v_0\cos\alpha\,t,\ y=v_0\sin\alpha\,t-\frac12gt^2\)</td></tr></table></div>
  <p>La cicloide es la curva de <b>descenso más rápido</b> (braquistócrona), problema que Johann Bernoulli planteó en 1696 y resolvieron Newton, Leibniz y los Bernoulli.</p>
  <h3>Derivadas</h3>
  <div class="formula">\[\frac{dy}{dx}=\frac{dy/dt}{dx/dt}\qquad\frac{d^2y}{dx^2}=\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt}\]</div>
  <p>Tangente horizontal: \(\frac{dy}{dt}=0\) (con \(\frac{dx}{dt}\neq0\)). Vertical: \(\frac{dx}{dt}=0\).</p>
  <div class="trap">La segunda derivada <b>no</b> es \(\frac{y''(t)}{x''(t)}\). Derivas dy/dx respecto a t y divides otra vez por dx/dt.</div>
  <h3>Área y longitud</h3>
  <div class="formula">\[A=\int_{\alpha}^{\beta}y(t)\,x'(t)\,dt\qquad L=\int_\alpha^\beta\sqrt{\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2}\,dt\]</div>
  <p>La longitud es la distancia recorrida: \(\int\) rapidez \(dt\). Es la misma [[longitud-arco|longitud de arco]] cartesiana con \(x=t\).</p>`,
  ex:[
   {t:'Tangente a una curva paramétrica', q:R`\(x=t^2,\ y=t^3-3t\). Recta tangente en t = 2.`, s:[
     R`Punto: \(x=4,\ y=8-6=2\) → (4, 2).`, R`\(\frac{dy}{dx}=\frac{3t^2-3}{2t}=\frac{9}{4}\) en t = 2.`, R`\(y-2=\frac94(x-4)\).`]},
   {t:'Longitud de un arco de cicloide', q:R`\(x=t-\sin t,\ y=1-\cos t\), \(0\le t\le2\pi\)`, s:[
     R`\(x'^2+y'^2=(1-\cos t)^2+\sin^2t=2-2\cos t=4\sin^2\frac t2\)`, R`\(L=\int_0^{2\pi}2\sin\frac t2\,dt=\left[-4\cos\frac t2\right]_0^{2\pi}=4+4=8\)`, R`Un arco mide 8 veces el radio (Wren, 1658).`]},
  ],
  qs:[
   {q:R`\(x=t+1,\ y=t^2\). Ecuación cartesiana`, o:[R`\(y=(x-1)^2\)`,R`\(y=x^2\)`,R`\(y=(x+1)^2\)`,R`\(y=x-1\)`], e:'t = x − 1.', h:'Despeja t.'},
   {q:R`\(\frac{dy}{dx}\) para \(x=\cos t,\ y=\sin t\)`, o:[R`\(-\cot t\)`,R`\(\tan t\)`,R`\(-\tan t\)`,R`\(\cot t\)`], e:'cos t / (−sin t).', h:'(dy/dt)/(dx/dt).'},
   {q:R`Tangente horizontal en \(x=t^2,\ y=t^3-3t\) cuando`, o:['t = ±1','t = 0','t = ±√3','Nunca'], e:'dy/dt = 3t² − 3 = 0.', h:'dy/dt = 0.'},
   {q:R`Longitud de \(x=3\cos t,\ y=3\sin t\), \(0\le t\le\pi\)`, o:[R`\(3\pi\)`,R`\(6\pi\)`,R`\(\pi\)`,'9'], e:'Rapidez 3 durante π.', h:'Medio círculo de radio 3.'},
  ]},
/* ---------------- POLARES ---------------- */
{ id:'polares', n:'Coordenadas polares', sub:'(r, θ) · cardioides y rosas · área en polares', tgt:'RADAR_POLAR',
  req:['parametricas','trigbase'], uses:'Integrales dobles en polares, coordenadas cilíndricas y esféricas, órbitas',
  cites:['osc2|§7.3–7.4','paul2|Polar Coordinates','stewart2|§10.3–10.4'], see:['polares','polares-dobles'],
  lore: R`
  <div class="why">Para curvas que giran alrededor de un centro (espirales, flores, órbitas) es más natural decir "a qué distancia r y en qué ángulo θ". Jakob Bernoulli usó coordenadas [[polares]] sistemáticamente en 1691.</div>
  <h3>Conversión</h3>
  <div class="formula">\[x=r\cos\theta,\quad y=r\sin\theta\qquad r^2=x^2+y^2,\quad\tan\theta=\frac yx\]</div>
  <div class="trap">\(\theta=\arctan\frac yx\) solo da ángulos entre −π/2 y π/2: revisa el <b>cuadrante</b>. El punto (−1, −1) tiene θ = 5π/4, no π/4.</div>
  <p>Un punto tiene infinitas representaciones: \((r,\theta)=(r,\theta+2\pi)=(-r,\theta+\pi)\).</p>
  <h3>Catálogo de curvas</h3>
  <div class="tscroll"><table class="t"><tr><th>Ecuación</th><th>Curva</th></tr>
   <tr><td>r = a</td><td>círculo de radio a centrado en el origen</td></tr>
   <tr><td>θ = α</td><td>recta por el origen</td></tr>
   <tr><td>\(r=2a\cos\theta\) / \(r=2a\sin\theta\)</td><td>círculo de radio a que pasa por el origen</td></tr>
   <tr><td>\(r=a(1\pm\cos\theta)\)</td><td>cardioide (forma de corazón)</td></tr>
   <tr><td>\(r=a+b\cos\theta\)</td><td>caracol (limaçon), con lazo si a &lt; b</td></tr>
   <tr><td>\(r=a\cos n\theta\)</td><td>rosa: n pétalos si n impar, 2n si n par</td></tr>
   <tr><td>\(r=a\theta\)</td><td>espiral de Arquímedes</td></tr></table></div>
  <svg class="dg" viewBox="0 0 320 170"><path class="ax" d="M10 85H310M160 5V165"/><path class="c1" d="M160 85 C160 60 200 22 240 30 C285 40 290 85 290 85 C290 85 285 130 240 140 C200 148 160 110 160 85Z" transform="translate(-60 0)"/><path class="c2" d="M160 85 L200 35 M160 85 L230 85 M160 85 L200 135" /><text x="236" y="80" class="t2">r</text><text x="182" y="76" class="t2">θ</text><text x="30" y="30" class="t1">cardioide r = 1 + cos θ</text></svg>
  <h3>Pendiente en polares</h3>
  <p>Es una paramétrica con parámetro θ: \(x=r(\theta)\cos\theta,\ y=r(\theta)\sin\theta\).</p>
  <div class="formula">\[\frac{dy}{dx}=\frac{r'\sin\theta+r\cos\theta}{r'\cos\theta-r\sin\theta}\]</div>
  <h3>Área en polares</h3>
  <p>El pedacito no es un rectángulo sino un <b>sector circular</b> de área \(\frac12r^2\,d\theta\):</p>
  <div class="formula">\[A=\frac12\int_\alpha^\beta r(\theta)^2\,d\theta\qquad\text{entre dos curvas: }A=\frac12\int_\alpha^\beta\left(r_{ext}^2-r_{int}^2\right)d\theta\]</div>
  <ol class="recipe"><li>Dibuja la curva (tabla θ → r).</li><li>Halla los ángulos donde empieza y termina la región (cortes: iguala las r, y revisa el origen aparte).</li><li>Integra; usa [[pitagorica|ángulo medio]] para \(\cos^2\) y \(\sin^2\).</li></ol>
  <h3>Longitud en polares</h3>
  <div class="formula">\[L=\int_\alpha^\beta\sqrt{r^2+\left(\frac{dr}{d\theta}\right)^2}\,d\theta\]</div>`,
  ex:[
   {t:'Área de una cardioide', q:R`Área encerrada por \(r=1+\cos\theta\).`, s:[
     R`La curva se recorre una vez con \(0\le\theta\le2\pi\).`, R`\(A=\frac12\int_0^{2\pi}(1+2\cos\theta+\cos^2\theta)d\theta\)`,
     R`\(\cos^2\theta=\frac{1+\cos2\theta}2\): \(\frac12\int_0^{2\pi}\left(\frac32+2\cos\theta+\frac{\cos2\theta}2\right)d\theta=\frac12\cdot\frac32\cdot2\pi\)`, R`\(A=\frac{3\pi}{2}\)`]},
   {t:'Área de un pétalo', q:R`Un pétalo de la rosa \(r=\cos3\theta\).`, s:[
     R`r = 0 cuando \(3\theta=\pm\frac\pi2\Rightarrow\theta=\pm\frac\pi6\): un pétalo va de −π/6 a π/6.`,
     R`\(A=\frac12\int_{-\pi/6}^{\pi/6}\cos^23\theta\,d\theta=\frac12\int_{-\pi/6}^{\pi/6}\frac{1+\cos6\theta}2d\theta\)`, R`\(=\frac14\cdot\frac\pi3=\frac{\pi}{12}\)`]},
  ],
  qs:[
   {q:R`(r, θ) = (2, π/2) en cartesianas`, o:['(0, 2)','(2, 0)','(0, −2)','(√2, √2)'], e:'x = 2cos(π/2) = 0, y = 2sin(π/2) = 2.', h:'x = r cos θ.'},
   {q:R`\(r=4\sin\theta\) en cartesianas`, o:[R`\(x^2+(y-2)^2=4\)`,R`\(x^2+y^2=4\)`,R`\(y=4\)`,R`\((x-2)^2+y^2=4\)`], e:'r² = 4r sin θ → x² + y² = 4y.', h:'Multiplica por r.'},
   {q:R`Pétalos de \(r=\sin4\theta\)`, o:['8','4','2','16'], e:'n par → 2n pétalos.', h:'n = 4.'},
   {q:R`Área del círculo r = 3 con la fórmula polar`, o:[R`\(9\pi\)`,R`\(3\pi\)`,R`\(\frac{9\pi}2\)`,R`\(6\pi\)`], e:'½∫₀^{2π} 9 dθ.', h:'½∫r²dθ.'},
   {q:R`El pedacito de área en polares es`, o:[R`\(\frac12r^2d\theta\)`,R`\(r\,d\theta\)`,R`\(r^2d\theta\)`,R`\(r\,dr\)`], e:'Sector circular.', h:'Área de un sector.'},
  ]},
);
