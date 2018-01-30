<template>
    <div class="serviceHelperIndex">
        <!-- 九宫格导航 -->
        <div class="navMsgContent">
             <ul >
              <li v-for="(navMsg,index) in navMsgData" :key="index">
                <router-link :to="navMsg.toPath">
                    <img :src="navMsg.img" alt="" >
                    <p>{{navMsg.title}}</p>
                  </router-link>
               </li>
            </ul>
        </div>
        <!-- 社区服务 -->
        <div class="communityService">
            <div class="title">
                <span class="span1 fl"><i>|&nbsp;&nbsp;</i>社区服务</span><span class="span2 fr">查看全部</span>
            </div>
            <div class="communityList">
                <ul>
                    <li class="clearfix">
                        <p class="p1Style">
                        <span class="span1">义务为社区居民测血压和心血</span>
                        <span class="span2 fr">查看详情</span>
                        </p>
                        <p class="p2Style">
                            <span class="fl">服务发布时间：<i>2018-01-18 15:23:06</i></span><span class="fr"><i>12</i>人阅读</span></p>
                    </li>
                    <li class="clearfix">
                        <p class="p1Style">
                        <span class="span1">大梅沙社区篮球赛火热进行时</span>
                        <span class="span2 fr">查看详情</span>
                        </p>
                        <p class="p2Style">
                            <span class="fl">服务发布时间：<i>2018-01-20 14:00:08</i></span><span class="fr"><i>18</i>人阅读</span></p>
                    </li>
                    <li class="clearfix">
                        <p class="p1Style">
                        <span class="span1">社区老人集体漫步健身活动</span>
                        <span class="span2 fr">查看详情</span>
                        </p>
                        <p class="p2Style">
                            <span class="fl">服务发布时间：<i>2018-01-23 12:16:08</i></span><span class="fr"><i>23</i>人阅读</span></p>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import oldAgeServic from "@/assets/images/menu_icon_lnfw.png";
import middleAgeServic from "@/assets/images/menu_icon_znfw.png";
import youngAgeServic from "@/assets/images/menu_icon_qnfw.png";
import juvenileAgeServic from "@/assets/images/menu_icon_snfw.png";
import babyService from "@/assets/images/menu_icon_yefw.png";
import familyservice from "@/assets/images/menu_icon_jtfw.png";
import societyEnsure from "@/assets/images/menu_icon_shbz.png";
import needMore from "@/assets/images/menu_icon_xqgc.png";
export default {
  data() {
    return {
      navMsgData: [
        { img: oldAgeServic, title: "老年服务", toPath: "/oldAgeServic" },
        { img: middleAgeServic, title: "中年服务", toPath: "/middleAgeServic" },
        { img: youngAgeServic, title: "青年服务", toPath: "/youngAgeServic" },
        { img: juvenileAgeServic, title: "少年服务", toPath: "/juvenileAgeServic"},
        { img: babyService, title: "幼儿服务", toPath: "/babyService" },
        { img: familyservice, title: "家庭服务", toPath: "/familyservice" },
        { img: societyEnsure, title: "社会保障", toPath: "/societyEnsure" },
        { img: needMore, title: "需求广场", toPath: "/needMore" }
      ]
    };
  }
};
</script>
<style lang="scss">
.serviceHelperIndex {
    background-color: white;
    // 九宫格导航
  .navMsgContent {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
          margin: 10px 0;
          width: 25%;
          text-align: center;
        img {
            width: 35px;
            height: 35px;
        }
        p {
            color:cornflowerblue;
        }
      }
    }
  }
//   社区服务
  .communityService{
      margin-top: 10px;
    //   标题
      .title{
          height: 35px;
          line-height: 35px;
          background-color: lawngreen;
          padding: 0 20px;
          .span1{
              font-weight: 900;
              i{font-weight: 900;}
          }
          .span2{
              margin-top: 3px;
              font-size: 14px;
              color: #666666;
          }
      }
      .communityList{
          margin-top: 10px;
          ul{
              li{
                  margin-bottom: 10px;
                  border-bottom: 1px solid lawngreen;
                  padding: 5px 20px;
                  .p1Style{
                      .span1{
                          color: black;
                          font-size: 16px;
                          font-weight: 900;              
                      }
                      .span2{
                          color: green;
                      }
                  }
                  .p2Style{
                      margin:10px 0;
                      span{color: gray}
                      i{color: red}
                  }
              }
          }
      }
  }
}
</style>

