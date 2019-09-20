<template>
  <section class="page-404">
    <h1 v-if="error.statusCode === 404">404 Not Found</h1>
    <h1 v-else>{{error.statusCode}} Error</h1> 
  </section>
</template>

<script>

export default {
  name: '404',
  components: {

  },
  props: ['error'],
  methods: {

  },
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
