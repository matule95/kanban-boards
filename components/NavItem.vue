<template>
  <nuxt-link class="nav-link py-3" :to="to" exact>
    <div class="row no-gutters">
      <div :class="className">
        <icon v-if="icon" :icon="icon" class="nav-item" />
      </div>
      <div
        class="col-10 align-self-center"
        :class="{ 'd-none': !labelVisibility }"
      >
        <span class="text-bold">
          <slot></slot>
        </span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import Icon from './Icon'
export default {
  name: 'NavItem',
  components: { Icon },
  props: {
    icon: { default: null, type: String },
    to: { required: true, type: Object },
    labelVisibility: { default: false, type: Boolean }
  },
  computed: {
    className() {
      const className = {}
      className['col-2'] = this.labelVisibility
      className['col-12'] = !this.labelVisibility
      return className
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/global';
.nav-item {
  font-size: 1.3rem;
}
a.nuxt-link-active {
  background-color: transparentize($primary, 0.9);
  border-left: 3px solid $primary;
  width: 100%;
  color: $primary !important;
}
a.nav-link {
  color: $text-muted;
}
</style>
