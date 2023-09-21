import './style.scss'

import * as THREE from 'three'

class THREE_App {
  // 渲染器
  renderer = new THREE.WebGLRenderer({
    antialias:true
  })

  //场景
  scene = new THREE.Scene()

  //相机
  camera = new THREE.PerspectiveCamera( 
    45, //FOV:相机的垂直视角
    window.innerWidth / window.innerHeight, //Apsect Radtio：宽高比
     0.1, //near:最近的渲染距离
     1000 //far:最远的选软相机
  )
  
  model = null

  constructor(model) { 
    this.rendererSetting() //渲染器设置
    this.addMesh(model) //添加网格
  }

  rendererSetting = () => {
      //渲染器大小
    this.renderer.setSize(window.innerWidth, window.innerHeight)
      //设置渲染器的ID
    this.renderer.domElement.id = 'threejs_scene'
      //渲染器添加到dom中
    document.querySelector('#app').appendChild(this.renderer.domElement)
      //设置相机位置
    this.camera.position.z = 3
      //做动态渲染
    this.animate()
    }

    addMesh = (model) => {
      this.model = model 
      this.model ? this.scene.add(this.model.mesh) : null
    }

    render = ( ) => {
      this.renderer.render(this.scene, this.camera)
    }

    animate = () => {
      requestAnimationFrame(this.animate)
      this.model ? this.model.animate() : null
      this.render()
    }
}


class Cube {
  geometry = new THREE.BoxGeometry(1, 1, 1)
  material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
  })
  
  mesh = null 

  constructor() {
    this.mesh = new THREE.Mesh(this.geometry, this.material)
  }
  
  animate = () => {
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.01
    this.mesh.rotation.z += 0.01
  }
  
}

// const cubeArray = []

// const cube = new Cube()
// const cube1 = new Cube()
// const cube2 = new Cube()
// const cube3 = new Cube()
// const cube4 = new Cube()
// cubeArray.push(cube)
// cubeArray.push(cube1)
// cubeArray.push(cube2)
// cubeArray.push(cube3)
// cubeArray.push(cube4)

// cubeArray.forEach(item => {
//   item.mesh
// })

// const app = new THREE_App()  //实例化app
// const cube = new Cube() //实例化cube
// app.addMesh(cube) //把cube添加到app中
// app.render()  //渲染app


const cube = new Cube()
const app = new THREE_App(cube)
app.render()