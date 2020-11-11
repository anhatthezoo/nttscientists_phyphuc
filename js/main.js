const scene = new THREE.Scene(),
      canvas = document.getElementById('canvas'),
      sWIDTH = canvas.width, sHEIGHT = canvas.height,
      camera = new THREE.PerspectiveCamera( 75, sWIDTH / sHEIGHT, 0.1, 1000 ),
      renderer = new THREE.WebGLRenderer({canvas: canvas});

renderer.setSize(sWIDTH, sHEIGHT);

const testPlaneGeo = new THREE.PlaneGeometry(5, 5),
      testMat = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide} ),
      testPlane = new THREE.Mesh(testPlaneGeo, testMat);

scene.add(testPlane);
camera.position.z = 5;
camera.position.x = 2;
testPlane.position.y = -1;

function animateScene() {
    requestAnimationFrame(animateScene );
    renderer.render(scene, camera);
   
}
animateScene();


var controls = new THREE.TrackballControls(camera, renderer.domElement);
