import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import home from '@/components/home' //主页
import one from '@/components/one' //one
import login from '@/pages/loginOrReg/login' //login
import gjtIndex from '@/pages/gjt/gjtIndex' //gjtIndex
import home1 from '@/components/home1' //home1
import loginInfo from '@/pages/loginOrReg/loginInfo' //loginInfo
import register from '@/pages/loginOrReg/register' //register/*  */
import articleDetailsIndex from '@/pages/articleDetalis/articleDetailsIndex' //articleDetailsIndex




// 使用路由
Vue.use(Router)


// 路由匹配
export default new Router({
  routes: [
    // 默认重定向
    {
      path: '/',
      redirect: {
        name: 'home1'
      }
    },
      
    // login
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },

    // {
    //   path: '/aticleDetails1',
    //   name: 'aticleDetails1',
    //   component: aticleDetails1,
    // },
    {
      path: '/loginInfo',
      name: 'loginInfo',
      component: loginInfo,
    },
    //home1
    {
      path: '/home1',
      name: 'home1',
      component: home1,
    },
    //gjtIndex
    {
      path: '/gjtIndex',
      name: 'gjtIndex',
      component: gjtIndex,
    },
    // 文章详情动态页
    {
      path: '/details/:id',
      name: 'articleDetailsIndex',
      component: articleDetailsIndex,
      props: true
    },
    // home组件
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
          path: '/home',
          redirect: {
            name: 'one',
          },
        },
        {
          path: '/one',
          name: 'one',
          component: one,
        }

      ]
    },

  ]
})
