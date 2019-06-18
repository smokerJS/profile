<template>
  <nav class="global-nav">
    <button class="btn-toggle" :class="this.toggleNav" @click="toggleNavHandler">
      <i>MENU</i>
    </button>
    <ul class="global-nav-menu" :class="this.toggleNav">
      <div class="global-nav-background"></div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'GNB',
  data() {
    return {
      toggleNav : ''
    }
  },
  methods: {
    toggleNavHandler() {
      this.$set(this.$data, 'toggleNav', this.toggleNav === 'open' ? 'off' : 'open');
    }
  },
}
</script>

<style lang="scss" scope>
  .global-nav {
    position: absolute;
    z-index: 101;
    & > .global-nav-menu {
      position: fixed;
      height: 100vh;
      top: 0;
      & > .global-nav-background {
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(255,255,255,.0), rgba(255,255,255,.8));
        background-size: 100% 100%;
      }
      &.open {
        animation: nav-background-open-ani 6s ease forwards;
      }
      &.off {
        animation: nav-background-off-ani 2s ease forwards;
      }
    }

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
    @media (max-width: 1366px) {
      & > .btn-toggle {
        right: 5.5%;
        top: 10%;
        width: 80px;
        cursor: pointer;
      }
    }
    @media (max-width: 1024px) {
      & > .btn-toggle {
        top: 10.1%;
      }
    }
    @media (max-width: 800px) {
      & > .btn-toggle {
        top: 10.5%;
      }
    }
  }

  @keyframes nav-background-open-ani {
    0% {
      width: 100%;
      opacity: 0;
      background-position:0% 0%;
    }
    40% {
      opacity: 1;
      width: 100%;
      background-position:0% 0%;
    }
    41%{
      background-position:0% 50%;
    }
    50%{
      background-position:100% 50%;
    };
    100%{
      opacity: 1;
      width: 100%;
      background-position:100% 100%;
    };
  }
  @keyframes nav-background-off-ani {
    0% {
      width: 100%;
      background-position:0% 50%;

    }
    50% {
      background-position:100% 50%;
    }
    98%{
      opacity: 0;
      background-position:0% 50%;
    }
    99%{
      opacity: 0;
      width: 100%;
      background-position:0% 0%;
    };
    100%{
      opacity: 0;
      width: 0%;
      background-position:0% 0%;
    };
  }
</style>
