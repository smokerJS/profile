<template>
  <section class="index-page">
    <h1 class="title-area">
      <span>I AM A</span>
      <span class="middle-text">FRONT-END</span>
      <span class="last-text">DEVELOP<strong>ER</strong></span>
    </h1>
    <IndexBackground/>
  </section>
</template>

<script>
import IndexBackground from '../components/IndexBackground';

export default {
  name: 'index',
  components: {
    IndexBackground,
  },
}
</script>

<style lang="scss" scope>
  .index-page {
    width: 100%;
    height: 100vh;
    position: relative;
    & > .title-area {
      position: absolute;
      top: 15%;
      left: 15%;
      z-index: 11;
      font-family: "FightThis";
      font-size: 100px;
      letter-spacing: 5px;
      font-weight: bold;
      line-height: 100px;
      & > span {
        display: block;
        padding-left: 5px;
        height: 100px;
        &.middle-text {
          background-color: #fff;
          height: 110px;
          width: 70%;
          margin: 0 0;
        }
        &.last-text {
          margin-top: -10px;
        }
        & > strong {
          padding-right: 50%;
          background: linear-gradient(transparent 70%, rgb(255, 255, 255) 50%);
        }
      }
    }
    @media (max-width: 1920px) {
      & > .title-area {
        top: 8%;
        left: 8%;
        @media (max-width: 1024px) {
          font-size: 80px;
          letter-spacing: 4px;
          font-weight: bold;
          line-height: 80px;
          & > span {
            display: block;
            padding-left: 4px;
            height: 80px;
            &:nth-child(2) {
              background-color: #fff;
              height: 88px;
              width: 70%;
              margin: 0 0;
            }
            &:nth-child(3) {
              margin-top: -8px;
            }
            & > strong {
              padding-right: 50%;
              background: linear-gradient(transparent 70%, rgb(255, 255, 255) 50%);
            }
          }
        }
      }
    }
  }
</style>
