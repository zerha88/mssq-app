<template>
<div class="InfoContent">
   <!-- 个人信息 -->
    <div class="loginInfo">
      <!-- 用户信息 -->
      <div class="userInfo" >
          <img src="../../assets/images/banner_3.jpg" alt="">
          <p class="name">{{getInfoData.username}}</p>
          <p class="location">大梅沙社区</p>
          <!-- 2018-01-07 10:27:11 -->
          <p class="lastLogin">最后登录时间：<span>{{getInfoData.lastLoginTime}}</span></p>
      </div>
   </div>
   <!-- 服务管理 -->
   <div class="serviceManage">
      <!-- title -->
      <div class="title">
          <span class="spanLeft" >服务管理</span>
          <span class="spanRight fr">查看全部</span>
      </div>
      <div class="serviceContent manageCommon">
          <ul>
              <li>
                  <img src="../../assets/images/waitCheck.png" alt="">
                  <p>待审核</p>
              </li>
              <li @click="LInktoServiceDetails">
                  <img src="../../assets/images/ing.png" alt="">
                  <p>进行中</p>
              </li>
              <li>
                  <img src="../../assets/images/ending.png" alt="">
                  <p>已结束</p>
              </li>
              <li>
                  <img src="../../assets/images/other.png" alt="">
                  <p>其它</p>
              </li>
          </ul>
      </div>
   </div>
   <!-- 账号管理 -->
   <div class="accountManage">
      <!-- title -->
      <div class="title">
          <span class="spanLeft" >账号管理</span>
      </div>
      <!-- 账号管理 -->
      <div class="manageCommon">
          <ul>
              <li @click="LinkToAccountSetting">
                  <img src="../../assets/images/setting.png" alt="">
                  <p>账号设置</p>
              </li>
              <li @click="LinkToServiceDetails">
                  <img src="../../assets/images/zhiyuanzhe.png" alt="">
                  <p>自愿者申请</p>
              </li>
              <li @click="LinkToMemberList">
                  <img src="../../assets/images/member.png" alt="">
                  <p>成员管理</p>
              </li>
              <li @click="LinkToNeedService">
                  <img src="../../assets/images/question.png" alt="">
                  <p>需求服务</p>
              </li>
          </ul>
      </div>
   </div>
   <!-- 退出登录  -->
   <button class="buttomLeaveLogin" @click="OutLogin">退出登录</button>       
</div>
</template>

<script>
export default {
  name: "loginInfo",
  data() {
    return {
      msg: "",
      getInfoData:[]
    };
  },
  created:function(){
     let getInfoStoreData=JSON.parse(sessionStorage.getItem('saveData'))[0];
      this.getInfoData = getInfoStoreData;
    //   console.log(this.getInfoData)
  },
  methods:{
    //   退出登录
      OutLogin: function(){
         this.$router.push("/login");
      },
      LinkToMemberList :function(){
         this.$router.push("/memberList");
      },
      LinkToAccountSetting :function(){
          this.$router.push("/settingIndex");
      },
      LinkToNeedService :function(){
          this.$router.push("/needServiceIndex");
      },
      LinkToServiceDetails:function(){
          this.$router.push("/volunteerApplyIndex");
      },
      LInktoServiceDetails:function(){
          this.$router.push("/ServiceDetails")
      }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.InfoContent {
  // 个人信息
  .loginInfo {
    overflow: hidden;
    width: 100%;
    height: 200px;
    text-align: center;
    background: url("../../assets/images/bgImg.png") no-repeat;
    background-size: 100% 100%;
    .userInfo {
      margin-top: 50px;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
      .name {
        color: #ffffff;
      }
      .location {
        color: #ffffff;
      }
      .lastLogin {
        color: #ffffff;
      }
    }
  }
  // 服务管理
  .serviceManage,.accountManage{
      margin:18px 12px 0 12px;
      .title{
          padding-bottom: 5px;
          border-bottom: 1px solid #959595;
          .spanLeft{
              font-size: 16px;
          }
          .spanRight{
              font-size: 14px;
              color: #6C6C6C;
          }
      }
      .manageCommon{
          ul{
            //   margin: 8px 0px;
            padding: 8px 0px;
            border-bottom: 8px solid #e5e5e5;
            text-align: center;

              li{
                  img{
                      width: 30px;
                      height: 30px;
                  }
                  width: 23%;
                  display: inline-block;
              }
          }
      }
  }
  .buttomLeaveLogin{
    //   margin-top: 25px;
      position: fixed;
      bottom: 50px;
    //   border-radius: 10px;
      width: 100%;
      height: 50px;
      font-size: 18px;
      color: #ffffff;
      background-color:#999;
  }
}
</style>
