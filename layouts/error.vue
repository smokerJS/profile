<template>
  <section class="page-404">
    <h1 v-if="error.statusCode === 404">404 Not Found</h1>
    <h1 v-else>{{error.statusCode}} Error</h1> 
    <!-- 정적 호스팅 수정 필요함 -->
  </section>
</template>

<script>

export default {
  name: '404',
  props: ['error'],
}
</script>

<style lang="scss" scope>
  .page-404{
    width: 100%;
    height: 100vh;
    background: $blue;
    font-size: 100px;
    color: $white;
  }
</style>
