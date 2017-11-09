<template>
	<div class="hello">
		<!-- pic -->
	  	<div class="mp-imgavatar">
		    <img class="mp-imgavatar-img" src="https://imgs.qunarzz.com/p/tts2/1707/43/8250a273d1946502.jpg_640x360_5df82a05.jpg" alt="[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游">
		    <div class="mp-imgavatar-mask"></div>
		    <div class="mp-imgavatar-infocon">
		        <span class="mp-imgavatar-left">出发地:北京</span>
		        <span class="mp-imgavatar-right">北京旭冉之旅</span>
		    </div>
		    <div class="mp-option-area" mp-role="collectionAndShare"></div>
		</div>
		<!-- product -->
		<div class="mp-prdcard-con" mp-role="productCardCon">
		    <h3 class="mp-prdcard-name">[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游</h3>
		    <div class="mp-prdcard-pricecon">
		        <em class="mp-prdcard-priceicon">¥</em>
		        <span class="mp-prdcard-pricetext">208</span>
		        <span class="mp-prdcard-gray">起</span>
		        <span class="mp-bookingahead-text">可订明日</span>
		        <span class="mp-prdcard-supplier">已售:859</span>
		    </div>
			<div class="mp-prdcard-tagcon">
			    <div class="mp-prdcard-tag-item">
			        <span class="icon-zhiwuyuan iconfont"></span>
			        <span class="mp-prdcard-tag-desc">条件退</span>
			    </div>
			    <div class="mp-prdcard-tag-item">
			        <span class="icon-zhiwuyuan iconfont"></span>
			        <span class="mp-prdcard-tag-desc">铁定成团</span>
			    </div>
			    <div class="mp-prdcard-tag-item">
			        <span class="icon-zhiwuyuan iconfont"></span>
			        <span class="mp-prdcard-tag-desc">无自费</span>
			    </div>
			    <div class="mp-prdcard-tag-item">
			        <span class="icon-zhiwuyuan iconfont"></span>
			        <span class="mp-prdcard-tag-desc">无购物</span>
			    </div>
			</div>
		</div>
		<!-- Satisfied -->
		<div class="mp-commentsinfo-con" style="margin-bottom:0;">
		    <a href="javascript:;" class="mpg-linkarea" ></a>
		        <span class="mp-commentswell-score">4.9</span>
		        <span class="mp-commentswell-text">分</span>
		        <span class="mp-comments-tagscore">非常满意</span>
		        <span class="mp-comments-totalnum">用户评论(282)&nbsp;
		        <span class="mp-iconfont mp-comments-rightarrow">></span>
		        </span>
		</div>
	</div>
</template>
<script>
</script>

<style scopet>
/*pic*/
	.mp-imgavatar {
	    overflow: hidden;
	    position: relative;
	    height: 4rem;
	}
	.mp-imgavatar-img {
	    width: 100%;
	    min-height: 4rem;
	}
	.mp-imgavatar-mask {
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    height: .93rem;
	    color: #fff;
	    background: linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0));
	}
	.mp-imgavatar-infocon {
	    overflow: hidden;
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    font-size: 0;
	}
	.mp-imgavatar-left {
	    margin-left: .2rem;
	}
	.mp-imgavatar-left, .mp-imgavatar-right {
	    overflow: hidden;
	    display: inline-block;
	    height: .34rem;
	    margin-bottom: .22rem;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .34rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-option-area {
	    position: absolute;
	    top: 0;
	    right: .1rem;
	    margin-top: .1rem;
	}
	/*product*/
	.mp-prdcard-con {
	    position: relative;
	    margin-top: -.1rem;
	    padding: .2rem .2rem 0 .2rem;
	    background: #fff;
	    -webkit-border-radius: .1rem .1rem 0 0;
	    -moz-border-radius: .1rem .1rem 0 0;
	    border-radius: .1rem .1rem 0 0;
	}
	.mp-prdcard-name {
	    overflow: hidden;
	    display: -webkit-box;
	    color: #212121;
	    font-size: .36rem;
	    line-height: .44rem;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
	}
	.mp-prdcard-pricecon {
	    overflow: hidden;
	    margin: .16rem 0;
	    height: .48rem;
	    font-size: 0;
	}
	.mp-prdcard-priceicon {
	    color: #ff8300;
	    font-size: .24rem;
	}
	.mp-prdcard-pricetext {
	    color: #ff8300;
	    font-size: .48rem;
	}
	.mp-prdcard-gray, .mp-prdcard-supplier {
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	.mp-bookingahead-text {
	    color: #616161;
	    font-size: .24rem;
	    margin-left: .2rem;
	}
	.mp-prdcard-supplier {
	    color: #616161;
	    float: right;
	    height: .24rem;
	    margin-top: .2rem;
	}
	.mp-prdcard-tagcon {
	    overflow: hidden;
	    padding-bottom: .2rem;
	    font-size: 0;
	}
	.prdcard-tag-item:not(:last-child) {
	    margin-right: .2rem;
	}
	.mp-prdcard-tag-item {
	    float: left;
	    height: .34rem;
	    font-size: .24rem;
	    line-height: .34rem;
	}
	.mp-prdcard-tag-icon {
	    margin-right: .04rem;
	    color: #00afc7;
	    font-size: .28rem;
	    vertical-align: -.02rem;
	}
	.mpg-iconfont {
	    font-family: 'mpiconfont';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	/*staisfied*/
	.mp-commentsinfo-con {
	    position: relative;
	    margin-bottom: .2rem;
	    margin-top: .2rem;
	    background-color: #fff;
	    height: .8rem;
	    line-height: .8rem;
	}
	.mpg-linkarea {
	    position: absolute;
	    z-index: 2;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	}
	.mp-commentswell-score {
	    font-size: .4rem;
	    color: #00afc7;
	    margin-left: .2rem;
	}
	.mp-commentsinfo-con {
	    position: relative;
	    margin-bottom: .2rem;
	    margin-top: .2rem;
	    background-color: #fff;
	    height: .8rem;
	    line-height: .8rem;
	}
	.mp-commentswell-text {
	    color: #00afc7;
	}
	.mp-comments-tagscore {
	    display: inline-block;
	    margin-left: .1rem;
	    color: #616161;
	}
	.mp-comments-totalnum {
	    float: right;
	    position: relative;
	    top: .25rem;
	    display: inline-block;
	    line-height: .28rem;
	    font-size: .28rem;
	    margin-left: .16rem;
	    margin-right: .2rem;
	    color: #9e9e9e;
	}
	
</style>