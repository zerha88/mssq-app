<template>
    <!-- 社区主页 -->
  <div class="home">
      <!-- 头部Top -->
      <div class="header">
        <!-- 选择社区 -->
          <span class="mui-icon mui-icon-location location" @click="changeLocation" >{{titleText}}</span>
        <!-- 信息盒子 -->
          <span class="mui-icon mui-icon-chat massageBox fr" @click="openMassageBox"></span>

          <!-- test  头部首页隐藏其它页显示测试-->
          <!-- v-show="isShowTopBar" -->
          <!-- <mt-header title="社区时讯" class="headerBox" >
              <mt-button  slot="left" icon="back"  @click="goBack" class="backStyle"></mt-button>
              <mt-button icon="more" slot="right"></mt-button>
          </mt-header> -->
      </div>
      <!-- 中间路由动态View -->
      <div class="routerView">
            <router-view></router-view>
      </div>
      <!-- 底部TabBar -->
      <div class="tabBar"  >
          <!-- <router-link to="/one">tabbar</router-link> -->
            <!-- test -->
          <!-- v-show="isShowTabbar" -->
          <mt-tabbar fixed >
             <mt-tab-item id="">
                 <span slot="icon" class="mui-icon mui-icon-home"></span>
                 <p>首页</p>
             </mt-tab-item>
            <mt-tab-item id="">
              <!-- test -->
              <!-- <router-link to="/testHidden"> -->
                 <span slot="icon" class="mui-icon mui-icon-contact"></span>
                 <p>个人中心</p>
                 <!-- </router-link> -->
             </mt-tab-item>
        </mt-tabbar>
      </div>
      <div :class="isShow==true?'mask':''" @click="isHide">
        <div :class="isShow==false?'show':''" style=" width:50%;height:50%;border-radius:6px solid red;margin:20px auto;z-index:999;background:white;">
          <!-- <h4>标题</h4> -->
          <ul >
            <li v-for="(item,index) in liObj" @click="textClick(item)" style="list-style: none;" >{{item}}</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // test
      // isShowTopBar:true,
      // isShowTabbar:false,
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
  //   watch:{
  //   $route: function(newVal,oldVal){
  //     this.isShowOrHidden(newVal.path)
  //   }
  // },
  // created: function(){
  //   this.isShowOrHidden(this.$route.path)
  // },
  methods:{
    changeLocation:function(){
      this.isShow = true
      // alert("===========更换社区============")
    },
    openMassageBox:function(){
      alert("打开盒子信息")
    },
    isHide(){
      this.isShow = false
    },
    textClick(index){
      this.titleText = index
    },
    // test
        // 头部返回按钮(首页隐藏其它页显示)
  // goBack: function() {
  //     this.$router.go(-1);
  //   },
  // isShowOrHidden :function(path){
  //   if(path == '/home'){
  //     this.isShowTopBar =true,
  //     this.isShowTabbar =true
  //   }else{
  //     this.isShowTopBar =true,
  //     this.isShowTabbar =false
  //   }

  // },
  },
};
</script>

<style lang="scss" scoped>
    // 顶部
    .header{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: white;
      // 选择社区
      .location{
        font-size: 16px;
        margin-left: 15px;
        color:#808080;
        // 遮罩层
        
      }
      // 信息盒子
      .massageBox{
        color:#808080;
        font-size: 16px;
        margin:12px 20px 0 0;

      }
    }
  // test
  //       .headerBox {
  //         background-color: red;
  //       width: 100%;
  //       position:fixed ;
  //       left: 0;
  //       top: 0;
  //       height: 50px;
  //       font-size: 16px;
  //   .backStyle {
  //     width: 60px;
  //     height: 30px;
  //     .mintui {
  //       font-size: 20px;
  //     }
  //   }
  // }


    .mask{
          position: fixed;
          top:0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0,0,0,.3);
          z-index: 996;
        }
        .show{
          display: none;
        
         

        }
        
</style>
