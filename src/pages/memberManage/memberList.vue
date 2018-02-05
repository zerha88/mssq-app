<template>
  <div class="memberList">
      <!-- 成员列表 -->
      <ul class="ul">
          <li class="li" v-for="(item,index) in memberListData" :key="index">
              <input type="checkbox" v-model ='checkedMembers' :value="item.famileID">
              <img :src="item.famileImage" alt="" class="imgStyle">
              <div class="nameOrAge">
                  <p class="name">
                      <span>姓名：<i>{{item.famileName}}</i></span>
                  </p>
                  <p class="age">
                      <span>年龄：<i>{{item.age}}</i></span>
                  </p>
              </div>
          </li>
      </ul>
      <!-- 底部增删改 -->
      <div class="bottomTab">
          <div class="addMember" @click="linkToaddMember">添加成员</div>
          <div class="editInfo" @click="editInfo">编辑信息</div>
          <div class="delMember" @click="deleMember">删除成员</div>
      </div>
  </div>
</template>

<script>
// 导入公共通信中间件
import busEvent from '@/bus-event/bus-event.js'
import { Toast } from "mint-ui";
export default {
  name: "",
  data() {
    return {
      username: "",
      memberDetalis: [],
      //   checkboxStyle: checkboxed,
      memberListData: [],
      checkedMembers: []
    };
  },
  mounted: function() {
    //   获取用户名
    let getInfoData = JSON.parse(sessionStorage.getItem("saveData"))[0];
    this.username = getInfoData.username;
    // 获取成员方法调用
    this.getMemberListData();
  },
  methods: {
    //   获取成员信息
    getMemberListData: function() {
      let _myself = this;
      this.axios
        .get(
          "http://120.77.214.0:10000/wisdomCommunity-interface/login/api/getMemberList",
          {
            params: {
              username: this.username
            }
          }
        )
        .then(function(res) {
          _myself.memberListData = res.data.data;
          //   console.log(typeof(_myself.memberListData))
        })
        .catch(function(resError) {
          console.log(resError);
        });
    },
    //   获取成员详情信息
    // getMemberDetalis: function(){
    //     this.axios.get("http://120.77.214.0:10000/wisdomCommunity-interface/login/api/getMemberDetail",{
    //         params:{
    //             famileId:fdg
    //         }
    //     })
    // },
    //   跳转至添加成员列表
    linkToaddMember: function() {
      this.$router.push("/addMember");
    },
    //   编辑信息
    editInfo: function() {
      let membersData = this.memberListData;
      //   console.log(membersData)
      //   console.log(this.checkedMembers[0])
      let checkedMembersID = this.checkedMembers[0];
      if (this.checkedMembers.length == 0) {
        Toast("请勾选需要编辑的成员");
      } else if (this.checkedMembers.length == 1) {
        //   获取成员详情信息
        this.axios.get(
          "http://120.77.214.0:10000/wisdomCommunity-interface/login/api/getMemberDetail",
          {
            params: {
              famileId: checkedMembersID
            }
          }
        )
        // console.log(2222)
        .then(function(res) {
        //   console.log(res.data);
         let memberDetalisData =res.data
        // console.log(11111)
        busEvent.$emit("sendData",memberDetalisData)
        });
        
        this.$router.push("/editPage");
      } else {

      }
    },
    deleMember: function() {}
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.memberList {
  margin-top: 20px;
  // 成员列表
  ul {
    margin-top: 10px;
    li {
      margin: 10px 0;
      margin-left: 10px;
      
      .checkboxStyle {
        width: 20px;
        vertical-align: middle;
        height: 20px;
      }
      .imgStyle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0px 15px;
        vertical-align: middle;
      }
      .nameOrAge {
        display: inline-block;
        vertical-align: middle;
        .name {
          margin-bottom: 5px;
        }
      }
    }
  }
  //   底部增删改
  .bottomTab {
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #e5e4e5;
    justify-content: space-around;
  }
}
</style>
