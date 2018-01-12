<template>
  <div>
      <!-- tab标题 -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">党建新闻</mt-tab-item>
      <mt-tab-item id="2">社区简讯</mt-tab-item>
    </mt-navbar>
    <!-- 文章内容 -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
          <article-util :ComtentUtil="DjxwData"></article-util>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" >
          <article-util :ComtentUtil="SqjxData"></article-util>      
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
// import axios from 'axios';
import articleUtil from '@/components/articleUtil';
import qs from 'qs';

  export default {
    data(){
      return{
        selected:'1',
        DjxwData:[],
        SqjxData:[],
      }
    },
    components: {
        articleUtil:articleUtil
    },
    created: function(){
      this.getDjywData()
      this.getSqjxData()
    },
    methods:{
      getDjywData:function(){
        let myself =this;
        this.axios.get("http://120.77.214.0:10000/wisdomCommunity-interface/cms/api/article/list",{
            params:{
                'columnId':'djyw'
            }
        })
        .then(function(res){
          myself.DjxwData=res.data.data;
        //   console.log(res.data.data[0].id)
        })
      },
      getSqjxData:function(){
        let _myself =this;
        this.axios.get("http://120.77.214.0:10000/wisdomCommunity-interface/cms/api/article/list",{
            params:{
                'columnId':'sqjx',
                'currentPage':'',
                'pageSize':'',
                'isPage':''
            }
        })
        .then(function(res){
          _myself.SqjxData=res.data.data;
        //   console.log(_myself.getSqjxData)
        })
      },



    }
    
  }
</script>

<style lang = "scss">
.mint-navbar .mint-tab-item.is-selected{
  border-bottom: 3px solid red;
  .mint-tab-item-label{
    font-size: 16px;
    color:red;
  }
}
.mint-tab-item-label{
    font-size: 16px;
    color: #333333;
}

</style>
