<script>
export default {
  name: 'Presenter',
  props: {
    value: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    className() {
      const className = []

      className.push('input')

      return className
    }
  }
}
</script>
