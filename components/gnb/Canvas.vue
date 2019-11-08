<template>
  <div id="gnbCanvasArea">
    <GnbLoading v-if="this.load"/>
    <canvas id="viewCanvas" ref="viewCanvas"></canvas>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import GnbLoading from '@/gnb/Loading';
export default {
  name: "gnb-canvas",
  components: {
    GnbLoading
  },
  props: {
    loadHandler: {type: Function, required: true, default: x=>x}
  },
  data: function() {
    return {
      verticalSlices : 0,
      ctxBack : null,
      ctxCover : null,
      subCanvas : null,
      innerWidth: 0,
      innerHeight: 0,
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
    loopBack() {
      const { verticalSlices, subCanvas, ctx, innerWidth, innerHeight, viewHeight, viewWidth, subHeight, subWidth } = this;

      ctx.fillStyle = "#1a191c";
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      ctx.shadowBlur = 0;
      ctx.shadowColor = "none";
      const colors = [
        "#b4b2b5",
        "#dfd73f",
        "#6ed2dc",
        "#66cf5d",
        "#c542cb",
        "#d0535e",
        "#3733c9"
      ];

      for (let i = 0; i < 100; i+= 0.5)  {
        let horizOffset = this.getRandom(-Math.abs(20), 20);
        ctx.drawImage(
          subCanvas,
          0,
          i * subHeight + 20,
          subCanvas.width,
          i * subHeight + subHeight,
          horizOffset,
          i * viewHeight,
          viewWidth,
          i * viewHeight + viewHeight
        )
      }

      for (let i = 0; i < 2; i+= 1)  {
        ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
        ctx.fillRect(
          Math.random() * innerWidth - 100,
          Math.random() * innerHeight - 20,
          Math.random() * innerWidth - 20,
          Math.random() * innerHeight - 20
        );
      }
      ctx.setTransform(1, 0, .7, 1, .2, .4);
      requestAnimationFrame(this.loopBack);
    }
  },
  mounted() {
    html2canvas(document.querySelector('#layout.layout-frame')).then(canvas => {
      this.subCanvas = canvas;
      this.innerWidth = this.$refs.viewCanvas.width;
      this.innerHeight = this.$refs.viewCanvas.height;
      this.viewHeight = Math.round(this.$refs.viewCanvas.height / 100);
      this.viewWidth = this.$refs.viewCanvas.width;
      this.subHeight = Math.round(this.subCanvas.height / 80);
      this.subwWidth = this.subCanvas.width;
      this.ctx = this.$refs.viewCanvas.getContext("2d");
      this.loopBack();
      this.load = false;
      this.loadHandler();
    });
  }
};
</script>

<style lang="scss" scope>
  #gnbCanvasArea {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 50;
    & > #viewCanvas {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
</style>
