/* ============ ANOTACIONES CON LLAVES DE COLOR ============ */
const SHORT = {exp1:'Ley 1',exp2:'Ley 2',exp3:'Ley 3',exp4:'Ley 4',exp5:'Ley 5',rad:'raíz de producto',frac:'fracciones',sep:'separar',
 sq:'binomio al cuadrado',sqm:'binomio al cuadrado',tcp:'cuadrado perfecto',dcuad:'dif. de cuadrados',cubos:'suma de cubos',dist:'distributiva',factor:'factor común',
 div:'división',ecu:'producto = 0',log:'propiedad ln',tabla:'tabla de valores',parab:'vértice',xgy:'despejar x',circ:'círculo',
 pit:'pitagórica',doble:'ángulo doble',medio:'ángulo medio',notab:'valor notable',deftrig:'triángulo',tablaD:'derivada',cadena:'regla de la cadena',reglas:'regla del producto',
 tablaI:'tabla de integrales',usub:'sustitución u',evaluar:'F(b) - F(a)',props:'propiedad',subdef:'nuevos límites',partesF:'fórmula de partes',liate:'LIATE',cicl:'cíclica',
 impar:'separo la impar',tansec:'separo sec·tan',completar:'completar cuadrado',xnum:"A·D' + B",sustrig:'sust. trig',plantilla:'plantilla',tapado:'tapado',
 areaF:'arriba - abajo',discoF:'R² - r²',ejeDesp:'distancia al eje',cascR:'radio',longF:'raíz exacta',disc:'discriminante'};

const ANN = {
 exponentes:{
  'Reescribir e integrar':{
   0:R`Separa por el numerador: \(\displaystyle\frac{x^2+3\sqrt x}{x}=${U(R`\frac{x^2}{x}+\frac{3\sqrt x}{x}`,'sep')}\)`,
   1:R`Primer término: \(\displaystyle\frac{x^2}{x^1}=${U('x^{2-1}','exp2','Ley 2: resto exponentes')}=x\)`,
   2:R`Segundo término: \(\displaystyle\frac{3${U('x^{1/2}','exp5','Ley 5: raíz')}}{x^1}=3${U(R`x^{\frac12-1}`,'exp2')}=3${U('x^{-1/2}','frac','½ - 1 = -½')}\)`,
   3:R`Integra: \(\displaystyle\int x\,dx=${U(R`\frac{x^2}{2}`,'tablaI')}\); \(\displaystyle\int3x^{-1/2}dx=3\cdot${U(R`\frac{x^{1/2}}{1/2}`,'tablaI')}=3\cdot${U('2x^{1/2}','frac','dividir por ½ = por 2')}=6\sqrt x\)`},
  'Expandir, separar e integrar':{
   0:R`Expande: \((x^2+1)^2=${U('(x^2)^2+2(x^2)(1)+1^2','sq','a² + 2ab + b²')}=${U('x^4','exp3','Ley 3')}+2x^2+1\)`,
   1:R`Denominador como potencia: \(\sqrt x=${U('x^{1/2}','exp5')}\)`,
   2:R`Separa: \(\displaystyle${U(R`\frac{x^4}{x^{1/2}}+\frac{2x^2}{x^{1/2}}+\frac{1}{x^{1/2}}`,'sep')}\)`,
   3:R`\(${U(R`x^{4-\frac12}`,'exp2')}=x^{7/2}\), \(2${U(R`x^{2-\frac12}`,'exp2')}=2x^{3/2}\), \(${U(R`\frac{1}{x^{1/2}}=x^{-1/2}`,'exp4')}\)`,
   4:R`Integra: \(\displaystyle${U(R`\frac{x^{9/2}}{9/2}`,'tablaI','n+1 = 9/2')}+2\cdot\frac{x^{5/2}}{5/2}+\frac{x^{1/2}}{1/2}\)`,
   5:R`\(\displaystyle${U(R`\frac{1}{9/2}=\frac29`,'frac','invierto')}\Rightarrow\frac29x^{9/2}+\frac45x^{5/2}+2x^{1/2}+C\)`},
  'Evaluar con fracciones':{
   0:R`En y = 2: \(\frac42+4-\frac83=6-\frac83=${U(R`\frac{18}{3}-\frac83`,'frac','6 = 18/3')}=\frac{10}{3}\)`,
   1:R`En y = −1: \(${U(R`\frac{(-1)^2}{2}+2(-1)-\frac{(-1)^3}{3}`,'evaluar','reemplazo con paréntesis')}=\frac12-2+\frac13\)`,
   2:R`Común denominador 6: \(${U(R`\frac36-\frac{12}{6}+\frac26`,'frac')}=-\frac76\)`,
   3:R`Arriba − abajo: \(\frac{10}{3}${U(R`-\left(-\frac76\right)`,'evaluar','menos por menos')}=\frac{20}{6}+\frac76=\frac{27}{6}=\frac92\)`}},
 notables:{
  'Expandir para volumen':{
   0:R`Primer cuadrado (a = 2, b = x²): \((2-x^2)^2=${U('2^2-2(2)(x^2)+(x^2)^2','sqm','a² - 2ab + b²')}=4-4x^2+x^4\)`,
   1:R`Segundo (a = 2, b = x): \((2-x)^2=${U('2^2-2(2)(x)+x^2','sqm','a² - 2ab + b²')}=4-4x+x^2\)`,
   2:R`Resta: el menos afecta a todo el paréntesis: \((4-4x^2+x^4)${U('-(4-4x+x^2)','dist','cambia cada signo')}=4-4x^2+x^4-4+4x-x^2\)`,
   3:R`Junta semejantes: \(x^4+${U('(-4x^2-x^2)','dist','términos en x²')}+4x+${U('(4-4)','dist','se cancelan')}=x^4-5x^2+4x\)`},
  'Factorizar completamente':{
   1:R`\(x^4-16=${U('(x^2)^2-4^2','dcuad','a² - b²')}=(x^2-4)(x^2+4)\)`,
   2:R`\(x^2-4=${U('x^2-2^2','dcuad')}=(x-2)(x+2)\)`},
  'Reconocer cuadrado perfecto':{
   0:R`\(\displaystyle\frac{x^4}{4}=${U(R`\left(\frac{x^2}{2}\right)^2`,'exp3')}\Rightarrow A=\frac{x^2}{2}\)`,
   1:R`\(\displaystyle\frac1{4x^4}=${U(R`\left(\frac1{2x^2}\right)^2`,'exp3')}\Rightarrow B=\frac1{2x^2}\)`,
   2:R`\(\displaystyle2AB=2\cdot\frac{x^2}{2}\cdot\frac{1}{2x^2}=${U(R`\frac{2x^2}{4x^2}`,'exp2','x² / x² = 1')}=\frac12\) ✓ coincide con el término del medio`,
   3:R`Sí: \(\displaystyle${U(R`\left(\frac{x^2}{2}+\frac{1}{2x^2}\right)^2`,'tcp','(A + B)²')}\)`}},
 ecuaciones:{
  'Taller 7.11: división con potencias faltantes':{
   1:R`\(${U(R`\frac{x^5}{x^2}=x^3`,'exp2')}\); \(x^3(x^2-1)=${U('x^5-x^3','dist')}\); resto: \((x^5+0x^3)-(x^5-x^3)=x^3\)`,
   2:R`\(${U(R`\frac{x^3}{x^2}=x`,'exp2')}\); \(x(x^2-1)=${U('x^3-x','dist')}\); resto: \(x^3+2-(x^3-x)=x+2\)`,
   5:R`Verifico: \(${U('(x^3+x)(x^2-1)','dist')}+x+2=x^5-x^3+x^3-x+x+2=x^5+2\) ✓`},
  'Puntos de corte':{
   2:R`Factor común: \(${U('x(x^2-1)','factor')}=0\)`,
   3:R`\(x\,${U('(x-1)(x+1)','dcuad','x² - 1 = dif. cuadrados')}=0\)`,
   4:R`\(${U(R`x=0,\ x=1,\ x=-1`,'ecu','cada factor = 0')}\). Puntos \((-1,-1),(0,0),(1,1)\)`},
  'Simplificar un resultado con logaritmos':{
   1:R`\(\frac12\,${U(R`\ln\left|\frac{x-1}{x+1}\right|`,'log','ln a - ln b = ln(a/b)')}\)`,
   2:R`\(${U(R`\ln\sqrt{\left|\frac{x-1}{x+1}\right|}`,'log','n·ln a = ln aⁿ')}\)`}},
 graficar:{
  'Tabla de valores de una parábola':{
   1:R`x = 0: \(y=${U('(0)^2+1','tabla','reemplazo')}=1\) → (0, 1)`, 2:R`x = 0.5: \(y=${U('(0.5)^2+1','tabla','reemplazo')}=1.25\) → (0.5, 1.25)`,
   3:R`x = 1: \(y=${U('(1)^2+1','tabla','reemplazo')}=2\) → (1, 2)`, 4:R`x = 1.5: \(y=${U('(1.5)^2+1','tabla','reemplazo')}=3.25\) → (1.5, 3.25)`,
   5:R`x = 2: \(y=${U('(2)^2+1','tabla','reemplazo')}=5\) → (2, 5)`},
  'Vértice y cortes':{
   1:R`Vértice: \(x_v=${U(R`-\frac{b}{2a}`,'parab')}=-\frac{4}{2(-1)}=2\); \(y_v=-(2)^2+4(2)=4\) → (2, 4)`,
   3:R`Cortes con x: \(-x^2+4x=0\Rightarrow${U('x(-x+4)','factor')}=0\Rightarrow${U(R`x=0,\ x=4`,'ecu')}\)`}},
 regiones:{
  'Taller 4, discos #9':{
   0:R`\(y=\sqrt{9-x^2}\Rightarrow y^2=9-x^2\Rightarrow${U('x^2+y^2=9','circ','círculo radio 3')}\). Como y = √… ≥ 0, solo la mitad de arriba`}},
 trigbase:{
  'Usar una identidad para simplificar':{
   0:R`Factor común: \(\sqrt{${U(R`9(1-\sin^2\theta)`,'factor')}}\)`,
   1:R`\(${U(R`1-\sin^2\theta=\cos^2\theta`,'pit')}\)`,
   2:R`\(${U(R`\sqrt{9\cos^2\theta}=\sqrt9\sqrt{\cos^2\theta}`,'rad')}=3\cos\theta\)`},
  'Reducir una potencia':{
   0:R`\(${U(R`\sin x\cos x=\tfrac12\sin2x`,'doble')}\Rightarrow\sin^2x\cos^2x=${U(R`\left(\tfrac12\sin2x\right)^2`,'exp3')}=\frac14\sin^22x\)`,
   1:R`\(${U(R`\sin^22x=\frac{1-\cos4x}{2}`,'medio','ángulo medio con 2x')}\)`}},
 derivadas:{
  'Derivada para longitud de curva (Taller 4, #2)':{
   0:R`\(y'=\frac23\cdot${U(R`\frac32(x^2+1)^{1/2}`,'tablaD','derivo afuera')}\cdot${U('2x','cadena','derivo adentro')}=2x\sqrt{x^2+1}\)`,
   1:R`\((y')^2=${U('4x^2(x^2+1)','exp3','(ab)² = a²b²')}=${U('4x^4+4x^2','dist')}\)`,
   2:R`\(1+(y')^2=4x^4+4x^2+1=${U('(2x^2+1)^2','tcp')}\). Cuadrado perfecto → la raíz se va`},
  'Verificar una integral derivando':{
   0:R`\(\frac{d}{dx}\left[e^x(x-1)\right]=${U(R`e^x(x-1)+e^x\cdot1`,'reglas',"f'g + fg'")}\)`}},
 basica:{
  'Sustitución u indefinida':{
   0:R`\(u=x^2+4\), \(${U(R`du=2x\,dx`,'usub','derivo u')}\Rightarrow x\,dx=\frac{du}2\)`,
   1:R`\(\displaystyle\int\frac{1}{u}\cdot\frac{du}{2}=${U(R`\frac12\ln|u|`,'tablaI','∫du/u = ln|u|')}\)`},
  'Sustitución con cambio de límites':{
   0:R`\(u=x^2+1\), \(du=2x\,dx\). \(${U(R`x=0\to u=1;\ \ x=1\to u=2`,'subdef')}\)`,
   1:R`\(\displaystyle\frac12\int_1^2u^3du=\frac12${U(R`\left[\frac{u^4}{4}\right]_1^2`,'tablaI')}\)`,
   2:R`\(\displaystyle=\frac12\cdot${U(R`\frac{16-1}{4}`,'evaluar')}=\frac{15}{8}\)`}},
 definida:{
  'Evaluación con negativos':{
   0:R`\(${U(R`3\cdot\frac{x^3}{3}-2\cdot\frac{x^2}{2}+x`,'tablaI','término a término')}=x^3-x^2+x\)`,
   1:R`\(F(2)=${U('(2)^3-(2)^2+(2)','evaluar','reemplazo x = 2')}=8-4+2=6\)`,
   2:R`\(F(-1)=${U('(-1)^3-(-1)^2+(-1)','evaluar','reemplazo x = -1')}=-1-1-1=-3\)`,
   3:R`\(6${U('-(-3)','evaluar','F(b) - F(a)')}=6+3=9\)`},
  'Sustitución cambiando límites':{
   0:R`\(u=\cos x\), \(${U(R`du=-\sin x\,dx`,'usub')}\Rightarrow\sin x\,dx=-du\)`,
   1:R`\(x=0\Rightarrow u=${U(R`\cos0=1`,'notab')}\); \(x=\frac\pi2\Rightarrow u=${U(R`\cos\frac\pi2=0`,'notab')}\)`,
   2:R`\(\displaystyle${U(R`\int_1^0u^2(-du)=\int_0^1u^2du`,'props','invertir límites cambia el signo')}\)`,
   3:R`\(\displaystyle${U(R`\left[\frac{u^3}{3}\right]_0^1=\frac13-0`,'evaluar')}=\frac13\)`},
  'Usar paridad':{
   0:R`\(4-2x^2\) es par → \(\displaystyle${U(R`\int_{-\sqrt2}^{\sqrt2}=2\int_0^{\sqrt2}`,'props','función par')}\)`,
   2:R`\(${U(R`(\sqrt2)^3=\sqrt2\cdot\sqrt2\cdot\sqrt2=2\sqrt2`,'exp1')}\Rightarrow4\sqrt2-\frac{4\sqrt2}{3}=${U(R`\frac{12\sqrt2-4\sqrt2}{3}`,'frac')}=\frac{8\sqrt2}{3}\)`}},
 partes:{
  'Básico':{
   0:R`\(${U('u=x','liate','A antes que E')},\ dv=e^xdx\)`,
   2:R`\(${U(R`xe^x-\int e^xdx`,'partesF','uv - ∫v du')}=xe^x-e^x+C=e^x(x-1)+C\)`},
  'Función sola':{
   0:R`\(u=\ln x,\ dv=dx\Rightarrow${U(R`du=\frac{dx}{x}`,'tablaD')},\ v=x\)`,
   1:R`\(${U(R`x\ln x-\int x\cdot\frac1x\,dx`,'partesF','uv - ∫v du')}=x\ln x-\int dx\)`},
  'Cíclica (Taller 4.41)':{
   0:R`1ª vez (\(u=\sin x,\ dv=e^xdx\)): \(I=${U(R`e^x\sin x-\int e^x\cos x\,dx`,'partesF')}\)`,
   1:R`2ª vez (\(u=\cos x\)): \(\int e^x\cos x\,dx=${U(R`e^x\cos x+\int e^x\sin x\,dx`,'partesF','ojo: -(-sen x) = +')}=e^x\cos x+I\)`,
   2:R`\(I=e^x\sin x-e^x\cos x${U('-I','cicl','vuelve la original')}\)`,
   3:R`\(${U('2I','cicl','paso I a la izquierda')}=e^x(\sin x-\cos x)\Rightarrow I=\frac{e^x}{2}(\sin x-\cos x)+C\)`},
  'Partes dos veces SIN tabla (Taller 4.32)':{
   2:R`\(${U(R`x^2\cdot\frac{e^{3x}}{3}-\int\frac{e^{3x}}{3}\cdot2x\,dx`,'partesF','uv - ∫v du')}=\frac{x^2e^{3x}}{3}-\frac23\int xe^{3x}dx\)`,
   5:R`\(\frac{x^2e^{3x}}{3}${U(R`-\frac23\left(\frac{xe^{3x}}{3}-\frac{e^{3x}}{9}\right)`,'dist','-⅔ multiplica a todo')}\)`,
   7:R`\(${U('e^{3x}','factor')}\left(\frac{x^2}{3}-\frac{2x}{9}+\frac{2}{27}\right)+C\)`},
  'Función inversa sola':{
   2:R`\(${U(R`w=1+x^2,\ dw=2x\,dx`,'usub')}\): \(\displaystyle\int\frac{x\,dx}{1+x^2}=\frac12\ln(1+x^2)\)`}},
 potencias:{
  'Potencia impar':{
   0:R`\(\sin^3x\cos^2x=\sin^2x\cos^2x\cdot${U(R`\sin x`,'impar','separo uno (será du)')}\)`,
   1:R`\(\int${U(R`(1-\cos^2x)`,'pit','sen² = 1 - cos²')}\cos^2x\sin x\,dx\)`,
   2:R`\(${U(R`u=\cos x,\ du=-\sin x\,dx`,'usub')}\): \(-\int(1-u^2)u^2du=-\int(u^2-u^4)du\)`},
  'Ambas pares':{
   0:R`\(${U(R`\cos^2x=\frac{1+\cos2x}{2}`,'medio')}\)`},
  'tan impar':{
   0:R`\(\int\tan^2x\cdot${U(R`\sec x\tan x\,dx`,'tansec','du de sec x')}\)`,
   1:R`\(${U(R`\tan^2x=\sec^2x-1`,'pit')}\), \(${U(R`u=\sec x`,'usub')}\)`},
  'Ambas pares (paso a paso)':{
   0:R`\(${U(R`\sin x\cos x=\frac12\sin2x`,'doble')}\)`,
   1:R`\(\sin^2x\cos^2x=${U(R`(\sin x\cos x)^2`,'exp3')}=\frac14\sin^22x\)`,
   2:R`\(${U(R`\sin^22x=\frac{1-\cos4x}{2}`,'medio')}\)`}},
 cuadrado:{
  'Taller 5.34':{
   0:R`Mitad de −2 es −1, al cuadrado 1: \(${U('x^2-2x+1','completar','sumo y resto 1')}+4=(x-1)^2+4\)`,
   2:R`\(${U(R`\frac12\arctan\frac u2`,'tablaI','(1/k) arctan(u/k)')}=\frac12\arctan\frac{x-1}{2}+C\)`},
  'Taller 5.22 (x arriba)':{
   0:R`\(D'=2x+6\). \(2x-3=${U('(2x+6)-9','xnum')}\)`,
   2:R`Primera: \(\ln(x^2+6x+15)\). Segunda: \(x^2+6x+15=${U('(x+3)^2+6','completar')}\), \(k=\sqrt6\)`},
  'Taller 5.25 (x arriba y raíz)':{
   1:R`\(2x+4=${U('-(4-2x)+8','xnum')}\). Verifico: \(-4+2x+8=2x+4\) ✓`,
   3:R`Primera (w = D): \(-\int${U('w^{-1/2}','exp4','1/√w')}dw=-2\sqrt w=-2\sqrt{4x-x^2}\)`,
   4:R`\(4x-x^2=-(x^2-4x+4)+4=${U('4-(x-2)^2','completar')}\)`,
   5:R`\(\displaystyle8\int\frac{dx}{\sqrt{4-(x-2)^2}}=8${U(R`\arcsin\frac{x-2}{2}`,'tablaI')}\)`}},
 trig:{
  'Taller 6.31':{
   0:R`\(${U(R`x=2\sin\theta`,'sustrig','a² - x² → seno')}\), \(dx=2\cos\theta\,d\theta\), \(\sqrt{4-x^2}=\sqrt{${U(R`4\cos^2\theta`,'pit','4 - 4sen² = 4cos²')}}=2\cos\theta\)`,
   1:R`\(\displaystyle\int\frac{2\cos\theta\,d\theta}{4\sin^2\theta\cdot2\cos\theta}=\frac14\int${U(R`\csc^2\theta`,'deftrig','1/sen² = csc²')}d\theta\)`,
   2:R`\(${U(R`-\frac14\cot\theta`,'tablaI','∫csc² = -cot')}\)`,
   3:R`Triángulo: op = x, hip = 2, ady = \(\sqrt{4-x^2}\). \(${U(R`\cot\theta=\frac{\text{ady}}{\text{op}}=\frac{\sqrt{4-x^2}}{x}`,'deftrig')}\)`},
  'Taller 6.17':{
   0:R`\(x=2\sin\theta\): \(\int${U(R`2\cos\theta`,'sustrig','la raíz')}\cdot${U(R`2\cos\theta\,d\theta`,'sustrig','el dx','#ff7a00')}=4\int\cos^2\theta\,d\theta\)`,
   1:R`\(=4${U(R`\left(\frac\theta2+\frac{\sin2\theta}{4}\right)`,'medio')}=2\theta+${U(R`\sin2\theta`,'doble','= 2 sen cos')}=2\theta+2\sin\theta\cos\theta\)`},
  'Taller 6.26':{
   0:R`\(${U(R`x=\sin\theta`,'sustrig')}\), \(dx=\cos\theta\,d\theta\), \(\sqrt{1-x^2}=${U(R`\cos\theta`,'pit')}\)`,
   2:R`\(${U(R`\int\frac{1-\cos2\theta}{2}d\theta`,'medio')}=\frac\theta2-\frac{\sin2\theta}{4}\)`,
   3:R`\(${U(R`\sin2\theta=2\sin\theta\cos\theta`,'doble')}\Rightarrow\frac\theta2-\frac{\sin\theta\cos\theta}{2}\)`,
   4:R`Triángulo: op x, hip 1 → \(${U(R`\cos\theta=\sqrt{1-x^2}`,'deftrig')}\), \(\theta=\arcsin x\)`},
  'Taller 6.23 (secante)':{
   1:R`\(\sqrt{x^2-9}=\sqrt{9\sec^2\theta-9}=\sqrt{${U(R`9\tan^2\theta`,'pit','sec² - 1 = tan²')}}=${U(R`3\tan\theta`,'rad')}\)`,
   2:R`\(\displaystyle\int\frac{3\sec\theta\tan\theta\,d\theta}{3\sec\theta\cdot3\tan\theta}=${U(R`\int\frac13d\theta`,'exp2','todo se cancela')}=\frac\theta3\)`}},
 fracciones:{
  'Taller 7.14 (lineales distintos)':{
   1:R`Tapado en 1: \(A=${U(R`\frac{3(1)+7}{(1-2)(1-3)}`,'tapado','tapo (x - 1), x = 1')}=\frac{10}{2}=5\)`,
   2:R`Tapado en 2: \(B=${U(R`\frac{3(2)+7}{(2-1)(2-3)}`,'tapado','tapo (x - 2), x = 2')}=\frac{13}{-1}=-13\)`,
   3:R`Tapado en 3: \(C=${U(R`\frac{3(3)+7}{(3-1)(3-2)}`,'tapado','tapo (x - 3), x = 3')}=\frac{16}{2}=8\)`},
  'Taller 7.18 (factor repetido)':{
   2:R`x = 2: \(${U('4+6=C(1)^2','tapado','x = 2')}\Rightarrow C=10\). x = 1: \(${U('1+6=B(1-2)','tapado','x = 1')}\Rightarrow B=-7\)`,
   4:R`\(\displaystyle\int\frac{-7}{(x-1)^2}dx=-7\int${U('(x-1)^{-2}','exp4')}dx=\frac{7}{x-1}\). Total: \(-9\ln|x-1|+\frac{7}{x-1}+10\ln|x-2|+C\)`},
  'Taller 7.15 (cuadrático irreducible, completo)':{
   0:R`\(x^3+1=${U('(x+1)(x^2-x+1)','cubos')}\); \(${U(R`\Delta=1-4<0`,'disc')}\) → irreducible`,
   3:R`x = −1: \(1=A${U('((-1)^2-(-1)+1)','tapado','= 3')}\Rightarrow A=\frac13\)`,
   6:R`Segunda: \(-\frac13\cdot\frac{x-2}{x^2-x+1}\). Con D' = 2x − 1: \(x-2=${U(R`\frac12(2x-1)-\frac32`,'xnum')}\)`,
   8:R`\(x^2-x+1=${U(R`\left(x-\frac12\right)^2+\frac34`,'completar')}\Rightarrow\int\frac{dx}{(x-\frac12)^2+\frac34}=\frac{2}{\sqrt3}\arctan\frac{2x-1}{\sqrt3}\)`}},
 area:{
  'Básico':{
   0:R`Cortes: \(x^2=2x\Rightarrow${U('x(x-2)=0','ecu')}\Rightarrow x=0,2\)`,
   2:R`\(\displaystyle\int_0^2${U('(2x-x^2)','areaF')}dx=\left[x^2-\frac{x^3}{3}\right]_0^2=${U(R`4-\frac83`,'frac')}=\frac43\)`},
  'Conviene dy':{
   0:R`Despeja x: \(x=y^2\) y \(x=y+2\). Cortes: \(y^2=y+2\Rightarrow${U('(y-2)(y+1)=0','ecu')}\Rightarrow y=-1,2\)`,
   2:R`\(\displaystyle\int_{-1}^{2}${U('(y+2-y^2)','areaF','derecha - izquierda')}dy=\left[\frac{y^2}{2}+2y-\frac{y^3}{3}\right]_{-1}^{2}=\frac{10}{3}+\frac76=\frac92\)`},
  'Curvas que se cruzan':{
   0:R`Corte: \(\sin x=\cos x\Rightarrow\tan x=1\Rightarrow${U(R`x=\frac\pi4`,'notab')}\)`,
   3:R`\(\displaystyle A=${U(R`\int_0^{\pi/4}(\cos x-\sin x)dx`,'areaF','arriba cos')}+${U(R`\int_{\pi/4}^{\pi}(\sin x-\cos x)dx`,'areaF','arriba sen','#0057ff')}\)`,
   4:R`Primera: \([\sin x+\cos x]_0^{\pi/4}=${U(R`\left(\frac{\sqrt2}2+\frac{\sqrt2}2\right)`,'notab')}-(0+1)=\sqrt2-1\)`}},
 discos:{
  'Arandela con eje desplazado':{
   1:R`El eje y = 2 está ENCIMA: \(${U('R=2-x^2','ejeDesp','eje - curva lejana')}\), \(${U('r=2-x','ejeDesp','eje - curva cercana','#ff7a00')}\)`,
   2:R`\(\displaystyle V=\pi\int_0^1${U(R`\left[(2-x^2)^2-(2-x)^2\right]`,'discoF')}dx\)`,
   3:R`\((2-x^2)^2=${U('4-4x^2+x^4','sqm')}\); \((2-x)^2=${U('4-4x+x^2','sqm','','#0057ff')}\); resta: \(x^4-5x^2+4x\)`},
  'Disco alrededor del eje y (5.2 #3b)':{
   0:R`Eje vertical → dy. \(y=4-x^2\Rightarrow${U(R`x=\sqrt{4-y}`,'xgy')}\)`,
   2:R`\(\displaystyle V=\pi\int_0^4${U(R`(\sqrt{4-y})^2`,'discoF','R²')}dy=\pi\int_0^4(4-y)dy=8\pi\)`},
  'Taller 4, discos #1':{
   2:R`\(\displaystyle V=\pi\int_0^2${U('(x^2+1)^2','discoF','R²')}dx\)`,
   3:R`\((x^2+1)^2=${U('x^4+2x^2+1','sq')}\)`,
   5:R`\(${U(R`\frac{96}{15}+\frac{80}{15}+\frac{30}{15}`,'frac','común denominador 15')}=\frac{206}{15}\Rightarrow V=\frac{206\pi}{15}\)`}},
 cascarones:{
  'Cascarones #8':{
   2:R`\(\displaystyle V=2\pi\int_0^3${U('x','cascR','radio')}${U('(3x-x^2)','cascR','altura','#ff7a00')}dx=2\pi\int_0^3(3x^2-x^3)dx\)`},
  'Eje desplazado (#5)':{
   1:R`\(\displaystyle V=2\pi\int_0^5${U('(5-x)','cascR','radio')}${U('x^{1/2}','cascR','altura','#ff7a00')}dx=2\pi\int_0^5${U(R`\left(5x^{1/2}-x^{3/2}\right)`,'exp1','x·x^½ = x^{3/2}','#5c5c5c')}dx\)`},
  'Eje desplazado a la derecha':{
   2:R`\(\displaystyle V=2\pi\int_0^1${U('(2-x)','cascR','radio')}${U('x^2','cascR','altura','#ff7a00')}dx=2\pi\int_0^1(2x^2-x^3)dx\)`}},
 longitud:{
  'Taller 4, #4':{
   0:R`\(\displaystyle y=\frac{x^4+3}{6x}=${U(R`\frac{x^3}{6}+\frac{1}{2x}`,'sep')}\)`,
   1:R`\(\displaystyle y'=\frac{x^2}{2}${U(R`-\frac{1}{2x^2}`,'exp4','½x⁻¹ → -½x⁻²')}\)`,
   2:R`\(\displaystyle(y')^2=${U(R`\frac{x^4}{4}-\frac12+\frac{1}{4x^4}`,'sqm')}\Rightarrow1+(y')^2=${U(R`\left(\frac{x^2}{2}+\frac{1}{2x^2}\right)^2`,'tcp')}\)`,
   3:R`\(\displaystyle L=\int_1^3${U(R`\left(\frac{x^2}{2}+\frac{1}{2x^2}\right)`,'longF')}dx=\left[\frac{x^3}{6}-\frac{1}{2x}\right]_1^3\)`},
  'Paramétrica (#7)':{
   1:R`\(\sqrt{t^4+t^2}=${U(R`\sqrt{t^2(t^2+1)}=t\sqrt{t^2+1}`,'rad')}\)`},
  'Cicloide (Taller 4, #19)':{
   1:R`\(a^2(1-2\cos\theta+${U(R`\cos^2\theta)+a^2\sin^2\theta`,'pit','cos² + sen² = 1')}=a^2(2-2\cos\theta)\)`,
   2:R`\(2a^2${U(R`(1-\cos\theta)`,'medio','= 2sen²(θ/2)')}=4a^2\sin^2\frac\theta2\)`}},
};

const ANAT = R`
  <h3>Anatomía de cada fórmula (por colores)</h3>
  <p>Cada llave señala qué pedazo sale de dónde. Así sabes qué buscar cuando expandes o factorizas.</p>
  <div class="formula">\[(a+b)^2=${U('a^2','sq','cuadrado del 1º','#e10600')}+${U('2ab','sq','doble producto','#0057ff')}+${U('b^2','sq','cuadrado del 2º','#00a37a')}\]</div>
  <div class="formula">\[(a-b)^2=${U('a^2','sq','cuadrado del 1º','#e10600')}${U('-2ab','sq','doble producto (negativo)','#0057ff')}+${U('b^2','sq','siempre +','#00a37a')}\]</div>
  <div class="formula">\[(a+b)(a-b)=a^2${U('-ab+ab','dcuad','se cancelan = 0','#8a2be2')}-b^2=${U('a^2-b^2','dcuad','diferencia de cuadrados','#00a37a')}\]</div>
  <div class="formula">\[a^3+b^3=(a${U('+','cubos','mismo signo','#e10600')}b)(a^2${U('-','cubos','signo opuesto','#0057ff')}ab${U('+','cubos','siempre +','#00a37a')}b^2)\]</div>
  <div class="formula">\[a^3-b^3=(a${U('-','cubos','mismo signo','#e10600')}b)(a^2${U('+','cubos','signo opuesto','#0057ff')}ab${U('+','cubos','siempre +','#00a37a')}b^2)\]</div>`;

const EXPLAWS = R`
  <h3>Resumen de leyes por colores</h3>
  <div class="formula">\[${U(R`x^a\cdot x^b=x^{a+b}`,'exp1','Ley 1: sumo')}\quad${U(R`\frac{x^a}{x^b}=x^{a-b}`,'exp2','Ley 2: resto')}\quad${U('(x^a)^b=x^{ab}','exp3','Ley 3: multiplico')}\]\[${U(R`x^{-n}=\frac1{x^n}`,'exp4','Ley 4: negativo = abajo')}\quad${U(R`x^{m/n}=\sqrt[n]{x^m}`,'exp5','Ley 5: fracción = raíz')}\]</div>
  <p class="small">Estos mismos colores aparecen en los Ejemplos cada vez que se usa la ley.</p>`;

LV.forEach(L=>{ const m=ANN[L.id]; if(!m) return; L.ex.forEach(e=>{ const a=m[e.t]; if(a) Object.entries(a).forEach(([i,s])=>{ e.s[+i]=s; }); }); });
(()=>{ const n=LV.find(l=>l.id==='notables'); n.lore=n.lore.replace('<h3>La base', ANAT+'<h3>La base');
  const x=LV.find(l=>l.id==='exponentes'); x.lore=x.lore.replace('<h3>Propiedades de las raíces', EXPLAWS+'<h3>Propiedades de las raíces'); })();
