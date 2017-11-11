<template>
	<div id="blank-suggest" class="suggest" style="background: white; top: 37px;">
		<div class="suggest-list" style="display: none;">
		</div>
		<div data-type="hotlist">	
			<div class="mp-hotsearch-head">
				<span class="mp-hotsearch-title">
					热门搜索
				</span>
				<span class="mp-hotsearch-refreshoption">
					<span class="mp-hotsearch-refreshtext iconfont icon-huanyihuan" @click="getChange">
						换一批
					</span>
				</span>
	        </div>
			<div class="mp-hotsearch-con">
				<div class="mp-hotsearch-group">
					<div class="mp-hotsearch-typecon">
						<div class="mp-hotsearch-typeinner">
							<img src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" class="mp-hotsearch-typeicon">
						</div>
					</div>
					<div class="mp-hotsearch-itemcon mp-sight-maxline" mp-role="hotsearch-select">
						<div class="mp-hotsearch-iteminner" mp-role="hotsearch-sight-inner" id="changeSight">
							<a href="#" class="mp-hotsearch-item" v-for="item in search.hotSight" :key="item.id">
								{{item.sight}}
							</a>
						</div>
					</div>
				</div>
				<div class="mp-hotsearch-group">
					<div class="mp-hotsearch-typecon">
						<div class="mp-hotsearch-typeinner">
							<img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png" class="mp-hotsearch-typeicon">
						</div>
					</div>
					<div class="mp-hotsearch-itemcon mp-region-maxline" mp-role="hotsearch-select">
						<div id="js-scroll-height" class="mp-hotsearch-iteminner" mp-role="hotsearch-region-inner">
							<a href="#" class="mp-hotsearch-cityitem" v-for="item in search.city" :key="item.id">
								{{item.city}}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mp-search-nearbycon">
			<div class="mp-search-nearbybtn">
				搜索身边的景点
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['search'],
		methods: {
			getChange(){
			   var changeSight = document.getElementById('changeSight');
			   var changeTop = changeSight.offsetTop;
			   var sectionHeight = changeSight.offsetHeight;
			   var hotSearchItem= document.getElementsByClassName('mp-hotsearch-item')[0];
			   var scrollHeight = hotSearchItem.offsetHeight;//每行高度
			   var secondScroll = document.getElementById("js-scroll-height");
			   var secondScrollHeight = secondScroll.offsetHeight;
			   var secondScrollTop = secondScroll.offsetTop;
			   
			   if(Math.abs(changeTop - scrollHeight * 2) < sectionHeight ){
				   	changeSight.style.top = (changeTop - scrollHeight * 2)+ "px";
			   }
			   else{
			   	    changeSight.style.top = 0;
			   }
			   
			   if(Math.abs(secondScrollTop - scrollHeight) < secondScrollHeight){
			   	   	secondScroll.style.top = (secondScrollTop - scrollHeight) + "px";
			   }
			   else{
			   		secondScroll.style.top = 0;
			   }
			}
		}
	}
</script>

<style scoped>
	.suggest {
	    z-index: 10;
	    width: 100%;
	    box-shadow: 0 1px 3px 1px #c7ced4;
	}
	.mp-history-head, .mp-hotsearch-head {
	    height: .64rem;
	    line-height: .64rem;
	    padding: 0 .2rem;
	    background-color: #f0f5f6;
	}
	.mp-hotsearch-head {
	    height: .64rem;
	    line-height: .64rem;
	    padding: 0 .2rem;
	    background-color: #f0f5f6;
	}
	.text-icon {
        font-family: 'icomoon';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	.mp-hotsearch-head {
	    height: .64rem;
	    line-height: .64rem;
	    padding: 0 .2rem;
	    background-color: #f0f5f6;
	}
	.mp-hotsearch-refreshoption {
	    float: right;
	    font-size: .26rem;
	    color: #00afc7;
	}
	.mp-history-head, .mp-hotsearch-head {
	    height: .64rem;
	    line-height: .64rem;
	    padding: 0 .2rem;
	    background-color: #f0f5f6;
	}
	.mp-hotsearch-group {
	    position: relative;
	    padding-left: .74rem;
	    background-color: #fff;
	    border-top: 1px solid #dce5e7;
	}
	.mp-hotsearch-typecon {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: .74rem;
	    height: 100%;
	    overflow: hidden;
	    line-height: 100%;
	    text-align: center;
	}
	.mp-hotsearch-typeinner {
	    position: absolute;
	    width: .72rem;
	    height: 70%;
	    top: 15%;
	    border-right: 1px solid #dce5e7;
	}
	.mp-hotsearch-typeicon {
	    width: .3rem;
	    height: .3rem;
	    position: relative;
	    top: 50%;
	    margin-top: -.15rem;
	    vertical-align: middle;
	}
	.mp-sight-maxline {
	    max-height: 1.8rem;
	}
	.mp-hotsearch-itemcon {
	    zoom: 1;
	    overflow: hidden;
	    position: relative;
	}
	.mp-hotsearch-iteminner {
	    zoom: 1;
	    overflow: hidden;
	    position: relative;
	    left: 0;
	    top: 0;
	}
	.mp-hotsearch-item {
	    display: block;
	    float: left;
	    height: .36rem;
	    max-width: 2.89rem;
	    line-height: .36rem;
	    text-align: center;
	    display: block;
	    padding-left: .3rem;
	    padding-right: .3rem;
	    border-right: 1px dashed #c9cccd;
	    color: #333;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    padding-top: .25rem;
	    padding-bottom: .25rem;
	}
	.mp-hotsearch-group:last-child {
	    border-bottom: 1px solid #dce5e7;
	}
	.mp-hotsearch-group {
	    position: relative;
	    padding-left: .74rem;
	    background-color: #fff;
	    border-top: 1px solid #dce5e7;
	}
	.mp-hotsearch-typecon {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: .74rem;
	    height: 100%;
	    overflow: hidden;
	    line-height: 100%;
	    text-align: center;
	}
	.mp-hotsearch-typeinner {
	    position: absolute;
	    width: .72rem;
	    height: 70%;
	    top: 15%;
	    border-right: 1px solid #dce5e7;
	}
	.mp-hotsearch-typeicon {
	    width: .3rem;
	    height: .3rem;
	    position: relative;
	    top: 50%;
	    margin-top: -.15rem;
	}
	.mp-region-maxline {
	    max-height: .9rem;
	}
	.mp-hotsearch-itemcon {
	    zoom: 1;
	    overflow: hidden;
	    position: relative;
	}
	.mp-hotsearch-iteminner {
	    zoom: 1;
	    overflow: hidden;
	    position: relative;
	    left: 0;
	    top: 0;
	}
	.mp-hotsearch-cityitem {
	    display: block;
	    float: left;
	    height: .36rem;
	    width: 24.5%;
	    line-height: .36rem;
	    text-align: center;
	    display: block;
	    border-right: 1px dashed #c9cccd;
	    color: #333;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-top: .25rem;
	    margin-bottom: .25rem;
	}
	.mp-search-nearbycon {
	    padding: .2rem;
	}
	.mp-search-nearbybtn {
	    height: .72rem;
	    line-height: .72rem;
	    background-color: #fff;
	    text-align: center;
	    font-size: .26rem;
	    color: #333;
	    border: 1px solid #dde1e3;
	    border-radius: 2px;
	}
</style>