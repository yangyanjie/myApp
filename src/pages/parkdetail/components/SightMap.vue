<template>
    <div class="mp-header" style="position: fixed; width: 100%; top: 0px; left: 0px; opacity: 1;">
        <router-link class="mp-header-back" to="/" id="msgoback">
            <span class="mp-iconfont-head iconfont icon-return"></span>
        </router-link>
        <h1 class="activity-header-title">景点地图</h1>
        <div id="container"></div>
        <div id= "bottom">北京市海淀区新建宫门路19号</div> 
    </div>
</template>

<script>
    export default {
        mounted() {

               var map = new AMap.Map('container', {
                    resizeEnable: true,
                    center: [116.26, 39.99],
                    zoom: 13
                });

        }
    }

</script>
<style scoped>
    .mp-header {
        background: #1ba9ba;
        border-bottom: #1b7a8b .02rem solid;
        height: .88rem;
    }
    .mp-iconfont-head {
        position: absolute;
        width: .88rem;
        height: .88rem;
        font-size: .36rem;
        text-align: center;
        line-height: .88rem;
        color:#fff;
    }
    .activity-header-title {
        display: block;
        font-size: .32rem;
        line-height: .88rem;
        text-align: center;
        color: #fff;
    }
    #container {
        height: 15rem;
    }
    #bottom {
        position: fixed;
        bottom: 0;
        width:100%;
        height: .88rem;
        background: #fff;
        z-index: 1000;
        font-size: .3rem;
        text-align: center;
        color:#000;
        line-height: .88rem;
        
    }
</style>
