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
  new THREE.MeshLambertMaterial({ color: 0x5cc756 }),
)
scene.add(cube)
cube.position.x -= 1

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.7, 32, 32),
  new THREE.MeshLambertMaterial({ color: 0x91abd3 }),
)
scene.add(sphere)
sphere.position.x += 1

const light = new THREE.PointLight(0xffffff, 1, 500)
light.position.set(10, 0, 10)
scene.add(light)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  cube.rotation.x += 0.05
  cube.rotation.y += 0.05
}
animate()

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight

  camera.updateProjectionMatrix()
})

window.addEventListener('mousemove', (pos) => {
  light.position.set(
    (pos.pageX - window.innerWidth / 2 - 120),
    -(pos.pageY - window.innerHeight / 2),
    10,
  )
  // console.log('(pageX, pageY)', pos.pageX, pos.pageY)
})

// webpack hot module replacement
// if (module.hot) {
//   module.hot.accept()
// }
