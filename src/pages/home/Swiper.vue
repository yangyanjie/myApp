<template>
  <div class="home-swiper">
    <swiper :options="swiperOption">
      <swiper-slide  v-for="item in swiperInfo" :key="item.id">
        <div class="slide-container">
          <img class="slide-img" :src="item.imgUrl" alt="">
        </div>
      </swiper-slide>
      <div class="home-swiper-pagination"  slot="pagination"></div>
    </swiper> 
  </div>
</template>
<script>

  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  export default {
    props:['swiperInfo'],
    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.home-swiper-pagination',
          bulletClass : 'home-swiper-bullet',
          bulletActiveClass: 'home-swiper-bullet-active',
          observeParents: true,
        }
      }
    },
    components:{
      'swiper': swiper,
      'swiper-slide': swiperSlide
    }
  }
</script>
<style>
  .home-swiper .home-swiper-pagination {
    position: absolute;
    left: 50%;
    margin-left: -.6rem;
    z-index: 1000;
    width: 1.2rem;
    height: .2rem;
   
  }
 .home-swiper-bullet {
    float: left;
    width:.2rem;
    height: .2rem;
    background: #ccc;
    opacity: .5;
    border-radius: .1rem;
    margin: .1rem;
 }
  .home-swiper-bullet-active {
    opacity: .9;
    background: #ccc;
  }
</style>

<style scoped>
  .slide-container {
    height: 2rem;
  }
  .slide-img {
    width: 100%;
  }
</style>

