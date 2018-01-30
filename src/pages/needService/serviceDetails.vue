<template>
    <div class="serviceDetails">
        <div class="detalisContent">
            <!-- 顶部信息栏 -->
            <div class="topMsg">
                <!-- 需求类型 -->
                <div class="needType">
                    <h4>需求类型</h4>
                    <p>低保人员服务</p>
                </div>
                <!-- 所在社区 -->
                <div class="fromCommunity">
                    <h4>所在社区</h4>
                    <p>大梅沙社区</p>
                </div>
                <!-- 需求发起人 -->
                <div class="responsePerson">
                    <h4>需求发起人</h4>
                    <p>街道办</p>
                </div>
            </div>
            <!-- 内容切换Title -->
            <div class="contentTab">
                <div class="titleTab">
                    <!-- 需求描述 -->
                    <div class="needDescribe" @click="needDescribeClick" :class="{StyleActive:isActiveOrShow}">需求描述</div>
                    <!-- 响应情况 -->
                    <div class="responseStatus" @click="responseStatusClick" :class="{StyleActive:!isActiveOrShow}">响应情况</div>
                </div>
            </div>
            <!-- 内容切换 -->
            <div class="content">
                <!-- 需求描述内容 -->
                <div class="needDescribeContent" v-if="isActiveOrShow">
                    儿童音乐舞蹈培训
                </div>
                <!-- 响应情况内容 -->
                <div class="responseStatusContent" v-if="!isActiveOrShow">
                    <ul>
                        <li class="listStyle">
                            <img src="" alt="">
                            <div class="timeOrName">
                                <P>2018-01-20 10:26:59</P>
                                <P>章大权</P>
                            </div>
                        </li>
                        <li class="listStyle">
                            <img src="" alt="">
                            <div class="timeOrName">
                                <P>2018-01-20 10:26:59</P>
                                <P>章大权</P>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 底部按钮 -->
        <div class="bottomTab">
            <i><img src="../../assets/images/veryGoodGlod.png" alt=""></i>
            <span>我也需要这个服务</span>
        </div>
        
    </div>
</template>
<style scoped lang="scss">
.serviceDetails {
    // 样式状态
    .StyleActive{
        color: red;
        border-bottom: 2px solid red;
    }
  .detalisContent {
    // 顶部信息栏
    .topMsg {
      display: flex;
      text-align: center;
      padding: 10px 0;
      margin: 5px 0;
      border-bottom: 1px solid saddlebrown;
      box-shadow: #a3a3a3;
      h4 {
        margin-bottom: 5px;
        color: #666666;
      }
      p {
        color: #a3a3a3;
      }
      .needType {
        flex: 1;
        h4 {
          border-right: 1px dotted #c0c0c0;
        }
      }
      .fromCommunity {
        flex: 1;
        h4 {
          border-right: 1px dotted #c0c0c0;
        }
      }
      .responsePerson {
        flex: 1;
      }
    }
    // 内容切换栏
    .contentTab {
      .titleTab {
        color: #777777;
        font-weight: 900;
        height: 40px;
        display: flex;
        line-height: 40px;
        text-align: center;
        // 需求描述内容
        .needDescribe {
          flex: 1;
        }
        // 响应情况内容
        .responseStatus {
          flex: 1;
        }
      }
    }
    .content {
      margin: 0 20px;
      color: #555555;
    //   需求描述内容
      .needDescribeContent {
          margin-top:10px;

      }
    //   响应情况内容
      .responseStatusContent {
          margin-top:10px;
        .listStyle {
          margin-top: 8px;
          display: flex;
          img {
            display: block;
            width: 30px;
            margin:8px 15px 0 0;
            height: 30px;
            background-color: red;
            border-radius: 50%;
          }
          .timeOrName {
            flex: 1;
            p{
                margin: 3px 0;
            }
          }
        }
      }
    }
  }
  .bottomTab {
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    text-align: center;
    border: 1px solid #dddddd;
    color: #777777;
    font-weight: 900;
    i {
      vertical-align: middle;
      padding-right: 3px;
      img {
      }
    }
    span {
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
        isActiveOrShow:true,
        // isShowContent:true,
    };
  },
  methods: {
      needDescribeClick:function(){
          this.isActiveOrShow = true;
        //   this.isShowContent = true;
      },
      responseStatusClick:function(){
          this.isActiveOrShow = false;
        //   this.isShowContent = false;
      }
  }
};
</script>

