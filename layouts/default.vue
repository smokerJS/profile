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
import Gnb from '@/gnb';
export default {
  components: {
    Gnb
  },
}
</script>
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
