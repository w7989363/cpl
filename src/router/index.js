import Vue from 'vue'
import Router from 'vue-router'
import Experiment from '@/views/experiment'
import Draw from '@/views/draw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Experiment',
      component: Experiment
    },
    {
      path: '/draw',
      name: 'Draw',
      component: Draw
    },
  ]
})
