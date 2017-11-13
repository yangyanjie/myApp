<template>
    <div class="mp-headfigure">
        <router-link to="detailswiper">
            <router-link class="mp-header-back mpg-iconfont" to="/">
                <span class="iconfont icon-return"></span>
            </router-link>
            <div class="mp-headfigure-wrap" id="imgcontainer">
                <img class="mp-headfigure-img" src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg" alt="颐和园">
            </div>
            <div class="mp-headfeagure-info">
                <div class="mp-headfeagure-title">颐和园(AAAAA景区)</div>
                <div class="mp-imgswipeicon">
                    <span class="iconfont icon-zhaopian"></span>
                    <em class="mp-imgswipeicon-number">11</em>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
  export default {
    
  }

</script>
<style scoped>
    .mp-headfigure {
        position: relative;
    }
    .mp-header-back {
        position: absolute;
        display: block;
        text-align: center;
        left: .1rem;
        top: .1rem;
        width: .72rem;
        height: .72rem;
        line-height: .72rem;
        border-radius: .36rem;
        background: #000;
        opacity: 0.5;
    }
    .icon-return {
        color: #fff;
    }
    .mp-headfigure-wrap {
        overflow: hidden;
        height: 0;
        width: 100%;
        padding-bottom: 55%;
    }
    .mp-headfigure-img {
        width: 100%;
        vertical-align: top;
    }
    .mp-headfeagure-info {
        position: absolute;
        right: .2rem;
        bottom: .26rem;
        left: .2rem;
        min-height: .4rem;
    }
    .mp-headfeagure-title {
        position: relative;
        z-index: 1;
        margin-right: 1.4rem;
        line-height: .4rem;
        color: #fff;
        font-size: .32rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.70);
    }
    .mp-imgswipeicon {
        position: absolute;
        right: 0;
        top: 0;
    }
    .mp-imgswipeicon {
        width: 1.2rem;
        height: .4rem;
        background: rgba(0,0,0,.5);
        border-radius: .2rem;
        font-size: .24rem;
        color: #fff;
        line-height: .4rem;
        text-align: center;
    }

</style>
