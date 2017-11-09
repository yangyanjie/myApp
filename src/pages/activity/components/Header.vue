<template>
  <div class="mp-header">
        <router-link class="mp-header-back" to="/" id="msgoback">
            <span class="mp-iconfont-head iconfont icon-return"></span>
        </router-link>
        <h1 class="activity-header-title">金秋大促</h1>
        <router-link class="mp-header-bar mp-header-logo" to="/">
            <span class="iconfont icon-jingdian"></span>
            <br/>首页
        </router-link>
    </div>
</template>
<script>
  export default {
    
  }

</script>
<style scoped>
	.mp-header {
        position: relative;
        background: #1ba9ba;
        border-bottom: #1b7a8b .02rem solid;
        text-align: center;
        height: .88rem;
    }
    .mp-iconfont-head {
        float: left;
        width: .88rem;
        height: .88rem;
        font-size: .36rem;
        text-align: center;
        line-height: .88rem;
        color:#fff;
    }
    .activity-header-title {
        display: inline-block;
        font-size: .32rem;
        line-height: .88rem;
        color: #fff;
    }
    .mp-header-logo {
        padding-top:.1rem; 
        float: right;
        width: .88rem;
        height: .78rem;
        color: #fff;
        text-align: center;
        

    }
    .icon-jingdian {
        display: inline-block;
        width:.88rem;
        text-align: center;
        line-height: .36rem;
        color:#fff;
    }


</style>
