const scene = new THREE.Scene(),
      canvas = document.getElementById('canvas'),
      sWIDTH = canvas.width, sHEIGHT = canvas.height,
      camera = new THREE.PerspectiveCamera( 75, sWIDTH / sHEIGHT, 0.1, 1000 ),
      renderer = new THREE.WebGLRenderer({ canvas: canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
