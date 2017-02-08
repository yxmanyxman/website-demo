<template>
  <div class="container">
    <div class="sidebar">
      <ul class="dropdown">
        <li :class="{ active: show === 'home' }">
          <a @click="show = 'home'" v-link="'/home/article'"><i class="fa fa-home"></i><span>&nbsp;&nbsp;首页</span></a>
        </li>
        <li :class="{ active: show === 'topic' }">
          <a @click="show = 'topic'" v-link="'/topic/topicArticle'"><i class="fa fa-th"></i><span>&nbsp;&nbsp;专栏</span></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-download"></i><span>&nbsp;&nbsp;联系我</span></a>
        </li>
      </ul>
      <ul class="nav-user">
        <li>
          <a href="#"><i class="fa fa-font"></i><span>&nbsp;&nbsp;显示模式</span></a>
        </li>
        <li>
          <a v-link="'/login'"><i class="fa fa-sign-in"></i><span>&nbsp;&nbsp;登录</span></a>
        </li>
      </ul>
    </div>
    <div class="home">
      <router-view transition = 'display' transition-mode = 'out-in'></router-view>
    </div>
    <div class="rightbar">
      <nav>
        <a v-link="'/login'" @click="changeLogin('login')"><i class="fa fa-sign-in"></i><span>&nbsp;登录</span></a>
        <a v-link="'/login'" @click="changeLogin('register')"><i class="fa fa-user"></i><span>&nbsp;注册</span></a>
      </nav>
    </div>
  </div>
</template>
<style>
  .display-transition{
    transition: all 0.5s;
  }
  .display-leave{
    opacity: 0;
    transform: translateX(50px);
  }
  .display-enter{
    opacity: 1;
  }
  .container{
    height: 100%;
  }
  .dropdown .active{
    background-color: #e78170;
  }
  .dropdown .active a{
    color: #ffffff;
  }
  .rightbar a{
    padding-right: 10px;
  }
  @media screen and (max-width: 1100px){
    .home{
      width: calc(100% - 80px);
      margin-right: 0;
    }
  }
  @media screen and (max-width: 1300px){
    .home{
      width: calc(100% - 240px);
      margin-left: 45px;
    }
    .nav-user li{
      width: 45px;
      height: 30px;
      overflow: hidden;
    }
    .sidebar{
      transition: all 0.5s;
      width: 45px;
      overflow: hidden;
    }
    .sidebar li{
      padding: 20px 0;
    }
    .sidebar li a{
      padding: 0 auto;
      margin:0 auto;
    }
    .sidebar i{
      font-size: 30px;
    }
  }
</style>
<script>
  import store from './vuex/store'
  import { changeLogin } from './vuex/actions'
  export default {
    store,
    data () {
      return {
        show: 'home'
      }
    },
    vuex: {
      actions: {
        changeLogin
      }
    }
  }
</script>
