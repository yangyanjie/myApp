<template>
    <div class="mp-topic">
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
        <div class="mp-city-outer" mp-role="cityOuter"> 
            <div class="mp-city-container"> 
            <ul class="mp-city-list mp-flexbox" mp-role="cityWrap"><li class="mp-city-item mp-flexbox-layout mp-city-actived" mp-role="cityItem" data-hotorder="1" data-contentid="2449"> <span class="mp-city-inner">北京</span> </li><li class="mp-city-item mp-flexbox-layout" mp-role="cityItem" data-hotorder="<2>" data-contentid="2409"> <span class="mp-city-inner">成都</span> </li><li class="mp-city-item mp-flexbox-layout" mp-role="cityItem" data-hotorder="<7>" data-contentid="2416"> <span class="mp-city-inner">重庆</span> </li><li class="mp-city-item mp-flexbox-layout" mp-role="cityItem" data-hotorder="<4>" data-contentid="2443"> <span class="mp-city-inner">广州</span> </li></ul> 
            </div> 
            <div class="mp-city-expand" mp-role="cityMoreBtn"></div> 
        </div>
    </div>
</template>
<script>
  export default {
    
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
        padding-bottom: 32.4%; 
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
