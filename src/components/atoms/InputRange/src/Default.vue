<template>
  <input type="range">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputRange',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
