import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import job from '@/components/job/job'
import message from '@/components/message/message'
import mine from '@/components/mine/mine'
import company from '@/components/company/company'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/job'
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/job',
      name: 'job',
      component: job
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/company',
      name: 'company',
      component: company
    }
  ]
})
