import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.axios= axios;


// 导入组件库
// mint
import Mint from 'mint-ui'
// mui
import MuiJs from '../node_modules/muiv3/dist/js/mui.js'
import MuiCss from '../node_modules/muiv3/dist/css/mui.css'

// 导入样式
// mint
import 'mint-ui/lib/style.css'

// rem适配=>todo
// import Rem from '@/assets/rem/rem.js'

// 使用
Vue.use(Mint);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
