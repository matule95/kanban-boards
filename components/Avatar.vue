<template>
  <div class="avatar">
    <div class="avatar__wrapper" :class="className">
      <img class="avatar__wrapper__img" :src="avatarSrc" :alt="alt" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      default: null,
      type: String
    },
    alt: { default: 'Image Here', type: String },
    size: { required: true, type: String }
  },
  computed: {
    className() {
      const className = {}
      className[`avatar__size--${this.size}`] = !!this.size
      return className
    },
    avatarSrc() {
      return this.value || this.imgSrc || 'img.png'
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/components/Avatar.scss';
</style>
