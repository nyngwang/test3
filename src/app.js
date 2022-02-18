import * as THREE from 'three'

console.log('hello world')

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 3

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({ color: 0xd4a373 }),
)
scene.add(cube)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  cube.rotation.x += 0.05
  cube.rotation.y += 0.05
}
animate()
