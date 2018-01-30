<template>
<!-- 志愿者申请页面 -->
  <div class="volunteerApplyIndex">
      <!-- 自愿者申请内容 -->
    <form v-model="volunteerData">
      <div class="volunteerApplyContent">
          <!-- 上传图片/填写名字/电话号码 -->
          <div class="uploadOrNameOrTelphone">
              <div class="upload">
                  <!-- 头像 -->
                  <img :src="result" alt="" >
                  <!-- 上传头像按钮 -->
                  <div class="labelStyle">
                    <label for="uploadImg" >上传图片</label>
                  </div>
                  <input type="file" accept=".png,.jpg,.jpeg" id="uploadImg" name="上传图片" @change="getUploadImg">
              </div>
              <!-- 姓名/手机号码 -->
              <div class="nameOrTelphone">        
                  <span for="name" >姓名：</span>
                  <input type="text" id="name" v-model="volunteerData.username">
                  <br>
                  <span for="telphone" >手机号码：</span>
                  <input type="number" id="telphone" maxlength="11">
              </div>
          </div>
          <!-- 其它信息 -->
          <div class="other">
            <!-- 身份证号码 -->
            <div class="idNumber">
                <label >身份证号码：</label>
                <input type="number" maxlength="18">
            </div>
            <!-- 紧急联系人姓名 -->
            <div class="quicklyContactName">
                <label >紧急联系人姓名：</label>
                <input type="text" id="name" v-model="volunteerData.contacts">
            </div>
            <!-- 紧急联系人电话 -->
            <div class="quicklyContactNumber">
                <label >紧急联系人电话：</label>
                <input type="number" id="name" minlength="11" v-model="volunteerData.contactsTel">
            </div>
            <!-- 详细住址 -->
            <div class="address">
                <label >详细住址：</label>
                <input type="text">
            </div>
            <!-- 志愿者说明 -->
            <div class="volunteerExplain">
                <label >志愿者说明：</label>
                <textarea name="" id="" cols="10" rows="3" placeholder="自愿者自我介绍，不超过100字，将附于志愿者服务介绍中！" v-model="volunteerData.synopsis"></textarea>    
            </div>
          </div>         
      </div>
    </form>
      <div  class="bottomTab">
          <div class="volunteerApplyClick" @click="volunteerApplyClick">
              志愿者认证申请
          </div>
      </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: "",
  data() {
    return {
      result: "",
      username:'',
      volunteerData:{
        contacts:'',
        contactsTel:'',
        synopsis:''
      }
    };
  },
  created:function(){
    // 获取用户名
      let getInfoStoreData=JSON.parse(sessionStorage.getItem('saveData'))[0].username;
      this.username = getInfoStoreData;
      // console.log(this.username)
  },
  methods: {
    // 上传头像
    getUploadImg: function(event) {
      let file = event.target.files[0];
      let fr =new FileReader();
      if (window.FileReader && event.target.files.length!==0) {
        fr.onloadend = function(e) {
          let result =e.target.result
          let _self =this
          // base64编码解析
          let base64Data ="base64Data=" + encodeURIComponent(result)
          let linKURL ="http://120.77.214.0:10000/"
          this.axios.post("http://120.77.214.0:10000/wisdomCommunity-interface/upload/uploadAttach",base64Data)
          .then(res => {
              _self.result =linKURL+res.data.data
          })
          .catch(err => {
            console.log(err)
          })
        }.bind(this);
        fr.readAsDataURL(file);
      }
    },
    // 志愿者认证申请
    volunteerApplyClick: function() {
      this.volunteerData.username=this.username
        this.axios.get('http://120.77.214.0:10000/wisdomCommunity-interface/login/api/addVolunteer',{
          params:this.volunteerData
        }).then(function(res){
          console.log()
            if(res.data.success==true){
               Toast({message: '提交成功，待审核',iconClass: 'icon icon-success'});
            }
            else{
              Toast('格式有误，请重新填写！');
            }
        })
    },
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.volunteerApplyIndex {
  margin: 10px;
  .volunteerApplyContent {
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
    .volunteerExplain{
        textarea{
            font-size: 16px;
        }
    }
  }
  .bottomTab {
    background-color:peru;
    width: 100%;
    height: 50px;
    color: #3399f3;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    text-align: center;
  }
}
</style>
