<template>
	<div class="mp-topic clear">
		<div class="mp-caption"> 
		    <div class="inner"> 
		        <h2 class="name">等你来</h2> 
		         <div class="arrow arrow-right"></div> 
		         <div class="arrow arrow-left"></div> 
		    </div> 
		</div>
        <ul class="mpg-flexbox" v-on:click="handleClick">
                <li class="mp-wait-selected" ref="waitHot">热销套票</li>
                <li class="mp-wait-selected" ref="waitPlay">周边必游</li>
                <li class="mp-wait-selected" ref="waitSelcet">玩转故宫</li>
        </ul>
		 <div class="mp-wait-cont clearfix">
            <ul class="mp-detail-more clearfix">
                <li class="mp-item-more clearfix palaceWait" v-for="wait in palaceWait" :key="wait.id">
                    <router-link class="inner" to="palacedetail">
                        <div class="mp-waite-img">
                            <img :src="wait.imgUrl"/>
                            <span class="cover">{{wait.intro}}</span>
                        </div>
                        <p class="mp-wait-title">{{wait.title}}</p>
                        <div class="lure"> 
                            <span class="mp-btn" data-sale="true">{{wait.btn}}</span> 
                            <span class="mpg-price sale">{{wait.symbol}}<em class="mpg-price-num">{{wait.price}}</em></span> 
                        </div>
                     </router-link>
                </li>
            </ul>
        </div>
	</div> 
</template>
<script>
    import palacehot from './PalaceHot'
	import { mapState } from 'vuex'

	export default { 
		data(){
			return {
				palaceWait:[],
				palaceWait1111: [{
				"id":1,
				"imgUrl":"http://img1.qunarzz.com/piao/fusion/1607/35/8748779f9ad1c0b6.jpg_290x180_038bc30f.jpg",
				"title":"【下午场】故宫成人票凭身份证入园",
				"intro":"故宫",
				"symbol":"￥",
				"price":"20",
				"btn":"抢购",
				"link":"/detail"
			},{
				"id":2,
				"imgUrl":"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_220x200_0888af6d.jpg",
				"title":"【上午场】故宫成人票凭身份证入园",
				"intro":"故宫",
				"symbol":"￥",
				"price":"20",
				"btn":"抢购",
				"link":"/detail"
			},{
				"id":3,
				"imgUrl":"http://img1.qunarzz.com/piao/fusion/1607/41/5837c598ef45b8b6.png_220x200_55cbc9f8.png",
				"title":"【上午场】故宫成人票凭身份证入园（含自助导览器）",
				"intro":"故宫",
				"symbol":"￥",
				"price":"20",
				"btn":"抢购",
				"link":"/detail"
			},{
				"id":4,
				"imgUrl":"//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_220x200_0888af6d.jpg",
				"title":"【上午场】故宫成人票+故宫全景手绘地图",
				"intro":"故宫",
				"symbol":"￥",
				"price":"20",
				"btn":"抢购",
				"link":"/detail"
			},{
				"id":5,
				"imgUrl":"http://img1.qunarzz.com/piao/fusion/1605/fc/e31ec51c58632ff7.jpg_290x180_a0b9afd2.jpg",
				"title":"【大内御讲9:00场】蓝琪格格带您穿越故宫（含故宫...",
				"intro":"故宫",
				"symbol":"￥",
				"price":"20",
				"btn":"抢购",
				"link":"/detail"
			},{
				"id":6,
				"imgUrl":"http://img1.qunarzz.com/piao/fusion/1605/fc/e31ec51c58632ff7.jpg_290x180_a0b9afd2.jpg",
				"title":"【大内御讲9:00场】蓝琪格格带您穿越故宫（含故宫...",
				"intro":"故宫",
				"symbol":"￥",
				"price":"20",
				"btn":"抢购",
				"link":"/detail"
			},{
				"id":7,
				"imgUrl":"http://img1.qunarzz.com/piao/fusion/1605/fc/e31ec51c58632ff7.jpg_290x180_a0b9afd2.jpg",
				"title":"【大内御讲9:00场】蓝琪格格带您穿越故宫（含故宫...",
				"intro":"故宫",
				"symbol":"￥",
				"price":"20",
				"btn":"抢购",
				"link":"/detail"
			},{
				"id":8,
				"imgUrl":"http://img1.qunarzz.com/piao/fusion/1605/fc/e31ec51c58632ff7.jpg_290x180_a0b9afd2.jpg",
				"title":"【大内御讲9:00场】蓝琪格格带您穿越故宫（含故宫...",
				"intro":"故宫",
				"symbol":"￥",
				"price":"20",
				"btn":"抢购",
				"link":"/detail"
			}]
			}
		},	
		mounted: function(e) {
			var that = this;
			this.palaceWait = this.palaceWait1111;
			this.$refs.waitSelcet.onclick = function(e){
				that.palaceWait = that.$store.state.palace.palaceWait;
			}
			this.$refs.waitHot.onclick = function(){
				that.palaceWait = that.$store.state.palace.palaceHot;
			}
			this.$refs.waitPlay.onclick = function(){
				that.palaceWait = that.$store.state.palace.palacePlay;
			}
		},
		methods:{
			
			handleClick(e){
				var aLi = document.getElementsByClassName("mp-wait-selected")
				for (var i = 0; i < aLi.length; i++){
					if(aLi[i] == e.target){
						aLi[i].style.background =" #ec7b28"
					}else{
						 aLi[i].style.backgroundColor = "#e5c584"
					}
				}
			}
		}
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
	.mpg-flexbox a{
		display:block;
		width:100%;
	}
    .mp-wait-selected {
        margin-right: .04rem;
        font-size: .28rem;
        width:98%;
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
	    width:100%;
        min-height: 2rem;
    }
    .mp-item-more:nth-child(even) {
        float: left;
        width: 48%;
        margin-top: .2rem;
    }
	 .mp-item-more:nth-child(odd) {
        float: right;
        width: 48%;
        margin-top: .2rem;
    }
    .mp-item-more .inner {
        width: 100%;
        min-height: 2.8rem;
        display: block;
        position: relative;
        margin-right: .2rem;
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
        padding: .06rem 0;
        background-color: rgba(0,0,0,.5);
        color: #fff;
        line-height: .36rem;
    }
    .mp-item-more .mp-wait-title {
        overflow: hidden;
        margin: .16rem .1rem .2rem;
        height: 28px;
        color: #333;
        font-size:.24rem;
        line-height: .28rem;
    }
    .mp-item-more .lure {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: .6rem;
        white-space: nowrap;
    }
    .mp-item-more .mp-btn {
        display: inline-block;
        min-width: .8rem;
        height: .6rem;
        background-color: #ff433e;
        color: #fff;
        font-size: .28rem;
        line-height: .6rem;
        text-align: center;  
        /* float: right; */
        background-color: #ff4444;
        color: #ffffff;
    }
    .mp-item-more .sale {
        margin-left: .1rem;
        line-height: .6rem;
        font-size: .36rem;
        color: #f44;
    }
</style>

