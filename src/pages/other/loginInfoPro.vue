<template>
  <div class="loginInfo">
      <div class="topContent">
          <div class="content">
            <div class="leftImg">
              <img src="../../assets/images/user.png" alt="">
            </div>
            <div class="rightInfo">
              <p class="name">张三 <span>$</span></p>
              <p>海滨公园</p>
              <p>A+，有你更美好！</p>
            </div>
            <div class="setting">设置</div>
          </div>
      </div>
      <div class="gridNav">
        <ul>
          <li v-for="(item,index) in gridData" :key="index">
              <router-link :to=item.toPath>
                <img :src='item.img' alt="">
                <p>{{item.title}}</p>
              </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
// GridImg
import gridImg1 from "../../assets/images/list_icon_wdbm.png";
import gridImg2 from "../../assets/images/list_icon_wdfw.png";
import gridImg3 from "../../assets/images/list_icon_wdfc.png";
import gridImg4 from "../../assets/images/list_icon_wdxq.png";
import gridImg5 from "../../assets/images/list_icon_wdsq.png";
import gridImg6 from "../../assets/images/list_icon_wdzy.png";
import gridImg7 from "../../assets/images/list_icon_wdjt.png";
export default {
  name: "",
  data() {
    return {
      gridData: [
        { img: gridImg1, title: "我的报名", toPath: "/mySignUp" },
        { img: gridImg2, title: "我的服务", toPath: "/myService" },
        { img: gridImg3, title: "我的风采", toPath: "/myStyle" },
        { img: gridImg4, title: "我的需求", toPath: "/myNeed" },
        { img: gridImg5, title: "我的社区", toPath: "/myCommunity" },
        { img: gridImg6, title: "我的志愿", toPath: "/myVolunteer" },
        { img: gridImg6, title: "我的家庭", toPath: "/myHome" },
      ]
    };
  },
  methods:{

  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.loginInfo {
  width: 100%;
  height: 100%;
  background-color: white;
  .topContent {
    width: 100%;
    height: 170px;
    background: url("../../assets/images/img_grzx.png") no-repeat top;
    background-size: 100% 100%;
    overflow: hidden;
    .content {
      margin: 40px 0 0 20px;
      height: 100px;
      width: 100%;
      display: flex;
      .leftImg {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .rightInfo {
        margin: 15px;
        flex: 1;
        .name{
          font-size: 22px;
        }
        p{
          margin:5px 0;
          span{
            position: relative;
            top:-10px;
            left: 5px;
            font-size: 16px;
          }
        }
      }
      .setting{
        position: fixed;
        top: 30px;
        right: 40px;
      }
    }
  }
  .gridNav{
    ul{
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      li{
        margin: 10px 0;
        text-align: center;
        width: 33%;
        img{
          width: 30px;
          height: 30px;
        }
        p{
          margin: 5px 0;
          text-align: center;
        }
      }
    }
  }
}
</style>
