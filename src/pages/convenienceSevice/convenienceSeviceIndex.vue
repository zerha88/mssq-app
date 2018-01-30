<template>
  <div class="convenienceSevice">
      <div class="lifeHelperContent">
          <h4 class="h4Style">生活助手</h4>
          <div class="navMsg">
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
      <div class="convenienInfo">
        <h4 class="h4Style">便民资讯</h4>
        <div class="convenienContent">
          <ul>
            <li>
              <h5>居家养老服务补助对象及标准</h5>
              <p>2018-1-20 18:00:08</p>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import Express from '@/assets/images/快递.png'
import BusFind from '@/assets/images/公交.png'
import Map from '@/assets/images/地图.png'
import Weather from '@/assets/images/天气.png'
import Flight from '@/assets/images/机票.png'
import Hotel from '@/assets/images/酒店.png'
import AccumulationFunds from '@/assets/images/icon_公积金.png'
import SocietyProtect from '@/assets/images/icon_社保.png'
export default {
  name: '',
  data () {
    return {
      navMsgData: [
        {img: SocietyProtect,title: "社保查询",toPath: "/societyProtect"},
        {img: AccumulationFunds,title: "公积金查询",toPath: "/accumulationFunds"},
        {img: Express,title: "快递查询",toPath: "/express"},
        {img: BusFind,title: "公交查询",toPath: "/busFind"},
        {img: Hotel,title: "酒店查询",toPath: "/hotel"},
        {img: Flight,title: "机票查询",toPath: "/flight"},
        {img: Map,title: "地图查询",toPath: "/map"},
        {img: Weather,title: "天气查询",toPath: "/weather"},
      ]
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss">
.convenienceSevice{
  .lifeHelperContent,.convenienInfo{
    h4{
      height: 36px;
      // color: #787878;
      color:seagreen;
      padding-left: 15px;
      line-height: 36px;
      background-color:yellowgreen;
    }
    .navMsg{
      ul{
        // margin-top: 10px;
        display: flex;
        flex-wrap:wrap;
        li{
          margin: 20px 0;
          width: 25%;
          text-align: center;
          img{
            width: 50px;
            height: 40px;
          }
        }
      }
    }
  }
  .convenienInfo{
    .convenienContent{
      ul{
        li{
          padding-left: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid forestgreen;
          h5{
          margin:10px 0;
          font-size: 16px;
          font-weight: 900;
          }
          p{}
        }
      }
    }
  }
}
</style>
