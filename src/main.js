import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入第三方组件库 mint ui
// 1:完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
// 2:单独引入mint-ui组件库中样式文件
import "mint-ui/lib/style.css"
// 3:将mint-ui注册Vue实例中
Vue.use(MintUI)
// // 4将字体图标引入当前项目中
// import "./font/iconfont.css"
// 5引入axios第三方ajax模块
// import axios from 'axios'
// 6配置axios基础路径
// axios.defaults.baseURL="http://127.0.0.1:3000/"
// 7配置axios 保存session信息
// axios.defaults.withCredentials=true
// 8将axios注册vue实例中
// 由于axios不支持use 将实例添加到vue原型
// Vue.prototype.axios=axios;






Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
