<template>
  <div class="registerBox">
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">注册</h1>
		</header>
		<div class="mui-content">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
				<div class="mui-input-row">
					<label>确认</label>
					<input id='password_confirm' type="password" class="mui-input-clear mui-input" placeholder="请确认密码">
				</div>
				<div class="mui-input-row">
					<label>姓名</label>
					<input  type="text" class="mui-input-clear mui-input" placeholder="请输入您的真实姓名">
				</div>
        <div class="mui-input-row">
					<label>身份证</label>
					<input id='text' type="text" class="mui-input-clear mui-input" placeholder="请输入您的身份证号码">
				</div>
				
        <div class="mui-input-row">
					<label>社区：</label>
					<select name="select" id="select_k1" class="xla_k">
            <option value="">大梅沙社区</option>
            <option value="">小梅沙</option>
            <option value="">区民</option>
          </select>
				</div>
				<div class="mui-input-row">
					<input  type="text" class="mui-input-clear mui-input" placeholder="请输入详细地址">
				</div>
				<div class="mui-input-row">
					<input  type="text" class="mui-input-clear mui-input" placeholder="请输入手机号码" >
				</div>
				<button>获取手机验证码</button><input type="text" placeholder="短信认证码">
			</form>
			<div class="mui-content-padded">
				<button id='reg' class="mui-btn mui-btn-block mui-btn-primary">注册</button>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      username: "",
      password: "",
      telephone: "",
      address: "",
      famileName: "",
      type: "",
      communityId: "",
    };
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
