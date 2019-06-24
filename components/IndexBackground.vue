<template>
  <div @mousemove="mouseMoveHandler">
    <IndexBackgroundCanvas/>
    <div class="index-background-group">
      <div class="background"
        :style="{
          marginLeft: this.moveX,
          marginTop: this.moveY
        }"
      >
        <div>
          <div class="background-line"></div>
          <div class="background-line-over filter-1"></div>
          <div class="background-line-over filter-2"></div>
          <div class="background-line-over filter-3"></div>
        </div>
        <IndexCodeScreen/>
      </div>
    </div>
  </div>
</template>

<script>
const eventHandler = {
  mouseMoveTimeout : null
};
import IndexBackgroundCanvas from './IndexBackgroundCanvas';
import IndexCodeScreen from './IndexCodeScreen';
export default {
  name: "index-background",
  components: {
    IndexCodeScreen,
    IndexBackgroundCanvas
  },
  data: function() {
    return {
      width: 0,
      height: 0,
      moveX: '',
      moveY: ''
    };
  },
  methods: {
    setResizeData() {
      this.$set(this.$data, 'width', window.innerWidth);
      this.$set(this.$data, 'height', window.innerHeight);
    },
    mouseMoveHandler(e) {
      eventHandler.mouseMoveTimeout && (clearTimeout(eventHandler.mouseMoveTimeout), eventHandler.mouseMoveTimeout = null);
      eventHandler.mouseMoveTimeout = setTimeout(()=>{
        this.$set(this.$data, 'moveX', `${((this.width / 2) - e.clientX) * 0.1}px`);
        this.$set(this.$data, 'moveY', `${((this.height / 2) - e.clientY) * 0.1}px`);
      }, 100);
    }
  },
  created() {
    this.setResizeData();
    window.addEventListener('resize',this.setResizeData());
  },
};
</script>

<style lang="scss" scope>
  .index-background-group {
    position: absolute;
    width: 120%;
    height: 120vh;
    left: -10%;
    top: -10vh;
    z-index: 1;
    & > .background {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: black;
      background-size: cover;
      transition: 1.5s;
      transition-timing-function: ease-in-out;
      & > div {
        position: absolute;
        left: -10%;
        width: 120%;
        height: 120vh;
        & > .background-line {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url("../assets/images/index/img_background_line.png") no-repeat center;
          background-size: cover;
          z-index: 3;
        }
        & > .background-line-over {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url("../assets/images/index/img_background_line_over.png") no-repeat center;
          background-size: cover;
          z-index: 3;
          &.filter-1 {
            animation: line-over-ani-1 10s infinite;
          }
          &.filter-2 {
            animation: line-over-ani-2 10s infinite;
          }
          &.filter-3 {
            animation: line-over-ani-3 10s infinite;
          }
        }
      }
    }
    @media (max-width: 1366px) {
      & > .background {
        & > div {
          height: 80%;
          left: -20%;
          bottom: 0;
        }
      }
    }
    @media (max-width: 1024px) {
      & > .background {
        & > div {
          height: 65%;
          left: -30%;
        }
      }
    }
    @media (max-width: 767px) {
      & > .background {
        & > div {
          width: 130%;
          height: 50%;
          left: -38%;
          bottom: 5%;
        }
      }
    }
    @media (max-height: 500px) {
      & > .background {
        & > div {
          width: 130%;
          height: 50%;
          left: -45%;
          bottom: 5%;
        }
      }
    }
  }

  @keyframes line-over-ani-1 {
    0% {
      filter: hue-rotate(0deg);
      opacity: 0;
    }
    9% {
      opacity: 0;
    }
    10% {
      opacity: .4;
      transform: translate(-1.5%,0%);
    }
    11% {
      opacity: .2;
      transform: translate(1%,1%);
    }
    12% {
      opacity: .7;
      transform: translate(0%,-1%);
    }
    13% {
      opacity: .2;
      transform: translate(-0.5%,0%);
    }
    14% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: .4;
      transform: translate(0%,-1%);
    }
    21% {
      opacity: .2;
      transform: translate(0%,1.5%);
    }
    22% {
      opacity: .7;
      transform: translate(0%,0%);
    }
    23% {
      opacity: .2;
      transform: translate(0%,-0.5%);
    }
    24% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    29% {
      opacity: 0;
    }
    31% {
      opacity: .7;
    }
    32% {
      opacity: .7;
    }
    33% {
      opacity: .2;
      transform: translate(0%,-0.5%);
    }
    34% {
      opacity: .6;
      transform: translate(1%,0%);
    }
    35% {
      opacity: .2;
      transform: translate(-0.5%,1%);
    }
    36% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    79% {
      filter: hue-rotate(1000deg);
      transform: translate(0%,0%);
      opacity: 0;
    }
    80% {
      opacity: .7;
      transform: translate(1%,0.5%);
    }
    81% {
      opacity: .2;
      transform: translate(-1%,-0.5%);
    }
    82% {
      opacity: .4;
      transform: translate(0%,1%);
    }
    83% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    84% {
      opacity: .6;
      transform: translate(2%,0%);
    }
    85% {
      opacity: .7;
      transform: translate(0%,0%);
    }
    86% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    100% {
      opacity: 0;
      transform: translate(0%,0%);
      filter: hue-rotate(1000deg);
    }
  }
    @keyframes line-over-ani-2 {
    0% {
      filter: hue-rotate(300deg);
      opacity: 0;
    }
    9% {
      opacity: 0;
    }
    10% {
      opacity: .4;
      transform: translate(-0.4%,0%);
    }
    11% {
      opacity: .2;
      transform: translate(0.2%,0%);
    }
    12% {
      opacity: .7;
      transform: translate(0%,0%);
    }
    13% {
      opacity: .2;
      transform: translate(-0.1%,0%);
    }
    14% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: .4;
      transform: translate(0%,-0.4%);
    }
    21% {
      opacity: .2;
      transform: translate(0%,0.5%);
    }
    22% {
      opacity: .7;
      transform: translate(0%,0%);
    }
    23% {
      opacity: .2;
      transform: translate(0%,-0.2%);
    }
    24% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    29% {
      opacity: 0;
    }
    31% {
      opacity: .7;
    }
    32% {
      opacity: .7;
    }
    33% {
      opacity: .2;
      transform: translate(0%,-0.2%);
    }
    34% {
      opacity: .6;
      transform: translate(0.4%,0%);
    }
    35% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    36% {
      opacity: .5;
      transform: translate(-1%,1%);
    }
    37% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    40% {
      opacity: 0;
    }
    41% {
      opacity: .3;
      transform: translate(1%,0%);
    }
    42% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    43% {
      opacity: .4;
      transform: translate(0.5%,-1%);
    }
    44% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    45% {
      opacity: .8;
      transform: translate(-1%,0%);
    }
    46% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    79% {
      filter: hue-rotate(1200deg);
      opacity: 0;
    }
    80% {
      opacity: .7;
      transform: translate(0%,0%);
    }
    81% {
      opacity: .1;
      transform: translate(0%,-0.1%);
    }
    82% {
      opacity: .5;
      transform: translate(0%,2%);
    }
    83% {
      opacity: .3;
      transform: translate(0%,0%);
    }
    84% {
      opacity: .5;
      transform: translate(-2%,0%);
    }
    85% {
      opacity: .1;
      transform: translate(0%,0%);
    }
    86% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    100% {
      opacity: 0;
      transform: translate(0%,0%);
      filter: hue-rotate(500deg);
    }
  }
    @keyframes line-over-ani-3 {
    0% {
      filter: hue-rotate(2000deg);
      opacity: 0;
    }
    9% {
      opacity: 0;
    }
    10% {
      opacity: .4;
      transform: translate(1%,0%);
    }
    11% {
      opacity: .2;
      transform: translate(-1%,0%);
    }
    12% {
      opacity: .7;
      transform: translate(0%,0%);
    }
    13% {
      opacity: .2;
      transform: translate(0.5%,0%);
    }
    14% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: .4;
      transform: translate(0%,1%);
    }
    21% {
      opacity: .2;
      transform: translate(0%,-1.5%);
    }
    22% {
      opacity: .7;
      transform: translate(0%,0%);
    }
    23% {
      opacity: .2;
      transform: translate(0%,0.5%);
    }
    24% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    29% {
      opacity: 0;
    }
    31% {
      opacity: .7;
    }
    32% {
      opacity: .7;
    }
    33% {
      opacity: .2;
      transform: translate(0%,0.5%);
    }
    34% {
      opacity: .6;
      transform: translate(-2%,0%);
    }
    35% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    40% {
      opacity: 0;
    }
    42% {
      opacity: .3;
      transform: translate(-1%,0%);
    }
    43% {
      opacity: .1;
      transform: translate(0.5%,-1%);
    }
    45% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    79% {
      filter: hue-rotate(200deg);
      opacity: 0;
    }
    80% {
      opacity: .7;
      transform: translate(0%,0%);
    }
    81% {
      opacity: .5;
      transform: translate(0%,0.5%);
    }
    82% {
      opacity: .5;
      transform: translate(0%,0.5%);
    }
    83% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    84% {
      opacity: .6;
      transform: translate(-2%,0%);
    }
    85% {
      opacity: .7;
      transform: translate(0%,-1%);
    }
    86% {
      opacity: 0;
      transform: translate(0%,0%);
    }
    100% {
      opacity: 0;
      transform: translate(0%,0%);
      filter: hue-rotate(700deg);
    }
  }
</style>
