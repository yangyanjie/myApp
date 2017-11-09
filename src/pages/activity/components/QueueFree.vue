<template>
    <div class="mp-modules-outer" :id="id"> 
        <div class="mp-modules-caption mp-img-container">
            <img class="mp-topic-img" alt="一元秒杀 " :src="queueInfo.topicUrl" style="opacity: 1;">
        </div>
        <div class="mp-modules-content"> 
            <div class="mp-grab-outer"> 
                <ul class="mp-grid-list clearfix">  
                    <li class="mp-grid-item" v-for="item in  queueInfo.queueList" :key="item.id">
                        <a class="mp-grid-link">
                            <div class="mp-grid-show mp-img-container mpg-defaultimg-small">
                                <img class="mp-topic-img" :alt="item.title" :src="item.imgUrl" style="opacity: 1;">
                                <em class="mp-grid-name">
                                    <span class="mp-ellipsis">{{item.title}}</span>
                                </em>
                            </div>
                            <div class="mp-grid-title">
                                <div class="mp-ellipsis2">{{item.desc}}</div>
                            </div>
                            <div class="mp-grid-price">
                                <strong class="mp-grid-sale"><span class="mp-price">¥<span class="mp-price-num">{{item.price}}</span></span></strong>
                            </div>
                            <div class="mp-grid-btn">立即抢购</div>
                        </a>
                    </li>
                </ul> 
            </div> 
        </div>
    </div> 
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        props: [
            'queueInfo',
            'id'
        ]
    }
</script>
<style scoped>
    .mp-modules-caption {
        padding-bottom: 22.6%;
    }
    .mp-img-container {
        overflow: hidden;
        width: 100%;
        height: 0;
    }
    .mp-topic-img {
        width: 100%;
    }
    .mp-modules-content {
        min-height: 2.36rem;
        background: #7bdafe;
        background-position: center 0;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .mp-grid-list {
        margin: 0 .12rem;
    }
    .mp-grid-link {
        display: block;
        margin: 0 .08rem;
        padding-bottom: .15rem;
        background: #fff;
    }
    .mp-grid-item {
        float: left;
        margin-bottom: .16rem;
        width: 50%;
    }
    .mpg-defaultimg-small {
        background: #cfcfcf url(//s.qunarzz.com/piao_topic/image/common/default/288x288.png) 0 bottom no-repeat;
        background-size: 100% auto;
    }
    .mp-img-container {
        overflow: hidden;
        width: 100%;
        height: 0;
        background: #7bdafe;
    }
    .mp-grid-show {
        position: relative;
        padding-bottom: 61.76%;
        background-color: #f0f0f0;
    }
    .mp-topic-img {
        vertical-align: bottom;
        width: 100%;
        opacity: 0;
        transition: all .5s;
    }
    .mp-grid-name {
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 0 .1rem;
        background-color: rgba(0,0,0,.5);
    }
    .mp-grid-name .mp-ellipsis{
        color:#fff;
    }
    .mp-grid-note {
        display: none;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 0;
        width: 100%;
        color: #fff;
        font-size: .24rem;
        line-height: .3rem;
        text-align: center;
        transform: translateY(-50%);
    }
    .mp-grid-title {
        margin: .12rem .15rem 0;
    }
    .mp-grid-title .mp-ellipsis2 {
        height: .72rem;
        color: #222;
        font-size: .28rem;
        line-height: .36rem;
    }
    .mp-ellipsis2 {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .mp-grid-price {
        overflow: hidden;
        height: .76rem;
        text-indent: .15rem;
    }
    .mp-grid-sale .mp-price {
        color: #ff5a00;
        font-size: .28rem;
    }
    .mp-grid-sale .mp-price-num {
        font-size: .4rem;
        line-height: .8rem;
    }
    .mp-grid-btn {
        margin: 0 .15rem;
        background: #ff5500;
        color: #fff;
        font-size: .32rem;
        line-height: .6rem;
        text-align: center;
        -webkit-border-radius: .06rem;
        -moz-border-radius: .06rem;
        -o-border-radius: .06rem;
        border-radius: .06rem;
    }
    
</style>
