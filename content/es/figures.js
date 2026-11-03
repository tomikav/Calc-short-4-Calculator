/* ============ GRÁFICAS DE LAS PREGUNTAS Y DE LOS TEMAS ============
   FIG[idSección][índiceDePregunta] = spec de figSVG (ver js/fig.js).
   Los índices incluyen las preguntas difíciles (van al final de cada lista).
   EXAM_FIG[k] = miniatura para la tarjeta k de los temas del parcial. */
const _pi=Math.PI, PT=[[0,'0'],[_pi/2,'π/2'],[_pi,'π'],[3*_pi/2,'3π/2'],[2*_pi,'2π']];
const sq=x=>Math.sqrt(Math.max(0,x));
const FIG = {
 definida:{
  0:{xr:[0,3.4],yr:[-1.4,3.6],fills:[{top:x=>0,bot:x=>x*x-2*x,a:1,b:2,c:'red'},{top:x=>x*x-2*x,bot:x=>0,a:2,b:3,c:'blue'}],curves:[{f:x=>x*x-2*x,c:'ink',lab:'x²−2x',lx:2.6}],labels:[[1.5,-.45,'−',`red`],[2.75,1.1,'+','blue']],pts:[[1,-1],[3,3]]},
  2:{xr:[0,2*_pi],yr:[-1.4,1.4],xt:PT,yt:[[1,'1'],[-1,'−1']],fills:[{top:Math.sin,a:0,b:_pi,c:'blue'},{top:x=>0,bot:Math.sin,a:_pi,b:2*_pi,c:'red'}],curves:[{f:Math.sin,c:'ink',lab:'sen x',lx:.35}],labels:[[_pi/2,.45,'+2','blue'],[3*_pi/2,-.55,'−2','red']]},
  4:{xr:[-3.3,3.3],yr:[-3.2,3.2],fills:[{top:x=>Math.max(0,x*Math.cos(x)),bot:x=>Math.min(0,x*Math.cos(x)),a:-3,b:3,c:'purple'}],curves:[{f:x=>x*Math.cos(x),c:'ink',lab:'x cos x',lx:.6}],labels:[[-2,-1.6,'se cancelan','purple']]},
  5:{xr:[-3.6,3.6],yr:[-.6,3.6],fills:[{top:x=>sq(9-x*x),a:-3,b:3,c:'blue'}],curves:[{f:x=>sq(9-x*x),a:-3,b:3,c:'blue',lab:'√(9−x²)',lx:1.6}],labels:[[0,1.2,'9π/2','ink']]},
  6:{xr:[0,1.8],yr:[-.1,.5],xt:[[_pi/4,'π/4'],[_pi/2,'π/2']],yt:[[.25,'¼']],fills:[{top:x=>Math.sin(x)*Math.cos(x)**2,a:0,b:_pi/2,c:'green'}],curves:[{f:x=>Math.sin(x)*Math.cos(x)**2,c:'green',lab:'sen x cos²x',lx:.62}]},
  7:{xr:[-.2,1],yr:[0,.8],xt:[[Math.LN2,'ln 2']],fills:[{top:x=>Math.exp(x)/(1+Math.exp(x)),a:0,b:Math.LN2,c:'blue'}],curves:[{f:x=>Math.exp(x)/(1+Math.exp(x)),c:'blue',lab:'eˣ/(1+eˣ)',lx:.1}]},
  8:{xr:[-1.6,2.6],yr:[-.4,2.6],fills:[{top:Math.abs,a:-1,b:0,c:'yel'},{top:Math.abs,a:0,b:2,c:'blue'}],curves:[{f:Math.abs,c:'ink',lab:'|x|',lx:1.5}],labels:[[-.6,.2,'½','yel'],[1.4,.4,'2','blue']]},
 },
 area:{
  0:{xr:[-.4,2.6],yr:[-.4,4.6],fills:[{top:x=>2*x,bot:x=>x*x,a:0,b:2,c:'blue'}],curves:[{f:x=>2*x,c:'red',lab:'y = 2x (arriba)',lx:.55},{f:x=>x*x,c:'ink',lab:'y = x²',lx:1.75}],slice:{x:1,top:x=>2*x,bot:x=>x*x,c:'yel'},pts:[[0,0],[2,4,'(2, 4)']]},
  1:{xr:[-.4,2.6],yr:[-.4,4.6],fills:[{top:x=>2*x,bot:x=>x*x,a:0,b:2,c:'blue'}],curves:[{f:x=>2*x,c:'red',lab:'2x',lx:.6},{f:x=>x*x,c:'ink',lab:'x²',lx:1.8}],slice:{x:1,top:x=>2*x,bot:x=>x*x,c:'yel'},labels:[[1.35,1.6,'4/3','blue']]},
  2:{xr:[-.5,4.8],yr:[-2.4,2.6],fills:[{dir:'y',right:y=>y+2,left:y=>y*y,a:-1,b:2,c:'blue'}],ycurves:[{g:y=>y*y,c:'ink',lab:'x = y²',ly:-1.9,a:-2.2,b:2.2},{g:y=>y+2,c:'red',lab:'x = y + 2',ly:1.5,a:-2.4,b:2.6}],slice:{y:.5,right:y=>y+2,left:y=>y*y,c:'yel'},pts:[[1,-1,'(1, −1)'],[4,2,'(4, 2)']]},
  3:{xr:[-.5,4.8],yr:[-1.6,2.6],fills:[{dir:'y',right:y=>y+2,left:y=>y*y,a:-1,b:2,c:'blue'}],ycurves:[{g:y=>y*y,c:'ink',lab:'izq: y²',ly:-1.3,a:-1.5,b:2.2},{g:y=>y+2,c:'red',lab:'der: y + 2',ly:1.3,a:-1.6,b:2.6}],slice:{y:.5,right:y=>y+2,left:y=>y*y,c:'yel'},labels:[[2.4,.9,'9/2','blue']]},
  4:{xr:[0,_pi],yr:[-1.2,1.2],xt:[[_pi/4,'π/4'],[_pi/2,'π/2'],[_pi,'π']],fills:[{top:Math.cos,bot:Math.sin,a:0,b:_pi/4,c:'blue'},{top:Math.sin,bot:Math.cos,a:_pi/4,b:_pi,c:'red'}],curves:[{f:Math.cos,c:'blue',lab:'cos x',lx:2.4},{f:Math.sin,c:'red',lab:'sen x',lx:1.2}],pts:[[_pi/4,Math.SQRT1_2,'se cruzan']]},
  5:{xr:[-2.2,2.2],yr:[-.4,4.4],fills:[{top:x=>4-x*x,bot:x=>x*x,a:-Math.SQRT2,b:Math.SQRT2,c:'blue'}],curves:[{f:x=>4-x*x,c:'red',lab:'4 − x²',lx:.3},{f:x=>x*x,c:'ink',lab:'x²',lx:1.65}],slice:{x:.5,top:x=>4-x*x,bot:x=>x*x,c:'yel'},pts:[[-Math.SQRT2,2,'−√2'],[Math.SQRT2,2,'√2']]},
  6:{xr:[-2.6,2.6],yr:[-2.8,2.8],fills:[{top:x=>x*x*x-3*x,bot:x=>x,a:-2,b:0,c:'yel'},{top:x=>x,bot:x=>x*x*x-3*x,a:0,b:2,c:'blue'}],curves:[{f:x=>x*x*x-3*x,c:'ink',lab:'x³ − 3x',lx:-2.45},{f:x=>x,c:'red',lab:'y = x',lx:1.7}],pts:[[-2,-2],[0,0],[2,2]]},
  7:{xr:[-.4,4.8],yr:[-.6,2.6],fills:[{dir:'y',right:y=>y+2,left:y=>y*y,a:0,b:2,c:'blue'}],curves:[{f:sq,c:'ink',lab:'y = √x',lx:.8},{f:x=>x-2,c:'red',lab:'y = x − 2',lx:3.2}],slice:{y:1,right:y=>y+2,left:y=>y*y,c:'yel'},pts:[[4,2,'(4, 2)'],[2,0]]},
 },
 discos:{
  0:{xr:[-.3,4.6],yr:[-2.6,2.6],fills:[{top:sq,a:0,b:4,c:'blue'}],curves:[{f:sq,c:'blue',lab:'R = √x',lx:.6,a:0,b:4}],axis:{y:0,lab:'eje x'},mirror:true,disk:true,slice:{x:2.5,top:sq,c:'red'}},
  1:{xr:[-.15,1.3],yr:[-1.2,1.2],fills:[{top:x=>x,bot:x=>x*x,a:0,b:1,c:'blue'}],curves:[{f:x=>x,c:'red',lab:'R = x',lx:.2,a:0,b:1},{f:x=>x*x,c:'ink',lab:'r = x²',lx:.85,a:0,b:1}],axis:{y:0,lab:'eje x'},mirror:true,washer:true,slice:{x:.6,top:x=>x,bot:x=>x*x,c:'red'}},
  2:{xr:[-.15,1.3],yr:[-.3,2.3],fills:[{top:x=>x,bot:x=>x*x,a:0,b:1,c:'blue'}],curves:[{f:x=>x,c:'ink',lab:'x: cercana',lx:.15,a:0,b:1},{f:x=>x*x,c:'red',lab:'x²: lejana',lx:.7,a:0,b:1}],axis:{y:2,lab:'y = 2'},washer:true,slice:{x:.6,top:x=>x,bot:x=>x*x,c:'red'},labels:[[.95,1.45,'R = 2 − x²','red'],[.95,1.15,'r = 2 − x','ink']]},
  3:{xr:[-.3,2.5],yr:[-4.4,4.4],fills:[{top:x=>4-x*x,a:0,b:2,c:'blue'}],curves:[{f:x=>4-x*x,c:'blue',lab:'R = 4 − x²',lx:.9,a:0,b:2}],axis:{y:0,lab:'eje x'},mirror:true,disk:true,slice:{x:.8,top:x=>4-x*x,c:'red'}},
  4:{xr:[-2.6,2.6],yr:[-.4,4.4],fills:[{top:x=>4-x*x,a:0,b:2,c:'blue'}],curves:[{f:x=>4-x*x,c:'blue',lab:'x = √(4 − y)',lx:1.3,a:0,b:2}],axis:{x:0,lab:'eje y'},mirror:true,disk:true,slice:{y:2,right:y=>sq(4-y),c:'red'}},
  6:{xr:[-1.4,1.6],yr:[-.3,1.3],fills:[{top:x=>1-x*x,a:-1,b:1,c:'blue',hatch:true}],curves:[{f:x=>1-x*x,c:'blue',lab:'s = 1 − x²',lx:-1.3}],section:{x:.3,top:x=>1-x*x,c:'purple'},labels:[[.95,.95,'cuadrado','purple']]},
  7:{xr:[-1.6,1.5],yr:[-.3,1.4],fills:[{top:sq,bot:x=>x*x,a:0,b:1,c:'blue'}],curves:[{f:sq,c:'red',lab:'x = √y (lejana)',lx:.05,a:0,b:1.4},{f:x=>x*x,c:'ink',lab:'x = y²',lx:1.02,a:0,b:1.18}],axis:{x:-1,lab:'x = −1'},washer:true,slice:{y:.5,right:y=>sq(y),left:y=>y*y,c:'red'}},
  8:{xr:[-1.1,1.1],yr:[-1.7,1.7],xt:[[-_pi/4,'−π/4'],[_pi/4,'π/4']],fills:[{top:x=>1/Math.cos(x),a:-_pi/4,b:_pi/4,c:'blue'}],curves:[{f:x=>1/Math.cos(x),a:-_pi/4,b:_pi/4,c:'blue',lab:'sec x',lx:-.2}],axis:{y:0,lab:'eje x'},mirror:true,disk:true,slice:{x:.4,top:x=>1/Math.cos(x),c:'red'}},
 },
 secciones:{
  0:{xr:[-2.6,3],yr:[-2.9,3.1],fills:[{top:x=>sq(4-x*x),bot:x=>-sq(4-x*x),a:-2,b:2,c:'blue',hatch:true}],curves:[{f:x=>sq(4-x*x),c:'blue',a:-2,b:2},{f:x=>-sq(4-x*x),c:'blue',a:-2,b:2}],section:{x:.8,top:x=>sq(4-x*x),bot:x=>-sq(4-x*x),c:'purple'},labels:[[.2,-2.6,'s = 2√(4 − x²)','purple']]},
  1:{xr:[-2.6,3],yr:[-2.9,3.1],fills:[{top:x=>sq(4-x*x),bot:x=>-sq(4-x*x),a:-2,b:2,c:'blue',hatch:true}],curves:[{f:x=>sq(4-x*x),c:'blue',a:-2,b:2},{f:x=>-sq(4-x*x),c:'blue',a:-2,b:2}],section:{x:-.6,top:x=>sq(4-x*x),bot:x=>-sq(4-x*x),c:'purple'},labels:[[.2,-2.6,'A = s² = 4(4 − x²)','purple']]},
  3:{xr:[-1.8,2.1],yr:[-.3,1.4],xt:[[-_pi/2,'−π/2'],[0,'0'],[_pi/2,'π/2']],fills:[{top:x=>sq(Math.cos(x)),a:-_pi/2,b:_pi/2,c:'blue',hatch:true}],curves:[{f:x=>sq(Math.cos(x)),a:-_pi/2,b:_pi/2,c:'blue',lab:'√cos x',lx:-1.5}],section:{x:.2,top:x=>sq(Math.cos(x)),c:'purple'},labels:[[1.2,1.15,'A = cos x','purple']]},
  5:{xr:[-1.4,1.8],yr:[-1.3,1.3],fills:[{top:x=>sq(1-x*x),bot:x=>-sq(1-x*x),a:-1,b:1,c:'blue',hatch:true}],curves:[{f:x=>sq(1-x*x),a:-1,b:1,c:'blue'},{f:x=>-sq(1-x*x),a:-1,b:1,c:'blue'}],section:{x:.1,top:x=>sq(1-x*x),bot:x=>-sq(1-x*x),c:'purple',shape:'tri'},labels:[[1.15,-1.05,'equilátero','purple']]},
  6:{xr:[-1.4,1.8],yr:[-.3,1.4],fills:[{top:x=>1,bot:x=>x*x,a:-1,b:1,c:'blue',hatch:true}],curves:[{f:x=>x*x,c:'blue',lab:'x²',lx:-1.2},{f:x=>1,a:-1,b:1,c:'ink'}],section:{x:.2,top:x=>1,bot:x=>x*x,c:'purple',shape:'semi'},labels:[[1.15,1.2,'semicírculo','purple']]},
 },
 longitud:{
  0:{xr:[0,2.4],yr:[0,8],curves:[{f:x=>2/3*(x*x+1)**1.5,c:'ink',dash:true}],arc:{f:x=>2/3*(x*x+1)**1.5,a:1,b:2,c:'red'},labels:[[1.15,5.2,'L de 1 a 2','red']]},
  1:{xr:[0,2.4],yr:[0,8],curves:[{f:x=>2/3*(x*x+1)**1.5,c:'ink',dash:true}],arc:{f:x=>2/3*(x*x+1)**1.5,a:1,b:2,c:'red'},labels:[[1.1,5.2,'17/3','red']]},
  2:{xr:[0,3.5],yr:[0,5],curves:[{f:x=>(x**4+3)/(6*x),a:.3,c:'ink',dash:true}],arc:{f:x=>(x**4+3)/(6*x),a:1,b:3,c:'red'},labels:[[1.6,3,'14/3','red']]},
  3:{xr:[0,1.3],yr:[0,4.6],curves:[{f:x=>4*x**1.5,c:'ink',dash:true}],arc:{f:x=>4*x**1.5,a:0,b:1,c:'red'},labels:[[.35,2.8,'y = 4x^{3/2}'.replace('^{3/2}','³ᐟ²'),'red']]},
  4:{xr:[-.05,.45],yr:[-.05,.6],gx:.1,gy:.1,params:[{px:t=>t**3/3,py:t=>t*t/2,t0:0,t1:1.1,c:'ink'}],arc:{px:t=>t**3/3,py:t=>t*t/2,t0:0,t1:1,c:'red'},labels:[[.22,.5,'t: 0 → 1','red']]},
  5:{xr:[0,3.6],yr:[0,10],curves:[{f:x=>2*x+3,c:'ink',dash:true}],arc:{f:x=>2*x+3,a:1,b:3,c:'red'},pts:[[1,5,'(1, 5)'],[3,9,'(3, 9)']]},
  6:{xr:[-1.5,5.5],yr:[-10,.5],gx:2,gy:2,params:[{px:t=>4*Math.sin(t),py:t=>4*Math.cos(t)-5,t0:0,t1:2*_pi,c:'ink'}],arc:{px:t=>4*Math.sin(t),py:t=>4*Math.cos(t)-5,t0:0,t1:_pi,c:'red'},labels:[[2.6,-5,'4π','red']]},
  7:{xr:[-.1,.95],yr:[-.45,.1],gx:.2,gy:.1,xt:[[_pi/4,'π/4']],curves:[{f:x=>Math.log(Math.cos(x)),c:'ink',dash:true,a:0,b:.9}],arc:{f:x=>Math.log(Math.cos(x)),a:0,b:_pi/4,c:'red'},labels:[[.35,-.25,'ln(cos x)','red']]},
  8:{xr:[.6,3],yr:[0,2],xt:[[1,'1'],[Math.E,'e']],curves:[{f:x=>x*x/4-Math.log(x)/2,c:'ink',dash:true}],arc:{f:x=>x*x/4-Math.log(x)/2,a:1,b:Math.E,c:'red'}},
 },
 boss:{
  6:{xr:[-1.4,1.4],yr:[-1.4,1.4],fills:[{top:x=>x*x*x,bot:x=>x,a:-1,b:0,c:'yel'},{top:x=>x,bot:x=>x*x*x,a:0,b:1,c:'blue'}],curves:[{f:x=>x*x*x,c:'ink',lab:'x³',lx:1.05},{f:x=>x,c:'red',lab:'x',lx:.55}],labels:[[-.5,-.2,'¼','yel'],[.5,.15,'¼','blue']]},
  7:{xr:[-4.6,4.6],yr:[-.3,2.4],fills:[{top:sq,a:0,b:4,c:'blue'}],curves:[{f:sq,c:'blue',lab:'altura √x',lx:.3,a:0,b:4}],axis:{x:0,lab:'eje y'},mirror:true,slice:{x:2.5,top:sq,c:'red'},labels:[[2.5,-.15,'radio x','red']]},
  8:{xr:[-2.5,2.5],yr:[-1.6,4.6],fills:[{top:x=>4,bot:x=>x*x,a:-2,b:2,c:'blue'}],curves:[{f:x=>4,a:-2,b:2,c:'red',lab:'lejana: y = 4',lx:-2.3},{f:x=>x*x,c:'ink',lab:'cercana: x²',lx:1.6}],axis:{y:-1,lab:'y = −1'},washer:true,slice:{x:1,top:x=>4,bot:x=>x*x,c:'red'}},
  9:{xr:[.6,2.4],yr:[0,2.2],curves:[{f:x=>x*x/2-Math.log(x)/4,c:'ink',dash:true}],arc:{f:x=>x*x/2-Math.log(x)/4,a:1,b:2,c:'red'}},
  10:{xr:[-.3,1.4],yr:[-3,3],fills:[{top:Math.exp,a:0,b:1,c:'blue'}],curves:[{f:Math.exp,c:'blue',lab:'R = eˣ',lx:.1,a:0,b:1}],axis:{y:0,lab:'eje x'},mirror:true,disk:true,slice:{x:.6,top:Math.exp,c:'red'}},
  11:{xr:[.6,2.4],yr:[0,3.3],curves:[{f:x=>x**3/3+1/(4*x),c:'ink',dash:true}],arc:{f:x=>x**3/3+1/(4*x),a:1,b:2,c:'red'}},
 },
};
const EXAM_FIG=[
  {xr:[0,3],yr:[0,2.2],fills:[{top:x=>.9+.5*Math.sin(1.8*x),a:.4,b:2.6,c:'blue'}],curves:[{f:x=>.9+.5*Math.sin(1.8*x),c:'blue'}]},
  {xr:[-.2,2.2],yr:[-.3,4.3],fills:[{top:x=>2*x,bot:x=>x*x,a:0,b:2,c:'red'}],curves:[{f:x=>2*x,c:'red'},{f:x=>x*x,c:'ink'}],slice:{x:1,top:x=>2*x,bot:x=>x*x,c:'yel'}},
  {xr:[-.3,4.3],yr:[-2.3,2.3],fills:[{top:sq,a:0,b:4,c:'blue'}],curves:[{f:sq,c:'blue',a:0,b:4}],axis:{y:0},mirror:true,disk:true,slice:{x:2.6,top:sq,c:'red'}},
  {xr:[-2.4,3],yr:[-2.3,2.3],fills:[{top:x=>sq(4-x*x),bot:x=>-sq(4-x*x),a:-2,b:2,c:'blue',hatch:true}],curves:[{f:x=>sq(4-x*x),c:'blue',a:-2,b:2},{f:x=>-sq(4-x*x),c:'blue',a:-2,b:2}],section:{x:.6,top:x=>sq(4-x*x),bot:x=>-sq(4-x*x),c:'purple'}},
  {xr:[0,2.4],yr:[0,8],curves:[{f:x=>2/3*(x*x+1)**1.5,c:'ink',dash:true}],arc:{f:x=>2/3*(x*x+1)**1.5,a:.7,b:2,c:'red'}},
  {xr:[-.2,3.2],yr:[-1.2,1.2],fills:[{top:x=>Math.max(0,Math.sin(2*x)),bot:x=>Math.min(0,Math.sin(2*x)),a:0,b:3,c:'green'}],curves:[{f:x=>Math.sin(2*x),c:'green'}]},
];
(()=>{ LV.forEach(L=>{ const m=FIG[L.id]; if(m) L.qs.forEach((q,i)=>{ if(m[i]) q.fig=m[i]; }); }); })();
