<template>
  <div
    :class="className"
  >
    <slot/>
  </div>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbGrid',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
