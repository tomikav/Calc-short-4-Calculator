/* ============ DATOS GENERALES DEL CURSO ============
   Aquí va todo lo propio de la materia que no es una sección:
   nombre, fases del mapa, tabla del parcial y ruta de estudio. */
const COURSE = {
  title: 'Cálculo Integral',
  tag: 'CÁLCULO INTEGRAL // LÍNEA DE ESTUDIO ESCALONADA',
  intro: n => `${n} secciones en 7 fases. Empiezas en álgebra básica y escalas hasta volúmenes y longitud de curva. Cada sección dice qué <b>necesitas antes</b> y dónde lo <b>vas a usar</b>. Dentro: <b>Teoría</b> con cada procedimiento explicado, <b>Ejemplos</b> paso a paso, <b>Simulador</b> y <b>Evaluación</b>.`,

  /* Fases del mapa: clave usada en el campo g de cada sección */
  groups: {
    f1:['FASE 1','FUNDAMENTOS ALGEBRAICOS','Reescribir, expandir, factorizar y resolver. Sin esto todo lo demás falla.'],
    f2:['FASE 2','GRAFICAR','Leer y dibujar curvas y regiones. Obligatorio para área y volumen.'],
    f3:['FASE 3','TRIGONOMETRÍA Y DERIVADAS','Las herramientas que usan todos los métodos.'],
    f4:['FASE 4','LA INTEGRAL','Indefinida, sustitución, definida y Teorema Fundamental.'],
    f5:['FASE 5','MÉTODOS DE INTEGRACIÓN','Corte 1 del parcial: Taller 2.'],
    f6:['FASE 6','APLICACIONES','Corte 2 del parcial: Taller 4.'],
    f7:['FASE 7','EVALUACIÓN','Simulacro mixto.'],
  },

  /* Tabla "temas del parcial" (opcional). Filas: [etiqueta, tema, dónde estudiarlo] */
  examTitle: 'TEMAS DEL PARCIAL // SEGUNDO CORTE',
  exam: [
    ['TEMA 1','Integral definida y TFC','SEC-08'],
    ['TEMAS 2 Y 3','Área bajo la curva y entre curvas','SEC-14 (dibujar: SEC-03 y 04)'],
    ['TEMAS 4 Y 5','Volúmenes por discos y arandelas','SEC-15'],
    ['TEMA 6','Volúmenes por secciones transversales','SEC-15B'],
    ['TEMA 7','Longitud de una curva plana','SEC-17'],
    ['APOYO','Métodos de integración','SEC-07 a 13: los necesitas para resolver las integrales que salgan'],
  ],
  /* Etiqueta que aparece en el mapa sobre cada sección que entra al parcial */
  examBadges: { definida:'TEMA 1', area:'TEMAS 2 Y 3', discos:'TEMAS 4 Y 5', secciones:'TEMA 6', longitud:'TEMA 7' },
  examBadgeLabel: 'PARCIAL',
  offTopic: { cascarones:'FUERA DEL TEMARIO' },

  /* Ruta de estudio (opcional). Filas: [bloque, secciones, consejo] */
  routeTitle: 'RUTA DE ESTUDIO // ~15 H',
  route: [
    ['FASE 1 · 2h','SEC-00 a 02','Haz primero la Evaluación. Si fallas 2 o más, lee la Teoría y repite.'],
    ['FASE 2 · 1.5h','SEC-03 a 04','Usa los simuladores y copia cada gráfica en tu cuaderno.'],
    ['FASE 3 · 1h','SEC-05 a 06','Memoriza las 6 identidades y la tabla de derivadas.'],
    ['FASE 4 · 1.5h','SEC-07 a 08','Practica evaluar [F]ₐᵇ con paréntesis.'],
    ['FASE 5 · 4h','SEC-09 a 13','Ejemplos a mano antes de revelar los pasos. Descansa 10 min cada hora.'],
    ['FASE 6 · 4h','SEC-14 a 17','Dibuja SIEMPRE la región antes de plantear. Haz los ejercicios del taller marcados en rojo.'],
    ['FASE 7 · 1h','SEC-XX','Repite hasta pasar sin perder integridad.'],
    ['SI NO ALCANZA','Prioridad','SEC-04 → 08 → 14 → 15 → 15B → 17 → métodos (07, 09, 12, 13). Cascarones (16) solo si sobra tiempo.'],
  ],

  /* Los ejemplos cuyo título cumple este patrón se marcan como "ejercicio del taller" */
  realPattern: /Taller/,
};

/* Rutas seleccionables: completa, enfocada al parcial y repaso intensivo. */
COURSE.studyPlans = [
  {id:'complete', labelKey:'planComplete', duration:'~15 h', title:'RUTA COMPLETA DESDE CERO', route:COURSE.route},
  {id:'exam', labelKey:'planExam', duration:'~8 h', title:'PREPARACIÓN DEL SEGUNDO CORTE', route:[
    ['BASE Y TFC · 1.5 h','SEC-03 a 08','Repasa gráficas, derivadas e integral definida: son los cimientos para plantear aplicaciones.'],
    ['MÉTODOS · 2.5 h','SEC-09 a 13','Practica partes, integrales trigonométricas, sustitución trigonométrica y fracciones parciales.'],
    ['ÁREAS Y VOLÚMENES · 2 h','SEC-14 a 15B','Dibuja cada región, calcula cortes y practica áreas, discos/arandelas y secciones transversales.'],
    ['LONGITUD · 1 h','SEC-17','Deriva, simplifica la raíz y evalúa la integral de longitud.'],
    ['SIMULACRO · 1 h','SEC-XX','Resuelve la evaluación mixta y revisa cada procedimiento que te cueste.']
  ]},
  {id:'quick', labelKey:'planQuick', duration:'~5 h', title:'REPASO INTENSIVO DEL PARCIAL', route:[
    ['TFC · 30 min','SEC-08','Evalúa primitivas con cuidado; practica signos, paréntesis y cambio de límites.'],
    ['MÉTODOS · 50 min','SEC-07, 09, 12, 13','Reconoce sustitución, partes, sustitución trigonométrica y fracciones parciales.'],
    ['ÁREA · 50 min','SEC-14','Practica intersecciones, curvas de arriba/abajo y partición cuando cambia el orden.'],
    ['VOLÚMENES · 70 min','SEC-15, 15B','Elige el método, define radios o áreas de sección y revisa unidades cúbicas.'],
    ['LONGITUD · 45 min','SEC-17','Enfócate en derivar y reconocer cuadrados perfectos bajo la raíz.'],
    ['PRUEBA FINAL · 55 min','SEC-XX','Haz el simulacro sin apuntes; después usa los desarrollos para corregir.']
  ]}
];
