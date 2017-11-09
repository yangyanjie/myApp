<template>
    <div class="mp-anchor-outer"> 
        <div class="mp-anchor-container" style="" ref="anchorList"> 
            <ul class="mp-anchor-list" ref="mpList"> 
                <li class="mp-anchor-item" style="font-weight:900">
                    <span>1元秒杀</span>
                </li> 
                <li class="mp-anchor-item">
                    <span>免排队</span>
                </li> 
                <li class="mp-anchor-item">
                    <span>人文古迹</span>
                </li> 
                <li class="mp-anchor-item">
                    <span>自然风光</span>
                </li> 
                <li class="mp-anchor-item">
                    <span>主题乐园</span>
                </li> 
                <li class="mp-anchor-item">
                    <span>一日游</span>
                </li> 
            </ul> 
        </div>
        <activity-desc/>
        <queue-free :queueInfo = "queueInfo" />
        <queue-free :queueInfo = "historicalSites"/>
        <queue-free :queueInfo = "natureSight"/>        
        <queue-free :queueInfo = "hotList" />
        <queue-free :queueInfo = "dayTripInfo"/>                 
    </div>
    
</template>
<script>
    import activityDesc from './ActivityDesc'
    import queueFree from './QueueFree'
    import {mapState} from 'vuex'
    export default {
        data() {
            return {    
              
            }
        },
        components: {
            "activity-desc": activityDesc,
            "queue-free": queueFree
        },
        computed:mapState({
            queueInfo: (state) => {
				return state.activity.queueFree;
            },
            hotList: (state) => {
				return state.activity.hotList;
            },
            historicalSites: (state) => {
				return state.activity.historicalSites;
            },
            natureSight: (state) => {
                return state.activity.natureSight;
            },
            dayTripInfo: (state) => {
                return state.activity.dayTripInfo;
            }
        }),
        mounted: function() {
            window.onscroll = this.handleScroll;
            this.top = document.getElementsByClassName("mp-modules-outer");
        },
        methods:{
            handleScroll:function() {
                var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
                if(this.$refs.anchorList.offsetTop < scrolltop) {
                    this.$refs.anchorList.style.position = "fixed";
                    this.$refs.anchorList.style.top="0"
                }else{
                    this.$refs.anchorList.style.position = "";
                    this.$refs.anchorList.style.top=""
                }
                for(var i = 0; i< this.top.length; i++) {
                    if(this.top[i].offsetTop < scrolltop && this.top[i+1].offsetTop) {
                        for(var j = 0 ; j < 6 ;j++) {
                            this.$refs.mpList.children[j].style.fontWeight=""
                        }
                        
                       this.$refs.mpList.children[i+1].style.fontWeight="900";
                    }
                }
                

            }
        }
    }

</script>
<style scoped>
    .mp-anchor-outer {
        z-index: 1000;
        margin-top: .1rem;
        height: 1.22rem;
    }
    .mp-anchor-container {
        overflow: hidden;
        overflow-x: auto;
        z-index: 1000;
        width: 100%;
        height: .9rem;
        padding: .16rem 0;
        background: #7bdafe;
    }
    .mp-anchor-list {
        font-size: 0;
        line-height: 0;
        text-align: center;
        white-space: nowrap;
    }
    .mp-anchor-item:nth-child(odd) {
        background-image: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/anchor_even.png);
    }
    .mp-anchor-item {
        display: inline-block;
        position: relative;
        margin: 0 .12rem;
        padding-top: .12rem;
        width: 1.7rem;
        height: .78rem;
        background: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/anchor_odd.png) center bottom/contain no-repeat;
        color: #05857e;
        font-size: .34rem;
        line-height: .78rem;
        text-align: center;
    }

</style>
