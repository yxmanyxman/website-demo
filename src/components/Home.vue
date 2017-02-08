<template>
  <div>
    <div class="showbar">
      <div class="cover-image"></div>
      <div class="text">
        <h1 style="text-shadow: 1px 2px 2px #000000">随笔</h1>
        <h3 style="text-shadow: 1px 2px 2px #000000">分享故事，沟通想法</h3>
        <p style="text-shadow: 1px 2px 2px #000000">一个基于个人内容分享的地方</p>
        <a href="#"><i class="fa fa-home"></i>&nbsp;&nbsp;提笔写文章</a>
      </div>
    </div>
    <div class="article-page">
      <nav>
        <span class="nav-text fir"><a href="#">发现</a></span>
        <span class="nav-text"><a v-link="'../bonus'">2017精选</a></span>
        <span class="search clearfloat">
          <span class="input">
            <input type="search" placeholder="搜索">
          </span>
        <span class="search-icon"><i class="fa fa-search"></i></span>
        </span>
      </nav>
      <div class="article-list">
        <ul class="btn-group">
          <li :class="{active: show === 'hot'}">
            <a @click="displayArticle('hot')" v-link="'/home/article'">热门</a>
          </li>
          <li :class="{active: show === 'new'}">
            <a @click="displayArticle('new')" v-link="'/home/article'">新上榜</a>
          </li>
          <li :class="{active: show === 'daily'}">
            <a @click="displayArticle('daily')" v-link="'/home/article'">日报</a>
          </li>
          <li :class="{active: show === 'reward'}">
            <a @click="displayArticle('hot')" v-link="'/home/article'">有奖活动</a>
          </li>
          <li :class="{active: show === 'publish'}">
            <a @click="displayArticle('publish')" v-link="'/home/article'">简书出版</a>
          </li>
          <li :class="{active: show === 'video'}">
            <a @click="displayArticle('video')" v-link="'/home/article'">博客</a>
          </li>
        </ul>
        <router-view></router-view>
      </div>
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
  import { displayArticle} from '../vuex/actions'
  import { getShow } from '../vuex/getters'
  export default{
    vuex: {
      getters: {
        show: getShow
      },
      actions: {
        displayArticle
      }
    }
  }
</script>
