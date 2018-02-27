<template>
  <div class="findPasswordIndex">
      <h4>修改密码</h4>
        <div class="inputStyle">
            <input type="number" placeholder="请输入手机号码" maxlength="11">
            <input type="text" placeholder="请输入新密码">
            <input type="text" placeholder="请输入验证码">
            <div class="butStyle">
                <button class="fl">获取验证码</button>
                <button class="fr">修改密码</button>
            </div>
        </div>
        <div style="width:100%;height:250px;background:white;"></div>
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
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.findPasswordIndex {
  background-color:white;
  h4{
    text-align: center;
    height: 50px;
    line-height: 50px;
    color:lightblue;
  }
  .inputStyle {
    width: 90%;
    margin: 15% auto;
    input {
      margin-bottom:30px; 
      border: 1px solid red;
      font-size: 14px;
      border-style: none none solid none;
      border-radius: 5px;
    }
  .butStyle{
  height: 40px;
  margin: 1% 0;
  button{
      height: 100%;
      width: 88px;
      background-color: #F8F6F7;
      border-radius: 10px;
  }
}
  }
}
</style>
