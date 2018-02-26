<template>
    <!-- 社区主页 -->
  <div class="home">
      <!-- 头部Top -->
      <div class="header" >
        <!-- 选择社区 -->
          <span class="mui-icon mui-icon-location location" >
            <span @click="changeLocation">{{titleText}}</span>
          </span>
        <!-- 信息盒子 -->
          <span class="mui-icon mui-icon-chat massageBox fr" @click="openMassageBox"></span>
      </div>
      <!-- 遮罩层弹窗内容左边 -->
      <div :class="isShowMaskOrContent==true?'mask':''" @click="isHide">
        <div :class="isShowMaskOrContent==false?'hiddenContent':''">
          <!-- 选项内容 -->
          <div class="maskContent">
              <h4 class="h4Title">请选择所在社区</h4>
              <ul>
                <li v-for="(item,index) in chooseMsgs" @click="chooseItem(item.MsgTitle)">
                    <h4>{{item.MsgTitle}}</h4>
                    <p>{{item.Msgcontent}}</p>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <!-- 右边弹框内容 -->
      <!-- @click="clickDialogHidden" -->
  <div :class="isShowMaskDialog==true?'maskDialog':''" @click="isHiddenDialog">
    <div :class="isShowMaskDialog==false?'hiddenContent':''">
      <div class="rightDialog">
        <ul>
          <li><i>&</i>我的消息</li>
          <li><i>%</i>分享给朋友</li>
          <li><i>#</i>分享给朋友圈</li>
          <li><i>*</i>扫一扫</li>
        </ul>
      </div>
    </div>
  </div>
      <!-- 轮播图 -->
      <div class="swipeContent">
        <mt-swipe :auto="2000">
           <mt-swipe-item v-for="(item,index) in swipeData" :key="index">
             <img :src="item"/>
      	   </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 九宫格 -->
      <div class="gridContent">
        <ul>
            <li v-for="(item,index) in gridData" :key="index">
              <router-link :to=item.toPath>
                <img :src='item.img' alt="" >
                <p>{{item.title}}</p>
              </router-link>
            </li>
        </ul>
		</div>
    <!-- 社区资讯信息 -->
    <div class="newsContent">
       <!-- 党建新闻 -->
        <div class="djxw" >
          <div class="title" >
            <span class="titleLeft"><i class="treeBar">|</i>党建新闻</span>
            <span class="fr allRight">查看全部</span>
          </div>
           <article-util :ComtentUtil="djywData"></article-util>
        </div>
    </div>
  </div>
</template>
<script>
import articleUtil from "@/components/articleUtil"
// 轮播图
import img1 from "../assets/images/banner_2.jpg";
import img2 from "../assets/images/banner_3.jpg";
import img3 from "../assets/images/lxyz_banner.jpg";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
// 九宫格
import gridImg1 from "../assets/images/menu_icon_dj.png";
import gridImg2 from "../assets/images/menu_icon_fwb.png";
import gridImg3 from "../assets/images/menu_icon_jgc.png";
import gridImg4 from "../assets/images/menu_icon_hd.png";
import gridImg5 from "../assets/images/menu_icon_bst.png";
import gridImg6 from "../assets/images/menu_icon_llj.png";
import gridImg7 from "../assets/images/menu_icon_gyb.png";
import gridImg8 from "../assets/images/menu_icon_zx.png";
export default {
  name: "home",
  data() {
    return {
      titleText:'大梅沙社区',
      isShowMaskOrContent:false,
      isShowMaskDialog: false,
      isShowTopBar: false,
      djywData:[],
      isShowTabbar: true,
      mask: "true",
      chooseMsgs: [
        {MsgTitle: "小梅沙社区", Msgcontent: "小梅沙村、旅游中心住宅小区" },
        {MsgTitle: "大梅沙社区",Msgcontent: "大梅沙村、爱琴湾、八十步海域、天涛轩、湖心导"},
        {MsgTitle: "滨海社区", Msgcontent: "上坪、成坑" },
        {MsgTitle: "东海岸社区",Msgcontent: "万科东海岸、云顶天海、海语东园、东部华侨城物业"}
      ],
      swipeData:{img1:img1,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6},
      gridData: [
        { img: gridImg1, title: "党建+", toPath: "/serviceHelperIndex" },
        { img: gridImg2, title: "服务宝", toPath: "/neighborHelpIndex" },
        { img: gridImg3, title: "机构圈", toPath: "/publicBenefitIndex" },
        { img: gridImg4, title: "工作站", toPath: "/convenienceSeviceIndex" },
        { img: gridImg5, title: "百宝盒", toPath: "/organizationIndex" },
        { img: gridImg6, title: "邻里帮", toPath: "/gjtIndex" },
        { img: gridImg7, title: "公益吧", toPath: "/gybIndex" },
        { img: gridImg8, title: "资讯通", toPath: "/zxtIndex" },
      ]
    };
  },
  components:{
    // 文章列表组件
    articleUtil:articleUtil
  },
  created: function() {
    // 获取党建新闻数据
    this.getDjywData()
  },
  methods: {
    // 选择区域
    changeLocation: function() {
      this.isShowMaskOrContent =true;
    },
    getDjywData:function(){
      this.axios.get("http://120.77.214.0:10000/wisdomCommunity-interface/cms/api/article/list",{
        params:{
          columnId:"djyw",
          currentPage:2,
          pageSize:2,
          isPage:1
        }
      }).then(res=>{this.djywData =res.data.data})
      .catch(err=>{
        console.log(err)
      })
    },
    // 区域选中项
    chooseItem: function(item){
      this.titleText = item;
    },
    // 隐藏遮罩层
    isHide:function(){
      this.isShowMaskOrContent =false;
    },
    // 右边弹出框
    openMassageBox: function() {
      this.isShowMaskDialog =true;
    },
    // 隐藏弹出框
    isHiddenDialog:function(){
      this.isShowMaskDialog=false;
    },
  }
};
</script>

<style lang="scss" scoped>
// 顶部右边弹出框
.rightDialog{
  position: absolute;
  border: 1px solid darkgrey;
  border-radius: 3px;
  right: 20px;
  top: 40px;
  background-color: white;
  width: 180px;
  height: 120px;
  z-index: 999;
  ul{
    li{
      margin: 8px;
      i{
        margin:0 15px;
      }
    }
  }
}
.maskDialog{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 996;
}
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
      position: fixed;
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
  // 遮罩层弹框内容
  .mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 996;
  }
    // 弹框内容
    .maskContent {
      width: 70%;
      height: 50%;
      margin: 60px auto;
      background: white;
      .h4Title {
        background: #999;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      ul {
        margin-top: 10px;
        li {
          margin-bottom: 10px;
        }
      }
    }
    .hiddenContent{
      display: none;
    }
  // 轮播图
  .swipeContent {
    height: 190px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // 九宫格
  .gridContent {
      ul{
        display: flex;
        flex-wrap:wrap;
        li{
          margin: 10px 0;
          width: 25%;
          text-align: center;
          img{
            width: 40px;
            height: 40px;
          }
          p{
            font-size: 16px;
          }
        }
      }
  }
  // 社区资讯信息
  .newsContent {
    height: 100%;
    margin: 15px 22px;
    .titleLeft {
      font-size: 18px;
      .treeBar {
        margin-right: 5px;
        font-weight: 900;
      }
    }
    .allRight {
      font-size: 14px;
      color: #c0c0c0;
    }
  }
  // 底部
  .tabBar {
    p {
      margin-top: 2px;
      font-weight: 600;
    }
  }
}
</style>
