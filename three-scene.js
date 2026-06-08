/* LUMORA — escena 3D de cortadoras flotantes (Three.js) */
/* global THREE */
(function(){
  if(typeof THREE==='undefined'){console.warn('THREE no cargado');return;}

  function makeClipper(){
    const g=new THREE.Group();
    const dark=new THREE.MeshStandardMaterial({color:0x161616,metalness:.9,roughness:.3});
    const gold=new THREE.MeshStandardMaterial({color:0xC9A24B,metalness:1,roughness:.22,emissive:0x3a2c0a,emissiveIntensity:.45});
    const goldB=new THREE.MeshStandardMaterial({color:0xFBE7B0,metalness:1,roughness:.14,emissive:0x6a5410,emissiveIntensity:.55});

    const body=new THREE.Mesh(new THREE.BoxGeometry(0.95,2.4,0.6),dark); g.add(body);
    // bordes redondeados con cilindros laterales
    [-0.475,0.475].forEach(x=>{const e=new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,2.4,20),dark);e.position.x=x;e.scale.z=0.5;g.add(e);});
    const base=new THREE.Mesh(new THREE.CylinderGeometry(0.32,0.46,0.5,24),dark); base.position.y=-1.35; g.add(base);
    const head=new THREE.Mesh(new THREE.BoxGeometry(1.04,0.55,0.66),gold); head.position.y=1.35; g.add(head);
    const bladeBase=new THREE.Mesh(new THREE.BoxGeometry(1.12,0.2,0.16),goldB); bladeBase.position.set(0,1.68,0.27); g.add(bladeBase);
    for(let i=0;i<11;i++){const t=new THREE.Mesh(new THREE.BoxGeometry(0.06,0.17,0.05),goldB);t.position.set(-0.5+i*0.1,1.83,0.31);g.add(t);}
    const stripe=new THREE.Mesh(new THREE.BoxGeometry(0.99,0.14,0.04),gold); stripe.position.set(0,0.3,0.32); g.add(stripe);
    const btn=new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.12,0.07,24),goldB); btn.rotation.x=Math.PI/2; btn.position.set(0,0.72,0.33); g.add(btn);
    const led=new THREE.Mesh(new THREE.SphereGeometry(0.055,16,16),new THREE.MeshStandardMaterial({color:0x6CFF8F,emissive:0x2fff6a,emissiveIntensity:2.2})); led.position.set(0,0.02,0.33); g.add(led);
    return g;
  }

  window.LumoraScene=function(canvas,opts){
    opts=opts||{};
    const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    const scene=new THREE.Scene();
    const cam=new THREE.PerspectiveCamera(45,1,0.1,100); cam.position.z=8;

    scene.add(new THREE.AmbientLight(0xffffff,.5));
    const key=new THREE.DirectionalLight(0xffffff,1.7); key.position.set(5,6,8); scene.add(key);
    const rim=new THREE.DirectionalLight(0xC9A24B,2.4); rim.position.set(-6,2,-4); scene.add(rim);
    const fill=new THREE.PointLight(0x3a6bff,1.4,60); fill.position.set(-5,-3,6); scene.add(fill);
    const glow=new THREE.PointLight(0xC9A24B,2.2,40); glow.position.set(0,0,5); scene.add(glow);

    const clippers=[];
    (opts.clippers||[{x:0,y:0,s:1,sp:.4}]).forEach((d,i)=>{const c=makeClipper();c.scale.setScalar(d.s);c.position.set(d.x,d.y,d.z||0);c.rotation.z=d.rz||0;scene.add(c);clippers.push({m:c,d,i});});

    let pts;
    if(opts.particles!==false){
      const N=opts.pCount||150,pos=new Float32Array(N*3);
      for(let i=0;i<N*3;i++) pos[i]=(Math.random()-.5)*18;
      const pg=new THREE.BufferGeometry(); pg.setAttribute('position',new THREE.BufferAttribute(pos,3));
      pts=new THREE.Points(pg,new THREE.PointsMaterial({color:0xC9A24B,size:.045,transparent:true,opacity:.75})); scene.add(pts);
    }

    let mx=0,my=0; addEventListener('mousemove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;});
    let rot=0,vel=0,drag=false,lastX=0;
    if(opts.drag){
      canvas.style.cursor='grab';
      canvas.addEventListener('pointerdown',e=>{drag=true;lastX=e.clientX;canvas.style.cursor='grabbing';});
      addEventListener('pointerup',()=>{drag=false;canvas.style.cursor='grab';});
      addEventListener('pointermove',e=>{if(!drag)return;vel=(e.clientX-lastX)*0.012;rot+=vel;lastX=e.clientX;});
    }

    function resize(){const r=canvas.getBoundingClientRect();renderer.setSize(r.width,r.height,false);cam.aspect=r.width/r.height;cam.updateProjectionMatrix();}
    let t=0;
    (function frame(){
      t+=0.016;
      clippers.forEach(c=>{
        c.m.position.y=(c.d.y||0)+Math.sin(t*(c.d.fs||1)+c.i*1.7)*0.35;
        if(opts.drag){ if(!drag){rot+=vel;vel*=0.94;if(Math.abs(vel)<0.0015)rot+=0.004;} c.m.rotation.y=rot; c.m.rotation.x=my*0.3; }
        else{ c.m.rotation.y+=c.d.sp*0.016; c.m.rotation.x=THREE.MathUtils.lerp(c.m.rotation.x,my*0.4,0.05); c.m.rotation.z=(c.d.rz||0)+mx*0.18; }
      });
      if(pts) pts.rotation.y+=0.0009;
      cam.position.x=THREE.MathUtils.lerp(cam.position.x,mx*1.6,0.05);
      cam.position.y=THREE.MathUtils.lerp(cam.position.y,-my*1.6,0.05);
      cam.lookAt(0,0,0);
      renderer.render(scene,cam);
      requestAnimationFrame(frame);
    })();
    new ResizeObserver(resize).observe(canvas); resize();
  };
})();
