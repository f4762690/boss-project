import Vue from 'vue'
import Router from 'vue-router'
import message from '@/components/message/message'
import mine from '@/components/mine/mine'
import company from '@/components/company/company'
import lookFor from '@/components/lookFor/lookFor.vue';
import job from '@/components/job/job.vue';
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
      component: job,
    },
    {
      path: '/job/lookFor',
      name: 'lookFor',
      components: {
        'default':resolve =>require(["../components/job/job.vue"], resolve),
        'otherPage':resolve => require(["../components/lookFor/lookFor.vue"], resolve)
      }
    },{
      path: '/job/searchPage',
      name: 'searchPage',
      components: {
        "default": resolve => require(["../components/job/job.vue"], resolve),
        "otherPage": resolve => require(["../components/searchPage/searchPage.vue"], resolve)
      }
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
