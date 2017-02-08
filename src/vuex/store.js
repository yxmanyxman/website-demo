import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  articles: {
    fir: {
      author: 'yxman',
      title: '如何看待周星驰编剧的西游',
      time: '5小时前',
      read: '8888',
      comment: '288',
      like: '2323',
      pay: '2',
      src: 'url(../../static/vue-demo-daily.jpg)'
    },
    sec: {
      author: '你的王力宏',
      title: '2017春晚',
      time: '2天前',
      read: '8888',
      comment: '88',
      like: '2323',
      pay: '23',
      src: 'url(../../static/vue-demo-new.jpg)'
    },
    thi: {
      author: '南朋友',
      title: '举重妖精金福珠',
      time: '1小时前',
      read: '1688',
      comment: '500',
      like: '23',
      pay: '3',
      src: 'url(../../static/vue-demo-hot.jpg)'
    },
    fou: {
      author: '大肥猪',
      title: '如何看待高情商的人',
      time: '2天前',
      read: '38',
      comment: '56',
      like: '24',
      pay: '30',
      src: 'url(../../static/vue-demo-new.jpg)'
    }
  },
  texts: {
    Jan: {
      title: '时间真是耐人寻味的东西，总是一副风轻云淡的样子，',
      content_1: "就这样悄然的走到了早春二月",
      content_2: "这个时候，风从东方来，解冻万物，百草回芽。，",
      content_3: "风把微润的生长气息带到世间角落，",
      content_4: "也带到人心里，乍暖还寒的变化中总是令人欣喜。",
      content_5: "有时候会想，为什么那么多人喜欢春天呢，",
      content_6: "大概是因为春天在人们心中始终是个隐喻的季节...",
      author: '',
      bg: 'url(../../static/bonus_1.jpg)'
    },
    Feb: {
      title: '戏子人生',
      content_1: "“台上是一个人的孤欢，台下却是一群人的离散。”",
      content_2: "戏中，他们拼尽气力，用嘹亮的唱腔，唱响自己的孤独，",
      content_3: "用伪装的面孔，掩饰内心的无奈。台下的观众，",
      content_4: "却永远也读不出戏子真实的悲伤与喜悦。因为，他们日日笙歌，",
      content_5: "早已习惯了将灵魂与情感驻扎在别人的悲欢离合中，",
      content_6: "习惯了在他人的故事里，流淌自己的眼泪。",
      author: '',
      bg: 'url(../../static/bonus_2.jpg)'
    },
    Mar: {
      title: '《西游记》里的官场腐败现象有多严重？',
      content_1: "那玉清元始天尊、上清灵宝天尊、太清道德天尊、",
      content_2: "五炁真君、五斗星君、三官四圣、九曜真君、",
      content_3: "左辅、右弼、天王、哪吒，玄虚一应灵通，",
      content_4: "对对旌旗，双双幡盖，都捧着明珠异宝，",
      content_5: "寿果奇花，向佛前拜献。紫芝、瑶草、碧藕、金丹、",
      content_6: "交梨二颗、火枣数枚...",
      author: '',
      bg: 'url(../../static/bonus_3.jpg)'
    },
    Apr: {
      title: '同性恋在古代过得怎么样',
      content_1: "远古时期，在许多未开化民族中，同性恋自带神圣光环。",
      content_2: "因其存在的特殊性，它经常受到人民群众的尊敬和仰慕。",
      content_3: "古埃及神话中，战神赛特和法老守护神荷鲁斯，就是一对同性恋人。",
      content_4: "古埃及人便将男性之间的XXOO，看作是一种圣洁行为。",
      content_5: "古埃及后宫，贵妇们普遍信奉「百合大法好」,",
      content_6: "在潮流的驱使下，她们纷纷找到了自己的拉拉恋人。",
      author: '',
      bg: 'url(../../static/bonus_4.jpg)'
    },
    May: {
      title: '年轻人：宁鸣而死 不默而生',
      content_1: "因为好人沉默，就是对坏人纵容。",
      content_2: "坏人之所以肆无忌惮不过是因为好人惯得，我们越是沉默，",
      content_3: "他们越是猖獗。在好人普遍沉默的年代，",
      content_4: "如果有人站出来反抗那绝对是超级英雄。我曾遇到过一个姑娘，",
      content_5: "至今令我敬仰。即使世间布满灰尘，我依然愿意选择相信，",
      content_6: "总有一些不显眼的角落里有微弱的、星星点点的光芒，轻轻将人心照亮。",
      author: '',
      bg: 'url(../../static/bonus_5.jpg)'
    },
    Jun: {
      title: '父母，真的老了',
      content_1: "知乎上有一个问题“哪个瞬间，你觉得父母真的老了”",
      content_2: "之前看到这个问题的时候，想过也许未来有一天，",
      content_3: "这些情况会发生在自己身上，没有想到“未来有一天”就这么快发生在自己身上。",
      content_4: "原来白发已经开始爬满了他们的头",
      content_5: "原来疾病已经也找上了他们",
      content_6: "原来爸爸也能这么“乖”",
      author: '',
      bg: 'url(../../static/bonus_6.jpg)'
    },
    Jul: {
      title: '《不了之人，宫崎骏》',
      content_1: "日本很多人都在强调工匠精神，",
      content_2: "老爷子就是为了三秒钟的动画纠结了三个月的人",
      content_3: "76周岁的宫崎骏爷爷，问到工作的动力是什么，",
      content_4: "老爷子就说，闲下来就觉得无聊啊！",
      content_5: "把动画作为自己一生的追求，如果要做的话就做的彻底吧，",
      content_6: "最重要就是不要留下遗憾，不能过后再想当初做了那个就好了，与其这样不如做了后失败。",
      author: '',
      bg: 'url(../../static/bonus_7.jpg)'
    },
    Aug: {
      title: '过了这么多年，第一次看懂《霸王别姬》',
      content_1: "是人生如戏还是戏如人生，谁能说的清，",
      content_2: "没准早已到了人戏合一的境界，那流淌于血液中的京戏精粹，",
      content_3: "年少看《霸王别姬》，只顾探究程蝶衣对段小楼那种不能明说的感情，",
      content_4: "觉得其他不过陪衬，七年疏忽过，再观影却是步步惊心。",
      content_5: "每个角色每个场景的存在都是不可或缺，",
      content_6: "在某个瞬间一个动作或一个表情就能直抵人心。",
      author: '',
      bg: 'url(../../static/bonus_8.jpg)'
    },
    Sep: {
      title: '写给釜山行',
      content_1: "之前也看过《行尸走肉》等的丧尸片，或许因为还小",
      content_2: "对于很多东西没有那么多经历去独立地思考很多问题，",
      content_3: "顺着我们所生活的这个宇宙里独立的一条时间轴向前奔去的时候",
      content_4: "周遭的一切，包括你遇见的人，经历的事，看见的风景，",
      content_5: "都会让你对这个世界有着新的看法，而一部好的影片就是一扇窗户，",
      content_6: "让你透过这层玻璃去看外面的不同于我们生活周遭的世界。",
      author: '',
      bg: 'url(../../static/bonus_9.jpg)'
    },
    Oct: {
      title: '讲真，你有没有爱过我',
      content_1: "我真的爱上你了，你有没有爱过我一点点 ？",
      content_2: "对不起，我的心里容不下第二个人。",
      content_3: "或许这世间最难过的关，是情关！",
      content_4: "深爱过，才会放下，执念过，才会懂得，",
      content_5: "一个人一生路，情爱迢迢是修行，爱与不爱真心过就好！",
      content_6: "唯有经历，只有渡劫，方能真正放下。",
      author: '',
      bg: 'url(../../static/bonus_10.jpg)'
    },
    Nov: {
      title: '三行短诗·爱从不止三行',
      content_1: "任风筝洒脱在云里风里，",
      content_2: "任轻舟沉浮于江河湖海",
      content_3: "你却只敢偷偷藏在心底",
      content_4: "你执笔留下深情",
      content_5: "却触景伤情",
      content_6: "谁能将爱情泾渭分明",
      author: '',
      bg: 'url(../../static/bonus_11.jpg)'
    },
    Dec: {
      title: '你的温润，我用半生相赎',
      content_1: "我一直在等待，等待年关过去，等待热闹结束。",
      content_2: "这样，我和母亲的生活就可以回到过去安宁的样子。",
      content_3: "我不习惯那些人来人往的安慰，你或许懂得我。",
      content_4: "在这个早已告别书信的年代，我日复一日地把一些话诉诸笔端。",
      content_5: "园子里冬枣的核，也被我种进了一封又一封写给你的信笺里。",
      content_6: "我以为，这终究是一种对你不再的陪伴...",
      author: '',
      bg: 'url(../../static/bonus_12.jpg)'
    }
  },
  topics: {
    fir: {
      img: '../../static/vue-demo-hot.jpg',
      title: '成功学',
      content: '1984年，历经辛苦的马云终于跌跌撞撞地考入杭州师范大学外语系--他的成绩是专科分数，离本科线还差5分，但恰好本科没招满人，马云就这样幸运地上了本科，\
      并凭着满腔热情和一身侠气，当选学生会主席。大学毕业后，马云在杭州电子工业学院教英语。\
      1991年，马云初涉商海，和朋友成立海博翻译社。结果第一个月收入700元，房租2000元，遭到一致讥讽......',
      number: '98853',
      concern: '1399',
      keys: '励志、人物、马云',
      time: '20170201'
    },
    sec: {
      img: '../../static/vue-demo-new.jpg',
      title: '文学',
      content: '苏小姐领了个二十左右的娇小女孩子出来，介绍道：“这是我表妹唐晓芙。”\
      唐小姐妩媚端正的圆脸，有两个浅酒涡。\
      天生着一般女人要花钱费时、调脂和粉来仿造的好脸色，新鲜得使人见了忘掉口渴而又觉嘴馋，仿佛是好水果。她眼睛并不顶大......',
      number: '5876',
      concern: '86536',
      keys: '文学',
      time: '20170101'
    }
  },
  show: 'hot',
  show_2: 'hot',
  loginway: 'login'
}
const mutations = {
  DISPLAY_ARTICLE (state, show) {
    const article = {
      hot: {
        fir: {
          author: 'yxman',
          title: '如何看待周星驰编剧的西游',
          time: '5小时前',
          read: '8888',
          comment: '288',
          like: '2323',
          pay: '2',
          src: 'url(../../static/vue-demo-hot.jpg)'
        },
        sec: {
          author: '你的王力宏',
          title: '2017春晚',
          time: '2天前',
          read: '8888',
          comment: '88',
          like: '2323',
          pay: '23',
          src: 'url(../../static/vue-demo-new.jpg)'
        },
        thi: {
          author: '南朋友',
          title: '举重妖精金福珠',
          time: '1小时前',
          read: '1688',
          comment: '500',
          like: '23',
          pay: '3',
          src: 'url(../../static/vue-demo-hot.jpg)'
        },
        fou: {
          author: '大肥猪',
          title: '如何看待高情商的人',
          time: '2天前',
          read: '38',
          comment: '56',
          like: '24',
          pay: '30',
          src: 'url(../../static/vue-demo-new.jpg)'
        }
      },
      new: {
        fir: {
          author: '肥猫',
          title: '围城',
          time: '5小时前',
          read: '3388',
          comment: '256',
          like: '78',
          pay: '99',
          src: 'url(../../static/vue-demo-hot.jpg)'
        },
        sec: {
          author: '臭虫',
          title: '1984',
          time: '1天前',
          read: '2023',
          comment: '125',
          like: '230',
          pay: '121',
          src: 'url(../../static/vue-demo-new.jpg)'
        },
        thi: {
          author: '蚊子',
          title: '平凡的世界',
          time: '13小时前',
          read: '2356',
          comment: '22',
          like: '9',
          pay: '3',
          src: 'url(../../static/vue-demo-hot.jpg)'
        },
        fou: {
          author: '河西',
          title: '人生',
          time: '1小时前',
          read: '8',
          comment: '2',
          like: '1',
          pay: '0',
          src: 'url(../../static/vue-demo-new.jpg)'
        }
      },
      daily: {
        fir: {
          author: '尸叔',
          title: '如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
          time: '2小时前',
          read: '3750',
          comment: '70',
          like: '190',
          pay: '0',
          src: '../../static/vue-demo-new.jpg'
        },
        sec: {
          author: '尸爸',
          title: '如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
          time: '大约2小时之前',
          read: '3750',
          comment: '70',
          like: '190',
          pay: '0',
          src: '../../static/vue-demo-hot.jpg'
        },
        thi: {
          author: '尸姐',
          title: '如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
          time: '大约2小时之前',
          read: '3750',
          comment: '70',
          like: '190',
          pay: '0',
          src: '../../static/vue-demo-daily.jpg'
        }
      }
    }
    state.show = show
    state.articles = article[show]
  },
  DISPLAY_TOPIC (state, show) {
    const topic = {
      hot: {
        fir: {
          img: '../../static/vue-demo-hot.jpg',
          title: '成功学',
          content: '1984年，历经辛苦的马云终于跌跌撞撞地考入杭州师范大学外语系--他的成绩是专科分数，离本科线还差5分，但恰好本科没招满人，马云就这样幸运地上了本科，\
      并凭着满腔热情和一身侠气，当选学生会主席。大学毕业后，马云在杭州电子工业学院教英语。\
      1991年，马云初涉商海，和朋友成立海博翻译社。结果第一个月收入700元，房租2000元，遭到一致讥讽......',
          number: '98853',
          concern: '1399',
          keys: '励志、人物、马云',
          time: '20170201'
        },
        sec: {
          img: '../../static/vue-demo-daily.jpg',
          title: '文学',
          content: '苏小姐领了个二十左右的娇小女孩子出来，介绍道：“这是我表妹唐晓芙。”\
      唐小姐妩媚端正的圆脸，有两个浅酒涡。\
      天生着一般女人要花钱费时、调脂和粉来仿造的好脸色，新鲜得使人见了忘掉口渴而又觉嘴馋，仿佛是好水果。她眼睛并不顶大......',
          number: '5876',
          concern: '11',
          keys: '文学',
          time: '20170101'
        }
      },
      recommend: {
        fir: {
          img: '../../static/vue-demo-daily.jpg',
          title: '文学',
          content: '苏小姐领了个二十左右的娇小女孩子出来，介绍道：“这是我表妹唐晓芙。”\
      唐小姐妩媚端正的圆脸，有两个浅酒涡。\
      天生着一般女人要花钱费时、调脂和粉来仿造的好脸色，新鲜得使人见了忘掉口渴而又觉嘴馋，仿佛是好水果。她眼睛并不顶大...',
          number: '5876',
          concern: '11',
          keys: '围城、钱钟书、小说',
          time: '20170101'
        },
        sec: {
          img: '../../static/vue-demo-new.jpg',
          title: '心理学',
          content: '如果说哲学是对世界和人生的根本问题的思考，那么，对人生的根本问题的思考就是人生哲学。\
          什么是人生的根本问题呢?说到底是一个问题，就是人生的意义问题，人生到底有没有意义，如果有，怎样的人生才是有意义的...',
          number: '95996',
          concern: '365',
          keys: '心理、故事',
          time: '20170102'
        },
        thi: {
          img: '../../static/vue-demo-hot.jpg',
          title: '互联网+',
          content: '“互联网+”既是一个发展战略级的概念，又像是生态学上的发展规律或者总纲。\
          前者用于指导当前全行业的升级与转型，后者则以此来定义互联网的发展规律，是对互联网发展的一个总结，也是对全部基于互联网发展各行业的概括。...',
          number: '10086',
          concern: '136',
          keys: 'IT、互联网',
          time: '20170123'
        }
      }
    }
    state.show_2 = show
    state.topics = topic[show]
  },
  /*
  专栏推荐的排序方法
  */
  SORTCONTENT (state, method) {
    const temp = state.topics
    let arr = []
    let Arr = objClone(state.topics)
    switch (method) {
      case 'time':
        arr = [temp.fir.time, temp.sec.time, temp.thi.time].sort()
        break
      case 'concern':
        arr = [temp.fir.concern, temp.sec.concern, temp.thi.concern].sort()
        break
      default:
        break
    }
    let keys
    for (keys in state.topics) {
      if (Arr[keys][method] === arr[2]) {
        console.log(Arr[keys][method]+12)
        state.topics.fir = Arr[keys]
      }
      else if (Arr[keys][method] === arr[1]) {
        console.log(Arr[keys][method])
        state.topics.sec = Arr[keys]
      }
      else if (Arr[keys][method] === arr[0]) {
        console.log(Arr[keys][method])
        state.topics.thi = Arr[keys]
      }
    }
    function objClone(myObj) {
      if (typeof(myObj) !== 'object') return myObj;
      if (myObj == null) return myObj;
      var myNewObj = {};
      var i
      for (i in myObj) {
        myNewObj[i] = objClone(myObj[i]);
      }
      return myNewObj;
    }
  },
  CHANGELOGIN (state, loginway) {
    state.loginway = loginway;
  }
}
export default new Vuex.Store({
  state,
  mutations
})
