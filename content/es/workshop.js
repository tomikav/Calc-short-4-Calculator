/* ============ EJERCICIOS REALES DEL TALLER (resueltos completos) ============ */
/* Cada paso empieza con una etiqueta de etapa: {{ENU}} {{DIB}} {{COR}} {{PLA}} {{CAL}} {{RES}} */
const REAL = {
 definida:[
  {t:'Área bajo la curva y = sen x', q:R`Halla el área bajo \(y=\sin x\) entre \(x=0\) y \(x=\pi\).`, s:[
   R`{{ENU}} Piden un área: región entre la curva y el eje x, de 0 a π.`,
   R`{{DIB}} Onda del seno: (0, 0), (π/2, 1), (π, 0). Toda la región queda <i>sobre</i> el eje x, así que la integral da el área directo.`,
   R`{{PLA}} \(\displaystyle A=\int_0^{\pi}${U(R`\sin x`,'areaF','alto del rectángulo')}\,dx\)`,
   R`{{CAL}} \(\displaystyle\Big[-\cos x\Big]_0^{\pi}=${U(R`(-\cos\pi)-(-\cos0)`,'evaluar','F(b) - F(a)')}=(1)-(-1)=2\)`,
   R`{{RES}} \(A=2\ \text{u}^2\)`]},
  {t:'Área bajo y = √x (TFC con potencias)', q:R`Halla el área bajo \(y=\sqrt x\) entre \(x=0\) y \(x=4\).`, s:[
   R`{{DIB}} Media parábola acostada: (0,0), (1,1), (4,2). Región bajo la curva y sobre el eje x.`,
   R`{{PLA}} \(\displaystyle A=\int_0^4${U('x^{1/2}','exp5','√x como potencia')}\,dx\)`,
   R`{{CAL}} \(\displaystyle${U(R`\left[\frac{x^{3/2}}{3/2}\right]_0^4`,'tablaI','regla de la potencia')}=\frac23\left(4^{3/2}-0\right)=\frac23\cdot${U('8','exp5','4^{3/2} = (√4)³')}=\frac{16}{3}\)`,
   R`{{RES}} \(A=\frac{16}{3}\approx5.33\ \text{u}^2\)`]},
 ],
 area:[
  {t:'Taller 4 · Área bajo y = x² + 1 entre 0 y 2', q:R`Región acotada por \(y=x^2+1\), \(y=0\), \(x=0\), \(x=2\). Halla su área.`, s:[
   R`{{DIB}} Parábola U subida 1 unidad. Tabla: (0, 1), (1, 2), (2, 5). La región va del eje x hasta la curva, entre las rectas x = 0 y x = 2.`,
   R`{{PLA}} Rectángulo vertical: alto = \(${U('(x^2+1)-0','areaF')}\), ancho dx. \(\displaystyle A=\int_0^2(x^2+1)\,dx\)`,
   R`{{CAL}} \(\displaystyle\left[\frac{x^3}{3}+x\right]_0^2=\left(\frac83+2\right)-0=${U(R`\frac83+\frac63`,'frac','2 = 6/3')}=\frac{14}{3}\)`,
   R`{{RES}} \(A=\frac{14}{3}\approx4.67\ \text{u}^2\)`]},
  {t:'Taller 4 · Región de #18: y = 6x y y = 6x²', q:R`Halla el área de la región acotada por \(y=6x\) y \(y=6x^2\).`, s:[
   R`{{COR}} \(6x=6x^2\Rightarrow6x^2-6x=0\Rightarrow${U('6x(x-1)=0','ecu')}\Rightarrow x=0,\ x=1\). Puntos (0, 0) y (1, 6).`,
   R`{{DIB}} Recta por el origen con pendiente 6 y parábola angosta. Prueba en x = 0.5: recta 3, parábola 1.5 → arriba la recta.`,
   R`{{PLA}} \(\displaystyle A=\int_0^1${U('(6x-6x^2)','areaF')}\,dx\)`,
   R`{{CAL}} \(\displaystyle\left[3x^2-2x^3\right]_0^1=(3-2)-0=1\)`,
   R`{{RES}} \(A=1\ \text{u}^2\)`]},
  {t:'Taller 4 · Región de #19: x − 2y = 0 y y² = 4x', q:R`Halla el área de la región acotada por \(x-2y=0\) y \(y^2=4x\) (parte de arriba).`, s:[
   R`{{ENU}} Despejo y: la recta es \(y=\frac x2\); la parábola acostada \(y^2=4x\) en su rama de arriba es \(y=2\sqrt x\).`,
   R`{{COR}} \(\frac x2=2\sqrt x\Rightarrow${U(R`\frac{x^2}{4}=4x`,'ecu','elevo al cuadrado')}\Rightarrow x(x-16)=0\Rightarrow x=0,\ 16\). Puntos (0,0) y (16, 8).`,
   R`{{DIB}} Prueba en x = 4: \(2\sqrt4=4\) vs \(\frac42=2\) → arriba la raíz.`,
   R`{{PLA}} \(\displaystyle A=\int_0^{16}${U(R`\left(2x^{1/2}-\frac x2\right)`,'areaF')}dx\)`,
   R`{{CAL}} \(\displaystyle\left[\frac43x^{3/2}-\frac{x^2}{4}\right]_0^{16}=\frac43\cdot${U('64','exp5','16^{3/2} = 4³')}-\frac{256}{4}=\frac{256}{3}-64=\frac{64}{3}\)`,
   R`{{RES}} \(A=\frac{64}{3}\approx21.33\ \text{u}^2\)`]},
 ],
 discos:[
  {t:'Taller 4 · #5: y = x²/π, x = 4, y = 0 (eje x)', q:R`Dibuja la región, muestra una rebanada vertical y halla el volumen al girar alrededor del eje x.`, s:[
   R`{{DIB}} Parábola \(y=\frac{x^2}{\pi}\): (0,0), (2, 4/π ≈ 1.27), (4, 16/π ≈ 5.09). Región bajo la curva entre x = 0 y x = 4.`,
   R`{{PLA}} Eje x horizontal, rebanada vertical ⟂ al eje y la región toca el eje → DISCO con \(R=\frac{x^2}{\pi}\). \(\displaystyle V=\pi\int_0^4${U(R`\left(\frac{x^2}{\pi}\right)^2`,'discoF','R²')}dx\)`,
   R`{{CAL}} \(\displaystyle\pi\int_0^4${U(R`\frac{x^4}{\pi^2}`,'exp3','(a/b)² = a²/b²')}dx=\frac{\pi}{\pi^2}\left[\frac{x^5}{5}\right]_0^4=\frac1\pi\cdot\frac{1024}{5}\)`,
   R`{{RES}} \(V=\frac{1024}{5\pi}\approx65.19\ \text{u}^3\)`]},
  {t:'Taller 4 · #9: semicírculo y = √(9 − x²), de −2 a 3', q:R`Región acotada por \(y=\sqrt{9-x^2}\), \(y=0\), entre \(x=-2\) y \(x=3\). Gira alrededor del eje x.`, s:[
   R`{{DIB}} \(y^2=9-x^2\Rightarrow${U('x^2+y^2=9','circ','círculo de radio 3')}\), solo la mitad de arriba. Corto la región con las rectas x = −2 y x = 3.`,
   R`{{PLA}} Disco con \(R=\sqrt{9-x^2}\Rightarrow${U('R^2=9-x^2','exp3','la raíz al cuadrado se va')}\). \(\displaystyle V=\pi\int_{-2}^{3}(9-x^2)\,dx\)`,
   R`{{CAL}} \(\pi\left[9x-\frac{x^3}{3}\right]_{-2}^{3}=\pi\left[(27-9)-\left(-18+\frac83\right)\right]=\pi\left(18+18-\frac83\right)\)`,
   R`{{CAL}} \(=\pi\left(${U(R`\frac{108}{3}-\frac83`,'frac','36 = 108/3')}\right)=\frac{100\pi}{3}\)`,
   R`{{RES}} \(V=\frac{100\pi}{3}\approx104.72\ \text{u}^3\)`]},
  {t:'Taller 4 · #11: x = y², x = 0, y = 3 (eje y)', q:R`Dibuja la región, rebanada horizontal y volumen al girar alrededor del eje y.`, s:[
   R`{{DIB}} \(x=y^2\) parábola acostada (abre a la derecha): (0,0), (1,1), (4,2), (9,3). La región queda entre el eje y y la parábola, de y = 0 a y = 3.`,
   R`{{PLA}} Eje y vertical → rebanada horizontal (dy). Toca el eje → disco con \(R=x=y^2\). \(\displaystyle V=\pi\int_0^3${U('(y^2)^2','discoF','R²')}dy=\pi\int_0^3${U('y^4','exp3')}dy\)`,
   R`{{CAL}} \(\displaystyle\pi\left[\frac{y^5}{5}\right]_0^3=\pi\cdot\frac{243}{5}\)`,
   R`{{RES}} \(V=\frac{243\pi}{5}\approx152.68\ \text{u}^3\)`]},
  {t:'Taller 4 · #18: arandela y = 6x, y = 6x² (eje x)', q:R`Volumen al girar alrededor del eje x la región acotada por \(y=6x\) y \(y=6x^2\).`, s:[
   R`{{COR}} \(6x=6x^2\Rightarrow x=0,\ 1\). Arriba la recta (en x = 0.5: 3 > 1.5).`,
   R`{{PLA}} No toca el eje en todo el intervalo → ARANDELA. \(${U('R=6x','ejeDesp','curva lejana')}\), \(${U('r=6x^2','ejeDesp','curva cercana','#ff7a00')}\)`,
   R`{{PLA}} \(\displaystyle V=\pi\int_0^1\left[${U('(6x)^2-(6x^2)^2','discoF')}\right]dx=\pi\int_0^1(36x^2-36x^4)\,dx\)`,
   R`{{CAL}} \(\displaystyle36\pi\left[\frac{x^3}{3}-\frac{x^5}{5}\right]_0^1=36\pi\left(${U(R`\frac{5}{15}-\frac{3}{15}`,'frac')}\right)=36\pi\cdot\frac{2}{15}=\frac{24\pi}{5}\)`,
   R`{{RES}} \(V=\frac{24\pi}{5}\approx15.08\ \text{u}^3\)`]},
  {t:'Taller 4 · #19: arandela x − 2y = 0, y² = 4x (eje x)', q:R`Volumen al girar alrededor del eje x la región acotada por la recta \(x-2y=0\) y la parábola \(y^2=4x\).`, s:[
   R`{{COR}} Igual que en área: \(y=\frac x2\) y \(y=2\sqrt x\) se cortan en x = 0 y x = 16. Arriba \(2\sqrt x\).`,
   R`{{PLA}} Arandela: \(${U(R`R=2\sqrt x`,'ejeDesp','lejana')}\), \(${U(R`r=\frac x2`,'ejeDesp','cercana','#ff7a00')}\). \(\displaystyle V=\pi\int_0^{16}\left[${U(R`(2\sqrt x)^2-\left(\frac x2\right)^2`,'discoF')}\right]dx\)`,
   R`{{CAL}} \(\displaystyle\pi\int_0^{16}\left(4x-\frac{x^2}{4}\right)dx=\pi\left[2x^2-\frac{x^3}{12}\right]_0^{16}=\pi\left(512-\frac{4096}{12}\right)\)`,
   R`{{CAL}} \(\displaystyle=\pi\left(${U(R`\frac{1536}{3}-\frac{1024}{3}`,'frac','512 = 1536/3; 4096/12 = 1024/3')}\right)=\frac{512\pi}{3}\)`,
   R`{{RES}} \(V=\frac{512\pi}{3}\approx536.17\ \text{u}^3\)`]},
  {t:'Taller 4 · #22: eje desplazado y = 2', q:R`Región en el primer cuadrante acotada por \(3x^2-16y+48=0\), \(x^2-16y+80=0\) y el eje y. Gira alrededor de \(y=2\).`, s:[
   R`{{ENU}} Despejo y de cada parábola: \(${U(R`y=\frac{3x^2}{16}+3`,'xgy','curva 1')}\) y \(${U(R`y=\frac{x^2}{16}+5`,'xgy','curva 2','#0057ff')}\).`,
   R`{{COR}} \(\frac{3x^2}{16}+3=\frac{x^2}{16}+5\Rightarrow\frac{2x^2}{16}=2\Rightarrow x^2=16\Rightarrow x=4\) (primer cuadrante). Región de x = 0 a 4.`,
   R`{{DIB}} En x = 0: curva 1 vale 3 y curva 2 vale 5 → arriba la curva 2. El eje y = 2 queda DEBAJO de toda la región (la región empieza en y = 3).`,
   R`{{PLA}} Eje abajo: \(${U(R`R=\left(\frac{x^2}{16}+5\right)-2=\frac{x^2}{16}+3`,'ejeDesp','arriba - k')}\), \(${U(R`r=\left(\frac{3x^2}{16}+3\right)-2=\frac{3x^2}{16}+1`,'ejeDesp','abajo - k','#ff7a00')}\)`,
   R`{{CAL}} \(R^2-r^2=\left(\frac{x^4}{256}+\frac{6x^2}{16}+9\right)-\left(\frac{9x^4}{256}+\frac{6x^2}{16}+1\right)=${U(R`8-\frac{x^4}{32}`,'dist','los x² se cancelan')}\)`,
   R`{{CAL}} \(\displaystyle V=\pi\int_0^4\left(8-\frac{x^4}{32}\right)dx=\pi\left[8x-\frac{x^5}{160}\right]_0^4=\pi\left(32-\frac{1024}{160}\right)=\pi\left(32-\frac{32}{5}\right)\)`,
   R`{{RES}} \(V=\frac{128\pi}{5}\approx80.42\ \text{u}^3\)`]},
  {t:'Taller 4 · #33: y² = x³, x = 4, eje x (dos ejes)', q:R`Región en el primer cuadrante acotada por \(y^2=x^3\), \(x=4\) y el eje x. Gira (a) alrededor de \(x=4\); (b) alrededor de \(y=8\).`, s:[
   R`{{DIB}} \(y=x^{3/2}\): (0,0), (1,1), (4,8). Región bajo la curva, de x = 0 a x = 4.`,
   R`{{PLA}} (a) Eje x = 4 VERTICAL → rebanada horizontal (dy). Despejo: \(${U('x=y^{2/3}','xgy')}\), y de 0 a 8. El disco va del eje (x = 4) a la curva: \(${U('R=4-y^{2/3}','ejeDesp','eje - curva')}\)`,
   R`{{CAL}} \(\displaystyle V_a=\pi\int_0^8${U('(4-y^{2/3})^2','sqm')}dy=\pi\int_0^8\left(16-8y^{2/3}+y^{4/3}\right)dy=\pi\left[16y-\frac{24}{5}y^{5/3}+\frac37y^{7/3}\right]_0^8\)`,
   R`{{CAL}} \(8^{5/3}=32,\ 8^{7/3}=128\Rightarrow\pi\left(128-\frac{768}{5}+\frac{384}{7}\right)=\pi\cdot\frac{4480-5376+1920}{35}=\frac{1024\pi}{35}\)`,
   R`{{PLA}} (b) Eje y = 8 HORIZONTAL, ENCIMA de la región → arandelas en dx: \(${U('R=8-0=8','ejeDesp','eje - abajo')}\), \(${U('r=8-x^{3/2}','ejeDesp','eje - arriba','#ff7a00')}\)`,
   R`{{CAL}} \(\displaystyle V_b=\pi\int_0^4\left[64-(8-x^{3/2})^2\right]dx=\pi\int_0^4\left(16x^{3/2}-x^3\right)dx=\pi\left[\frac{32}{5}x^{5/2}-\frac{x^4}{4}\right]_0^4=\pi\left(\frac{1024}{5}-64\right)\)`,
   R`{{RES}} \(V_a=\frac{1024\pi}{35}\approx91.91\ \text{u}^3\qquad V_b=\frac{704\pi}{5}\approx442.34\ \text{u}^3\)`]},
  {t:'Taller 4 · #17: esferoide (elipse)', q:R`Gira alrededor del eje x la mitad superior de la elipse \(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\).`, s:[
   R`{{DIB}} Elipse que corta al eje x en ±a y al eje y en ±b. Mitad de arriba.`,
   R`{{PLA}} Despejo \(y^2\): \(${U(R`y^2=b^2\left(1-\frac{x^2}{a^2}\right)`,'xgy','R² directo')}\). Disco: \(\displaystyle V=\pi\int_{-a}^{a}b^2\left(1-\frac{x^2}{a^2}\right)dx\)`,
   R`{{CAL}} \(\displaystyle${U(R`2\pi b^2\int_0^a`,'props','función par')}\left(1-\frac{x^2}{a^2}\right)dx=2\pi b^2\left(a-\frac{a}{3}\right)=2\pi b^2\cdot\frac{2a}{3}\)`,
   R`{{RES}} \(V=\frac43\pi ab^2\). (Si a = b = r sale la esfera \(\frac43\pi r^3\).)`]},
 ],
 secciones:[
  {t:'Taller 4 · #23: base circular, secciones cuadradas', q:R`La base de un sólido es el círculo \(x^2+y^2=4\). Cada sección perpendicular al eje x es un cuadrado. Halla el volumen.`, s:[
   R`{{DIB}} Círculo de radio 2. Una rebanada vertical en la posición x va de \(y=-\sqrt{4-x^2}\) a \(y=\sqrt{4-x^2}\).`,
   R`{{PLA}} Lado del cuadrado = largo de la rebanada: \(${U(R`s=\sqrt{4-x^2}-\left(-\sqrt{4-x^2}\right)=2\sqrt{4-x^2}`,'areaF','arriba - abajo')}\)`,
   R`{{PLA}} \(A(x)=s^2=${U('4(4-x^2)','exp3','(2√…)² = 4(…)')}\). \(\displaystyle V=\int_{-2}^{2}4(4-x^2)\,dx\)`,
   R`{{CAL}} \(\displaystyle${U(R`=2\int_0^2`,'props','par')}4(4-x^2)dx=8\left[4x-\frac{x^3}{3}\right]_0^2=8\left(8-\frac83\right)=8\cdot\frac{16}{3}\)`,
   R`{{RES}} \(V=\frac{128}{3}\approx42.67\ \text{u}^3\)`]},
  {t:'Taller 4 · #24: base circular, triángulos isósceles de altura 4', q:R`Mismo sólido que #23, pero cada sección es un triángulo isósceles con base en el plano xy y altura 4.`, s:[
   R`{{PLA}} Base del triángulo = \(s=2\sqrt{4-x^2}\), altura 4. \(A(x)=\frac12\cdot s\cdot4=${U(R`4\sqrt{4-x^2}`,'seccion','½·base·altura')}\)`,
   R`{{PLA}} \(\displaystyle V=\int_{-2}^{2}4\sqrt{4-x^2}\,dx=4${U(R`\int_{-2}^{2}\sqrt{4-x^2}\,dx`,'circ','área de medio círculo')}\)`,
   R`{{CAL}} La integral es el área del semicírculo de radio 2: \(\frac{\pi(2)^2}{2}=2\pi\). (Pista del taller: interprétala como área.)`,
   R`{{RES}} \(V=4\cdot2\pi=8\pi\approx25.13\ \text{u}^3\)`]},
  {t:'Taller 4 · #25: base bajo y = √cos x, cuadrados', q:R`La base está acotada por un arco de \(y=\sqrt{\cos x}\), \(-\frac\pi2\le x\le\frac\pi2\), y el eje x. Secciones ⟂ al eje x: cuadrados apoyados en la base.`, s:[
   R`{{DIB}} Arco que vale 1 en x = 0 y 0 en ±π/2. Lado del cuadrado = altura de la base: \(s=\sqrt{\cos x}\)`,
   R`{{PLA}} \(A(x)=s^2=${U(R`(\sqrt{\cos x})^2=\cos x`,'exp3','la raíz se va')}\). \(\displaystyle V=\int_{-\pi/2}^{\pi/2}\cos x\,dx\)`,
   R`{{CAL}} \(\Big[\sin x\Big]_{-\pi/2}^{\pi/2}=${U(R`1-(-1)`,'notab','sen(±π/2) = ±1')}=2\)`,
   R`{{RES}} \(V=2\ \text{u}^3\)`]},
  {t:'Taller 4 · #26: base entre y = 1 − x² y y = 1 − x⁴', q:R`La base es la región acotada por \(y=1-x^2\) y \(y=1-x^4\). Secciones ⟂ al eje x: cuadrados.`, s:[
   R`{{COR}} \(1-x^2=1-x^4\Rightarrow x^4-x^2=0\Rightarrow x^2(x-1)(x+1)=0\Rightarrow x=-1,0,1\)`,
   R`{{DIB}} Prueba en x = 0.5: \(1-x^4=0.9375\) y \(1-x^2=0.75\) → arriba \(1-x^4\).`,
   R`{{PLA}} Lado: \(s=(1-x^4)-(1-x^2)=${U('x^2-x^4','areaF','arriba - abajo')}\). \(A=s^2=${U('x^4-2x^6+x^8','sqm')}\)`,
   R`{{CAL}} \(\displaystyle V=${U(R`2\int_0^1`,'props','par')}\left(x^4-2x^6+x^8\right)dx=2\left(\frac15-\frac27+\frac19\right)=2\cdot\frac{63-90+35}{315}\)`,
   R`{{RES}} \(V=\frac{16}{315}\approx0.0508\ \text{u}^3\)`]},
  {t:'Taller 4 · #32: base entre √x y x², semicírculos', q:R`La base es la región acotada por \(y=\sqrt x\) y \(y=x^2\). Cada sección ⟂ al eje x es un semicírculo cuyo diámetro atraviesa la región.`, s:[
   R`{{COR}} \(\sqrt x=x^2\Rightarrow x=x^4\Rightarrow x(x^3-1)=0\Rightarrow x=0,\ 1\). Arriba \(\sqrt x\).`,
   R`{{PLA}} Diámetro \(s=\sqrt x-x^2\). Área de semicírculo con diámetro s: \(${U(R`A=\frac12\pi\left(\frac s2\right)^2=\frac\pi8s^2`,'seccion','radio = s/2')}\)`,
   R`{{PLA}} \(\displaystyle V=\frac\pi8\int_0^1${U(R`\left(\sqrt x-x^2\right)^2`,'sqm')}dx=\frac\pi8\int_0^1\left(x-2x^{5/2}+x^4\right)dx\)`,
   R`{{CAL}} \(\displaystyle\frac\pi8\left[\frac{x^2}{2}-\frac47x^{7/2}+\frac{x^5}{5}\right]_0^1=\frac\pi8\left(\frac{35}{70}-\frac{40}{70}+\frac{14}{70}\right)=\frac\pi8\cdot\frac{9}{70}\)`,
   R`{{RES}} \(V=\frac{9\pi}{560}\approx0.0505\ \text{u}^3\)`]},
 ],
 longitud:[
  {t:'Taller 4 · #1: y = 4x^{3/2}, de 1/3 a 5', q:R`Halla la longitud de \(y=4x^{3/2}\) entre \(x=\frac13\) y \(x=5\).`, s:[
   R`{{PLA}} \(y'=4\cdot\frac32x^{1/2}=6\sqrt x\Rightarrow(y')^2=36x\). \(\displaystyle L=\int_{1/3}^{5}\sqrt{1+36x}\,dx\)`,
   R`{{CAL}} Sustitución \(${U('u=1+36x,\ du=36\,dx','usub')}\): \(\displaystyle\int\sqrt{1+36x}\,dx=\frac{1}{36}\cdot\frac{(1+36x)^{3/2}}{3/2}=\frac{(1+36x)^{3/2}}{54}\)`,
   R`{{CAL}} \(\displaystyle L=\frac{1}{54}\left[(1+36x)^{3/2}\right]_{1/3}^{5}=\frac{1}{54}\left(181^{3/2}-13^{3/2}\right)\) (aquí el taller pide calculadora)`,
   R`{{RES}} \(L\approx\frac{2435.1-46.87}{54}\approx44.23\ \text{u}\)`]},
  {t:'Taller 4 · #3: y = (4 − x^{2/3})^{3/2}, de 1 a 8', q:R`Halla la longitud de \(y=(4-x^{2/3})^{3/2}\) entre \(x=1\) y \(x=8\).`, s:[
   R`{{PLA}} Cadena: \(y'=${U(R`\frac32(4-x^{2/3})^{1/2}`,'tablaD','afuera')}\cdot${U(R`\left(-\frac23x^{-1/3}\right)`,'cadena','adentro')}=-x^{-1/3}\sqrt{4-x^{2/3}}\)`,
   R`{{CAL}} \((y')^2=x^{-2/3}(4-x^{2/3})=4x^{-2/3}-1\Rightarrow1+(y')^2=${U('4x^{-2/3}','exp4','el 1 se cancela')}\)`,
   R`{{CAL}} \(\sqrt{4x^{-2/3}}=2x^{-1/3}\). \(\displaystyle L=\int_1^82x^{-1/3}dx=2\left[\frac{x^{2/3}}{2/3}\right]_1^8=3\left(${U('8^{2/3}','exp5','= 4')}-1\right)\)`,
   R`{{RES}} \(L=3(4-1)=9\ \text{u}\)`]},
  {t:'Taller 4 · #5: x = y⁴/16 + 1/(2y²), y de −3 a −2 (¡signos!)', q:R`Halla la longitud de \(x=\frac{y^4}{16}+\frac{1}{2y^2}\) entre \(y=-3\) y \(y=-2\). Pista del taller: \(\sqrt{u^2}=-u\) cuando \(u<0\).`, s:[
   R`{{PLA}} Curva x = g(y) → \(\displaystyle L=\int\sqrt{1+(x')^2}\,dy\). \(x'=\frac{y^3}{4}${U('-y^{-3}','exp4','(½y⁻²)′ = -y⁻³')}\)`,
   R`{{CAL}} \(A=\frac{y^3}{4}\), \(B=\frac{1}{y^3}\), \(AB=\frac14\) ✓ → \(\sqrt{1+(x')^2}=${U(R`\left|\frac{y^3}{4}+\frac1{y^3}\right|`,'rad','√(u²) = |u|')}\)`,
   R`{{CAL}} En [−3, −2] los dos términos son negativos → el valor absoluto es \(-\left(\frac{y^3}{4}+y^{-3}\right)\)`,
   R`{{CAL}} \(\displaystyle L=-\left[\frac{y^4}{16}-\frac{1}{2y^2}\right]_{-3}^{-2}=-\left[\left(1-\frac18\right)-\left(\frac{81}{16}-\frac1{18}\right)\right]=-\left[\frac{126}{144}-\frac{721}{144}\right]\)`,
   R`{{RES}} \(L=\frac{595}{144}\approx4.13\ \text{u}\)`]},
  {t:'Taller 4 · #6: 30xy³ − y⁸ = 15, y de 1 a 3', q:R`Halla la longitud de la curva \(30xy^3-y^8=15\) entre \(y=1\) y \(y=3\).`, s:[
   R`{{ENU}} Despejo x: \(x=\frac{y^8+15}{30y^3}=${U(R`\frac{y^5}{30}+\frac{1}{2y^3}`,'sep','separo la fracción')}\)`,
   R`{{PLA}} \(x'=\frac{y^4}{6}-\frac{3}{2y^4}\). \(AB=\frac{y^4}{6}\cdot\frac{3}{2y^4}=\frac14\) ✓ → \(\sqrt{1+(x')^2}=${U(R`\frac{y^4}{6}+\frac{3}{2y^4}`,'longF')}\)`,
   R`{{CAL}} \(\displaystyle L=\left[\frac{y^5}{30}-\frac{1}{2y^3}\right]_1^3=\left(\frac{243}{30}-\frac{1}{54}\right)-\left(\frac1{30}-\frac12\right)\)`,
   R`{{RES}} \(L=\frac{1154}{135}\approx8.55\ \text{u}\)`]},
  {t:'Taller 4 · #8: paramétrica x = 3t² + 2, y = 2t³ − ½', q:R`Halla la longitud para \(1\le t\le4\).`, s:[
   R`{{PLA}} \(x'=6t\), \(y'=6t^2\). \(\sqrt{(6t)^2+(6t^2)^2}=\sqrt{36t^2(1+t^2)}=${U(R`6t\sqrt{1+t^2}`,'rad','t > 0')}\)`,
   R`{{CAL}} \(${U('u=1+t^2,\ du=2t\,dt','usub')}\): \(\displaystyle\int6t\sqrt{1+t^2}\,dt=3\int u^{1/2}du=2u^{3/2}\)`,
   R`{{CAL}} \(L=2\left[(1+t^2)^{3/2}\right]_1^4=2\left(17^{3/2}-2^{3/2}\right)\)`,
   R`{{RES}} \(L\approx2(70.09-2.83)\approx134.53\ \text{u}\)`]},
 ],
 basica:[
  {t:'Taller 1 · 1.45: ∫√x(1 − √x)dx', q:R`\(\displaystyle\int\sqrt x\,(1-\sqrt x)\,dx\)`, s:[
   R`{{PLA}} Reparto: \(${U(R`\sqrt x-\sqrt x\cdot\sqrt x`,'dist')}=x^{1/2}-x\)`,
   R`{{CAL}} \(\displaystyle\frac{x^{3/2}}{3/2}-\frac{x^2}{2}=\frac23x^{3/2}-\frac{x^2}{2}+C\)`]},
  {t:'Taller 1 · 2.52: ∫x/√(x² + 1)dx', q:R`\(\displaystyle\int\frac{x\,dx}{\sqrt{x^2+1}}\)`, s:[
   R`{{PLA}} \(${U(R`u=x^2+1,\ du=2x\,dx`,'usub')}\Rightarrow x\,dx=\frac{du}{2}\)`,
   R`{{CAL}} \(\displaystyle\frac12\int u^{-1/2}du=\frac12\cdot\frac{u^{1/2}}{1/2}=\sqrt{x^2+1}+C\)`]},
  {t:'Taller 1 · 3.27: ∫sen x cos x dx', q:R`\(\displaystyle\int\sin x\cos x\,dx\)`, s:[
   R`{{PLA}} \(${U(R`u=\sin x,\ du=\cos x\,dx`,'usub')}\)`,
   R`{{CAL}} \(\displaystyle\int u\,du=\frac{u^2}{2}=\frac{\sin^2x}{2}+C\)`]},
 ],
};
const SECC = { id:'secciones', code:'SEC-15B', g:'f6', n:'Volúmenes por secciones transversales', sub:'V = ∫A(x)dx · Taller 4 #23–27, #32', tgt:'SOLIDO_REBANADO',
  req:['area','discos'], uses:'Parcial: tema 6 (volúmenes de sólidos)',
  lore: R`
  <div class="why">Es un tema propio del parcial. Es la idea general de la que salen discos y arandelas: si conoces el área de cada rebanada, sumas.</div>
  <h3>Idea</h3>
  <p>Cortas el sólido en rebanadas delgadas perpendiculares al eje x. Cada rebanada tiene un área \(A(x)\) y un grosor dx; su volumen es \(A(x)\,dx\). Sumas todas:</p>
  <div class="formula">\[V=\int_a^bA(x)\,dx\]</div>
  <p>Los discos son el caso \(A(x)=\pi R^2\). Aquí la forma de la sección la da el enunciado (cuadrado, triángulo, semicírculo).</p>
  <h3>Receta</h3>
  <ol class="recipe">
   <li>Dibuja la <b>base</b> en el plano xy (es una región plana, como en área).</li>
   <li>Toma una rebanada ⟂ al eje x en la posición x. Su <b>largo dentro de la base</b> es \(s(x)=\text{arriba}-\text{abajo}\).</li>
   <li>Ese largo es el lado (o el diámetro) de la figura de la sección. Calcula \(A(x)\) con la tabla.</li>
   <li>Integra \(A(x)\) entre los límites de la base. Usa simetría si la base es simétrica.</li>
  </ol>
  <h3>Áreas de las secciones</h3>
  <div class="tscroll"><table class="t"><tr><th>Sección (s = largo en la base)</th><th>A(x)</th></tr>
   <tr><td>Cuadrado de lado s</td><td>\(s^2\)</td></tr>
   <tr><td>Semicírculo de diámetro s</td><td>\(\frac\pi8s^2\)</td></tr>
   <tr><td>Triángulo equilátero de lado s</td><td>\(\frac{\sqrt3}{4}s^2\)</td></tr>
   <tr><td>Triángulo isósceles de base s y altura h</td><td>\(\frac12sh\)</td></tr>
   <tr><td>Triángulo rectángulo isósceles (cateto s)</td><td>\(\frac12s^2\)</td></tr>
   <tr><td>Rectángulo de base s y altura h</td><td>\(sh\)</td></tr></table></div>
  <div class="trap">Si la base es un círculo \(x^2+y^2=r^2\), el largo de la rebanada es \(2\sqrt{r^2-x^2}\) (de abajo hasta arriba), no \(\sqrt{r^2-x^2}\). Olvidar el 2 divide el volumen entre 4 cuando la sección es un cuadrado.</div>
  <div class="tip">Si al plantear te queda \(\int\sqrt{r^2-x^2}\,dx\), es el área de un pedazo de círculo: no hace falta sustitución trigonométrica (Taller 4, #24).</div>`,
  ex:[], qs:[
   {q:R`Base: \(x^2+y^2=4\); secciones ⟂ al eje x son cuadrados. Lado s en la posición x:`, o:[R`\(2\sqrt{4-x^2}\)`,R`\(\sqrt{4-x^2}\)`,R`\(4-x^2\)`,R`\(2(4-x^2)\)`], e:'Va de −√(4−x²) a +√(4−x²).', h:'Arriba − abajo.'},
   {q:R`Volumen de ese sólido (#23):`, o:[R`\(\frac{128}{3}\)`,R`\(\frac{32}{3}\)`,R`\(16\pi\)`,R`\(\frac{64}{3}\)`], e:R`\(\int_{-2}^2 4(4-x^2)dx=\frac{128}{3}\).`, h:'A = 4(4 − x²).'},
   {q:'Área de un semicírculo cuyo diámetro mide s:', o:[R`\(\frac\pi8s^2\)`,R`\(\frac\pi2s^2\)`,R`\(\frac\pi4s^2\)`,R`\(\pi s^2\)`], e:R`Radio s/2: \(\frac12\pi\frac{s^2}{4}\).`, h:'El radio es la mitad.'},
   {q:R`#25: base bajo \(y=\sqrt{\cos x}\) en \([-\frac\pi2,\frac\pi2]\), cuadrados. V =`, o:['2','π','1',R`\(\frac\pi2\)`], e:'A = cos x; ∫cos x = 2.', h:'(√cos x)² = cos x.'},
   {q:'Triángulo equilátero de lado s, área:', o:[R`\(\frac{\sqrt3}{4}s^2\)`,R`\(\frac12s^2\)`,R`\(\frac{\sqrt3}{2}s^2\)`,R`\(s^2\)`], e:'Altura (√3/2)s; área ½·s·altura.', h:'½ base · altura.'},
  ]};
REF.seccion=['secciones','Áreas de las secciones','Áreas de las secciones']; COL.seccion='#00a37a'; SHORT.seccion='área de la sección';
QREF.secciones=['seccion','props'];
VIDS.secciones=[[YT('BgJhiXhuFhk'),'Discos (caso particular de secciones)'],[YTL('PL9SnRnlzoyX0PTDHm5GXFN2a5K9vcH79h'),'Sólidos de revolución y secciones (lista completa)']];
(()=>{ const i=LV.findIndex(l=>l.id==='discos'); LV.splice(i+1,0,SECC);
  Object.entries(REAL).forEach(([k,arr])=>{ const L=LV.find(x=>x.id===k); if(L) L.ex = arr.concat(L.ex); });
  const disc=LV.find(l=>l.id==='discos'); disc.uses='Secciones transversales (SEC-15B) · Parcial: temas 4 y 5';
  const cas=LV.find(l=>l.id==='cascarones'); cas.req=['discos']; cas.uses='NO está en el temario del parcial: úsalo solo para verificar';
  const lon=LV.find(l=>l.id==='longitud'); lon.req=['derivadas','notables','definida'];
})();
