import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from 'components/Home/Home';
import About from 'components/About/About'
import Serve from 'components/Serve/Serve'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/serve',
      name: 'Serve',
      component: Serve
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
