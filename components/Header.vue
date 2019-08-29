<template>
  <div class="header container-fluid">
    <!--Header-->
    <div class="row h-100">
      <div class="col-3 align-self-center">LOGO</div>
      <div class="col-9 align-self-center text-right"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '~assets/scss/global';

.header {
  height: 60px;
  background-color: $white;
  border-bottom: 1px solid #e4e8f0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
}
</style>
