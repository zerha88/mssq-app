<template>
  <div class="settingIndex">
      			<div class="mui-card" style="margin-bottom: 35px;">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell" @click="linkToChangePassword">
						<a class="mui-navigate-right">
							修改登录密码
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							修改绑定手机密码
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							关于我们
						</a>
					</li>
				</ul>
			</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
	},
	methods:{
		linkToChangePassword :function(){
			this.$router.push("/changePassword")
		}
	}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
