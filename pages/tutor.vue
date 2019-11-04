<template>
  <section>
    <h1 class="tutor-title">TUTOR</h1>
    <ul>
      <li>Vue</li>
      <li>Webpack</li>
      <li>SCSS</li>
    </ul>
    <Temp/>
  </section>
</template>

<script>
import Temp from '@/temp/HelloWorld';
export default {
  name: 'tutor',
}
</script>

<style lang="scss" scope>
  .tutor-title {
    font-size: 200px;
  }
</style>
