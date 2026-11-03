# Cálculo

Guía de estudio interactiva para **Cálculo Integral**, en forma de línea de estudio escalonada: empiezas en álgebra básica y subes hasta áreas, volúmenes y longitud de curva. Cada sección tiene teoría explicada paso a paso, ejemplos resueltos con las leyes marcadas en color, simuladores, videos de apoyo y una evaluación tipo juego.

*[English below](#english)*

---

## Qué tiene

- **Mapa por fases**: cada sección dice qué necesitas saber antes y dónde lo vas a usar.
- **Teoría** con cada procedimiento explicado, sin saltarse pasos.
- **Ejemplos resueltos** que se revelan paso a paso. Cada paso marca con una llave de color la ley que usa y tiene un botón que lleva al punto exacto de la teoría.
- **Ejercicios de taller** resueltos completos: enunciado, dibujo, cortes, planteo, cálculo y respuesta con unidades.
- **Simuladores**: graficar funciones punto por punto, dibujar regiones, áreas con rectángulos, discos, arandelas, cascarones y longitud de curva.
- **Evaluación** con vidas, rachas y XP.
- **Hoja de apuntes** ordenada por prioridad, con un ejemplo en cada línea y versión para imprimir.
- **Modo TV** para proyectar y **soporte de idiomas** (español e inglés en la interfaz).

## Cómo usarlo

No necesita instalación ni servidor.

1. Descarga o clona el repositorio.
2. Abre `index.html` en el navegador (doble clic).

Necesita internet para las fórmulas (MathJax) y las fuentes. Tu progreso se guarda en el navegador que uses.

## Estructura

```
index.html            Página principal
css/style.css         Estilos
js/core.js            Estado, utilidades y la función U() de las llaves de color
js/i18n.js            Textos de la interfaz en cada idioma
js/app.js             Mapa, secciones, ejemplos, evaluación y hoja de apuntes
js/labs-*.js          Simuladores
js/loader.js          Carga el contenido del idioma elegido
content/es/           Todo el contenido de la materia (en español)
  course.js           Nombre, fases del mapa, temas del parcial y ruta de estudio
  sections.js         Las secciones: teoría, ejemplos y preguntas
  references.js       Colores de las leyes, enlaces a la teoría y videos
  annotations.js      Llaves de color dentro de los ejemplos
  workshop.js         Ejercicios de taller resueltos
  sheet.js            Hoja de apuntes
```

La app no tiene contenido propio: todo sale de `content/`. Para agregar temas, materias o idiomas no hay que tocar `js/`.

## Contribuir

Lee [CONTRIBUTING.md](CONTRIBUTING.md). Ahí está explicado cómo agregar una sección, un ejemplo, una pregunta o un idioma.

## Licencia

[MIT](LICENSE). Puedes usarlo, copiarlo y modificarlo. Los ejercicios de taller se citan con fines educativos.

---

<a id="english"></a>
## English

**Cálculo** is an interactive study guide for **Integral Calculus**, built as a step-by-step learning path: it starts from basic algebra and climbs to areas, volumes and arc length. Each section has theory, worked examples where every rule is highlighted in color and linked to the exact part of the theory, simulators, support videos and a game-style quiz.

**Run it:** download the repo and open `index.html` in your browser. No install or server needed (internet is required for the math rendering).

**Languages:** the interface is available in Spanish and English. The course content is in Spanish for now; translations are very welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

**License:** [MIT](LICENSE).
