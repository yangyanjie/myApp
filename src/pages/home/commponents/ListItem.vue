<template>
	<div class="mp-listitem-box">
		<ul class="mp-listitem-con clearfix">
			<li class="mp-listentrance-item">
				<span class="iconfont icon-dingwei1"></span>
				定位失败
			</li>
			<li class="mp-listentrance-item listentrance-second" >
					<span class="iconfont icon-qiu"></span>
					5折泡温泉
			</li>
		</ul>
		<ul class="mp-activity-con clearfix">
			<li class="mp-activity-item mp-border-right">
				<div class="mp-activity-introduce">
					<p class="mp-activity-change">精选温泉</p>
					<i class="mp-activity-spr">5折泡温泉</i>
				</div>
				<div class="mp-activity-imag">
					<img class="mp-activity-pic" src="../../images/a.jpg" alt="" />
				</div>
			</li>
			<li class="mp-activity-item mp-activity-big">
				<div class="mp-activity-introduce">
					<p class="mp-activity-change">金秋大促</p>
					<i class="mp-activity-spr">门票1元起</i>
				</div>
				<div class="mp-activity-imag">
					<img class="mp-activity-pic" src="../../images/2.png" alt="" />
				</div>
			</li>
		</ul>
	</div>	
</template>
<script>
	
	export default {}

</script>
<style scoped>
	.mp-listitem-box{
		overflow: hidden;
	}
	.mp-listitem-con {
		width:100%;
		background:#fff;
		border-top:1px solid #ccc;
	}
	.mp-listentrance-item{
	    width: 50%;
	    height: .98rem;
	    font-size: .28rem!important;
	    color: #212121!important;
	    float:left;
	    line-height: .98rem;
	    text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		box-sizing:border-box;
		border-right:1px solid #ccc;
	}
	.listentrance-second{
		border-right:0;
	}
	.mp-listentrance-spring{
		font-size: .28rem;
	    color: #212121;
	}
	.mp-activity-con{
	    width: 100%;
	    margin-top: .2rem;
	    background-color: #fff;
		border-top:1px solid #ccc;
	}
	.mp-activity-item {
	    width: 50%;
	    height: 1.4rem;
	    float: left;
	    color: #212121;
	    font-size: .28rem;
	    box-sizing:border-box;
		border-right:1px solid #ccc;
	}
	.mp-activity-big{
		border-right:0;
	}
	.mp-activity-introduce{
		width:50%;
	    height: 1.15rem;
	    float:left;
	    line-height: .5rem;
		text-align: center;
		padding-top: .25rem;
	}
	.mp-activity-change{
		color:red;
		width:100%;
		white-space:nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
	}
	.mp-activity-spr{
		width:100%;
		white-space:nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color:#ccc;
	}
	.mp-activity-imag{
		width:50%;
	    height: 1.4rem;
	    float:left;
	}
	.mp-activity-pic{
		width:100%;
		height:100%;
	}
</style>
