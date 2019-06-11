<template>
  <canvas ref="canvas" class="index-background-canvas"></canvas>
</template>

<script>
export default {
  name: "index-background-canvas",
  data: function() {
    return {
      viewWidth: 0,
      viewHeight: 0,
      canvas: null,
      ctx: null,
      patternSize: 2,
      patternScaleX: 2,
      patternScaleY: 1,
      patternRefreshInterval: 3,
      patternAlpha: 15,
      patternPixelDataLength: 2 * 2 * 4,
      patternCanvas: null,
      patternCtx: null,
      patternData: null,
      frame: 0
    };
  },
  methods: {
    initCanvas() {
      this.ctx.scale(this.patternScaleX, this.patternScaleY);
    },
    initGrain() {
      const patternCanvas = document.createElement('canvas');
      const patternCtx = patternCanvas.getContext('2d');
      patternCanvas.width = this.patternSize;
      patternCanvas.height = this.patternSize;
      this.$set(this.$data, 'patternCanvas', patternCanvas);
      this.$set(this.$data, 'patternCtx', patternCtx);
      this.$set(this.$data, 'patternData', patternCtx.createImageData(this.patternSize, this.patternSize));
    },
    update() {
      let value = 0;;
      for (let i = 0; i < this.patternPixelDataLength; i += 4) {
          value = (Math.random() * 255) | 0;
          this.patternData.data[i    ] = value;
          this.patternData.data[i + 1] = value;
          this.patternData.data[i + 2] = value;
          this.patternData.data[i + 3] = this.patternAlpha;
      }
      this.patternCtx.putImageData(this.patternData, 0, 0);
    },
    draw() {
      this.ctx.clearRect(0, 0, this.viewWidth, this.viewHeight);
      this.ctx.fillStyle = this.ctx.createPattern(this.patternCanvas, 'repeat');
      this.ctx.fillRect(0, 0, this.viewWidth, this.viewHeight);
    },
    loop() {
      if (++this.frame % this.patternRefreshInterval === 0) {
          this.update();
          this.draw();
      }
      requestAnimationFrame(this.loop);
    }
  },
  mounted() {
    this.$set(this.$data,'canvas',this.$refs.canvas);
    this.$set(this.$data,'ctx',this.$refs.canvas.getContext('2d'));
    this.$set(this.$data,'viewWidth',this.$refs.canvas.clientWidth);
    this.$set(this.$data,'viewHeight',this.$refs.canvas.clientHeight);
    this.initCanvas();
    this.initGrain();
    requestAnimationFrame(this.loop);
  },
};
</script>

<style lang="scss" scope>
  .index-background-canvas {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 2;
  }
</style>
