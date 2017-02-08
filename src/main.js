import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerMap from './routers'
/*
注册路由
*/
Vue.use(VueRouter)
const router = new VueRouter()
router.mode = 'html5'
/*
* 路由钩子
*/
router.beforeEach((transition) => {
  if (transition.to.auth) {
  } else {
    transition.next()
  }
})
router.afterEach(function (transition) {
  console.log('成功浏览到:' + transition.to.path)
})
/*
路由重定向,页面不存在时跳转到此
*/
router.redirect({
  '*':"/home/article"
})
/*
启动了路由的应用，创建一个App实例并挂载到app元素上
*/
routerMap(router)
router.start(App, 'app')
/*
路由跳转，打开页面看见文章
*/
/*
router.go('/home/article')
*/
