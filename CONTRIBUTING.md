# Cómo contribuir

Gracias por querer mejorar el proyecto. Todo el contenido vive en `content/<idioma>/` y son archivos JavaScript con datos. No hace falta saber programar mucho: casi todo es copiar un bloque existente y cambiar el texto.

Las fórmulas se escriben en LaTeX dentro de `R\`...\``: `\(...\)` para fórmulas en línea y `\[...\]` para fórmulas centradas.

## 1. Agregar una sección

Las secciones nuevas van en el archivo de su área (`diferencial.js`, `series.js`, `multivariable.js`, `vectorial.js`, o uno nuevo) con `LV.push({...})`:

```js
LV.push({ id:'mi-tema', n:'Nombre del tema', sub:'Subtítulo corto', tgt:'NOMBRE_DEL_OBJETIVO',
  req:['area'],                       // ids de las secciones que se necesitan antes
  uses:'Dónde se usa este tema',
  cites:['osc2|§2.3','paul2'],        // bibliografía al final (claves de CITE en glosario.js)
  see:['tfc','riemann'],              // "Ver también" (claves de WIKI)
  lab:'area',                         // opcional: simulador (ver js/labs-*.js)
  lore: R`
    <div class="why">Por qué importa. Se conecta con la [[derivada]] y la [[tfc|integral]][^osc1|§5.3].</div>
    <h3>Idea</h3>
    <p>Explicación con fórmulas \(x^2\).</p>
    <div class="formula">\[V=\int_a^bA(x)\,dx\]</div>
    <ol class="recipe"><li>Paso 1</li><li>Paso 2</li></ol>
    <div class="tip">Consejo.</div>
    <div class="trap">Error común.</div>`,
  ex:[ /* ejemplos, ver punto 2 */ ],
  qs:[ /* preguntas, ver punto 3 */ ],
});
```

Luego agrega su `id` en `ORDEN` dentro de `content/es/timeline.js`, en la era que corresponda. **No escribas `code` ni `g`**: `timeline.js` numera todas las secciones (`SEC-00`, `SEC-01`…), asigna la era y actualiza cualquier "SEC-xx" que aparezca en los textos.

### Enlaces tipo Wikipedia y citas

| Marcado | Resultado |
|---|---|
| `[[clave]]` | enlace azul al término del glosario, con vista previa al pasar el mouse |
| `[[clave\|texto]]` | lo mismo, mostrando otro texto |
| `[^clave]` | cita numerada `[1]` que salta a la bibliografía de la sección |
| `[^clave\|§2.3]` | cita con capítulo o página |

Además, la **primera aparición** de cada término del glosario se enlaza sola (por eso conviene que el glosario tenga buenos alias).

## 1b. Agregar un término al glosario

En `content/es/glosario.js`, dentro de `WIKI`:

```js
'mi-termino':{ t:'Título', d:'Definición de una o dos líneas.', f:R`\int f\,dx`,
  sec:'mi-tema', h:'Idea',            // sección y título <h3> al que lleva "TEORÍA →"
  ex:0,                               // índice del ejemplo para "EJEMPLO →" (opcional)
  w:'Artículo_de_Wikipedia',          // enlace a Wikipedia en español (opcional)
  c:['osc2|§2.3'],                    // fuentes (opcional)
  al:['palabra','otra forma'] },      // se enlazan solas en la teoría
```

Para agregar una fuente, agrégala en `CITE`; para un hito histórico, en `HIST` (con `sec` para enlazar la sección).

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

El procedimiento que se muestra al responder va en `content/<idioma>/solutions.js`, por índice de pregunta:

```js
SOL.miTema = { 0:[R`Paso 1 explicado`, R`Paso 2`, R`Resultado`] };
```

Para una pregunta difícil (+20 XP, etiqueta DIFÍCIL), agrégala en `HARD` con su propio `sol`:

```js
HARD.miTema = [{ hard:true, q:R`...`, o:[...], e:'...', h:'...', sol:[R`...`] }];
```

Para mostrar una gráfica junto al procedimiento, agrégala en `content/<idioma>/figures.js` con el mismo índice:

```js
FIG.miTema = { 0:{ xr:[0,3], yr:[0,5], fills:[{top:x=>4-x*x, a:0, b:2, c:'blue'}],
                   curves:[{f:x=>4-x*x, c:'blue', lab:'4 − x²'}], axis:{y:0}, disk:true,
                   slice:{x:1, top:x=>4-x*x} } };
```

Las opciones disponibles (regiones, rebanadas, ejes de giro, secciones, arcos, etiquetas) están descritas al inicio de `js/fig.js`.

## 4. Agregar una referencia a la teoría

En `references.js`:

```js
REF.miLey = ['mi-tema', 'Texto que aparece en el <h3>', 'Nombre que se ve en el botón'];
COL.miLey = '#0057ff';
```

El botón lleva al primer `<h3>` de esa sección que contenga ese texto.

## 5. Crear un plan de estudio

En `content/es/timeline.js`, dentro de `COURSE.plans`, agrega un bloque:

```js
{ id:'mi-plan', code:'PLAN-R', icon:'target', accent:'#ff2a1f', name:'Repaso de volúmenes', range:'Discos → Secciones transversales',
  desc:'Descripción corta que aparece en la pantalla de inicio.',
  sections:['discos','secciones','cascarones'] }   // ids en orden; 'all' usa todas; range('a','b') toma un tramo
```

`icon` puede ser `target`, `chip` o `network`. El plan aparece en la pantalla de inicio y, dentro del plan, cada sección se desbloquea al superar la anterior del recorrido.

## 5b. Una era nueva

En `COURSE.groups` (en `timeline.js`): `clave:['ERA 15','TÍTULO','Descripción','años','protagonistas','#color']`, y en `ORDEN` la lista de ids de esa era. El color pinta la línea del mapa y la pantalla de historia.

## 5c. Una paleta de colores nueva

Ver [`docs/TEMAS.md`](docs/TEMAS.md).

## 6. Agregar líneas a la hoja de apuntes

En `sheet.js`, dentro de `HOJA2`: `[prioridad, idSección, 'Etiqueta', 'fórmula o texto', 'ejemplo']`. La prioridad 0 es "antes de cada ejercicio".

## 7. Agregar o traducir un idioma

1. En `js/i18n.js`, copia el bloque `es` dentro de `I18N`, cámbiale la clave (por ejemplo `pt`), traduce los textos y agrégalo a `LANGS`.
2. Para traducir el contenido, crea `content/pt/` y copia ahí los archivos de `content/es/` que vayas traduciendo. Los que no existan se cargan en español automáticamente, así que puedes traducir de a poco.
3. Si traduces `sections.js`, **no cambies los `id`**: el progreso y las referencias dependen de ellos.

## 8. Una materia nueva

Copia la carpeta `content/es/` completa, cambia `course.js` y reemplaza las secciones. Puedes tenerla en otra rama o en un repositorio aparte.

## Antes de enviar

- Abre `index.html` y revisa que las fórmulas se vean (si una sale en rojo o como texto, hay un error de LaTeX).
- Pasa el mouse por los enlaces azules nuevos: la vista previa debe mostrar la definición y "TEORÍA →" debe llevar al título correcto.
- Revisa con un ejemplo numérico que los resultados sean correctos.
- Usa mensajes de commit cortos y claros.
