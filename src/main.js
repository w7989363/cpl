// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import { Input, Radio, Button, Slider, Upload, Select, Option } from 'element-ui'

Vue.config.productionTip = false
const components = [Input, Radio, Button, Slider, Upload, Select, Option]
components.forEach(component => {
  Vue.use(component)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
