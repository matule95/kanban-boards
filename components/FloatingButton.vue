<template>
  <div class="floating-button">
    <span class="floating-button__wrapper">
      <icon icon="plus-circle" />
    </span>
  </div>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/FloatingButton';
</style>
