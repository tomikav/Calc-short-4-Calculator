<div align="center">

<img src="docs/banner.svg" alt="CÁLCULO//" width="100%">

### Del álgebra básica a los teoremas de Green, Stokes y Gauss — como una línea de tiempo.

![secciones](https://img.shields.io/badge/SECCIONES-59-e10600?style=for-the-badge&labelColor=0b0b0b)
![eras](https://img.shields.io/badge/ERAS-15-2f7bff?style=for-the-badge&labelColor=0b0b0b)
![preguntas](https://img.shields.io/badge/PREGUNTAS-360+-00a37a?style=for-the-badge&labelColor=0b0b0b)
![glosario](https://img.shields.io/badge/GLOSARIO-100_TÉRMINOS-8a2be2?style=for-the-badge&labelColor=0b0b0b)
<br>
![build](https://img.shields.io/badge/INSTALACIÓN-NINGUNA-0b0b0b?style=for-the-badge&labelColor=e10600)
![temas](https://img.shields.io/badge/PALETAS-8_+_PERSONALIZADA-0b0b0b?style=for-the-badge&labelColor=2f7bff)
![pwa](https://img.shields.io/badge/PWA-INSTALABLE-0b0b0b?style=for-the-badge&labelColor=00a37a)
![license](https://img.shields.io/badge/LICENCIA-MIT-0b0b0b?style=for-the-badge&labelColor=8a2be2)

**[▶ Empezar](#-en-30-segundos)** · **[🗺️ El temario](#%EF%B8%8F-el-temario-15-eras)** · **[✨ Qué tiene](#-qué-tiene)** · **[🎨 Paletas](#-paletas)** · **[🤝 Contribuir](#-contribuir)** · **[English](#english)**

</div>

---

<img src="docs/timeline.svg" alt="Línea de tiempo de las 15 eras" width="100%">

**Cálculo//** es una forma fácil de estudiar cálculo **por temas**, ordenados como una línea de tiempo: de las leyes de los exponentes a las integrales de superficie. No es un PDF ni un resumen: cada sección explica **por qué** se hace cada paso, tiene ejemplos que se revelan paso a paso, simuladores, una evaluación con XP y **enlaces tipo Wikipedia** que te llevan a la definición, a la teoría donde se explica o a un ejemplo resuelto.

> Nació como guía para el parcial de Cálculo Integral (y funcionó 🎓). Ahora cubre **Cálculo I, II y III** completos.

<table>
<tr>
<td width="50%"><img src="docs/screens/02-linea-de-tiempo.png" alt="Mapa como línea de tiempo"><br><sub><b>El mapa es la línea de tiempo.</b> Cada era tiene sus años, sus protagonistas y su color.</sub></td>
<td width="50%"><img src="docs/screens/03-enlaces-wiki.png" alt="Enlaces tipo Wikipedia"><br><sub><b>Enlaces tipo Wikipedia.</b> Pasa el mouse: definición, fórmula, "Teoría →", "Ejemplo →" y fuentes.</sub></td>
</tr>
<tr>
<td width="50%"><img src="docs/screens/04-historia.png" alt="Historia del cálculo"><br><sub><b>La historia real.</b> 32 hitos, de Arquímedes (250 a.C.) a las formas diferenciales, cada uno enlazado a su sección.</sub></td>
<td width="50%"><img src="docs/screens/05-tema-noche.png" alt="Tema oscuro"><br><sub><b>8 paletas</b> claras y oscuras, más un acento propio.</sub></td>
</tr>
</table>

---

## ⚡ En 30 segundos

```bash
git clone https://github.com/tomikav/Calc-short-4-Calculator.git
cd Calc-short-4-Calculator
start index.html          # Windows · macOS: open index.html · Linux: xdg-open index.html
```

¿Sin Git? **Code → Download ZIP**, descomprime y abre `index.html`.
¿Desde el celular o instalarlo como app? Sírvelo con `python -m http.server 8080` y abre `http://IP-DE-TU-PC:8080`; en Chrome/Edge aparece **Instalar app**.
¿Ya lo tenías? `git pull` y recarga con **Ctrl + F5**.

---

## 🗺️ El temario: 15 eras

El orden es el **pedagógico** (cómo se aprende). El año es cuándo **nació** cada idea: la integral es la más antigua y el límite, que sostiene todo, llegó al final.

| | Era | Años · protagonistas | Secciones |
|:-:|---|---|---|
| `ERA 00` | 🧮 **Fundamentos algebraicos** | `c. 820 – 1637` · Al-Juarismi · Viète · Descartes | Exponentes, radicales y fracciones · Productos notables y factorización · Fracciones, división, ecuaciones y logaritmos |
| `ERA 01` | 📈 **Funciones y gráficas** | `1637` · Descartes · Fermat | Graficar I: funciones básicas · Graficar II: curvas especiales y regiones |
| `ERA 02` | 📐 **Trigonometría** | `c. 150 – 1748` · Ptolomeo · Euler | Trigonometría base |
| `ERA 03` | 🎯 **Límites y continuidad** | `1821 – 1861` · Cauchy · Weierstrass | Límites: la idea y sus leyes · Calcular límites: técnicas algebraicas · Continuidad y asíntotas |
| `ERA 04` | ⚡ **La derivada** | `1665 – 1684` · Newton · Leibniz | La derivada: definición y recta tangente · Reglas de derivación · Derivación implícita, logarítmica e inversas |
| `ERA 05` | 🛠️ **Aplicaciones de la derivada** | `1636 – 1696` · Fermat · Rolle · L’Hôpital | Razones de cambio relacionadas · Aproximación lineal, diferenciales y método de Newton · Valor medio, crecimiento y trazado de curvas · Optimización · Regla de L'Hôpital · Checkpoint: Cálculo diferencial |
| `ERA 06` | ∫ **La integral** | `c. 250 a.C. – 1854` · Arquímedes · Barrow · Riemann | Integral indefinida y sustitución u · Integral definida y TFC |
| `ERA 07` | 🧩 **Métodos de integración** | `1690 – 1770` · Bernoulli · Euler | Integración por partes · Integrales trigonométricas · Completar el cuadrado · Sustitución trigonométrica · Fracciones parciales · Integrales impropias |
| `ERA 08` | 🏺 **Aplicaciones de la integral** | `1615 – 1659` · Kepler · Cavalieri · Torricelli | Área entre curvas · Discos y arandelas · Volúmenes por secciones transversales · Cascarones cilíndricos · Longitud de curva · Superficie, trabajo y centro de masa · Checkpoint: Cálculo integral |
| `ERA 09` | ♾️ **Sucesiones y series** | `c. 1350 – 1821` · Oresme · Taylor · Euler | Sucesiones · Series infinitas y criterios de convergencia · Series de potencias y de Taylor |
| `ERA 10` | 🌀 **Paramétricas y polares** | `1658 – 1691` · Wren · Jakob Bernoulli | Curvas paramétricas · Coordenadas polares |
| `ERA 11` | 🧭 **Vectores y el espacio** | `1843 – 1881` · Hamilton · Grassmann · Gibbs | Vectores en el espacio · Rectas, planos y superficies cuádricas · Funciones vectoriales y movimiento |
| `ERA 12` | ⛰️ **Derivadas en varias variables** | `1740 – 1788` · Clairaut · Euler · Lagrange | Funciones de varias variables · Derivadas parciales · Plano tangente, diferencial y regla de la cadena · Gradiente y derivada direccional · Máximos y mínimos en varias variables · Multiplicadores de Lagrange |
| `ERA 13` | 🧊 **Integrales múltiples** | `1769 – 1841` · Euler · Lagrange · Jacobi | Integrales dobles · Integrales dobles en coordenadas polares · Integrales triples · Coordenadas cilíndricas y esféricas · Cambio de variables y jacobiano |
| `ERA 14` | 🌪️ **Cálculo vectorial** | `1813 – 1854` · Gauss · Green · Ostrogradski · Stokes | Campos vectoriales, divergencia y rotacional · Integrales de línea · Teorema de Green · Superficies paramétricas e integrales de superficie · Teorema de Stokes · Teorema de la divergencia (Gauss–Ostrogradski) · Evaluación final: Cálculo multivariable |

Hay **5 planes de estudio** que recorren tramos de esta línea:

| Plan | Recorrido | Para |
|---|---|---|
| `PLAN-XX` **Línea de tiempo completa** | Álgebra → Stokes y Gauss | Todo, en orden, con ruta sugerida de ~60 h |
| `PLAN-I` **Cálculo I · Diferencial** | Álgebra → L’Hôpital | Primer semestre |
| `PLAN-II` **Cálculo II · Integral** | Integral indefinida → Polares | Segundo semestre |
| `PLAN-III` **Cálculo III · Multivariable** | Vectores → Divergencia | Tercer semestre |
| `PLAN-E` **Ruta express** | Límite → Gauss en 17 paradas | Ver el panorama completo rápido |

---

## ✨ Qué tiene

| | Módulo | Qué hace |
|:-:|---|---|
| 📖 | **Teoría** | Procedimientos completos sin saltarse pasos: *por qué importa*, fórmula, receta numerada, error común y consejo. Diagramas propios en cada tema. |
| 🔗 | **Enlaces tipo Wikipedia** | 100 términos de glosario. La primera aparición de cada término se enlaza sola; al pasar el mouse sale una tarjeta con definición, fórmula, botones **TEORÍA →** y **EJEMPLO →**, enlace a Wikipedia y fuentes. Al saltar, un botón te devuelve a donde estabas. |
| 📚 | **Citas y bibliografía** | Citas numeradas `[1]` dentro de la teoría y referencias al final de cada sección: OpenStax *Cálculo* (vol. 1–3, en español), Paul’s Online Notes, MIT OpenCourseWare, Stewart, 3Blue1Brown, Khan Academy y las obras históricas originales. |
| 🕰️ | **Línea de tiempo histórica** | 32 hitos con año, protagonista, qué hizo, enlace a Wikipedia y botón a la sección donde se estudia. |
| 🔤 | **Glosario A–Z** | Buscador de todos los términos con su definición. |
| 🧪 | **Ejemplos** | 170 ejercicios resueltos que se revelan paso a paso, con etapas `DIBUJO → PLANTEO → CÁLCULO → RESPUESTA`. |
| 🎮 | **Evaluación** | 360+ preguntas con vidas, rachas, XP, pistas y procedimiento; checkpoints cronometrados al final de cada curso. |
| 🕹️ | **Simuladores** | Graficar, regiones, rectángulos de área, discos, arandelas, cascarones, longitud de arco. |
| 🧮 | **Calculadora** | Científica, con integral definida numérica, derivada en un punto y forma exacta. |
| ✏️ | **Pizarra** | Para resolver a mano, con exportar a PNG y revisión opcional con IA. |
| 📝 | **Hoja de apuntes** | Resumen por prioridad de cálculo integral, en PDF listo para imprimir. |
| 🎨 | **Paletas** | 8 temas (4 claros, 4 oscuros) + acento personalizado, todo con variables CSS. |
| 📱 | **App** | Responsive, modo TV para proyectar, instalable como PWA. |

---

## 🎨 Paletas

<img src="docs/palettes.svg" alt="8 paletas" width="100%">

Botón de colores en la barra superior. Todo el diseño sale de 12 variables CSS (*design tokens*), pensadas para que pasar a una app nativa sea copiar valores: ver **[docs/TEMAS.md](docs/TEMAS.md)**.

---

## 🧱 Arquitectura

Sin dependencias ni compilación: HTML + CSS + JavaScript puro. MathJax y las fuentes se cargan de la web.

```
index.html               interfaz
manifest.webmanifest     para instalar como app
css/style.css            estilos (todo con variables de color)
js/
 ├─ theme.js             paletas de color
 ├─ wiki.js              enlaces tipo Wikipedia, citas, historia y glosario
 ├─ app.js               mapa, secciones, ejemplos, evaluación y hoja
 ├─ core.js · i18n.js · loader.js
 ├─ fig.js · labs-*.js   gráficas y simuladores
 └─ calc.js · board.js · sketch.js
content/es/
 ├─ sections.js …        álgebra, gráficas, trigonometría e integral (contenido original)
 ├─ diferencial.js       límites, continuidad, derivada y sus aplicaciones
 ├─ series.js            impropias, superficie y trabajo, sucesiones, series, Taylor, paramétricas, polares
 ├─ multivariable.js     vectores, rectas y planos, parciales, gradiente, Lagrange
 ├─ vectorial.js         integrales dobles y triples, jacobiano, campos, Green, Stokes, divergencia
 ├─ glosario.js          glosario (WIKI), bibliografía (CITE) e hitos (HIST)
 └─ timeline.js          eras, orden, numeración, planes y videos  ← se carga al final
docs/                    banner, gráficos del README, capturas, PDFs y TEMAS.md
```

El motor (`js/`) no tiene contenido: todo sale de `content/`. Agregar una sección es un `LV.push({...})` y una línea en `timeline.js`; los códigos `SEC-xx` se numeran solos.

---

## 🤝 Contribuir

Secciones, ejemplos, preguntas, términos del glosario, hitos históricos, paletas o traducciones: el paso a paso está en **[CONTRIBUTING.md](CONTRIBUTING.md)**. Dentro de la teoría se enlaza con `[[clave]]` y se cita con `[^fuente|§2.3]`.

```bash
git checkout -b mi-aporte && git commit -m "nuevo ejemplo de Stokes" && git push origin mi-aporte
```

## 📄 Licencia

[MIT](LICENSE). Los ejercicios de taller se citan con fines educativos; las fuentes enlazadas pertenecen a sus autores.

---

<a id="english"></a>
<div align="center">

## 🇬🇧 English

</div>

**Cálculo//** is an interactive, no-install study app that walks through **all of calculus as a timeline**: from exponent rules to Green’s, Stokes’ and the divergence theorems — 59 sections in 15 eras (Calc I, II and III).

- **Theory → step-by-step examples → simulators → quiz with XP**, in every section.
- **Wikipedia-style links**: 100 glossary terms auto-linked in the text, with hover previews (definition, formula, *Theory →*, *Example →*, Wikipedia, sources) and a back button.
- **Numbered citations** and per-section references (OpenStax, Paul’s Notes, MIT OCW, Stewart, 3Blue1Brown, original historical works).
- **History timeline** with 32 milestones, Archimedes to differential forms, each linked to its section.
- **8 color palettes** (light and dark) + custom accent, all driven by 12 CSS variables — ready to port to a native app ([docs/TEMAS.md](docs/TEMAS.md)). Installable as a PWA.

Run it: clone and open `index.html`, or `python -m http.server 8080`. The interface is available in Spanish and English; course content is in Spanish (translations welcome — see [CONTRIBUTING.md](CONTRIBUTING.md)).

<div align="center">

**`// FIN DEL EXPEDIENTE //`**

</div>
