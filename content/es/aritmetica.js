/* ============ ERA 00 · ARITMÉTICA Y NÚMEROS (desde cero) ============
   Mismo formato que sections.js. El código (SEC-xx), la era (g) y el orden los asigna timeline.js.
   drill: generador de ejercicios infinitos del Simulador (js/labs-basic.js).
   [[clave|texto]] = enlace al glosario · [^fuente|ubicación] = cita. */
Object.assign(CITE, {
  khan:{s:'Khan Academy · Aritmética', a:'Khan Academy', t:'Aritmética y preálgebra (cursos en español)', p:'Khan Academy, gratis y en español', u:'https://es.khanacademy.org/math/arithmetic'},
});
Object.assign(WIKI, {
  enteros:{t:'Números enteros', d:'Los naturales, el cero y sus opuestos negativos: …, −3, −2, −1, 0, 1, 2, 3, …', sec:'numeros', h:'Los conjuntos de números', w:'Número_entero', al:['números enteros','número entero','enteros negativos']},
  'valor-absoluto':{t:'Valor absoluto', d:'Distancia de un número al cero en la recta: nunca es negativa.', f:R`|a|=\begin{cases}a&a\ge0\\-a&a<0\end{cases}`, sec:'numeros', h:'Valor absoluto', w:'Valor_absoluto', al:['valor absoluto']},
  'ley-signos':{t:'Ley de los signos', d:'Al multiplicar o dividir: signos iguales dan +, signos distintos dan −.', f:R`(+)(+)=+,\ (-)(-)=+,\ (+)(-)=-`, sec:'mult-div', h:'Ley de los signos', w:'Regla_de_los_signos', al:['ley de los signos','regla de los signos']},
  jerarquia:{t:'Jerarquía de operaciones', d:'Orden obligatorio: paréntesis, potencias y raíces, multiplicación y división (izquierda a derecha), suma y resta (izquierda a derecha).', sec:'jerarquia', h:'El orden', w:'Orden_de_evaluación', al:['jerarquía de operaciones','orden de las operaciones','PAPOMUDAS']},
  primo:{t:'Número primo', d:'Número mayor que 1 cuyos únicos divisores son 1 y él mismo: 2, 3, 5, 7, 11, 13, …', sec:'primos', h:'Primos y compuestos', w:'Número_primo', al:['número primo','números primos','factores primos','descomposición en factores primos']},
  mcm:{t:'MCM y MCD', d:'MCM: el menor múltiplo común (sirve para sumar fracciones). MCD: el mayor divisor común (sirve para simplificar).', sec:'primos', h:'MCD y MCM', w:'Mínimo_común_múltiplo', al:['MCM','MCD','mínimo común múltiplo','máximo común divisor']},
  fraccion:{t:'Fracción', d:'a/b: el entero se parte en b partes iguales y se toman a. Numerador arriba, denominador abajo.', sec:'fracciones-base', h:'Qué es una fracción', w:'Fracción', al:['fracción equivalente','fracciones equivalentes','número mixto','fracción impropia']},
  porcentaje:{t:'Porcentaje', d:'p % significa p de cada 100: p % de N = (p/100)·N.', sec:'decimales', h:'Porcentajes', w:'Porcentaje', al:['porcentaje','porcentajes']},
  'regla-tres':{t:'Regla de tres', d:'Halla un valor desconocido en una proporción. Directa: más → más. Inversa: más → menos.', sec:'proporciones', h:'Regla de tres directa', w:'Regla_de_tres', al:['regla de tres','proporción directa','proporción inversa']},
  'notacion-cientifica':{t:'Notación científica', d:'Un número entre 1 y 10 por una potencia de 10: 0.00042 = 4.2 × 10⁻⁴.', sec:'potencias-base', h:'Notación científica', w:'Notación_científica', al:['notación científica']},
  variable:{t:'Variable', d:'Letra que representa un número desconocido o que puede cambiar.', sec:'algebra-intro', h:'Qué es una variable', w:'Variable_(matemáticas)', al:['términos semejantes','despejar','despeja']},
});

LV.push(
/* ---------------- NÚMEROS Y RECTA ---------------- */
{ id:'numeros', n:'Los números y la recta numérica', sub:'Naturales, enteros, racionales, reales · comparar · valor absoluto', tgt:'NODO_CERO', lab:'drill', drill:'numeros',
  req:[], uses:'Todo: cada operación de aquí en adelante vive en la recta numérica', cites:['khan|Números negativos'], see:['enteros','valor-absoluto'],
  lore: R`
  <div class="why">Antes de operar hay que saber <b>qué tipo de número tienes</b> y <b>dónde está</b>. La recta numérica es el mapa: todo lo que viene después (sumar, restar, límites, gráficas) se entiende moviéndose sobre ella.</div>

  <h3>Los conjuntos de números</h3>
  <p>Cada conjunto agrega números que el anterior no tenía. Están metidos uno dentro del otro como cajas.</p>
  <div class="tscroll"><table class="t"><tr><th>Conjunto</th><th>Qué contiene</th><th>Ejemplos</th><th>Para qué se inventó</th></tr>
   <tr><td>Naturales \(\mathbb N\)</td><td>Los de contar</td><td>1, 2, 3, 100</td><td>Contar objetos</td></tr>
   <tr><td>Enteros \(\mathbb Z\)</td><td>Naturales, el 0 y los negativos</td><td>−5, 0, 12</td><td>Deudas, temperaturas bajo cero, que \(3-5\) tenga respuesta</td></tr>
   <tr><td>Racionales \(\mathbb Q\)</td><td>Todo lo que se escribe como fracción \(\frac ab\) (b ≠ 0)</td><td>\(\frac12\), −0.75, 0.333…</td><td>Repartir: que \(1\div3\) tenga respuesta</td></tr>
   <tr><td>Irracionales</td><td>Decimales infinitos <b>sin patrón</b>; no son fracción</td><td>\(\sqrt2\), π, e</td><td>Medir la diagonal de un cuadrado, el círculo</td></tr>
   <tr><td>Reales \(\mathbb R\)</td><td>Racionales + irracionales: toda la recta</td><td>todos los anteriores</td><td>Medir cualquier longitud</td></tr></table></div>
  <div class="tip">Truco: si el decimal se acaba (0.25) o se repite (0.333…), es <b>racional</b>. Si sigue para siempre sin repetirse (1.41421356…), es <b>irracional</b>.</div>

  <h3>La recta numérica</h3>
  <svg class="dg" viewBox="0 0 340 70"><path class="ax" d="M10 35H330"/>${[-5,-4,-3,-2,-1,0,1,2,3,4,5].map((k,i)=>`<path class="ax" d="M${30+i*28} 29V41"/><text x="${26+i*28-(k<0?4:0)}" y="58">${k}</text>`).join('')}<circle cx="170" cy="35" r="4" class="dot"/><text x="150" y="20" class="t1">cero</text><text x="12" y="20">← menores</text><text x="262" y="20">mayores →</text></svg>
  <ol class="recipe">
   <li>El 0 en el centro. Positivos a la <b>derecha</b>, negativos a la <b>izquierda</b>.</li>
   <li>Un número es <b>mayor</b> mientras más a la derecha esté. Por eso \(-2>-7\): el −2 está más a la derecha.</li>
   <li>Los símbolos: \(a\lt b\) "a es menor que b" · \(a>b\) "a es mayor que b". La boca abierta mira al mayor.</li>
  </ol>
  <div class="trap">Con negativos se invierte la intuición: \(-9\) <b>no</b> es mayor que \(-2\). Piensa en temperatura: −9 °C es más frío (menor) que −2 °C.</div>

  <h3>Opuesto y valor absoluto</h3>
  <p>El <b>opuesto</b> de un número está a la misma distancia del 0, pero al otro lado: el opuesto de 6 es −6, el de −4 es 4.</p>
  <p>El [[valor-absoluto|valor absoluto]] \(|a|\) es la <b>distancia</b> al 0, y una distancia nunca es negativa:</p>
  <div class="formula">\[|7|=7\qquad|-7|=7\qquad|0|=0\]</div>
  <p>La distancia entre dos números a y b en la recta es \(|a-b|\). Entre −3 y 5: \(|5-(-3)|=|8|=8\) pasos.</p>

  <h3>Procedimiento: ordenar números</h3>
  <ol class="recipe">
   <li>Pasa todo a decimal si hay fracciones (\(\frac12=0.5\)).</li>
   <li>Separa negativos y positivos. Los negativos van primero (son menores).</li>
   <li>Entre negativos, el de <b>mayor</b> valor absoluto es el <b>menor</b>: −7 &lt; −3.</li>
   <li>Entre positivos, el orden normal.</li>
  </ol>`,
  ex:[
   {t:'Ordenar de menor a mayor', q:R`Ordena: \(-3,\ 2,\ -7,\ 0,\ \frac12\)`, s:[
     R`Pasa la fracción a decimal: \(\frac12=0.5\)`,
     R`Negativos: −3 y −7. El −7 está más lejos del 0 a la izquierda, entonces es el menor: \(-7<-3\)`,
     R`Luego el 0, y después los positivos: \(0.5<2\)`,
     R`Resultado: \(-7<-3<0<\frac12<2\)`]},
   {t:'Valor absoluto', q:R`Calcula \(|-8|-|3|+|-1|\)`, s:[
     R`Cada valor absoluto es una distancia: \(|-8|=8\), \(|3|=3\), \(|-1|=1\)`,
     R`Reemplaza: \(8-3+1\)`,
     R`De izquierda a derecha: \(8-3=5\), \(5+1=6\)`]},
   {t:'Clasificar', q:R`¿A qué conjunto más pequeño pertenece cada uno? \(-4,\ 0.25,\ \sqrt2,\ \sqrt9\)`, s:[
     R`\(-4\): negativo sin decimales → <b>entero</b> (no es natural)`,
     R`\(0.25=\frac14\): decimal que se acaba → <b>racional</b>`,
     R`\(\sqrt2=1.41421356\ldots\) no se repite nunca → <b>irracional</b>`,
     R`\(\sqrt9=3\) → <b>natural</b>. Ojo: no todas las raíces son irracionales; solo las que no son exactas`]},
  ],
  qs:[
   {q:'¿Cuál es mayor: −2 o −9?', o:['−2','−9','Son iguales','No se puede saber'], e:'En la recta, −2 está más a la derecha que −9.', h:'Piensa en temperaturas bajo cero.'},
   {q:R`\(|-12|=\)`, o:['12','−12','0','1/12'], e:'El valor absoluto es una distancia al 0: siempre positiva.', h:'Distancia al cero.'},
   {q:'¿Cuál es el conjunto más pequeño al que pertenece −7?', o:['Enteros','Naturales','Irracionales','Ninguno'], e:'−7 no sirve para contar (no es natural) pero es entero.', h:'Los naturales no tienen negativos.'},
   {q:R`\(\sqrt2\) es un número…`, o:['Irracional','Racional','Entero','Natural'], e:'1.41421356… sigue para siempre sin repetirse.', h:'¿Su decimal se acaba o se repite?'},
   {q:'El opuesto de −6 es:', o:['6','−6','1/6','0'], e:'Misma distancia al 0, al otro lado.', h:'Cambia de lado en la recta.'},
   {q:'Ordena de menor a mayor: −1, −4, 3', o:['−4, −1, 3','−1, −4, 3','3, −1, −4','−4, 3, −1'], e:'Entre negativos, el más lejano del 0 es el menor.', h:'¿Cuál está más a la izquierda?'},
   {q:'¿Qué distancia hay entre −3 y 5 en la recta?', o:['8','2','−8','15'], e:R`\(|5-(-3)|=|8|=8\).`, h:'Cuenta los pasos o usa |a − b|.'},
   {q:'¿Cuál de estos es racional?', o:['0.333… (se repite)','π','√2','√5'], e:'Un decimal periódico es una fracción: 0.333… = 1/3.', h:'Decimal que se repite.'},
  ]},

/* ---------------- SUMA Y RESTA ---------------- */
{ id:'suma-resta', n:'Suma y resta (también con negativos)', sub:'Llevar, prestar, ley de signos de la suma, cálculo mental', tgt:'NODO_SUMADOR', lab:'drill', drill:'suma',
  req:['numeros'], uses:'Todas las operaciones; evaluar F(b) − F(a) en integrales definidas', cites:['khan|Suma y resta'], see:['enteros'],
  lore: R`
  <div class="why">Sumar es <b>avanzar</b> en la recta numérica y restar es <b>retroceder</b>. La mayoría de errores en cálculo no son de cálculo: son un signo mal sumado. Esta sección es para que eso no te pase nunca.</div>

  <h3>Sumar en columna (llevando)</h3>
  <ol class="recipe">
   <li>Escribe los números uno debajo del otro, alineados a la <b>derecha</b> (unidades con unidades, decenas con decenas).</li>
   <li>Suma de derecha a izquierda, columna por columna.</li>
   <li>Si una columna da 10 o más, escribe la unidad y <b>lleva</b> 1 a la columna de la izquierda.</li>
  </ol>
  <div class="formula">\[\begin{array}{r}{}^{1}\,{}^{1}\phantom{0}\\487\\+\,256\\\hline743\end{array}\qquad\begin{aligned}&7+6=13\ \to\ \text{escribo }3,\text{ llevo }1\\&8+5+1=14\ \to\ \text{escribo }4,\text{ llevo }1\\&4+2+1=7\end{aligned}\]</div>

  <h3>Restar en columna (prestando)</h3>
  <p>Si el número de arriba es menor que el de abajo en una columna, le <b>pides prestado</b> 1 a la columna de la izquierda (vale 10 en tu columna).</p>
  <div class="formula">\[\begin{array}{r}503\\-\,178\\\hline325\end{array}\qquad\begin{aligned}&3-8\text{ no alcanza: el 0 no tiene, el 5 presta}\to 4,\ \text{el }0\to10\to9,\ 3\to13\\&13-8=5,\quad 9-7=2,\quad 4-1=3\end{aligned}\]</div>
  <div class="tip">Verifica siempre: <b>resultado + lo que restaste = el número de arriba</b>. \(325+178=503\) ✓</div>

  <h3>Sumar con negativos: dos reglas</h3>
  <ol class="recipe">
   <li><b>Mismo signo → se suman</b> y se deja el signo: \(-5-6=-11\) (dos deudas son una deuda más grande).</li>
   <li><b>Signos distintos → se restan</b> (el grande menos el pequeño) y queda el signo del que tenga <b>mayor valor absoluto</b>: \(-12+20=+8\), \(-7+3=-4\).</li>
  </ol>
  <p>Piensa en plata: los positivos son lo que tienes, los negativos lo que debes. \(-7+3\): debes 7, pagas 3, todavía debes 4 → −4.</p>

  <h3>Dos signos seguidos</h3>
  <div class="formula">\[a-(-b)=a+b\qquad a+(-b)=a-b\qquad -(-b)=b\]</div>
  <p>Restar un negativo es <b>sumar</b>: si te quitan una deuda, quedas mejor. \(4-(-9)=4+9=13\).</p>
  <div class="trap">\(-3-3=-6\), pero \(-3-(-3)=0\). El paréntesis lo cambia todo: lee con cuidado si hay dos signos juntos.</div>

  <h3>Muchos términos</h3>
  <p>Con una cadena como \(15-8+2-11\), dos opciones (dan lo mismo):</p>
  <ol class="recipe">
   <li><b>De izquierda a derecha:</b> \(15-8=7\), \(7+2=9\), \(9-11=-2\).</li>
   <li><b>Agrupar:</b> positivos \(15+2=17\), negativos \(-8-11=-19\), y al final \(17-19=-2\). Este método se equivoca menos.</li>
  </ol>

  <h3>Propiedades que ahorran trabajo</h3>
  <div class="tscroll"><table class="t"><tr><th>Propiedad</th><th>Qué dice</th><th>Ejemplo</th></tr>
   <tr><td>Conmutativa</td><td>El orden no importa</td><td>\(7+5=5+7\)</td></tr>
   <tr><td>Asociativa</td><td>Puedes agrupar como quieras</td><td>\((8+7)+3=8+(7+3)=18\)</td></tr>
   <tr><td>Neutro</td><td>Sumar 0 no cambia nada</td><td>\(9+0=9\)</td></tr></table></div>
  <div class="trap">La resta <b>no</b> es conmutativa: \(5-3=2\) pero \(3-5=-2\).</div>

  <h3>Cálculo mental: redondear y compensar</h3>
  <p>\(47+38\): redondea 38 a 40 → \(47+40=87\), y como sumaste 2 de más, quítalos: \(87-2=85\).</p>
  <p>\(1000-437\): resta primero de 999 (no hay que prestar): \(999-437=562\), y suma el 1: \(563\).</p>`,
  ex:[
   {t:'Suma llevando', q:R`\(487+256\)`, s:[
     R`Unidades: \(7+6=13\). Escribe 3 y lleva 1`,
     R`Decenas: \(8+5+1=14\). Escribe 4 y lleva 1`,
     R`Centenas: \(4+2+1=7\)`,
     R`Resultado: \(743\). Verificación aproximada: \(500+250=750\), cerca ✓`]},
   {t:'Resta prestando', q:R`\(503-178\)`, s:[
     R`Unidades: \(3-8\) no alcanza. Las decenas tienen 0, así que el 5 de las centenas presta: queda 4`,
     R`Las decenas pasan a 10, prestan 1 a las unidades y quedan en 9. Las unidades pasan a 13`,
     R`\(13-8=5\) · \(9-7=2\) · \(4-1=3\)`,
     R`Resultado: \(325\). Verificación: \(325+178=503\) ✓`]},
   {t:'Cadena con negativos', q:R`\(-8+3-(-5)-10\)`, s:[
     R`Quita el doble signo: \(-(-5)=+5\). Queda \(-8+3+5-10\)`,
     R`Positivos: \(3+5=8\). Negativos: \(-8-10=-18\)`,
     R`Signos distintos: \(18-8=10\), con el signo del mayor (−): \(-10\)`]},
  ],
  qs:[
   {q:R`\(-7+3=\)`, o:['−4','4','−10','10'], e:'Signos distintos: 7 − 3 = 4 con el signo del 7 (−).', h:'Debes 7, pagas 3.'},
   {q:R`\(-5-6=\)`, o:['−11','−1','1','11'], e:'Mismo signo: se suman y queda −.', h:'Dos deudas.'},
   {q:R`\(4-(-9)=\)`, o:['13','−5','5','−13'], e:'Restar un negativo es sumar: 4 + 9.', h:'−(−) = +'},
   {q:R`\(-12+20=\)`, o:['8','−8','32','−32'], e:'20 − 12 = 8, signo del 20 (+).', h:'¿Quién tiene mayor valor absoluto?'},
   {q:R`\(345+278=\)`, o:['623','613','523','633'], e:'5+8 = 13 (llevo 1), 4+7+1 = 12 (llevo 1), 3+2+1 = 6.', h:'No olvides lo que llevas.'},
   {q:R`\(1000-437=\)`, o:['563','573','663','437'], e:'999 − 437 = 562; más 1 = 563.', h:'Usa 999 para no prestar.'},
   {q:R`\(-3-(-3)=\)`, o:['0','−6','6','9'], e:'−3 + 3 = 0.', h:'Quita el doble signo primero.'},
   {q:R`\(15-8+2-11=\)`, o:['−2','2','−4','36'], e:'Positivos 17, negativos −19: 17 − 19 = −2.', h:'Agrupa positivos y negativos.'},
  ]},

/* ---------------- MULTIPLICACIÓN Y DIVISIÓN ---------------- */
{ id:'mult-div', n:'Multiplicación y división', sub:'Tablas, algoritmo, ley de signos, división larga y residuo', tgt:'NODO_MULTIPLEX', lab:'drill', drill:'mult',
  req:['suma-resta'], uses:'Fracciones, potencias, factorizar, la regla de la potencia y la regla de la cadena', cites:['khan|Multiplicación y división'], see:['ley-signos'],
  lore: R`
  <div class="why">Multiplicar es una <b>suma repetida</b>: \(4\times3=3+3+3+3\). Dividir es <b>repartir</b> en partes iguales, o preguntar "¿cuántas veces cabe?". Estas dos operaciones aparecen en cada paso del álgebra y del cálculo.</div>

  <h3>Las tablas sin sufrir</h3>
  <div class="tscroll"><table class="t"><tr><th>Tabla</th><th>Truco</th><th>Ejemplo</th></tr>
   <tr><td>× 2</td><td>El doble: súmalo con sí mismo</td><td>\(2\times 37=37+37=74\)</td></tr>
   <tr><td>× 4</td><td>Doble del doble</td><td>\(4\times 13=2\times26=52\)</td></tr>
   <tr><td>× 5</td><td>Multiplica por 10 y saca la mitad</td><td>\(5\times 18=180\div2=90\)</td></tr>
   <tr><td>× 9</td><td>Por 10 y resta el número</td><td>\(9\times 7=70-7=63\)</td></tr>
   <tr><td>× 10, 100</td><td>Agrega ceros</td><td>\(34\times100=3400\)</td></tr>
   <tr><td>× 11 (dos cifras)</td><td>Separa las cifras y pon su suma en medio</td><td>\(11\times 36=3\,(3+6)\,6=396\)</td></tr></table></div>
  <p>Gracias a la propiedad conmutativa (\(7\times8=8\times7\)) solo tienes que memorizar la mitad de la tabla. Los que más se olvidan: \(6\times7=42\), \(6\times8=48\), \(7\times8=56\), \(7\times9=63\), \(8\times9=72\).</p>

  <h3>Propiedad distributiva: el truco mental más útil</h3>
  <div class="formula">\[a(b+c)=ab+ac\qquad a(b-c)=ab-ac\]</div>
  <p>\(7\times48=7\times(50-2)=350-14=336\). Esta misma propiedad es la que usas en álgebra para "quitar paréntesis".</p>

  <h3>Multiplicar números grandes</h3>
  <p>Descompón uno de los números: \(34\times27=34\times20+34\times7=680+238=918\). El algoritmo en columna hace exactamente esto, fila por fila.</p>

  <h3>Ley de los signos</h3>
  <div class="tscroll"><table class="t"><tr><th>×  ÷</th><th>+</th><th>−</th></tr>
   <tr><td><b>+</b></td><td>+</td><td>−</td></tr><tr><td><b>−</b></td><td>−</td><td>+</td></tr></table></div>
  <p><b>Signos iguales → positivo. Signos distintos → negativo.</b> Primero decides el signo, luego multiplicas sin signos.</p>
  <p>Con varios factores: <b>cuenta los negativos</b>. Cantidad par → +; impar → −. \((-4)(-3)(-2)\): tres negativos → negativo, \(4\cdot3\cdot2=24\) → \(-24\).</p>
  <div class="trap">La ley de signos de la multiplicación <b>no</b> se usa para sumar: \(-5-6=-11\), no +11. "Menos por menos da más" solo cuando se multiplica o divide.</div>

  <h3>División: las partes</h3>
  <div class="formula">\[\underbrace{D}_{\text{dividendo}}=\underbrace{d}_{\text{divisor}}\times\underbrace{q}_{\text{cociente}}+\underbrace{r}_{\text{residuo}}\qquad 0\le r\lt d\]</div>
  <p>\(85\div7\): el 7 cabe 12 veces (\(7\times12=84\)) y sobra 1. Entonces \(85=7\times12+1\).</p>

  <h3>División larga paso a paso</h3>
  <ol class="recipe">
   <li><b>Baja</b> las cifras del dividendo de izquierda a derecha hasta que el número sea mayor o igual que el divisor.</li>
   <li><b>¿Cuántas veces cabe?</b> Escribe esa cifra en el cociente.</li>
   <li><b>Multiplica</b> y <b>resta</b>. Lo que sobra queda abajo.</li>
   <li><b>Baja</b> la siguiente cifra y repite. Cuando no hay más cifras, lo que sobra es el residuo.</li>
  </ol>
  <div class="formula">\[1374\div6:\quad 13\div6=2\ (\text{sobra }1)\ \to\ 17\div6=2\ (\text{sobra }5)\ \to\ 54\div6=9\ (\text{sobra }0)\ \Rightarrow\ 229\]</div>

  <h3>Casos especiales</h3>
  <div class="formula">\[0\div5=0\qquad 5\div0=\text{no existe}\qquad a\div1=a\qquad a\div a=1\]</div>
  <div class="trap">Dividir por cero <b>no está definido</b>. Si \(5\div0=q\), tendría que ser \(0\times q=5\), y ningún número cumple eso. En cálculo vas a ver que "acercarse a dividir por cero" da los límites infinitos.</div>`,
  ex:[
   {t:'Multiplicación descomponiendo', q:R`\(34\times27\)`, s:[
     R`Descompón el 27: \(27=20+7\)`,
     R`\(34\times20=680\) (\(34\times2=68\), agrega el cero)`,
     R`\(34\times7=210+28=238\)`,
     R`Suma: \(680+238=918\)`]},
   {t:'División larga', q:R`\(1374\div6\)`, s:[
     R`El 1 no alcanza para 6; toma 13. \(6\times2=12\), sobra \(13-12=1\). Cociente: 2…`,
     R`Baja el 7: queda 17. \(6\times2=12\), sobra 5. Cociente: 22…`,
     R`Baja el 4: queda 54. \(6\times9=54\), sobra 0. Cociente: 229`,
     R`Verificación: \(6\times229=1374\) ✓ (residuo 0, división exacta)`]},
   {t:'Signos con varios factores', q:R`\((-4)(-3)(-2)\)`, s:[
     R`Cuenta negativos: 3 (impar) → el resultado es negativo`,
     R`Multiplica sin signos: \(4\cdot3=12\), \(12\cdot2=24\)`,
     R`Resultado: \(-24\)`]},
  ],
  qs:[
   {q:R`\((-6)(4)=\)`, o:['−24','24','−10','−2'], e:'Signos distintos → negativo.', h:'Ley de signos.'},
   {q:R`\((-8)(-5)=\)`, o:['40','−40','−13','3'], e:'Signos iguales → positivo.', h:'Menos por menos…'},
   {q:R`\(-36\div9=\)`, o:['−4','4','−27','−45'], e:'Signos distintos → negativo; 36 ÷ 9 = 4.', h:'Igual que multiplicar.'},
   {q:R`\(12\times15=\)`, o:['180','150','170','120'], e:'12 × 15 = 12 × 10 + 12 × 5 = 120 + 60.', h:'Descompón el 15.'},
   {q:R`\(7\times48=\)`, o:['336','326','346','288'], e:'7 × 50 − 7 × 2 = 350 − 14.', h:'48 = 50 − 2.'},
   {q:R`\(85\div7\) da…`, o:['Cociente 12, residuo 1','Cociente 11, residuo 8','Cociente 12, residuo 0','Cociente 13, residuo 1'], e:'7 × 12 = 84 y sobra 1. El residuo siempre es menor que el divisor.', h:'¿Cuántas veces cabe 7 en 85?'},
   {q:R`\(5\div0=\)`, o:['No está definido','0','5','∞ (es un número)'], e:'Ningún número multiplicado por 0 da 5.', h:'Prueba al revés: 0 × ? = 5.'},
   {q:R`\((-1)(-1)(-1)(-1)(-1)=\)`, o:['−1','1','−5','5'], e:'5 negativos (impar) → negativo.', h:'Cuenta los negativos.'},
  ]},

/* ---------------- JERARQUÍA ---------------- */
{ id:'jerarquia', n:'Orden de las operaciones', sub:'Paréntesis, potencias, × ÷, + − · signos de agrupación', tgt:'NODO_PRIORIDAD', lab:'drill', drill:'jer',
  req:['mult-div'], uses:'Evaluar cualquier fórmula, sustituir en funciones, usar la calculadora sin errores', cites:['khan|Orden de las operaciones'], see:['jerarquia'],
  lore: R`
  <div class="why">\(3+4\times2\), ¿es 14 o 11? Si cada persona eligiera su orden, la misma cuenta daría resultados distintos. La [[jerarquia|jerarquía de operaciones]] es el acuerdo mundial que hace que solo haya <b>una</b> respuesta correcta (11). La calculadora también la sigue.</div>

  <h3>El orden</h3>
  <ol class="recipe">
   <li><b>Pa</b>réntesis y signos de agrupación: ( ), [ ], { }, y todo lo que esté arriba o abajo de una raya de fracción.</li>
   <li><b>Po</b>tencias y raíces.</li>
   <li><b>Mu</b>ltiplicación y <b>Di</b>visión, <b>de izquierda a derecha</b> (tienen el mismo rango).</li>
   <li><b>S</b>uma y <b>Res</b>ta, <b>de izquierda a derecha</b> (tienen el mismo rango).</li>
  </ol>
  <p>Para acordarte: <b>PAPOMUDAS</b> (Paréntesis, Potencias, Multiplicación, División, Adición, Sustracción).</p>
  <div class="trap">Multiplicar no va "antes" que dividir: van juntas, en el orden en que aparecen. \(12\div3\times2=4\times2=8\), <b>no</b> \(12\div6=2\).</div>

  <h3>Signos de agrupación: de adentro hacia afuera</h3>
  <div class="formula">\[\begin{aligned}2[5-(3-7)]\div3&=2[5-(-4)]\div3&&\text{(paréntesis de adentro)}\\&=2[9]\div3&&\text{(corchete)}\\&=18\div3=6&&\text{(izquierda a derecha)}\end{aligned}\]</div>

  <h3>La raya de fracción es un paréntesis</h3>
  <p>\(\dfrac{12-2\cdot3}{4-1}\) significa \((12-2\cdot3)\div(4-1)\). Resuelve <b>todo</b> el numerador y <b>todo</b> el denominador por separado, y divide al final: \(\frac{6}{3}=2\).</p>
  <div class="tip">En la calculadora, si escribes <code>12−2×3÷4−1</code> sin paréntesis da otra cosa. Usa la plantilla de fracción o pon paréntesis.</div>

  <h3>La trampa del signo menos y la potencia</h3>
  <div class="formula">\[-3^2=-(3^2)=-9\qquad(-3)^2=(-3)(-3)=9\]</div>
  <p>La potencia va antes que el signo menos: en \(-3^2\) solo el 3 se eleva al cuadrado. Si quieres elevar el −3, necesitas paréntesis. Esto aparece todo el tiempo al reemplazar \(x=-3\) en \(x^2\): siempre escribe \((-3)^2\).</p>

  <h3>Procedimiento</h3>
  <ol class="recipe">
   <li>Busca el paréntesis más interno y resuélvelo completo (con este mismo orden adentro).</li>
   <li>Calcula potencias y raíces.</li>
   <li>Recorre de izquierda a derecha haciendo solo × y ÷.</li>
   <li>Recorre de izquierda a derecha haciendo + y −.</li>
   <li>Reescribe la expresión completa después de cada paso: así no se pierden signos.</li>
  </ol>`,
  ex:[
   {t:'Sin paréntesis', q:R`\(3+4\times2-6\div3\)`, s:[
     R`No hay paréntesis ni potencias. Pasa a × y ÷: \(4\times2=8\), \(6\div3=2\)`,
     R`Queda \(3+8-2\)`,
     R`Izquierda a derecha: \(11-2=9\)`]},
   {t:'Agrupaciones anidadas', q:R`\(2[5-(3-7)]\div3\)`, s:[
     R`Paréntesis interno: \(3-7=-4\)`,
     R`Corchete: \(5-(-4)=5+4=9\)`,
     R`Queda \(2\cdot9\div3\): izquierda a derecha, \(18\div3=6\)`]},
   {t:'Fracción y potencia', q:R`\(\dfrac{12-2\cdot3}{4-1}+2^3\)`, s:[
     R`Numerador: primero \(2\cdot3=6\), luego \(12-6=6\)`,
     R`Denominador: \(4-1=3\). La fracción vale \(\frac63=2\)`,
     R`Potencia: \(2^3=8\)`,
     R`Suma: \(2+8=10\)`]},
  ],
  qs:[
   {q:R`\(6+4\times3=\)`, o:['18','30','13','22'], e:'Primero 4 × 3 = 12, luego 6 + 12.', h:'× antes que +.'},
   {q:R`\(20-8\div4=\)`, o:['18','3','5','12'], e:'8 ÷ 4 = 2; 20 − 2 = 18.', h:'÷ antes que −.'},
   {q:R`\(12\div3\times2=\)`, o:['8','2','6','24'], e:'× y ÷ van de izquierda a derecha: 4 × 2.', h:'Mismo rango → izquierda a derecha.'},
   {q:R`\((5-2)^2=\)`, o:['9','21','1','23'], e:'Paréntesis primero: 3² = 9. (5² − 2² = 21 es otra cosa.)', h:'Paréntesis antes que la potencia.'},
   {q:R`\(-2^2=\)`, o:['−4','4','−2','0'], e:'Solo el 2 se eleva: −(2²) = −4.', h:'¿El signo está dentro de un paréntesis?'},
   {q:R`\(2+3(4-1)^2=\)`, o:['29','83','45','17'], e:'(3)² = 9; 3 · 9 = 27; 2 + 27 = 29.', h:'Paréntesis → potencia → × → +.'},
   {q:R`\(10-2\times(3+1)+6\div2=\)`, o:['5','35','−1','19'], e:'10 − 8 + 3 = 5.', h:'Resuelve el paréntesis y luego × y ÷.'},
   {q:R`\(\dfrac{18-3\cdot4}{2}+1=\)`, o:['4','31','10','3'], e:'Numerador 18 − 12 = 6; 6/2 = 3; 3 + 1 = 4.', h:'La raya de fracción agrupa.'},
  ]},

/* ---------------- PRIMOS, MCM, MCD ---------------- */
{ id:'primos', n:'Múltiplos, divisores, primos, MCM y MCD', sub:'Criterios de divisibilidad, factores primos, mínimo común múltiplo', tgt:'NODO_PRIMORDIAL', lab:'drill', drill:'mcm',
  req:['mult-div'], uses:'Simplificar y sumar fracciones, factorizar polinomios, fracciones parciales', cites:['khan|Factores y múltiplos'], see:['primo','mcm'],
  lore: R`
  <div class="why">Para <b>simplificar</b> una fracción necesitas el MCD, y para <b>sumar</b> fracciones necesitas el MCM. Además, descomponer en factores primos es exactamente la misma idea que factorizar polinomios en álgebra.</div>

  <h3>Múltiplos y divisores</h3>
  <ul><li><b>Múltiplos</b> de 6: lo que sale en su tabla: 6, 12, 18, 24, 30, … (infinitos).</li>
   <li><b>Divisores</b> de 12: los números que lo dividen exacto (residuo 0): 1, 2, 3, 4, 6, 12 (finitos).</li></ul>
  <p>"6 es divisor de 12" y "12 es múltiplo de 6" dicen lo mismo: \(12=6\times2\).</p>

  <h3>Criterios de divisibilidad</h3>
  <div class="tscroll"><table class="t"><tr><th>Divisible por</th><th>Si…</th><th>Ejemplo</th></tr>
   <tr><td>2</td><td>termina en 0, 2, 4, 6, 8 (es par)</td><td>348</td></tr>
   <tr><td>3</td><td>la suma de sus cifras es múltiplo de 3</td><td>471: 4+7+1 = 12 ✓</td></tr>
   <tr><td>4</td><td>sus dos últimas cifras son múltiplo de 4</td><td>1316: 16 ✓</td></tr>
   <tr><td>5</td><td>termina en 0 o 5</td><td>835</td></tr>
   <tr><td>6</td><td>es divisible por 2 y por 3</td><td>714</td></tr>
   <tr><td>9</td><td>la suma de sus cifras es múltiplo de 9</td><td>432: 4+3+2 = 9 ✓</td></tr>
   <tr><td>10</td><td>termina en 0</td><td>560</td></tr></table></div>

  <h3>Primos y compuestos</h3>
  <p>Un [[primo|número primo]] tiene exactamente dos divisores: 1 y él mismo. Los primos menores que 50:</p>
  <div class="formula">\[2,\ 3,\ 5,\ 7,\ 11,\ 13,\ 17,\ 19,\ 23,\ 29,\ 31,\ 37,\ 41,\ 43,\ 47\]</div>
  <p>Los demás (mayores que 1) son <b>compuestos</b>: se pueden partir en factores. El 1 no es ni primo ni compuesto, y el 2 es el único primo par.</p>
  <div class="trap">51 parece primo pero \(51=3\times17\) (5+1 = 6, divisible por 3). 91 tampoco: \(91=7\times13\). Siempre prueba con 2, 3, 5 y 7.</div>

  <h3>Descomposición en factores primos</h3>
  <p>Todo número compuesto se escribe de <b>una sola forma</b> como producto de primos. Método en columna: divide por el primo más pequeño posible hasta llegar a 1.</p>
  <div class="formula">\[\begin{array}{r|l}360&2\\180&2\\90&2\\45&3\\15&3\\5&5\\1&\end{array}\qquad 360=2^3\cdot3^2\cdot5\]</div>

  <h3>MCD y MCM</h3>
  <div class="tscroll"><table class="t"><tr><th></th><th>MCD (máximo común divisor)</th><th>MCM (mínimo común múltiplo)</th></tr>
   <tr><td>Qué es</td><td>El mayor número que divide a ambos</td><td>El menor número que es múltiplo de ambos</td></tr>
   <tr><td>Cómo</td><td>Primos <b>comunes</b> con el exponente <b>menor</b></td><td><b>Todos</b> los primos con el exponente <b>mayor</b></td></tr>
   <tr><td>Para qué</td><td>Simplificar fracciones</td><td>Sumar fracciones; "¿cuándo coinciden?"</td></tr></table></div>
  <div class="formula">\[48=2^4\cdot3\qquad36=2^2\cdot3^2\qquad\text{MCD}=2^2\cdot3=12\qquad\text{MCM}=2^4\cdot3^2=144\]</div>
  <div class="tip">Comprobación: \(\text{MCD}\times\text{MCM}=a\times b\). Aquí \(12\times144=1728=48\times36\) ✓</div>`,
  ex:[
   {t:'Factores primos', q:R`Descompón 360`, s:[
     R`360 es par: \(360\div2=180\), \(180\div2=90\), \(90\div2=45\)`,
     R`45 no es par; sus cifras suman 9 → divisible por 3: \(45\div3=15\), \(15\div3=5\)`,
     R`5 es primo: \(5\div5=1\)`,
     R`Cuenta: tres 2, dos 3, un 5 → \(360=2^3\cdot3^2\cdot5\)`]},
   {t:'MCD y MCM', q:R`MCD y MCM de 48 y 36`, s:[
     R`\(48=2\cdot2\cdot2\cdot2\cdot3=2^4\cdot3\)`,
     R`\(36=2\cdot2\cdot3\cdot3=2^2\cdot3^2\)`,
     R`MCD: comunes con el menor exponente → \(2^2\cdot3^1=12\)`,
     R`MCM: todos con el mayor exponente → \(2^4\cdot3^2=16\cdot9=144\)`]},
   {t:'Problema de MCM', q:'Un bus pasa cada 12 min y otro cada 18 min. Si salen juntos, ¿cuándo vuelven a coincidir?', s:[
     R`"Volver a coincidir" = el primer múltiplo común → MCM`,
     R`\(12=2^2\cdot3\), \(18=2\cdot3^2\)`,
     R`\(\text{MCM}=2^2\cdot3^2=36\) → coinciden a los <b>36 minutos</b>`]},
  ],
  qs:[
   {q:'¿Cuál es primo?', o:['29','27','21','51'], e:'27 = 3·9, 21 = 3·7, 51 = 3·17. El 29 solo se divide por 1 y 29.', h:'Prueba dividir por 3.'},
   {q:'MCD(12, 18) =', o:['6','36','3','2'], e:'12 = 2²·3, 18 = 2·3² → 2·3 = 6.', h:'El mayor que divide a los dos.'},
   {q:'MCM(4, 6) =', o:['12','24','2','10'], e:'Múltiplos de 4: 4, 8, 12…; de 6: 6, 12… → 12.', h:'El primero que aparece en las dos tablas.'},
   {q:'84 en factores primos:', o:['2²·3·7','2·3·14','4·21','2³·7'], e:'84 → 42 → 21 → 7 → 1 dividiendo por 2, 2, 3, 7. (14 y 4 no son primos.)', h:'Todos los factores deben ser primos.'},
   {q:'El número 1 es…', o:['Ni primo ni compuesto','Primo','Compuesto','Par'], e:'Un primo necesita exactamente dos divisores; el 1 tiene uno solo.', h:'¿Cuántos divisores tiene?'},
   {q:'¿Es 432 divisible por 9?', o:['Sí, porque 4 + 3 + 2 = 9','No, porque termina en 2','Sí, porque es par','No, porque no termina en 9'], e:'Criterio del 9: la suma de cifras es múltiplo de 9.', h:'Suma las cifras.'},
   {q:'MCM(8, 12) =', o:['24','96','4','48'], e:'2³ y 2²·3 → 2³·3 = 24.', h:'Todos los primos, exponente mayor.'},
   {q:'MCD(45, 60) =', o:['15','5','180','3'], e:'45 = 3²·5, 60 = 2²·3·5 → 3·5 = 15.', h:'Comunes, exponente menor.'},
  ]},

/* ---------------- FRACCIONES ---------------- */
{ id:'fracciones-base', n:'Fracciones desde cero', sub:'Equivalentes, simplificar, comparar, + − × ÷, números mixtos', tgt:'NODO_FRACTAL', lab:'drill', drill:'frac',
  req:['primos'], uses:'Exponentes fraccionarios, ecuaciones, evaluar integrales definidas (siempre dan fracciones)', cites:['khan|Fracciones'], see:['fraccion','mcm'],
  lore: R`
  <div class="why">Las fracciones son el tema donde más gente se rinde, y en cálculo están <b>en todas partes</b>: \(\int x^{1/2}dx=\frac23x^{3/2}\), áreas como \(\frac92\), volúmenes como \(\frac{8\pi}{3}\). Aquí las construimos desde la idea más simple.</div>

  <h3>Qué es una fracción</h3>
  <svg class="dg" viewBox="0 0 320 60">${[0,1,2,3].map(i=>`<rect x="${10+i*35}" y="10" width="35" height="30" fill="${i<3?'var(--tint-red)':'none'}" stroke="var(--ink)"/>`).join('')}<text x="160" y="32">→ tomo 3 de 4 partes iguales = 3/4</text></svg>
  <p>\(\frac ab\): el <b>denominador</b> b (abajo) dice en cuántas partes iguales se corta el entero; el <b>numerador</b> a (arriba) dice cuántas tomas. También es una división: \(\frac34=3\div4=0.75\).</p>
  <ul><li><b>Propia:</b> numerador menor (\(\frac34\)), vale menos que 1.</li>
   <li><b>Impropia:</b> numerador mayor o igual (\(\frac74\)), vale 1 o más.</li>
   <li><b>Número mixto:</b> entero + fracción: \(1\frac34=1+\frac34=\frac74\).</li></ul>

  <h3>Fracciones equivalentes y simplificar</h3>
  <p>Multiplicar o dividir <b>arriba y abajo por el mismo número</b> no cambia el valor: \(\frac12=\frac24=\frac36\) (la misma mitad de pizza en más pedazos).</p>
  <p><b>Simplificar</b> = dividir arriba y abajo por el MCD: \(\frac{18}{24}\), MCD = 6 → \(\frac{18\div6}{24\div6}=\frac34\). Si no conoces el MCD, divide por 2, 3, 5… hasta que no se pueda más.</p>
  <div class="trap">Solo se cancelan <b>factores</b> (cosas que multiplican), nunca sumandos: \(\frac{2+3}{2}\neq3\). Es \(\frac52\).</div>

  <h3>Sumar y restar</h3>
  <ol class="recipe">
   <li><b>Mismo denominador:</b> suma los numeradores y deja el denominador: \(\frac25+\frac15=\frac35\).</li>
   <li><b>Distinto denominador:</b> busca el MCM de los denominadores (denominador común).</li>
   <li>Convierte cada fracción: divide el MCM por su denominador y multiplica arriba y abajo por ese número.</li>
   <li>Suma los numeradores y <b>simplifica</b> al final.</li>
  </ol>
  <div class="formula">\[\frac23+\frac34=\frac{2\cdot4}{3\cdot4}+\frac{3\cdot3}{4\cdot3}=\frac{8}{12}+\frac{9}{12}=\frac{17}{12}\]</div>
  <p>Atajo que siempre funciona (aunque no dé el MCM): \(\dfrac ab\pm\dfrac cd=\dfrac{ad\pm bc}{bd}\).</p>
  <div class="trap">\(\frac12+\frac13\neq\frac25\). Nunca sumes denominadores. Medio más un tercio es más que medio, y \(\frac25\) es menos que medio.</div>

  <h3>Multiplicar: derecho</h3>
  <div class="formula">\[\frac ab\cdot\frac cd=\frac{a\cdot c}{b\cdot d}\qquad\frac35\cdot\frac{10}{9}=\frac{30}{45}=\frac23\]</div>
  <p>Truco: simplifica <b>antes</b> de multiplicar (cruzado): el 5 con el 10 → 1 y 2; el 3 con el 9 → 1 y 3: \(\frac11\cdot\frac23=\frac23\).</p>
  <p>Fracción de un número: \(\frac23\) de 45 \(=\frac23\cdot45=\frac{90}{3}=30\) (divide por 3 y multiplica por 2).</p>

  <h3>Dividir: invierte la segunda y multiplica</h3>
  <div class="formula">\[\frac ab\div\frac cd=\frac ab\cdot\frac dc\qquad\frac34\div\frac12=\frac34\cdot\frac21=\frac64=\frac32\]</div>
  <p>Por qué: dividir por \(\frac12\) es preguntar "¿cuántas mitades caben?", y en algo caben el doble de mitades. Dividir por \(\frac12\) = multiplicar por 2.</p>

  <h3>Mixto ↔ impropia</h3>
  <div class="formula">\[2\tfrac13=\frac{2\cdot3+1}{3}=\frac73\qquad\frac{19}{4}=4\tfrac34\ \ (19\div4=4,\text{ sobra }3)\]</div>

  <h3>Comparar fracciones</h3>
  <p>Multiplica en cruz: para \(\frac58\) vs \(\frac35\) compara \(5\cdot5=25\) con \(8\cdot3=24\). Como \(25>24\), \(\frac58>\frac35\).</p>

  <h3>Fracciones con negativos</h3>
  <div class="formula">\[-\frac34=\frac{-3}{4}=\frac{3}{-4}\qquad\frac{-3}{-4}=\frac34\]</div>`,
  ex:[
   {t:'Suma con distinto denominador', q:R`\(\frac23+\frac34\)`, s:[
     R`MCM(3, 4) = 12`,
     R`\(\frac23\): \(12\div3=4\) → \(\frac{2\cdot4}{3\cdot4}=\frac{8}{12}\)`,
     R`\(\frac34\): \(12\div4=3\) → \(\frac{3\cdot3}{4\cdot3}=\frac{9}{12}\)`,
     R`\(\frac{8+9}{12}=\frac{17}{12}=1\frac{5}{12}\) (17 no comparte factores con 12)`]},
   {t:'División', q:R`\(\frac56\div\frac{10}{9}\)`, s:[
     R`Invierte la segunda: \(\frac56\cdot\frac{9}{10}\)`,
     R`Simplifica cruzado: 5 y 10 → 1 y 2; 6 y 9 → 2 y 3`,
     R`\(\frac12\cdot\frac32=\frac34\)`]},
   {t:'Mixto menos fracción', q:R`\(2\frac13-\frac34\)`, s:[
     R`Pasa a impropia: \(2\frac13=\frac{2\cdot3+1}{3}=\frac73\)`,
     R`MCM(3, 4) = 12: \(\frac73=\frac{28}{12}\), \(\frac34=\frac{9}{12}\)`,
     R`\(\frac{28-9}{12}=\frac{19}{12}=1\frac{7}{12}\)`]},
  ],
  qs:[
   {q:R`Simplifica totalmente \(\frac{18}{24}\)`, o:[R`\(\frac34\)`,R`\(\frac{9}{12}\)`,R`\(\frac23\)`,R`\(\frac68\)`], e:'MCD = 6. (9/12 y 6/8 valen lo mismo pero se pueden simplificar más.)', h:'Divide por el MCD.'},
   {q:R`\(\frac12+\frac13=\)`, o:[R`\(\frac56\)`,R`\(\frac25\)`,R`\(\frac26\)`,R`\(\frac16\)`], e:'3/6 + 2/6 = 5/6. Nunca se suman los denominadores.', h:'Denominador común 6.'},
   {q:R`\(\frac35\cdot\frac{10}{9}=\)`, o:[R`\(\frac23\)`,R`\(\frac{13}{14}\)`,R`\(\frac56\)`,R`\(\frac{3}{2}\)`], e:'30/45 = 2/3.', h:'Arriba por arriba, abajo por abajo.'},
   {q:R`\(\frac34\div\frac12=\)`, o:[R`\(\frac32\)`,R`\(\frac38\)`,R`\(\frac23\)`,R`\(\frac12\)`], e:'3/4 · 2/1 = 6/4 = 3/2.', h:'Invierte la segunda.'},
   {q:R`\(\frac74\) como número mixto:`, o:[R`\(1\frac34\)`,R`\(1\frac47\)`,R`\(7\frac14\)`,R`\(3\frac14\)`], e:'7 ÷ 4 = 1 y sobran 3.', h:'¿Cuántos enteros caben?'},
   {q:R`\(\frac23\) de 45 es:`, o:['30','15','67.5','90'], e:'45 ÷ 3 = 15; 15 · 2 = 30.', h:'Divide por el de abajo, multiplica por el de arriba.'},
   {q:R`¿Cuál es mayor: \(\frac58\) o \(\frac35\)?`, o:[R`\(\frac58\)`,R`\(\frac35\)`,'Son iguales','No se pueden comparar'], e:'En cruz: 25 > 24.', h:'Multiplica en cruz.'},
   {q:R`\(\frac56-\frac14=\)`, o:[R`\(\frac{7}{12}\)`,R`\(\frac{4}{2}\)`,R`\(\frac12\)`,R`\(\frac23\)`], e:'10/12 − 3/12 = 7/12.', h:'MCM(6, 4) = 12.'},
  ]},

/* ---------------- DECIMALES Y PORCENTAJES ---------------- */
{ id:'decimales', n:'Decimales y porcentajes', sub:'Valor posicional, operar con la coma, fracción ↔ decimal, %', tgt:'NODO_DECIMAL', lab:'drill', drill:'dec',
  req:['fracciones-base'], uses:'Resultados de la calculadora, aproximaciones, problemas de aplicación', cites:['khan|Decimales'], see:['porcentaje'],
  lore: R`
  <div class="why">La calculadora te devuelve decimales (43.14…) y el profe a veces pide el resultado exacto (\(\frac{206\pi}{15}\)). Tienes que poder pasar de uno al otro y saber si el número tiene sentido.</div>

  <h3>Valor posicional</h3>
  <div class="tscroll"><table class="t"><tr><th>Centenas</th><th>Decenas</th><th>Unidades</th><th>,</th><th>Décimas</th><th>Centésimas</th><th>Milésimas</th></tr>
   <tr><td>3</td><td>4</td><td>5</td><td>.</td><td>6</td><td>7</td><td>8</td></tr></table></div>
  <p>\(0.1=\frac1{10}\), \(0.01=\frac1{100}\), \(0.001=\frac1{1000}\). Cada lugar a la derecha vale 10 veces menos.</p>

  <h3>Operar con decimales</h3>
  <ol class="recipe">
   <li><b>Sumar / restar:</b> alinea las comas (completa con ceros) y opera normal: \(3.75+12.40=16.15\).</li>
   <li><b>Multiplicar:</b> multiplica sin comas y luego pon tantos decimales como sumen los dos factores: \(2.5\times0.04\) → \(25\times4=100\), 1 + 2 = 3 decimales → \(0.100=0.1\).</li>
   <li><b>Dividir:</b> corre la coma del divisor hasta que sea entero, y corre la del dividendo lo mismo: \(6\div0.2=60\div2=30\).</li>
   <li><b>Por 10, 100, 1000:</b> la coma se corre a la derecha 1, 2, 3 lugares. Al dividir, a la izquierda.</li>
  </ol>
  <div class="trap">Multiplicar por un decimal menor que 1 <b>achica</b> el número: \(80\times0.5=40\). Dividir por un decimal menor que 1 lo <b>agranda</b>: \(6\div0.2=30\).</div>

  <h3>Fracción ↔ decimal</h3>
  <ul><li><b>Fracción → decimal:</b> divide arriba entre abajo: \(\frac38=3\div8=0.375\). Si se repite, es periódico: \(\frac13=0.333\ldots=0.\overline3\).</li>
   <li><b>Decimal → fracción:</b> el número sin coma sobre 10, 100, 1000 según los decimales, y simplifica: \(0.125=\frac{125}{1000}=\frac18\).</li></ul>
  <div class="tscroll"><table class="t"><tr><th>Fracción</th><th>\(\frac12\)</th><th>\(\frac14\)</th><th>\(\frac34\)</th><th>\(\frac15\)</th><th>\(\frac18\)</th><th>\(\frac13\)</th><th>\(\frac23\)</th></tr>
   <tr><td>Decimal</td><td>0.5</td><td>0.25</td><td>0.75</td><td>0.2</td><td>0.125</td><td>0.333…</td><td>0.666…</td></tr>
   <tr><td>%</td><td>50 %</td><td>25 %</td><td>75 %</td><td>20 %</td><td>12.5 %</td><td>33.3 %</td><td>66.7 %</td></tr></table></div>

  <h3>Porcentajes</h3>
  <p>"Por ciento" = de cada 100: \(p\,\%=\frac{p}{100}\).</p>
  <div class="tscroll"><table class="t"><tr><th>Pregunta</th><th>Cómo</th><th>Ejemplo</th></tr>
   <tr><td>¿Cuánto es p % de N?</td><td>\(\frac{p}{100}\cdot N\)</td><td>20 % de 150 = 0.2 · 150 = 30</td></tr>
   <tr><td>¿Qué % es a de b?</td><td>\(\frac ab\cdot100\)</td><td>18 de 24: 0.75 · 100 = 75 %</td></tr>
   <tr><td>Aumentar p %</td><td>\(N\cdot(1+\frac p{100})\)</td><td>200 + 15 % = 200 · 1.15 = 230</td></tr>
   <tr><td>Descontar p %</td><td>\(N\cdot(1-\frac p{100})\)</td><td>80.000 − 30 % = 80.000 · 0.7 = 56.000</td></tr></table></div>
  <div class="tip">Cálculo mental: 10 % = corre la coma un lugar (10 % de 350 = 35). 5 % = la mitad de eso. 20 % = el doble. 25 % = dividir por 4. 50 % = la mitad.</div>
  <div class="trap">Subir 10 % y luego bajar 10 % <b>no</b> te deja igual: \(100\to110\to99\). Cada porcentaje se calcula sobre el valor de ese momento.</div>`,
  ex:[
   {t:'Multiplicar decimales', q:R`\(2.5\times0.04\)`, s:[
     R`Sin comas: \(25\times4=100\)`,
     R`Decimales: 2.5 tiene 1, 0.04 tiene 2 → en total 3`,
     R`Corre 3 lugares desde la derecha: \(100\to0.100=0.1\)`]},
   {t:'Descuento', q:'Unos tenis cuestan $80.000 con 30 % de descuento. ¿Cuánto pagas?', s:[
     R`El descuento: 10 % de 80.000 = 8.000, entonces 30 % = 24.000`,
     R`Pagas \(80.000-24.000=56.000\)`,
     R`Directo: pagas el 70 %: \(80.000\times0.7=56.000\)`]},
   {t:'¿Qué porcentaje?', q:'Respondiste bien 18 de 24 preguntas. ¿Qué porcentaje es?', s:[
     R`Fracción: \(\frac{18}{24}=\frac34\)`,
     R`Decimal: \(3\div4=0.75\)`,
     R`Por 100: \(75\,\%\)`]},
  ],
  qs:[
   {q:R`\(0.4+0.25=\)`, o:['0.65','0.29','0.425','6.5'], e:'0.40 + 0.25 alineando comas.', h:'Completa con un cero.'},
   {q:R`\(1.2\times0.3=\)`, o:['0.36','3.6','0.036','36'], e:'12 · 3 = 36 con 2 decimales.', h:'Cuenta los decimales.'},
   {q:'20 % de 150 =', o:['30','20','7.5','300'], e:'10 % es 15, el doble es 30.', h:'10 % = correr la coma.'},
   {q:R`\(\frac38\) en decimal:`, o:['0.375','0.0375','2.67','0.83'], e:'3 ÷ 8 = 0.375.', h:'Divide arriba entre abajo.'},
   {q:R`\(6\div0.2=\)`, o:['30','3','1.2','0.3'], e:'Corre las comas: 60 ÷ 2.', h:'Dividir por algo menor que 1 agranda.'},
   {q:'$50.000 con 15 % de descuento:', o:['$42.500','$35.000','$7.500','$57.500'], e:'50.000 · 0.85 = 42.500.', h:'Pagas el 85 %.'},
   {q:'45 de 60 es:', o:['75 %','45 %','60 %','133 %'], e:'45/60 = 3/4 = 75 %.', h:'Simplifica la fracción.'},
   {q:'0.125 como fracción:', o:[R`\(\frac18\)`,R`\(\frac1{125}\)`,R`\(\frac{12}{5}\)`,R`\(\frac14\)`], e:'125/1000 = 1/8.', h:'Tres decimales → sobre 1000.'},
  ]},

/* ---------------- PROPORCIONES ---------------- */
{ id:'proporciones', n:'Razones, proporciones y regla de tres', sub:'Producto cruzado, directa e inversa, conversión de unidades', tgt:'NODO_RAZON', lab:'drill', drill:'prop',
  req:['decimales'], uses:'Triángulos semejantes (razones relacionadas), conversión de unidades en física, pendiente', cites:['khan|Razones y proporciones'], see:['regla-tres'],
  lore: R`
  <div class="why">La mitad de los problemas "de la vida real" son una regla de tres. En cálculo aparece en triángulos semejantes (razones relacionadas), en pendientes y cada vez que conviertes unidades.</div>

  <h3>Razón y proporción</h3>
  <p>Una <b>razón</b> compara dos cantidades dividiendo: 12 hombres y 18 mujeres están en razón \(12:18=\frac{12}{18}=\frac23\) (2 por cada 3).</p>
  <p>Una <b>proporción</b> es una igualdad de razones: \(\frac ab=\frac cd\). Su propiedad clave es el <b>producto cruzado</b>:</p>
  <div class="formula">\[\frac ab=\frac cd\iff a\cdot d=b\cdot c\qquad\frac x6=\frac{10}{15}\Rightarrow15x=60\Rightarrow x=4\]</div>

  <h3>Directa o inversa: la pregunta que decide todo</h3>
  <div class="tscroll"><table class="t"><tr><th></th><th>Directa</th><th>Inversa</th></tr>
   <tr><td>Cómo se reconoce</td><td>Si una <b>sube</b>, la otra <b>sube</b></td><td>Si una <b>sube</b>, la otra <b>baja</b></td></tr>
   <tr><td>Ejemplos</td><td>kilos y precio; horas y salario; distancia y gasolina</td><td>obreros y días; velocidad y tiempo; grifos y horas</td></tr>
   <tr><td>Qué es constante</td><td>el cociente \(\frac yx\)</td><td>el producto \(x\cdot y\)</td></tr></table></div>

  <h3>Regla de tres directa</h3>
  <div class="formula">\[\begin{array}{ccc}3\text{ cuadernos}&\to&7.500\\8\text{ cuadernos}&\to&x\end{array}\qquad x=\frac{8\cdot7.500}{3}=20.000\]</div>
  <p>Multiplica <b>en cruz</b> (los dos datos de la diagonal) y divide por el que queda.</p>

  <h3>Regla de tres inversa</h3>
  <div class="formula">\[\begin{array}{ccc}4\text{ obreros}&\to&12\text{ días}\\6\text{ obreros}&\to&x\end{array}\qquad x=\frac{4\cdot12}{6}=8\text{ días}\]</div>
  <p>Multiplica <b>en línea</b> (los dos datos de la misma fila) y divide por el otro. Tiene sentido: más obreros → menos días.</p>
  <div class="tip">Antes de calcular, pregunta: "si hay más ___, ¿habrá más o menos ___?". Después, revisa si el resultado tiene sentido.</div>

  <h3>Convertir unidades: multiplicar por 1</h3>
  <p>Un factor de conversión vale 1 (\(\frac{1000\text{ m}}{1\text{ km}}=1\)), así que multiplicar por él no cambia la cantidad, solo la unidad. Las unidades se cancelan como factores:</p>
  <div class="formula">\[72\,\frac{\text{km}}{\text{h}}\cdot\frac{1000\text{ m}}{1\text{ km}}\cdot\frac{1\text{ h}}{3600\text{ s}}=\frac{72000}{3600}\,\frac{\text{m}}{\text{s}}=20\,\frac{\text{m}}{\text{s}}\]</div>
  <p>Atajo: km/h → m/s divide por 3.6; m/s → km/h multiplica por 3.6.</p>

  <h3>Escalas</h3>
  <p>Un mapa 1:50.000 significa 1 cm del mapa = 50.000 cm reales = 500 m. Entonces 3 cm = 150.000 cm = 1.5 km.</p>`,
  ex:[
   {t:'Directa', q:'3 cuadernos cuestan $7.500. ¿Cuánto cuestan 8?', s:[
     R`Más cuadernos → más plata: <b>directa</b>`,
     R`\(\frac{3}{7500}=\frac{8}{x}\Rightarrow3x=8\cdot7500=60000\)`,
     R`\(x=\frac{60000}{3}=20000\) → $20.000. (Cada uno vale 2.500 y 8 · 2.500 = 20.000 ✓)`]},
   {t:'Inversa', q:'4 obreros terminan una obra en 12 días. ¿En cuántos días la terminan 6 obreros?', s:[
     R`Más obreros → menos días: <b>inversa</b>`,
     R`El trabajo total es constante: \(4\cdot12=48\) días-obrero`,
     R`\(6\cdot x=48\Rightarrow x=8\) días`]},
   {t:'Unidades', q:R`Convierte \(72\) km/h a m/s`, s:[
     R`km → m: multiplica por \(\frac{1000\text{ m}}{1\text{ km}}\)`,
     R`h → s: multiplica por \(\frac{1\text{ h}}{3600\text{ s}}\)`,
     R`\(\frac{72\cdot1000}{3600}=\frac{72000}{3600}=20\) m/s`]},
  ],
  qs:[
   {q:R`\(\frac x6=\frac{10}{15}\Rightarrow x=\)`, o:['4','9','25','60'], e:'15x = 60 → x = 4.', h:'Producto cruzado.'},
   {q:'5 kg cuestan $12.000. ¿Cuánto cuestan 8 kg?', o:['$19.200','$7.500','$15.000','$96.000'], e:'1 kg = 2.400; 8 · 2.400 = 19.200.', h:'Directa.'},
   {q:'6 grifos llenan un tanque en 4 h. ¿8 grifos?', o:['3 h','5.33 h','2 h','32 h'], e:'Inversa: 6 · 4 = 24 → 24 ÷ 8 = 3.', h:'Más grifos, menos tiempo.'},
   {q:'La razón de 12 a 18 simplificada es:', o:['2:3','3:2','1:6','6:1'], e:'12/18 = 2/3.', h:'Simplifica como fracción.'},
   {q:'2 km en metros:', o:['2000','200','20','0.002'], e:'1 km = 1000 m.', h:'Kilo = mil.'},
   {q:'90 km/h en m/s:', o:['25','90','324','15'], e:'90 ÷ 3.6 = 25.', h:'Divide por 3.6.'},
   {q:'Para un recorrido fijo, velocidad y tiempo son proporcionales en forma…', o:['Inversa','Directa','Ninguna','Ambas'], e:'Más rápido → menos tiempo.', h:'¿Si una sube la otra baja?'},
   {q:'En un mapa 1:50.000, 3 cm representan:', o:['1.5 km','150 km','15 km','0.15 km'], e:'150.000 cm = 1.500 m = 1.5 km.', h:'1 cm = 50.000 cm reales.'},
  ]},

/* ---------------- POTENCIAS Y RAÍCES CON NÚMEROS ---------------- */
{ id:'potencias-base', n:'Potencias y raíces con números', sub:'Cuadrados, cubos, signos, raíces exactas, notación científica', tgt:'NODO_EXPONENCIAL', lab:'drill', drill:'pot',
  req:['jerarquia','fracciones-base'], uses:'Leyes de los exponentes con letras, la regla de la potencia, fórmula general, distancias', cites:['khan|Exponentes y radicales'], see:['notacion-cientifica','exponentes'],
  lore: R`
  <div class="why">Antes de las [[exponentes|leyes de los exponentes]] con letras, conviene manejar las potencias con números. Los cuadrados perfectos te ahorran la calculadora al simplificar raíces, y los signos de las potencias son una fuente clásica de errores.</div>

  <h3>Qué es una potencia</h3>
  <div class="formula">\[a^n=\underbrace{a\cdot a\cdots a}_{n\text{ veces}}\qquad2^5=2\cdot2\cdot2\cdot2\cdot2=32\]</div>
  <p>a es la <b>base</b> y n el <b>exponente</b>. \(a^2\) se lee "a al cuadrado" (área de un cuadrado de lado a) y \(a^3\) "a al cubo" (volumen de un cubo).</p>
  <div class="trap">\(2^5\neq2\times5\). La potencia es multiplicar la base por sí misma, no por el exponente.</div>

  <h3>Para memorizar</h3>
  <div class="tscroll"><table class="t"><tr><th>n</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th></tr>
   <tr><td>\(n^2\)</td><td>1</td><td>4</td><td>9</td><td>16</td><td>25</td><td>36</td><td>49</td><td>64</td><td>81</td><td>100</td><td>121</td><td>144</td><td>169</td><td>196</td><td>225</td></tr>
   <tr><td>\(n^3\)</td><td>1</td><td>8</td><td>27</td><td>64</td><td>125</td><td colspan="10"></td></tr>
   <tr><td>\(2^n\)</td><td>2</td><td>4</td><td>8</td><td>16</td><td>32</td><td>64</td><td>128</td><td>256</td><td>512</td><td>1024</td><td colspan="5"></td></tr></table></div>

  <h3>Signos en las potencias</h3>
  <ul><li>Base negativa con exponente <b>par</b> → positivo: \((-2)^4=16\).</li>
   <li>Base negativa con exponente <b>impar</b> → negativo: \((-2)^3=-8\).</li>
   <li>Sin paréntesis el signo no se eleva: \(-2^4=-16\) (ver orden de operaciones).</li></ul>

  <h3>Exponente 0, 1 y negativos (con números)</h3>
  <div class="formula">\[a^1=a\qquad a^0=1\ (a\neq0)\qquad a^{-n}=\frac1{a^n}:\ \ 2^{-3}=\frac18,\ \ 10^{-2}=\frac1{100}=0.01\]</div>
  <p>Mira el patrón: \(2^3=8,\ 2^2=4,\ 2^1=2,\ 2^0=1,\ 2^{-1}=\frac12\). Cada paso hacia abajo divide por 2.</p>

  <h3>Raíces: la operación inversa</h3>
  <div class="formula">\[\sqrt{b}=a\iff a^2=b\ \ (a\ge0)\qquad\sqrt[3]{b}=a\iff a^3=b\]</div>
  <p>\(\sqrt{144}=12\) porque \(12^2=144\). \(\sqrt[3]{-27}=-3\) porque \((-3)^3=-27\).</p>
  <div class="trap">\(\sqrt{-9}\) no existe en los reales (ningún número al cuadrado da negativo). Pero \(\sqrt[3]{-8}=-2\) sí existe: las raíces de índice impar aceptan negativos.</div>

  <h3>Simplificar raíces</h3>
  <ol class="recipe">
   <li>Busca el cuadrado perfecto <b>más grande</b> que divida al número: \(72=36\cdot2\).</li>
   <li>Separa: \(\sqrt{72}=\sqrt{36}\cdot\sqrt2\).</li>
   <li>Saca la raíz exacta: \(6\sqrt2\).</li>
  </ol>
  <div class="trap">\(\sqrt{9+16}=\sqrt{25}=5\), no \(\sqrt9+\sqrt{16}=7\). La raíz se reparte en productos, nunca en sumas.</div>

  <h3>Potencias de 10 y notación científica</h3>
  <p>\(10^n\) es un 1 con n ceros; \(10^{-n}\) es correr la coma n lugares a la izquierda. La [[notacion-cientifica|notación científica]] escribe un número como \(a\times10^n\) con \(1\le a<10\):</p>
  <div class="formula">\[4500=4.5\times10^3\qquad0.00042=4.2\times10^{-4}\qquad(3\times10^5)(2\times10^3)=6\times10^8\]</div>
  <p>Así muestra la calculadora los números muy grandes o muy pequeños: <code>4.2×10⁻⁴</code> o <code>4.2E-4</code>.</p>`,
  ex:[
   {t:'Signos', q:R`\((-3)^4\) y \(-3^4\)`, s:[
     R`\((-3)^4=(-3)(-3)(-3)(-3)\): cuatro negativos (par) → positivo: \(81\)`,
     R`\(-3^4\): la potencia va primero y solo afecta al 3: \(-(81)=-81\)`]},
   {t:'Simplificar una raíz', q:R`\(\sqrt{72}\)`, s:[
     R`Cuadrados perfectos que dividen a 72: 4, 9, 36. El más grande: 36`,
     R`\(72=36\cdot2\Rightarrow\sqrt{72}=\sqrt{36}\sqrt2\)`,
     R`\(=6\sqrt2\approx8.49\)`]},
   {t:'Notación científica', q:R`Escribe \(0.00042\) y calcula \((3\times10^5)(2\times10^3)\)`, s:[
     R`Corre la coma hasta que quede un número entre 1 y 10: 4.2 (4 lugares a la derecha) → \(4.2\times10^{-4}\)`,
     R`Producto: multiplica los números \(3\cdot2=6\) y suma los exponentes \(5+3=8\)`,
     R`\(6\times10^8\)`]},
  ],
  qs:[
   {q:R`\(2^5=\)`, o:['32','10','25','64'], e:'2·2·2·2·2 = 32.', h:'No es 2 × 5.'},
   {q:R`\((-2)^3=\)`, o:['−8','8','−6','6'], e:'Exponente impar con base negativa → negativo.', h:'Cuenta los negativos.'},
   {q:R`\(\sqrt{144}=\)`, o:['12','72','14','1.44'], e:'12² = 144.', h:'¿Qué número al cuadrado da 144?'},
   {q:R`\(\sqrt[3]{-27}=\)`, o:['−3','3','No existe','−9'], e:'(−3)³ = −27. La raíz cúbica acepta negativos.', h:'Índice impar.'},
   {q:R`\(10^0=\)`, o:['1','0','10','No existe'], e:'Todo número distinto de 0 elevado a 0 da 1.', h:'Mira el patrón 10², 10¹, 10⁰.'},
   {q:R`\(\sqrt{50}\) simplificada:`, o:[R`\(5\sqrt2\)`,R`\(25\sqrt2\)`,R`\(2\sqrt5\)`,R`\(10\sqrt5\)`], e:'50 = 25 · 2 → √25 · √2 = 5√2.', h:'Busca un cuadrado perfecto.'},
   {q:R`\(4.5\times10^3=\)`, o:['4500','450','45000','0.0045'], e:'Corre la coma 3 lugares a la derecha.', h:'10³ = 1000.'},
   {q:R`\(\sqrt{9+16}=\)`, o:['5','7','25','12'], e:'Primero la suma: √25 = 5. (√9 + √16 = 7 es un error común.)', h:'La raíz no se reparte en sumas.'},
  ]},

/* ---------------- CHECKPOINT ARITMÉTICA ---------------- */
{ id:'bossA', n:'Checkpoint: Aritmética', sub:'Mixto · signos, orden, fracciones, %, proporciones · 10 min', tgt:'CALCULISTA_SUPREMO', boss:true, time:10*60, hearts:4,
  req:['potencias-base','proporciones'], uses:'Álgebra: todo lo que sigue es aritmética con letras',
  lore: R`
  <div class="why">Todo mezclado y sin calculadora. Si pasas este checkpoint, tienes la base para el álgebra. Si fallas un tipo de pregunta, vuelve a esa sección y usa el <b>Simulador</b> (ejercicios infinitos) hasta que salga solo.</div>
  <h3>Lista de chequeo antes de responder</h3>
  <ol class="recipe">
   <li><b>¿Hay dos signos seguidos?</b> Quítalos primero: −(−) = +, +(−) = −.</li>
   <li><b>¿Varias operaciones?</b> PAPOMUDAS, de adentro hacia afuera.</li>
   <li><b>¿Sumar fracciones?</b> Denominador común (MCM). ¿Multiplicar? Directo. ¿Dividir? Invierte la segunda.</li>
   <li><b>¿Porcentaje?</b> p % = p/100. Descuento: × (1 − p/100).</li>
   <li><b>¿Regla de tres?</b> Pregunta si es directa o inversa antes de multiplicar.</li>
   <li><b>¿Tiene sentido el resultado?</b> Estima: si 8 cuadernos te dan más baratos que 3, algo salió mal.</li>
  </ol>`,
  ex:[],
  qs:[
   {q:R`\(-4+7\times2=\)`, o:['10','6','−22','22'], e:'7 × 2 = 14; −4 + 14 = 10.', h:'× antes que +.'},
   {q:R`\(\frac34-\frac23=\)`, o:[R`\(\frac1{12}\)`,R`\(\frac17\)`,R`\(\frac5{12}\)`,R`\(-\frac1{12}\)`], e:'9/12 − 8/12 = 1/12.', h:'MCM(4, 3) = 12.'},
   {q:'25 % de 360 =', o:['90','36','25','9'], e:'360 ÷ 4 = 90.', h:'25 % = un cuarto.'},
   {q:'MCM(6, 10) =', o:['30','60','2','16'], e:'2·3 y 2·5 → 2·3·5 = 30.', h:'Todos los primos, exponente mayor.'},
   {q:R`\((-3)(-4)-5=\)`, o:['7','−17','17','−7'], e:'12 − 5 = 7.', h:'Primero el producto.'},
   {q:R`\(\sqrt{81}+2^3=\)`, o:['17','14','89','25'], e:'9 + 8 = 17.', h:'Raíz y potencia por separado.'},
   {q:R`Simplifica \(\frac{45}{75}\)`, o:[R`\(\frac35\)`,R`\(\frac9{15}\)`,R`\(\frac{15}{25}\)`,R`\(\frac{5}{3}\)`], e:'MCD = 15.', h:'Divide por el MCD.'},
   {q:'12 obreros tardan 10 días. ¿Cuántos días tardan 15?', o:['8','12.5','13','7'], e:'Inversa: 120 ÷ 15 = 8.', h:'Más obreros, menos días.'},
   {q:R`\(0.6\div0.03=\)`, o:['20','0.2','2','200'], e:'60 ÷ 3 = 20.', h:'Corre las comas dos lugares.'},
   {q:R`\(2-3(1-4)=\)`, o:['11','−7','3','−1'], e:'1 − 4 = −3; −3 · (−3) = 9; 2 + 9 = 11.', h:'Paréntesis, luego ×, luego +.'},
  ]},

/* ---------------- INTRODUCCIÓN AL ÁLGEBRA ---------------- */
{ id:'algebra-intro', n:'El lenguaje del álgebra', sub:'Variables, términos semejantes, evaluar, ecuaciones de primer grado', tgt:'NODO_INCOGNITA', lab:'drill', drill:'alg',
  req:['bossA'], uses:'Todo el álgebra: exponentes, factorización, ecuaciones, funciones', cites:['khan|Introducción al álgebra'], see:['variable'],
  lore: R`
  <div class="why">El álgebra es <b>aritmética con letras</b>. Las letras son cajas que guardan números que todavía no conoces o que pueden cambiar. Todas las reglas que ya sabes (signos, orden, fracciones) funcionan exactamente igual.</div>

  <h3>Qué es una variable</h3>
  <p>En \(3x+2\), la x es una <b>variable</b>: un número cualquiera. Si \(x=4\), vale \(3\cdot4+2=14\); si \(x=-1\), vale \(-1\). Entre un número y una letra hay una multiplicación escondida: \(3x=3\cdot x\).</p>

  <h3>Traducir del español al álgebra</h3>
  <div class="tscroll"><table class="t"><tr><th>Español</th><th>Álgebra</th></tr>
   <tr><td>un número aumentado en 5</td><td>\(x+5\)</td></tr><tr><td>el doble de un número</td><td>\(2x\)</td></tr>
   <tr><td>la mitad de un número</td><td>\(\frac x2\)</td></tr><tr><td>el cuadrado de un número</td><td>\(x^2\)</td></tr>
   <tr><td>al triple de un número le restas 4</td><td>\(3x-4\)</td></tr><tr><td>el triple de (un número menos 4)</td><td>\(3(x-4)\)</td></tr>
   <tr><td>dos números consecutivos</td><td>\(x,\ x+1\)</td></tr><tr><td>la suma de un número y su doble es 45</td><td>\(x+2x=45\)</td></tr></table></div>

  <h3>Partes de una expresión</h3>
  <p>En \(5x^2-3x+7\): hay tres <b>términos</b> (se separan por + y −). En \(-3x\), el <b>coeficiente</b> es −3 y la <b>parte literal</b> es x. El 7 es el <b>término independiente</b>.</p>

  <h3>Términos semejantes</h3>
  <p>Son los que tienen <b>exactamente la misma parte literal</b> (misma letra con el mismo exponente). Solo esos se pueden sumar, y se suman sus coeficientes:</p>
  <div class="formula">\[3x+5-x+2=(3-1)x+(5+2)=2x+7\]</div>
  <div class="trap">\(x^2\) y \(x\) <b>no</b> son semejantes: \(x^2+x\) no se puede juntar. Tampoco \(3x+2=5x\). Es como sumar manzanas con naranjas.</div>

  <h3>Evaluar: reemplazar con paréntesis</h3>
  <div class="formula">\[2x^2-3\ \text{ en }x=-3:\quad2(-3)^2-3=2\cdot9-3=15\]</div>
  <p>Siempre pon el número <b>entre paréntesis</b> al reemplazar. Sin paréntesis, \(-3^2\) daría −9 y el resultado saldría mal.</p>

  <h3>Quitar paréntesis (propiedad distributiva)</h3>
  <div class="formula">\[3(x-2)=3x-6\qquad-(3x-4)=-3x+4\qquad-2(x-5)=-2x+10\]</div>
  <p>Un signo menos delante de un paréntesis <b>cambia el signo de todo lo de adentro</b>.</p>

  <h3>Ecuaciones: una balanza</h3>
  <svg class="dg" viewBox="0 0 300 90"><path class="ax" d="M150 30V80M110 80H190M60 30H240"/><rect x="70" y="10" width="60" height="20" fill="var(--tint-blue)" stroke="var(--ink)"/><text x="80" y="25">2x + 5</text><rect x="170" y="10" width="60" height="20" fill="var(--tint-red)" stroke="var(--ink)"/><text x="190" y="25">17</text></svg>
  <p>Una ecuación dice que dos cosas pesan lo mismo. Puedes hacer <b>cualquier operación</b>, siempre que la hagas <b>a los dos lados</b>: la balanza sigue equilibrada. El objetivo: dejar la x sola.</p>
  <div class="formula">\[\begin{aligned}2x+5&=17\\2x+5-5&=17-5&&\text{(resto 5 a los dos lados)}\\2x&=12\\\frac{2x}{2}&=\frac{12}{2}&&\text{(divido los dos lados por 2)}\\x&=6\end{aligned}\]</div>
  <p>El famoso "lo que suma pasa a restar" y "lo que multiplica pasa a dividir" es solo un atajo de esto.</p>

  <h3>Procedimiento para ecuaciones de primer grado</h3>
  <ol class="recipe">
   <li><b>Quita paréntesis</b> (distributiva).</li>
   <li><b>Quita denominadores</b>: multiplica todo por el MCM de los denominadores.</li>
   <li><b>Agrupa:</b> términos con x a un lado, números al otro (cambiando de signo al pasar).</li>
   <li><b>Reduce</b> términos semejantes.</li>
   <li><b>Despeja:</b> divide por el coeficiente de x.</li>
   <li><b>Verifica:</b> reemplaza en la ecuación original; los dos lados deben dar lo mismo.</li>
  </ol>`,
  ex:[
   {t:'Con paréntesis', q:R`\(3(x-2)+4=2x+5\)`, s:[
     R`Distributiva: \(3x-6+4=2x+5\Rightarrow3x-2=2x+5\)`,
     R`Las x a la izquierda (resto 2x), los números a la derecha (sumo 2): \(3x-2x=5+2\)`,
     R`\(x=7\)`,
     R`Verifica: izquierda \(3(5)+4=19\); derecha \(2(7)+5=19\) ✓`]},
   {t:'Con fracciones', q:R`\(\frac x3+\frac x2=10\)`, s:[
     R`MCM(3, 2) = 6. Multiplica cada término por 6: \(6\cdot\frac x3+6\cdot\frac x2=6\cdot10\)`,
     R`\(2x+3x=60\Rightarrow5x=60\)`,
     R`\(x=12\). Verifica: \(4+6=10\) ✓`]},
   {t:'Problema de enunciado', q:'La suma de un número y su doble es 45. ¿Cuál es el número?', s:[
     R`Llama x al número. Su doble es 2x`,
     R`Ecuación: \(x+2x=45\Rightarrow3x=45\)`,
     R`\(x=15\). Verifica: \(15+30=45\) ✓`]},
  ],
  qs:[
   {q:R`Reduce \(5x-2x+3-7\)`, o:[R`\(3x-4\)`,R`\(7x-4\)`,R`\(3x+10\)`,R`\(-x\)`], e:'5 − 2 = 3 para las x; 3 − 7 = −4.', h:'Junta solo los semejantes.'},
   {q:R`Evalúa \(2x^2-3\) en \(x=-3\)`, o:['15','−21','33','9'], e:'2(−3)² − 3 = 2·9 − 3 = 15.', h:'Reemplaza con paréntesis.'},
   {q:R`\(2x+5=17\Rightarrow x=\)`, o:['6','11','12','−6'], e:'2x = 12 → x = 6.', h:'Resta 5 y divide por 2.'},
   {q:R`\(-(3x-4)=\)`, o:[R`\(-3x+4\)`,R`\(-3x-4\)`,R`\(3x-4\)`,R`\(3x+4\)`], e:'El menos cambia el signo de todo lo de adentro.', h:'Distribuye el −1.'},
   {q:R`\(4x-7=x+8\Rightarrow x=\)`, o:['5','1/3','15','−5'], e:'3x = 15 → x = 5.', h:'x a un lado, números al otro.'},
   {q:'"Al triple de un número le restas 4" se escribe:', o:[R`\(3x-4\)`,R`\(3(x-4)\)`,R`\(4-3x\)`,R`\(x^3-4\)`], e:'Primero el triple (3x) y luego le restas 4.', h:'¿Qué se hace primero?'},
   {q:R`\(\frac x4=3\Rightarrow x=\)`, o:['12','3/4','7','−1'], e:'Multiplica los dos lados por 4.', h:'Lo que divide pasa a multiplicar.'},
   {q:R`\(3(x+2)=2(x-1)\Rightarrow x=\)`, o:['−8','8','−4','4/5'], e:'3x + 6 = 2x − 2 → x = −8.', h:'Distribuye los dos lados.'},
  ]},
);

/* ---- hitos históricos de la era 00 ---- */
HIST.push(
 {n:-1800, y:'c. 1800 a.C.', who:'Escribas babilonios', w:'Matemáticas_babilónicas', sec:'numeros', what:'Tablillas de arcilla con un sistema posicional en base 60, tablas de multiplicar y de recíprocos, y una aproximación de √2 con seis decimales correctos (tablilla YBC 7289).'},
 {n:-300, y:'c. 300 a.C.', who:'Euclides', w:'Euclides', sec:'primos', what:'Los <i>Elementos</i>: demuestra que hay infinitos números primos y describe el algoritmo para hallar el máximo común divisor.'},
 {n:628, y:'628', who:'Brahmagupta', w:'Brahmagupta', sec:'suma-resta', what:'Da reglas para operar con el cero y con números negativos ("deudas" y "fortunas"), incluida la ley de los signos.'},
 {n:1557, y:'1557', who:'Robert Recorde', w:'Robert_Recorde', sec:'algebra-intro', what:'Inventa el signo =, porque "no hay dos cosas más iguales" que dos rectas paralelas.'},
 {n:1585, y:'1585', who:'Simon Stevin', w:'Simon_Stevin', sec:'decimales', what:'<i>De Thiende</i>: populariza las fracciones decimales en Europa para el comercio y la medición.'},
);
HIST.sort((a,b)=>a.n-b.n);
