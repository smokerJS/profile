<template>
  <section id="gnbLoadingArea">
    <div v-for="line of this.lineLength" :class="`item-${line}`" :key="`item-${line}`"></div>
  </section>
</template>

<script>
export default {
  name: "gnb-loading",
  data: function() {
    return {
      lineLength : 1000
    }
  },
};
</script>

<style lang="scss" scope>
  #gnbLoadingArea {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 50;
    background: rgba(65, 65, 100, 0.8);
    & div {
      float: left;
      $dotSize: 10;
      @media (min-width: 769px) {
        $pxSize: 7px;
        overflow: hidden;
        @for $line from 1 to 1000 {
          &.item-#{$line}{
            height: (random(80)/$dotSize)*$pxSize;
            width: (random(100)/$dotSize)*$pxSize;
            margin-top: random(40)/10+px;
            background: rgba(random(150),random(100),random(255),random(10)/10);
          }
        }
      }
      @media (max-width: 768px) {
        $pxSize: 4px;
        @for $line from 1 to 1000 {
          &.item-#{$line}{
            height: (random(80)/$dotSize)*$pxSize;
            width: (random(100)/$dotSize)*$pxSize;
            margin-top: random(15)+px;
            background: rgba(random(150),random(100),random(255),random(10)/10);
          }
        }
      }
    }
  }
</style>
