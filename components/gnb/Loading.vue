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
      lineLength : 300
    };
  },
};
</script>

<style lang="scss" scope>
  #gnbLoadingArea {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 50;
    background: rgba(255,0,0,.8);
    & div {
      float: left;
      @for $line from 1 to 300 {
        &.item-#{$line}{
          height: random(80)+px;
          width: random(100)+px;
          background: rgba(random(150),random(100),random(255),random(10)/10);
        }
      }
    }
  }
</style>
