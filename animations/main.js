
import * as THREE from 'three';
// import { log } from 'three/webgpu';
// import { materialIOR } from 'three/webgpu';

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(``);
 
const scene = new THREE.Scene(); 

const boxGeometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({ map: texture });
const mesh = new THREE.Mesh(boxGeometry,material);
scene.add(mesh);


const aspect = {
  width : window.innerWidth,
  height : window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height);
camera.position.z = 3;
scene.add(camera);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(aspect.width,aspect.height);

// let time = Date.now();
const clock = new THREE.Clock();

function animate(){

  const elapsedTime = clock.getElapsedTime();
  // console.log(elapsedTime);
  

  // const currentTime = Date.now()
  // const deltaTime = currentTime - time;
  //  time = currentTime
  // // console.log(deltaTime);
  

  camera.position.y = Math.sin(elapsedTime) 
  camera.position.x = Math.cos(elapsedTime) 
  camera.lookAt(mesh.position);

  window.requestAnimationFrame(animate); 
  renderer.render(scene,camera);
}

animate();