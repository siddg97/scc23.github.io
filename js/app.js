// particlesJS('particles-js',
  
//   {
//     "particles": {
//       "number": {
//         "value": 60,
//         "density": {
//           "enable": true,
//           "value_area": 850
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 3,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 200,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 2,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": false,
//           "mode": "push"
//         },
//         "onclick": {
//           "enable": false,
//           "mode": "repulse"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true,
//     "config_demo": {
//       "hide_card": false,
//       "background_color": "#b61924",
//       "background_image": "",
//       "background_position": "50% 50%",
//       "background_repeat": "no-repeat",
//       "background_size": "cover"
//     }
//   }

// );

var renderer  = new THREE.WebGLRenderer({
    antialias : true
  });
/* Fullscreen */
  renderer.setSize( window.innerWidth, window.innerHeight );
/* Append to HTML */
  document.body.appendChild( renderer.domElement );
  var onRenderFcts= [];
  var scene = new THREE.Scene();
  var camera  = new THREE.PerspectiveCamera(25, window.innerWidth /    window.innerHeight, 0.01, 1000);
/* Play around with camera positioning */
  camera.position.z = 15; 
  camera.position.y = 2;
/* Fog provides depth to the landscape*/
  scene.fog = new THREE.Fog('black', 0, 45);
  ;(function(){
    var light = new THREE.AmbientLight( 0x202020 )
    scene.add( light )
    var light = new THREE.DirectionalLight('white', 5)
    light.position.set(0.5, 0.0, 2)
    scene.add( light )
    var light = new THREE.DirectionalLight('white', 0.75*2)
    light.position.set(-0.5, -0.5, -2)
    scene.add( light )    
  })()
  var heightMap = THREEx.Terrain.allocateHeightMap(256,256)
  THREEx.Terrain.simplexHeightMap(heightMap)  
  var geometry  = THREEx.Terrain.heightMapToPlaneGeometry(heightMap)
  THREEx.Terrain.heightMapToVertexColor(heightMap, geometry)
/* Wireframe built-in color is white, no need to change that */
  var material  = new THREE.MeshBasicMaterial({
    wireframe: true
  });
  var mesh  = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  mesh.lookAt(new THREE.Vector3(0,1,0));
/* Play around with the scaling */
  mesh.scale.y  = 3.5;
  mesh.scale.x  = 3;
  mesh.scale.z  = 0.20;
  mesh.scale.multiplyScalar(10);
/* Play around with the camera */
  onRenderFcts.push(function(delta, now){
    mesh.rotation.z += 0.2 * delta; 
  })
  onRenderFcts.push(function(){
    renderer.render( scene, camera );   
  })
  var lastTimeMsec= null
  requestAnimationFrame(function animate(nowMsec){
    requestAnimationFrame( animate );
    lastTimeMsec  = lastTimeMsec || nowMsec-1000/60
    var deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
    lastTimeMsec  = nowMsec
    onRenderFcts.forEach(function(onRenderFct){
      onRenderFct(deltaMsec/1000, nowMsec/1000)
    })
  })