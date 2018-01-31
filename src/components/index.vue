<template>
    <!-- 社区主页 -->
  <div class="home">
      <!-- 头部Top -->
      <div class="header" v-if="isShowTopBar">
        <!-- 头部HeaderBar 随path隐藏显示-->
          <mt-header :title="topTitle" class="headerBox" fixed>
              <mt-button  slot="left" icon="back"  @click="goBack" class="backStyle"></mt-button>
              <mt-button icon="more" slot="right"></mt-button>
          </mt-header>
      </div>
      <!-- 中间路由动态View -->
      <div class="routerView">
            <router-view></router-view>
      </div>
      <!-- 底部TabBar 随Path动态显示隐藏 -->
      <div class="bottomTab"  v-show="isShowTabbar">
          <ul class="titleStyleUl">
            <li v-for="(item,index) in bottomTabMsg" 
              :key="index"
              @click="changeTab(item.toPath,index)"
              :class="tabStatus==index?isActive:''">
              <img :src="item.img"></img> {{item.tabTitle}}
            </li>
          </ul>
      </div>
  </div>
</template>
<script>
import homeImg from "../assets/images/homeIndex.png";
import mineImg from "../assets/images/mineIndex.png";
export default {
  name: "home",
  data() {
    return {
      titleText:"大梅沙海岸",
      isShowTopBar:false,
      isShowTabbar:false,
      tabStatus: 0,
      topTitle:'',
      isActive: "isActived",
      // newTitle:"",
      msg: "home",
      isShow: false,
   bottomTabMsg: [
        { img: homeImg, toPath: "/", tabTitle: "首页" },
        { img: mineImg, toPath: "/loginInfo", tabTitle: "我的" },
      ]
    };
  },
// 监视路由变化
    watch:{
    $route: function(newVal,oldVal){
      this.isShowOrHidden(newVal.path)
      this.topTitle= newVal.name
    }
  },
  created: function(){
    //  this.newTitle =this.$router.currentRoute.name;
    //  console.log(this.$router)
    this.isShowOrHidden(this.$route.path)
  },
  methods:{
    changeTab:function(path,sta){
      this.$router.push(path)
      this.tabStatus=sta
    },
    changeLocation:function(){
      this.isShow = true
    },
    openMassageBox:function(){
      alert("打开盒子信息")
    },
    isHide(){
      this.isShow = false
    },
    textClick(item){
      this.titleText = item
    },
// 头部返回按钮(首页隐藏其它页显示)
  goBack: function() {
      this.$router.go(-1);
    },
  isShowOrHidden :function(path){
    if(path == '/home'||path =='/loginInfo' ){
      this.isShowTopBar =false,
      this.isShowTabbar =true
    }else{
      this.isShowTopBar =true,
      this.isShowTabbar =false
    }

  },
  },
};
</script>

<style lang="scss" >
button:enabled:active{
  background-color: transparent;
}
// 底部切换文字样式效果
.isActived{
  color:red;

}
    // 顶部
    .header{
      width: 100%;
      // position: fixed;
      height: 50px;
      line-height: 50px;
      background-color: white;
      // 选择社区
      .location{
        font-size: 16px;
        margin-left: 15px;
        color:#808080;
      }
      // 信息盒子
      .massageBox{
        color:#808080;
        font-size: 16px;
        margin:12px 20px 0 0;

      }
    }
  // 顶部显示隐藏
    .headerBox {
      background-color: red;
        width: 100%;
        position:fixed ;
        left: 0;
        top: 0;
        height: 50px;
        font-size: 16px;
    .backStyle {
      width: 60px;
      height: 30px;
      .mintui {
        font-size: 20px;
      }
    }
  }

// 遮罩层
    .mask{
          position: fixed;
          top:0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0,0,0,.3);
          z-index: 996;
        }
        // 弹出框内容
        .show{
          display: none;
        }
        
  .bottomTab {
    position: fixed;
    bottom: 0;
    // z-index:9999;
    background:white;
    width: 100%;
    height: 50px;
    line-height: 50px;
    .titleStyleUl {
      display: flex;
      li {
        text-align: center;
        font-weight:900;
        border: 1px solid rosybrown;
        border-right: none;
        border-left: none;
        flex: 1;
      }
    li:first-child {
      }
      li:last-child {
        // border-right: none;
      }
    }
  }
</style>
