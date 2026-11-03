/* ============ PROCEDIMIENTOS COMPLETOS DE LA EVALUACIÓN FINAL ============
   Se separan del banco de preguntas para que cada respuesta incorrecta o
   correcta pueda mostrar el mismo desarrollo paso a paso. */
const FINAL_BOSS = LV.find(level => level.id === 'boss');
if (!FINAL_BOSS) throw new Error('No se encontró la evaluación final (boss).');

FINAL_BOSS.sub = 'Mixto · 12 objetivos · 18 min · 4 de integridad';
FINAL_BOSS.time = 18 * 60;

const FINAL_STEPS = [
  [
    'Elijo <code>u = x² + 4</code> porque su derivada <code>du = 2x dx</code> contiene el numerador, salvo por el factor 2.',
    'Despejo <code>x dx = du/2</code>. La integral queda <code>(1/2) ∫ du/u</code>.',
    'Integro: <code>(1/2) ln|u| + C</code>. Regreso a x: <code>(1/2) ln(x² + 4) + C</code>. El valor absoluto se omite porque <code>x² + 4 &gt; 0</code> para todo real x.'
  ],
  [
    'La raíz tiene la forma <code>√(x² + a²)</code>, con <code>a = 3</code>. Uso <code>x = 3 tan θ</code>, así <code>dx = 3 sec²θ dθ</code>.',
    'Por <code>1 + tan²θ = sec²θ</code>, <code>√(x² + 9) = 3 sec θ</code>. Al sustituir, la integral se reduce a <code>(1/9) ∫ cot θ csc θ dθ</code>.',
    'Como <code>d(csc θ)/dθ = −csc θ cot θ</code>, obtengo <code>−(1/9)csc θ + C</code>. Del triángulo, <code>csc θ = √(x² + 9)/x</code>; resultado: <code>−√(x² + 9)/(9x) + C</code>.'
  ],
  [
    'Tomo <code>u = x</code> y <code>dv = cos(3x) dx</code>. Entonces <code>du = dx</code> y <code>v = (1/3) sin(3x)</code>.',
    'Aplico <code>∫u dv = uv − ∫v du</code>: queda <code>(x/3)sin(3x) − (1/3)∫sin(3x) dx</code>.',
    'La integral restante es <code>∫sin(3x)dx = −(1/3)cos(3x)</code>. Por tanto, la respuesta es <code>(x/3)sin(3x) + (1/9)cos(3x) + C</code>.'
  ],
  [
    'Factorizo el denominador: <code>x² − x = x(x − 1)</code>. Planteo <code>(x + 1)/(x(x − 1)) = A/x + B/(x − 1)</code>.',
    'Multiplico por <code>x(x − 1)</code>: <code>x + 1 = A(x − 1) + Bx = (A + B)x − A</code>. Igualo coeficientes: <code>−A = 1</code>, luego <code>A = −1</code>; y <code>A + B = 1</code>, luego <code>B = 2</code>.',
    'Integro término a término: <code>∫(−1/x + 2/(x − 1))dx = −ln|x| + 2ln|x − 1| + C</code>.'
  ],
  [
    'La potencia de seno es impar. Separo un factor: <code>sin⁵x = sin⁴x · sin x</code>, y reescribo <code>sin⁴x = (1 − cos²x)²</code>.',
    'La integral queda <code>∫(1 − cos²x)² cos²x sin x dx</code>. Tomo <code>u = cos x</code>, por lo que <code>du = −sin x dx</code>.',
    'Con la sustitución se obtiene <code>−∫(1 − u²)²u² du = −∫(u² − 2u⁴ + u⁶)du</code>. Integro: <code>−u³/3 + 2u⁵/5 − u⁷/7 + C</code>. Regreso a x: <code>−cos³x/3 + 2cos⁵x/5 − cos⁷x/7 + C</code>.'
  ],
  [
    'Uso partes con <code>u = x</code>, <code>dv = cos x dx</code>; entonces <code>du = dx</code> y <code>v = sin x</code>.',
    'La primitiva es <code>x sin x − ∫sin x dx = x sin x + cos x</code>.',
    'Evalúo arriba: en <code>π/2</code> da <code>π/2</code>. Evalúo abajo: en <code>0</code> da <code>1</code>. Resto <code>F(π/2) − F(0) = π/2 − 1</code>.'
  ],
  [
    'Hallo intersecciones: <code>x³ = x ⇒ x(x − 1)(x + 1) = 0</code>, así que <code>x = −1, 0, 1</code>. La diferencia de curvas cambia de signo en esos puntos.',
    'En <code>[−1,0]</code> está arriba <code>x³</code>; en <code>[0,1]</code> está arriba <code>x</code>. Por simetría, el área total es <code>2∫₀¹(x − x³)dx</code>.',
    'Integro: <code>2[x²/2 − x⁴/4]₀¹ = 2(1/2 − 1/4) = 1/2</code>. El área es positiva: <code>1/2 u²</code>.'
  ],
  [
    'El eje de giro es vertical y las rebanadas verticales generan cascarones. La fórmula es <code>V = 2π∫(radio)(altura) dx</code>.',
    'Radio: distancia al eje y, <code>r = x</code>. Altura: curva menos eje x, <code>h = √x</code>. Límites: <code>0 ≤ x ≤ 4</code>.',
    'Planteo <code>V = 2π∫₀⁴ x√x dx = 2π∫₀⁴ x^(3/2) dx</code>. Integro: <code>2π(2/5)[x^(5/2)]₀⁴ = (4π/5)·32 = 128π/5</code> unidades cúbicas.'
  ],
  [
    'Intersecciones: <code>x² = 4</code>, por tanto los límites son <code>−2</code> y <code>2</code>. El eje <code>y = −1</code> está debajo de toda la región.',
    'Radio exterior hasta <code>y = 4</code>: <code>R = 4 − (−1) = 5</code>. Radio interior hasta <code>y = x²</code>: <code>r = x² − (−1) = x² + 1</code>.',
    'Arandelas: <code>V = π∫₋₂²(R² − r²)dx = π∫₋₂²[25 − (x² + 1)²]dx</code>. Al expandir el integrando: <code>24 − 2x² − x⁴</code>. El planteamiento pedido es la integral anterior.'
  ],
  [
    'Derivo: <code>y′ = x − 1/(4x)</code>. Entonces <code>1 + (y′)² = 1 + x² − 1/2 + 1/(16x²) = x² + 1/2 + 1/(16x²)</code>.',
    'Reconozco un cuadrado: <code>x² + 1/2 + 1/(16x²) = (x + 1/(4x))²</code>. Como <code>1 ≤ x ≤ 2</code>, la raíz positiva es <code>x + 1/(4x)</code>.',
    'Longitud: <code>L = ∫₁²[x + 1/(4x)]dx = [x²/2 + (1/4)ln x]₁²</code>. Evalúo: <code>(2 + ln 2/4) − 1/2 = 3/2 + ln 2/4</code> unidades.'
  ]
];

FINAL_STEPS.forEach((steps, index) => { FINAL_BOSS.qs[index].p = steps; });

FINAL_BOSS.qs.push(
  {
    q: 'RETO DIFÍCIL · Calcula ∫ x²e^(2x) dx',
    o: [
      '<code>e^(2x)(x²/2 − x/2 + 1/4) + C</code>',
      '<code>e^(2x)(x²/2 + x/2 + 1/4) + C</code>',
      '<code>e^(2x)(x² − x + 1) + C</code>',
      '<code>x³e^(2x)/3 + C</code>'
    ],
    e: 'Reto de partes dos veces: deriva el polinomio hasta que desaparezca.',
    h: 'En cada integración por partes, integra e^(2x) como e^(2x)/2.',
    p: [
      'Primera vez: elijo <code>u = x²</code> y <code>dv = e^(2x)dx</code>. Entonces <code>du = 2x dx</code> y <code>v = e^(2x)/2</code>. Queda <code>I = x²e^(2x)/2 − ∫xe^(2x)dx</code>.',
      'Segunda vez en la integral restante: <code>u = x</code>, <code>dv = e^(2x)dx</code>, así <code>du = dx</code>, <code>v = e^(2x)/2</code>. Entonces <code>∫xe^(2x)dx = xe^(2x)/2 − e^(2x)/4</code>.',
      'Sustituyo cuidando el signo menos: <code>I = x²e^(2x)/2 − xe^(2x)/2 + e^(2x)/4 + C = e^(2x)(x²/2 − x/2 + 1/4) + C</code>.',
      'Comprobación: al derivar con regla del producto, los términos extra se cancelan y queda <code>x²e^(2x)</code>.'
    ]
  },
  {
    q: 'RETO DIFÍCIL · Área entre y = 4 − x² y y = x² − 2',
    o: ['<code>8√3 u²</code>', '<code>4√3 u²</code>', '<code>12√3 u²</code>', '<code>6√3 u²</code>'],
    e: 'Encuentra los cortes, determina cuál curva queda arriba y resta arriba − abajo.',
    h: 'Iguala las funciones; la región resultante es simétrica respecto del eje y.',
    p: [
      'Cortes: <code>4 − x² = x² − 2 ⇒ 2x² = 6 ⇒ x = ±√3</code>. En ese intervalo, <code>4 − x²</code> queda arriba.',
      'Altura de cada rebanada: <code>(4 − x²) − (x² − 2) = 6 − 2x²</code>. Área: <code>∫₋√3^√3(6 − 2x²)dx</code>. El integrando es par; equivale a <code>2∫₀^√3(6 − 2x²)dx</code>.',
      'Integro y evalúo: <code>2[6x − 2x³/3]₀^√3 = 2(6√3 − 2√3) = 8√3 u²</code>.'
    ]
  }
);

if (FINAL_BOSS.qs.length !== 12 || FINAL_BOSS.qs.some(question => !Array.isArray(question.p) || question.p.length < 2)) {
  throw new Error('La evaluación final debe tener 12 preguntas con procedimientos completos.');
}
