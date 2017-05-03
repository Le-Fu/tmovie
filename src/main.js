import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import routes from './routes';
import * as filters from './filters';

// 引入全部组件mint插件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './common/css/transition.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Mint);

//注册过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

// 创建路由实例
const router = new VueRouter({
  // mode: 'history',
  routes
});


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
