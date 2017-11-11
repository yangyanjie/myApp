<template>
    <transition name="headerShow">
        <div class="mp-header" v-show="headerShow" ref="headerRef">
            <router-link class="mp-header-back" to="/" id="msgoback">
                <span class="mp-iconfont-head iconfont icon-return"></span>
            </router-link>
            <h1 class="activity-header-title">颐和园</h1>
        </div>
    </transition>
</template>
<script>
    export default {
        props:["scrollValue"],
        data(){
            return {
                headerShow: false,
            }
        },
        watch:{
            scrollValue : function(value){
                if(value > 300 ){               
                    this.handleScroll();
                }else{
                    this.off();
                }
            }
        },
        methods: {
            handleScroll: function(){
                this.headerShow = true;
                this.$refs.headerRef.style.position = "fixed";
            },
            off:function () {
                this.headerShow = false;
                this.$refs.headerRef.style.position = "";
            }
        }
    }

</script>
<style scoped>
    .headerShow-enter-active{
        transition: opacity 1.5s
    }
    .headerShow-leave-active {
        transition: opacity 0s
    }
    .headerShow-enter, .headerShow-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0
    }
	.mp-header {
        background: #1ba9ba;
        border-bottom: #1b7a8b .02rem solid;
        width:100%;
        height: .88rem;
        z-index: 1000;
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
   
    


</style>
