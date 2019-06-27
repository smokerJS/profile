<template>
  <div id="menuCanvasArea" ref="menuCanvasArea">
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
export default {
  name: "menu-canvas",
  data: function() {
    return {
    };
  },
  methods: {

  },
  mounted() {
    html2canvas(document.getElementById('layout')).then(canvas => {
      this.$refs.menuCanvasArea.appendChild(canvas)
    });
  }
};
</script>

<style lang="scss" scope>
  .menuCanvasArea {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 50;
  }
</style>
