/* ============ CÁLCULO DIFERENCIAL: LÍMITES, CONTINUIDAD, DERIVADA Y SUS APLICACIONES ============
   Mismo formato que sections.js. El código (SEC-xx), la fase (g) y el orden los asigna timeline.js.
   [[clave|texto]] = enlace al glosario (content/es/glosario.js) · [^fuente|ubicación] = cita. */
LV.push(
/* ---------------- LÍMITES: IDEA Y LEYES ---------------- */
{ id:'limites', n:'Límites: la idea y sus leyes', sub:'Acercarse sin llegar · límites laterales · leyes de los límites', tgt:'NODO_ASINTOTICO',
  req:['graficar'], uses:'Todo el cálculo: la derivada, la integral, las series y la continuidad se definen con límites',
  cites:['osc1|§2.2–2.3','paul1|Limits','stewart1|§2.2–2.3'], see:['continuidad','derivada','epsilondelta'],
  lore: R`
  <div class="why">Un límite responde: <b>¿a qué valor se acerca f(x) cuando x se acerca a a?</b> No importa qué pasa <b>en</b> a, solo <b>cerca</b> de a. Con esta idea se definen la [[derivada]] (pendiente de la tangente), la [[integral-definida|integral]] (suma de infinitos rectángulos) y las [[serie|series]] (suma de infinitos términos)[^osc1|§2.2].</div>
  <h3>Idea intuitiva</h3>
  <p>Escribimos \(\displaystyle\lim_{x\to a}f(x)=L\) si podemos hacer f(x) tan cerca de L como queramos tomando x suficientemente cerca de a (pero \(x\neq a\)).</p>
  <svg class="dg" viewBox="0 0 320 170"><path class="ax" d="M20 150H310M40 160V10"/><path class="c1" d="M40 140 Q120 120 160 70 T300 25"/><circle cx="160" cy="70" r="5" fill="var(--paper)" stroke="var(--red)" stroke-width="2"/><circle cx="160" cy="110" r="4" class="dot"/><path class="ax dash" d="M160 150V70M40 70H160"/><text x="154" y="164">a</text><text x="24" y="74">L</text><text x="168" y="114">f(a) puede ser otro valor</text><text x="170" y="62" class="t1">hueco</text></svg>
  <p>En la figura, \(f(a)\) vale otra cosa (o ni existe), pero el límite sigue siendo L: la curva "apunta" a L desde ambos lados.</p>
  <h3>Tabla de valores: estimar un límite</h3>
  <p>Para \(\displaystyle\lim_{x\to0}\frac{\sin x}{x}\) no puedes reemplazar x = 0 (da 0/0). Te acercas:</p>
  <div class="tscroll"><table class="t"><tr><th>x</th><th>±0.5</th><th>±0.1</th><th>±0.01</th><th>±0.001</th></tr>
   <tr><td>\(\frac{\sin x}{x}\)</td><td>0.9589</td><td>0.9983</td><td>0.99998</td><td>0.9999998</td></tr></table></div>
  <p>Se acerca a <b>1</b>. La tabla sugiere; la demostración se hace con el [[compresion|teorema de compresión]].</p>
  <h3>Límites laterales</h3>
  <div class="formula">\[\lim_{x\to a^-}f(x)\ \text{(por la izquierda)}\qquad\lim_{x\to a^+}f(x)\ \text{(por la derecha)}\]</div>
  <p>El límite existe <b>si y solo si</b> los dos laterales existen y son iguales.</p>
  <div class="formula">\[\lim_{x\to0^-}\frac{|x|}{x}=-1\qquad\lim_{x\to0^+}\frac{|x|}{x}=1\quad\Rightarrow\quad\lim_{x\to0}\frac{|x|}{x}\ \text{no existe}\]</div>
  <h3>Leyes de los límites</h3>
  <p>Si \(\lim f=L\) y \(\lim g=M\) (con x → a):</p>
  <ol class="recipe">
   <li><b>Suma/resta:</b> \(\lim(f\pm g)=L\pm M\)</li>
   <li><b>Constante:</b> \(\lim cf=cL\)</li>
   <li><b>Producto:</b> \(\lim fg=LM\)</li>
   <li><b>Cociente:</b> \(\lim\frac fg=\frac LM\) si \(M\neq0\)</li>
   <li><b>Potencia y raíz:</b> \(\lim f^n=L^n\), \(\lim\sqrt[n]{f}=\sqrt[n]{L}\)</li>
  </ol>
  <h4>Sustitución directa</h4>
  <p>Para polinomios, racionales (con denominador ≠ 0), raíces, exponenciales, logaritmos y trigonométricas en su dominio: \(\lim_{x\to a}f(x)=f(a)\). Se llaman funciones [[continuidad|continuas]].</p>
  <div class="formula">\[\lim_{x\to2}(x^3-4x+1)=2^3-4(2)+1=8-8+1=1\]</div>
  <h3>Formas indeterminadas</h3>
  <p>Si la sustitución da \(\frac00\), \(\frac\infty\infty\), \(0\cdot\infty\), \(\infty-\infty\), \(1^\infty\), \(0^0\) o \(\infty^0\), el límite <b>no está decidido</b>: hay que transformar la expresión (siguiente sección) o usar [[lhopital|L'Hôpital]].</p>
  <div class="trap">\(\frac00\) <b>no</b> es 0, ni 1, ni "no existe". Es una señal de que falta álgebra. En cambio \(\frac{5}{0}\) sí dice algo: el límite es \(\pm\infty\) (asíntota vertical).</div>
  <h3>Límites infinitos</h3>
  <div class="formula">\[\lim_{x\to0^+}\frac1x=+\infty\qquad\lim_{x\to0^-}\frac1x=-\infty\qquad\lim_{x\to0}\frac1{x^2}=+\infty\]</div>
  <p>"Número / casi cero": el resultado crece sin cota. El <b>signo</b> se decide mirando el signo del numerador y del denominador cerca de a.</p>
  <h3>Teorema de compresión (del sándwich)</h3>
  <div class="formula">\[g(x)\le f(x)\le h(x)\ \text{ y }\ \lim g=\lim h=L\ \Rightarrow\ \lim f=L\]</div>
  <p>Ejemplo clásico: \(-x^2\le x^2\sin\frac1x\le x^2\), y ambos extremos van a 0, así que \(\lim_{x\to0}x^2\sin\frac1x=0\)[^stewart1|§2.3].</p>
  <h3>Definición formal (ε–δ)</h3>
  <p>\(\lim_{x\to a}f(x)=L\) significa: para todo \(\varepsilon>0\) existe \(\delta>0\) tal que \(0<|x-a|\lt \delta\Rightarrow|f(x)-L|\lt \varepsilon\). Es la [[epsilondelta|definición de Weierstrass]] (siglo XIX), que le dio rigor a las ideas de Newton y Leibniz[^osc1|§2.5].</p>
  <div class="tip">En la práctica no se usa ε–δ para calcular: se usa para <b>demostrar</b> las leyes de arriba. Para calcular, usa sustitución directa + álgebra.</div>`,
  ex:[
   {t:'Límite por sustitución directa', q:R`\(\displaystyle\lim_{x\to-1}\frac{x^2+3x}{x-2}\)`, s:[
     R`¿El denominador se anula en −1? \(-1-2=-3\neq0\) → se puede sustituir.`,
     R`Numerador: \((-1)^2+3(-1)=1-3=-2\)`, R`\(\displaystyle\frac{-2}{-3}=\frac23\)`]},
   {t:'Límites laterales de una función a trozos', q:R`\(f(x)=\begin{cases}x^2+1 & x<1\\ 3x-1 & x\ge1\end{cases}\). ¿Existe \(\lim_{x\to1}f(x)\)?`, s:[
     R`Por la izquierda usa la fórmula de x < 1: \(\lim_{x\to1^-}(x^2+1)=2\)`,
     R`Por la derecha usa la de x ≥ 1: \(\lim_{x\to1^+}(3x-1)=2\)`, R`Los laterales coinciden → \(\lim_{x\to1}f(x)=2\).`]},
   {t:'Límite infinito: decidir el signo', q:R`\(\displaystyle\lim_{x\to3^-}\frac{x+1}{x-3}\)`, s:[
     R`Sustituir: \(\frac{4}{0}\) → número sobre cero: el límite es ±∞.`,
     R`Signo: si x < 3 (por ejemplo 2.99), \(x-3<0\) y \(x+1>0\) → positivo/negativo = negativo.`, R`\(\displaystyle\lim_{x\to3^-}\frac{x+1}{x-3}=-\infty\). Hay asíntota vertical en x = 3.`]},
  ],
  qs:[
   {q:R`\(\displaystyle\lim_{x\to2}(3x^2-x)\)`, o:['10','12','2','No existe'], e:R`Sustitución directa: \(3(4)-2=10\).`, h:'Es un polinomio.'},
   {q:R`\(\displaystyle\lim_{x\to0}\frac{|x|}{x}\)`, o:['No existe','0','1','−1'], e:'Por la izquierda −1, por la derecha 1: los laterales no coinciden.', h:'Calcula los dos laterales.'},
   {q:R`Al sustituir obtienes \(\frac00\). Eso significa…`, o:['Indeterminado: hay que simplificar','El límite es 0','El límite no existe','El límite es 1'], e:'0/0 es una forma indeterminada; falta álgebra o L’Hôpital.', h:'No decide nada.'},
   {q:R`\(\displaystyle\lim_{x\to0^+}\frac{-2}{x}\)`, o:[R`\(-\infty\)`,R`\(+\infty\)`,'0','−2'], e:'Negativo sobre un positivo muy pequeño.', h:'Signo del numerador y del denominador.'},
   {q:R`Si \(1-x^2\le f(x)\le1+x^2\) cerca de 0, \(\lim_{x\to0}f(x)=\)`, o:['1','0','2','No se puede saber'], e:'Compresión: ambos extremos tienden a 1.', h:'Teorema del sándwich.'},
   {q:R`\(\displaystyle\lim_{x\to\pi}\cos x\)`, o:['−1','1','0','π'], e:'cos es continua: cos π = −1.', h:'Sustitución directa.'},
  ]},
/* ---------------- LÍMITES: TÉCNICAS ---------------- */
{ id:'limites-calc', n:'Calcular límites: técnicas algebraicas', sub:'Factorizar, racionalizar, límites trig notables, límites al infinito', tgt:'INDETERMINACION_0/0',
  req:['limites','notables'], uses:'Derivada por definición (siempre da 0/0), asíntotas, convergencia de sucesiones y series',
  cites:['osc1|§2.3, 4.6','paul1|Computing Limits','stewart1|§2.3, 2.6'], see:['indeterminada','asintota','lhopital'],
  lore: R`
  <div class="why">Casi todos los límites interesantes dan \(\frac00\) o \(\frac\infty\infty\) al sustituir. La [[derivada]] por definición <b>siempre</b> da \(\frac00\). Esta sección es la caja de herramientas para destrabarlos.</div>
  <h3>Árbol de decisión</h3>
  <ol class="recipe">
   <li><b>Sustituye.</b> Si da un número, terminaste. Si da \(\frac{k}{0}\) con k ≠ 0 → ±∞ (analiza el signo).</li>
   <li>Si da \(\frac00\) con polinomios → <b>factoriza</b> y cancela el factor \((x-a)\).</li>
   <li>Si da \(\frac00\) con raíces → <b>racionaliza</b> (multiplica por el conjugado).</li>
   <li>Si da \(\frac00\) con fracciones dentro de fracciones → <b>común denominador</b>.</li>
   <li>Si hay seno/coseno → usa los <b>límites notables</b>.</li>
   <li>Si x → ∞ → divide por la <b>mayor potencia</b> del denominador.</li>
   <li>Si nada funciona → [[lhopital|regla de L'Hôpital]].</li>
  </ol>
  <h3>Técnica 1 · Factorizar y cancelar</h3>
  <div class="formula">\[\begin{aligned}\lim_{x\to3}\frac{x^2-9}{x-3}&=\lim_{x\to3}\frac{(x-3)(x+3)}{x-3}&&\text{(diferencia de cuadrados)}\\&=\lim_{x\to3}(x+3)&&(x\neq3,\text{ se puede cancelar})\\&=6\end{aligned}\]</div>
  <p><b>Por qué se puede cancelar:</b> el límite solo mira x <b>cerca</b> de 3, nunca x = 3, así que \(x-3\neq0\).</p>
  <div class="tip">Si al sustituir a da \(\frac00\) en un polinomio, por el teorema del factor \((x-a)\) <b>es</b> factor del numerador y del denominador. Divide (división sintética) si no lo ves.</div>
  <h3>Técnica 2 · Racionalizar</h3>
  <div class="formula">\[\begin{aligned}\lim_{x\to0}\frac{\sqrt{x+4}-2}{x}&=\lim_{x\to0}\frac{(\sqrt{x+4}-2)(\sqrt{x+4}+2)}{x(\sqrt{x+4}+2)}\\&=\lim_{x\to0}\frac{x+4-4}{x(\sqrt{x+4}+2)}=\lim_{x\to0}\frac{1}{\sqrt{x+4}+2}=\frac14\end{aligned}\]</div>
  <h3>Técnica 3 · Límites trigonométricos notables</h3>
  <div class="formula">\[\lim_{x\to0}\frac{\sin x}{x}=1\qquad\lim_{x\to0}\frac{1-\cos x}{x}=0\qquad\lim_{x\to0}\frac{\tan x}{x}=1\]</div>
  <p>Truco: haz que lo de adentro del seno y el denominador sean <b>iguales</b>:</p>
  <div class="formula">\[\lim_{x\to0}\frac{\sin5x}{3x}=\lim_{x\to0}\frac{5}{3}\cdot\frac{\sin5x}{5x}=\frac53\cdot1=\frac53\]</div>
  <p>El primero se demuestra con el [[compresion|teorema de compresión]] usando áreas en el círculo unitario: \(\cos x\le\frac{\sin x}{x}\le1\)[^osc1|§2.3].</p>
  <h3>Técnica 4 · Límites al infinito</h3>
  <p>Divide numerador y denominador por la mayor potencia de x <b>del denominador</b>; usa que \(\frac{c}{x^n}\to0\).</p>
  <div class="formula">\[\lim_{x\to\infty}\frac{3x^2-x+5}{2x^2+7}=\lim_{x\to\infty}\frac{3-\frac1x+\frac5{x^2}}{2+\frac7{x^2}}=\frac32\]</div>
  <div class="tscroll"><table class="t"><tr><th>Grados (num vs den)</th><th>\(\lim_{x\to\infty}\)</th><th>Asíntota</th></tr>
   <tr><td>num &lt; den</td><td>0</td><td>horizontal y = 0</td></tr>
   <tr><td>num = den</td><td>cociente de coeficientes principales</td><td>horizontal y = a/b</td></tr>
   <tr><td>num &gt; den</td><td>±∞</td><td>ninguna horizontal (oblicua si es 1 más)</td></tr></table></div>
  <h4>Con raíces y x → −∞</h4>
  <p>\(\sqrt{x^2}=|x|\). Si x → −∞, \(|x|=-x\). Error frecuente: olvidar el signo.</p>
  <div class="formula">\[\lim_{x\to-\infty}\frac{\sqrt{4x^2+1}}{x}=\lim_{x\to-\infty}\frac{|x|\sqrt{4+1/x^2}}{x}=\lim_{x\to-\infty}\frac{-x\cdot2}{x}=-2\]</div>
  <h3>Límites exponenciales que definen e</h3>
  <div class="formula">\[\lim_{n\to\infty}\left(1+\frac1n\right)^n=e\qquad\lim_{x\to0}\frac{e^x-1}{x}=1\qquad\lim_{x\to0}\frac{\ln(1+x)}{x}=1\]</div>
  <p>El primero es la forma \(1^\infty\): por eso esa forma es indeterminada (¡da e, no 1!). Es el interés compuesto continuo de Jakob Bernoulli (1683).</p>`,
  ex:[
   {t:'Factorizar un trinomio', q:R`\(\displaystyle\lim_{x\to2}\frac{x^2+x-6}{x^2-4}\)`, s:[
     R`Sustituir: \(\frac{4+2-6}{4-4}=\frac00\) → factorizar.`,
     R`\(x^2+x-6=(x+3)(x-2)\) y \(x^2-4=(x-2)(x+2)\)`, R`Cancelar \((x-2)\): \(\displaystyle\lim_{x\to2}\frac{x+3}{x+2}=\frac54\)`]},
   {t:'Racionalizar el denominador', q:R`\(\displaystyle\lim_{x\to9}\frac{x-9}{\sqrt x-3}\)`, s:[
     R`\(\frac00\). Conjugado de \(\sqrt x-3\) es \(\sqrt x+3\).`,
     R`\(\displaystyle\frac{(x-9)(\sqrt x+3)}{x-9}=\sqrt x+3\) (porque \((\sqrt x-3)(\sqrt x+3)=x-9\))`, R`\(\sqrt9+3=6\)`]},
   {t:'Trig notable con ajuste', q:R`\(\displaystyle\lim_{x\to0}\frac{\sin^2(3x)}{x^2}\)`, s:[
     R`\(\displaystyle\frac{\sin^2 3x}{x^2}=\left(\frac{\sin3x}{x}\right)^2=\left(3\cdot\frac{\sin3x}{3x}\right)^2\)`,
     R`\(\frac{\sin3x}{3x}\to1\) → el límite es \(3^2\cdot1=9\).`]},
   {t:'Límite al infinito con raíz', q:R`\(\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+6x}-x\right)\)`, s:[
     R`Forma \(\infty-\infty\): racionaliza multiplicando y dividiendo por \(\sqrt{x^2+6x}+x\).`,
     R`\(\displaystyle\frac{x^2+6x-x^2}{\sqrt{x^2+6x}+x}=\frac{6x}{\sqrt{x^2+6x}+x}\)`, R`Divide por x: \(\displaystyle\frac{6}{\sqrt{1+6/x}+1}\to\frac{6}{2}=3\)`]},
  ],
  qs:[
   {q:R`\(\displaystyle\lim_{x\to1}\frac{x^2-1}{x-1}\)`, o:['2','0','1','No existe'], e:'(x − 1)(x + 1)/(x − 1) = x + 1 → 2.', h:'Diferencia de cuadrados.'},
   {q:R`\(\displaystyle\lim_{x\to0}\frac{\sin 4x}{x}\)`, o:['4','1','0',R`\(\frac14\)`], e:'4 · sin(4x)/(4x) → 4.', h:'Multiplica y divide por 4.'},
   {q:R`\(\displaystyle\lim_{x\to\infty}\frac{5x^3-2}{2x^3+x}\)`, o:[R`\(\frac52\)`,'∞','0','5'], e:'Mismo grado: cociente de coeficientes principales.', h:'Divide por x³.'},
   {q:R`\(\displaystyle\lim_{x\to0}\frac{\sqrt{1+x}-1}{x}\)`, o:[R`\(\frac12\)`,'0','1','2'], e:'Racionaliza: 1/(√(1+x) + 1) → 1/2.', h:'Conjugado.'},
   {q:R`\(\displaystyle\lim_{x\to\infty}\frac{x^2}{x^3+1}\)`, o:['0','1','∞',R`\(\frac13\)`], e:'Grado del numerador menor → 0.', h:'Compara grados.'},
   {q:R`\(\displaystyle\lim_{x\to\infty}\left(1+\frac1x\right)^x\)`, o:['e','1','∞','0'], e:'Es la definición de e: la forma 1^∞ es indeterminada.', h:'Interés compuesto continuo.'},
   {q:R`\(\displaystyle\lim_{x\to-\infty}\frac{\sqrt{9x^2+1}}{x}\)`, o:['−3','3','0','∞'], e:'√(x²) = |x| = −x cuando x → −∞.', h:'Cuidado con el signo de la raíz.'},
  ]},
/* ---------------- CONTINUIDAD ---------------- */
{ id:'continuidad', n:'Continuidad y asíntotas', sub:'Tres condiciones, tipos de discontinuidad, TVI, asíntotas', tgt:'TRAZO_SIN_LEVANTAR',
  req:['limites-calc'], uses:'Teorema del valor intermedio, TVM y Rolle, integrabilidad, trazado de curvas',
  cites:['osc1|§2.4','paul1|Continuity','stewart1|§2.5–2.6'], see:['tvi','asintota','diferenciable'],
  lore: R`
  <div class="why">Una función es [[continuidad|continua]] si se puede dibujar <b>sin levantar el lápiz</b>. Los grandes teoremas (valor intermedio, valor extremo, [[tvm|valor medio]], el [[tfc|Teorema Fundamental]]) solo funcionan con funciones continuas.</div>
  <h3>Definición: tres condiciones</h3>
  <p>f es continua en x = a si:</p>
  <ol class="recipe"><li>\(f(a)\) existe (a está en el dominio).</li><li>\(\lim_{x\to a}f(x)\) existe (laterales iguales).</li><li>\(\lim_{x\to a}f(x)=f(a)\).</li></ol>
  <div class="formula">\[f\text{ continua en }a\iff\lim_{x\to a}f(x)=f(a)\]</div>
  <h3>Tipos de discontinuidad</h3>
  <div class="tscroll"><table class="t"><tr><th>Tipo</th><th>Qué pasa</th><th>Ejemplo</th></tr>
   <tr><td><b>Removible</b> (hueco)</td><td>el límite existe pero ≠ f(a) o f(a) no existe</td><td>\(\frac{x^2-1}{x-1}\) en x = 1</td></tr>
   <tr><td><b>De salto</b></td><td>los laterales existen pero son distintos</td><td>\(\frac{|x|}{x}\) en 0, función piso</td></tr>
   <tr><td><b>Infinita</b></td><td>algún lateral es ±∞</td><td>\(\frac1x\) en 0, \(\tan x\) en π/2</td></tr>
   <tr><td><b>Oscilante</b></td><td>no se acerca a nada</td><td>\(\sin\frac1x\) en 0</td></tr></table></div>
  <div class="tip">Una removible se "arregla" redefiniendo f(a) = el límite. Eso es exactamente lo que hacemos al factorizar y cancelar.</div>
  <h3>Qué funciones son continuas</h3>
  <p>Polinomios (en todo ℝ), racionales (salvo donde el denominador = 0), raíces (en su dominio), \(e^x\), \(\ln x\) (x &gt; 0), sen, cos (en todo ℝ), tan (salvo \(\frac\pi2+k\pi\)). Sumas, productos, cocientes (denominador ≠ 0) y <b>composiciones</b> de continuas son continuas.</p>
  <h3>Hacer continua una función a trozos</h3>
  <ol class="recipe"><li>En el punto de unión, calcula el límite por la izquierda (fórmula de la izquierda) y por la derecha.</li><li>Iguala ambos (y a f(a)) y despeja el parámetro.</li></ol>
  <h3>Teorema del valor intermedio (TVI)</h3>
  <div class="formula">\[f\text{ continua en }[a,b],\ N\text{ entre }f(a)\text{ y }f(b)\ \Rightarrow\ \exists c\in(a,b):\ f(c)=N\]</div>
  <p>Uso principal: <b>demostrar que una ecuación tiene raíz</b>. Si \(f(a)<0\lt f(b)\), hay un c con \(f(c)=0\). Es la base del método de bisección[^osc1|§2.4].</p>
  <h3>Teorema del valor extremo</h3>
  <p>Si f es continua en un intervalo <b>cerrado</b> [a, b], alcanza un máximo y un mínimo absolutos. Lo usamos en [[optimizacion|optimización]].</p>
  <h3>Asíntotas</h3>
  <ol class="recipe">
   <li><b>Vertical</b> x = a: si \(\lim_{x\to a^\pm}f(x)=\pm\infty\). Busca donde el denominador = 0 <b>y</b> el numerador ≠ 0 (si ambos son 0, puede ser un hueco).</li>
   <li><b>Horizontal</b> y = L: si \(\lim_{x\to\pm\infty}f(x)=L\).</li>
   <li><b>Oblicua</b> y = mx + b: si el grado del numerador es uno más; divide (división larga) y el cociente es la asíntota.</li>
  </ol>
  <div class="formula">\[\frac{x^2+1}{x-1}=x+1+\frac{2}{x-1}\ \Rightarrow\ \text{oblicua } y=x+1,\ \text{vertical } x=1\]</div>`,
  ex:[
   {t:'Hallar k para que sea continua', q:R`\(f(x)=\begin{cases}kx^2 & x\le2\\ 4x-k & x>2\end{cases}\)`, s:[
     R`Izquierda: \(\lim_{x\to2^-}kx^2=4k\). Derecha: \(\lim_{x\to2^+}(4x-k)=8-k\).`,
     R`Igualar: \(4k=8-k\Rightarrow5k=8\Rightarrow k=\frac85\).`, R`Con \(k=\frac85\), \(f(2)=4k=\frac{32}5\) coincide con ambos límites ✓.`]},
   {t:'TVI: demostrar que hay una raíz', q:R`Muestra que \(x^3+x-1=0\) tiene una solución en [0, 1].`, s:[
     R`\(f(x)=x^3+x-1\) es polinomio → continua en [0, 1].`,
     R`\(f(0)=-1<0\) y \(f(1)=1>0\).`, R`0 está entre −1 y 1 → por el TVI existe \(c\in(0,1)\) con \(f(c)=0\). (≈ 0.6823)`]},
   {t:'Clasificar discontinuidades y asíntotas', q:R`\(f(x)=\frac{x^2-x-2}{x^2-4}\)`, s:[
     R`Factoriza: \(\frac{(x-2)(x+1)}{(x-2)(x+2)}\). Se anula el denominador en x = 2 y x = −2.`,
     R`x = 2: el factor se cancela → <b>removible</b>, el hueco está en \(y=\frac{2+1}{2+2}=\frac34\).`,
     R`x = −2: queda \(\frac{x+1}{x+2}\) → \(\frac{-1}{0}\) → <b>asíntota vertical</b>.`, R`x → ±∞: grados iguales → <b>asíntota horizontal</b> y = 1.`]},
  ],
  qs:[
   {q:R`\(\frac{x^2-4}{x-2}\) en x = 2 tiene una discontinuidad…`, o:['Removible','De salto','Infinita','No es discontinua'], e:'Se cancela (x − 2): hay un hueco en (2, 4).', h:'¿Se cancela el factor?'},
   {q:R`Asíntotas verticales de \(\frac{x+3}{x^2-9}\)`, o:['Solo x = 3','x = 3 y x = −3','Solo x = −3','Ninguna'], e:'(x + 3) se cancela: en −3 hay hueco, en 3 asíntota.', h:'Factoriza primero.'},
   {q:R`Asíntota horizontal de \(\frac{4x^2+1}{2x^2-x}\)`, o:['y = 2','y = 4','y = 0','No tiene'], e:'Mismo grado: 4/2.', h:'Coeficientes principales.'},
   {q:R`El TVI necesita que f sea…`, o:['Continua en [a, b]','Derivable en (a, b)','Creciente','Polinómica'], e:'Solo continuidad en el intervalo cerrado.', h:'Sin levantar el lápiz.'},
   {q:R`Valor de c para que \(f(x)=\begin{cases}x+c&x<1\\x^2&x\ge1\end{cases}\) sea continua`, o:['0','1','2','−1'], e:'1 + c = 1 → c = 0.', h:'Iguala los laterales en 1.'},
   {q:R`Asíntota oblicua de \(\frac{x^2+3x}{x+1}\)`, o:['y = x + 2','y = x + 3','y = x','y = 1'], e:'División: x² + 3x = (x + 1)(x + 2) − 2.', h:'División larga.'},
  ]},
/* ---------------- DERIVADA: DEFINICIÓN ---------------- */
{ id:'derivada-def', n:'La derivada: definición y recta tangente', sub:'Pendiente de la secante → tangente · f′(a) como límite · diferenciabilidad', tgt:'PENDIENTE_INSTANTANEA',
  req:['limites-calc'], uses:'Toda la tabla de derivadas sale de aquí; razones de cambio, aproximación lineal, optimización',
  cites:['osc1|§3.1–3.2','paul1|The Definition of the Derivative','stewart1|§2.7–2.8','3b1b|cap. 2'], see:['derivada','diferenciable','recta-tangente'],
  lore: R`
  <div class="why">La [[derivada]] mide <b>qué tan rápido cambia</b> algo: la velocidad es la derivada de la posición, la pendiente de la tangente es la derivada de la curva. Newton (1665–66, "fluxiones") y Leibniz (1684, "Nova Methodus") la inventaron por separado; la notación \(\frac{dy}{dx}\) es de Leibniz[^hist-leibniz].</div>
  <h3>De la secante a la tangente</h3>
  <svg class="dg" viewBox="0 0 320 180"><path class="ax" d="M20 165H310M30 175V10"/><path class="c1" d="M40 150 Q140 140 200 80 T300 20"/><path class="c2" d="M60 158 L300 30"/><path class="c3" d="M40 128 L300 2"/><circle cx="120" cy="125" r="4" class="dot"/><circle cx="230" cy="62" r="4" class="dot"/><path class="ax dash" d="M120 125H230V62"/><text x="160" y="140">h</text><text x="236" y="100">f(a+h) − f(a)</text><text x="104" y="118">a</text><text x="250" y="40" class="t2">secante</text><text x="60" y="110" class="t3">tangente</text></svg>
  <p>La pendiente de la <b>secante</b> entre a y a + h es \(\frac{f(a+h)-f(a)}{h}\) (cociente de diferencias). Al hacer h → 0 la secante gira hasta la <b>tangente</b>.</p>
  <div class="formula">\[f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}\qquad\text{o bien}\qquad f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}\]</div>
  <h3>Procedimiento: derivar por definición</h3>
  <ol class="recipe">
   <li>Calcula \(f(x+h)\) reemplazando x por \((x+h)\) <b>con paréntesis</b>.</li>
   <li>Resta \(f(x+h)-f(x)\) y simplifica: todo lo que no tiene h se debe cancelar.</li>
   <li>Divide por h: factoriza h en el numerador y cancélalo.</li>
   <li>Haz h → 0 (ahora sí se puede sustituir).</li>
  </ol>
  <div class="formula">\[\begin{aligned}f(x)=x^2:\quad\frac{(x+h)^2-x^2}{h}&=\frac{x^2+2xh+h^2-x^2}{h}=\frac{h(2x+h)}{h}=2x+h\ \xrightarrow{h\to0}\ 2x\end{aligned}\]</div>
  <div class="trap">Siempre sale \(\frac00\) al sustituir h = 0 de entrada. Si no se te cancela la h, revisa el álgebra (el error típico es \((x+h)^2=x^2+h^2\)).</div>
  <h3>Notaciones</h3>
  <p>\(f'(x)\) (Lagrange) · \(\frac{dy}{dx}\), \(\frac{d}{dx}f\) (Leibniz) · \(\dot y\) (Newton, para el tiempo) · \(D_xf\) (Euler). Todas significan lo mismo.</p>
  <h3>Recta tangente</h3>
  <div class="formula">\[y-f(a)=f'(a)(x-a)\]</div>
  <p>Necesitas el <b>punto</b> \((a,f(a))\) y la <b>pendiente</b> \(f'(a)\). La <b>recta normal</b> es perpendicular: pendiente \(-\frac1{f'(a)}\).</p>
  <h3>Interpretaciones</h3>
  <div class="tscroll"><table class="t"><tr><th>Si f es…</th><th>f′ es…</th><th>Unidades</th></tr>
   <tr><td>posición s(t)</td><td>velocidad v(t)</td><td>m/s</td></tr><tr><td>velocidad v(t)</td><td>aceleración</td><td>m/s²</td></tr>
   <tr><td>costo C(q)</td><td>costo marginal</td><td>$/unidad</td></tr><tr><td>población P(t)</td><td>tasa de crecimiento</td><td>individuos/año</td></tr></table></div>
  <h3>Diferenciabilidad</h3>
  <p>f es [[diferenciable]] en a si f′(a) existe. <b>Diferenciable ⇒ continua</b>, pero no al revés. Falla en:</p>
  <ol class="recipe"><li><b>Picos (esquinas):</b> \(|x|\) en 0 (pendiente −1 a la izquierda, +1 a la derecha).</li><li><b>Tangente vertical:</b> \(\sqrt[3]{x}\) en 0.</li><li><b>Discontinuidades.</b></li></ol>
  <h3>Derivadas de orden superior</h3>
  <p>\(f''=(f')'\), \(f'''\), \(f^{(n)}\). Si s(t) es posición, s″ es aceleración y s‴ es el "jerk" (sobreaceleración).</p>`,
  ex:[
   {t:'Derivada por definición de una racional', q:R`\(f(x)=\frac1x\). Calcula f′(x) por definición.`, s:[
     R`\(f(x+h)-f(x)=\frac{1}{x+h}-\frac1x=\frac{x-(x+h)}{x(x+h)}=\frac{-h}{x(x+h)}\)`,
     R`Divide por h: \(\frac{-1}{x(x+h)}\)`, R`h → 0: \(f'(x)=-\frac{1}{x^2}\). Coincide con la regla de la potencia: \((x^{-1})'=-x^{-2}\).`]},
   {t:'Derivada por definición con raíz', q:R`\(f(x)=\sqrt x\)`, s:[
     R`\(\frac{\sqrt{x+h}-\sqrt x}{h}\cdot\frac{\sqrt{x+h}+\sqrt x}{\sqrt{x+h}+\sqrt x}=\frac{x+h-x}{h(\sqrt{x+h}+\sqrt x)}\)`,
     R`\(=\frac{1}{\sqrt{x+h}+\sqrt x}\xrightarrow{h\to0}\frac{1}{2\sqrt x}\)`]},
   {t:'Recta tangente', q:R`Recta tangente a \(y=x^3-2x\) en x = 1.`, s:[
     R`Punto: \(f(1)=1-2=-1\) → (1, −1).`, R`Pendiente: \(f'(x)=3x^2-2\Rightarrow f'(1)=1\).`, R`\(y-(-1)=1(x-1)\Rightarrow y=x-2\).`]},
  ],
  qs:[
   {q:R`\(\displaystyle\lim_{h\to0}\frac{(3+h)^2-9}{h}\) es la derivada de x² en x = 3. Vale:`, o:['6','9','3','0'], e:'f′(x) = 2x → f′(3) = 6.', h:'Reconoce la definición.'},
   {q:R`La pendiente de la tangente a \(y=x^2\) en (−2, 4) es`, o:['−4','4','−2','2'], e:'2x en x = −2.', h:'f′(x) = 2x.'},
   {q:R`\(f(x)=|x|\) en x = 0 es…`, o:['Continua pero no derivable','Derivable','Discontinua','Derivable con f′(0) = 0'], e:'Hay un pico: pendientes −1 y 1.', h:'¿Tiene esquina?'},
   {q:R`Si s(t) = 5t² (m), la velocidad en t = 2 s es`, o:['20 m/s','10 m/s','20 m','5 m/s'], e:'v = s′ = 10t → 20.', h:'v = s′(t).'},
   {q:R`Recta tangente a \(y=\sqrt x\) en x = 4`, o:[R`\(y=\frac14x+1\)`,R`\(y=\frac12x\)`,R`\(y=\frac14x+2\)`,R`\(y=4x-14\)`], e:R`Pendiente \(\frac{1}{2\sqrt4}=\frac14\); punto (4, 2): \(y=2+\frac14(x-4)\).`, h:'Punto y pendiente.'},
   {q:R`Diferenciable en a implica…`, o:['Continua en a','Tiene máximo en a','f′(a) = 0','Nada'], e:'Diferenciabilidad ⇒ continuidad (el recíproco es falso).', h:'Uno implica el otro.'},
  ]},
/* ---------------- IMPLÍCITA, LOGARÍTMICA, INVERSAS ---------------- */
{ id:'implicita', n:'Derivación implícita, logarítmica e inversas', sub:'y como función escondida · ln para potencias raras · arcsen, arctan', tgt:'VARIABLE_OCULTA',
  req:['derivadas'], uses:'Razones relacionadas, curvas paramétricas, derivadas parciales (la versión multivariable es el teorema de la función implícita)',
  cites:['osc1|§3.7–3.9','paul1|Implicit Differentiation','stewart1|§3.5–3.6'], see:['regla-cadena','implicita'],
  lore: R`
  <div class="why">No todas las curvas son \(y=f(x)\). En \(x^2+y^2=25\) la y está "escondida". La [[implicita|derivación implícita]] es la [[regla-cadena|regla de la cadena]] aplicada a y como función de x.</div>
  <h3>Derivación implícita: procedimiento</h3>
  <ol class="recipe">
   <li>Deriva <b>ambos lados</b> respecto a x.</li>
   <li>Cada vez que derives algo con y, multiplica por \(y'\) (regla de la cadena: y depende de x).</li>
   <li>Pasa todos los términos con \(y'\) a un lado y el resto al otro.</li>
   <li>Factoriza \(y'\) y despeja.</li>
  </ol>
  <div class="formula">\[\begin{aligned}x^2+y^2&=25\\2x+2y\,y'&=0&&\text{(}\tfrac{d}{dx}y^2=2y\,y'\text{)}\\y'&=-\frac{x}{y}\end{aligned}\]</div>
  <p>En (3, 4): \(y'=-\frac34\). Tiene sentido: la tangente al círculo es perpendicular al radio (pendiente 4/3).</p>
  <div class="trap">\(\frac{d}{dx}(xy)\) es un <b>producto</b>: \(1\cdot y+x\,y'\). Olvidar la regla del producto es el error número uno.</div>
  <h3>Exponenciales y logaritmos en cualquier base</h3>
  <div class="formula">\[\frac{d}{dx}a^x=a^x\ln a\qquad\frac{d}{dx}\log_ax=\frac{1}{x\ln a}\qquad\frac{d}{dx}\ln|x|=\frac1x\]</div>
  <p><b>De dónde sale:</b> \(a^x=e^{x\ln a}\), y por cadena \((e^{x\ln a})'=e^{x\ln a}\cdot\ln a\).</p>
  <h3>Derivación logarítmica</h3>
  <p>Para \(f(x)^{g(x)}\) (variable en base <b>y</b> exponente) o productos/cocientes enormes:</p>
  <ol class="recipe"><li>\(y=f^g\Rightarrow\ln y=g\ln f\) (propiedad de logaritmos).</li><li>Deriva implícitamente: \(\frac{y'}{y}=(g\ln f)'\).</li><li>\(y'=y\cdot(g\ln f)'\) y reemplaza y.</li></ol>
  <div class="formula">\[y=x^x\Rightarrow\ln y=x\ln x\Rightarrow\frac{y'}{y}=\ln x+1\Rightarrow y'=x^x(\ln x+1)\]</div>
  <div class="trap">\((x^x)'\neq x\cdot x^{x-1}\) (eso es tratarla como potencia) y \(\neq x^x\ln x\) (eso es tratarla como exponencial). Hay que usar logaritmos.</div>
  <h3>Funciones trigonométricas inversas</h3>
  <p>Si \(y=\arcsin x\), entonces \(\sin y=x\). Deriva implícitamente: \(\cos y\cdot y'=1\Rightarrow y'=\frac1{\cos y}=\frac{1}{\sqrt{1-x^2}}\) (por el [[pitagorica|triángulo]]: \(\cos y=\sqrt{1-\sin^2y}\)).</p>
  <div class="tscroll"><table class="t"><tr><th>f</th><th>f′</th><th>f</th><th>f′</th></tr>
   <tr><td>\(\arcsin x\)</td><td>\(\frac{1}{\sqrt{1-x^2}}\)</td><td>\(\arccos x\)</td><td>\(-\frac{1}{\sqrt{1-x^2}}\)</td></tr>
   <tr><td>\(\arctan x\)</td><td>\(\frac{1}{1+x^2}\)</td><td>\(\text{arccot}\,x\)</td><td>\(-\frac{1}{1+x^2}\)</td></tr>
   <tr><td>\(\text{arcsec}\,x\)</td><td>\(\frac{1}{|x|\sqrt{x^2-1}}\)</td><td>\(\text{arccsc}\,x\)</td><td>\(-\frac{1}{|x|\sqrt{x^2-1}}\)</td></tr></table></div>
  <h3>Derivada de la función inversa</h3>
  <div class="formula">\[(f^{-1})'(b)=\frac{1}{f'(a)}\quad\text{donde }f(a)=b\]</div>
  <p>Geométricamente: la gráfica de \(f^{-1}\) es la reflexión de la de f en y = x, y las pendientes se invierten.</p>`,
  ex:[
   {t:'Implícita con producto', q:R`\(x^3+xy+y^3=7\). Halla \(y'\).`, s:[
     R`Deriva: \(3x^2+(1\cdot y+x\,y')+3y^2y'=0\)`, R`Agrupa: \(y'(x+3y^2)=-3x^2-y\)`, R`\(\displaystyle y'=-\frac{3x^2+y}{x+3y^2}\)`]},
   {t:'Derivación logarítmica', q:R`\(y=(\sin x)^{x}\), con \(0\lt x\lt \pi\)`, s:[
     R`\(\ln y=x\ln(\sin x)\)`, R`\(\frac{y'}{y}=\ln(\sin x)+x\cdot\frac{\cos x}{\sin x}\)`, R`\(y'=(\sin x)^x\left[\ln(\sin x)+x\cot x\right]\)`]},
   {t:'Inversa trigonométrica con cadena', q:R`\(\frac{d}{dx}\arctan(x^2)\)`, s:[
     R`Afuera: arctan(□) → \(\frac{1}{1+\square^2}\). Adentro: \(x^2\), su derivada es 2x.`, R`\(\displaystyle\frac{2x}{1+x^4}\)`]},
  ],
  qs:[
   {q:R`Si \(x^2+y^2=1\), \(y'=\)`, o:[R`\(-\frac xy\)`,R`\(\frac xy\)`,R`\(-\frac yx\)`,R`\(-2x\)`], e:'2x + 2y y′ = 0.', h:'Deriva y² como 2y·y′.'},
   {q:R`\(\frac{d}{dx}(xy)\) con y = y(x)`, o:[R`\(y+xy'\)`,R`\(y'\)`,R`\(xy'\)`,R`\(1\cdot y'\)`], e:'Regla del producto.', h:'Es un producto.'},
   {q:R`\(\frac{d}{dx}2^x\)`, o:[R`\(2^x\ln2\)`,R`\(x2^{x-1}\)`,R`\(2^x\)`,R`\(\frac{2^x}{\ln2}\)`], e:'aˣ ln a.', h:'Base constante, exponente variable.'},
   {q:R`\(\frac{d}{dx}x^x\)`, o:[R`\(x^x(\ln x+1)\)`,R`\(x\cdot x^{x-1}\)`,R`\(x^x\ln x\)`,R`\(x^x\)`], e:'Derivación logarítmica.', h:'Toma ln a ambos lados.'},
   {q:R`\(\frac{d}{dx}\arcsin(2x)\)`, o:[R`\(\frac{2}{\sqrt{1-4x^2}}\)`,R`\(\frac{1}{\sqrt{1-4x^2}}\)`,R`\(\frac{2}{1+4x^2}\)`,R`\(\frac{2}{\sqrt{1-2x^2}}\)`], e:'Cadena: 1/√(1 − (2x)²) · 2.', h:'Adentro es 2x.'},
   {q:R`Si f(1) = 3 y f′(1) = 5, \((f^{-1})'(3)=\)`, o:[R`\(\frac15\)`,'5',R`\(\frac13\)`,'−5'], e:'1/f′(1).', h:'Las pendientes se invierten.'},
  ]},
/* ---------------- RAZONES RELACIONADAS ---------------- */
{ id:'razones', n:'Razones de cambio relacionadas', sub:'Escaleras, globos, sombras y tanques: todo cambia con el tiempo', tgt:'ESCALERA_DESLIZANTE',
  req:['implicita'], uses:'Problemas de física e ingeniería; es la regla de la cadena con t',
  cites:['osc1|§4.1','paul1|Related Rates','stewart1|§3.9'], see:['regla-cadena','implicita'],
  lore: R`
  <div class="why">Cuando dos cantidades están <b>relacionadas por una ecuación</b> y ambas cambian con el tiempo, sus velocidades de cambio también están relacionadas. Se resuelve con [[implicita|derivación implícita]] respecto a t.</div>
  <h3>Receta (no te saltes el dibujo)</h3>
  <ol class="recipe">
   <li><b>Dibuja</b> y nombra las cantidades que cambian con letras (x, y, r, h…). Las constantes con su número.</li>
   <li>Escribe qué <b>tasas te dan</b> (\(\frac{dx}{dt}=\dots\)) y cuál te <b>piden</b>. Ojo con el signo: si algo disminuye, su tasa es negativa.</li>
   <li>Escribe la <b>ecuación</b> que relaciona las cantidades (Pitágoras, volumen, semejanza de triángulos, trigonometría).</li>
   <li><b>Deriva respecto a t</b> ambos lados (cada variable lleva su \(\frac{d}{dt}\)).</li>
   <li><b>Ahora sí</b> sustituye los valores del instante pedido y despeja.</li>
  </ol>
  <div class="trap">Si sustituyes los números <b>antes</b> de derivar, las variables se vuelven constantes y su derivada da 0. Primero derivar, después sustituir.</div>
  <h3>Ecuaciones típicas</h3>
  <div class="tscroll"><table class="t"><tr><th>Situación</th><th>Ecuación</th><th>Derivada respecto a t</th></tr>
   <tr><td>Escalera / distancias</td><td>\(x^2+y^2=L^2\)</td><td>\(2x\dot x+2y\dot y=0\)</td></tr>
   <tr><td>Globo esférico</td><td>\(V=\frac43\pi r^3\)</td><td>\(\dot V=4\pi r^2\dot r\)</td></tr>
   <tr><td>Mancha circular</td><td>\(A=\pi r^2\)</td><td>\(\dot A=2\pi r\dot r\)</td></tr>
   <tr><td>Cono (tanque)</td><td>\(V=\frac13\pi r^2h\) con \(\frac rh=\frac RH\)</td><td>reemplaza r antes de derivar</td></tr>
   <tr><td>Ángulo de elevación</td><td>\(\tan\theta=\frac{y}{x}\)</td><td>\(\sec^2\theta\,\dot\theta=\dots\)</td></tr></table></div>
  <div class="tip">En el cono, usa la semejanza \(r=\frac RH h\) para dejar V solo en función de h <b>antes</b> de derivar: \(V=\frac13\pi\frac{R^2}{H^2}h^3\).</div>`,
  ex:[
   {t:'La escalera que resbala', q:R`Una escalera de 10 m está apoyada en una pared. La base se aleja a 1 m/s. ¿Qué tan rápido baja la parte de arriba cuando la base está a 6 m?`, s:[
     R`{{DIB}} x = distancia de la base a la pared, y = altura. Dato: \(\frac{dx}{dt}=1\). Piden \(\frac{dy}{dt}\) cuando x = 6.`,
     R`{{PLA}} Pitágoras: \(x^2+y^2=100\). Derivando: \(2x\frac{dx}{dt}+2y\frac{dy}{dt}=0\).`,
     R`{{CAL}} Con x = 6: \(y=\sqrt{100-36}=8\). \(2(6)(1)+2(8)\frac{dy}{dt}=0\Rightarrow\frac{dy}{dt}=-\frac{12}{16}=-\frac34\).`,
     R`{{RES}} Baja a \(\frac34\) m/s (el signo − indica que y disminuye).`]},
   {t:'Tanque cónico', q:R`Un tanque cónico (vértice abajo) de radio 2 m y altura 4 m se llena a 2 m³/min. ¿A qué ritmo sube el agua cuando h = 3 m?`, s:[
     R`{{PLA}} Semejanza: \(\frac rh=\frac24\Rightarrow r=\frac h2\). \(V=\frac13\pi\left(\frac h2\right)^2h=\frac{\pi}{12}h^3\).`,
     R`{{CAL}} \(\frac{dV}{dt}=\frac{\pi}{4}h^2\frac{dh}{dt}\Rightarrow2=\frac{\pi}{4}(9)\frac{dh}{dt}\)`,
     R`{{RES}} \(\frac{dh}{dt}=\frac{8}{9\pi}\approx0.283\) m/min.`]},
  ],
  qs:[
   {q:R`Un círculo crece: \(\frac{dr}{dt}=2\) cm/s. \(\frac{dA}{dt}\) cuando r = 5:`, o:[R`\(20\pi\) cm²/s`,R`\(10\pi\) cm²/s`,R`\(25\pi\) cm²/s`,R`\(4\pi\) cm²/s`], e:'dA/dt = 2πr dr/dt = 2π(5)(2).', h:'A = πr².'},
   {q:R`Esfera: \(\frac{dV}{dt}=100\) cm³/s. \(\frac{dr}{dt}\) cuando r = 5:`, o:[R`\(\frac1\pi\) cm/s`,R`\(\frac{1}{4\pi}\) cm/s`,R`\(4\pi\) cm/s`,'1 cm/s'], e:'100 = 4π(25) dr/dt.', h:'V = (4/3)πr³.'},
   {q:R`¿Cuándo se sustituyen los valores del instante?`, o:['Después de derivar','Antes de derivar','Da igual','Nunca'], e:'Si sustituyes antes, las variables se vuelven constantes.', h:'Primero la ecuación general.'},
   {q:R`Si una cantidad disminuye a 3 u/s, su derivada es`, o:['−3','3','0','1/3'], e:'Disminuir = tasa negativa.', h:'Signo.'},
   {q:R`Escalera de 5 m; la base se aleja a 2 m/s. Cuando x = 3, \(\frac{dy}{dt}=\)`, o:[R`\(-\frac32\) m/s`,R`\(\frac32\) m/s`,R`\(-\frac23\) m/s`,'−2 m/s'], e:'y = 4; 3·2 + 4·dy/dt = 0.', h:'x² + y² = 25.'},
  ]},
/* ---------------- APROXIMACIÓN LINEAL Y NEWTON ---------------- */
{ id:'linealizacion', n:'Aproximación lineal, diferenciales y método de Newton', sub:'La tangente como "lupa" · dy ≈ Δy · raíces numéricas', tgt:'LUPA_TANGENTE',
  req:['derivada-def'], uses:'Polinomios de Taylor (orden 1), plano tangente en varias variables, propagación de errores',
  cites:['osc1|§4.2, 4.9','paul1|Linear Approximations','stewart1|§3.10, 4.8'], see:['taylor-pol','plano-tangente'],
  lore: R`
  <div class="why">Si haces zoom en una curva derivable, se ve como una <b>recta</b>: su tangente. Por eso cerca de a, \(f(x)\approx f(a)+f'(a)(x-a)\). Así trabajan las calculadoras y la física ("ángulos pequeños": \(\sin\theta\approx\theta\)).</div>
  <h3>Linealización</h3>
  <div class="formula">\[L(x)=f(a)+f'(a)(x-a)\qquad f(x)\approx L(x)\ \text{ para }x\text{ cerca de }a\]</div>
  <ol class="recipe"><li>Elige un a <b>cercano</b> donde f(a) sea fácil (raíz exacta, ángulo notable).</li><li>Calcula f(a) y f′(a).</li><li>Evalúa L en el valor pedido.</li></ol>
  <div class="formula">\[\sqrt{4.1}:\ f=\sqrt x,\ a=4,\ f(4)=2,\ f'(4)=\tfrac14\ \Rightarrow\ \sqrt{4.1}\approx2+\tfrac14(0.1)=2.025\]</div>
  <p>(Valor real: 2.02485…). La aproximación <b>sobreestima</b> porque \(\sqrt x\) es cóncava hacia abajo: la tangente queda por encima.</p>
  <h3>Diferenciales</h3>
  <div class="formula">\[dy=f'(x)\,dx\qquad\Delta y\approx dy\]</div>
  <p>dx es un cambio pequeño en x; dy es el cambio a lo largo de la tangente. Sirve para <b>estimar errores</b>: si mides el radio de una esfera r = 10 cm con error ±0.1 cm, \(dV=4\pi r^2dr=4\pi(100)(0.1)\approx\pm125.7\) cm³. Error relativo: \(\frac{dV}{V}=3\frac{dr}{r}=3\%\).</p>
  <h3>Aproximaciones famosas (x cerca de 0)</h3>
  <div class="tscroll"><table class="t"><tr><th>f(x)</th><th>L(x)</th><th>f(x)</th><th>L(x)</th></tr>
   <tr><td>\(\sin x\)</td><td>\(x\)</td><td>\(e^x\)</td><td>\(1+x\)</td></tr><tr><td>\(\tan x\)</td><td>\(x\)</td><td>\(\ln(1+x)\)</td><td>\(x\)</td></tr>
   <tr><td>\(\cos x\)</td><td>\(1\)</td><td>\((1+x)^k\)</td><td>\(1+kx\)</td></tr></table></div>
  <p>Son los primeros términos de las [[taylor-pol|series de Taylor]]; agregar más términos mejora la aproximación.</p>
  <h3>Método de Newton–Raphson</h3>
  <p>Para resolver \(f(x)=0\): empieza en \(x_0\), traza la tangente y mira dónde corta al eje x. Repite.</p>
  <div class="formula">\[x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}\]</div>
  <p>Ejemplo \(\sqrt2\): \(f=x^2-2\), \(x_{n+1}=x_n-\frac{x_n^2-2}{2x_n}\). Desde \(x_0=1\): 1.5 → 1.41667 → 1.4142157 → 1.41421356 (cada paso ~duplica los decimales correctos)[^osc1|§4.9].</p>
  <div class="trap">Newton falla si \(f'(x_n)=0\) (tangente horizontal) o si el punto inicial está lejos: puede oscilar o escaparse. Usa el [[tvi|TVI]] para elegir un buen \(x_0\).</div>`,
  ex:[
   {t:'Aproximar una raíz cúbica', q:R`Aproxima \(\sqrt[3]{8.06}\)`, s:[
     R`\(f(x)=x^{1/3}\), a = 8 (raíz exacta): f(8) = 2.`, R`\(f'(x)=\frac13x^{-2/3}\Rightarrow f'(8)=\frac13\cdot\frac14=\frac1{12}\)`,
     R`\(L(8.06)=2+\frac1{12}(0.06)=2.005\). (Real: 2.004992…)`]},
   {t:'Error con diferenciales', q:R`El lado de un cubo mide 30 cm ± 0.1 cm. Estima el error máximo en el volumen.`, s:[
     R`\(V=x^3\Rightarrow dV=3x^2dx\)`, R`\(dV=3(900)(0.1)=270\) cm³`, R`Relativo: \(\frac{270}{27000}=1\%\) (= 3 × el 0.33 % del lado).`]},
   {t:'Un paso de Newton', q:R`Aplica Newton a \(f(x)=x^3-x-1\) desde \(x_0=1\) (dos pasos).`, s:[
     R`\(f'(x)=3x^2-1\). \(x_1=1-\frac{1-1-1}{3-1}=1+\frac12=1.5\)`,
     R`\(f(1.5)=0.875,\ f'(1.5)=5.75\Rightarrow x_2=1.5-0.1522=1.3478\)`, R`La raíz real es ≈ 1.3247: dos pasos más la fijan con 6 decimales.`]},
  ],
  qs:[
   {q:R`Linealización de \(e^x\) en a = 0`, o:[R`\(1+x\)`,R`\(x\)`,R`\(e+ex\)`,'1'], e:'f(0) = 1, f′(0) = 1.', h:'f(a) + f′(a)(x − a).'},
   {q:R`Con L(x), \(\sqrt{9.2}\approx\)`, o:['3.0333','3.1','3.0667','3.2'], e:'3 + (1/6)(0.2).', h:'a = 9, f′(9) = 1/6.'},
   {q:R`Si f es cóncava hacia arriba, la aproximación lineal…`, o:['Subestima','Sobreestima','Es exacta','Depende de a'], e:'La tangente queda por debajo de la curva.', h:'¿Dónde queda la tangente?'},
   {q:R`Fórmula de Newton`, o:[R`\(x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}\)`,R`\(x_{n+1}=x_n+\frac{f(x_n)}{f'(x_n)}\)`,R`\(x_{n+1}=x_n-\frac{f'(x_n)}{f(x_n)}\)`,R`\(x_{n+1}=\frac{x_n}{f(x_n)}\)`], e:'Corte de la tangente con el eje x.', h:'Despeja x en 0 = f + f′(x − xₙ).'},
   {q:R`\(dy\) para \(y=x^2\) en x = 3 con dx = 0.1`, o:['0.6','0.61','0.3','6'], e:'dy = 2x dx = 0.6 (Δy real = 0.61).', h:'dy = f′(x)dx.'},
  ]},
/* ---------------- TVM Y TRAZADO DE CURVAS ---------------- */
{ id:'tvm', n:'Valor medio, crecimiento y trazado de curvas', sub:'Rolle y TVM · f′ dice crecer/decrecer · f″ dice concavidad', tgt:'RADAR_DE_FORMA',
  req:['derivadas','continuidad'], uses:'Optimización, demostrar desigualdades, por qué ∫ de la derivada da la función (TFC)',
  cites:['osc1|§4.3–4.5','paul1|The Shape of a Graph','stewart1|§4.2–4.5'], see:['tvm','punto-critico','concavidad'],
  lore: R`
  <div class="why">La derivada te deja <b>dibujar una función sin tabla de valores</b>: f′ te dice dónde sube y baja, f″ dónde se curva. El [[tvm|Teorema del Valor Medio]] es el puente teórico que lo justifica (y el que demuestra el [[tfc|TFC]]).</div>
  <h3>Teorema de Rolle (1691)</h3>
  <p>Si f es continua en [a, b], derivable en (a, b) y \(f(a)=f(b)\), entonces existe c en (a, b) con \(f'(c)=0\). (Si sales y vuelves a la misma altura, en algún momento la pendiente fue horizontal.)</p>
  <h3>Teorema del Valor Medio (Lagrange)</h3>
  <div class="formula">\[f'(c)=\frac{f(b)-f(a)}{b-a}\quad\text{para algún }c\in(a,b)\]</div>
  <p>Hay un punto donde la tangente es <b>paralela a la secante</b>. Si viajas 120 km en 1 h, en algún instante tu velocímetro marcó exactamente 120 km/h.</p>
  <div class="tip">Consecuencia clave: si \(f'=0\) en todo un intervalo, f es <b>constante</b>. Por eso dos antiderivadas difieren en una constante (el + C)[^osc1|§4.4].</div>
  <h3>Prueba de la primera derivada</h3>
  <ol class="recipe">
   <li>Halla los [[punto-critico|puntos críticos]]: donde \(f'(x)=0\) o f′ no existe (dentro del dominio).</li>
   <li>Ubícalos en la recta y prueba el signo de f′ en cada intervalo.</li>
   <li>\(f'>0\) → f crece ↗. \(f'<0\) → f decrece ↘.</li>
   <li>Cambia de + a − → <b>máximo local</b>. De − a + → <b>mínimo local</b>. No cambia → ninguno.</li>
  </ol>
  <h3>Concavidad y segunda derivada</h3>
  <div class="tscroll"><table class="t"><tr><th>Signo</th><th>Forma</th><th>Significado</th></tr>
   <tr><td>\(f''>0\)</td><td>∪ cóncava hacia arriba</td><td>f′ crece; la curva queda sobre sus tangentes</td></tr>
   <tr><td>\(f''<0\)</td><td>∩ cóncava hacia abajo</td><td>f′ decrece; la curva queda bajo sus tangentes</td></tr>
   <tr><td>cambia de signo</td><td><b>punto de inflexión</b></td><td>la curva cambia de curvatura</td></tr></table></div>
  <h4>Prueba de la segunda derivada</h4>
  <p>Si \(f'(c)=0\): \(f''(c)>0\) → mínimo local; \(f''(c)<0\) → máximo local; \(f''(c)=0\) → no decide (usa la primera derivada).</p>
  <h3>Receta completa para trazar una curva</h3>
  <ol class="recipe">
   <li><b>Dominio</b> y cortes con los ejes.</li><li><b>Simetría</b>: par (f(−x) = f(x)) o impar.</li>
   <li><b>Asíntotas</b> (sección de [[continuidad]]).</li><li><b>f′</b>: crecimiento, máximos y mínimos.</li>
   <li><b>f″</b>: concavidad e inflexiones.</li><li>Ubica los puntos y une respetando todo lo anterior.</li>
  </ol>`,
  ex:[
   {t:'Verificar el TVM', q:R`\(f(x)=x^2\) en [1, 3]. Halla c.`, s:[
     R`Pendiente secante: \(\frac{9-1}{3-1}=4\).`, R`\(f'(c)=2c=4\Rightarrow c=2\in(1,3)\) ✓`]},
   {t:'Análisis completo de un polinomio', q:R`\(f(x)=x^3-3x^2-9x+5\)`, s:[
     R`\(f'(x)=3x^2-6x-9=3(x-3)(x+1)\). Críticos: x = −1, x = 3.`,
     R`Signos de f′: \((-\infty,-1)\) +, \((-1,3)\) −, \((3,\infty)\) +. → máx en x = −1, mín en x = 3.`,
     R`\(f(-1)=-1-3+9+5=10\) (máx local); \(f(3)=27-27-27+5=-22\) (mín local).`,
     R`\(f''(x)=6x-6=0\Rightarrow x=1\): cambia de − a + → inflexión en (1, −6).`]},
  ],
  qs:[
   {q:R`Si \(f'(x)>0\) en (a, b), f es…`, o:['Creciente','Decreciente','Cóncava hacia arriba','Constante'], e:'Pendiente positiva.', h:'Signo de f′.'},
   {q:R`f′ cambia de − a + en c. Entonces c es…`, o:['Mínimo local','Máximo local','Inflexión','Nada'], e:'Baja y luego sube.', h:'Dibuja ↘↗.'},
   {q:R`Puntos de inflexión de \(f(x)=x^3\)`, o:['x = 0','Ninguno','x = 1','x = ±1'], e:'f″ = 6x cambia de signo en 0.', h:'f″ = 0 y cambia de signo.'},
   {q:R`TVM para \(f(x)=x^3\) en [0, 3]: c =`, o:[R`\(\sqrt3\)`,'1.5','3','9'], e:'3c² = 27/3 = 9 → c = √3.', h:'Pendiente secante = 9.'},
   {q:R`\(f'(2)=0\), \(f''(2)=-5\). En x = 2 hay…`, o:['Máximo local','Mínimo local','Inflexión','No se sabe'], e:'Cóncava hacia abajo con tangente horizontal.', h:'Segunda derivada.'},
   {q:R`Si \(f'=0\) en todo (a, b)`, o:['f es constante en (a, b)','f = 0','f es lineal','f no es continua'], e:'Consecuencia del TVM.', h:'Pendiente cero siempre.'},
  ]},
/* ---------------- OPTIMIZACIÓN ---------------- */
{ id:'optimizacion', n:'Optimización', sub:'Máximos y mínimos absolutos · problemas de cajas, cercas y costos', tgt:'MAXIMO_GLOBAL',
  req:['tvm'], uses:'Economía, ingeniería, física; en varias variables pasa a gradiente = 0 y multiplicadores de Lagrange',
  cites:['osc1|§4.3, 4.7','paul1|Optimization','stewart1|§4.1, 4.7'], see:['punto-critico','lagrange-mult','extremos-mv'],
  lore: R`
  <div class="why">Optimizar es encontrar <b>el mejor</b> valor: área máxima, costo mínimo, tiempo mínimo. Fermat (c. 1636) ya sabía que en un máximo "la tangente es horizontal": \(f'=0\)[^stewart1|§4.1].</div>
  <h3>Extremos absolutos en [a, b] (método del intervalo cerrado)</h3>
  <ol class="recipe"><li>Halla los [[punto-critico|puntos críticos]] dentro de (a, b).</li><li>Evalúa f en los críticos <b>y en los extremos</b> a y b.</li><li>El mayor valor es el máximo absoluto; el menor, el mínimo absoluto.</li></ol>
  <div class="trap">Olvidar evaluar los extremos del intervalo. Muchas veces el máximo está en el borde, donde f′ no es 0.</div>
  <h3>Receta para problemas verbales</h3>
  <ol class="recipe">
   <li><b>Dibuja</b> y nombra variables.</li>
   <li>Escribe la <b>función objetivo</b> (lo que quieres max/min) — suele tener 2 variables.</li>
   <li>Escribe la <b>restricción</b> (el dato fijo) y despeja una variable.</li>
   <li>Sustituye: objetivo en <b>una sola variable</b>. Anota su dominio real.</li>
   <li>Deriva, iguala a 0, resuelve.</li>
   <li><b>Justifica</b> que es máx/mín (primera o segunda derivada, o intervalo cerrado) y responde lo que te preguntan (con unidades).</li>
  </ol>
  <h3>Plantillas frecuentes</h3>
  <div class="tscroll"><table class="t"><tr><th>Problema</th><th>Objetivo</th><th>Restricción</th></tr>
   <tr><td>Cerca junto a un río</td><td>\(A=xy\)</td><td>\(2x+y=P\)</td></tr>
   <tr><td>Caja sin tapa (cortar esquinas)</td><td>\(V=x(L-2x)^2\)</td><td>\(0\lt x\lt L/2\)</td></tr>
   <tr><td>Lata de volumen fijo</td><td>\(S=2\pi r^2+2\pi rh\)</td><td>\(\pi r^2h=V\)</td></tr>
   <tr><td>Punto más cercano a una curva</td><td>\(D^2=(x-a)^2+(y-b)^2\)</td><td>y = f(x)</td></tr></table></div>
  <div class="tip">Para minimizar una distancia, minimiza \(D^2\): tiene el mismo mínimo y no tiene raíz.</div>
  <h3>Un dato lindo: la lata óptima</h3>
  <p>Con volumen fijo, la superficie mínima se logra cuando \(h=2r\) (la altura igual al diámetro). Las latas reales no son así por costos de fabricación de las tapas.</p>`,
  ex:[
   {t:'Extremos absolutos en un intervalo', q:R`\(f(x)=x^3-12x\) en [−3, 5]`, s:[
     R`\(f'=3x^2-12=0\Rightarrow x=\pm2\) (ambos dentro del intervalo).`,
     R`Evalúa: \(f(-3)=9\), \(f(-2)=16\), \(f(2)=-16\), \(f(5)=65\).`, R`Máximo absoluto 65 en x = 5 (¡en el borde!); mínimo absoluto −16 en x = 2.`]},
   {t:'Corral junto a un río', q:R`Con 600 m de cerca se quiere encerrar un rectángulo junto a un río (sin cerca en ese lado). ¿Área máxima?`, s:[
     R`{{DIB}} x = lados perpendiculares al río, y = lado paralelo.`,
     R`{{PLA}} Objetivo \(A=xy\). Restricción \(2x+y=600\Rightarrow y=600-2x\). \(A(x)=600x-2x^2\), con \(0\lt x<300\).`,
     R`{{CAL}} \(A'=600-4x=0\Rightarrow x=150\). \(A''=-4<0\) → máximo.`, R`{{RES}} x = 150 m, y = 300 m, área máxima 45 000 m².`]},
   {t:'Caja sin tapa', q:R`De una lámina de 12×12 cm se cortan cuadrados de lado x en las esquinas. ¿Qué x da volumen máximo?`, s:[
     R`\(V=x(12-2x)^2\), \(0\lt x<6\).`, R`\(V'=(12-2x)^2-4x(12-2x)=(12-2x)(12-6x)=0\Rightarrow x=2\) (x = 6 anula la caja).`, R`\(V(2)=2\cdot64=128\) cm³.`]},
  ],
  qs:[
   {q:R`Máximo absoluto de \(f(x)=x^2\) en [−1, 3]`, o:['9','1','0','3'], e:'Críticos: x = 0 (f = 0). Extremos: f(−1) = 1, f(3) = 9.', h:'Evalúa los bordes.'},
   {q:R`Dos números positivos suman 20. ¿Producto máximo?`, o:['100','99','96','400'], e:'P = x(20 − x), máximo en x = 10.', h:'x = 10.'},
   {q:R`Rectángulo de perímetro 40 con área máxima: sus lados`, o:['10 y 10','5 y 15','8 y 12','20 y 0'], e:'Un cuadrado.', h:'A = x(20 − x).'},
   {q:R`En un problema de optimización, la "restricción" sirve para…`, o:['Dejar el objetivo en una variable','Derivar','Hallar el máximo directamente','Nada'], e:'Se despeja y se sustituye.', h:'Elimina una variable.'},
   {q:R`Para minimizar una distancia conviene minimizar`, o:[R`\(D^2\)`,R`\(\sqrt D\)`,R`\(1/D\)`,R`\(\ln D\) siempre`], e:'Mismo mínimo y sin raíces.', h:'Quita la raíz.'},
  ]},
/* ---------------- L'HÔPITAL ---------------- */
{ id:'lhopital', n:"Regla de L'Hôpital", sub:'0/0 y ∞/∞ con derivadas · otras formas indeterminadas', tgt:'DESTRABADOR_0/0',
  req:['implicita','limites-calc'], uses:'Integrales impropias, sucesiones y series (criterios de convergencia), comparar velocidades de crecimiento',
  cites:['osc1|§4.8','paul1|L’Hospital’s Rule','stewart1|§4.4'], see:['indeterminada','lhopital'],
  lore: R`
  <div class="why">Cuando un límite da \(\frac00\) o \(\frac\infty\infty\), se puede reemplazar el cociente de funciones por el cociente de sus <b>derivadas</b>. Lo publicó el marqués de L'Hôpital en 1696 (primer libro de cálculo diferencial), pero el resultado era de su profesor Johann Bernoulli[^hist-lhopital].</div>
  <h3>Enunciado</h3>
  <div class="formula">\[\text{Si }\lim\frac{f}{g}\text{ da }\frac00\text{ o }\frac{\pm\infty}{\pm\infty},\ \text{ entonces }\ \lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}\]</div>
  <p>(Si el segundo límite existe o es ±∞.) Vale para x → a, a⁺, a⁻, ±∞.</p>
  <div class="trap">Se derivan numerador y denominador <b>por separado</b>. NO es la regla del cociente. Y solo se aplica si de verdad es \(\frac00\) o \(\frac\infty\infty\): \(\lim_{x\to0}\frac{x+1}{x+2}=\frac12\), no \(\frac11\).</div>
  <h3>Ejemplos directos</h3>
  <div class="formula">\[\lim_{x\to0}\frac{e^x-1}{\sin x}\overset{0/0}{=}\lim_{x\to0}\frac{e^x}{\cos x}=1\qquad\lim_{x\to\infty}\frac{\ln x}{x}\overset{\infty/\infty}{=}\lim_{x\to\infty}\frac{1/x}{1}=0\]</div>
  <p>Se puede aplicar <b>varias veces</b> mientras siga indeterminado: \(\lim_{x\to\infty}\frac{x^2}{e^x}=\lim\frac{2x}{e^x}=\lim\frac{2}{e^x}=0\).</p>
  <h3>Jerarquía de crecimiento (x → ∞)</h3>
  <div class="formula">\[\ln x\ \ll\ x^p\ \ll\ a^x\ \ll\ x!\ \ll\ x^x\qquad(p>0,\ a>1)\]</div>
  <p>"≪" significa que el cociente izquierda/derecha → 0. Es la herramienta para decidir rápido límites y [[serie|series]].</p>
  <h3>Otras formas: convertirlas a 0/0 o ∞/∞</h3>
  <div class="tscroll"><table class="t"><tr><th>Forma</th><th>Truco</th><th>Ejemplo</th></tr>
   <tr><td>\(0\cdot\infty\)</td><td>\(fg=\frac{f}{1/g}\)</td><td>\(x\ln x=\frac{\ln x}{1/x}\to0\) (x → 0⁺)</td></tr>
   <tr><td>\(\infty-\infty\)</td><td>común denominador o racionalizar</td><td>\(\frac1x-\frac1{\sin x}=\frac{\sin x-x}{x\sin x}\)</td></tr>
   <tr><td>\(1^\infty,\ 0^0,\ \infty^0\)</td><td>\(y=f^g\Rightarrow\ln y=g\ln f\), calcula \(\lim\ln y=L\), respuesta \(e^L\)</td><td>\(\lim_{x\to0^+}x^x=e^0=1\)</td></tr></table></div>
  <h4>El límite de e con L'Hôpital</h4>
  <div class="formula">\[\begin{aligned}y=\left(1+\tfrac1x\right)^x&\Rightarrow\ln y=x\ln\left(1+\tfrac1x\right)=\frac{\ln(1+1/x)}{1/x}\ \overset{0/0}{\to}\ \frac{\frac{-1/x^2}{1+1/x}}{-1/x^2}=\frac{1}{1+1/x}\to1\\\Rightarrow y&\to e^1=e\end{aligned}\]</div>`,
  ex:[
   {t:'0/0 con trigonométricas (aplicar dos veces)', q:R`\(\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}\)`, s:[
     R`0/0 → \(\displaystyle\lim\frac{\sin x}{2x}\) (sigue 0/0)`, R`Otra vez: \(\displaystyle\lim\frac{\cos x}{2}=\frac12\)`]},
   {t:'Forma 0·∞', q:R`\(\displaystyle\lim_{x\to0^+}\sqrt x\ln x\)`, s:[
     R`\(0\cdot(-\infty)\). Reescribe: \(\displaystyle\frac{\ln x}{x^{-1/2}}\) → \(\frac{-\infty}{\infty}\).`,
     R`L'H: \(\displaystyle\frac{1/x}{-\frac12x^{-3/2}}=-2x^{1/2}\to0\)`]},
   {t:'Forma 1^∞', q:R`\(\displaystyle\lim_{x\to0}(1+3x)^{1/x}\)`, s:[
     R`\(\ln y=\frac{\ln(1+3x)}{x}\) → 0/0.`, R`L'H: \(\displaystyle\frac{3/(1+3x)}{1}\to3\)`, R`\(y\to e^3\)`]},
  ],
  qs:[
   {q:R`\(\displaystyle\lim_{x\to0}\frac{\sin 3x}{x}\) con L'Hôpital`, o:['3','1','0',R`\(\frac13\)`], e:'3cos 3x / 1 → 3.', h:'Deriva arriba y abajo.'},
   {q:R`\(\displaystyle\lim_{x\to\infty}\frac{x^3}{e^x}\)`, o:['0','∞','1','6'], e:'La exponencial gana (L’H tres veces).', h:'Jerarquía de crecimiento.'},
   {q:R`L'Hôpital consiste en derivar…`, o:['Numerador y denominador por separado','El cociente con la regla del cociente','Solo el numerador','Solo el denominador'], e:'f′/g′, no (f/g)′.', h:'Por separado.'},
   {q:R`\(\displaystyle\lim_{x\to0^+}x^x\)`, o:['1','0','∞','e'], e:'ln y = x ln x → 0, y → e⁰.', h:'Forma 0⁰: usa ln.'},
   {q:R`¿Se puede usar L'Hôpital en \(\lim_{x\to0}\frac{x+1}{x+2}\)?`, o:['No: no es indeterminado','Sí, da 1','Sí, da 1/2','Sí, da 0'], e:'Sustituyendo da 1/2 directamente.', h:'Revisa la forma primero.'},
   {q:R`\(\displaystyle\lim_{x\to\infty}\frac{\ln x}{\sqrt x}\)`, o:['0','∞','1','1/2'], e:'(1/x)/(1/(2√x)) = 2/√x → 0.', h:'ln crece más lento que cualquier potencia.'},
  ]},
/* ---------------- EVALUACIÓN CÁLCULO I ---------------- */
{ id:'bossI', n:'Checkpoint: Cálculo diferencial', sub:'Mixto · límites, derivadas y aplicaciones · 12 min', tgt:'DERIVADOR_SUPREMO', boss:true, time:12*60, hearts:4,
  req:['lhopital','optimizacion'], uses:'Cálculo integral y todo lo que sigue',
  lore: R`
  <div class="why">Todo mezclado: nadie te dice qué técnica usar. Reconocer el tipo de problema es la mitad del trabajo.</div>
  <h3>Árbol de decisión: límites</h3>
  <ol class="recipe"><li>Sustituye. ¿Número? listo. ¿k/0? ±∞.</li><li>0/0 con polinomios → factoriza. Con raíces → racionaliza. Con trig → límites notables.</li><li>x → ∞ → mayor potencia (o jerarquía de crecimiento).</li><li>Si se resiste → L'Hôpital (y las formas 0·∞, 1^∞ con ln).</li></ol>
  <h3>Árbol de decisión: derivadas</h3>
  <ol class="recipe"><li>¿Composición? → cadena. ¿Producto/cociente? → sus reglas.</li><li>¿y mezclada con x? → implícita. ¿Variable en base y exponente? → logarítmica.</li><li>¿Tasas en el tiempo? → razones relacionadas. ¿Mejor valor? → optimización (no olvides los bordes).</li></ol>`,
  ex:[],
  qs:[
   {q:R`\(\displaystyle\lim_{x\to4}\frac{x^2-16}{x-4}\)`, o:['8','0','4','16'], e:'x + 4 → 8.', h:'Factoriza.'},
   {q:R`\(\frac{d}{dx}\left[x^2e^{3x}\right]\)`, o:[R`\(e^{3x}(2x+3x^2)\)`,R`\(6xe^{3x}\)`,R`\(2xe^{3x}\)`,R`\(x^2e^{3x}\)`], e:'Producto + cadena.', h:'(fg)′ = f′g + fg′.'},
   {q:R`Si \(xy=6\), \(y'\) en (2, 3)`, o:[R`\(-\frac32\)`,R`\(\frac32\)`,R`\(-\frac23\)`,'−6'], e:'y + xy′ = 0 → y′ = −y/x.', h:'Implícita.'},
   {q:R`\(\displaystyle\lim_{x\to0}\frac{e^{2x}-1}{x}\)`, o:['2','1','0','e'], e:'L’H: 2e^{2x} → 2.', h:'0/0.'},
   {q:R`Mínimo de \(f(x)=x+\frac4x\), x > 0`, o:['4 en x = 2','2 en x = 1','5 en x = 4','No tiene'], e:'f′ = 1 − 4/x² = 0 → x = 2, f = 4.', h:'Deriva e iguala a 0.'},
   {q:R`Asíntota horizontal de \(\frac{3x-1}{x+5}\)`, o:['y = 3','y = −1/5','x = −5','No tiene'], e:'Grados iguales: 3/1.', h:'x → ∞.'},
   {q:R`\(\frac{d}{dx}\ln(\cos x)\)`, o:[R`\(-\tan x\)`,R`\(\tan x\)`,R`\(\frac{1}{\cos x}\)`,R`\(-\sin x\)`], e:'(−sin x)/cos x.', h:'Cadena con ln.'},
   {q:R`Punto de inflexión de \(f(x)=x^3-6x^2\)`, o:['x = 2','x = 0','x = 4','x = 6'], e:'f″ = 6x − 12 = 0.', h:'f″ = 0 y cambia de signo.'},
   {q:R`Linealización de \(\ln x\) en a = 1`, o:[R`\(x-1\)`,R`\(x\)`,R`\(1-x\)`,R`\(\ln x\)`], e:'ln 1 = 0, (ln)′(1) = 1.', h:'f(a) + f′(a)(x − a).'},
   {q:R`Un globo: \(\frac{dV}{dt}=8\pi\), r = 2. \(\frac{dr}{dt}=\)`, o:[R`\(\frac12\)`,'2','1',R`\(\frac14\)`], e:'8π = 4π(4) dr/dt.', h:'V = (4/3)πr³.'},
  ]},
);
