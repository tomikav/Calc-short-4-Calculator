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

  /* ============ PLANES DE ESTUDIO ============
     Cada plan es un recorrido por algunas secciones (en el orden de "sections").
     Para crear un plan nuevo copia un bloque y cambia la lista de ids.
     sections:'all' usa todas las secciones. exam / route son opcionales. */
  plans: [
    { id:'base', code:'PLAN-00', icon:'chip', accent:'#ffd400', name:'Fundamentos', range:'Exponentes → Derivadas',
      desc:'Álgebra, gráficas, trigonometría y derivadas: todo lo que se asume que ya sabes.',
      sections:['exponentes','notables','ecuaciones','graficar','regiones','trigbase','derivadas'] },
    { id:'parcial2', code:'PLAN-02', icon:'target', accent:'#ff2a1f', featured:true, name:'Parcial · Segundo corte', range:'Integral definida → Longitud de la curva',
      desc:'Los 7 temas del parcial: integral definida, áreas, discos, arandelas, secciones transversales y longitud. Incluye cómo graficar regiones.',
      sections:['definida','graficar','regiones','area','discos','secciones','longitud','boss'], exam:true,
      route:[
        ['BLOQUE 1 · 1h','SEC-08','Tema 1 · Integral definida y TFC: la herramienta para calcular todo lo demás.'],
        ['BLOQUE 2 · 1.5h','SEC-03 y 04','Graficar curvas y regiones: sin dibujo no hay planteo.'],
        ['BLOQUE 3 · 1.5h','SEC-14','Temas 2 y 3 · Área bajo la curva y entre curvas.'],
        ['BLOQUE 4 · 2.5h','SEC-15 y 15B','Temas 4, 5 y 6 · Discos, arandelas y secciones transversales: lo que más pesa.'],
        ['BLOQUE 5 · 1h','SEC-17','Tema 7 · Longitud de curva: busca el cuadrado perfecto.'],
        ['BLOQUE 6 · 1h','SEC-XX','Simulacro mixto con todos los temas.'],
      ]},
    { id:'completo', code:'PLAN-XX', icon:'network', accent:'#2f7bff', name:'Plan completo', range:'Álgebra básica → Evaluación final',
      desc:'Las 20 secciones en 7 fases, desde cero hasta el simulacro de parcial.',
      sections:'all', exam:true, route:true },
  ],

  /* Los ejemplos cuyo título cumple este patrón se marcan como "ejercicio del taller" */
  realPattern: /Taller/,
};
