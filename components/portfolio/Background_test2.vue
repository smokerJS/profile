<template>
  <div class="portfolio-background-group" @mousemove="mouseMoveHandler">
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
    },
    mouseMoveHandler(e) {
      let windowHalfX = window.innerWidth / 2;
			let	windowHalfY = window.innerHeight / 2;
      this.$set(this.$data, 'mouseX', ( e.clientX - windowHalfX ) / 120);
      this.$set(this.$data, 'mouseY', ( e.clientY - windowHalfY ) / 70);
    }
  },
  created() {
    window.addEventListener('resize', this.windowResizeHandler)
    this.windowResizeHandler();
  },
  mounted() {
    const vertexShader = `
      varying vec2 vUv;
      void main() 
      { 
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `;

    const fragmentShader = `
      uniform sampler2D baseTexture;
      uniform float baseSpeed;
      uniform sampler2D noiseTexture;
      uniform float noiseScale;
      uniform float alpha;
      uniform float time;

      varying vec2 vUv;
      void main() 
      {
        vec2 uvTimeShift = vUv + vec2( ${-0.3 - (0.5 * Math.cos(0.2))}, ${0.2 + (0.5 * Math.cos(0.2))} ) * time * baseSpeed;	
        vec4 noiseGeneratorTimeShift = texture2D( noiseTexture, uvTimeShift );
        vec2 uvNoiseTimeShift = vUv + noiseScale * vec2( noiseGeneratorTimeShift.r, noiseGeneratorTimeShift.b );
        vec4 baseColor = texture2D( baseTexture, uvNoiseTimeShift );

        baseColor.a = alpha;
        gl_FragColor = baseColor;
      }  
    `;

    const {scene, camera} = this;
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 20;
    this.renderer.shadowMap.enabled = true;

    const parameters = {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        stencilBuffer: true,
    };

    document.getElementById('container').appendChild(this.renderer.domElement);

    const renderTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, parameters );
    // scene.background = new THREE.ImageUtils.loadTexture( 'images/index/temp.png' );

    var spotLight = new THREE.PointLight(0xFFFFFF,1,50);
    spotLight.position.set(0,0,20);
    scene.add(spotLight);

    const bgTexture = new THREE.TextureLoader().load(`${require('@images/index/temp.png')}`);
    const bgPlaneGeometry = new THREE.PlaneGeometry(25,25,1,1);
    const bgPlaneMaterial = new THREE.MeshPhongMaterial({map: bgTexture});
    const bgPlane = new THREE.Mesh(bgPlaneGeometry, bgPlaneMaterial);
    bgPlane.receiveShadow = true;
    bgPlane.position.set(0,0,-5);
    scene.add(bgPlane);



    const texture = new THREE.TextureLoader().load(`${require('@images/index/temp.png')}`);
    const planeGeometry = new THREE.PlaneGeometry(5,4.5,1,1);
    const planeMaterial = new THREE.MeshPhongMaterial({map: texture});
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.position.set(0,0,10);
    scene.add(plane);



    const noiseTexture = new THREE.ImageUtils.loadTexture(`${require('@images/index/shader.png')}`);
    noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping; 
      
    const lavaTexture = new THREE.ImageUtils.loadTexture(`${require('@images/index/temp.png')}`);
    lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping; 
	
	  // use "this." to create global object
    const customUniforms = {
      baseTexture: 	{ type: "t", value: lavaTexture },
      baseSpeed: 		{ type: "f", value: 0.05 },
      noiseTexture: 	{ type: "t", value: noiseTexture },
      noiseScale:		{ type: "f", value: 0.5337 },
      alpha: 			{ type: "f", value: 0.8 },
      time: 			{ type: "f", value: 1.0 }
    };
	
    // create custom material from the shader code above
    //   that is within specially labeled script tags
    const customMaterial = new THREE.ShaderMaterial({
      uniforms: customUniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    });

    // other material properties
    customMaterial.side = THREE.DoubleSide;
    customMaterial.transparent = true;

    // apply the material to a surface
    const flatGeometry = new THREE.PlaneGeometry( 11, 11 );
    const surface = new THREE.Mesh( flatGeometry, customMaterial );
    surface.position.set(0,0.5,10);
    scene.add( surface );
	






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
      const delta = clock.getDelta();
      // camera.position.x += ( - this.mouseX - camera.position.x ) * 0.04;
      // camera.position.y += ( this.mouseY - camera.position.y ) * 0.04;
      camera.lookAt( scene.position );

      bgPlane.rotation.x = -(this.mouseX * 0.005);
      bgPlane.rotation.y = this.mouseY * 0.005;

      surface.position.set(this.mouseX * 0.002, 0.5 - (this.mouseY * 0.002),10);

      this.renderer.clear();
      // this.renderer.setRenderTarget(renderTarget)
      // this.renderer.render(scene, camera);

      !this.$store.state.gnbSwitch && (this.backgroundImgSrc = this.renderer.domElement.toDataURL("image/png", 1.0));
      customUniforms.time.value += delta;
      composer.render(delta);
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
