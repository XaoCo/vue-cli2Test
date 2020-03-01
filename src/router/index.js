import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index/index'
import A from '@/components/Index/A'
import B from '@/components/Index/B'
import A1 from '@/components/Index/A1'
Vue.use(Router)

export default new Router({
  // mode: ' history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    {
      path: '/a',
      name: 'A',
      component: A
      //  添加子路由
    },
    {
      path: '/b',
      component: B
    },
    {
      path: '/a1',
      component: A1
    }
  ]
})
