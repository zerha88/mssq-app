<template>
<!-- 文章详情复用 -->
  <div class="articleDetailsUtilContent">
    <!-- 内容部分 -->
     <div class="DetailsContent">
        <div class="detailsTitle">
            {{articleDetails.title}}
        </div>
        <div class="articleDetailstime">
            {{articleDetails.createDate}}
        </div>
       <div class="detalisContent" v-html="articleDetails.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["articleDetails"],
  methods: {
    // 返回
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" >
.articleDetailsUtilContent {
  width:100%;
  background-color: white;
  //   详情内容部分
  .DetailsContent {
    
    // 时间
    .articleDetailstime {
      text-align: center;
    }

    // 标题
    .detailsTitle {
      color: #555555;
      font-size: 20px;
      text-align: center;
      font-weight: bold;
      margin-right: 20px;
      margin-left: 20px;
      padding: 10px 0 10px 0;
    }
    .detalisContent{
      img{
        width: 100%!important;
        height: 100%!important;
      }
    }
  }
}
</style>
