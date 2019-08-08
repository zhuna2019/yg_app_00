import Vue from 'vue'
import Router from 'vue-router'

import TableBar from './components/TableBar.vue'
import Login from './views/Login.vue'
import Cart from './views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
         
          {path:'/TableBar',component:TableBar},
          {path:'/Login',component:Login},
          {path:'/Cart',component:Cart},
          
        ]
})
