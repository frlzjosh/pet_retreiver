import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Hub from './views/Hub'
import Message from './views/Message'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', component: Login},
    {path: '/hub', component: Hub},
    {path: '/message', component: Message}
  ]
})
