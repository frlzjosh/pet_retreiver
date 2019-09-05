import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Hub from './views/Hub'
import PersonalMessage from './views/PersonalMessage'
import Messages from './views/Messages'
import Pets from './views/Pets'
import Profile from './views/Profile'
import PetProfile from './views/PetProfile'
import AccountCreation from './views/AccountCreation'
import AccountForm from './views/AccountForm'
import PetForm from './views/PetForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', component: Login},
    {path: '/hub', component: Hub},
    {path: '/personalMessage', component: PersonalMessage},
    {path: '/messages', component: Messages},
    {path: '/profile', component: Profile},
    {path: '/pets', component: Pets},
    {path: '/createAccount', component: AccountCreation},
    {path: '/accountForm', component: AccountForm},
    {path: '/petProfile',component: PetProfile},
    {path: '/petForm',component: PetForm}
  ]
})
