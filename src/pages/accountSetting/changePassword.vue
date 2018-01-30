<template>
  <div class="changePassword">
        <!-- <mt-header title="修改密码" class="headerBox">
            <mt-button  slot="left" icon="back"  @click="goBack" class="backStyle"></mt-button>
        </mt-header> -->
    <div class="content">
        <form class="mui-input-group">
            <div class="mui-input-row">
                <input type="text" class="mui-input-clear mui-input" placeholder="请输入原密码" v-model='oldPassword'>
            </div>
            <div class="mui-input-row">
                <input type="password" class="mui-input-clear mui-input" placeholder="请输入新密码"  v-model="password">
            </div>
            <div class="mui-input-row">
                <input type="password" class="mui-input-clear mui-input" placeholder="请再次输入新密码" v-model="oncePassword" >
            </div>
        </form>
    </div>
    <div class="changeButton">
         <button @click='toChangPassword'>修改密码</button>
    </div>
  </div>
</template>

<script>
import md5 from 'md5';
export default {
  name: '',
  data () {
    return {
      username: '',
      oldPassword: '',
      password: '',
      oncePassword: '',
    }
  },
  // 进入页面时获取用户名
  created:function(){
        let getInfoData =JSON.parse(sessionStorage.getItem('saveData'))[0]
        this.username = getInfoData.username
        // console.log(this.username)
  },
    
    methods: {
    // 返回
    goBack: function() {
      this.$router.go(-1);
    },
    toChangPassword: function(){
       
      this.axios.get('http://120.77.214.0:10000/wisdomCommunity-interface/login/api/updatePass',{
        params:{
          username:this.username,
          password:md5(this.password)

        }
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>


.changeButton{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    button{
        color: black;
        background-color:royalblue;                
        width: 100%;
        height: 50px;
        font-size: 16px;
        line-height: 48px;
        text-align: center;
    }
}
</style>
