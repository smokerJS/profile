<template>
  <div id="menuCanvasArea" :class="this.load && 'load'">
    <canvas id="viewCanvas" ref="viewCanvas" :style="{
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': '2'
    }"></canvas>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
export default {
  name: "menu-canvas",
  props: {
    loadHandler: {type: Function, required: true, default: x=>x}
  },
  data: function() {
    return {
      verticalSlices : 0,
      ctx : null,
      subCanvas : null,
      viewHeight : 0,
      viewWidth : 0,
      suvHeight : 0,
      suvWidth : 0,
      load : true
    };
  },
  methods: {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    loop() {
      const verticalSlices = this.verticalSlices;
      for (let i = 0; i < 100; i+= 0.5)  {
        let horizOffset = this.getRandom(-Math.abs(20), 20);
        this.ctx.drawImage(
          this.subCanvas,
          0,
          i * this.subHeight,
          this.subCanvas.width,
          i * this.subHeight + this.subHeight,
          horizOffset,
          i * this.viewHeight,
          this.viewWidth,
          i * this.viewHeight + this.viewHeight
        )
      }
      requestAnimationFrame(this.loop);
    }
  },
  mounted() {
    html2canvas(document.querySelector('#layout.layout-frame')).then(canvas => {
      this.subCanvas = canvas;
      this.viewHeight = Math.round(this.$refs.viewCanvas.height / 100);
      this.viewWidth = this.$refs.viewCanvas.width;
      this.subHeight = Math.round(this.subCanvas.height / 100);
      this.subwWidth = this.subCanvas.width
      this.ctx = this.$refs.viewCanvas.getContext("2d");
      this.loop();
      this.load = false;
      this.loadHandler();
    });
  }
};
</script>

<style lang="scss" scope>
  #menuCanvasArea {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 50;
    &.load {
      background: rgba(255,0,0,.7);
    }
    & > #viewCanvas {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
</style>
