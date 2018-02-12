<template>
  <div class="loginInfo">
      <div class="topContent">
          <div class="content">
            <div class="leftImg">
              <img src="../../assets/images/user.png" alt="">
            </div>
            <div class="rightInfo">
              <p class="name">张三 <span>$</span></p>
              <p>海滨公园</p>
              <p>A+，有你更美好！</p>
            </div>
            <div class="setting" @click="settingClick">设置</div>
          </div>
      </div>
      <!-- 遮罩层 -->
      <div :class="isShowMaskOrContent==true?'mask':''" @click="clickMaskHidden">
        <!-- 弹框内容 -->
      <div :class="isShowMaskOrContent==false?'hiddenContent':''">
        <div class="maskContent">
          <ul>
            <li>修改登录密码</li>
            <li>修改手机号码</li>
            <li>退出登录</li>
          </ul>
        </div>
      </div>
      </div>
      <div class="gridNav">
        <ul>
          <li v-for="(item,index) in gridData" :key="index">
              <router-link :to=item.toPath>
                <img :src='item.img' alt="">
                <p>{{item.title}}</p>
              </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
// GridImg
import gridImg1 from "../../assets/images/list_icon_wdbm.png";
import gridImg2 from "../../assets/images/list_icon_wdfw.png";
import gridImg3 from "../../assets/images/list_icon_wdfc.png";
import gridImg4 from "../../assets/images/list_icon_wdxq.png";
import gridImg5 from "../../assets/images/list_icon_wdsq.png";
import gridImg6 from "../../assets/images/list_icon_wdzy.png";
import gridImg7 from "../../assets/images/list_icon_wdjt.png";
export default {
  name: "",
  data() {
    return {
      isShowMaskOrContent:false,
      gridData: [
        { img: gridImg1, title: "我的报名", toPath: "/mySignUp" },
        { img: gridImg2, title: "我的服务", toPath: "/myService" },
        { img: gridImg3, title: "我的风采", toPath: "/myStyle" },
        { img: gridImg4, title: "我的需求", toPath: "/myNeed" },
        { img: gridImg5, title: "我的社区", toPath: "/myCommunity" },
        { img: gridImg6, title: "我的志愿", toPath: "/myVolunteer" },
        { img: gridImg6, title: "我的家庭", toPath: "/myHome" },
      ]
    };
  },
  methods:{
    settingClick:function(){
      this.isShowMaskOrContent=true;
    },
    clickMaskHidden:function(){
      this.isShowMaskOrContent=false;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
// 遮罩层
.mask{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 997;
}
// 遮罩层内容
.maskContent{
  position: absolute;
  right: 40px;
  top:60px;
  ul{
    padding-top:3px;
    width: 160px;
    height: 100px;
    border-radius: 3px;
    background-color: white;
    li{
      margin:8px 8px 0 15px;
    }
  }
}
// 隐藏
.hiddenContent{
  display: none;
}
.loginInfo {
  width: 100%;
  height: 100%;
  background-color: white;
  .topContent {
    width: 100%;
    height: 170px;
    background: url("../../assets/images/img_grzx.png") no-repeat top;
    background-size: 100% 100%;
    overflow: hidden;
    .content {
      margin: 40px 0 0 20px;
      height: 100px;
      width: 100%;
      display: flex;
      .leftImg {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .rightInfo {
        margin: 15px;
        flex: 1;
        .name{
          font-size: 22px;
        }
        p{
          margin:5px 0;
          span{
            position: relative;
            top:-10px;
            left: 5px;
            font-size: 16px;
          }
        }
      }
      .setting{
        color: aqua;
        position: fixed;
        top: 30px;
        right: 40px;
      }
    }
  }
  .gridNav{
    ul{
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      li{
        margin: 10px 0;
        text-align: center;
        width: 33%;
        img{
          width: 30px;
          height: 30px;
        }
        p{
          margin: 5px 0;
          text-align: center;
        }
      }
    }
  }
}
</style>
