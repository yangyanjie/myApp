<template>
  	<header class="mp-header">
  		<a href="#" class="mp-header-left iconfont icon-return" ></a>
  		<div class="mp-header-title" mp-role="title">
  			<a href="#" class="mp-linkarea">
  				<i class="mp-iconsearch iconfont icon-seach"></i>
  				<span class="mp-single-line">输入城市/景点/游玩主题</span>
  			</a>
  		</div>
  		<div class="mp-header-right" mp-role="right">
  			<a href="#" title="城市选择" class="mp-linkarea">
  				<span class="mp-nav-city">
  					北京
  					<i class="mp-arrow"></i>
  				</span>
  			</a>
  		</div>
  	</header>
</template>
<script>	
</script>
<style scoped>
	.mp-header {
		height: .88rem;
	    background: #00bcd4;
	    color: #fff;
	}
	.mp-header .mp-header-left {
		float: left;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .2rem;
		color: #fff;
		font-size: .36rem!important;
	}
	.mp-header-title {
		float:left;
		background: #fff;
		width:4.28rem;
	    height: .6rem;
	    margin-top:.14rem ;
	   	
	    
	}
	.mp-linkarea {
		display: block;
		line-height: .6rem;
		width:100%;
		height: 100%;
	}
	.mp-iconsearch {
		float:left;
		font-size: .4rem;
		margin: 0 .1rem;
	}
	.mp-single-line {
		float:left;
		height: .6rem;
	}
	.mp-header-title .mp-linkarea {
	    color: #e4e7ea;
	}
	.mp-header-right {
		display: inline-block;
		margin-left: .2rem;
	    height: 100%;
	}
	.mp-header-right .mp-linkarea {
	    float:left;
	    line-height: .88rem;
	    margin-right: .04rem;
	    color: #fff;
	}
	.mp-arrow {
		display: inline-block;
		width: 0;
	    height: 0;
	    border-left: .12rem solid transparent;
	    border-right: .12rem solid transparent;
	    border-top: .2rem solid #fff;
	}	
</style>
