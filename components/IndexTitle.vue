<template>
  <h1
    ref="indexTitle"
    class="title-area"
    :style="{textShadow: `${rootY/10}px ${rootX/80}px rgba(255,0,255,.9), ${rootY/8}px ${rootX/60}px rgba(0,0,0,0), ${rootX/70}px ${rootY/12}px rgba(12,0,248,.7)`}"
  >
    <span>I AM A</span>
    <span class="middle-text">FRONT-END</span>
    <span class="last-text">DEVELOP<strong>ER</strong></span>
  </h1>
</template>

<script>
export default {
  name: "index-title",
  data: function() {
    return {
      rootX: 0,
      rootY: 0
    };
  },
  methods: {
    mouseMoveHandler(e) {
      this.$set(this.$data, 'rootX', (e.pageX - this.$refs.indexTitle.offsetLeft - (this.$refs.indexTitle.clientWidth / 2)) * 0.2);
      this.$set(this.$data, 'rootY', (e.pageY - this.$refs.indexTitle.offsetTop - (this.$refs.indexTitle.clientHeight / 2)) * 0.2);
    }
  },
};
</script>

<style lang="scss" scope>
  .title-area {
    position: absolute;
    top: 9%;
    left: 4.3%;
    z-index: 11;
    font-family: "FightThis";
    font-size: 100px;
    color: #fff;
    letter-spacing: 15px;
    font-weight: bold;
    line-height: 100px;
    transition: .1s;
    & > span {
      display: block;
      padding-left: 5px;
      height: 100px;
      &.middle-text {
        background-color: blue;
        height: 110px;
        width: 600px;
        margin: 0 0;
      }
      &.last-text {
        margin-top: -10px;
      }
      & > strong {
        padding-right: 40%;
        background: linear-gradient(transparent 70%, rgb(0, 0, 255) 50%);
      }
    }
  }
  @media (max-width: 1366px) {
    .title-area {
      top: 8.3%;
      left: 5.5%;
      font-size: 85px;
      line-height: 90px;
      letter-spacing: 10px;
      & > span {
        padding-left: 7px;
        height: 85px;
        &.middle-text {
          background-color: rgb(0, 0, 255);
          height: 100px;
          width: 480px;
          margin: 0 0;
        }
        &.last-text {
          margin-top: -10px;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .title-area {
      font-size: 70px;
      line-height: 72px;
      letter-spacing: 5px;
      & > span {
        padding-left: 7px;
        height: 70px;
        &.middle-text {
          background-color: rgb(0, 0, 255);
          height: 80px;
          width: 350px;
          margin: 0 0;
        }
        &.last-text {
          margin-top: -10px;
        }
      }
    }
  @media (max-height: 500px) {
    .title-area {
      font-size: 50px;
      line-height: 44px;
      letter-spacing: 5px;
      top: 4%;
      left: 3%;
      & > span {
        padding-left: 7px;
        height: 46px;
        &.middle-text {
          background-color: rgb(0, 0, 255);
          height: 48px;
          width: 270px;
          margin: 0 0;
        }
        &.last-text {
          margin-top: -2px;
        }
        & > strong {
          padding-right: 45%;
        }
      }
    }
  }
}
</style>
