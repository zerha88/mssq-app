<template>
  <div class="one" >
      <div class="swipeContent">
	      <!-- 动态加载todo -->
         <!-- <mt-swipe :auto="2000">
           <mt-swipe-item v-for="(item,index) in swipeData" :key="index">
             <img :src="item.img"/>
      	   </mt-swipe-item>
    	 </mt-swipe> -->
        <mt-swipe :auto="2000" style="height:250px;">
          <mt-swipe-item ><img src="../assets/images/banner_2.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item ><img src="../assets/images/banner_3.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item ><img src="../assets/images/lxyz_banner.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="gridContent" >
          	<div class="mui-content">
			 <ul class="mui-table-view mui-grid-view mui-grid-9">
			      <li v-for="(item,index) in gridData" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				    <!-- <router-link ></router-link> -->
				    <a href="#">
		                    <img :src='item.img' alt="" style="width:80px;height:80px;">
		                    <div>{{item.title}}</div>
				    </a>
			      </li>
			</ul>
					         <!-- <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/images/icon_shequfuwu.png" alt="">
		                    <div class="mui-media-body">Home</div></a></li>
				    </ul> -->


		        <!-- <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul>  -->

						<!-- test -->
						<router-link to="isShowHeader">头部首页隐藏其它页显示test</router-link>
		</div>
      </div>
  </div>
</template>

<script>
//导入公共的js
import common from "../common/common.js";
export default {
  name: "",
  data() {
	 
    return {
      swipeData: [],
//       img1:require("@/assets/images/icon_shequfuwu.png"),
      gridData: [
	      {img:"https://cn.vuejs.org/images/geekbang2.jpg",title:"服务宝",toPath:"/fuwubao"},
	//       {img:"img1",title:"服务宝",toPath:"/fuwubao"},
	//       {img:'require("@/assets/images/icon_shequfuwu.png")',title:"服务宝",toPath:"/fuwubao"},
	      {img:'http://120.77.214.0:10000/uploads/attach/c98ff1c0-62d8-44d3-84de-7a53d1bf17ae.png',title:"服务宝",toPath:"/fuwubao"},
	      {img:"http://120.77.214.0:10000/uploads/attach/dea09faf-18ba-48f5-8dc8-d3176fae781f.jpg",title:"服务宝",toPath:"/fuwubao"},
	      {img:"http://120.77.214.0:10000/uploads/attach/dea09faf-18ba-48f5-8dc8-d3176fae781f.jpg",title:"服务宝",toPath:"/fuwubao"},
	      {img:"http://120.77.214.0:10000/uploads/attach/dea09faf-18ba-48f5-8dc8-d3176fae781f.jpg",title:"服务宝",toPath:"/fuwubao"},
	      {img:"http://120.77.214.0:10000/uploads/attach/dea09faf-18ba-48f5-8dc8-d3176fae781f.jpg",title:"服务宝",toPath:"/fuwubao"},
	      {img:"http://120.77.214.0:10000/uploads/attach/dea09faf-18ba-48f5-8dc8-d3176fae781f.jpg",title:"兵兵球",toPath:"/fuwubao"},
	      {img:"../assets/images/icon_shequfuwu.png",title:"服务宝",toPath:"/fuwubao"},
	//       {img:"../assets/images/icon_shequfuwu.png",title:"服务宝",toPath:"/fuwubao"},
	//       {img:"../assets/images/icon_shequfuwu.png",title:"服务宝",toPath:"/fuwubao"},
	//       {img:"../assets/images/icon_shequfuwu.png",title:"最后",toPath:"/fuwubao"}
      ]
    };
  },
  created: function() {
	  
  },
    methods: {
//        加载轮播数据的方法
      getLunboData: function() {
        const url = common.apihost+""
	axios.get("url")
	.then(response=>{
		this.swipeData = response.data;
	})
	.catch(error=>{
		console.log(error)
	})
      }
    }
};
</script>

<style lang="scss" scoped>
.one {
  /* width: 100%; */
  /* height: 500px; */
  /* background-color: red; */
}
.swipeContent {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
