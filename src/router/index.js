import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/views/nav'
import ResizeWidthExp from '@/views/resizeWidthExp'
import AdjustCplExp from '@/views/adjustCplExp'
import Draw from '@/views/draw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/resizeWidthExp',
      name: 'ResizeWidthExp',
      component: ResizeWidthExp
    },
    {
      path: '/draw',
      name: 'Draw',
      component: Draw
    },
    {
      path: '/adjustCplExp',
      name: 'AdjustCplExp',
      component: AdjustCplExp
    },
  ]
})
