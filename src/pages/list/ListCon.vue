<template>
  	<div>
  		<div class="mp-header">
		    <a class="mp-header-left iconfont icon-return" mp-role="left">
		        
		    </a>
		    <h1 class="mp-header-title" mp-role="title">
		        <input data-search="keyword" type="text" name="keyword" id="search-input-bind"
		        autocomplete="off" placeholder="输入城市或景点" class="mp-search-input">
		        <a data-search="delete" class="mp-search-delete" id="search-form-delete"
		        style="display: none;">
		        </a>
		        <input type="hidden" name="from" value="ts_search">
		    </h1>
		    <span class="mp-header-right" mp-role="right">
		        <a data-search="submit" class="mp-search-submit" rel="nofollow" id="search-form-submit">
		            搜索
		        </a>
		    </span>
		</div>
		<div class="mp-tagfilter-list-Wrap">
			<div class="mp-tagfilter-list" mp-role="listCon" style="overflow: hidden;">
			    <scroller>
		  			<ul class="mp-tagfilter-inner clrfix" mp-role="sightList" style="width: 4913px; transition-property: transform; transform-origin: 0px 0px 0px; transform: translate(0px, 0px) translateZ(0px);">
			    	<li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="八达岭长城">
			      		<span class="mp-tagfilter-name mpf-border" mp-role="sightText">八达岭长城</span>
			      	</li>
			    	<li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="古北水镇">
			      		<span class="mp-tagfilter-name mpf-border" mp-role="sightText">古北水镇</span></li>
			    	<li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="故宫">
			      		<span class="mp-tagfilter-name mpf-border" mp-role="sightText">故宫</span></li>
			    	<li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="司马台长城">
			      		<span class="mp-tagfilter-name mpf-border" mp-role="sightText">司马台长城</span>
			      	</li>
			    	<li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="鸟巢">
			      		<span class="mp-tagfilter-name mpf-border" mp-role="sightText">鸟巢</span>
			     	</li>
			    	<li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="天安门广场">
			      		<span class="mp-tagfilter-name mpf-border" mp-role="sightText">天安门广场</span>
			      	</li>
			    	<li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="颐和园">
			      		<span class="mp-tagfilter-name mpf-border" mp-role="sightText">颐和园</span>
			      	</li>
			    	<li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="水立方">
			      		<span class="mp-tagfilter-name mpf-border" mp-role="sightText">水立方</span>
			      	</li>
			    	<li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="古北水镇天然温泉">
			      		<span class="mp-tagfilter-name mpf-border" mp-role="sightText">古北水镇天然温泉</span>
			      	</li>
			    	<li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="什刹海">
			      		<span class="mp-tagfilter-name mpf-border" mp-role="sightText">什刹海</span>
			     	</li>
			    	<li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="恭王府">
			      		<span class="mp-tagfilter-name mpf-border" mp-role="sightText">恭王府</span>
			      	</li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="定陵">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">定陵</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="古北口文化文物旅游区">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">古北口文化文物旅游区</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="天坛公园">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">天坛公园</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="明十三陵">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">明十三陵</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="慕田峪长城">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">慕田峪长城</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="北京动物园">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">北京动物园</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="北京杜莎夫人蜡像馆">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">北京杜莎夫人蜡像馆</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="八达岭长城缆车">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">八达岭长城缆车</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="北京海洋馆">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">北京海洋馆</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="恭王府大戏楼">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">恭王府大戏楼</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="泰山皮影戏">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">泰山皮影戏</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="京东石林峡">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">京东石林峡</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="前门大街">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">前门大街</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="坡峰岭">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">坡峰岭</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="天安门城楼">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">天安门城楼</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="奥林匹克公园">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">奥林匹克公园</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="张裕爱斐堡">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">张裕爱斐堡</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="毛主席纪念堂">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">毛主席纪念堂</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="中国科学技术馆">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">中国科学技术馆</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="八达岭野生动物园">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">八达岭野生动物园</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="北京大学">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">北京大学</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="北海公园">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">北海公园</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="古北之光温泉">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">古北之光温泉</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="唐山湾月坨岛温泉">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">唐山湾月坨岛温泉</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="圆明园">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">圆明园</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="天津之眼摩天轮">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">天津之眼摩天轮</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="天津古文化街">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">天津古文化街</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="月坨岛（月岛）">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">月坨岛（月岛）</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="段家大院精品温泉酒店">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">段家大院精品温泉酒店</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="海河外滩公园">
				       <span class="mp-tagfilter-name mpf-border" mp-role="sightText">海河外滩公园</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="清华大学">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">清华大学</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="烟袋斜街">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">烟袋斜街</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="金海湖风景区">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">金海湖风景区</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="香山公园">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">香山公园</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="万科石京龙滑雪场">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">万科石京龙滑雪场</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="云佛山度假村">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">云佛山度假村</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="京东大峡谷">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">京东大峡谷</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="什刹海酒吧街">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">什刹海酒吧街</span>
				    </li>
				    <li class="mp-tagfilter-item" mp-role="sightItem" data-click="tl_top_suggest" data-click-dist-city="" data-click-from-value="凤凰岭">
				        <span class="mp-tagfilter-name mpf-border" mp-role="sightText">凤凰岭</span>
				    </li>
			  	</ul>
			</scroller>
			</div>
			<div class="mp-tagfilter-expand mpf-border-left">
	    		<span class="mpg-iconfont iconfont icon-zhiwuyuan" mp-role="moreSight" data-click="tl_top_suggest_arrow">
			    </span>
			</div>
	  	</div>

	  	<!-- con -->

	  	<div mp-role="ticketCon">
		    <ul class="mp-list" id="ticket-list">
		       <!--  <li class="mp-list-item mpg-flexbox">
		            <div class="mp-list-imgcon image-ready">
		                <img class="mp-list-productimg" src="http://img1.qunarzz.com/p/tts2/1706/b9/68688c37bace6c02.jpg_110x110_32e4422c.jpg"
		                alt="【10点天天发】北京八达岭长城+鸟巢水立方纯玩一日游">
		                <span class="mp-list-bookingflag">
		                    <span class="mp-list-bookingtext">
		                        可订明日
		                    </span>
		                </span>
		            </div>
		            <div class="mp-list-productinfo mpg-flexbox-item mpf-border-bottom">
		                <h4 class="mp-list-productname mpg-ellipsis2">
		                    【10点天天发】北京八达岭长城+鸟巢水立方纯玩一日游
		                </h4>
		                <div class="mp-list-taglist">
		                    <span class="mp-list-tagitemlight mpf-border-right">
		                        北京出发
		                    </span>
		                    <span class="mp-list-tagitem mpf-border-right">
		                        无自费
		                    </span>
		                    <span class="mp-list-tagitem mpf-border-right">
		                        无购物
		                    </span>
		                </div>
		               
		                <div class="mp-list-priceinfo">
		                    <span class="mp-list-qunarprice">
		                        ¥
		                        <em>
		                            79
		                        </em>
		                    </span>
		                    <span class="mp-list-priceflag">
		                        起
		                    </span>
		                </div>
		                <div class="mp-list-moreinfo">
		                    <span class="mp-list-text mpf-border-left">
		                        已售2061
		                    </span>
		                </div>
		            </div>
		           <!--  <a href="javascript:;"
		            mp-role="analytics" class="mp-list-link" title="【10点天天发】北京八达岭长城+鸟巢水立方纯玩一日游">
		                【10点天天发】北京八达岭长城+鸟巢水立方纯玩一日游
		            </a> -->
		        </li> -->
		    </ul>
		</div>
	</div>
</template>
<script>	

	export default {
		name:"listcon",
		components: {},
		data: function() {return {listData:[]}},
		created: function() {
			this.$axios.get('/api/list.json'
			  )
			  .then(function (res) {
			  		console.log(res.data.data.list)
			        let listData = res.data.data.list;
			        var html = ""
			        
			        listData.map((value) => {
			      	    return html += `
			      	    <li key="${value.id}" class="mp-list-item mpg-flexbox">
				            <div class="mp-list-imgcon image-ready">
				                <img class="mp-list-productimg" src="${value.img}"
		                alt="${value.alt}">
				                <span class="mp-list-bookingflag">
				                    <span class="mp-list-bookingtext">
				                        可订明日
				                    </span>
				                </span>
				            </div>
				            <div class="mp-list-productinfo mpg-flexbox-item mpf-border-bottom">
				                <h4 class="mp-list-productname mpg-ellipsis2">
				                    ${value.alt}
				                </h4>
			                <div class="mp-list-taglist">
			                    <span class="mp-list-tagitemlight mpf-border-right">
		                        ${value.local}
			                    </span>
			                    <span class="mp-list-tagitem mpf-border-right">
		                        ${value.price}
			                    </span>
			                    <span class="mp-list-tagitem mpf-border-right">
		                        ${value.shop}
			                    </span>
			                </div>
		               
			                <div class="mp-list-priceinfo">
			                    <span class="mp-list-qunarprice">
			                        ¥
			                        <em>
			                            ${value.unitPrice}
			                        </em>
			                    </span>
			                    <span class="mp-list-priceflag">
			                        起
			                    </span>
			                </div>
			                <div class="mp-list-moreinfo">
			                    <span class="mp-list-text mpf-border-left">
		                        ${value.sold}
			                    </span>
			                </div>
			            </div>
			           <!--  <a href="javascript:;"
			            mp-role="analytics" class="mp-list-link" title="【10点天天发】北京八达岭长城+鸟巢水立方纯玩一日游">
			                【10点天天发】北京八达岭长城+鸟巢水立方纯玩一日游
			            </a> -->
        			</li>`;

			        })

			        document.getElementById("ticket-list").innerHTML = html;

			  })
			  .catch(function (error) {
			      console.log(error)
			  })
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
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	.mp-header-title {
	    padding: 0 .6rem 0 .2rem;
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
	    line-height: .88rem;
	    padding: 0 .1rem;
	}
	.mp-search-submit {
	    display: inline-block;
	    width: .74rem;
	    margin-right: .04rem;
	    color: #fff;
	    font-size: .28rem;
	}
	.mp-tagfilter-list {
	    overflow: hidden;
	    margin-right: .7rem;
	    height: .68rem;
	    max-height: 6rem;
	    background: #e5e7e8;
	    padding: .08rem .12rem;

	}
	.mp-tagfilter-item {
	    float: left;
	    position: relative;
	    padding: .04rem .08rem;
	}
	.mp-tagfilter-name {
	    display: block;
	    min-width: .26rem;
	    padding: 0 .22rem;
	    background: #fff;
	    color: #212121;
	    font-size: .26rem;
	    line-height: .56rem;
	    -webkit-border-radius: .04rem;
	    -moz-border-radius: .04rem;
	    border-radius: .04rem;
	}
	
	.mp-tagfilter-expand {
	    position: absolute;
	    z-index: 3;
	    top: 0;
	    right: 0;
	    width: .8rem;
	    height: .78rem;
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
		position:relative;
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
	    -webkit-transform: scale(.83);
	    -moz-transform: scale(.83);
	    -ms-transform: scale(.83);
	    -o-transform: scale(.83);
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
	.mp-list-taglist {
	    position: relative;
	    top: .06rem;
	    overflow: hidden;
	    max-height: .58rem;
	    margin-right: 1rem;
	    padding-top: .06rem;
	    line-height: .24rem;
	    font-size: 0;
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
</style>
