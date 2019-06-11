<template>
  <div class="layout-frame">
    <nav class="global-nav">
      <button class="btn-toggle" :class="this.toggleNav" @click="toggleNavHandler">
          <span class="top top-1"></span>
          <span class="top top-2"></span>
          <span class="middle middle-1"></span>
          <span class="middle middle-2"></span>
          <span class="side side-1"></span>
          <span class="side side-2"></span>
          <span class="bottom bottom-1"></span>
          <span class="bottom bottom-2"></span>
      </button>
      <ul class="global-nav-menu" :class="this.toggleNav">
        <div class="global-nav-background"></div>
      </ul>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
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
    & > .global-nav {
      position: absolute;
      z-index: 101;
      & > .global-nav-menu {
        position: fixed;
        height: 100vh;
        top: 0;
        & > .global-nav-background {
          width: 100%;
          height: 100%;
          //background: linear-gradient(to right, rgba(255,255,255,.0), rgba(255,255,255,.8));
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
        right: 5%;
        top: 10%;
        width: 40px;
        height: 40px;
        border: none;
        background: none;
        overflow: hidden;
        cursor: pointer;
        & > span {
          width: 60px;
          border-top: 5px solid #000;
          display: block;
          position: absolute;
          &.top {
            z-index: 1;
            top: 0;
          }
          &.middle {
            z-index: 1;
            top: 17.5px;
          }
          &.side {
            z-index: 1;
            border-top: none;
            box-sizing: border-box;
            &.side-1 {
              width: 40px;
              height: 40px;
              border-left: 5px solid #000;
              bottom: 40px;
            }
            &.side-2 {
              width: 40px;
              height: 40px;
              border-right: 5px solid #000;
              bottom: -40px;
            }
          }
          &.bottom {
            z-index: 1;
            bottom: 0;
          }
        }
        &.open {
          & > span {
            &.top-1 {
              animation: nav-btn-top-open-ani 1s forwards;
            }
            &.middle-1 {
              animation: nav-btn-middle-1-open-ani 1s forwards;
            }
            &.middle-2 {
              animation: nav-btn-middle-2-open-ani 1s forwards;
            }
            &.side-1 {
              animation: nav-btn-side-1-open-ani 1s forwards;
            }
            &.side-2 {
              animation: nav-btn-side-2-open-ani 1s forwards;
            }
            &.bottom-1 {
              animation: nav-btn-bottom-open-ani 1s forwards;
            }
          }
        }
        &.off {
          & > span {
            &.top-1 {
              animation: nav-btn-top-off-ani 1s forwards;
            }
            &.middle-1 {
              animation: nav-btn-middle-1-off-ani 1s forwards;
            }
            &.middle-2 {
              animation: nav-btn-middle-2-off-ani 1s forwards;
            }
            &.side-1 {
              animation: nav-btn-side-1-off-ani 1s forwards;
            }
            &.side-2 {
              animation: nav-btn-side-2-off-ani 1s forwards;
            }
            &.bottom-1 {
              animation: nav-btn-bottom-off-ani 1s forwards;
            }
          }
        }
      }
    }
  }

  @keyframes nav-btn-top-open-ani {
    from {
      transform-origin: 0% 0%;
      transform: rotateZ(360deg);
    }
    to {
      transform-origin: 0% 0%;
      transform: rotateZ(401deg);
    }
  }
  @keyframes nav-btn-bottom-open-ani {
    from {
      transform: rotateZ(0deg);
      transform-origin: 0% 0%;
    }
    to {
      transform: rotateZ(-41deg);
      transform-origin: 0% 0%;
    }
  }
  @keyframes nav-btn-middle-1-open-ani {
    from {
      left: 0;
    }
    to {
      left: 40px;
    }
  }
  @keyframes nav-btn-middle-2-open-ani {
    from {
      right: 0;
    }
    to {
      right: 40px;
    }
  }
  @keyframes nav-btn-side-1-open-ani {
    from {
      bottom: 40px;
    }
    to {
      bottom: 0;
    }
  }
  @keyframes nav-btn-side-2-open-ani {
    from {
      bottom: -40px;
    }
    to {
      bottom: 0;
    }
  }

  @keyframes nav-btn-top-off-ani {
    from {
      transform-origin: 0% 0%;
      transform: rotateZ(402.5deg);
    }
    to {
      transform-origin: 0% 0%;
      transform: rotateZ(360deg);
    }
  }
  @keyframes nav-btn-bottom-off-ani {
    from {
      transform: rotateZ(-42.5deg);
      transform-origin: 0% 0%;

    }
    to {
      transform: rotateZ(0deg);
      transform-origin: 0% 0%;
    }
  }
  @keyframes nav-btn-middle-1-off-ani {
    from {
      left: 40px;
    }
    to {
      left: 0;
    }
  }
  @keyframes nav-btn-middle-2-off-ani {
    from {
      right: 40px;
    }
    to {
      right: 0;
    }
  }
  @keyframes nav-btn-side-1-off-ani {
    from {
      bottom: 0;
    }
    to {
      bottom: 40px;
    }
  }
  @keyframes nav-btn-side-2-off-ani {
    from {
      bottom: 0;
    }
    to {
      bottom: -40px;
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
