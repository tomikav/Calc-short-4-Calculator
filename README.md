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

*[ ENGLISH BRIEFING ↓ ](#-english-briefing)*

</div>

---

## `// 00` EXPEDIENTE

**Cálculo** es una interfaz de entrenamiento para dominar Cálculo Integral desde cero. No es un PDF ni un resumen: es una **línea de estudio escalonada** donde cada sección es un nodo que se desbloquea al superar el anterior. Empiezas en álgebra básica y escalas hasta áreas, volúmenes por discos, arandelas y secciones transversales, y longitud de curva.

Cada operación queda trazada. Cuando un ejemplo aplica una ley, la expresión aparece marcada con una **llave de color** que dice cuál ley es y lleva al punto exacto de la teoría donde se explica.

> ⚠ El sistema no da respuestas para memorizar: muestra **por qué** se hace cada paso.

---

## `// 01` MÓDULOS DEL SISTEMA

| MÓDULO | FUNCIÓN |
|---|---|
| `MAPA` | Red de 20 nodos en 7 fases. Cada nodo indica sus **requisitos** y **dónde se usa** después. |
| `TEORÍA` | Procedimientos completos, sin saltarse pasos. Fórmulas deducidas, errores comunes y casos especiales. |
| `EJEMPLOS` | Resolución paso a paso: `ENUNCIADO → DIBUJO → CORTES → PLANTEO → CÁLCULO → RESPUESTA`. |
| `SIMULADOR` | Graficar funciones punto por punto, dibujar regiones, rectángulos de área, discos, arandelas, cascarones y longitud de arco. |
| `EVALUACIÓN` | Combate contra un objetivo: vidas, rachas y XP. Cada fallo lleva a la teoría que hay que repasar. |
| `HOJA DE APUNTES` | Resumen por prioridad con un ejemplo en cada línea. Tiene versión para imprimir. |
| `MODO TV` | Interfaz ampliada para proyectar en pantalla grande. |
| `IDIOMAS` | Interfaz en español e inglés. El contenido se puede traducir por partes. |

---

## `// 02` REQUISITOS

| COMPONENTE | DETALLE |
|---|---|
| **Sistema operativo** | Windows, macOS o Linux. En celular o tablet funciona si lo sirves desde un servidor (ver opción C). |
| **Navegador** | Chrome, Edge, Firefox, Brave u Opera, en versión reciente. Safari también funciona. |
| **Conexión** | Internet al abrirlo: las fórmulas (MathJax) y las fuentes se cargan desde la red. |
| **Instalación** | Ninguna. No necesita Node, Python, base de datos ni compilar nada. |
| **Git** *(opcional)* | Solo si quieres clonarlo o contribuir. |

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

> **Progreso:** tu XP, las secciones completadas y la hoja de apuntes se guardan en el navegador (`localStorage`). Si cambias de navegador o borras los datos, empiezas de cero.

---

## `// 04` ARQUITECTURA

```
index.html              ── Interfaz principal
css/style.css           ── Estilos (rojo / negro / blanco)
js/
 ├─ core.js             ── Estado, utilidades y U(): llaves de color
 ├─ i18n.js             ── Textos de la interfaz por idioma
 ├─ app.js              ── Mapa, secciones, ejemplos, evaluación y hoja
 ├─ labs-calc.js        ── Simuladores de áreas, volúmenes y longitud
 ├─ labs-graph.js       ── Simuladores para graficar y dibujar regiones
 └─ loader.js           ── Carga el contenido del idioma activo
content/es/
 ├─ course.js           ── Nombre, fases, temas del parcial y ruta de estudio
 ├─ sections.js         ── Las 20 secciones: teoría, ejemplos y preguntas
 ├─ references.js       ── Colores de las leyes, enlaces a la teoría y videos
 ├─ annotations.js      ── Llaves de color dentro de los ejemplos
 ├─ workshop.js         ── Ejercicios de taller resueltos completos
 └─ sheet.js            ── Hoja de apuntes por prioridad
```

El motor (`js/`) no tiene contenido propio: todo sale de `content/`. Para agregar temas, materias o idiomas no hay que tocar el código.

---

## `// 05` RED DE ESTUDIO

```
FASE 1  FUNDAMENTOS ALGEBRAICOS ── exponentes · productos notables · ecuaciones
FASE 2  GRAFICAR ───────────────── funciones básicas · regiones
FASE 3  TRIGONOMETRÍA Y DERIVADAS
FASE 4  LA INTEGRAL ────────────── indefinida · sustitución · definida y TFC
FASE 5  MÉTODOS ────────────────── partes · trigonométricas · completar cuadrado
                                   sustitución trig · fracciones parciales
FASE 6  APLICACIONES ───────────── área · discos y arandelas · secciones
                                   transversales · cascarones · longitud de curva
FASE 7  EVALUACIÓN FINAL
```

---

## `// 06` ACCESO PARA COLABORADORES

El proyecto es abierto. Puedes agregar secciones, ejemplos, preguntas, idiomas o materias completas. El procedimiento está en [`CONTRIBUTING.md`](CONTRIBUTING.md).

```bash
git checkout -b mi-aporte
# ...cambios...
git commit -m "nuevo ejemplo de arandelas"
git push origin mi-aporte
```
Después abre un Pull Request.

---

## `// 07` LICENCIA

[MIT](LICENSE): libre para usar, copiar y modificar. Los ejercicios de taller se citan con fines educativos.

<div align="center">

**`// FIN DEL EXPEDIENTE //`**

</div>

---

## `// ENGLISH BRIEFING`

**Cálculo** is a step-by-step training interface for **Integral Calculus**: a progression of 20 unlockable nodes, from basic algebra up to areas, volumes (disks, washers, cross-sections) and arc length. Every rule applied in an example is highlighted with a colored brace that links to the exact part of the theory.

**Requirements:** Windows, macOS or Linux · a recent browser (Chrome, Edge, Firefox, Safari) · internet connection for math rendering · **no installation**.

**Run:**
```bash
git clone https://github.com/tomikav/Calc-short-4-Calculator.git
cd Calc-short-4-Calculator
# Windows: start index.html   |   macOS: open index.html   |   Linux: xdg-open index.html
```
Or serve it locally with `python -m http.server 8080` and open `http://localhost:8080`.

**Languages:** the interface is available in Spanish and English. The course content is in Spanish for now; translations are welcome (see [`CONTRIBUTING.md`](CONTRIBUTING.md)).

**License:** MIT.
