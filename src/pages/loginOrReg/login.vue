<template>
  <div class="login">
    		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">登录</h1>
		</header>
<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='userName' v-model="userName" type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" v-model="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<form class="mui-input-group">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						自动登录
						
						<div id="autoLogin" class="mui-switch mui-active">
							<div class="mui-switch-handle"></div>
						</div>
					</li>
				</ul>
			</form>
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="toLogin">登录</button>
				<div class="link-area"><a id='reg' @click="toRegister">注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
			<div class="mui-content-padded oauth-area">

			</div>
		</div>
  </div>
</template>

<script>
import axios from 'axios';
import md5 from 'md5';
import { Toast } from 'mint-ui';
import qs from 'qs'

export default {
  name: 'login',
  data () {
    return {
	  msg: '',
	  userName: '',
	  password: '',
    }
  },
  methods:{
		toRegister: function(){
	  	this.$router.push('/register')
  		},
	  toLogin:function(){
		  let myself = this;
		  axios.get("http://120.77.214.0:10000/wisdomCommunity-interface/login/api/do_login",{
			  params:{
				  "username":this.userName,
				  "password":md5(this.password)
			  }
		  })
		  .then(function(res){
			//   console.log(res)
			  if(res.data.success==true){
				  sessionStorage.setItem("saveData",JSON.stringify(res.data.data));
				//   console.log(sessionStorage)
				// console.log(sessionStorage.getItem('saveData'));
				// console.log(saveData)
				//   提示
				Toast({message: '登录成功',iconClass: 'icon icon-success'});
				  myself.$router.push("/loginInfo")

				//   console.log(res)
			  }
			  else{
				  Toast({
  				message: '密码错误，请重新输入',
  				iconClass: 'icon icon-error'
						});
				  myself.$router.push("/login")
				  myself.userName=""
				  myself.password=""
				  

			  }
		  })
		  .catch(function(resError){
			  console.log(resError)
			//   if(resError.msg==false){
			// 	  $router.push("/login")
			//   }
		  })
	  }
  },


  
}
</script>

<style scoped>
  			.area {
				margin: 20px auto 0px auto;
			}
			
			.mui-input-group {
				margin-top: 10px;
			}
			
			.mui-input-group:first-child {
				margin-top: 20px;
			}
			
			.mui-input-group label {
				width: 22%;
			}
			
			.mui-input-row label~input,
			.mui-input-row label~select,
			.mui-input-row label~textarea {
				width: 78%;
			}
			
			.mui-checkbox input[type=checkbox],
			.mui-radio input[type=radio] {
				top: 6px;
			}
			
			.mui-content-padded {
				margin-top: 25px;
			}
			
			.mui-btn {
				padding: 10px;
			}
			
			.link-area {
				display: block;
				margin-top: 25px;
				text-align: center;
			}
			
			.spliter {
				color: #bbb;
				padding: 0px 8px;
			}
			
			.oauth-area {
				position: absolute;
				bottom: 20px;
				left: 0px;
				text-align: center;
				width: 100%;
				padding: 0px;
				margin: 0px;
			}
			
			.oauth-area .oauth-btn {
				display: inline-block;
				width: 50px;
				height: 50px;
				background-size: 30px 30px;
				background-position: center center;
				background-repeat: no-repeat;
				margin: 0px 20px;
				border: solid 1px #ddd;
				border-radius: 25px;
			}
			
			.oauth-area .oauth-btn:active {
				border: solid 1px #aaa;
			}
			
			.oauth-area .oauth-btn.disabled {
				background-color: #ddd;
			}
</style>
