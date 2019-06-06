<template>
  <section class="index-background-group">
    <div class="background-frame">
      <div class="background-box">
        <div class="background-img">
          <div class="background-filter"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {

}
</script>

<style lang="scss">
  .index-background-group {
    position: absolute;
    width: 120%;
    height: 120vh;
    left: -10%;
    top: -10vh;
    & > .background-frame {
      position: relative;
      width: 100%;
      height: 100%;
      & > .background-box {
        position: absolute;
        width: 120%;
        height: 120vh;
        left: -10%;
        & > .background-img {
          position: relative;
          width: 100%;
          height: 100%;
          background: url("../assets/images/index/img_background.jpg") no-repeat center;
          background-size: cover;
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
    left: -0.1;
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
    filter: hue-rotate(300deg);
    opacity: 1;
    top: 0;
    left: 0;
  }
  81% {
    top: -0.1%;
    opacity: .5;
  }
  82% {
    top: -0.1%;
    opacity: .5;
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
    filter: hue-rotate(320deg);
  }
}
</style>
