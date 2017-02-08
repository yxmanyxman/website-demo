<template>
  <div>
    <div class="showbar">
      <div class="cover-image_2"></div>
      <div class="text">
        <h1 style="text-shadow: 1px 2px 2px #000000">专栏</h1>
        <h3 style="text-shadow: 1px 2px 2px #000000">让思想碰撞飞溅吧</h3>
        <p style="text-shadow: 1px 2px 2px #000000">内容由网络作者提供，<br>如有雷同不是巧合</p>
        <a href="#"><i class="fa fa-edit"></i>&nbsp;&nbsp;新建专栏</a>
      </div>
    </div>
    <div class="article-page">
      <nav>
        <span class="search clearfloat">
          <span class="input">
            <input type="search" placeholder="搜索">
          </span>
          <span class="search-icon"><i class="fa fa-search"></i></span>
        </span>
      </nav>
      <div class="article-list">
        <ul class="btn-group">
          <li :class="{ active: show === 'hot' }">
            <a @click="displayTopic('hot')" v-link="'/topic/topicArticle'">热门</a>
          </li>
          <li :class="{ active: show === 'recommend' }">
            <a @click="displayTopic('recommend')" v-link="'/topic/topicArticle'">推荐</a>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
  .btn-group{
    margin-left: 15px;
    margin-top:20px;
  }
  .btn-group .active{
    background-color: #de533a;
  }
  .btn-group .active a{
    color: #ffffff;
  }
  .btn-group li{
    margin: 0 5px;
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
  }
</style>
<script>
  import { displayTopic } from '../vuex/actions'
  import { getShow_2 } from '../vuex/getters'
  export default {
    vuex:{
      getters: {
        show: getShow_2
      },
      actions:{
        displayTopic
      }
    }
  }
</script>
