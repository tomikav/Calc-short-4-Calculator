/* ============ FIGURAS SVG ============
   figSVG(spec) dibuja una gráfica explicativa: ejes, curvas, región sombreada,
   rebanada representativa, eje de giro, disco/arandela, arco y etiquetas.
   spec = { xr:[x0,x1], yr:[y0,y1], xt:[[v,'lab']], yt:[[v,'lab']],
            fills:[{top,bot,a,b,c}] | [{right,left,a,b,c,dir:'y'}],
            curves:[{f,c,lab,lx,dash}], ycurves:[{g,a,b,c,lab}], params:[{px,py,t0,t1,c}],
            slice:{x,top,bot,c} | {y,right,left,c}, axis:{y}|{x}, disk:true, washer:true,
            arc:{f,a,b,c} | {px,py,t0,t1,c}, pts:[[x,y,'lab']], labels:[[x,y,'txt',c]], title }  */
const FIGC={blue:'#0057ff',red:'#e10600',yel:'#ffb000',green:'#00a37a',purple:'#8a2be2',ink:'#0b0b0b'};
let FIG_ID=0;
function figSVG(sp,opt){
  opt=opt||{}; const W=opt.w||340, H=opt.h||240, mini=!!opt.mini, P=mini?6:26;
  const [x0,x1]=sp.xr, [y0,y1]=sp.yr;
  const X=x=>P+(x-x0)/(x1-x0)*(W-2*P), Y=y=>H-P-(y-y0)/(y1-y0)*(H-2*P);
  const id='fc'+(++FIG_ID); const n=mini?60:140;
  const col=c=>FIGC[c]||c||FIGC.blue;
  const path=(pts)=>{ let d='',pen=false; pts.forEach(([x,y])=>{ if(!isFinite(y)||Math.abs(y)>1e4){pen=false;return;} d+=(pen?'L':'M')+X(x).toFixed(1)+' '+Y(y).toFixed(1); pen=true; }); return d; };
  const samp=(f,a,b)=>{ const r=[]; for(let i=0;i<=n;i++){ const x=a+(b-a)*i/n; r.push([x,f(x)]); } return r; };
  let g=`<svg class="fig${mini?' mini':''}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="${id}"><rect x="${P}" y="${P}" width="${W-2*P}" height="${H-2*P}"/></clipPath>
    <pattern id="${id}h" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="currentColor" opacity=".12"/><line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" stroke-width="2" opacity=".35"/></pattern></defs>`;
  // cuadrícula
  if(!mini){ const sx=sp.gx||figStep(x1-x0), sy=sp.gy||figStep(y1-y0);
    for(let v=Math.ceil(x0/sx)*sx; v<=x1+1e-9; v+=sx) g+=`<line class="fg-grid" x1="${X(v)}" y1="${P}" x2="${X(v)}" y2="${H-P}"/>`;
    for(let v=Math.ceil(y0/sy)*sy; v<=y1+1e-9; v+=sy) g+=`<line class="fg-grid" x1="${P}" y1="${Y(v)}" x2="${W-P}" y2="${Y(v)}"/>`; }
  g+=`<g clip-path="url(#${id})">`;
  // regiones
  (sp.fills||[]).forEach(F=>{ const c=col(F.c); let pts;
    if(F.dir==='y'){ const up=[],dn=[]; for(let i=0;i<=n;i++){ const y=F.a+(F.b-F.a)*i/n; up.push([F.right(y),y]); dn.push([F.left(y),y]); }
      pts=up.concat(dn.reverse()).map(([x,y])=>`${X(x).toFixed(1)},${Y(y).toFixed(1)}`); }
    else { const tp=samp(F.top,F.a,F.b), bt=samp(F.bot||(()=>0),F.a,F.b).reverse(); pts=tp.concat(bt).map(([x,y])=>`${X(x).toFixed(1)},${Y(y).toFixed(1)}`); }
    g+=`<polygon points="${pts.join(' ')}" fill="${c}" fill-opacity="${F.op||.2}" stroke="none" style="color:${c}"/>`;
    if(F.hatch) g+=`<polygon points="${pts.join(' ')}" fill="url(#${id}h)" style="color:${c}"/>`; });
  // sólido sugerido (reflejo sobre el eje)
  if(sp.mirror&&sp.axis&&sp.axis.y!==undefined){ const ay=sp.axis.y; (sp.curves||[]).filter(c=>!c.nomirror).forEach(C=>{ g+=`<path d="${path(samp(x=>2*ay-C.f(x),C.a??x0,C.b??x1))}" fill="none" stroke="${col(C.c)}" stroke-width="1.4" stroke-dasharray="3 3" opacity=".5"/>`; }); }
  if(sp.mirror&&sp.axis&&sp.axis.x!==undefined){ const ax=sp.axis.x; (sp.curves||[]).filter(c=>!c.nomirror).forEach(C=>{ const pts=samp(C.f,C.a??x0,C.b??x1).map(([x,y])=>[2*ax-x,y]); g+=`<path d="${path(pts)}" fill="none" stroke="${col(C.c)}" stroke-width="1.4" stroke-dasharray="3 3" opacity=".5"/>`; }); }
  // rebanada
  if(sp.slice){ const S=sp.slice, c=col(S.c||'red');
    if(S.y===undefined){ const w=S.w||(x1-x0)/28, t=S.top(S.x), b=S.bot?S.bot(S.x):0;
      g+=`<rect x="${X(S.x-w/2)}" y="${Y(Math.max(t,b))}" width="${X(S.x+w/2)-X(S.x-w/2)}" height="${Math.abs(Y(t)-Y(b))}" fill="${c}" fill-opacity=".85"/>`;
      if(sp.axis&&sp.axis.y!==undefined&&(sp.disk||sp.washer)){ const ay=sp.axis.y, R=Math.max(Math.abs(t-ay),Math.abs(b-ay)), r=Math.min(Math.abs(t-ay),Math.abs(b-ay));
        const rx=Math.max(5,(X(x0+(x1-x0)/14)-X(x0)));
        g+=`<ellipse cx="${X(S.x)}" cy="${Y(ay)}" rx="${rx}" ry="${Math.abs(Y(ay+R)-Y(ay))}" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="1.6"/>`;
        if(sp.washer&&r>1e-6) g+=`<ellipse cx="${X(S.x)}" cy="${Y(ay)}" rx="${rx*.8}" ry="${Math.abs(Y(ay+r)-Y(ay))}" fill="#fff" fill-opacity=".9" stroke="${c}" stroke-width="1.4" stroke-dasharray="3 2"/>`; }
    } else { const h=S.h||(y1-y0)/28, r=S.right(S.y), l=S.left?S.left(S.y):0;
      g+=`<rect x="${X(Math.min(l,r))}" y="${Y(S.y+h/2)}" width="${Math.abs(X(r)-X(l))}" height="${Y(S.y-h/2)-Y(S.y+h/2)}" fill="${c}" fill-opacity=".85"/>`;
      if(sp.axis&&sp.axis.x!==undefined&&(sp.disk||sp.washer)){ const ax=sp.axis.x, R=Math.max(Math.abs(r-ax),Math.abs(l-ax)), rr=Math.min(Math.abs(r-ax),Math.abs(l-ax)); const ry=Math.max(5,(Y(y0)-Y(y0+(y1-y0)/14)));
        g+=`<ellipse cx="${X(ax)}" cy="${Y(S.y)}" rx="${Math.abs(X(ax+R)-X(ax))}" ry="${ry}" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="1.6"/>`;
        if(sp.washer&&rr>1e-6) g+=`<ellipse cx="${X(ax)}" cy="${Y(S.y)}" rx="${Math.abs(X(ax+rr)-X(ax))}" ry="${ry*.8}" fill="#fff" fill-opacity=".9" stroke="${c}" stroke-width="1.4" stroke-dasharray="3 2"/>`; } } }
  // sección transversal (cuadrado/triángulo levantado en perspectiva)
  if(sp.section){ const S=sp.section, c=col(S.c||'purple'), t=S.top(S.x), b=S.bot?S.bot(S.x):0, s=Math.abs(Y(t)-Y(b)); const dx=s*.42, dy=-s*.2;
    const A=[X(S.x),Y(b)], B=[X(S.x),Y(t)];
    let poly = S.shape==='tri' ? [A,B,[(A[0]+B[0])/2+dx*1.2,(A[1]+B[1])/2+dy*1.2]] : S.shape==='semi' ? null : [A,B,[B[0]+dx,B[1]+dy],[A[0]+dx,A[1]+dy]];
    if(poly) g+=`<polygon points="${poly.map(p=>p.map(v=>v.toFixed(1)).join(',')).join(' ')}" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="1.8"/>`;
    else { const cx=(A[0]+B[0])/2, cy=(A[1]+B[1])/2, r=s/2; g+=`<path d="M${A[0]} ${A[1]} A ${r*.9} ${r} 0 0 1 ${B[0]} ${B[1]}" transform="translate(${dx*.4},0)" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="1.8"/>`; }
    g+=`<line x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke="${c}" stroke-width="3"/>`; }
  // curvas
  (sp.curves||[]).forEach(C=>{ g+=`<path d="${path(samp(C.f,C.a??x0,C.b??x1))}" fill="none" stroke="${col(C.c)}" stroke-width="${mini?2.4:2.2}"${C.dash?' stroke-dasharray="5 4"':''}/>`; });
  (sp.ycurves||[]).forEach(C=>{ const r=[]; for(let i=0;i<=n;i++){ const y=(C.a??y0)+((C.b??y1)-(C.a??y0))*i/n; r.push([C.g(y),y]); } g+=`<path d="${path(r)}" fill="none" stroke="${col(C.c)}" stroke-width="2.2"/>`; });
  (sp.params||[]).forEach(C=>{ const r=[]; for(let i=0;i<=n;i++){ const t=C.t0+(C.t1-C.t0)*i/n; r.push([C.px(t),C.py(t)]); } g+=`<path d="${path(r)}" fill="none" stroke="${col(C.c)}" stroke-width="2.2"/>`; });
  if(sp.arc){ const A=sp.arc, c=col(A.c||'red'); let r=[];
    if(A.px){ for(let i=0;i<=n;i++){ const t=A.t0+(A.t1-A.t0)*i/n; r.push([A.px(t),A.py(t)]); } } else r=samp(A.f,A.a,A.b);
    g+=`<path d="${path(r)}" fill="none" stroke="${c}" stroke-width="${mini?5:6}" stroke-opacity=".3"/><path d="${path(r)}" fill="none" stroke="${c}" stroke-width="2.6"/>`;
    [r[0],r[r.length-1]].forEach(([x,y])=>g+=`<circle cx="${X(x)}" cy="${Y(y)}" r="4" fill="#fff" stroke="${c}" stroke-width="2.2"/>`); }
  g+=`</g>`;
  // ejes
  if(y0<=0&&y1>=0) g+=`<line class="fg-ax" x1="${P}" y1="${Y(0)}" x2="${W-P}" y2="${Y(0)}"/>`;
  if(x0<=0&&x1>=0) g+=`<line class="fg-ax" x1="${X(0)}" y1="${P}" x2="${X(0)}" y2="${H-P}"/>`;
  // eje de giro
  if(sp.axis){ const a=sp.axis;
    if(a.y!==undefined) g+=`<line x1="${P}" y1="${Y(a.y)}" x2="${W-P}" y2="${Y(a.y)}" stroke="${FIGC.red}" stroke-width="2" stroke-dasharray="7 4"/>${mini?'':`<text class="fg-eje" x="${W-P-2}" y="${Y(a.y)-5}" text-anchor="end">↻ ${a.lab||'eje'}</text>`}`;
    else g+=`<line x1="${X(a.x)}" y1="${P}" x2="${X(a.x)}" y2="${H-P}" stroke="${FIGC.red}" stroke-width="2" stroke-dasharray="7 4"/>${mini?'':`<text class="fg-eje" x="${X(a.x)+5}" y="${P+10}">↻ ${a.lab||'eje'}</text>`}`; }
  if(!mini){
    const xt=sp.xt||autoTicks(x0,x1), yt=sp.yt||autoTicks(y0,y1);
    const yb=(y0<=0&&y1>=0)?Y(0):H-P, xb=(x0<=0&&x1>=0)?X(0):P;
    xt.forEach(([v,l])=>{ if(Math.abs(v)<1e-9&&l==='0') return; g+=`<line class="fg-ax" x1="${X(v)}" y1="${yb-3}" x2="${X(v)}" y2="${yb+3}"/><text class="fg-t" x="${X(v)}" y="${Math.min(H-4,yb+14)}" text-anchor="middle">${l}</text>`; });
    yt.forEach(([v,l])=>{ if(Math.abs(v)<1e-9&&l==='0') return; g+=`<line class="fg-ax" x1="${xb-3}" y1="${Y(v)}" x2="${xb+3}" y2="${Y(v)}"/><text class="fg-t" x="${Math.max(10,xb-6)}" y="${Y(v)+3.5}" text-anchor="end">${l}</text>`; });
    (sp.curves||[]).concat(sp.ycurves||[]).forEach(C=>{ if(!C.lab) return; const lx=C.lx!==undefined?C.lx:(C.g?C.g(C.ly):x0+(x1-x0)*.8); const ly=C.g?C.ly:C.f(lx);
      g+=`<text class="fg-lab" x="${X(lx)+5}" y="${Y(ly)-6}" fill="${col(C.c)}">${C.lab}</text>`; });
    (sp.pts||[]).forEach(([x,y,l])=>g+=`<circle cx="${X(x)}" cy="${Y(y)}" r="3.6" fill="${FIGC.ink}"/>${l?`<text class="fg-pt" x="${X(x)+6}" y="${Y(y)-6}">${l}</text>`:''}`);
    (sp.labels||[]).forEach(([x,y,tx,c])=>g+=`<text class="fg-lab" x="${X(x)}" y="${Y(y)}" fill="${col(c||'ink')}" text-anchor="middle">${tx}</text>`);
  }
  return g+`</svg>`;
}
function figStep(r){ return r<=3?0.5:r<=8?1:r<=16?2:r<=40?5:10; }
function autoTicks(a,b){ const s=figStep(b-a)*(b-a>8?1:1); const r=[]; for(let v=Math.ceil(a/s)*s; v<=b+1e-9; v+=s){ const vv=Math.round(v*100)/100; r.push([vv,String(vv).replace('-','−')]); } return r; }
