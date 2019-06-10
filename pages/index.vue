<template>
  <section class="index-page">
    <IndexBackground/>
    <section class="title-area">
      <h1 >
        <span>I AM A</span>
        <span>FRONT-END</span>
        <span>DEVELOP<strong>ER</strong></span>
      </h1>
    </section>
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
      & > h1 {
        font-size: 100px;
        letter-spacing: 5px;
        font-weight: bold;
        line-height: 100px;
        & > span {
          display: block;
          padding-left: 5px;
          height: 100px;
          &:nth-child(2) {
            background-color: #fff;
            height: 110px;
            width: 70%;
            margin: 0 0;
          }
          & > strong {
            padding-right: 50%;
            background: linear-gradient(transparent 70%, rgb(255, 255, 255) 50%);
          }
        }
      }
    }
  }
</style>
