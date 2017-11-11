<template>
	<div class="mp-listitem-box">
		<ul class="mp-listitem-con clearfix">
			<li class="mp-listentrance-item">
				<span class="iconfont icon-dingwei1"></span>
				<span class="mp-listentrance">定位中</span>
			</li>
			<li class="mp-listentrance-item listentrance-second">
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
					<img class="mp-activity-pic" src="../images/a.jpg" alt="" />
				</div>
			</li>
			<li class="mp-activity-item mp-activity-big">
				<router-link to="/activity">
					<div class="mp-activity-introduce">
						<p class="mp-activity-change">金秋大促</p>
						<i class="mp-activity-spr">门票1元起</i>
					</div>
				</router-link>
				<div class="mp-activity-imag">
					<img class="mp-activity-pic" src="../images/2.png" alt="" />
				</div>
			</li>
		</ul>
	</div>	
</template>
<script>
	var map = new AMap.Map('container',{
        resizeEnable: true,
        zoom: 10,
        center: [116.480983, 40.0958]
    });
    mapObj = new AMap.Map('iCenter');
	mapObj.plugin('AMap.Geolocation', function () {
	    geolocation = new AMap.Geolocation({
	        enableHighAccuracy: true,//是否使用高精度定位，默认:true
	        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
	        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
	        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
	        showButton: true,        //显示定位按钮，默认：true
	        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
	        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
	        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
	        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
	        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
	        zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
	    });
	    mapObj.addControl(geolocation);
	    geolocation.getCurrentPosition();
	    AMap.event.addListener(geolocation, 'complete', function(res){
			//var mpListentrance = document.getElementsByClassName("mp-listentrance")[0];
			//mpListentrance.innerHTML = res.addressComponent.province;
	    });
	    AMap.event.addListener(geolocation, 'error', function(err){
	    	var mpListentrance = document.getElementsByClassName("mp-listentrance")[0];
			mpListentrance.innerHTML = "定位失败";
	    });      //返回定位出错信息
	});
	

</script>
<style scoped>
	.mp-listitem-box{
		overflow: hidden;
		background: #f5f5f5;
	}
	.mp-listitem-con {
		width:100%;
		background:#fff;
		border-top:1px solid #f5f5f5;
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
		border-right:1px solid #f5f5f5;
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
		border-right:1px solid #f5f5f5;
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
		font-size: .2rem;
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
