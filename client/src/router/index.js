import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Game from '../views/Game.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import DesignTesting from '../views/DesignTesting.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game/:id',
    name: 'Game',
    component: Game
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/designtesting',
    name: 'DesignTesting',
    component: DesignTesting
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
