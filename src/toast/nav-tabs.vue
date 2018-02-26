<template>
  <div class="navTabs">
      <ul class="navTitle">
          <li v-for="(item,index) in titleMsg"
          :key="index" 
          @click="changeTab(index)"
          :class="tabStatus===index?isActive:''">{{item}}</li>
      </ul>
    <div v-for="(item,index) in msgChangeContent" :key="index" v-if='tabStatus===index'>
        {{item}}
    </div>
    <!-- <test1 v-if="tabStatus===0"></test1>
    <test2 v-if="tabStatus===1"></test2>
    <test3 v-if="tabStatus===2"></test3> -->
  </div>
</template>

<script>
// import test1 from "./test1.vue"
// import test2 from "./test2.vue"
// import test3 from "./test3.vue"
export default {
  name: 'navTabs',
  data () {
    return {
      tabStatus: 0,
      isActive: "tabActive",
      titleMsg: [11111,22222,33333],
      msgChangeContent:["内容1111","内容2222","内容3333"]
    }
  },
  // components:{
  //   test1:test1,
  //   test2:test2,
  //   test3:test3,
  // },
  methods:{
    changeTab:function(i){
      this.tabStatus = i;
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.tabActive{
    color: red;
    border-bottom: 1px solid red;
}
.navTabs{
  ul{
    display: flex;
    li{
      width: 20%;
      text-align: center;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
