<template>
  <div class="portfolio-background-group">
    <button id="tabBtn" @click="tabSwitchHandler">탭</button>
    <div id="container">
      <img v-if="$store.state.gnbSwitch" id="backgroundImg" :class="$store.state.gnbSwitch && 'open'" :src="backgroundImgSrc" />
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'; 
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'; 
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js'; 
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js'; 
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js'; 
import fontJson from './FightThis_Regular.json';
import { PlaneGeometry } from 'three';

export default {
  name: 'portfolio-background',
  data() {
    return {
      camera: new THREE.PerspectiveCamera(),
      scene: new THREE.Scene(),
      renderer: new THREE.WebGLRenderer({antialias : true, preserveDrawingBuffer : true}),
      mesh: null,
      mouseX: 0,
      mouseY: 0,
      backgroundSwitch: false,
      backgroundImgSrc: '',
      composer: null,
      onGlitchSwitch: null,
      tabSwitch: false
    }
  },
  methods: {
    windowResizeHandler() {
      this.renderer.setSize( window.innerWidth, window.innerHeight);
    },
    tabSwitchHandler() {
      const {tabSwitch, camera} = this;
      this.tabSwitch = !tabSwitch;
    }
  },
  created() {
    window.addEventListener('resize', this.windowResizeHandler)
    this.windowResizeHandler();
  },
  mounted() {
    const {scene, camera} = this;
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 30;
this.renderer.shadowMap.enabled = true;
    const parameters = {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        stencilBuffer: true,
    };

    document.getElementById('container').appendChild(this.renderer.domElement);

    const renderTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, parameters );
    scene.background = new THREE.Color('#c9bd9b');

    var spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(0,20,30);
    spotLight.shadow.mapSize.width = 5120;
    spotLight.shadow.mapSize.height = 5120;
    scene.add(spotLight); 


    const planeGeometry =  new THREE.PlaneGeometry(100,100,1,1);
    const planeMaterial = new THREE.MeshPhongMaterial({color: '#f0c700'});
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.position.y = -5;
    plane.rotation.x = -0.5 * Math.PI;
    scene.add(plane);

    const boxGeometry = new THREE.BoxGeometry( 40, 100, 20 );
    const boxMaterial = new THREE.MeshPhongMaterial( {color:'#fff4bf'} );
    const box1 = new THREE.Mesh(boxGeometry, boxMaterial);
    box1.castShadow = true;
    box1.position.set( 0, 0, -10 );
    scene.add(box1);

      const boxGeometry2 = new THREE.BoxGeometry(5, 5, 5);
      const boxMaterial2 = new THREE.MeshPhongMaterial( {color:'blue'} );
      const box2 = new THREE.Mesh(boxGeometry2, boxMaterial2);
      box2.castShadow = true;
      box2.position.set( 3, -2.5, 12.5 );
      scene.add(box2);

    const loader = new THREE.FontLoader();
    const font = new THREE.Font( fontJson );

      const textGeometry = new THREE.TextGeometry( 'js', {
        font: font,
        size: 0.5,
        height: 0,
        curveSegments: 12,
      } );
      const textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000 } );

      const textMesh = new THREE.Mesh( textGeometry, textMaterial );
      textMesh.position.set( -5, 1.5, 0 );

      scene.add(textMesh);




    const composer = new EffectComposer(this.renderer, renderTarget);
    composer.setSize( window.innerWidth, window.innerHeight);

    composer.addPass(new RenderPass(scene, camera));

    this.composer = composer;
    const clock = new THREE.Clock();
    const render = () => {
      // camera.position.x += ( - this.mouseX - camera.position.x ) * 0.04;
      // camera.position.y += ( this.mouseY - camera.position.y ) * 0.04;
      camera.lookAt( scene.position );
      if(this.tabSwitch && (box1.rotation.y < 1.5)) {
        box1.rotation.y += 0.1;
        box2.rotation.y += 0.1;
        box2.position.x += 0.25;
        box2.position.z -= 1;
        box1.position.x -= 1;
        box1.position.z -= 0.5;
        plane.position.y -= 0.4;
        box2.position.y -= 0.1;

        console.log(box1.rotation.y)
      } 
      if(!this.tabSwitch && (box1.rotation.y > 0.1)) {
        box1.rotation.y -= 0.1;
        box2.rotation.y -= 0.1;
        box2.position.x -= 0.25;
        box2.position.z += 1;
        box1.position.x += 1;
        box1.position.z += 0.5;
                plane.position.y += 0.4;
        box2.position.y += 0.1;
      }

      this.renderer.clear();
      // this.renderer.setRenderTarget(renderTarget)
      // this.renderer.render(scene, camera);

      !this.$store.state.gnbSwitch && (this.backgroundImgSrc = this.renderer.domElement.toDataURL("image/png", 1.0));
      
      composer.render(clock.getDelta());
      requestAnimationFrame( render );
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
  #tabBtn {
    position: fixed;
    z-index: 100;
    top: 50px;
    left: 50px;
  }
</style>
