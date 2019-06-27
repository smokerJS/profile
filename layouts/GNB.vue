<template>
  <nav class="global-nav">
    <button class="btn-toggle" :class="this.toggleNav" @click="toggleNavHandler">
      <i>MENU</i>
    </button>
    <MenuCanvas v-show="this.toggleNav"/>
  </nav>
</template>

<script>
import MenuCanvas from '../components/MenuCanvas'
export default {
  components: {
    MenuCanvas
  },
  name: 'GNB',
  data() {
    return {
      toggleNav : false
    }
  },
  methods: {
    toggleNavHandler() {
      this.$set(this.$data, 'toggleNav', !this.toggleNav);
    }
  },
}
</script>

<style lang="scss" scope>
  .global-nav {
    position: absolute;
    z-index: 101;
    & > .btn-toggle {
      position: fixed;
      z-index: 100;
      right: 4.3%;
      top: 10.5%;
      text-align: right;
      width: 90px;
      height: 28px;
      padding-right: 14px;
      border: none;
      background-color: #fff;
      overflow: hidden;
      cursor: pointer;
        & > i {
          font-family: "FightThis";
          font-style: normal;
          font-size: 18px;
          color : rgb(0,0,255);
        }
      }
      &.open {
      }
      &.off {
    }
  }
</style>
