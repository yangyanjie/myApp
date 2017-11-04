<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <div class="slide-container">
        <img class="slide-img" src="../images/index-img1.jpg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-container">
        <img class="slide-img" src="../images/index-img2.jpg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-container">
        <img class="slide-img" src="../images/index-img3.jpg" alt="">
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
  export default {
    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true,
        }
      }
    }
  }
</script>
<style>
  .slide-container {
    height: 2rem;
  }
  .slide-img {
    width: 100%;
  }
</style>

