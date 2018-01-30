<template>
  <div class="neighborHelpIndex">
      <div class="imgBox">
          <img src="../../assets/images/banner_邻里帮.png" alt="">
      </div>
        <!-- 社区资讯信息 -->
      <div class="newsContent" >
        <!-- 需求志愿者 -->
            <div class="djxw" >
                <div class="title" >
                    <span class="titleLeft"><i class="treeBar">|</i>需求志愿者</span>
                    <span class="fr allRight">查看全部</span>
                </div>
                <div class="content" style="margin-top:20px;">
                    <ul>
                        <li>
                            <p>义务为社区居民测血压和心率</p>
                            <p><i>服务发布：</i><span>服务机构</span></p>
                            <p><span><i>需求志愿者数：</i><span>3</span></span> <span class="fr">2018-01-20 20:08:19</span></p>
                        </li>
                        <li>
                            <p>义务为社区居民测血压和心率</p>
                            <p><i>服务发布：</i><span>服务机构</span></p>
                            <p><span><i>需求志愿者数：</i><span>3</span></span> <span class="fr">2018-01-20 20:08:19</span></p>
                        </li>
                    </ul>    
                </div> 
            </div>
       </div>
  </div>
</template>
<script>
    
</script>
<style lang="scss">
.neighborHelpIndex{
    .imgBox{
        img{width: 100%}
    }
      // 社区资讯信息
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
    .content{
        ul{
            li{
                border-bottom: 1px solid greenyellow;
                margin-bottom: 10px;
                p{
                margin-bottom: 8px;
                color: black;
                }
            }
        }
    }
  }
}
</style>

