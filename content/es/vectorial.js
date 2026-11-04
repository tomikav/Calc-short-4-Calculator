/* ============ CÁLCULO MULTIVARIABLE II: INTEGRALES MÚLTIPLES Y CÁLCULO VECTORIAL ============ */
LV.push(
/* ---------------- INTEGRALES DOBLES ---------------- */
{ id:'dobles', n:'Integrales dobles', sub:'Volumen bajo una superficie · Fubini · regiones tipo I y tipo II · cambiar el orden', tgt:'VOLUMEN_EN_CAPAS',
  req:['varias','area'], uses:'Área, masa, centroides, probabilidad conjunta; versión en polares; teorema de Green',
  cites:['osc3|§5.1–5.2','paul3|Double Integrals','stewart2|§15.1–15.3','mit1802|Unit 3'], see:['integral-doble','fubini'],
  lore: R`
  <div class="why">La [[integral-definida|integral definida]] suma rectángulos bajo una curva. La [[integral-doble|integral doble]] suma <b>columnas</b> bajo una superficie: \(\iint_Rf\,dA\) es el volumen entre z = f(x, y) y la región R del plano.</div>
  <h3>Idea: suma de Riemann en 2D</h3>
  <div class="formula">\[\iint_Rf(x,y)\,dA=\lim\sum_{i,j}f(x_i,y_j)\,\Delta A\]</div>
  <p>Si f = 1, da el <b>área</b> de R. Si f es una densidad, da la <b>masa</b>.</p>
  <h3>Teorema de Fubini: integrales iteradas</h3>
  <p>En un rectángulo [a, b] × [c, d] se integra <b>de adentro hacia afuera</b>, en cualquier orden:</p>
  <div class="formula">\[\iint_Rf\,dA=\int_a^b\!\!\left(\int_c^df(x,y)\,dy\right)dx=\int_c^d\!\!\left(\int_a^bf(x,y)\,dx\right)dy\]</div>
  <p>En la integral de adentro, la otra variable es constante (como en las [[derivada-parcial|derivadas parciales]]).</p>
  <h3>Regiones generales</h3>
  <div class="tscroll"><table class="t"><tr><th>Tipo</th><th>Descripción</th><th>Integral</th></tr>
   <tr><td><b>I</b> (rebanadas verticales)</td><td>\(a\le x\le b,\ g_1(x)\le y\le g_2(x)\)</td><td>\(\int_a^b\int_{g_1(x)}^{g_2(x)}f\,dy\,dx\)</td></tr>
   <tr><td><b>II</b> (rebanadas horizontales)</td><td>\(c\le y\le d,\ h_1(y)\le x\le h_2(y)\)</td><td>\(\int_c^d\int_{h_1(y)}^{h_2(y)}f\,dx\,dy\)</td></tr></table></div>
  <ol class="recipe">
   <li><b>Dibuja</b> la región (igual que en [[area-entre-curvas|área entre curvas]]).</li>
   <li>Elige el orden. Para dy dx: traza una recta vertical; donde <b>entra</b> es el límite inferior de y, donde <b>sale</b> el superior. Los límites de x son números.</li>
   <li>Los límites de la integral de afuera <b>siempre son constantes</b>.</li>
  </ol>
  <div class="trap">Si los límites de la integral exterior tienen variables, el orden está mal. La de adentro puede tener la variable de afuera; nunca al revés.</div>
  <h3>Cambiar el orden de integración</h3>
  <p>Algunas integrales son imposibles en un orden y fáciles en el otro (\(\int e^{x^2}dx\) no tiene primitiva elemental). Receta: de los límites, <b>reconstruye la región</b>, dibújala, y descríbela en el otro tipo.</p>
  <h3>Aplicaciones</h3>
  <div class="tscroll"><table class="t"><tr><th>Cantidad</th><th>Fórmula</th></tr>
   <tr><td>Área</td><td>\(\iint_R1\,dA\)</td></tr><tr><td>Masa (densidad ρ)</td><td>\(m=\iint_R\rho\,dA\)</td></tr>
   <tr><td>Centro de masa</td><td>\(\bar x=\frac1m\iint x\rho\,dA,\ \bar y=\frac1m\iint y\rho\,dA\)</td></tr>
   <tr><td>Valor promedio</td><td>\(\frac{1}{A(R)}\iint_Rf\,dA\)</td></tr></table></div>`,
  ex:[
   {t:'Rectángulo', q:R`\(\displaystyle\iint_R(x+2y)\,dA\), \(R=[0,2]\times[0,1]\)`, s:[
     R`Adentro (en y, x constante): \(\int_0^1(x+2y)dy=\left[xy+y^2\right]_0^1=x+1\)`, R`Afuera: \(\int_0^2(x+1)dx=2+2=4\)`]},
   {t:'Región tipo I', q:R`\(\displaystyle\iint_Dxy\,dA\), D entre \(y=x^2\) y \(y=x\)`, s:[
     R`{{DIB}} Cortes: \(x^2=x\Rightarrow x=0,1\). En (0, 1), arriba está y = x.`, R`{{PLA}} \(\int_0^1\int_{x^2}^{x}xy\,dy\,dx\)`,
     R`{{CAL}} Adentro: \(x\left[\frac{y^2}2\right]_{x^2}^x=\frac{x^3-x^5}{2}\). Afuera: \(\frac12\left(\frac14-\frac16\right)=\frac1{24}\)`]},
   {t:'Cambiar el orden', q:R`\(\displaystyle\int_0^1\int_{y}^{1}e^{x^2}dx\,dy\)`, s:[
     R`\(\int e^{x^2}dx\) no se puede. Región: \(0\le y\le1\), \(y\le x\le1\) → triángulo con vértices (0,0), (1,0), (1,1).`,
     R`Como tipo I: \(0\le x\le1\), \(0\le y\le x\): \(\int_0^1\int_0^xe^{x^2}dy\,dx=\int_0^1xe^{x^2}dx\)`, R`Sustitución u = x²: \(\frac12(e-1)\)`]},
  ],
  qs:[
   {q:R`\(\displaystyle\int_0^1\int_0^2 xy\,dy\,dx\)`, o:['1','2',R`\(\frac12\)`,'4'], e:'Adentro: 2x; afuera: 1.', h:'De adentro hacia afuera.'},
   {q:R`\(\iint_R1\,dA\) da…`, o:['El área de R','El volumen','La masa siempre','0'], e:'Altura 1: volumen = área.', h:'f = 1.'},
   {q:R`Límites para la región entre \(y=0\), \(y=\sqrt x\), \(x=4\) (orden dy dx)`, o:[R`\(\int_0^4\int_0^{\sqrt x}\)`,R`\(\int_0^2\int_0^{4}\)`,R`\(\int_0^{\sqrt x}\int_0^4\)`,R`\(\int_0^4\int_{\sqrt x}^2\)`], e:'x de 0 a 4; y de 0 a √x.', h:'Afuera constantes.'},
   {q:R`Al cambiar el orden de \(\int_0^2\int_0^{x}f\,dy\,dx\) queda`, o:[R`\(\int_0^2\int_y^2f\,dx\,dy\)`,R`\(\int_0^2\int_0^yf\,dx\,dy\)`,R`\(\int_0^x\int_0^2f\,dx\,dy\)`,R`\(\int_0^2\int_0^2f\,dx\,dy\)`], e:'Triángulo bajo y = x: x va de y a 2.', h:'Dibuja la región.'},
  ]},
/* ---------------- DOBLES EN POLARES ---------------- */
{ id:'dobles-polar', n:'Integrales dobles en coordenadas polares', sub:'dA = r dr dθ · discos, anillos, sectores · la integral de Gauss', tgt:'DISCO_ROTATIVO',
  req:['dobles','polares'], uses:'Integrales triples en cilíndricas, probabilidad (normal), física de cuerpos circulares',
  cites:['osc3|§5.3','paul3|Double Integrals in Polar Coordinates','stewart2|§15.3'], see:['polares-dobles','jacobiano'],
  lore: R`
  <div class="why">Si la región es un círculo, un anillo o un sector, en cartesianas los límites tienen raíces horribles. En [[polares]] son <b>constantes</b>. El precio: \(dA=r\,dr\,d\theta\) (no olvides la r).</div>
  <h3>La fórmula</h3>
  <div class="formula">\[\iint_Rf(x,y)\,dA=\int_\alpha^\beta\int_{r_1(\theta)}^{r_2(\theta)}f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta\]</div>
  <p><b>De dónde sale la r:</b> el "rectángulo polar" tiene lados \(dr\) y \(r\,d\theta\) (un arco de radio r): área ≈ \(r\,dr\,d\theta\). Es el [[jacobiano]] de la transformación.</p>
  <div class="trap">Olvidar la r de \(dA=r\,dr\,d\theta\) es EL error de esta sección. Con ella, el área de un disco de radio a da \(\int_0^{2\pi}\int_0^ar\,dr\,d\theta=\pi a^2\) ✓; sin ella da \(2\pi a\) ✗.</div>
  <h3>Cuándo usar polares</h3>
  <ol class="recipe"><li>La región es circular (disco, anillo, sector, cardioide).</li><li>El integrando tiene \(x^2+y^2\) (→ \(r^2\)).</li></ol>
  <div class="tscroll"><table class="t"><tr><th>Región</th><th>Límites</th></tr>
   <tr><td>Disco \(x^2+y^2\le a^2\)</td><td>\(0\le r\le a,\ 0\le\theta\le2\pi\)</td></tr>
   <tr><td>Anillo \(1\le x^2+y^2\le4\)</td><td>\(1\le r\le2,\ 0\le\theta\le2\pi\)</td></tr>
   <tr><td>Medio disco superior</td><td>\(0\le r\le a,\ 0\le\theta\le\pi\)</td></tr>
   <tr><td>Primer cuadrante del disco</td><td>\(0\le\theta\le\frac\pi2\)</td></tr>
   <tr><td>Círculo \(x^2+y^2=2ax\)</td><td>\(0\le r\le2a\cos\theta,\ -\frac\pi2\le\theta\le\frac\pi2\)</td></tr></table></div>
  <h3>La integral de Gauss</h3>
  <div class="formula">\[I=\int_{-\infty}^\infty e^{-x^2}dx\ \Rightarrow\ I^2=\iint_{\mathbb R^2}e^{-(x^2+y^2)}dA=\int_0^{2\pi}\int_0^\infty e^{-r^2}r\,dr\,d\theta=2\pi\cdot\frac12=\pi\]</div>
  <p>Por lo tanto \(I=\sqrt\pi\). Una integral imposible en una variable sale en dos líneas al subir a dos y usar polares (Poisson)[^osc3|§5.3].</p>`,
  ex:[
   {t:'Volumen bajo un paraboloide', q:R`Volumen bajo \(z=4-x^2-y^2\) y sobre el plano xy.`, s:[
     R`z ≥ 0 cuando \(x^2+y^2\le4\): disco de radio 2. Integrando \(4-r^2\).`,
     R`\(\int_0^{2\pi}\int_0^2(4-r^2)\,r\,dr\,d\theta=2\pi\left[2r^2-\frac{r^4}4\right]_0^2\)`, R`\(=2\pi(8-4)=8\pi\)`]},
   {t:'Integrando con x² + y²', q:R`\(\displaystyle\iint_D\frac{dA}{1+x^2+y^2}\), D = disco de radio 1`, s:[
     R`\(\int_0^{2\pi}\int_0^1\frac{r}{1+r^2}dr\,d\theta\)`, R`u = 1 + r²: \(\int_0^1\frac{r\,dr}{1+r^2}=\frac12\ln2\)`, R`Total: \(\pi\ln2\)`]},
  ],
  qs:[
   {q:R`En polares, \(dA=\)`, o:[R`\(r\,dr\,d\theta\)`,R`\(dr\,d\theta\)`,R`\(r^2dr\,d\theta\)`,R`\(\theta\,dr\,d\theta\)`], e:'El jacobiano es r.', h:'No olvides la r.'},
   {q:R`Área del disco de radio 3 en polares`, o:[R`\(9\pi\)`,R`\(6\pi\)`,R`\(3\pi\)`,R`\(18\pi\)`], e:'2π · 9/2.', h:'∫∫ r dr dθ.'},
   {q:R`Límites de θ para el semidisco derecho (x ≥ 0)`, o:[R`\(-\frac\pi2\le\theta\le\frac\pi2\)`,R`\(0\le\theta\le\pi\)`,R`\(0\le\theta\le\frac\pi2\)`,R`\(\pi\le\theta\le2\pi\)`], e:'De −90° a 90°.', h:'x ≥ 0.'},
   {q:R`\(\displaystyle\int_{-\infty}^\infty e^{-x^2}dx\)`, o:[R`\(\sqrt\pi\)`,R`\(\pi\)`,'1',R`\(\frac{\sqrt\pi}2\)`], e:'I² = π.', h:'Gauss en polares.'},
  ]},
/* ---------------- TRIPLES ---------------- */
{ id:'triples', n:'Integrales triples', sub:'∭ f dV · seis órdenes · sólidos entre superficies', tgt:'SOLIDO_EN_CUBITOS',
  req:['dobles','rectas-planos'], uses:'Volumen, masa y centro de masa de sólidos, momentos de inercia, teorema de la divergencia',
  cites:['osc3|§5.4','paul3|Triple Integrals','stewart2|§15.6'], see:['integral-triple'],
  lore: R`
  <div class="why">Una [[integral-triple|integral triple]] suma una cantidad sobre un <b>sólido</b>: con f = 1 da el volumen; con una densidad da la masa. La dificultad no es integrar sino poner los <b>límites</b>.</div>
  <h3>Sólido entre dos superficies</h3>
  <div class="formula">\[\iiint_Ef\,dV=\iint_D\left(\int_{u_1(x,y)}^{u_2(x,y)}f\,dz\right)dA\]</div>
  <ol class="recipe">
   <li>Identifica la superficie de <b>abajo</b> \(z=u_1\) y la de <b>arriba</b> \(z=u_2\) (traza una recta vertical que atraviese el sólido).</li>
   <li><b>Proyecta</b> el sólido sobre el plano xy: esa sombra es D. Suele salir de igualar \(u_1=u_2\).</li>
   <li>Pon los límites de D como en una [[integral-doble|integral doble]].</li>
   <li>Integra z primero, luego lo que quede.</li>
  </ol>
  <p>Hay 6 órdenes posibles (dz dy dx, dx dz dy, …): proyecta sobre el plano que haga más simples los límites.</p>
  <h3>Ejemplo clásico: tetraedro</h3>
  <p>Sólido bajo el plano \(x+y+z=1\) en el primer octante: \(0\le z\le1-x-y\), sombra el triángulo \(0\le y\le1-x\), \(0\le x\le1\).</p>
  <div class="formula">\[V=\int_0^1\int_0^{1-x}\int_0^{1-x-y}dz\,dy\,dx=\int_0^1\int_0^{1-x}(1-x-y)\,dy\,dx=\int_0^1\frac{(1-x)^2}{2}dx=\frac16\]</div>
  <h3>Aplicaciones</h3>
  <div class="tscroll"><table class="t"><tr><th>Cantidad</th><th>Fórmula</th></tr>
   <tr><td>Volumen</td><td>\(\iiint_E1\,dV\)</td></tr><tr><td>Masa</td><td>\(\iiint_E\rho\,dV\)</td></tr>
   <tr><td>Centro de masa</td><td>\(\bar x=\frac1m\iiint x\rho\,dV\) (y análogos)</td></tr>
   <tr><td>Momento de inercia (eje z)</td><td>\(I_z=\iiint(x^2+y^2)\rho\,dV\)</td></tr></table></div>`,
  ex:[
   {t:'Integral sobre una caja', q:R`\(\displaystyle\iiint_Bxyz^2dV\), \(B=[0,1]\times[0,2]\times[0,3]\)`, s:[
     R`Separa: \(\int_0^1x\,dx\cdot\int_0^2y\,dy\cdot\int_0^3z^2dz\)`, R`\(=\frac12\cdot2\cdot9=9\)`]},
   {t:'Sólido entre un paraboloide y un plano', q:R`Volumen entre \(z=x^2+y^2\) y \(z=4\).`, s:[
     R`Abajo \(z=x^2+y^2\), arriba z = 4. Sombra: \(x^2+y^2\le4\).`,
     R`\(V=\iint_D(4-x^2-y^2)dA\) → en polares \(\int_0^{2\pi}\int_0^2(4-r^2)r\,dr\,d\theta\)`, R`\(=8\pi\)`]},
  ],
  qs:[
   {q:R`\(\displaystyle\int_0^1\int_0^1\int_0^1 dz\,dy\,dx\)`, o:['1','3','0',R`\(\frac16\)`], e:'Volumen del cubo unitario.', h:'f = 1.'},
   {q:R`Volumen del tetraedro \(x+y+z\le1\), primer octante`, o:[R`\(\frac16\)`,R`\(\frac13\)`,R`\(\frac12\)`,'1'], e:'∫∫(1 − x − y) sobre el triángulo.', h:'Clásico.'},
   {q:R`En \(\int\int\int f\,dz\,dy\,dx\), los límites de z pueden depender de…`, o:['x e y','Solo de z','Nada (son números)','Solo de x'], e:'La interior puede depender de las exteriores.', h:'De adentro hacia afuera.'},
   {q:R`La región D en una triple tipo "z simple" es…`, o:['La sombra del sólido en el plano xy','La tapa superior','El volumen','La superficie lateral'], e:'Proyección.', h:'Mira desde arriba.'},
  ]},
/* ---------------- CILÍNDRICAS Y ESFÉRICAS ---------------- */
{ id:'cilesf', n:'Coordenadas cilíndricas y esféricas', sub:'dV = r dz dr dθ · dV = ρ² sen φ dρ dφ dθ', tgt:'GLOBO_TERRAQUEO',
  req:['triples','dobles-polar'], uses:'Física (campos de cargas, gravitación), sólidos con simetría, teorema de la divergencia',
  cites:['osc3|§5.5','paul3|Spherical Coordinates','stewart2|§15.7–15.8'], see:['cilindricas','esfericas','jacobiano'],
  lore: R`
  <div class="why">Cilindros, conos y esferas tienen ecuaciones feas en x, y, z y preciosas en las coordenadas correctas. Elegir bien el sistema convierte una integral imposible en un producto de tres integrales simples.</div>
  <h3>Cilíndricas (polares + altura)</h3>
  <div class="formula">\[x=r\cos\theta,\ y=r\sin\theta,\ z=z\qquad dV=r\,dz\,dr\,d\theta\]</div>
  <p>Úsalas con simetría alrededor del eje z: cilindros (r = a), paraboloides (z = r²), conos (z = r).</p>
  <h3>Esféricas</h3>
  <div class="formula">\[x=\rho\sin\phi\cos\theta,\ \ y=\rho\sin\phi\sin\theta,\ \ z=\rho\cos\phi\qquad dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\]</div>
  <p>ρ = distancia al origen (ρ ≥ 0); φ = ángulo desde el eje z positivo (0 ≤ φ ≤ π); θ = el mismo ángulo de polares. \(\rho^2=x^2+y^2+z^2\).</p>
  <div class="trap">Convención de física vs. matemáticas: algunos libros intercambian θ y φ. Aquí φ se mide desde el polo norte (como la colatitud). Y no olvides el \(\rho^2\sin\phi\).</div>
  <div class="tscroll"><table class="t"><tr><th>Superficie</th><th>Cilíndricas</th><th>Esféricas</th></tr>
   <tr><td>Esfera de radio a</td><td>\(r^2+z^2=a^2\)</td><td>ρ = a</td></tr>
   <tr><td>Cono \(z=\sqrt{x^2+y^2}\)</td><td>z = r</td><td>φ = π/4</td></tr>
   <tr><td>Cilindro \(x^2+y^2=a^2\)</td><td>r = a</td><td>\(\rho\sin\phi=a\)</td></tr>
   <tr><td>Plano z = c</td><td>z = c</td><td>\(\rho\cos\phi=c\)</td></tr></table></div>
  <h3>Volumen de la esfera (por fin, demostrado)</h3>
  <div class="formula">\[V=\int_0^{2\pi}\int_0^\pi\int_0^a\rho^2\sin\phi\,d\rho\,d\phi\,d\theta=2\pi\cdot2\cdot\frac{a^3}3=\frac43\pi a^3\]</div>
  <p>Arquímedes lo obtuvo hacia el 225 a.C. comparando la esfera con un cilindro y un cono; le pidió que lo grabaran en su tumba[^hist-arquimedes].</p>`,
  ex:[
   {t:'Cono de helado en esféricas', q:R`Volumen dentro de la esfera ρ = 2 y sobre el cono φ = π/4.`, s:[
     R`\(\int_0^{2\pi}\int_0^{\pi/4}\int_0^2\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\)`, R`\(=2\pi\cdot\left[-\cos\phi\right]_0^{\pi/4}\cdot\frac83=2\pi\left(1-\frac{\sqrt2}2\right)\frac83\)`, R`\(=\frac{8\pi}{3}(2-\sqrt2)\approx4.91\)`]},
   {t:'Masa de un cilindro con densidad', q:R`Cilindro \(x^2+y^2\le1\), 0 ≤ z ≤ 2, densidad \(\rho=\sqrt{x^2+y^2}\)`, s:[
     R`Cilíndricas: densidad r. \(\int_0^{2\pi}\int_0^1\int_0^2r\cdot r\,dz\,dr\,d\theta\)`, R`\(=2\pi\cdot\frac13\cdot2=\frac{4\pi}3\)`]},
  ],
  qs:[
   {q:R`En esféricas \(dV=\)`, o:[R`\(\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\)`,R`\(\rho\,d\rho\,d\phi\,d\theta\)`,R`\(\rho^2\,d\rho\,d\phi\,d\theta\)`,R`\(\sin\phi\,d\rho\,d\phi\,d\theta\)`], e:'Jacobiano ρ² sin φ.', h:'Dos factores.'},
   {q:R`El cono \(z=\sqrt{x^2+y^2}\) en esféricas`, o:[R`\(\phi=\frac\pi4\)`,R`\(\theta=\frac\pi4\)`,'ρ = 1',R`\(\phi=\frac\pi2\)`], e:'Ángulo de 45° con el eje z.', h:'z = r.'},
   {q:R`En cilíndricas \(dV=\)`, o:[R`\(r\,dz\,dr\,d\theta\)`,R`\(dz\,dr\,d\theta\)`,R`\(r^2dz\,dr\,d\theta\)`,R`\(\rho^2\sin\phi\,dV\)`], e:'Polares + dz.', h:'La r de polares.'},
   {q:R`Rango de φ`, o:[R`\(0\le\phi\le\pi\)`,R`\(0\le\phi\le2\pi\)`,R`\(0\le\phi\le\frac\pi2\)`,R`\(-\pi\le\phi\le\pi\)`], e:'De polo norte a polo sur.', h:'Colatitud.'},
  ]},
/* ---------------- JACOBIANO ---------------- */
{ id:'jacobiano', n:'Cambio de variables y jacobiano', sub:'Transformaciones (u, v) → (x, y) · |J| como factor de escala', tgt:'DEFORMADOR_DE_REGIONES',
  req:['cilesf'], uses:'Explica r y ρ² sen φ; probabilidad (cambio de variables en densidades), mecánica de medios continuos',
  cites:['osc3|§5.7','paul3|Change of Variables','stewart2|§15.9'], see:['jacobiano'],
  lore: R`
  <div class="why">La sustitución u en una variable cambia dx por \(g'(u)\,du\). En varias variables, el factor es el [[jacobiano]]: cuánto <b>estira o encoge el área</b> la transformación. Jacobi lo estudió en 1841.</div>
  <h3>Jacobiano</h3>
  <div class="formula">\[J=\frac{\partial(x,y)}{\partial(u,v)}=\det\begin{pmatrix}x_u&x_v\\y_u&y_v\end{pmatrix}=x_uy_v-x_vy_u\]</div>
  <div class="formula">\[\iint_Rf(x,y)\,dx\,dy=\iint_Sf(x(u,v),y(u,v))\,|J|\,du\,dv\]</div>
  <p>Se usa el <b>valor absoluto</b>. Comprobación: polares \(x=r\cos\theta,y=r\sin\theta\) → \(J=\cos\theta\cdot r\cos\theta-(-r\sin\theta)\sin\theta=r\) ✓.</p>
  <h3>Receta</h3>
  <ol class="recipe">
   <li>Elige u, v a partir de las <b>fronteras</b> de la región (si la región está limitada por x + y = 1, x + y = 3, x − y = 0, x − y = 2 → u = x + y, v = x − y) o del integrando.</li>
   <li>Despeja x, y en función de u, v (o usa \(\frac{\partial(x,y)}{\partial(u,v)}=1\Big/\frac{\partial(u,v)}{\partial(x,y)}\)).</li>
   <li>Calcula |J|. Escribe la nueva región S en el plano uv (normalmente un rectángulo).</li>
   <li>Integra.</li>
  </ol>
  <h3>En tres variables</h3>
  <div class="formula">\[J=\det\begin{pmatrix}x_u&x_v&x_w\\y_u&y_v&y_w\\z_u&z_v&z_w\end{pmatrix}\]</div>
  <p>Para esféricas da \(\rho^2\sin\phi\) (cuentas largas, pero es un determinante 3×3).</p>`,
  ex:[
   {t:'Región en forma de rombo', q:R`\(\displaystyle\iint_R(x+y)^2\,dA\), R limitada por \(x+y=0\), \(x+y=2\), \(x-y=0\), \(x-y=1\).`, s:[
     R`u = x + y ∈ [0, 2], v = x − y ∈ [0, 1]. Despeja: \(x=\frac{u+v}2,\ y=\frac{u-v}2\).`,
     R`\(J=\det\begin{pmatrix}\frac12&\frac12\\\frac12&-\frac12\end{pmatrix}=-\frac14-\frac14=-\frac12\Rightarrow|J|=\frac12\)`,
     R`\(\int_0^1\int_0^2u^2\cdot\frac12\,du\,dv=\frac12\cdot\frac83=\frac43\)`]},
   {t:'Área de una elipse', q:R`Área de \(\frac{x^2}{a^2}+\frac{y^2}{b^2}\le1\)`, s:[R`x = au, y = bv lleva la elipse al disco unitario \(u^2+v^2\le1\).`, R`\(J=ab\)`, R`Área \(=ab\cdot\pi\cdot1^2=\pi ab\)`]},
  ],
  qs:[
   {q:R`Jacobiano de polares`, o:['r','1',R`\(r^2\)`,R`\(\sin\theta\)`], e:'cos θ · r cos θ + r sin θ · sin θ.', h:'Determinante 2×2.'},
   {q:R`Para x = 2u, y = 3v, \(|J|=\)`, o:['6','5','1','2/3'], e:'det diag(2, 3).', h:'Producto de la diagonal.'},
   {q:R`Área de la elipse \(\frac{x^2}{4}+\frac{y^2}{9}\le1\)`, o:[R`\(6\pi\)`,R`\(36\pi\)`,R`\(13\pi\)`,R`\(5\pi\)`], e:'πab = π·2·3.', h:'πab.'},
   {q:R`En el cambio de variables se usa…`, o:[R`\(|J|\)`,'J (con signo)',R`\(J^2\)`,R`\(1/J\) siempre`], e:'Las áreas son positivas.', h:'Valor absoluto.'},
  ]},
/* ---------------- CAMPOS VECTORIALES ---------------- */
{ id:'campos', n:'Campos vectoriales, divergencia y rotacional', sub:'F(x, y, z) · campos conservativos y potencial · ∇·F y ∇×F', tgt:'VIENTO_INVISIBLE',
  req:['gradiente','funvec'], uses:'Integrales de línea, Green, Stokes, divergencia; electromagnetismo (Maxwell), fluidos',
  cites:['osc3|§6.1, 6.5','paul3|Vector Fields','stewart2|§16.1, 16.5'], see:['campo-vectorial','conservativo','divergencia-op','rotacional'],
  lore: R`
  <div class="why">Un [[campo-vectorial|campo vectorial]] asigna una flecha a cada punto: la velocidad del viento, la fuerza de gravedad, el campo eléctrico. Todo el cálculo vectorial es aprender a integrarlos.</div>
  <h3>Ejemplos</h3>
  <div class="tscroll"><table class="t"><tr><th>Campo</th><th>Describe</th></tr>
   <tr><td>\(\vec F=\langle-y,x\rangle\)</td><td>rotación alrededor del origen</td></tr>
   <tr><td>\(\vec F=\langle x,y\rangle\)</td><td>flujo que sale del origen (fuente)</td></tr>
   <tr><td>\(\vec F=-\frac{GMm}{|\vec r|^3}\vec r\)</td><td>gravedad (Newton): apunta al centro, ley del inverso del cuadrado</td></tr>
   <tr><td>\(\nabla f\)</td><td>campo gradiente</td></tr></table></div>
  <h3>Campos conservativos</h3>
  <p>\(\vec F\) es [[conservativo]] si \(\vec F=\nabla f\) para alguna f (la <b>función potencial</b>). La gravedad y el campo eléctrico estático lo son; por eso existe la "energía potencial".</p>
  <h4>Prueba en 2D</h4>
  <div class="formula">\[\vec F=\langle P,Q\rangle\ \text{conservativo (en región simplemente conexa)}\iff\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}\]</div>
  <h4>Hallar el potencial</h4>
  <ol class="recipe"><li>Integra P respecto a x: \(f=\int P\,dx+g(y)\).</li><li>Deriva respecto a y e iguala a Q: despeja \(g'(y)\).</li><li>Integra g′ y escribe f.</li></ol>
  <h3>Operadores: divergencia y rotacional</h3>
  <p>Con \(\nabla=\langle\partial_x,\partial_y,\partial_z\rangle\) y \(\vec F=\langle P,Q,R\rangle\):</p>
  <div class="formula">\[\text{div}\,\vec F=\nabla\cdot\vec F=P_x+Q_y+R_z\qquad\text{rot}\,\vec F=\nabla\times\vec F=\langle R_y-Q_z,\ P_z-R_x,\ Q_x-P_y\rangle\]</div>
  <ol class="recipe">
   <li><b>[[divergencia-op|Divergencia]]</b> (escalar): cuánto <b>sale</b> el fluido de un punto. &gt; 0 fuente, &lt; 0 sumidero, = 0 incompresible.</li>
   <li><b>[[rotacional|Rotacional]]</b> (vector): cuánto <b>gira</b> el fluido alrededor de un punto y en qué eje. Una ruedita de paletas puesta ahí gira si \(\nabla\times\vec F\neq\vec0\).</li>
   <li>F conservativo (en ℝ³ simplemente conexo) ⇔ \(\nabla\times\vec F=\vec0\). Siempre: \(\nabla\times(\nabla f)=\vec0\) y \(\nabla\cdot(\nabla\times\vec F)=0\).</li>
   <li>\(\nabla\cdot\nabla f=\nabla^2f=f_{xx}+f_{yy}+f_{zz}\) es el <b>laplaciano</b>.</li>
  </ol>`,
  ex:[
   {t:'Probar y hallar el potencial', q:R`\(\vec F=\langle2xy+3,\ x^2+4y\rangle\)`, s:[
     R`\(P_y=2x\), \(Q_x=2x\) → iguales → conservativo.`, R`\(f=\int(2xy+3)dx=x^2y+3x+g(y)\)`, R`\(f_y=x^2+g'(y)=x^2+4y\Rightarrow g'=4y\Rightarrow g=2y^2\)`, R`\(f=x^2y+3x+2y^2+C\)`]},
   {t:'Divergencia y rotacional', q:R`\(\vec F=\langle xz,\ xyz,\ -y^2\rangle\)`, s:[
     R`div: \(z+xz+0=z(1+x)\)`, R`rot: \(\langle-2y-xy,\ x-0,\ yz-0\rangle=\langle-y(2+x),\ x,\ yz\rangle\)`]},
  ],
  qs:[
   {q:R`¿Es conservativo \(\langle y,x\rangle\)?`, o:['Sí, f = xy','No','Solo en x > 0','Sí, f = x² + y²'], e:'P_y = 1 = Q_x.', h:'P_y vs Q_x.'},
   {q:R`¿Es conservativo \(\langle -y,x\rangle\)?`, o:['No','Sí','Sí, f = xy','Solo en el origen'], e:'P_y = −1 ≠ 1 = Q_x: gira.', h:'Rotación.'},
   {q:R`div de \(\langle x^2,y^2,z^2\rangle\)`, o:['2x + 2y + 2z',R`\(\langle2x,2y,2z\rangle\)`,'0','6'], e:'Suma de parciales.', h:'Escalar.'},
   {q:R`\(\nabla\times(\nabla f)=\)`, o:[R`\(\vec0\)`,R`\(\nabla^2f\)`,'f','No definido'], e:'Los gradientes no rotan (Clairaut).', h:'Siempre.'},
   {q:R`Divergencia positiva en un punto indica…`, o:['Fuente (sale fluido)','Sumidero','Rotación','Nada'], e:'Flujo neto saliente.', h:'div > 0.'},
  ]},
/* ---------------- INTEGRALES DE LÍNEA ---------------- */
{ id:'linea', n:'Integrales de línea', sub:'∫ f ds · trabajo ∫ F·dr · teorema fundamental para integrales de línea', tgt:'CAMINO_DE_TRABAJO',
  req:['campos'], uses:'Trabajo, circulación, teorema de Green y de Stokes, potencial eléctrico',
  cites:['osc3|§6.2–6.3','paul3|Line Integrals','stewart2|§16.2–16.3'], see:['integral-linea','conservativo'],
  lore: R`
  <div class="why">Una [[integral-linea|integral de línea]] integra <b>a lo largo de una curva</b>. La más importante: el <b>trabajo</b> que hace un campo de fuerza sobre una partícula que se mueve por un camino.</div>
  <h3>Integral de línea de un escalar</h3>
  <div class="formula">\[\int_Cf\,ds=\int_a^bf(\vec r(t))\,|\vec r\,'(t)|\,dt\]</div>
  <p>Si f es la densidad de un alambre, da su masa. Con f = 1 da la [[longitud-arco|longitud]] de C.</p>
  <h3>Integral de línea de un campo (trabajo)</h3>
  <div class="formula">\[W=\int_C\vec F\cdot d\vec r=\int_a^b\vec F(\vec r(t))\cdot\vec r\,'(t)\,dt=\int_CP\,dx+Q\,dy+R\,dz\]</div>
  <ol class="recipe">
   <li><b>Parametriza</b> la curva: segmento de A a B: \(\vec r(t)=A+t(B-A)\), 0 ≤ t ≤ 1. Círculo: \(\langle a\cos t,a\sin t\rangle\). Gráfica y = g(x): \(\langle t,g(t)\rangle\).</li>
   <li>Sustituye x(t), y(t) en F.</li><li>Calcula \(\vec r\,'(t)\) y haz el producto punto.</li><li>Integra en t.</li>
  </ol>
  <div class="trap">Si recorres la curva al revés, \(\int_{-C}\vec F\cdot d\vec r=-\int_C\vec F\cdot d\vec r\) (el trabajo cambia de signo). En cambio \(\int f\,ds\) no cambia.</div>
  <h3>Teorema fundamental para integrales de línea</h3>
  <div class="formula">\[\int_C\nabla f\cdot d\vec r=f(\vec r(b))-f(\vec r(a))\]</div>
  <p>Es el [[tfc|TFC]] en versión vectorial. Consecuencias para F [[conservativo]]:</p>
  <ol class="recipe"><li>La integral <b>no depende del camino</b>, solo de los extremos.</li><li>Sobre cualquier curva <b>cerrada</b>, \(\oint\vec F\cdot d\vec r=0\).</li><li>Para calcular: halla el potencial y evalúa en los extremos (¡sin parametrizar!).</li></ol>
  <p>Por eso la energía se conserva en un campo gravitatorio: el trabajo para subir y volver al mismo punto es cero.</p>`,
  ex:[
   {t:'Trabajo sobre un cuarto de círculo', q:R`\(\vec F=\langle -y,x\rangle\), C: \(x^2+y^2=1\) de (1, 0) a (0, 1) antihorario`, s:[
     R`\(\vec r=\langle\cos t,\sin t\rangle\), \(0\le t\le\frac\pi2\); \(\vec r\,'=\langle-\sin t,\cos t\rangle\)`,
     R`\(\vec F(\vec r)=\langle-\sin t,\cos t\rangle\) → producto punto \(\sin^2t+\cos^2t=1\)`, R`\(W=\int_0^{\pi/2}1\,dt=\frac\pi2\)`]},
   {t:'Usar el potencial', q:R`\(\int_C(2xy+3)dx+(x^2+4y)dy\), C cualquier curva de (0, 0) a (1, 2)`, s:[
     R`Es conservativo con \(f=x^2y+3x+2y^2\) (sección anterior).`, R`\(f(1,2)-f(0,0)=2+3+8-0=13\)`]},
  ],
  qs:[
   {q:R`Parametrización del segmento de (0,0) a (2,4)`, o:[R`\(\langle2t,4t\rangle,\ 0\le t\le1\)`,R`\(\langle t,4t\rangle,\ 0\le t\le2\)`,R`\(\langle2,4\rangle t^2\)`,R`\(\langle t,t\rangle\)`], e:'A + t(B − A).', h:'Interpolación lineal.'},
   {q:R`Si F es conservativo, \(\oint_C\vec F\cdot d\vec r\) sobre una curva cerrada`, o:['0','Depende de la curva','2π','No existe'], e:'f(fin) − f(inicio) = 0.', h:'Mismo punto inicial y final.'},
   {q:R`\(\int_C\nabla f\cdot d\vec r\) con f = xyz, de (0,0,0) a (1,2,3)`, o:['6','0','1','14'], e:'f(1,2,3) − f(0,0,0).', h:'Teorema fundamental.'},
   {q:R`Invertir la orientación de C en \(\int_C\vec F\cdot d\vec r\)…`, o:['Cambia el signo','No cambia nada','Lo duplica','Lo anula'], e:'Recorrer al revés.', h:'Trabajo de ida vs vuelta.'},
  ]},
/* ---------------- GREEN ---------------- */
{ id:'green', n:'Teorema de Green', sub:'Circulación en el borde = rotación dentro · área con una integral de línea', tgt:'FRONTERA_Y_REGION',
  req:['linea','dobles'], uses:'Stokes (su versión 3D), áreas con el planímetro, flujo en el plano',
  cites:['osc3|§6.4','paul3|Green’s Theorem','stewart2|§16.4','hist-green'], see:['green','stokes','integral-linea'],
  lore: R`
  <div class="why">George Green, un molinero autodidacta, publicó en 1828 que la integral de línea alrededor del <b>borde</b> de una región es igual a una integral doble <b>adentro</b>. Es el primero de los tres grandes teoremas del cálculo vectorial[^hist-green].</div>
  <h3>Enunciado</h3>
  <div class="formula">\[\oint_C P\,dx+Q\,dy=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dA\]</div>
  <p>C es la frontera de D, simple, cerrada y recorrida en <b>sentido positivo</b> (antihorario: la región queda a la izquierda). P y Q con parciales continuas.</p>
  <div class="trap">Si la curva va en sentido horario, cambia el signo. Y si F no está definido en algún punto de D (como \(\frac{\langle-y,x\rangle}{x^2+y^2}\) en el origen), Green no aplica directamente.</div>
  <h3>Intuición</h3>
  <p>\(Q_x-P_y\) es la componente k del [[rotacional]]: la rotación "microscópica" en cada punto. Al sumar todas las ruedecitas, las circulaciones internas se cancelan entre vecinas y solo sobrevive la del borde.</p>
  <h3>Cuándo usarlo</h3>
  <ol class="recipe"><li>La curva cerrada tiene varios tramos (triángulo, cuadrado) → una sola integral doble en lugar de 3–4 de línea.</li><li>\(Q_x-P_y\) es simple (una constante, por ejemplo).</li><li>Al revés: una integral doble difícil puede ser una de línea fácil.</li></ol>
  <h3>Área con una integral de línea</h3>
  <div class="formula">\[A=\oint_Cx\,dy=-\oint_Cy\,dx=\frac12\oint_C(x\,dy-y\,dx)\]</div>
  <p>Así funciona el <b>planímetro</b>, el instrumento que mide áreas recorriendo el contorno de un mapa. Elipse: \(\vec r=\langle a\cos t,b\sin t\rangle\Rightarrow\frac12\int_0^{2\pi}ab\,dt=\pi ab\).</p>
  <h3>Forma de flujo (divergencia en el plano)</h3>
  <div class="formula">\[\oint_C\vec F\cdot\hat n\,ds=\iint_D\left(P_x+Q_y\right)dA\]</div>
  <p>Lo que sale por el borde = lo que se genera adentro. Es la versión 2D del [[divergencia-teo|teorema de la divergencia]].</p>`,
  ex:[
   {t:'Triángulo', q:R`\(\oint_Cx^4dx+xy\,dy\), C: triángulo (0,0), (1,0), (0,1) antihorario`, s:[
     R`\(P=x^4\), \(Q=xy\): \(Q_x-P_y=y-0=y\)`, R`\(\iint_Dy\,dA=\int_0^1\int_0^{1-x}y\,dy\,dx=\int_0^1\frac{(1-x)^2}{2}dx=\frac16\)`]},
   {t:'Círculo', q:R`\(\oint_C(3y-e^{\sin x})dx+(7x+\sqrt{y^4+1})dy\), C: \(x^2+y^2=9\)`, s:[
     R`Parametrizar sería una pesadilla. \(Q_x-P_y=7-3=4\).`, R`\(\iint_D4\,dA=4\cdot\text{área}=4\cdot9\pi=36\pi\)`]},
  ],
  qs:[
   {q:R`En Green, el integrando doble es`, o:[R`\(Q_x-P_y\)`,R`\(P_x-Q_y\)`,R`\(P_x+Q_y\)`,R`\(P_y-Q_x\)`], e:'Componente k del rotacional.', h:'“Q x menos P y”.'},
   {q:R`Sentido positivo en Green`, o:['Antihorario (región a la izquierda)','Horario','Cualquiera','Hacia afuera'], e:'Convención.', h:'Mano izquierda adentro.'},
   {q:R`\(\oint_C-y\,dx+x\,dy\) en el círculo de radio 2`, o:[R`\(8\pi\)`,R`\(4\pi\)`,'0',R`\(2\pi\)`], e:'Q_x − P_y = 2; 2·4π.', h:'= 2·área.'},
   {q:R`Área encerrada por C con Green`, o:[R`\(\frac12\oint x\,dy-y\,dx\)`,R`\(\oint x\,dx\)`,R`\(\oint y\,dy\)`,R`\(\oint ds\)`], e:'Q_x − P_y = 1.', h:'Fórmula del planímetro.'},
  ]},
/* ---------------- SUPERFICIES Y FLUJO ---------------- */
{ id:'superficies', n:'Superficies paramétricas e integrales de superficie', sub:'r(u, v) · área de superficie · flujo ∬ F·dS', tgt:'MEMBRANA_DE_FLUJO',
  req:['dobles-polar','campos'], uses:'Teorema de Stokes y de la divergencia; flujo eléctrico (ley de Gauss), caudal',
  cites:['osc3|§6.6','paul3|Surface Integrals','stewart2|§16.6–16.7'], see:['flujo','integral-superficie'],
  lore: R`
  <div class="why">Así como una curva se describe con un parámetro t, una superficie se describe con <b>dos</b>: \(\vec r(u,v)\). Con eso medimos área de superficies curvas y el [[flujo]]: cuánto fluido atraviesa una membrana por segundo.</div>
  <h3>Superficies paramétricas</h3>
  <div class="tscroll"><table class="t"><tr><th>Superficie</th><th>\(\vec r(u,v)\)</th></tr>
   <tr><td>Gráfica z = g(x, y)</td><td>\(\langle x,y,g(x,y)\rangle\)</td></tr>
   <tr><td>Esfera de radio a</td><td>\(\langle a\sin\phi\cos\theta,a\sin\phi\sin\theta,a\cos\phi\rangle\)</td></tr>
   <tr><td>Cilindro de radio a</td><td>\(\langle a\cos\theta,a\sin\theta,z\rangle\)</td></tr>
   <tr><td>Plano por P con direcciones a, b</td><td>\(P+u\vec a+v\vec b\)</td></tr></table></div>
  <h3>Vector normal y elemento de área</h3>
  <div class="formula">\[\vec n=\vec r_u\times\vec r_v\qquad dS=|\vec r_u\times\vec r_v|\,du\,dv\]</div>
  <p>Para una gráfica z = g(x, y): \(dS=\sqrt{1+g_x^2+g_y^2}\,dA\) y \(\vec n=\langle-g_x,-g_y,1\rangle\) (hacia arriba).</p>
  <h3>Área de superficie e integral de un escalar</h3>
  <div class="formula">\[A(S)=\iint_D|\vec r_u\times\vec r_v|\,du\,dv\qquad\iint_Sf\,dS=\iint_Df(\vec r(u,v))\,|\vec r_u\times\vec r_v|\,du\,dv\]</div>
  <p>Para la esfera de radio a: \(|\vec r_\phi\times\vec r_\theta|=a^2\sin\phi\) → \(A=4\pi a^2\).</p>
  <h3>Flujo de un campo a través de una superficie</h3>
  <div class="formula">\[\iint_S\vec F\cdot d\vec S=\iint_S\vec F\cdot\hat n\,dS=\iint_D\vec F(\vec r(u,v))\cdot(\vec r_u\times\vec r_v)\,du\,dv\]</div>
  <ol class="recipe"><li>Parametriza S y calcula \(\vec r_u\times\vec r_v\).</li><li>Revisa la <b>orientación</b>: que apunte hacia donde pide el problema (afuera / arriba). Si no, cambia el signo.</li><li>Sustituye en F, producto punto, integra en D.</li></ol>
  <div class="trap">Superficies <b>orientables</b> tienen dos caras. La cinta de Möbius tiene una sola: no se le puede calcular flujo.</div>`,
  ex:[
   {t:'Área de un paraboloide', q:R`Área de \(z=x^2+y^2\) bajo z = 4`, s:[
     R`\(dS=\sqrt{1+4x^2+4y^2}\,dA\); D: disco de radio 2 → polares.`, R`\(\int_0^{2\pi}\int_0^2\sqrt{1+4r^2}\,r\,dr\,d\theta=2\pi\cdot\frac{1}{12}\left[(1+4r^2)^{3/2}\right]_0^2\)`, R`\(=\frac{\pi}{6}\left(17\sqrt{17}-1\right)\approx36.18\)`]},
   {t:'Flujo a través de un plano', q:R`Flujo de \(\vec F=\langle0,0,z\rangle\) hacia arriba a través de \(z=1-x-y\) en el primer octante.`, s:[
     R`\(\vec n=\langle-g_x,-g_y,1\rangle=\langle1,1,1\rangle\); \(\vec F\cdot\vec n=z=1-x-y\)`, R`\(\iint_D(1-x-y)dA\) sobre el triángulo = \(\frac16\)`]},
  ],
  qs:[
   {q:R`Elemento de área para z = g(x, y)`, o:[R`\(\sqrt{1+g_x^2+g_y^2}\,dA\)`,R`\(dA\)`,R`\(\sqrt{g_x^2+g_y^2}\,dA\)`,R`\((1+g_x+g_y)dA\)`], e:'|r_x × r_y|.', h:'Como la longitud de arco en 2D.'},
   {q:R`Área de la esfera de radio 2`, o:[R`\(16\pi\)`,R`\(8\pi\)`,R`\(4\pi\)`,R`\(\frac{32\pi}3\)`], e:'4πa².', h:'∫∫a² sin φ.'},
   {q:R`El flujo mide…`, o:['Cuánto campo atraviesa la superficie','La longitud del borde','La rotación','El volumen'], e:'∬F·n dS.', h:'Caudal.'},
   {q:R`Vector normal de \(\vec r(u,v)\)`, o:[R`\(\vec r_u\times\vec r_v\)`,R`\(\vec r_u\cdot\vec r_v\)`,R`\(\vec r_u+\vec r_v\)`,R`\(\nabla\vec r\)`], e:'Perpendicular a ambas tangentes.', h:'Producto cruz.'},
  ]},
/* ---------------- STOKES ---------------- */
{ id:'stokes', n:'Teorema de Stokes', sub:'Circulación en el borde = flujo del rotacional · Green en 3D', tgt:'CORRIENTE_CIRCULAR',
  req:['superficies','green'], uses:'Electromagnetismo (leyes de Faraday y Ampère), dinámica de fluidos (vorticidad)',
  cites:['osc3|§6.7','paul3|Stokes’ Theorem','stewart2|§16.8','hist-stokes'], see:['stokes','green','rotacional'],
  lore: R`
  <div class="why">El [[green|teorema de Green]] vive en el plano. [[stokes|Stokes]] lo lleva a una superficie curva en el espacio: la circulación alrededor del borde de una superficie es el flujo del [[rotacional]] a través de ella. Kelvin se lo escribió a Stokes en 1850; Stokes lo puso como pregunta de examen en 1854[^hist-stokes].</div>
  <h3>Enunciado</h3>
  <div class="formula">\[\oint_C\vec F\cdot d\vec r=\iint_S(\nabla\times\vec F)\cdot d\vec S\]</div>
  <p>C es el borde de S, con <b>orientación compatible</b> (regla de la mano derecha: si el pulgar apunta en la dirección de \(\vec n\), los dedos indican el sentido de C; caminando por el borde con la cabeza hacia \(\vec n\), la superficie queda a la izquierda).</p>
  <h3>Consecuencias</h3>
  <ol class="recipe">
   <li>Si S es plana en el plano xy con \(\vec n=\mathbf k\): se reduce exactamente a Green.</li>
   <li>El flujo del rotacional <b>solo depende del borde</b>: cualquier superficie con el mismo borde da lo mismo. Truco: cambia una semiesfera por el disco plano.</li>
   <li>Si \(\nabla\times\vec F=\vec0\), la circulación en cualquier curva cerrada es 0 (conservativo).</li>
  </ol>
  <h3>Cuándo usarlo</h3>
  <ol class="recipe"><li>Integral de línea difícil en una curva espacial (intersección de superficies) → flujo del rotacional sobre la superficie más simple que la tenga de borde.</li><li>Flujo de un rotacional sobre una superficie fea → integral de línea en el borde.</li></ol>
  <div class="tip">En física: la ley de Faraday \(\oint\vec E\cdot d\vec r=-\frac{d}{dt}\iint\vec B\cdot d\vec S\) se convierte con Stokes en la ecuación de Maxwell \(\nabla\times\vec E=-\frac{\partial\vec B}{\partial t}\).</div>`,
  ex:[
   {t:'Cambiar una curva espacial por un disco', q:R`\(\oint_C\vec F\cdot d\vec r\), \(\vec F=\langle -y^2,x,z^2\rangle\), C: intersección de \(y+z=2\) con \(x^2+y^2=1\), antihorario visto desde arriba.`, s:[
     R`\(\nabla\times\vec F=\langle0,0,1+2y\rangle\)`, R`S: la parte del plano z = 2 − y sobre el disco; \(\vec n=\langle0,1,1\rangle\) (hacia arriba).`,
     R`\(\iint_D(1+2y)\,dA\) sobre el disco unitario = área + 0 (por simetría \(\iint y=0\))`, R`\(=\pi\)`]},
   {t:'Superficie con el mismo borde', q:R`Flujo de \(\nabla\times\vec F\) sobre la semiesfera superior de radio 1, con \(\vec F=\langle -y,x,0\rangle\)`, s:[
     R`El borde es el círculo unitario en z = 0. Por Stokes basta \(\oint_C\vec F\cdot d\vec r\).`, R`Con \(\langle\cos t,\sin t,0\rangle\): \(\vec F\cdot\vec r\,'=\sin^2t+\cos^2t=1\)`, R`Resultado \(2\pi\).`]},
  ],
  qs:[
   {q:R`Stokes relaciona…`, o:['Circulación en el borde y flujo del rotacional','Flujo y divergencia','Área y longitud','Gradiente y potencial'], e:'∮F·dr = ∬(∇×F)·dS.', h:'Borde de una superficie.'},
   {q:R`Si S es plana en el plano xy, Stokes se convierte en…`, o:['Green','Divergencia','TFC de línea','Fubini'], e:'(∇×F)·k = Q_x − P_y.', h:'Versión 2D.'},
   {q:R`Dos superficies con el mismo borde dan el mismo flujo de…`, o:[R`\(\nabla\times\vec F\)`,R`\(\vec F\)`,'Cualquier campo','f'], e:'Solo depende del borde.', h:'Lo que aparece en Stokes.'},
   {q:R`Si \(\nabla\times\vec F=\vec0\), \(\oint_C\vec F\cdot d\vec r=\)`, o:['0','2π','El área','Depende de C'], e:'Flujo de 0 es 0.', h:'Irrotacional.'},
  ]},
/* ---------------- DIVERGENCIA ---------------- */
{ id:'divergencia', n:'Teorema de la divergencia (Gauss–Ostrogradski)', sub:'Flujo hacia afuera = ∭ div F · el gran resumen del cálculo', tgt:'FUENTE_Y_SUMIDERO',
  req:['superficies','triples'], uses:'Ley de Gauss del electromagnetismo, ecuación de continuidad de fluidos, ecuación del calor',
  cites:['osc3|§6.8','paul3|Divergence Theorem','stewart2|§16.9','hist-gauss'], see:['divergencia-teo','divergencia-op','flujo'],
  lore: R`
  <div class="why">El flujo neto que <b>sale</b> por la superficie cerrada que envuelve un sólido es igual a la suma de todas las fuentes de adentro (la [[divergencia-op|divergencia]]). Gauss lo usó en 1813 y Ostrogradski lo demostró en general en 1826[^hist-gauss].</div>
  <h3>Enunciado</h3>
  <div class="formula">\[\iint_S\vec F\cdot d\vec S=\iiint_E\nabla\cdot\vec F\,dV\]</div>
  <p>S es la frontera <b>cerrada</b> del sólido E, orientada <b>hacia afuera</b>.</p>
  <h3>Cuándo usarlo</h3>
  <ol class="recipe">
   <li>Superficie cerrada con varias caras (cubo, cilindro con tapas): una triple en lugar de 6 de superficie.</li>
   <li>La divergencia es simple (constante, o algo que en esféricas/cilíndricas se integra fácil).</li>
   <li>Si la superficie <b>no</b> es cerrada: ciérrala con una tapa, aplica el teorema y resta el flujo de la tapa.</li>
  </ol>
  <h3>Ley de Gauss</h3>
  <p>Para el campo de una carga puntual \(\vec E=\frac{q}{4\pi\varepsilon_0}\frac{\vec r}{|\vec r|^3}\), la divergencia es 0 fuera del origen, y el flujo por cualquier superficie que encierre la carga vale \(\frac{q}{\varepsilon_0}\). Con el teorema: \(\nabla\cdot\vec E=\frac{\rho}{\varepsilon_0}\), una de las ecuaciones de Maxwell.</p>
  <h3>El gran resumen: todos son el mismo teorema</h3>
  <div class="tscroll"><table class="t"><tr><th>Teorema</th><th>Integral de la "derivada" en el interior</th><th>= lo de la frontera</th></tr>
   <tr><td>[[tfc|TFC]]</td><td>\(\int_a^bF'(x)\,dx\)</td><td>\(F(b)-F(a)\)</td></tr>
   <tr><td>Fundamental de línea</td><td>\(\int_C\nabla f\cdot d\vec r\)</td><td>\(f(B)-f(A)\)</td></tr>
   <tr><td>[[green|Green]]</td><td>\(\iint_D(Q_x-P_y)\,dA\)</td><td>\(\oint_C P\,dx+Q\,dy\)</td></tr>
   <tr><td>[[stokes|Stokes]]</td><td>\(\iint_S(\nabla\times\vec F)\cdot d\vec S\)</td><td>\(\oint_C\vec F\cdot d\vec r\)</td></tr>
   <tr><td>Divergencia</td><td>\(\iiint_E\nabla\cdot\vec F\,dV\)</td><td>\(\oint\!\!\oint_S\vec F\cdot d\vec S\)</td></tr></table></div>
  <p>Todos dicen: <b>integrar una derivada sobre una región = evaluar la función en el borde</b>. En matemáticas modernas se escribe en una línea, el teorema de Stokes generalizado: \(\int_\Omega d\omega=\int_{\partial\Omega}\omega\). Así termina el camino que empezó con Arquímedes sumando rebanadas de una parábola.</p>`,
  ex:[
   {t:'Flujo a través de un cubo', q:R`Flujo hacia afuera de \(\vec F=\langle x^2,y^2,z^2\rangle\) por el cubo \([0,1]^3\)`, s:[
     R`div = 2x + 2y + 2z.`, R`\(\iiint(2x+2y+2z)dV=3\cdot\int_0^1\int_0^1\int_0^12x\,dx\,dy\,dz=3\cdot1\)`, R`Flujo = 3 (en lugar de 6 integrales de superficie).`]},
   {t:'Esfera con esféricas', q:R`Flujo de \(\vec F=\langle x,y,z\rangle\) hacia afuera por la esfera de radio a`, s:[
     R`div F = 3.`, R`\(\iiint_E3\,dV=3\cdot\frac43\pi a^3=4\pi a^3\)`, R`Chequeo directo: en la esfera \(\vec F\cdot\hat n=a\), y \(a\cdot4\pi a^2=4\pi a^3\) ✓`]},
  ],
  qs:[
   {q:R`El teorema de la divergencia relaciona…`, o:['Flujo por una superficie cerrada y ∭ div F','Circulación y rotacional','Línea y doble','Gradiente y potencial'], e:'∯F·dS = ∭∇·F dV.', h:'Sólido y su piel.'},
   {q:R`Flujo de \(\langle x,y,z\rangle\) por la esfera unitaria`, o:[R`\(4\pi\)`,R`\(\frac43\pi\)`,'0',R`\(2\pi\)`], e:'3 · (4/3)π.', h:'div = 3.'},
   {q:R`Si div F = 0 en todo E, el flujo neto por su frontera es`, o:['0','El volumen','Infinito','Depende de F'], e:'Incompresible: lo que entra sale.', h:'Integral de 0.'},
   {q:R`La orientación en el teorema de la divergencia es…`, o:['Hacia afuera','Hacia adentro','Antihoraria','Cualquiera'], e:'Normal exterior.', h:'Sale del sólido.'},
  ]},
/* ---------------- EVALUACIÓN MULTIVARIABLE ---------------- */
{ id:'bossIII', n:'Evaluación final: Cálculo multivariable', sub:'Mixto · vectores, parciales, integrales múltiples y teoremas · 15 min', tgt:'OPERADOR_NABLA', boss:true, time:15*60, hearts:4,
  req:['divergencia','stokes','lagrange'], uses:'Ecuaciones diferenciales, física, ingeniería, machine learning',
  lore: R`
  <div class="why">Última parada de la línea de tiempo. Todo mezclado.</div>
  <h3>Árbol de decisión</h3>
  <ol class="recipe">
   <li>¿Pendiente/dirección? → [[gradiente]] y derivada direccional. ¿Máx/mín? → ∇f = 0 + hessiano; con restricción → Lagrange.</li>
   <li>¿Región circular? → polares (r dr dθ). ¿Cilindro/cono? → cilíndricas. ¿Esfera? → esféricas (ρ² sen φ).</li>
   <li>¿Integral de línea? ¿F conservativo? → potencial. ¿Curva cerrada en el plano? → Green. ¿En el espacio? → Stokes.</li>
   <li>¿Flujo por superficie cerrada? → divergencia. ¿Abierta? → parametriza (o ciérrala).</li>
  </ol>`,
  ex:[],
  qs:[
   {q:R`\(\langle1,0,1\rangle\times\langle0,1,0\rangle\)`, o:[R`\(\langle-1,0,1\rangle\)`,R`\(\langle1,0,-1\rangle\)`,R`\(\langle0,0,0\rangle\)`,R`\(\langle1,1,1\rangle\)`], e:'⟨0·0 − 1·1, 1·0 − 1·0, 1·1 − 0·0⟩.', h:'Determinante.'},
   {q:R`\(f=x^2y^3\). \(f_{xy}=\)`, o:[R`\(6xy^2\)`,R`\(2xy^3\)`,R`\(3x^2y^2\)`,R`\(6x^2y\)`], e:'f_x = 2xy³ → ∂/∂y = 6xy².', h:'Primero x, luego y.'},
   {q:R`Tasa máxima de \(f=xy\) en (3, 4)`, o:['5','7','12','1'], e:'|∇f| = |⟨4, 3⟩|.', h:'Magnitud del gradiente.'},
   {q:R`Punto crítico de \(f=x^2+xy+y^2\)`, o:['(0, 0), mínimo','(0, 0), silla','(1, 1), mínimo','No tiene'], e:'D = 4 − 1 = 3 > 0, f_xx = 2 > 0.', h:'Hessiano.'},
   {q:R`\(\displaystyle\int_0^{2\pi}\int_0^1 r^3\,dr\,d\theta\) (ya en polares)`, o:[R`\(\frac\pi2\)`,R`\(\pi\)`,R`\(2\pi\)`,R`\(\frac\pi4\)`], e:'2π · 1/4.', h:'Integra r³.'},
   {q:R`Volumen de la bola de radio 3 con esféricas`, o:[R`\(36\pi\)`,R`\(27\pi\)`,R`\(12\pi\)`,R`\(9\pi\)`], e:'(4/3)π·27.', h:'∫∫∫ρ² sin φ.'},
   {q:R`\(\oint_C x\,dy\) en el cuadrado [0,2]², antihorario`, o:['4','2','0','8'], e:'Green: ∬1 dA = área.', h:'Q_x − P_y = 1.'},
   {q:R`Flujo de \(\langle 2x,0,0\rangle\) hacia afuera del cubo [0,1]³`, o:['2','0','6','1'], e:'div = 2; volumen 1.', h:'Divergencia.'},
   {q:R`¿Es conservativo \(\langle 2x,2y,2z\rangle\)?`, o:['Sí, f = x² + y² + z²','No','Solo en el plano','Sí, f = xyz'], e:'Es ∇(x² + y² + z²).', h:'Busca el potencial.'},
   {q:R`Máximo de \(f=x+2y\) en \(x^2+y^2=5\)`, o:['5','√5','10','3'], e:'Lagrange: (1, 2) → 1 + 4.', h:'∇f ∥ ∇g.'},
  ]},
);
