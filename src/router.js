import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import ModifyPassword from './views/base/ModifyPassword.vue'
import StudentManage from './views/base/StudentManage.vue'
import ClassManage from './views/base/ClassManage.vue'
import TeacherManage from './views/base/TeacherManage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
     },
     {
      path: '/ModifyPassword',
      name: 'ModifyPassword',
      component: ModifyPassword
      // component: () => import( './views/ModifyPassword.vue')
     },
     {
      path: '/StudentManage',
      name: 'StudentManage',
      component: StudentManage
      //component: () => import( './views/StudentManage.vue')
     },
     {
      path: '/ClassManage',
      name: 'ClassManage',
      component: ClassManage
     // component: () => import( './views/ClassManage.vue')
     },
     {
      path: '/TeacherManage',
      name: 'TeacherManage',
      component: ModifyPassword
      //component: () => import( './views/TeacherManage.vue')
     }
     
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/home.vue')
    // }
  ]
})
