<template>
	<div class="mp-commentsinfo-con">
        <span class="mp-comment-icon"></span>
        <span class="mpf-starlevel">
            <i class="iconfont icon-xing"></i>
            <i class="iconfont icon-xing"></i>
            <i class="iconfont icon-xing"></i>
            <i class="iconfont icon-xing"></i>
            <i class="iconfont icon-xing"></i>
        </span>
        <span class="mp-comments-tagscore">4.9分</span>
        <a class="mp-comments-total" href="#">
            <span class="mp-comments-totalnum">21350评论&nbsp
                <span class="iconfont icon-arrow-right"></span>
            </span>
        </a>
    </div>
</template>
<script>
   
    export default {
        
    }
</script>
<style scoped>
    .mp-commentsinfo-con {
        margin-bottom: .2rem;
        background-color: #fff;
        height: .8rem;
        line-height: .8rem;
    }
    .mp-comment-icon {
        position: relative;
        top: .08rem;
        display: inline-block;
        width: .36rem;
        height: .36rem;
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.35rem no-repeat;
        margin-left: .2rem;
        margin-right: .1rem;
        background-size: .4rem 3rem;
    }
    .mp-commentsinfo-con .mpf-starlevel {
        display: inline;
        top: .04rem;
        
    }
    .mpf-starlevel {
        display: inline-block;
        position: relative;
        width: 1.4rem;
        height: .28rem;
    }
    .icon-xing {
        
        color:#00bcd4;
    }
    .mp-commentsinfo-con{
        margin-bottom: .2rem;
        color:#00bcd4;
        height: .8rem;
        line-height: .8rem;
    }
    .mp-comments-total {
        float: right;
        display: block;
        padding-right: .2rem;
        margin-bottom: .2rem;
    }

</style>
