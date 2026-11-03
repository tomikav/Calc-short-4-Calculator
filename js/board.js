/* ============ PIZARRÓN INDEPENDIENTE ============
   Los trazos vectoriales se guardan localmente para que el trabajo sobreviva
   a cambios de sección y recargas. La exportación PNG servirá de entrada futura
   para un detector de errores; por ahora no se envía nada a una IA. */
const BOARD_KEY='calc-whiteboard-v1';
const savedBoard=store(BOARD_KEY);
const boardState={
  strokes:Array.isArray(savedBoard)?savedBoard:[],
  current:null,
  pointerId:null,
  mode:'pen',
  color:'#111827',
  size:3,
  canvas:null,
  ctx:null
};

function boardToolsHTML(extraClass=''){
  return `<div class="board-tools ${extraClass}" role="toolbar" aria-label="${t('boardTitle')}">
    <button type="button" data-board-mode="pen" class="active" aria-pressed="true" onclick="setBoardMode('pen')">${t('boardPen')}</button>
    <button type="button" data-board-mode="eraser" aria-pressed="false" onclick="setBoardMode('eraser')">${t('boardEraser')}</button>
    <label>${t('boardColor')} <input id="boardcolor" type="color" value="${boardState.color}" aria-label="${t('boardColor')}"></label>
    <label>${t('boardSize')} <input id="boardsize" type="range" min="1" max="14" value="${boardState.size}" aria-label="${t('boardSize')}"></label>
    <span class="board-spacer"></span>
    <button type="button" onclick="undoBoard()">${t('boardUndo')}</button>
    <button type="button" onclick="clearBoard()">${t('boardClear')}</button>
    <button type="button" class="active" onclick="exportBoard()">${t('boardExport')}</button>
  </div>`;
}
function mountBoard(){
  boardState.canvas=document.getElementById('boardcanvas');
  if(!boardState.canvas) return;
  boardState.ctx=boardState.canvas.getContext('2d');
  const color=document.getElementById('boardcolor'),size=document.getElementById('boardsize');
  color.value=boardState.color; size.value=boardState.size;
  color.addEventListener('input',event=>{boardState.color=event.target.value;});
  size.addEventListener('input',event=>{boardState.size=Number(event.target.value);});
  boardState.canvas.addEventListener('pointerdown',boardPointerDown);
  boardState.canvas.addEventListener('pointermove',boardPointerMove);
  boardState.canvas.addEventListener('pointerup',boardPointerUp);
  boardState.canvas.addEventListener('pointercancel',boardPointerUp);
  setBoardMode(boardState.mode);
  resizeBoard();
}
function showBoard(){
  RET=null; showBack(); clearTimer(); window.scrollTo(0,0); document.body.classList.remove('printmode','quiz-fullscreen');
  app.innerHTML=`<section class="board-page">
    <div class="board-head">
      <button class="back" type="button" onclick="showMap()">${t('back')}</button>
      <div><h2>${t('boardTitle')}</h2><p>${t('boardIntro')}</p></div>
    </div>
    ${boardToolsHTML()}
    <div class="board-ai"><b>${t('boardAI')}</b>${t('boardAIHint')}</div>
    <div class="board-paper"><canvas id="boardcanvas" aria-label="Pizarrón para escribir y desarrollar ejercicios" role="img"></canvas></div>
  </section>`;
  mountBoard(); typeset(app);
}

function boardSize(){
  if(!boardState.canvas) return null;
  const rect=boardState.canvas.getBoundingClientRect();
  return rect.width&&rect.height?{rect,width:rect.width,height:rect.height}:null;
}
function resizeBoard(){
  const dimensions=boardSize(); if(!dimensions) return;
  const scale=window.devicePixelRatio||1;
  boardState.canvas.width=Math.round(dimensions.width*scale);
  boardState.canvas.height=Math.round(dimensions.height*scale);
  redrawBoard();
}
function redrawBoard(){
  const dimensions=boardSize(); if(!dimensions||!boardState.ctx) return;
  const {width,height}=dimensions,scale=window.devicePixelRatio||1,ctx=boardState.ctx;
  ctx.setTransform(scale,0,0,scale,0,0);
  ctx.clearRect(0,0,width,height);
  for(const stroke of boardState.strokes){
    if(!stroke.points?.length) continue;
    ctx.globalCompositeOperation=stroke.erase?'destination-out':'source-over';
    ctx.strokeStyle=stroke.color||'#111827'; ctx.lineWidth=stroke.size||3;
    ctx.lineCap='round'; ctx.lineJoin='round'; ctx.beginPath();
    ctx.moveTo(stroke.points[0].x*width,stroke.points[0].y*height);
    for(let i=1;i<stroke.points.length;i++) ctx.lineTo(stroke.points[i].x*width,stroke.points[i].y*height);
    if(stroke.points.length===1) ctx.lineTo(stroke.points[0].x*width+0.1,stroke.points[0].y*height+0.1);
    ctx.stroke();
  }
  ctx.globalCompositeOperation='source-over';
}
function boardPoint(event){
  const {rect}=boardSize();
  return {x:Math.max(0,Math.min(1,(event.clientX-rect.left)/rect.width)),y:Math.max(0,Math.min(1,(event.clientY-rect.top)/rect.height))};
}
function boardPointerDown(event){
  if(event.pointerType==='mouse'&&event.button!==0) return;
  const point=boardPoint(event);
  boardState.current={color:boardState.color,size:boardState.size,erase:boardState.mode==='eraser',points:[point]};
  boardState.strokes.push(boardState.current); boardState.pointerId=event.pointerId;
  try{boardState.canvas.setPointerCapture(event.pointerId);}catch{}
  redrawBoard(); event.preventDefault();
}
function boardPointerMove(event){
  if(!boardState.current||event.pointerId!==boardState.pointerId) return;
  boardState.current.points.push(boardPoint(event)); redrawBoard(); event.preventDefault();
}
function boardPointerUp(event){
  if(!boardState.current||event.pointerId!==boardState.pointerId) return;
  boardState.current=null; boardState.pointerId=null; saveBoard();
}
function saveBoard(){store(BOARD_KEY,boardState.strokes);}
function setBoardMode(mode){
  boardState.mode=mode;
  document.querySelectorAll('[data-board-mode]').forEach(button=>{
    const active=button.dataset.boardMode===mode;
    button.classList.toggle('active',active); button.setAttribute('aria-pressed',String(active));
  });
  if(boardState.canvas) boardState.canvas.style.cursor=mode==='eraser'?'cell':'crosshair';
}
function undoBoard(){
  if(boardState.current){boardState.strokes.pop();boardState.current=null;boardState.pointerId=null;}
  else boardState.strokes.pop();
  redrawBoard(); saveBoard();
}
function clearBoard(){boardState.strokes.length=0;boardState.current=null;boardState.pointerId=null;redrawBoard();saveBoard();}
function exportBoard(){
  const canvas=boardState.canvas,dimensions=boardSize(); if(!canvas||!dimensions) return;
  const scale=window.devicePixelRatio||1,out=document.createElement('canvas');
  out.width=canvas.width; out.height=canvas.height;
  const ctx=out.getContext('2d');
  ctx.fillStyle='#fff'; ctx.fillRect(0,0,out.width,out.height);
  ctx.strokeStyle='#e8e8e3'; ctx.lineWidth=scale;
  const grid=32*scale;
  for(let x=0;x<=out.width;x+=grid){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,out.height);ctx.stroke();}
  for(let y=0;y<=out.height;y+=grid){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(out.width,y);ctx.stroke();}
  ctx.drawImage(canvas,0,0);
  const link=document.createElement('a');link.download='pizarron-calculo.png';link.href=out.toDataURL('image/png');link.click();
}
window.addEventListener('resize',resizeBoard);
window.addEventListener('keydown',event=>{
  if(boardState.canvas&&event.ctrlKey&&event.key.toLowerCase()==='z'){event.preventDefault();undoBoard();}
});
