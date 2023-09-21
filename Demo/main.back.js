import './style.scss'

import * as THREE from 'three'

//创建一个场景
const scene = new THREE.Scene();

//创建一个相机
const camera = new THREE.PerspectiveCamera( 
  45, //FOV:相机的垂直视角
  window.innerWidth / window.innerHeight, //Apsect Radtio：宽高比
   0.1, //near:最近的渲染距离
   1000 //far:最远的选软相机
  )


  //渲染器
  const renderer = new THREE.WebGLRenderer( {
    antialias: true //抗锯齿
  });

  //设置渲染器大小
  renderer.setSize(window.innerWidth,window.innerHeight)

  renderer.domElement.id = 'threejs_scene'

  document.querySelector('#app').appendChild(renderer.domElement)

  

  //创建立方体
  const geometry = new THREE.BoxGeometry(1, 1, 1)

  //材质
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
  })

  //网格 结合起来
  const cube = new THREE.Mesh(geometry, material)
  

  //讲网格加到场景之中
  scene.add(cube)

  camera.position.z = 3
   
  // setTimeout() 一次性定时器

  // setInterval(() => { //持续性定时器
  //   cube.rotation.x += 0.01
  //   cube.rotation.y += 0.01
  //   cube.rotation.z += 0.01
  //   renderer.render(scene, camera)
  // }, 16.7)
renderer.render(scene, camera)

function animate() { 
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01

    renderer.render(scene, camera)
}

animate()