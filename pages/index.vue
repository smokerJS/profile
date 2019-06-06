<template>
  <section class="index-page">
    <IndexBackground/>
    <section class="title-area">
      <h1 >
        I AM A <br/>
        FRONT-END <br/>
        DEVELOPER
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

<style lang="scss">
  .index-page {
    width: 100%;
    height: 100vh;
    position: relative;
    & > .title-area {
      position: absolute;
      top: 20%;
      left: 10%;
      z-index: 11;
      & > h1 {
        font-size: 30px;
      }
    }
  }
</style>
