<template>
	<div class="mp-baseinfo">
        <div class="mp-baseinfo-address" id="card-adress">
            <router-link to="sightmap">
                <p class="mp-baseinfo-address-txt">
                    <span class="iconfont icon-dingwei1"></span>
                    北京市海淀区新建宫门路19号
                    <span class=" iconfont icon-arrow-right"></span>
                </p>
            </router-link>
        </div>
        <a class="mp-baseinfo-intro mp-border-top" href="//touch.piao.qunar.com/touch/sight/introduction.htm?sightId=4268080051">
            <p class="mp-baseinfo-intro-txt">
                <span class="iconfont icon-zhaopian"></span>
                查看景点简介及开放时间
                <span class="iconfont icon-arrow-right"></span>
            </p>
        </a>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        }
    }
</script>
<style>
    .mp-baseinfo {
        position: relative;
        top: -.1rem;
        padding: .1rem .1rem 0 .2rem;
        margin-bottom: .1rem;
        background: #fff;
        border-radius: .1rem .1rem 0 0;
    }
    .mp-baseinfo-address, .mp-baseinfo-intro {
        display: block;
        position: relative;
        height: .88rem;
        color: #212121;
        line-height: .88rem;
    }
    .mp-baseinfo-address-txt, .mp-baseinfo-intro-txt {
        overflow: hidden;
        padding-right: .1rem;
        font-size: .30rem;
        color:#212121;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .icon-arrow-right{
        float: right;
        color: #9e9e9e;
    }
</style>
