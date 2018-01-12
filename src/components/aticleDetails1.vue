<template>
<div>
  <article-details-util :articleDetails='articleDetailsData'></article-details-util>
</div>
  <!-- <div class="aticleDetailsUtilContent">
    <mt-header title="社区时讯">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
     <div class="DetailsContent">
        <div class="detailsTitle">
            {{aticleDetails.title}}
        </div>
        <div class="aticleDetailstime">
            {{aticleDetails.createDate}}
       </div>
        <div class="detalisContent" v-html="aticleDetails.content"></div>
    </div>
  </div> -->
</template>

<script>
import articleDetailsUtil from '@/components/articleDetailsUtil';
import axios from "axios";
export default {
  name: "articleDetails1",
  data() {
    return {
      articleDetailsData: ""
    };
  },
  components: {
      articleDetailsUtil:articleDetailsUtil
    },
  props: {
      id: {
          type: String,
          default: '0'
      }
  },
  created: function() {
    this.getAticleDetails();
  },
  methods: {
    getAticleDetails: function() {
      let _myself = this;
      axios.get(
          "http://120.77.214.0:10000/wisdomCommunity-interface/cms/api/article/detail",
          {
            params: {
              'articleId':_myself.id,
              // 'currentPage':'',
              // 'pageSize':'',
              // 'isPage':''
            }
          }
        )
        .then(function(res) {
          _myself.articleDetailsData = res.data.data[0];
          // console.log(res.data.data[0])
        // console.log(res.data.data)
        // console.log(res.data.data
          //   console.log(res.data.data[0].content)
          //   console.log(_myself.getSqjxData)
        });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
// .aticleDetailsUtilContent{
//     background-color: white;
// }
// .aticleDetailstime{
//     text-align: center;
// }
// .detailsTitle {
//   color: #555555;
//   font-size: 20px;
//   text-align: center;
//   font-weight: bold;
//   margin-right: 20px;
//   margin-left: 20px;
//   margin: 10px 0 10px 0;
// }
</style>
