# Cómo contribuir

Gracias por querer mejorar el proyecto. Todo el contenido vive en `content/<idioma>/` y son archivos JavaScript con datos. No hace falta saber programar mucho: casi todo es copiar un bloque existente y cambiar el texto.

Las fórmulas se escriben en LaTeX dentro de `R\`...\``: `\(...\)` para fórmulas en línea y `\[...\]` para fórmulas centradas.

## 1. Agregar una sección

En `content/es/sections.js`, dentro del arreglo `LV`, agrega un objeto como este:

```js
{ id:'mi-tema', code:'SEC-20', g:'f6', n:'Nombre del tema', sub:'Subtítulo corto', tgt:'NOMBRE_DEL_OBJETIVO',
  req:['area'],                       // ids de las secciones que se necesitan antes
  uses:'Dónde se usa este tema',
  lab:'area',                         // opcional: simulador (ver js/labs-*.js)
  lore: R`
    <div class="why">Por qué importa.</div>
    <h3>Idea</h3>
    <p>Explicación con fórmulas \(x^2\).</p>
    <div class="formula">\[V=\int_a^bA(x)\,dx\]</div>
    <ol class="recipe"><li>Paso 1</li><li>Paso 2</li></ol>
    <div class="tip">Consejo.</div>
    <div class="trap">Error común.</div>`,
  ex:[ /* ejemplos, ver punto 2 */ ],
  qs:[ /* preguntas, ver punto 3 */ ],
},
```

- `g` es la fase del mapa; las fases están en `content/es/course.js` (`groups`).
- El orden de las secciones en el mapa es el orden del arreglo.

## 2. Agregar un ejemplo resuelto

```js
{ t:'Taller 4 · #5', q:R`Enunciado del ejercicio`, s:[
  R`{{DIB}} Descripción del dibujo`,
  R`{{PLA}} \(V=\pi\int_0^4 ${U('x^2','discoF','R²')}\,dx\)`,
  R`{{CAL}} Cálculo`,
  R`{{RES}} \(V=8\pi\ \text{u}^3\)`]}
```

- Etapas opcionales al inicio de cada paso: `{{ENU}}` enunciado, `{{DIB}}` dibujo, `{{COR}}` cortes, `{{PLA}}` planteo, `{{CAL}}` cálculo, `{{RES}}` respuesta.
- `U(expresión, clave, etiqueta, color)` dibuja la llave de color debajo de la expresión. La `clave` sale de `REF`/`COL` en `references.js`; la etiqueta y el color son opcionales.
- Si el título cumple `COURSE.realPattern` (por defecto contiene "Taller"), se marca en rojo como ejercicio de taller.
- Para que cada paso muestre botones hacia la teoría, agrega en `EXREF` (en `references.js`) una lista de claves por paso: `EXREF['mi-tema']['Taller 4 · #5'] = [['discoF'],[],...]`.

## 3. Agregar una pregunta

```js
{ q:R`¿Pregunta?`, o:['Correcta','Incorrecta 1','Incorrecta 2','Incorrecta 3'], e:'Explicación', h:'Pista' }
```

La **primera opción es siempre la correcta**; la app las mezcla al mostrarlas.

## 4. Agregar una referencia a la teoría

En `references.js`:

```js
REF.miLey = ['mi-tema', 'Texto que aparece en el <h3>', 'Nombre que se ve en el botón'];
COL.miLey = '#0057ff';
```

El botón lleva al primer `<h3>` de esa sección que contenga ese texto.

## 5. Agregar líneas a la hoja de apuntes

En `sheet.js`, dentro de `HOJA2`: `[prioridad, idSección, 'Etiqueta', 'fórmula o texto', 'ejemplo']`. La prioridad 0 es "antes de cada ejercicio".

## 6. Agregar o traducir un idioma

1. En `js/i18n.js`, copia el bloque `es` dentro de `I18N`, cámbiale la clave (por ejemplo `pt`), traduce los textos y agrégalo a `LANGS`.
2. Para traducir el contenido, crea `content/pt/` y copia ahí los archivos de `content/es/` que vayas traduciendo. Los que no existan se cargan en español automáticamente, así que puedes traducir de a poco.
3. Si traduces `sections.js`, **no cambies los `id`**: el progreso y las referencias dependen de ellos.

## 7. Una materia nueva

Copia la carpeta `content/es/` completa, cambia `course.js` y reemplaza las secciones. Puedes tenerla en otra rama o en un repositorio aparte.

## Antes de enviar

- Abre `index.html` y revisa que las fórmulas se vean (si una sale en rojo o como texto, hay un error de LaTeX).
- Revisa con un ejemplo numérico que los resultados sean correctos.
- Usa mensajes de commit cortos y claros.
