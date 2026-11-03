/* ============ LEVELS ============ */
const LV = [
/* ---------------- 00 EXPONENTES, RADICALES, FRACCIONES ---------------- */
{ id:'exponentes', code:'SEC-00', g:'f1', n:'Exponentes, radicales y fracciones', sub:'Álgebra I · reescribir antes de integrar', tgt:'NODO_POTENCIA',
  req:[], uses:'Regla de la potencia (SEC-07), longitud de curva (SEC-17), evaluar cualquier integral definida (SEC-08)',
  lore: R`
  <div class="why">La regla de la potencia \(\int x^n dx=\frac{x^{n+1}}{n+1}\) solo funciona si la expresión está escrita como \(x^n\). Raíces, fracciones y productos hay que <b>convertirlos a potencias</b> primero. Y al evaluar integrales definidas vas a sumar y restar fracciones todo el tiempo.</div>

  <h3>¿Qué es una potencia?</h3>
  <p>\(x^n\) significa multiplicar x por sí mismo n veces: \(x^3=x\cdot x\cdot x\). Todas las leyes salen de contar factores.</p>

  <h3>Ley 1 · Producto de potencias de igual base</h3>
  <div class="formula">\[x^a\cdot x^b=x^{a+b}\]</div>
  <p><b>Por qué:</b> \(x^2\cdot x^3=(x\cdot x)(x\cdot x\cdot x)=x^5\). Se juntan 2 + 3 = 5 factores.</p>
  <div class="formula">\[\begin{aligned}x\sqrt x&=x^1\cdot x^{1/2}&&\text{(la raíz es exponente }\tfrac12)\\&=x^{1+\frac12}&&\text{(suma exponentes)}\\&=x^{3/2}&&\text{(}1+\tfrac12=\tfrac22+\tfrac12=\tfrac32)\end{aligned}\]</div>

  <h3>Ley 2 · Cociente de potencias de igual base</h3>
  <div class="formula">\[\frac{x^a}{x^b}=x^{a-b}\]</div>
  <p><b>Por qué:</b> \(\frac{x^5}{x^2}=\frac{x\cdot x\cdot x\cdot x\cdot x}{x\cdot x}=x^3\). Se cancelan 2 factores.</p>
  <div class="formula">\[\begin{aligned}\frac{\sqrt x}{x^2}&=\frac{x^{1/2}}{x^{2}}=x^{\frac12-2}=x^{\frac12-\frac42}=x^{-3/2}\end{aligned}\]</div>

  <h3>Ley 3 · Potencia de una potencia</h3>
  <div class="formula">\[(x^a)^b=x^{a\cdot b}\qquad (xy)^n=x^ny^n\qquad\left(\frac xy\right)^n=\frac{x^n}{y^n}\]</div>
  <p>Ejemplos: \((x^{2/3})^{3/2}=x^{\frac23\cdot\frac32}=x^1=x\). \((2x)^3=2^3x^3=8x^3\). \(\left(\frac{x}{2}\right)^2=\frac{x^2}{4}\).</p>
  <div class="trap">\((x+y)^n\neq x^n+y^n\). La ley 3 solo vale para <b>productos</b> y <b>cocientes</b>, nunca para sumas.</div>

  <h3>Ley 4 · Exponente negativo y exponente cero</h3>
  <div class="formula">\[x^{-n}=\frac{1}{x^n}\qquad x^0=1\ (x\neq0)\]</div>
  <p><b>Por qué:</b> \(\frac{x^2}{x^5}=x^{2-5}=x^{-3}\), pero también \(\frac{x^2}{x^5}=\frac{1}{x^3}\). Por eso \(x^{-3}=\frac1{x^3}\). Y \(\frac{x^3}{x^3}=x^0=1\).</p>
  <p>Ejemplos: \(\frac{1}{x^2}=x^{-2}\) · \(\frac{3}{x}=3x^{-1}\) · \(\frac{1}{2x^2}=\frac12x^{-2}\) (el 2 <b>no</b> se sube, solo la x).</p>

  <h3>Ley 5 · Exponente fraccionario = raíz</h3>
  <div class="formula">\[x^{m/n}=\sqrt[n]{x^m}=\left(\sqrt[n]{x}\right)^m\]</div>
  <p>El <b>denominador</b> del exponente es el índice de la raíz; el <b>numerador</b> es la potencia.</p>
  <div class="tscroll"><table class="t"><tr><th>Raíz</th><th>Potencia</th><th>Raíz</th><th>Potencia</th></tr>
   <tr><td>\(\sqrt x\)</td><td>\(x^{1/2}\)</td><td>\(\frac{1}{\sqrt x}\)</td><td>\(x^{-1/2}\)</td></tr>
   <tr><td>\(\sqrt[3]{x}\)</td><td>\(x^{1/3}\)</td><td>\(\sqrt[3]{x^2}\)</td><td>\(x^{2/3}\)</td></tr>
   <tr><td>\(x^2\sqrt x\)</td><td>\(x^{5/2}\)</td><td>\(\sqrt{x^3}\)</td><td>\(x^{3/2}\)</td></tr>
   <tr><td>\((x^2+1)^{3/2}\)</td><td>\(\left(\sqrt{x^2+1}\right)^3\)</td><td>\(\frac{1}{\sqrt{4-x^2}}\)</td><td>\((4-x^2)^{-1/2}\)</td></tr></table></div>

  <h3>Propiedades de las raíces</h3>
  <div class="formula">\[\sqrt{ab}=\sqrt a\sqrt b\qquad\sqrt{\frac ab}=\frac{\sqrt a}{\sqrt b}\qquad\sqrt{a^2}=|a|\]</div>
  <p>Ejemplos: \(\sqrt{9x^2}=3|x|\) · \(\sqrt{4(1-\sin^2\theta)}=2\sqrt{\cos^2\theta}=2|\cos\theta|\) · \(\sqrt{t^4+t^2}=\sqrt{t^2(t^2+1)}=|t|\sqrt{t^2+1}\).</p>
  <div class="trap">\(\sqrt{a+b}\neq\sqrt a+\sqrt b\). Prueba: \(\sqrt{9+16}=\sqrt{25}=5\), pero \(\sqrt9+\sqrt{16}=3+4=7\). Para sacar algo de una raíz tiene que estar <b>multiplicando</b>, no sumando.</div>

  <h3>Aritmética de fracciones (para evaluar integrales)</h3>
  <div class="tscroll"><table class="t"><tr><th>Operación</th><th>Regla</th><th>Ejemplo</th></tr>
   <tr><td>Suma / resta</td><td>\(\frac ab\pm\frac cd=\frac{ad\pm bc}{bd}\)</td><td>\(4-\frac83=\frac{12}{3}-\frac83=\frac43\)</td></tr>
   <tr><td>Mismo denominador</td><td>\(\frac ab+\frac cb=\frac{a+c}{b}\)</td><td>\(\frac{10}{3}+\frac76=\frac{20}{6}+\frac76=\frac{27}{6}=\frac92\)</td></tr>
   <tr><td>Multiplicación</td><td>\(\frac ab\cdot\frac cd=\frac{ac}{bd}\)</td><td>\(\frac23\cdot\frac32=1\)</td></tr>
   <tr><td>División</td><td>\(\frac{a/b}{c/d}=\frac ab\cdot\frac dc\)</td><td>\(\frac{x^{3/2}}{3/2}=\frac23x^{3/2}\)</td></tr></table></div>
  <div class="tip">Dividir por una fracción = multiplicar por la <b>invertida</b>. Por eso \(\int x^{1/2}dx=\frac{x^{3/2}}{3/2}=\frac23x^{3/2}\).</div>

  <h3>Procedimiento: reescribir antes de integrar</h3>
  <ol class="recipe">
   <li><b>Expande</b> productos y potencias de sumas (SEC-01).</li>
   <li><b>Separa</b> la fracción término a término por el numerador (SEC-02).</li>
   <li><b>Convierte</b> cada raíz y cada \(\frac1{x^n}\) a potencia.</li>
   <li><b>Simplifica</b> exponentes con las leyes 1 y 2.</li>
   <li>Ahora sí aplica \(\int x^ndx=\frac{x^{n+1}}{n+1}\) a cada término.</li>
  </ol>`,
  ex:[
   {t:'Reescribir e integrar', q:R`\(\displaystyle\int\frac{x^2+3\sqrt x}{x}\,dx\)`, s:[
     R`Separa por el numerador: \(\frac{x^2}{x}+\frac{3\sqrt x}{x}\)`,
     R`Primer término (ley 2): \(\frac{x^2}{x^1}=x^{2-1}=x\)`,
     R`Segundo término: \(\frac{3x^{1/2}}{x^1}=3x^{\frac12-1}=3x^{-1/2}\)`,
     R`Integra cada uno: \(\int x\,dx=\frac{x^2}{2}\); \(\int3x^{-1/2}dx=3\cdot\frac{x^{1/2}}{1/2}=3\cdot2x^{1/2}=6\sqrt x\)`,
     R`Resultado: \(\frac{x^2}{2}+6\sqrt x+C\)`]},
   {t:'Expandir, separar e integrar', q:R`\(\displaystyle\int\frac{(x^2+1)^2}{\sqrt x}\,dx\)`, s:[
     R`Expande el cuadrado (SEC-01): \((x^2+1)^2=(x^2)^2+2(x^2)(1)+1^2=x^4+2x^2+1\)`,
     R`Escribe el denominador como potencia: \(\sqrt x=x^{1/2}\)`,
     R`Separa: \(\frac{x^4}{x^{1/2}}+\frac{2x^2}{x^{1/2}}+\frac{1}{x^{1/2}}\)`,
     R`Ley 2 en cada uno: \(x^{4-\frac12}=x^{7/2}\), \(2x^{2-\frac12}=2x^{3/2}\), \(x^{-1/2}\)`,
     R`Integra: \(\frac{x^{9/2}}{9/2}+2\cdot\frac{x^{5/2}}{5/2}+\frac{x^{1/2}}{1/2}\)`,
     R`Divide por las fracciones (multiplica por la invertida): \(\frac29x^{9/2}+\frac45x^{5/2}+2x^{1/2}+C\)`]},
   {t:'Evaluar con fracciones', q:R`Calcula \(\left[\frac{y^2}{2}+2y-\frac{y^3}{3}\right]_{-1}^{2}\) (aparece en área entre curvas)`, s:[
     R`En y = 2: \(\frac{4}{2}+4-\frac83=2+4-\frac83=6-\frac83=\frac{18}{3}-\frac83=\frac{10}{3}\)`,
     R`En y = −1: \(\frac{1}{2}+2(-1)-\frac{(-1)^3}{3}=\frac12-2+\frac13\)`,
     R`Común denominador 6: \(\frac36-\frac{12}{6}+\frac26=-\frac76\)`,
     R`Resta (arriba − abajo): \(\frac{10}{3}-\left(-\frac76\right)=\frac{20}{6}+\frac76=\frac{27}{6}=\frac92\)`]},
  ],
  qs:[
   {q:R`Escribe \(\dfrac{\sqrt x}{x^2}\) como una potencia:`, o:[R`\(x^{-3/2}\)`,R`\(x^{-1}\)`,R`\(x^{3/2}\)`,R`\(x^{-5/2}\)`], e:R`\(x^{1/2-2}=x^{-3/2}\).`, h:'Ley 2: resta exponentes.'},
   {q:R`\(x^2\sqrt x=\,?\)`, o:[R`\(x^{5/2}\)`,R`\(x^{1}\)`,R`\(x^{3/2}\)`,R`\(x^{2/2}\)`], e:R`\(x^{2+\frac12}=x^{5/2}\).`, h:'Ley 1: suma exponentes.'},
   {q:R`\(\dfrac{1}{2x^2}\) como potencia:`, o:[R`\(\frac12x^{-2}\)`,R`\(2x^{-2}\)`,R`\((2x)^{-2}\)`,R`\(\frac12x^{2}\)`], e:'Solo la x sube con exponente negativo; el ½ queda como coeficiente.', h:'¿El 2 está elevado al cuadrado?'},
   {q:R`\(\sqrt{9+x^2}\) es igual a:`, o:['Se deja así: no se puede separar','3 + x',R`\(3x\)`,R`\(9+x\)`], e:'La raíz no se reparte en sumas.', h:'Prueba con x = 4.'},
   {q:R`\(\displaystyle\int x^{1/2}dx\)`, o:[R`\(\frac23x^{3/2}+C\)`,R`\(\frac32x^{3/2}+C\)`,R`\(\frac12x^{-1/2}+C\)`,R`\(x^{3/2}+C\)`], e:R`\(\frac{x^{3/2}}{3/2}=\frac23x^{3/2}\).`, h:'Divide por 3/2.'},
   {q:R`\(4-\frac{8}{3}=\,?\)`, o:[R`\(\frac43\)`,R`\(\frac{-4}{3}\)`,R`\(\frac{8}{3}\)`,R`\(\frac{1}{3}\)`], e:R`\(\frac{12}{3}-\frac83\).`, h:'4 = 12/3.'},
   {q:R`\(\sqrt{t^4+t^2}\) con \(t\ge0\):`, o:[R`\(t\sqrt{t^2+1}\)`,R`\(t^2+t\)`,R`\(t^2\sqrt{t}\)`,R`\(t\sqrt{t^2}+1\)`], e:'Factor común t² dentro de la raíz; luego √(t²) = t.', h:'Saca t² factor común primero.'},
  ]},
/* ---------------- 01 PRODUCTOS NOTABLES Y FACTORIZACIÓN ---------------- */
{ id:'notables', code:'SEC-01', g:'f1', n:'Productos notables y factorización', sub:'Álgebra II · expandir y factorizar sin errores', tgt:'NODO_FACTOR',
  req:['exponentes'], uses:'Fracciones parciales (SEC-13), completar cuadrado (SEC-11), sustitución trig (SEC-12), longitud de curva (SEC-17), puntos de corte (SEC-14)',
  lore: R`
  <div class="why"><b>Expandir</b> (multiplicar) lo necesitas para integrar \((4-x^2)^2\) en volúmenes o para ver el cuadrado perfecto en longitud de curva. <b>Factorizar</b> (lo contrario) lo necesitas para fracciones parciales y para hallar puntos de corte.</div>

  <h3>La base: propiedad distributiva</h3>
  <p>Todo producto notable sale de multiplicar <b>cada término</b> del primer paréntesis por <b>cada término</b> del segundo:</p>
  <div class="formula">\[(a+b)(c+d)=ac+ad+bc+bd\]</div>
  <p>Si se te olvida una fórmula, siempre puedes hacer esto.</p>

  <h3>1 · Cuadrado de una suma \((a+b)^2\)</h3>
  <div class="formula">\[\begin{aligned}(a+b)^2&=(a+b)(a+b)&&\text{(elevar al cuadrado = multiplicar por sí mismo)}\\&=a\cdot a+a\cdot b+b\cdot a+b\cdot b&&\text{(distributiva: 4 productos)}\\&=a^2+ab+ab+b^2&&(ba=ab)\\&=a^2+2ab+b^2&&\text{(se juntan los dos }ab)\end{aligned}\]</div>
  <p><b>En palabras:</b> cuadrado del primero, <b>más el doble</b> del primero por el segundo, más cuadrado del segundo.</p>

  <h3>2 · Cuadrado de una resta \((a-b)^2\)</h3>
  <div class="formula">\[\begin{aligned}(a-b)^2&=(a-b)(a-b)=a^2-ab-ba+b^2=a^2-2ab+b^2\end{aligned}\]</div>
  <p>Igual que el anterior, pero el término del medio es negativo. El último siempre es <b>positivo</b> (\((-b)^2=b^2\)).</p>
  <h4>Ejemplos resueltos término a término</h4>
  <div class="tscroll"><table class="t"><tr><th>Expresión</th><th>a</th><th>b</th><th>a²</th><th>2ab</th><th>b²</th><th>Resultado</th></tr>
   <tr><td>\((x+3)^2\)</td><td>\(x\)</td><td>3</td><td>\(x^2\)</td><td>\(6x\)</td><td>9</td><td>\(x^2+6x+9\)</td></tr>
   <tr><td>\((2x-5)^2\)</td><td>\(2x\)</td><td>5</td><td>\(4x^2\)</td><td>\(-20x\)</td><td>25</td><td>\(4x^2-20x+25\)</td></tr>
   <tr><td>\((4-x^2)^2\)</td><td>4</td><td>\(x^2\)</td><td>16</td><td>\(-8x^2\)</td><td>\(x^4\)</td><td>\(16-8x^2+x^4\)</td></tr>
   <tr><td>\((2-x)^2\)</td><td>2</td><td>\(x\)</td><td>4</td><td>\(-4x\)</td><td>\(x^2\)</td><td>\(4-4x+x^2\)</td></tr>
   <tr><td>\(\left(\frac{x^2}{2}-\frac{1}{2x^2}\right)^2\)</td><td>\(\frac{x^2}{2}\)</td><td>\(\frac1{2x^2}\)</td><td>\(\frac{x^4}{4}\)</td><td>\(-\frac12\)</td><td>\(\frac{1}{4x^4}\)</td><td>\(\frac{x^4}{4}-\frac12+\frac1{4x^4}\)</td></tr></table></div>
  <p class="small">En la última fila: \(2ab=2\cdot\frac{x^2}{2}\cdot\frac{1}{2x^2}=\frac{2x^2}{4x^2}=\frac12\). Las x se cancelan. Este es el truco que hace que la longitud de curva salga exacta.</p>
  <div class="trap">\((a+b)^2\neq a^2+b^2\). Prueba con a = b = 1: \((1+1)^2=4\) pero \(1^2+1^2=2\). Siempre falta el término \(2ab\).</div>

  <h3>3 · Reconocer un trinomio cuadrado perfecto (al revés)</h3>
  <p>Un trinomio es un cuadrado perfecto si:</p>
  <ol class="recipe">
   <li>El primer y el último término son cuadrados: \(A^2\) y \(B^2\) (positivos).</li>
   <li>El término del medio es exactamente \(\pm2AB\).</li>
   <li>Entonces es \((A\pm B)^2\), con el signo del término del medio.</li>
  </ol>
  <div class="formula">\[\begin{aligned}4x^4+4x^2+1:\quad&A^2=4x^4\Rightarrow A=2x^2;\quad B^2=1\Rightarrow B=1\\&2AB=2(2x^2)(1)=4x^2\ \checkmark\\&\Rightarrow4x^4+4x^2+1=(2x^2+1)^2\end{aligned}\]</div>
  <p class="small">Este es el paso clave del Taller 4, longitud #2.</p>

  <h3>4 · Diferencia de cuadrados \((a+b)(a-b)\)</h3>
  <div class="formula">\[\begin{aligned}(a+b)(a-b)&=a\cdot a-a\cdot b+b\cdot a-b\cdot b&&\text{(distributiva)}\\&=a^2-ab+ab-b^2&&\\&=a^2-b^2&&(-ab+ab=0\text{, se cancelan})\end{aligned}\]</div>
  <p><b>Al revés (factorizar):</b> si ves <b>algo² − algo²</b>, escríbelo como (suma)(resta).</p>
  <div class="tscroll"><table class="t"><tr><th>Expresión</th><th>a</th><th>b</th><th>Factorizada</th></tr>
   <tr><td>\(x^2-9\)</td><td>\(x\)</td><td>3</td><td>\((x-3)(x+3)\)</td></tr>
   <tr><td>\(4x^2-25\)</td><td>\(2x\)</td><td>5</td><td>\((2x-5)(2x+5)\)</td></tr>
   <tr><td>\(x^2-1\)</td><td>\(x\)</td><td>1</td><td>\((x-1)(x+1)\)</td></tr>
   <tr><td>\(x^4-1\)</td><td>\(x^2\)</td><td>1</td><td>\((x^2-1)(x^2+1)=(x-1)(x+1)(x^2+1)\)</td></tr></table></div>
  <div class="tip">La <b>suma</b> de cuadrados \(x^2+9\) <b>no</b> se factoriza en los reales. Por eso \(\int\frac{dx}{x^2+9}\) es arctan y \(\int\frac{dx}{x^2-9}\) es fracciones parciales.</div>

  <h3>5 · Suma y diferencia de cubos</h3>
  <div class="formula">\[a^3+b^3=(a+b)(a^2-ab+b^2)\qquad a^3-b^3=(a-b)(a^2+ab+b^2)\]</div>
  <p><b>Comprobación</b> (multiplicar para ver que funciona):</p>
  <div class="formula">\[\begin{aligned}(a+b)(a^2-ab+b^2)&=a\cdot a^2-a\cdot ab+a\cdot b^2+b\cdot a^2-b\cdot ab+b\cdot b^2\\&=a^3-a^2b+ab^2+a^2b-ab^2+b^3\\&=a^3+(-a^2b+a^2b)+(ab^2-ab^2)+b^3\\&=a^3+b^3\end{aligned}\]</div>
  <p><b>Regla de los signos:</b> en el primer paréntesis va el <b>mismo</b> signo de la expresión; en el término del medio del segundo, el signo <b>opuesto</b>; el último siempre es <b>+</b>.</p>
  <div class="tscroll"><table class="t"><tr><th>Expresión</th><th>a</th><th>b</th><th>Factorizada</th></tr>
   <tr><td>\(x^3+1\)</td><td>\(x\)</td><td>1</td><td>\((x+1)(x^2-x+1)\)</td></tr>
   <tr><td>\(x^3-8\)</td><td>\(x\)</td><td>2</td><td>\((x-2)(x^2+2x+4)\)</td></tr>
   <tr><td>\(8x^3+27\)</td><td>\(2x\)</td><td>3</td><td>\((2x+3)(4x^2-6x+9)\)</td></tr></table></div>
  <p class="small">El factor cuadrático que sale (\(x^2-x+1\), etc.) <b>nunca</b> factoriza: su discriminante es negativo.</p>

  <h3>6 · Cubo de un binomio</h3>
  <div class="formula">\[(a\pm b)^3=a^3\pm3a^2b+3ab^2\pm b^3\]</div>
  <p class="small">Sale de multiplicar \((a+b)^2(a+b)=(a^2+2ab+b^2)(a+b)\) y juntar términos semejantes.</p>

  <h3>Factorización: orden de ataque</h3>
  <ol class="recipe">
   <li><b>Factor común</b> siempre primero: \(x^3-4x=x(x^2-4)=x(x-2)(x+2)\).</li>
   <li><b>Cuenta los términos.</b> Con 2 términos: ¿diferencia de cuadrados? ¿suma o diferencia de cubos?</li>
   <li>Con 3 términos: ¿cuadrado perfecto? Si no, trinomio \(x^2+bx+c\) o \(ax^2+bx+c\).</li>
   <li>Con 4 términos: <b>agrupación</b>.</li>
   <li><b>Revisa</b> si algún factor que quedó se puede factorizar más.</li>
   <li><b>Verifica</b> multiplicando.</li>
  </ol>

  <h3>Trinomio \(x^2+bx+c\)</h3>
  <p>Busca dos números <b>p</b> y <b>q</b> con \(p\cdot q=c\) y \(p+q=b\). Entonces \(x^2+bx+c=(x+p)(x+q)\).</p>
  <div class="formula">\[\begin{aligned}x^2+5x+6:&\quad\text{pares que multiplican }6:\ (1,6),(2,3);\ \ 2+3=5\ \checkmark\ \Rightarrow(x+2)(x+3)\\x^2-2x-3:&\quad\text{producto }-3,\ \text{suma }-2:\ (-3)(1)=-3,\ -3+1=-2\ \checkmark\Rightarrow(x-3)(x+1)\\x^2-x-6:&\quad(-3)(2)=-6,\ -3+2=-1\ \checkmark\Rightarrow(x-3)(x+2)\end{aligned}\]</div>
  <div class="tip">Si c es <b>negativo</b>, los números tienen signos distintos. Si c es positivo y b negativo, ambos son negativos.</div>

  <h3>Trinomio \(ax^2+bx+c\) (método ac)</h3>
  <div class="formula">\[\begin{aligned}2x^2+7x+3:\quad&a\cdot c=6;\ \text{busco producto }6\text{ y suma }7:\ 6\text{ y }1\\&=2x^2+6x+x+3&&\text{(parto }7x\text{ en }6x+x)\\&=2x(x+3)+1(x+3)&&\text{(agrupo)}\\&=(2x+1)(x+3)&&\text{(factor común }(x+3))\end{aligned}\]</div>

  <h3>Fórmula general y discriminante</h3>
  <div class="formula">\[ax^2+bx+c=0\ \Rightarrow\ x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\qquad\Delta=b^2-4ac\]</div>
  <div class="tscroll"><table class="t"><tr><th>Δ</th><th>Raíces</th><th>Factorización</th><th>En integrales</th></tr>
   <tr><td>Δ &gt; 0</td><td>dos reales \(r_1,r_2\)</td><td>\(a(x-r_1)(x-r_2)\)</td><td>fracciones parciales lineales</td></tr>
   <tr><td>Δ = 0</td><td>una doble \(r\)</td><td>\(a(x-r)^2\)</td><td>factor repetido</td></tr>
   <tr><td>Δ &lt; 0</td><td>ninguna real</td><td>irreducible</td><td>completar cuadrado → arctan</td></tr></table></div>
  <p class="small">Ejemplo (Taller 5.21): \(3x^2-4x+3\): \(\Delta=16-36=-20<0\) → irreducible.</p>`,
  ex:[
   {t:'Expandir para volumen', q:R`Expande \((2-x^2)^2-(2-x)^2\) (aparece en una arandela)`, s:[
     R`Primer cuadrado, a = 2, b = x²: \(2^2-2(2)(x^2)+(x^2)^2=4-4x^2+x^4\)`,
     R`Segundo cuadrado, a = 2, b = x: \(4-4x+x^2\)`,
     R`Resta. <b>Ojo:</b> el signo menos afecta a todo el segundo paréntesis: \((4-4x^2+x^4)-(4-4x+x^2)=4-4x^2+x^4-4+4x-x^2\)`,
     R`Junta semejantes: \(x^4+(-4x^2-x^2)+4x+(4-4)=x^4-5x^2+4x\)`]},
   {t:'Factorizar completamente', q:R`Factoriza \(x^4-16\)`, s:[
     R`Dos términos, ambos cuadrados: \(x^4=(x^2)^2\), \(16=4^2\)`,
     R`Diferencia de cuadrados: \((x^2-4)(x^2+4)\)`,
     R`¿Algún factor se puede seguir factorizando? \(x^2-4\) sí (otra diferencia de cuadrados): \((x-2)(x+2)\)`,
     R`\(x^2+4\) es suma de cuadrados → no factoriza`,
     R`Resultado: \((x-2)(x+2)(x^2+4)\)`]},
   {t:'Reconocer cuadrado perfecto', q:R`¿Es \(\frac{x^4}{4}+\frac12+\frac{1}{4x^4}\) un cuadrado perfecto?`, s:[
     R`Primer término: \(\frac{x^4}{4}=\left(\frac{x^2}{2}\right)^2\Rightarrow A=\frac{x^2}{2}\)`,
     R`Último: \(\frac1{4x^4}=\left(\frac1{2x^2}\right)^2\Rightarrow B=\frac1{2x^2}\)`,
     R`Doble producto: \(2AB=2\cdot\frac{x^2}{2}\cdot\frac{1}{2x^2}=\frac12\) ✓ coincide con el término del medio`,
     R`Sí: \(\left(\frac{x^2}{2}+\frac{1}{2x^2}\right)^2\)`]},
  ],
  qs:[
   {q:R`\((x+3)^2=\,?\)`, o:[R`\(x^2+6x+9\)`,R`\(x^2+9\)`,R`\(x^2+3x+9\)`,R`\(x^2+6x+6\)`], e:'Doble producto: 2·x·3 = 6x.', h:'No olvides 2ab.'},
   {q:R`\((4-x^2)^2=\,?\)`, o:[R`\(16-8x^2+x^4\)`,R`\(16-x^4\)`,R`\(16-4x^2+x^4\)`,R`\(16+x^4\)`], e:'2·4·x² = 8x².', h:'a = 4, b = x².'},
   {q:R`Factoriza \(4x^2-25\)`, o:[R`\((2x-5)(2x+5)\)`,R`\((4x-5)(x+5)\)`,R`\((2x-5)^2\)`,'No factoriza'], e:'Diferencia de cuadrados con a = 2x, b = 5.', h:'Ambos son cuadrados.'},
   {q:R`Factoriza \(x^3-8\)`, o:[R`\((x-2)(x^2+2x+4)\)`,R`\((x-2)(x^2-2x+4)\)`,R`\((x-2)^3\)`,R`\((x+2)(x^2-2x+4)\)`], e:'Mismo signo, signo opuesto, siempre +.', h:'Diferencia de cubos.'},
   {q:R`¿\(4x^4+4x^2+1\) es cuadrado perfecto?`, o:[R`Sí: \((2x^2+1)^2\)`,R`Sí: \((4x^2+1)^2\)`,R`Sí: \((2x+1)^2\)`,'No'], e:'A = 2x², B = 1, 2AB = 4x².', h:'Saca raíz al primero y al último.'},
   {q:R`Factoriza \(2x^2+7x+3\)`, o:[R`\((2x+1)(x+3)\)`,R`\((2x+3)(x+1)\)`,R`\((x+1)(x+3)\)`,R`\(2(x+3)(x+1)\)`], e:'Método ac: 6 y 1.', h:'a·c = 6.'},
   {q:R`Discriminante de \(x^2-x+1\) y conclusión:`, o:['−3: irreducible','5: dos raíces','0: cuadrado perfecto','−3: dos raíces'], e:'1 − 4 = −3.', h:'b² − 4ac.'},
   {q:R`Simplifica \((x^4-4x^2+4)-(4-4x+x^2)\)`, o:[R`\(x^4-5x^2+4x\)`,R`\(x^4-3x^2-4x+8\)`,R`\(x^4-5x^2-4x\)`,R`\(x^4-4x^2+4x\)`], e:'El menos cambia el signo de los tres términos del segundo paréntesis.', h:'Reparte el signo menos.'},
  ]},
/* ---------------- 02 FRACCIONES ALGEBRAICAS, DIVISIÓN, ECUACIONES, LOG ---------------- */
{ id:'ecuaciones', code:'SEC-02', g:'f1', n:'Fracciones, división, ecuaciones y logaritmos', sub:'Álgebra III · resolver y simplificar', tgt:'NODO_ECUACION',
  req:['notables'], uses:'Fracciones parciales (SEC-13), puntos de corte para graficar (SEC-04), resultados con ln (SEC-07 a 13)',
  lore: R`
  <div class="why">Para graficar regiones necesitas <b>resolver ecuaciones</b> (dónde se cortan las curvas). Para fracciones parciales necesitas <b>dividir polinomios</b> y operar fracciones. Y casi todo resultado con fracciones da <b>logaritmos</b>.</div>

  <h3>Fracciones algebraicas</h3>
  <h4>Separar (solo por el numerador)</h4>
  <div class="formula">\[\frac{a+b}{c}=\frac ac+\frac bc\ \checkmark\qquad\qquad\frac{c}{a+b}\neq\frac ca+\frac cb\ \times\]</div>
  <p>Ejemplos: \(\frac{x^2+1}{x}=x+\frac1x\) · \(\frac{x^4+3}{6x}=\frac{x^4}{6x}+\frac{3}{6x}=\frac{x^3}{6}+\frac{1}{2x}\).</p>
  <h4>Simplificar (factorizar y cancelar factores, no términos)</h4>
  <div class="formula">\[\frac{x^2-1}{x-1}=\frac{(x-1)(x+1)}{x-1}=x+1\qquad\text{pero}\qquad\frac{x+2}{x}\neq2\]</div>
  <h4>Sumar con común denominador</h4>
  <div class="formula">\[\begin{aligned}\frac{1}{x-1}-\frac{1}{x+1}&=\frac{(x+1)-(x-1)}{(x-1)(x+1)}&&\text{(multiplico cruzado)}\\&=\frac{x+1-x+1}{x^2-1}=\frac{2}{x^2-1}\end{aligned}\]</div>
  <p class="small">Esto es justo lo contrario de fracciones parciales: sirve para <b>verificar</b> tu descomposición.</p>

  <h3>División larga de polinomios (paso a paso)</h3>
  <p>Se usa cuando el grado de arriba es <b>mayor o igual</b> que el de abajo. Es como la división de números: divides el primer término, multiplicas, restas, bajas, repites.</p>
  <h4>Ejemplo: \(x^3\div(x^2-2x-3)\)</h4>
  <div class="formula">\[\begin{aligned}&\textbf{1.}\ \ \tfrac{x^3}{x^2}=x&&\text{(primer término del cociente)}\\&\textbf{2.}\ \ x\cdot(x^2-2x-3)=x^3-2x^2-3x&&\text{(multiplico)}\\&\textbf{3.}\ \ x^3-(x^3-2x^2-3x)=2x^2+3x&&\text{(resto: cambian los signos)}\\&\textbf{4.}\ \ \tfrac{2x^2}{x^2}=2&&\text{(siguiente término del cociente)}\\&\textbf{5.}\ \ 2\cdot(x^2-2x-3)=2x^2-4x-6&&\\&\textbf{6.}\ \ (2x^2+3x)-(2x^2-4x-6)=7x+6&&\text{(grado 1 < 2: paro)}\end{aligned}\]</div>
  <div class="formula">\[\frac{x^3}{x^2-2x-3}=\underbrace{x+2}_{\text{cociente}}+\frac{\overbrace{7x+6}^{\text{residuo}}}{x^2-2x-3}\]</div>
  <p class="small"><b>Verificación:</b> cociente × divisor + residuo = dividendo: \((x+2)(x^2-2x-3)+7x+6=x^3-7x-6+7x+6=x^3\) ✓</p>
  <div class="tip">Si al dividendo le faltan potencias, ponlas con coeficiente 0: \(x^5+2=x^5+0x^4+0x^3+0x^2+0x+2\). Así no te pierdes al restar (Taller 7.11).</div>

  <h3>Resolver ecuaciones</h3>
  <h4>Lineal</h4>
  <p>Despeja: \(3x-6=0\Rightarrow3x=6\Rightarrow x=2\).</p>
  <h4>Cuadrática: pasa todo a un lado = 0, factoriza (o fórmula general)</h4>
  <div class="formula">\[\begin{aligned}x^2&=2x\\x^2-2x&=0&&\text{(paso todo a la izquierda)}\\x(x-2)&=0&&\text{(factor común)}\\x=0\ \ &\text{o}\ \ x=2&&\text{(un producto es 0 si algún factor es 0)}\end{aligned}\]</div>
  <div class="trap">Nunca dividas entre x para "simplificar" \(x^2=2x\): obtendrías solo x = 2 y perderías x = 0.</div>
  <h4>Con raíces: aísla la raíz, eleva al cuadrado, <b>verifica</b></h4>
  <div class="formula">\[\begin{aligned}\sqrt x&=\frac x2\\x&=\frac{x^2}{4}&&\text{(elevo al cuadrado)}\\4x&=x^2\Rightarrow x^2-4x=0\Rightarrow x(x-4)=0\\x&=0,\ x=4&&\text{(verifico: }\sqrt4=2=\tfrac42\ \checkmark)\end{aligned}\]</div>
  <h4>Ecuaciones en y (curvas \(x=g(y)\))</h4>
  <div class="formula">\[y^2=y+2\Rightarrow y^2-y-2=0\Rightarrow(y-2)(y+1)=0\Rightarrow y=2,\ y=-1\]</div>
  <h4>Simétricas</h4>
  <div class="formula">\[x^2=4-x^2\Rightarrow2x^2=4\Rightarrow x^2=2\Rightarrow x=\pm\sqrt2\]</div>
  <p class="small">\(x^2=2\) tiene <b>dos</b> soluciones: \(\sqrt2\) y \(-\sqrt2\).</p>

  <h3>Logaritmos y exponencial</h3>
  <p><b>Definición:</b> \(\ln x\) es el exponente al que hay que elevar \(e\approx2.718\) para obtener x. Es decir \(\ln x=y\iff e^y=x\). Solo existe para \(x>0\).</p>
  <div class="tscroll"><table class="t"><tr><th>Propiedad</th><th>Por qué</th><th>Ejemplo</th></tr>
   <tr><td>\(\ln(ab)=\ln a+\ln b\)</td><td>\(e^me^n=e^{m+n}\)</td><td>\(\ln(2x)=\ln2+\ln x\)</td></tr>
   <tr><td>\(\ln\frac ab=\ln a-\ln b\)</td><td>\(\frac{e^m}{e^n}=e^{m-n}\)</td><td>\(\ln|x-1|-\ln|x+1|=\ln\left|\frac{x-1}{x+1}\right|\)</td></tr>
   <tr><td>\(\ln a^n=n\ln a\)</td><td>\((e^m)^n=e^{mn}\)</td><td>\(\ln\sqrt x=\frac12\ln x\)</td></tr>
   <tr><td>\(\ln1=0,\ \ln e=1\)</td><td>\(e^0=1,\ e^1=e\)</td><td>\(\ln e^2=2\)</td></tr>
   <tr><td>\(e^{\ln x}=x,\ \ln(e^x)=x\)</td><td>son inversas</td><td>\(e^{2\ln x}=e^{\ln x^2}=x^2\)</td></tr></table></div>
  <div class="trap">\(\ln(a+b)\neq\ln a+\ln b\) y \(\frac{\ln a}{\ln b}\neq\ln\frac ab\).</div>
  <div class="tip">Se escribe \(\ln|x|\) en \(\int\frac{dx}{x}=\ln|x|+C\) porque la integral también existe para x negativos. Si lo de adentro siempre es positivo (como \(x^2+4\)), no hace falta el valor absoluto.</div>`,
  ex:[
   {t:'Taller 7.11: división con potencias faltantes', q:R`Divide \(\dfrac{x^5+2}{x^2-1}\)`, s:[
     R`Completa con ceros: \(x^5+0x^4+0x^3+0x^2+0x+2\)`,
     R`\(\frac{x^5}{x^2}=x^3\); \(x^3(x^2-1)=x^5-x^3\); resto: \((x^5+0x^3)-(x^5-x^3)=x^3\). Bajo lo demás: \(x^3+0x^2+0x+2\)`,
     R`\(\frac{x^3}{x^2}=x\); \(x(x^2-1)=x^3-x\); resto: \(x^3+2-(x^3-x)=x+2\)`,
     R`Grado de \(x+2\) es 1 &lt; 2: paro. Cociente \(x^3+x\), residuo \(x+2\)`,
     R`\(\frac{x^5+2}{x^2-1}=x^3+x+\frac{x+2}{x^2-1}\)`,
     R`Verifico: \((x^3+x)(x^2-1)+x+2=x^5-x^3+x^3-x+x+2=x^5+2\) ✓`]},
   {t:'Puntos de corte', q:R`¿Dónde se cortan \(y=x^3\) y \(y=x\)?`, s:[
     R`Igualo: \(x^3=x\)`, R`Paso todo a un lado: \(x^3-x=0\)`, R`Factor común: \(x(x^2-1)=0\)`, R`Diferencia de cuadrados: \(x(x-1)(x+1)=0\)`,
     R`Soluciones: \(x=0,\ x=1,\ x=-1\). Puntos: \((-1,-1),(0,0),(1,1)\)`]},
   {t:'Simplificar un resultado con logaritmos', q:R`Escribe \(\frac12\ln|x-1|-\frac12\ln|x+1|\) como un solo logaritmo`, s:[
     R`Factor común \(\frac12\): \(\frac12\left(\ln|x-1|-\ln|x+1|\right)\)`, R`Resta de ln = ln del cociente: \(\frac12\ln\left|\frac{x-1}{x+1}\right|\)`,
     R`(Opcional) potencia: \(\ln\sqrt{\left|\frac{x-1}{x+1}\right|}\)`]},
  ],
  qs:[
   {q:R`\(\dfrac{x^4+3}{6x}\) separado:`, o:[R`\(\frac{x^3}{6}+\frac{1}{2x}\)`,R`\(\frac{x^4}{6}+\frac{3}{6x}\)`,R`\(\frac{x^3+3}{6}\)`,R`\(\frac{x^3}{6}+\frac12\)`], e:R`\(\frac{x^4}{6x}=\frac{x^3}{6}\), \(\frac{3}{6x}=\frac{1}{2x}\).`, h:'Divide cada término entre 6x.'},
   {q:R`\(\dfrac{x^2-9}{x-3}\) simplificado:`, o:[R`\(x+3\)`,R`\(x-3\)`,R`\(x^2-3\)`,'3'], e:'(x − 3)(x + 3)/(x − 3).', h:'Factoriza el numerador.'},
   {q:R`Resuelve \(x^2=2x\)`, o:['x = 0 y x = 2','x = 2','x = 0','x = ±2'], e:'x(x − 2) = 0.', h:'No dividas por x.'},
   {q:R`Resuelve \(y^2=y+2\)`, o:['y = 2 y y = −1','y = −2 y y = 1','y = 2','y = 1 y y = 2'], e:'(y − 2)(y + 1) = 0.', h:'Pasa todo a un lado.'},
   {q:R`Cociente de \(\dfrac{x^3}{x^2-2x-3}\)`, o:[R`\(x+2\)`,R`\(x-2\)`,R`\(x\)`,R`\(x+3\)`], e:'Residuo 7x + 6.', h:'Dos pasos de división.'},
   {q:R`\(\ln\dfrac{x^3}{x+1}=\,?\)`, o:[R`\(3\ln x-\ln(x+1)\)`,R`\(\frac{3\ln x}{\ln(x+1)}\)`,R`\(\ln3x-\ln x-1\)`,R`\(3\ln x-\ln x-\ln1\)`], e:'Cociente → resta; potencia → baja.', h:'Propiedades.'},
   {q:R`\(\ln e^2-\ln1=\,?\)`, o:['2','e²','1','0'], e:'2 − 0.', h:'ln 1 = 0.'},
   {q:R`Resuelve \(x^2=4-x^2\)`, o:[R`\(x=\pm\sqrt2\)`,R`\(x=\sqrt2\)`,R`\(x=\pm2\)`,R`\(x=2\)`], e:'2x² = 4 → x² = 2 → dos soluciones.', h:'No olvides la negativa.'},
  ]},
/* ---------------- 03 GRAFICAR I ---------------- */
{ id:'graficar', code:'SEC-03', g:'f2', n:'Graficar I: funciones básicas', sub:'Plano, tabla de valores, catálogo de curvas', tgt:'NODO_CARTESIANO', lab:'graficar',
  req:['ecuaciones'], uses:'Toda la parte de aplicaciones: área (SEC-14), volúmenes (SEC-15, 16), longitud (SEC-17)',
  lore: R`
  <div class="why">En área y volumen lo primero que se hace es <b>dibujar</b>. El dibujo te dice los límites, qué curva va arriba, cuál es R y cuál es r. Sin dibujo te equivocas en el planteamiento aunque sepas integrar. Además, la rúbrica del profe califica "representación gráfica".</div>

  <h3>El plano cartesiano</h3>
  <ol class="recipe">
   <li>Eje horizontal = <b>x</b>; eje vertical = <b>y</b>. Se cruzan en el origen (0, 0).</li>
   <li>Un punto \((a,b)\): avanzas a unidades en x (derecha si es positivo) y luego b en y (arriba si es positivo).</li>
   <li>Cuadrantes: I (x+, y+) arriba-derecha, II (x−, y+), III (x−, y−), IV (x+, y−). "Primer cuadrante" en los talleres = x ≥ 0, y ≥ 0.</li>
   <li>Usa la <b>misma escala</b> en ambos ejes cuando puedas, y marca los números.</li>
  </ol>

  <h3>Método universal: tabla de valores</h3>
  <ol class="recipe">
   <li>Elige 5 a 7 valores de x (incluye 0, negativos si aplica, y los puntos importantes del ejercicio).</li>
   <li>Reemplaza cada x en la fórmula y calcula y. <b>Usa paréntesis</b> al reemplazar negativos: \((-2)^2=4\), pero \(-2^2=-4\).</li>
   <li>Ubica cada punto (x, y) en el plano.</li>
   <li>Únelos con una curva <b>suave</b> (no con rectas, salvo que sea una recta).</li>
   <li>Marca los <b>cortes con los ejes</b> y los puntos especiales (vértice, intersecciones).</li>
  </ol>
  <div class="tip"><b>Cortes con los ejes:</b> con el eje y → haz x = 0. Con el eje x → haz y = 0 y resuelve (SEC-02).</div>

  <h3>Catálogo de funciones (memoriza la forma)</h3>
  <div class="tscroll"><table class="t"><tr><th>Función</th><th>Forma</th><th>Puntos clave</th><th>Dominio</th></tr>
   <tr><td>\(y=mx+b\)</td><td>recta; m = pendiente (cuánto sube por cada 1 a la derecha), b = corte con y</td><td>2 puntos bastan: x = 0 y otro</td><td>todo</td></tr>
   <tr><td>\(y=x^2\)</td><td>parábola, abre hacia arriba (U)</td><td>(0,0), (±1,1), (±2,4), (±3,9)</td><td>todo</td></tr>
   <tr><td>\(y=-x^2\)</td><td>parábola que abre hacia abajo (∩)</td><td>(0,0), (±1,−1), (±2,−4)</td><td>todo</td></tr>
   <tr><td>\(y=x^3\)</td><td>sube; pasa por el origen con forma de S</td><td>(−2,−8), (−1,−1), (0,0), (1,1), (2,8)</td><td>todo</td></tr>
   <tr><td>\(y=\sqrt x\)</td><td>media parábola acostada, solo a la derecha</td><td>(0,0), (1,1), (4,2), (9,3)</td><td>\(x\ge0\)</td></tr>
   <tr><td>\(y=\frac1x\)</td><td>dos ramas (hipérbola); nunca toca los ejes</td><td>(1,1), (2,½), (½,2), (−1,−1)</td><td>\(x\neq0\)</td></tr>
   <tr><td>\(y=e^x\)</td><td>crece muy rápido; siempre positiva</td><td>(0,1), (1,≈2.72), (−1,≈0.37)</td><td>todo</td></tr>
   <tr><td>\(y=\ln x\)</td><td>crece lento; solo x &gt; 0</td><td>(1,0), (e≈2.72,1), (≈0.37,−1)</td><td>\(x>0\)</td></tr>
   <tr><td>\(y=x^{3/2}\)</td><td>como \(\sqrt x\) pero más empinada</td><td>(0,0), (1,1), (4,8)</td><td>\(x\ge0\)</td></tr>
   <tr><td>\(y=x^{2/3}\)</td><td>forma de "V" redondeada con punta en el origen</td><td>(0,0), (±1,1), (±8,4)</td><td>todo</td></tr></table></div>

  <h3>Parábola general \(y=ax^2+bx+c\)</h3>
  <ol class="recipe">
   <li><b>Abre hacia arriba</b> si a &gt; 0 y <b>hacia abajo</b> si a &lt; 0.</li>
   <li><b>Vértice:</b> \(x_v=-\frac{b}{2a}\); luego \(y_v\) reemplazando \(x_v\).</li>
   <li><b>Corte con y:</b> (0, c).</li>
   <li><b>Cortes con x:</b> resuelve \(ax^2+bx+c=0\).</li>
   <li>Un punto extra a cada lado del vértice y une.</li>
  </ol>
  <div class="formula">\[\begin{aligned}y=4-x^2:\quad&a=-1<0\Rightarrow\text{abre hacia abajo}\\&x_v=-\tfrac{0}{2(-1)}=0,\ y_v=4\Rightarrow\text{vértice }(0,4)\\&\text{cortes con x: }4-x^2=0\Rightarrow x=\pm2\\&\text{extra: }x=1\Rightarrow y=3\end{aligned}\]</div>

  <h3>Transformaciones (mover una curva conocida)</h3>
  <div class="tscroll"><table class="t"><tr><th>Cambio</th><th>Efecto</th><th>Ejemplo</th></tr>
   <tr><td>\(y=f(x)+k\)</td><td>sube k (baja si k &lt; 0)</td><td>\(y=x^2+1\): la U sube 1</td></tr>
   <tr><td>\(y=f(x-h)\)</td><td>se mueve h a la <b>derecha</b> (¡signo contrario!)</td><td>\(y=(x-2)^2\): vértice en x = 2</td></tr>
   <tr><td>\(y=-f(x)\)</td><td>se voltea respecto al eje x</td><td>\(y=-x^2\)</td></tr>
   <tr><td>\(y=a\,f(x)\)</td><td>se estira (a &gt; 1) o se aplana (0 &lt; a &lt; 1)</td><td>\(y=6x^2\) es más angosta</td></tr></table></div>
  <div class="trap">\(y=(x-2)^2\) se mueve a la <b>derecha</b>, no a la izquierda. Comprueba: el vértice está donde lo de adentro es 0, o sea x = 2.</div>`,
  ex:[
   {t:'Tabla de valores de una parábola', q:R`Grafica \(y=x^2+1\) para \(x\in[0,2]\) (Taller 4, discos #1)`, s:[
     R`Elijo x = 0, 0.5, 1, 1.5, 2`,
     R`x = 0: \(0^2+1=1\) → (0, 1)`, R`x = 0.5: \(0.25+1=1.25\) → (0.5, 1.25)`, R`x = 1: \(1+1=2\) → (1, 2)`, R`x = 1.5: \(2.25+1=3.25\) → (1.5, 3.25)`, R`x = 2: \(4+1=5\) → (2, 5)`,
     R`Ubico los puntos y uno con curva suave. Es la U de \(x^2\) subida 1 unidad. Marco la recta vertical x = 2 que cierra la región.`]},
   {t:'Vértice y cortes', q:R`Grafica \(y=-x^2+4x\) (Taller 4, discos #2)`, s:[
     R`a = −1 &lt; 0 → abre hacia abajo`, R`Vértice: \(x_v=-\frac{4}{2(-1)}=2\); \(y_v=-(2)^2+4(2)=-4+8=4\) → (2, 4)`,
     R`Corte con y: x = 0 → y = 0 → (0, 0)`, R`Cortes con x: \(-x^2+4x=0\Rightarrow x(-x+4)=0\Rightarrow x=0,\ x=4\)`,
     R`Extra: x = 1 → \(-1+4=3\); x = 3 → \(-9+12=3\). Simétricos respecto al vértice ✓`,
     R`Dibujo una ∩ con vértice (2, 4) que corta al eje x en 0 y 4`]},
  ],
  qs:[
   {q:R`Corte con el eje y de \(y=x^2-2x+5\)`, o:['(0, 5)','(5, 0)','(1, 4)','No tiene'], e:'Haz x = 0.', h:'x = 0.'},
   {q:R`Vértice de \(y=4-x^2\)`, o:['(0, 4)','(4, 0)','(2, 0)','(0, −4)'], e:'x_v = 0, y = 4.', h:'−b/(2a).'},
   {q:R`¿Hacia dónde abre \(y=-x^2+4x\)?`, o:['Hacia abajo','Hacia arriba','Hacia la derecha','Hacia la izquierda'], e:'a = −1 < 0.', h:'Signo de a.'},
   {q:R`¿Qué puntos están en \(y=\sqrt x\)?`, o:['(0,0), (1,1), (4,2), (9,3)','(0,0), (1,1), (2,4), (3,9)','(−1,1), (0,0), (1,1)','(1,0), (4,1), (9,2)'], e:'√4 = 2, √9 = 3.', h:'Raíces exactas.'},
   {q:R`\(y=(x-3)^2\) comparada con \(y=x^2\):`, o:['Se mueve 3 a la derecha','Se mueve 3 a la izquierda','Sube 3','Baja 3'], e:'Adentro es 0 cuando x = 3.', h:'¿Dónde queda el vértice?'},
   {q:R`Dominio de \(y=\ln x\)`, o:['x > 0','x ≥ 0','Todos los reales','x ≠ 0'], e:'ln solo existe para positivos.', h:'¿ln(0)?'},
   {q:R`Al reemplazar x = −2 en \(y=-x^2\), y vale:`, o:['−4','4','−2','2'], e:R`\(-(-2)^2=-(4)=-4\).`, h:'Primero el cuadrado, luego el signo.'},
  ]},
/* ---------------- 04 GRAFICAR II ---------------- */
{ id:'regiones', code:'SEC-04', g:'f2', n:'Graficar II: curvas especiales y regiones', sub:'x = g(y), círculos, trig · dibujar una región', tgt:'NODO_REGION', lab:'region',
  req:['graficar'], uses:'Planteamiento de área (SEC-14), discos (SEC-15), cascarones (SEC-16)',
  lore: R`
  <div class="why">Los ejercicios de los talleres usan curvas que no son funciones normales (\(x=y^2\), círculos) y piden dibujar la <b>región</b> encerrada, el <b>rectángulo representativo</b> y el <b>eje de giro</b>. Aquí está el protocolo completo.</div>

  <h3>Curvas de la forma \(x=g(y)\)</h3>
  <p>Son "funciones acostadas". Se grafican igual, pero la tabla se hace <b>eligiendo y</b> y calculando x.</p>
  <div class="tscroll"><table class="t"><tr><th>y</th><th>−2</th><th>−1</th><th>0</th><th>1</th><th>2</th></tr>
   <tr><td>\(x=y^2\)</td><td>4</td><td>1</td><td>0</td><td>1</td><td>4</td></tr></table></div>
  <p>Resultado: parábola que <b>abre hacia la derecha</b>, con vértice en el origen. Ojo: \(x=y^2\) equivale a \(y=\pm\sqrt x\) (la rama de arriba es \(+\sqrt x\) y la de abajo \(-\sqrt x\)).</p>
  <p>Otras: \(x=2\sqrt y\) (Taller 4, #13) · \(x=y^{2/3}\) · \(x=\frac2y\) · \(x=\sqrt{4-y^2}\) (medio círculo a la derecha).</p>
  <div class="tip">Si la curva viene como \(x=\ldots\) y te piden girar alrededor del eje y, casi siempre conviene trabajar en <b>dy</b>.</div>

  <h3>Rectas verticales y horizontales</h3>
  <p>\(x=4\) es una recta <b>vertical</b> que pasa por x = 4. \(y=0\) es el <b>eje x</b>. \(x=0\) es el <b>eje y</b>. Estas rectas suelen "cerrar" la región.</p>

  <h3>Circunferencias y semicírculos</h3>
  <div class="formula">\[x^2+y^2=r^2\ \ \text{(centro (0,0), radio r)}\qquad(x-h)^2+(y-k)^2=r^2\ \ \text{(centro (h,k))}\]</div>
  <p>Despejando: \(y=\sqrt{r^2-x^2}\) es la mitad de <b>arriba</b>; \(y=-\sqrt{r^2-x^2}\) la de abajo. Ejemplo: \(y=\sqrt{9-x^2}\) es un semicírculo de radio 3 (Taller 4, #9).</p>
  <p><b>Elipse:</b> \(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\): corta al eje x en ±a y al eje y en ±b (Taller 4, #17).</p>

  <h3>Seno y coseno</h3>
  <div class="tscroll"><table class="t"><tr><th>x</th><th>0</th><th>π/2 ≈ 1.57</th><th>π ≈ 3.14</th><th>3π/2 ≈ 4.71</th><th>2π ≈ 6.28</th></tr>
   <tr><td>sen x</td><td>0</td><td>1</td><td>0</td><td>−1</td><td>0</td></tr>
   <tr><td>cos x</td><td>1</td><td>0</td><td>−1</td><td>0</td><td>1</td></tr></table></div>
  <p>Ambas son ondas entre −1 y 1 que se repiten cada 2π. Coseno es seno corrido π/2 a la izquierda. Se cortan en x = π/4 (donde ambas valen \(\frac{\sqrt2}2\approx0.71\)).</p>

  <h3>Protocolo para dibujar una región</h3>
  <ol class="recipe">
   <li><b>Lee todas las ecuaciones</b> e identifica qué tipo de curva es cada una (recta, parábola, raíz, recta vertical…).</li>
   <li><b>Grafica cada curva</b> con 3–5 puntos clave (SEC-03).</li>
   <li><b>Halla los puntos de corte algebraicamente</b> (iguala y resuelve, SEC-02). No los adivines del dibujo.</li>
   <li><b>Marca los cortes</b> con sus coordenadas.</li>
   <li><b>Identifica la región encerrada</b> (la zona cerrada por todas las curvas dadas) y sombréala. Si dice "primer cuadrante", solo x ≥ 0, y ≥ 0.</li>
   <li><b>Decide quién está arriba/abajo</b> (o derecha/izquierda) evaluando un punto de prueba dentro de la región.</li>
   <li>Dibuja el <b>rectángulo representativo</b> (vertical = dx, horizontal = dy).</li>
   <li>Si es volumen, dibuja el <b>eje de giro</b> con línea punteada y, si puedes, el reflejo de la región al otro lado del eje.</li>
  </ol>
  <div class="trap">Si las ecuaciones son \(y=\sqrt x\), \(x=4\), \(y=0\), la región es la que está bajo la raíz, sobre el eje x, y a la izquierda de x = 4. Las tres curvas deben formar el borde.</div>`,
  ex:[
   {t:'Taller 4, discos #11', q:R`Dibuja la región acotada por \(x=y^2\), \(x=0\), \(y=3\)`, s:[
     R`Identifico: \(x=y^2\) parábola acostada (abre a la derecha); \(x=0\) es el eje y; \(y=3\) recta horizontal`,
     R`Tabla de \(x=y^2\) eligiendo y: (0,0), (1,1), (4,2), (9,3) — escritos como (x, y)`,
     R`Cortes: \(x=y^2\) con \(y=3\): x = 9 → (9, 3). \(x=y^2\) con \(x=0\): y = 0 → (0, 0). \(x=0\) con \(y=3\) → (0, 3)`,
     R`Región: triángulo curvo con vértices (0,0), (0,3), (9,3). Queda <b>a la izquierda</b> de la parábola y <b>debajo</b> de y = 3`,
     R`Si gira alrededor del eje y: rectángulo horizontal (dy), de x = 0 a \(x=y^2\) → disco con \(R=y^2\), y de 0 a 3`]},
   {t:'Taller 4, discos #9', q:R`Dibuja la región \(y=\sqrt{9-x^2}\), \(y=0\), entre \(x=-2\) y \(x=3\)`, s:[
     R`\(y=\sqrt{9-x^2}\) → elevo al cuadrado: \(y^2=9-x^2\Rightarrow x^2+y^2=9\). Círculo de radio 3; como y = √… ≥ 0, solo la mitad de arriba`,
     R`Puntos: (−3,0), (0,3), (3,0); (−2, √5 ≈ 2.24)`,
     R`Región: bajo el semicírculo, sobre el eje x, desde x = −2 hasta x = 3. Dibujo la recta vertical x = −2`,
     R`Alrededor del eje x: disco con \(R=\sqrt{9-x^2}\Rightarrow R^2=9-x^2\). \(V=\pi\int_{-2}^{3}(9-x^2)dx\)`]},
  ],
  qs:[
   {q:R`\(x=y^2\) es una parábola que abre:`, o:['Hacia la derecha','Hacia arriba','Hacia la izquierda','Hacia abajo'], e:'x siempre ≥ 0.', h:'Haz la tabla eligiendo y.'},
   {q:R`\(y=\sqrt{9-x^2}\) es:`, o:['Semicírculo superior de radio 3','Círculo completo de radio 9','Parábola','Semicírculo inferior de radio 3'], e:'x² + y² = 9 con y ≥ 0.', h:'Eleva al cuadrado.'},
   {q:R`Cortes de \(x=y^2\) y \(y=x-2\)`, o:['(1, −1) y (4, 2)','(0, 0) y (4, 2)','(1, 1) y (4, −2)','(4, 2) solamente'], e:'y² = y + 2 → y = 2, −1; x = y².', h:'Despeja x = y + 2 e iguala.'},
   {q:'Un rectángulo representativo horizontal significa integrar en:', o:['dy','dx','dθ','dt'], e:'Su grosor es dy.', h:'¿Qué mide el grosor?'},
   {q:R`¿Dónde se cortan sen x y cos x en [0, π]?`, o:['π/4','π/2','0','π'], e:'tan x = 1.', h:'sen = cos.'},
   {q:R`Región "\(y=x^2\), \(y=0\), \(x=2\)": ¿cuál es?`, o:['Bajo la parábola, sobre el eje x, entre x = 0 y x = 2','Sobre la parábola hasta y = 2','Entre x = −2 y x = 2','Bajo el eje x'], e:'Las tres curvas forman el borde.', h:'Dibuja las tres.'},
  ]},
/* ---------------- 01 TRIGONOMETRÍA ---------------- */
{ id:'trigbase', code:'SEC-01', g:'pre', n:'Trigonometría base', sub:'Valores, identidades, ángulo doble y medio', tgt:'NODO_CIRCULAR',
  lore: R`
  <div class="why">Sustitución trigonométrica, potencias trigonométricas y varios volúmenes dependen de 6 identidades. Si las sabes de memoria, la mitad del parcial es mecánica.</div>
  <h3>Definiciones (triángulo rectángulo)</h3>
  <div class="formula">\[\sin\theta=\frac{\text{op}}{\text{hip}}\quad\cos\theta=\frac{\text{ady}}{\text{hip}}\quad\tan\theta=\frac{\text{op}}{\text{ady}}=\frac{\sin\theta}{\cos\theta}\]\[\csc\theta=\frac1{\sin\theta}\quad\sec\theta=\frac1{\cos\theta}\quad\cot\theta=\frac1{\tan\theta}=\frac{\cos\theta}{\sin\theta}\]</div>
  <h3>Radianes y valores notables</h3>
  <p>\(\pi\text{ rad}=180^\circ\). En cálculo <b>siempre</b> se trabaja en radianes (la calculadora en RAD).</p>
  <div class="tscroll"><table class="t"><tr><th>θ</th><th>0</th><th>π/6</th><th>π/4</th><th>π/3</th><th>π/2</th><th>π</th><th>3π/2</th><th>2π</th></tr>
   <tr><td>sen</td><td>0</td><td>\(\frac12\)</td><td>\(\frac{\sqrt2}2\)</td><td>\(\frac{\sqrt3}2\)</td><td>1</td><td>0</td><td>−1</td><td>0</td></tr>
   <tr><td>cos</td><td>1</td><td>\(\frac{\sqrt3}2\)</td><td>\(\frac{\sqrt2}2\)</td><td>\(\frac12\)</td><td>0</td><td>−1</td><td>0</td><td>1</td></tr>
   <tr><td>tan</td><td>0</td><td>\(\frac{\sqrt3}3\)</td><td>1</td><td>\(\sqrt3\)</td><td>∄</td><td>0</td><td>∄</td><td>0</td></tr></table></div>
  <h3>Identidades pitagóricas (las más importantes)</h3>
  <div class="formula">\[\sin^2\theta+\cos^2\theta=1\qquad1+\tan^2\theta=\sec^2\theta\qquad1+\cot^2\theta=\csc^2\theta\]</div>
  <p>Las otras dos salen de dividir la primera entre \(\cos^2\) o \(\sin^2\). Despejes útiles: \(1-\sin^2=\cos^2\), \(\sec^2-1=\tan^2\).</p>
  <h3>Ángulo doble</h3>
  <div class="formula">\[\sin2x=2\sin x\cos x\qquad\cos2x=\cos^2x-\sin^2x=1-2\sin^2x=2\cos^2x-1\]</div>
  <h3>Ángulo medio / reducción de potencias</h3>
  <div class="formula">\[\sin^2x=\frac{1-\cos2x}{2}\qquad\cos^2x=\frac{1+\cos2x}{2}\qquad1-\cos\theta=2\sin^2\tfrac\theta2\]</div>
  <div class="tip">Truco para no confundirlas: en \(x=0\), \(\cos^2 0=1\) y \(\frac{1+\cos0}{2}=1\). La de coseno lleva <b>+</b>.</div>
  <h3>Simetría</h3>
  <p>\(\sin(-x)=-\sin x\) (impar), \(\cos(-x)=\cos x\) (par), \(\tan(-x)=-\tan x\).</p>
  <h3>Funciones inversas</h3>
  <p>\(\arcsin x\) devuelve un ángulo en \([-\frac\pi2,\frac\pi2]\); \(\arctan x\) en \((-\frac\pi2,\frac\pi2)\). Ej.: \(\arcsin\frac12=\frac\pi6\), \(\arctan1=\frac\pi4\), \(\arctan0=0\).</p>`,
  ex:[
   {t:'Usar una identidad para simplificar', q:R`Simplifica \(\sqrt{9-9\sin^2\theta}\) suponiendo \(\cos\theta>0\)`, s:[
     R`Factor común: \(\sqrt{9(1-\sin^2\theta)}\)`, R`Pitagórica: \(1-\sin^2\theta=\cos^2\theta\)`, R`\(\sqrt{9\cos^2\theta}=3\cos\theta\). Esto es exactamente lo que hace la sustitución \(x=3\sin\theta\).`]},
   {t:'Reducir una potencia', q:R`Escribe \(\sin^2x\cos^2x\) sin potencias`, s:[
     R`\(\sin x\cos x=\frac12\sin2x\Rightarrow\sin^2x\cos^2x=\frac14\sin^22x\)`, R`Ángulo medio con ángulo \(2x\): \(\sin^22x=\frac{1-\cos4x}{2}\)`, R`Resultado: \(\frac{1-\cos4x}{8}\). Ahora se integra fácil: \(\frac x8-\frac{\sin4x}{32}+C\).`]},
  ],
  qs:[
   {q:R`\(\sin\frac\pi6=\,?\)`, o:[R`\(\frac12\)`,R`\(\frac{\sqrt3}{2}\)`,R`\(\frac{\sqrt2}{2}\)`,'1'], e:'π/6 = 30°: seno 1/2.', h:'30°.'},
   {q:R`\(1+\tan^2\theta=\,?\)`, o:[R`\(\sec^2\theta\)`,R`\(\csc^2\theta\)`,R`\(\cos^2\theta\)`,'1'], e:R`Divide \(\sin^2+\cos^2=1\) entre \(\cos^2\).`, h:'Divide la identidad básica entre cos².'},
   {q:R`\(\cos^2x=\,?\)`, o:[R`\(\frac{1+\cos2x}{2}\)`,R`\(\frac{1-\cos2x}{2}\)`,R`\(2\cos x\)`,R`\(\cos2x\)`], e:'Prueba con x = 0: cos² 0 = 1, solo la primera da 1.', h:'Evalúa en x = 0.'},
   {q:R`\(\sin2x=\,?\)`, o:[R`\(2\sin x\cos x\)`,R`\(2\sin x\)`,R`\(\sin^2x-\cos^2x\)`,R`\(\sin x+\cos x\)`], e:'Ángulo doble del seno.', h:'Fórmula de ángulo doble.'},
   {q:R`\(\sec\theta\) es igual a:`, o:[R`\(\frac{1}{\cos\theta}\)`,R`\(\frac{1}{\sin\theta}\)`,R`\(\frac{\cos\theta}{\sin\theta}\)`,R`\(\cos^{-1}\theta\) (arccos)`], e:R`¡Ojo! \(\cos^{-1}\) suele significar arccos, no secante.`, h:'Recíproca del coseno.'},
   {q:R`\(\arctan1=\,?\)`, o:[R`\(\frac\pi4\)`,R`\(\frac\pi2\)`,R`\(\frac\pi3\)`,'1'], e:R`\(\tan\frac\pi4=1\).`, h:'¿Qué ángulo tiene tangente 1?'},
   {q:R`Si \(\cos\theta=\frac35\) y θ está en el primer cuadrante, \(\tan\theta=\,?\)`, o:[R`\(\frac43\)`,R`\(\frac34\)`,R`\(\frac45\)`,R`\(\frac53\)`], e:R`Ady 3, hip 5 → op 4 (Pitágoras). tan = 4/3.`, h:'Dibuja el triángulo 3-4-5.'},
  ]},
/* ---------------- 02 DERIVADAS ---------------- */
{ id:'derivadas', code:'SEC-02', g:'pre', n:'Derivadas', sub:'Tabla, producto, cociente, cadena', tgt:'NODO_DIFERENCIAL',
  lore: R`
  <div class="why">Integrar es derivar al revés. Necesitas derivadas para: hacer du en sustitución, du en partes, y' en longitud de curva, y para <b>verificar</b> cualquier resultado (derivas la respuesta y debe dar el integrando).</div>
  <h3>Tabla de derivadas</h3>
  <div class="tscroll"><table class="t"><tr><th>f(x)</th><th>f′(x)</th><th>f(x)</th><th>f′(x)</th></tr>
   <tr><td>\(c\)</td><td>0</td><td>\(\sin x\)</td><td>\(\cos x\)</td></tr>
   <tr><td>\(x^n\)</td><td>\(nx^{n-1}\)</td><td>\(\cos x\)</td><td>\(-\sin x\)</td></tr>
   <tr><td>\(e^x\)</td><td>\(e^x\)</td><td>\(\tan x\)</td><td>\(\sec^2x\)</td></tr>
   <tr><td>\(a^x\)</td><td>\(a^x\ln a\)</td><td>\(\sec x\)</td><td>\(\sec x\tan x\)</td></tr>
   <tr><td>\(\ln x\)</td><td>\(\frac1x\)</td><td>\(\csc x\)</td><td>\(-\csc x\cot x\)</td></tr>
   <tr><td>\(\arcsin x\)</td><td>\(\frac1{\sqrt{1-x^2}}\)</td><td>\(\cot x\)</td><td>\(-\csc^2x\)</td></tr>
   <tr><td>\(\arctan x\)</td><td>\(\frac1{1+x^2}\)</td><td>\(\text{arcsec}\,x\)</td><td>\(\frac{1}{x\sqrt{x^2-1}}\)</td></tr></table></div>
  <h3>Reglas</h3>
  <div class="formula">\[(f\pm g)'=f'\pm g'\qquad(cf)'=cf'\qquad(fg)'=f'g+fg'\qquad\left(\frac fg\right)'=\frac{f'g-fg'}{g^2}\]</div>
  <h4>Regla de la cadena (la más usada)</h4>
  <div class="formula">\[\big(f(g(x))\big)'=f'(g(x))\cdot g'(x)\]</div>
  <p>"Deriva la de afuera dejando quieta la de adentro, y multiplica por la derivada de la de adentro."</p>
  <ol class="recipe">
   <li>\(\frac{d}{dx}e^{3x}=e^{3x}\cdot3\)</li>
   <li>\(\frac{d}{dx}\ln(x^2+4)=\frac{1}{x^2+4}\cdot2x\)</li>
   <li>\(\frac{d}{dx}(x^2+1)^{3/2}=\frac32(x^2+1)^{1/2}\cdot2x=3x\sqrt{x^2+1}\)</li>
   <li>\(\frac{d}{dx}\sin(3x)=3\cos3x\)</li>
  </ol>
  <div class="tip">Ver la regla de la cadena "al revés" es justamente la <b>sustitución u</b>: si en el integrando ves \(f(g(x))\cdot g'(x)\), la integral es \(F(g(x))\).</div>`,
  ex:[
   {t:'Derivada para longitud de curva (Taller 4, #2)', q:R`Deriva \(y=\frac23(x^2+1)^{3/2}\) y calcula \(1+(y')^2\)`, s:[
     R`Cadena: \(y'=\frac23\cdot\frac32(x^2+1)^{1/2}\cdot2x=2x\sqrt{x^2+1}\)`, R`\((y')^2=4x^2(x^2+1)=4x^4+4x^2\)`, R`\(1+(y')^2=4x^4+4x^2+1=(2x^2+1)^2\). Cuadrado perfecto → la raíz se va.`]},
   {t:'Verificar una integral derivando', q:R`¿Es cierto que \(\int xe^xdx=e^x(x-1)+C\)?`, s:[
     R`Deriva con producto: \(\frac{d}{dx}\left[e^x(x-1)\right]=e^x(x-1)+e^x\cdot1\)`, R`\(=e^x(x-1+1)=xe^x\) ✓. La respuesta es correcta.`]},
  ],
  qs:[
   {q:R`\(\frac{d}{dx}x^{3/2}\)`, o:[R`\(\frac32x^{1/2}\)`,R`\(\frac32x^{5/2}\)`,R`\(\frac23x^{1/2}\)`,R`\(x^{1/2}\)`], e:'Baja el exponente y réstale 1.', h:'n·xⁿ⁻¹.'},
   {q:R`\(\frac{d}{dx}\ln(x^2+4)\)`, o:[R`\(\frac{2x}{x^2+4}\)`,R`\(\frac{1}{x^2+4}\)`,R`\(\frac{1}{2x}\)`,R`\(2x\ln(x^2+4)\)`], e:'Cadena: 1/(adentro) · derivada de adentro.', h:'Regla de la cadena.'},
   {q:R`\(\frac{d}{dx}\arctan x\)`, o:[R`\(\frac{1}{1+x^2}\)`,R`\(\frac{1}{\sqrt{1-x^2}}\)`,R`\(\sec^2x\)`,R`\(\frac{-1}{1+x^2}\)`], e:'De memoria. Por eso ∫dx/(1+x²) = arctan x.', h:'Tabla.'},
   {q:R`\(\frac{d}{dx}e^{-x/2}\)`, o:[R`\(-\frac12e^{-x/2}\)`,R`\(e^{-x/2}\)`,R`\(-2e^{-x/2}\)`,R`\(-\frac x2e^{-x/2-1}\)`], e:R`Cadena: \(e^{-x/2}\cdot(-\frac12)\).`, h:'Derivada del exponente.'},
   {q:R`\(\frac{d}{dx}(x\sin x)\)`, o:[R`\(\sin x+x\cos x\)`,R`\(\cos x\)`,R`\(x\cos x\)`,R`\(\sin x-x\cos x\)`], e:R`Producto: \(f'g+fg'=1\cdot\sin x+x\cos x\).`, h:'Regla del producto.'},
   {q:R`\(\frac{d}{dx}\sec x\)`, o:[R`\(\sec x\tan x\)`,R`\(\sec^2x\)`,R`\(-\sec x\tan x\)`,R`\(\tan^2x\)`], e:'De memoria. Se usa en potencias de tan/sec.', h:'Tabla.'},
   {q:R`Si \(y=\frac{x^3}{6}+\frac{1}{2x}\), \(y'=\,?\)`, o:[R`\(\frac{x^2}{2}-\frac{1}{2x^2}\)`,R`\(\frac{x^2}{2}+\frac{1}{2x^2}\)`,R`\(\frac{x^2}{2}-\frac{1}{2x}\)`,R`\(\frac{x^2}{6}-\frac{1}{x^2}\)`], e:R`\(\frac{1}{2x}=\frac12x^{-1}\Rightarrow-\frac12x^{-2}\).`, h:'Pasa 1/(2x) a potencia.'},
  ]},
/* ---------------- 03 INTEGRAL BÁSICA ---------------- */
{ id:'basica', code:'SEC-03', g:'pre', n:'Integral básica y sustitución u', sub:'Tabla, +C, TFC, propiedades, cambio de límites', tgt:'NODO_PRIMITIVO',
  lore: R`
  <div class="why">Todos los métodos (partes, trigonométrica, fracciones) terminan en integrales de esta tabla. Y todas las aplicaciones (área, volumen, longitud) terminan en una integral definida que se evalúa con el TFC.</div>
  <h3>Antiderivada e integral indefinida</h3>
  <p>\(F\) es antiderivada de \(f\) si \(F'=f\). Como la derivada de una constante es 0, hay infinitas: por eso se escribe <b>+ C</b>.</p>
  <h3>Tabla de integrales básicas</h3>
  <div class="tscroll"><table class="t"><tr><th>Integral</th><th>Resultado</th><th>Integral</th><th>Resultado</th></tr>
   <tr><td>\(\int x^n dx\ (n\neq-1)\)</td><td>\(\frac{x^{n+1}}{n+1}\)</td><td>\(\int\sec^2x\,dx\)</td><td>\(\tan x\)</td></tr>
   <tr><td>\(\int\frac{dx}{x}\)</td><td>\(\ln|x|\)</td><td>\(\int\sec x\tan x\,dx\)</td><td>\(\sec x\)</td></tr>
   <tr><td>\(\int e^x dx\)</td><td>\(e^x\)</td><td>\(\int\csc^2x\,dx\)</td><td>\(-\cot x\)</td></tr>
   <tr><td>\(\int a^x dx\)</td><td>\(\frac{a^x}{\ln a}\)</td><td>\(\int\tan x\,dx\)</td><td>\(\ln|\sec x|\)</td></tr>
   <tr><td>\(\int\sin x\,dx\)</td><td>\(-\cos x\)</td><td>\(\int\sec x\,dx\)</td><td>\(\ln|\sec x+\tan x|\)</td></tr>
   <tr><td>\(\int\cos x\,dx\)</td><td>\(\sin x\)</td><td>\(\int\frac{dx}{a^2+x^2}\)</td><td>\(\frac1a\arctan\frac xa\)</td></tr>
   <tr><td>\(\int\frac{dx}{\sqrt{a^2-x^2}}\)</td><td>\(\arcsin\frac xa\)</td><td>\(\int\frac{dx}{x\sqrt{x^2-a^2}}\)</td><td>\(\frac1a\text{arcsec}\frac xa\)</td></tr></table></div>
  <div class="tip"><b>Ajuste lineal:</b> si adentro hay \(ax+b\), divides por \(a\): \(\int e^{3x}dx=\frac{e^{3x}}3\), \(\int\cos3x\,dx=\frac{\sin3x}3\), \(\int(2x+5)^{10}dx=\frac{(2x+5)^{11}}{22}\).</div>
  <h3>Sustitución u (regla de la cadena al revés)</h3>
  <ol class="recipe">
   <li>Busca una función "de adentro" \(g(x)\) cuya derivada \(g'(x)\) también aparezca (salvo una constante).</li>
   <li>\(u=g(x)\), \(du=g'(x)dx\). Despeja lo que necesites.</li>
   <li>Todo debe quedar en u (no puede sobrar ninguna x).</li>
   <li>Integra y devuelve a x.</li>
  </ol>
  <h3>Integral definida y Teorema Fundamental</h3>
  <p>\(\int_a^b f(x)dx\) es el <b>límite de sumas de Riemann</b>: \(\sum f(x_i)\Delta x\) cuando \(\Delta x\to0\). Geométricamente: área con signo (lo que está bajo el eje x resta).</p>
  <div class="formula">\[\int_a^bf(x)\,dx=F(b)-F(a)\quad\text{donde }F'=f\]</div>
  <h4>Propiedades</h4>
  <ol class="recipe">
   <li>\(\int_a^a f=0\) · \(\int_b^a f=-\int_a^b f\)</li>
   <li>\(\int_a^b f=\int_a^c f+\int_c^b f\) (partir el intervalo)</li>
   <li>Si f es <b>impar</b>: \(\int_{-a}^a f=0\). Si es <b>par</b>: \(\int_{-a}^a f=2\int_0^a f\)</li>
   <li>En definidas no se escribe + C.</li>
  </ol>
  <div class="trap">Sustitución en una definida: <b>cambia los límites</b> a valores de u, o devuelve a x antes de evaluar. Mezclar (u con límites de x) es el error más común.</div>`,
  ex:[
   {t:'Sustitución u indefinida', q:R`\(\displaystyle\int\frac{x\,dx}{x^2+4}\)`, s:[
     R`La derivada de \(x^2+4\) es \(2x\), y hay una x arriba → \(u=x^2+4\), \(du=2x\,dx\Rightarrow x\,dx=\frac{du}2\)`,
     R`\(\int\frac{1}{u}\cdot\frac{du}{2}=\frac12\ln|u|\)`, R`\(=\frac12\ln(x^2+4)+C\) (no necesita valor absoluto: siempre es positivo)`]},
   {t:'Sustitución con cambio de límites', q:R`\(\displaystyle\int_0^1x(x^2+1)^3dx\)`, s:[
     R`\(u=x^2+1\), \(du=2x\,dx\). Límites: \(x=0\to u=1\); \(x=1\to u=2\)`,
     R`\(\frac12\int_1^2u^3du=\frac12\left[\frac{u^4}{4}\right]_1^2\)`, R`\(=\frac12\cdot\frac{16-1}{4}=\frac{15}{8}\)`]},
  ],
  qs:[
   {q:R`\(\displaystyle\int\frac{dx}{\sqrt x}\)`, o:[R`\(2\sqrt x+C\)`,R`\(\frac{1}{2\sqrt x}+C\)`,R`\(\ln\sqrt x+C\)`,R`\(\frac{\sqrt x}{2}+C\)`], e:R`\(\int x^{-1/2}dx=\frac{x^{1/2}}{1/2}=2\sqrt x\).`, h:'Pasa a potencia.'},
   {q:R`\(\displaystyle\int e^{3x}dx\)`, o:[R`\(\frac13e^{3x}+C\)`,R`\(3e^{3x}+C\)`,R`\(e^{3x}+C\)`,R`\(\frac{e^{3x+1}}{3x+1}+C\)`], e:'Ajuste lineal: divide por 3.', h:'Si derivas tu respuesta, ¿te da e³ˣ?'},
   {q:R`\(\displaystyle\int2x(x^2+1)^5dx\)`, o:[R`\(\frac{(x^2+1)^6}{6}+C\)`,R`\(\frac{x^2(x^2+1)^6}{6}+C\)`,R`\((x^2+1)^6+C\)`,R`\(\frac{(x^2+1)^6}{3}+C\)`], e:R`\(u=x^2+1\), \(du=2x\,dx\): \(\int u^5du=\frac{u^6}6\).`, h:'¿Qué derivada aparece?'},
   {q:R`\(\displaystyle\int_0^1x(x^2+1)^3dx\)`, o:[R`\(\frac{15}{8}\)`,R`\(\frac{15}{4}\)`,R`\(\frac{1}{8}\)`,'2'], e:'u de 1 a 2: ½·(16 − 1)/4.', h:'Cambia los límites.'},
   {q:R`\(\displaystyle\int_{-2}^{2}x^3dx\) sin calcular:`, o:['0','8','4','16'], e:'x³ es impar en un intervalo simétrico → 0.', h:'¿Par o impar?'},
   {q:R`\(\displaystyle\int\tan x\,dx\)`, o:[R`\(-\ln|\cos x|+C\)`,R`\(\sec^2x+C\)`,R`\(\ln|\cos x|+C\)`,R`\(\frac{\tan^2x}{2}+C\)`], e:R`\(\tan x=\frac{\sin x}{\cos x}\), u = cos x → \(-\ln|\cos x|=\ln|\sec x|\).`, h:'Escribe tan como sen/cos.'},
   {q:R`\(\displaystyle\int_1^e\frac{dx}{x}\)`, o:['1','e − 1','0','e'], e:R`\(\ln e-\ln1=1-0\).`, h:'ln e = 1.'},
  ]},
/* ---------------- 04 PARTES ---------------- */
{ id:'partes', code:'SEC-04', g:'met', n:'Integración por partes', sub:'LIATE, tabla DI, cíclicas · Taller 2 (4.xx)', tgt:'PRODUCTO_REBELDE', lab:'partes',
  lore: R`
  <div class="why">Sirve para integrar <b>productos de funciones de distinto tipo</b> (x·eˣ, x²·ln x, eˣ·sen x) y funciones "solas" que no tienen antiderivada en la tabla (ln x, arctan x, arcsen x).</div>
  <h3>De dónde sale</h3>
  <p>Regla del producto: \((uv)'=u'v+uv'\). Integrando ambos lados y despejando:</p>
  <div class="formula">\[\int u\,dv=uv-\int v\,du\]</div>
  <h3>Receta</h3>
  <ol class="recipe">
   <li>Escoge <b>u</b> con <b>LIATE</b>: Logarítmica, Inversa trig, Algebraica, Trigonométrica, Exponencial. La que aparezca primero en esa lista es u.</li>
   <li>Todo lo demás (incluido dx) es <b>dv</b>.</li>
   <li>Deriva u → du. Integra dv → v (sin + C).</li>
   <li>Arma \(uv-\int v\,du\). La nueva integral debe ser <b>más fácil</b>; si no, cambia la elección.</li>
  </ol>
  <h3>Casos especiales</h3>
  <div class="tip"><b>Tabla DI (tabular):</b> si u es un polinomio, deriva hasta 0 y multiplica en diagonal con signos + − + − (simulador).</div>
  <div class="tip"><b>Cíclicas (eˣ sen x, 3ˣ cos x):</b> aplica partes dos veces (manteniendo el mismo tipo de u); la integral original reaparece. Llámala I y despéjala.</div>
  <div class="tip"><b>Función sola:</b> \(\int\ln x\,dx\), \(\int\arctan x\,dx\): u = la función, dv = dx.</div>
  <div class="tip"><b>Combinada (4.58):</b> \(\int e^{\sqrt x}dx\): primero \(w=\sqrt x\), luego partes.</div>
  <h3>Definidas</h3>
  <div class="formula">\[\int_a^bu\,dv=\Big[uv\Big]_a^b-\int_a^bv\,du\]</div>
  <div class="trap">Olvidar el <b>signo menos</b>, perder signos en la segunda aplicación, o escoger u = eˣ (la integral se vuelve más fea).</div>`,
  ex:[
   {t:'Básico', q:R`\(\displaystyle\int xe^x\,dx\)`, s:[
     R`LIATE: A (x) antes que E → \(u=x,\ dv=e^xdx\)`, R`\(du=dx,\ v=e^x\)`, R`\(xe^x-\int e^xdx=xe^x-e^x+C=e^x(x-1)+C\)`]},
   {t:'Función sola', q:R`\(\displaystyle\int\ln x\,dx\)`, s:[
     R`\(u=\ln x,\ dv=dx\Rightarrow du=\frac{dx}{x},\ v=x\)`, R`\(x\ln x-\int x\cdot\frac1x\,dx=x\ln x-\int dx\)`, R`\(=x\ln x-x+C\)`]},
   {t:'Cíclica (Taller 4.41)', q:R`\(\displaystyle I=\int e^x\sin x\,dx\)`, s:[
     R`1ª vez: \(u=\sin x,\ dv=e^xdx\): \(I=e^x\sin x-\int e^x\cos x\,dx\)`,
     R`2ª vez (misma elección, u = trig): \(u=\cos x,\ dv=e^xdx\): \(\int e^x\cos x\,dx=e^x\cos x+\int e^x\sin x\,dx=e^x\cos x+I\)`,
     R`Sustituye: \(I=e^x\sin x-e^x\cos x-I\)`, R`\(2I=e^x(\sin x-\cos x)\Rightarrow I=\frac{e^x}{2}(\sin x-\cos x)+C\)`]},
  ],
  qs:[
   {q:R`En \(\displaystyle\int x\sin x\,dx\), ¿qué tomas como \(u\)?`, o:[R`\(u=x\)`,R`\(u=\sin x\)`,R`\(u=x\sin x\)`,'No se puede por partes'], e:R`LIATE: Algebraica antes que Trigonométrica. Resultado: \(-x\cos x+\sin x+C\).`, h:'¿Cuál se simplifica al derivarla?'},
   {q:R`Taller 4.35: \(\displaystyle\int x^2\ln x\,dx\). ¿\(u\)?`, o:[R`\(u=\ln x\)`,R`\(u=x^2\)`,R`\(u=x^2\ln x\)`,R`\(u=\tfrac{1}{x}\)`], e:'L va primero. Además, ln x se deriva fácil pero no se integra fácil.', h:'L-I-A-T-E.'},
   {q:R`\(\displaystyle\int x^2\ln x\,dx=\,?\)`, o:[R`\(\frac{x^3}{3}\ln x-\frac{x^3}{9}+C\)`,R`\(\frac{x^3}{3}\ln x-\frac{x^3}{3}+C\)`,R`\(\frac{x^3}{3}\ln x+\frac{x^3}{9}+C\)`,R`\(x^3\ln x-\frac{x^3}{3}+C\)`], e:R`\(v=\frac{x^3}{3}\); \(\int\frac{x^3}{3}\cdot\frac1x dx=\frac{x^3}{9}\).`, h:'∫ v du con v = x³/3.'},
   {q:R`Taller 4.32: \(\displaystyle\int x^2e^{3x}dx\). ¿Cuántas veces aplicas partes?`, o:['2','1','3','Infinitas (cíclica)'], e:R`x² → 2x → 2 → 0. Resultado \(e^{3x}\left(\frac{x^2}{3}-\frac{2x}{9}+\frac{2}{27}\right)+C\).`, h:'Derivadas de x² hasta constante.'},
   {q:R`Taller 4.41: \(\displaystyle\int e^x\sin x\,dx\)`, o:[R`\(\frac{e^x}{2}(\sin x-\cos x)+C\)`,R`\(\frac{e^x}{2}(\sin x+\cos x)+C\)`,R`\(e^x(\sin x-\cos x)+C\)`,R`\(-e^x\cos x+C\)`], e:'Ver ejemplo resuelto: 2I = eˣ(sen x − cos x).', h:'Llama I a la integral.'},
   {q:R`En \(\int x\arctan x\,dx\) queda \(\int\frac{x^2}{1+x^2}dx\). ¿Cómo sigues?`, o:[R`Dividir: \(1-\frac{1}{1+x^2}\)`,'Otra vez partes','u = x²','Fracciones parciales (x−1)(x+1)'], e:R`Grado igual → divide. Total: \(\frac{x^2}{2}\arctan x-\frac12(x-\arctan x)+C\).`, h:'Compara grados.'},
   {q:R`Taller 4.58: \(\int e^{\sqrt{x}}dx\). ¿Primer paso?`, o:[R`\(w=\sqrt x,\ dx=2w\,dw\Rightarrow2\int we^wdw\)`,R`Partes con \(u=e^{\sqrt x}\)`,R`\(u=\sqrt x\) y es inmediata`,R`\(e^{\sqrt x}+C\)`], e:R`Luego partes: \(2e^{\sqrt x}(\sqrt x-1)+C\).`, h:'Primero quita la raíz.'},
   {q:R`\(\displaystyle\int_0^1xe^x\,dx\)`, o:['1','e − 1','e','0'], e:R`\([e^x(x-1)]_0^1=0-(-1)=1\).`, h:'Evalúa también en 0.'},
  ]},
/* ---------------- 05 POTENCIAS TRIG ---------------- */
{ id:'potencias', code:'SEC-05', g:'met', n:'Integrales trigonométricas', sub:'Potencias de sen, cos, tan, sec', tgt:'OSCILADOR_HOSTIL',
  lore: R`
  <div class="why">Cuando haces sustitución trigonométrica, casi siempre terminas con una integral como \(\int\cos^2\theta\,d\theta\) o \(\int\sec^3\theta\,d\theta\). Esta sección es el "motor" de la siguiente.</div>
  <h3>Caso 1: \(\int\sin^m x\cos^n x\,dx\)</h3>
  <ol class="recipe">
   <li><b>Alguna potencia impar:</b> separa UN factor de esa función (será parte del du). Convierte el resto (potencia par) con \(\sin^2=1-\cos^2\) o \(\cos^2=1-\sin^2\). Sustituye u = la otra función.</li>
   <li><b>Ambas pares:</b> usa reducción \(\sin^2x=\frac{1-\cos2x}{2}\), \(\cos^2x=\frac{1+\cos2x}{2}\) (las veces que haga falta).</li>
  </ol>
  <h3>Caso 2: \(\int\tan^m x\sec^n x\,dx\)</h3>
  <ol class="recipe">
   <li><b>sec con potencia par:</b> separa \(\sec^2x\) (du de tan), convierte el resto con \(\sec^2=1+\tan^2\), \(u=\tan x\).</li>
   <li><b>tan con potencia impar:</b> separa \(\sec x\tan x\) (du de sec), convierte con \(\tan^2=\sec^2-1\), \(u=\sec x\).</li>
   <li>Solo tan: \(\tan^2=\sec^2-1\). Ej.: \(\int\tan^2x\,dx=\tan x-x+C\).</li>
  </ol>
  <h3>Resultados que conviene memorizar</h3>
  <div class="formula">\[\int\sin^2x\,dx=\frac x2-\frac{\sin2x}{4}\qquad\int\cos^2x\,dx=\frac x2+\frac{\sin2x}{4}\]\[\int\sec^3x\,dx=\frac12\big(\sec x\tan x+\ln|\sec x+\tan x|\big)\]</div>
  <div class="tip">\(\int\sec^3x\) sale por partes (cíclica) con \(u=\sec x,\ dv=\sec^2x\,dx\). Aparece en Taller 4.53 y en sustituciones con tan.</div>
  <div class="trap">Usar ángulo medio cuando hay una potencia impar: funciona pero es mucho más largo. Primero revisa si hay impar.</div>`,
  ex:[
   {t:'Potencia impar', q:R`\(\displaystyle\int\sin^3x\cos^2x\,dx\)`, s:[
     R`sen tiene potencia impar → separa uno: \(\sin^2x\cos^2x\cdot\sin x\)`, R`\(\sin^2x=1-\cos^2x\): \(\int(1-\cos^2x)\cos^2x\sin x\,dx\)`,
     R`\(u=\cos x,\ du=-\sin x\,dx\): \(-\int(1-u^2)u^2du=-\int(u^2-u^4)du\)`, R`\(=-\frac{u^3}{3}+\frac{u^5}{5}=-\frac{\cos^3x}{3}+\frac{\cos^5x}{5}+C\)`]},
   {t:'Ambas pares', q:R`\(\displaystyle\int\cos^2x\,dx\)`, s:[
     R`\(\cos^2x=\frac{1+\cos2x}{2}\)`, R`\(\int\frac12dx+\frac12\int\cos2x\,dx=\frac x2+\frac12\cdot\frac{\sin2x}{2}\)`, R`\(=\frac x2+\frac{\sin2x}{4}+C\)`]},
   {t:'tan impar', q:R`\(\displaystyle\int\tan^3x\sec x\,dx\)`, s:[
     R`Separa \(\sec x\tan x\): \(\int\tan^2x\cdot\sec x\tan x\,dx\)`, R`\(\tan^2x=\sec^2x-1\), \(u=\sec x\), \(du=\sec x\tan x\,dx\)`, R`\(\int(u^2-1)du=\frac{\sec^3x}{3}-\sec x+C\)`]},
  ],
  qs:[
   {q:R`\(\displaystyle\int\sin^3x\,dx\)`, o:[R`\(-\cos x+\frac{\cos^3x}{3}+C\)`,R`\(\frac{\sin^4x}{4}+C\)`,R`\(\cos x-\frac{\cos^3x}{3}+C\)`,R`\(-\frac{\cos^4x}{4}+C\)`], e:R`\((1-\cos^2x)\sin x\), u = cos x: \(-\int(1-u^2)du\).`, h:'Separa un sen x.'},
   {q:R`\(\displaystyle\int\sin^3x\cos^2x\,dx\)`, o:[R`\(-\frac{\cos^3x}{3}+\frac{\cos^5x}{5}+C\)`,R`\(\frac{\cos^3x}{3}-\frac{\cos^5x}{5}+C\)`,R`\(\frac{\sin^4x\cos^3x}{12}+C\)`,R`\(-\frac{\sin^3x}{3}+\frac{\sin^5x}{5}+C\)`], e:'Ver ejemplo resuelto.', h:'u = cos x.'},
   {q:R`\(\displaystyle\int\cos^2x\,dx\)`, o:[R`\(\frac x2+\frac{\sin2x}{4}+C\)`,R`\(\frac x2-\frac{\sin2x}{4}+C\)`,R`\(\frac{\cos^3x}{3}+C\)`,R`\(\sin^2x+C\)`], e:'Reducción de potencia.', h:'(1 + cos 2x)/2.'},
   {q:R`Estrategia para \(\int\sin^2x\cos^2x\,dx\):`, o:['Ambas pares → ángulo medio','Separar un sen x','u = sen x directo','Partes'], e:R`Sin potencias impares. \(=\frac18\int(1-\cos4x)dx\).`, h:'¿Hay alguna impar?'},
   {q:R`\(\displaystyle\int\tan^2x\,dx\)`, o:[R`\(\tan x-x+C\)`,R`\(\frac{\tan^3x}{3}+C\)`,R`\(\sec^2x+C\)`,R`\(\tan x+x+C\)`], e:R`\(\tan^2=\sec^2-1\).`, h:'Identidad pitagórica.'},
   {q:R`\(\displaystyle\int\sec^4x\,dx\): ¿primer paso?`, o:[R`Separar \(\sec^2x\), escribir \(\sec^2x=1+\tan^2x\), \(u=\tan x\)`,R`\(u=\sec x\)`,'Ángulo medio','Partes con u = sec⁴x'], e:R`Queda \(\int(1+u^2)du=\tan x+\frac{\tan^3x}{3}+C\).`, h:'sec con potencia par.'},
   {q:R`\(\displaystyle\int\tan^3x\sec x\,dx\)`, o:[R`\(\frac{\sec^3x}{3}-\sec x+C\)`,R`\(\frac{\tan^4x}{4}+C\)`,R`\(\frac{\sec^3x}{3}+\sec x+C\)`,R`\(\frac{\tan^3x}{3}-\tan x+C\)`], e:'u = sec x.', h:'Separa sec x tan x.'},
  ]},
/* ---------------- 06 COMPLETAR CUADRADO ---------------- */
{ id:'cuadrado', code:'SEC-06', g:'met', n:'Completar el cuadrado', sub:'Integrales con cuadráticas · Taller 2 (5.xx)', tgt:'CUADRATICA_CORRUPTA', lab:'cuadrado',
  lore: R`
  <div class="why">Cuando hay \(ax^2+bx+c\) que <b>no factoriza</b> (o está dentro de una raíz), lo conviertes en \(u^2\pm k^2\) o \(k^2-u^2\). Eso lo lleva a arctan, arcsen o sustitución trigonométrica.</div>
  <div class="formula">\[ax^2+bx+c=a\left(x+\tfrac{b}{2a}\right)^2+\left(c-\tfrac{b^2}{4a}\right)\]</div>
  <h3>Receta</h3>
  <ol class="recipe">
   <li>Si \(a\neq1\), saca factor común a (si \(a<0\), saca el signo menos).</li>
   <li>Toma la mitad del coeficiente de x, elévala al cuadrado, <b>súmala y réstala</b>.</li>
   <li>Agrupa el trinomio cuadrado perfecto: \(x^2+bx+\left(\frac b2\right)^2=\left(x+\frac b2\right)^2\).</li>
   <li>Sustituye \(u=x+\frac{b}{2a}\), \(du=dx\), y usa la tabla.</li>
  </ol>
  <div class="tscroll"><table class="t"><tr><th>Forma</th><th>Resultado</th></tr>
   <tr><td>\(\int\frac{du}{u^2+k^2}\)</td><td>\(\frac1k\arctan\frac uk\)</td></tr>
   <tr><td>\(\int\frac{du}{\sqrt{k^2-u^2}}\)</td><td>\(\arcsin\frac uk\)</td></tr>
   <tr><td>\(\int\frac{du}{\sqrt{u^2\pm k^2}}\)</td><td>\(\ln\left|u+\sqrt{u^2\pm k^2}\right|\)</td></tr>
   <tr><td>\(\int\sqrt{k^2-u^2}\,du\)</td><td>\(\frac u2\sqrt{k^2-u^2}+\frac{k^2}{2}\arcsin\frac uk\)</td></tr></table></div>
  <h3>Con x en el numerador (5.20–5.41)</h3>
  <ol class="recipe">
   <li>Calcula la derivada del denominador (o de lo de adentro de la raíz): \(D'=2ax+b\).</li>
   <li>Escribe el numerador como \(A\cdot D'+B\).</li>
   <li>La parte \(A\int\frac{D'}{D}\) da \(A\ln|D|\) (o \(2A\sqrt D\) si hay raíz).</li>
   <li>La parte \(B\int\frac{dx}{D}\) se hace completando el cuadrado.</li>
  </ol>
  <div class="trap">Con \(-x^2\): \(12+4x-x^2=-(x^2-4x)+12=-[(x-2)^2-4]+12=16-(x-2)^2\). El signo menos convierte el −4 en +4.</div>`,
  ex:[
   {t:'Taller 5.34', q:R`\(\displaystyle\int\frac{dx}{x^2-2x+5}\)`, s:[
     R`Mitad de −2 es −1, al cuadrado 1: \(x^2-2x+1+4=(x-1)^2+4\)`, R`\(u=x-1,\ du=dx,\ k=2\): \(\int\frac{du}{u^2+4}\)`, R`\(=\frac12\arctan\frac u2=\frac12\arctan\frac{x-1}{2}+C\)`]},
   {t:'Taller 5.22 (x arriba)', q:R`\(\displaystyle\int\frac{(2x-3)\,dx}{x^2+6x+15}\)`, s:[
     R`\(D'=2x+6\). Escribe \(2x-3=(2x+6)-9\)`, R`\(\int\frac{2x+6}{x^2+6x+15}dx-9\int\frac{dx}{x^2+6x+15}\)`,
     R`Primera: \(\ln(x^2+6x+15)\). Segunda: \(x^2+6x+15=(x+3)^2+6\), \(k=\sqrt6\)`, R`\(=\ln(x^2+6x+15)-\frac{9}{\sqrt6}\arctan\frac{x+3}{\sqrt6}+C\)`]},
  ],
  qs:[
   {q:R`Completa: \(x^2+6x+15\)`, o:[R`\((x+3)^2+6\)`,R`\((x+3)^2+15\)`,R`\((x+6)^2-21\)`,R`\((x+3)^2-6\)`], e:'Mitad de 6 = 3; 9 + 6 = 15.', h:'Mitad del 6, al cuadrado.'},
   {q:R`Completa: \(12+4x-x^2\) (5.15)`, o:[R`\(16-(x-2)^2\)`,R`\(8-(x-2)^2\)`,R`\(16-(x+2)^2\)`,R`\((x-2)^2+8\)`], e:'Forma k² − u² → seno.', h:'Saca el menos primero.'},
   {q:R`Completa: \(4x^2+4x+10\) (5.23)`, o:[R`\((2x+1)^2+9\)`,R`\((2x+1)^2+10\)`,R`\(4(x+1)^2+6\)`,R`\((2x+2)^2+6\)`], e:R`\(4x^2+4x+1=(2x+1)^2\).`, h:'4x² + 4x + 1.'},
   {q:R`5.34: \(\int\frac{dx}{x^2-2x+5}\)`, o:[R`\(\frac12\arctan\frac{x-1}{2}+C\)`,R`\(\arctan(x-1)+C\)`,R`\(\frac14\arctan\frac{x-1}{4}+C\)`,R`\(\ln|x^2-2x+5|+C\)`], e:'(x − 1)² + 4.', h:'k = 2.'},
   {q:R`5.40: \(\int\frac{dx}{\sqrt{-x^2-6x}}\)`, o:[R`\(\arcsin\frac{x+3}{3}+C\)`,R`\(\arcsin\frac{x-3}{3}+C\)`,R`\(\frac13\arctan\frac{x+3}{3}+C\)`,R`\(\ln|x+3+\sqrt{-x^2-6x}|+C\)`], e:R`\(9-(x+3)^2\).`, h:'−(x² + 6x + 9) + 9.'},
   {q:R`5.22: ¿cómo partes \(2x-3\) sobre \(x^2+6x+15\)?`, o:[R`\((2x+6)-9\)`,R`\((2x-3)+0\)`,R`\(2(x+3)+3\)`,R`\((2x+6)+3\)`], e:'Derivada del denominador: 2x + 6.', h:'Deriva el denominador.'},
  ]},
/* ---------------- 07 SUSTITUCIÓN TRIG ---------------- */
{ id:'trig', code:'SEC-07', g:'met', n:'Sustitución trigonométrica', sub:'Radicales a²±x², x²−a² · Taller 2 (6.xx)', tgt:'RADICAL_BLINDADO', lab:'trig',
  lore: R`
  <div class="why">Elimina raíces de cuadráticas usando las identidades pitagóricas. Es el método para \(\sqrt{a^2-x^2}\), \(\sqrt{a^2+x^2}\), \(\sqrt{x^2-a^2}\) cuando no hay una sustitución u directa.</div>
  <div class="tscroll"><table class="t"><tr><th>Ves</th><th>Sustituye</th><th>dx</th><th>La raíz queda</th><th>Identidad usada</th></tr>
   <tr><td>\(\sqrt{a^2-x^2}\)</td><td>\(x=a\sin\theta\)</td><td>\(a\cos\theta\,d\theta\)</td><td>\(a\cos\theta\)</td><td>\(1-\sin^2=\cos^2\)</td></tr>
   <tr><td>\(\sqrt{a^2+x^2}\)</td><td>\(x=a\tan\theta\)</td><td>\(a\sec^2\theta\,d\theta\)</td><td>\(a\sec\theta\)</td><td>\(1+\tan^2=\sec^2\)</td></tr>
   <tr><td>\(\sqrt{x^2-a^2}\)</td><td>\(x=a\sec\theta\)</td><td>\(a\sec\theta\tan\theta\,d\theta\)</td><td>\(a\tan\theta\)</td><td>\(\sec^2-1=\tan^2\)</td></tr></table></div>
  <h3>Receta</h3>
  <ol class="recipe">
   <li>Si hay término en x (\(bx\)), <b>completa el cuadrado</b> primero (SEC-06).</li>
   <li>Identifica el caso y sustituye x, dx y la raíz. Si hay coeficiente, ej. \(\sqrt{4x^2-16}\): \(2x=4\sec\theta\).</li>
   <li>Simplifica y resuelve en θ (normalmente queda una integral trigonométrica: SEC-05).</li>
   <li><b>Dibuja el triángulo</b> desde la sustitución (ej. \(\sin\theta=\frac xa\): op = x, hip = a) y expresa todo en x.</li>
  </ol>
  <div class="tip">Si aparece \(\sin2\theta\), escríbelo como \(2\sin\theta\cos\theta\) antes de volver a x.</div>
  <div class="tip">No siempre hace falta: \(\int\frac{x\,dx}{\sqrt{4-x^2}}\) sale con \(u=4-x^2\). Busca primero una sustitución u.</div>
  <div class="trap">Olvidar convertir dx, o dejar θ en la respuesta final.</div>`,
  ex:[
   {t:'Taller 6.31', q:R`\(\displaystyle\int\frac{dx}{x^2\sqrt{4-x^2}}\)`, s:[
     R`\(a^2-x^2\), a = 2 → \(x=2\sin\theta\), \(dx=2\cos\theta\,d\theta\), \(\sqrt{4-x^2}=2\cos\theta\)`,
     R`\(\int\frac{2\cos\theta\,d\theta}{4\sin^2\theta\cdot2\cos\theta}=\frac14\int\csc^2\theta\,d\theta\)`, R`\(=-\frac14\cot\theta\)`,
     R`Triángulo: op = x, hip = 2, ady = \(\sqrt{4-x^2}\). \(\cot\theta=\frac{\text{ady}}{\text{op}}=\frac{\sqrt{4-x^2}}{x}\)`, R`\(=-\frac{\sqrt{4-x^2}}{4x}+C\)`]},
   {t:'Taller 6.17', q:R`\(\displaystyle\int\sqrt{4-x^2}\,dx\)`, s:[
     R`\(x=2\sin\theta\): \(\int2\cos\theta\cdot2\cos\theta\,d\theta=4\int\cos^2\theta\,d\theta\)`, R`\(=4\left(\frac\theta2+\frac{\sin2\theta}{4}\right)=2\theta+\sin2\theta=2\theta+2\sin\theta\cos\theta\)`,
     R`\(\theta=\arcsin\frac x2\), \(\sin\theta=\frac x2\), \(\cos\theta=\frac{\sqrt{4-x^2}}{2}\)`, R`\(=2\arcsin\frac x2+\frac x2\sqrt{4-x^2}+C\)`]},
  ],
  qs:[
   {q:R`6.31: \(\int\frac{dx}{x^2\sqrt{4-x^2}}\). ¿Sustitución?`, o:[R`\(x=2\sin\theta\)`,R`\(x=2\tan\theta\)`,R`\(x=2\sec\theta\)`,R`\(u=4-x^2\)`], e:'a² − x² → seno.', h:'¿Qué forma tiene la raíz?'},
   {q:R`Si \(x=2\tan\theta\): \(\sqrt{4+x^2}\) y \(dx\)`, o:[R`\(2\sec\theta,\ 2\sec^2\theta\,d\theta\)`,R`\(2\cos\theta,\ 2\sec^2\theta\,d\theta\)`,R`\(2\sec\theta,\ 2\sec\theta\tan\theta\,d\theta\)`,R`\(4\sec\theta,\ 2\sec^2\theta\,d\theta\)`], e:R`\(4+4\tan^2=4\sec^2\).`, h:'1 + tan² = sec².'},
   {q:R`6.23: \(\int\frac{dx}{x\sqrt{x^2-9}}\)`, o:[R`\(\frac13\text{arcsec}\frac x3+C\)`,R`\(\text{arcsec}\frac x3+C\)`,R`\(\frac13\arcsin\frac x3+C\)`,R`\(\ln|x+\sqrt{x^2-9}|+C\)`], e:R`\(x=3\sec\theta\): \(\int\frac{3\sec\theta\tan\theta}{3\sec\theta\cdot3\tan\theta}d\theta=\frac13\theta\).`, h:'x = 3 sec θ.'},
   {q:R`6.17: \(\int\sqrt{4-x^2}\,dx\)`, o:[R`\(\frac x2\sqrt{4-x^2}+2\arcsin\frac x2+C\)`,R`\(\frac x2\sqrt{4-x^2}+4\arcsin\frac x2+C\)`,R`\(2\arcsin\frac x2+C\)`,R`\(x\sqrt{4-x^2}+\arcsin\frac x2+C\)`], e:'Ver ejemplo resuelto.', h:'4∫cos²θ dθ.'},
   {q:R`Si \(\sin\theta=\frac x3\), \(\tan\theta=\,?\)`, o:[R`\(\frac{x}{\sqrt{9-x^2}}\)`,R`\(\frac{\sqrt{9-x^2}}{x}\)`,R`\(\frac x3\)`,R`\(\frac{3}{\sqrt{9-x^2}}\)`], e:'op x, hip 3, ady √(9 − x²).', h:'Triángulo.'},
   {q:R`6.59: \(\int\frac{dx}{\sqrt{4-(x-1)^2}}\)`, o:[R`\(\arcsin\frac{x-1}{2}+C\)`,R`\(\frac12\arcsin\frac{x-1}{2}+C\)`,R`\(\arcsin(x-1)+C\)`,R`\(\frac12\arctan\frac{x-1}{2}+C\)`], e:'x − 1 = 2 sen θ.', h:'u = x − 1, a = 2.'},
   {q:R`\(\int_0^2\sqrt{4-x^2}\,dx\) sin cuentas largas:`, o:[R`\(\pi\)`,R`\(2\pi\)`,R`\(4\pi\)`,R`\(\frac\pi2\)`], e:'Cuarto de círculo de radio 2: π·4/4.', h:'Interpreta geométricamente.'},
  ]},
/* ---------------- 08 FRACCIONES ---------------- */
{ id:'fracciones', code:'SEC-08', g:'met', n:'Fracciones parciales', sub:'Funciones racionales · Taller 2 (7.xx)', tgt:'FRACCION_MONOLITO', lab:'fracciones',
  lore: R`
  <div class="why">Para integrar \(\frac{P(x)}{Q(x)}\) (polinomio sobre polinomio), la rompes en fracciones simples que dan ln, potencias y arctan.</div>
  <h3>Receta completa</h3>
  <ol class="recipe">
   <li><b>¿Impropia?</b> (grado P ≥ grado Q) → división larga. Integra el cociente aparte.</li>
   <li><b>Factoriza Q</b> por completo (lineales y cuadráticos irreducibles).</li>
   <li><b>Plantilla</b> según los factores (tabla).</li>
   <li><b>Multiplica</b> ambos lados por Q: queda una igualdad de polinomios.</li>
   <li><b>Constantes:</b> evalúa en las raíces (tapado) y, para lo que falte, iguala coeficientes o evalúa en x = 0.</li>
   <li><b>Integra</b> cada pedazo.</li>
  </ol>
  <div class="tscroll"><table class="t"><tr><th>Factor en Q</th><th>Aporta</th><th>Se integra como</th></tr>
   <tr><td>\((x-r)\)</td><td>\(\frac{A}{x-r}\)</td><td>\(A\ln|x-r|\)</td></tr>
   <tr><td>\((x-r)^k\)</td><td>\(\frac{A_1}{x-r}+\cdots+\frac{A_k}{(x-r)^k}\)</td><td>\(\int\frac{B}{(x-r)^2}=-\frac{B}{x-r}\)</td></tr>
   <tr><td>\(x^2+bx+c\) (Δ &lt; 0)</td><td>\(\frac{Ax+B}{x^2+bx+c}\)</td><td>ln + arctan (SEC-06)</td></tr></table></div>
  <h3>Método del tapado</h3>
  <p>Para un factor lineal <b>no repetido</b> \((x-r)\): tapa ese factor en la fracción original y evalúa lo que queda en \(x=r\). Para el factor repetido, el tapado da solo el coeficiente de la potencia <b>más alta</b>.</p>
  <div class="tip">Comprobación rápida: el número de constantes = grado de Q.</div>
  <div class="trap">Olvidar \(\frac{A}{x-r}\) cuando el factor es \((x-r)^2\), o poner solo una constante sobre un cuadrático irreducible.</div>`,
  ex:[
   {t:'Taller 7.14 (lineales distintos)', q:R`\(\displaystyle\int\frac{(3x+7)\,dx}{(x-1)(x-2)(x-3)}\)`, s:[
     R`Plantilla: \(\frac{A}{x-1}+\frac{B}{x-2}+\frac{C}{x-3}\)`, R`Tapado en 1: \(A=\frac{10}{(-1)(-2)}=5\)`, R`Tapado en 2: \(B=\frac{13}{(1)(-1)}=-13\)`, R`Tapado en 3: \(C=\frac{16}{(2)(1)}=8\)`,
     R`\(=5\ln|x-1|-13\ln|x-2|+8\ln|x-3|+C\)`]},
   {t:'Taller 7.18 (factor repetido)', q:R`\(\displaystyle\int\frac{(x^2+6)\,dx}{(x-1)^2(x-2)}\)`, s:[
     R`\(\frac{x^2+6}{(x-1)^2(x-2)}=\frac{A}{x-1}+\frac{B}{(x-1)^2}+\frac{C}{x-2}\)`, R`Multiplica: \(x^2+6=A(x-1)(x-2)+B(x-2)+C(x-1)^2\)`,
     R`x = 2: \(10=C\). x = 1: \(7=-B\Rightarrow B=-7\)`, R`Coeficiente de \(x^2\): \(1=A+C\Rightarrow A=-9\)`,
     R`\(\int=-9\ln|x-1|+\frac{7}{x-1}+10\ln|x-2|+C\)`]},
  ],
  qs:[
   {q:R`7.14: plantilla para \(\frac{3x+7}{(x-1)(x-2)(x-3)}\)`, o:[R`\(\frac{A}{x-1}+\frac{B}{x-2}+\frac{C}{x-3}\)`,R`\(\frac{Ax+B}{(x-1)(x-2)}+\frac{C}{x-3}\)`,R`\(\frac{A}{(x-1)(x-2)(x-3)}\)`,R`\(\frac{A}{x-1}+\frac{B}{(x-2)^2}+\frac{C}{(x-3)^3}\)`], e:'Una constante por factor lineal.', h:'Tres lineales.'},
   {q:R`Mismo ejercicio, tapado en x = 1: \(A=\,?\)`, o:['5','10','−13','8'], e:'10 / ((−1)(−2)) = 5.', h:'(3 + 7)/((1−2)(1−3)).'},
   {q:R`7.13: \(\int\frac{x^3dx}{x^2-2x-3}\). ¿Primer paso?`, o:['Dividir (grado 3 ≥ 2)','Plantear A/(x−3) + B/(x+1)','u = x² − 2x − 3','Completar cuadrado'], e:'Impropia → divide primero (SEC-00 tiene la división).', h:'Compara grados.'},
   {q:R`7.12: \(\int\frac{x\,dx}{(x+1)^2}\)`, o:[R`\(\ln|x+1|+\frac{1}{x+1}+C\)`,R`\(\ln|x+1|-\frac{1}{x+1}+C\)`,R`\(\frac12\ln(x+1)^2+C\)`,R`\(-\frac{1}{x+1}+C\)`], e:R`\(\frac{1}{x+1}-\frac{1}{(x+1)^2}\).`, h:'x = (x + 1) − 1.'},
   {q:R`7.15: plantilla para \(\frac{1}{x^3+1}\)`, o:[R`\(\frac{A}{x+1}+\frac{Bx+C}{x^2-x+1}\)`,R`\(\frac{A}{x+1}+\frac{B}{x^2-x+1}\)`,R`\(\frac{A}{x+1}+\frac{B}{x-1}+\frac{C}{x+1}\)`,R`\(\frac{Ax+B}{x^3+1}\)`], e:'Suma de cubos; el cuadrático es irreducible.', h:'Factoriza x³ + 1.'},
   {q:R`7.18: valor de C en \(\frac{C}{x-2}\)`, o:['10','−7','−9','6'], e:'Tapado en x = 2: 10/1.', h:'Tapa (x − 2).'},
   {q:R`\(\int\frac{dx}{x^2-1}\)`, o:[R`\(\frac12\ln\left|\frac{x-1}{x+1}\right|+C\)`,R`\(\frac12\ln\left|\frac{x+1}{x-1}\right|+C\)`,R`\(\arctan x+C\)`,R`\(\ln|x^2-1|+C\)`], e:'A = ½, B = −½.', h:'x² − 1 sí factoriza.'},
  ]},
/* ---------------- 09 ÁREA ---------------- */
{ id:'area', code:'SEC-09', g:'apl', n:'Área entre curvas', sub:'Rebanadas verticales y horizontales', tgt:'CURVAS_GEMELAS', lab:'area',
  lore: R`
  <div class="why">Primera aplicación: la integral suma rectángulos. Todo lo de volúmenes usa la misma lógica de "rebanada representativa", así que entender esto bien te ahorra la mitad del trabajo después.</div>
  <h3>Idea</h3>
  <p>Un rectángulo vertical típico tiene <b>alto = (curva de arriba) − (curva de abajo)</b> y <b>ancho = dx</b>. Su área es \([f(x)-g(x)]dx\). Sumar infinitos = integrar.</p>
  <div class="formula">\[A=\int_a^b\big[f_{\text{arriba}}(x)-g_{\text{abajo}}(x)\big]dx\qquad A=\int_c^d\big[x_{\text{der}}(y)-x_{\text{izq}}(y)\big]dy\]</div>
  <h3>Receta</h3>
  <ol class="recipe">
   <li><b>Dibuja</b> las curvas (parábola, recta, raíz…). El profe lo califica.</li>
   <li><b>Puntos de corte:</b> iguala y resuelve (factoriza, no dividas).</li>
   <li>Dibuja un <b>rectángulo representativo</b>. Decide dx (vertical) o dy (horizontal).</li>
   <li>Escribe alto (o largo) como resta <b>mayor − menor</b>. Para saber cuál es mayor, evalúa un punto intermedio.</li>
   <li>Si las curvas se <b>cruzan</b> dentro del intervalo, parte la integral.</li>
   <li>Integra y evalúa. El área siempre es <b>positiva</b>.</li>
  </ol>
  <div class="tip"><b>¿dx o dy?</b> Si la curva de arriba o la de abajo <b>cambia de fórmula</b> a lo largo del intervalo, o si las curvas están escritas como \(x=g(y)\) (parábolas "acostadas"), usa dy. En dy, despeja x de cada curva.</div>
  <div class="trap">Integrar \(f-g\) sobre todo el intervalo sin partir donde se cruzan: las partes se cancelan y puede dar 0.</div>`,
  ex:[
   {t:'Básico', q:R`Área entre \(y=x^2\) y \(y=2x\)`, s:[
     R`Cortes: \(x^2=2x\Rightarrow x(x-2)=0\Rightarrow x=0,2\)`, R`En x = 1: \(2x=2>x^2=1\) → arriba \(2x\)`, R`\(\int_0^2(2x-x^2)dx=\left[x^2-\frac{x^3}{3}\right]_0^2=4-\frac83=\frac43\)`]},
   {t:'Conviene dy', q:R`Área entre \(x=y^2\) y \(y=x-2\)`, s:[
     R`Despeja x: \(x=y^2\) y \(x=y+2\). Cortes: \(y^2=y+2\Rightarrow(y-2)(y+1)=0\Rightarrow y=-1,2\)`,
     R`En y = 0: \(y+2=2>y^2=0\) → derecha \(y+2\), izquierda \(y^2\)`, R`\(\int_{-1}^{2}(y+2-y^2)dy=\left[\frac{y^2}{2}+2y-\frac{y^3}{3}\right]_{-1}^{2}=\frac{10}{3}+\frac76=\frac92\)`,
     R`En dx habrías necesitado dos integrales (mira el simulador).`]},
  ],
  qs:[
   {q:R`Área entre \(y=x^2\) y \(y=2x\): límites y curva de arriba`, o:[R`0 a 2, arriba \(2x\)`,R`0 a 2, arriba \(x^2\)`,R`−2 a 2, arriba \(2x\)`,R`0 a 4, arriba \(2x\)`], e:'Prueba x = 1.', h:'Iguala y prueba un punto.'},
   {q:R`\(\int_0^2(2x-x^2)dx\)`, o:[R`\(\frac43\)`,R`\(\frac83\)`,'4',R`\(\frac23\)`], e:'4 − 8/3.', h:'x² − x³/3.'},
   {q:R`Región entre \(x=y^2\) y \(y=x-2\): ¿por qué dy?`, o:['En dx la curva de abajo cambia de fórmula en x = 1','En dx da negativo','x = y² no es integrable','Da igual'], e:'Abajo es −√x hasta x = 1 y luego x − 2.', h:'Dibuja.'},
   {q:R`\(\int_{-1}^{2}\left[(y+2)-y^2\right]dy\)`, o:[R`\(\frac92\)`,R`\(\frac94\)`,'9',R`\(\frac{10}{3}\)`], e:'10/3 − (−7/6) = 27/6.', h:'Cuidado con −1.'},
   {q:R`¿Qué da \(\int_0^\pi(\cos x-\sin x)dx\)?`, o:['−2 (no es el área: se cruzan en π/4)','2√2, es el área','0','2'], e:R`Área real: \(2\sqrt2\) partiendo en π/4.`, h:'Evalúa sen + cos.'},
   {q:R`Área entre \(y=x^2\) y \(y=4-x^2\)`, o:[R`\(\frac{16\sqrt2}{3}\)`,R`\(\frac{8\sqrt2}{3}\)`,R`\(\frac{32}{3}\)`,R`\(16\sqrt2\)`], e:'Cortes ±√2; 2∫₀^√2 (4 − 2x²).', h:'Simetría.'},
  ]},
/* ---------------- 10 DISCOS ---------------- */
{ id:'discos', code:'SEC-10', g:'apl', n:'Discos y arandelas', sub:'Sólidos de revolución · Taller 4', tgt:'TORNO_INDUSTRIAL', lab:'discos',
  lore: R`
  <div class="why">Calcula el volumen de un sólido que se forma al girar una región alrededor de un eje. Es la aplicación con más peso en el parcial.</div>
  <h3>Saberes previos de geometría</h3>
  <p>Área de un círculo: \(\pi r^2\). Volumen de un cilindro: \(\pi r^2h\). Un <b>disco</b> es un cilindro muy delgado: \(\pi R^2\,dx\). Una <b>arandela</b> es un disco con hueco: \(\pi(R^2-r^2)\,dx\).</p>
  <div class="formula">\[V_{\text{disco}}=\pi\int_a^bR^2\,dx\qquad V_{\text{arandela}}=\pi\int_a^b\big(R^2-r^2\big)\,dx\]</div>
  <p>\(R\) = distancia del <b>eje</b> a la curva <b>más lejana</b>. \(r\) = distancia del eje a la curva <b>más cercana</b> (si la región toca el eje, \(r=0\) → disco).</p>
  <h3>Receta</h3>
  <ol class="recipe">
   <li>Dibuja la región y el <b>eje de giro</b>.</li>
   <li>Rebanada <b>perpendicular al eje</b>. Eje horizontal → rebanada vertical → <b>dx</b>. Eje vertical → rebanada horizontal → <b>dy</b> (despeja x).</li>
   <li>R y r son <b>distancias</b> (siempre positivas): eje \(y=k\) → \(|f(x)-k|\); eje \(x=h\) → \(|g(y)-h|\).</li>
   <li>Límites: donde empieza y termina la región en la variable de integración.</li>
   <li>Expande \(R^2-r^2\) e integra.</li>
  </ol>
  <h3>Eje desplazado: la tabla que más sirve</h3>
  <div class="tscroll"><table class="t"><tr><th>Eje</th><th>Posición</th><th>R</th><th>r</th></tr>
   <tr><td>\(y=k\)</td><td>debajo de la región</td><td>\(\text{arriba}-k\)</td><td>\(\text{abajo}-k\)</td></tr>
   <tr><td>\(y=k\)</td><td>encima de la región</td><td>\(k-\text{abajo}\)</td><td>\(k-\text{arriba}\)</td></tr>
   <tr><td>\(x=h\)</td><td>izquierda de la región</td><td>\(\text{der}-h\)</td><td>\(\text{izq}-h\)</td></tr>
   <tr><td>\(x=h\)</td><td>derecha de la región</td><td>\(h-\text{izq}\)</td><td>\(h-\text{der}\)</td></tr></table></div>
  <div class="trap">\(R^2-r^2\neq(R-r)^2\). Y cuando el eje está encima, la curva lejana es la <b>de abajo</b>.</div>
  <h3>Secciones transversales (Taller 4, #23–27, #32)</h3>
  <p>Si el sólido no es de revolución pero se conoce el área \(A(x)\) de cada corte: \(V=\int_a^bA(x)\,dx\). Cuadrado de lado s: \(A=s^2\). Semicírculo de diámetro s: \(A=\frac{\pi}{8}s^2\).</p>`,
  ex:[
   {t:'Arandela con eje desplazado', q:R`Región entre \(y=x\) y \(y=x^2\), girada alrededor de \(y=2\)`, s:[
     R`Cortes: x = 0 y 1. En (0,1): \(x>x^2\) → arriba x, abajo x²`, R`El eje y = 2 está ENCIMA → \(R=2-x^2\) (curva de abajo, la lejana), \(r=2-x\)`,
     R`\(V=\pi\int_0^1\left[(2-x^2)^2-(2-x)^2\right]dx\)`, R`Expande: \((4-4x^2+x^4)-(4-4x+x^2)=x^4-5x^2+4x\)`,
     R`\(\pi\left[\frac{x^5}{5}-\frac{5x^3}{3}+2x^2\right]_0^1=\pi\left(\frac15-\frac53+2\right)=\frac{8\pi}{15}\)`]},
   {t:'Disco alrededor del eje y (5.2 #3b)', q:R`\(y=4-x^2\), primer cuadrante, alrededor del eje y`, s:[
     R`Eje vertical → rebanada horizontal → dy. Despeja: \(x=\sqrt{4-y}\)`, R`Toca el eje → disco con \(R=\sqrt{4-y}\), y de 0 a 4`, R`\(V=\pi\int_0^4(4-y)\,dy=\pi\left[4y-\frac{y^2}{2}\right]_0^4=8\pi\)`]},
  ],
  qs:[
   {q:R`\(y=\sqrt x\), \(0\le x\le4\), alrededor del eje x`, o:[R`\(8\pi\)`,R`\(16\pi\)`,R`\(4\pi\)`,R`\(\frac{16\pi}{3}\)`], e:R`\(\pi\int_0^4x\,dx\).`, h:'R² = x.'},
   {q:R`Entre \(y=x\) y \(y=x^2\), alrededor del eje x`, o:[R`\(\frac{2\pi}{15}\)`,R`\(\frac{\pi}{6}\)`,R`\(\frac{\pi}{15}\)`,R`\(\frac{\pi}{30}\)`], e:'π∫(x² − x⁴). π/30 sale si haces (R − r)².', h:'R² − r².'},
   {q:R`Misma región alrededor de \(y=2\): R y r`, o:[R`\(R=2-x^2,\ r=2-x\)`,R`\(R=2-x,\ r=2-x^2\)`,R`\(R=x-2,\ r=x^2-2\)`,R`\(R=x+2,\ r=x^2+2\)`], e:'Eje encima → lejana es la de abajo.', h:'¿Qué curva queda más lejos de y = 2?'},
   {q:R`5.2 #3(a): \(y=4-x^2\), 1er cuadrante, eje x`, o:[R`\(\frac{256\pi}{15}\)`,R`\(\frac{128\pi}{15}\)`,R`\(8\pi\)`,R`\(\frac{32\pi}{3}\)`], e:'π∫₀²(16 − 8x² + x⁴).', h:'Expande.'},
   {q:R`5.2 #3(b): misma región, eje y, con discos`, o:[R`\(\pi\int_0^4(4-y)dy=8\pi\)`,R`\(\pi\int_0^2(4-x^2)^2dx\)`,R`\(\pi\int_0^4(4-y)^2dy\)`,R`\(\pi\int_0^2x^2dx\)`], e:'dy, R² = 4 − y.', h:'Despeja x.'},
   {q:'¿Cuándo usar discos/arandelas?', o:['Rebanada perpendicular al eje','Rebanada paralela al eje','Solo con el eje x','Cuando la región toca el eje'], e:'Paralela → cascarones.', h:'Moneda.'},
   {q:R`Base: región entre \(y=1-x^2\) y \(y=0\); secciones ⟂ al eje x son cuadrados. Volumen:`, o:[R`\(\frac{16}{15}\)`,R`\(\frac{8}{15}\)`,R`\(\frac{16\pi}{15}\)`,R`\(\frac43\)`], e:R`Lado \(1-x^2\): \(\int_{-1}^{1}(1-x^2)^2dx=2\left(1-\frac23+\frac15\right)=\frac{16}{15}\). Sin π: no es de revolución.`, h:'A(x) = lado².'},
  ]},
/* ---------------- 11 CASCARONES ---------------- */
{ id:'cascarones', code:'SEC-11', g:'apl', n:'Cascarones cilíndricos', sub:'Método de capas · Taller 4', tgt:'CILINDRO_HUECO', lab:'cascarones',
  lore: R`
  <div class="why">A veces discos obliga a despejar x o a usar dos integrales. Cascarones usa la rebanada <b>paralela</b> al eje y evita eso.</div>
  <h3>Idea</h3>
  <p>El rectángulo paralelo al eje, al girar, forma un <b>tubo</b>. Si lo cortas y lo desenrollas es casi una lámina: largo = \(2\pi\cdot\text{radio}\) (circunferencia), alto = altura, grosor = dx.</p>
  <div class="formula">\[V=2\pi\int_a^b(\text{radio})(\text{altura})\,dx\]</div>
  <h3>Receta</h3>
  <ol class="recipe">
   <li>Dibuja la región y el eje.</li>
   <li>Rebanada <b>paralela al eje</b>. Eje vertical → rebanada vertical → <b>dx</b>. Eje horizontal → rebanada horizontal → <b>dy</b>.</li>
   <li><b>radio</b> = distancia de la rebanada al eje: eje y → x; eje \(x=h\) → \(|x-h|\); eje x → y; eje \(y=k\) → \(|y-k|\).</li>
   <li><b>altura</b> = arriba − abajo (en dx) o derecha − izquierda (en dy).</li>
   <li>Integra.</li>
  </ol>
  <h3>Discos vs cascarones</h3>
  <div class="tscroll"><table class="t"><tr><th></th><th>Eje horizontal</th><th>Eje vertical</th></tr>
   <tr><td>Discos / arandelas</td><td>dx</td><td>dy</td></tr>
   <tr><td>Cascarones</td><td>dy</td><td>dx</td></tr></table></div>
  <div class="tip">Escoge el método que te deje <b>una sola integral</b> y la variable en la que ya están escritas las curvas. Ambos dan el mismo volumen (Taller 4, cascarones #23).</div>
  <div class="trap">Eje \(x=5\) con la región a la izquierda: radio = \(5-x\), no \(x-5\). Y no olvides el \(2\pi\).</div>`,
  ex:[
   {t:'Cascarones #8', q:R`Región entre \(y=x^2\) y \(y=3x\), alrededor del eje y`, s:[
     R`Cortes: \(x^2=3x\Rightarrow x=0,3\). Arriba \(3x\)`, R`Eje vertical + cascarón → dx. radio = x, altura = \(3x-x^2\)`,
     R`\(V=2\pi\int_0^3x(3x-x^2)dx=2\pi\int_0^3(3x^2-x^3)dx\)`, R`\(=2\pi\left[x^3-\frac{x^4}{4}\right]_0^3=2\pi\left(27-\frac{81}{4}\right)=\frac{27\pi}{2}\)`]},
   {t:'Eje desplazado (#5)', q:R`\(y=\sqrt x\), \(x=5\), \(y=0\), alrededor de \(x=5\)`, s:[
     R`Región de x = 0 a x = 5, a la izquierda del eje → radio = \(5-x\), altura = \(\sqrt x\)`, R`\(V=2\pi\int_0^5(5-x)x^{1/2}dx=2\pi\int_0^5\left(5x^{1/2}-x^{3/2}\right)dx\)`,
     R`\(=2\pi\left[\frac{10}{3}x^{3/2}-\frac25x^{5/2}\right]_0^5=2\pi\cdot5\sqrt5\left(\frac{10}{3}-2\right)\)`, R`\(=\frac{40\sqrt5\,\pi}{3}\)`]},
  ],
  qs:[
   {q:R`#1: \(y=\frac1x\), x de 1 a 4, \(y=0\), eje y`, o:[R`\(6\pi\)`,R`\(3\pi\)`,R`\(2\pi\ln4\)`,R`\(\frac{3\pi}{4}\)`], e:'x·(1/x) = 1.', h:'radio x, altura 1/x.'},
   {q:R`#5: \(y=\sqrt x\), \(x=5\), \(y=0\), eje \(x=5\): radio`, o:[R`\(5-x\)`,R`\(x-5\)`,R`\(x\)`,R`\(\sqrt x-5\)`], e:'Región a la izquierda.', h:'Distancia positiva.'},
   {q:R`#8: \(y=x^2\), \(y=3x\), eje y`, o:[R`\(\frac{27\pi}{2}\)`,R`\(\frac{27\pi}{4}\)`,R`\(9\pi\)`,R`\(\frac{81\pi}{2}\)`], e:'Ver ejemplo.', h:'altura 3x − x².'},
   {q:R`#4: \(y=9-x^2\) (x ≥ 0), ejes, alrededor del eje y`, o:[R`\(\frac{81\pi}{2}\)`,R`\(81\pi\)`,R`\(\frac{81\pi}{4}\)`,R`\(18\pi\)`], e:'2π∫₀³(9x − x³).', h:'radio x.'},
   {q:R`Entre \(y=x\) y \(y=x^2\), eje x, con cascarones:`, o:[R`\(2\pi\int_0^1y(\sqrt y-y)dy\)`,R`\(2\pi\int_0^1x(x-x^2)dx\)`,R`\(2\pi\int_0^1y(y-\sqrt y)dy\)`,R`\(\pi\int_0^1(y-y^2)dy\)`], e:'Da 2π/15, igual que arandelas.', h:'En dy, ¿quién está a la derecha?'},
   {q:R`Eje \(y=-2\) con cascarones: variable y radio`, o:[R`dy, radio \(y+2\)`,R`dx, radio \(x+2\)`,R`dy, radio \(y-2\)`,R`dx, radio \(y+2\)`], e:'Eje horizontal → dy.', h:'y − (−2).'},
  ]},
/* ---------------- 12 LONGITUD ---------------- */
{ id:'longitud', code:'SEC-12', g:'apl', n:'Longitud de curva', sub:'Cartesianas y paramétricas · Taller 4', tgt:'SERPIENTE_DE_ARCO', lab:'longitud',
  lore: R`
  <div class="why">Mide cuánto mide una curva. La fórmula es Pitágoras aplicado a pedacitos.</div>
  <h3>De dónde sale</h3>
  <p>Un pedacito de curva es casi un segmento recto: \(\Delta s=\sqrt{\Delta x^2+\Delta y^2}=\sqrt{1+\left(\frac{\Delta y}{\Delta x}\right)^2}\Delta x\). Por el Teorema del Valor Medio, \(\frac{\Delta y}{\Delta x}=f'(c)\). Suma de Riemann → integral.</p>
  <div class="formula">\[L=\int_a^b\sqrt{1+\big(f'(x)\big)^2}\,dx\qquad L=\int_c^d\sqrt{1+\big(g'(y)\big)^2}\,dy\ \ (x=g(y))\]</div>
  <h4>Paramétricas: x = x(t), y = y(t)</h4>
  <div class="formula">\[L=\int_{t_0}^{t_1}\sqrt{\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2}\,dt\]</div>
  <h3>Receta</h3>
  <ol class="recipe">
   <li>Simplifica \(y\) antes de derivar (separa fracciones: SEC-00).</li>
   <li>Deriva \(y'\) (SEC-02).</li>
   <li>Calcula \(1+(y')^2\) y <b>expande</b> todo.</li>
   <li>Reconoce un <b>cuadrado perfecto</b> (casi siempre lo es en los talleres).</li>
   <li>Saca la raíz, integra, evalúa.</li>
  </ol>
  <div class="tip"><b>Patrón:</b> si \(y'=A-B\) con \(AB=\frac14\), entonces \(1+(y')^2=(A+B)^2\). Ejemplo: \(y'=\frac{x^2}{2}-\frac{1}{2x^2}\) → \(\sqrt{1+y'^2}=\frac{x^2}{2}+\frac{1}{2x^2}\).</div>
  <div class="tip">Cicloide (#19): \(1-\cos\theta=2\sin^2\frac\theta2\) → la raíz se simplifica a \(2a\left|\sin\frac\theta2\right|\).</div>
  <div class="tip">Si no sale un cuadrado perfecto (ej. \(\sqrt{1+\cos^2x}\)), el taller pide <b>aproximar</b> (regla de la parábola / Simpson, #13–16).</div>
  <div class="trap">\(\sqrt{1+y'^2}\neq1+y'\). Y si la curva es \(x=g(y)\), los límites son en y.</div>`,
  ex:[
   {t:'Taller 4, #4', q:R`\(y=\frac{x^4+3}{6x}\), \(1\le x\le3\)`, s:[
     R`Separa: \(y=\frac{x^3}{6}+\frac{1}{2x}\)`, R`\(y'=\frac{x^2}{2}-\frac{1}{2x^2}\)`, R`\((y')^2=\frac{x^4}{4}-\frac12+\frac{1}{4x^4}\Rightarrow1+(y')^2=\frac{x^4}{4}+\frac12+\frac{1}{4x^4}=\left(\frac{x^2}{2}+\frac{1}{2x^2}\right)^2\)`,
     R`\(L=\int_1^3\left(\frac{x^2}{2}+\frac{1}{2x^2}\right)dx=\left[\frac{x^3}{6}-\frac{1}{2x}\right]_1^3\)`, R`\(=\left(\frac{27}{6}-\frac16\right)-\left(\frac16-\frac12\right)=\frac{13}{3}+\frac13=\frac{14}{3}\)`]},
   {t:'Paramétrica (#7)', q:R`\(x=\frac{t^3}{3},\ y=\frac{t^2}{2},\ 0\le t\le1\)`, s:[
     R`\(x'=t^2,\ y'=t\)`, R`\(\sqrt{t^4+t^2}=\sqrt{t^2(t^2+1)}=t\sqrt{t^2+1}\) (t ≥ 0)`, R`\(u=t^2+1\): \(\int_0^1t\sqrt{t^2+1}\,dt=\frac13(t^2+1)^{3/2}\Big|_0^1=\frac{2\sqrt2-1}{3}\)`]},
  ],
  qs:[
   {q:R`#2: \(y=\frac23(x^2+1)^{3/2}\). \(1+(y')^2=\,?\)`, o:[R`\((2x^2+1)^2\)`,R`\(4x^2(x^2+1)\)`,R`\((x^2+1)^2\)`,R`\(1+4x^2\)`], e:'4x⁴ + 4x² + 1.', h:'Expande.'},
   {q:R`Longitud de esa curva de 1 a 2:`, o:[R`\(\frac{17}{3}\)`,R`\(\frac{14}{3}\)`,R`\(\frac{19}{3}\)`,'5'], e:'∫(2x² + 1) de 1 a 2.', h:'Integra 2x² + 1.'},
   {q:R`#4: \(y=\frac{x^4+3}{6x}\), de 1 a 3`, o:[R`\(\frac{14}{3}\)`,R`\(\frac{13}{3}\)`,R`\(\frac{17}{3}\)`,R`\(\frac{28}{3}\)`], e:'Ver ejemplo resuelto.', h:'Separa la fracción.'},
   {q:R`#1: \(y=4x^{3/2}\). Dentro de la raíz:`, o:[R`\(1+36x\)`,R`\(1+6x\)`,R`\(1+36x^2\)`,R`\(1+16x^3\)`], e:'y′ = 6√x.', h:'Deriva.'},
   {q:R`#7: \(x=\frac{t^3}{3},\ y=\frac{t^2}{2}\), t de 0 a 1`, o:[R`\(\frac{2\sqrt2-1}{3}\)`,R`\(\frac{\sqrt2}{3}\)`,R`\(\frac{2\sqrt2}{3}\)`,R`\(\frac{\sqrt2-1}{2}\)`], e:'Ver ejemplo resuelto.', h:'Factor t².'},
   {q:R`#11: \(y=2x+3\), de x = 1 a x = 3`, o:[R`\(2\sqrt5\)`,R`\(\sqrt5\)`,R`\(4\sqrt5\)`,R`\(2\sqrt3\)`], e:'√5 · 2. Coincide con la distancia.', h:'y′ = 2.'},
   {q:R`#9: \(x=4\sin t,\ y=4\cos t-5\), t de 0 a π`, o:[R`\(4\pi\)`,R`\(8\pi\)`,R`\(2\pi\)`,R`\(16\pi\)`], e:'Velocidad constante 4.', h:'sen² + cos².'},
  ]},
/* ---------------- FINAL ---------------- */
{ id:'boss', code:'SEC-XX', g:'fin', n:'Evaluación final: el parcial', sub:'Mixto · 10 objetivos · 15 min · 4 de integridad', tgt:'PARCIAL_SUPREMO', boss:true, time:15*60, hearts:4,
  lore: R`
  <div class="why">Simulación del parcial: todo mezclado y nadie te dice qué método usar. Reconocer el método es la mitad de la nota.</div>
  <h3>Árbol de decisión: métodos</h3>
  <ol class="recipe">
   <li>¿Está en la tabla (o lo está tras reescribir con álgebra)? → directo (SEC-00, SEC-03).</li>
   <li>¿Ves una función y su derivada? → <b>sustitución u</b>.</li>
   <li>¿Producto de tipos distintos, o ln / arctan solos? → <b>partes</b>.</li>
   <li>¿Potencias de sen, cos, tan, sec? → <b>identidades</b> (SEC-05).</li>
   <li>¿Cuadrática que no factoriza? → <b>completar cuadrado</b>. ¿Con raíz? → <b>sustitución trig</b>.</li>
   <li>¿Polinomio sobre polinomio que factoriza? → <b>fracciones parciales</b> (divide si es impropia).</li>
  </ol>
  <h3>Árbol de decisión: aplicaciones</h3>
  <ol class="recipe">
   <li>Dibuja región y eje. Halla cortes.</li>
   <li>Área → arriba − abajo (o der − izq).</li>
   <li>Volumen → rebanada ⟂ eje: disco/arandela · rebanada ∥ eje: cascarón. Escoge el de una sola integral.</li>
   <li>Longitud → 1 + (y')², busca cuadrado perfecto.</li>
  </ol>`,
  ex:[],
  qs:[
   {q:R`Método para \(\int\frac{x\,dx}{x^2+4}\)`, o:[R`Sustitución \(u=x^2+4\)`,R`\(x=2\tan\theta\)`,'Fracciones parciales','Partes'], e:R`\(\frac12\ln(x^2+4)+C\).`, h:'Función y su derivada.'},
   {q:R`Método para \(\int\frac{dx}{x^2\sqrt{x^2+9}}\)`, o:[R`\(x=3\tan\theta\)`,R`\(x=3\sin\theta\)`,R`\(x=3\sec\theta\)`,R`\(u=x^2+9\)`], e:'a² + x² → tan.', h:'Suma dentro de la raíz.'},
   {q:R`\(\int x\cos3x\,dx\)`, o:[R`\(\frac x3\sin3x+\frac19\cos3x+C\)`,R`\(\frac x3\sin3x-\frac19\cos3x+C\)`,R`\(3x\sin3x+\cos3x+C\)`,R`\(\frac{x^2}{2}\sin3x+C\)`], e:'Partes con u = x.', h:'∫sen 3x = −⅓cos 3x.'},
   {q:R`\(\int\frac{(x+1)dx}{x^2-x}\)`, o:[R`\(-\ln|x|+2\ln|x-1|+C\)`,R`\(\ln|x|+2\ln|x-1|+C\)`,R`\(2\ln|x|-\ln|x-1|+C\)`,R`\(\ln|x^2-x|+C\)`], e:'A = −1, B = 2.', h:'Tapado en 0 y 1.'},
   {q:R`Primer paso en \(\int\sin^5x\cos^2x\,dx\)`, o:[R`Separar \(\sin x\), \(\sin^4x=(1-\cos^2x)^2\), \(u=\cos x\)`,'Ángulo medio en ambas','Partes con u = sen⁵x',R`\(u=\sin x\)`], e:'Seno con potencia impar.', h:'¿Cuál es impar?'},
   {q:R`\(\int_0^{\pi/2}x\cos x\,dx\)`, o:[R`\(\frac\pi2-1\)`,R`\(\frac\pi2\)`,R`\(1-\frac\pi2\)`,R`\(\frac\pi2+1\)`], e:'[x sen x + cos x].', h:'Partes.'},
   {q:R`Área total entre \(y=x^3\) y \(y=x\)`, o:[R`\(\frac12\)`,'0',R`\(\frac14\)`,'1'], e:'Se cruzan en 0: 2∫₀¹(x − x³).', h:'Cortes −1, 0, 1.'},
   {q:R`\(y=\sqrt x\), \(0\le x\le4\), eje y, cascarones`, o:[R`\(\frac{128\pi}{5}\)`,R`\(\frac{64\pi}{5}\)`,R`\(8\pi\)`,R`\(\frac{256\pi}{15}\)`], e:'2π∫x^{3/2}.', h:'radio x.'},
   {q:R`Entre \(y=x^2\) y \(y=4\), eje \(y=-1\): planteamiento`, o:[R`\(\pi\int_{-2}^{2}\left[25-(x^2+1)^2\right]dx\)`,R`\(\pi\int_{-2}^{2}(16-x^4)dx\)`,R`\(\pi\int_{-2}^{2}(5-x^2)^2dx\)`,R`\(\pi\int_{-2}^{2}\left[(x^2+1)^2-25\right]dx\)`], e:'R = 5, r = x² + 1.', h:'Distancias a −1.'},
   {q:R`Longitud de \(y=\frac{x^2}{2}-\frac{\ln x}{4}\), \(1\le x\le2\)`, o:[R`\(\frac32+\frac{\ln2}{4}\)`,R`\(\frac32-\frac{\ln2}{4}\)`,R`\(\frac32\)`,R`\(2+\frac{\ln2}{4}\)`], e:R`\(\sqrt{1+y'^2}=x+\frac{1}{4x}\).`, h:'AB = ¼.'},
  ]},
];

const DEFINIDA = { id:'definida', code:'SEC-08', g:'f4', n:'Integral definida y TFC', sub:'Riemann, evaluar [F]ₐᵇ, propiedades, signo', tgt:'NODO_ACUMULADOR',
  req:['basica'], uses:'Todas las aplicaciones: área, volumen y longitud son integrales definidas',
  lore: R`
  <div class="why">La indefinida te da una <b>familia de funciones</b> (+ C). La definida te da un <b>número</b>: área, volumen, longitud. Todo el corte 2 del parcial termina evaluando una definida.</div>
  <h3>Idea: suma de Riemann</h3>
  <ol class="recipe">
   <li>Divide [a, b] en n pedazos de ancho \(\Delta x=\frac{b-a}{n}\).</li>
   <li>En cada pedazo levanta un rectángulo de alto \(f(x_i)\). Su área es \(f(x_i)\Delta x\).</li>
   <li>Suma todos: \(\sum_{i=1}^nf(x_i)\Delta x\). Es una aproximación.</li>
   <li>Haz los rectángulos infinitamente delgados (\(n\to\infty\)): el resultado exacto es la integral.</li>
  </ol>
  <div class="formula">\[\int_a^bf(x)\,dx=\lim_{n\to\infty}\sum_{i=1}^nf(x_i)\,\Delta x\]</div>
  <p>El símbolo ∫ es una S alargada ("suma") y dx es el ancho infinitesimal. Por eso en aplicaciones siempre piensas "<b>(lo que mide un pedacito) · dx</b>" y luego sumas.</p>
  <h3>Teorema Fundamental del Cálculo (TFC)</h3>
  <div class="formula">\[\int_a^bf(x)\,dx=F(b)-F(a)=\Big[F(x)\Big]_a^b\quad\text{donde }F'(x)=f(x)\]</div>
  <h3>Procedimiento para evaluar (sin saltarse nada)</h3>
  <ol class="recipe">
   <li>Halla una antiderivada F (sin + C: se cancelaría al restar).</li>
   <li>Escribe \(\big[F(x)\big]_a^b\).</li>
   <li>Calcula F(b) reemplazando x = b <b>con paréntesis</b>.</li>
   <li>Calcula F(a) reemplazando x = a <b>con paréntesis</b>.</li>
   <li>Resta F(b) − F(a) poniendo F(a) <b>entre paréntesis</b> (el signo menos afecta a todo).</li>
   <li>Simplifica fracciones (SEC-00).</li>
  </ol>
  <div class="formula">\[\begin{aligned}\int_1^3\left(x^2-2x\right)dx&=\left[\frac{x^3}{3}-x^2\right]_1^3\\&=\left(\frac{27}{3}-9\right)-\left(\frac13-1\right)\\&=(9-9)-\left(-\frac23\right)=0+\frac23=\frac23\end{aligned}\]</div>
  <h3>Área con signo</h3>
  <p>La integral cuenta como <b>negativo</b> lo que queda debajo del eje x. Por eso \(\int_0^{2\pi}\sin x\,dx=0\): la parte de arriba y la de abajo se cancelan. Para un <b>área</b> geométrica hay que partir donde la función cambia de signo (SEC-14).</p>
  <h3>Propiedades</h3>
  <div class="tscroll"><table class="t"><tr><th>Propiedad</th><th>Uso</th></tr>
   <tr><td>\(\int_a^af=0\)</td><td>intervalo de ancho 0</td></tr>
   <tr><td>\(\int_b^af=-\int_a^bf\)</td><td>invertir límites cambia el signo</td></tr>
   <tr><td>\(\int_a^b(f\pm g)=\int_a^bf\pm\int_a^bg\), \(\int_a^bkf=k\int_a^bf\)</td><td>separar e integrar término a término</td></tr>
   <tr><td>\(\int_a^bf=\int_a^cf+\int_c^bf\)</td><td>partir cuando las curvas se cruzan</td></tr>
   <tr><td>f impar (\(f(-x)=-f(x)\)): \(\int_{-a}^af=0\)</td><td>\(x^3,\ \sin x,\ x\cos x\)</td></tr>
   <tr><td>f par (\(f(-x)=f(x)\)): \(\int_{-a}^af=2\int_0^af\)</td><td>\(x^2,\ \cos x,\ 4-x^2\) → evaluar en 0 es más fácil</td></tr></table></div>
  <h3>Sustitución en una definida</h3>
  <p>Dos caminos válidos: (1) cambiar los límites a u y no volver a x; (2) hallar la antiderivada en x y evaluar con los límites originales. <b>No mezcles</b>.</p>
  <h3>Interpretación geométrica (atajo)</h3>
  <p>Si la integral es el área de una figura conocida, úsala: \(\int_{-r}^r\sqrt{r^2-x^2}dx=\frac{\pi r^2}{2}\) (semicírculo), \(\int_0^r\sqrt{r^2-x^2}dx=\frac{\pi r^2}{4}\) (cuarto de círculo).</p>`,
  ex:[
   {t:'Evaluación con negativos', q:R`\(\displaystyle\int_{-1}^{2}(3x^2-2x+1)\,dx\)`, s:[
     R`Antiderivada término a término: \(3\cdot\frac{x^3}{3}-2\cdot\frac{x^2}{2}+x=x^3-x^2+x\)`,
     R`F(2): \((2)^3-(2)^2+(2)=8-4+2=6\)`,
     R`F(−1): \((-1)^3-(-1)^2+(-1)=-1-1-1=-3\)`,
     R`Resta: \(6-(-3)=6+3=9\)`]},
   {t:'Sustitución cambiando límites', q:R`\(\displaystyle\int_0^{\pi/2}\sin x\cos^2x\,dx\)`, s:[
     R`\(u=\cos x\), \(du=-\sin x\,dx\Rightarrow\sin x\,dx=-du\)`,
     R`Límites: \(x=0\Rightarrow u=\cos0=1\); \(x=\frac\pi2\Rightarrow u=\cos\frac\pi2=0\)`,
     R`\(\int_1^0u^2(-du)=\int_0^1u^2du\) (invertir límites quita el menos)`,
     R`\(\left[\frac{u^3}{3}\right]_0^1=\frac13-0=\frac13\)`]},
   {t:'Usar paridad', q:R`\(\displaystyle\int_{-\sqrt2}^{\sqrt2}(4-2x^2)\,dx\)`, s:[
     R`\(4-2x^2\) es par (cambiar x por −x no la altera) → \(2\int_0^{\sqrt2}(4-2x^2)dx\)`,
     R`Antiderivada: \(4x-\frac{2x^3}{3}\)`,
     R`En \(\sqrt2\): \(4\sqrt2-\frac{2(\sqrt2)^3}{3}\). Como \((\sqrt2)^3=\sqrt2\cdot\sqrt2\cdot\sqrt2=2\sqrt2\): \(4\sqrt2-\frac{4\sqrt2}{3}=\frac{12\sqrt2-4\sqrt2}{3}=\frac{8\sqrt2}{3}\)`,
     R`En 0: 0. Multiplico por 2: \(\frac{16\sqrt2}{3}\)`]},
  ],
  qs:[
   {q:R`\(\int_1^3(x^2-2x)\,dx\)`, o:[R`\(\frac23\)`,R`\(-\frac23\)`,'0',R`\(\frac{26}{3}\)`], e:'(9 − 9) − (1/3 − 1).', h:'Paréntesis en F(1).'},
   {q:R`\(\int_{-1}^{2}(3x^2-2x+1)dx\)`, o:['9','3','6','12'], e:'6 − (−3).', h:'F(−1) = −3.'},
   {q:R`\(\int_0^{2\pi}\sin x\,dx\)`, o:['0','4','2','2π'], e:'Arriba y abajo se cancelan: [−cos x] = −1 − (−1).', h:'Área con signo.'},
   {q:R`\(\int_3^1f(x)dx\) si \(\int_1^3f(x)dx=5\)`, o:['−5','5','0','No se puede saber'], e:'Invertir límites cambia el signo.', h:'Propiedad.'},
   {q:R`\(\int_{-3}^{3}x\cos x\,dx\)`, o:['0','6','2 sen 3','No se puede'], e:'x cos x es impar.', h:'f(−x) = ?'},
   {q:R`\(\int_{-3}^{3}\sqrt{9-x^2}\,dx\)`, o:[R`\(\frac{9\pi}{2}\)`,R`\(9\pi\)`,R`\(\frac{9\pi}{4}\)`,R`\(3\pi\)`], e:'Semicírculo de radio 3: π·9/2.', h:'Geometría.'},
   {q:R`\(\int_0^{\pi/2}\sin x\cos^2x\,dx\)`, o:[R`\(\frac13\)`,R`\(-\frac13\)`,'1','0'], e:'u = cos x, de 1 a 0.', h:'Cambia límites.'},
  ]};

const EXTRA_EX = {
 partes: [
  {t:'Partes dos veces SIN tabla (Taller 4.32)', q:R`\(\displaystyle\int x^2e^{3x}\,dx\)`, s:[
   R`LIATE: \(u=x^2\) (A), \(dv=e^{3x}dx\) (E)`, R`\(du=2x\,dx\); \(v=\int e^{3x}dx=\frac{e^{3x}}{3}\)`,
   R`Fórmula: \(x^2\cdot\frac{e^{3x}}{3}-\int\frac{e^{3x}}{3}\cdot2x\,dx=\frac{x^2e^{3x}}{3}-\frac23\int xe^{3x}dx\)`,
   R`Segunda vez para \(\int xe^{3x}dx\): \(u=x,\ dv=e^{3x}dx\Rightarrow du=dx,\ v=\frac{e^{3x}}3\)`,
   R`\(\int xe^{3x}dx=\frac{xe^{3x}}{3}-\int\frac{e^{3x}}{3}dx=\frac{xe^{3x}}{3}-\frac{e^{3x}}{9}\)`,
   R`Sustituye (cuidado con el \(-\frac23\) que multiplica a TODO): \(\frac{x^2e^{3x}}{3}-\frac23\left(\frac{xe^{3x}}{3}-\frac{e^{3x}}{9}\right)\)`,
   R`Reparte: \(\frac{x^2e^{3x}}{3}-\frac{2xe^{3x}}{9}+\frac{2e^{3x}}{27}\)`, R`Factor común: \(e^{3x}\left(\frac{x^2}{3}-\frac{2x}{9}+\frac{2}{27}\right)+C\)`]},
  {t:'Función inversa sola', q:R`\(\displaystyle\int\arctan x\,dx\)`, s:[
   R`\(u=\arctan x,\ dv=dx\Rightarrow du=\frac{dx}{1+x^2},\ v=x\)`, R`\(x\arctan x-\int\frac{x\,dx}{1+x^2}\)`,
   R`Sustitución \(w=1+x^2\), \(dw=2x\,dx\): \(\int\frac{x\,dx}{1+x^2}=\frac12\ln(1+x^2)\)`, R`\(x\arctan x-\frac12\ln(1+x^2)+C\)`]},
 ],
 potencias: [
  {t:'Ambas pares (paso a paso)', q:R`\(\displaystyle\int\sin^2x\cos^2x\,dx\)`, s:[
   R`Ambas potencias pares → reducción. Atajo: \(\sin x\cos x=\frac12\sin2x\) (de \(\sin2x=2\sin x\cos x\))`,
   R`\(\sin^2x\cos^2x=(\sin x\cos x)^2=\frac14\sin^22x\)`, R`Reducción con ángulo 2x: \(\sin^22x=\frac{1-\cos4x}{2}\)`,
   R`\(\frac14\cdot\frac{1-\cos4x}{2}=\frac{1-\cos4x}{8}\)`, R`Integra: \(\frac x8-\frac18\cdot\frac{\sin4x}{4}=\frac x8-\frac{\sin4x}{32}+C\)`]},
 ],
 cuadrado: [
  {t:'Taller 5.25 (x arriba y raíz)', q:R`\(\displaystyle\int\frac{(2x+4)\,dx}{\sqrt{4x-x^2}}\)`, s:[
   R`Lo de adentro: \(D=4x-x^2\), su derivada \(D'=4-2x\)`,
   R`Escribo el numerador con D': \(2x+4=-(4-2x)+8\). Verifico: \(-4+2x+8=2x+4\) ✓`,
   R`Separo: \(-\int\frac{(4-2x)dx}{\sqrt{4x-x^2}}+8\int\frac{dx}{\sqrt{4x-x^2}}\)`,
   R`Primera (w = D, dw = D'dx): \(-\int w^{-1/2}dw=-2\sqrt w=-2\sqrt{4x-x^2}\)`,
   R`Segunda: completo cuadrado \(4x-x^2=-(x^2-4x+4)+4=4-(x-2)^2\)`,
   R`\(8\int\frac{dx}{\sqrt{4-(x-2)^2}}=8\arcsin\frac{x-2}{2}\)`, R`Total: \(-2\sqrt{4x-x^2}+8\arcsin\frac{x-2}{2}+C\)`]},
 ],
 trig: [
  {t:'Taller 6.26', q:R`\(\displaystyle\int\frac{x^2\,dx}{\sqrt{1-x^2}}\)`, s:[
   R`\(1-x^2\), a = 1 → \(x=\sin\theta\), \(dx=\cos\theta\,d\theta\), \(\sqrt{1-x^2}=\cos\theta\)`,
   R`\(\int\frac{\sin^2\theta\cdot\cos\theta}{\cos\theta}d\theta=\int\sin^2\theta\,d\theta\)`,
   R`Reducción: \(\int\frac{1-\cos2\theta}{2}d\theta=\frac\theta2-\frac{\sin2\theta}{4}\)`,
   R`\(\sin2\theta=2\sin\theta\cos\theta\Rightarrow\frac\theta2-\frac{\sin\theta\cos\theta}{2}\)`,
   R`Triángulo: \(\sin\theta=x\) (op x, hip 1) → ady \(\sqrt{1-x^2}\), \(\cos\theta=\sqrt{1-x^2}\), \(\theta=\arcsin x\)`,
   R`\(\frac12\arcsin x-\frac12x\sqrt{1-x^2}+C\)`]},
  {t:'Taller 6.23 (secante)', q:R`\(\displaystyle\int\frac{dx}{x\sqrt{x^2-9}}\)`, s:[
   R`\(x^2-a^2\), a = 3 → \(x=3\sec\theta\), \(dx=3\sec\theta\tan\theta\,d\theta\)`,
   R`\(\sqrt{x^2-9}=\sqrt{9\sec^2\theta-9}=\sqrt{9\tan^2\theta}=3\tan\theta\)`,
   R`\(\int\frac{3\sec\theta\tan\theta\,d\theta}{3\sec\theta\cdot3\tan\theta}=\int\frac13d\theta=\frac\theta3\)`,
   R`\(\sec\theta=\frac x3\Rightarrow\theta=\text{arcsec}\frac x3\)`, R`\(\frac13\text{arcsec}\frac x3+C\)`]},
 ],
 fracciones: [
  {t:'Taller 7.15 (cuadrático irreducible, completo)', q:R`\(\displaystyle\int\frac{dx}{x^3+1}\)`, s:[
   R`Factorizo (suma de cubos): \(x^3+1=(x+1)(x^2-x+1)\); \(\Delta=1-4<0\) → irreducible`,
   R`Plantilla: \(\frac{1}{(x+1)(x^2-x+1)}=\frac{A}{x+1}+\frac{Bx+C}{x^2-x+1}\)`,
   R`Multiplico por el denominador: \(1=A(x^2-x+1)+(Bx+C)(x+1)\)`,
   R`x = −1: \(1=A(1+1+1)\Rightarrow A=\frac13\)`,
   R`Coeficiente de x²: \(0=A+B\Rightarrow B=-\frac13\). Término independiente (x = 0): \(1=A+C\Rightarrow C=\frac23\)`,
   R`Primera: \(\frac13\ln|x+1|\)`,
   R`Segunda: \(\frac{-\frac13x+\frac23}{x^2-x+1}=-\frac13\cdot\frac{x-2}{x^2-x+1}\). Numerador con D' = 2x − 1: \(x-2=\frac12(2x-1)-\frac32\)`,
   R`\(-\frac13\left[\frac12\ln(x^2-x+1)-\frac32\int\frac{dx}{(x-\frac12)^2+\frac34}\right]\)`,
   R`\(\int\frac{dx}{(x-\frac12)^2+\frac34}=\frac{2}{\sqrt3}\arctan\frac{2x-1}{\sqrt3}\)`,
   R`Total: \(\frac13\ln|x+1|-\frac16\ln(x^2-x+1)+\frac{1}{\sqrt3}\arctan\frac{2x-1}{\sqrt3}+C\)`]},
 ],
 area: [
  {t:'Curvas que se cruzan', q:R`Área entre \(y=\sin x\) y \(y=\cos x\) en \([0,\pi]\)`, s:[
   R`Grafico ambas (SEC-04). Corte: \(\sin x=\cos x\Rightarrow\tan x=1\Rightarrow x=\frac\pi4\)`,
   R`Prueba en x = 0: cos 0 = 1 &gt; sen 0 = 0 → en \([0,\frac\pi4]\) arriba cos`, R`Prueba en \(x=\frac\pi2\): sen = 1 &gt; cos = 0 → en \([\frac\pi4,\pi]\) arriba sen`,
   R`\(A=\int_0^{\pi/4}(\cos x-\sin x)dx+\int_{\pi/4}^{\pi}(\sin x-\cos x)dx\)`,
   R`Primera: \([\sin x+\cos x]_0^{\pi/4}=\left(\frac{\sqrt2}2+\frac{\sqrt2}2\right)-(0+1)=\sqrt2-1\)`,
   R`Segunda: \([-\cos x-\sin x]_{\pi/4}^{\pi}=(1-0)-\left(-\frac{\sqrt2}2-\frac{\sqrt2}2\right)=1+\sqrt2\)`,
   R`Total: \((\sqrt2-1)+(1+\sqrt2)=2\sqrt2\)`]},
 ],
 discos: [
  {t:'Taller 4, discos #1', q:R`\(y=x^2+1\), \(x=0\), \(x=2\), \(y=0\), alrededor del eje x`, s:[
   R`Grafico: U subida 1, entre x = 0 y 2 (puntos (0,1), (1,2), (2,5))`, R`Eje x horizontal, la región toca el eje → disco, rebanada vertical, dx`,
   R`\(R=x^2+1\). \(V=\pi\int_0^2(x^2+1)^2dx\)`, R`Expando: \((x^2+1)^2=x^4+2x^2+1\)`,
   R`\(\pi\left[\frac{x^5}{5}+\frac{2x^3}{3}+x\right]_0^2=\pi\left(\frac{32}{5}+\frac{16}{3}+2\right)\)`,
   R`Común denominador 15: \(\frac{96}{15}+\frac{80}{15}+\frac{30}{15}=\frac{206}{15}\Rightarrow V=\frac{206\pi}{15}\)`]},
 ],
 cascarones: [
  {t:'Eje desplazado a la derecha', q:R`\(y=x^2\), \(y=0\), \(x=1\), alrededor de \(x=2\)`, s:[
   R`Región bajo la parábola de x = 0 a 1. Eje vertical x = 2, a la DERECHA de la región`,
   R`Cascarón (rebanada vertical ∥ eje): radio = \(2-x\), altura = \(x^2-0=x^2\)`,
   R`\(V=2\pi\int_0^1(2-x)x^2dx=2\pi\int_0^1(2x^2-x^3)dx\)`,
   R`\(2\pi\left[\frac{2x^3}{3}-\frac{x^4}{4}\right]_0^1=2\pi\left(\frac23-\frac14\right)=2\pi\cdot\frac{5}{12}=\frac{5\pi}{6}\)`]},
 ],
 longitud: [
  {t:'Cicloide (Taller 4, #19)', q:R`\(x=a(\theta-\sin\theta),\ y=a(1-\cos\theta)\), un arco: \(0\le\theta\le2\pi\)`, s:[
   R`\(\frac{dx}{d\theta}=a(1-\cos\theta)\); \(\frac{dy}{d\theta}=a\sin\theta\)`,
   R`Suma de cuadrados: \(a^2(1-2\cos\theta+\cos^2\theta)+a^2\sin^2\theta=a^2(2-2\cos\theta)\) (usé \(\cos^2+\sin^2=1\))`,
   R`\(=2a^2(1-\cos\theta)=2a^2\cdot2\sin^2\frac\theta2=4a^2\sin^2\frac\theta2\)`,
   R`Raíz: \(2a\sin\frac\theta2\) (positivo en \([0,2\pi]\))`,
   R`\(L=\int_0^{2\pi}2a\sin\frac\theta2d\theta=2a\left[-2\cos\frac\theta2\right]_0^{2\pi}=2a(2+2)=8a\)`]},
 ],
};

const TRIG_MORE = R`
  <h3>De dónde salen las identidades</h3>
  <p><b>Círculo unitario:</b> un punto a ángulo θ sobre un círculo de radio 1 tiene coordenadas \((\cos\theta,\sin\theta)\). Por Pitágoras \(x^2+y^2=1\):</p>
  <div class="formula">\[\cos^2\theta+\sin^2\theta=1\]</div>
  <div class="formula">\[\begin{aligned}\frac{\sin^2\theta}{\cos^2\theta}+\frac{\cos^2\theta}{\cos^2\theta}&=\frac{1}{\cos^2\theta}&&\text{(divido todo entre }\cos^2)\\\tan^2\theta+1&=\sec^2\theta\end{aligned}\]</div>
  <div class="formula">\[\begin{aligned}\cos2x&=1-2\sin^2x&&\text{(ángulo doble)}\\2\sin^2x&=1-\cos2x&&\text{(despejo)}\\\sin^2x&=\frac{1-\cos2x}{2}\end{aligned}\]</div>
  <p class="small">Con \(\cos2x=2\cos^2x-1\) sale de la misma forma \(\cos^2x=\frac{1+\cos2x}{2}\).</p>`;

const DERIV_MORE = R`
  <h3>Procedimiento de la regla de la cadena</h3>
  <ol class="recipe">
   <li>Identifica la función <b>de afuera</b> (la última operación que harías con calculadora) y la <b>de adentro</b>.</li>
   <li>Deriva la de afuera dejando la de adentro <b>intacta</b>.</li>
   <li>Multiplica por la derivada de la de adentro.</li>
   <li>Simplifica.</li>
  </ol>
  <div class="tscroll"><table class="t"><tr><th>Función</th><th>Afuera</th><th>Adentro</th><th>Derivada</th></tr>
   <tr><td>\(\sqrt{1+36x}\)</td><td>\(\sqrt{\square}\)</td><td>\(1+36x\)</td><td>\(\frac{1}{2\sqrt{1+36x}}\cdot36=\frac{18}{\sqrt{1+36x}}\)</td></tr>
   <tr><td>\(\cos^3x=(\cos x)^3\)</td><td>\(\square^3\)</td><td>\(\cos x\)</td><td>\(3\cos^2x\cdot(-\sin x)\)</td></tr>
   <tr><td>\(\arcsin\frac x2\)</td><td>\(\arcsin\square\)</td><td>\(\frac x2\)</td><td>\(\frac{1}{\sqrt{1-x^2/4}}\cdot\frac12=\frac{1}{\sqrt{4-x^2}}\)</td></tr>
   <tr><td>\(e^{\sqrt x}\)</td><td>\(e^{\square}\)</td><td>\(\sqrt x\)</td><td>\(e^{\sqrt x}\cdot\frac{1}{2\sqrt x}\)</td></tr></table></div>
  <div class="tip">Para el producto \((fg)'=f'g+fg'\): "la derivada del primero por el segundo sin derivar, más el primero sin derivar por la derivada del segundo".</div>`;

const META = {
 trigbase:['SEC-05','f3',['ecuaciones'],'Sustitución trig (SEC-12), potencias trig (SEC-10), regiones con sen/cos (SEC-14)'],
 derivadas:['SEC-06','f3',['exponentes','trigbase'],'du en sustitución y partes, y′ en longitud de curva, verificar cualquier respuesta'],
 basica:['SEC-07','f4',['derivadas'],'Todos los métodos terminan en esta tabla'],
 partes:['SEC-09','f5',['definida'],'Cíclicas, ∫sec³x, problemas mixtos'],
 potencias:['SEC-10','f5',['partes','trigbase'],'Paso final de la sustitución trigonométrica (SEC-12)'],
 cuadrado:['SEC-11','f5',['notables','basica'],'Sustitución trig con término bx (SEC-12), fracciones con cuadráticos (SEC-13)'],
 trig:['SEC-12','f5',['cuadrado','potencias'],'Áreas de círculos y elipses, longitudes con raíces'],
 fracciones:['SEC-13','f5',['ecuaciones','cuadrado'],'Integrales racionales del parcial'],
 area:['SEC-14','f6',['regiones','definida'],'Volúmenes: misma lógica de rebanadas'],
 discos:['SEC-15','f6',['area'],'Cascarones (comparar métodos)'],
 cascarones:['SEC-16','f6',['discos'],'Evaluación final'],
 longitud:['SEC-17','f6',['derivadas','notables','definida'],'Evaluación final'],
 boss:['SEC-XX','f7',['fracciones','trig','cascarones','longitud'],'El parcial'],
};
LV.forEach(l=>{ const m=META[l.id]; if(m){ l.code=m[0]; l.g=m[1]; l.req=m[2]; l.uses=m[3]; } });
(()=>{ const b=LV.find(l=>l.id==='basica'); b.n='Integral indefinida y sustitución u'; b.sub='Tabla de integrales, +C, cadena al revés';
  LV.find(l=>l.id==='trigbase').lore += TRIG_MORE; LV.find(l=>l.id==='derivadas').lore += DERIV_MORE;
  LV.splice(LV.indexOf(b)+1,0,DEFINIDA);
  Object.entries(EXTRA_EX).forEach(([k,arr])=>{ const l=LV.find(x=>x.id===k); if(l) l.ex=l.ex.concat(arr); });
  const ord=['exponentes','notables','ecuaciones','graficar','regiones','trigbase','derivadas','basica','definida','partes','potencias','cuadrado','trig','fracciones','area','discos','cascarones','longitud','boss'];
  LV.sort((x,y)=>ord.indexOf(x.id)-ord.indexOf(y.id));
})();

