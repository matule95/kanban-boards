<template>
  <div class="stage__item">
    <div v-if="item.image" class="stage__item__image">
      <img src="~/static/image.png" />
    </div>
    <div class="stage__item__tags">
      <b-badge pill variant="primary">INCM BV</b-badge>
      <b-badge class="text-white" pill variant="warning">INCM BV</b-badge>
    </div>
    <div class="stage__item__title">{{ item.title }}</div>
    <b-row class="stage__item__details" no-gutters>
      <b-col class="stage__item__details__checks">
        <img src="~/static/icons/tasks.svg" /> 8/10
      </b-col>
      <b-col class="stage__item__details__comments">
        <img src="~/static/icons/comments.svg" /> 15
      </b-col>
      <b-col class="stage__item__details__avatar text-center" lg="2">
        <avatar size="sm"></avatar>
      </b-col>
    </b-row>
    <div class="stage__item__progress-bar">
      <div
        class="stage__item__progress-bar__progress"
        :style="progressColor"
      ></div>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar'
export default {
  components: {
    Avatar
  },
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  computed: {
    progressColor() {
      const style = {}
      style.width = `${this.item.progress}%`
      if (this.item.progress >= 70) {
        style.backgroundColor = '#0BD455'
      } else if (this.item.progress >= 30 && this.item.progress <= 69) {
        style.backgroundColor = '#FEB63F'
      } else style.backgroundColor = '#DC174C'
      return style
    }
  }
}
</script>
<style lang="scss">
@import '~assets/scss/components/Stage.scss';
</style>
