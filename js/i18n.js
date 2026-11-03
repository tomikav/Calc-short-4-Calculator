/* ============ IDIOMAS / LANGUAGES ============
   Para agregar un idioma: copia el bloque "es", cambia la clave (por ejemplo "pt")
   y traduce los textos. Luego agrega la opción en LANGS.
   To add a language: copy the "es" block, rename the key (e.g. "pt") and translate.
   Then add it to LANGS. */
const LANGS = { es:'Español', en:'English' };

const I18N = {
 es:{
  free:'ACCESO LIBRE', sheet:'HOJA DE APUNTES', tv:'MODO TV', full:'PANTALLA COMPLETA',
  fullBlocked:'Tu navegador bloqueó la pantalla completa: pulsa F11',
  ranks:[[0,'NIVEL 0 // RECLUTA'],[120,'NIVEL 1 // OPERADOR'],[300,'NIVEL 2 // ANALISTA'],[520,'NIVEL 3 // INGENIERO'],[760,'NIVEL 4 // ESPECIALISTA'],[1000,'NIVEL 5 // EJECUTIVO']],
  openSheet:'VER HOJA DE APUNTES', progress:'PROGRESO', progressHint:'Para saltar a cualquier sección activa ACCESO LIBRE.',
  requires:'REQUIERE', none:'ninguno', startPoint:'nada: punto de partida', usedIn:'SE USA EN',
  denied:'ACCESO DENEGADO // completa la sección anterior o activa ACCESO LIBRE',
  back:'< MAPA', map:'MAPA',
  tabs:{lore:'Teoría', ex:'Ejemplos', lab:'Simulador', vid:'Videos', battle:'Evaluación'},
  continueTo:'CONTINUAR:',
  videosTitle:'Videos de apoyo', videosHint:'Se abren en YouTube en otra pestaña. Míralos después de leer la teoría, no antes.',
  videosTab:'Se abren en YouTube en otra pestaña. Si el video usa otra notación, revisa la teoría de esta sección.',
  exHint:'Intenta cada ejercicio en papel antes de revelar los pasos. Debajo de cada paso aparece la ley o regla que se usó: púlsala para ir al punto exacto de la teoría y luego vuelve con el botón rojo.',
  exReal:'EJERCICIO DEL TALLER', exSolved:'EJEMPLO RESUELTO', step:'PASO', nextStep:'SIGUIENTE PASO', showAll:'VER TODO', hide:'OCULTAR',
  stages:{ENU:'ENUNCIADO',DIB:'DIBUJO',COR:'CORTES',PLA:'PLANTEO',CAL:'CÁLCULO',RES:'RESPUESTA'},
  uses:'USA', theory:'TEORÍA', review:'REPASA', toTheory:'→ TEORÍA', youtube:'YOUTUBE →', backToEx:'< VOLVER AL EJERCICIO',
  target:'OBJETIVO', firewall:'FIREWALL DEL OBJETIVO', integrity:'INTEGRIDAD', time:'TIEMPO', question:'OBJETIVO',
  hint:'SOLICITAR PISTA [−5 XP]',
  okMsgs:['¡Correcto!','¡Eso es!','¡Exacto!','¡Muy bien!','¡Lo tienes!','¡Perfecto!','¡Bien hecho!','¡Así se hace!'],
  calc:{title:'CALCULADORA', mCalc:'CALC', mInt:'∫ DEFINIDA', mDer:'f′(a)', ph:'ej: 2pi*(27/2 - 81/4)', hist:'HISTORIAL', clear:'BORRAR', exact:'FORMA EXACTA ≈', err:'Expresión incompleta o inválida', tip:'Escribe con el teclado o usa los botones. 2x, 3π y 2sin(x) multiplican solos. Enter = calcular. Toca el historial para reutilizar el resultado (ANS). ∫ usa Simpson: sirve para verificar tu resultado, no para reemplazar el procedimiento.'},
  streak:'RACHA', procedure:'PROCEDIMIENTO PASO A PASO', figCap:'GRÁFICA // región, rebanada y eje', stepOf:'PASO', hard:'DIFÍCIL · +20 XP', wrong:'Esa no era — aquí está por qué (−1 vida)',
  seeResult:'VER RESULTADO', nextQ:'SIGUIENTE OBJETIVO >', finalQ:'EJECUTAR GOLPE FINAL',
  timeUp:'TIEMPO AGOTADO.', noLives:'INTEGRIDAD AGOTADA.',
  report:'INFORME DE MISIÓN', win:'OBJETIVO NEUTRALIZADO', lose:'MISIÓN FALLIDA', bonus:'bono',
  winHint:'Completa sin perder integridad para 3/3.', perfect:'Rendimiento perfecto.',
  loseHint:'Revisa Teoría y Ejemplos y vuelve a intentarlo. El orden de las preguntas y opciones cambia.',
  retry:'REINTENTAR', nextSection:'SIGUIENTE SECCIÓN', bossDone:'EVALUACIÓN SUPERADA // listo para el parcial',
  sheetBox:'PARA TU HOJA DE APUNTES', sheetBoxHint:'marca cada línea cuando la escribas · orden completo en HOJA DE APUNTES',
  sheetTitle:'Hoja de apuntes', sheetCode:'RESUMEN POR PRIORIDAD // CON EJEMPLO EN CADA LÍNEA',
  sheetIntro:(d,n)=>`Escríbela en este orden: primero lo que harás <b>antes de cada ejercicio</b>, luego prioridad 1 → 2 → 3. Llevas <b>${d}/${n}</b> líneas.`,
  printVersion:'VERSIÓN PARA IMPRIMIR', print:'IMPRIMIR', back2:'< VOLVER',
  printHint:'Si el botón no funciona, usa Ctrl + P (Cmd + P en Mac).', printBlocked:'Este visor no deja imprimir: usa Ctrl + P',
  prio:'PRIORIDAD', before:'ANTES DE EMPEZAR', eg:'EJ.',
  contentFallback:'',
  board:'PIZARRA', pen:'LÁPIZ', chalk:'TIZA', eraser:'BORRADOR', size:'GROSOR', bgToggle:'FONDO', undo:'DESHACER', clearBoard:'LIMPIAR',
  saveBlocked:'Este visor no deja descargar: usa la versión local', save:'GUARDAR',
  aiTitle:'AYUDA CON IA (OPCIONAL)', aiConfig:'CONFIGURAR', aiCtxPh:'¿Qué ejercicio estás resolviendo? (ej. Taller 4 #18, volumen alrededor del eje x)',
  aiCheck:'REVISAR MI PROCEDIMIENTO',
  aiCfgHint:'La revisión usa tu propia clave de una API compatible con OpenAI (por defecto OpenRouter, que acepta muchos modelos con visión). La clave se guarda solo en este navegador. Sin clave, la pizarra funciona igual para escribir.',
  aiBase:'URL de la API', aiKey:'Clave de API', aiModel:'Modelo (con visión)', aiForget:'BORRAR CLAVE', aiSaved:'Configuración guardada.',
  aiNeedKey:'Configura tu clave para usar la revisión.', aiEmpty:'Escribe algo primero.', aiWorking:'Revisando…',
  aiError:'No se pudo revisar. Verifica la clave, el modelo y tu conexión.', aiOk:'VAS BIEN', aiErr:'HAY ERRORES', aiInc:'INCOMPLETO', aiUnread:'NO SE LEE', aiFix:'Corrección',
  plans:'PLANES', plansTitle:'SELECCIONA UN PLAN DE ESTUDIO', plansHint:'Cada plan es un recorrido por temas. Tu progreso se comparte entre planes.',
  sectionsN:n=>`${n} secciones`, continuePlan:'CONTINUAR', active:'ACTIVO', enter:'ENTRAR', skip:'SALTAR INTRO', mp:{start:'EMPEZAR',cont:'CONTINUAR',change:'CAMBIAR PLAN',secs:'SECCIONES',done:'COMPLETADAS',stars:'ESTRELLAS',route:'RUTA DE ESTUDIO',map:'MAPA DE SECCIONES',locked:'BLOQUEADO',cleared:'COMPLETADO',next:'SIGUIENTE',open:'DISPONIBLE'}, featured:'PRIORIDAD MÁXIMA', introSub:'SISTEMA DE ENTRENAMIENTO // CÁLCULO INTEGRAL', progress:'PROGRESO', topics:'TEMAS', more:n=>`+${n} más`, ticker:['NODO CALC-INT EN LÍNEA','SIMULADORES ACTIVOS','PROCEDIMIENTOS VERIFICADOS','CALCULADORA DISPONIBLE','PIZARRA LISTA','PROGRESO SINCRONIZADO'],
  boot:['INICIANDO PROTOCOLO DE ENTRENAMIENTO','VERIFICANDO MÓDULOS DE TEORÍA','CARGANDO SIMULADORES','SINCRONIZANDO PROGRESO','ACCESO CONCEDIDO'],
 },
 en:{
  free:'FREE ACCESS', sheet:'CHEAT SHEET', tv:'TV MODE', full:'FULL SCREEN',
  fullBlocked:'Your browser blocked full screen: press F11',
  ranks:[[0,'LEVEL 0 // RECRUIT'],[120,'LEVEL 1 // OPERATOR'],[300,'LEVEL 2 // ANALYST'],[520,'LEVEL 3 // ENGINEER'],[760,'LEVEL 4 // SPECIALIST'],[1000,'LEVEL 5 // EXECUTIVE']],
  openSheet:'OPEN CHEAT SHEET', progress:'PROGRESS', progressHint:'Turn on FREE ACCESS to jump to any section.',
  requires:'REQUIRES', none:'none', startPoint:'nothing: starting point', usedIn:'USED IN',
  denied:'ACCESS DENIED // finish the previous section or turn on FREE ACCESS',
  back:'< MAP', map:'MAP',
  tabs:{lore:'Theory', ex:'Examples', lab:'Simulator', vid:'Videos', battle:'Quiz'},
  continueTo:'CONTINUE:',
  videosTitle:'Support videos', videosHint:'They open on YouTube in a new tab. Watch them after reading the theory.',
  videosTab:'They open on YouTube in a new tab. If a video uses different notation, check this section’s theory.',
  exHint:'Try each exercise on paper before revealing the steps. Under each step you will see the rule that was used: click it to jump to that exact part of the theory, then come back with the red button.',
  exReal:'WORKSHOP EXERCISE', exSolved:'WORKED EXAMPLE', step:'STEP', nextStep:'NEXT STEP', showAll:'SHOW ALL', hide:'HIDE',
  stages:{ENU:'STATEMENT',DIB:'SKETCH',COR:'INTERSECTIONS',PLA:'SETUP',CAL:'CALCULATION',RES:'ANSWER'},
  uses:'USES', theory:'THEORY', review:'REVIEW', toTheory:'→ THEORY', youtube:'YOUTUBE →', backToEx:'< BACK TO EXERCISE',
  target:'TARGET', firewall:'TARGET FIREWALL', integrity:'INTEGRITY', time:'TIME', question:'TARGET',
  hint:'REQUEST HINT [−5 XP]',
  okMsgs:['Correct!','That’s it!','Exactly!','Well done!','You got it!','Perfect!','Nice!','Great job!'],
  calc:{title:'CALCULATOR', mCalc:'CALC', mInt:'∫ DEFINITE', mDer:'f′(a)', ph:'e.g. 2pi*(27/2 - 81/4)', hist:'HISTORY', clear:'CLEAR', exact:'EXACT FORM ≈', err:'Incomplete or invalid expression', tip:'Type or use the keys. 2x, 3π and 2sin(x) multiply implicitly. Enter = compute. Tap history to reuse a result (ANS). ∫ uses Simpson: use it to check your result, not to replace the procedure.'},
  streak:'STREAK', procedure:'STEP-BY-STEP PROCEDURE', figCap:'GRAPH // region, slice and axis', stepOf:'STEP', hard:'HARD · +20 XP', wrong:'Not that one — here is why (−1 life)',
  seeResult:'SEE RESULT', nextQ:'NEXT TARGET >', finalQ:'FINAL STRIKE',
  timeUp:'TIME IS UP.', noLives:'NO INTEGRITY LEFT.',
  report:'MISSION REPORT', win:'TARGET NEUTRALIZED', lose:'MISSION FAILED', bonus:'bonus',
  winHint:'Finish without losing integrity to get 3/3.', perfect:'Perfect run.',
  loseHint:'Review the Theory and Examples and try again. Questions and options are shuffled.',
  retry:'RETRY', nextSection:'NEXT SECTION', bossDone:'QUIZ PASSED // ready for the exam',
  sheetBox:'FOR YOUR CHEAT SHEET', sheetBoxHint:'tick each line when you write it · full order in CHEAT SHEET',
  sheetTitle:'Cheat sheet', sheetCode:'SUMMARY BY PRIORITY // WITH AN EXAMPLE ON EVERY LINE',
  sheetIntro:(d,n)=>`Write it in this order: first what you do <b>before every exercise</b>, then priority 1 → 2 → 3. Done: <b>${d}/${n}</b> lines.`,
  printVersion:'PRINT VERSION', print:'PRINT', back2:'< BACK',
  printHint:'If the button does nothing, use Ctrl + P (Cmd + P on Mac).', printBlocked:'Printing is blocked here: use Ctrl + P',
  prio:'PRIORITY', before:'BEFORE YOU START', eg:'E.G.',
  contentFallback:'The course content is only in Spanish for now. The interface is in English. Translations are welcome — see CONTRIBUTING.md.',
  board:'WHITEBOARD', pen:'PENCIL', chalk:'CHALK', eraser:'ERASER', size:'SIZE', bgToggle:'BACKGROUND', undo:'UNDO', clearBoard:'CLEAR',
  saveBlocked:'Downloads are blocked here: use the local version', save:'SAVE',
  aiTitle:'AI HELP (OPTIONAL)', aiConfig:'SETTINGS', aiCtxPh:'Which exercise are you solving? (e.g. volume around the x-axis)',
  aiCheck:'CHECK MY WORK',
  aiCfgHint:'The review uses your own key for an OpenAI-compatible API (OpenRouter by default, which offers many vision models). The key is stored only in this browser. Without a key, the whiteboard still works for writing.',
  aiBase:'API URL', aiKey:'API key', aiModel:'Model (with vision)', aiForget:'DELETE KEY', aiSaved:'Settings saved.',
  aiNeedKey:'Set up your key to use the review.', aiEmpty:'Write something first.', aiWorking:'Checking…',
  aiError:'Could not review. Check the key, the model and your connection.', aiOk:'ON TRACK', aiErr:'MISTAKES FOUND', aiInc:'INCOMPLETE', aiUnread:'UNREADABLE', aiFix:'Fix',
  plans:'PLANS', plansTitle:'SELECT A STUDY PLAN', plansHint:'Each plan is a path through a set of topics. Your progress is shared across plans.',
  sectionsN:n=>`${n} sections`, continuePlan:'CONTINUE', active:'ACTIVE', enter:'ENTER', skip:'SKIP INTRO', mp:{start:'START',cont:'CONTINUE',change:'CHANGE PLAN',secs:'SECTIONS',done:'CLEARED',stars:'STARS',route:'STUDY ROUTE',map:'SECTION MAP',locked:'LOCKED',cleared:'CLEARED',next:'NEXT',open:'AVAILABLE'}, featured:'TOP PRIORITY', introSub:'TRAINING SYSTEM // INTEGRAL CALCULUS', progress:'PROGRESS', topics:'TOPICS', more:n=>`+${n} more`, ticker:['NODE CALC-INT ONLINE','SIMULATORS ACTIVE','PROCEDURES VERIFIED','CALCULATOR AVAILABLE','WHITEBOARD READY','PROGRESS SYNCED'],
  boot:['STARTING TRAINING PROTOCOL','CHECKING THEORY MODULES','LOADING SIMULATORS','SYNCING PROGRESS','ACCESS GRANTED'],
 },
};

let LANG = (store('calc-lang')) || ((navigator.language||'es').slice(0,2) in LANGS ? (navigator.language||'es').slice(0,2) : 'es');
if(!LANGS[LANG]) LANG='es';
document.documentElement.lang = LANG;
function t(k){ const v=(I18N[LANG]&&I18N[LANG][k]); return v!==undefined ? v : I18N.es[k]; }
function setLang(l){ store('calc-lang', l); location.reload(); }
function applyStaticI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=t(el.dataset.i18n); });
  const sel=document.getElementById('lang');
  if(sel){ sel.innerHTML=Object.entries(LANGS).map(([k,v])=>`<option value="${k}" ${k===LANG?'selected':''}>${v}</option>`).join(''); }
}
