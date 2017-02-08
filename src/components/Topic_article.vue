<template>
  <div class="topic_article_container">
    <div class="sequence-nav" v-if="show === 'recommend'">
      <a @click="sortContent('time'), change = 'new'"
         :class="{ active: change === 'new' }">最新发布</a>&nbsp;▪&nbsp;
      <a @click="change = 'hot'"
        :class="{ active: change === 'hot' }">专题汇</a>&nbsp;▪&nbsp;
      <a @click="sortContent('concern'), change = 'concern'"
        :class="{ active: change === 'concern' }">关注最多</a>
    </div>
    <ul>
      <li v-for="topics in topic">
        <span class="topic_article_img"><img :src="topics.img"></span><!-- 头像 -->
        <div class="topic_content">
          <h5>{{ topics.title }}</h5>
          <p>{{ topics.content }}</p>
          <div class="topic_button">
            <a href="#"><i class="fa fa-fw fa-plus"></i><span>&nbsp;关注</span></a>
          </div>
          <p>
            <a href="#" style="color: #4094c7;">{{ topics.number }}篇文章</a>
            <span>&nbsp;&nbsp;▪&nbsp;&nbsp;{{ topics.concern }}k人关注</span>
            <span>&nbsp;&nbsp;▪&nbsp;&nbsp;{{ topics.time }}</span>
            <span class="topic_tag"><i class="fa fa-tags"></i>{{ topics.keys }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
  img {
    max-width: 100%;
    width: auto\9;
    height: auto;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  .topic_article_container{
    width: calc(100% - 35px);
    height: calc(100% - 180px);
    margin:45px 0 0 35px;
  }
  .topic_article_container li{
    padding: 15px 0 10px 0;
    border-bottom: 1px dashed #d9d9d9;
  }
  .topic_article_img{
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .topic_article_img:after{
    display: block;
    clear: both;
    height: 0;
    content: '';
    visibility: hidden;
  }
  .topic_article_img img{
    width: 100%;
    height: 100%;
    border: 2px solid white;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .topic_content{
    position: relative;
    margin-left: 55px;
  }
  .topic_content h5{
    margin-bottom: 3px;
  }
  .topic_content p{
    margin-bottom: 3px;
    line-height: 20px;
    color: #999999;
    font-size: 12px;
    padding-right: 120px;
  }
  .topic_button{
    position: absolute;
    right: 0;
    top:50%;
    width: 80px;
    height: 20px;
    padding: 2px 10px;
    margin-top: -13px;
    border:1px solid #49be38;
    border-radius: 50px;
    background-color: #49be38;
  }
  .topic_button a{
    display: block;
    line-height: 20px;
    width: 80px;
    color: #ffffff;
    text-align: center;
  }
  .topic_button span{
    margin-left: 3px;
    padding-left: 7px;
    border-left: 1px solid #ffffff;
  }
  .topic_tag{
    margin-left: 10px;
  }
  .sequence-nav{
    margin-bottom: 10px;
    color: #999999;
  }
  .sequence-nav .active{
    color: #000000;
    font-weight: bold;
  }
</style>
<script>
  import { sortContent } from '../vuex/actions'
  import { getTopics, getShow_2 } from '../vuex/getters'
  export default {
    data() {
      let change = 'hot'
      return { change }
    },
    vuex: {
      getters: {
        topic: getTopics,
        show: getShow_2
      },
      actions: {
        sortContent
      }
    }
  }
</script>
