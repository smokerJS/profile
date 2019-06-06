<template>
  <section class="layout-frame">
    <nuxt />
  </section>
</template>

<script>
export default {
  data() {
    return {
    }
  }
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

  main {
    position: relative;
  }
  .layout-frame {
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
</style>
