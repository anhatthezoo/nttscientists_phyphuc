const scene = new THREE.Scene(),
      canvas = document.getElementById('canvas'),
      sWIDTH = canvas.width, sHEIGHT = canvas.height,
      camera = new THREE.PerspectiveCamera( 75, sWIDTH / sHEIGHT, 0.1, 10000 ),
      renderer = new THREE.WebGLRenderer({canvas: canvas});

renderer.setSize(sWIDTH, sHEIGHT);

const testPlaneGeo = new THREE.PlaneGeometry(5, 5),
      testMat = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide} ),
      testPlane = new THREE.Mesh(testPlaneGeo, testMat);

scene.add(testPlane);
camera.position.z = 5;
camera.position.x = 2;
testPlane.position.y = -1;

var controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 2.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;

controls.keys = [ 65, 83, 68 ];
camera.position.set( 0, 20, 100 );
controls.update();

function animateScene() {
    requestAnimationFrame(animateScene );
    renderer.render(scene, camera);
    controls.update();
}
animateScene();
