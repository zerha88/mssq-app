<template>
    <div class="serviceIntroduce">
        <div class="introduceContent">
            <!-- 服务标题 -->
            <h4 class="title">特殊儿童家长心理支持工作坊</h4>
            <!-- 服务信息 -->
            <div class="topServiceMsg">
                <!-- 服务类型 -->
                <div class="serviceType">
                    <h4>服务类型</h4>
                    <p>妇女儿童服务</p>
                </div>
                <!-- 服务性质 -->
                <div class="serviceNature">
                    <h4>服务性质</h4>
                    <p>免费服务</p>
                </div>
                <!-- 服务状态 -->
                <div class="serviceStatus">
                    <h4>服务状态</h4>
                    <p>服务发布</p>
                </div>
            </div>
            <!-- 提供服务方 -->
            <div class="serviceProvider">
                <div class="providerTitle">
                    <i>提供服务方：</i><span>服务中心</span>
                </div>
                <div class="provicerContent">
                    贯彻执行党的路线、方针、政策和街道党工委、办事处在各个阶段的工作部署、决议、指示，承办党工委、办事处日常事务，发挥统筹协调作用。 　
                </div>
            </div>  
             <!-- 内容切换Title -->
            <div class="titleTab">
                <ul class="titleStyleUl">
                    <li v-for="(item,index) in tabMsg"  
                    :key="index" 
                    @click="changeTab(index)"
                    :class="tabStatus===index?isActive:''">
                        {{item.tabTitle}}
                    </li>
                </ul>
            </div>
            <div class="tabChangeContent">
                    <!-- <div v-for="(item,index) in msgChangeContent" :key="index" v-if='tabStatus===index'>
                        {{item.msgContent}}
                    </div> -->
                <div class="baseInfoContent" v-if='tabStatus===0'>
                  <div class="baseInfoTop">
                    <p><i>服务所在街道/社区：</i><span>梅沙街道</span></p>
                    <p><i>服务人群年龄段：</i><span>3岁-18岁</span></p>
                    <p><i>服务容纳人数：</i><span>不限</span></p>
                  </div>
                  <div class="baseInfoBottom">
                    <p><i>服务开展时间：</i><span>每周六周日下午 08:00 至 18:00</span></p>
                    <p><i>报名截至时间：</i><span>2018/11/07 23:59:59</span></p>
                    <p><i>服务有效期至：</i><span>2018/11/08 23:59:59</span></p>
                    <p><i>开展服务地点：</i><span>梅沙街道工作站</span></p>
                    <p><i>服务简要介绍：</i><span>本项目将以团体心理工作坊（每次10—12人）并辅以个别咨询的形式开展。通过一些具体的活动，如相互倾诉、解决问题、表演戏剧等丰富的形式，让家长们紧密地联系在一起，分享共同的体验，认真思考自己的成长经历，重新开始对自我的认识，从而达到自我成长。让存在负面情绪困扰的家长,在这里获得支持,看到希望，减轻焦虑；同时让家长们看到其他家庭孩子的改善，点燃家长的信心，也产生出积极的期待。</span></p>
                  </div>
                </div>
                <div class="imageTextContent" v-if='tabStatus===1'>图文介绍</div>
                <div class="applicationContent" v-if='tabStatus===2'>报名情况</div>
            </div>  
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: "tabActive",
      tabStatus: 0,
      tabMsg: [
        { name: "baseInfo", tabTitle: "基本信息" },
        { name: "imageTextIntroduce", tabTitle: "图文介绍" },
        { name: "applicationStatus", tabTitle: "报名情况" }
      ],
      // msgChangeContent: [
      //   { name: "baseContent", msgContent: "基本信息msgContent" },
      //   { name: "imageTextContent", msgContent: "图文介绍msgContent" },
      //   { name: "applicationContent", msgContent: "报名情况msgContent" }
      //     ]
    };
  },
  methods: {
    changeTab: function(i) {
      this.tabStatus = i;
    }
  }
};
</script>
<style lang="scss">
.serviceIntroduce {
  // JS状态样式
  .tabActive {
    color: red;
    border-bottom: 1px solid red;
  }
  // 服务介绍
  .introduceContent {
    //   服务标题
    .title {
      margin: 10px 0;
      padding: 10px 10px 10px 15px;
      background-color: sandybrown;
    }
    // 服务信息
    .topServiceMsg {
      display: flex;
      text-align: center;
      margin: 5px 0;
      h4 {
        margin-bottom: 5px;
        color: #666666;
      }
      p {
        color: #a3a3a3;
      }
      //   服务类型
      .serviceType {
        flex: 1;
        h4 {
          border-right: 1px dotted #c0c0c0;
        }
      }
      //   服务性质
      .serviceNature {
        flex: 1;
        h4 {
          border-right: 1px dotted #c0c0c0;
        }
      }
      //   服务状态
      .serviceStatus {
        flex: 1;
      }
    }
    // 服务提供方
    .serviceProvider {
      margin: 10px 10%;
      border: 1px #000000 dashed;
      padding: 2px;
      .providerTitle {
        margin-bottom: 8px;
      }
      .provicerContent {
        margin-left: 10px;
        color: #c0c0c0;
      }
    }
    // 内容切换Title
    .titleTab {
      .titleStyleUl {
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        li {
          flex: 1;
        }
      }
    }
    .tabChangeContent{
      .baseInfoContent{
        padding: 0 12px;
        p{
          margin: 10px 0;
          display: flex;
          i{
            width: 160px;
          }
          span{
            flex: 1;
          }
        }
      }
    }
  }
}
</style>



