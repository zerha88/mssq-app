<template>
<!-- 文章详情页 -->
<div>
  <!-- 使用子组件 -->
  <article-details-util :articleDetails='articleDetailsData'></article-details-util>
</div>
</template>
<script>
// 导入复用文章详情组件
import articleDetailsUtil from "@/components/articleDetailsUtil";
import axios from "axios";
export default {
  name: "articleDetailsIndex",
  data() {
    return {
      articleDetailsData: ""
    };
  },
  // 组件定义和注册
  components: {
    articleDetailsUtil: articleDetailsUtil
  },
  props: {
    id: {
      type: String,
      default: "0"
    }
  },
  created: function() {
    this.getArticleDetails();
  },
  methods: {
    getArticleDetails: function() {
      let _myself = this;
      axios
        .get(
          "http://120.77.214.0:10000/wisdomCommunity-interface/cms/api/article/detail",
          {
            params: {
              articleId: _myself.id
            }
          }
        )
        .then(function(res) {
          _myself.articleDetailsData = res.data.data[0];
        });
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>