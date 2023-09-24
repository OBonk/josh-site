import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
function init(containerId, modelPath, type,lpower) {
  // Create a scene
  const scene = new THREE.Scene();

  // Create a camera
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 50;
  camera.position.y = 10;
  // Create a renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(400, 400);
  renderer.setClearColor(0xFFFFFF, 1)
  document.getElementById(containerId).appendChild(renderer.domElement);

// Add a directional light
const directionalLight = new THREE.DirectionalLight(0xdddddd, 1, 100 );
//directionalLight.castShadow = true
directionalLight.intensity = lpower;
directionalLight.position.set(0, 10, 20)
scene.add(directionalLight);


// // Create a geometry
// const geometry = new THREE.BoxGeometry();

// // Create a material
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// // Create a mesh
// const cube = new THREE.Mesh(geometry, material);
// cube.position.set(20, 20, 0)

// // Add the mesh to the scene
// scene.add(cube);

let lemodel;
if (type == "fbx"){
  // Load FBX model
const loader = new FBXLoader();
  loader.load(modelPath, (fbx) => {
    fbx.scale.set(0.1, 0.1, 0.1);
    scene.add(fbx)  // Add the model to the group
    lemodel = fbx;
  });
}else{
  const loader = new GLTFLoader();
  loader.load(modelPath, (fbx) => {
    fbx.scene.scale.set(8, 8, 8);
    scene.add(fbx.scene)  // Add the model to the group
    lemodel = fbx.scene;
  });

}
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Rotate the model group
    if (lemodel){
        lemodel.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
  }

  // Start the animation loop
  animate();
}

// Initialize multiple canvases with different models
init('container1', 'Elvish_armor.glb', 'gltf',7);
init('container2', 'beetle_man_textured.fbx', 'fbx',0.6);
init('container3', 'Knight_armor.glb', 'gltf',7);