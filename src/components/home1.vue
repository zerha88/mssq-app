<template>
    <!-- 社区主页 -->
  <div class="home">
      <!-- 头部Top -->
      <div class="header" >
        <!-- 选择社区 -->
          <span class="mui-icon mui-icon-location location" ><span :class="mask==true?'aaa':''" @click="changeLocation">大梅沙社区</span></span>
        <!-- 信息盒子 -->
          <span class="mui-icon mui-icon-chat massageBox fr" @click="openMassageBox"></span>
          <!-- 首页隐藏其它页显示display -->
          <mt-header title="社区时讯" class="headerBox" v-show="isShowTopBar">
              <mt-button  slot="left" icon="back"  @click="goBack" class="backStyle"></mt-button>
              <mt-button icon="more" slot="right"></mt-button>
          </mt-header>
      </div>
      <!-- 轮播图 -->
      <div class="swipeContent">
        <mt-swipe :auto="2000">
          <mt-swipe-item ><img src="../assets/images/banner_2.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item ><img src="../assets/images/banner_3.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item ><img src="../assets/images/lxyz_banner.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item ><img src="../assets/images/img4.png" alt=""></mt-swipe-item>
          <mt-swipe-item ><img src="../assets/images/img5.png" alt=""></mt-swipe-item>
          <mt-swipe-item ><img src="../assets/images/img6.png" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 九宫格 -->
      <div class="mui-content gridContent">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/fuwubao">
		                <img src="../assets/images/icon_shequfuwu.png" alt="">
		                <div class="fuwubao">服务宝</div>
                    </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/linlibang">
		                <img src="../assets/images/icon_zhiyuanfuwu.png" alt="">
		                <div class="fuwubao">邻里帮</div>
                    </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/gongyiba">
		                <img src="../assets/images/icon_gongyifuwu.png" alt="">
		                <div class="fuwubao">公益吧</div>
                    </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/baishitong">
		                <img src="../assets/images/icon_bianminfuwu.png" alt="">
		                <div class="fuwubao">百事通</div>
                    </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/jigouquan">
		                <img src="../assets/images/icon_shehuizuzhi.png" alt="">
		                <div class="fuwubao">机构圈</div>
                    </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/gjtIndex">
		                <img src="../assets/images/icon_shequkuaibao.png" alt="">
		                <div class="fuwubao">观景台</div>
                    </router-link>
                </li>
		        </ul> 
		</div>
    <!-- 社区资讯信息 -->
    <div class="newsContent" >
       <!-- 党建新闻 -->
    <div class="djxw" >
      <div class="title" >
        <span class="titleLeft"><i class="treeBar">|</i>党建新闻</span>
        <span class="fr allRight">查看全部</span>
      </div>
      <div class="content" style="margin-top:20px;">
        <h4 >区人大常委会陆卫平副主任到大梅沙社区人大联络站走访调研</h4>
        <p>2018-1-5 19:20:16</p>
        <div>
          <div class="fl"><img style="width:80px;height:80px;" src="http://120.77.214.0:10000/uploads/attach/41cfd5dd-7e8e-44dc-b584-45eb78174ed1.png" alt=""></div>
          <span class="">7月21日上午，区人大常委会陆卫平副主任到大梅沙社区人大联络站走访调研</span>
        </div>
      </div> 
    </div>
    </div>


      <!-- 底部TabBar -->
      <!-- <div class="tabBar"> -->
          <!-- <router-link to="/one">tabbar</router-link> -->
    <mt-tabbar fixed v-show="isShowTabbar">
      <mt-tab-item >
        <router-link to="/home">
          <img src="../assets/images/home.png">
          <p>首页</p>
        </router-link>
      </mt-tab-item>

      <mt-tab-item>
        <router-link to="/login">
          <img src="../assets/images/personal.png">
          <p>个人中心</p>
        </router-link>
      </mt-tab-item>

    </mt-tabbar>
      <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "home1",
  data() {
    return {
      isShowTopBar:false,
      isShowTabbar:true,
      msg: "home",
      mask: "true"
    };
  },
  watch:{
    $route: function(newVal,oldVal){
      this.isShowOrHidden(newVal.path)
    }
  },
  created: function(){
    this.isShowOrHidden(this.$route.path)
  },
  methods: {
    changeLocation: function() {
      alert("===========更换社区============");
    },
    openMassageBox: function() {
      alert("打开盒子信息");
    },
    // 头部返回按钮(首页隐藏其它页显示)
  goBack: function() {
      this.$router.go(-1);
    },
  isShowOrHidden :function(path){
    if(path == '/home1'){
      this.isShowTopBar =false,
      this.isShowTabbar =true
    }else{
      this.isShowTopBar =true,
      this.isShowTabbar =false
    }

  },
    
  }
};
</script>

<style lang="scss" scoped>
// 社区主页大盒子
.home {
  width: 100%;
  height: 100%;
  // 顶部
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: white;
    // 选择社区
    .location {
      font-size: 16px;
      margin-left: 15px;
      color: #808080;
      // 遮罩层
      .mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 996;
      }
    }
    // 信息盒子
    .massageBox {
      color: #808080;
      font-size: 16px;
      margin: 17px 20px 0 0;
    }
    // 顶部首页隐藏其它页面显示
      .headerBox {
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
  }
  // 轮播图
  .swipeContent {
    height: 220px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // 九宫格
  .gridContent {
    .mui-grid-view {
      margin-top: 0px;
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
  // 社区资讯信息
  .newsContent{
    height: 100%;
    margin:15px 22px;
    .titleLeft{
      font-size: 18px;
      .treeBar{
        margin-right: 5px;
        font-weight: 900;
      }
    }
    .allRight{
      font-size: 14px;
      color: #C0C0C0;
    }


  }
  // 底部
  .tabBar{
    p{
      margin-top:2px;
      font-weight: 600;
    }
  }
  .aaa{
    background-color:red;
  }
}
</style>
