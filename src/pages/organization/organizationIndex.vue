<template>
  <div class="organizationIndex">
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
  </div>
</template>
<script>
import all from "@/assets/images/list_icon_qb.png";
import business from "@/assets/images/list_icon_qyzr.png";
import oldMan from "@/assets/images/list_icon_lr.png";
import education from "@/assets/images/list_icon_jy.png";
import environment from "@/assets/images/list_icon_hjbh.png";
import animal from "@/assets/images/list_icon_dwfl.png";
import disabled from "@/assets/images/list_icon_cz.png";
import societyNew from "@/assets/images/list_icon_shcx.png";
import societyDevelop from "@/assets/images/list_icon_shfz.png";
import threeService from "@/assets/images/list_icon_slfw.png";
import culture from "@/assets/images/list_icon_wh.png";
import religion from "@/assets/images/list_icon_zjwh.png";
export default{
  data(){
    return{
  navMsgData: [
        {img: all,title: "全部",toPath: "/all"},
        {img: business,title: "企业责任",toPath: "/business"},
        {img: oldMan,title: "老人教育",toPath: "/oldMan"},
        {img: education,title: "教育",toPath: "/education"},
        {img: environment,title: "环境保护",toPath: "/environment"},
        {img: animal,title: "动物服务",toPath: "/animal"},
        {img: disabled,title: "残障",toPath: "/disabled"},
        {img: societyNew,title: "社会创新",toPath: "/societyNew"},
        {img: societyDevelop,title: "社会发展",toPath: "/societyDevelop"},
        {img: threeService,title: "三农服务",toPath: "/threeService"},
        {img: culture,title: "文化",toPath: "/culture"},
        {img: religion,title: "宗教",toPath: "/religion"},
      ]
    }
  }
}
</script>
<style lang="scss">
  .organizationIndex{
    .navMsgContent{
      margin-top: 5px;
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          padding: 15px 0;
          background-color: aquamarine;
          margin: 5px 2.5%;
          width: 28%;
          text-align: center;
          img{
            width: 50%;
            margin-bottom: 5px;
          }
          p{
            font-weight: 900;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
