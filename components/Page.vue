<template>
  <div
    class="app-page mb-5 mt-5 ml-5"
    :class="{ 'app-page--non-fluid': !fluid }"
  >
    <div class="app-page__header">
      <h4 class="app-page__header__title">{{ title }}</h4>
      <div class="app-page__actions">
        <slot name="actions" />
      </div>
    </div>
    <div
      class="app-page__content "
      :class="{ 'app-page__content--card card-shadow': card }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPage',
  props: {
    fluid: { default: false, type: Boolean },
    card: { default: true, type: Boolean },
    title: { required: true, type: String }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/global';
.app-page {
  @include make-container();

  @include modifier('non-fluid') {
    @include make-container-max-widths();
  }
  @include element('header') {
    @include clearfix;
    padding-bottom: 0.7rem;

    @include element('title') {
      float: left;
    }
  }

  @include element('actions') {
    float: right;
    > * {
      display: inline-block;
    }
  }

  @include element('content') {
    @include modifier('card') {
      background-color: $white;
      padding: 2rem 3em;
    }
  }
}
</style>
