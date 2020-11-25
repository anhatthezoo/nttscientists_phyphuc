const scene = new THREE.Scene(),
      canvas = document.getElementById('canvas');

//CANVAS POSITIONING AND SCALE
canvas.style.width='100%';
canvas.style.height='100%';
canvas.width  = canvas.offsetWidth;
canvas.height = canvas.offsetHeight; 
////////////

const sWIDTH = canvas.width, sHEIGHT = canvas.height,
      camera = new THREE.PerspectiveCamera( 90, sWIDTH / sHEIGHT, 0.1, 10000 ),
      renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true});

renderer.setSize(sWIDTH, sHEIGHT);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

//CONTROLS
var controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 2.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;

controls.keys = [ 65, 83, 68 ];
camera.position.set( 0, 0, 100 );
controls.update();
/////////////

//LIGHTING
var ambLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambLight);
var dirLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
dirLight.position.set(0, 10, 10);
dirLight.castShadow = true;
dirLight.shadow.camera.near = 0.1;
dirLight.shadow.camera.far = 25;
scene.add(dirLight);
///////////

const meshLoader = new THREE.OBJLoader(),
      mtlLoader = new THREE.MTLLoader();

const testPlaneGeo = new THREE.BoxGeometry(5, 5),
      testMat = new THREE.MeshPhongMaterial( { color: 0xfffffff, side: THREE.DoubleSide} ),
      testPlane = new THREE.Mesh(testPlaneGeo, testMat);

scene.add(testPlane);
camera.position.z = 5;
camera.position.x = 2;

mtlLoader.load('assets/meshes/terrain.mtl', function(materials) {
    materials.preload();
    meshLoader.setMaterials(materials);
    meshLoader.load('assets/meshes/terrain.obj', function(mesh) {
        scene.add(mesh);
    })
});

function animateScene() {
    requestAnimationFrame(animateScene );
    renderer.render(scene, camera);
    controls.update();
}
animateScene();

