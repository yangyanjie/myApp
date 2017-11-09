<template>
    <div class="mp-topic">
        <div class="clearfix">
        <div class="mp-country-outer">
                <ul class="mp-flexbox"> 
                    <li class="mp-flexbox-layout mp-country-actived">国内场</li> 
                    <li class="mp-flexbox-layout">海外场</li> 
                </ul> 
        </div>
        <div class="mp-banner mp-img-container"> 
                <img class="mp-topic-img" alt="金秋大促 " src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/banner_bg.png" style="opacity:1"> 
                <div class="mp-banner-animate">
                    <img class="mp-topic-img" alt="水稻" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/banner_animate.png" style="opacity:1">
                </div> 
                <div class="mp-banner-cover">
                    <img class="mp-topic-img" alt="金秋" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/banner_cover.png" style="opacity:1">
                </div> 
                <div class="mp-banner-girl">
                    <img class="mp-topic-img" alt="女孩" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/girl.gif" style="opacity:1">
                </div> 
            </div>
        </div>
       <city-outer />
    </div>
     
</template>
<script>
    import cityOuter from './CityOuter'
    export default {
        components: {
            'city-outer': cityOuter
        }
    }

</script>
<style scoped>
	.mp-country-outer {
        height: .96rem;
    }
    .mp-flexbox {
        display: flex;
        width: 100%;
    }
    .mp-country-actived {
        background-color: #fff661;
        color: #ef322b;
    }
    .mp-country-outer .mp-flexbox-layout {
        width:50%;
        background-color: #ff711a;
        color: #fff;
        font-size: .32rem;
        line-height: .96rem;
        text-align: center;
    }
    .mp-banner {
        position: relative;
        height: 0;
        padding-bottom: 64.8%; 
        background-color: #f3cba1;
    }
    .mp-topic-img {
        width: 100%;
        vertical-align: top;
    }
    .mp-banner-animate {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        animation: shake 5s linear infinite;
        transform-origin: 0 100%;
    }
    .mp-topic img {
        opacity: 0;
        transition: all .5s;
    }
    .mp-banner-cover {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
    }
    .mp-banner-girl {
        position: absolute;
        z-index: 3;
        right: -28%;
        top: 10%;
        width: 100%;
    }
</style>
