/*
 * @Author: leung
 * @Date: 2022-02-02 19:40:25
 * @LastEditTime: 2022-02-02 21:05:30
 * @LastEditors: leung
 * @Description: 
 */

import {createRouter, createWebHistory} from 'vue-router'  

// which is lazy-loaded when the route is visited.
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')


const routes = [
  {
    path: "/",
    redirect: "/home"
 },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    component: About
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router