<template>
  <div>
    <div class="index-background-cover" @mousemove="mouseMoveHandler"></div>
    <div class="index-background-group">
      <div class="background-img"
        :style="{
          marginLeft: this.moveX,
          marginTop: this.moveY
        }"
      >
        <div class="background-filter"></div>
        <IndexCodeScreen/>
      </div>
    </div>
  </div>
</template>

<script>
import IndexCodeScreen from './IndexCodeScreen';
export default {
  name: "index-background",
  components: {
    IndexCodeScreen,
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
      this.$set(this.$data, 'moveX', `${((this.width / 2) - e.clientX) * 0.1}px`);
      this.$set(this.$data, 'moveY', `${((this.height / 2) - e.clientY) * 0.1}px`);
    }
  },
  created() {
    this.setResizeData();
    window.addEventListener('resize',this.setResizeData());
  },
};
</script>

<style lang="scss" scope>
  .index-background-cover {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(255,255,255,.2);
    z-index: 2;
  }
  .index-background-group {
    position: absolute;
    width: 120%;
    height: 120vh;
    left: -10%;
    top: -10vh;
    z-index: 1;
    & > .background-img {
      position: relative;
      width: 100%;
      height: 100%;
      background: url("../assets/images/index/img_background.jpg") no-repeat center;
      background-size: cover;
      transition: 1.2s;
      transition-timing-function: ease-in-out;
      & > .background-filter {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("../assets/images/index/img_background_filter.png") no-repeat center;
        background-size: cover;
        animation: filter-ani 10s infinite;
      }
    }
  }

  @keyframes filter-ani {
    0% {
      filter: hue-rotate(0deg);
      opacity: 0;
    }
    9% {
      opacity: 0;
    }
    10% {
      opacity: .4;
      left: -0.2%;
    }
    11% {
      opacity: .2;
      left: 0.2%;
    }
    12% {
      opacity: 1;
      left: 0;
    }
    13% {
      opacity: .2;
      left: -0.1%;
    }
    14% {
      opacity: 0;
      left: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: .4;
      top: -0.2%;
    }
    21% {
      opacity: .2;
      top: 0.3%;
    }
    22% {
      opacity: 1;
      top: 0;
    }
    23% {
      opacity: .2;
      top: -0.1%;
    }
    24% {
      opacity: 0;
      top: 0;
    }
    29% {
      opacity: 0;
    }
    31% {
      opacity: 1;
    }
    32% {
      opacity: 1;
    }
    33% {
      opacity: .2;
      top: -0.1%;
    }
    34% {
      opacity: .6;
      top: 0;
      left: .2%;
    }
    35% {
      opacity: 0;
      top: 0;
      left: 0;
    }
    40% {
      opacity: 0;
    }
    45% {
      opacity: 1;
    }
    79% {
      filter: hue-rotate(1000deg);
      opacity: 0;
    }
    80% {
      opacity: 1;
      top: 0;
      left: 0;
    }
    81% {
      opacity: .5;
      top: -0.1%;
    }
    82% {
      opacity: .5;
      top: -0.1%;
    }
    83% {
      opacity: 0;
      top: 0;
      left: 0;
    }
    84% {
      opacity: .6;
      top: 0;
      left: .3%;
    }
    85% {
      opacity: .7;
      top: 0;
      left: 0;
    }
    86% {
      opacity: 0;
      top: 0;
      left: 0;
    }
    100% {
      opacity: 0;
      top: 0;
      left: 0;
      filter: hue-rotate(1000deg);
    }
  }
</style>
