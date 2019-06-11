<template>
  <section class="index-page">
    <IndexTitle/>
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
}
</script>

<style lang="scss" scope>
  .index-page {
    width: 100%;
    height: 100vh;
    position: relative;
  }
</style>
