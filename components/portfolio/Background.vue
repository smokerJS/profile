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
import { EffectComposer, RenderPass, FilmPass, BloomPass } from 'three-addons'; 

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


    const lineGeometry = new THREE.PlaneGeometry(8,5);
    const edges = new THREE.EdgesGeometry(lineGeometry);
    const edgesMaterial = new THREE.LineBasicMaterial({
      color:0xff0000
    });
    const edgesMesh1 = new THREE.LineSegments(edges, edgesMaterial);
    const edgesMesh2 = new THREE.LineSegments(edges, edgesMaterial);
    const edgesMesh3 = new THREE.LineSegments(edges, edgesMaterial);
    edgesMesh1.position.set(-1.5, 0, 0);
    edgesMesh2.position.set(-1.51, 0, 0);
    edgesMesh3.position.set(-1.49, 0, 0);
    scene.add(edgesMesh1); 
    scene.add(edgesMesh2); 
    scene.add(edgesMesh3); 
  // {
  //   const color = 0xFFFFFF;
  //   const intensity = 2;
  //   const light = new THREE.DirectionalLight(color, intensity);
  //   light.position.set(-1, 2, 4);
  //   scene.add(light);
  // }
    const composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

  const bloomPass = new BloomPass(
      1,    // strength
      25,   // kernel size
      4,    // sigma ?
      256,  // blur render target resolution
  );
  composer.addPass(bloomPass);

    const effectFilm = new FilmPass(     
      0.35,   // noise intensity
      0.025,  // scanline intensity
      648,    // scanline count
      false);  // grayscale
    effectFilm.renderToScreen = true;
    composer.addPass(effectFilm);

    let lineSwitch = false;
    const clock = new THREE.Clock();
    const render = () => {
      composer.setSize( window.innerWidth, window.innerHeight );
      camera.position.x += ( - this.mouseX - camera.position.x ) * 0.02;
      camera.position.y += ( this.mouseY - camera.position.y ) * 0.02;
      camera.lookAt( scene.position );
      sceneBackground.needsUpdate = true;
      
      if(lineSwitch) {
        edgesMesh1.position.set(-1.53, 0.01, 0);
        edgesMesh2.position.set(-1.51, 0.01, 0.01);
        edgesMesh3.position.set(-1.49, 0.02, 0);
      } else {
        edgesMesh1.position.set(-1.51, 0, 0);
        edgesMesh2.position.set(-1.49, -0.01, 0);
        edgesMesh3.position.set(-1.51, 0, 0);
      }
      drawRandomDot();
      // this.renderer.autoClear = false;
      // this.renderer.clear();
      // this.renderer.clear();
      // this.renderer.setRenderTarget(composer);
      // this.renderer.render(scene, camera);
      !this.$store.state.gnbSwitch && (this.backgroundImgSrc = this.renderer.domElement.toDataURL("image/png", 1.0));
      lineSwitch = !lineSwitch;
      composer.render(clock.getDelta());
      requestAnimationFrame( render );
    }

    render(); 
// composer.render();
// this.renderer.render(scene, camera);
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
