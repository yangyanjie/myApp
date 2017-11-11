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
                <img class="mp-topic-img" alt="金秋大促 " src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/banner.jpg" style="opacity:1"> 
            </div>
        </div>
       <city-outer />
       <anchor-outer />
    </div>
     
</template>
<script>
    import cityOuter from './CityOuter'
    import anchorOuter from './AnchorOuter'
    export default {
        components: {
            'city-outer': cityOuter,
            'anchor-outer': anchorOuter

        }
    }

</script>
<style scoped>
    .mp-topic {
        background:#7bdafe;

    }
	.mp-country-outer {
        height: .96rem;
    }
    .mp-flexbox {
        display: flex;
        width: 100%;
    }
    .mp-country-outer .mp-flexbox-layout {
        width:50%;
        background-color: #86b0ff;
        color: #fff;
        font-size: .32rem;
        line-height: .96rem;
        text-align: center;
    }
    .mp-country-outer .mp-country-actived {
        background-color: #4482f6;
        color: #fff;
    }
    .mp-banner {
        position: relative;
        height: 0;
        padding-bottom: 64.8%; 
        background-color: #f3cba1;
        overflow: hidden;
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
        top: 28%;
        width: 100%;
    }
</style>
