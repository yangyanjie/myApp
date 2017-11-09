<template>
	<div class="lazy-load" id="hot-sight">
		<h2 class="mp-modtitle">热销推荐</h2>
		<div class="mp-hot-con">
			<ul mp-role="hotList">
				<li class="mp-hot-prod mp-border-bottom" v-for="item in hotListInfo" :key="item.id">
					<router-link :to="item.link">
						<div class="mp-hotlist-img image-ready">
							<img :src="item.imgUrl" :alt="item.title">
						</div>
						<div class="mp-hotlist-infos">
							<div class="mp-hotlist-title">
								{{item.title}}
							</div>
							<div class="mp-hotlist-desc">
								{{item.desc}}
							</div>
						</div>
						<div class="mp-price mp-hotlist-price">
							¥
							<em class="mp-price-num">
								{{item.price}}
							</em>
							<span class="mp-price-text">
								起
							</span>
						</div>
					</router-link>
				</li>
				
			</ul>
			<div class="mp-modmore">
				<a title="去哪儿门票" href="#">
					查看所有产品
				</a>
		    </div>
	    </div>
	</div>
</template>

<script>
	 export default {
		props:['hotListInfo']
	 }
</script>

<style scoped>
    .hot-sight {
        background: #f5f5f5;
    }
	.mp-modtitle {
        height: .8rem;
        padding-left: .26rem;
        line-height: .8rem;
        color: #212121;
        background: #f5f5f5;
    }
	.mp-hot-prod {
        position: relative;
        border-bottom: 1px solid #f5f5f5;
        overflow: hidden;
        height: 1.4rem;
        padding: .24rem;
	}
    .image-ready {
        background: none !important;
    }
	.mp-hotlist-img {
        position: absolute;
        top: .24rem;
        left: .24rem;
        background-size: contain;
        width: 1.4rem;
        height: 1.4rem;
	}
	.mp-hotlist-img img {
        vertical-align: top;
        transition: opacity 400ms;
        width: 1.4rem;
        height: 1.4rem;
    }
    .mp-hotlist-infos {
        margin-left: 1.6rem;
    }
    .mp-hotlist-title {
        overflow: hidden;
        margin-top: .04rem;
        margin-bottom: .1rem;
        color: #212121;
        font-size: .3rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mp-hotlist-desc {
        overflow: hidden;
        margin-bottom: .1rem;
        height: .4rem;
        line-height: .4rem;
        color: #9e9e9e;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mp-hotlist-price {
        margin-left: 1.6rem;
        color: #ff8300;
    }
    .mp-price {
        font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
    }
    .mp-hotlist-price .mp-price-num {
        font-size: .36rem;
        padding: 0 .04rem;
    }
    .mp-price-text {
        color: #9e9e9e;
        font-size: .24rem;
    }
    .mp-modmore {
        height: .88rem;
        text-align: center;
        line-height: .88rem;
    }
</style>