<template>
  <div class="publicBenefitIndex">
      <div class="imgBox">
          <img src="../../assets/images/banner_公益.png" alt="">
      </div>
            <!-- 社区资讯信息 -->
      <div class="newsContent" >
        <!-- 公益资讯 -->
          <div class="gyzx" >
                <div class="title" >
                    <span class="titleLeft"><i class="treeBar">|</i>公益资讯</span>
                    <span class="fr allRight">查看全部</span>
                </div>
        <!-- 内容部分 -->
            <article-Util :ComtentUtil="PublicBenefitData"></article-Util>
          </div>
       </div>
  </div>
</template>
<script>
import articleUtil from '@/components/articleUtil';
export default{
  data(){
    return{
      PublicBenefitData:[]
    }
  },
  mounted(){
    this.getPublicBenefitData()
  },
  components:{
    articleUtil:articleUtil
  },
  methods:{
    getPublicBenefitData:function(){
      this.axios.get("http://120.77.214.0:10000/wisdomCommunity-interface/cms/api/article/list",{
        params:{
          columnId:'gyzx',
          top:'3'
        }
      }).then(function(res){
        // console.log(res.data.data)
        this.PublicBenefitData=res.data.data
      }.bind(this))
    }
  }
}
</script>
<style lang="scss">
.publicBenefitIndex {
  background-color: white;
  .imgBox {
    img {
      width: 100%;
    }
  }
  .newsContent {
    height: 100%;
    margin: 15px 22px;
    .titleLeft {
      font-size: 18px;
      .treeBar {
        margin-right: 5px;
        font-weight: 900;
      }
    }
    .allRight {
      font-size: 14px;
      color: #c0c0c0;
    }
  }
}
</style>

