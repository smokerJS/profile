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
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'; 
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'; 
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js'; 
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js'; 
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js'; 
import fontJson from './FightThis_Regular.json';

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
      backgroundImgSrc: '',
      composer: null,
      effectGlitch: new GlitchPass(1000),
      onGlitchSwitch: null
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
    this.renderer.setSize( window.innerWidth, window.innerHeight);

    const parameters = {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        stencilBuffer: true,
    };

    const renderTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, parameters );

    const video = document.getElementById('video');
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = parameters.minFilter;
    texture.magFilter = parameters.magFilter;
    texture.format = parameters.format;
    

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#000');;

    const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 ); 

    document.getElementById('container').appendChild(this.renderer.domElement);  

    const geometry = new THREE.PlaneGeometry(3,3);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        color: 0xffffff,
    })

    const mesh = new THREE.Mesh( geometry, material);  
    scene.add(mesh);  

    camera.position.z = 10; 

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


    {
      const color = 0xFFFFFF;
      const intensity = 2;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
    }



    const composer = new EffectComposer(this.renderer, renderTarget);
    composer.setSize( window.innerWidth, window.innerHeight);

    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new BloomPass(
        1,    // strength
        50,   // kernel size
        1,    // sigma ?
        1000,  // blur render target resolution
    );
    composer.addPass(bloomPass);

    const effectFilm = new FilmPass(     
      0.2,   // noise intensity
      0.9,  // scanline intensity
      10,
      // 648,    // scanline count
      false);  // grayscale
    effectFilm.renderToScreen = true;
    composer.addPass(effectFilm);




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
      uniform vec2 mouse;


      varying vec2 vUv;
      void main() 
      {
        vec2 uvTimeShift = vUv + vec2(mouse.x, mouse.y) * time * baseSpeed;	
        vec4 noiseGeneratorTimeShift = texture2D( noiseTexture, uvTimeShift );
        vec2 uvNoiseTimeShift = vUv + noiseScale * vec2( noiseGeneratorTimeShift.r, noiseGeneratorTimeShift.b );
        vec4 baseColor = texture2D( baseTexture, uvNoiseTimeShift );

        baseColor.a = alpha;
        gl_FragColor = baseColor;
      }  
    `;



    const noiseTexture = new THREE.ImageUtils.loadTexture('./images/index/cloud.png');
    noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping; 
      
    const lavaTexture = new THREE.ImageUtils.loadTexture('./images/index/temp.png');
    lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping; 
	
	  // use "this." to create global object
    const customUniforms = {
      baseTexture: 	{ type: "t", value: texture },
      baseSpeed: 		{ type: "f", value: 0.05 },
      noiseTexture: 	{ type: "t", value: noiseTexture },
      noiseScale:		{ type: "f", value: 0.8337 },
      alpha: 			{ type: "f", value: 0.8 },
      time: 			{ type: "f", value: 1.0 },
      mouse: { value: new THREE.Vector2() },
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
    const flatGeometry = new THREE.PlaneGeometry( 50, 50 );
    const surface = new THREE.Mesh( flatGeometry, customMaterial );
    surface.position.set(0,0,0);
    scene.add( surface );



    var mouse = new THREE.Vector2();

    window.addEventListener("mousemove", function(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }, false)







    composer.addPass(this.effectGlitch);
    this.effectGlitch.goWild = false;
    this.effectGlitch.renderToScreen = true;
    this.composer = composer;
    let lineSwitch = false;
    const clock = new THREE.Clock();







    const render = () => {
      camera.position.x += ( - this.mouseX - camera.position.x ) * 0.04;
      camera.position.y += ( this.mouseY - camera.position.y ) * 0.04;
      camera.lookAt( scene.position );
      
      if(lineSwitch) {
        edgesMesh1.position.set(-1.56, 0.04, -0.02);
        edgesMesh2.position.set(-1.54, 0.02, 0.01);
        edgesMesh3.position.set(-1.47, 0.03, 0);
      } else {
        edgesMesh1.position.set(-1.51, 0, 0);
        edgesMesh2.position.set(-1.49, -0.01, 0);
        edgesMesh3.position.set(-1.51, 0, 0);
      }

      this.renderer.clear();

      !this.$store.state.gnbSwitch && (this.backgroundImgSrc = this.renderer.domElement.toDataURL("image/png", 1.0));
      lineSwitch = !lineSwitch;
      customUniforms.time.value += clock.getDelta();
      customUniforms.mouse.value.copy(mouse);
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
</style>
