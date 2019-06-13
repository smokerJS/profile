<template>
  <section class="index-page" @mousemove="mouseMoveHandler">
    <IndexTitle ref="IndexTitleComponent"/>
    <IndexBackground/>
  </section>
</template>

<script>
import IndexTitle from '../components/IndexTitle';
import IndexBackground from '../components/IndexBackground';


export default {
  name: 'index',
  components: {
    IndexBackground,
    IndexTitle ,
  },
  methods: {
    mouseMoveHandler(e) {
      this.$refs.IndexTitleComponent.mouseMoveHandler(e);
    }
  },
}
</script>

<style lang="scss" scope>
  .index-page {
    width: 100%;
    height: 100vh;
    position: relative;
  }
</style>
