<template>
  <div>
    <Gnb/>
    <div id="layout" class="layout-frame">
      <nuxt />
      <div class="license">
        <strong>Copyright(c) 2019 smokerJS All rights reserved.</strong>
      </div>
    </div>
  </div>
</template>

<script>
import Gnb from '@/gnb/Index';
export default {
  components: {
    Gnb
  },
}
</script>

<style lang="scss">
  * {
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  *:focus {
    outline: none;
  }
  .layout-frame {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  @font-face {
    font-family: "FightThis";
    src: url("../assets/fonts/FightThis.eot");
    src: local(※), url("../assets/fonts/FightThis.woff") format("woff");
  }
  @font-face {
    font-family: "D2Coding";
    src: url("../assets/fonts/D2Coding.eot");
    src: local(※), url("../assets/fonts/D2Coding.woff") format("woff");
  }
</style>
<style lang="scss" scope>
  .layout-frame {
    .license {
      color: #fff;
      position: absolute;
      font-family: "D2Coding";
      font-size: 12px;
      right: 8px;
      bottom: 5px;
      z-index: 111;
      @media (max-width: 1024px) {
        font-size: 11px;
      }
      @media (max-width: 767px) {
        font-size: 10px;
      }
      @media (max-height: 500px) {
        font-size: 9px;
      }
    }
  }
</style>
