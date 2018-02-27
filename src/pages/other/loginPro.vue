<template>
  <div class="loginProIndex">
      <div class="loginPro">
          <h4>登录A+，体验更多功能</h4>
      </div>
      <div class="inputStyle">
          <input type="number" placeholder="请输入手机号码" maxlength="11">
          <input type="text" placeholder="请输入密码">
            <button>登录</button>
            <div class="forgerPassword">
                <span class=" spanStyle" @click="linkToFindPassword">找回密码</span>
            </div>
            <div class="deviceFrom">
                <a class="weixin"><img src="../../assets/images/icon_wx.png" alt=""></a>
                <a class="telephone" @click="linkToRegTelphone"><img src="../../assets/images/icon_sj.png" alt=""></a>
            </div>
      </div>
       <div :class="isShowMaskOrContent==true?'mask':''" @click="isHide">
            <div :class="isShowMaskOrContent==false?'hiddenContent':''" >
            <div class="maskContent" >
                <div class="content">
                    <div class="h4Style">
                        <h4>登录A+，体验更多功能</h4>
                    </div>
                    <input type="number" placeholder="请输入手机号码" maxlength="11">
                    <input type="text" placeholder="请输入验证码">
                    <div class="butStyle">
                        <button class="fl">获取验证码</button>
                        <button class="fr">登录</button>
                    </div>
                </div>
            </div>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: "",
  
  data() {
    return {
      msg: "",
      isShowMaskOrContent:false
    };
  },
  methods:{
      linkToRegTelphone:function(){
          this.isShowMaskOrContent =true;
      },
      isHide:function(){
          this.isShowMaskOrContent =false;
      },
      linkToFindPassword:function(){
          this.$router.push("/findPassword")
      }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 996;
}
.hiddenContent{
    display: none;
}
.loginProIndex {
    overflow-x:hidden;
  .loginPro {
    h4 {
      text-align: center;
      margin: 15% 0;
    }
  }
  .inputStyle {
    width: 70%;
    margin: 0 auto;
    input {
      border: 1px solid red;
      border-radius: 5px;
      font-size: 14px;
      border-style: none none solid none;
    }
    input:nth-child(2) {
      margin-top: 10px;
    }
    button {
      width: 100%;
      margin-top: 20px;
      height: 40px;
      background-color: #999;
    }
    .forgerPassword {
      text-align: right;
      margin-top: 10px;
      .spanStyle {
        font-size: 14px;
        color: #c0c0c0;
      }
    }
    .deviceFrom {
      display: flex;
      text-align: center;
      margin: 20px 0;
      .weixin {
        flex: 1;
      }
      .telephone {
        flex: 1;
      }
    }
  }
  .maskContent{
      position: absolute;
      right: 5%;
      top:1%;
      width: 90%;
      height: 45%;
      margin: 11% auto;
      background-color:white;
      .content{
          overflow: hidden;
          width: 80%;
          margin: 10% auto;
        h4{
            text-align: center;
            margin: 8% auto;
        }
    input {
      border: 1px solid red;
      border-radius: 5px;
      font-size: 14px;
      border-style: none none solid none;
    }
    input:nth-child(2) {
      margin-top: 10px;
    }
      .butStyle{
          height: 48px;
          margin: 5% 0;
          button{
              height: 100%;
              width: 88px;
              background-color: #F8F6F7;
          }
      }
      }

  }
}
</style>
