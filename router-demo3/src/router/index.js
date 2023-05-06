import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloJiuyue from "../views/HelloJiuyue.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: "/helloJiuyue",
    component: HelloJiuyue
  },
  {
    path: "/news",
    name: "NewsView",
    component:() => import("../views/NewsView.vue")
  },
  {
    path:"/newDetails",
    name:"NewDetailsView",
    component:()=>import("../views/NewDetailsView.vue")
  }

]

const router = new VueRouter({
  routes
})

export default router
