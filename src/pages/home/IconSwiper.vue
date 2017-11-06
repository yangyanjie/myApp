<template>
	<div class="mp-category-container mpw-swipe" id="category-container" >
	<swiper :options="swiperOption">
	    <swiper-slide>
		   <div class="mp-category-container mpw-swipe" id="category-container" data--swipe="[object Object]">
				        <div class="mpw-swipe-item" data-index="0" style=" left: 0px; transition-duration: 300ms; transform: translate(0px, 0px) translateZ(0px);">
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="景点门票"
				            data-click-from-index="0" data-click-dist-city="北京">
				                <a href="//touch.piao.qunar.com/touch/list_北京_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC"
				                title="景点门票" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=0&amp;from_value=景点门票&amp;dist_city=北京">
				                    <div class="mp-category-img-container ">
				                        <section class="iconfont-img iconfont icon-jingdian"></section>
				                    </div>
				                    <div class="keywords">
				                        景点门票
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="动植物园"
				            data-click-from-index="1" data-click-dist-city="北京">
				                <a href="//touch.piao.qunar.com/touch/list_北京_动植物园.html?cat=from_area%3Dts_type_nav%26from_index%3D1%26from_value%3D%25E5%258A%25A8%25E6%25A4%258D%25E7%2589%25A9%25E5%259B%25AD%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC"
				                title="动植物园" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=1&amp;from_value=动植物园&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        动植物园
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="故宫"
				            data-click-from-index="2" data-click-dist-city="北京">
				                <a href="http://sale.piao.qunar.com/touch/topic/mk/t_1135.htm?in_track=appsylmgugong&amp;cat=from_area%3Dts_type_nav%26from_index%3D2%26from_value%3D%25E6%2595%2585%25E5%25AE%25AB%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC"
				                title="故宫" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=2&amp;from_value=故宫&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        故宫
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="一日游"
				            data-click-from-index="3" data-click-dist-city="北京">
				                <router-link to="tour"
				                title="一日游" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=3&amp;from_value=一日游&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords" @click="handleClick">
				                        一日游
				                    </div>
				                </router-link>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="必游榜单"
				            data-click-from-index="4" data-click-dist-city="北京">
				                <a href="//touch.piao.qunar.com/touch/list_北京_必游景点.html?cat=from_area%3Dts_type_nav%26from_index%3D4%26from_value%3D%25E5%25BF%2585%25E6%25B8%25B8%25E6%25A6%259C%25E5%258D%2595%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC"
				                title="必游榜单" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=4&amp;from_value=必游榜单&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        必游榜单
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="秋色美"
				            data-click-from-index="5" data-click-dist-city="北京">
				                <a href="javascript:;"
				                title="秋色美" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=5&amp;from_value=秋色美&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        秋色美
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="游乐场"
				            data-click-from-index="6" data-click-dist-city="北京">
				                <a href="javascript:;"
				                title="游乐场" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=6&amp;from_value=游乐场&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        游乐场
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="泡温泉"
				            data-click-from-index="7" data-click-dist-city="北京">
				                <a href="javascript:;"
				                title="泡温泉" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=7&amp;from_value=泡温泉&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        泡温泉
				                    </div>
				                </a>
				            </div>
				        </div>
				</div>
	    </swiper-slide>
	    <swiper-slide>
		   <div class="mp-category-container mpw-swipe" id="category-container" data--swipe="[object Object]">
				        <div class="mpw-swipe-item" data-index="0" style=" left: 0px; transition-duration: 300ms; transform: translate(0px, 0px) translateZ(0px);">
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="城市观光"
				            data-click-from-index="0" data-click-dist-city="北京">
				                <a href="javascript:;"
				                title="城市观光" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=0&amp;from_value=城市观光&amp;dist_city=北京">
				                    <div class="mp-category-img-container ">
				                        <section class="iconfont-img iconfont icon-jingdian"></section>
				                    </div>
				                    <div class="keywords">
				                        城市观光
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="玻璃栈道"
				            data-click-from-index="1" data-click-dist-city="北京">
				                <a href="javascript:;"
				                title="玻璃栈道" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=1&amp;from_value=玻璃栈道&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        玻璃栈道
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="故宫"
				            data-click-from-index="2" data-click-dist-city="北京">
				                <a href="javascript:;"
				                title="故宫" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=2&amp;from_value=故宫&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        故宫
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="一日游"
				            data-click-from-index="3" data-click-dist-city="北京">
				                <a href="javascript:;"
				                title="一日游" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=3&amp;from_value=一日游&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        一日游
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="必游榜单"
				            data-click-from-index="4" data-click-dist-city="北京">
				                <a href="javascript:;"
				                title="必游榜单" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=4&amp;from_value=必游榜单&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        必游榜单
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="秋色美"
				            data-click-from-index="5" data-click-dist-city="北京">
				                <a href="#" title="秋色美" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=5&amp;from_value=秋色美&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        秋色美
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="游乐场"
				            data-click-from-index="6" data-click-dist-city="北京">
				                <a href="javascript:;"
				                title="游乐场" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=6&amp;from_value=游乐场&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        游乐场
				                    </div>
				                </a>
				            </div>
				            <div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="泡温泉"
				            data-click-from-index="7" data-click-dist-city="北京">
				                <a href="javascript:;"
				                title="泡温泉" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=7&amp;from_value=泡温泉&amp;dist_city=北京">
				                    <div class="mp-category-img-container">
				                        <section class="iconfont-img iconfont icon-jingse"></section>
				                    </div>
				                    <div class="keywords">
				                        泡温泉
				                    </div>
				                </a>
				            </div>
				        </div>
				    </div>
				    <p class="mpw-nav-dots">
				        <b class="ui-state-active">
				        </b>
				        <b class="">
				        </b>
				    </p>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
	

  export default {
    data() {
      return {
        swiperOption: {
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true,
        }
      }
    },
    methods:{
    	handleClick: function() {
    		// alert(1)
    	},
    	getIndexData: function() {
    		this.$axios("/static/iconSwiper.json")
    			.then(this.handleDataSucc)
    			.catch(this.handleDataErr)
    	},
    	handleDataSucc: function(res) {
    		console.log(res.data)
    	},
    	handleDataErr: function(err) {
    		console.log(err)
    	}
    },
    mounted: function() {
    	this.getIndexData()
    }
  }
</script>
<style scopet>
	.mp-category-container {
	    overflow: hidden;
	    height: 3.7rem;
	    padding-top: .1rem;
	    background-color: #fff;
	}
	.mpw-swipe {
	    overflow: hidden;
	    position: relative;
	    width: 100%;
	    z-index: 2;
	}
  	.mp-category-container {
	    overflow: hidden;
	    height: 3.7rem;
	    padding-top: .1rem;
	    background-color: #fff;
	}
	.mpw-swipe {
	    overflow: hidden;
	    position: relative;
	    width: 100%;
	    z-index: 2;
	}
	.mpw-swipe-wrap {
	    overflow: hidden;
	    position: relative;
	}
	.mpw-swipe-item {
	    float: left;
	    width: 100%;
	    position: relative;
	}
	.mp-category-item {
	    float: left;
	    width: 25%;
	    height: 1.3rem;
	    padding-top: .3rem;
	    text-align: center;
	}
	a {
	    color: #00afc7;
	    text-decoration: none;
	}
	.mp-category-item .mp-category-img-container {
	    display: inline-block;
	    background: #f0f5f8;
	    border-radius: 20px;
	    width: .66rem;
	    height: .66rem;
	}
	.mp-category-item img {
	    opacity: 0;
	    width: .66rem;
	    height: .66rem;
	    background: 0;
	}
	.mp-category-item .keywords {
	    margin-top: .2rem;
	    color: #212121;
	    font-size: .25rem;
	}
	.mp-category-item {
	    float: left;
	    width: 25%;
	    height: 1.3rem;
	    padding-top: .3rem;
	    text-align: center;
	}
	a {
	    color: #00afc7;
	    text-decoration: none;
	}
	.iconfont-img {
		font-size:0.6rem;
		color:orange!important;
	}
	
</style>

