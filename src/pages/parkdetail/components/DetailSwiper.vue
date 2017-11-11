<template>
  <swiper :options="swiperOption" class="swiper-container">
    <!-- slides --> 
    <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <div class="swiper-img">
            <img class="item-img" :src="item.imgUrL" alt="">
        </div>
        <div class="park-swiper-pagination">{{item.id}}/{{swiperInfo.length}}</div>
    </swiper-slide>
    
    <!-- Optional controls -->
    
  </swiper>
</template>

<script>
import axios from "axios";
    export default {
        data() {
            return {
                swiperOption: {
                direction: 'horizontal',
                autoHeight: true,
                pagination: '.swiper-pagination',
                observeParents: true
                },
                swiperInfo:[]
            }
        },
        mounted() {
             this.getParkData();
        },
        methods:{
            getParkData(){
                axios.get("/static/park.json")
                    .then((res) => {
                        this.swiperInfo = res.data.data.swiperInfo;
                        console.log(res.data.data.swiperInfo);
                })
            }
        }
    }

</script>
<style>
    html, body {
        height: 100%;
        background: #000;
    }
    .swiper-container {
        position: fixed;
        top:20%;
       
        width: 100%;
    }
    .swiper-img {
        width:100%;
    }
    .item-img {
        width:100%;
    }
    .park-swiper-pagination {
        font-size: .2rem;
        color: #fff;
        line-height: 2rem;
        height: 2rem;
        text-align: center;
    }
</style>
