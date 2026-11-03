/* ============ APRENDER REPLICANDO ============
   TALLER_EJ[etiqueta de la hoja] = ejemplo del Taller 4 (o del mismo nivel) para esa fórmula.
   REPL = pares "ejemplo del taller resuelto → TU TURNO". En TU TURNO cada casilla se escribe
   como en la calculadora (9/2, 32pi/15, (27-5sqrt(5))/3...) y se revisa al instante. */
const TALLER_EJ={
 'Área bajo la curva':R`y=x^2-1,\ [0,2]:\ \int_0^1(1-x^2)dx+\int_1^2(x^2-1)dx=\tfrac23+\tfrac43=2\ \text{u}^2`,
 'TFC':R`\int_1^4\left(x^{1/2}+x^{-1/2}\right)dx=\left[\tfrac23x^{3/2}+2x^{1/2}\right]_1^4=\tfrac{28}{3}-\tfrac83=\tfrac{20}{3}`,
 'Propiedades':R`\int_{-2}^{2}(x^5-3x^3+x^2)dx=0+2\int_0^2x^2dx=\tfrac{16}{3}`,
 'Sustitución en definida':R`\int_0^3x\sqrt{x^2+16}\,dx:\ u:16\to25,\ \tfrac12\int_{16}^{25}u^{1/2}du=\tfrac{61}{3}`,
 'Área entre curvas':R`y=x^2,\ y=x+2:\ \int_{-1}^{2}(x+2-x^2)dx=\tfrac92\ \text{u}^2`,
 '¿dx o dy? ¿se cruzan?':R`y^2=2x+6,\ y=x-1:\ \int_{-2}^{4}\left(y+4-\tfrac{y^2}{2}\right)dy=18\ \text{u}^2`,
 'Discos / arandelas':R`\text{T4 }\#18\text{: }y=6x,\ y=6x^2,\ \text{eje }x:\ \pi\int_0^1(36x^2-36x^4)dx=\tfrac{24\pi}{5}`,
 'Eje desplazado y = k':R`\text{T4 }\#34b\text{: }y^2=x^3,\ y=8,\ x=0,\ \text{eje }y=8:\ \pi\int_0^4(8-x^{3/2})^2dx=\tfrac{576\pi}{5}`,
 'Variable en discos':R`\text{T4 }\#11\text{: }x=y^2,\ y=3,\ \text{eje }y:\ \pi\int_0^3y^4dy=\tfrac{243\pi}{5}`,
 'Secciones transversales':R`\text{T4 n.° 24: triángulos de altura 4 sobre }x^2+y^2\le4:\ 4\int_{-2}^{2}\sqrt{4-x^2}\,dx=8\pi`,
 'Áreas de secciones':R`\text{T4 }\#26\text{: }s=x^2-x^4,\ \int_{-1}^{1}(x^2-x^4)^2dx=\tfrac{16}{315}`,
 'Largo de la rebanada':R`\text{T4 }\#23\text{: }s=2\sqrt{4-x^2},\ V=\int_{-2}^{2}4(4-x^2)dx=\tfrac{128}{3}`,
 'Longitud de curva':R`\text{T4 }\#2\text{: }1+y'^2=(2x^2+1)^2\Rightarrow\int_1^2(2x^2+1)dx=\tfrac{17}{3}`,
 'Truco del cuadrado perfecto':R`\text{T4 }\#3\text{: }1+y'^2=\tfrac{4}{x^{2/3}}\Rightarrow\int_1^82x^{-1/3}dx=9`,
 'Paramétricas':R`\text{T4 }\#8\text{: }x'=6t,\ y'=6t^2\Rightarrow\int_1^46t\sqrt{1+t^2}\,dt=2(17\sqrt{17}-2\sqrt2)`,
};

const REPL=[
 {sec:'definida', title:'Integral definida con sustitución',
  ex:{src:'Mismo nivel del taller', q:R`\(\displaystyle\int_0^3x\sqrt{x^2+16}\,dx\)`, s:[
   R`Sea \(u=x^2+16\Rightarrow du=2x\,dx\Rightarrow x\,dx=\frac{du}{2}\).`,
   R`Cambio los límites: \(x=0\to u=16\); \(x=3\to u=25\).`,
   R`\(\frac12\int_{16}^{25}u^{1/2}du=\frac12\cdot\frac23\left[u^{3/2}\right]_{16}^{25}=\frac13(125-64)\).`,
   R`\(=\frac{61}{3}\approx20.33\).`]},
  you:{q:R`\(\displaystyle\int_0^2x\sqrt{x^2+5}\,dx\)`, checks:[
   ['Límite de abajo en u','5','u = x² + 5 con x = 0'],['Límite de arriba en u','9','u = x² + 5 con x = 2'],['Resultado exacto o decimal','(27-5sqrt(5))/3','⅓(9^(3/2) − 5^(3/2))']],
   sol:[R`\(u=x^2+5\): límites \(5\) y \(9\).`,R`\(\frac12\cdot\frac23\left[u^{3/2}\right]_5^9=\frac13\left(27-5\sqrt5\right)\approx5.27\).`]}},
 {sec:'definida', title:'Área con signo: partir donde cruza el eje',
  ex:{src:'Mismo nivel del taller', q:R`Área entre \(y=x^2-1\) y el eje x, \(0\le x\le2\)`, fig:{xr:[-.2,2.3],yr:[-1.3,3.3],fills:[{top:x=>0,bot:x=>x*x-1,a:0,b:1,c:'red'},{top:x=>x*x-1,bot:x=>0,a:1,b:2,c:'blue'}],curves:[{f:x=>x*x-1,c:'ink',lab:'x² − 1',lx:1.7}]}, s:[
   R`Corta el eje en \(x=1\): antes está debajo, después arriba.`,
   R`\(\int_0^1(1-x^2)dx=\frac23\) (le cambio el signo porque está debajo).`,
   R`\(\int_1^2(x^2-1)dx=\frac43\).`, R`Área \(=\frac23+\frac43=2\) u².`]},
  you:{q:R`Área entre \(y=x^2-4\) y el eje x, \(0\le x\le3\)`, checks:[
   ['¿En qué x corta el eje?','2','x² − 4 = 0'],['Área del tramo de abajo (0 a 2)','16/3','∫(4 − x²)'],['Área del tramo de arriba (2 a 3)','7/3','∫(x² − 4)'],['Área total','23/3','Suma las dos']],
   sol:[R`Corte en \(x=2\).`,R`\(\int_0^2(4-x^2)dx=8-\frac83=\frac{16}{3}\).`,R`\(\int_2^3(x^2-4)dx=\left[\frac{x^3}{3}-4x\right]_2^3=-3+\frac{16}{3}=\frac73\).`,R`Total \(\frac{23}{3}\approx7.67\) u².`]}},
 {sec:'area', title:'Área entre dos curvas (dx)',
  ex:{src:'Mismo nivel del taller', q:R`Área entre \(y=x^2\) y \(y=x+2\)`, fig:{xr:[-1.6,2.6],yr:[-.5,4.6],fills:[{top:x=>x+2,bot:x=>x*x,a:-1,b:2,c:'blue'}],curves:[{f:x=>x+2,c:'red',lab:'x + 2',lx:-1.4},{f:x=>x*x,c:'ink',lab:'x²',lx:1.75}],slice:{x:.5,top:x=>x+2,bot:x=>x*x,c:'yel'},pts:[[-1,1],[2,4]]}, s:[
   R`Cortes: \(x^2=x+2\Rightarrow(x-2)(x+1)=0\Rightarrow x=-1,\ 2\).`,
   R`Prueba \(x=0\): recta 2 > parábola 0 → arriba la recta.`,
   R`\(\int_{-1}^2(x+2-x^2)dx=\left[\frac{x^2}{2}+2x-\frac{x^3}{3}\right]_{-1}^2=\frac{10}{3}+\frac76\).`, R`\(=\frac92\) u².`]},
  you:{q:R`Área entre \(y=x^2\) y \(y=2x+3\)`, checks:[
   ['Corte de la izquierda','-1','x² − 2x − 3 = 0'],['Corte de la derecha','3',''],['Área','32/3','∫(2x + 3 − x²)']],
   sol:[R`\(x^2-2x-3=(x-3)(x+1)=0\Rightarrow x=-1,\ 3\). Arriba \(2x+3\).`,R`\(\left[x^2+3x-\frac{x^3}{3}\right]_{-1}^3=9-\left(-\frac53\right)=\frac{32}{3}\approx10.67\) u².`]}},
 {sec:'area', title:'Área cuando conviene dy',
  ex:{src:'Mismo nivel del taller', q:R`Área entre \(y^2=2x+6\) y \(y=x-1\)`, fig:{xr:[-3.6,5.6],yr:[-3,5],gx:2,gy:2,fills:[{dir:'y',right:y=>y+1,left:y=>y*y/2-3,a:-2,b:4,c:'blue'}],ycurves:[{g:y=>y*y/2-3,c:'ink',a:-3,b:4.6},{g:y=>y+1,c:'red',a:-3,b:4.6}],slice:{y:1,right:y=>y+1,left:y=>y*y/2-3,c:'yel'}}, s:[
   R`Despejo x: izquierda \(\frac{y^2}{2}-3\), derecha \(y+1\).`,
   R`Cortes: \(y^2-2y-8=0\Rightarrow y=-2,\ 4\).`,
   R`\(\int_{-2}^4\left(y+4-\frac{y^2}{2}\right)dy=\frac{40}{3}+\frac{14}{3}=18\) u².`]},
  you:{q:R`Área entre \(x=y^2\) y \(x=y+6\)`, checks:[
   ['Corte de abajo (y)','-2','y² = y + 6'],['Corte de arriba (y)','3',''],['Área','125/6','∫(y + 6 − y²) dy']],
   sol:[R`\(y^2-y-6=(y-3)(y+2)=0\Rightarrow y=-2,\ 3\). Derecha \(y+6\).`,R`\(\left[\frac{y^2}{2}+6y-\frac{y^3}{3}\right]_{-2}^3=\frac{27}{2}+\frac{22}{3}=\frac{125}{6}\approx20.83\) u².`]}},
 {sec:'discos', title:'Discos alrededor del eje x',
  ex:{src:'Taller 4 · 5.2 #1', q:R`\(y=x^2+1\), \(0\le x\le2\), eje x`, fig:{xr:[-.3,2.5],yr:[-5.5,5.5],gy:2,fills:[{top:x=>x*x+1,a:0,b:2,c:'blue'}],curves:[{f:x=>x*x+1,a:0,b:2,c:'blue'}],axis:{y:0},mirror:true,disk:true,slice:{x:1.3,top:x=>x*x+1,c:'red'}}, s:[
   R`Disco de radio \(R=x^2+1\).`, R`\(V=\pi\int_0^2(x^4+2x^2+1)dx=\pi\left(\frac{32}{5}+\frac{16}{3}+2\right)\).`, R`\(=\frac{206\pi}{15}\approx43.14\) u³.`]},
  you:{q:R`Taller 4 · 5.2 #6: \(y=x^3\), \(x=3\), \(y=0\), eje x`, checks:[
   ['\\(\\int_0^3x^6dx\\)','2187/7','R² = x⁶'],['Volumen','2187pi/7','Multiplica por π']],
   sol:[R`\(R=x^3\Rightarrow R^2=x^6\).`,R`\(V=\pi\left[\frac{x^7}{7}\right]_0^3=\frac{2187\pi}{7}\approx981.52\) u³.`]}},
 {sec:'discos', title:'Discos alrededor del eje y (dy)',
  ex:{src:'Taller 4 · 5.2 #11', q:R`\(x=y^2\), \(x=0\), \(y=3\), eje y`, s:[
   R`Eje y → rebanada horizontal: \(R=y^2\).`, R`\(V=\pi\int_0^3y^4dy=\frac{243\pi}{5}\approx152.68\) u³.`]},
  you:{q:R`Taller 4 · 5.2 #13: \(x=2\sqrt y\), \(y=4\), \(x=0\), eje y`, checks:[
   ['\\(R^2\\) cuando y = 1','4','R = 2√y'],['Volumen','32pi','π∫ 4y dy de 0 a 4']],
   sol:[R`\(R=2\sqrt y\Rightarrow R^2=4y\).`,R`\(V=\pi\int_0^44y\,dy=\pi\left[2y^2\right]_0^4=32\pi\approx100.53\) u³.`]}},
 {sec:'discos', title:'Arandelas',
  ex:{src:'Taller 4 · 5.2 #18', q:R`Entre \(y=6x\) y \(y=6x^2\), eje x`, fig:{xr:[-.15,1.3],yr:[-6.6,6.6],gy:2,fills:[{top:x=>6*x,bot:x=>6*x*x,a:0,b:1,c:'blue'}],curves:[{f:x=>6*x,a:0,b:1,c:'red'},{f:x=>6*x*x,a:0,b:1,c:'ink'}],axis:{y:0},mirror:true,washer:true,slice:{x:.6,top:x=>6*x,bot:x=>6*x*x,c:'red'}}, s:[
   R`Cortes 0 y 1. \(R=6x\) (lejana), \(r=6x^2\).`, R`\(V=\pi\int_0^1(36x^2-36x^4)dx=36\pi\cdot\frac{2}{15}=\frac{24\pi}{5}\) u³.`]},
  you:{q:R`Entre \(y=4x\) y \(y=4x^2\), eje x`, checks:[
   ['Corte distinto de 0','1','4x = 4x²'],['\\(R^2-r^2\\) en x = ½','3','R = 4x, r = 4x²'],['Volumen','32pi/15','π∫(16x² − 16x⁴)']],
   sol:[R`\(R=4x,\ r=4x^2\). En \(x=\frac12\): \(4-1=3\).`,R`\(V=16\pi\left(\frac13-\frac15\right)=\frac{32\pi}{15}\approx6.70\) u³.`]}},
 {sec:'discos', title:'Eje desplazado',
  ex:{src:'Taller 4 · 5.2 #33(b)', q:R`\(y^2=x^3\), \(x=4\), \(y=0\), alrededor de \(y=8\)`, s:[
   R`\(y=x^{3/2}\). El eje \(y=8\) está encima: \(R=8-0=8\), \(r=8-x^{3/2}\).`,
   R`\(V=\pi\int_0^4\left[64-(8-x^{3/2})^2\right]dx=\pi\int_0^4(16x^{3/2}-x^3)dx\).`, R`\(=\pi\left(\frac{1024}{5}-64\right)=\frac{704\pi}{5}\approx442.34\) u³.`]},
  you:{q:R`\(y=x^2\), \(y=0\), \(x=2\), alrededor de \(y=4\)`, checks:[
   ['R (radio grande)','4','Del eje y = 4 hasta y = 0'],['r cuando x = 1','3','4 − x²'],['Volumen','224pi/15','π∫[16 − (4 − x²)²]']],
   sol:[R`\(R=4,\ r=4-x^2\Rightarrow R^2-r^2=8x^2-x^4\).`,R`\(V=\pi\left(\frac{64}{3}-\frac{32}{5}\right)=\frac{224\pi}{15}\approx46.91\) u³.`]}},
 {sec:'secciones', title:'Secciones cuadradas',
  ex:{src:'Taller 4 #23', q:R`Base \(x^2+y^2\le4\), cuadrados ⟂ al eje x`, fig:{xr:[-2.6,3],yr:[-2.9,3.1],fills:[{top:x=>sq(4-x*x),bot:x=>-sq(4-x*x),a:-2,b:2,c:'blue',hatch:true}],curves:[{f:x=>sq(4-x*x),c:'blue',a:-2,b:2},{f:x=>-sq(4-x*x),c:'blue',a:-2,b:2}],section:{x:.6,top:x=>sq(4-x*x),bot:x=>-sq(4-x*x),c:'purple'}}, s:[
   R`\(s=2\sqrt{4-x^2}\Rightarrow A=4(4-x^2)\).`, R`\(V=8\int_0^2(4-x^2)dx=\frac{128}{3}\) u³.`]},
  you:{q:R`Base \(x^2+y^2\le9\), cuadrados ⟂ al eje x`, checks:[
   ['Lado s en x = 0','6','2√(9 − x²)'],['A(0)','36','s²'],['Volumen','144','∫ 4(9 − x²) de −3 a 3']],
   sol:[R`\(s=2\sqrt{9-x^2}\Rightarrow A=4(9-x^2)\).`,R`\(V=8\int_0^3(9-x^2)dx=8(27-9)=144\) u³.`]}},
 {sec:'secciones', title:'Secciones semicirculares',
  ex:{src:'Taller 4 #32', q:R`Base entre \(y=\sqrt x\) y \(y=x^2\), semicírculos`, s:[
   R`Diámetro \(s=\sqrt x-x^2\), \(A=\frac\pi8s^2\).`, R`\(\int_0^1(x-2x^{5/2}+x^4)dx=\frac{9}{70}\Rightarrow V=\frac{9\pi}{560}\) u³.`]},
  you:{q:R`Base entre \(y=x\) y \(y=x^2\), semicírculos ⟂ al eje x`, checks:[
   ['Diámetro s en x = ½','1/4','x − x²'],['\\(\\int_0^1(x-x^2)^2dx\\)','1/30','x² − 2x³ + x⁴'],['Volumen','pi/240','(π/8) por lo anterior']],
   sol:[R`\(s=x-x^2\Rightarrow s^2=x^2-2x^3+x^4\), integral \(\frac13-\frac12+\frac15=\frac1{30}\).`,R`\(V=\frac\pi8\cdot\frac1{30}=\frac{\pi}{240}\approx0.013\) u³.`]}},
 {sec:'longitud', title:'Longitud con cuadrado perfecto',
  ex:{src:'Taller 4 · 5.4 #4', q:R`\(y=\frac{x^4+3}{6x}\), de 1 a 3`, s:[
   R`\(y=\frac{x^3}{6}+\frac1{2x}\Rightarrow y'=\frac{x^2}{2}-\frac1{2x^2}\), \(AB=\frac14\).`,
   R`\(\sqrt{1+y'^2}=\frac{x^2}{2}+\frac1{2x^2}\).`, R`\(L=\left[\frac{x^3}{6}-\frac1{2x}\right]_1^3=\frac{14}{3}\) u.`]},
  you:{q:R`\(y=\frac{x^3}{6}+\frac{1}{2x}\), de 1 a 2`, checks:[
   ['A·B (debe dar ¼)','1/4','A = x²/2, B = 1/(2x²)'],['Longitud','17/12','[x³/6 − 1/(2x)] de 1 a 2']],
   sol:[R`\(y'=\frac{x^2}{2}-\frac1{2x^2}\); \(AB=\frac14\) ✓.`,R`\(L=\left(\frac86-\frac14\right)-\left(\frac16-\frac12\right)=\frac{17}{12}\approx1.42\) u.`]}},
 {sec:'longitud', title:'Longitud de paramétricas',
  ex:{src:'Taller 4 · 5.4 #8', q:R`\(x=3t^2+2,\ y=2t^3-\frac12\), \(1\le t\le4\)`, s:[
   R`\(x'=6t,\ y'=6t^2\Rightarrow\sqrt{36t^2+36t^4}=6t\sqrt{1+t^2}\).`, R`\(L=2\left[(1+t^2)^{3/2}\right]_1^4=2(17\sqrt{17}-2\sqrt2)\approx134.53\) u.`]},
  you:{q:R`\(x=t^2,\ y=\frac23t^3\), \(0\le t\le\sqrt3\)`, checks:[
   ['Rapidez en t = 1','2sqrt(2)','√(x′² + y′²) con x′ = 2t, y′ = 2t²'],['Longitud','14/3','∫ 2t√(1 + t²) dt']],
   sol:[R`\(\sqrt{4t^2+4t^4}=2t\sqrt{1+t^2}\); en \(t=1\): \(2\sqrt2\).`,R`\(L=\frac23\left[(1+t^2)^{3/2}\right]_0^{\sqrt3}=\frac23(8-1)=\frac{14}{3}\approx4.67\) u.`]}},
];
