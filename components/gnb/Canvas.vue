<template>
  <div id="gnbCanvasArea">
    <GnbLoading v-if="this.load"/>
    <canvas id="viewCanvasBack" ref="viewCanvasBack"></canvas>
    <!-- <canvas id="viewCanvasCover" ref="viewCanvasCover"></canvas> -->
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
      const verticalSlices = this.verticalSlices;

      const innerWidth = this.$refs.viewCanvasBack.width;
      const innerHeight = this.$refs.viewCanvasBack.height;
      this.ctxBack.fillStyle = "#1a191c";
      this.ctxBack.fillRect(0, 0, innerWidth, innerHeight);

      this.ctxBack.shadowBlur = 0;
      this.ctxBack.shadowColor = "none";
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
        this.ctxBack.drawImage(
          this.subCanvas,
          0,
          i * this.subHeight + 20,
          this.subCanvas.width,
          i * this.subHeight + this.subHeight,
          horizOffset,
          i * this.viewHeight,
          this.viewWidth,
          i * this.viewHeight + this.viewHeight
        )
      }

for (let i = 0; i < 3; i+= 1)  {
                    this.ctxBack.fillStyle = colors[Math.floor(Math.random() * 40)];
      this.ctxBack.fillRect(
        Math.random() * innerWidth - 20,
        Math.random() * innerHeight - 20,
        Math.random() * innerWidth - 20,
        Math.random() * innerHeight - 20
      );
}
      // this.ctxBack.setTransform(1, 0, 0, .8, .2, 0);
      requestAnimationFrame(this.loopBack);
    },
    loopCover() {
      const colors = [
        "#b4b2b5",
        "#dfd73f",
        "#6ed2dc",
        "#66cf5d",
        "#c542cb",
        "#d0535e",
        "#3733c9"
      ];

      const innerWidth = this.$refs.viewCanvasCover.width;
      const innerHeight = this.$refs.viewCanvasCover.height;
      this.ctxCover.fillStyle = "#1a191c";
      this.ctxCover.fillRect(0, 0, innerWidth, innerHeight);

      this.ctxCover.shadowBlur = 0;
      this.ctxCover.shadowColor = "none";
      this.ctxCover.setTransform(1, 0, 0, 1, 0, 0);

      for (let i = 0; i < 1000; i++) {
        this.ctxCover.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.01})`;
        this.ctxCover.fillRect(
          Math.floor(Math.random() * innerWidth),
          Math.floor(Math.random() * innerHeight),
          Math.floor(Math.random() * 30) + 1,
          Math.floor(Math.random() * 30) + 1
        );

        this.ctxCover.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
        this.ctxCover.fillRect(
          Math.floor(Math.random() * innerWidth),
          Math.floor(Math.random() * innerHeight),
          Math.floor(Math.random() * 25) + 1,
          Math.floor(Math.random() * 25) + 1
        );
      }
      
      this.ctxCover.fillStyle = colors[Math.floor(Math.random() * 40)];
      this.ctxCover.fillRect(
        Math.random() * innerWidth - 20,
        Math.random() * innerHeight - 20,
        Math.random() * innerWidth - 20,
        Math.random() * innerHeight - 20
      );
      this.ctxCover.setTransform(1, 0, 0, .8, .2, 0);

      requestAnimationFrame(this.loopCover);
    }
  },
  mounted() {
    html2canvas(document.querySelector('#layout.layout-frame')).then(canvas => {
      this.subCanvas = canvas;
      this.viewHeight = Math.round(this.$refs.viewCanvasBack.height / 100);
      this.viewWidth = this.$refs.viewCanvasBack.width;
      this.subHeight = Math.round(this.subCanvas.height / 80);
      this.subwWidth = this.subCanvas.width;
      this.ctxBack = this.$refs.viewCanvasBack.getContext("2d");
      // this.ctxCover = this.$refs.viewCanvasCover.getContext("2d");
      this.loopBack();
      // this.loopCover();
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
    & > #viewCanvasBack {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    & > #viewCanvasCover {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 3;
      opacity: .6;
    }
  }
</style>
