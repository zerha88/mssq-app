<template>
  <div class="registerBox">
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">注册</h1>
		</header>
		<div class="mui-content">
			
			<form class="mui-input-group" v-model="sendData">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" v-model="sendData.username" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" v-model="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
				<div class="mui-input-row">
					<label>确认</label>
					<input id='password_confirm' type="password"  class="mui-input-clear mui-input" placeholder="请确认密码">
				</div>
				<div class="mui-input-row">
					<label>姓名</label>
					<input  type="text" class="mui-input-clear mui-input" v-model="sendData.famileName" placeholder="请输入您的真实姓名">
				</div>
        <div class="mui-input-row">
					<label>身份证</label>
					<input id='text' type="text" v-model="sendData.identityID" class="mui-input-clear mui-input" placeholder="请输入您的身份证号码">
				</div>
				
        <div class="mui-input-row">
					<!-- v-model="sendData.communityId" -->
					<input type="text"   placeholder="请输入所属社区">
					<label>所属社区：</label>
					<select name="select" id="select_k1"  class="xla_k">
            <option value="2" v-model="sendData.type">大梅沙社区</option>
            <option value="3">小梅沙社区</option>
            <option value="4">滨海社区</option>
            <option value="4">东海岸社区</option>
          </select>
				</div>
				<div class="mui-input-row">
					<input  type="text" class="mui-input-clear mui-input" v-model="sendData.address" placeholder="请输入详细地址">
				</div>
				<div class="mui-input-row">
					<input  type="text" class="mui-input-clear mui-input" v-model="sendData.telephone" placeholder="请输入手机号码" >
				</div>
				<!-- <button>获取手机验证码</button><input type="text" placeholder="短信认证码"> -->
			</form>
			<div class="mui-content-padded">
				<button id='reg' class="mui-btn mui-btn-block mui-btn-primary" @click='toReg'>注册</button>
			</div>
		</div>
  </div>
</template>

<script>
import md5 from "md5";
import { Toast } from 'mint-ui';
export default {
  name: "",
  data() {
    return {
			password:"",
      sendData: {
        username: "",
        // password1: "",
        telephone: "",
        address: "",
        famileName: "",
        type: "4",
        communityId: "4",
        identityID: ""
      }
    };
  },
  methods: {
    toReg: function() {
			// let newPassword =md5(this.sendData.password);
			// this.sendData.password=newPassword;
			this.sendData.password = md5(this.password);
      this.axios
        .get(
          "http://120.77.214.0:10000/wisdomCommunity-interface/login/api/register",
          { params: this.sendData }
        )
        .then(function(res) {
					if(res.data.success==true){
						Toast({
            message: "注册成功",
            iconClass: "icon icon-success"
          });
					}
					else{
						Toast('填写信息格式有误，请重新填写');
					}

        })
        .catch(function() {
          console.log();
        });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.area {
  margin: 20px auto 0px auto;
}
.mui-input-group:first-child {
  margin-top: 20px;
}
.mui-input-group label {
  width: 22%;
}
.mui-input-row label ~ input,
.mui-input-row label ~ select,
.mui-input-row label ~ textarea {
  width: 78%;
}
.mui-checkbox input[type="checkbox"],
.mui-radio input[type="radio"] {
  top: 6px;
}
.mui-content-padded {
  margin-top: 25px;
}
.mui-btn {
  padding: 10px;
}
</style>
