<div align="center">

<img src="docs/banner.svg" alt="CÁLCULO//" width="100%">

**Sistema de estudio de cálculo organizado como línea de tiempo: de las leyes de los exponentes a los teoremas de Green, Stokes y Gauss.**

![secciones](https://img.shields.io/badge/secciones-59-e10600?style=flat-square&labelColor=0b0b0b)
![eras](https://img.shields.io/badge/eras-15-2f7bff?style=flat-square&labelColor=0b0b0b)
![preguntas](https://img.shields.io/badge/preguntas-360-00a37a?style=flat-square&labelColor=0b0b0b)
![ejemplos](https://img.shields.io/badge/ejemplos_resueltos-170-8a2be2?style=flat-square&labelColor=0b0b0b)
![glosario](https://img.shields.io/badge/glosario-100_t%C3%A9rminos-ff7a00?style=flat-square&labelColor=0b0b0b)
![dependencias](https://img.shields.io/badge/dependencias-0-0b0b0b?style=flat-square&labelColor=555)
![licencia](https://img.shields.io/badge/licencia-MIT-0b0b0b?style=flat-square&labelColor=555)

[Parámetros](#1-parámetros-del-sistema) · [Rutas por curso](#2-rutas-de-aprendizaje-por-curso) · [Eras](#3-estructura-temporal-las-15-eras) · [Dependencias](#4-grafo-de-dependencias) · [Instalación](#8-instalación) · [Arquitectura](#10-arquitectura) · [English](#english)

</div>

---

## 0. Resumen

**Cálculo//** es una aplicación web para estudiar cálculo por temas, en el orden en que los conceptos dependen unos de otros. Cubre el contenido estándar de Precálculo, Cálculo I (diferencial), Cálculo II (integral) y Cálculo III (multivariable y vectorial) en 59 secciones agrupadas en 15 eras. Cada era indica además el periodo histórico en que surgió la idea, de modo que el temario se lee también como una historia del cálculo.

Cada sección contiene teoría con el procedimiento completo, ejemplos resueltos paso a paso, una evaluación y referencias. Los términos técnicos funcionan como enlaces internos al estilo de una enciclopedia: muestran la definición formal y llevan a la teoría o a un ejemplo resuelto. No requiere instalación ni conexión a un servidor propio.

<img src="docs/timeline.svg" alt="Las 15 eras" width="100%">

---

## 1. Parámetros del sistema

| Parámetro | Valor | Descripción |
|---|--:|---|
| Secciones | 59 | Unidades de estudio; 3 son evaluaciones integradoras (checkpoints) |
| Eras | 15 | Bloques temáticos ordenados por dependencia conceptual |
| Rutas de aprendizaje | 6 | Recorridos según el curso del estudiante (ver §2) |
| Ejemplos resueltos | 170 | Se revelan paso a paso con etapas *enunciado → dibujo → planteo → cálculo → respuesta* |
| Preguntas de evaluación | 360 | Opción múltiple con pista, explicación y, en cálculo integral, procedimiento completo |
| Términos de glosario | 100 | Enlaces internos con definición, fórmula, teoría, ejemplo y fuentes |
| Fuentes bibliográficas | 24 | Libros abiertos, cursos universitarios y obras históricas originales |
| Hitos históricos | 32 | Desde c. 250 a. C. hasta las formas diferenciales (1945) |
| Simuladores | 10 | Graficación, regiones, áreas, sólidos de revolución, longitud de arco |
| Paletas de color | 8 + 1 | Cuatro claras, cuatro oscuras y un acento personalizable |
| Idiomas de interfaz | 2 | Español e inglés; contenido en español |
| Dependencias | 0 | HTML, CSS y JavaScript sin compilación |

---

## 2. Rutas de aprendizaje por curso

Al abrir la aplicación se ejecuta una secuencia de arranque y se pregunta qué curso está viendo el estudiante. Cada respuesta genera una ruta ordenada, con prerrequisitos, tiempo estimado y avance.

<img src="docs/screens/01-inicio.png" alt="Selector de ruta" width="100%">

| Curso del estudiante | Plan | Recorrido | Secciones | Preguntas | Conviene dominar antes |
|---|:-:|---|--:|--:|---|
| **No lo sé / desde cero** | `PLAN-XX` | Álgebra → Teoremas de Stokes y Gauss | 59 | 360 | ninguno |
| **Precálculo (bachillerato)** | `PLAN-0` | Exponentes → Trigonometría | 6 | 43 | aritmética |
| **Cálculo I · diferencial** | `PLAN-I` | Álgebra → L’Hôpital | 18 | 118 | álgebra y funciones (incluidas en el plan) |
| **Cálculo II · integral** | `PLAN-II` | Integral indefinida → Coordenadas polares | 20 | 145 | límites, reglas de derivación, trigonometría |
| **Cálculo III · multivariable** | `PLAN-III` | Vectores → Teorema de la divergencia | 21 | 97 | derivadas, integral definida, paramétricas y polares |
| **Panorama / repaso** | `PLAN-E` | Límite → Gauss en 17 paradas | 17 | 97 | Cálculo I y II vistos al menos una vez |

### 2.1 Si no se conoce el curso: desde el álgebra hacia arriba

La ruta *desde cero* sigue la estructura lógica de las matemáticas. Cada nivel supone el anterior; cuando algo no se entiende, la causa suele estar uno o dos niveles abajo.

| Nivel | Objeto | Pregunta que responde | Eras |
|:-:|---|---|:-:|
| 0 | Álgebra · $a^m a^n=a^{m+n}$ | ¿Cómo transformo una expresión sin cambiar su valor? | 00 |
| 1 | Funciones · $y=f(x)$ | ¿Cómo se relacionan dos cantidades y cómo se ve esa relación? | 01 |
| 2 | Trigonometría · $\sin^2\theta+\cos^2\theta=1$ | ¿Cómo se miden ángulos y fenómenos periódicos? | 02 |
| 3 | Límites · $\lim_{x\to a}f(x)$ | ¿Qué ocurre cerca de un punto, aunque no en el punto? | 03 |
| 4 | Derivada · $f'(x)$ | ¿Qué tan rápido cambia una cantidad en un instante? | 04–05 |
| 5 | Integral · $\int_a^b f\,dx$ | ¿Cuánto se acumula? ¿Qué relación tiene con la derivada? | 06–08 |
| 6 | Series · $\sum a_n$ | ¿Se puede sumar una cantidad infinita de términos? | 09–10 |
| 7 | Varias variables · $\nabla f$, $\iint$, $\oint$ | ¿Cómo se generaliza todo lo anterior al plano y al espacio? | 11–14 |

---

## 3. Estructura temporal: las 15 eras

El orden de las eras es **pedagógico**; la columna *Periodo* indica cuándo **surgió** cada idea. Históricamente la integral precede a la derivada en casi dos milenios, y el límite —que hoy fundamenta ambas— se formalizó al final, en el siglo XIX.

| Era | Tema | Objeto central | Periodo | Autores principales | Secc. | Ejemplos | Preguntas |
|:-:|---|---|---|---|--:|--:|--:|
| `00` | Fundamentos algebraicos | $a^m a^n=a^{m+n}$ | c. 820 – 1637 | Al-Juarismi · Viète · Descartes | 3 | 9 | 23 |
| `01` | Funciones y gráficas | $y=f(x)$ | 1637 | Descartes · Fermat | 2 | 4 | 13 |
| `02` | Trigonometría | $\sin^2\theta+\cos^2\theta=1$ | c. 150 – 1748 | Ptolomeo · Euler | 1 | 2 | 7 |
| `03` | Límites y continuidad | $\lim_{x\to a}f(x)=L$ | 1821 – 1861 | Cauchy · Weierstrass | 3 | 10 | 19 |
| `04` | La derivada | $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$ | 1665 – 1684 | Newton · Leibniz | 3 | 8 | 19 |
| `05` | Aplicaciones de la derivada | $f'(c)=\frac{f(b)-f(a)}{b-a}$ | 1636 – 1696 | Fermat · Rolle · L’Hôpital | 6 | 13 | 37 |
| `06` | La integral | $\int_a^b f(x)\,dx=F(b)-F(a)$ | c. 250 a.C. – 1854 | Arquímedes · Barrow · Riemann | 2 | 10 | 16 |
| `07` | Métodos de integración | $\int u\,dv=uv-\int v\,du$ | 1690 – 1770 | Bernoulli · Euler | 6 | 22 | 44 |
| `08` | Aplicaciones de la integral | $V=\pi\int_a^b R(x)^2\,dx$ | 1615 – 1659 | Kepler · Cavalieri · Torricelli | 7 | 36 | 58 |
| `09` | Sucesiones y series | $\sum_{n\ge0}\frac{f^{(n)}(a)}{n!}(x-a)^n$ | c. 1350 – 1821 | Oresme · Taylor · Euler | 3 | 10 | 18 |
| `10` | Paramétricas y polares | $A=\frac12\int_\alpha^\beta r^2\,d\theta$ | 1658 – 1691 | Wren · Jakob Bernoulli | 2 | 4 | 9 |
| `11` | Vectores y el espacio | $\vec u\times\vec v\perp\vec u,\vec v$ | 1843 – 1881 | Hamilton · Grassmann · Gibbs | 3 | 6 | 15 |
| `12` | Derivadas en varias variables | $\nabla f=\lambda\nabla g$ | 1740 – 1788 | Clairaut · Euler · Lagrange | 6 | 13 | 27 |
| `13` | Integrales múltiples | $\iiint_E f\,dV$ | 1769 – 1841 | Euler · Lagrange · Jacobi | 5 | 11 | 20 |
| `14` | Cálculo vectorial | $\oint_{C}\vec F\cdot d\vec r=\iint_S(\nabla\times\vec F)\cdot d\vec S$ | 1813 – 1854 | Gauss · Green · Ostrogradski · Stokes | 7 | 12 | 35 |

### 3.1 Contenido por era

<details>
<summary><b>ERA 00 · Fundamentos algebraicos</b> — c. 820 – 1637 — 3 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-00` | Exponentes, radicales y fracciones | — |
| `SEC-01` | Productos notables y factorización | `exponentes` |
| `SEC-02` | Fracciones, división, ecuaciones y logaritmos | `notables` |

</details>
<details>
<summary><b>ERA 01 · Funciones y gráficas</b> — 1637 — 2 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-03` | Graficar I: funciones básicas | `ecuaciones` |
| `SEC-04` | Graficar II: curvas especiales y regiones | `graficar` |

</details>
<details>
<summary><b>ERA 02 · Trigonometría</b> — c. 150 – 1748 — 1 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-05` | Trigonometría base | `ecuaciones` |

</details>
<details>
<summary><b>ERA 03 · Límites y continuidad</b> — 1821 – 1861 — 3 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-06` | Límites: la idea y sus leyes | `graficar` |
| `SEC-07` | Calcular límites: técnicas algebraicas | `limites`, `notables` |
| `SEC-08` | Continuidad y asíntotas | `limites-calc` |

</details>
<details>
<summary><b>ERA 04 · La derivada</b> — 1665 – 1684 — 3 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-09` | La derivada: definición y recta tangente | `limites-calc` |
| `SEC-10` | Reglas de derivación | `derivada-def`, `trigbase` |
| `SEC-11` | Derivación implícita, logarítmica e inversas | `derivadas` |

</details>
<details>
<summary><b>ERA 05 · Aplicaciones de la derivada</b> — 1636 – 1696 — 6 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-12` | Razones de cambio relacionadas | `implicita` |
| `SEC-13` | Aproximación lineal, diferenciales y método de Newton | `derivada-def` |
| `SEC-14` | Valor medio, crecimiento y trazado de curvas | `derivadas`, `continuidad` |
| `SEC-15` | Optimización | `tvm` |
| `SEC-16` | Regla de L'Hôpital | `implicita`, `limites-calc` |
| `SEC-X1` | Checkpoint: Cálculo diferencial | `lhopital`, `optimizacion` |

</details>
<details>
<summary><b>ERA 06 · La integral</b> — c. 250 a.C. – 1854 — 2 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-17` | Integral indefinida y sustitución u | `derivadas` |
| `SEC-18` | Integral definida y TFC | `basica`, `limites` |

</details>
<details>
<summary><b>ERA 07 · Métodos de integración</b> — 1690 – 1770 — 6 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-19` | Integración por partes | `definida` |
| `SEC-20` | Integrales trigonométricas | `partes`, `trigbase` |
| `SEC-21` | Completar el cuadrado | `notables`, `basica` |
| `SEC-22` | Sustitución trigonométrica | `cuadrado`, `potencias` |
| `SEC-23` | Fracciones parciales | `ecuaciones`, `cuadrado` |
| `SEC-24` | Integrales impropias | `definida`, `lhopital` |

</details>
<details>
<summary><b>ERA 08 · Aplicaciones de la integral</b> — 1615 – 1659 — 7 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-25` | Área entre curvas | `regiones`, `definida` |
| `SEC-26` | Discos y arandelas | `area` |
| `SEC-27` | Volúmenes por secciones transversales | `area`, `discos` |
| `SEC-28` | Cascarones cilíndricos | `discos` |
| `SEC-29` | Longitud de curva | `derivadas`, `notables`, `definida` |
| `SEC-30` | Superficie, trabajo y centro de masa | `longitud`, `discos` |
| `SEC-X2` | Checkpoint: Cálculo integral | `fracciones`, `trig`, `cascarones`, `longitud` |

</details>
<details>
<summary><b>ERA 09 · Sucesiones y series</b> — c. 1350 – 1821 — 3 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-31` | Sucesiones | `lhopital` |
| `SEC-32` | Series infinitas y criterios de convergencia | `sucesiones`, `impropias` |
| `SEC-33` | Series de potencias y de Taylor | `series` |

</details>
<details>
<summary><b>ERA 10 · Paramétricas y polares</b> — 1658 – 1691 — 2 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-34` | Curvas paramétricas | `implicita`, `longitud` |
| `SEC-35` | Coordenadas polares | `parametricas`, `trigbase` |

</details>
<details>
<summary><b>ERA 11 · Vectores y el espacio</b> — 1843 – 1881 — 3 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-36` | Vectores en el espacio | `trigbase` |
| `SEC-37` | Rectas, planos y superficies cuádricas | `vectores` |
| `SEC-38` | Funciones vectoriales y movimiento | `rectas-planos`, `parametricas` |

</details>
<details>
<summary><b>ERA 12 · Derivadas en varias variables</b> — 1740 – 1788 — 6 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-39` | Funciones de varias variables | `rectas-planos`, `continuidad` |
| `SEC-40` | Derivadas parciales | `varias`, `derivadas` |
| `SEC-41` | Plano tangente, diferencial y regla de la cadena | `parciales`, `linealizacion` |
| `SEC-42` | Gradiente y derivada direccional | `tangente`, `vectores` |
| `SEC-43` | Máximos y mínimos en varias variables | `gradiente`, `optimizacion` |
| `SEC-44` | Multiplicadores de Lagrange | `extremos` |

</details>
<details>
<summary><b>ERA 13 · Integrales múltiples</b> — 1769 – 1841 — 5 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-45` | Integrales dobles | `varias`, `area` |
| `SEC-46` | Integrales dobles en coordenadas polares | `dobles`, `polares` |
| `SEC-47` | Integrales triples | `dobles`, `rectas-planos` |
| `SEC-48` | Coordenadas cilíndricas y esféricas | `triples`, `dobles-polar` |
| `SEC-49` | Cambio de variables y jacobiano | `cilesf` |

</details>
<details>
<summary><b>ERA 14 · Cálculo vectorial</b> — 1813 – 1854 — 7 secciones</summary>

| Código | Sección | Requiere |
|---|---|---|
| `SEC-50` | Campos vectoriales, divergencia y rotacional | `gradiente`, `funvec` |
| `SEC-51` | Integrales de línea | `campos` |
| `SEC-52` | Teorema de Green | `linea`, `dobles` |
| `SEC-53` | Superficies paramétricas e integrales de superficie | `dobles-polar`, `campos` |
| `SEC-54` | Teorema de Stokes | `superficies`, `green` |
| `SEC-55` | Teorema de la divergencia (Gauss–Ostrogradski) | `superficies`, `triples` |
| `SEC-X3` | Evaluación final: Cálculo multivariable | `divergencia`, `stokes`, `lagrange` |

</details>

---

## 4. Grafo de dependencias

Una flecha $A\to B$ indica que $B$ usa resultados de $A$. Toda sección declara además sus prerrequisitos individuales (columna *Requiere* en §3.1).

```mermaid
flowchart LR
  E00[00 Álgebra] --> E01[01 Funciones]
  E00 --> E02[02 Trigonometría]
  E01 --> E03[03 Límites]
  E03 --> E04[04 Derivada]
  E02 --> E04
  E04 --> E05[05 Aplic. derivada]
  E04 --> E06[06 Integral]
  E06 --> E07[07 Métodos]
  E05 --> E07
  E07 --> E08[08 Aplic. integral]
  E05 --> E09[09 Series]
  E07 --> E09
  E08 --> E10[10 Paramétricas y polares]
  E02 --> E11[11 Vectores]
  E10 --> E11
  E11 --> E12[12 Derivadas parciales]
  E12 --> E13[13 Integrales múltiples]
  E08 --> E13
  E13 --> E14[14 Cálculo vectorial]
  E12 --> E14
```

---

## 5. Estructura de una sección

| Componente | Contenido |
|---|---|
| Encabezado | Código (`SEC-xx`), era y periodo, prerrequisitos y dónde se usa el tema |
| Teoría | Motivación, definiciones, procedimiento numerado, error frecuente, observación, diagramas y tablas |
| Enlaces internos | Primera aparición de cada término del glosario; vista previa con definición, fórmula y fuentes |
| Citas | Referencias numeradas `[n]` y bibliografía al final de la sección |
| Ejemplos | Resolución paso a paso; cada paso puede enlazar a la ley que aplica |
| Simulador | En las secciones de graficación y aplicaciones de la integral |
| Evaluación | Preguntas con vidas, racha, pistas y puntos de experiencia; checkpoints cronometrados |

---

## 6. Módulos de la interfaz

| Módulo | Función |
|---|---|
| Arranque y selector de ruta | Secuencia de inicio y elección del curso; teclado: `↑` `↓` `Enter`, `Esc` para omitir |
| Mapa | La línea de tiempo del plan activo, con estado de cada sección |
| Línea de tiempo histórica | 32 hitos con autor, año, enlace a Wikipedia y a la sección correspondiente |
| Glosario | Índice alfabético con buscador |
| Hoja de apuntes | Resumen de cálculo integral por prioridad, exportable a PDF |
| Calculadora | Científica, con integral definida numérica, derivada en un punto y forma exacta |
| Pizarra | Superficie de escritura a mano con exportación a PNG |
| Modo TV y pantalla completa | Para proyección en clase |

---

## 7. Capturas

| Línea de tiempo | Enlaces internos |
|---|---|
| <img src="docs/screens/02-linea-de-tiempo.png" width="100%"> | <img src="docs/screens/03-enlaces-wiki.png" width="100%"> |
| **Historia** | **Paleta oscura** |
| <img src="docs/screens/04-historia.png" width="100%"> | <img src="docs/screens/05-tema-noche.png" width="100%"> |
| **Arranque** | **Móvil** |
| <img src="docs/screens/08-arranque.png" width="100%"> | <img src="docs/screens/07-movil.png" width="45%"> |

---

## 8. Instalación

```bash
git clone https://github.com/tomikav/Calc-short-4-Calculator.git
cd Calc-short-4-Calculator
```

| Modo | Instrucción |
|---|---|
| Local | Abrir `index.html` en el navegador (Windows: `start index.html`; macOS: `open`; Linux: `xdg-open`) |
| Servidor local | `python -m http.server 8080` y abrir `http://localhost:8080` |
| Otro dispositivo en la red | Con el servidor anterior, abrir `http://IP-DEL-EQUIPO:8080` |
| Como aplicación | Servido desde un servidor, Chrome o Edge ofrecen *Instalar aplicación* (manifiesto PWA incluido) |
| Actualizar | `git pull` y recargar con `Ctrl + F5` |

Requisitos: navegador reciente y conexión a internet al abrir (MathJax y tipografías se cargan desde la red). El progreso se guarda en el navegador (`localStorage`).

---

## 9. Personalización

<img src="docs/palettes.svg" alt="Paletas" width="100%">

La interfaz completa depende de 12 variables CSS. Las paletas se eligen desde la barra superior; crear una nueva o llevar los colores a una aplicación nativa está documentado en [`docs/TEMAS.md`](docs/TEMAS.md).

---

## 10. Arquitectura

| Capa | Archivos | Responsabilidad |
|---|---|---|
| Motor | `js/app.js`, `core.js`, `i18n.js`, `loader.js` | Mapa, secciones, ejemplos, evaluación, estado |
| Arranque | `js/intro.js` | Secuencia de inicio y selector de ruta |
| Enlaces e historia | `js/wiki.js` | Glosario, vistas previas, citas, línea de tiempo histórica |
| Apariencia | `js/theme.js`, `css/style.css` | Paletas y estilos (variables CSS) |
| Herramientas | `js/fig.js`, `labs-*.js`, `calc.js`, `board.js`, `sketch.js` | Gráficas, simuladores, calculadora, pizarra |
| Contenido | `content/es/*.js` | Secciones, ejemplos, preguntas, glosario, fuentes |
| Ensamblado | `content/es/timeline.js` | Eras, orden, numeración `SEC-xx`, planes y rutas |

El motor no contiene contenido. Agregar una sección consiste en un `LV.push({...})` y una línea en `timeline.js`; la numeración y las referencias cruzadas se recalculan solas. El procedimiento está en [`CONTRIBUTING.md`](CONTRIBUTING.md).

---

## 11. Fuentes

| Fuente | Uso |
|---|---|
| Strang, Herman et al., *Cálculo* vol. 1–3, OpenStax (español) | Referencia principal de teoría, citada por capítulo |
| Dawkins, *Paul’s Online Math Notes*, Lamar University | Procedimientos y ejercicios |
| Stewart, *Cálculo de una variable* y *de varias variables*, Cengage | Referencia de ejemplos clásicos |
| MIT OpenCourseWare 18.01SC y 18.02SC | Estructura de Cálculo I y III |
| 3Blue1Brown, *Essence of Calculus*; Khan Academy | Material audiovisual complementario |
| Obras originales: Arquímedes, Leibniz (1684), L’Hôpital (1696), Taylor (1715), Green (1828), Stokes (1854) | Hitos históricos |

---

## 12. Contribuciones y licencia

Las contribuciones (secciones, ejemplos, preguntas, términos, hitos, paletas o traducciones) siguen [`CONTRIBUTING.md`](CONTRIBUTING.md). Dentro de la teoría se enlaza con `[[clave]]` y se cita con `[^fuente|§2.3]`.

Licencia [MIT](LICENSE). Los ejercicios de taller se citan con fines educativos; las fuentes enlazadas pertenecen a sus autores.

---

<a id="english"></a>

## English

**Cálculo//** is a no-install web application for studying calculus as a timeline, from exponent rules to the theorems of Green, Stokes and Gauss: 59 sections in 15 eras covering Precalculus and Calculus I–III, with 170 worked examples, 360 quiz questions, 100 cross-linked glossary terms, numbered citations and 32 historical milestones. On start-up it runs a boot sequence and asks which course the student is taking, then builds an ordered learning path; students who do not know start from algebra. Eight colour palettes are driven by 12 CSS variables. Clone the repository and open `index.html`. The interface is available in Spanish and English; course content is in Spanish.
