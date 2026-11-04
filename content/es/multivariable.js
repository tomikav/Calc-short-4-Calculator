/* ============ CÁLCULO MULTIVARIABLE I: VECTORES, ESPACIO Y DERIVADAS PARCIALES ============ */
LV.push(
/* ---------------- VECTORES ---------------- */
{ id:'vectores', n:'Vectores en el espacio', sub:'ℝ³ · magnitud · producto punto y producto cruz', tgt:'FLECHA_3D',
  req:['trigbase'], uses:'Rectas y planos, funciones vectoriales, gradiente, campos vectoriales, flujo',
  cites:['osc3|§2.1–2.4','paul3|Vectors','stewart2|§12.1–12.4','3b1b-al|cap. 1, 10'], see:['vector','producto-punto','producto-cruz'],
  lore: R`
  <div class="why">En una variable todo vive en una recta. En el mundo real hay <b>dirección</b>: fuerzas, velocidades, campos. Un [[vector]] es una flecha con magnitud y dirección. El álgebra vectorial moderna es de Gibbs y Heaviside (1880s), simplificando los cuaterniones de Hamilton (1843)[^hist-gibbs].</div>
  <h3>Puntos y vectores en ℝ³</h3>
  <p>Ejes x, y, z con la <b>regla de la mano derecha</b>. Distancia: \(|PQ|=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}\). Esfera: \((x-a)^2+(y-b)^2+(z-c)^2=r^2\).</p>
  <div class="formula">\[\vec v=\langle v_1,v_2,v_3\rangle=v_1\mathbf i+v_2\mathbf j+v_3\mathbf k\qquad\overrightarrow{PQ}=Q-P\qquad|\vec v|=\sqrt{v_1^2+v_2^2+v_3^2}\]</div>
  <p>Suma y multiplicación por escalar: componente a componente. <b>Vector unitario</b> en la dirección de v: \(\hat u=\frac{\vec v}{|\vec v|}\).</p>
  <h3>Producto punto (escalar)</h3>
  <div class="formula">\[\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3=|\vec a||\vec b|\cos\theta\]</div>
  <ol class="recipe">
   <li><b>Ángulo:</b> \(\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}\).</li>
   <li><b>Perpendiculares (ortogonales)</b> ⇔ \(\vec a\cdot\vec b=0\).</li>
   <li><b>Proyección</b> de b sobre a: \(\text{proy}_{\vec a}\vec b=\frac{\vec a\cdot\vec b}{|\vec a|^2}\vec a\); componente escalar \(\frac{\vec a\cdot\vec b}{|\vec a|}\).</li>
   <li><b>Trabajo:</b> \(W=\vec F\cdot\vec d\) (solo cuenta la parte de la fuerza en la dirección del movimiento).</li>
  </ol>
  <h3>Producto cruz (vectorial) — solo en ℝ³</h3>
  <div class="formula">\[\vec a\times\vec b=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}=\langle a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1\rangle\]</div>
  <ol class="recipe">
   <li>Es <b>perpendicular</b> a a y a b (sentido: mano derecha).</li>
   <li>\(|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta\) = <b>área del paralelogramo</b> (la mitad: del triángulo).</li>
   <li>\(\vec a\times\vec b=-\vec b\times\vec a\) (no conmuta). Paralelos ⇔ \(\vec a\times\vec b=\vec0\).</li>
   <li><b>Triple producto</b> \(\vec a\cdot(\vec b\times\vec c)\) = volumen (con signo) del paralelepípedo. Si es 0, los tres son coplanares.</li>
   <li><b>Torque:</b> \(\vec\tau=\vec r\times\vec F\).</li>
  </ol>
  <div class="tip">Truco del determinante: \(\mathbf i\) (tapa su columna) − \(\mathbf j\) (tapa la suya) + \(\mathbf k\). El signo menos del medio es el error más común.</div>`,
  ex:[
   {t:'Ángulo entre vectores', q:R`\(\vec a=\langle1,2,2\rangle,\ \vec b=\langle3,0,4\rangle\)`, s:[
     R`\(\vec a\cdot\vec b=3+0+8=11\); \(|\vec a|=3\), \(|\vec b|=5\)`, R`\(\cos\theta=\frac{11}{15}\Rightarrow\theta\approx42.8°\)`]},
   {t:'Producto cruz y área', q:R`Área del triángulo P(1,0,0), Q(0,2,0), R(0,0,3)`, s:[
     R`\(\overrightarrow{PQ}=\langle-1,2,0\rangle\), \(\overrightarrow{PR}=\langle-1,0,3\rangle\)`,
     R`\(\overrightarrow{PQ}\times\overrightarrow{PR}=\langle 2\cdot3-0,\ -(-3-0),\ 0+2\rangle=\langle6,3,2\rangle\)`, R`\(|\cdot|=\sqrt{49}=7\) → área del triángulo \(\frac72\).`]},
  ],
  qs:[
   {q:R`\(|\langle2,-1,2\rangle|\)`, o:['3','√5','9','5'], e:'√(4 + 1 + 4).', h:'Raíz de la suma de cuadrados.'},
   {q:R`\(\langle1,2,3\rangle\cdot\langle4,-5,6\rangle\)`, o:['12','32','−6','0'], e:'4 − 10 + 18.', h:'Multiplica componentes y suma.'},
   {q:R`Si \(\vec a\cdot\vec b=0\) (no nulos), son…`, o:['Perpendiculares','Paralelos','Iguales','Opuestos'], e:'cos θ = 0.', h:'θ = 90°.'},
   {q:R`\(\mathbf i\times\mathbf j=\)`, o:[R`\(\mathbf k\)`,R`\(-\mathbf k\)`,'0','1'], e:'Mano derecha.', h:'Orden cíclico i → j → k.'},
   {q:R`\(|\vec a\times\vec b|\) representa…`, o:['Área del paralelogramo','Volumen','Ángulo','Proyección'], e:'|a||b| sin θ.', h:'Base × altura.'},
   {q:R`\(\vec a\times\vec a=\)`, o:[R`\(\vec0\)`,R`\(|\vec a|^2\)`,'1','No existe'], e:'sin 0 = 0.', h:'Paralelos.'},
  ]},
/* ---------------- RECTAS Y PLANOS, SUPERFICIES ---------------- */
{ id:'rectas-planos', n:'Rectas, planos y superficies cuádricas', sub:'Ecuación vectorial de la recta · vector normal · cilindros y cuádricas', tgt:'GEOMETRIA_ESPACIAL',
  req:['vectores'], uses:'Plano tangente, integrales triples (dibujar el sólido), integrales de superficie',
  cites:['osc3|§2.5–2.6','paul3|Equations of Planes','stewart2|§12.5–12.6'], see:['plano','cuadrica'],
  lore: R`
  <div class="why">Para integrar sobre un sólido o hallar un plano tangente hay que saber <b>dibujar en 3D</b>: rectas, planos y las superficies básicas.</div>
  <h3>Recta en ℝ³</h3>
  <p>Un punto \(P_0\) y una dirección \(\vec v=\langle a,b,c\rangle\):</p>
  <div class="formula">\[\vec r(t)=\vec r_0+t\vec v\qquad x=x_0+at,\ y=y_0+bt,\ z=z_0+ct\qquad\frac{x-x_0}a=\frac{y-y_0}b=\frac{z-z_0}c\]</div>
  <p>Dos rectas en 3D pueden ser paralelas, cortarse o <b>cruzarse</b> (no paralelas y sin cortarse).</p>
  <h3>Plano</h3>
  <p>Un punto \(P_0\) y un [[vector-normal|vector normal]] \(\vec n=\langle a,b,c\rangle\) (perpendicular al plano):</p>
  <div class="formula">\[a(x-x_0)+b(y-y_0)+c(z-z_0)=0\qquad\Longleftrightarrow\qquad ax+by+cz=d\]</div>
  <ol class="recipe"><li>Plano por 3 puntos: dos vectores en el plano, \(\vec n=\overrightarrow{PQ}\times\overrightarrow{PR}\).</li><li>Ángulo entre planos = ángulo entre normales.</li><li>Distancia de un punto a un plano: \(D=\frac{|ax_1+by_1+cz_1-d|}{\sqrt{a^2+b^2+c^2}}\).</li></ol>
  <div class="tip">Los coeficientes de x, y, z en la ecuación del plano <b>son</b> el vector normal: \(2x-y+3z=5\) tiene \(\vec n=\langle2,-1,3\rangle\).</div>
  <h3>Cilindros</h3>
  <p>Si falta una variable, la curva se <b>extiende</b> en esa dirección: \(x^2+y^2=1\) en ℝ³ es un cilindro a lo largo del eje z; \(z=y^2\) es una "canaleta" a lo largo del eje x.</p>
  <h3>Superficies cuádricas</h3>
  <p>Para reconocerlas, corta con planos x = k, y = k, z = k (<b>trazas</b>).</p>
  <div class="tscroll"><table class="t"><tr><th>Ecuación</th><th>Superficie</th></tr>
   <tr><td>\(\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1\)</td><td>Elipsoide (esfera si a = b = c)</td></tr>
   <tr><td>\(z=x^2+y^2\)</td><td>Paraboloide circular (tazón)</td></tr>
   <tr><td>\(z=y^2-x^2\)</td><td>Paraboloide hiperbólico (silla de montar)</td></tr>
   <tr><td>\(z^2=x^2+y^2\)</td><td>Cono</td></tr>
   <tr><td>\(x^2+y^2-z^2=1\)</td><td>Hiperboloide de una hoja</td></tr>
   <tr><td>\(-x^2-y^2+z^2=1\)</td><td>Hiperboloide de dos hojas</td></tr></table></div>
  <p>La variable que <b>no</b> va al cuadrado (o la que tiene signo distinto) indica el eje de la superficie.</p>`,
  ex:[
   {t:'Plano por tres puntos', q:R`P(1,1,0), Q(2,0,1), R(0,3,2)`, s:[
     R`\(\overrightarrow{PQ}=\langle1,-1,1\rangle\), \(\overrightarrow{PR}=\langle-1,2,2\rangle\)`,
     R`\(\vec n=\langle(-1)(2)-1\cdot2,\ -(1\cdot2-1\cdot(-1)),\ 1\cdot2-(-1)(-1)\rangle=\langle-4,-3,1\rangle\)`,
     R`\(-4(x-1)-3(y-1)+z=0\Rightarrow4x+3y-z=7\)`]},
   {t:'Recta de intersección de dos planos', q:R`\(x+y+z=1\) y \(x-y+2z=3\)`, s:[
     R`Dirección: \(\vec n_1\times\vec n_2=\langle1,1,1\rangle\times\langle1,-1,2\rangle=\langle3,-1,-2\rangle\)`,
     R`Un punto: z = 0 → x + y = 1, x − y = 3 → x = 2, y = −1.`, R`\(\vec r(t)=\langle2,-1,0\rangle+t\langle3,-1,-2\rangle\)`]},
  ],
  qs:[
   {q:R`Vector normal de \(3x-2y+z=4\)`, o:[R`\(\langle3,-2,1\rangle\)`,R`\(\langle3,2,1\rangle\)`,R`\(\langle4,0,0\rangle\)`,R`\(\langle1,-2,3\rangle\)`], e:'Coeficientes de x, y, z.', h:'Lee los coeficientes.'},
   {q:R`\(z=x^2+y^2\) es un…`, o:['Paraboloide','Cono','Cilindro','Esfera'], e:'Trazas z = k: círculos que crecen.', h:'Tazón.'},
   {q:R`\(x^2+z^2=4\) en ℝ³ es…`, o:['Cilindro a lo largo del eje y','Esfera','Círculo','Cilindro a lo largo del eje z'], e:'Falta y: se extiende en y.', h:'¿Qué variable falta?'},
   {q:R`Distancia de (0,0,0) al plano \(x+2y+2z=6\)`, o:['2','6','3','1'], e:'|−6|/√9.', h:'|d|/|n|.'},
   {q:R`\(z=y^2-x^2\) es…`, o:['Silla de montar','Tazón','Cono','Hiperboloide de una hoja'], e:'Paraboloide hiperbólico.', h:'Signos distintos.'},
  ]},
/* ---------------- FUNCIONES VECTORIALES ---------------- */
{ id:'funvec', n:'Funciones vectoriales y movimiento', sub:'r(t) · velocidad, aceleración · longitud de arco · curvatura · T, N, B', tgt:'ORBITA_PARAMETRICA',
  req:['rectas-planos','parametricas'], uses:'Integrales de línea, física (dinámica, órbitas de Kepler)',
  cites:['osc3|§3.1–3.4','paul3|Vector Functions','stewart2|§13.1–13.4'], see:['curvatura','longitud-arco'],
  lore: R`
  <div class="why">\(\vec r(t)=\langle x(t),y(t),z(t)\rangle\) es la posición de una partícula en el espacio. Es la versión 3D de las [[parametrica|paramétricas]]: se deriva e integra <b>componente por componente</b>.</div>
  <h3>Cálculo componente a componente</h3>
  <div class="formula">\[\vec r\,'(t)=\langle x',y',z'\rangle\qquad\int\vec r\,dt=\left\langle\int x,\int y,\int z\right\rangle+\vec C\]</div>
  <p>Hélice: \(\vec r(t)=\langle\cos t,\sin t,t\rangle\) gira en círculo mientras sube.</p>
  <h3>Movimiento</h3>
  <div class="tscroll"><table class="t"><tr><th>Cantidad</th><th>Fórmula</th></tr>
   <tr><td>Velocidad</td><td>\(\vec v=\vec r\,'\)</td></tr><tr><td>Rapidez</td><td>\(|\vec v|\)</td></tr>
   <tr><td>Aceleración</td><td>\(\vec a=\vec v\,'=\vec r\,''\)</td></tr>
   <tr><td>Componentes de la aceleración</td><td>\(a_T=\frac{\vec v\cdot\vec a}{|\vec v|}\) (tangencial), \(a_N=\frac{|\vec v\times\vec a|}{|\vec v|}\) (normal)</td></tr></table></div>
  <p>Si te dan la aceleración, integra dos veces usando las condiciones iniciales (como un proyectil: \(\vec a=\langle0,0,-g\rangle\)).</p>
  <h3>Longitud de arco</h3>
  <div class="formula">\[L=\int_a^b|\vec r\,'(t)|\,dt=\int_a^b\sqrt{x'^2+y'^2+z'^2}\,dt\]</div>
  <h3>Vectores T, N, B y curvatura</h3>
  <div class="formula">\[\vec T=\frac{\vec r\,'}{|\vec r\,'|}\qquad\vec N=\frac{\vec T\,'}{|\vec T\,'|}\qquad\vec B=\vec T\times\vec N\]</div>
  <p>La [[curvatura]] κ mide qué tan rápido gira la dirección:</p>
  <div class="formula">\[\kappa=\frac{|\vec T\,'|}{|\vec r\,'|}=\frac{|\vec r\,'\times\vec r\,''|}{|\vec r\,'|^3}\qquad\text{para }y=f(x):\ \kappa=\frac{|f''|}{\left(1+f'^2\right)^{3/2}}\]</div>
  <p>Una recta tiene κ = 0; un círculo de radio R tiene κ = 1/R (curvar mucho = radio pequeño).</p>`,
  ex:[
   {t:'Proyectil vectorial', q:R`\(\vec a=\langle0,-10\rangle\), \(\vec v(0)=\langle20,20\rangle\), \(\vec r(0)=\vec0\). ¿Alcance?`, s:[
     R`\(\vec v=\langle20,20-10t\rangle\); \(\vec r=\langle20t,20t-5t^2\rangle\)`, R`Toca el suelo: \(20t-5t^2=0\Rightarrow t=4\)`, R`Alcance \(x=80\).`]},
   {t:'Curvatura de una hélice', q:R`\(\vec r=\langle\cos t,\sin t,t\rangle\)`, s:[
     R`\(\vec r\,'=\langle-\sin t,\cos t,1\rangle\), \(|\vec r\,'|=\sqrt2\); \(\vec r\,''=\langle-\cos t,-\sin t,0\rangle\)`,
     R`\(\vec r\,'\times\vec r\,''=\langle\sin t,-\cos t,1\rangle\), módulo \(\sqrt2\)`, R`\(\kappa=\frac{\sqrt2}{(\sqrt2)^3}=\frac12\) (constante).`]},
  ],
  qs:[
   {q:R`Si \(\vec r=\langle t^2,3t,1\rangle\), \(\vec v(1)=\)`, o:[R`\(\langle2,3,0\rangle\)`,R`\(\langle1,3,1\rangle\)`,R`\(\langle2,3,1\rangle\)`,R`\(\langle2,0,0\rangle\)`], e:'⟨2t, 3, 0⟩ en t = 1.', h:'Deriva cada componente.'},
   {q:R`Curvatura de un círculo de radio 4`, o:[R`\(\frac14\)`,'4','16','0'], e:'κ = 1/R.', h:'Más grande = menos curvo.'},
   {q:R`Longitud de \(\langle3\cos t,3\sin t,4t\rangle\), \(0\le t\le2\pi\)`, o:[R`\(10\pi\)`,R`\(6\pi\)`,R`\(8\pi\)`,'5'], e:'|r′| = √(9 + 16) = 5.', h:'∫|r′|dt.'},
   {q:R`El vector \(\vec T\) es…`, o:['La velocidad normalizada','La aceleración','Perpendicular a la curva','El radio'], e:'r′/|r′|.', h:'Tangente unitario.'},
  ]},
/* ---------------- FUNCIONES DE VARIAS VARIABLES ---------------- */
{ id:'varias', n:'Funciones de varias variables', sub:'z = f(x, y) · dominio · curvas de nivel · límites y continuidad', tgt:'MAPA_TOPOGRAFICO',
  req:['rectas-planos','continuidad'], uses:'Derivadas parciales, gradiente, optimización en varias variables, integrales dobles',
  cites:['osc3|§4.1–4.2','paul3|Functions of Several Variables','stewart2|§14.1–14.2'], see:['curva-nivel','funcion-varias'],
  lore: R`
  <div class="why">La temperatura depende de la posición (x, y, z); la ganancia depende de precio y cantidad. Una [[funcion-varias|función de varias variables]] tiene varias entradas y una salida. Su gráfica \(z=f(x,y)\) es una <b>superficie</b>.</div>
  <h3>Dominio</h3>
  <p>Igual que en una variable: denominador ≠ 0, radicando par ≥ 0, argumento de ln &gt; 0. Pero ahora el dominio es una <b>región del plano</b>: dibújala.</p>
  <div class="formula">\[f(x,y)=\sqrt{9-x^2-y^2}:\quad x^2+y^2\le9\ \ (\text{disco de radio 3})\]</div>
  <h3>Curvas de nivel</h3>
  <p>Las [[curva-nivel|curvas de nivel]] \(f(x,y)=k\) son las líneas de un <b>mapa topográfico</b>: cortes horizontales de la superficie a altura k.</p>
  <svg class="dg" viewBox="0 0 320 160"><g transform="translate(80 80)"><circle r="16" class="c1"/><circle r="32" class="c1" opacity=".75"/><circle r="48" class="c1" opacity=".5"/><circle r="64" class="c1" opacity=".3"/><text x="-6" y="4">0</text><text x="18" y="-14">1</text><text x="34" y="-28">4</text></g><g transform="translate(240 80)"><path class="c2" d="M-60 -60L60 60M-60 60L60-60"/><path class="c2" d="M-60 -30Q0 0 -60 30M60 -30Q0 0 60 30M-30 -60Q0 0 30 -60M-30 60Q0 0 30 60" opacity=".7"/></g><text x="30" y="155" class="t1">z = x² + y² (tazón)</text><text x="190" y="155" class="t2">z = x² − y² (silla)</text></svg>
  <p>Curvas juntas = pendiente fuerte; separadas = terreno plano. Para f(x, y, z) se habla de <b>superficies de nivel</b>.</p>
  <h3>Límites en dos variables</h3>
  <p>\(\lim_{(x,y)\to(a,b)}f(x,y)=L\) exige que f se acerque a L por <b>todos los caminos</b> posibles (rectas, parábolas, espirales…).</p>
  <ol class="recipe">
   <li>Prueba sustitución directa (polinomios y composiciones continuas).</li>
   <li>Para mostrar que <b>no existe</b>: encuentra dos caminos con límites distintos (x = 0, y = 0, y = mx, y = x²…).</li>
   <li>Para mostrar que <b>existe</b>: [[polares|polares]] (\(x=r\cos\theta,y=r\sin\theta\), r → 0 sin depender de θ) o compresión.</li>
  </ol>
  <div class="formula">\[\lim_{(x,y)\to(0,0)}\frac{xy}{x^2+y^2}:\ \ y=mx\Rightarrow\frac{mx^2}{x^2(1+m^2)}=\frac{m}{1+m^2}\ \text{ depende de }m\Rightarrow\text{ no existe}\]</div>
  <div class="trap">Que el límite dé lo mismo por todas las rectas <b>no</b> prueba que existe: \(\frac{x^2y}{x^4+y^2}\) da 0 por rectas y \(\frac12\) por \(y=x^2\).</div>`,
  ex:[
   {t:'Dominio en el plano', q:R`\(f(x,y)=\ln(y-x^2)\)`, s:[R`\(y-x^2>0\Rightarrow y>x^2\)`, R`Región estrictamente por encima de la parábola \(y=x^2\) (sin incluirla).`]},
   {t:'Límite en polares', q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^3}{x^2+y^2}\)`, s:[
     R`\(x=r\cos\theta\): \(\frac{r^3\cos^3\theta}{r^2}=r\cos^3\theta\)`, R`\(|r\cos^3\theta|\le r\to0\) sin importar θ → el límite es 0.`]},
  ],
  qs:[
   {q:R`Dominio de \(f=\sqrt{4-x^2-y^2}\)`, o:['Disco de radio 2','Círculo de radio 2','Todo ℝ²','Fuera del disco'], e:'x² + y² ≤ 4 (incluye el interior).', h:'Radicando ≥ 0.'},
   {q:R`Curvas de nivel de \(f=x^2+y^2\)`, o:['Círculos','Rectas','Parábolas','Hipérbolas'], e:'x² + y² = k.', h:'Iguala a una constante.'},
   {q:R`Para probar que un límite en (0, 0) NO existe basta…`, o:['Dos caminos con límites distintos','Un camino','Probar todas las rectas','Usar L’Hôpital'], e:'Si dependiera del camino, no hay límite.', h:'Caminos distintos.'},
   {q:R`\(\displaystyle\lim_{(x,y)\to(1,2)}(x^2y+3)\)`, o:['5','7','3','No existe'], e:'Polinomio: sustitución directa 1·2 + 3.', h:'Continua.'},
  ]},
/* ---------------- DERIVADAS PARCIALES ---------------- */
{ id:'parciales', n:'Derivadas parciales', sub:'∂f/∂x congelando y · orden superior · teorema de Clairaut', tgt:'CONGELADOR_DE_VARIABLES',
  req:['varias','derivadas'], uses:'Plano tangente, regla de la cadena, gradiente, optimización, ecuaciones de la física (calor, ondas)',
  cites:['osc3|§4.3','paul3|Partial Derivatives','stewart2|§14.3'], see:['derivada-parcial','clairaut'],
  lore: R`
  <div class="why">Si f depende de x e y, ¿cuánto cambia f al mover <b>solo</b> x? Esa es la [[derivada-parcial|derivada parcial]] \(f_x\): derivas en x tratando y como <b>constante</b>. Euler y Clairaut las desarrollaron hacia 1740.</div>
  <h3>Definición e interpretación</h3>
  <div class="formula">\[f_x(a,b)=\frac{\partial f}{\partial x}(a,b)=\lim_{h\to0}\frac{f(a+h,b)-f(a,b)}{h}\]</div>
  <p>Geométricamente: corta la superficie con el plano y = b; \(f_x\) es la pendiente de esa curva en la dirección del eje x. Igual \(f_y\) en la dirección y.</p>
  <h3>Cómo calcular</h3>
  <ol class="recipe"><li>Para \(f_x\): todas las demás letras son números. Usa las reglas de siempre.</li><li>Para \(f_y\): congela x.</li></ol>
  <div class="formula">\[f=x^3y^2+\sin(xy):\quad f_x=3x^2y^2+y\cos(xy)\qquad f_y=2x^3y+x\cos(xy)\]</div>
  <div class="trap">En \(f_x\), un término como \(5y^3\) es una constante → derivada 0. Y \(x\,y^3\) se deriva como "x por constante" → \(y^3\).</div>
  <h3>Derivadas de orden superior</h3>
  <div class="formula">\[f_{xx}=\frac{\partial^2f}{\partial x^2}\quad f_{xy}=\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)\quad f_{yx}\quad f_{yy}\]</div>
  <p><b>Teorema de [[clairaut|Clairaut]] (Schwarz):</b> si \(f_{xy}\) y \(f_{yx}\) son continuas, \(f_{xy}=f_{yx}\). El orden no importa: buen chequeo de tus cálculos.</p>
  <h3>Ecuaciones en derivadas parciales famosas</h3>
  <div class="tscroll"><table class="t"><tr><th>Ecuación</th><th>Describe</th></tr>
   <tr><td>\(u_{xx}+u_{yy}=0\)</td><td>Laplace: potencial, temperatura en equilibrio</td></tr>
   <tr><td>\(u_t=k\,u_{xx}\)</td><td>Calor (Fourier, 1822)</td></tr><tr><td>\(u_{tt}=c^2u_{xx}\)</td><td>Ondas (d'Alembert, 1747)</td></tr></table></div>
  <h3>Funciones de tres o más variables</h3>
  <p>Igual: \(f_z\) congela x e y. Ejemplo: \(f=xe^{yz}\Rightarrow f_z=xy\,e^{yz}\).</p>`,
  ex:[
   {t:'Parciales con cociente', q:R`\(f(x,y)=\frac{x}{x+y}\)`, s:[
     R`\(f_x=\frac{1\cdot(x+y)-x\cdot1}{(x+y)^2}=\frac{y}{(x+y)^2}\)`, R`\(f_y=\frac{0-x\cdot1}{(x+y)^2}=\frac{-x}{(x+y)^2}\)`]},
   {t:'Verificar Clairaut', q:R`\(f=x^2y^3+e^{xy}\)`, s:[
     R`\(f_x=2xy^3+ye^{xy}\Rightarrow f_{xy}=6xy^2+e^{xy}+xye^{xy}\)`, R`\(f_y=3x^2y^2+xe^{xy}\Rightarrow f_{yx}=6xy^2+e^{xy}+xye^{xy}\)`, R`Iguales ✓`]},
  ],
  qs:[
   {q:R`\(f=x^2y+3y\). \(f_x=\)`, o:['2xy','x² + 3','2x','2xy + 3'], e:'3y es constante en x.', h:'Congela y.'},
   {q:R`\(f=x^2y+3y\). \(f_y=\)`, o:['x² + 3','2xy','x²','3'], e:'x² es coeficiente de y.', h:'Congela x.'},
   {q:R`\(f=e^{xy}\). \(f_x=\)`, o:[R`\(ye^{xy}\)`,R`\(xe^{xy}\)`,R`\(e^{xy}\)`,R`\(xye^{xy}\)`], e:'Cadena: derivada de xy en x es y.', h:'Cadena.'},
   {q:R`Clairaut dice que…`, o:[R`\(f_{xy}=f_{yx}\) (si son continuas)`,R`\(f_x=f_y\)`,R`\(f_{xx}=f_{yy}\)`,R`\(f_{xy}=0\)`], e:'Las mixtas coinciden.', h:'Mixtas.'},
   {q:R`\(f=\ln(x^2+y^2)\). \(f_y(1,1)=\)`, o:['1','2','1/2','0'], e:'2y/(x² + y²) = 2/2.', h:'Cadena con ln.'},
  ]},
/* ---------------- PLANO TANGENTE Y REGLA DE LA CADENA ---------------- */
{ id:'tangente', n:'Plano tangente, diferencial y regla de la cadena', sub:'Linealización en 2D · dz · árbol de dependencias · implícita', tgt:'PLANO_LUPA',
  req:['parciales','linealizacion'], uses:'Gradiente, errores en mediciones, cambio de variables, termodinámica',
  cites:['osc3|§4.4–4.5','paul3|Tangent Planes and Linear Approximations','stewart2|§14.4–14.5'], see:['plano-tangente','regla-cadena'],
  lore: R`
  <div class="why">Al hacer zoom en una superficie suave se ve un <b>plano</b>: el [[plano-tangente|plano tangente]]. Es la [[linealizacion|linealización]] de una variable, ahora con dos pendientes \(f_x\) y \(f_y\).</div>
  <h3>Plano tangente a z = f(x, y)</h3>
  <div class="formula">\[z-z_0=f_x(a,b)(x-a)+f_y(a,b)(y-b)\qquad z_0=f(a,b)\]</div>
  <p>Linealización: \(L(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)\approx f(x,y)\) cerca de (a, b).</p>
  <h4>Superficie implícita F(x, y, z) = k</h4>
  <div class="formula">\[F_x(P)(x-x_0)+F_y(P)(y-y_0)+F_z(P)(z-z_0)=0\]</div>
  <p>El vector normal es el [[gradiente]] \(\nabla F(P)\).</p>
  <h3>Diferencial total</h3>
  <div class="formula">\[dz=f_x\,dx+f_y\,dy\qquad\Delta z\approx dz\]</div>
  <p>Error en el volumen de un cilindro \(V=\pi r^2h\): \(dV=2\pi rh\,dr+\pi r^2dh\).</p>
  <p><b>Diferenciable</b> en 2D es más que tener parciales: si \(f_x\), \(f_y\) existen y son <b>continuas</b> cerca del punto, f es diferenciable (y el plano tangente aproxima bien).</p>
  <h3>Regla de la cadena: el árbol</h3>
  <ol class="recipe">
   <li>Dibuja el <b>árbol</b>: arriba z, luego sus variables (x, y), luego de qué dependen (t, o s y t).</li>
   <li>Para \(\frac{\partial z}{\partial s}\): sigue <b>cada camino</b> de z a s, multiplica las derivadas en cada rama, y <b>suma</b> los caminos.</li>
  </ol>
  <div class="formula">\[z=f(x,y),\ x(t),\ y(t):\quad\frac{dz}{dt}=\frac{\partial z}{\partial x}\frac{dx}{dt}+\frac{\partial z}{\partial y}\frac{dy}{dt}\]</div>
  <div class="formula">\[z=f(x,y),\ x(s,t),\ y(s,t):\quad\frac{\partial z}{\partial s}=z_x\,x_s+z_y\,y_s\qquad\frac{\partial z}{\partial t}=z_x\,x_t+z_y\,y_t\]</div>
  <h3>Derivación implícita con parciales</h3>
  <p>Si F(x, y) = 0 define y(x): \(\frac{dy}{dx}=-\frac{F_x}{F_y}\). Si F(x, y, z) = 0 define z(x, y): \(\frac{\partial z}{\partial x}=-\frac{F_x}{F_z}\), \(\frac{\partial z}{\partial y}=-\frac{F_y}{F_z}\).</p>
  <div class="tip">Comprueba con el círculo: \(F=x^2+y^2-25\Rightarrow y'=-\frac{2x}{2y}=-\frac xy\). El mismo resultado que en [[implicita|derivación implícita]], en una línea.</div>`,
  ex:[
   {t:'Plano tangente a un paraboloide', q:R`\(z=x^2+y^2\) en (1, 2, 5)`, s:[R`\(f_x=2x=2\), \(f_y=2y=4\)`, R`\(z-5=2(x-1)+4(y-2)\Rightarrow z=2x+4y-5\)`]},
   {t:'Cadena con un parámetro', q:R`\(z=x^2y\), \(x=\cos t\), \(y=\sin t\). Halla \(\frac{dz}{dt}\).`, s:[
     R`\(z_x=2xy\), \(z_y=x^2\); \(x'=-\sin t\), \(y'=\cos t\)`, R`\(\frac{dz}{dt}=2xy(-\sin t)+x^2\cos t=-2\cos t\sin^2t+\cos^3t\)`]},
   {t:'Implícita con parciales', q:R`\(x^2+y^2+z^2=3xyz\). \(\frac{\partial z}{\partial x}\)`, s:[
     R`\(F=x^2+y^2+z^2-3xyz\): \(F_x=2x-3yz\), \(F_z=2z-3xy\)`, R`\(\frac{\partial z}{\partial x}=-\frac{2x-3yz}{2z-3xy}\)`]},
  ],
  qs:[
   {q:R`Plano tangente a \(z=xy\) en (1, 1, 1)`, o:[R`\(z=x+y-1\)`,R`\(z=x+y\)`,R`\(z=xy\)`,R`\(z=2x+2y-3\)`], e:'f_x = y = 1, f_y = x = 1.', h:'z − 1 = (x − 1) + (y − 1).'},
   {q:R`Diferencial total de \(z=x^2y\)`, o:[R`\(2xy\,dx+x^2dy\)`,R`\(2x\,dx+dy\)`,R`\(2xy\,dx\)`,R`\(x^2dx+2xy\,dy\)`], e:'f_x dx + f_y dy.', h:'Suma de parciales.'},
   {q:R`Si F(x, y) = 0, \(\frac{dy}{dx}=\)`, o:[R`\(-\frac{F_x}{F_y}\)`,R`\(\frac{F_x}{F_y}\)`,R`\(-\frac{F_y}{F_x}\)`,R`\(F_xF_y\)`], e:'Teorema de la función implícita.', h:'Con signo menos.'},
   {q:R`En la regla de la cadena, cada camino del árbol se…`, o:['Multiplica, y los caminos se suman','Suma, y los caminos se multiplican','Divide','Deriva dos veces'], e:'Producto por rama, suma de caminos.', h:'Árbol.'},
  ]},
/* ---------------- GRADIENTE ---------------- */
{ id:'gradiente', n:'Gradiente y derivada direccional', sub:'∇f · la dirección de máximo crecimiento · normal a las curvas de nivel', tgt:'BRUJULA_DE_PENDIENTE',
  req:['tangente','vectores'], uses:'Optimización (∇f = 0), multiplicadores de Lagrange, campos conservativos, descenso del gradiente en machine learning',
  cites:['osc3|§4.6','paul3|Directional Derivatives','stewart2|§14.6','khan-mv|Gradient'], see:['gradiente','derivada-direccional'],
  lore: R`
  <div class="why">Estás en una montaña: ¿hacia dónde subir más rápido? El [[gradiente]] \(\nabla f\) es un vector que <b>apunta</b> hacia ahí, y su largo dice qué tan empinado es. Es el motor del "descenso del gradiente" con el que se entrenan las redes neuronales.</div>
  <h3>Definición</h3>
  <div class="formula">\[\nabla f=\langle f_x,f_y\rangle\qquad\nabla f=\langle f_x,f_y,f_z\rangle\]</div>
  <h3>Derivada direccional</h3>
  <p>Pendiente de f en la dirección de un vector <b>unitario</b> \(\hat u\):</p>
  <div class="formula">\[D_{\hat u}f=\nabla f\cdot\hat u=|\nabla f|\cos\theta\]</div>
  <ol class="recipe"><li>Calcula ∇f en el punto.</li><li>Si te dan una dirección \(\vec v\), <b>normalízala</b>: \(\hat u=\vec v/|\vec v|\).</li><li>Producto punto.</li></ol>
  <div class="trap">Olvidar normalizar el vector dirección. \(D_{\hat u}f\) solo tiene sentido con \(|\hat u|=1\).</div>
  <h3>Las tres propiedades clave</h3>
  <ol class="recipe">
   <li>f crece más rápido en la dirección de \(\nabla f\); la tasa máxima es \(|\nabla f|\).</li>
   <li>f decrece más rápido en la dirección \(-\nabla f\) (por ahí baja el agua; así funciona el descenso del gradiente).</li>
   <li>\(\nabla f\) es <b>perpendicular</b> a las curvas (superficies) de nivel. Por eso es el vector normal del plano tangente.</li>
  </ol>
  <p><b>Por qué:</b> \(D_{\hat u}f=|\nabla f|\cos\theta\) es máximo con θ = 0, mínimo con θ = π, y cero con θ = π/2 (moverse sobre una curva de nivel no cambia f).</p>
  <svg class="dg" viewBox="0 0 320 150"><g transform="translate(160 75)"><ellipse rx="40" ry="22" class="c1"/><ellipse rx="80" ry="44" class="c1" opacity=".6"/><ellipse rx="120" ry="66" class="c1" opacity=".35"/><path class="c2" d="M56 31 L80 62" marker-end="url(#ar)"/><circle cx="56" cy="31" r="3" class="dot"/></g><defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--blue)"/></marker></defs><text x="316" y="146" text-anchor="end" class="t2">∇f ⟂ curva de nivel</text></svg>`,
  ex:[
   {t:'Derivada direccional', q:R`\(f=x^2y+y^3\) en (1, 2) en la dirección de \(\langle3,4\rangle\)`, s:[
     R`\(\nabla f=\langle2xy,\ x^2+3y^2\rangle=\langle4,13\rangle\)`, R`\(\hat u=\langle\frac35,\frac45\rangle\)`, R`\(D_{\hat u}f=\frac{12}5+\frac{52}5=\frac{64}5\)`]},
   {t:'Dirección de máximo crecimiento', q:R`\(T(x,y,z)=x^2+2y^2+3z^2\) en (1, 1, 1)`, s:[
     R`\(\nabla T=\langle2x,4y,6z\rangle=\langle2,4,6\rangle\)`, R`Dirección: \(\langle2,4,6\rangle\) (o unitario \(\frac{1}{\sqrt{56}}\langle2,4,6\rangle\))`, R`Tasa máxima: \(\sqrt{56}=2\sqrt{14}\approx7.48\)`]},
  ],
  qs:[
   {q:R`\(\nabla(x^2+y^2)\) en (1, 2)`, o:[R`\(\langle2,4\rangle\)`,R`\(\langle1,2\rangle\)`,'5',R`\(\langle2x,2y\rangle\)`], e:'⟨2x, 2y⟩ evaluado.', h:'Evalúa en el punto.'},
   {q:R`La tasa máxima de cambio de f en un punto es`, o:[R`\(|\nabla f|\)`,R`\(\nabla f\)`,'0',R`\(f_x+f_y\)`], e:'Con θ = 0.', h:'Magnitud del gradiente.'},
   {q:R`∇f es ___ a las curvas de nivel`, o:['Perpendicular','Tangente','Paralelo','Igual'], e:'Sobre una curva de nivel f no cambia.', h:'D_u f = 0 a lo largo de ellas.'},
   {q:R`\(D_{\hat u}f\) con \(\nabla f=\langle3,4\rangle\), \(\hat u=\langle1,0\rangle\)`, o:['3','4','5','7'], e:'Producto punto.', h:'∇f · u.'},
   {q:R`Para bajar lo más rápido posible, muévete en la dirección`, o:[R`\(-\nabla f\)`,R`\(\nabla f\)`,'Perpendicular a ∇f','Cualquiera'], e:'Descenso del gradiente.', h:'Opuesto.'},
  ]},
/* ---------------- MÁXIMOS Y MÍNIMOS ---------------- */
{ id:'extremos', n:'Máximos y mínimos en varias variables', sub:'Puntos críticos ∇f = 0 · criterio del hessiano · extremos en regiones cerradas', tgt:'CIMA_Y_VALLE',
  req:['gradiente','optimizacion'], uses:'Mínimos cuadrados (regresión lineal), economía, ingeniería',
  cites:['osc3|§4.7','paul3|Relative Minimums and Maximums','stewart2|§14.7'], see:['hessiano','extremos-mv'],
  lore: R`
  <div class="why">Igual que en una variable: en un máximo o mínimo suave el plano tangente es <b>horizontal</b>, o sea \(\nabla f=\vec0\). Pero ahora aparece un tercer caso: el <b>punto de silla</b>.</div>
  <h3>Puntos críticos</h3>
  <p>Resuelve el sistema \(f_x=0\), \(f_y=0\) (y agrega donde alguna parcial no exista).</p>
  <h3>Criterio de la segunda derivada (discriminante / hessiano)</h3>
  <div class="formula">\[D=f_{xx}f_{yy}-(f_{xy})^2=\det\begin{pmatrix}f_{xx}&f_{xy}\\f_{xy}&f_{yy}\end{pmatrix}\]</div>
  <div class="tscroll"><table class="t"><tr><th>En el punto crítico</th><th>Conclusión</th></tr>
   <tr><td>D &gt; 0 y \(f_{xx}>0\)</td><td>mínimo local (tazón ∪)</td></tr>
   <tr><td>D &gt; 0 y \(f_{xx}<0\)</td><td>máximo local (cúpula ∩)</td></tr>
   <tr><td>D &lt; 0</td><td><b>punto de silla</b> (sube en una dirección, baja en otra)</td></tr>
   <tr><td>D = 0</td><td>no decide</td></tr></table></div>
  <p>La matriz de segundas derivadas es el [[hessiano]] (Hesse, 1844).</p>
  <h3>Extremos absolutos en una región cerrada y acotada</h3>
  <ol class="recipe"><li>Puntos críticos <b>dentro</b> de la región: evalúa f.</li><li>En la <b>frontera</b>: parametrízala (o usa [[lagrange-mult|Lagrange]]) y optimiza en una variable; incluye las esquinas.</li><li>El mayor valor es el máximo absoluto; el menor, el mínimo.</li></ol>
  <h3>Aplicación: mínimos cuadrados</h3>
  <p>La recta y = mx + b que mejor ajusta n datos minimiza \(E(m,b)=\sum(y_i-mx_i-b)^2\). Igualando \(E_m=E_b=0\) salen las ecuaciones normales (Gauss y Legendre, ~1805). Es la regresión lineal de cualquier hoja de cálculo.</p>`,
  ex:[
   {t:'Clasificar puntos críticos', q:R`\(f=x^3+y^3-3xy\)`, s:[
     R`\(f_x=3x^2-3y=0\Rightarrow y=x^2\); \(f_y=3y^2-3x=0\Rightarrow x=y^2\)`,
     R`\(x=x^4\Rightarrow x(x^3-1)=0\): puntos (0, 0) y (1, 1).`,
     R`\(f_{xx}=6x,\ f_{yy}=6y,\ f_{xy}=-3\Rightarrow D=36xy-9\)`,
     R`(0, 0): D = −9 &lt; 0 → silla. (1, 1): D = 27 &gt; 0, \(f_{xx}=6>0\) → mínimo local, f = −1.`]},
   {t:'Caja de volumen máximo', q:R`Caja sin tapa con 12 m² de material. ¿Volumen máximo?`, s:[
     R`\(xy+2xz+2yz=12\Rightarrow z=\frac{12-xy}{2(x+y)}\); \(V=xyz\).`, R`Por simetría x = y; resolviendo \(V_x=V_y=0\): x = y = 2, z = 1.`, R`V = 4 m³.`]},
  ],
  qs:[
   {q:R`Puntos críticos de \(f=x^2+y^2-4x\)`, o:['(2, 0)','(0, 0)','(4, 0)','(2, 2)'], e:'2x − 4 = 0, 2y = 0.', h:'∇f = 0.'},
   {q:R`D &lt; 0 en un punto crítico indica…`, o:['Punto de silla','Máximo','Mínimo','Nada'], e:'Curvaturas de signo opuesto.', h:'Silla.'},
   {q:R`\(f=x^2-y^2\) en (0, 0)`, o:['Silla','Mínimo','Máximo','No es crítico'], e:'D = (2)(−2) − 0 = −4.', h:'Paraboloide hiperbólico.'},
   {q:R`D = 12, \(f_{xx}=-3\)`, o:['Máximo local','Mínimo local','Silla','No decide'], e:'D > 0 y f_xx < 0.', h:'Cúpula.'},
   {q:R`En una región cerrada, el máximo absoluto puede estar…`, o:['En un crítico interior o en la frontera','Solo donde ∇f = 0','Solo en las esquinas','En el infinito'], e:'Revisa ambos.', h:'Como el intervalo cerrado.'},
  ]},
/* ---------------- LAGRANGE ---------------- */
{ id:'lagrange', n:'Multiplicadores de Lagrange', sub:'Optimizar con restricción · ∇f = λ∇g', tgt:'TANGENCIA_RESTRINGIDA',
  req:['extremos'], uses:'Economía (utilidad con presupuesto), física (mecánica de Lagrange), machine learning (SVM)',
  cites:['osc3|§4.8','paul3|Lagrange Multipliers','stewart2|§14.8'], see:['lagrange-mult','gradiente'],
  lore: R`
  <div class="why">Maximizar f(x, y) <b>sujeto a</b> g(x, y) = k (un presupuesto, una superficie). Lagrange (1788) vio que en el óptimo la curva de nivel de f es <b>tangente</b> a la restricción, así que sus gradientes son paralelos.</div>
  <h3>El método</h3>
  <div class="formula">\[\nabla f=\lambda\,\nabla g\qquad g(x,y)=k\]</div>
  <ol class="recipe">
   <li>Escribe las ecuaciones: \(f_x=\lambda g_x\), \(f_y=\lambda g_y\) (y \(f_z=\lambda g_z\)), más la restricción.</li>
   <li>Resuelve el sistema. Truco: despeja λ de cada ecuación e iguala, o divide ecuaciones.</li>
   <li>Evalúa f en <b>todos</b> los puntos encontrados: el mayor es el máximo, el menor el mínimo (si la restricción es cerrada y acotada).</li>
  </ol>
  <div class="trap">Al dividir, no pierdas soluciones: si x = 0 o λ = 0 son posibles, revísalos aparte. Y λ no hay que reportarlo (su valor sí tiene significado: cuánto mejora el óptimo si aflojas la restricción, el "precio sombra").</div>
  <h3>Por qué funciona</h3>
  <p>Recorre la restricción g = k. Mientras cruces curvas de nivel de f, f sigue cambiando. Se detiene (máx o mín) justo donde tocas una curva de nivel sin cruzarla: tangencia. Como ∇f ⟂ nivel de f y ∇g ⟂ restricción, en la tangencia son [[gradiente|paralelos]].</p>
  <h3>Dos restricciones</h3>
  <div class="formula">\[\nabla f=\lambda\nabla g+\mu\nabla h,\qquad g=k_1,\ h=k_2\]</div>`,
  ex:[
   {t:'Máximo en una elipse', q:R`Maximiza \(f=xy\) sujeto a \(x^2+4y^2=8\)`, s:[
     R`\(y=\lambda\cdot2x\), \(x=\lambda\cdot8y\)`, R`Divide: \(\frac yx=\frac{2x}{8y}\Rightarrow4y^2=x^2\)`, R`En la restricción: \(2x^2=8\Rightarrow x=\pm2,\ y=\pm1\)`, R`Máximo f = 2 en (2, 1) y (−2, −1); mínimo −2.`]},
   {t:'Punto más cercano de un plano', q:R`Punto de \(x+2y+2z=9\) más cercano al origen.`, s:[
     R`Minimiza \(f=x^2+y^2+z^2\): \(2x=\lambda,\ 2y=2\lambda,\ 2z=2\lambda\Rightarrow y=z=2x\)`, R`\(x+4x+4x=9\Rightarrow x=1\)`, R`Punto (1, 2, 2), distancia 3 (coincide con la fórmula de distancia a un plano).`]},
  ],
  qs:[
   {q:R`La condición de Lagrange es`, o:[R`\(\nabla f=\lambda\nabla g\)`,R`\(\nabla f=0\)`,R`\(\nabla g=0\)`,R`\(f=\lambda g\)`], e:'Gradientes paralelos.', h:'Tangencia.'},
   {q:R`Máximo de \(f=x+y\) en \(x^2+y^2=2\)`, o:['2','√2','1','4'], e:'1 = 2λx, 1 = 2λy → x = y = 1.', h:'x = y.'},
   {q:R`En el óptimo, la curva de nivel de f y la restricción son…`, o:['Tangentes','Perpendiculares','Paralelas pero separadas','Iguales'], e:'Se tocan sin cruzarse.', h:'Geometría.'},
   {q:R`Mínimo de \(x^2+y^2\) sujeto a \(x+y=4\)`, o:['8','16','4','2'], e:'x = y = 2.', h:'Simetría.'},
  ]},
);
