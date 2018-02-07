<template>
<!-- 增加成员页面 -->
  <div class="addMember">
      <!-- 增加成员内容 -->
      <div class="addMemberContent">
        <form v-model="addMemberData">
          <!-- 上传图片/填写名字/电话号码 -->
          <div class="uploadOrNameOrTelphone">
              <div class="upload">
                  <!-- 头像 -->
                  <img :src="result" alt="">
                  <!-- 上传头像按钮 -->
                  <div class="labelStyle">
                    <label for="uploadImg" >上传图片</label>
                  </div>
                  <input type="file" accept=".png,.jpg,.jpeg" id="uploadImg" name="上传图片" @change="getUploadImg">
              </div>
              <div class="nameOrTelphone">        
                  <span for="name" >姓名：</span>
                  <input type="text" id="name" v-model="addMemberData.famileName">
                  <br>
                  <span for="telphone" >手机号码：</span>
                  <input type="number" id="telphone" maxlength="11" v-model="addMemberData.telephone">
              </div>
          </div>
        </form>
          <!-- 其它信息 -->
          <div class="other">
            <!-- 与我关系 -->
            <div class="relation">
              <label >与我关系：</label>
                <select name="" id="" > 
                  <option value="1">父母</option>
                  <option value="2">兄弟姐妹</option>
                  <option value="3">子女</option>
                  <option value="4">其它</option>
                </select>
            </div>
            <!-- 身份证号码 -->
            <div class="idNumber">
                <label >身份证号码：</label>
                <input type="number" maxlength="18" v-model="addMemberData.identityID">
            </div>
            <!-- 详细住址 -->
            <div class="address">
                <label >详细住址：</label>
                <input type="text" v-model="addMemberData.address">
            </div>
          </div>         
      </div>
      <div  class="bottomTab">
          <div class="regret" @click="regretedClick">
              取消
          </div>
          <div class="enter" @click="enterClick">
              确定
          </div>
      </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
// // 导入公共通信中间件
// import busEvent from '@/bus-event/bus-event.js'
export default {
  name: "",
  data() {
    return {
      userId: "",
      result: "",
      addMemberData:{
        famileName: "",
        telephone: "",
        identityID: "",
        address: ""
      }
    };
  },
  // created(){
  //   // console.log(2222)
  //   busEvent.$on("sendData",function(data){
  //     console.log(data)
  //   })
  // },
  mounted(){
    // 获取用户userId
      let getInfoStoreUserId=JSON.parse(sessionStorage.getItem('saveData'))[0].username;
      this.userId = getInfoStoreUserId;
      // console.log(this.userId)
  },
  methods: {
    getUploadImg: function(event) {
      // console.log(event)
      let file = event.target.files[0];
      let fr =new FileReader();
      if (window.FileReader && event.target.files.length!==0) {
        fr.onloadend = function(e) {
          let result =e.target.result
          let _self =this
          let base64Data ="base64Data=" + encodeURIComponent(result)
          let linKURL ="http://120.77.214.0:10000/"
          this.axios.post("http://120.77.214.0:10000/wisdomCommunity-interface/upload/uploadAttach",base64Data)
          .then(res => {
            // console.log(res)
            _self.result =linKURL+res.data.data
            
          })
          .catch(err => {
            // console.log(err)
          })
        }.bind(this);
        fr.readAsDataURL(file);
      }
    },
    // 取消
    regretedClick: function() {
      this.$router.go(-1);
    },
    // 确定
    enterClick: function(){
      this.addMemberData.userId =this.userId;
      this.addMemberData.famileImage =this.result;
      this.axios.get("http://120.77.214.0:10000/wisdomCommunity-interface/login/api/updateMember",{params:this.addMemberData
}).then(res=>{
  if(res.success==true){
    Toast('提交成功');
  }else{
    Toast('信息有误，请重新填写！');
  }
})
.catch(err=>{
  console.log("请求有误！")
})
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.addMember {
  // 添加成员内容
  margin: 10px;
  .addMemberContent {
    //   上传图片/填写名字/电话号码
    .uploadOrNameOrTelphone {
      height: 150px;
      display: flex;
      .upload {
        width: 100px;
        height: 150px;
        text-align: center;
        img {
          background-image: url("../../assets/images/user.png");
          display: inline-block;
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .labelStyle {
          background-color: #3399f3;
          border-radius: 4px;
          padding: 3px;
          margin-top: 5px;
        }
        input {
          display: none;
        }
      }
    }
    // 姓名和手机号码
    .nameOrTelphone {
      flex: 1;
      margin-left: 10px;
    }
  }
  // 其它信息
  .other {
    margin-top: 10px;
    // 与我关系
    .relation {
      height: 76px;
      select {
        font-size: 16px;
        height: 40px;
        line-height: 40px;
      }
    }
  }
  .bottomTab {
    border-top: 1px solid #e5e4e5;
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    display: flex;
    text-align: center;
    .regret {
      flex: 1;
    }
    .enter {
      flex: 1;
    }
  }
}
</style>
