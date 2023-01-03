import './style.css'
import * as THREE from 'three';

// The 3D environment
const scene = new THREE.Scene()
// Determines the position from which the user "sees"
const camera = new THREE.
  PerspectiveCamera(75, innerWidth /
  innerHeight, 
  0.1, 
  1000)
// Converts 3D to 2D via calculations
const renderer = new THREE.WebGLRenderer(

)

renderer.setSize(innerWidth, innerHeight)

// To remove the jagged edges of our shapes
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.
  domElement);

// Can be thought of as a wireframe
const boxGeometry = new THREE.BoxGeometry
  (1, 1, 1)

// Material is basically the texture that fills up geometry
const material = new THREE.
  MeshBasicMaterial({color: 0x12FF91})


// Must pass in geometry and material to create a mesh
const mesh = new THREE.Mesh(boxGeometry, material)

// Add mesh to the scene
scene.add(mesh)
camera.position.z = 5

const planeGeometry = new THREE.
  PlaneGeometry(5, 5, 10, 10)
const planeMaterial = new THREE.
  // This is invisible until we add a light to illuminate it
  MeshPhongMaterial({ 
  color: 0x00ff00,
  // Ensures that both sides of plan is seen. Default is off due to performance reasons
  side: THREE.DoubleSide,
  // Flat surfaces get shading applied
  flatShading: true
});

console.log(THREE)

const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(planeMesh)
console.log(planeMesh.geometry.attributes.position.array)

const {array} = planeMesh.geometry.attributes.position

// Iterate over sets of three coordinates(representing verticies)
for (let i = 0; i < array.length; i += 3) {
  const x = array[i]
  const y = array[i + 1]
  const z = array[i + 2]

  // + 2 allows us to access the z coordinate
  array[i + 2] = z + Math.random()
}

const light = new THREE.DirectionalLight(
  0xffffff, 1
)


// Where we want to place our light relative to the center of the scene. z value of 1 moves it towards us
light.position.set(0, 0, 1)
scene.add(light)

// Recursive
function animate() {
  requestAnimationFrame(animate)
  // Still need to call render function to render out our scene
  renderer.render(scene, camera)
  mesh.rotation.x += 0.02
  mesh.rotation.y += 0.02
  mesh.rotation.z += 0.02
  planeMesh.rotation.y += 0.02
  planeMesh.rotation.z += 0.02
}

animate()