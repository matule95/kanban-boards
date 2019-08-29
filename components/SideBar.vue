<template>
  <nav class="nav flex-column" :class="{ 'text-center': !expanded }">
    <icon
      icon="menu"
      class="text-center text-muted toggle mt-4 mb-5"
      @click.native="toggleSidebar()"
    />
    <nav-item icon="file" :to="{ name: 'boards' }" :label-visibility="expanded"
      >Contractos</nav-item
    >
  </nav>
</template>

<script>
import NavItem from '~/components/NavItem'
import Icon from '~/components/Icon'
export default {
  components: {
    NavItem,
    Icon
  },
  props: {
    expanded: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style></style>
