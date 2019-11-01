<template>
  <div>
		<div id="container"></div>
  <video id="video"
    loop
    preload="auto"
    autoplay
    crossOrigin="anonymous"
    muted="muted"
    webkit-playsinline>
    <source :src="require('@videos/video.mp4')">
  </video>
  </div>
</template>

<script>
// import * as THREE from 'three';

export default {
  name: 'HelloWorld',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  mounted() {
    // const video = document.getElementById('video');
    // const texture = new THREE.VideoTexture(video);
    // texture.minFilter = THREE.LinearFilter;
    // texture.magFilter = THREE.LinearFilter;
    // texture.format = THREE.RGBFormat;
    

    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  
    // const renderer = new THREE.WebGLRenderer();  
    // renderer.setSize( window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);  

    // const geometry = new THREE.PlaneGeometry(4,6);
    // const material = new THREE.MeshBasicMaterial({
    //     map: texture,
    //     color: 0xffffff,
    // })

    // const mesh = new THREE.Mesh( geometry, material);  
    // scene.add(mesh);  

    // camera.position.z = 5; 

    // function render(){
    //   requestAnimationFrame( render );
    //   renderer.render(scene, camera);
    //   mesh.rotation.x += 0.01;
    //   mesh.rotation.y += 0.01;
    // }

    // render(); 

  }
}
</script>

<style lang="scss" scoped>
  #video {
    /* display: none; */
    width: 200px;
    height: 200px;
  }
</style>
