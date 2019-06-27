<template>
  <nav class="global-nav">
    <button class="btn-toggle" :class="this.toggleNav" @click="toggleNavHandler">
      <i v-if="!this.toggleNav">MENU</i>
      <i v-else>CLOSE</i>
    </button>
    <MenuCanvas v-show="this.toggleNav"/>
    <div class="nav-screen" v-if="this.toggleNav">
      <ul>
        <li>
          <a href="https://github.com/smokerJS" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://www.smoker.ga" target="_blank">Blog</a>
        </li>
        <li>
          <a href="https://drive.google.com/open?id=1HKSkvH0TYfE2ZZ33VSaVJiDyDIKI0qey" target="_blank">Portfolio</a>
        </li>
      </ul>
    </div>
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
    & > .nav-screen {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: rgba(0,0,255,.5);
      z-index: 99;
      & > ul {
        position: absolute;
        top: 10%;
        left: 5%;;
        font-family: "FightThis";
        font-size: 100px;
        & > li {
          & > a {
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
