<template>
<div>
    <!-- 社区文章列表复用 -->
    <div class="ComtentUtil clearfix" @click='linkToArticleDetailsPage(item.id)' v-for="(item,index) in ComtentUtil" :key="index">
      <div class="content">
        <h4 >{{item.title}}</h4>
        <p>{{item.createDate}}</p>
        <div class="ImgOrSummary">
          <div class="fl ImgBox"><img  :src="item.coverImageUrl" alt=""></div>
          <span class="summary">{{item.summary}}</span>
        </div>
      </div> 
    </div>
</div>
</template>
<script>
export default {
  props:['ComtentUtil'],
  data(){
      return {
      }
  },
  methods: {
    // 动态跳转到详情页
      linkToArticleDetailsPage:function(id){
          this.$router.push({path: 'details/'+id})
      }
  }
//   props: {
//     ComtentUtil: {
//       type: Object,
//       default: () => {
//         return {};
//       }
//     }
//   }
}
</script>
<style lang="scss" scoped>
// 社区资讯信息
.ComtentUtil {
    border-bottom:1px solid #989898;padding-bottom:3px;margin-bottom:10px;
  .content {
    margin-top: 20px;
  }
  .ImgOrSummary {
    .ImgBox {
      width: 150px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

