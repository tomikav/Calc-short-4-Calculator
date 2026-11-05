/* ============ LÍNEA DE TIEMPO: ORDEN, ERAS, PLANES Y CÓDIGOS ============
   Último archivo de contenido que se carga. Arma el curso completo:
   1. ERAS: las fases del mapa, cada una con años, protagonistas y color.
   2. ORDEN: la secuencia de secciones, de aritmética a cálculo vectorial.
   3. Renumera los códigos SEC-xx y actualiza todas las referencias en el texto.
   4. Convierte el marcado [[enlace]] y [^cita] (ver js/wiki.js).
   5. PLANES de estudio.
   Para agregar una sección: créala en cualquier archivo de content/es/ con LV.push({...})
   y agrega su id en ORDEN dentro de la era que corresponda. */

/* [etiqueta, título, descripción, años, protagonistas, color] */
COURSE.title = 'Cálculo · de cero a multivariable';
COURSE.tag = 'LÍNEA DE TIEMPO // DE SUMAR Y RESTAR A CÁLCULO VECTORIAL';
COURSE.intro = n => `${n} secciones en ${Object.keys(COURSE.groups).length} eras, de sumar y restar a los teoremas de Green, Stokes y Gauss. Cada sección dice qué <b>necesitas antes</b> y dónde lo <b>vas a usar</b>, y los términos azules son <b>enlaces</b>: pasa el mouse para ver la definición o haz clic para ir a la teoría.`;
COURSE.groups = {
  ari:['ERA 00','ARITMÉTICA Y NÚMEROS','Contar, operar con signos, fracciones, porcentajes y proporciones: la base de absolutamente todo.','c. 3000 a.C. – 1585','Babilonios · Euclides · Brahmagupta · Stevin','#9e9d24'],
  f1: ['ERA 01','FUNDAMENTOS ALGEBRAICOS','Reescribir, factorizar y resolver. Sin esto todo lo demás falla.','c. 820 – 1637','Al-Juarismi · Viète · Descartes','#6b6b6b'],
  f2: ['ERA 02','FUNCIONES Y GRÁFICAS','Leer y dibujar curvas y regiones en el plano cartesiano.','1637','Descartes · Fermat','#8d6e63'],
  f3: ['ERA 03','TRIGONOMETRÍA','Círculo unitario, identidades, ángulo doble y medio.','c. 150 – 1748','Ptolomeo · Euler','#c2185b'],
  lim:['ERA 04','LÍMITES Y CONTINUIDAD','El lenguaje del cálculo: acercarse sin llegar. Llegó al final, para darle rigor a todo.','1821 – 1861','Cauchy · Weierstrass','#00838f'],
  der:['ERA 05','LA DERIVADA','Tasa de cambio instantánea, pendiente de la tangente y todas sus reglas.','1665 – 1684','Newton · Leibniz','#e10600'],
  dap:['ERA 06','APLICACIONES DE LA DERIVADA','Tasas relacionadas, aproximaciones, forma de la curva, optimización y L’Hôpital.','1636 – 1696','Fermat · Rolle · L’Hôpital','#ff7a00'],
  f4: ['ERA 07','LA INTEGRAL','Antiderivadas, sumas de Riemann y el Teorema Fundamental.','c. 250 a.C. – 1854','Arquímedes · Barrow · Riemann','#0057ff'],
  f5: ['ERA 08','MÉTODOS DE INTEGRACIÓN','Partes, trigonométricas, sustituciones, fracciones parciales e impropias.','1690 – 1770','Bernoulli · Euler','#5e35b1'],
  f6: ['ERA 09','APLICACIONES DE LA INTEGRAL','Áreas, volúmenes, longitudes, superficies, trabajo y centros de masa.','1615 – 1659','Kepler · Cavalieri · Torricelli','#00a37a'],
  ser:['ERA 10','SUCESIONES Y SERIES','Sumar infinitos términos y escribir funciones como polinomios infinitos.','c. 1350 – 1821','Oresme · Taylor · Euler','#8a2be2'],
  par:['ERA 11','PARAMÉTRICAS Y POLARES','Curvas que se mueven y curvas que giran alrededor de un centro.','1658 – 1691','Wren · Jakob Bernoulli','#d81b60'],
  vec:['ERA 12','VECTORES Y EL ESPACIO','Flechas en 3D, rectas, planos, superficies y trayectorias.','1843 – 1881','Hamilton · Grassmann · Gibbs','#1e88e5'],
  mvd:['ERA 13','DERIVADAS EN VARIAS VARIABLES','Parciales, plano tangente, gradiente y optimización con restricciones.','1740 – 1788','Clairaut · Euler · Lagrange','#f4511e'],
  mvi:['ERA 14','INTEGRALES MÚLTIPLES','Volúmenes y masas con integrales dobles y triples en cualquier sistema de coordenadas.','1769 – 1841','Euler · Lagrange · Jacobi','#2e7d32'],
  vc: ['ERA 15','CÁLCULO VECTORIAL','Campos, integrales de línea y de superficie: Green, Stokes y Gauss.','1813 – 1854','Gauss · Green · Ostrogradski · Stokes','#3949ab'],
};
const ORDEN = {
  ari:['numeros','suma-resta','mult-div','jerarquia','primos','fracciones-base','decimales','proporciones','potencias-base','bossA'],
  f1:['algebra-intro','exponentes','notables','ecuaciones'], f2:['graficar','regiones'], f3:['trigbase'],
  lim:['limites','limites-calc','continuidad'], der:['derivada-def','derivadas','implicita'],
  dap:['razones','linealizacion','tvm','optimizacion','lhopital','bossI'],
  f4:['basica','definida'], f5:['partes','potencias','cuadrado','trig','fracciones','impropias'],
  f6:['area','discos','secciones','cascarones','longitud','aplmas','boss'],
  ser:['sucesiones','series','taylor'], par:['parametricas','polares'], vec:['vectores','rectas-planos','funvec'],
  mvd:['varias','parciales','tangente','gradiente','extremos','lagrange'],
  mvi:['dobles','dobles-polar','triples','cilesf','jacobiano'],
  vc:['campos','linea','green','superficies','stokes','divergencia','bossIII'],
};

(()=>{
  const by = id => LV.find(l=>l.id===id);
  /* ---- ajustes a secciones existentes ---- */
  const d=by('derivadas'); if(d){ d.n='Reglas de derivación'; d.sub='Tabla, producto, cociente y regla de la cadena'; d.req=['derivada-def','trigbase']; d.uses='Todo lo que sigue: implícita, optimización, sustitución u, longitud de curva, series de Taylor'; d.see=['regla-cadena','derivada']; d.cites=['osc1|§3.3–3.6','paul1|Derivatives']; }
  const b=by('basica'); if(b){ b.req=['derivadas']; b.cites=['osc1|§4.10, 5.5','paul1|Integrals']; b.see=['antiderivada','usub','tfc']; }
  const df=by('definida'); if(df){ df.req=['basica','limites']; df.cites=['osc1|§5.1–5.4','paul1|Definition of the Definite Integral','3b1b|cap. 8']; df.see=['riemann','tfc','impropia']; }
  const bs=by('boss'); if(bs){ bs.n='Checkpoint: Cálculo integral'; bs.sub='Mixto · métodos y aplicaciones de la integral · 15 min'; bs.uses='Series, cálculo multivariable'; }
  const dc=by('discos'); if(dc){ dc.uses='Secciones transversales, cascarones, superficie de revolución, integrales triples'; }
  const cs=by('cascarones'); if(cs){ cs.uses='Comparar con discos; coordenadas cilíndricas en integrales triples'; }
  const ln=by('longitud'); if(ln){ ln.uses='Superficie de revolución, curvas paramétricas y polares, funciones vectoriales'; }
  const ar=by('area'); if(ar){ ar.uses='Volúmenes, centroides y regiones de integrales dobles'; }
  const ex=by('exponentes'); if(ex){ ex.cites=['osc1|§1.5','paul1|Review']; ex.req=['algebra-intro','potencias-base']; }
  const tg=by('trigbase'); if(tg) tg.cites=['osc1|§1.3','paul1|Trig Functions'];
  const gr=by('graficar'); if(gr) gr.cites=['osc1|§1.1–1.2'];
  ['partes','potencias','cuadrado','trig','fracciones'].forEach(id=>{ const L=by(id); if(L) L.cites=['osc2|§3.1–3.5','paul2|Integration Techniques']; });
  ['area','discos','secciones','cascarones','longitud'].forEach(id=>{ const L=by(id); if(L) L.cites=['osc1|§6.1–6.4','paul2|Applications of Integrals']; });

  /* ---- orden y eras ---- */
  const ids=[].concat(...Object.values(ORDEN)); const gOf={}; Object.entries(ORDEN).forEach(([g,a])=>a.forEach(id=>gOf[id]=g));
  LV.splice(0, LV.length, ...ids.map(by).filter(Boolean), ...LV.filter(l=>!ids.includes(l.id)));
  LV.forEach(l=>{ if(gOf[l.id]) l.g=gOf[l.id]; const G=COURSE.groups[l.g]; if(G) l.era=G[3]; });

  /* ---- códigos nuevos y referencias en el texto ---- */
  const MAP={}; let k=0;
  LV.forEach(l=>{ const nc = l.boss ? 'SEC-X'+({bossA:0,bossI:1,boss:2,bossIII:3}[l.id]??9) : 'SEC-'+String(k++).padStart(2,'0');
    if(l.code) MAP[l.code]=nc; l.code=nc; });
  const num=s=>MAP['SEC-'+s]||('SEC-'+s);
  const fix = s => s.replace(/SEC-(\d+B?|XX)((?:\s*(?:,|a|·|y)\s*\d{2}B?\b)*)/g,(m,a,tail)=>{
      let out=MAP['SEC-'+a]||m.slice(0,4+a.length);
      if(tail) out+=tail.replace(/(\d{2}B?)\b/g,x=>num(x).replace('SEC-',''));
      return out; });
  const walk = (o,seen=new Set())=>{ if(!o||typeof o!=='object'||seen.has(o)) return; seen.add(o);
    for(const key of Object.keys(o)){ const v=o[key]; if(typeof v==='string'){ if(v.includes('SEC-')) o[key]=fix(v); } else if(typeof v==='object') walk(v,seen); } };
  const leave = new Set(['code']);
  LV.forEach(l=>{ Object.keys(l).forEach(key=>{ if(leave.has(key)) return; const v=l[key]; if(typeof v==='string') l[key]=fix(v); else walk(v); }); });
  [typeof HOJA2!=='undefined'&&HOJA2, typeof FICHAS!=='undefined'&&FICHAS, typeof FICHAS_G!=='undefined'&&FICHAS_G, typeof IDENT!=='undefined'&&IDENT,
   typeof T4!=='undefined'&&T4, typeof REPL!=='undefined'&&REPL, typeof CALCGUIDE!=='undefined'&&CALCGUIDE, typeof KIT!=='undefined'&&KIT].forEach(o=>o&&walk(o));

  /* ---- textos del parcial → neutros ---- */
  LV.forEach(l=>{ if(typeof l.lore==='string') l.lore=l.lore.replace(/LO QUE PIDE EL PARCIAL(\s*\/\/\s*TEMAS?[^<]*)?/g,'LO QUE SE EVALÚA EN ESTE TEMA').replace(/Todo el corte 2 del parcial termina evaluando una definida\./,'Todas las aplicaciones terminan evaluando una definida.'); });

  /* ---- enlaces [[...]] y citas [^...] ---- */
  LV.forEach(l=>{
    if(typeof l.lore==='string') l.lore=wkParse(l.lore);
    (l.ex||[]).forEach(e=>{ e.q=wkParse(e.q); e.s=e.s.map(wkParse); });
    (l.qs||[]).forEach(q=>{ if(typeof q.e==='string') q.e=wkParse(q.e); });
  });

  /* ---- videos: 3Blue1Brown + búsquedas en YouTube (en español) ---- */
  const YS = q => 'https://www.youtube.com/results?search_query='+encodeURIComponent(q);
  const B3 = [YTL('PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr'),'3Blue1Brown · La esencia del cálculo (lista, subtítulos en español)'];
  const V = {
    numeros:['números enteros recta numérica valor absoluto'], 'suma-resta':['suma y resta de números enteros ley de signos'], 'mult-div':['multiplicación y división de enteros ley de signos','división larga paso a paso'],
    jerarquia:['jerarquía de operaciones ejercicios'], primos:['descomposición en factores primos mcm y mcd'], 'fracciones-base':['suma y resta de fracciones heterogéneas','multiplicación y división de fracciones'],
    decimales:['operaciones con decimales','porcentajes ejercicios descuento'], proporciones:['regla de tres simple directa e inversa','conversión de unidades factor de conversión'],
    'potencias-base':['potenciación y radicación con números','simplificar raíces','notación científica'], 'algebra-intro':['términos semejantes reducir','ecuaciones de primer grado paso a paso','lenguaje algebraico ejercicios'],
    limites:['límites introducción ejercicios resueltos'], 'limites-calc':['límites indeterminados factorizar racionalizar'], continuidad:['continuidad de funciones a trozos ejercicios','asíntotas verticales horizontales oblicuas'],
    'derivada-def':['derivada por definición ejercicios'], implicita:['derivación implícita ejercicios','derivación logarítmica'], razones:['razones de cambio relacionadas escalera'],
    linealizacion:['aproximación lineal diferenciales','método de Newton Raphson explicación'], tvm:['teorema del valor medio','criterio primera y segunda derivada trazado de curvas'],
    optimizacion:['problemas de optimización cálculo'], lhopital:['regla de L\'Hôpital formas indeterminadas'], impropias:['integrales impropias convergencia'],
    aplmas:['área de superficie de revolución','centroide de una región integral'], sucesiones:['sucesiones convergencia cálculo'], series:['criterios de convergencia de series'],
    taylor:['series de Taylor y Maclaurin','radio de convergencia serie de potencias'], parametricas:['ecuaciones paramétricas derivada longitud'], polares:['área en coordenadas polares'],
    vectores:['producto punto y producto cruz'], 'rectas-planos':['ecuación del plano y la recta en el espacio'], funvec:['curvatura funciones vectoriales'],
    varias:['curvas de nivel funciones de dos variables'], parciales:['derivadas parciales ejercicios'], tangente:['plano tangente regla de la cadena varias variables'],
    gradiente:['gradiente y derivada direccional'], extremos:['máximos y mínimos funciones de dos variables hessiano'], lagrange:['multiplicadores de Lagrange'],
    dobles:['integrales dobles cambio de orden'], 'dobles-polar':['integrales dobles en coordenadas polares'], triples:['integrales triples límites'], cilesf:['coordenadas esféricas integrales triples'],
    jacobiano:['cambio de variables jacobiano integral doble'], campos:['campo conservativo función potencial','divergencia y rotacional'], linea:['integral de línea campo vectorial'],
    green:['teorema de Green'], superficies:['integral de superficie flujo'], stokes:['teorema de Stokes'], divergencia:['teorema de la divergencia de Gauss'],
  };
  Object.entries(V).forEach(([id,qs])=>{ VIDS[id]=(VIDS[id]||[]).concat(qs.map(q=>[YS(q),'Buscar en YouTube: '+q])); });
  ['derivada-def','derivadas','definida','taylor','implicita','limites'].forEach(id=>{ VIDS[id]=[B3].concat(VIDS[id]||[]); });
  ['gradiente','dobles','stokes','divergencia'].forEach(id=>{ VIDS[id]=(VIDS[id]||[]).concat([['https://www.khanacademy.org/math/multivariable-calculus','Khan Academy · Cálculo multivariable (videos de Grant Sanderson)']]); });

  /* ---- planes de estudio ---- */
  const range=(a,b)=>{ const i=ids.indexOf(a), j=ids.indexOf(b); return ids.slice(i,j+1); };
  COURSE.exam=null; COURSE.examBadges={}; COURSE.offTopic={};
  COURSE.plans = [
    { id:'linea', code:'PLAN-XX', icon:'network', accent:'#ff2a1f', featured:true, name:'Línea de tiempo completa', range:'Sumar y restar → Teoremas de Stokes y Gauss',
      desc:`Las ${LV.length} secciones en ${Object.keys(COURSE.groups).length} eras, en el orden en que se aprenden (no en el que se inventaron: eso está en la pantalla <b>Línea de tiempo</b>).`, sections:'all', route:true },
    { id:'calc1', code:'PLAN-I', icon:'chip', accent:'#e10600', name:'Cálculo I · Diferencial', range:'Álgebra → L’Hôpital',
      desc:'Fundamentos, límites, continuidad, derivadas y sus aplicaciones. Termina con un checkpoint mixto.', sections:range('exponentes','bossI') },
    { id:'calc2', code:'PLAN-II', icon:'target', accent:'#0057ff', name:'Cálculo II · Integral', range:'Integral indefinida → Coordenadas polares',
      desc:'La integral, todos los métodos, aplicaciones (áreas, volúmenes, longitud, superficie, trabajo), series de Taylor, paramétricas y polares.', sections:range('basica','polares') },
    { id:'calc3', code:'PLAN-III', icon:'network', accent:'#3949ab', name:'Cálculo III · Multivariable', range:'Vectores → Teorema de la divergencia',
      desc:'Vectores y espacio, derivadas parciales, gradiente, Lagrange, integrales dobles y triples, y cálculo vectorial hasta Green, Stokes y Gauss.', sections:range('vectores','bossIII') },
    { id:'express', code:'PLAN-E', icon:'target', accent:'#00a37a', name:'Ruta express · Las ideas grandes', range:'Límite → Gauss en 17 paradas',
      desc:'Solo las secciones que cuentan la historia completa: límite, derivada, integral, TFC, series, gradiente, integrales múltiples y los teoremas fundamentales.',
      sections:['limites','derivada-def','derivadas','optimizacion','basica','definida','area','series','taylor','vectores','parciales','gradiente','dobles','linea','green','stokes','divergencia'].filter(id=>by(id)) },
  ];
  COURSE.plans.splice(1,0,{ id:'base', code:'PLAN-A', icon:'chip', accent:'#9e9d24', name:'Matemática básica · desde cero', range:'Números → Ecuaciones de primer grado',
      desc:'Suma, resta, multiplicación, división, orden de operaciones, primos, fracciones, decimales, porcentajes, regla de tres, potencias y raíces, y la entrada al álgebra. Cada sección tiene ejercicios infinitos en el Simulador.', sections:range('numeros','algebra-intro') });
  COURSE.plans.splice(2,0,{ id:'pre', code:'PLAN-0', icon:'chip', accent:'#8d6e63', name:'Precálculo · Las bases', range:'Álgebra → Trigonometría',
      desc:'Álgebra, funciones, gráficas y trigonometría: todo lo que el cálculo da por sabido.', sections:range('algebra-intro','trigbase') });

  /* ---- rutas de la pantalla de inicio: "¿Qué curso estás viendo?" ----
     key · plan (id de COURSE.plans) · name/sub (lista) · title/desc (panel) · pre (ids que conviene dominar antes)
     ladder (opcional): [nivel, qué significa, fórmula TeX] — la escalera de cómo se construyen las matemáticas */
  COURSE.paths = [
    { key:'cero', plan:'linea', cmd:'desde-cero', name:'No lo sé · empezar desde cero', sub:'Sumar y restar → Cálculo vectorial',
      title:'Desde cero: comprender las matemáticas en orden',
      desc:'Si no sabes en qué curso estás, o hace tiempo que no ves matemáticas, empieza por los números y sube. Cada nivel se apoya en el anterior: si algo no se entiende, casi siempre la causa está uno o dos niveles abajo.',
      ladder:[
        ['Aritmética','— contar, operar con signos, fracciones y porcentajes.', R`\tfrac23+\tfrac34=\tfrac{17}{12}`],
        ['Álgebra','— el idioma: transformar expresiones sin cambiar su valor.', R`a^m a^n=a^{m+n}`],
        ['Funciones','— relaciones entre cantidades y cómo se ven en una gráfica.', R`y=f(x)`],
        ['Trigonometría','— ángulos, ciclos y el círculo unitario.', R`\sin^2\theta+\cos^2\theta=1`],
        ['Límites','— qué pasa cerca de un punto: la idea que sostiene todo.', R`\lim_{x\to a}f(x)`],
        ['Derivada','— tasa de cambio instantánea.', R`f'(x)=\lim_{h\to0}\tfrac{f(x+h)-f(x)}{h}`],
        ['Integral','— acumulación; el TFC la une con la derivada.', R`\int_a^b f=F(b)-F(a)`],
        ['Series','— sumar infinitos términos; funciones como polinomios.', R`e^x=\sum\tfrac{x^n}{n!}`],
        ['Varias variables','— el mismo cálculo en el espacio.', R`\oint_C\vec F\cdot d\vec r=\iint_S(\nabla\times\vec F)\cdot d\vec S`],
      ]},
    { key:'base', plan:'base', cmd:'matematica-basica', name:'Matemática básica · primaria y bachillerato', sub:'Suma y resta → Ecuaciones',
      desc:'Si te cuestan las fracciones, los signos o despejar, empieza aquí. Va desde los números y la recta numérica hasta las ecuaciones de primer grado, con ejercicios infinitos para practicar hasta que salga solo.' },
    { key:'pre', plan:'pre', cmd:'precalculo', name:'Precálculo · bachillerato', sub:'Exponentes → Trigonometría',
      desc:'Las herramientas que todos los cursos de cálculo suponen: reescribir y factorizar, resolver ecuaciones, graficar y trigonometría. Si fallas aquí, fallarás después en los pasos algebraicos, no en el cálculo.' },
    { key:'c1', plan:'calc1', cmd:'calculo-1', name:'Cálculo I · Diferencial', sub:'Límites → Derivadas → Optimización',
      desc:'Límites y continuidad, la derivada y sus reglas, y sus aplicaciones: razones relacionadas, aproximación lineal, trazado de curvas, optimización y L’Hôpital. Incluye un repaso de bases al comienzo.' },
    { key:'c2', plan:'calc2', cmd:'calculo-2', name:'Cálculo II · Integral', sub:'Integral → Series → Polares',
      desc:'La integral y el Teorema Fundamental, todos los métodos de integración, aplicaciones geométricas y físicas, integrales impropias, series de Taylor, paramétricas y polares.',
      pre:['limites','derivadas','implicita','trigbase'] },
    { key:'c3', plan:'calc3', cmd:'calculo-3', name:'Cálculo III · Multivariable', sub:'Vectores → ∇ → Green, Stokes, Gauss',
      desc:'Vectores y geometría del espacio, derivadas parciales, gradiente, optimización con restricciones, integrales dobles y triples, y cálculo vectorial hasta los tres grandes teoremas.',
      pre:['derivadas','basica','definida','parametricas','polares'] },
    { key:'exp', plan:'express', cmd:'panorama', name:'Panorama rápido', sub:'Las ideas grandes en 17 paradas',
      desc:'Para repasar antes de un examen o ver la historia completa de una vez: límite, derivada, integral, series, gradiente, integrales múltiples y los teoremas fundamentales.' },
  ];

  const c=id=>(by(id)||{}).code||'';
  COURSE.routeTitle='RUTA SUGERIDA // ~70 H EN TOTAL';
  COURSE.route = [
    ['ERA 00 · 10h', `${c('numeros')} a ${c('bossA')}`, 'Usa el Simulador de cada sección hasta lograr una racha de 10 en el nivel 3. Sin calculadora.'],
    ['ERAS 01–03 · 5h', `${c('algebra-intro')} a ${c('trigbase')}`, 'Haz primero la Evaluación de cada sección: si sacas 3/3 sigue de largo. Si fallas 2, lee la teoría.'],
    ['ERA 04 · 4h', `${c('limites')} a ${c('continuidad')}`, 'Practica el árbol de decisión de límites hasta que sea automático.'],
    ['ERAS 05–06 · 10h', `${c('derivada-def')} a ${c('bossI')}`, 'Deriva a mano todos los días. En razones relacionadas y optimización, dibuja siempre.'],
    ['ERAS 07–09 · 14h', `${c('basica')} a ${c('boss')}`, 'El núcleo del cálculo integral: usa los simuladores y la Hoja de apuntes.'],
    ['ERAS 10–11 · 8h', `${c('sucesiones')} a ${c('polares')}`, 'Memoriza las 7 series de Maclaurin de la tabla; los criterios salen con práctica.'],
    ['ERAS 12–13 · 9h', `${c('vectores')} a ${c('lagrange')}`, 'Todo es “lo mismo que en una variable, pero con vectores”. Compara siempre con la versión 1D.'],
    ['ERAS 14–15 · 10h', `${c('dobles')} a ${c('bossIII')}`, 'Dibuja la región o el sólido antes de poner límites. Cierra con la tabla “todos son el mismo teorema”.'],
  ];
})();
