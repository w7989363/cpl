import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/views/nav'
import ResizeWidthExp from '@/views/resizeWidthExp'
import AdjustCplExp from '@/views/adjustCplExp'
import Draw from '@/views/draw'
import StartInfo from '@/views/exp2/startInfo'
import EndInfo from '@/views/exp2/endInfo'
import DemoScore from '@/views/exp2/demoScore'
import ReadAnswer from '@/views/exp2/ReadAnswer'

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
    {
      path: '/exp2/startInfo',
      name: 'StartInfo',
      component: StartInfo
    },
    {
      path: '/exp2/demoScore',
      name: 'DemoScore',
      component: DemoScore
    },
    {
      path: '/exp2/readAnswer',
      name: 'ReadAnswer',
      component: ReadAnswer
    },
    {
      path: '/exp2/endInfo',
      name: 'EndInfo',
      component: EndInfo
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
    console.log(to)
    if (to.name === 'StartInfo') {
      console.log('000')
      return { x: 0, y: 0 }
    } else {
      return savedPosition
    }
  }
})
