<template>
  <div class="stage">
    <div class="stage__wrapper">
      <div class="stage__wrapper__title">
        {{ title }}
      </div>
      <perfect-scrollbar>
        <div class="stage__wrapper__body">
          <slot />
        </div>
      </perfect-scrollbar>
      <div class="stage__wrapper__footer">
        <b-button variant="outline-secondary" block>ADD CARD</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
export default {
  components: {
    PerfectScrollbar
  },
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/components/Stage.scss';
.btn {
  border-style: dashed;
  border-color: #e8ecef;
  &:hover {
    border-style: solid;
  }
}
</style>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />
