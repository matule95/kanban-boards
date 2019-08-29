<template>
  <div class="app">
    <div class="app__west">
      <side-bar :expanded="expanded"></side-bar>
    </div>
    <div class="app__east">
      <Header></Header>
      <nuxt />
    </div>
  </div>
</template>
<script>
import SideBar from '~/components/SideBar'
import Header from '~/components/Header'
export default {
  components: {
    SideBar,
    Header
  },
  data: () => ({
    expanded: false
  })
}
</script>
<style></style>
