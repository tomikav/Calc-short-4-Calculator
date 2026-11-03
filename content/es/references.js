/* Colores de cada ley / regla (se usan en las llaves y en los botones de referencia) */
const COL = {exp1:'#e10600',exp2:'#0057ff',exp3:'#8a2be2',exp4:'#00a37a',exp5:'#ff7a00',rad:'#c2185b',frac:'#5c5c5c',
 sep:'#00838f',sq:'#e10600',sqm:'#0057ff',tcp:'#8a2be2',dcuad:'#00a37a',cubos:'#ff7a00',dist:'#5c5c5c',factor:'#c2185b',ac:'#00838f',disc:'#8a2be2',trin:'#0057ff',
 div:'#0057ff',ecu:'#e10600',log:'#00a37a',tabla:'#ff7a00',parab:'#8a2be2',transf:'#00838f',catal:'#5c5c5c',xgy:'#c2185b',circ:'#00a37a',protocolo:'#5c5c5c',senos:'#0057ff',
 deftrig:'#c2185b',notab:'#ff7a00',pit:'#e10600',doble:'#0057ff',medio:'#00a37a',tablaD:'#8a2be2',reglas:'#00838f',cadena:'#ff7a00',
 tablaI:'#00838f',usub:'#e10600',tfc:'#0057ff',evaluar:'#8a2be2',props:'#00a37a',subdef:'#ff7a00',
 partesF:'#e10600',liate:'#0057ff',cicl:'#8a2be2',impar:'#ff7a00',tansec:'#c2185b',completar:'#0057ff',xnum:'#c2185b',sustrig:'#e10600',
 plantilla:'#0057ff',tapado:'#e10600',areaF:'#e10600',areaR:'#0057ff',discoF:'#e10600',ejeDesp:'#0057ff',seccion:'#00a37a',cascF:'#e10600',cascR:'#0057ff',longF:'#e10600',longR:'#0057ff'};

/* ============ REFERENCIAS A TEORÍA ============ */
const REF = {
 exp1:['exponentes','Ley 1','Ley 1 · producto de potencias'], exp2:['exponentes','Ley 2','Ley 2 · cociente de potencias'],
 exp3:['exponentes','Ley 3','Ley 3 · potencia de potencia'], exp4:['exponentes','Ley 4','Ley 4 · exponente negativo'],
 exp5:['exponentes','Ley 5','Ley 5 · exponente fraccionario'], rad:['exponentes','Propiedades de las raíces','Propiedades de raíces'],
 frac:['exponentes','Aritmética de fracciones','Aritmética de fracciones'], rewrite:['exponentes','Procedimiento: reescribir','Reescribir antes de integrar'],
 dist:['notables','La base','Propiedad distributiva'], sq:['notables','1 · Cuadrado de una suma','Binomio al cuadrado (a+b)²'],
 sqm:['notables','2 · Cuadrado de una resta','Binomio al cuadrado (a−b)²'], tcp:['notables','3 · Reconocer','Trinomio cuadrado perfecto'],
 dcuad:['notables','4 · Diferencia de cuadrados','Diferencia de cuadrados'], cubos:['notables','5 · Suma y diferencia de cubos','Suma / diferencia de cubos'],
 factor:['notables','Factorización: orden','Orden para factorizar'], trin:['notables','Trinomio \\(x^2+bx','Trinomio x² + bx + c'],
 ac:['notables','método ac','Método ac'], disc:['notables','Fórmula general','Fórmula general y discriminante'],
 sep:['ecuaciones','Fracciones algebraicas','Separar / simplificar fracciones'], div:['ecuaciones','División larga','División larga de polinomios'],
 ecu:['ecuaciones','Resolver ecuaciones','Resolver ecuaciones'], log:['ecuaciones','Logaritmos','Propiedades de logaritmos'],
 tabla:['graficar','Método universal','Tabla de valores'], catal:['graficar','Catálogo','Catálogo de funciones'],
 parab:['graficar','Parábola general','Vértice de una parábola'], transf:['graficar','Transformaciones','Transformaciones'],
 xgy:['regiones','Curvas de la forma','Curvas x = g(y)'], circ:['regiones','Circunferencias','Circunferencias y semicírculos'],
 senos:['regiones','Seno y coseno','Gráficas de sen y cos'], protocolo:['regiones','Protocolo','Protocolo para dibujar regiones'],
 deftrig:['trigbase','Definiciones','Definiciones SOH-CAH-TOA'], notab:['trigbase','Radianes y valores','Valores notables'],
 pit:['trigbase','Identidades pitagóricas','Identidades pitagóricas'], doble:['trigbase','Ángulo doble','Ángulo doble'],
 medio:['trigbase','Ángulo medio','Reducción de potencias (ángulo medio)'],
 tablaD:['derivadas','Tabla de derivadas','Tabla de derivadas'], reglas:['derivadas','Reglas','Regla del producto / cociente'], cadena:['derivadas','Procedimiento de la regla de la cadena','Regla de la cadena'],
 tablaI:['basica','Tabla de integrales','Tabla de integrales'], usub:['basica','Sustitución u','Sustitución u'],
 tfc:['definida','Teorema Fundamental','Teorema Fundamental del Cálculo'], evaluar:['definida','Procedimiento para evaluar','Evaluar F(b) − F(a)'],
 props:['definida','Propiedades','Propiedades de la integral definida'], subdef:['definida','Sustitución en una definida','Sustitución con cambio de límites'],
 partesF:['partes','De dónde sale','Fórmula ∫u dv = uv − ∫v du'], liate:['partes','Receta','Elegir u con LIATE'], cicl:['partes','Casos especiales','Cíclicas y tabla DI'],
 impar:['potencias','Caso 1','sen/cos: potencia impar o par'], tansec:['potencias','Caso 2','Potencias de tan y sec'],
 completar:['cuadrado','Receta','Completar el cuadrado'], xnum:['cuadrado','Con x en el numerador','x en el numerador (A·D′ + B)'],
 sustrig:['trig','Receta','Sustitución trig y triángulo'],
 plantilla:['fracciones','Receta completa','Plantilla de fracciones parciales'], tapado:['fracciones','Método del tapado','Método del tapado'],
 areaF:['area','Idea','Área = ∫(arriba − abajo)'], areaR:['area','Receta','Receta de área (cortes, dx o dy)'],
 discoF:['discos','Saberes previos de geometría','Disco / arandela: π∫(R² − r²)'], ejeDesp:['discos','Eje desplazado','R y r con eje desplazado'], seccion:['discos','Secciones transversales','Secciones transversales'],
 cascF:['cascarones','Idea','Cascarón: 2π∫(radio)(altura)'], cascR:['cascarones','Receta','Radio y altura del cascarón'],
 longF:['longitud','De dónde sale','L = ∫√(1 + y′²)'], longR:['longitud','Receta','Receta de longitud (cuadrado perfecto)'],
};

/* refs por paso de cada ejemplo: EXREF[nivel][titulo] = [[refs paso 1], [refs paso 2], ...] */
const EXREF = {
 exponentes:{
  'Reescribir e integrar':[['sep'],['exp2'],['exp5','exp2','frac'],['tablaI','exp4','frac'],[]],
  'Expandir, separar e integrar':[['sq'],['exp5'],['sep'],['exp2','frac'],['tablaI'],['frac']],
  'Evaluar con fracciones':[['evaluar','frac'],['evaluar'],['frac'],['frac']] },
 notables:{
  'Expandir para volumen':[['sqm'],['sqm'],['dist'],[]],
  'Factorizar completamente':[['factor'],['dcuad'],['dcuad'],['dcuad'],[]],
  'Reconocer cuadrado perfecto':[['tcp','exp3'],['tcp','exp4'],['tcp','exp2'],['tcp']] },
 ecuaciones:{
  'Taller 7.11: división con potencias faltantes':[['div'],['div'],['div'],['div'],['div'],['dist']],
  'Puntos de corte':[['ecu'],['ecu'],['factor'],['dcuad'],['ecu']],
  'Simplificar un resultado con logaritmos':[[],['log'],['log']] },
 graficar:{
  'Tabla de valores de una parábola':[['tabla'],['tabla'],['tabla'],['tabla'],['tabla'],['tabla'],['transf','catal']],
  'Vértice y cortes':[['parab'],['parab'],['parab'],['ecu','factor'],['tabla'],['parab']] },
 regiones:{
  'Taller 4, discos #11':[['xgy','protocolo'],['xgy','tabla'],['ecu'],['protocolo'],['discoF']],
  'Taller 4, discos #9':[['circ'],['circ','tabla'],['protocolo'],['discoF']] },
 trigbase:{
  'Usar una identidad para simplificar':[[],['pit'],['rad']],
  'Reducir una potencia':[['doble','exp3'],['medio'],['tablaI']] },
 derivadas:{
  'Derivada para longitud de curva (Taller 4, #2)':[['cadena','tablaD'],['exp3','dist'],['tcp']],
  'Verificar una integral derivando':[['reglas'],[]] },
 basica:{
  'Sustitución u indefinida':[['usub'],['tablaI'],['usub']],
  'Sustitución con cambio de límites':[['usub','subdef'],['tablaI'],['evaluar','frac']] },
 definida:{
  'Evaluación con negativos':[['tablaI'],['evaluar'],['evaluar'],['evaluar']],
  'Sustitución cambiando límites':[['usub'],['subdef','notab'],['props'],['evaluar']],
  'Usar paridad':[['props'],['tablaI'],['exp1','frac'],['evaluar']] },
 partes:{
  'Básico':[['liate'],['tablaI'],['partesF']],
  'Función sola':[['cicl','tablaD'],['partesF'],['tablaI']],
  'Cíclica (Taller 4.41)':[['partesF','liate'],['partesF','cicl'],['cicl'],['cicl']],
  'Partes dos veces SIN tabla (Taller 4.32)':[['liate'],['tablaD','tablaI'],['partesF'],['liate'],['partesF'],['dist'],['dist','frac'],['factor']],
  'Función inversa sola':[['cicl','tablaD'],['partesF'],['usub','tablaI'],[]] },
 potencias:{
  'Potencia impar':[['impar'],['pit','impar'],['usub'],['tablaI']],
  'Ambas pares':[['medio'],['tablaI'],['frac']],
  'tan impar':[['tansec'],['pit','usub'],['tablaI']],
  'Ambas pares (paso a paso)':[['doble'],['exp3'],['medio'],['frac'],['tablaI']] },
 cuadrado:{
  'Taller 5.34':[['completar','sq'],['completar'],['tablaI']],
  'Taller 5.22 (x arriba)':[['xnum','tablaD'],['sep'],['usub','completar'],['tablaI']],
  'Taller 5.25 (x arriba y raíz)':[['xnum','tablaD'],['xnum'],['sep'],['usub','exp5'],['completar'],['tablaI'],[]] },
 trig:{
  'Taller 6.31':[['sustrig'],['pit','exp2'],['tablaI'],['sustrig','deftrig'],[]],
  'Taller 6.17':[['sustrig','pit'],['medio','doble'],['sustrig'],[]],
  'Taller 6.26':[['sustrig','pit'],['exp2'],['medio'],['doble'],['sustrig','deftrig'],[]],
  'Taller 6.23 (secante)':[['sustrig'],['pit','rad'],['exp2'],['sustrig'],[]] },
 fracciones:{
  'Taller 7.14 (lineales distintos)':[['plantilla'],['tapado'],['tapado'],['tapado'],['tablaI']],
  'Taller 7.18 (factor repetido)':[['plantilla'],['dist'],['tapado'],['plantilla'],['tablaI','exp4']],
  'Taller 7.15 (cuadrático irreducible, completo)':[['cubos','disc'],['plantilla'],['dist'],['tapado'],['plantilla'],['tablaI'],['xnum'],['xnum','completar'],['completar','tablaI'],[]] },
 area:{
  'Básico':[['ecu','factor'],['areaR'],['areaF','evaluar','frac']],
  'Conviene dy':[['xgy','ecu'],['areaR'],['areaF','evaluar','frac'],['areaR']],
  'Curvas que se cruzan':[['senos','notab'],['areaR'],['areaR'],['props'],['evaluar','notab'],['evaluar'],[]] },
 discos:{
  'Arandela con eje desplazado':[['ecu','areaR'],['ejeDesp'],['discoF'],['sqm','dist'],['evaluar','frac']],
  'Disco alrededor del eje y (5.2 #3b)':[['xgy'],['discoF'],['evaluar']],
  'Taller 4, discos #1':[['transf','tabla'],['discoF'],['discoF'],['sq'],['evaluar'],['frac']] },
 cascarones:{
  'Cascarones #8':[['ecu'],['cascR'],['dist'],['evaluar','frac']],
  'Eje desplazado (#5)':[['cascR'],['exp1','dist'],['tablaI','frac'],['exp1']],
  'Eje desplazado a la derecha':[['protocolo'],['cascR'],['dist'],['evaluar','frac']] },
 longitud:{
  'Taller 4, #4':[['sep'],['tablaD','exp4'],['sqm','tcp'],['longF','tablaI'],['evaluar','frac']],
  'Paramétrica (#7)':[['tablaD'],['rad','longF'],['usub']],
  'Cicloide (Taller 4, #19)':[['tablaD'],['sqm','pit'],['medio'],['rad'],['evaluar']] },
};

/* teoría relacionada para las preguntas de cada sección */
const QREF = {
 exponentes:['exp1','exp2','exp4','exp5','rad','frac'], notables:['sq','dcuad','cubos','tcp','ac','disc'], ecuaciones:['sep','div','ecu','log'],
 graficar:['tabla','catal','parab','transf'], regiones:['xgy','circ','senos','protocolo'], trigbase:['deftrig','notab','pit','doble','medio'],
 derivadas:['tablaD','reglas','cadena'], basica:['tablaI','usub'], definida:['evaluar','props','subdef'], partes:['liate','partesF','cicl'],
 potencias:['impar','tansec','medio'], cuadrado:['completar','xnum'], trig:['sustrig','pit'], fracciones:['plantilla','tapado','div'],
 area:['areaR','areaF'], discos:['discoF','ejeDesp'], cascarones:['cascF','cascR'], longitud:['longF','longR','tcp'],
 boss:['usub','liate','sustrig','tapado','impar','areaR','ejeDesp','cascR','longR'],
};

/* videos (se abren en YouTube, en otra pestaña) */
const VIDS = {
 exponentes:[[YT('QTOF9_9LZSs'),'Leyes de exponentes: teoría y ejemplos'],[YT('-e2I7GK3az8'),'Leyes de los exponentes: ejercicios resueltos'],[YT('GgVW0-Yre9Q'),'Leyes de los radicales, con ejemplos']],
 notables:[[YT('6yaVbX22DUM'),'julioprofe · Binomio al cuadrado'],[YT('LCqGUOaK7dY'),'Cuadrado de un binomio y trinomio cuadrado perfecto'],[YT('LxLMBZ7a1vY'),'julioprofe · Suma de cubos'],[YT('OV-UtpAHje8'),'julioprofe · Diferencia de cubos'],[YT('xZHGl-RUqHs'),'Factorizar trinomio ax² + bx + c'],[YT('MSVP91DsGPE'),'Técnica "ac" (agrupando términos)']],
 ecuaciones:[[YT('8XqrpPdnCeQ'),'División de polinomios (división larga paso a paso)'],[YT('u5oCdakZXA4'),'División larga de polinomios'],[YT('rCr9atQ-wkA'),'Las 8 propiedades de los logaritmos']],
 graficar:[[YT('riK2Fim0dFo'),'Cómo representar parábolas (paso a paso)'],[YT('J3qQWvxqFI4'),'Funciones cuadráticas: vértice, cortes y gráfica'],[YT('TB6yV3elzX0'),'Parábola y = a(x − h)² + k: vértice y traslación']],
 regiones:[[YT('f8U9AWBfmEA'),'Área entre curvas · Ejemplo 1 (dibujo de la región)'],[YT('-TY96lh40YM'),'Volumen con gráfica de funciones a mano']],
 trigbase:[[YT('HsKyVQiXJzo'),'julioprofe · Demostración de identidades pitagóricas'],[YT('ByX4-WEAMzQ'),'Circunferencia unitaria e identidades']],
 derivadas:[[YT('m_5-WS9Nd68'),'Regla de la cadena'],[YT('yuxtOB1G6FE'),'5 ejercicios de regla de la cadena desde cero'],[YTL('PLeySRPnY35dG2UQ35tPsaVMYkQhc8Vp__'),'Derivadas · curso completo (lista)']],
 basica:[[YT('4bKEWdFpFYw'),'Integración por sustitución'],[YT('PGZaiBu_lb0'),'Sustitución: paréntesis con exponente'],[YT('G0yMb0Eq3pk'),'Sustitución: integral de una fracción']],
 definida:[[YT('SCKpUCax5ss'),'julioprofe · Teorema Fundamental del Cálculo'],[YT('eT9bZLaMHNA'),'Integral definida y TFC: ejercicios']],
 partes:[[YT('LUo1DMpuHmk'),'Integración por partes con ILATE (8 ejemplos)'],[YT('YuMWi3ARWE4'),'Partes: exponencial por trigonométrica (cíclica)'],[YT('CT1P0r9qIY8'),'Partes cíclicas: ∫eˣ sen x dx']],
 potencias:[[YT('d2K2div9MnY'),'Integral trigonométrica con exponente impar'],[YT('X_D0Vg-IRAs'),'Integral trigonométrica con ambos exponentes pares']],
 cuadrado:[[YT('L6iWezvJdFc'),'Integrales tipo arcotangente (completar cuadrados)'],[YT('pO08-IFj1UE'),'Completando el cuadrado: dx/(x² + 4x + 20)']],
 trig:[[YT('8Z2KHoRPIXc'),'Sustitución trig: dx/(x²√(4 − x²)) — es la 6.31'],[YT('jjqvOjQFnhI'),'julioprofe · ∫√(4 − x²) dx — es la 6.17'],[YT('xi1uWW7Vk0E'),'Sustitución trigonométrica: los 3 casos'],[YTL('PLeySRPnY35dGH1jMJ5lkNfNSOr-AhxcEK'),'Sustitución trigonométrica · curso (lista)']],
 fracciones:[[YT('jTxpr8RFQKo'),'Integración por fracciones parciales'],[YT('AfexYiGRZb0'),'Fracciones parciales: factor lineal repetido'],[YT('ND8v5oH9E1g'),'Fracciones parciales: factores cuadráticos irreducibles']],
 area:[[YT('f8U9AWBfmEA'),'Área entre curvas · Ejemplo 1']],
 discos:[[YT('BgJhiXhuFhk'),'Método de discos alrededor del eje x'],[YT('jCsPhVjHV9M'),'Método de arandelas alrededor del eje x'],[YT('QQDrbzHQfO4'),'Arandelas con eje desplazado'],[YT('u98ruqwUvrA'),'Arandelas con eje trasladado'],[YTL('PL9SnRnlzoyX0PTDHm5GXFN2a5K9vcH79h'),'Sólidos de revolución (lista completa)']],
 cascarones:[[YT('w-Q1CMfFEo4'),'Método de cascarones cilíndricos · Ejemplo'],[YT('tiUym7qclrA'),'Discos, arandelas y capas cilíndricas (comparación)'],[YT('-TY96lh40YM'),'Arandelas y cilindros con gráfica a mano']],
 longitud:[[YT('SMsqsVqK2gk')+'&list=PL9SnRnlzoyX2ix-gBD17FO1AkBHw2JwQ8','Longitud de curvas: explicación y demostración'],[YT('djv5DUFqM48'),'Longitud de arco · ejemplo resuelto'],[YT('6pxVMhl73SY'),'Longitud de arco de una curva paramétrica']],
};

