/* ============ GUÍA DE LA CALCULADORA CASIO fx-570ES PLUS (2nd edition) ============
   Media hoja para el parcial: configuración, comprobar integrales, cortes, tablas para graficar y errores.
   [k] = tecla. Menús según el manual oficial de Casio. */
const CALCGUIDE={
 model:'Casio fx-570ES PLUS (2nd edition)',
 intro:'No grafica, pero sirve para COMPROBAR: si el decimal de tu respuesta exacta coincide con el de la calculadora, el ejercicio está bien.',
 items:[
  ['Antes de empezar (1 vez)',[
    R`[SHIFT] [MODE] (SETUP) → 1 MthIO: fracciones y raíces como en el cuaderno.`,
    R`[SHIFT] [MODE] → 4 Rad: arriba debe salir una R. Obligatorio si hay sen, cos o tan.`,
    R`[MODE] → 1 COMP: el modo normal. La integral solo funciona aquí.`,
    R`La variable x: [ALPHA] [ ) ] (X). π: [SHIFT] [×10ˣ]. e: [ALPHA] [×10ˣ].`]],
  ['Comprobar una integral o un volumen',[
    R`Tecla [∫□]: escribe f(X), baja con las flechas a los límites, [=]. Tarda unos segundos.`,
    R`Volumen: [π] × ∫ de R². Ej. 5.2 #1: π × ∫₀² (X²+1)² dX = 43.14.`,
    R`Luego escribe TU respuesta: 206 [SHIFT ×10ˣ] ÷ 15 = 43.14 ✓. Si coinciden, está bien.`,
    R`[S⇔D] cambia entre fracción y decimal.`]],
  ['Evaluar F(b) − F(a) sin errores de signo',[
    R`Escribe F(X), presiona [CALC], pon X = b, [=]. Repite [CALC] con X = a.`,
    R`O directo con paréntesis: (F(2)) − (F(−1)). El signo menos de la resta es [−]; el de un número negativo es [(−)].`]],
  ['Puntos de corte',[
    R`[MODE] → 5 EQN → 3 (aX²+bX+c=0). Ej. x² − x − 2 = 0: a = 1, b = −1, c = −2 → X1 = 2, X2 = −1.`,
    R`Si no es cuadrática: escribe la ecuación con [ALPHA] [CALC] (=), luego [SHIFT] [CALC] (SOLVE) y un valor cercano.`]],
  ['Tabla de valores para graficar',[
    R`[MODE] → 7 TABLE. f(X) = escribe la curva, [=]. Si pide g(X), [=] para dejarlo vacío.`,
    R`Start? (x inicial), End? (x final), Step? (paso). Ej. x² − 4x + 3: Start 0, End 4, Step 1.`,
    R`Copia los puntos y únelos. En TABLE no se puede usar ∫ ni d/dx. Para volver: [MODE] → 1.`]],
  ['Derivada y longitud',[
    R`Derivada en un punto: [SHIFT] [∫□] (d/dx), escribe f(X) y el valor de x. Sirve para comprobar tu y′.`,
    R`Longitud: ∫ √(1 + (tu y′)²) dX escribiendo y′ a mano (d/dx no se puede meter dentro de ∫).`]],
  ['Errores típicos',[
    R`Resultado raro con sen o cos → estabas en Deg: cambia a Rad.`,
    R`Fracciones: usa la plantilla [▭/▭]. Si escribes 1÷2X, la calculadora lo toma como 1/(2X).`,
    R`Math ERROR o "tarda mucho" → parte el intervalo en dos (por ejemplo, donde la curva cruza el eje).`,
    R`La calculadora NO da el área si la curva baja del eje: integra cada parte y suma los valores absolutos.`,
    R`¿Reconocer kπ? Divide el resultado entre π: 43.14 ÷ π = 13.733 = 206/15 ✓.`]],
 ],
};
