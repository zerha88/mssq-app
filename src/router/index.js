import Vue from 'vue'
import Router from 'vue-router'
// import Navigation from 'vue-navigation'
// 引入组件
import index from '@/components/index' //主页路由机制
import home from '@/components/home' //主页
import login from '@/pages/loginOrReg/login' //登录
import gjtIndex from '@/pages/gjt/gjtIndex' //观景台
import loginInfo from '@/pages/loginOrReg/loginInfo' //个人信息
import register from '@/pages/loginOrReg/register' //注册
import articleDetailsIndex from '@/pages/articleDetalis/articleDetailsIndex' //文章详情
// 账户设置
import settingIndex from '@/pages/accountSetting/settingIndex' //设置主页
import changePassword from '@/pages/accountSetting/changePassword' //修改密码
// 成员管理
import memberList from '@/pages/memberManage/memberList'//成员列表
import addMember from '@/pages/memberManage/addMember'//增加成员
import editPage from '@/pages/memberManage/editPage'//编辑成员
// 便民服务
import convenienceSeviceIndex from '@/pages/convenienceSevice/convenienceSeviceIndex'//便民主页
import societyProtect from '@/pages/convenienceSevice/societyProtect'//社保查询
import accumulationFunds from '@/pages/convenienceSevice/accumulationFunds'//公积金查询
import express from '@/pages/convenienceSevice/express'//快递查询
import busFind from '@/pages/convenienceSevice/busFind'//公交查询
import hotel from '@/pages/convenienceSevice/hotel'//酒店查询
import flight from '@/pages/convenienceSevice/flight'//机票查询
import map from '@/pages/convenienceSevice/map'//地图查询
import weather from '@/pages/convenienceSevice/weather'//天气查询
// 服务+
import serviceHelperIndex from '@/pages/serviceHelper/serviceHelperIndex'//服务主页
// 机构+
import organizationIndex from '@/pages/organization/organizationIndex'//机构主页
// 邻里+
import neighborHelpIndex from '@/pages/neighborHelp/neighborHelpIndex'//邻里主页
// 公益+
import publicBenefitIndex from '@/pages/publicBenefit/publicBenefitIndex'//公益主页
// 需求服务
import needServiceIndex from '@/pages/needService/needServiceIndex'//需求主页
import responseNeed from '@/pages/needService/responseNeed'//发起需求
import serviceIntroduce from '@/pages/needService/serviceIntroduce'//服务介绍
import serviceDetails from '@/pages/needService/serviceDetails'//服务详情
// 自愿者申请
import volunteerApplyIndex from '@/pages/volunteerApply/volunteerApplyIndex'//志愿者申请

// 个人登录主页
import loginInfoPro from '@/pages/other/loginInfoPro'//个人登录主页

// toast
import navTabs from '@/toast/nav-tabs'//导航切换卡
import tabTest from '@/toast/tab-test'//测试



// 使用路由
Vue.use(Router)
// 路由匹配
export default new Router({
  routes: [
 // toast
        {
          path: '/tabTest',
          name: 'tabTest',
          component: tabTest,
        },
        {
          path: '/navTabs',
          name: 'navTabs',
          component: navTabs,
        },
{
  path: '/',
  component:index,
  meta: {
    keepAlive: true // 需要被缓存
  },
  children:[
// 重定向
  {
    path:"/",
    redirect: {name: 'home'},
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  // 观景台主页
  {
    path: '/gjtIndex',
    name: '观景台',
    component: gjtIndex,
  },
//成员列表
  {
    path: '/memberList',
    name: '成员管理',
    component: memberList,
    },
  //增加成员
  {
    path: '/addMember',
    name: '添加成员',
    component: addMember,
  },
  // 编辑成员
  {
    path: '/editPage',
    name: '编辑信息',
    component: editPage,
  },
  // 志愿者认账申请
  {
    path: '/volunteerApplyIndex',
    name: '志愿者申请',
    component: volunteerApplyIndex,
  },

  // 文章详情动态页
  {
    path: '/details/:id',
    name: '社区资讯',
    component: articleDetailsIndex,
    props: true
  },
  // 用户登录信息
  {
    path: '/loginInfo',
    name: 'loginInfo',
    component: loginInfo,
  },
  {
    //修改密码
    path: '/changePassword',
    name: '修改密码',
    component: changePassword,
  },
  {
    // 设置主页
    path: '/settingIndex',
    name: '设置',
    component: settingIndex,
  },
    // 便民服务
  {
    path: '/convenienceSeviceIndex',
    name: '便民服务',
    component: convenienceSeviceIndex,
  },
    // 社保查询
  {
    path: '/societyProtect',
    name: '社保查询',
    component: societyProtect,
  },
    // 公积金查询
  {
    path: '/accumulationFunds',
    name: '公积金查询',
    component: accumulationFunds,
  },
    // 快递查询
  {
    path: '/express',
    name: '快递查询',
    component: express,
  },
    // 公交查询
  {
    path: '/busFind',
    name: '公交查询',
    component: busFind,
  },
    // 酒店查询
  {
    path: '/hotel',
    name: '酒店查询',
    component: hotel,
  },
    // 机票查询
  {
    path: '/flight',
    name: '机票查询',
    component: flight,
  },
    // 地图查询
  {
    path: '/map',
    name: '地图查询',
    component: map,
  },
    // 天气查询
  {
    path: '/weather',
    name: '天气查询',
    component: weather,
  },
  // 服务+
  {
    path: '/serviceHelperIndex',
    name: '服务宝',
    component: serviceHelperIndex,
  },
  
  // 需求服务
  {
    path: '/needServiceIndex',
    name: '需求服务',
    component: needServiceIndex,
  },
  
  // 发起需求
  {
    path: '/responseNeed',
    name: '发起需求',
    component: responseNeed,
  },
  // 服务介绍
  {
    path: '/serviceIntroduce',
    name: '服务介绍',
    component: serviceIntroduce,
  },
  // 服务详情
  {
    path: '/serviceDetails',
    name: '服务详情',
    component: serviceDetails,
  },
  // 机构+
  {
    path: '/organizationIndex',
    name: '机构+',
    component: organizationIndex,
  },
  // 邻里+
  {
    path: '/neighborHelpIndex',
    name: '邻里+',
    component: neighborHelpIndex,
  },
  // 公益+
  {
    path: '/publicBenefitIndex',
    name: '公益+',
    component: publicBenefitIndex,
  },
    ]
    },
  // 账户设置
    // login
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    // 注册
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    // 登录个人中心
    {
      path: '/loginInfoPro',
      name: 'loginInfoPro',
      component: loginInfoPro,
    },
  ]
})
