import Default from './src/Default.vue'

export { default as VbGridDefault } from './src/Default.vue'

const components = [Default]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }
