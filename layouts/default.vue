<template>
  <div class="layout-frame">
    <GNB/>
    <nuxt />
  </div>
</template>

<script>
import GNB from './GNB'
export default {
  components: {
    GNB
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

  }
</style>
