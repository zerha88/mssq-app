<template>
    <div class="needServiceIndex">
      <!-- 需求服务 -->
        <ul class="serviceContent">
            <li class="liStyle" >
                <p class="fromMsg"><span>我发起的</span></p>
                <!-- 类型和描述 -->
                <div class="typeOrDescribe" @click="LinkToServiceIntroduce">
                    <h4>服务类型：<span>残疾人服务</span></h4>
                    <!-- 点赞小手 -->
                    <img src="../../assets/images/veryGood.png" class="imgStyle" >
                    <p>服务描述：<span>服务贴心，量身定做！</span></p>
                </div>
            </li>
                <li class="liStyle">
                <p class="fromMsg"><span>我响应的</span></p>
                <div class="typeOrDescribe">
                    <h4>服务类型：<span>残疾人服务</span></h4>
                    <img src="../../assets/images/veryGood.png" class="imgStyle" >
                    <p>服务描述：<span>服务贴心，量身定做！</span></p>
                </div>
            </li>
        </ul>
        <!-- 底部tab -->
        <div class="tabBottom">
            <div class="seeOtherNeed">看看别人的需求</div>
            <div class="responseNewNeed">发起新需求</div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.needServiceIndex {
  // 需求服务内容
  .serviceContent {
    width: 100%;
    height: 100px;
    //   margin: 20px auto;
    .liStyle {
      height: 100%;
      background-color:white;
      border-radius: 10px;
      margin: 20px;
      .fromMsg {
        border-radius: 10px;
        background-color: white;
        margin-bottom: 5px;
        span {
          border-radius: 5px;
          background-color: fuchsia;
          color: white;
        }
      }
      // 类型和描述
      .typeOrDescribe {
        background-color: white;
        position: relative;
        margin-left: 10px;
        h4 {
          margin: 10px 0;
          background-color: white;
        }
        // 点赞小手
        .imgStyle {
          position: absolute;
          right: 18px;
          top: 10px;
        }
        p {
          background-color: white;
          color: #666666;
        }
      }
    }
  }
  .tabBottom {
    position: fixed;
    display: flex;
    bottom: 0;
    //   background-color: green;
    color: #666666;
    line-height: 50px;
    height: 50px;
    width: 100%;
    border-top: 1px solid #888888;
    .seeOtherNeed {
      border-right: 1px solid #888888;
      text-align: center;
      flex: 1;
    }
    .responseNewNeed {
      text-align: center;
      flex: 1;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      needServiceData:[
        {}
       ]
    };
  },
  methods: {
    LinkToServiceIntroduce:function(){
      this.$router.push("/serviceIntroduce")
    }
  }
};
</script>

