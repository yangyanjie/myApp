<template>
	<div>
		<div class="mp-topic">
			<div class="my-banner">
				<img class="banner" src="../../images/palace-banner.png" />
			</div>
			<div class="mp-caption"> 
		        <div class="inner"> 
			         <h2 class="name">我在这里</h2> 
			         <div class="arrow arrow-right"></div> 
			         <div class="arrow arrow-left"></div> 
		        </div> 
		    </div>
		    <div class="mpg-flexbox" id="wrapper">
				<div id="scroller">
					<ul class="mp-list">
						<li class="mp-item clearfix" v-for="palace in palaceData" :key="palace.id" v-if="flag">
							<!-- <router-link to="/palacedetail"> -->
								<div class="mp-item-img">
										<img class="mp-item-show" :src="palace.imgUrl" alt="" title="故宫" />
								</div>
								<div class="mp-item-introduce">
									<h2 class="mp-item-title">{{palace.title}}</h2>
									<p class="mp-item-details">{{palace.intro}}</p>
									<div class="mp-item-price">
										<span class="mp-item-money">{{palace.price}}</span>
										<span class="mp-item-buy">{{palace.btn}}</span>
									</div>
								</div>
							<!-- </router-link> -->
						</li>
						<div>
									{{a}}
								</div>
					</ul>
				</div>
		    </div>
		</div> 
	</div>
</template>
<script>
	require('../../../utils/iscroll-probe.js') 

	export default {

		data(){
			return {
				 flag: true,
				 a: []
			}
		},
		props:['palaceData'],

		mounted(){
			this.createIScroll();
		},
		methods:{
			createIScroll(){
				this.myScroll = new IScroll('#wrapper', { probeType: 3,  mouseWheel: true })
				// this.myScroll.on('scroll', this.handleScroll.bind(this));
			}
			// handleScroll(){
			// 	console.log(this.myScroll.y)
			// 	if(this.myScroll.y <=  -150){
			// 		// console.log("加载")
			// 		console.log(this.$store.state.palace.palaceData)
			// 			this.a = this.$store.state.palace.palaceData
			// 	}

			// }
		},
		updated:function(){
			this.myScroll.refresh()
		}
	}

</script>
<style scoped>
	.mp-topic {
	    background: #fbdea3;
	    min-height: .5rem;
	}
	.mp-banner {
		width:100%;
	    height: 1.83rem;
	    background: #f44;
	}
	.banner {
	    width: 100%;
	    height:100%;
	}
	.mp-caption {
	    position: relative;
	    height: .7rem;
	    margin: .2rem .2rem  .2rem .2rem;
	    background-color: #e0ae66;
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
	.mpg-flexbox {
	    width: 100%;
	}
	#wrapper{
		height: 4.5rem;
		overflow: hidden;
	}
	.mp-list {
		height: 8rem;
		overflow: hidden;
	}
	.mp-item{
		height:2rem;
		background: #fff;
		margin:0 .2rem .2rem;
	}
	.mp-item-img{
		width:37%;
		height:2rem;
		float:left;
	}
	.mp-item-show{
		width:100%;
		height:100%;
	}
	.mp-item-introduce{
		position:relative;
		width: 62%;
		height: 2rem;
		float: right;
	}
	.mp-item-title{
		padding: .08rem 0;
	    font-size: .28rem;
	    line-height: .36rem;
	    text-overflow: -o-ellipsis-lastline;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    color: #333;
	}
	.mp-item-details{
		overflow: hidden;
	    width: 100%;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #9e9e9e;
	}
	.mp-item-price{
		position: absolute;
		right:0;
		bottom:0;
		width: 100%;
		height: .6rem;
		font-size: .28rem;
		font-weight: 900;
	}
	.mp-item-money{
		float: left;
		padding-top: .2rem;
		color: #ff433e;
	}
	.mp-item-buy{
		float:right;	
	    min-width: 1.6rem;
	    height: .6rem;
	    background-color: #ff433e;
	    color: #fff;
	    font-size: .28rem;
	    line-height: .6rem;
	    text-align: center;
	}
</style>

