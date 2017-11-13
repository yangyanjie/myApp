<template>
	<div class="mpitem-ticket-container">
        <div class="mp-promote">
            <h3 class="mp-ticket-type mp-border-bottom">
                <i class="iconfont icon-tuijian"></i>
                去哪儿推荐
            </h3>
            <div v-for="item in recommendInfo" :key="item.id" class="recommend-container">
                <div class="mp-ticket-item mp-flexbox mp-border-top">
                    <div class="mp-ticket-main mp-flexbox-layout">
                        <div>
                            <h6 class="mp-ticket-onedaytitle mp-ellipsis2">
                                {{item.title}}
                            </h6>
                            <ul class="mp-ticket-light">
                                <li class="mp-ticket-tag mp-ticket-redpacket">
                                    赠券
                                    <span class="mp-price">
                                        ¥
                                        <em class="mp-price-num">3.0</em>
                                    </span>
                                </li>
                            </ul>
                            <div class="mp-ticket-onedaymore">
                                <span class="mp-ticket-desctag">
                                    <span class="iconfont icon-shijian"></span>
                                    可订明日
                                </span>
                                <span class="mp-ticket-desctag">
                                    <span class="iconfont icon-duihao"></span>
                                    无购物
                                </span>
                                <span class="mp-ticket-desctag">
                                    <span class="iconfont icon-duihao"></span>
                                    无自费
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mp-ticket-side mp-flexbox-layout mp-border-left">
                    <a href="#" class="mp-ticket-link" title="颐和园门票">
                        <strong class="mp-ticket-sale mp-price">¥<em class="mp-price-num">{{item.price}}</em>
                            <span class="mp-ticket-numword">起</span>
                        </strong><em mp-role="downloadAppBtn" class="mp-ticket-btn  mp-promote-ablebtn">查看</em>
                    </a>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                recommendInfo:[]
            }
        },
        mounted() {
            this.getRecommendData();
        },
        methods:{
            getRecommendData(){
                axios.get('./static/recommend.json')
	           	    .then((res) => { 
                           this.recommendInfo = res.data.data.recommendInfo;
                    })
            }
        }
        
    }
</script>
<style scoped>
    .mp-promote {
        position: relative;
        background: #fff;
        margin-bottom: .2rem;
    }
    .mp-ticket-type {
        overflow: hidden;
        position: relative;
        z-index: 4;
        margin-bottom: -.02rem;
        padding: 0 .2rem;
        height: .88rem;
        background: #fff;
        color: #333;
        font-size: .32rem;
        line-height: .88rem;
        border-bottom: 2px solid #f5f5ff;
    }
    .mp-promote .mp-ticket-item {
        padding: .2rem 0 .24rem .2rem;
        display: inline-block;
        width: 70%;
    }
    .mp-promote .mp-ticket-title, .mp-promote .mp-ticket-onedaytitle {
        margin-right: .1rem;
        line-height: .52rem;
        padding: 0;
        font-size: .3rem;
    }
    .recommend-container {
        border-bottom: 1px solid #f5f5f5;
    }
    
    div {
        display: block;
    }
    .mp-ticket-onedayitem {
        display: inline-block;
        overflow: hidden;
        line-height: .34rem;
        max-width: 2.5rem;
        padding: 0 .2rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #666;
    }
    .mp-promote .mp-ticket-light {
        padding: .04rem 0 .08rem 0;
    }
    .mp-ticket-light {
        overflow: hidden;
    }
    .mp-ticket-tag {
        overflow: hidden;
        float: left;
        margin: .04rem .06rem .04rem 0;
        padding: 0 .04rem;
        border: .02rem solid #ff6b62;
        color: #ff6b62;
        font-size: .24rem;
        white-space: nowrap;
        border-radius: 2px;
    }
    .mp-ticket-onedaymore {
        margin: .08rem 0;
    }
    .mp-ticket-desctag {
        display: inline-block;
        color: #616161;
        font-size: .24rem;
        line-height: .32rem;
        white-space: nowrap;
    }
    .mp-ticket-side {
       display: inline-block;
       width:20%;
       height: 100%;
       border-left: 2px solid #f5f5f5;
       
    }
    .mp-ticket-link {
        box-sizing: border-box;
        display: block;
        width: 100%;
        padding-left: .2rem;
    }
    .mp-ticket-sale, .mp-ticket-provide {
        color: #ff9800;
    }
    .mp-ticket-sale, .mp-ticket-cost, .mp-ticket-btn, .mp-ticket-provide {
        display: block;
        overflow: hidden;
        height: .66rem;
        font-size: .24rem;
        line-height: .66rem;
        text-align: center;
    }
    .mp-ticket-btn {
        margin-bottom: .5rem;
        height: .6rem;
        background: #ff9800;
        color: #fff;
        font-size: .28rem;
        line-height: .6rem;
        border-radius: .06rem;
    }
</style>
