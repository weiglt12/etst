import Vue from 'vue';
import Router from 'vue-router';
import MainApp from './views/MainApp.vue';
import Node from './views/Node.vue'
import Nodes from './views/Nodes.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/app',
      name: 'mainapp',
      component: MainApp,
      children: [
        {
          path: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'nodes',
          component: Nodes
        },
        {
          path: 'nodes/:id',
          component: Node,
        }
    ],
    }
  ],
});
