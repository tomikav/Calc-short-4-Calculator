/* ============ HOJA DE APUNTES (por prioridad, con ejemplo) ============ */
/* [prioridad, sección, etiqueta, contenido, ejemplo] */
const HOJA2 = [
 /* 0 · ANTES DE CADA EJERCICIO */
 [0,'boss','1 · Lee qué piden','¿Integral sola, área, volumen o longitud? Subraya la curva, los límites y el eje.', '"…girar alrededor de y = 2" → volumen, eje horizontal desplazado'],
 [0,'regiones','2 · Dibuja (aplicaciones)','Curvas, cortes calculados con álgebra, región sombreada, rectángulo y eje punteado.', R`y=x^2,\ y=2x:\ x^2=2x\Rightarrow x=0,\ 2`],
 [0,'exponentes','3 · Reescribe (integrales)','Raíces y 1/xⁿ a potencias, separa fracciones por el numerador, expande.', R`\frac{x^2+3\sqrt x}{x}=x+3x^{-1/2}`],
 [0,'boss','4 · Elige el método','Recorre el árbol de métodos (abajo) en orden. No empieces a operar sin saber qué método vas a usar.', R`\int\frac{x\,dx}{x^2+4}\to u=x^2+4\ \text{(no sust. trig)}`],
 [0,'definida','5 · Evalúa con cuidado','Paréntesis al reemplazar y al restar F(b) − F(a). Área y volumen deben salir positivos.', R`F(-1)=(-1)^3-(-1)^2=-2`],
 [0,'derivadas','6 · Verifica','Deriva tu respuesta (debe dar el integrando) o compara con un dibujo aproximado.', R`\frac{d}{dx}\left[e^x(x-1)\right]=xe^x\ \checkmark`],

 /* 1 · CRÍTICO */
 [1,'boss','Árbol de métodos','Tabla → u (función + su derivada) → partes (producto de tipos distintos) → potencias trig → cuadrática: completar / sust. trig → racional: fracciones parciales', R`\int xe^x\to\text{partes};\ \ \int\frac{dx}{x^2\sqrt{x^2+9}}\to x=3\tan\theta;\ \ \int\frac{x+1}{x^2-x}\to\text{parciales}`],
 [1,'discos','Discos / arandelas', R`V=\pi\int_a^b\left(R^2-r^2\right)dx,\quad R=\text{lejana},\ r=\text{cercana}`, R`y=\sqrt x,\ [0,4],\ \text{eje }x:\ \pi\int_0^4x\,dx=8\pi`],
 [1,'discos','Eje desplazado y = k','Eje ABAJO: R = arriba − k, r = abajo − k · Eje ARRIBA: R = k − abajo, r = k − arriba', R`y=x,\ y=x^2,\ \text{eje }y=2:\ R=2-x^2,\ r=2-x\Rightarrow\tfrac{8\pi}{15}`],
 [1,'discos','Variable en discos','Rebanada ⟂ al eje. Eje horizontal → dx. Eje vertical → dy y despejas x.', R`y=4-x^2,\ \text{eje }y:\ x=\sqrt{4-y},\ \pi\int_0^4(4-y)dy=8\pi`],
 [1,'cascarones','Cascarones', R`V=2\pi\int_a^b(\text{radio})(\text{altura})\,dx`, R`y=x^2,\ y=3x,\ \text{eje }y:\ 2\pi\int_0^3x(3x-x^2)dx=\tfrac{27\pi}{2}`],
 [1,'cascarones','Radio del cascarón','Eje y → x · eje x = h → |x − h| · eje x → y · eje y = k → |y − k|', R`\text{eje }x=5,\ \text{región en }[0,5]:\ \text{radio}=5-x`],
 [1,'cascarones','¿Discos o cascarones?','Discos: eje horiz → dx, vert → dy. Cascarones: eje horiz → dy, vert → dx. Elige el de UNA integral sin despejar.', R`y=\tfrac1x,\ \text{eje }y\to\text{cascarón}:\ 2\pi\int_1^4x\cdot\tfrac1x\,dx=6\pi`],
 [1,'area','Área entre curvas', R`A=\int_a^b(\text{arriba}-\text{abajo})\,dx`, R`\int_0^2(2x-x^2)dx=4-\tfrac83=\tfrac43`],
 [1,'area','¿dx o dy? ¿se cruzan?','Si arriba/abajo cambia de fórmula → dy (der − izq). Si las curvas se cruzan → parte la integral.', R`x=y^2,\ y=x-2:\ \int_{-1}^{2}(y+2-y^2)dy=\tfrac92`],
 [1,'partes','Partes + LIATE', R`\int u\,dv=uv-\int v\,du;\ \ u=\text{primera de L·I·A·T·E}`, R`\int xe^x\,dx=xe^x-\int e^x dx=e^x(x-1)+C`],
 [1,'partes','Casos de partes','Polinomio → tabla DI (+ − +). eˣ·sen → 2 veces, sale 2I. ln x o arctan x solos → dv = dx.', R`\int e^x\sin x\,dx=\tfrac{e^x}{2}(\sin x-\cos x)+C`],
 [1,'trig','Sustitución trig', R`\sqrt{a^2-x^2}:a\sin\theta\quad\sqrt{a^2+x^2}:a\tan\theta\quad\sqrt{x^2-a^2}:a\sec\theta`, R`\int\sqrt{4-x^2}dx:\ x=2\sin\theta\Rightarrow4\int\cos^2\theta\,d\theta`],
 [1,'trig','dx y regreso a x', R`dx:\ a\cos\theta\,d\theta\ \ |\ \ a\sec^2\theta\,d\theta\ \ |\ \ a\sec\theta\tan\theta\,d\theta`, R`\sin\theta=\tfrac x2\Rightarrow\cos\theta=\tfrac{\sqrt{4-x^2}}{2}\ \text{(triángulo)}`],
 [1,'fracciones','Fracciones parciales','1 ¿impropia? divide · 2 factoriza · 3 plantilla · 4 tapado · 5 integra', R`\frac{3x+7}{(x-1)(x-2)(x-3)}:\ A=5,\ B=-13,\ C=8`],
 [1,'fracciones','Plantillas', R`(x-r)\to\tfrac{A}{x-r}\quad(x-r)^2\to\tfrac{A}{x-r}+\tfrac{B}{(x-r)^2}\quad\text{irred.}\to\tfrac{Ax+B}{x^2+bx+c}`, R`\frac{x^2+6}{(x-1)^2(x-2)}=\frac{A}{x-1}+\frac{B}{(x-1)^2}+\frac{C}{x-2}`],
 [1,'fracciones','Integrales de los pedazos', R`\int\tfrac{A}{x-r}=A\ln|x-r|\qquad\int\tfrac{B}{(x-r)^2}=-\tfrac{B}{x-r}`, R`\int\frac{-7}{(x-1)^2}dx=\frac{7}{x-1}`],
 [1,'longitud','Longitud de curva', R`L=\int_a^b\sqrt{1+(y')^2}\,dx\qquad L=\int\sqrt{(x')^2+(y')^2}\,dt`, R`y=2x+3,\ [1,3]:\ \int_1^3\sqrt5\,dx=2\sqrt5`],
 [1,'longitud','Truco del cuadrado perfecto', R`y'=A-B,\ AB=\tfrac14\Rightarrow\sqrt{1+(y')^2}=A+B`, R`y'=\tfrac{x^2}{2}-\tfrac{1}{2x^2}\Rightarrow\sqrt{1+y'^2}=\tfrac{x^2}{2}+\tfrac{1}{2x^2}`],
 [1,'longitud','Paramétricas','Deriva x(t) e y(t), suma cuadrados, saca factor común dentro de la raíz.', R`x=\tfrac{t^3}3,\ y=\tfrac{t^2}2:\ \sqrt{t^4+t^2}=t\sqrt{t^2+1}`],

 /* 2 · HERRAMIENTAS */
 [2,'basica','Tabla de integrales 1', R`\int\tfrac{dx}x=\ln|x|\ \ \int e^x=e^x\ \ \int\sin=-\cos\ \ \int\cos=\sin\ \ \int\sec^2=\tan\ \ \int\sec\tan=\sec`, R`\int(\sec^2x+\tfrac1x)dx=\tan x+\ln|x|+C`],
 [2,'basica','Tabla de integrales 2', R`\int\tan=\ln|\sec|\ \ \int\sec=\ln|\sec+\tan|\ \ \int\tfrac{dx}{a^2+x^2}=\tfrac1a\arctan\tfrac xa\ \ \int\tfrac{dx}{\sqrt{a^2-x^2}}=\arcsin\tfrac xa`, R`\int\frac{dx}{9+x^2}=\frac13\arctan\frac x3+C`],
 [2,'basica','Ajuste lineal','Si adentro hay ax + b, divides por a.', R`\int\cos3x\,dx=\tfrac{\sin3x}{3}\qquad\int e^{3x}dx=\tfrac{e^{3x}}3`],
 [2,'basica','Sustitución u','u = lo de adentro · du = u′dx · todo en u · integra · vuelve a x', R`\int2x(x^2+1)^5dx=\tfrac{(x^2+1)^6}{6}+C`],
 [2,'definida','TFC', R`\int_a^bf\,dx=F(b)-F(a)`, R`\int_{-1}^{2}(3x^2-2x+1)dx=6-(-3)=9`],
 [2,'definida','Propiedades', R`\int_b^a=-\int_a^b\quad\text{impar en }[-a,a]\to0\quad\text{par}\to2\int_0^a`, R`\int_{-2}^{2}x^3dx=0`],
 [2,'definida','Sustitución en definida','Cambia los límites a u (o vuelve a x antes de evaluar). No mezcles.', R`\int_0^1x(x^2+1)^3dx:\ u:1\to2,\ \tfrac12\int_1^2u^3du=\tfrac{15}8`],
 [2,'trigbase','Pitagóricas', R`\sin^2+\cos^2=1\qquad1+\tan^2=\sec^2\qquad1+\cot^2=\csc^2`, R`\sqrt{9-9\sin^2\theta}=3\cos\theta`],
 [2,'trigbase','Ángulo doble y medio', R`\sin2x=2\sin x\cos x\quad\sin^2x=\tfrac{1-\cos2x}2\quad\cos^2x=\tfrac{1+\cos2x}2`, R`\int\cos^2x\,dx=\tfrac x2+\tfrac{\sin2x}{4}+C`],
 [2,'potencias','Potencias de sen / cos','Alguna IMPAR: separo una y el resto con sen² + cos² = 1. Ambas PARES: ángulo medio.', R`\int\sin^3x\,dx=-\cos x+\tfrac{\cos^3x}{3}+C`],
 [2,'potencias','Potencias de tan / sec','sec PAR: separo sec², u = tan. tan IMPAR: separo sec·tan, u = sec.', R`\int\tan^3x\sec x\,dx=\tfrac{\sec^3x}{3}-\sec x+C`],
 [2,'cuadrado','Completar el cuadrado', R`ax^2+bx+c=a\left(x+\tfrac{b}{2a}\right)^2+\left(c-\tfrac{b^2}{4a}\right)`, R`x^2-2x+5=(x-1)^2+4`],
 [2,'cuadrado','Resultado con arctan / arcsen', R`\int\tfrac{du}{u^2+k^2}=\tfrac1k\arctan\tfrac uk\qquad\int\tfrac{du}{\sqrt{k^2-u^2}}=\arcsin\tfrac uk`, R`\int\frac{dx}{x^2-2x+5}=\tfrac12\arctan\tfrac{x-1}{2}+C`],
 [2,'cuadrado','x en el numerador','Numerador = A·(derivada de abajo) + B. La parte A da ln, la parte B se completa el cuadrado.', R`\frac{2x-3}{x^2+6x+15}:\ 2x-3=(2x+6)-9`],
 [2,'discos','Secciones transversales', R`V=\int A(x)\,dx:\ \text{cuadrado }s^2,\ \text{semicírculo }\tfrac\pi8s^2`, R`\text{base }y=1-x^2,\ \text{cuadrados}:\int_{-1}^1(1-x^2)^2dx=\tfrac{16}{15}`],
 [2,'longitud','Cicloide', R`1-\cos\theta=2\sin^2\tfrac\theta2`, R`\text{un arco: }L=\int_0^{2\pi}2a\sin\tfrac\theta2\,d\theta=8a`],
 [2,'partes','Resultados que conviene saber', R`\int\ln x=x\ln x-x\qquad\int\sec^3x=\tfrac12(\sec x\tan x+\ln|\sec x+\tan x|)`, R`\int_1^e\ln x\,dx=(e-e)-(0-1)=1`],

 /* 3 · BASE */
 [3,'exponentes','Las 5 leyes', R`x^ax^b=x^{a+b}\ \ \tfrac{x^a}{x^b}=x^{a-b}\ \ (x^a)^b=x^{ab}\ \ x^{-n}=\tfrac1{x^n}\ \ x^{m/n}=\sqrt[n]{x^m}`, R`x\sqrt x=x^{3/2}\qquad\tfrac{\sqrt x}{x^2}=x^{-3/2}`],
 [3,'exponentes','Regla de la potencia', R`\int x^ndx=\tfrac{x^{n+1}}{n+1}+C\ \ (n\neq-1)`, R`\int x^{1/2}dx=\tfrac{x^{3/2}}{3/2}=\tfrac23x^{3/2}`],
 [3,'exponentes','Errores prohibidos', R`\sqrt{a+b}\neq\sqrt a+\sqrt b\qquad(a+b)^2\neq a^2+b^2`, R`\sqrt{9+16}=5\neq3+4`],
 [3,'notables','Binomios', R`(a\pm b)^2=a^2\pm2ab+b^2\qquad(a+b)(a-b)=a^2-b^2`, R`(4-x^2)^2=16-8x^2+x^4`],
 [3,'notables','Cubos', R`a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)`, R`x^3+1=(x+1)(x^2-x+1)`],
 [3,'notables','Cuadrado perfecto','Primero = A², último = B², medio = ±2AB → (A ± B)²', R`4x^4+4x^2+1=(2x^2+1)^2`],
 [3,'notables','Trinomio y discriminante', R`x^2+bx+c:\ pq=c,\ p+q=b\qquad\Delta=b^2-4ac<0\Rightarrow\text{irreducible}`, R`x^2-2x-3=(x-3)(x+1);\ \ x^2-x+1:\Delta=-3`],
 [3,'ecuaciones','Fracciones algebraicas', R`\tfrac{a+b}{c}=\tfrac ac+\tfrac bc\ \checkmark\qquad\tfrac{c}{a+b}\neq\tfrac ca+\tfrac cb`, R`\frac{x^4+3}{6x}=\frac{x^3}{6}+\frac{1}{2x}`],
 [3,'ecuaciones','División de polinomios','Si grado arriba ≥ abajo: cociente + residuo/divisor. Rellena potencias faltantes con 0.', R`\frac{x^3}{x^2-2x-3}=x+2+\frac{7x+6}{x^2-2x-3}`],
 [3,'ecuaciones','Logaritmos', R`\ln ab=\ln a+\ln b\quad\ln\tfrac ab=\ln a-\ln b\quad\ln a^n=n\ln a`, R`\ln|x-1|-\ln|x+1|=\ln\left|\tfrac{x-1}{x+1}\right|`],
 [3,'ecuaciones','Ecuaciones','Todo a un lado = 0 y factoriza. Nunca dividas por x.', R`x^2=2x\Rightarrow x(x-2)=0\Rightarrow x=0,2`],
 [3,'graficar','Parábola', R`y=ax^2+bx+c:\ a>0\cup,\ a<0\cap,\ x_v=-\tfrac b{2a}`, R`y=4-x^2:\ (0,4),\ \text{cortes }\pm2`],
 [3,'graficar','Puntos clave', R`\sqrt x:(0,0),(1,1),(4,2),(9,3)\quad\tfrac1x:(1,1),(2,\tfrac12)\quad e^x:(0,1)\quad\ln x:(1,0)`, 'Úsalos para dibujar rápido sin tabla larga'],
 [3,'graficar','Mover curvas','f(x) + k sube · f(x − h) a la DERECHA · −f(x) voltea', R`y=(x-2)^2:\ \text{vértice en }x=2`],
 [3,'regiones','Curvas especiales', R`x=y^2\to\text{abre a la derecha}\qquad y=\sqrt{r^2-x^2}\to\text{semicírculo de arriba}`, R`y=\sqrt{9-x^2}:\ \text{radio }3`],
 [3,'derivadas','Derivadas', R`(x^n)'=nx^{n-1}\ (\ln x)'=\tfrac1x\ (\tan)'=\sec^2\ (\sec)'=\sec\tan\ (\arctan x)'=\tfrac1{1+x^2}`, R`(x^{3/2})'=\tfrac32x^{1/2}`],
 [3,'derivadas','Producto y cadena', R`(fg)'=f'g+fg'\qquad(f(g))'=f'(g)\cdot g'`, R`\tfrac{d}{dx}\ln(x^2+4)=\tfrac{2x}{x^2+4}`],
 [3,'trigbase','Valores notables', R`\sin:0,\tfrac12,\tfrac{\sqrt2}2,\tfrac{\sqrt3}2,1\quad\cos:1,\tfrac{\sqrt3}2,\tfrac{\sqrt2}2,\tfrac12,0\ \ (0\ldots\tfrac\pi2)`, R`\sin\tfrac\pi6=\tfrac12,\ \cos\tfrac\pi3=\tfrac12`],
 [3,'potencias','Memoriza', R`\int\sin^2=\tfrac x2-\tfrac{\sin2x}4\qquad\int\tan^2=\tan x-x`, R`\int_0^\pi\sin^2x\,dx=\tfrac\pi2`],
];
const PNAME = {0:['ANTES DE CADA EJERCICIO','Hazlo siempre, en este orden'],1:['PRIORIDAD 1 · TEMAS DEL PARCIAL','Definida, áreas, discos, arandelas, secciones y longitud'],2:['PRIORIDAD 2 · MÉTODOS DE INTEGRACIÓN','Los necesitas para resolver las integrales que salen en el parcial'],3:['PRIORIDAD 3 · BASE Y EXTRAS','Álgebra, gráficas y lo que no está en el temario']};

const PRIO_FIX={'Árbol de métodos':2,'Cascarones':3,'Radio del cascarón':3,'¿Discos o cascarones?':3,'Partes + LIATE':2,'Casos de partes':2,'Sustitución trig':2,'dx y regreso a x':2,'Fracciones parciales':2,'Plantillas':2,'Integrales de los pedazos':2,'TFC':1,'Secciones transversales':1,'Cicloide':2,'Propiedades':1};
HOJA2.forEach(it=>{ if(PRIO_FIX[it[2]]!==undefined) it[0]=PRIO_FIX[it[2]]; if(/^Cascarones$|Radio del cascarón|¿Discos o cascarones/.test(it[2])) it[3]=it[3]+' (no está en el temario: úsalo para verificar)'; });
HOJA2.push(
 [0,'boss','7 · Unidades','Áreas en u², volúmenes en u³, longitudes en u. La rúbrica pide la respuesta final con unidades y, si no es exacta, con decimales.', R`A=\tfrac{14}{3}\approx4.67\ \text{u}^2`],
 [1,'definida','Área bajo la curva', R`A=\int_a^bf(x)\,dx\ \ \text{si }f\ge0;\ \ \text{si }f<0\text{ en un tramo, parte y cambia el signo}`, R`\int_0^\pi\sin x\,dx=2\ \text{u}^2`],
 [1,'boss','Árbol de aplicaciones','Dibuja → cortes → ¿área? arriba − abajo · ¿volumen? rebanada ⟂ al eje: disco/arandela; sección conocida: ∫A(x) · ¿longitud? 1 + y′², busca cuadrado perfecto', R`\text{"secciones cuadradas"}\to V=\int s^2dx`],
 [1,'secciones','Áreas de secciones', R`\text{cuadrado }s^2\quad\text{semicírculo }\tfrac\pi8s^2\quad\text{equilátero }\tfrac{\sqrt3}4s^2\quad\text{isósceles }\tfrac12sh`, R`x^2+y^2=4,\ \text{cuadrados}:\ s=2\sqrt{4-x^2},\ V=\tfrac{128}{3}`],
 [1,'secciones','Largo de la rebanada', R`s=\text{arriba}-\text{abajo}\ \ (\text{círculo: }2\sqrt{r^2-x^2})`, R`\text{base entre }\sqrt x\ \text{y}\ x^2:\ s=\sqrt x-x^2`],
 [1,'discos','Arandela con eje encima (Taller #33b)','Eje y = 8 sobre la región: R = 8 − 0, r = 8 − curva.', R`\pi\int_0^4\left[64-(8-x^{3/2})^2\right]dx=\tfrac{704\pi}{5}`],
 [1,'longitud','Raíz de un cuadrado negativo (Taller #5)', R`\sqrt{u^2}=|u|=-u\ \text{si}\ u<0`, R`y\in[-3,-2]:\ \sqrt{1+x'^2}=-\left(\tfrac{y^3}{4}+\tfrac1{y^3}\right)`]
);
(()=>{ const sec=HOJA2.find(it=>it[2]==='Secciones transversales'); if(sec) sec[1]='secciones'; })();
(()=>{ const TR={boss:0,definida:1,area:2,discos:3,secciones:4,longitud:5}; HOJA2.forEach((it,i)=>it._i=i); HOJA2.sort((a,b)=> a[0]-b[0] || (a[0]===1 ? ((TR[a[1]]??9)-(TR[b[1]]??9)) : 0) || a._i-b._i); })();
