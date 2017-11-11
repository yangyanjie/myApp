<template>
	<div class="mp-page" id="main-page">
		<div class="mp-header">
			<router-link to="/" class="mp-header-left iconfont icon-return">
			</router-link>
			<h1 class="mp-header-title">
				<input type="text" name="keyword" id="search-input-bind" autocomplete="off" placeholder="输入城市或景点" class="mp-search-input">
				<a data-search="delete" class="mp-search-delete" id="search-form-delete" style="display: none;">
				</a>
				<input type="hidden" name="from" value="ts_search">
			</h1>
			<span class="mp-header-right">
				<a class="mp-search-submit" rel="nofollow" id="search-form-submit">
					搜索
				</a>
			</span>
		</div>
		<div class="mp-main">
			<div class="mp-filter mpf-border-bottom" style="display: none;">
				
			</div>
			<div>
				
			</div>
			<div class="mp-moreinfo" style="display:none;">
				<div>
					<div class="mp-pagination">
						<a href="javascript:void(0);" class="mp-disable-btn">
							上一页
						</a>
						<span class="mp-page-num">
							1
						</span>
						<a href="#">
							下一页
						</a>
					</div>
					<div class="mp-page-text">
						去哪儿门票
					</div>
				</div>
			</div>
			<div class="mp-loading-container" style="display: none;">
			</div>
		</div>
    </div>
</template>

<script>
</script>

<style>
	.mp-page {
	    top: 0;
	    left: 0;
	    width: 100%;
	    background: #f5f5f5;
	    background-color: #f5f5f5;
    }
    .mp-header {
    	z-index: 98;
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
	.mp-header-title {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    box-flex: 1;
	    -webkit-box-flex: 1;
	    -moz-box-flex: 1;
	    -ms-flex: 1;
	    position: relative;
	    height: .6rem;
	    margin: .14rem 0;
	    background: #fff;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.mp-search-delete .mp-search-submit{
	    color: #00afc7;
	    text-decoration: none;
	}
	input {
		font-size: 100%;
		line-height: 1.5;
    	font-family: tahoma,arial,"Hiragino Sans GB",simsun,sans-serif;
	}
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
	}
	.mp-search-submit {
	    display: inline-block;
	    width: .74rem;
	    margin-right: .04rem;
	    color: #fff;
	    font-size: .28rem;
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
</style>