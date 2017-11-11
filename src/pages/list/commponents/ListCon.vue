<template>
  	<div style="overflow:hidden;">
  		<div class="mp-header">
		    <router-link to="/" class="mp-header-left iconfont icon-return" >
		    </router-link>
		    <h1 class="mp-header-title">
		        <input data-search="keyword" type="text" placeholder="输入城市或景点" class="mp-search-input">
		        <a class="mp-search-delete" 
		        style="display: none;">
		        </a>
		        <input type="hidden">
		    </h1>
		    <span class="mp-header-right" >
		        <a class="mp-search-submit">
		            搜索
		        </a>
		    </span>
		</div>
		
		<div class="mp-tagfilter-list-Wrap">
			<div class="mp-tagfilter-list mp-tagilter-listInner" >
			    <div id="wrapper" class="js-mp-targfilter mp-tagfilter-list-inner">
			    	<div id="scroller" style="width: 42rem;">
			  			<ul class="mp-tagfilter-inner mp-tagfilter-con clearfix js-tagfilter-inner" >		
			    			<li v-for="item in listData.nav" key="item.id" class="mp-tagfilter-item mp-tarfilter-itemInline">
			      				<span class="mp-tagfilter-name mpf-border" >
			      					{{item.tit}}
			      				</span>
			      			</li>
				    	</ul>
			    	</div>
			    </div>
		    	<h3 class="mp-tagfilter-title mpf-border-bottom js-tagfilter-title">游玩景点
		    		<span class="mp-tagfilter-subtitle">(可多选)</span>
				</h3>			    	
			</div>
			<div class="mp-tagfilter-list mp-tagfilter-list-wrap js-mp-tagfilter-list" >
	    		<ul class="mp-tagfilter-inner mp-tagfilter-inner-first js-mp-tagfilter-inner clearfix" >
	    			<li v-for="item in listData.nav" class="mp-tagfilter-item">
		    			<span class="mp-tagfilter-name mpf-border">
		    					{{item.tit}}
		    			</span>
      				</li>
	    		</ul>
			</div>
			<div class="mp-tagfilter-expand mpf-border-left">
	    		<span @click="handleClick" class="mpg-iconfont iconfont icon-zhiwuyuan" >
			    </span>
			</div>
	  	</div>
	  	<!-- con -->
	  	<div mp-role="ticketCon">
			<ul class="mp-list" id="ticket-list">
			    	<router-link to="/tour/details/1" class="ticket-list-inner">
			    		<li v-for="item in listData.list" :key="item.id" class="mp-list-item mpg-flexbox">
				             <div class="mp-list-imgcon image-ready">
				                 <img class="mp-list-productimg" :src="item.img" :alt="item.tit">
				                 <span class="mp-list-bookingflag">
				                    <span class="mp-list-bookingtext">
				                        {{item.tit}}
				                    </span>
				                 </span>
				             </div>
				             <div class="mp-list-productinfo mpg-flexbox-item mpf-border-bottom">
				                 <h4 class="mp-list-productname mpg-ellipsis2">
				                     {{item.alt}}
				                 </h4>
			                <div class="mp-list-taglist" >
			                    <span class="mp-list-tagitemlight mpf-border-right">
		                         	{{item.local}}
			                    </span>
			                    <span class="mp-list-tagitem mpf-border-right">
		                         	{{item.price}}
			                    </span>
			                    <span class="mp-list-tagitem mpf-border-right">
		                         	{{item.shop}}
			                    </span>
			                </div>
		               
			                <div class="mp-list-priceinfo">
			                    <span class="mp-list-qunarprice">
			                         ¥
			                        <em>
			                            {{item.unitPrice}}
			                        </em>
			                    </span>
			                    <span class="mp-list-priceflag">
			                         起
			                    </span>
			                </div>
			                <div class="mp-list-moreinfo">
			                    <span class="mp-list-text mpf-border-left">
		                         	{{item.sold}}
			                    </span>
			                </div>
			             	</div>
	     				</li>
			    	</router-link>
			</ul>
		</div>
		<!-- footer -->
		<div class="mp-moreinfo">
		    <div>
		        <div class="mp-pagination">
		            <a href="javascript:void(0);" class="mp-disable-btn">
		                上一页
		            </a>
		            <span class="mp-page-num" >
		                1 / 16
		            </span>
		            <a href="javascript:;" >
		                下一页
		            </a>
		        </div>
		        <div class="mp-page-text">
		            去哪儿门票
		        </div>
		    </div>
		</div>
		<div class="mp-loading-container" >
		</div>
		<!-- footerNav -->
		<div class="mpw-dock mpw-dock-fadein js-mpw-fadein">
			<div class="mp-typefilter-outer">
			<ul class="mp-typefilter mpg-flexbox" >
			    <li class="mp-typefilter-item mpg-flexbox-layout" >
			        <div class="mp-typefilter-icon iconfont icon-leimupinleifenleileibie--">
			        </div>
			        <div class="mp-typefilter-name">
			            全部分类
			        </div>
			    </li>
			    <li class="mp-typefilter-item mpg-flexbox-layout" >
			        <div class="mp-typefilter-icon iconfont icon-shaixuan2">
			        </div>
			        <div class="mp-typefilter-name">
			            筛选
			        </div>
			    </li>
			    <li class="mp-typefilter-item mpg-flexbox-layout">
			        <div class="mp-typefilter-icon iconfont icon-paixu1">
			        </div>
			        <div class="mp-typefilter-name">
			            推荐排序
			        </div>
			    </li>
			</ul>
			</div>
		</div>
		
	</div>
</template>

<script>	

	require("../../../utils/iscroll-probe.js")

	export default {
		props: ["listData"],
		name:"listcon",
		methods: {
			handleClick: function() {
				var oNav = document.querySelector(".js-tagfilter-inner");
				var oTit = document.querySelector(".js-tagfilter-title");
				var oChoose = document.querySelector(".js-mp-tagfilter-list");
				var oNavList = document.querySelector(".js-mp-tagfilter-inner");
				var oH = document.querySelector(".js-mp-targfilter");

				if(oNav.style.display === "none") {
					oNav.style.display = "block";
					oTit.style.display = "none";
					oChoose.style.display="none";
					oNavList.style.display="none";
					oH.style.display="block";
				}else{
					oNav.style.display = "none";
					oTit.style.display = "block";
					oChoose.style.display="block";
					oNavList.style.display="block";
					oH.style.display="none";
				}
			}
		},
		mounted: function() {
			var beforeScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			 	window.addEventListener("scroll", function() {
					
		 		var afterScrollTop = document.body.scrollTop || document.documentElement.scrollTop,
		 			delta = afterScrollTop - beforeScrollTop;
		 			if(delta === 0) return false;
                    var oNpm = document.querySelector(".js-mpw-fadein");
                    if(delta>0){
                    	oNpm.style.transform = "translate(0, 0.8rem)"
                    }else{
                    	oNpm.style.transform = "translate(0, 0)";
                    }
                    beforeScrollTop = afterScrollTop;
			 	})
			
			this.myScroll = new IScroll("#wrapper", { scrollX: true, scrollY: false, mouseWheel: true });
		},
		updated: function() {
			this.myScroll.refresh();
		},
		destroyed: function() {
			window.onscroll = null;
		}
	}
</script>
<style >

	.mp-header {
	    z-index: 98;
	}
	.mp-header {
	    position: relative;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	}
	.mp-header-left {
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.mp-iconfont {
	    font-family: 'mpiconfont';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	}
	.mp-header-title {
	    padding: 0 .6rem 0 .2rem;
	}
	.mp-header-title {
	    box-sizing: border-box;
	    box-flex: 1;
	    position: relative;
	    height: .6rem;
	    margin: .14rem 0;
	    background: #fff;
	   	border-radius: .06rem;
	    line-height: .6rem;
	}
	.mp-header-right {
	    display: inline-block;
	    height: .88rem;
	    line-height: .88rem;
	    padding: 0 .1rem;
	}
	.mp-search-input {
	    position: relative;
	    display: block;
	    width: 100%;
	    height: .4rem;
	    line-height: .4rem;
	    padding: .1rem 0;
	    border: 0;
	    font-family: "Microsoft Yahei",Arial;
	    font-size: .28rem;
	    border-radius: .06rem;
	}
	.mp-search-delete {
	    display: none;
	    position: absolute;
	    top: .04rem;
	    right: 0;
	    width: .58rem;
	    height: .58rem;
	    background: url(//simg1.qunarzz.com/piao/images/touch/v2/sprites.png) -.48rem .1rem no-repeat;
	    background-size: 3rem 3rem;
	}
	.mp-header-right {
	    display: inline-block;
	    height: .88rem;
	    padding: 0 .1rem;
	    line-height: .88rem;
	}
	.mp-search-submit {
	    display: inline-block;
	    width: .74rem;
	    margin-right: .04rem;
	    color: #fff;
	    font-size: .28rem;
	}
	.mp-tagfilter-list-inner {
		overflow-x: auto; 
		height: 0.8rem; 
		overflow-y: hidden; 
		height:1.15rem;
	}
	.mp-tagfilter-item {
	    float: left;
	    position: relative;
	    padding: .08rem .08rem;
	}
	.mp-tagfilter-con {
		width: 43rem; 
		height:.8rem;
	}
	.mp-tagfilter-list-wrap {
		position:absolute;
		left:0;
		top: .7rem;
		background:#ccc;
		z-index:9;
		overflow:auto; 
		width: 102%; 
		overflow-x: hidden;
	}
	.mp-tagfilter-list-wrap ul{
		padding-right: .1rem;
	}
	.mp-tagfilter-name {
	    display: block;
	    min-width: .26rem;
	    padding: 0 .22rem;
	    background: #fff;
	    color: #212121;
	    font-size: .26rem;
	    line-height: .56rem;
	    border-radius: .04rem;
	}
	.mp-tagfilter-expand {
	    position: absolute;
	    z-index: 3;
	    top: 0;
	    right: 0;
	    width: .8rem;
	    height: .84rem;
	    text-align:center;
	    line-height:0.84rem;
	}
	.mp-tagfilter-container, .mp-tagfilter-title, .mp-tagfilter-list, .mp-tagfilter-expand {
	    background: #e5e7e8;
	}
	.mp-tagfilter-list-Wrap {
		position: relative;
	}
	/*con*/
	.mp-list {
    	background: #fff;
	}
	.mp-list-item {
	    position: relative;
	    display:flex;
	}
	.image-ready {
	    background: none !important;
	}
	.mp-list-imgcon {
	    margin: .2rem;
	}
	.mp-sight-imgcon, .mp-list-imgcon {
	    position: relative;
	    background: url(//s.qunarzz.com/piao_topic/image/common/default/140x140.png) no-repeat;
	    background-size: contain;
	    width: 1.6rem;
	    height: 1.6rem;
	}
	.mp-list-productimg {
	    width: 1.6rem;
	    height: 1.6rem;
	}
	.mp-list-bookingflag {
	    position: absolute;
	    left: -.04rem;
	    top: -.04rem;
	    height: .24rem;
	    padding: .02rem;
	    background: #00bcd4;
	    color: #fff;
	    line-height: .24rem;
	}
	.mp-list-bookingtext {
	    display: block;
	    font-size: .24rem;
	    transform: scale(.83);
	}
	.mp-list-productinfo {
	    padding: .2rem .2rem .2rem 0;
	    height: 1.6rem;
	    overflow: hidden;
	    position:absolute;
	    left:2rem;
	}
	.mp-list-productname {
	    line-height: .36rem;
	    font-size: .3rem;
	}
	
	.mp-list-tagitemlight {
	    display: inline;
	    padding: 0 .1rem;
	    font-size: .24rem;
	    color: #00bcd4;
	}
	.mp-list-tagitem {
	    display: inline;
	    padding: 0 .1rem;
	    font-size: .24rem;
	    color: #616161;
	}
	.mp-list-priceinfo {
	    position: absolute;
	    right: .2rem;
	    bottom: .48rem;
	    height: .32rem;
	    line-height: .32rem;
	    color: #9e9e9e;
	    text-align: right;
	}
	.mp-list-qunarprice {
	    font-size: .22rem;
	    font-weight: bold;
	    color: #ff8300;
	}
	.mp-list-moreinfo {
	    position: absolute;
	    left: -.1rem;
	    bottom: .2rem;
	    width: 100%;
	    font-size: 0;
	    color: #9e9e9e;
	}
	.mp-list-text {
	    padding: 0 .1rem;
	    font-size: .22rem;
	}
	.mp-list-text[data-v-32d9b171] {
	    padding: 0 .1rem;
	    font-size: .22rem;
	}
	/*hideTit*/
	.mp-tagfilter-title {
	    display: none;
	    position: relative;
	    z-index: 3;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .8rem;
	    text-indent: .2rem;
	}
	.mp-tagfilter-unfold .mp-tagfilter-list {
	    box-sizing: border-box;
	    overflow: auto;
	    position: absolute;
	    top: .8rem;
	    left: 0;
	    margin-right: 0;
	    width: 100%;
	    height: auto;
	    box-shadow: 0 0 0.2rem rgba(0,0,0,.15);
	}
	.mp-tagfilter-unfold .mp-tagfilter-inner {
	    width: auto !important;
	    padding-bottom: .2rem;
	    padding-top: .6rem!important;
	    height: 0.9rem;
	}
	.mp-tagfilter-inner-first {
		display: none;
	}
	.mp-tagfilter-unfold .mp-tagfilter-item {
	    padding-top: .08rem;
	    padding-bottom: .08rem;
	}
	.mp-tagfilter-name {
	    display: block;
	    min-width: .26rem;
	    padding: 0 .22rem;
	    background: #fff;
	    color: #212121;
	    font-size: .26rem;
	    line-height: .56rem;
	    border-radius: .04rem;
	}
	
	.mp-tagfilter-unfold .mp-tagfilter-list {
	    overflow: auto;
	    margin-right: 0;
	    width: 100%;
	    height: auto;
	}
	.mp-tagfilter-list {
	    max-height: 6rem;
	    padding: .03rem .12rem;
	}
	/*footer*/
	.mp-moreinfo {
	    margin: .2rem 0;
	    color: #00afc7;
	    line-height: .82rem;
	    text-align: center;
	}
	.mp-pagination {
	    height: .7rem;
	    line-height: .7rem;
	}
	div {
	    display: block;
	}
	.mp-moreinfo {
	    margin: .2rem 0;
	    color: #00afc7;
	    line-height: .82rem;
	    text-align: center;
	}
	.mp-pagination a.mp-disable-btn {
	    background: #bdbdbd;
	    color: #fff;
	    border: 0;
	}
	.mp-pagination a, .mp-pagination a:link, .mp-pagination a:visited, .mp-pagination a:hover, .mp-pagination a:active {
	    display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.mp-pagination .mp-page-num {
	    color: #212121;
	    line-height: .6rem;
	    padding: 0 15px;
	}
	.mp-pagination a, .mp-pagination a:link, .mp-pagination a:visited, .mp-pagination a:hover, .mp-pagination a:active {
	    display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.mp-moreinfo .mp-page-text {
	    padding-top: .2rem;
	    line-height: .3rem;
	    font-size: .3rem;
	}
	.mp-loading-container {
	    height: 2rem;
	    color: #666;
	    line-height: 2rem;
	    text-align: center;
	    display: none;
	}
	.mp-tarfilter-itemInline {
		display: inline;
	}
	.mp-typefilter {
	    text-align: center;
	    display: flex;
	    justify-content: space-around;
	}
	.mp-typefilter-item {
	    padding: .08rem .1rem 0;
	    color: #fff;
	}
	.mpg-flexbox-layout {
	    width: .02rem;
	    flex:1;
	}
	.mp-typefilter-icon {
	    display: inline-block;
	    position: relative;
	    height: .32rem;
	    font-size: .32rem;
	    vertical-align: top;
	}
	.mpg-iconfont {
	    font-family: 'mpiconfont';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	}
	.mp-typefilter-name {
	    overflow: hidden;
	    height: .4rem;
	    font-size: .24rem;
	    line-height: .4rem;
	}
	.mp-typefilter-outer {
	    position: relative;
	    background: rgba(0,0,0,.8);
	}
	.mpw-dock {
	    background: transparent none;
	    z-index: 4;
	}
	.mpw-dock {
	    position: fixed;
	    z-index: 92;
	    bottom: 0;
	    right: 0;
	    left: 0;
	    width: 100%;
	    transition: transform .3s ease-out;
	}
	.ticket-list-inner {
		color: #333;
	}
	.mp-tagilter-listInner {
		overflow-x: hidden; 
		overflow-y: hidden; 
		height: .8rem;
	}
</style>
