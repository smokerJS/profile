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
    <div id="container">
      <img v-if="$store.state.gnbSwitch" id="backgroundImg" :class="$store.state.gnbSwitch && 'open'" :src="backgroundImgSrc" />
    </div>
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
      renderer: new THREE.WebGLRenderer({antialias : true, preserveDrawingBuffer : true}),
      mesh: null,
      mouseX: 0,
      mouseY: 0,
      backgroundSwitch: false,
      backgroundImgSrc: ''
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
    // data 수정 필요
    const video = document.getElementById('video');
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 ); 

    const ctx = document.createElement('canvas').getContext('2d');
    const copyCtx = document.createElement('canvas').getContext('2d');
    let copyCount = 0;
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    copyCtx.canvas.width = window.innerWidth;
    copyCtx.canvas.height = window.innerHeight;
    copyCtx.filter = 'blur(50px)';
    copyCtx.fillStyle = 'rgb(0,0,0)';
    copyCtx.fillRect(0, 0, copyCtx.canvas.width, copyCtx.canvas.height);
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    function randInt(min, max) {
      if (max === undefined) {
        max = min;
        min = 0;
      }
      return Math.random() * (max - min) + min | 0;
    }

    function drawRandomDot() {
      copyCount >= 1 && (copyCount = 0);
      if(!copyCount) {
        copyCtx.fillStyle = 'rgb(0,0,0)';
        copyCtx.fillRect(0, 0, copyCtx.canvas.width, copyCtx.canvas.height);
        for(let i = 0; i < 6; i++) {
          copyCtx.fillStyle = `rgba(${randInt(255)}, ${randInt(50)}, ${randInt(50)}, 0.5)`;
          copyCtx.beginPath();
          copyCtx.globalAlpha = randInt(10) * 0.1;
          const x = randInt(window.innerWidth);
          const y = randInt(window.innerHeight);
          const radius = randInt(window.innerHeight);
          copyCtx.arc(x, y, radius, 0, Math.PI * 2);
          copyCtx.fill();
        }
      } else {
        ctx.globalAlpha = copyCount;
        ctx.drawImage(copyCtx.canvas, 0, 0, ctx.canvas.width, ctx.canvas.height);
      }
      copyCount += 0.03;
    }


    const sceneBackground = new THREE.Texture(ctx.canvas);
    scene.background = sceneBackground;

    this.renderer.setSize( window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(this.renderer.domElement);  

    const geometry = new THREE.PlaneGeometry(3,3);
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
      sceneBackground.needsUpdate = true;
      drawRandomDot();
      this.renderer.render(scene, camera);
      !this.$store.state.gnbSwitch && (this.backgroundImgSrc = this.renderer.domElement.toDataURL("image/png", 1.0));
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
  #backgroundImg {
    width: 100%;
    height: 100vh;
    position: absolute;
    display: none;
    &.open {
      z-index: 2;
      display: block;
    }
  }
</style>
