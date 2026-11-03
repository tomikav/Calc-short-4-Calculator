<div align="center">

```
 ██████╗ █████╗ ██╗      ██████╗██╗   ██╗██╗      ██████╗     ██╗██╗
██╔════╝██╔══██╗██║     ██╔════╝██║   ██║██║     ██╔═══██╗   ██╔╝██╔╝
██║     ███████║██║     ██║     ██║   ██║██║     ██║   ██║  ██╔╝██╔╝
██║     ██╔══██║██║     ██║     ██║   ██║██║     ██║   ██║ ██╔╝██╔╝
╚██████╗██║  ██║███████╗╚██████╗╚██████╔╝███████╗╚██████╔╝██╔╝██╔╝
 ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝ ╚═╝
```

**PROTOCOLO DE ENTRENAMIENTO INTENSIVO // CÁLCULO INTEGRAL**

![status](https://img.shields.io/badge/STATUS-OPERATIVO-e10600?style=for-the-badge&labelColor=0b0b0b)
![build](https://img.shields.io/badge/BUILD-SIN_INSTALACIÓN-0b0b0b?style=for-the-badge&labelColor=e10600)
![lang](https://img.shields.io/badge/IDIOMAS-ES_%7C_EN-e10600?style=for-the-badge&labelColor=0b0b0b)
![license](https://img.shields.io/badge/LICENCIA-MIT-0b0b0b?style=for-the-badge&labelColor=e10600)

[ ENGLISH VERSION ](#english-version)

</div>

---

## `// TEMARIO`

| FASE | TEMAS |
|---|---|
| **01 · FUNDAMENTOS ALGEBRAICOS** | Leyes de exponentes y radicales · aritmética de fracciones · productos notables · factorización · discriminante · división de polinomios · ecuaciones · logaritmos |
| **02 · GRAFICAR** | Plano cartesiano y tabla de valores · rectas, parábolas, raíces, hipérbolas, exponencial y logaritmo · transformaciones · curvas x = g(y) · circunferencias · seno y coseno · cómo dibujar una región |
| **03 · TRIGONOMETRÍA Y DERIVADAS** | Valores notables · identidades pitagóricas · ángulo doble y ángulo medio · tabla de derivadas · regla del producto y regla de la cadena |
| **04 · LA INTEGRAL** | Integral indefinida · tabla de integrales · sustitución u · integral definida · Teorema Fundamental del Cálculo · propiedades · cambio de límites |
| **05 · MÉTODOS DE INTEGRACIÓN** | Integración por partes (LIATE, tabla DI, cíclicas) · integrales trigonométricas · completar el cuadrado · sustitución trigonométrica · fracciones parciales |
| **06 · APLICACIONES** | Área bajo la curva · área entre curvas · volúmenes por discos y arandelas · ejes desplazados · secciones transversales · cascarones cilíndricos · longitud de curva (cartesiana y paramétrica) |
| **07 · EVALUACIÓN** | Simulacro mixto con tiempo |

### Planes de estudio incluidos

| PLAN | RECORRIDO |
|---|---|
| `PLAN-02` Parcial · Segundo corte | Integral definida → Longitud de la curva |
| `PLAN-00` Fundamentos | Exponentes → Derivadas |
| `PLAN-XX` Plan completo | Álgebra básica → Evaluación final |

---

## `// 00` EXPEDIENTE

**Cálculo** es una interfaz de entrenamiento para dominar Cálculo Integral desde cero. No es un PDF ni un resumen: es una **línea de estudio escalonada**. Cada sección es un nodo que se desbloquea al superar el anterior, y los nodos se agrupan en **planes de estudio** según lo que necesites preparar.

Cada operación queda trazada. Cuando un ejemplo aplica una ley, la expresión aparece marcada con una **llave de color** que dice cuál es y lleva al punto exacto de la teoría donde se explica.

> El sistema no da respuestas para memorizar: muestra **por qué** se hace cada paso.

---

## `// 01` MÓDULOS DEL SISTEMA

| MÓDULO | FUNCIÓN |
|---|---|
| `INICIO` | Pantalla de arranque para elegir el plan de estudio. El progreso se comparte entre planes. |
| `MAPA` | Red de nodos por fases. Cada nodo indica sus **requisitos** y **dónde se usa** después. |
| `TEORÍA` | Procedimientos completos, sin saltarse pasos: fórmulas deducidas, errores comunes y casos especiales. |
| `EJEMPLOS` | Resolución paso a paso: `ENUNCIADO → DIBUJO → CORTES → PLANTEO → CÁLCULO → RESPUESTA`. |
| `SIMULADOR` | Graficar funciones punto por punto, dibujar regiones, rectángulos de área, discos, arandelas, cascarones y longitud de arco. |
| `EVALUACIÓN` | Combate contra un objetivo, con vidas, rachas y XP. Cada respuesta muestra el **procedimiento completo paso a paso** y lleva a la teoría. Incluye preguntas **DIFÍCILES** (+20 XP). |
| `CALCULADORA` | Científica, al lado de ejemplos y evaluación: trig e inversas, ln, log, raíces, factorial, π, e, ANS, historial, **integral definida numérica**, derivada en un punto y **forma exacta** del resultado (fracción, kπ, √). |
| `HOJA DE APUNTES` | Resumen por prioridad con un ejemplo en cada línea. Tiene versión para imprimir. |
| `PIZARRA` | Panel lateral para resolver a mano: lápiz, tiza, borrador, colores primarios, fondo claro u oscuro y exportar a PNG. **Revisión con IA opcional**: califica tu procedimiento de 0 a 5, señala el primer error y da una pista. |
| `MODO TV` | Interfaz ampliada para proyectar en pantalla grande. |
| `IDIOMAS` | Interfaz en español e inglés. El contenido se puede traducir por partes. |

---

## `// 02` REQUISITOS

| COMPONENTE | DETALLE |
|---|---|
| **Sistema operativo** | Windows, macOS o Linux. En celular o tablet funciona si lo sirves desde un servidor local (ver opción C). |
| **Navegador** | Chrome, Edge, Firefox, Brave u Opera, en versión reciente. Safari también funciona. |
| **Conexión** | Internet al abrirlo: las fórmulas (MathJax) y las fuentes se cargan desde la red. |
| **Instalación** | Ninguna. No necesita Node, Python, base de datos ni compilar nada. |
| **Git** *(opcional)* | Solo si quieres clonarlo o contribuir. |
| **Clave de API** *(opcional)* | Solo para la revisión con IA de la pizarra. Sirve cualquier API compatible con OpenAI; por defecto [OpenRouter](https://openrouter.ai) con un modelo con visión. La clave se guarda únicamente en tu navegador. |

---

## `// 03` DESPLIEGUE

### Opción A · Descargar el ZIP (sin Git)

1. En GitHub pulsa **Code → Download ZIP**.
2. Descomprímelo.
3. Abre `index.html` con doble clic.

### Opción B · Clonar con Git

**Windows (PowerShell)**
```powershell
git clone https://github.com/tomikav/Calc-short-4-Calculator.git
cd Calc-short-4-Calculator
start index.html
```

**macOS**
```bash
git clone https://github.com/tomikav/Calc-short-4-Calculator.git
cd Calc-short-4-Calculator
open index.html
```

**Linux**
```bash
git clone https://github.com/tomikav/Calc-short-4-Calculator.git
cd Calc-short-4-Calculator
xdg-open index.html
```

### Opción C · Servidor local *(si tu navegador bloquea archivos locales o quieres abrirlo desde el celular)*

Necesitas Python 3. Desde la carpeta del proyecto:
```bash
python -m http.server 8080
```
Abre `http://localhost:8080` en el computador. Para el celular, conéctalo a la misma red Wi-Fi y abre `http://IP-DE-TU-PC:8080`. En Windows la IP sale con `ipconfig`.

> **Progreso:** el XP, las secciones completadas, la hoja de apuntes y el plan activo se guardan en el navegador (`localStorage`). Si cambias de navegador o borras los datos, empiezas de cero.

---

## `// 04` ARQUITECTURA

```
index.html              ── Interfaz principal
css/style.css           ── Estilos (rojo / negro / blanco)
js/
 ├─ core.js             ── Estado, utilidades y U(): llaves de color
 ├─ i18n.js             ── Textos de la interfaz por idioma
 ├─ app.js              ── Inicio, planes, mapa, secciones, ejemplos, evaluación y hoja
 ├─ board.js            ── Pizarra virtual y revisión con IA opcional
 ├─ calc.js             ── Calculadora científica (parser propio, sin eval)
 ├─ labs-calc.js        ── Simuladores de áreas, volúmenes y longitud
 ├─ labs-graph.js       ── Simuladores para graficar y dibujar regiones
 └─ loader.js           ── Carga el contenido del idioma activo
content/es/
 ├─ course.js           ── Nombre, fases, PLANES DE ESTUDIO, temas del parcial y rutas
 ├─ sections.js         ── Las secciones: teoría, ejemplos y preguntas
 ├─ references.js       ── Colores de las leyes, enlaces a la teoría y videos
 ├─ annotations.js      ── Llaves de color dentro de los ejemplos
 ├─ workshop.js         ── Ejercicios de taller resueltos completos
 ├─ solutions.js        ── Procedimiento paso a paso de cada pregunta + preguntas difíciles
 └─ sheet.js            ── Hoja de apuntes por prioridad
```

El motor (`js/`) no tiene contenido propio: todo sale de `content/`. Para agregar temas, crear planes de estudio, añadir materias o traducir no hay que tocar el código.

**Crear un plan nuevo** es agregar un bloque en `content/es/course.js`:
```js
{ id:'mi-plan', code:'PLAN-03', name:'Repaso de volúmenes', range:'Discos → Secciones transversales',
  desc:'Solo volúmenes.', sections:['discos','secciones','cascarones'] }
```

---

## `// 05` ACCESO PARA COLABORADORES

El proyecto es abierto. Puedes agregar secciones, ejemplos, preguntas, planes, idiomas o materias completas. El procedimiento está en [`CONTRIBUTING.md`](CONTRIBUTING.md).

```bash
git checkout -b mi-aporte
# ...cambios...
git commit -m "nuevo ejemplo de arandelas"
git push origin mi-aporte
```
Después abre un Pull Request.

---

## `// 06` LICENCIA

[MIT](LICENSE): libre para usar, copiar y modificar. Los ejercicios de taller se citan con fines educativos.

<div align="center">

**`// FIN DEL EXPEDIENTE //`**

</div>

---
---

<a id="english-version"></a>
<div align="center">

**INTENSIVE TRAINING PROTOCOL // INTEGRAL CALCULUS**

</div>

## `// SYLLABUS`

| PHASE | TOPICS |
|---|---|
| **01 · ALGEBRA FUNDAMENTALS** | Laws of exponents and radicals · fraction arithmetic · special products · factoring · discriminant · polynomial long division · equations · logarithms |
| **02 · GRAPHING** | Cartesian plane and tables of values · lines, parabolas, square roots, hyperbolas, exponential and logarithm · transformations · curves of the form x = g(y) · circles · sine and cosine · how to sketch a region |
| **03 · TRIGONOMETRY AND DERIVATIVES** | Special values · Pythagorean identities · double-angle and half-angle formulas · table of derivatives · product rule and chain rule |
| **04 · THE INTEGRAL** | Indefinite integral · table of integrals · u-substitution · definite integral · Fundamental Theorem of Calculus · properties · changing the limits of integration |
| **05 · INTEGRATION TECHNIQUES** | Integration by parts (LIATE, tabular method, cyclic integrals) · trigonometric integrals · completing the square · trigonometric substitution · partial fractions |
| **06 · APPLICATIONS** | Area under a curve · area between curves · volumes by disks and washers · shifted axes · cross-sections · cylindrical shells · arc length (Cartesian and parametric) |
| **07 · ASSESSMENT** | Timed mixed mock exam |

**Built-in study plans:** Midterm 2 (definite integral → arc length) · Fundamentals (exponents → derivatives) · Full plan (basic algebra → final assessment).

## `// 00` OVERVIEW

**Cálculo** is a training interface for learning Integral Calculus from scratch. It is not a PDF or a summary: it is a **step-by-step learning path**. Each section is a node that unlocks when you clear the previous one, and nodes are grouped into **study plans** depending on what you need to prepare.

Every operation is traceable. When an example applies a rule, the expression is marked with a **colored brace** that names the rule and links to the exact part of the theory where it is explained.

## `// 01` SYSTEM MODULES

| MODULE | WHAT IT DOES |
|---|---|
| `START` | Boot screen to choose a study plan. Progress is shared across plans. |
| `MAP` | Node network grouped by phases. Each node shows its **prerequisites** and **where it is used** later. |
| `THEORY` | Complete procedures with no skipped steps: derived formulas, common mistakes and special cases. |
| `EXAMPLES` | Step-by-step solutions: `STATEMENT → SKETCH → INTERSECTIONS → SETUP → CALCULATION → ANSWER`. |
| `SIMULATOR` | Plot functions point by point, sketch regions, area rectangles, disks, washers, shells and arc length. |
| `QUIZ` | Fight against a target with lives, streaks and XP. Every answer shows the **full step-by-step procedure** and links to the theory. Includes **HARD** questions (+20 XP). |
| `CALCULATOR` | Scientific, next to examples and quiz: trig and inverses, ln, log, roots, factorial, π, e, ANS, history, **numerical definite integral**, derivative at a point and **exact form** of the result (fraction, kπ, √). |
| `CHEAT SHEET` | Summary ordered by priority, with an example on every line and a printable version. |
| `WHITEBOARD` | Side panel to work by hand: pencil, chalk, eraser, primary colors, light or dark background and PNG export. **Optional AI review**: scores your work from 0 to 5, points out the first mistake and gives a hint. |
| `TV MODE` | Enlarged interface for projecting on a big screen. |
| `LANGUAGES` | Interface in Spanish and English. Content can be translated file by file. |

## `// 02` REQUIREMENTS

| COMPONENT | DETAILS |
|---|---|
| **Operating system** | Windows, macOS or Linux. Phones and tablets work if you serve it from a local server (option C). |
| **Browser** | A recent version of Chrome, Edge, Firefox, Brave, Opera or Safari. |
| **Connection** | Internet access when opening it: math rendering (MathJax) and fonts load from the web. |
| **Installation** | None. No Node, Python, database or build step required. |
| **Git** *(optional)* | Only if you want to clone it or contribute. |
| **API key** *(optional)* | Only for the whiteboard AI review. Any OpenAI-compatible API works; [OpenRouter](https://openrouter.ai) with a vision model is the default. The key is stored only in your browser. |

## `// 03` SETUP

**Option A · Download the ZIP:** on GitHub click **Code → Download ZIP**, extract it and double-click `index.html`.

**Option B · Clone with Git**
```bash
git clone https://github.com/tomikav/Calc-short-4-Calculator.git
cd Calc-short-4-Calculator
```
Then open it with `start index.html` (Windows), `open index.html` (macOS) or `xdg-open index.html` (Linux).

**Option C · Local server** (if your browser blocks local files, or to open it from your phone). Requires Python 3:
```bash
python -m http.server 8080
```
Open `http://localhost:8080`. From a phone on the same Wi-Fi network, open `http://YOUR-PC-IP:8080`.

> **Progress** (XP, completed sections, cheat sheet and active plan) is stored in your browser’s `localStorage`. Switching browsers or clearing site data resets it.

## `// 04` ARCHITECTURE

The engine (`js/`) contains no course content; everything is loaded from `content/<language>/`. You can add topics, create study plans, add new subjects or translate the course without touching the code. To create a new plan, add a block to `content/es/course.js` (see the example in the Spanish section above).

## `// 05` CONTRIBUTING

The project is open source. You can add sections, examples, questions, study plans, languages or entire subjects. See [`CONTRIBUTING.md`](CONTRIBUTING.md). The course content is currently in Spanish only, so translations are especially welcome.

## `// 06` LICENSE

[MIT](LICENSE): free to use, copy and modify. Workshop exercises are quoted for educational purposes.
