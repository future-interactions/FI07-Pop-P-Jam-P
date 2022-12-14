
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

 const renderer = new THREE.WebGLRenderer();
 const controls = new THREE.OrbitControls(camera, renderer.domElement)

 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);
 const geometry = new THREE.CapsuleGeometry(1, 1, 48, 48);
 const material = new THREE.MeshNormalMaterial();
 const pill = new THREE.Mesh(geometry, material);
 const pill2 = new THREE.Mesh(geometry, material);
 const pill3 = new THREE.Mesh(geometry, material);
 const pill4 = new THREE.Mesh(geometry, material);
 const pill5 = new THREE.Mesh(geometry, material);
 const pill6 = new THREE.Mesh(geometry, material);

 scene.add(pill);
 scene.add(pill2);
scene.add(pill3);
scene.add(pill4);
scene.add(pill5);
scene.add(pill6);

 pill.position.x = THREE.MathUtils.randFloat(-6 , 6);
 pill2.position.x = THREE.MathUtils.randFloat(-6, 6);
 pill3.position.x = THREE.MathUtils.randFloat(-6 , 6);
 pill4.position.x = THREE.MathUtils.randFloat(-6 , 6);
 pill5.position.x = THREE.MathUtils.randFloat(-6 , 6);
 pill6.position.x = THREE.MathUtils.randFloat(-6 , 6);

 camera.position.z = 5;


 function animate() {
   requestAnimationFrame(animate);
   pill2.rotation.x -= 0.01;
   pill2.rotation.z -= 0.01;
   pill.rotation.x += 0.01;
   pill.rotation.z += 0.01;
    pill3.rotation.y += 0.01;
   pill3.rotation.z += 0.01;
    pill4.rotation.y -= 0.01;
   pill4.rotation.z -= 0.01;
    pill5.rotation.x -= 0.01;
   pill5.rotation.z -= 0.01;
   pill6.rotation.x += 0.01;
   pill6.rotation.z += 0.01;
   renderer.render(scene, camera);
 }
 animate();
 let message = "Hello world";
 console.log(message);
