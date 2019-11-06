<template>
  <div class="portfolio-background-group" @mousemove="mouseMoveHandler">
    <video id="video"
      loop
      preload="auto"
      autoplay
      crossOrigin="anonymous"
      muted="muted"
      webkit-playsinline>
      <source :src="require('@videos/video.mp4')">
    </video>
    <div id="container"></div>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'portfolio-background',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      mouseX: 0,
			mouseY: 0,
    }
  },
  methods: {
    mouseMoveHandler(e) {
      let windowHalfX = window.innerWidth / 2;
			let	windowHalfY = window.innerHeight / 2;
      this.$set(this.$data, 'mouseX', ( e.clientX - windowHalfX ) / 120);
      this.$set(this.$data, 'mouseY', ( e.clientY - windowHalfY ) / 70);
    }
  },
  mounted() {
    const video = document.getElementById('video');
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 ); 
    const renderer = new THREE.WebGLRenderer();  
    renderer.setSize( window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);  

    const geometry = new THREE.PlaneGeometry(4,5);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        color: 0xffffff,
    })

    const mesh = new THREE.Mesh( geometry, material);  
    scene.add(mesh);  

    camera.position.z = 10; 

    const render = () => {
      requestAnimationFrame( render );
      camera.position.x += ( - this.mouseX - camera.position.x ) * 0.05;
      camera.position.y += ( this.mouseY - camera.position.y ) * 0.05;
      camera.lookAt( scene.position );
      renderer.render(scene, camera);
      // mesh.rotation.x += 0.01;
      // mesh.rotation.y += 0.01;
    }

    render(); 

  }
}
</script>

<style lang="scss" scoped>
  .portfolio-background-group{
    width: 100%;
    height: 100%;
    position: relative;
  }
  #video {
    width: 1px;
    height: 1px;
    position: absolute;
    top: 0%;
  }
  #container {
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
