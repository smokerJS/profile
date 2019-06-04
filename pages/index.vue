<template>
  <div class="test">
    test
    <span>
      zzz
    </span>
  </div>
</template>

<script>


export default {

}
</script>

<style lang="scss">
  .test {
    font-size: 300px;
    & > span {
      font-size: 200px;
    }
  }
</style>
