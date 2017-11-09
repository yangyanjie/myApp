<template>
	<div class="mp-topic clear">
		 <div class="mp-wait-cont clearfix">
            <ul class="mp-detail-more clearfix">
				<li class="mp-item-more clearfix palaceHot" v-for="hot in palaceHot" :key="hot.id">
                    <!-- <router-link class="inner" to="palacedetail"> -->
                        <div class="mp-waite-img">
                            <img :src="hot.imgUrl"/>
                            <span class="cover">{{hot.intro}}</span>
                        </div>
                        <p class="mp-wait-title">{{hot.title}}</p>
                        <div class="lure"> 
                            <span class="mp-btn" data-sale="true">{{hot.btn}}</span> 
                            <span class="mpg-price sale">{{hot.symbol}}<em class="mpg-price-num">{{hot.price}}</em></span> 
                        </div>
                    <!-- </router-link> -->
                </li>
            </ul>
        </div>
	</div> 
</template>
<script>
	import { mapState } from 'vuex'

	export default { 
		
		computed: mapState({
			palaceWait:(state) => (
				state.palace.palaceWait
			),
			palaceHot:(state) => (
				 state.palace.palaceHot
			),
			palacePlay:(state) => {
				return   state.palace.palacePlay
			},

		}),
	} 

</script>
<style scoped>
	.mp-topic {
	    background: #fbdea3;
        min-height: .5rem;
        padding: 0 .2rem  0 .2rem;
	}
	.mp-caption {
	    position: relative;
        height: .7rem;
        margin-top:-.2rem;
	    background: #e0ae66;
	}
	.inner {
	    position: relative;
	    width: 33%;
	    height: .7rem;
	    margin: 0 auto;
	    background-color: #f5d17a;
	}
	.mp-caption .name {
	    color: #ec7b28;
	    font-size: .33rem!important;
	    font-weight: 600;
	    text-align: center;
	    line-height: .7rem;
	}
	.mp-caption .arrow {
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    width: 0;
	    height: 0;
	    border-width: 0 8px 35px;
	    border-style: solid;
	    border-color: transparent;
	}
	.mp-caption .arrow-right {
	    right: 1.98rem;
	    border-right-color: #f5d17a;
	}
	.mp-caption .arrow-left {
	    left: 1.99rem;
	    border-left-color: #f5d17a;
    }
    /* wait for you */
    .mpg-flexbox {
        margin-top: 10px;
        display: flex;
        width: 100%;
    }
    .mp-wait-selected {
        margin-right: .04rem;
        font-size: .28rem;
        width:33%;
        float:left;
        line-height: .6rem;
        text-align: center;
        background: #e5c584;
        color: #ffffff;
    }
    .mp-wait-cont {
        min-height:  14.08rem;
    }
   .mp-detail-more {
        min-height: 100px;
        margin-right: -20px;
    }
    .mp-item-more {
        float: left;
        width: 45%;
        margin: 10px 10px 0 0 ;
    }
    .mp-item-more .inner {
        width: 100%;
        min-height: 2.8rem;
        display: block;
        position: relative;
        margin-right: 10px;
        padding-bottom: 30px;
        background: #fff;
        color: #25a4bb;
    } 
    .mp-item-more .mp-waite-img {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 62.069%;
        background-color: #dcdcdc;
    }
    .mp-item-more .mp-waite-img .cover {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 3px 0;
        background-color: rgba(0,0,0,.5);
        color: #fff;
        line-height: 18px;
    }
    .mp-item-more .mp-wait-title {
        overflow: hidden;
        margin: 8px 5px 10px;
        height: 28px;
        color: #333;
        font-size: 12px;
        line-height: 14px;
    }
    .mp-item-more .lure {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        white-space: nowrap;
    }
    .mp-item-more .mp-btn {
        display: inline-block;
        min-width: 40px;
        height: 30px;
        background-color: #ff433e;
        color: #fff;
        font-size: 14px;
        line-height: 30px;
        text-align: center;  
        float: right;
        background-color: #ff4444;
        color: #ffffff;
    }
    .mp-item-more .sale {
        margin-left: 5px;
        line-height: 30px;
        font-size: 18px;
        color: #f44;
    }
	.palaceHot{
		display: none;
	}
	.palacePlay{
		display: none;
	}
</style>

