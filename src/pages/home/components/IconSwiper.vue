<template>
	<div class="mp-category-container mpw-swipe" id="category-container" >
	<swiper :options="swiperOption">
	    <swiper-slide v-for="(item, index) in this.$store.getters.iconSwiper" :key="index">
	    	<div class="mp-category-container mpw-swipe" >
			    <div v-for="itemInner in item" :key="itemInner.id" class="mp-category-item" @click="handleClick">
			        <router-link :to="itemInner.link">
			            <div class="mp-category-img-container ">
			                <img :src="itemInner.src" :alt="itemInner.title" style="opacity: 1;">
			            </div>
			            <div class="keywords">
			                {{itemInner.title}}
			            </div>
			        </router-link>	
			    </div>
			</div>
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
	    methods: {
	    	handleClick: function() {
	    		alert(1)
	    	}
	    }
	}
</script>
<style>
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
	.mp-category-item {
		float: left;
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
	.category-item img {
    opacity: 0;
    width: .66rem;
    height: .66rem;
    background: 0;
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

