<template>
  <!-- eslint-disable-next-line -->
  <i class="icon" v-html="svgIcon"></i>
</template>

<script>
import { fetchIcon } from '../utils/icon'
// eslint-disable-next-line import/no-webpack-loader-syntax
import defaultIcon from '!!html-loader!../static/icons/tasks.svg'
export default {
  name: 'Icon',
  props: {
    icon: {
      type: [String, Boolean],
      default: false,
      validate(icon) {
        if (icon === true) {
          // eslint-disable-next-line no-console
          console.error(`icon property expected String got ${typeof icon}`)
        }
      }
    }
  },
  data: () => ({
    resolved: defaultIcon
  }),
  computed: {
    svgIcon() {
      return this.resolved
    }
  },
  watch: {
    icon() {
      this.resolved = null
      this.loadIcon()
    }
  },
  mounted() {
    this.processElement()
    this.loadIcon()
  },
  methods: {
    processElement() {
      this.$el.firstChild.removeAttribute('height')
      this.$el.firstChild.removeAttribute('width')
    },
    loadIcon() {
      return fetchIcon(this.icon)
        .then((resolved) => {
          this.resolved = resolved
        })
        .then(this.processElement)
        .catch((e) => {})
    }
  }
}
</script>

<style>
.icon {
  display: inline-block;
}

.icon svg {
  fill: currentColor;
  height: 1em;
  margin-top: -4px;
  vertical-align: middle;
  width: 1em;
}
</style>
