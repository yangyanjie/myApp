<template>
	<div>
		<div class="palace-box" v-show="flag">
			<div id="jq-download" style="-webkit-backdrop-filter: blur(10px);position:fixed;top:0;left:0;z-index:5;height:60px;width:100%;background-color:rgba(0, 0, 0, 0.6);font-size:12px;padding:10px 0;box-sizing: border-box">
			<div style="width:60px;text-align:center;position:absolute;">
				<img style="width:40px;height:40px" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png"></div>
			<div style="position:absolute;left:60px">
				<div style="font-size:22px;color: #25A4BB;font-weight:bold;line-height:22px">去哪儿旅行</div>
				<div style="color: #c4c4c4;line-height:20px">超过
				<span style="font-size:14px;color:#fab400;font-weight:bold">4.6亿</span>人的聪明选择</div></div>
			<div style="padding:5px 10px 0 0;font-size:0;position:relative">
				<div id="jq-content" style="border-bottom:3px solid #e58700;border-radius:5px;background-color:#e58700;top:2px;right:45px;position:absolute">
				<div style="width:80px;height:33px;background-color:#f4b000;font-size:14px;text-align:center;border-radius:5px;color:#fff;line-height:33px;font-weight:bold" id="downloadHTML">下载客户端</div></div>
			</div>
			<div id="closeDiv" style="position:absolute;top:5px;right:5px;width:20px;height:20px" v-on:click="handleClick" >
				<img style="width:100%;height:100%" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/modifydelete.png"></div>
			</div>
		</div>
	  	<div class="mp-header">
			<a class="mp-header-back" href="javascript:window.history.back();" id="msgoback">
				<span class="iconfont icon-return"></span>
			</a>
			<h1>我在故宫等你</h1>
			<a class="mp-header-bar mp-header-logo" href="//touch.piao.qunar.com/touch/">
				<span class="mp-iconfont-head iconfont icon-jingdian"></span>
				首页
			</a>
		</div>
	</div>
</template>
<script>
	
	export default {
		data() {
			 return {flag : true};
		},
		methods:{
			handleClick(){
				return this.flag = !this.flag
			}
		}
	 }

</script>
<style scoped>
	.mp-header {
	    position: relative;
	    background: #1ba9ba;
	    text-align: center;
	    color: #fff;
	    border-bottom: #1b7a8b .02rem solid;
	    height: .88rem;
	    line-height: .88rem;
	}
	.palace-box{
		width:100%;
		height:60px;
		background:#000;
	}
	.mp-header-back{
		position: absolute;
	    top: 0;
	    left:0;
	    width: .88rem;
	    height: .88rem;
	    z-index: 91;
	    font-size: .32rem;
	}
	.mp-header-back, .mp-header-logo {
	    color: #fff;
	}
	.mp-header h1 {
	    overflow: hidden;
	    margin: 0 1rem;
	    font-weight: normal;
	    font-size: .32rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #fff;
	}
	.mp-header-bar {
	    right: 0;
	    font-size: .24rem;
	}
	.mp-iconfont-head {
		font-size: .4rem;
	    display: inline-block;
	    width: .88rem;
	    height: .88rem;
	    font-size: .36rem;
	    line-height: .88rem;
	    text-decoration: none;
	}
	.mp-header-logo {
	    line-height: .36rem;
	}
	.mp-header-back, .mp-header-bar {
	    position: absolute;
	    top: 0;
	    width: .88rem;
	    height: .88rem;
	}
	.mp-header-logo .mp-iconfont-head {
	    display: block;
	    height: auto;
	    padding-top: .1rem;
	    line-height: 1;
	}
	.mp-header-bar .mp-iconfont-head {
	    font-size: .4rem;
	}
	.mp-iconfont-head {
	    display: inline-block;
	    width: .88rem;
	    height: .88rem;
	    font-size: .36rem;
	    line-height: .88rem;
	    text-decoration: none;
	}
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
	    height: 35px;
	    margin:10px;
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
</style>

