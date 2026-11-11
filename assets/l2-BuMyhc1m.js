import{$ as e,A as t,C as n,Ct as r,Dt as i,Et as a,F as o,Gt as s,H as c,Ht as l,I as u,K as d,Nt as f,O as p,Pt as m,Rt as h,T as g,Tt as _,Ut as v,V as y,W as b,Wt as x,Z as S,_ as C,_t as w,a as T,b as E,c as D,ct as ee,dt as O,et as te,ft as k,j as A,k as j,lt as M,n as N,o as ne,ot as P,r as re,s as F,t as I,tt as ie,ut as L,v as R,vt as z,w as B,wt as ae,x as V,yt as oe}from"./view-Dtrm_P8N.js";function se([e,t],n,r){let i=Math.max(n/e,r/t);return[(e-n/i)/2,(t-r/i)/2,n/i,r/i]}var H=`/OpenHomeWebsite/assets/weave-PpN4HGJ3.webp`,ce=`/OpenHomeWebsite/assets/shelf-CpovSQpu.webp`,le=[1672,941],ue=3500,U=[836,470.5],de=new v(0,.79,0),fe=P.degToRad(21),W={front:[[0,629.3],[1672,950.7]],back:[[0,278.6],[1672,576.2]],book:[[247.5,447.5],[617.5,349],[825,442.5],[442.5,544]]},G=.042,pe=[{key:`pebble`,px:[504,452],on:G,cloth:`#8e8a83`,glass:`#d2cfc7`,light:[`#ffc98a`,`#fff0dc`],ring:`#ffbe85`},{key:`charcoal`,px:[1317,650],on:0,cloth:`#3a393c`,glass:`#a9aeab`,light:[`#489bff`,`#61edba`],ring:`#7ff2cc`},{key:`clay`,px:[884,662],on:0,cloth:`#b47c69`,glass:`#e0cbbf`,light:[`#ff8f66`,`#ffd2b8`],ring:`#ff7e4c`}],me=.36,he=.42,ge=1.3,K={color:`#fff1dc`,candela:12.5,angle:.17,penumbra:1,from:[-.09,1.3,.32]},_e={spot:1,glow:1.4},ve={spot:1.5,glow:1},ye=.35,be=[593.1,830.9,1297.2],q={x:593.1,y:882.8,width:17.3},xe=.0565,Se=.1826,Ce=`
  vec3 evening(vec3 plate) { return mix(plate, vec3(dot(plate, vec3(0.2126, 0.7152, 0.0722))), 0.25); }`;function we(e,t,n){let r=new b(t).lerp(new b(`#f2ded0`),.4),i=new k({color:t,roughness:1,specularIntensity:.2,sheen:.1,sheenRoughness:.5,sheenColor:r});return i.onBeforeCompile=t=>{Object.assign(t.uniforms,{uWeave:{value:e},uTile:{value:Se},uRelief:{value:.4}},n),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vAt;
varying vec3 vFacing;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vAt = position;
vFacing = normal;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
        varying vec3 vAt;
        varying vec3 vFacing;
        uniform sampler2D uWeave;
        uniform float uTile, uRelief;
        uniform vec3 uBounce, uRingLight, uTopLight;
        uniform vec2 uSpan;
        vec2 weave() {
          vec3 w = pow(abs(normalize(vFacing)), vec3(4.0));
          w /= w.x + w.y + w.z;
          vec3 p = vAt / uTile;
          return texture2D(uWeave, p.zy).rg * w.x + texture2D(uWeave, p.xz).rg * w.y + texture2D(uWeave, p.xy).rg * w.z;
        }
        vec3 relief(vec3 at, vec3 n, vec2 dH, float faceDirection) {
          vec3 sx = normalize(dFdx(at)), sy = normalize(dFdy(at));
          vec3 r1 = cross(sy, n), r2 = cross(n, sx);
          float det = dot(sx, r1) * faceDirection;
          return normalize(abs(det) * n - sign(det) * (dH.x * r1 + dH.y * r2));
        }`).replace(`#include <map_fragment>`,`#include <map_fragment>
diffuseColor.rgb *= pow(weave().x * 2.0, 1.6);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        float height = weave().y;
        normal = relief(-vViewPosition, normal, vec2(dFdx(height), dFdy(height)) * uRelief, faceDirection);`).replace(`#include <lights_fragment_maps>`,`#include <lights_fragment_maps>
        float upCloth = clamp((vAt.y - uSpan.x) / (uSpan.y - uSpan.x), 0.0, 1.0);
        float facingUp = inverseTransformDirection(normal, viewMatrix).y;
        irradiance += uBounce * exp(-upCloth / 0.5) * (0.6 - 0.4 * facingUp)
          + uRingLight * exp(-upCloth / 0.1) * (0.6 - 0.4 * facingUp)
          + uTopLight * smoothstep(0.86, 1.0, upCloth) * clamp(facingUp + 0.3, 0.0, 1.0);`)},i}function Te(e,[t,n]){let r={uTime:{value:0},uDiffusion:{value:.68},uWeights:{value:[1,0,0,0,0,0,0,0]},uColorA:{value:new b(t)},uColorB:{value:new b(n)},uUpdateAngle:{value:0},uFillProgress:{value:0},uFillGain:{value:0},uGain:{value:0}},i=new k({color:e,roughness:.34,clearcoat:1,clearcoatRoughness:.04,ior:1.5});return i.userData.u=r,i.onBeforeCompile=e=>{Object.assign(e.uniforms,r),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vTop;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nvTop = position.xz / ${xe.toFixed(4)};`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nuniform float uGain;\nvarying vec2 vTop;\n${C}`).replace(`#include <map_fragment>`,`#include <map_fragment>
        float topEdge = pow(pow(abs(vTop.x), 4.2) + pow(abs(vTop.y), 4.2), 1.0 / 4.2);
        float bevel = smoothstep(0.9, 0.985, topEdge);
        // Milky where the frost is, a little deeper toward the middle; the bevel is clear, so you see into its shade.
        diffuseColor.rgb *= mix(mix(0.72, 1.0, smoothstep(0.0, 0.9, topEdge)), 0.5, bevel);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        totalEmissiveRadiance += uGain * (topField(vTop) * 0.8 + mix(uColorA, uColorB, 0.6) * 0.28)
          * (1.0 - 0.5 * smoothstep(0.5, 1.0, topEdge)) * (1.0 - 0.6 * bevel);`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
        reflectedLight.directDiffuse *= 0.22;`)},i}function Ee(e,t){return new a({uniforms:{uPhoto:e.uPhoto,uPlate:e.uPlate,uFloor:{value:t},uDim:{value:me},uRing:{value:new b(0,0,0)},uSpot:{value:new b(0,0,0)},uTint:{value:new b(`#f2f6f4`)}},vertexShader:`
      varying vec3 vWorld;
      varying vec3 vNormal;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
      uniform mat4 uPhoto;
      uniform sampler2D uPlate;
      uniform vec3 uRing, uSpot, uTint;
      uniform float uFloor, uDim;
      varying vec3 vWorld;
      varying vec3 vNormal;
      ${Ce}
      void main() {
        vec3 n = normalize(vNormal), view = normalize(vWorld - cameraPosition);
        float facing = clamp(dot(n, -view), 0.0, 1.0), h = vWorld.y - uFloor;
        vec3 ray = refract(view, n, 1.0 / 1.45);
        vec3 through = vWorld + ray * min(ray.y < -0.02 ? h / -ray.y : 0.05, 0.05);
        vec4 at = uPhoto * vec4(through, 1.0);
        vec3 stone = evening(texture2D(uPlate, at.xy / at.w * 0.5 + 0.5).rgb);
        // Less of the ring's light low in the wall, where the ray comes down just behind it, than higher up.
        vec3 seen = stone * (uDim * 0.8 + 0.3 * uSpot + 1.2 * uRing * mix(0.6, 1.0, smoothstep(0.004, 0.02, h)));
        float rim = pow(1.0 - facing, 3.0);
        float turn = smoothstep(0.2, 0.7, length(fwidth(n))); // real edges, not the CAD's facets
        float lip = smoothstep(0.017, 0.023, h);
        vec3 caught = (vec3(0.05, 0.048, 0.045) + 0.3 * uSpot) * (0.35 * rim + 0.25 * turn)
          + uRing * (0.25 * rim + 0.2 * turn + 0.12 * lip);
        gl_FragColor = vec4(seen * uTint * (1.0 - 0.3 * rim) + caught, 1.0);
        #include <colorspace_fragment>
      }`})}function De(){let[e,t]=g.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/).slice(1).map(Number),n=document.createElement(`canvas`);n.width=(e+8)*6,n.height=(t+8)*6;let r=n.getContext(`2d`);r.scale(6,6),r.translate(4,4),r.fillStyle=`#fff`,r.fill(new Path2D(g.match(/ d="([^"]+)"/)[1]),`evenodd`);let i=q.width/e,a=new M(new z((e+8)*i*R,(t+8)*i*R),new L({color:`#cfcac2`,alphaMap:new c(n),transparent:!0}));return a.position.set(q.x*R,q.y*R,1232.05*R),a.rotation.y=Math.PI,a}function Oe(e){let t=new a({uniforms:{uPhoto:e.uPhoto,uPlate:e.uPlate,uRing:{value:new b(0,0,0)},uShade:{value:.5}},vertexShader:`
      uniform mat4 uPhoto;
      varying vec2 vP;
      varying vec4 vPhoto;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vP = position.xz / 0.05244;
        vPhoto = uPhoto * world;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
      uniform sampler2D uPlate;
      uniform vec3 uRing;
      uniform float uShade;
      varying vec2 vP;
      varying vec4 vPhoto;
      ${Ce}
      void main() {
        // Rounder further out, as light spreads: the squircle eases toward a circle with distance.
        float sq = pow(pow(abs(vP.x), 4.2) + pow(abs(vP.y), 4.2), 1.0 / 4.2), round_ = length(vP);
        float r = mix(sq, round_, smoothstep(1.2, 2.6, round_));
        // Brightest right by the glass, under the body where the ring is, with Light Lab's ring a little way out.
        float ring = exp(-pow((r - 1.5) / 0.45, 2.0)), near = exp(-pow((r - 0.9) / 0.7, 2.0)), halo = exp(-pow((r - 1.06) / 1.3, 2.0));
        float fade = 1.0 - smoothstep(3.2, 4.6, round_); // well inside the patch's edge
        vec3 stone = evening(texture2D(uPlate, vPhoto.xy / vPhoto.w * 0.5 + 0.5).rgb);
        vec3 light = uRing * stone * (near * 1.2 + ring * 0.55 + halo * 0.65) * fade;
        // The body is 1.24 across and stands 25 mm clear of the surface: darkest under the glass, gone a little past it.
        float shade = uShade * (1.0 - smoothstep(0.7, 1.75, r));
        gl_FragColor = vec4(light, shade);
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,blending:5,blendSrc:201,blendDst:205}),n=new M(new z(.5,.5).rotateX(-Math.PI/2),t);return n.position.y=5e-4,n}function ke(e){let t=new O({color:`#ffffff`});return t.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
uniform mat4 uPhoto;
varying vec4 vPhoto;
varying vec3 vAt;`).replace(`#include <project_vertex>`,`#include <project_vertex>
vec4 inRoom = modelMatrix * vec4(transformed, 1.0);
vAt = inRoom.xyz;
vPhoto = uPhoto * inRoom;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform sampler2D uPlate;
        uniform vec3 uEye, uSpotPos[3], uSpotDir[3], uSpotLight[3];
        uniform vec2 uSpotCos;
        uniform float uDim, uPool, uBeam;
        varying vec4 vPhoto;
        varying vec3 vAt;
        ${Ce}`).replace(`vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;`,`
        vec3 room = evening(texture2D(uPlate, vPhoto.xy / vPhoto.w * 0.5 + 0.5).rgb);
        vec3 beam = vec3(0.0), toHere = vAt - uEye;
        for (int s = 0; s < 3; s++) {
          if (uSpotLight[s].r <= 0.0005) continue;
          float lit = 0.0;
          for (int i = 0; i < 16; i++) {
            vec3 l = uEye + toHere * ((float(i) + 0.5) / 16.0) - uSpotPos[s];
            float d2 = dot(l, l);
            lit += smoothstep(uSpotCos.x, uSpotCos.y, dot(l, uSpotDir[s]) * inversesqrt(d2)) / (0.5 + d2);
          }
          beam += uSpotLight[s] * lit;
        }
        vec3 outgoingLight = room * (uDim + uPool * reflectedLight.directDiffuse) + beam * (length(toHere) / 16.0) * uBeam;`)},t}function Ae(e,t){let[n,r,i,a]=e,o=new v().subVectors(r,n).cross(new v().subVectors(i,n)).dot(t)<0?[n,a,i,r]:[n,r,i,a],s=new y;return s.setAttribute(`position`,new S(o.flatMap(e=>[e.x,e.y,e.z]),3)),s.setAttribute(`normal`,new S(o.flatMap(()=>[t.x,t.y,t.z]),3)),s.setIndex([0,1,2,0,2,3]),s}function je(e,t,n){let r=new _;r.background=new b().setRGB(.15,.142,.132);let i=(e,t,n,i)=>{let a=new M(new z(t,n),new L({color:new b().setRGB(...e),side:2}));a.position.copy(i),a.lookAt(0,0,0),r.add(a)},a=(e,r,i)=>new v().addScaledVector(t,e).addScaledVector(n,i).setY(r);i([.5,.48,.45],4,4,a(0,2.2,0)),i([.34,.325,.3],4,1.6,a(0,.9,-.45)),i([3.4,2.8,2.1],.9,1.3,a(-1.7,1.2,-.5)),i([.2,.195,.19],5,3,a(0,.8,2.6)),i([.6,.54,.46],1.5,.5,a(-.35,.72,-1.7));let s=new o(e),c=s.fromScene(r,.04).texture;return s.dispose(),c}function Me(e,[t,n,r,i],a=.05,o=20){let s=a/ue;return e.makePerspective((t-U[0])*s,(t+r-U[0])*s,(U[1]-n)*s,(U[1]-n-i)*s,a,o)}var Ne=e=>e*e*e*(e*(e*6-15)+10),Pe=(e,t,n,r,i)=>t>e?Math.min(t,e+n/r):Math.max(t,e-n/i);function Fe(i,{selected:a=0,onLoad:o=()=>{}}={}){let c=new u({canvas:i,antialias:!1});c.setPixelRatio(Math.min(devicePixelRatio,1.5)),c.shadowMap.enabled=!0,c.shadowMap.type=3;let d=new _;d.background=new b().setRGB(.1,.095,.09);let f=new w;f.position.copy(de),f.rotation.x=-fe,f.updateMatrixWorld();let g=([e,t],n)=>{let r=new v((e-U[0])/ue,-(t-U[1])/ue,-1).applyQuaternion(f.quaternion);return de.clone().addScaledVector(r,(n-de.y)/r.y)},y=W.front.map(e=>g(e,0)),x=W.back.map(e=>g(e,0)),S=y[1].clone().sub(y[0]).normalize(),C=Math.atan2(S.z,S.x),T=new v(-S.z,0,S.x),D=new v(0,1,0),O=pe.map(e=>g(e.px,e.on));d.environment=je(c,S,T);let N=new A(c,new s(1,1,{type:te,samples:4}));N.addPass(new t(d,f)),N.addPass(new j(new l(1,1),.16,.3,.98)),N.addPass(new p);let ne=0,P=!1,re=!1,I=()=>ne||=P?requestAnimationFrame(Re):0,ie=new h().load(ce,I);ie.colorSpace=ae;let L=new b(K.color),z={uPlate:{value:ie},uPhoto:{value:Me(new ee,[0,0,...le]).multiply(f.matrixWorldInverse)},uEye:{value:de},uDim:{value:me},uPool:{value:he},uBeam:{value:ge},uSpotPos:{value:O.map(()=>new v)},uSpotDir:{value:O.map(()=>new v)},uSpotLight:{value:O.map(()=>new v)},uSpotCos:{value:new l(Math.cos(K.angle),Math.cos(K.angle*(1-K.penumbra)))}},oe=ke(z),q=([e,t],n,r=0)=>e.clone().lerp(t,n).setY(r),xe=(e,t,n)=>{let r=new M(Ae(e,t),oe);r.receiveShadow=n,d.add(r)};xe([q(y,-.5),q(y,1.5),q(x,1.5),q(x,-.5)],D,!0),xe(W.book.map(e=>g(e,G)),D,!0),xe([q(x,-.5),q(x,1.5),q(x,1.5,2),q(x,-.5,2)],T,!1),xe([q(y,-.5,-1.5),q(y,1.5,-1.5),q(y,1.5),q(y,-.5)],T,!1);let Se=pe.map((t,n)=>{let r=O[n],i=new m(K.color,0,4,K.angle,K.penumbra,2);i.position.copy(r).addScaledVector(S,K.from[0]).addScaledVector(D,K.from[1]).addScaledVector(T,K.from[2]),i.target.position.copy(r).setY(r.y+.07),i.castShadow=!0,i.shadow.mapSize.set(512,512),i.shadow.camera.near=.6,i.shadow.camera.far=2.4,i.shadow.radius=9,i.shadow.blurSamples=16,i.shadow.bias=-4e-4,i.shadow.autoUpdate=!1,d.add(i,i.target),z.uSpotPos.value[n].copy(i.position),z.uSpotDir.value[n].copy(i.target.position).sub(i.position).normalize();let o=new e;o.position.copy(r),o.rotation.y=-C;let s=Oe(z);return o.add(s),d.add(o),{...t,at:r,lamp:i,holder:o,patch:s,spot:0,glow:0,goal:+(n===a),ringColor:new b(t.ring),topLight:new b(t.light[0]).lerp(new b(t.light[1]),.5),cloth:{uBounce:{value:new b(0,0,0)},uRingLight:{value:new b(0,0,0)},uTopLight:{value:new b(0,0,0)},uSpan:{value:new l(0,1)}},clothColor:t.cloth,glassTone:t.glass,top:null,base:null,logo:null}});new B().load(n.speakerCad,t=>{let n=t.scene;n.updateMatrixWorld(!0);let i=V(),a=E(n.children.find(e=>e.children.length>10),i),s=Object.fromEntries(a.shell.map(e=>[e.userData.piece,e]));for(let[e,t]of Object.entries(a))if(![`shell`,`base`].includes(e))for(let e of t)e.visible=!1;s.logoWindow.visible=!1;let c=s.housing.geometry.boundingBox.min.y+.0235;i.housing.transparent=!1,i.housing.onBeforeCompile=e=>{e.uniforms.uHem={value:c},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vHeight;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vHeight = position.y;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vHeight;
uniform float uHem;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
if (vHeight < uHem) discard;`)},s.fabric.userData.part=`cloth`,s.plate.userData.part=`top`;for(let e of a.base)e.traverse(e=>e.isMesh&&(e.userData.part=`base`));let l=De();n.add(l),n.updateMatrixWorld(!0),s.fabric.parent.attach(l),l.userData.part=`logo`,n.position.set(-be[0]*R,-be[1]*R,-be[2]*R),s.fabric.geometry.computeBoundingBox();let{min:u,max:d}=s.fabric.geometry.boundingBox,f=new h().load(H,I);f.wrapS=f.wrapT=r,f.anisotropy=8;let p=new k({color:`#000000`,roughness:.06,envMapIntensity:.6,transparent:!0,blending:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});for(let t of Se){let r=n.clone(!0);t.cloth.uSpan.value.set(u.y,d.y),t.top=Te(t.glassTone,t.light),t.base=Ee(z,t.at.y);let i=we(f,t.clothColor,t.cloth),a=[];r.traverse(e=>{if(!e.isMesh)return;let n=e.userData.part;n===`cloth`?e.material=i:n===`top`?e.material=t.top:n===`base`?a.push(e):n===`logo`&&(e.material=t.logo=e.material.clone()),e.castShadow=n===`cloth`||n===`top`});for(let e of a)e.material=t.base,e.add(new M(e.geometry,p));let o=new e;o.rotation.y=Math.PI,o.add(r),t.holder.add(o),t.lamp.shadow.needsUpdate=!0}re=!0,Le=performance.now(),o(),I()},void 0,e=>console.error(`[l2] design: the speaker CAD could not be loaded; the shelf shows without it.`,e));let Ce=new b(`#bdb8b0`),Fe=new b,Ie=L.clone().multiply(new b().setRGB(1,.94,.86)).multiplyScalar(1.1),Le=performance.now();function Re(e){ne=0;let t=F.matches,n=Math.max(0,Math.min(.1,(e-Le)/1e3));Le=e;let r=!1;Se.forEach((i,a)=>{let o=re?i.goal:0,s=o&&i.spot>=ye?1:0;i.spot=t?o:Pe(i.spot,o,n,_e.spot,ve.spot),i.glow=t?o:Pe(i.glow,s,n,_e.glow,ve.glow),(i.spot!==o||i.glow!==o)&&(r=!0);let c=Ne(i.spot),l=Ne(i.glow);i.lamp.intensity=K.candela*c,z.uSpotLight.value[a].set(L.r,L.g,L.b).multiplyScalar(c);let u=Fe.copy(i.ringColor).multiplyScalar(l);if(i.patch.material.uniforms.uRing.value.copy(u),i.patch.material.uniforms.uShade.value=.5*(1-.9*l),i.cloth.uBounce.value.copy(Ie).multiplyScalar(c),i.cloth.uRingLight.value.copy(u).multiplyScalar(2.2),i.cloth.uTopLight.value.copy(i.topLight).multiplyScalar(1.6*l),!i.top)return;let d=i.top.userData.u;d.uGain.value=l,d.uTime.value=t?1.7:e/1e3,i.base.uniforms.uRing.value.copy(u),i.base.uniforms.uSpot.value.copy(L).multiplyScalar(c),i.logo.color.copy(Ce).lerp(Fe.copy(d.uColorB.value).multiplyScalar(1.5),l)}),N.render(),(r||!t&&Se.some(e=>e.glow>.01))&&I()}return new ResizeObserver(()=>{let{clientWidth:e,clientHeight:t}=i;e&&t&&(c.setSize(e,t,!1),N.setPixelRatio(c.getPixelRatio()),N.setSize(e,t),Me(f.projectionMatrix,se(le,e,t)),f.projectionMatrixInverse.copy(f.projectionMatrix).invert(),I())}).observe(i),new IntersectionObserver(([e])=>{P=e.isIntersecting,P&&(Le=performance.now(),I())}).observe(i),{select(e){Se.forEach((t,n)=>t.goal=+(n===e)),I()}}}function Ie(e){let t=null,n=D(e.querySelector(`.finish-seg`),e=>t?.select(e));N(e,()=>t=Fe(e.querySelector(`.l2-design__scene`),{selected:n.index}),{rootMargin:`1500px 0px`,threshold:0})}var Le=3.6,Re=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function ze(e,t=!1){if(t)return{angles:[Math.PI/2,-3*Math.PI/2],width:.15,gain:1,trail:0};let n=(e%Le+Le)%Le,r=Re((n-.3)/1.5),i=Re((n-1.8)/.4),a=Re(n/.3)*(1-Re((n-2.2)/.9));return{angles:[-Math.PI/2+Math.PI*r,-Math.PI/2-Math.PI*r],width:.1+.05*i,gain:a*(1+.7*i),trail:Math.min(Math.PI*r,Math.PI*2*.3)}}var Be=`
  uniform float uAttention, uAttentionWidth, uAttentionGain, uAttentionTrail;
  uniform vec2 uAttentionAngles;
  float attentionSample(float angle) {
    vec2 delta = vec2(angle) - uAttentionAngles;
    vec2 distance = atan(sin(delta), cos(delta));
    vec2 scaled = distance / uAttentionWidth;
    vec2 spots = exp(-scaled * scaled);
    vec2 behind = distance * vec2(-1.0, 1.0);
    vec2 tails = 0.6 * pow(max(vec2(0.0), 1.0 - behind / max(0.00001, uAttentionTrail)), vec2(2.0))
      * smoothstep(vec2(0.0), vec2(0.08), behind) * step(vec2(0.0), behind);
    spots += tails * (1.0 - spots);
    return max(spots.x, spots.y) * uAttentionGain;
  }
`,Ve=1.8,He=.6;function Ue(e,t=!1){let n=Math.max(0,Math.min(Ve,e)),r=ze(n),i=Math.max(0,Math.min(1,(Ve-n)/He));return{...r,width:.1,gain:r.gain*i*i*(3-2*i),angles:t?[3*Math.PI/2,-Math.PI/2]:r.angles.map(e=>e+Math.PI),trail:t?0:r.trail}}function We(e,t=!1){let n=ze(e.attentionTime,t),r=Ue(e.interruptedTime,t),i=e.attention>0?Math.min(1,e.interrupted/e.attention):0;return{angles:n.angles.map((e,t)=>e+(r.angles[t]-e)*i),width:n.width+(r.width-n.width)*i,gain:n.gain+(r.gain-n.gain)*i,trail:n.trail+(r.trail-n.trail)*i}}var Ge=e=>Math.max(0,Math.min(1,e));function Ke(e=0,t=!1){return t?.25:.03+.97*Ge(Number.isFinite(e)?e:0)}var qe=Math.PI*2,Je=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)},Ye=.9,Xe=.45,Ze=3.6;function Qe(e,t=!1){if(t)return .25;let n=Math.max(0,e)%Ze,r=e=>e<0||e>=.9?0:.6*Je(e/.4)*Je((Ye-e)/.5);return r(n)+r(n-Ye-Xe)}var $e=2.4,et=.2,tt=.5,nt=3.6;function rt(e,t=!1){if(t)return{progress:.5,gain:.35};let n=Math.max(0,e)%nt;return{progress:Math.min(1,n/$e),gain:n<2.6?1:1-Je((n-$e-et)/tt)}}function it(e){return Math.PI/2+e/2*qe}var at=2048,ot=[0];function st(e){let t=Math.cos(e),n=Math.sin(e),r=1/(Math.abs(t)**4.2+Math.abs(n)**4.2)**(1/4.2);return[t*r,n*r]}var ct=st(Math.PI/2);for(let e=1;e<=at;e++){let t=st(Math.PI/2+e/at*qe);ot.push(ot[e-1]+Math.hypot(t[0]-ct[0],t[1]-ct[1])),ct=t}function lt(e){let t=Math.max(0,Math.min(1,e))*ot[at],n=0,r=at;for(;r-n>1;){let e=n+r>>1;ot[e]<t?n=e:r=e}return(n+(t-ot[n])/(ot[r]-ot[n]))/at*qe}var ut=`
  uniform float uUpdating, uUpdateAngle, uVolume, uVolumeFraction, uVolumeEnd;
  uniform float uFilling, uFillProgress, uFillEnd, uFillGain;
  float fillSample(float angle) {
    if (uFillProgress <= 0.0) return 0.0;
    if (uFillProgress >= 1.0) return uFillGain;
    float phase = mod(angle + 1.57079632679, 6.28318530718);
    float distance = phase <= uFillEnd ? min(phase, uFillEnd - phase) : -min(phase - uFillEnd, 6.28318530718 - phase);
    return smoothstep(-0.025, 0.025, distance) * uFillGain;
  }
  float updateSample(float angle) {
    float distance = atan(sin(angle - uUpdateAngle), cos(angle - uUpdateAngle));
    return exp(-pow(distance / 0.16, 2.0));
  }
  float volumeSample(float angle) {
    if (uVolumeFraction <= 0.0) return 0.0;
    if (uVolumeFraction >= 1.0) return 1.0;
    float phase = mod(angle - 1.57079632679, 6.28318530718);
    float distance = phase <= uVolumeEnd ? min(phase, uVolumeEnd - phase) : -min(phase - uVolumeEnd, 6.28318530718 - phase);
    return smoothstep(-0.012, 0.012, distance);
  }
`,dt=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function ft(e,t=!1){if(t)return .25;let n=Math.max(0,e)%2;return n<.4?dt(n/.4):n<.7?1:n<1.3?1-dt((n-.7)/.6):0}var pt=`
  uniform float uNotification;
  float notificationSample(float angle) {
    float d = abs(atan(sin(angle - 1.57079632679), cos(angle - 1.57079632679)));
    return exp(-pow(d / 0.5, 2.0)) * (1.0 - smoothstep(0.65, 0.78539816339, d));
  }
`,J=(e,t,n,r,i,a=`none`,o=null)=>({id:e,name:t,top:n,base:r,description:i,cue:a,sound:o}),mt={inactive:{name:`Inactive`,details:[J(`display-off`,`Display off`,`sleep`,`none`,`Both light surfaces are off. This preview does not indicate real microphone status.`),J(`muted`,`Muted`,`sleep`,`muted`,`Top off; a steady peach base ring indicates simulated mute.`,`muted`),J(`error`,`Error`,`sleep`,`error`,`Top off; two gentle muted-red swells with a 0.45 s gap, followed by a 1.35 s rest.`,`error`,`error`)]},idle:{name:`Idle`,details:[J(`ready`,`Ready`,`idle`,`none`,`A small, still glow. Ready for the next interaction.`),J(`completed`,`Task completed`,`idle`,`completed`,`A single completion cue fades after 2.5 seconds. The speaker stays idle.`,`completed`,`completed`)]},listening:{name:`Listening`,details:[J(`receiving`,`Receiving input`,`listening`,`none`,`Light gathers gently toward the center with a four-second breath. Simulated input; no microphone.`,`none`,`receiving`),J(`answering`,`User answering a request`,`listening`,`input-volume`,`White base light follows your microphone volume after you enable it. Audio is analyzed locally, without recording or playback.`,`input-volume`)]},thinking:{name:`Thinking`,details:[J(`understanding`,`Understanding a request`,`thinking`,`none`,`Two to three light fields cross in the center. The Agent is understanding the request.`),J(`planning`,`Preparing a response`,`thinking`,`twin-orbit`,`Thinking motion with two opposite palette-matched points circling the base counterclockwise with fading trails.`,`palette`)]},working:{name:`Working`,details:[J(`executing`,`Executing a task`,`working`,`orbit`,`A broad field expands while a palette-matched point circles the base with a fading trail. This is activity, not a progress indicator.`,`palette`),J(`confirmation-required`,`Confirmation requested`,`blocked`,`confirmation-white`,`The task waits for permission. A white pulse rises, holds, and fades before a short 0.8 s pause.`,`confirmation-white`,`confirmation`),J(`background-active`,`Another task still running`,`working`,`background`,`The left half holds the top palette gradient; a matching point and trail travel along the right half from rear to front.`,`palette`),J(`paused`,`Paused`,`blocked`,`none`,`Execution is paused. A dim, still field remains without an attention cue.`),J(`attention`,`Needs attention`,`blocked`,`attention`,`Two white points travel from the rear in opposite directions, merge brighter at the front, then fade and repeat.`,`attention`,`attention`)]},speaking:{name:`Speaking`,details:[J(`responding`,`Responding`,`speaking`,`none`,`Simulated speech. Soft light follows a sample speech envelope; no audio is played.`),J(`reporting-result`,`Reporting a completed task`,`speaking`,`completed`,`Simulated speech with one completion cue. The cue fades after 2.5 seconds; no audio is played.`,`completed`),J(`interrupted`,`Interrupted`,`speaking`,`interrupted`,`Two white points with trails travel from the front along opposite sides, dim as they approach the rear and are fully off on meeting. Replay cue restarts the animation.`,`interrupted`),J(`notification`,`Notification`,`speaking`,`notification`,`One diffuse white point pulses at the front, spreading across the front quarter of the base. Simulated notification.`,`notification`,`notification`)]},hardwares:{name:`Hardware`,details:[J(`pairing`,`Pairing`,`updating`,`updating`,`Diffuse white points circle the top perimeter and base clockwise in sync. Simulated pairing.`,`hardware-white`,`pairing`),J(`updating`,`Updating`,`filling`,`filling`,`The base fills clockwise from the rear while a central white point expands to fill the top; both fade out together and repeat. Simulated update.`,`hardware-white`),J(`volume`,`Volume`,`idle`,`volume`,`Idle above; a white base arc fills clockwise from the front to show simulated volume.`,`hardware-white`,`volume`)]}};function ht(e){let t=e.primaryState===`sleep`?`inactive`:e.primaryState,n=Object.hasOwn(mt,t)?t:`idle`,r=mt[n],i=n===`working`&&e.stateDetail===`missing-information`?`paused`:e.stateDetail;return{primary:n,state:r,detail:r.details.find(e=>e.id===i)??r.details[0]}}var gt=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function _t(e){return e<0||e>=.8?0:e<.3?gt(e/.3):1-gt((e-.3)/.5)}function vt(e,t,n=!1){let r=Math.max(0,t);if(e===`none`)return 0;if(e===`notification`)return ft(r,n);if(e===`muted`)return .5;if(e===`error`)return Qe(r,n);if(e===`filling`)return 1;if(e===`updating`)return n?.35:1;if(e===`volume`)return 1;if(e===`orbit`||e===`twin-orbit`)return n?.35:1;if(e===`interrupted`||e===`attention`)return n?.18:1;if(e===`background`)return n?.35:1;if(e===`input-volume`)return Ke(0,n);if(e===`completed`)return r>=2.5?0:n?.35:Math.sin(Math.PI*r/2.5)**2;if(n||r>=30)return{confirmation:.2,"confirmation-white":.2}[e]??.12;if(e===`confirmation`||e===`confirmation-white`){let t=r%(e===`confirmation-white`?3.8:6);return t<1?gt(t):t<2?1:t<3?1-gt(t-2):0}let i=r<3?r:(r-3)%8;return _t(i)+_t(i-1.2)}function yt(e,t,n=!1,r=0){if(e.previewMode===`free`)return{weights:[1,0,0,0,0,0,0,0],top:1,base:1,orbit:0,twin:0,attention:0,interrupted:0,split:0,updating:0,filling:0,volume:0,notification:0,rate:1,cue:`palette`,status:`Shared palette`,replay:!1};let{detail:i}=ht(e),a=[0,0,0,0,0,0,0,0],o={idle:1,listening:2,thinking:3,working:4,blocked:4,speaking:5,filling:6,updating:7}[i.top];o&&(a[o]=1);let s=n?0:Math.sin(t*Math.PI/2),c=t%4.8,l=n?.45:c>3.5?.25:.25+.35*Math.sin(Math.PI*c/3.5)**2*(.65+.35*Math.sin(t*5.4)**2),u={sleep:0,idle:.1,listening:.375+.075*s,thinking:.45,working:.375,blocked:.15,speaking:l,filling:.65,updating:n?.25:.65}[i.top]/.9,d={none:`No cue · Base off`,orbit:`Executing · Orbiting light with fading trail`,"input-volume":`Microphone volume · White glow`,"needs-you":`Needs you · Double pulse`,confirmation:`Confirmation · Rise, hold, fade`,background:`Other work · Steady glow with soft swell`,completed:`Completed · One-time cue`,attention:n?`Attention · Still white point at front`:`Attention · Two white points merge at front`}[i.base];return i.base===`completed`&&t>=2.5&&(d=`Completed · Cue finished`),i.base===`needs-you`&&(t>=30||n)&&(d=`Still waiting · Dim steady`),i.base===`confirmation`&&(t>=30||n)&&(d=`Confirmation · Dim steady amber`),i.base===`confirmation-white`&&(d=t>=30||n?`Confirmation · Dim steady white`:`Confirmation · White pulse with a short pause`),i.base===`background`&&(d=`Other work · Left gradient, right moving point`),i.base===`twin-orbit`&&(d=`Preparing · Two opposite counterclockwise lights`),d={notification:`Notification · Soft white pulse at front`,muted:`Muted · Steady peach`,error:`Error · Gentle muted-red swells`,filling:`Simulated update · Fill, fade, repeat`,updating:`Simulated pairing · Synchronized white orbit`,volume:`Simulated volume · White arc`}[i.base]??d,i.base===`interrupted`&&(d=t>=1.8?`Interrupted · Cue finished`:`Interrupted · Two white points meet at the rear`),{weights:a,top:u,base:i.base===`input-volume`?Ke(r,n):vt(i.base,t,n),orbit:+(i.base===`orbit`),twin:+(i.base===`twin-orbit`),attention:+!![`attention`,`interrupted`].includes(i.base),interrupted:+(i.base===`interrupted`),split:+(i.base===`background`),updating:+(i.base===`updating`),filling:+(i.base===`filling`),volume:+(i.base===`volume`),notification:+(i.base===`notification`),rate:+![`sleep`,`idle`,`blocked`,`filling`,`updating`].includes(i.top),cue:i.cue,status:d,replay:!!i.sound||[`interrupted`,`notification`,`needs-you`,`confirmation`,`confirmation-white`,`background`,`attention`,`completed`,`filling`,`error`].includes(i.base)}}function bt(e,t=()=>0){let n,r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=1,d=yt(e,0,!1,t()),f=d,p=e=>({...e,weights:[...e.weights]});function m(){let t=`${e.previewMode}/${e.primaryState}/${e.stateDetail}`;t!==n&&(e.previewMode===`states`&&e.primaryState===`hardwares`&&e.stateDetail===`updating`&&d.filling===0&&(l=0),e.previewMode===`states`&&e.primaryState===`speaking`&&e.stateDetail===`interrupted`&&(s=0),n=t,r=0,u=0,f=p(d),e.previewMode===`states`&&e.primaryState===`working`&&e.stateDetail===`attention`&&d.attention===0&&(o=0),e.previewMode===`states`&&e.primaryState===`working`&&e.stateDetail===`background-active`&&d.split===0&&(c=0))}return m(),{replay(){r=0,o=0,s=0,c=0,l=0},step(n,p=!1){m();let h=Math.max(0,Math.min(n,.1)),g=r===0;e.motion&&(r+=h);let _=e.previewMode===`states`&&g&&r>0?ht(e).detail.sound:null;u=p?1:Math.min(1,u+h/.8);let v=yt(e,r,p,t()),y=gt(u);return d={...v,weights:v.weights.map((e,t)=>f.weights[t]+(e-f.weights[t])*y),top:f.top+(v.top-f.top)*y,base:f.base+(v.base-f.base)*y,orbit:f.orbit+(v.orbit-f.orbit)*y,twin:f.twin+(v.twin-f.twin)*y,attention:f.attention+(v.attention-f.attention)*y,interrupted:f.interrupted+(v.interrupted-f.interrupted)*y,split:f.split+(v.split-f.split)*y,updating:f.updating+(v.updating-f.updating)*y,filling:f.filling+(v.filling-f.filling)*y,volume:f.volume+(v.volume-f.volume)*y,notification:f.notification+(v.notification-f.notification)*y,rate:f.rate+(v.rate-f.rate)*y},e.motion&&!p&&(i+=h*e.speed/.65*d.rate),e.motion&&!p&&(a+=h),e.motion&&!p&&d.attention>0&&(o+=h),e.motion&&d.interrupted>0&&(s+=h),e.motion&&!p&&d.split>0&&(c+=h),e.motion&&!p&&d.filling>0&&(l+=h),{...d,age:r,phase:i,orbitTime:a,attentionTime:o,interruptedTime:s,splitTime:c,fillTime:l,transition:y,sound:_}}}}var xt=.3,St=`
  uniform float uOrbit, uOrbitTime, uTwin, uSplit, uSplitTime;
  uniform vec3 uColorA, uColorB;
  vec2 chaseSample(float angle, float seconds) {
    float behind = fract(seconds / ${1 .toFixed(1)} - angle / 6.28318530718);
    float distance = min(behind, 1.0 - behind);
    float head = exp(-pow(distance / 0.018, 2.0));
    float tail = 0.8 * pow(max(0.0, 1.0 - behind / ${xt.toFixed(2)}), 2.0)
      * smoothstep(0.0, 0.014, behind);
    float highlight = behind > 0.5 ? 1.0 : max(0.0, 1.0 - behind / ${xt.toFixed(2)});
    return vec2(head + tail * (1.0 - head), highlight);
  }
  vec2 orbitSample(float angle) { return chaseSample(angle, uOrbitTime); }
  vec2 twinOrbitSample(float angle) {
    vec2 first = chaseSample(-angle, uOrbitTime);
    vec2 second = chaseSample(-angle + 3.14159265359, uOrbitTime);
    float level = first.x + second.x;
    return vec2(level, (first.x * first.y + second.x * second.y) / max(level, 0.000001));
  }
  vec3 backgroundLight(float angle) {
    float right = smoothstep(-0.025, 0.025, cos(angle));
    vec2 chase = chaseSample(angle, uSplitTime - ${(1/4).toFixed(2)});
    vec3 leftLight = mix(uColorA, uColorB, sin(angle) * 0.5 + 0.5) * 0.35;
    vec3 rightLight = mix(uColorA, uColorB, chase.y) * chase.x;
    return leftLight * (1.0 - right) + rightLight * right;
  }
`,Ct={topIntensity:.9,diffusion:.72,speed:.65,baseIntensity:2.75,spread:1},wt=[`#489bff`,`#61edba`],Tt={"needs-you":`#ffd27a`,confirmation:`#ffad66`,background:`#ffe6af`,attention:`#ffffff`,"input-volume":`#ffffff`,completed:`#fff0d9`,interrupted:`#ffffff`,notification:`#ffffff`,muted:`#ffd4af`,error:`#945c56`,"confirmation-white":`#ffffff`,"hardware-white":`#ffffff`},Et=9.6/6.92,Dt=1.195,Ot=2.05,kt=e=>[1,3,5].map(t=>{let n=parseInt(e.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4}),At=`attribute vec2 a;varying vec2 vUv;void main(){vUv=a*.5+.5;gl_Position=vec4(a,0.,1.);}`,jt=`
precision highp float;
varying vec2 vUv;
uniform float uView;
const float TABLE = ${Et.toFixed(4)}, SIL = ${Dt.toFixed(3)};
float squircle(vec2 p) { return pow(pow(abs(p.x), 4.2) + pow(abs(p.y), 4.2), 1.0 / 4.2); }
vec2 world() { return (vUv * 2.0 - 1.0) * uView; }  // at the plate's height; x = X, y = -Z (the rear is up)
`,Mt=`${jt}
uniform float uIntensity, uPx, uTouch;
uniform vec2 uTouchAt;
uniform vec3 uFabric;
${C}
// three.js ACESFilmicToneMapping, exposure 1.15 as in Light Lab
vec3 aces(vec3 c) {
  c *= 1.15 / 0.6;
  c = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777) * c;
  c = (c * (c + 0.0245786) - 0.000090537) / (c * (0.983729 * c + 0.4329510) + 0.238081);
  return clamp(mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602) * c, 0.0, 1.0);
}
vec3 srgb(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }

void main() {
  vec2 q = world();
  float r = squircle(q);
  float aa = uPx * 1.5;

  // no table of its own: the section's marble shows through (premultiplied alpha), darkened only by the speaker's shadow —
  // tight where it stands, soft and wide down to the right, the light coming from the upper left. The power
  // cable leaves from the rear and fades out before the canvas ends.
  float shade = 0.38 * exp(-max(r - SIL, 0.0) / 0.09);
  shade = 1.0 - (1.0 - shade) * (1.0 - 0.32 * (1.0 - smoothstep(SIL * 0.8, SIL * 1.45, squircle(q - vec2(0.16, -0.2)))));
  vec4 col = vec4(0.0, 0.0, 0.0, shade);
  float cable = q.x - 0.18 * smoothstep(1.3, 2.2, q.y);
  col = mix(col, vec4(uFabric * 0.92, 1.0), (1.0 - smoothstep(0.024, 0.024 + aa, abs(cable))) * step(0.0, q.y) * (1.0 - smoothstep(1.45, 1.95, q.y)));

  // the top field, as on Light Lab's display (p = X, Z across the display)
  vec2 p = vec2(q.x, -q.y) / 1.058;
  float edge = squircle(p);
  vec3 light = topField(p);
  // + a little room light scattered in the frosted slab, which Light Lab gets from the glass under the display
  vec3 glass = srgb(aces(vec3(0.030, 0.021, 0.017) + vec3(0.05, 0.048, 0.045)
    + light * uIntensity * (1.0 - smoothstep(0.75, 1.015, edge))));
  glass += 0.035 * smoothstep(0.9, -0.9, q.x * 0.5 - q.y);           // a faint sheen from the room
  glass += 0.06 * smoothstep(1.06, 1.077, r) * (1.0 - smoothstep(1.077, 1.082, r)); // the plate's rounded edge
  // under a finger: a soft, diffuse brightening through the frosted glass, never a drawn mark
  glass += vec3(0.16) * uTouch * exp(-dot(q - uTouchAt, q - uTouchAt) / 0.05);

  // fabric shoulder: rounds away from the plate to the silhouette, lit from the upper left; a little top light
  // spills onto it
  float knit = sin(q.x * 260.0) * sin(q.y * 260.0) * 0.5 + 0.5;
  float fall = smoothstep(1.1, SIL, r);
  vec3 fabric = uFabric * (0.84 + 0.16 * knit) * (1.0 - 0.35 * fall * fall) * (1.0 + 0.08 * clamp(q.y - q.x, -1.0, 1.0));
  fabric += srgb(aces(light * uIntensity * 0.35)) * 0.25 * (1.0 - smoothstep(1.09, 1.15, r));

  col = mix(col, vec4(fabric, 1.0), 1.0 - smoothstep(SIL - aa, SIL + aa, r));
  col.rgb *= 1.0 - 0.55 * (smoothstep(1.077 - aa, 1.077, r) - smoothstep(1.09, 1.09 + aa, r)); // the 0.7 mm gap
  col.rgb = mix(col.rgb, glass, 1.0 - smoothstep(1.077 - aa, 1.077, r));
  gl_FragColor = col;
}`,Nt=`${jt}
uniform float uTime, uIntensity, uSpread, uPx;
uniform vec3 uColor;
${St}
${Be}
${ut}
${pt}
vec3 sourceLight(float angle) {
  vec3 light = uColor * max(0.0, 1.0 - uOrbit - uAttention - uSplit - uTwin - uUpdating - uVolume - uFilling - uNotification);
  if (uNotification > 0.0) light += vec3(notificationSample(angle)) * 2.4 * uNotification;
  if (uFilling > 0.0) light += vec3(fillSample(angle)) * uFilling;
  if (uUpdating > 0.0) light += vec3(updateSample(angle)) * 2.4 * uUpdating;
  if (uVolume > 0.0) light += vec3(volumeSample(angle)) * uVolume;
  if (uOrbit > 0.0) {
    vec2 chase = orbitSample(angle);
    light += mix(uColorA, uColorB, chase.y) * chase.x * 2.4 * uOrbit;
  }
  if (uTwin > 0.0) {
    vec2 twin = twinOrbitSample(angle);
    light += mix(uColorA, uColorB, twin.y) * twin.x * 2.4 * uTwin;
  }
  if (uAttention > 0.0) light += vec3(attentionSample(angle)) * 2.4 * uAttention;
  if (uSplit > 0.0) light += backgroundLight(angle) * 2.4 * uSplit;
  return light;
}
vec3 projectedLight(float angle, float sigma) {
  vec3 light = vec3(0.0);
  float total = 0.0;
  // Not in Light Lab: each pixel shifts its taps a little, so a hard arc end blurs to fine grain instead of a fan
  // of rays, which a light page shows where the dark table hid it.
  float jitter = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5;
  for (int i = -8; i <= 8; i++) {
    float offset = (float(i) + jitter) * 0.3125;
    float weight = exp(-0.5 * offset * offset);
    light += sourceLight(angle + offset * sigma) * weight;
    total += weight;
  }
  return light / total;
}
void main() {
  vec2 p = world() * TABLE;  // on the table
  float r = squircle(p);
  float angle = atan(p.y, p.x);
  float wobble = sin(angle * 3.0 + uTime * 0.22) * 0.018;
  float offset = mix(0.09, 0.55, uSpread);
  float width = mix(0.065, 0.24, uSpread);
  float ring = exp(-pow((r - 1.03 - offset - wobble) / width, 2.0));
  float halo = exp(-pow((r - 1.06) / (0.22 + uSpread * 0.78), 2.0));
  float edge = smoothstep(0.78, 1.16, r);
  float energy = (ring * 0.26 + halo * 0.18) * edge * uIntensity;
  float sigma = 0.14 + uSpread * 0.10 + smoothstep(1.0, 2.2, r) * 0.12;
  vec3 baseLight = projectedLight(atan(-p.y, p.x), sigma);
  float top = squircle(world());  // under the body, seen from above
  float hidden = 1.0 - smoothstep(SIL - uPx * 1.5, SIL + uPx * 1.5, top);
  float fade = 1.0 - smoothstep(0.8, 1.0, length(vUv * 2.0 - 1.0));  // gone before the canvas ends
  // On a light page, adding would clip to a white blob. Instead the lamp takes the page over by how strong it is:
  // its own colour at full value, mixed in by s (premultiplied). White light brightens, colour tints, nothing clips.
  vec3 lamp = baseLight * energy * (1.0 - hidden) * fade;
  float peak = max(lamp.r, max(lamp.g, lamp.b));
  float s = 1.0 - exp(-peak * 1.5);
  gl_FragColor = vec4(lamp / max(peak, 1e-4) * s, s);
}`;function Pt(e,t){let n=(t,n)=>{let r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r));return r},r=e.createProgram();if(e.attachShader(r,n(e.VERTEX_SHADER,At)),e.attachShader(r,n(e.FRAGMENT_SHADER,t)),e.bindAttribLocation(r,0,`a`),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw Error(e.getProgramInfoLog(r));let i={};return{p:r,loc:t=>t in i?i[t]:i[t]=e.getUniformLocation(r,t)}}function Ft(e,t,{at:n=0}={}){let r=e.getContext(`webgl`,{antialias:!1});if(!r)return null;let i=Pt(r,Mt),a=Pt(r,Nt);r.bindBuffer(r.ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),r.STATIC_DRAW),r.enableVertexAttribArray(0),r.vertexAttribPointer(0,2,r.FLOAT,!1,0,0),Object.assign(t,{previewMode:`states`,motion:!0,speed:Ct.speed});let o=bt(t);for(let e=0;e<n;e+=1/60)o.step(1/60,F.matches);let[s,c]=wt.map(kt),l=Object.fromEntries(Object.entries(Tt).map(([e,t])=>[e,kt(t)])),u=[...s],d=!1,f=0,p=!0,m=!1,h=0,g=[0,0],_=(t,n)=>{let r=e.getBoundingClientRect();return[((t-r.left)/r.width*2-1)*Ot,(1-(n-r.top)/r.height*2)*Ot]},v=([e,t])=>(Math.abs(e)**4.2+Math.abs(t)**4.2)**(1/4.2),y=n=>{let d=F.matches,f=o.step(n,d),_=p||d?1:1-Math.exp(-n*6);p=!1;let v=.5+.3*Math.sin(f.phase*.65*.55),y=l[f.cue]??s.map((e,t)=>e+(c[t]-e)*v);u.forEach((e,t)=>u[t]=e+(y[t]-e)*_);let b=rt(f.fillTime,d),x=We(f,d),S=2*Ot/e.width;h=d?Number(m):h+(Number(m)-h)*(1-Math.exp(-n/(m?.08:.3))),r.viewport(0,0,e.width,e.height),r.disable(r.BLEND),r.useProgram(i.p);let C=i.loc;r.uniform1f(C(`uView`),Ot),r.uniform1f(C(`uPx`),S),r.uniform3f(C(`uFabric`),.68,.655,.6),r.uniform1f(C(`uIntensity`),Ct.topIntensity*f.top),r.uniform1f(C(`uTime`),f.phase),r.uniform1f(C(`uDiffusion`),Ct.diffusion),r.uniform3fv(C(`uColorA`),s),r.uniform3fv(C(`uColorB`),c),r.uniform1fv(C(`uWeights[0]`),f.weights),r.uniform1f(C(`uUpdateAngle`),it(f.orbitTime)),r.uniform1f(C(`uFillProgress`),b.progress),r.uniform1f(C(`uFillGain`),b.gain),r.uniform1f(C(`uTouch`),h),r.uniform2fv(C(`uTouchAt`),g),r.drawArrays(r.TRIANGLES,0,3),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r.useProgram(a.p);let w=a.loc;r.uniform1f(w(`uView`),Ot),r.uniform1f(w(`uPx`),S),r.uniform1f(w(`uTime`),f.phase),r.uniform1f(w(`uIntensity`),Ct.baseIntensity*f.base),r.uniform1f(w(`uSpread`),Ct.spread),r.uniform3fv(w(`uColor`),u),r.uniform3fv(w(`uColorA`),s),r.uniform3fv(w(`uColorB`),c),r.uniform1f(w(`uNotification`),f.notification),r.uniform1f(w(`uOrbit`),f.orbit),r.uniform1f(w(`uTwin`),f.twin),r.uniform1f(w(`uOrbitTime`),f.orbitTime),r.uniform1f(w(`uUpdating`),f.updating),r.uniform1f(w(`uUpdateAngle`),it(f.orbitTime)),r.uniform1f(w(`uFilling`),f.filling),r.uniform1f(w(`uFillProgress`),b.progress),r.uniform1f(w(`uFillGain`),b.gain),r.uniform1f(w(`uFillEnd`),lt(b.progress)),r.uniform1f(w(`uVolume`),f.volume),r.uniform1f(w(`uVolumeFraction`),t.volume),r.uniform1f(w(`uVolumeEnd`),lt(t.volume)),r.uniform1f(w(`uSplit`),f.split),r.uniform1f(w(`uSplitTime`),d?1/4:f.splitTime),r.uniform1f(w(`uAttention`),f.attention),r.uniform2fv(w(`uAttentionAngles`),x.angles),r.uniform1f(w(`uAttentionWidth`),x.width),r.uniform1f(w(`uAttentionGain`),x.gain),r.uniform1f(w(`uAttentionTrail`),x.trail),r.drawArrays(r.TRIANGLES,0,3)},b=e=>{if(!d)return;requestAnimationFrame(b);let t=Math.min(.1,(e-f)/1e3);f=e,y(t)};return new ResizeObserver(()=>{let t=Math.min(devicePixelRatio,2);e.width=Math.round(e.clientWidth*t),e.height=Math.round(e.clientHeight*t),d||y(0)}).observe(e),new IntersectionObserver(([e])=>{d=e.isIntersecting,d&&(f=performance.now(),requestAnimationFrame(b))}).observe(e),{replay:()=>o.replay(),hit(e,t){let n=v(_(e,t));return n<=1.077?`top`:n<=Dt?`body`:null},press(e,t){m=!0,g=_(e,t)},follow(e,t){m&&(g=_(e,t))},release(){m=!1}}}function It(){let e=`idle`,t=0,n=0,r=0,i=0,a=0;return{down(i,a,o){return e=`down`,t=i,n=a,r=o,[]},move(t,a,o){return e===`down`&&Math.hypot(a-n,o-r)>=8&&(e=`slide`,i=0),e===`slide`?[{type:`slide`,dy:o-r}]:[]},up(t){let n=[];return e===`down`?(i+=1,a=t,i===3&&(n.push({type:`tap`,count:3}),i=0)):e===`hold`?n.push({type:`holdEnd`}):e===`slide`&&n.push({type:`slideEnd`}),e=`idle`,n},cancel(t){let n=[];return e===`hold`&&n.push({type:`holdEnd`}),e===`slide`&&n.push({type:`slideEnd`}),e=`idle`,i=0,n},tick(n){let r=[];return e===`down`&&n-t>=500&&(e=`hold`,i=0,r.push({type:`holdStart`})),e===`idle`&&i>0&&n-a>=300&&(r.push({type:`tap`,count:i}),i=0),r},pending:()=>e!==`idle`||i>0}}var Y=[`idle/ready`],Lt={tap:[[`speaking/interrupted`,1800],Y],"double-tap":[[`idle/completed`,2500],Y],"triple-tap":[[`inactive/muted`,3e3],Y],rest:[[`thinking/understanding`,1600],[`speaking/responding`,3e3],Y]},Rt=e=>[[e,`down`],[e+100,`up`]],zt={rest:[[0,`show`,.5,.5],[350,`down`],[350,`light`,[[`listening/receiving`]]],[2350,`up`],[2350,`light`,Lt.rest],[2700,`hide`]],tap:[[0,`light`,[[`speaking/responding`]]],[900,`show`,.5,.5],...Rt(1500),[1500,`light`,Lt.tap],[2e3,`hide`]],"double-tap":[[0,`show`,.5,.5],...Rt(400),...Rt(620),[720,`light`,Lt[`double-tap`]],[1200,`hide`]],"triple-tap":[[0,`show`,.5,.5],...Rt(400),...Rt(600),...Rt(800),[900,`light`,Lt[`triple-tap`]],[1400,`hide`]],slide:[[0,`show`,.5,.64],[350,`down`],[350,`light`,[[`hardwares/volume`,0,.5]]],...[1,2,3,4,5,6].map(e=>[450+e*80,`to`,.5,.64-e*.04,.5+e*.05]),[1250,`up`],[1250,`light`,[[`hardwares/volume`,1500,.8],Y]],[1550,`hide`]]},Bt=e=>Math.max(...e.map(([e,t,n])=>e+(t===`light`?n.reduce((e,[,t=0])=>e+t,0):0))),Vt=[`slide`,`rest`,`tap`,`double-tap`,`triple-tap`],Ht=[`tap`,`double-tap`,`triple-tap`],Ut=e=>Math.max(0,Math.min(1,e));function Wt(e){let t={primaryState:`idle`,stateDetail:`ready`,volume:.5},n=new URLSearchParams(location.search),[r,i]=(n.get(`light`)??``).split(`/`);mt[r]?.details.some(e=>e.id===i)&&Object.assign(t,{primaryState:r,stateDetail:i}),n.has(`volume`)&&(t.volume=Ut(Number(n.get(`volume`))||0));let a=Math.max(0,Math.min(30,Number(n.get(`at`))||0)),o=e.querySelector(`.touch__top`),s=Ft(o,t,{at:a});if(!s)return null;let c=e.querySelector(`.touch__finger`)??document.createElement(`span`),l=e.querySelector(`.touch__status`)??document.createElement(`p`),u=()=>F.matches,d=[],f=()=>{d.forEach(clearTimeout),d=[]},p=(e,n)=>{let[r,i]=e.split(`/`);r===t.primaryState&&i===t.stateDetail&&n===void 0&&s.replay(),Object.assign(t,{primaryState:r,stateDetail:i}),n!==void 0&&(t.volume=n),m()},m=()=>e.classList.toggle(`is-lit`,`${t.primaryState}/${t.stateDetail}`!==Y[0]);m();let h=e=>{f();let t=0;for(let[n,r=0,i]of e)d.push(setTimeout(()=>p(n,i),t)),t+=r},g=[...e.querySelectorAll(`[data-gesture]`)],_=(e,t=!0)=>{for(let n of g){let r=n.dataset.gesture===e;n.toggleAttribute(`aria-current`,r),r&&t&&(l.textContent=`${n.querySelector(`button`).textContent}. ${n.querySelector(`p`).textContent}`)}},v=[],y=.5,b=.5,x=(e,t)=>{let n=o.getBoundingClientRect();return[n.left+e*n.width,n.top+t*n.height]},S=(e,t)=>{y=e,b=t,c.style.left=`${e*100}%`,c.style.top=`${t*100}%`},C={show:(e,t)=>(S(e,t),c.className=`touch__finger is-on`),down:()=>(c.classList.add(`is-down`),s.press(...x(y,b))),up:()=>(c.classList.remove(`is-down`),s.release()),to:(e,t,n)=>(S(e,t),s.follow(...x(e,t)),p(`hardwares/volume`,n)),hide:()=>(c.className=`touch__finger`,s.release()),light:e=>h(e)},w=()=>{v.forEach(clearTimeout),v=[],C.hide()},T=(e,t=!0)=>{w(),_(e,t);for(let[t,n,...r]of zt[e])u()&&[`show`,`down`].includes(n)||v.push(setTimeout(()=>C[n](...r),t));return Bt(zt[e])},E=!u()&&!n.has(`light`),D=0,ee=0,O=!1,te=()=>{if(!E||!O)return;let e=T(Vt[D],!1);D=(D+1)%Vt.length,ee=setTimeout(te,e+1500)},k=()=>{E=!1,clearTimeout(ee),w()};new IntersectionObserver(([e])=>{O=e.isIntersecting,clearTimeout(ee),O?ee=setTimeout(te,600):E&&w()},{threshold:.5}).observe(o);for(let e of g)e.querySelector(`button`).addEventListener(`click`,()=>{k(),T(e.dataset.gesture)});let A=It(),j=0,M=!1,N=!1,ne=!1,P=0,re={tap:({count:e})=>{_(Ht[e-1]),h(Lt[Ht[e-1]])},holdStart:()=>{_(`rest`),h([[`listening/receiving`]])},holdEnd:()=>h(Lt.rest),slide:({dy:e})=>{ne||(ne=!0,_(`slide`),f(),P=t.volume),p(`hardwares/volume`,Ut(P-e/(o.clientHeight*.6)))},slideEnd:()=>{ne=!1,h([[`hardwares/volume`,1500,t.volume],Y])}},I=e=>{e.forEach(e=>re[e.type](e)),A.pending()&&!j?j=setInterval(()=>I(A.tick(performance.now())),40):!A.pending()&&j&&(clearInterval(j),j=0)},ie=(e,t)=>{k(),s.press(e,t),I(A.down(performance.now(),e,t))},L=e=>{s.release(),I(A[e](performance.now()))};o.addEventListener(`pointerdown`,e=>{e.button!==0||N||s.hit(e.clientX,e.clientY)!==`top`||(e.preventDefault(),o.setPointerCapture(e.pointerId),M=!0,ie(e.clientX,e.clientY))}),o.addEventListener(`pointermove`,e=>{M?(s.follow(e.clientX,e.clientY),I(A.move(performance.now(),e.clientX,e.clientY))):o.style.cursor=s.hit(e.clientX,e.clientY)===`top`?`pointer`:``});let R=e=>()=>{M&&(M=!1,L(e))};o.addEventListener(`pointerup`,R(`up`)),o.addEventListener(`pointercancel`,R(`cancel`));let z=[`Enter`,` `];return o.addEventListener(`keydown`,e=>{e.key===`ArrowUp`||e.key===`ArrowDown`?(e.preventDefault(),k(),_(`slide`),p(`hardwares/volume`,Ut(t.volume+(e.key===`ArrowUp`?.1:-.1))),h([[`hardwares/volume`,1500,t.volume],Y])):z.includes(e.key)&&(e.preventDefault(),e.repeat||N||M||(N=!0,ie(...x(.5,.5))))}),o.addEventListener(`keyup`,e=>{z.includes(e.key)&&N&&(N=!1,L(`up`))}),o.addEventListener(`blur`,()=>{N&&(N=!1,L(`cancel`))}),s}var Gt={plate:[0,118,0],shell:[0,102,0],mic:[0,14,0],fpc:[0,10,0],topLed:[0,-4,0],logoLed:[0,0,-84],driver:[0,4,-66],radL:[-64,0,0],radR:[64,0,0]},Kt={plate:[[100,132],[476,512]],shell:[[112,162],[440,492]],mic:[[160,190],[424,452]],fpc:[[160,190],[424,452]],topLed:[[164,194],[420,448]],logoLed:[[172,204],[414,444]],driver:[[176,210],[410,442]],radL:[[184,220],[404,438]],radR:[[184,220],[404,438]]},qt=[[102,128],[486,510]],Jt=[0,12],Yt=[[48,104],[500,560]],Xt=[[224,284],[284,344],[344,404]],Zt=e=>Math.min(1,Math.max(0,e)),Qt=(e,[t,n])=>Zt((e-t)/(n-t)),$t=e=>e*e*(3-2*e),X=(e,t,n)=>$t(Qt(e,t))*(1-$t(Qt(e,n)));function en(e){let t=Zt(e)*600,n={};for(let[e,[r,i]]of Object.entries(Kt))n[e]=X(t,r,i);let r={listening:0,thinking:0,speaking:0,say:0},i=Xt.map(([e,n],i)=>{let a=[n-8,n];return t>=e&&t<n&&(r.say=i),r.listening+=X(t,[e+2,e+10],[e+12,e+16]),r.thinking+=X(t,[e+12,e+16],[e+20,e+24]),r.speaking+=X(t,[e+20,e+24],a),{user:X(t,[e+2,e+10],a),reply:X(t,[e+20,e+28],a)}});return{lift:t,hint:1-$t(Qt(t,Jt)),focus:X(t,...Yt),parts:n,apart:Math.max(...Object.values(n)),leds:X(t,...qt),says:i,light:r}}var tn=Math.PI*2,nn=Object.freeze([{turn:36,breath:7.5,seed:0},{turn:-53,breath:10.5,seed:1.8},{turn:79,breath:14,seed:3.7}]);function rn(e){return nn.map(({turn:t,breath:n,seed:r})=>[e*tn/t,Math.sin(e*tn/n+r),e*tn/(n*1.7)+r,.88+.12*Math.sin(e*tn/n+r+.7)])}var an=`
  uniform vec4 uCausticLayers[3];
  // Each layer has its own angular drift, radial breath, fold deformation and gain.
  float causticPattern(float r, float angle) {
    float d = r - 1.06;
    float blur = fwidth(r) * 1.2;
    vec4 inner = uCausticLayers[0];
    vec4 middle = uCausticLayers[1];
    vec4 outer = uCausticLayers[2];
    float a = angle + inner.x;
    float b = angle + middle.x;
    float c = angle + outer.x;
    float foldA = sin(a * 6.0 + inner.z) * 0.045
      + sin(a * 11.0 - inner.z * 0.7) * 0.022;
    float foldB = sin(b * 5.0 - middle.z) * 0.085
      + sin(b * 9.0 + middle.z * 0.6) * 0.045;
    float foldC = sin(c * 4.0 + outer.z) * 0.12
      + sin(c * 7.0 - outer.z * 0.5) * 0.055;
    float ridgeA = exp(-pow((d - 0.15 - inner.y * 0.035 - foldA) / (0.055 + blur), 2.0));
    float ridgeB = exp(-pow((d - 0.36 - middle.y * 0.07 - foldB) / (0.09 + blur), 2.0));
    float ridgeC = exp(-pow((d - 0.62 - outer.y * 0.10 - foldC) / (0.17 + blur), 2.0));
    float focusA = 0.62 + 0.38 * sin(a * 9.0 + inner.z);
    float focusB = 0.65 + 0.35 * sin(b * 13.0 + sin(b * 5.0) + middle.z);
    float focusC = 0.72 + 0.28 * sin(c * 8.0 - outer.z);
    float rays = pow(0.5 + 0.5 * sin(b * 19.0 + sin(b * 7.0) * 1.8
      + d * 7.0 + middle.z), 3.0) * exp(-pow((d - 0.32) / 0.38, 2.0));
    float layers = ridgeA * focusA * inner.w * 0.80
      + ridgeB * focusB * middle.w * 0.68
      + ridgeC * focusC * outer.w * 0.46 + rays * 0.14;
    float nearBase = smoothstep(0.86, 1.12, r) * (1.0 - smoothstep(1.7, 2.7, r));
    // Softly bound overlap highlights to retain detail at high base brightness.
    return mix(1.0, 0.67 + 1.35 * (1.0 - exp(-layers * 1.35)), nearBase);
  }
`,on=[593.1,830.9,1297.2],sn={x:593.1,y:882.8,width:17.3},cn=P.degToRad(-12),ln=.0565,un=`#716d65`,dn=.1826;function fn(){let e=new h().load(H);e.wrapS=e.wrapT=r,e.anisotropy=8;let t=new k({color:un,roughness:1,specularIntensity:.2,sheen:.2,sheenRoughness:.5,sheenColor:`#f7d9c4`});return t.onBeforeCompile=t=>{Object.assign(t.uniforms,{uWeave:{value:e},uTile:{value:dn},uRelief:{value:.4}}),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vAt;
varying vec3 vFacing;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vAt = position;
vFacing = normal;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
        varying vec3 vAt;
        varying vec3 vFacing;
        uniform sampler2D uWeave;
        uniform float uTile, uRelief;
        // x: tone, 1 on average; y: height
        vec2 weave() {
          vec3 w = pow(abs(normalize(vFacing)), vec3(4.0));
          w /= w.x + w.y + w.z;
          vec3 p = vAt / uTile;
          return texture2D(uWeave, p.zy).rg * w.x + texture2D(uWeave, p.xz).rg * w.y + texture2D(uWeave, p.xy).rg * w.z;
        }
        // three's perturbNormalArb (bumpmap_pars_fragment), which is only there with a bump map on the mesh's UVs
        vec3 relief(vec3 at, vec3 n, vec2 dH, float faceDirection) {
          vec3 sx = normalize(dFdx(at)), sy = normalize(dFdy(at));
          vec3 r1 = cross(sy, n), r2 = cross(n, sx);
          float det = dot(sx, r1) * faceDirection;
          return normalize(abs(det) * n - sign(det) * (dH.x * r1 + dH.y * r2));
        }`).replace(`#include <map_fragment>`,`#include <map_fragment>
diffuseColor.rgb *= pow(weave().x * 2.0, 1.6);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        float height = weave().y;
        normal = relief(-vViewPosition, normal, vec2(dFdx(height), dFdy(height)) * uRelief, faceDirection);`)},t}var Z={a:[1,.86,.66],b:[1,.7,.42],floor:.88,field:.16},pn={palettes:[[`#ffc98a`,`#fff0d9`],[`#ffbf94`,`#ffe9d6`],[`#ffd28f`,`#fff4de`]],floor:.35,field:.6};function mn(){return new a({uniforms:{uTime:{value:0},uDiffusion:{value:.375/.545},uWeights:{value:[1,0,0,0,0,0,0,0]},uColorA:{value:new b().setRGB(...Z.a)},uColorB:{value:new b().setRGB(...Z.b)},uUpdateAngle:{value:0},uFillProgress:{value:0},uFillGain:{value:0},uFloor:{value:Z.floor},uField:{value:Z.field},uGain:{value:1}},vertexShader:`
      varying vec2 vTop;
      void main() {
        vTop = position.xz / ${ln.toFixed(4)};
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform float uFloor, uField, uGain;
      varying vec2 vTop;
      ${C}
      void main() {
        float edge = pow(pow(abs(vTop.x), 4.2) + pow(abs(vTop.y), 4.2), 1.0 / 4.2);
        // An even warm white with the field drifting faintly over it (as the image: 0.99, 0.86, 0.67 in linear light).
        gl_FragColor = vec4(uGain * (uField * topField(vTop) + uColorA * uFloor) * (1.0 - 0.3 * smoothstep(0.7, 1.02, edge)), 1.0);
        #include <colorspace_fragment>
      }`})}var hn=`
  uniform vec3 uRing;
  uniform float uYaw, uTime;
  ${an}
  // q: a point of the table (world x, z; the speaker stands on the origin); toEye: the way from it to the camera, along
  // the table. Before the marble's own tone.
  vec3 tableLight(vec2 q, vec2 toEye) {
    // In the speaker's own frame.
    float c = cos(uYaw), s = sin(uYaw);
    vec2 p = vec2(c * q.x - s * q.y, s * q.x + c * q.y) / 0.05244;
    float r = pow(pow(abs(p.x), 4.2) + pow(abs(p.y), 4.2), 1.0 / 4.2), angle = atan(p.y, p.x);
    float wobble = sin(angle * 3.0 + uTime * 0.22) * 0.018;
    float ring = exp(-pow((r - 1.58 - wobble) / 0.24, 2.0));
    float halo = exp(-pow(r - 1.06, 2.0));
    float out_ = smoothstep(0.78, 1.16, r);
    float scattered = (ring * 0.26 + halo * 0.18) * out_ * 2.2 * causticPattern(r, angle);
    // The glass's wall is 46 mm from the axis.
    float wall = r * 0.05244 - 0.046;
    float wide = 0.36 * exp(-max(wall, 0.0) / 0.065) * out_;
    float under = (1.0 - out_) * 1.3 * (0.35 + 0.65 * smoothstep(0.0, 0.005, abs(wall)));
    // By where the point is, not which way it lies from the axis: that flips across the middle of the base.
    float side = smoothstep(-0.05, 0.06, dot(q, normalize(vec2(-1.0, 0.15))));
    float ahead = dot(q, toEye), aside = abs(dot(q, vec2(-toEye.y, toEye.x)));
    float mirror = smoothstep(0.02, 0.06, ahead) * exp(-max(ahead - 0.06, 0.0) / 0.035) * (1.0 - smoothstep(0.03, 0.062, aside));
    return uRing * vec3(1.5, 0.7, 0.15) * (scattered * (0.4 + 0.6 * side) + (wide + under + 0.8 * mirror) * (0.04 + 0.96 * side));
  }`;function gn(e,t,n,r){return new a({uniforms:{hero:e,table:{value:t},uRing:n,uYaw:{value:cn},...r,uTint:{value:new b(`#eef4f2`)}},vertexShader:`
      varying vec3 vWorld;
      varying vec3 vNormal;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
      uniform mat4 hero;
      uniform sampler2D table;
      uniform vec3 uTint;
      varying vec3 vWorld;
      varying vec3 vNormal;
      ${hn}
      void main() {
        vec3 n = normalize(vNormal), view = normalize(vWorld - cameraPosition);
        float facing = clamp(dot(n, -view), 0.0, 1.0);
        float left = 1.0 - smoothstep(-0.04, 0.06, dot(vWorld.xz, vec2(0.99, -0.15)));
        vec3 ray = refract(view, n, 1.0 / 1.45);
        vec3 down = vWorld + ray * min(ray.y < -0.02 ? vWorld.y / -ray.y : 0.05, 0.05);
        vec4 at = hero * vec4(down.x, 0.0, down.z, 1.0);
        vec3 marble = texture2D(table, at.xy / at.w * 0.5 + 0.5).rgb;
        // Less of the lit table shows low in the wall, where the ray comes down just behind it, than higher up.
        vec3 seen = marble * (0.2 + 0.8 * left) + 0.8 * mix(0.5, 1.0, smoothstep(0.004, 0.02, vWorld.y))
          * tableLight(down.xz, normalize(cameraPosition.xz - down.xz)) * (0.35 + 4.0 * dot(marble, vec3(0.3, 0.6, 0.1)));
        float rim = pow(1.0 - facing, 4.0);
        float turn = smoothstep(0.08, 0.3, length(fwidth(n))); // real edges, not the CAD's facets
        float lip = smoothstep(0.017, 0.023, vWorld.y);
        vec3 glow = uRing * vec3(1.35, 0.85, 0.35) * (0.03 + 0.6 * left) * (0.06 + 0.7 * rim + 0.7 * turn)
          + uRing * vec3(1.2, 1.0, 0.8) * (0.05 + 0.5 * left) * 0.6 * lip; // the band under the lip, nearest the LEDs: whiter
        gl_FragColor = vec4(seen * uTint * (1.0 - 0.6 * rim) + glow, 1.0);
        #include <colorspace_fragment>
      }`})}function _n(){let[e,t]=g.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/).slice(1).map(Number),n=document.createElement(`canvas`);n.width=(e+8)*6,n.height=(t+8)*6;let r=n.getContext(`2d`);r.scale(6,6),r.translate(4,4),r.fillStyle=`#fff`,r.fill(new Path2D(g.match(/ d="([^"]+)"/)[1]),`evenodd`);let i=sn.width/e,a=new M(new z((e+8)*i*R,(t+8)*i*R),new L({color:new b().setRGB(.85,.8,.72),alphaMap:new c(n),transparent:!0}));return a.position.set(sn.x*R,sn.y*R,1232.05*R),a.rotation.y=Math.PI,a}function vn({hero:t,table:r,ring:i,scatter:a},o){let s=new e;s.rotation.y=Math.PI+cn;let c=mn(),l=c.uniforms,u=new b().setRGB(...Z.a),d=new b().setRGB(...Z.b),f=pn.palettes.map(e=>e.map(e=>new b(e))),p={value:0},m=null,h=[],g=null;return new B().load(n.speakerCad,e=>{let n=e.scene;n.updateMatrixWorld(!0);let l=V(),u=E(n.children.find(e=>e.children.length>10),l),d=Object.fromEntries(u.shell.map(e=>[e.userData.piece,e]));d.fabric.material=fn(),d.plate.material=c;let f=d.housing.geometry.boundingBox.min.y+.0235;l.housing.transparent=!1,l.housing.onBeforeCompile=e=>{e.uniforms.uHem={value:f},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vHeight;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vHeight = position.y;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vHeight;
uniform float uHem;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
if (vHeight < uHem) discard;`)},d.logoWindow.visible=!1;let _=gn(t,r,i,a),y=new k({color:`#000000`,roughness:.08,envMapIntensity:.5,transparent:!0,blending:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),b=[];for(let e of u.base)e.traverse(e=>e.isMesh&&b.push(e));for(let e of b)e.material=_,e.add(new M(e.geometry,y));for(let e of[d.fabric,d.plate,...b])e.castShadow=!0;let x=_n();n.add(x),n.updateMatrixWorld(!0),d.fabric.parent.attach(x);let S={...u,plate:[d.plate],shell:[d.housing,d.logoWindow,d.fabric,x]};for(let e of u.foot??[])e.visible=!1;h=Object.entries(u).filter(([e])=>![`shell`,`base`,`foot`].includes(e)).flatMap(([,e])=>e);for(let e of h)e.visible=!1;g=l.led,g.emissiveIntensity=2.4,g.onBeforeCompile=e=>{e.uniforms.uLit=p,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vAxis;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vAxis = (modelMatrix * vec4(transformed, 1.0)).xz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vAxis;
uniform float uLit;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
            float turn = 0.6 * fract((atan(vAxis.y, vAxis.x) + 0.1) / 6.2832 + 0.5) + 0.4 * clamp(length(vAxis) / 0.06, 0.0, 1.0);
            totalEmissiveRadiance *= smoothstep(turn * 0.67, turn * 0.67 + 0.33, uLit);`)};let C=new Map(Object.values(S).flat().map(e=>[e,e.position.clone()])),w=new v;m=e=>{for(let[t,n]of Object.entries(Gt)){w.fromArray(n).multiplyScalar(R*(e[t]??0));for(let e of S[t]??[])e.position.copy(C.get(e)).add(w)}},n.position.set(-on[0]*R,-on[1]*R,-on[2]*R),s.add(n),o()},void 0,e=>console.error(`[l2] the speaker CAD could not be loaded; the room shows without it.`,e)),{group:s,light:l.uColorA,update(e,t){if(l.uTime.value=.36/(.65*.55)*e,!m||!t)return;m(t.parts);let n=t.parts.shell>.001||t.parts.plate>.001;for(let e of h)e.visible=n;let{listening:r,thinking:i,speaking:a,say:o}=t.light,s=r+i+a,c=1-s,[_,v]=f[o];Object.assign(l.uWeights.value,{0:c,2:r,3:i,5:a}),l.uColorA.value.copy(u).lerp(_,s),l.uColorB.value.copy(d).lerp(v,s),l.uFloor.value=Z.floor*c+pn.floor*s,l.uField.value=Z.field*c+pn.field*s,l.uGain.value=1-.6*t.parts.plate,g.emissive.copy(l.uColorA.value),p.value=t.leds}}}var yn=850.5,bn=464,xn=219,Sn=.36,Cn=3,wn=`"Helvetica Neue", Helvetica, Arial, sans-serif`;function Tn(e){let[t,n]=e.map(e=>e.textContent.trim().toUpperCase()),r=document.createElement(`canvas`),i=r.getContext(`2d`),a=e=>`700 ${e}px ${wn}`,o=e=>{i.font=a(e),i.letterSpacing=`${-.02*e}px`,i.textBaseline=`alphabetic`,i.textAlign=`center`,i.fillStyle=`#fff`,i.shadowColor=`rgb(30 18 8 / 0.5)`,i.shadowBlur=36,i.shadowOffsetY=Cn};o(100);let s=100*bn*Cn/i.measureText(n).width,c=s*Sn;o(s);let l=i.measureText(`H`).actualBoundingBoxAscent;o(c);let u=i.measureText(`H`).actualBoundingBoxAscent,d=Math.ceil(s*.06+36),f=d+u+l*1.2;return r.width=Math.ceil(Math.max(bn*Cn,i.measureText(t).width))+2*d,r.height=Math.ceil(f+s*.05)+d,o(c),i.fillText(t,r.width/2,d+u),o(s),i.fillText(n,r.width/2,f),{canvas:r,rect:[yn-r.width/Cn/2,xn-f/Cn,r.width/Cn,r.height/Cn]}}function En(e,t,n){let{canvas:r,rect:i}=Tn(e),o=new c(r);o.anisotropy=8;let s=new a({uniforms:{map:{value:o},uLight:t,uTop:{value:n},uInk:{value:new b().setRGB(.96,.92,.86)}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vFacing;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vUv = uv;
        vWorld = world.xyz;
        vFacing = normalize(mat3(modelMatrix) * vec3(0.0, 0.0, 1.0));
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
      uniform sampler2D map;
      uniform vec3 uLight, uTop, uInk;
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vFacing;
      void main() {
        // Cream letters in the room's dim light, and on them the light of the speaker's top: it falls off with the
        // square of the distance (full within 0.15 m, the letters just above it) and with the angle it arrives at.
        // At most a little over white, so the nearest letters glow faintly without losing their edges to the bloom.
        vec3 toTop = uTop - vWorld;
        float lit = 0.0225 / dot(toTop, toTop) * max(dot(normalize(toTop), normalize(vFacing)), 0.0);
        vec4 drawn = texture2D(map, vUv); // white letters over their dark shadow
        gl_FragColor = vec4(uInk * (0.82 + 0.34 * uLight * min(lit, 1.0)) * drawn.rgb, drawn.a);
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1});return{mesh:new M(new z(1,1),s),rect:i}}var Dn={frame:[1701,925],far:[-335,-216,2411,1141]},On=`/OpenHomeWebsite/assets/far-BsO_Thj8.webp`,kn=`/OpenHomeWebsite/assets/sofa-Dh_EfP0W.webp`,An=`/OpenHomeWebsite/assets/table-DsuEhyTs.webp`,jn=`/OpenHomeWebsite/assets/props-DXSJ4Rwi.webp`,Q=Dn.frame,Mn=2362.5,Nn=[852.34,529.42],Pn=new v(0,.24036,.87437),$=new v(0,.0704,0),Fn=[1.5,.75],In=5,Ln=.038,Rn=2.2,zn=[.62,.45,.28];function Bn(e,[t,n,r,i],a=.05,o=40){let s=a/Mn;return e.makePerspective((t-Nn[0])*s,(t+r-Nn[0])*s,(Nn[1]-n)*s,(Nn[1]-n-i)*s,a,o)}var Vn=`
  uniform mat4 hero;
  varying vec4 vHero;
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vHero = hero * world;
    gl_Position = projectionMatrix * viewMatrix * world;
  }`,Hn=`
  uniform sampler2D map;
  uniform vec4 rect; // where the layer's image sits in the frame: [left, bottom, width, height], the frame being 0–1
  uniform float uDim, uSoft; // the room stepping back while the speaker is apart: darker, and softer by mip levels
  varying vec4 vHero;
  void main() {
    if (vHero.w <= 0.0) discard; // behind the hero camera
    gl_FragColor = texture2D(map, (vHero.xy / vHero.w * 0.5 + 0.5 - rect.xy) / rect.zw, uSoft);
    gl_FragColor.rgb *= uDim;
    #include <colorspace_fragment>
  }`;function Un(e){let t=new _;t.background=new b(`#17120e`);let n=(e,n,r,i,a)=>{let o=new M(new z(r,i),new L({color:new b(e).multiplyScalar(n),side:2}));o.position.set(...a),o.lookAt($),t.add(o)};n(`#ffc48a`,16,.9,.5,[-1.2,1.3,-2.2]),n(`#ffb070`,5,1.8,1.1,[-2.6,.7,-1.4]),n(`#ffa24f`,6,.3,.25,[-.9,.12,.15]),n(`#8fb0ff`,2.5,2.6,1.7,[2.7,1,-2.6]),n(`#ffd9a8`,22,.07,.7,[-1,.35,.8]),n(`#bcd0ff`,4,.06,.9,[1.3,.4,.25]);let r=new o(e),i=r.fromScene(t,.03).texture;return r.dispose(),i}function Wn(e,t,n,r){let i=new a({uniforms:{hero:e,table:{value:t},uRing:n,uYaw:{value:cn},...r},vertexShader:Vn,fragmentShader:`
      uniform sampler2D table;
      varying vec4 vHero;
      varying vec3 vWorld;
      ${hn}
      void main() {
        vec4 marble = texture2D(table, vHero.xy / vHero.w * 0.5 + 0.5);
        vec3 light = tableLight(vWorld.xz, normalize(cameraPosition.xz - vWorld.xz));
        gl_FragColor = vec4(light * (0.35 + 4.0 * dot(marble.rgb, vec3(0.3, 0.6, 0.1))) * marble.a, 1.0);
        #include <colorspace_fragment>
      }`,transparent:!0,blending:2,depthWrite:!1}),o=new M(new z(.8,.8).rotateX(-Math.PI/2),i);return o.position.y=6e-4,o}function Gn(e,t){let n=new i({opacity:.8,depthWrite:!1});n.onBeforeCompile=n=>{Object.assign(n.uniforms,{hero:e,table:{value:t}}),n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>
uniform mat4 hero;
varying vec4 vHero;`).replace(`#include <shadowmap_vertex>`,`#include <shadowmap_vertex>
vHero = hero * worldPosition;`),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D table;
varying vec4 vHero;`).replace(`#include <tonemapping_fragment>`,`gl_FragColor.a *= texture2D(table, vHero.xy / vHero.w * 0.5 + 0.5).a;
#include <tonemapping_fragment>`)};let r=new M(new z(1.2,1.2).rotateX(-Math.PI/2),n);return r.position.y=3e-4,r.receiveShadow=!0,r}function Kn(e,n,r){let i=new URLSearchParams(location.search),o=new u({canvas:e});o.setPixelRatio(Math.min(devicePixelRatio,2)),o.shadowMap.enabled=!0,o.shadowMap.type=3;let c=new _,g=new w;g.position.copy(Pn),g.lookAt($),g.updateMatrixWorld();let y={value:Bn(new ee,[0,0,...Q]).multiply(g.matrixWorldInverse)},S=$.clone().sub(Pn).normalize(),C=g.quaternion.clone(),T=new v(1,0,0).applyQuaternion(C),E=new v(0,1,0).applyQuaternion(C);function D(e,[t,n,r,i],a){let o=a/Mn;e.scale.set(r*o,i*o,1),e.quaternion.copy(C),e.position.copy(Pn).addScaledVector(S,a).addScaledVector(T,(t+r/2-Nn[0])*o).addScaledVector(E,(Nn[1]-n-i/2)*o)}let O=new A(o,new s(1,1,{type:te,samples:4}));O.addPass(new t(c,g)),O.addPass(new j(new l(1,1),.3,.5,1)),O.addPass(new p);let k=0,N=()=>k||=requestAnimationFrame(q),ne=new h,re={uDim:{value:1},uSoft:{value:0}};function F(e,t,[n,r,i,s],l){let u=ne.load(t,N);u.colorSpace=ae,u.anisotropy=o.capabilities.getMaxAnisotropy();let d={value:new x(n/Q[0],1-(r+s)/Q[1],i/Q[0],s/Q[1])},f=new a({uniforms:{map:{value:u},hero:y,rect:d,...re},vertexShader:Vn,fragmentShader:Hn,transparent:e>0,depthWrite:!1}),p=new M(l,f);return p.renderOrder=e,c.add(p),p}let I=(e,t)=>(e.position.copy(Pn).addScaledVector(S,t),e.lookAt(Pn)),L=[0,0,...Q];I(F(0,On,Dn.far,new z(12,8)),4.5),I(F(1,kn,L,new z(6,4)),1.5);let R=F(2,An,L,new z(3,2.2).rotateX(-Math.PI/2));R.position.z=-.5,F(3,jn,L,new z(3,2)).position.set(0,.6,-.03);let B=null,V=null,H=null,ce=null,le={uTime:{value:0},uCausticLayers:{value:rn(0).map(e=>new x(...e))}},ue=1.02;if(!i.has(`empty`)){let e={value:new b().setRGB(...zn)},t=R.material.uniforms.map.value;c.environment=Un(o);let r=new m(`#ffb878`,2.5,3,.5,1,2);r.position.set(-.62,.3,-.3),r.target.position.copy($),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=.2,r.shadow.camera.far=2,r.shadow.radius=8,r.shadow.blurSamples=16,r.shadow.bias=-5e-4;let i=new d(`#b9c9f0`,4);i.position.set(1.2,.5,-.5),i.target.position.copy($);let a=new oe(`#ffab70`,.68,3,2);a.position.set(-.36,.3,.04);let s=new oe(`#ffc5a3`,.03,3,2);s.position.set(-.3,.15,.3);let l=new oe(`#ff9a50`,.006,.5,2);l.position.set(-.03,.004,.16),c.add(a,s,l,new ie(`#ffe4c8`,`#3a2c22`,.08));let u=new oe(`#ffd6a4`,.05,.4,2);u.position.set(0,.185,0);let f=Gn(y,t),p=Wn(y,t,e,le);if(f.renderOrder=p.renderOrder=2.5,c.add(r,r.target,i,i.target,u,f,p),V=new d(`#fff1e0`,0),V.position.set(-.3,.8,.9),V.target.position.copy($),c.add(V,V.target),B=vn({hero:y,table:t,ring:e,scatter:le},N),c.add(B.group),n){let{mesh:e,rect:t}=En([...n.children],B.light,new v(0,.1408,0));D(e,t,ue),e.renderOrder=2.2,c.add(e),H=e,ce=e.position.clone()}}let U=i.has(`yaw`)||i.has(`pitch`)||i.has(`p`),de=matchMedia(`(prefers-reduced-motion: reduce)`).matches,fe=U||de,W={yaw:Number(i.get(`yaw`))||0,pitch:Number(i.get(`pitch`))||0},G={...W},pe=new f().setFromVector3(Pn.clone().sub($)),me=new f,he=null,ge=0,K=1,_e=new v,ve=new v,ye=new v;function be(t,n,r){return ve.set(t,n,r).project(g),[(ve.x+1)/2*e.clientWidth,(1-ve.y)/2*e.clientHeight]}function q(e){k=0,W.yaw+=(G.yaw-W.yaw)*.08,W.pitch+=(G.pitch-W.pitch)*.08;let t=he?.focus??0;me.set(pe.radius,pe.phi-P.degToRad(W.pitch+In*t),pe.theta+P.degToRad(W.yaw)),g.position.setFromSpherical(me).add($),g.lookAt(_e.copy($).setY($.y+Ln*t)),re.uDim.value=1-.5800000000000001*t,re.uSoft.value=Rn*t,V&&(V.intensity=1.4*(he?.apart??0)),H&&(H.position.copy(ce).addScaledVector(E,ge/K*(ue/Mn)),H.visible=ge/K<Q[1]);let n=fe?0:e/1e3;if(le.uTime.value=n,rn(n).forEach((e,t)=>le.uCausticLayers.value[t].fromArray(e)),B?.update(n,he),O.render(),r&&(r.style.visibility=H?.visible?`visible`:`hidden`,H)){let[e,t]=be(...ye.set(0,-.5,0).applyMatrix4(H.matrixWorld));r.style.transform=`translate(${e}px, ${t}px) translateX(-50%)`}(B?.group.children.length&&!de||Math.abs(G.yaw-W.yaw)+Math.abs(G.pitch-W.pitch)>.001)&&N()}return new ResizeObserver(()=>{let{clientWidth:t,clientHeight:n}=e;t&&n&&(o.setSize(t,n,!1),O.setPixelRatio(o.getPixelRatio()),O.setSize(t,n),K=Math.max(t/Q[0],n/Q[1]),r?.style.setProperty(`--k`,K),Bn(g.projectionMatrix,se(Q,t,n)),g.projectionMatrixInverse.copy(g.projectionMatrix).invert(),N())}).observe(e),fe||addEventListener(`pointermove`,e=>{G.yaw=(e.clientX/innerWidth-.5)*2*Fn[0],G.pitch=(.5-e.clientY/innerHeight)*2*Fn[1],N()}),{set(e,t){he=e,ge=t,N()},where:be}}function qn(e){let t=e.querySelector(`.l2-hero__stage`),n=t.querySelector(`.l2-hero__scroll`),r=[...t.querySelectorAll(`.l2-say`)].map(e=>[e.querySelector(`.l2-say__user`),e.querySelector(`.l2-say__reply`)]),i=Kn(t.querySelector(`.l2-hero__frame`),t.querySelector(`.l2-hero__title`),t.querySelector(`.l2-hero__lead`)),a=new URLSearchParams(location.search),o=a.has(`p`)?Number(a.get(`p`)):null,s=()=>{let t=e.getBoundingClientRect(),n=t.height-innerHeight;return n>0?Math.min(1,Math.max(0,-t.top/n)):0},c=(e,t)=>{e.style.opacity=t,e.style.transform=`translateY(${(1-t)*12}px)`},l=o??s(),u=performance.now(),d=0,f=()=>d||=requestAnimationFrame(p);function p(e){d=0;let a=o??s(),p=Math.min(.1,(e-u)/1e3);u=e,l=Math.abs(a-l)<1e-4?a:l+(a-l)*(1-Math.exp(-p*10));let m=en(l);i.set(m,a*600*innerHeight/100),n.style.opacity=m.hint,t.style.setProperty(`--left`,`${i.where(-.15,.1,0)[0]}px`),t.style.setProperty(`--right`,`${i.where(.15,.1,0)[0]}px`),r.forEach(([e,t],n)=>{c(e,m.says[n].user),c(t,m.says[n].reply)}),l!==a&&f()}addEventListener(`scroll`,f,{passive:!0}),addEventListener(`resize`,f),f()}var Jn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221 39" fill="currentColor">
  <path fill-rule="evenodd" d="M19.2545 38.6603C27.7535 38.6603 34.947 33.0986 37.3947 25.4155V38.6603C37.4627 38.6603 37.5443 38.6603 37.6123 38.6603C45.2409 38.6603 51.8225 34.1729 54.855 27.7001C57.8874 34.1729 64.469 38.6603 72.0977 38.6603C72.1249 38.6603 72.1521 38.6603 72.1793 38.6603C72.2337 38.6603 72.2745 38.6603 72.3288 38.6603V0.584961C72.2609 0.584961 72.1793 0.584961 72.1113 0.584961C64.4826 0.584961 57.901 5.07242 54.8686 11.5452C51.8225 5.07242 45.2545 0.584961 37.6259 0.584961C37.5443 0.584961 37.4763 0.584961 37.4083 0.584961V13.8298C34.947 6.14669 27.7535 0.584961 19.2545 0.584961C8.74296 0.584961 0.216797 9.11113 0.216797 19.6227C0.216797 30.1342 8.74296 38.6603 19.2545 38.6603Z"/>
  <path d="M97.7856 25.8241C96.4257 25.8241 95.1883 25.593 94.0596 25.117C92.9309 24.6411 91.9655 23.9884 91.1496 23.1317C90.3473 22.275 89.7353 21.2959 89.3002 20.1944C88.865 19.0658 88.6475 17.8691 88.6475 16.6044C88.6475 15.3398 88.865 14.116 89.3002 13.0145C89.7353 11.913 90.3473 10.9339 91.1496 10.0772C91.9655 9.22054 92.9309 8.56782 94.0596 8.09188C95.1883 7.61594 96.4257 7.38477 97.7856 7.38477C99.1454 7.38477 100.383 7.61594 101.511 8.09188C102.64 8.56782 103.592 9.22054 104.394 10.0772C105.21 10.9339 105.836 11.913 106.271 13.0145C106.706 14.116 106.924 15.3126 106.924 16.6044C106.924 17.8963 106.706 19.0658 106.271 20.1944C105.836 21.2959 105.21 22.275 104.394 23.1317C103.592 23.9884 102.64 24.6411 101.511 25.117C100.383 25.593 99.1454 25.8241 97.7856 25.8241ZM97.7856 23.8388C99.2542 23.8388 100.519 23.526 101.566 22.8869C102.64 22.2342 103.456 21.3639 104.014 20.276C104.598 19.1745 104.884 17.9507 104.884 16.6044C104.884 15.2582 104.598 14.0208 104.014 12.9329C103.456 11.845 102.64 10.9883 101.566 10.3492C100.519 9.69649 99.2542 9.37012 97.7856 9.37012C96.3169 9.37012 95.0795 9.69649 94.0052 10.3492C92.9309 10.9883 92.115 11.845 91.5303 12.9329C90.9728 14.0208 90.6872 15.2446 90.6872 16.6044C90.6872 17.9643 90.9728 19.1745 91.5303 20.276C92.115 21.3639 92.9309 22.2342 94.0052 22.8869C95.0795 23.526 96.3305 23.8388 97.7856 23.8388Z"/>
  <path d="M108.799 30.9919V12.0086H110.839V14.1843C111.342 13.4364 111.994 12.8653 112.797 12.4437C113.613 12.0086 114.578 11.791 115.707 11.791C117.026 11.791 118.182 12.1038 119.161 12.7429C120.153 13.3548 120.929 14.1979 121.472 15.2722C122.016 16.3193 122.288 17.5023 122.288 18.8078C122.288 20.1132 122.016 21.2691 121.472 22.3433C120.929 23.4176 120.153 24.2607 119.161 24.8998C118.182 25.5118 117.026 25.8245 115.707 25.8245C114.578 25.8245 113.613 25.6069 112.797 25.1718C111.994 24.723 111.342 24.1247 110.839 23.404V30.9919H108.799ZM115.435 23.9751C116.455 23.9751 117.311 23.744 118.019 23.268C118.739 22.7921 119.297 22.1666 119.678 21.3915C120.058 20.5891 120.249 19.7325 120.249 18.8078C120.249 17.8831 120.058 16.9992 119.678 16.2241C119.297 15.449 118.739 14.8234 118.019 14.3475C117.311 13.8716 116.455 13.6404 115.435 13.6404C114.415 13.6404 113.585 13.8716 112.878 14.3475C112.171 14.8234 111.641 15.449 111.274 16.2241C110.907 16.9992 110.73 17.8695 110.73 18.8078C110.73 19.7461 110.907 20.5891 111.274 21.3915C111.641 22.1666 112.171 22.7921 112.878 23.268C113.585 23.744 114.442 23.9751 115.435 23.9751Z"/>
  <path d="M130.067 25.8245C128.694 25.8245 127.484 25.5118 126.45 24.8998C125.417 24.2607 124.614 23.4176 124.03 22.3433C123.472 21.2691 123.187 20.0996 123.187 18.8078C123.187 17.5159 123.458 16.3193 124.002 15.2722C124.546 14.1979 125.321 13.3548 126.341 12.7429C127.361 12.1038 128.558 11.791 129.931 11.791C131.305 11.791 132.529 12.1038 133.521 12.7429C134.541 13.3548 135.316 14.1979 135.86 15.2722C136.404 16.3193 136.676 17.5023 136.676 18.8078V19.6237H125.281C125.389 20.426 125.648 21.1603 126.042 21.8266C126.464 22.4793 127.008 23.0097 127.701 23.404C128.395 23.7848 129.183 23.9751 130.094 23.9751C131.06 23.9751 131.862 23.7712 132.515 23.3496C133.168 22.9145 133.671 22.3569 134.038 21.6906H136.268C135.792 22.9009 135.044 23.9071 134.011 24.6823C132.991 25.4438 131.685 25.8245 130.067 25.8245ZM125.308 17.7199H134.555C134.378 16.564 133.888 15.585 133.086 14.8098C132.284 14.0347 131.237 13.6404 129.931 13.6404C128.626 13.6404 127.579 14.0347 126.776 14.8098C126.001 15.585 125.512 16.564 125.308 17.7199Z"/>
  <path d="M138.214 25.6069V12.0086H140.254V14.1299C140.743 13.4772 141.341 12.9197 142.049 12.4709C142.756 12.0222 143.667 11.791 144.768 11.791C145.707 11.791 146.59 12.0222 147.406 12.4709C148.236 12.9061 148.916 13.5724 149.419 14.4563C149.949 15.3266 150.208 16.4009 150.208 17.6927V25.6069H148.168V17.7471C148.168 16.5096 147.814 15.5306 147.107 14.7827C146.4 14.0211 145.489 13.6404 144.36 13.6404C143.599 13.6404 142.905 13.8172 142.293 14.1571C141.681 14.4971 141.178 14.9866 140.798 15.6258C140.43 16.2377 140.254 16.9584 140.254 17.7743V25.6069H138.214Z"/>
  <path d="M153.103 25.6068V7.60254H155.142V15.5984H165.613V7.60254H167.653V25.6068H165.613V17.5837H155.142V25.6068H153.103Z"/>
  <path d="M176.588 25.8245C175.214 25.8245 174.017 25.5118 172.998 24.8998C171.978 24.2607 171.203 23.4176 170.659 22.3433C170.115 21.2691 169.843 20.0996 169.843 18.8078C169.843 17.5159 170.115 16.3193 170.659 15.2722C171.203 14.1979 171.978 13.3548 172.998 12.7429C174.017 12.1038 175.214 11.791 176.588 11.791C177.961 11.791 179.185 12.1038 180.178 12.7429C181.197 13.3548 181.973 14.1979 182.516 15.2722C183.06 16.3193 183.332 17.5023 183.332 18.8078C183.332 20.1132 183.06 21.2691 182.516 22.3433C181.973 23.4176 181.197 24.2607 180.178 24.8998C179.185 25.5118 177.988 25.8245 176.588 25.8245ZM176.588 23.9751C177.607 23.9751 178.451 23.744 179.144 23.268C179.851 22.7921 180.381 22.1666 180.749 21.3915C181.116 20.5891 181.293 19.7325 181.293 18.8078C181.293 17.8831 181.116 16.9992 180.749 16.2241C180.381 15.449 179.851 14.8234 179.144 14.3475C178.451 13.8716 177.607 13.6404 176.588 13.6404C175.568 13.6404 174.738 13.8716 174.031 14.3475C173.324 14.8234 172.794 15.449 172.426 16.2241C172.059 16.9992 171.883 17.8695 171.883 18.8078C171.883 19.7461 172.059 20.5891 172.426 21.3915C172.794 22.1666 173.324 22.7921 174.031 23.268C174.738 23.744 175.595 23.9751 176.588 23.9751Z"/>
  <path d="M185.073 25.6069V12.0086H187.113V14.0755C187.426 13.5316 187.915 13.0149 188.582 12.5253C189.248 12.0358 190.145 11.791 191.247 11.791C192.158 11.791 192.987 12.0358 193.749 12.5253C194.524 13.0013 195.136 13.6676 195.571 14.5379C195.748 14.2251 196.034 13.858 196.414 13.4228C196.809 12.9877 197.325 12.6069 197.964 12.2806C198.604 11.9542 199.365 11.791 200.249 11.791C201.133 11.791 201.935 12.0222 202.697 12.4709C203.458 12.9197 204.07 13.5724 204.546 14.4291C205.036 15.2586 205.28 16.2513 205.28 17.3935V25.6069H203.241V17.4479C203.241 16.3057 202.914 15.3946 202.262 14.7011C201.622 13.9939 200.834 13.6404 199.868 13.6404C198.903 13.6404 198.005 13.9804 197.285 14.6467C196.564 15.313 196.197 16.2649 196.197 17.4751V25.6069H194.157V17.4479C194.157 16.3057 193.831 15.3946 193.178 14.7011C192.539 13.9939 191.75 13.6404 190.785 13.6404C189.819 13.6404 188.922 13.9804 188.201 14.6467C187.48 15.313 187.113 16.2649 187.113 17.4751V25.6069H185.073Z"/>
  <path d="M213.779 25.8245C212.406 25.8245 211.196 25.5118 210.162 24.8998C209.129 24.2607 208.326 23.4176 207.742 22.3433C207.184 21.2691 206.898 20.0996 206.898 18.8078C206.898 17.5159 207.17 16.3193 207.714 15.2722C208.258 14.1979 209.033 13.3548 210.053 12.7429C211.073 12.1038 212.27 11.791 213.643 11.791C215.017 11.791 216.24 12.1038 217.233 12.7429C218.253 13.3548 219.028 14.1979 219.572 15.2722C220.116 16.3193 220.388 17.5023 220.388 18.8078V19.6237H208.993C209.101 20.426 209.36 21.1603 209.754 21.8266C210.176 22.4793 210.72 23.0097 211.413 23.404C212.107 23.7848 212.895 23.9751 213.806 23.9751C214.772 23.9751 215.574 23.7712 216.227 23.3496C216.88 22.9145 217.383 22.3569 217.75 21.6906H219.98C219.504 22.9009 218.756 23.9071 217.723 24.6823C216.703 25.4438 215.397 25.8245 213.779 25.8245ZM209.02 17.7199H218.267C218.09 16.564 217.6 15.585 216.798 14.8098C215.996 14.0347 214.949 13.6404 213.643 13.6404C212.338 13.6404 211.291 14.0347 210.488 14.8098C209.713 15.585 209.224 16.564 209.02 17.7199Z"/>
</svg>
`,Yn=`.l2-hero, [data-dark]`;function Xn(e){e.querySelector(`.l2-nav__logo`)?.insertAdjacentHTML(`afterbegin`,Jn.replace(`<svg`,`<svg aria-hidden="true" focusable="false"`));let t=[...document.querySelectorAll(`main > section`)],n=!1,r=()=>{n=!1;let r=e.getBoundingClientRect(),i=r.top+r.height/2,a=t.find(e=>{let t=e.getBoundingClientRect();return t.top<=i&&t.bottom>i});e.classList.toggle(`l2-nav--light`,!!a&&!a.matches(Yn))};addEventListener(`scroll`,()=>{n||(n=!0,requestAnimationFrame(r))},{passive:!0}),addEventListener(`resize`,r),r()}document.documentElement.classList.toggle(`plain`,new URLSearchParams(location.search).has(`plain`)),T(),re(),Xn(document.querySelector(`.l2-nav`)),ne(),qn(document.querySelector(`.l2-hero`)),I(),Ie(document.querySelector(`.l2-design`)),Wt(document.querySelector(`.touch`));