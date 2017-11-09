<template>
    <div class="mp-anchor-outer"> 
        <div class="mp-anchor-container" style=""> 
            <ul class="mp-anchor-list"> 
                <li class="mp-anchor-item mp-anchor-actived">
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
            <div>{{hotList}}</div>
        </div>
        <activity-desc />
        <queue-free :queueInfo = "queueInfo" />
        <queue-free :queueInfo = "historicalSites" />
        <queue-free :queueInfo = "natureSight" />        
        <queue-free :queueInfo = "hotList" />
        <queue-free :queueInfo = "dayTripInfo" />                        

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
        })
    }

</script>
<style scoped>
    .mp-anchor-outer {
        margin-top: .1rem;
        height: 1.22rem;
    }
    .mp-anchor-container {
        overflow: hidden;
        overflow-x: auto;
        width: 100%;
        height: .9rem;
        padding: .16rem 0;
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
