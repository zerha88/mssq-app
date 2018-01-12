<template>
<!-- 文章详情复用 -->
  <div class="articleDetailsUtilContent">
    <!-- todo==>后台请求动态变化 -->
    <!-- 顶部标题 -->
    <mt-header title="社区时讯" class="headerBox">
        <mt-button  slot="left" icon="back"  @click="goBack" class="backStyle"></mt-button>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
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
<style lang="scss" rel="stylesheet/scss" scoped>
.articleDetailsUtilContent {
  background-color: white;
  .headerBox {
    height: 50px;
    font-size: 16px;
    .backStyle {
      width: 60px;
      height: 30px;
      .mintui {
        font-size: 20px;
      }
    }
  }

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
      margin: 10px 0 10px 0;
    }
  }
}
</style>
