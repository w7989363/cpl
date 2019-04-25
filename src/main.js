// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
// import 'element-ui/lib/theme-chalk/index.css';
// import { Input, RadioGroup, Radio, RadioButton, Button, Slider, Upload, Select, Option, Rate, Message } from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.config.productionTip = false
// const components = [Input, RadioGroup, Radio, RadioButton, Rate, Button, Slider, Upload, Select, Option, Message]
// components.forEach(component => {
//   Vue.use(component)
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
