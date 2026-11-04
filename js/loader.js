/* ============ CARGADOR DE CONTENIDO ============
   Carga content/<idioma>/<archivo>. Si un archivo no existe en ese idioma,
   usa la versión en español (content/es/). */
const CONTENT_FILES = ['course.js','references.js','sections.js','annotations.js','workshop.js','solutions.js','figures.js','parcial.js','replicate.js','fichas.js','taller4.js','calcguide.js','identify.js','sheet.js','glosario.js','diferencial.js','series.js','multivariable.js','vectorial.js','timeline.js'];
let CONTENT_LANG = LANG;

function loadScript(src){
  return new Promise((ok, fail)=>{ const s=document.createElement('script'); s.src=src; s.onload=()=>ok(src); s.onerror=()=>fail(src); document.body.appendChild(s); });
}
async function loadContent(){
  for(const f of CONTENT_FILES){
    try{ await loadScript(`content/${LANG}/${f}`); }
    catch(e){ CONTENT_LANG='es'; await loadScript(`content/es/${f}`); }
  }
  boot();
}
loadContent();
