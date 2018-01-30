<template>
    <!-- 社区主页 -->
  <div class="home">
      <!-- 头部Top -->
      <div class="header" v-show="isShowTopBar">
          <!-- 头部首页隐藏其它页显示测试-->
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
      <div class="tabBar" >
          <mt-tabbar v-show="isShowTabbar" fixed>
              <mt-tab-item id="" >
                <div @click="linkToHome">
                   <span slot="icon" class="mui-icon mui-icon-home"></span>
                   <p>首页</p>
                </div>
              </mt-tab-item>
          
            <mt-tab-item id="">

              <div  @click="linkToLogin">
                 <span slot="icon" class="mui-icon mui-icon-contact"></span>
                 <p>个人中心</p>
              </div>
             </mt-tab-item>
        </mt-tabbar>
      </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // test
      isShowTopBar:false,
      isShowTabbar:false,
      topTitle:'',
      // newTitle:"",
      msg: "home",
      isShow: false,
      liObj:{
        1:'1111',
        2:'2222',
        3:'3333',
        4:'4444',
        5:'5555'
      },
      titleText:"大梅沙海岸"
      
    };
  },
  // test
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
    linkToHome:function(){
      this.$router.push("/")
    },
    linkToLogin:function(){
      this.$router.push("/loginInfo")
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
    // test
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
        
</style>
